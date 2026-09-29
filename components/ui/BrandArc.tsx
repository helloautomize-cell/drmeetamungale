"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/useReducedMotion";

// BrandArc (§2.3 signature device): the logo's red brow curve as a single
// SVG stroke. With `draw` it draws itself in (stroke-dashoffset 1→0) when
// it enters the viewport — or immediately when `immediate` is set (hero).
// Decorative only — aria-hidden. vector-effect keeps the stroke thin at
// any rendered width.
export function BrandArc({
  className,
  duration = 900,
  delay = 0,
  strokeWidth = 1.5,
  stroke = "var(--brand-red)",
  immediate = false,
}: {
  className?: string;
  duration?: number;
  delay?: number;
  strokeWidth?: number;
  stroke?: string;
  immediate?: boolean;
}) {
  const ref = React.useRef<SVGSVGElement>(null);
  const reduced = useReducedMotion();
  const [drawn, setDrawn] = React.useState(false);

  React.useEffect(() => {
    if (reduced || immediate) {
      setDrawn(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setDrawn(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced, immediate]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={cn("block", className)}
    >
      <path
        d="M2 7.5 Q50 1.5 98 6"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={drawn ? 0 : 1}
        style={{
          transition: reduced
            ? "none"
            : `stroke-dashoffset ${duration}ms var(--ease-out-expo) ${delay}ms`,
        }}
      />
    </svg>
  );
}
