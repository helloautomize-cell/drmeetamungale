import type { Metadata } from "next";
import Link from "next/link";
import { AtlasHero } from "@/components/sections/AtlasHero";
import { TreatmentAtlas } from "@/components/sections/TreatmentAtlas";
import { atlasFacilities, atlasTreatments } from "@/content/treatments-atlas";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, canonical } from "@/content/seo";
import { Reveal } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Specialist eye care, explained clearly — diagnosis, treatment, surgery and vision correction at Mungale Eye Hospital, Vadodara.",
  alternates: { canonical: canonical("/treatments/") },
};

// ─── /treatments/ — Treatment Atlas ─────────────────────────────────────────
// Editorial rebuild: hero → care navigator → six treatment chapters →
// supporting facilities → calm closing CTA. Chapter content is verbatim live
// source (content/treatments-atlas.ts); child routes untouched.
export default function TreatmentsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments/" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Treatment Atlas — Mungale Eye Hospital",
          itemListElement: atlasTreatments.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.title,
            url: canonical("/treatments/" + t.slug + "/"),
          })),
        }}
      />

      <AtlasHero />

      <TreatmentAtlas />

      {/* ── Care around your treatment ── */}
      <section aria-label="Care around your treatment" className="bg-surface-canvas/60 border-t border-secondary/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              Care around your treatment
            </p>
            <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[28px] sm:text-[36px] leading-[1.1]">
              The hospital, behind the treatment.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {atlasFacilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="border-t-2 border-secondary/70 pt-5">
                  <h3 className="font-display-hero text-on-surface tracking-tight text-[22px]">
                    {f.title}
                  </h3>
                  <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link
              href="/about-us/"
              className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface"
            >
              <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                See the hospital
              </span>
              <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

    </>
  );
}
