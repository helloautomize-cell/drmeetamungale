import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CareDiscovery } from "@/components/sections/CareDiscovery";
import { Hero } from "@/components/sections/Hero";
import { SpecialtiesShowcase } from "@/components/sections/SpecialtiesShowcase";
import { PatientJourney } from "@/components/sections/PatientJourney";
import { TrustPillars } from "@/components/sections/TrustPillars";
import { DoctorsStory } from "@/components/sections/DoctorsStory";
import { Reviews } from "@/components/sections/Reviews";
import { HealthInsights } from "@/components/sections/HealthInsights";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { InsideMungale } from "@/components/sections/InsideMungale";
import { TeamBand } from "@/components/sections/TeamBand";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  // Absolute title — the "%s | Mungale Eye Hospital" template would
  // double-append the site name on the homepage.
  title: {
    absolute:
      "Mungale Eye Hospital — Specialist Eye Care in Kothi, Vadodara",
  },
  description:
    "Mungale Eye Hospital, Kothi, Vadodara — cataract, cornea, glaucoma and optical care by specialist ophthalmologists Dr. Sachin and Dr. Meeta Mungale. Open Mon–Sat, 9 AM–8 PM.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mungale Eye Hospital — Specialist Eye Care in Kothi, Vadodara",
    description:
      "Cataract, cornea, glaucoma and optical care by specialist ophthalmologists in Kothi, Vadodara.",
    url: siteConfig.url,
    type: "website",
  },
};

// Home page — human-touch order. Rhythm: dark hero → photo band → light
// (symptoms) → dark (why) → light (specialties) → light (journey) → light
// (doctors) → photo/team → light (stories) → light (insights) → strip →
// visit → red CTA → dark footer. Team sits between Doctors and Stories
// (not before Visit as briefed) so the big photo breaks three consecutive
// light text sections and reads "the people → their patients' words".
export default function HomePage() {
  return (
    <>
      <Hero />
      <InsideMungale />
      <CareDiscovery />
      <TrustPillars />
      <SpecialtiesShowcase />
      {/* TODO(content): confirm exact visit sequence with the doctors —
          step copy is generic process language, no source doc exists.
          See docs/CONTENT_GAPS.md. */}
      <PatientJourney />
      <DoctorsStory />
      <TeamBand />
      <Reviews />
      <HealthInsights />
      {/* Practical assurance strip (UI/UX audit): emergency line +
          cashless insurance — the two questions older patients actually
          call about. All values verbatim from siteConfig; insurance page
          exists at /insurance-cashless/. */}
      <section className="border-y border-secondary/10 bg-surface-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-7 lg:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-8">
          <a
            href={"tel:" + siteConfig.emergencyPhone.replace(/[\s-]/g, "")}
            className="group inline-flex items-center gap-3.5 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-lg"
          >
            <span className="w-10 h-10 rounded-full bg-primary/[0.08] text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
              <Phone className="w-[18px] h-[18px]" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
                Emergency care
              </span>
              <span className="mt-0.5 block text-[16px] font-bold text-on-surface">
                {siteConfig.emergencyPhone}
              </span>
            </span>
          </a>
          <Link
            href="/insurance-cashless/"
            className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
          >
            <span className="cta-quiet-text">
              Cashless insurance support — see how it works
            </span>
            <ArrowRight
              aria-hidden="true"
              className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
      <LocationBlock />
    </>
  );
}
