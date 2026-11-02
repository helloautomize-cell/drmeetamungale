"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CONSENT_LABEL,
  CONSENT_UPDATES_LABEL,
  SUCCESS_TITLE,
  SUCCESS_BODY,
  contactDoctors,
  contactPhones,
  telOf,
} from "@/content/contact";
import { trackEvent } from "@/components/AnalyticsEvents";

// ─── ContactBookingForm ────────────────────────────────────────────────────
// Single-page consultation request. Posts to /api/booking — the server
// re-validates everything; success shows only when the email was sent.
// ?doctor=<slug> preselects the doctor (bookingHref links carry it).
// Consent split: required appointment-contact checkbox + optional updates
// opt-in, unchecked by default.
const fieldCls =
  "w-full bg-surface-canvas text-on-surface font-body-md text-body-md rounded-lg px-4 py-3 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-on-surface-variant";
const labelCls =
  "block text-[13px] font-bold uppercase tracking-[0.08em] text-on-surface mb-2";
const errCls = "mt-1.5 text-[13px] font-semibold text-primary-fixed";

const VALID_DOCTORS = new Set([...contactDoctors.map((d) => d.value), "no-preference"]);

// Local "today" for the date input's min — the server re-checks in IST.
function todayLocal(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function BookingFormInner() {
  const params = useSearchParams();
  const doctorParam = params.get("doctor") ?? "";
  const initialDoctor = VALID_DOCTORS.has(doctorParam) ? doctorParam : "";

  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [formError, setFormError] = React.useState("");
  const startedAt = React.useRef(0);
  React.useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  if (sent) {
    return (
      <div tabIndex={-1} className="py-4" aria-live="polite">
        <p className="font-display-hero text-on-surface tracking-tight text-[28px] lg:text-[32px]">
          {SUCCESS_TITLE}
        </p>
        <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {SUCCESS_BODY}
        </p>
        <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
          If it is urgent, please call{" "}
          <a href={telOf(contactPhones.main)} className="font-bold text-on-surface underline decoration-primary-fixed/60 underline-offset-4">
            {contactPhones.main}
          </a>
          .
        </p>
      </div>
    );
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const mobile = String(data.get("mobile") ?? "").replace(/[\s-]/g, "");
    const email = String(data.get("email") ?? "").trim();
    const doctor = String(data.get("doctor") ?? "");
    const preferredDate = String(data.get("preferredDate") ?? "");
    if (name.length < 2) next["name"] = "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(mobile))
      next["mobile"] = "Please enter a valid 10-digit mobile number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next["email"] = "Please enter a valid email address.";
    if (!doctor) next["doctor"] = "Please choose a doctor or no preference.";
    if (preferredDate) {
      if (preferredDate < todayLocal())
        next["preferredDate"] = "Please choose today or a later date.";
      else if (new Date(preferredDate + "T12:00:00").getDay() === 0)
        next["preferredDate"] = "The hospital is closed on Sundays — please pick another day.";
    }
    if (data.get("consent") !== "on")
      next["consent"] = "Please agree to be contacted about this appointment request.";
    setErrors(next);
    setFormError("");
    if (Object.keys(next).length) {
      const first = document.querySelector('[data-error="true"]');
      if (first instanceof HTMLElement) first.focus();
      return;
    }

    data.set("formStartedAt", String(startedAt.current || Date.now()));
    data.set("page", window.location.pathname + window.location.search);
    setSending(true);
    try {
      const res = await fetch("/api/booking", { method: "POST", body: data });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        errors?: Record<string, string>;
      };
      if (res.ok && json.ok) {
        // Conversion fires only on a confirmed 2xx — never on click,
        // validation failure or send failure. No form data is sent.
        trackEvent("appointment_submit", {
          form_name: "appointment_form",
          page_path: window.location.pathname,
        });
        setSent(true);
        return;
      }
      if (json.errors) {
        const { form: fe, ...fieldErrs } = json.errors;
        setErrors(fieldErrs);
        setFormError(
          fe === "send_failed" || !fe
            ? "We could not send your request."
            : fe
        );
      } else {
        setFormError("We could not send your request.");
      }
    } catch {
      setFormError("We could not send your request.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Honeypot — invisible to people, bots fill it and get a fake success. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 overflow-hidden">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* ── Step 01 · Your details ── */}
      <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
        Step 01 — Your details
      </p>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelCls}>Full name</label>
          <input
            id="cf-name" name="name" type="text" autoComplete="name" required
            placeholder="Rahul Sharma" className={fieldCls}
            aria-invalid={Boolean(errors["name"])} aria-describedby={errors["name"] ? "cf-name-err" : undefined}
            data-error={Boolean(errors["name"])}
          />
          {errors["name"] && <p id="cf-name-err" role="alert" className={errCls}>{errors["name"]}</p>}
        </div>
        <div>
          <label htmlFor="cf-mobile" className={labelCls}>Mobile number</label>
          <div className="flex">
            <span aria-hidden="true" className="inline-flex items-center px-4 rounded-l-lg bg-surface-container text-on-surface-variant font-semibold text-[15px]">+91</span>
            <input
              id="cf-mobile" name="mobile" type="tel" autoComplete="tel" required
              inputMode="numeric" placeholder="98XXXXXXXX"
              className={fieldCls + " rounded-l-none"}
              aria-invalid={Boolean(errors["mobile"])} aria-describedby={errors["mobile"] ? "cf-mobile-err" : undefined}
              data-error={Boolean(errors["mobile"])}
            />
          </div>
          {errors["mobile"] && <p id="cf-mobile-err" role="alert" className={errCls}>{errors["mobile"]}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-email" className={labelCls}>Email <span className="font-normal normal-case tracking-normal text-on-surface-variant">(optional)</span></label>
          <input
            id="cf-email" name="email" type="email" autoComplete="email"
            placeholder="you@example.com" className={fieldCls}
            aria-invalid={Boolean(errors["email"])} aria-describedby={errors["email"] ? "cf-email-err" : undefined}
          />
          {errors["email"] && <p id="cf-email-err" role="alert" className={errCls}>{errors["email"]}</p>}
        </div>
      </div>

      {/* ── Step 02 · Your consultation ── */}
      <p className="mt-10 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
        Step 02 — Your consultation
      </p>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-doctor" className={labelCls}>Select doctor</label>
          <select
            id="cf-doctor" name="doctor" required defaultValue={initialDoctor}
            className={fieldCls + " cursor-pointer"}
            aria-invalid={Boolean(errors["doctor"])} aria-describedby={errors["doctor"] ? "cf-doctor-err" : undefined}
            data-error={Boolean(errors["doctor"])}
          >
            <option value="" disabled>Choose a doctor</option>
            {contactDoctors.map((d) => (
              <option key={d.value} value={d.value}>{d.name}</option>
            ))}
            <option value="no-preference">No preference</option>
          </select>
          {errors["doctor"] && <p id="cf-doctor-err" role="alert" className={errCls}>{errors["doctor"]}</p>}
        </div>
        <div>
          <label htmlFor="cf-age" className={labelCls}>Age <span className="font-normal normal-case tracking-normal text-on-surface-variant">(optional)</span></label>
          <input
            id="cf-age" name="age" type="number" min={0} max={120}
            placeholder="Years" className={fieldCls}
            aria-invalid={Boolean(errors["age"])} aria-describedby={errors["age"] ? "cf-age-err" : undefined}
          />
          {errors["age"] && <p id="cf-age-err" role="alert" className={errCls}>{errors["age"]}</p>}
        </div>
        {/* TODO(doctor): confirm slot times and whether to show hours. */}
        <div>
          <label htmlFor="cf-date" className={labelCls}>Preferred date <span className="font-normal normal-case tracking-normal text-on-surface-variant">(optional)</span></label>
          <input
            id="cf-date" name="preferredDate" type="date" min={todayLocal()}
            className={fieldCls + " cursor-pointer"}
            aria-invalid={Boolean(errors["preferredDate"])} aria-describedby={errors["preferredDate"] ? "cf-date-err" : undefined}
          />
          {errors["preferredDate"] && <p id="cf-date-err" role="alert" className={errCls}>{errors["preferredDate"]}</p>}
        </div>
        <div>
          <label htmlFor="cf-time" className={labelCls}>Preferred time <span className="font-normal normal-case tracking-normal text-on-surface-variant">(optional)</span></label>
          <select
            id="cf-time" name="preferredTime" defaultValue=""
            className={fieldCls + " cursor-pointer"}
            aria-invalid={Boolean(errors["preferredTime"])} aria-describedby={errors["preferredTime"] ? "cf-time-err" : undefined}
          >
            <option value="">No preference</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
          </select>
          {errors["preferredTime"] && <p id="cf-time-err" role="alert" className={errCls}>{errors["preferredTime"]}</p>}
        </div>
      </div>

      {/* ── Step 03 · Message ── */}
      <p className="mt-10 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
        Step 03 — Anything you&rsquo;d like us to know?
      </p>
      <div className="mt-5">
        <label htmlFor="cf-message" className={labelCls}>Message <span className="font-normal normal-case tracking-normal text-on-surface-variant">(optional)</span></label>
        <textarea
          id="cf-message" name="message" rows={4} maxLength={1000}
          placeholder="Preferred day or general query. Please do not include medical details or reports."
          className={fieldCls + " min-h-28"}
          aria-invalid={Boolean(errors["message"])} aria-describedby={errors["message"] ? "cf-message-err" : undefined}
        />
        {errors["message"] && <p id="cf-message-err" role="alert" className={errCls}>{errors["message"]}</p>}
      </div>

      {/* ── Consent + privacy ── */}
      <div className="mt-6 flex items-start gap-3">
        <input
          id="cf-consent" name="consent" type="checkbox"
          className="mt-1 w-[18px] h-[18px] accent-primary shrink-0"
          aria-invalid={Boolean(errors["consent"])} aria-describedby={errors["consent"] ? "cf-consent-err" : undefined}
        />
        <label htmlFor="cf-consent" className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          {CONSENT_LABEL}
        </label>
      </div>
      {errors["consent"] && <p id="cf-consent-err" role="alert" className={errCls}>{errors["consent"]}</p>}
      <div className="mt-4 flex items-start gap-3">
        <input id="cf-updates" name="updates" type="checkbox" className="mt-1 w-[18px] h-[18px] accent-primary shrink-0" />
        <label htmlFor="cf-updates" className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          {CONSENT_UPDATES_LABEL} <span className="text-on-surface-variant">(optional)</span>
        </label>
      </div>
      <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        Your details are used only to arrange your appointment. See our{" "}
        <Link href="/privacy-policy/" className="underline decoration-primary-fixed/60 underline-offset-2 hover:text-on-surface transition-colors">
          Privacy Policy
        </Link>
        .
      </p>

      <div aria-live="polite">
        {formError && (
          <p role="alert" className="mt-4 font-body-sm text-body-sm font-semibold text-primary-fixed">
            {formError}{" "}
            <a href={telOf(contactPhones.main)} className="underline underline-offset-2">
              Please call {contactPhones.main} to book.
            </a>
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary text-on-primary font-semibold text-[16px] px-8 py-3.5 rounded-full hover:bg-primary-fixed transition-colors min-h-[52px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? "Sending…" : "Request a consultation"}
        {!sending && <span aria-hidden="true">&rarr;</span>}
      </button>
    </form>
  );
}

// useSearchParams needs a Suspense boundary under static prerendering.
export function ContactBookingForm() {
  return (
    <Suspense fallback={<div className="py-4 font-body-md text-body-md text-on-surface-variant">Loading the form…</div>}>
      <BookingFormInner />
    </Suspense>
  );
}

// ─── CopyAddressButton ─────────────────────────────────────────────────────
export function CopyAddressButton({ address }: { address: string }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard?.writeText(address).catch(() => undefined);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      }}
      aria-live="polite"
      className="group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
    >
      <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
        {copied ? "Address copied" : "Copy address"}
      </span>
      <span aria-hidden="true" className="text-primary-fixed">{copied ? "✓" : "⧉"}</span>
    </button>
  );
}
