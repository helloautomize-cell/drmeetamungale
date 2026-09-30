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

    const attach = (el: Element) => {
      const r = el.getBoundingClientRect();
      if (r.height === 0 || r.bottom < 0) show(el);
      else io.observe(el);
    };

    const scan = (root: ParentNode) => {
      root.querySelectorAll(".reveal:not(.is-visible)").forEach(attach);
    };

    scan(document);

    // Client-side navigation swaps <main> without remounting this layout —
    // without this watcher those fresh .reveal nodes stay opacity:0
    // (white-screen-until-refresh bug). Mutations are batched into one rAF
    // and only the added subtrees are scanned.
    let pending: Node[] = [];
    let raf = 0;
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) pending.push(...m.addedNodes);
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const nodes = pending;
        pending = [];
        for (const n of nodes) {
          if (!(n instanceof Element)) continue;
          if (n.matches(".reveal:not(.is-visible)")) attach(n);
          scan(n);
        }
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
