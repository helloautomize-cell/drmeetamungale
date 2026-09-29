"use client";

import * as React from "react";
import { Marquee } from "@/components/ui/Marquee";

// ─── Specialty marquee (Phase 2 — flagship spec §4.3) ─────────────────
// Thin editorial band between hero and Why-Mungale: large Fraunces terms
// alternating filled/outlined, separated by an iris glyph (grey ring,
// red pupil — drawn from the logo). 40s loop, pauses on hover, static
// under reduced-motion. Direction subtly follows scroll direction.
// Copy: spec-listed terms only — decorative band, no links, no claims.

const ITEMS = [
  "Cataract Surgery",
  "Cornea & Transplant",
  "Glaucoma Care",
  "Dry Eye",
  "Optical & Contact Lenses",
  "Since 2007",
  "Kothi, Vadodara",
];

function IrisGlyph() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="mx-6 lg:mx-8 w-4 h-4 lg:w-5 lg:h-5 shrink-0"
      aria-hidden="true"
      fill="none"
    >
      <circle cx="8" cy="8" r="6.5" stroke="var(--iris-grey)" strokeWidth="1.2" />
      <circle cx="8" cy="8" r="2.4" fill="var(--brand-red)" />
    </svg>
  );
}

export function SpecialtyMarquee() {
  const [reverse, setReverse] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lastY.current = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const y = window.scrollY;
        const d = y - lastY.current;
        if (Math.abs(d) > 4) setReverse(d < 0);
        lastY.current = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section aria-label="Specialties" className="border-y border-line bg-porcelain py-6 lg:py-8 overflow-hidden">
      <Marquee duration={40} reverse={reverse}>
        {ITEMS.map((item, i) => (
          <span key={item} className="flex items-center shrink-0">
            <span
              className={
                "font-display-hero whitespace-nowrap text-[30px] sm:text-[40px] lg:text-[50px] leading-none tracking-[-0.01em] " +
                (i % 2 === 0
                  ? "text-ink"
                  : "text-transparent [-webkit-text-stroke:1px_rgba(14,17,22,0.4)]")
              }
            >
              {item}
            </span>
            <IrisGlyph />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
