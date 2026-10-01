import type { Metadata } from "next";
import type { ComponentType } from "react";
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
import { procedureJsonLd, medicalWebPageJsonLd, breadcrumbJsonLd, canonical } from "@/content/seo";
import { siteConfig } from "@/content/site";

// ─── 6.3 /treatments/[slug]/ ×6 ─────────────────────────────────────────
// Bodies VERBATIM from archive/content/pages/<slug>.md (equipment names kept
// exactly). Slugs preserve old WordPress URLs. Related treatments +
// appointment CTA on every page.
export function generateStaticParams() {
  return getTreatmentDetailSlugs().map((slug) => ({ slug }));
}

// Per-page OG images — specialty photography per service line.
const TREATMENT_OG_IMAGES: Record<string, string> = {
  "cataract-surgery": "/images/mungale/specialty-cataract.jpg",
  "cornea-evaluation": "/images/mungale/specialty-cornea.jpg",
  "corneal-treatments": "/images/mungale/specialty-cornea.jpg",
  "glaucoma-evaluation": "/images/mungale/specialty-glaucoma.jpg",
  "glaucoma-treatments": "/images/mungale/specialty-glaucoma.jpg",
  "optical-contact-lenses": "/images/mungale/specialty-optical.jpg",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const detail = getTreatmentDetail((await params).slug);
  if (!detail) return { title: "Treatments" };
  const ogImage = TREATMENT_OG_IMAGES[detail.slug];
  return {
    title: detail.title,
    description: detail.intro,
    alternates: { canonical: canonical("/treatments/" + detail.slug + "/") },
    openGraph: ogImage
      ? {
          title: detail.title,
          description: detail.intro,
          url: canonical("/treatments/" + detail.slug + "/"),
          siteName: siteConfig.name,
          type: "website",
          images: [{ url: ogImage, width: 1600, height: 2000, alt: detail.title }],
        }
      : undefined,
  };
}

const TREATMENT_COMPONENTS: Record<string, ComponentType> = {
  "corneal-treatments": TreatmentCorneal,
  "cornea-evaluation": TreatmentCorneaEval,
  "glaucoma-treatments": TreatmentGlaucomaTreatments,
  "cataract-surgery": TreatmentCataract,
  "optical-contact-lenses": TreatmentOptical,
  "glaucoma-evaluation": TreatmentGlaucomaEval,
};

export default async function TreatmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const detail = getTreatmentDetail(slug);
  if (!detail) notFound();
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments/" },
    { label: detail.title, href: "/treatments/" + detail.slug + "/" },
  ];
  const Custom = TREATMENT_COMPONENTS[slug];
  if (Custom) {
    return (
      <>
        <JsonLd data={medicalWebPageJsonLd(slug)} />
        <JsonLd data={breadcrumbJsonLd(crumbs)} />
        <Custom />
      </>
    );
  }

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
