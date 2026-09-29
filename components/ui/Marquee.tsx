import * as React from "react";
import { cn } from "@/lib/utils";

// Marquee (§2.4): slow infinite band, CSS-driven (transform only, GPU-safe).
// Track contains the content twice for a seamless -50% loop; the second
// copy is aria-hidden. Pauses on hover; static under reduced-motion.
// `reverse` flips direction — Phase 2 wires it to Lenis scroll velocity.
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("marquee overflow-hidden", className)}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div
        className="marquee-track flex w-max items-center"
        style={
          reverse ? { animationDirection: "reverse" } : undefined
        }
      >
        {children}
        <div className="flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
