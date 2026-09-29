import React from "react";
import { cn } from "@/lib/utils";

// BrandArc — the logo's red brow curve as a single SVG stroke.
// Static per the quiet-luxury spec (§5.2): no draw-on animation.
export function BrandArc({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 16"
      fill="none"
      aria-hidden="true"
      className={cn("text-brand-red", className)}
    >
      <path
        d="M4 13 C30 2 60 1 116 9"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
