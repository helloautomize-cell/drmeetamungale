import { NextRequest, NextResponse } from "next/server";
import { sendBookingEmail, type BookingFields } from "@/lib/booking-mailer";
import { doctors } from "@/content/doctors";

// ─── /api/booking — appointment-request endpoint ────────────────────────────
// Server-side source of truth: the client form is convenience only. Patient
// details are never logged — failures log a generic code only.

export const runtime = "nodejs";

const DOCTOR_LABELS: Record<string, string> = Object.fromEntries(
  doctors.map((d) => [d.slug, d.name])
);

// Best-effort per-IP rate limit: 5 requests per 10 minutes. In-memory only —
// resets on redeploy and is per serverless instance, so it deters casual
// floods rather than acting as hard protection.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now > rec.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_PER_WINDOW;
}

function str(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

// "today" in IST — the hospital's timezone — for the not-in-the-past check.
function todayIST(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
}

function validate(form: FormData): { fields?: BookingFields; errors?: Record<string, string> } {
  const errors: Record<string, string> = {};

  const name = str(form.get("name"));
  if (name.length < 2 || name.length > 80) errors["name"] = "Please enter your full name.";

  const mobileRaw = str(form.get("mobile")).replace(/[\s-]/g, "").replace(/^\+91/, "").replace(/^91(?=\d{10}$)/, "");
  if (!/^[6-9]\d{9}$/.test(mobileRaw)) errors["mobile"] = "Please enter a valid 10-digit mobile number.";

  const email = str(form.get("email"));
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors["email"] = "Please enter a valid email address.";

  const ageRaw = str(form.get("age"));
  let age = "";
  if (ageRaw) {
    const n = Number(ageRaw);
    if (!Number.isInteger(n) || n < 0 || n > 120) errors["age"] = "Please enter a valid age.";
    else age = String(n);
  }

  const doctor = str(form.get("doctor"));
  if (doctor && doctor !== "no-preference" && !DOCTOR_LABELS[doctor])
    errors["doctor"] = "Please choose a listed doctor.";

  const message = str(form.get("message"));
  if (message.length > 1000) errors["message"] = "Please keep the message under 1000 characters.";

  const preferredDate = str(form.get("preferredDate"));
  if (preferredDate) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(preferredDate) || preferredDate < todayIST())
      errors["preferredDate"] = "Please choose today or a later date.";
    else if (new Date(preferredDate + "T12:00:00+05:30").getDay() === 0)
      errors["preferredDate"] = "The hospital is closed on Sundays — please pick another day.";
  }

  const preferredTime = str(form.get("preferredTime"));
  if (preferredTime && preferredTime !== "Morning" && preferredTime !== "Evening")
    errors["preferredTime"] = "Please choose Morning or Evening.";

  if (str(form.get("consent")) !== "on" && str(form.get("consent")) !== "true")
    errors["consent"] = "Please agree to be contacted about this appointment request.";

  if (Object.keys(errors).length) return { errors };

  const doctorLabel =
    doctor === "no-preference" || doctor === "" ? "Any doctor" : DOCTOR_LABELS[doctor]!;

  return {
    fields: {
      name,
      mobile: mobileRaw,
      email,
      age,
      doctorLabel,
      preferredDate,
      preferredTime,
      message,
      updatesOptIn: str(form.get("updates")) === "on" || str(form.get("updates")) === "true",
      page: str(form.get("page")).slice(0, 200) || "/contact-us/",
    },
  };
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, errors: { form: "Too many requests — please call the hospital to book." } },
      { status: 429 }
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields — pretend success, send nothing.
  if (str(form.get("website"))) return NextResponse.json({ ok: true });

  // Time-to-submit: real users need more than 3s to fill this form.
  const started = Number(str(form.get("formStartedAt")));
  if (!started || Date.now() - started < 3000) return NextResponse.json({ ok: true });

  const { fields, errors } = validate(form);
  if (!fields) return NextResponse.json({ ok: false, errors }, { status: 400 });

  if (process.env["BOOKING_DRY_RUN"] === "true") {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendBookingEmail(fields);
    return NextResponse.json({ ok: true });
  } catch {
    console.error("booking_send_failed"); // generic code only — never the payload
    return NextResponse.json(
      { ok: false, errors: { form: "send_failed" } },
      { status: 503 }
    );
  }
}
