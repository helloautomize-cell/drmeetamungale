"use client";

import * as React from "react";

// Single source of truth for motion opt-out. Every animated component
// consumes this; when true, render statically (content visible, no pins,
// no parallax, no blur) per the non-negotiable guardrails (§3.3).
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState<boolean>(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
