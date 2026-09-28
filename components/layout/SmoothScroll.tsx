"use client";

import React from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// ─── SmoothScroll — Lenis site-wide smooth scrolling ───────────────────────
// Native-scroll smoothing (window scroll events keep firing, so the
// auto-hide header, IntersectionObserver reveals, scrollspy and sticky
// rails all behave unchanged). Skipped entirely under
// prefers-reduced-motion. Anchor links handled by Lenis.
export function SmoothScroll() {
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      anchors: true,
    });
    return () => lenis.destroy();
  }, []);
  return null;
}
