"use client";

import React from "react";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

// ─── Dummy contact form (owner instruction: keep dummy for now) ─────────
// Fields mirror the live contact page: Name, Mobile, Select Doctor
// (Dr. Meeta / Dr. Sachin — verbatim options), message. Consent UNCHECKED.
// Google-Sheets disclosure text VERBATIM from the live page. Submit shows a
// local success note only — no backend wired (docs/CONTENT_GAPS.md #3).
export function DummyContactForm() {
  const [sent, setSent] = React.useState(false);

  return (
    <div className="bg-card-white rounded-2xl p-6 sm:p-8 shadow-md">
      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
        Make an appointment
      </h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-5">
        For assistance with your vision health, feel free to reach out or book an appointment with us today.
      </p>
      {sent ? (
        <p className="font-body-md text-body-md text-on-surface">
          Thank you! This is a preview form — backend wiring is pending. Please call{" "}
          {siteConfig.phone} to book directly.
        </p>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input label="Your Full Name" placeholder="e.g. Priya Patel" required type="text" />
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                Mobile Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  +91
                </span>
                <input
                  className="w-full bg-surface-canvas text-on-surface font-body-md text-body-md rounded-r-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-outline-variant"
                  pattern="[0-9]{10}"
                  placeholder="98765 43210"
                  required
                  type="tel"
                />
              </div>
            </div>
          </div>
          <Select label="Select Doctor" defaultValue="" required>
            <option value="" disabled>
              Choose a doctor
            </option>
            {siteConfig.doctors.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name}
              </option>
            ))}
          </Select>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
              Message
            </label>
            <textarea
              className="w-full bg-surface-canvas text-on-surface font-body-md text-body-md rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-outline-variant min-h-28"
              placeholder="Briefly describe your concern"
            />
          </div>
          <div className="flex items-start gap-2 pt-1">
            {/* Unchecked by default — owner/master-prompt requirement. */}
            <input className="mt-1 accent-primary" id="contact-consent" type="checkbox" />
            <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="contact-consent">
              I agree to receive appointment details &amp; health updates via WhatsApp &amp; SMS.
            </label>
          </div>
          <Button variant="primary" type="submit" className="w-full justify-center">
            <span>Send Request</span>
          </Button>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Your information will be securely sent to and stored in Google Sheets for the purpose of processing your form submission.
          </p>
        </form>
      )}
    </div>
  );
}
