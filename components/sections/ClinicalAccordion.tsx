"use client";

import React from "react";

// ─── ClinicalAccordion ─────────────────────────────────────────────────────
// Single expandable item: strong title row + smooth max-height reveal of
// verbatim source body. Keyboard-native <button>, aria-expanded, 44px+
// tap target. (Extracted from TreatmentAtlas DetailItem.)
export function ClinicalAccordion({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = React.useState(false);
  const bodyRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className="border-b border-secondary/10">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-baseline gap-4 py-4 text-left min-h-[44px]"
      >
        <span className="flex-1 font-body-md text-body-md font-semibold text-on-surface">
          {title}
        </span>
        <span
          aria-hidden="true"
          className={
            "shrink-0 text-[20px] leading-none transition-transform duration-300 motion-reduce:transition-none " +
            (open ? "rotate-45 text-primary-fixed" : "text-on-surface-variant")
          }
        >
          +
        </span>
      </button>
      <div
        ref={bodyRef}
        style={{ maxHeight: open ? (bodyRef.current?.scrollHeight ?? 1000) + "px" : "0px" }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out motion-reduce:transition-none"
      >
        <p className="pb-5 pr-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  );
}
