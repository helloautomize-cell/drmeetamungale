"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
import { GoogleBadge } from "@/components/icons/duotone";
import { reviews, type Review } from "@/content/reviews";

// ─── Patient Stories — focus carousel (Pattern A, human-touch pass) ─────
// One paper card sits centred and fully legible; its neighbours sit at
// scale(.92) / opacity .45 / rotateY(±4deg), partly visible either side.
// Base is CSS scroll-snap (works with JS off — all cards render at full
// opacity, see globals.css `.focus-track`), enhanced with:
//   • active-card detection via IntersectionObserver on the track,
//   • arrow buttons + pill indicator (wide = active),
//   • ←/→ keyboard on the track, native swipe on touch,
//   • aria-live="polite" announcing the active reviewer.
// Transition 450ms cubic-bezier(.22,1,.36,1); no autoplay.
// Data honesty unchanged: reviews VERBATIM from content/reviews.ts, tags
// only where the text supports them, real counts, Google search link only
// (no fabricated review URLs). Lead quote sized clamp(1.375rem,1.9vw,
// 1.875rem) in the serif (bug 8).
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
  const [cat, setCat] = React.useState<Category>("All");
  const [active, setActive] = React.useState(0);
  const trackRef = React.useRef<HTMLUListElement>(null);
  const slideRefs = React.useRef<(HTMLLIElement | null)[]>([]);

  const filtered = React.useMemo(
    () => (cat === "All" ? reviews : reviews.filter((r) => tagOf[r.reviewerName] === cat)),
    [cat]
  );

  // Active slide = the one whose centre is nearest the track centre.
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset["index"]);
            if (!Number.isNaN(i)) setActive(i);
          }
        }
      },
      // Centre band is 20% of track width; threshold must be 0 — a 640px
      // slide can never be ≥50% inside a 288px band.
      { root: track, rootMargin: "0px -40% 0px -40%", threshold: 0 }
    );
    slideRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [filtered]);

  const goTo = React.useCallback((i: number) => {
    const el = slideRefs.current[i];
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, []);

  const step = (dir: 1 | -1) => {
    const n = filtered.length;
    goTo((active + dir + n) % n);
  };

  const pick = (c: Category) => {
    setCat(c);
    setActive(0);
    requestAnimationFrame(() => trackRef.current?.scrollTo({ left: 0 }));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    else if (e.key === "Home") { e.preventDefault(); goTo(0); }
    else if (e.key === "End") { e.preventDefault(); goTo(filtered.length - 1); }
  };

  const pad = (n: number) => String(n).padStart(2, "0");
  const current = filtered[active] ?? filtered[0]!;

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

        {/* Category index */}
        <div
          role="group"
          aria-label="Filter stories by treatment area"
          className="mt-10 flex items-center gap-7 lg:gap-9 overflow-x-auto no-scrollbar"
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
                  (isActive ? "text-primary" : "text-on-surface-variant hover:text-on-surface")
                }
                data-active={isActive || undefined}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Focus carousel — full-bleed track so neighbours peek at the edges.
          Carousel semantics sit on the wrapper so the <ul> keeps its native
          list role for the <li> slides (a11y: listitem). */}
      <div className="relative" role="region" aria-roledescription="carousel" aria-label="Patient stories">
        <ul
          ref={trackRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="focus-track flex snap-x snap-mandatory gap-5 lg:gap-8 overflow-x-auto no-scrollbar px-[calc(50vw-min(320px,39vw))] pb-6 pt-2 focus-visible:outline-none"
          style={{ perspective: "1200px" }}
        >
          {filtered.map((r, i) => {
            const isActive = i === active;
            return (
              <li
                key={r.reviewerName}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                data-index={i}
                data-active={isActive || undefined}
                className="focus-slide list-none w-[min(640px,78vw)] shrink-0 snap-center"
                onClick={() => !isActive && goTo(i)}
              >
                <StoryCard review={r} active={isActive} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 lg:pb-32">
        {/* Controls — arrows, pill indicator, count */}
        <div className="mt-2 flex items-center justify-between gap-6">
          <p className="text-[13px] font-bold tracking-[0.2em] text-on-surface-variant tabular-nums">
            {pad(active + 1)} / {pad(filtered.length)}
          </p>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {filtered.map((r, i) => (
              <button
                key={r.reviewerName}
                type="button"
                tabIndex={-1}
                onClick={() => goTo(i)}
                className={
                  "h-2 rounded-full transition-all duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none " +
                  (i === active ? "w-7 bg-primary" : "w-2 bg-on-surface/20 hover:bg-on-surface/40")
                }
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous story"
              className="w-11 h-11 inline-flex items-center justify-center rounded-full ring-1 ring-secondary/15 text-on-surface/70 hover:text-primary hover:ring-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <ArrowLeft className="w-[18px] h-[18px]" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next story"
              className="w-11 h-11 inline-flex items-center justify-center rounded-full ring-1 ring-secondary/15 text-on-surface/70 hover:text-primary hover:ring-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Screen-reader announcement of the active review */}
        <p className="sr-only" aria-live="polite">
          Story {active + 1} of {filtered.length}: {current.reviewerName}
        </p>

        <div className="mt-12 lg:mt-14">
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
