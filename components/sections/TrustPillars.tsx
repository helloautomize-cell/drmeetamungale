"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { Reveal } from "@/components/ui/motion";
import { ApertureImage } from "@/components/ui/ApertureImage";
import { useReducedMotion } from "@/lib/useReducedMotion";

// ─── Why Mungale — dark story band (Phase 3 — flagship spec §4.4) ──────
// Static three-column story, upgraded: the section's porcelain veil
// dissolves to ink-navy as it scrolls in (scrubbed overlay), the heading
// reveals by masked SplitText lines, each column carries index + the
// website's figure at a smaller scale (the hero's pinned scene already
// counted them up), and each photo opens with the aperture iris plus a
// gentle scrub parallax. The pull-quote keeps its red rule — drawn
// top-to-bottom on reveal.
// Copy provenance (unchanged): eyebrow/headline/state headings + bodies
// are OWNER-PROVIDED; the 20+/40,000+/15,000+ figures are the website's
// claims (docs/CONTENT_GAPS.md #1); the quote is a VERBATIM excerpt of
// Pankaj Makhijani's Google review. Photos: real Mungale photography.

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

export function TrustPillars() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !sectionRef.current) return;

      // Porcelain → ink-navy as the section enters (scrubbed veil fade).
      gsap.to("[data-pillars-veil]", {
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top 45%",
          scrub: true,
        },
      });

      // Heading — masked line reveal (SplitText lines + yPercent slide).
      const heading = sectionRef.current.querySelector("[data-pillars-h]");
      if (heading) {
        const split = new SplitText(heading, { type: "lines", mask: "lines" });
        gsap.from(split.lines, {
          yPercent: 110,
          duration: 0.9,
          stagger: 0.08,
          ease: "expo.out",
          scrollTrigger: { trigger: heading, start: "top 82%", once: true },
        });
      }

      // Photos — gentle parallax drift inside their frames (scrubbed).
      gsap.utils.toArray<HTMLElement>("[data-pillars-img]").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: sectionRef, dependencies: [reduced] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink-navy overflow-x-clip"
    >
      {/* Porcelain veil — covers the section and dissolves on entry,
          producing the background transition without touching layout.
          Skipped under reduced-motion so content is never covered. */}
      {!reduced && (
        <div
          data-pillars-veil
          className="absolute inset-0 bg-porcelain z-10 pointer-events-none"
          aria-hidden="true"
        />
      )}
      <div className="relative max-w-site mx-auto px-6 lg:px-gutter pt-16 lg:pt-24 pb-20 lg:pb-28">
        <Reveal className="max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#ff8f8f]">
            Why Mungale
          </p>
          <h2
            data-pillars-h
            className="mt-4 font-display-hero text-white tracking-[-0.015em] leading-[1.04] text-[36px] sm:text-[44px] lg:text-[54px]"
          >
            Specialist care, with the time to explain.
          </h2>
          {/* Structural microcopy, not a claim. */}
          <p className="mt-4 text-[16px] text-white/60">
            Three numbers. One story.
          </p>
        </Reveal>

        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          {states.map((s, i) => (
            <Reveal key={s.index} delay={i * 0.1} className="min-w-0">
              <article className="flex h-full flex-col">
                <p className="text-[12px] font-bold tracking-[0.22em] text-[#ff8f8f]">
                  {s.index}
                </p>
                {/* The figure stays — but smaller now; the hero scene owns
                    the giant count-up moment. */}
                <p className="mt-2 font-display-hero text-porcelain leading-[0.95] tracking-tight text-[40px] lg:text-[46px] whitespace-nowrap tabular-nums">
                  {s.value}
                </p>
                <p className="mt-2 text-[15px] text-white/65">{s.label}</p>

                <div className="mt-6 border-t border-line-dark pt-6">
                  <h3 className="font-display-hero text-white tracking-tight leading-tight text-[22px] lg:text-[25px]">
                    {s.heading}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-white/65">
                    {s.body}
                  </p>
                  {s.quote && (
                    <blockquote className="relative mt-4 pl-4">
                      <span
                        aria-hidden="true"
                        className="rule-grow-y absolute left-0 top-0 bottom-0 w-[2px] bg-primary"
                      />
                      <p className="text-[14px] leading-relaxed text-white/85 italic">
                        “{s.quote}”
                      </p>
                      <cite className="mt-1.5 block text-[12.5px] not-italic text-white/50">
                        — {s.quoteBy}
                      </cite>
                    </blockquote>
                  )}
                </div>

                <div className="mt-6">
                  <ApertureImage className="aspect-[4/3] w-full overflow-hidden rounded-[16px] ring-1 ring-white/10">
                    <div data-pillars-img className="h-full w-full scale-[1.18]">
                      <Image
                        src={s.img}
                        alt={s.alt}
                        width={880}
                        height={660}
                        loading={s.eager ? undefined : "lazy"}
                        sizes="(min-width: 1024px) 30vw, 90vw"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </ApertureImage>
                  {s.caption && (
                    <p className="mt-2 text-[13px] text-white/50">{s.caption}</p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
