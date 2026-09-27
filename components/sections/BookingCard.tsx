"use client";

import React from "react";
import { siteConfig } from "@/content/site";
import { Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  CalendarIcon,
  PhoneIcon,
  LockIcon,
  BoltIcon,
  BadgeCheckIcon,
} from "@/components/icons/duotone";

// ─── Booking card (Batch A: glass over hero photo) ─────────────────────
// Fields per SECTION_MAP.md: Name, Mobile (+91), Treatment dropdown (6 real
// options from siteConfig.treatments), preferred date.
// Consent checkbox MUST be unchecked by default (master prompt rule +
// owner instruction). Submission is a pluggable stub: shows a success
// message + WhatsApp fallback link (backend decision logged in
// docs/CONTENT_GAPS.md #3). No city dropdown (single-location hospital;
// reference's multi-city selector deliberately removed).
// Visual: branded red header strip, icon-prefixed floating-label inputs,
// soft inset panel shadow, gradient CTA with hover glow.

function FloatField({
  id,
  label,
  icon: Icon,
  inputClassName = "",
  labelClassName = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  icon?: (p: { className?: string }) => React.JSX.Element;
  inputClassName?: string;
  labelClassName?: string;
}) {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant pointer-events-none" />
      )}
      <input
        id={id}
        placeholder=" "
        {...props}
        className={
          "peer w-full bg-surface-canvas text-on-surface font-body-md text-body-md rounded-xl pr-3.5 pt-6 pb-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/40 " +
          (Icon ? "pl-11 " : "") +
          inputClassName
        }
      />
      <label
        htmlFor={id}
        className={
          "absolute top-1/2 -translate-y-1/2 font-body-sm text-body-sm text-outline-variant pointer-events-none transition-all duration-200 peer-focus:top-3.5 peer-focus:text-[11px] peer-focus:text-primary peer-focus:font-semibold peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:text-[11px] " +
          (Icon ? "left-11 " : "") +
          labelClassName
        }
      >
        {label}
      </label>
    </div>
  );
}

export function BookingCard() {
  const [sent, setSent] = React.useState(false);
  const waNumber = siteConfig.whatsapp.replace(/\D/g, "");

  return (
    <div className="bg-card-white/85 backdrop-blur-xl rounded-2xl shadow-brand-lg ring-1 ring-white/50 relative overflow-hidden">
      {/* Branded header strip */}
      <div className="h-1.5 bg-gradient-to-r from-primary via-primary-fixed to-primary" aria-hidden="true" />
      <div className="p-6 sm:p-8">
        <div className="absolute top-4 right-6 bg-primary text-on-primary font-label-sm text-label-sm pl-2 pr-3.5 py-1 rounded-full shadow-brand-sm flex items-center gap-1.5">
          <BadgeCheckIcon className="w-4 h-4" />
          <span>Free Guidance</span>
        </div>
        <div className="mb-5">
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            Book Doctor Consultation
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Choose your clinical concern — {siteConfig.hours.weekdays} {siteConfig.hours.time}
          </p>
        </div>

        {sent ? (
          <div className="space-y-4">
            <p className="font-body-md text-body-md text-on-surface">
              Consultation request registered! Our coordinator will call you within 30 minutes during working hours.
            </p>
            <a
              className="w-full py-3.5 px-4 bg-success-emerald text-on-primary font-label-md text-label-md rounded-xl shadow-brand-md flex items-center justify-center gap-2 hover:shadow-brand-lg transition-shadow"
              href={"https://wa.me/" + waNumber}
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue on WhatsApp
            </a>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              NOTE (owner to confirm): form backend pending — see docs/CONTENT_GAPS.md #3.
            </p>
          </div>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <Select label="Select Clinical Concern" defaultValue="" required>
              <option value="" disabled>
                Choose a treatment
              </option>
              {siteConfig.treatments.map((t) => (
                <option key={t.slug} value={t.slug}>
                  {t.title}
                </option>
              ))}
            </Select>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <FloatField
                id="bk-name"
                label="Your Full Name"
                icon={BadgeCheckIcon}
                type="text"
                required
                autoComplete="name"
              />
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-on-surface-variant pointer-events-none z-10">
                  <PhoneIcon className="w-4 h-4" />
                  +91
                </span>
                <FloatField
                  id="bk-mobile"
                  label="98765 43210"
                  inputClassName="pl-[86px]"
                  labelClassName="left-[86px]"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  autoComplete="tel"
                />
              </div>
            </div>
            <div className="relative">
              <CalendarIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant pointer-events-none" />
              <input
                id="bk-date"
                type="date"
                aria-label="Preferred date"
                className="w-full bg-surface-canvas text-on-surface font-body-md text-body-md rounded-xl pl-11 pr-3.5 py-3.5 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div className="flex items-start gap-2 pt-1">
              {/* Unchecked by default — owner/master-prompt requirement. Do NOT set checked. */}
              <input className="mt-1 accent-primary" id="consent" type="checkbox" />
              <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="consent">
                I agree to receive appointment details &amp; health updates via WhatsApp &amp; SMS.
              </label>
            </div>
            <Button
              variant="cta"
              type="submit"
              className="w-full justify-center"
            >
              <CalendarIcon className="w-5 h-5" />
              <span>Confirm Doctor Consultation</span>
            </Button>
          </form>
        )}

        <div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant text-label-sm font-label-sm">
          <span className="flex items-center gap-1.5">
            <LockIcon className="w-4 h-4 text-primary" /> 100% Confidential
          </span>
          <span className="flex items-center gap-1.5">
            <BoltIcon className="w-4 h-4 text-primary" /> Immediate Callback
          </span>
        </div>
      </div>
    </div>
  );
}
