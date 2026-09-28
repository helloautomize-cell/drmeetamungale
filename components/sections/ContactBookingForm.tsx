"use client";

import React from "react";
import {
  CONSENT_LABEL,
  SHEETS_DISCLOSURE,
  SUCCESS_TITLE,
  SUCCESS_BODY,
  contactDoctors,
  contactPhones,
  telOf,
} from "@/content/contact";

// ─── ContactBookingForm ────────────────────────────────────────────────────
// Single-page stepped consultation request (visual grouping, no wizard).
// Fields mirror the live form (Name, Phone, Email, Age, Doctor, Message)
// with the live doctor order (Meeta first) + a no-preference affordance.
// Consent unchecked by default; Google-Sheets disclosure verbatim.
// Dummy submit (owner instruction, CONTENT_GAPS #3): local receipt only,
// honest about phone confirmation — never a fabricated booking.
const fieldCls =
  "w-full bg-surface-canvas text-on-surface font-body-md text-body-md rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-outline-variant";
const labelCls =
  "block text-[13px] font-bold uppercase tracking-[0.08em] text-on-surface mb-2";
const errCls = "mt-1.5 text-[13px] font-semibold text-primary-fixed";

export function ContactBookingForm() {
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const successRef = React.useRef<HTMLDivElement>(null);

  if (sent) {
    return (
      <div ref={successRef} tabIndex={-1} className="py-4">
        <p className="font-display-hero text-on-surface tracking-tight text-[28px] lg:text-[32px]">
          {SUCCESS_TITLE}
        </p>
        <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {SUCCESS_BODY}
        </p>
        <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Online requests are confirmed by phone — please also call{" "}
          <a href={telOf(contactPhones.main)} className="font-bold text-on-surface underline decoration-primary-fixed/60 underline-offset-4">
            {contactPhones.main}
          </a>{" "}
          to secure your consultation.
        </p>
      </div>
    );
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const mobile = String(data.get("mobile") ?? "").replace(/[\s-]/g, "");
    const email = String(data.get("email") ?? "").trim();
    const doctor = String(data.get("doctor") ?? "");
    if (name.length < 2) next["name"] = "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(mobile))
      next["mobile"] = "Please enter a valid 10-digit mobile number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next["email"] = "Please enter a valid email address.";
    if (!doctor) next["doctor"] = "Please choose a doctor or no preference.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
    else {
      const first = document.querySelector('[data-error="true"]');
      if (first instanceof HTMLElement) first.focus();
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate>
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
            id="cf-doctor" name="doctor" required defaultValue=""
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
            id="cf-age" name="age" type="number" min={1} max={120}
            placeholder="Years" className={fieldCls}
          />
        </div>
      </div>

      {/* ── Step 03 · Message ── */}
      <p className="mt-10 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
        Step 03 — Anything you&rsquo;d like us to know?
      </p>
      <div className="mt-5">
        <label htmlFor="cf-message" className={labelCls}>Message <span className="font-normal normal-case tracking-normal text-on-surface-variant">(optional)</span></label>
        <textarea
          id="cf-message" name="message" rows={4}
          placeholder="Briefly describe your concern"
          className={fieldCls + " min-h-28"}
        />
      </div>

      {/* ── Consent + disclosure ── */}
      <div className="mt-6 flex items-start gap-3">
        <input id="cf-consent" name="consent" type="checkbox" className="mt-1 w-[18px] h-[18px] accent-primary shrink-0" />
        <label htmlFor="cf-consent" className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          {CONSENT_LABEL}
        </label>
      </div>
      <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        {SHEETS_DISCLOSURE}
      </p>

      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary text-on-primary font-semibold text-[16px] px-8 py-3.5 rounded-full hover:bg-primary-fixed transition-colors min-h-[52px]"
      >
        Request a consultation
        <span aria-hidden="true">&rarr;</span>
      </button>
    </form>
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
