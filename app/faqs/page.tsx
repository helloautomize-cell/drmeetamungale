import type { Metadata } from "next";
import Link from "next/link";
import { FaqExplorer } from "@/components/sections/FaqExplorer";
import { faqs, faqCategoryMap } from "@/content/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd, canonical } from "@/content/seo";
import { Reveal } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about Mungale Eye Hospital — appointments, corneal blindness, eye protection, eye donation and medical records.",
  alternates: { canonical: canonical("/faqs/") },
};

// ─── 6.7 /faqs/ — refined discovery ─────────────────────────────────────────
// Same brand, same verbatim content, same FAQPage JSON-LD. Compact hero +
// search + category tabs + desktop explorer / mobile accordion + help strip.
export default function FaqsPage() {
  const indexed = faqs.map((f, i) => ({ ...f, index: i }));
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "FAQs", href: "/faqs/" },
        ])}
      />

      {/* ── Compact hero ── */}
      <section className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-4 lg:pt-6 pb-8 lg:pb-10">
          <Reveal>
            <nav aria-label="Breadcrumb">
              <p className="font-body-md text-body-md text-on-surface-variant">
                <Link href="/" className="hover:text-on-surface transition-colors">Home</Link>
                <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
                <span aria-current="page" className="text-on-surface">FAQs</span>
              </p>
            </nav>
            <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              Resources
            </p>
            <h1 className="mt-3 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[38px] sm:text-[48px] lg:text-[56px]">
              Frequently asked questions.
            </h1>
            <p className="mt-4 max-w-[60ch] font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Answers to common questions about appointments, eye health,
              records and eye donation.
            </p>
            <p className="mt-2 text-[14px] font-semibold text-on-surface">
              Find the answer you&rsquo;re looking for.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Explorer ── */}
      <section aria-label="Questions and answers" className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pb-14 lg:pb-20">
          <FaqExplorer faqs={indexed} categories={faqCategoryMap} />
        </div>
      </section>

      {/* ── Still have a question ── */}
      <section aria-label="Still have a question" className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <Reveal>
            <div className="border-t border-secondary/10 pt-10 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12">
              <div className="flex-1">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                  Still have a question?
                </p>
                <p className="mt-3 font-display-hero text-on-surface tracking-tight text-[26px] sm:text-[32px] leading-[1.12]">
                  We&rsquo;re here to help.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                <a
                  href="tel:+918140050055"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
                >
                  <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                    Call the hospital
                  </span>
                  <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
                </a>
                <Link
                  href="/contact-us/"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
                >
                  <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                    Book a consultation
                  </span>
                  <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
