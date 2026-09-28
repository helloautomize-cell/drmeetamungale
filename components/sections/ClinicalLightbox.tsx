"use client";

import React from "react";

// ─── ClinicalLightbox ──────────────────────────────────────────────────────
// Shared image viewer for treatment pages (extracted from TreatmentAtlas).
// Keyboard (Esc/arrows), mobile swipe, captions, counter. Plain <img> —
// source is runtime state, not a static import.
export interface ClinicalImage {
  src: string;
  alt: string;
  caption: string;
}

export function ClinicalLightbox({
  images,
  index,
  onClose,
  onNav,
}: {
  images: ClinicalImage[];
  index: number;
  onClose: () => void;
  onNav: (dir: 1 | -1) => void;
}) {
  const touchX = React.useRef<number | null>(null);
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);
  const img = images[index];
  if (!img) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={"Image viewer: " + img.caption}
      className="fixed inset-0 z-[80] flex flex-col bg-secondary/95 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
        if (dx < -40) onNav(1);
        else if (dx > 40) onNav(-1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 py-4 text-white">
        <p className="text-[14px] tracking-wide">
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="rounded-full ring-1 ring-white/30 w-10 h-10 text-[20px] leading-none hover:bg-white/10 transition-colors"
        >
          &times;
        </button>
      </div>
      <div
        className="relative flex flex-1 items-center justify-center px-4 sm:px-16 pb-2 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => onNav(-1)}
          aria-label="Previous image"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/30 w-11 h-11 text-white text-[20px] hover:bg-white/10 transition-colors"
        >
          &larr;
        </button>
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="max-h-full max-w-full object-contain rounded-[12px]"
        />
        <button
          type="button"
          onClick={() => onNav(1)}
          aria-label="Next image"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/30 w-11 h-11 text-white text-[20px] hover:bg-white/10 transition-colors"
        >
          &rarr;
        </button>
      </div>
      <p className="px-6 pb-6 pt-2 text-center text-[14px] text-white/80">{img.caption}</p>
    </div>
  );
}
