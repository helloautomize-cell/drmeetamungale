import nodemailer, { type Transporter } from "nodemailer";
import { siteConfig } from "@/content/site";

// ─── Booking mailer — the ONLY module that sends booking email ─────────────
// Swappable later for a CRM integration: app/api/booking/route.ts calls
// sendBookingEmail() and nothing else. Uses Gmail SMTP via an App Password
// (see README "Booking email setup"). Secrets come only from env vars.

export interface BookingFields {
  name: string;
  mobile: string;
  email: string; // may be ""
  age: string; // may be ""
  doctorLabel: string; // display name or "Any doctor"
  preferredDate: string; // may be ""
  preferredTime: string; // may be ""
  message: string;
  updatesOptIn: boolean;
  page: string; // page the form was submitted from
}

let transporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  const user = process.env["GMAIL_USER"];
  const pass = process.env["GMAIL_APP_PASSWORD"];
  if (!user || !pass) return null;
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });
  }
  return transporter;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendBookingEmail(f: BookingFields): Promise<void> {
  const transport = getTransporter();
  if (!transport) throw new Error("booking_mailer_unconfigured");

  const to = process.env["BOOKING_TO_EMAIL"] || siteConfig.email;
  const safeName = f.name.replace(/[\r\n]+/g, " ").slice(0, 120);
  const subject = `New appointment request: ${safeName} (${f.doctorLabel})`;
  const receivedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const rows: [string, string][] = [
    ["Name", f.name],
    ["Mobile", "+91 " + f.mobile],
    ["Email", f.email || "—"],
    ["Age", f.age || "—"],
    ["Preferred doctor", f.doctorLabel],
    ["Preferred date", f.preferredDate || "—"],
    ["Preferred time", f.preferredTime || "—"],
    ["Health updates opt-in", f.updatesOptIn ? "Yes" : "No"],
    ["Message", f.message || "—"],
    ["Submitted from", f.page],
    ["Received (IST)", receivedAt],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html =
    '<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">' +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="font-weight:bold;vertical-align:top">${esc(k)}</td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`
      )
      .join("") +
    "</table>";

  await transport.sendMail({
    from: `"Mungale Eye Hospital website" <${process.env["GMAIL_USER"]}>`,
    to,
    subject,
    text,
    html,
    replyTo: f.email || undefined,
  });
}
