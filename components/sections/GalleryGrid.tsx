"use client";

import React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryStripItem } from "@/components/sections/GalleryStrip";

// ─── Phase 5: GalleryGrid + Lightbox ────────────────────────────────────
// Filterable-by-category grid with keyboard-accessible lightbox (Esc closes,
// arrows navigate, body scroll locks). Items come from verified mappings
// only — see content/gallery.ts mapping notes.
export function GalleryGrid({
  items,
  categories,
}: {
  items: (GalleryStripItem & { category?: string })[];
  categories: string[];
}) {
  const [filter, setFilter] = React.useState<string>("All");
  const [lightbox, setLightbox] = React.useState<number | null>(null);

  const visible = filter === "All" ? items : items.filter((i) => i.category === filter);

  React.useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? v : (v + 1) % visible.length));
      if (e.key === "ArrowLeft")
        setLightbox((v) => (v === null ? v : (v - 1 + visible.length) % visible.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, visible.length]);

  return (
    <div>
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => { setFilter(c); setLightbox(null); }}
              className={
                "px-6 py-2.5 rounded-full font-label-md text-label-md transition-all " +
                (filter === c
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-card-white text-on-surface hover:bg-surface-tint")
              }
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {visible.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setLightbox(i)}
            className="rounded-2xl overflow-hidden shadow-sm group text-left"
            aria-label={"Open image: " + item.alt}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={640}
              height={480}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {visible.length === 0 && (
        <p className="text-center font-body-md text-body-md text-on-surface-variant py-12">
          Gallery photos are being organized — check back soon.
        </p>
      )}
      {lightbox !== null && visible[lightbox] && (
        <div className="fixed inset-0 z-[70] bg-on-surface/80 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Image viewer">
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-card-white text-on-surface"
            aria-label="Close viewer"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={() => setLightbox((lightbox - 1 + visible.length) % visible.length)}
            className="absolute left-4 p-2 rounded-full bg-card-white text-on-surface"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <Image
            src={visible[lightbox].src}
            alt={visible[lightbox].alt}
            width={1280}
            height={960}
            className="max-h-[85vh] w-auto rounded-2xl shadow-2xl"
          />
          <button
            onClick={() => setLightbox((lightbox + 1) % visible.length)}
            className="absolute right-4 p-2 rounded-full bg-card-white text-on-surface"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
