import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { faqs } from "@/content/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd, canonical } from "@/content/seo";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Mungale Eye Hospital — appointments, corneal blindness, eye protection, eye donation and medical records.",
  alternates: { canonical: canonical("/faqs/") },
};

// ─── 6.7 /faqs/ ─────────────────────────────────────────────────────────
// All 8 Q&As VERBATIM from archive/content/pages/faqs.md (page ID 4356).
export default function FaqsPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "FAQs", href: "/faqs/" },
        ])}
      />
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "FAQs", href: "/faqs/" },
        ]}
        eyebrow="Resources"
        title="FAQs"
      />
      <FAQAccordion faqs={faqs} />
      <CTABand />
    </>
  );
}
