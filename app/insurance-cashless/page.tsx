import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { siteConfig } from "@/content/site";
import { insuranceFaqs } from "@/content/insurance-faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd, canonical } from "@/content/seo";

export const metadata: Metadata = {
  title: "Insurance & Cashless",
  description:
    "Mungale Eye Hospital offers insurance-based eye care for eligible cataract surgery, glaucoma, retina, and corneal treatments in Vadodara.",
  alternates: { canonical: canonical("/insurance-cashless/") },
};

// ─── 6.4 /insurance-cashless/ ───────────────────────────────────────────
// ALL copy VERBATIM from archive/content/pages/insurance-cashless.md
// (page ID 5409) + its FAQPage JSON-LD. Empanelled insurers named exactly
// as published (HDFC ERGO, IFFCO Tokio, Navi General Insurance, Tata AIG)
// with the page's own "selected insurers / call to confirm / reimbursement"
// qualifications kept — never presented as exhaustive.
const steps = [
  {
    n: "1",
    title: "Carry your documents",
    body: "Bring your health insurance card or policy number, a valid photo ID, and any referral letter, previous consultation papers, reports, or eye treatment records, if applicable.",
  },
  {
    n: "2",
    title: "Inform us at the time of booking",
    body: "When you call to book your appointment, let us know that you want to use health insurance for cashless eye treatment, cashless cataract surgery, or another covered eye procedure.",
  },
  {
    n: "3",
    title: "We handle the rest",
    body: "Our team coordinates with your insurer or TPA for pre-authorization. Once approved, the eligible treatment amount is settled directly between the insurer and hospital as per your policy terms.",
  },
  {
    n: "4",
    title: "You walk out without paying the covered amount",
    body: "Any co-payment, deductible, exclusions, or non-covered charges as per your health insurance policy will be explained to you in advance.",
  },
];


export default function InsuranceCashlessPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(insuranceFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "Insurance & Cashless", href: "/insurance-cashless/" },
        ])}
      />
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Insurance & Cashless", href: "/insurance-cashless/" },
        ]}
        eyebrow="Insurance & Cashless"
        title="Insurance & Cashless"
        subtitle="We believe quality eye care should be accessible, and that includes making the payment process simple."
      />

      <ContentSection>
        <p>
          Looking for an eye hospital in Vadodara with cashless treatment
          support? Mungale Eye Hospital offers insurance-based eye care for
          eligible cataract surgery, glaucoma, retina, and corneal treatments.
          As an empanelled eye hospital for selected health insurers, we help
          patients with insurance approval, pre-authorization, and billing
          support so the approved amount can be settled directly with the
          insurer, subject to policy terms.
        </p>
        <p>
          Cashless eye treatment means your approved hospital bill is settled
          directly with your insurance provider without full upfront payment.
          Many eye procedures like cataract surgery are covered under health
          insurance, depending on your policy terms and approval. Mungale Eye
          Hospital in Vadodara, Gujarat supports patients across the city for
          cashless eye treatment and insurance-backed eye care.
        </p>
      </ContentSection>

      <section className="py-space-2xl bg-surface-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Partners"
            title="Our Empanelled Insurance Partners"
            subtitle="Mungale Eye Hospital is currently empanelled with selected health insurance providers for eligible cashless eye treatment and cashless eye surgery."
          />
          <Card className="max-w-3xl mx-auto text-center">
            <p className="font-title-md text-title-md text-on-surface font-bold">
              HDFC ERGO · IFFCO Tokio · Navi General Insurance · Tata AIG
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
              If your insurer is not on this list, you may still be eligible
              for reimbursement after treatment. This list is updated
              periodically. Please call us at{" "}
              <a
                href={"tel:" + siteConfig.phone.replace(/\s/g, "")}
                className="text-primary font-bold hover:underline"
              >
                {siteConfig.phone}
              </a>{" "}
              to confirm whether your insurer or TPA is currently empanelled
              for cashless eye treatment before your visit.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-space-2xl bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Process"
            title="How Cashless Treatment Works at Mungale Eye Hospital"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <Card key={s.n}>
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm font-bold flex items-center justify-center mb-4">
                  {s.n}
                </div>
                <h3 className="font-title-md text-title-md text-on-surface font-bold mb-2">
                  {s.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {s.body}
                </p>
              </Card>
            ))}
          </div>
          <p className="text-center font-body-md text-body-md text-on-surface-variant mt-8 max-w-2xl mx-auto">
            Our team helps you check eligibility and manage approvals before
            your visit to avoid delays.{" "}
            <Link
              href="/contact-us/"
              className="text-primary font-bold hover:underline"
            >
              Book an Appointment
            </Link>
          </p>
        </div>
      </section>

      <FAQAccordion
        faqs={insuranceFaqs}
        eyebrow="Insurance FAQs"
        title="Frequently Asked Questions"
      />
      <CTABand />
    </>
  );
}
