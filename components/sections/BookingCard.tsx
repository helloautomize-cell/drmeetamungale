"use client";

import React from "react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { LockIcon } from "@/components/icons/duotone";

// ─── "Plan your visit" card (compact hero service panel) ──────────────
// Owner spec (hero redesign): the form must NOT compete with the hero
// message — compact, grouped, subordinate to headline + photo; fewer
// visible fields initially; feels like a service, not a pop-up.
// Fields: Clinical concern (routes to the right team), name, mobile —
// the preferred-date field is dropped (confirm on callback; fewer fields
// per owner instruction). Consent checkbox MUST stay unchecked by
// default (master prompt rule). Submission remains a pluggable stub:
// success message + WhatsApp fallback (backend pending —
// docs/CONTENT_GAPS.md #3).
// DRAFT-COPY (needs hospital sign-off): card sub-line, button label
// "Request a callback", footer call line. Titles/labels use the owner's
// own wording ("Plan your visit").

const fieldCls =
  "w-full h-11 bg-surface-canvas rounded-xl px-3.5 text-[14.5px] text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40";
const labelCls =
  "block mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant";

export function BookingCard() {
  const [sent, setSent] = React.useState(false);
  const waNumber = siteConfig.whatsapp.replace(/\D/g, "");

  return (
    <div className="bg-card-white rounded-2xl border border-border-subtle shadow-brand-md overflow-hidden">
      <div className="p-5 sm:p-6">
        <h2 className="text-[17px] font-semibold text-on-surface">
          Plan your visit
        </h2>
        {/* DRAFT-COPY — needs hospital sign-off */}
        <p className="mt-1 text-[13px] leading-snug text-on-surface-variant">
          Share your details and our coordinator will call you back during
          clinic hours.
        </p>

        {sent ? (
          <div className="mt-4 space-y-3">
            <p className="text-[14px] leading-snug text-on-surface">
              Consultation request registered! Our coordinator will call you
              within 30 minutes during working hours.
            </p>
            <a
              className="w-full h-11 px-4 bg-success-emerald text-white text-[14px] font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
              href={"https://wa.me/" + waNumber}
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue on WhatsApp
            </a>
            <p className="text-[12px] text-on-surface-variant">
              NOTE (owner to confirm): form backend pending — see
              docs/CONTENT_GAPS.md #3.
            </p>
          </div>
        ) : (
          <form
            className="mt-4 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div>
              <label className={labelCls} htmlFor="bk-concern">
                Clinical concern
              </label>
              <select
                id="bk-concern"
                defaultValue=""
                required
                className={fieldCls}
              >
                <option value="" disabled>
                  Choose a treatment
                </option>
                {siteConfig.treatments.map((t) => (
                  <option key={t.slug} value={t.slug}>
                    {t.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls} htmlFor="bk-name">
                Your full name
              </label>
              <input
                id="bk-name"
                type="text"
                required
                autoComplete="name"
                placeholder="e.g. Patel Anjali"
                className={fieldCls}
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="bk-mobile">
                Mobile number
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[13.5px] font-medium text-on-surface-variant pointer-events-none">
                  +91
                </span>
                <input
                  id="bk-mobile"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  autoComplete="tel"
                  placeholder="98765 43210"
                  className={fieldCls + " pl-[52px]"}
                />
              </div>
            </div>
            <div className="flex items-start gap-2 pt-0.5">
              {/* Unchecked by default — owner/master-prompt requirement. Do NOT set checked. */}
              <input
                className="mt-[3px] accent-primary"
                id="consent"
                type="checkbox"
              />
              <label
                className="text-[12.5px] leading-snug text-on-surface-variant"
                htmlFor="consent"
              >
                I agree to receive appointment details &amp; health updates via
                WhatsApp &amp; SMS.
              </label>
            </div>
            <Button
              variant="cta"
              type="submit"
              className="w-full justify-center h-11 rounded-[12px] text-[14px] font-semibold"
            >
              {/* DRAFT-COPY — needs hospital sign-off */}
              Request a callback
            </Button>
          </form>
        )}
      </div>

      {/* Quiet service footer — DRAFT-COPY (needs hospital sign-off) */}
      <div className="px-5 sm:px-6 py-3 border-t border-border-subtle bg-surface-warm flex items-center justify-between gap-3 text-[12.5px] text-on-surface-variant">
        <span className="flex items-center gap-1.5">
          <LockIcon className="w-3.5 h-3.5" /> Confidential
        </span>
        <span>
          Prefer to call?{" "}
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="text-on-surface font-medium hover:text-primary transition-colors"
          >
            {siteConfig.phone}
          </a>
        </span>
      </div>
    </div>
  );
}
