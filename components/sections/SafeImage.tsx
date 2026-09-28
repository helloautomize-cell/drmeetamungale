"use client";

import React from "react";
import Image from "next/image";

// ─── SafeImage ─────────────────────────────────────────────────────────────
// next/image wrapper with graceful failure: if the source fails, the block
// reports via onFail and renders nothing — never a broken icon, never alt
// text as content, never an empty reserved box. Parents adapt (text-led).
export function SafeImage({
  src,
  alt,
  width = 700,
  height = 525,
  sizes = "(min-width: 1024px) 35vw, 90vw",
  className = "w-full aspect-[4/3] object-cover",
  onFail,
  eager,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  onFail?: (src: string) => void;
  eager?: boolean;
}) {
  const [failed, setFailed] = React.useState(false);
  if (failed) return null;
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={eager}
      className={className}
      onError={() => {
        setFailed(true);
        onFail?.(src);
      }}
    />
  );
}
