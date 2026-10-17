"use client";

import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
import { GoogleBadge } from "@/components/icons/duotone";
import { reviews, type Review } from "@/content/reviews";

// ─── Patient Stories — simple three-card row ───────────────────────────
// While there are only six Google reviews the carousel + filter tabs are
// overkill: a static row of three cards, stacked on mobile. Data honesty
// unchanged: reviews VERBATIM from content/reviews.ts, tags only where
// the text supports them, Google search link only (no fabricated review
// URLs). Lead quote sized clamp(1.375rem,1.9vw,1.875rem) in the serif.
type Category = "All" | "Cataract" | "Cornea" | "Glaucoma";

const tagOf: Record<string, Exclude<Category, "All"> | null> = {
  "Pankaj Makhijani": null,
  "Kishor Kini": null,
  "Priti Pandit": "Cataract",
  "Sjju Warrior": "Cataract",
  "Odhavji Vasoya": "Glaucoma",
  "Kadia Dhruv": "Cornea",
};

const tagLabel: Record<Exclude<Category, "All">, string> = {
  Cataract: "Cataract Surgery",
  Cornea: "Corneal Treatments",
  Glaucoma: "Glaucoma Treatments",
};

const locationOf: Record<string, string | null> = {
  "Kadia Dhruv": "Dahod",
};

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Mungale+Eye+Hospital+Vadodara+reviews";

const EXCERPT_LEN = 240;

function excerptOf(text: string): { short: string; truncated: boolean } {
  if (text.length <= EXCERPT_LEN) return { short: text, truncated: false };
  const cut = text.lastIndexOf(" ", EXCERPT_LEN);
  return { short: text.slice(0, cut > 0 ? cut : EXCERPT_LEN) + "…", truncated: true };
}

function SmallStars() {
  return (
    <span role="img" className="inline-flex items-center gap-0.5" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-star-gold fill-star-gold" aria-hidden="true" />
      ))}
    </span>
  );
}

function Identity({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="w-10 h-10 rounded-full bg-primary/10 text-primary-fixed font-bold text-[15px] flex items-center justify-center shrink-0"
      >
        {initial}
      </span>
      <div className="min-w-0">
        <p className="text-[15px] font-semibold text-on-surface truncate">{name}</p>
        <SmallStars />
      </div>
    </div>
  );
}

function Meta({ review }: { review: Review }) {
  const tag = tagOf[review.reviewerName] ?? null;
  const loc = locationOf[review.reviewerName] ?? null;
  if (!tag && !loc) return null;
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-on-surface-variant">
      {tag ? tagLabel[tag] : ""}
      {tag && loc ? " · " : ""}
      {loc ?? ""}
    </p>
  );
}

function GoogleTrust() {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <GoogleBadge className="w-5 h-5" />
        <p className="text-[13px] font-semibold text-on-surface">Google Reviews</p>
        <SmallStars />
      </div>
      <p className="mt-2 text-[13.5px] leading-relaxed text-on-surface-variant">
        {reviews.length} verified patient reviews, all five-star.
      </p>
      <a
        href={GOOGLE_SEARCH_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-quiet group mt-2.5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
      >
        <span className="cta-quiet-text">Read on Google</span>
        <ArrowRight
          aria-hidden="true"
          className="w-3.5 h-3.5 text-primary transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
        />
      </a>
    </div>
  );
}

function StoryCard({ review, active }: { review: Review; active: boolean }) {
  const [expanded, setExpanded] = React.useState(false);
  const { short, truncated } = excerptOf(review.text);
  return (
    <article
      className="focus-card flex h-full flex-col rounded-[20px] bg-paper p-7 lg:p-9 ring-1 ring-secondary/[0.06] shadow-[0_12px_40px_-16px_rgba(14,17,22,0.18)]"
      aria-hidden={!active}
    >
      <span
        aria-hidden="true"
        className="block font-display-hero leading-[0.6] text-primary/20 select-none text-[48px]"
      >
        &ldquo;
      </span>
      <blockquote className="mt-4 font-display-hero text-on-surface leading-[1.35] text-[clamp(1.375rem,1.9vw,1.875rem)] tracking-[-0.005em]">
        {expanded || !truncated ? review.text : short}
      </blockquote>
      {truncated && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          tabIndex={active ? 0 : -1}
          className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded group w-fit"
        >
          <span className="cta-quiet-text">{expanded ? "Show less" : "Read full review"}</span>
          <ArrowRight
            aria-hidden="true"
            className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
          />
        </button>
      )}
      <div className="mt-auto pt-7 flex flex-wrap items-end justify-between gap-3">
        <Identity name={review.reviewerName} />
        <Meta review={review} />
      </div>
    </article>
  );
}

export function Reviews() {
  // First three reviews, verbatim — order as published on Google.
  const shown = reviews.slice(0, 3);

  return (
    <section className="bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
          <Reveal className="lg:col-span-8 max-w-2xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              Patient stories
            </p>
            <h2 className="mt-4 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[36px] sm:text-[44px] lg:text-[54px]">
              What it feels like to be cared for here.
            </h2>
            <p className="mt-4 text-[17px] lg:text-[18px] leading-relaxed text-on-surface-variant">
              Real experiences shared by Mungale patients.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-4">
            <GoogleTrust />
          </Reveal>
        </div>

        {/* Simple row of three — stacks on mobile. */}
        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
          {shown.map((r) => (
            <li key={r.reviewerName} className="list-none">
              <StoryCard review={r} active={true} />
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 lg:pb-32">
        <div className="mt-2">
          <a
            href={GOOGLE_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
          >
            <span className="cta-quiet-text">More patient stories</span>
            <ArrowRight
              aria-hidden="true"
              className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
