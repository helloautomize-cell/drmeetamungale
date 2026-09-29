import React from "react";
import { cn } from "@/lib/utils";

// ─── Reveal — the site's single allowed section reveal (quiet-luxury
// spec §3): opacity 0→1, y 16px→0, 600ms, ease cubic-bezier(.22,1,.36,1),
// once, at 20% visibility. Apply to heading blocks and card groups —
// never to every paragraph.
// Perf pass: this is a plain server-rendered div with class "reveal".
// A single IntersectionObserver (components/ui/RevealObserver.tsx,
// mounted once in the root layout) adds "is-visible". CSS lives in
// globals.css and only hides content under html.js, so nothing is
// ever hidden if JS fails. Reduced motion: static, no transform.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay * 1000}ms` } : undefined}
    >
      {children}
    </div>
  );
}
