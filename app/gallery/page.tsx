import type { Metadata } from "next";
import Link from "next/link";
import { MasonryGallery } from "@/components/sections/MasonryGallery";
import { galleryPrograms } from "@/content/gallery";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, canonical } from "@/content/seo";
import { Reveal } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments inside Mungale Eye Hospital — people, practice, teaching and clinical results, Vadodara.",
  alternates: { canonical: canonical("/gallery/") },
};

// ─── /gallery/ — photo journal, not a component ─────────────────────────────
// 90% photography + typography, 10% UI: compact hero → masonry built from
// intrinsic image ratios → teaching/event history strip → footer. Real
// source photos only; programs preserved as verbatim text history.
export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery/" },
        ])}
      />

      {/* ── Compact hero ── */}
      <section className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-4 lg:pt-6 pb-6 lg:pb-8">
          <Reveal>
            <nav aria-label="Breadcrumb">
              <p className="font-body-md text-body-md text-on-surface-variant">
                <Link href="/" className="hover:text-on-surface transition-colors">Home</Link>
                <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
                <span aria-current="page" className="text-on-surface">Gallery</span>
              </p>
            </nav>
            <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              Resources
            </p>
            <h1 className="mt-3 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[38px] sm:text-[48px] lg:text-[56px]">
              Gallery
            </h1>
            <p className="mt-3 font-display-hero text-on-surface tracking-tight text-[22px] sm:text-[26px] leading-[1.15]">
              Moments, inside Mungale.
            </p>
            <p className="mt-2 max-w-[58ch] font-body-md text-body-md text-on-surface-variant leading-relaxed">
              People, practice, teaching and moments from the hospital.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Masonry ── */}
      <section aria-label="Photographs" className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pb-14 lg:pb-20">
          <MasonryGallery />
        </div>
      </section>

      {/* ── Teaching & events history ── */}
      <section aria-label="Teaching and events" className="bg-surface-canvas/60 border-t border-secondary/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              Teaching & events
            </p>
            <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[28px] sm:text-[36px] leading-[1.1] max-w-[22ch]">
              Knowledge shared beyond the clinic.
            </h2>
            <ol className="mt-8 border-t border-secondary/10">
              {galleryPrograms.map((title, i) => (
                <li key={title} className="flex items-baseline gap-5 border-b border-secondary/10 py-4">
                  <span aria-hidden="true" className="font-display-hero text-[13px] text-on-surface-variant w-7 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body-md text-body-md text-on-surface leading-relaxed">
                    {title}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  );
}
