"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// FocusReveal (§2.4, §3.2): the house reveal — an eye coming into focus.
// opacity 0→1, y 24→0, blur(8px)→0 over ~900ms expo-out. Same
// IntersectionObserver pattern as Reveal; reduced-motion collapses to a
// 200ms fade (handled in globals.css). Use on text/small elements —
// never wrap large images on mobile.
export function FocusReveal({
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
      className={cn("focus-reveal", visible && "is-visible", className)}
      style={delay > 0 ? { transitionDelay: delay + "s" } : undefined}
    >
      {children}
    </div>
  );
}
