"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

// ─── Specialties — horizontal pinned showcase (Phase 3, spec §4.6) ─────
// Desktop ≥1024px: the section pins and scrubs sideways through four
// large cards; a hairline progress bar fills red along the bottom.
// Mobile: native snap-scroll carousel, no pin (per guardrails).
// Content: titles/descriptions VERBATIM from content/treatments.ts;
// tags are conservative condition lists derived from the same published
// copy (no invented services). Links only to existing treatment routes.
// Photos: each treatment page's own verified hero image.

const SPECIALTIES = [
  {
    num: "01",
    title: "Cataract Surgery",
    slug: "cataract-surgery",
    description:
      "Removes the clouded lens with advanced phaco technology, replacing it with a suitable intraocular lens.",
    tags: ["Clouded lens", "Phacoemulsification", "Lens implants"],
    img: "/images/treatments/ct2.jpg",
    alt: "Oertli CataRhex 3 surgical platform for cataract surgery",
  },
  {
    num: "02",
    title: "Cornea",
    slug: "corneal-treatments",
    description:
      "Medication, surgery or specialised therapies for infections, injuries and conditions.",
    tags: ["Infections", "Injuries", "Transplants"],
    img: "/images/treatments/cb1.jpg",
    alt: "Clouded cornea photographed at Mungale Eye Hospital",
  },
  {
    num: "03",
    title: "Glaucoma",
    slug: "glaucoma-treatments",
    description:
      "Eye drops, medications, laser therapy and surgical options to lower eye pressure.",
    tags: ["Eye pressure", "Visual field", "Laser & surgery"],
    img: "/images/treatments/gt1.jpg",
    alt: "YAG laser machine used for peripheral iridotomy",
  },
  {
    num: "04",
    title: "Optical & Contact Lenses",
    slug: "optical-contact-lenses",
    description:
      "Glasses and contact lenses correcting myopia, hyperopia and astigmatism.",
    tags: ["Myopia", "Hyperopia", "Astigmatism"],
    img: "/images/treatments/op1.jpg",
    alt: "Spectacle frames on display at the Mungale optical",
  },
];

function SpecialtyCard({ s }: { s: (typeof SPECIALTIES)[number] }) {
  return (
    <article className="group w-[82vw] sm:w-[520px] lg:w-[560px] shrink-0 snap-center bg-paper rounded-media ring-1 ring-line overflow-hidden flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={s.img}
          alt={s.alt}
          width={1120}
          height={630}
          loading="lazy"
          sizes="(min-width: 1024px) 560px, 82vw"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <span
          aria-hidden="true"
          className="absolute top-4 left-5 font-display-hero leading-none text-[64px] lg:text-[72px] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)] select-none"
        >
          {s.num}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <h3 className="font-display-hero text-ink tracking-tight leading-tight text-[26px] lg:text-[30px]">
          {s.title}
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
          {s.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="What we treat">
          {s.tags.map((t) => (
            <li
              key={t}
              className="rounded-full ring-1 ring-line bg-porcelain px-3 py-1 text-[12px] font-medium text-ink-soft"
            >
              {t}
            </li>
          ))}
        </ul>
        <Link
          href={"/treatments/" + s.slug + "/"}
          className="cta-quiet group/link mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-ink w-fit"
        >
          <span className="cta-quiet-text">Explore</span>
          <ArrowRight
            aria-hidden="true"
            className="w-4 h-4 text-brand-red-strong transition-transform duration-200 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}

export function SpecialtiesShowcase() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const barRef = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Mobile progress: mirror native track scroll into the same hairline.
  const onTrackScroll = () => {
    const track = trackRef.current;
    const bar = barRef.current;
    if (!track || !bar) return;
    const max = track.scrollWidth - track.clientWidth;
    bar.style.transform = "scaleX(" + (max > 0 ? track.scrollLeft / max : 0) + ")";
  };

  useGSAP(
    () => {
      if (reduced) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const track = trackRef.current;
        const viewport = viewportRef.current;
        if (!track || !viewport) return;
        const amount = () =>
          Math.max(0, track.scrollWidth - viewport.clientWidth);
        gsap.to(track, {
          x: () => -amount(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => "+=" + amount(),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (barRef.current)
                barRef.current.style.transform =
                  "scaleX(" + self.progress + ")";
            },
          },
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [reduced] }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-porcelain overflow-x-clip lg:h-[100svh] lg:min-h-[720px] lg:flex lg:flex-col lg:justify-center py-20 lg:py-0"
    >
      <div className="max-w-site mx-auto w-full px-6 lg:px-gutter">
        <Reveal className="max-w-3xl">
          <Eyebrow>Our specialties</Eyebrow>
          <h2 className="mt-4 font-fluid-h2 text-fluid-h2 text-ink tracking-[-0.015em]">
            Four areas of care. One careful approach.
          </h2>
        </Reveal>
      </div>

      <div ref={viewportRef} className="mt-10 lg:mt-14 lg:overflow-hidden">
        <div
          ref={trackRef}
          onScroll={onTrackScroll}
          className="flex w-max gap-5 lg:gap-8 px-6 lg:px-gutter overflow-x-auto snap-x snap-mandatory lg:overflow-visible no-scrollbar"
        >
          {SPECIALTIES.map((s) => (
            <SpecialtyCard key={s.slug} s={s} />
          ))}
          {/* End spacer so the last card clears the right gutter */}
          <li aria-hidden="true" className="w-2 lg:w-[10vw] shrink-0 list-none" />
        </div>
      </div>

      {/* Scroll progress hairline — fills red with horizontal progress */}
      <div className="max-w-site mx-auto w-full px-6 lg:px-gutter mt-10 lg:mt-14">
        <div className="h-[2px] w-full bg-line overflow-hidden rounded-full">
          <div
            ref={barRef}
            className="h-full w-full bg-brand-red-strong origin-left scale-x-0"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
