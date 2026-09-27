import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CTABand } from "@/components/sections/CTABand";
import { galleryCategories } from "@/content/gallery";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, canonical } from "@/content/seo";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Hospital, events and community galleries from Mungale Eye Hospital, Vadodara.",
  alternates: { canonical: canonical("/gallery/") },
};

// ─── 6.8 /gallery/ ──────────────────────────────────────────────────────
// Categories VERBATIM from archive/content/pages/gallery.md (page ID 4352).
// Item-level photo mapping needs MCP verification (docs/CONTENT_GAPS.md
// #10), so no photos are assigned by filename guess — the grid renders its
// honest empty state until mapping is verified.
export default function GalleryPage() {
  const categories = galleryCategories.map((c) => c.title);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery/" },
        ])}
      />
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery/" },
        ]}
        eyebrow="Resources"
        title="Gallery"
      />
      <section className="py-space-2xl bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Moments"
            title="Hospital, Events & Community"
          />
          <GalleryGrid items={[]} categories={categories} />
          {/* TODO(content): wire verified items per category once MCP
              item-mapping lands (docs/CONTENT_GAPS.md #10). */}
        </div>
      </section>
      <CTABand />
    </>
  );
}
