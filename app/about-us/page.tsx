import type { Metadata } from "next";
import {
  AboutHero,
  StoryEra,
  OurApproach,
  ExpertiseIndex,
  FacilityPlace,
  DoctorsTeaser,
} from "@/components/sections/about";
import { JsonLd } from "@/components/seo/JsonLd";
import { physiciansJsonLd } from "@/content/doctor-schema";
import { breadcrumbJsonLd, canonical } from "@/content/seo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Mungale Eye Hospital (MEH) was established on 24th June, 2007 in Vadodara, Gujarat — a private joint venture led by two accomplished ophthalmologists.",
  alternates: { canonical: canonical("/about-us/") },
};

// ─── /about-us/ — the Mungale journey ────────────────────────────────
// All body copy VERBATIM from archive/content/pages/about-us.md (page ID
// 4319), condensed only for layout clarity. Stats use homepage-consistent
// figures (20+ verified; 40,000+/15,000+ website-claimed, NOT
// independently verified — docs/CONTENT_GAPS.md #1).
// The prompt's "14 Years / 25,000+" are stale old-site figures, NOT used.
const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us/" },
];

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={physiciansJsonLd()} />
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <AboutHero breadcrumb={breadcrumb} />
      <StoryEra />
      <OurApproach />
      <ExpertiseIndex />
      <FacilityPlace />
      <DoctorsTeaser />
    </>
  );
}
