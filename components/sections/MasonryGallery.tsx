"use client";

import React from "react";
import Image from "next/image";
import {
  galleryPhotos,
  galleryFilters,
  type GalleryFilter,
  type GalleryPhoto,
} from "@/content/gallery";
import { ClinicalLightbox, type ClinicalImage } from "@/components/sections/ClinicalLightbox";

// ─── MasonryGallery ────────────────────────────────────────────────────────
// Photo-journal masonry: true CSS columns, NATURAL intrinsic ratios
// (width/height attrs → zero CLS, no layout jump), no cropping, no cards.
// Filters with live counts; curated initial set + "View more moments";
// failed images vanish without holes; shared lightbox (keyboard/swipe).
const INITIAL_COUNT = 12;

function toClinical(p: GalleryPhoto): ClinicalImage {
  return {
    src: p.src,
    alt: p.alt,
    caption: p.caption ?? (p.group === "clinical" ? "Clinical photograph" : "Hospital photograph"),
  };
}

export function MasonryGallery() {
  const [filter, setFilter] = React.useState<GalleryFilter>("all");
  const [failed, setFailed] = React.useState<string[]>([]);
  const [expanded, setExpanded] = React.useState(false);
  const [lb, setLb] = React.useState<number | null>(null);

  const valid = React.useMemo(
    () => galleryPhotos.filter((p) => !failed.includes(p.src)),
    [failed]
  );
  const visible = React.useMemo(
    () => (filter === "all" ? valid : valid.filter((p) => p.group === filter)),
    [valid, filter]
  );
  const shown = expanded ? visible : visible.slice(0, INITIAL_COUNT);

  const markFailed = React.useCallback(
    (src: string) => setFailed((f) => (f.includes(src) ? f : [...f, src])),
    []
  );
  const nav = React.useCallback(
    (dir: 1 | -1) => {
      setLb((i) => (i === null ? i : (i + dir + visible.length) % visible.length));
    },
    [visible.length]
  );
  const openAt = (src: string) => {
    const i = visible.findIndex((p) => p.src === src);
    if (i >= 0) setLb(i);
  };
  const pick = (id: GalleryFilter) => {
    setFilter(id);
    setExpanded(false);
    setLb(null);
  };

  return (
    <div>
      <div
        role="group"
        aria-label="Filter gallery"
        className="flex gap-x-7 gap-y-2 overflow-x-auto whitespace-nowrap pb-1"
      >
        {galleryFilters.map((f) => {
          const count =
            f.id === "all" ? valid.length : valid.filter((p) => p.group === f.id).length;
          const selected = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={selected}
              onClick={() => pick(f.id)}
              className={
                "shrink-0 min-h-[44px] text-[13px] font-bold uppercase tracking-[0.14em] border-b-2 pb-1 transition-colors motion-reduce:transition-none " +
                (selected
                  ? "border-primary text-primary-fixed"
                  : "border-transparent text-on-surface-variant hover:text-on-surface")
              }
            >
              {f.label} <span className="font-normal">({count})</span>
            </button>
          );
        })}
      </div>

      {shown.length === 0 ? (
        <p className="mt-8 font-body-md text-body-md text-on-surface-variant">
          No photographs here right now.
        </p>
      ) : (
        <div className="mt-8 columns-2 md:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
          {shown.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => openAt(p.src)}
              aria-label={"Open photograph in viewer" + (p.caption ? ": " + p.caption : "")}
              className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[10px] bg-surface-canvas text-left"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 44vw"
                loading={i < 4 ? "eager" : "lazy"}
                onError={() => markFailed(p.src)}
                className="w-full h-auto object-contain transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.015]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between px-3.5 pb-3 pt-10 bg-gradient-to-t from-secondary/55 to-transparent opacity-0 transition-opacity duration-300 motion-reduce:transition-none group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white">
                  {p.group === "clinical" ? "Clinical" : "Moments"}
                </span>
                <span className="text-white text-[16px]">↗</span>
              </span>
            </button>
          ))}
        </div>
      )}

      {!expanded && visible.length > INITIAL_COUNT && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="group mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
        >
          <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
            View more moments
          </span>
          <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
        </button>
      )}

      {lb !== null && visible[lb] && (
        <ClinicalLightbox
          images={visible.map(toClinical)}
          index={lb}
          onClose={() => setLb(null)}
          onNav={nav}
        />
      )}
    </div>
  );
}
