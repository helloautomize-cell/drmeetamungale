import { CareDiscovery } from "@/components/sections/CareDiscovery";
import { Hero } from "@/components/sections/Hero";
import { TrustPillars } from "@/components/sections/TrustPillars";
import { DoctorsStory } from "@/components/sections/DoctorsStory";
import { Reviews } from "@/components/sections/Reviews";
import { HealthInsights } from "@/components/sections/HealthInsights";
import { LocationBlock } from "@/components/sections/LocationBlock";

// Home page — section composition per docs/SECTION_MAP.md Part 2.
// Built one section per Phase 4 task (4.1–4.12), master-prompt order.
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustPillars />
      <CareDiscovery />
      {/* TODO(content): patient-journey — no visit-process description exists in
          source (checked home/about/faqs/treatment pages). Do not invent steps.
          See docs/CONTENT_GAPS.md. */}
      <DoctorsStory />
      <Reviews />
      <HealthInsights />
      <LocationBlock />
    </>
  );
}
