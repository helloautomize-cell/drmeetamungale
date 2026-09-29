"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// ApertureImage (§2.3 secondary device): iris-like circular clip-path that
// opens as the element scrolls into view (circle 18% → 120%, expo-out).
// Wrap any media — the wrapper only carries the mask; keep border-radius
// and sizing on this div or the child. Reduced-motion: no mask.
export function ApertureImage({
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("aperture-reveal", visible && "is-visible", className)}
      style={delay > 0 ? { transitionDelay: delay + "s" } : undefined}
    >
      {children}
    </div>
  );
}
