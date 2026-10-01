"use client";

import React from "react";

// ─── ClinicalPhoto ──────────────────────────────────────────────────────
// Clinical photographs sit behind a tap: blurred, overlaid with
// "Clinical photograph — tap to view". Reveals on click / Enter / Space.
// Pass onView to keep a follow-up action (e.g. lightbox) once revealed.

export function isClinicalPhoto(img: { caption?: string }): boolean {
  return (img.caption ?? "").toLowerCase().includes("clinical photograph");
}

export function ClinicalPhoto({
  children,
  onView,
  viewLabel,
  frame = "block w-full overflow-hidden rounded-[16px] ring-1 ring-secondary/10",
}: {
  children: React.ReactNode;
  onView?: () => void;
  viewLabel?: string;
  /** Frame classes for the wrapped element when this component owns the box. */
  frame?: string;
}) {
  const [shown, setShown] = React.useState(false);

  if (!shown) {
    return (
      <button
        type="button"
        onClick={() => setShown(true)}
        aria-label="Clinical photograph — tap to view"
        className={frame + " relative text-left cursor-pointer"}
      >
        <span aria-hidden="true" className="block [&_img]:blur-xl [&_img]:scale-110">
          {children}
        </span>
        <span className="absolute inset-0 flex items-center justify-center bg-secondary/45 px-3">
          <span className="rounded-full bg-secondary/85 px-4 py-2 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white">
            Clinical photograph — tap to view
          </span>
        </span>
      </button>
    );
  }

  if (onView) {
    return (
      <button type="button" onClick={onView} aria-label={viewLabel} className={frame}>
        {children}
      </button>
    );
  }
  return <>{children}</>;
}
