import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

// ─── 4.8 Facility gallery strip ─────────────────────────────────────────
// Replaces the reference's before/after section entirely (eye hospital —
// no before/after content exists in source). Renders caller-provided items;
// item-level photo→category mapping is pending MCP verification
// (docs/CONTENT_GAPS.md #10), so the homepage does not render this section
// yet. Built now for Phase 6 (/gallery/) reuse.
export interface GalleryStripItem {
  src: string;
  alt: string;
  caption?: string;
}

export function GalleryStrip({ items }: { items: GalleryStripItem[] }) {
  if (items.length === 0) return null;
  return (
    <section className="py-space-2xl bg-surface-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Our Facility"
          title="Inside Mungale Eye Hospital"
          subtitle="Glimpses of our hospital, events and community programs."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.slice(0, 4).map((item) => (
            <div key={item.src} className="rounded-2xl overflow-hidden shadow-sm group">
              <Image
                src={item.src}
                alt={item.alt}
                width={640}
                height={480}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/gallery/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-surface-tint hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md transition-colors"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-[18px] h-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
