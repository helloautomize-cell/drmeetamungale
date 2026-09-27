"use client";

import React from "react";
import Link from "next/link";
import { Star, Phone, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/motion";
import { GoogleBadge } from "@/components/icons/duotone";
import { siteConfig } from "@/content/site";
import { reviews, type Review } from "@/content/reviews";

// ─── 4.9 Reviews + CTA band ─────────────────────────────────────────────
// Reviews are VERBATIM Google reviews (content/reviews.ts) in their original
// language (English, Marathi, Gujarati) with names as published. No
// satisfaction percentages, no invented counts, no translated rewrites, no
// invented titles/locations.
// Layout follows the reference pattern: rating strip + treatment filter
// pills + snap slider with prev/next arrows. Honesty rules enforced:
// - Header shows NO aggregate score: third-party aggregates conflict
//   (4.0–4.9 across directories, none of them Google), and Google's own
//   aggregate is not publicly retrievable. Only the verifiable fact is
//   shown: 6 Google-sourced reviews, all 5-star (Trustindex verifies the
//   original source of each review is Google — verbatim live-site wording).
// - Treatment pills exist ONLY for treatments named in review text:
//   Cataract Surgery (motiya operation — Priti, Sjju), Corneal Treatments
//   (C3R cross-linking + scleral lenses — Dhruv), Glaucoma Treatments
//   (glaucoma care — Odhavji; area tag, see note below). Evaluations/optical
//   have no pills because no review mentions them — empty filters omitted.
// - "Reviewed for" renders ONLY when the review text names the treatment.
//   "Location" renders ONLY when stated in the review (Dahod — Dhruv).
// - Odhavji note: the review recommends the hospital for glaucoma and
//   praises its guidance, without naming a received procedure; the
//   Glaucoma Treatments tag marks the treatment AREA, not a claimed surgery.
type TreatmentFilter = "All" | "Cataract Surgery" | "Corneal Treatments" | "Glaucoma Treatments";

const treatmentOf: Record<string, TreatmentFilter | null> = {
  "Pankaj Makhijani": null,
  "Kishor Kini": null,
  "Priti Pandit": "Cataract Surgery",
  "Sjju Warrior": "Cataract Surgery",
  "Odhavji Vasoya": "Glaucoma Treatments",
  "Kadia Dhruv": "Corneal Treatments",
};

const locationOf: Record<string, string | null> = {
  "Kadia Dhruv": "Dahod",
};

const filters: TreatmentFilter[] = ["All", "Cataract Surgery", "Corneal Treatments", "Glaucoma Treatments"];

function Stars() {
  return (
    <span className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-5 h-5 text-star-gold fill-star-gold" />
      ))}
    </span>
  );
}

function Avatar({ name, index }: { name: string; index: number }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <span
      className={
        "w-12 h-12 rounded-full flex items-center justify-center font-headline-sm text-headline-sm text-white font-bold shrink-0 " +
        (index % 2 === 0
          ? "bg-gradient-to-br from-primary to-primary-fixed"
          : "bg-secondary")
      }
      aria-hidden="true"
    >
      {initial}
    </span>
  );
}

function ReviewSlide({ r, index }: { r: Review; index: number }) {
  const [expanded, setExpanded] = React.useState(false);
  const treatment = treatmentOf[r.reviewerName] ?? null;
  const location = locationOf[r.reviewerName] ?? null;
  return (
    <article className="flex-none w-[86%] sm:w-[calc(50%-0.75rem)] snap-start bg-card-white rounded-3xl p-7 sm:p-8 shadow-sm ring-1 ring-border-light/50 hover:shadow-brand-md transition-shadow duration-200 flex flex-col">
      <blockquote
        className={
          "font-body-md text-body-md text-on-surface leading-relaxed flex-1 " +
          (expanded ? "" : "line-clamp-5")
        }
      >
        {r.text}
      </blockquote>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="self-start mt-2 font-label-sm text-label-sm text-primary font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
        aria-expanded={expanded}
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
      <div className="mt-5 flex items-center gap-3">
        <Avatar name={r.reviewerName} index={index} />
        <div className="min-w-0">
          <p className="font-label-md text-label-md text-on-surface font-bold truncate">
            {r.reviewerName}
          </p>
          <Stars />
        </div>
      </div>
      <div className="mt-4 space-y-1">
        {treatment && (
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Reviewed for: <span className="font-bold text-on-surface">{treatment}</span>
          </p>
        )}
        {location && (
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Location: <span className="font-bold text-on-surface">{location}</span>
          </p>
        )}
      </div>
    </article>
  );
}

export function Reviews() {
  const [active, setActive] = React.useState<TreatmentFilter>("All");
  const pillsRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [pillsProgress, setPillsProgress] = React.useState(0);

  const filtered =
    active === "All" ? reviews : reviews.filter((r) => treatmentOf[r.reviewerName] === active);

  const onPillsScroll = () => {
    const el = pillsRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setPillsProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  const scrollPills = (dir: 1 | -1) => {
    pillsRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  const scrollTrack = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const pick = (f: TreatmentFilter) => {
    setActive(f);
    trackRef.current?.scrollTo({ left: 0 });
  };

  return (
    <section className="py-space-2xl bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* CTA band — book / call, no invented metrics */}
        <Reveal>
          <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-fixed to-primary rounded-3xl p-8 lg:p-12 shadow-brand-lg text-center mb-14">
            <h2 className="relative font-headline-lg text-headline-lg text-on-primary font-bold">
              Ready for Clearer Vision?
            </h2>
            <p className="relative font-body-md text-body-md text-on-primary/90 mt-2 max-w-2xl mx-auto">
              Book an appointment or call us — {siteConfig.hours.weekdays} {siteConfig.hours.time}.
            </p>
            <div className="relative flex flex-wrap justify-center gap-4 mt-6">
              <Link
                href="/contact-us/"
                className="px-6 py-3 bg-card-white text-primary font-label-md text-label-md rounded-full shadow-md hover:shadow-lg hover:-translate-y-px transition-all inline-flex items-center gap-2"
              >
                <CalendarDays className="w-[18px] h-[18px]" />
                <span>Book an Appointment</span>
              </Link>
              <a
                href={"tel:" + siteConfig.phone.replace(/\s/g, "")}
                className="px-6 py-3 border border-on-primary/40 text-on-primary font-label-md text-label-md rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-[18px] h-[18px]" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <SectionHeader
            eyebrow="Patient Stories"
            title="What Our Patients Say"
            subtitle="Real Google reviews, published in the patients' own words and languages."
          />
        </Reveal>

        {/* Rating strip — verifiable facts only (no aggregate score invented) */}
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <GoogleBadge className="w-8 h-8" />
            <Stars />
            <p className="font-label-md text-label-md text-on-surface">
              <span className="font-bold">6 Verified Reviews</span>
              <span className="text-on-surface-variant"> · Trustindex verifies that the original source of each review is Google.</span>
            </p>
          </div>
        </Reveal>

        {/* Treatment filter pills */}
        <Reveal>
          <div className="flex items-center gap-2 mb-2">
            <div
              ref={pillsRef}
              onScroll={onPillsScroll}
              className="flex-1 flex items-center gap-3 overflow-x-auto no-scrollbar snap-x py-1"
              role="group"
              aria-label="Filter reviews by treatment"
            >
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => pick(f)}
                  aria-pressed={active === f}
                  className={
                    "snap-start shrink-0 px-5 py-2.5 rounded-full font-label-md text-label-md font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 " +
                    (active === f
                      ? "bg-gradient-to-r from-primary to-primary-fixed text-white shadow-brand-sm"
                      : "bg-card-white text-on-surface ring-1 ring-border-light hover:ring-primary/40 hover:text-primary")
                  }
                >
                  {f === "All" ? "All Reviews" : f}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollPills(1)}
              className="hidden sm:flex shrink-0 w-9 h-9 rounded-full ring-1 ring-primary/40 text-primary items-center justify-center hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              aria-label="Scroll treatments"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div
            className="h-1 rounded-full bg-border-light overflow-hidden mb-8"
            role="presentation"
          >
            <div
              className="h-full w-1/3 rounded-full bg-gradient-to-r from-primary to-primary-fixed transition-[margin] duration-200"
              style={{ marginLeft: (pillsProgress * 66).toFixed(1) + "%" }}
            />
          </div>
        </Reveal>

        {/* Slider */}
        <div
          key={active}
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 animate-tab-in"
          role="region"
          aria-label={"Patient reviews" + (active === "All" ? "" : " for " + active)}
        >
          {filtered.map((r, i) => (
            <ReviewSlide key={r.reviewerName} r={r} index={i} />
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollTrack(-1)}
            className="w-10 h-10 rounded-full ring-1 ring-primary/40 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollTrack(1)}
            className="w-10 h-10 rounded-full ring-1 ring-primary/40 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center mt-8 font-body-sm text-body-sm text-on-surface-variant">
          Read all reviews on Google — search “{siteConfig.name}”.
        </p>
      </div>
    </section>
  );
}
