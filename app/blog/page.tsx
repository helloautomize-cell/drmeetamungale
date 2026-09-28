import type { Metadata } from "next";
import Link from "next/link";
import { JournalExplorer } from "@/components/sections/JournalExplorer";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, canonical } from "@/content/seo";
import { Reveal } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Understand your eyes — clear, practical eye-health guidance from Mungale Eye Hospital, Vadodara. Search 26 articles on cataract, glaucoma, cornea and everyday eye care.",
  alternates: { canonical: canonical("/blog/") },
};

// ─── /blog/ — editorial eye-health journal ────────────────────────────────
// All 26 live posts (newest first) with covers, source excerpts and
// word-count read times. Magazine cover story + rhythm grid + concern
// browser + load-more. Trust copy says "from Mungale Eye Hospital" —
// author data does not prove doctor authorship, so no byline claims.
export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
        ])}
      />

      <section className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-4 lg:pt-6 pb-6 lg:pb-8">
          <Reveal>
            <nav aria-label="Breadcrumb">
              <p className="font-body-md text-body-md text-on-surface-variant">
                <Link href="/" className="hover:text-on-surface transition-colors">Home</Link>
                <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
                <span aria-current="page" className="text-on-surface">Blog</span>
              </p>
            </nav>
            <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              Eye health, explained
            </p>
            <h1 className="mt-3 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[38px] sm:text-[48px] lg:text-[56px]">
              Understand your eyes.
            </h1>
            <p className="mt-4 max-w-[60ch] font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Clear, practical guidance from Mungale Eye Hospital.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Article journal" className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <JournalExplorer />
        </div>
      </section>
    </>
  );
}
