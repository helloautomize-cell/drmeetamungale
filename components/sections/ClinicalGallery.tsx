"use client";

import React from "react";
import Image from "next/image";
import { ClinicalLightbox, type ClinicalImage } from "@/components/sections/ClinicalLightbox";

// ─── ClinicalGallery ───────────────────────────────────────────────────────
// Self-contained: 1 large lead + up to 2 thumbnails + "View all N images"
// opening the shared lightbox. Captions under the lead. Thumbnails and the
// view-all entry are ≥44px tap targets.
export function ClinicalGallery({
  images,
  leadAspect = "aspect-[4/3]",
}: {
  images: ClinicalImage[];
  leadAspect?: string;
}) {
  const [lightbox, setLightbox] = React.useState<number | null>(null);
  const lead = images[0];
  const thumbs = images.slice(1, 3);
  const nav = React.useCallback(
    (dir: 1 | -1) => {
      setLightbox((i) => {
        if (i === null) return i;
        return (i + dir + images.length) % images.length;
      });
    },
    [images.length]
  );
  if (!lead) return null;
  return (
    <div>
      <button
        type="button"
        onClick={() => setLightbox(0)}
        aria-label={"Open image in viewer: " + lead.caption}
        className="block w-full overflow-hidden rounded-[20px] ring-1 ring-secondary/10"
      >
        <Image
          src={lead.src}
          alt={lead.alt}
          width={800}
          height={600}
          sizes="(min-width: 1024px) 40vw, 90vw"
          className={"w-full object-cover transition-transform duration-700 motion-reduce:transition-none hover:scale-[1.02] " + leadAspect}
        />
      </button>
      <p className="mt-3 text-[13px] text-on-surface-variant">{lead.caption}</p>
      {thumbs.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {thumbs.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox(i + 1)}
              aria-label={"Open image in viewer: " + img.caption}
              className="block overflow-hidden rounded-[16px] ring-1 ring-secondary/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                sizes="(min-width: 1024px) 20vw, 44vw"
                className="w-full aspect-square object-cover transition-transform duration-700 motion-reduce:transition-none hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      )}
      {images.length > 1 && (
        <button
          type="button"
          onClick={() => setLightbox(0)}
          className="group mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-on-surface min-h-[44px]"
        >
          <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
            View all {images.length} images
          </span>
          <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
        </button>
      )}
      {lightbox !== null && (
        <ClinicalLightbox
          images={images}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onNav={nav}
        />
      )}
    </div>
  );
}
