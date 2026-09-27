import type { Metadata } from "next";
import {
  AboutHero,
  StoryTimeline,
  AboutStats,
  MissionExpertise,
  FacilityStrip,
} from "@/components/sections/about";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/motion";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { DoctorCard } from "@/components/sections/DoctorCard";
import { Reviews } from "@/components/sections/Reviews";
import { CTABand } from "@/components/sections/CTABand";
import { doctors } from "@/content/doctors";
import { JsonLd } from "@/components/seo/JsonLd";
import { physiciansJsonLd, breadcrumbJsonLd, canonical } from "@/content/seo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Mungale Eye Hospital (MEH) was established on 24th June, 2007 in Vadodara, Gujarat — a private joint venture led by two accomplished ophthalmologists.",
  alternates: { canonical: canonical("/about-us/") },
};

// ─── 6.1 /about-us/ ─────────────────────────────────────────────────────
// All body copy VERBATIM from archive/content/pages/about-us.md (page ID 4319).
// Stats use homepage-consistent figures (20+ verified; 40,000+/15,000+
// website-claimed, NOT independently verified — docs/CONTENT_GAPS.md #1).
// The prompt's "14 Years / 25,000+" are stale old-site figures, NOT used.
const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
];

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={physiciansJsonLd()} />
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <AboutHero breadcrumb={breadcrumb} />
      <StoryTimeline />
      <AboutStats />
      <MissionExpertise />
      <FacilityStrip />

      <section className="py-space-2xl bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <SectionHeader
              eyebrow="Our Doctors"
              title="Meet Our Senior Ophthalmologists"
            />
          </Reveal>
          <FeatureGrid columns={2}>
            {doctors.map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </FeatureGrid>
        </div>
      </section>

      <Reviews />
      <CTABand />
    </>
  );
}
