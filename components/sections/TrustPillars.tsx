"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/motion";

// ─── Why Mungale — sticky scroll story (owner redesign) ─────────────
// Replaces both the card grid AND the hero's separate stat row: one dark
// immersive section (bg-secondary ink #111112) where the three website
// statistics (20+ / 40,000+ / 15,000+) live as story moments, not a
// showcase. Normal page scroll throughout — no scroll-jacking: a sticky
// viewport (100vh minus header) holds the layout while three tall
// sentinel spacers (~80vh each) drive the active state via
// IntersectionObserver. Numbers crossfade with a gentle rise (450-600ms);
// images crossfade with a 1% scale; text fades with a small rise.
// Copy provenance:
// - Eyebrow/headline/state headings + bodies: OWNER-PROVIDED direction
//   (sticky-story prompt). Factual grounding from the live site:
//   established 2007 (about-us), referral center for complex cornea and
//   glaucoma cases (about-us), full-range diagnostic/surgical equipment
//   (homepage). "40,000+" / "15,000+" are the WEBSITE'S claimed numbers —
//   kept per owner instruction, NOT independently verified
//   (docs/CONTENT_GAPS.md #1).
// - Patient quote: VERBATIM excerpt from Pankaj Makhijani's Google review
//   (content/reviews.ts) — original wording preserved, short excerpt only.
// - Photos: real Mungale photography, no stock, no heavy grading.
// Palette: warm paper white, charcoal, Mungale red (eyebrow, indices,
// active progress, arc motif). Giant numbers stay warm white — never red.

const states = [
  {
    index: "01",
    value: "20+",
    label: "Years of specialist eye care",
    heading: "Experience that compounds over time.",
    body: "Established in 2007, Mungale Eye Hospital has grown into a referral center for complex cornea and glaucoma cases.",
    img: "/images/IMG_2239-jpg.webp",
    alt: "A Mungale Eye Hospital doctor studying a corneal topography scan during diagnosis.",
    caption: "Since 2007 · Kothi, Vadodara",
    eager: true,
  },
  {
    index: "02",
    value: "40,000+",
    label: "Patients treated",
    heading: "Every number is a person.",
    body: "Behind every count is an individual story — a concern, a family, a decision.",
    quote:
      "The doctors explained everything clearly and the staff was very supportive. We are very happy with the results.",
    quoteBy: "Pankaj Makhijani · Google review",
    img: "/images/IMG_21191-jpg.webp",
    alt: "Dr. Meeta Mungale in consultation at Mungale Eye Hospital.",
    caption: undefined as string | undefined,
    eager: false,
  },
  {
    index: "03",
    value: "15,000+",
    label: "Eye surgeries",
    heading: "Surgical experience built over thousands of procedures.",
    body: "Each procedure begins with careful evaluation, clear discussion and a plan tailored to the patient.",
    img: "/images/IMG_0887-jpg.webp",
    alt: "A Mungale Eye Hospital surgeon performing a YAG laser procedure for a patient.",
    caption: undefined as string | undefined,
    eager: false,
  },
];

const onCls =
  "story-motion transition-all duration-500 ease-out opacity-100 translate-y-0";
const offCls =
  "story-motion transition-all duration-500 ease-out opacity-0 translate-y-7 pointer-events-none";

export function TrustPillars() {
  const [active, setActive] = React.useState(0);
  const sentinels = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const els = sentinels.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset["i"] || 0));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const goTo = (i: number) => {
    const el = sentinels.current.at(i);
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  };

  return (
    <section className="relative bg-secondary overflow-x-clip">
      {/* Intro — established eyebrow + headline, one quiet support line */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 lg:pt-16">
        <Reveal className="max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#ff8080]">
            Why Mungale
          </p>
          <h2 className="mt-4 font-display-hero text-white tracking-[-0.015em] leading-[1.04] text-[36px] sm:text-[44px] lg:text-[54px]">
            Specialist care, with the time to explain.
          </h2>
          {/* Structural microcopy, not a claim. */}
          <p className="mt-4 text-[16px] text-white/60">
            Three numbers. One story.
          </p>
        </Reveal>
      </div>

      {/* Sticky track: viewport + three sentinel spacers (~80vh each) */}
      <div className="relative">
        <div className="sticky top-[96px] lg:top-[104px] h-[calc(88vh-96px)] lg:h-[calc(100vh-104px)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center min-h-0">
              {/* LEFT — anchored statistic (crossfading stack) */}
              <div>
                <div className="relative mt-3 lg:mt-4 grid">
                  {states.map((s, i) => (
                    <div
                      key={s.index}
                      aria-hidden={i !== active}
                      className={
                        "col-start-1 row-start-1 " +
                        (i === active ? onCls : offCls)
                      }
                    >
                      <p className="text-[12px] lg:text-[13px] font-bold tracking-[0.22em] text-[#ff8080]">
                        {s.index}
                      </p>
                      <p className="mt-1 font-display-hero text-background leading-[0.9] tracking-tight whitespace-nowrap text-[68px] sm:text-[96px] lg:text-[112px] xl:text-[128px]">
                        {s.value}
                      </p>
                      <p className="mt-2 lg:mt-3 text-[14px] lg:text-[16px] text-white/65">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Progress — under the label, completing the left rhythm */}
                <div
                  className="mt-5 lg:mt-7 flex items-center gap-4"
                  role="tablist"
                  aria-label="Story progress"
                >
                  {states.map((s, i) => (
                    <button
                      key={s.index}
                      role="tab"
                      aria-selected={i === active}
                      aria-label={"Go to moment " + s.index}
                      onClick={() => goTo(i)}
                      className={
                        "text-[12px] font-bold tracking-[0.2em] transition-colors duration-300 " +
                        (i === active ? "text-primary" : "text-white/30 hover:text-white/60")
                      }
                    >
                      {s.index}
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT — story content + photography (crossfading stack) */}
              <div className="relative grid items-center">
                {states.map((s, i) => (
                  <article
                    key={s.index}
                    aria-hidden={i !== active}
                    className={
                      "col-start-1 row-start-1 " +
                      (i === active ? onCls : offCls)
                    }
                  >
                    <h3 className="font-display-hero text-white tracking-tight leading-tight text-[22px] sm:text-[26px] lg:text-[32px]">
                      {s.heading}
                    </h3>
                    <p className="mt-2 lg:mt-3 text-[14.5px] lg:text-[16px] leading-relaxed text-white/65 max-w-lg">
                      {s.body}
                    </p>
                    {s.quote && (
                      <blockquote className="mt-3 lg:mt-4 border-l-2 border-primary pl-3 lg:pl-4 max-w-lg">
                        <p className="text-[13px] lg:text-[15px] leading-relaxed text-white/85 italic">
                          “{s.quote}”
                        </p>
                        <cite className="mt-1.5 block text-[12px] lg:text-[13px] not-italic text-white/50">
                          — {s.quoteBy}
                        </cite>
                      </blockquote>
                    )}
                    <div className="mt-3 lg:mt-5">
                      <div className="w-full overflow-hidden rounded-[20px] ring-1 ring-white/10 h-[132px] sm:h-[190px] lg:h-[300px] xl:h-[380px]">
                        <Image
                          src={s.img}
                          alt={s.alt}
                          width={880}
                          height={660}
                          loading={s.eager ? undefined : "lazy"}
                          sizes="(min-width: 1024px) 45vw, 90vw"
                          className={
                            "story-motion h-full w-full object-cover transition-transform duration-700 ease-out " +
                            (i === active ? "scale-100" : "scale-[1.01]")
                          }
                        />
                      </div>
                      {s.caption && (
                        <p className="mt-2 text-[12px] lg:text-[13px] text-white/50">
                          {s.caption}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sentinel spacers — drive the active state, pure scroll length */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            ref={(el) => {
              sentinels.current[i] = el;
            }}
            data-i={i}
            aria-hidden="true"
            className="h-[55vh] lg:h-[55vh]"
          />
        ))}
      </div>

      {/* Quiet release breathing before the next section */}
      <div aria-hidden="true" className="h-16 lg:h-20" />
    </section>
  );
}
