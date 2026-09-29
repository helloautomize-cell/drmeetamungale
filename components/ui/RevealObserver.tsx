"use client";

import { useEffect } from "react";

// ─── RevealObserver — the only JS behind .reveal sections (perf pass).
// Mounted once in the root layout. One IntersectionObserver watches every
// .reveal element, adds .is-visible at 20% visibility, then unobserves.
// Elements already scrolled past (or zero-size, e.g. responsive
// duplicates hidden at this breakpoint) are marked immediately, so a
// fast fling can never strand a section at opacity 0.
// Respects reduced-motion via CSS (observer still adds the class, but
// the transition is disabled).
export function RevealObserver() {
  useEffect(() => {
    const show = (el: Element) => el.classList.add("is-visible");

    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(".reveal").forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Reveal on 20% visible, or once the element has already passed
          // above the viewport (fast-scroll guard).
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2 }
    );

    // useEffect runs after hydration, so every SSR-rendered .reveal is
    // already in the DOM — a MutationObserver isn't needed.
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.height === 0 || r.bottom < 0) show(el);
      else io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
