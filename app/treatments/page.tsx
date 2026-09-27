import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TreatmentsShowcase } from "@/components/sections/TreatmentsShowcase";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, canonical } from "@/content/seo";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Eye Care Treatments We Provide — Best Quality Standardized Eye Care Treatment at Mungale Eye Hospital, Vadodara.",
  alternates: { canonical: canonical("/treatments/") },
};

// ─── 6.2 /treatments/ ───────────────────────────────────────────────────
// Intro + facility lists VERBATIM from archive/content/pages/treatments.md
// (page ID 4351). Treatment cards reuse TreatmentsShowcase (verbatim card
// descriptions + real slugs).
const glaucomaDiagnostics = [
  "Comprehensive Glaucoma Work-up",
  "Applanation Tonometry",
  "Pachymetry",
  "Disc Photography",
  "Perimetry",
  "Anterior Segment OCT",
  "Optical Biometry",
];

const glaucomaSurgical = [
  "Phaco-Trab",
  "Trabeculectomy+/-Mitomycin C",
  "Trabeculectomy+/- Trabeculectomy",
  "MIGS",
  "Implant Surgeries (Ahmed Glaucoma Value)",
  "Bleb revision and repair",
  "GATT (Gonioscopy Assisted Transuluminal Trabeculotomy)",
];

const corneaDiagnostics = [
  "Comprehensive Cornea work-up (with imaging)",
  "Microbial Keratitis",
  "Dry Eye Evaluation",
  "Chemical Burns Management",
  "Allergic Eye Disease",
  "Microbiology",
  "Pachymetry",
  "Topography",
  "Contact lenses (incl. Keratoconus and Scleral Lenses)",
  "SPECULAR EM-3000",
  "Anterior Segment OCT",
  "Optical Biometry",
];

const corneaSurgical = [
  "Corneal foreign body removal",
  "Corneal tear repair",
  "Bioadhesives",
  "Pterygium Excision with Autograft",
  "Amniotic Membrane graft",
  "Penetrating Keratoplasty",
  "Deep Anterior Lamellar Keratoplasty / DSEK / DMEK",
  "Patch Grafts",
  "Anterior Stromal Puncture",
  "Punctal Plugs",
  "Phakic IOLs",
];

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="font-body-md text-body-md text-on-surface-variant flex items-start gap-2"
        >
          <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TreatmentsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments/" },
        ])}
      />
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments/" },
        ]}
        eyebrow="Eye Care Treatments We Provide"
        title="Treatments"
        subtitle="Best Quality Standardized Eye Care Treatment"
      />

      <ContentSection>
        <p>
          Mungale Eye Hospital is a super specialist eye care treatment center
          which serves each patient with an objective to prevent deterioration
          to correcting vision related problems. Our eye specialist Dr.Meeta and
          Dr. Sachin Mungale can efficiently do this due to their years of
          experience, expertise, knowledge and an exceptional array of corrective
          procedures and implementation of cutting edge technology to treat their
          patient in a better way.
        </p>
      </ContentSection>

      <TreatmentsShowcase />

      <section className="py-space-2xl bg-surface-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Glaucoma Treatment"
            title="Diagnostic Facilities & Surgical Expertise"
          />
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-4">
            Diagnostic Facilities
          </h3>
          <Card className="mb-8">
            <Checklist items={glaucomaDiagnostics} />
          </Card>
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-4">
            Surgical Expertise
          </h3>
          <Card>
            <Checklist items={glaucomaSurgical} />
          </Card>
        </div>
      </section>

      <section className="py-space-2xl bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Cornea Transplant Surgery"
            title="Diagnostic Facilities & Surgical Expertise"
          />
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-4">
            Diagnostic Facilities
          </h3>
          <Card className="mb-8">
            <Checklist items={corneaDiagnostics} />
          </Card>
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-4">
            Surgical Expertise
          </h3>
          <Card>
            <Checklist items={corneaSurgical} />
          </Card>
        </div>
      </section>

      <CTABand />
    </>
  );
}
