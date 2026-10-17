import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SpecialistCard } from "@/components/sections/TreatmentShell";
import { MAPS_URL } from "@/components/layout/Footer";
import { siteConfig } from "@/content/site";
import type { ReviewerKey } from "@/content/doctors";
import { telHref, waHref } from "@/lib/contact-links";
import { bookingHref } from "@/lib/booking-links";

// ─── Blog post right rail ──────────────────────────────────────────────────
// Reuses the treatment-page SpecialistCard (photo, name, credentialShort,
// registration, profile + booking links) plus a compact contact card built
// from existing tokens. Reviewer comes from the post's reviewedBy field —
// the same value MedicalReviewByline renders.

const ALL_KEYS: ReviewerKey[] = ["meeta", "sachin"];

export function BlogDoctorCards({
  reviewedBy,
}: {
  reviewedBy?: ReviewerKey | ReviewerKey[];
}) {
  const keys = reviewedBy
    ? Array.isArray(reviewedBy)
      ? reviewedBy
      : [reviewedBy]
    : ALL_KEYS; // undetermined → show both doctors stacked
  return (
    <div className="rounded-[16px] ring-1 ring-secondary/10 bg-card-white px-4 divide-y divide-secondary/10">
      <p className="pt-4 text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
        Reviewed by
      </p>
      {keys.map((k) => (
        <SpecialistCard key={k} reviewerKey={k} />
      ))}
    </div>
  );
}

export function BlogContactCard() {
  const hours = `${siteConfig.hours.weekdays}, ${siteConfig.hours.time} · ${
    siteConfig.hours.sunday === "Closed" ? "Sunday closed" : "Sunday " + siteConfig.hours.sunday
  }`;
  return (
    <div className="rounded-[16px] ring-1 ring-secondary/10 bg-card-white p-5">
      <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
        Book a consultation
      </p>
      <div className="mt-4 space-y-1">
        <a
          href={telHref(siteConfig.phone)}
          className="group flex items-center justify-between py-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
        >
          Call {siteConfig.phone}
          <ArrowRight aria-hidden="true" className="w-4 h-4 text-primary-fixed" />
        </a>
        <a
          href={waHref(siteConfig.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between py-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
        >
          WhatsApp {siteConfig.whatsapp}
          <ArrowRight aria-hidden="true" className="w-4 h-4 text-primary-fixed" />
        </a>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between py-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
        >
          Get directions
          <ArrowRight aria-hidden="true" className="w-4 h-4 text-primary-fixed" />
        </a>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-on-surface-variant">
        {siteConfig.address}
        <br />
        {hours}
      </p>
      <Link
        href={bookingHref()}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-primary text-on-primary font-semibold text-[15px] px-6 py-3 rounded-full hover:bg-primary-fixed transition-colors motion-reduce:transition-none min-h-[44px]"
      >
        Book a consultation
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}
