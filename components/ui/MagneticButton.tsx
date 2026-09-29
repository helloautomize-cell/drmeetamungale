"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/useReducedMotion";

// MagneticButton (§2.4): subtle pointer attraction, max 6px pull, desktop
// fine-pointer only. Pure transform on the wrapper — the child (Button,
// Link, anything) is untouched. Spring-back via expo-out transition.
export function MagneticButton({
  children,
  strength = 6,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || reduced || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const pull = Math.min(
      strength,
      Math.hypot(dx, dy) * 0.12
    );
    const angle = Math.atan2(dy, dx);
    el.style.transform = `translate(${Math.cos(angle) * pull}px, ${Math.sin(angle) * pull}px)`;
    el.style.transition = "transform 60ms linear";
  };

  const onPointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 350ms var(--ease-out-expo)";
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={cn("inline-block will-change-transform", className)}
    >
      {children}
    </div>
  );
}
