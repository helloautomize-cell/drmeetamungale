"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Scroll-triggered fade + slide-up wrapper for cards and section headers.
// Zero-dependency: IntersectionObserver + CSS transition (transform/opacity
// only, GPU-safe). Respects prefers-reduced-motion (renders statically).
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -64px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={"reveal" + (visible ? " is-visible" : "") + (className ? " " + className : "")}
      style={delay > 0 ? { transitionDelay: delay + "s" } : undefined}
    >
      {children}
    </div>
  );
}

function formatCount(value: number): string {
  return value.toLocaleString("en-IN");
}

// Animated count-up for stat numbers. Handles "40,000+" style values via
// `to` + `suffix`, and non-numeric values (e.g. "24/7") via plain render.
export function CountUp({
  to,
  suffix = "",
  duration = 1.4,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const reduce = React.useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const ref = React.useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = React.useState("0" + suffix);
  const started = React.useRef(false);

  React.useEffect(() => {
    if (reduce) {
      setDisplay(formatCount(to) + suffix);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(formatCount(Math.round(to * eased)) + suffix);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, suffix, duration, reduce]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </span>
  );
}

// Gentle scroll parallax: translates children upward as the section moves
// through the viewport (transform-only, rAF-throttled, reduced-motion safe).
export function Parallax({
  children,
  amount = 36,
  className,
}: {
  children: React.ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const p = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.transform = "translateY(" + (-p * amount).toFixed(1) + "px)";
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [amount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
