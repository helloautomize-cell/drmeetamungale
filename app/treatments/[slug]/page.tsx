import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { Card } from "@/components/ui/Card";
import { RelatedTreatments } from "@/components/sections/RelatedTreatments";
import { TreatmentCorneal } from "@/components/sections/TreatmentCorneal";
import { TreatmentCorneaEval } from "@/components/sections/TreatmentCorneaEval";
import { TreatmentGlaucomaTreatments } from "@/components/sections/TreatmentGlaucomaTreatments";
import { TreatmentCataract } from "@/components/sections/TreatmentCataract";
import { TreatmentOptical } from "@/components/sections/TreatmentOptical";
import { TreatmentGlaucomaEval } from "@/components/sections/TreatmentGlaucomaEval";
import { treatments } from "@/content/treatments";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getTreatmentDetail,
  getTreatmentDetailSlugs,
} from "@/content/treatment-details";
import { procedureJsonLd, breadcrumbJsonLd, canonical } from "@/content/seo";

// ─── 6.3 /treatments/[slug]/ ×6 ─────────────────────────────────────────
// Bodies VERBATIM from archive/content/pages/<slug>.md (equipment names kept
// exactly). Slugs preserve old WordPress URLs. Related treatments +
// appointment CTA on every page.
export function generateStaticParams() {
  return getTreatmentDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const detail = getTreatmentDetail((await params).slug);
  if (!detail) return { title: "Treatments" };
  return {
    title: detail.title,
    description: detail.intro,
    alternates: { canonical: canonical("/treatments/" + detail.slug + "/") },
  };
}

export default async function TreatmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  // Rebuilt compositions (step-by-step rollout): corneal + eval live;
  // remaining siblings keep the existing template until their step.
  if (slug === "corneal-treatments") {
    return <TreatmentCorneal />;
  }
  if (slug === "cornea-evaluation") {
    return <TreatmentCorneaEval />;
  }
  if (slug === "glaucoma-treatments") {
    return <TreatmentGlaucomaTreatments />;
  }
  if (slug === "cataract-surgery") {
    return <TreatmentCataract />;
  }
  if (slug === "optical-contact-lenses") {
    return <TreatmentOptical />;
  }
  if (slug === "glaucoma-evaluation") {
    return <TreatmentGlaucomaEval />;
  }
  const detail = getTreatmentDetail(slug);
  if (!detail) notFound();

  return (
    <>
      <JsonLd data={procedureJsonLd(detail.slug)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments/" },
          { label: detail.title, href: "/treatments/" + detail.slug + "/" },
        ])}
      />
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments/" },
          { label: detail.title, href: "/treatments/" + detail.slug + "/" },
        ]}
        eyebrow="Treatments"
        title={detail.title}
        subtitle={detail.intro}
      />

      <ContentSection>
        <div className="space-y-8">
          {detail.sections.map((s) => (
            <Card key={s.heading}>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
                {s.heading}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {s.body}
              </p>
            </Card>
          ))}
        </div>
      </ContentSection>

      <RelatedTreatments currentSlug={detail.slug} treatments={treatments} />
    </>
  );
}
