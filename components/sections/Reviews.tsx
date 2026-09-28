"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
import { GoogleBadge } from "@/components/icons/duotone";
import { siteConfig } from "@/content/site";
import { reviews, type Review } from "@/content/reviews";

// ─── Patient Stories — editorial review experience (owner rebuild) ───
// Replaces the widget-style pills + slider: story-driven composition where
// real patient words carry the section. Data honesty (established rules,
// kept verbatim):
// - Reviews VERBATIM from content/reviews.ts (original languages, names as
//   published). Excerpts truncate with "…" + inline expand — never rewritten.
// - Category tags ONLY where review text supports them: Cataract Surgery
//   (Priti, Sjju), Corneal Treatments (Dhruv), Glaucoma Treatments AREA tag
//   (Odhavji — recommends for glaucoma, names no procedure). Pankaj/Kishor
//   are untagged and appear under All with no metadata line.
// - Location ONLY where stated (Dahod — Dhruv). All ratings are 5-star per
//   source data. NO aggregate score (Google's own aggregate is not publicly
//   retrievable; third-party scores conflict) — the trust line shows only
//   verifiable facts. NO review URLs exist, so "Read full review" expands
//   inline; "Read on Google / More stories" use a real Google search URL
//   (never a fabricated link). The old Trustindex plugin sentence is retired
//   from the UI per owner instruction.
// - Counts are real: progress reads 01/06, 01/02, 01/01 from data lengths.
type Category = "All" | "Cataract" | "Cornea" | "Glaucoma";

const categories: { id: Category; label: string }[] = [
  { id: "All", label: "All" },
  { id: "Cataract", label: "Cataract" },
  { id: "Cornea", label: "Cornea" },
  { id: "Glaucoma", label: "Glaucoma" },
];

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
    <span className="inline-flex items-center gap-0.5" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-star-gold fill-star-gold" aria-hidden="true" />
      ))}
    </span>
  );
}

function Identity({ name, large = false }: { name: string; large?: boolean }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={
          "rounded-full bg-primary/10 text-primary-fixed font-bold flex items-center justify-center shrink-0 " +
          (large ? "w-11 h-11 text-[17px]" : "w-9 h-9 text-[14px]")
        }
      >
        {initial}
      </span>
      <div className="min-w-0">
        <p
          className={
            "text-on-surface font-semibold truncate " +
            (large ? "text-[16px]" : "text-[14.5px]")
          }
        >
          {name}
        </p>
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
    <p className="mt-3 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-on-surface-variant">
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
        <p className="text-[13px] font-semibold text-on-surface">
          Google Reviews
        </p>
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

function Featured({ review }: { review: Review }) {
  const [expanded, setExpanded] = React.useState(false);
  const { short, truncated } = excerptOf(review.text);
  return (
    <article key={review.reviewerName}>
      {/* Oversized decorative quote — pale brand red, extremely subtle. */}
      <span
        aria-hidden="true"
        className="block font-display-hero leading-[0.6] text-primary/10 select-none text-[110px] lg:text-[150px]"
      >
        &ldquo;
      </span>
      <blockquote className="mt-2 text-on-surface leading-[1.35] font-normal text-[22px] sm:text-[26px] lg:text-[31px] tracking-[-0.005em]">
        {expanded || !truncated ? review.text : short}
      </blockquote>
      {truncated && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-4 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded group"
        >
          <span className="cta-quiet-text">{expanded ? "Show less" : "Read full review"}</span>
          <ArrowRight
            aria-hidden="true"
            className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
          />
        </button>
      )}
      <div className="mt-6">
        <Identity name={review.reviewerName} large />
      </div>
      <Meta review={review} />
    </article>
  );
}

function Secondary({
  review,
  onSelect,
}: {
  review: Review;
  onSelect: () => void;
}) {
  const { short } = excerptOf(review.text);
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group w-full text-left py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-lg"
      aria-label={"Read story from " + review.reviewerName}
    >
      <p className="text-[15px] leading-relaxed text-on-surface-variant group-hover:text-on-surface transition-colors duration-200 line-clamp-3">
        &ldquo;{short}&rdquo;
      </p>
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-[13.5px] font-semibold text-on-surface truncate">
          {review.reviewerName}
        </p>
        <span className="flex items-center gap-1.5 shrink-0">
          <span
            aria-hidden="true"
            className="block h-px w-6 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 motion-reduce:transition-none"
          />
          <ArrowRight
            aria-hidden="true"
            className="w-4 h-4 text-primary -translate-x-1 group-hover:translate-x-0 transition-transform duration-200 motion-reduce:transition-none"
          />
        </span>
      </div>
    </button>
  );
}

export function Reviews() {
  const [cat, setCat] = React.useState<Category>("All");
  const [idx, setIdx] = React.useState(0);

  const filtered =
    cat === "All" ? reviews : reviews.filter((r) => tagOf[r.reviewerName] === cat);
  const featured = filtered[idx % filtered.length]!;
  const pad = (n: number) => String(n).padStart(2, "0");

  // Secondaries: same-category others first, then fill from all stories.
  const others = [
    ...filtered.filter((r) => r.reviewerName !== featured.reviewerName),
    ...reviews.filter(
      (r) =>
        r.reviewerName !== featured.reviewerName &&
        !filtered.some((f) => f.reviewerName === r.reviewerName)
    ),
  ].slice(0, 2);

  const pick = (c: Category) => {
    setCat(c);
    setIdx(0);
  };
  const step = (dir: 1 | -1) =>
    setIdx((v) => (v + dir + filtered.length) % filtered.length);
  const jumpToReview = (name: string) => {
    const i = reviews.findIndex((r) => r.reviewerName === name);
    if (i >= 0) {
      setCat("All");
      setIdx(i);
    }
  };

  return (
    <section className="bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 flex flex-col">
        {/* 1 · Headline */}
        <Reveal className="max-w-2xl order-1">
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

        {/* 5 · Google credibility (mobile: right after header; desktop: rail) */}
        <div className="order-2 lg:hidden mt-8">
          <GoogleTrust />
        </div>

        {/* 6 · Category index — editorial text nav, scrollable on mobile */}
        <div
          role="group"
          aria-label="Filter stories by treatment area"
          className="order-3 mt-8 lg:mt-10 flex items-center gap-7 lg:gap-9 overflow-x-auto no-scrollbar"
        >
          {categories.map((c) => {
            const isActive = c.id === cat;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => pick(c.id)}
                aria-pressed={isActive}
                className={
                  "nav-item shrink-0 whitespace-nowrap px-1 py-3 text-[13px] font-bold uppercase tracking-[0.16em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded " +
                  (isActive ? "text-primary" : "text-on-surface/55 hover:text-on-surface")
                }
                data-active={isActive || undefined}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* 2–4 · Featured + rail */}
        <div className="order-4 mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-8">
            <div key={featured.reviewerName + cat} className="animate-story-in">
              <Featured review={featured} />
            </div>
            {/* Featured navigation — minimal arrows + real count */}
            <div className="mt-8 pt-6 border-t border-secondary/10 flex items-center justify-between">
              <p className="text-[13px] font-bold tracking-[0.2em] text-on-surface-variant tabular-nums" aria-live="polite">
                {pad((idx % filtered.length) + 1)} / {pad(filtered.length)}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous story"
                  className="w-11 h-11 inline-flex items-center justify-center text-on-surface/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-full"
                >
                  <ArrowLeft className="w-[18px] h-[18px]" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next story"
                  className="w-11 h-11 inline-flex items-center justify-center text-on-surface/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-full"
                >
                  <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="hidden lg:block">
              <GoogleTrust />
            </div>
            <div className="mt-2 lg:mt-8 lg:pt-8 lg:border-t lg:border-secondary/10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                More from patients
              </p>
              <div className="divide-y divide-secondary/10">
                {others.map((r) => (
                  <Secondary
                    key={r.reviewerName}
                    review={r}
                    onSelect={() => jumpToReview(r.reviewerName)}
                  />
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Section end — quiet link to real Google results */}
        <div className="order-5 mt-12 lg:mt-16">
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
