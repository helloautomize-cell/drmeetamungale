"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

// ─── Reveal — the site's single allowed section reveal (quiet-luxury
// spec §3): opacity 0→1, y 16px→0, 600ms, ease [0.22,1,0.36,1], once,
// at 20% visibility. Apply to heading blocks and card groups — never
// to every paragraph. Reduced motion: plain static div.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) {
    return <div className={cn("reveal is-visible", className)}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("reveal is-visible", className)}
    >
      {children}
    </motion.div>
  );
}
