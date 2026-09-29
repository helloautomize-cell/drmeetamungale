"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import "lenis/dist/lenis.css";

// ─── MotionProvider — the site's motion spine (§3.1) ────────────────────
// ReactLenis root smooth-scrolls the window (native scroll events keep
// firing, so IntersectionObserver reveals, the auto-hide header and
// sticky rails behave unchanged). GSAP drives Lenis' raf via gsap.ticker
// and ScrollTrigger stays in sync on lenis scroll. Plugins registered
// once here, at module level — all GSAP code lives in client components.
// Reduced motion: Lenis never mounts; content renders statically.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
}

// Stable reference — a fresh options object each render would make
// ReactLenis destroy/recreate the Lenis instance, orphaning the raf
// driver below and freezing wheel scroll entirely.
const LENIS_OPTIONS = { autoRaf: false, lerp: 0.1, anchors: true };

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = React.useRef<LenisRef>(null);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  // Drive Lenis from gsap.ticker (autoRaf off). The instance is read via
  // the ref on EVERY tick so a recreated instance never orphans the raf.
  React.useEffect(() => {
    if (reduced) return;
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, [reduced]);

  // ScrollTrigger sync — rebound on every render so a recreated Lenis
  // instance gets a fresh listener instead of a stale one.
  React.useEffect(() => {
    if (reduced) return;
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;
    lenis.on("scroll", ScrollTrigger.update);
    return () => lenis.off("scroll", ScrollTrigger.update);
  });

  // Route change: let new page's triggers register, then re-measure.
  React.useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => clearTimeout(t);
  }, [pathname]);

  // Re-measure once webfonts settle (SplitText line metrics depend on them).
  React.useEffect(() => {
    if (typeof document === "undefined" || !document.fonts) return;
    let done = false;
    const refresh = () => {
      if (done) return;
      done = true;
      ScrollTrigger.refresh();
    };
    document.fonts.ready.then(refresh).catch(() => {});
    const t = setTimeout(refresh, 2500);
    return () => clearTimeout(t);
  }, []);

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={LENIS_OPTIONS}
    >
      {children}
    </ReactLenis>
  );
}
