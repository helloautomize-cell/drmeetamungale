"use client";

import React from "react";
import Link from "next/link";
import { SHOW_TREATMENT_DRAFTS } from "@/lib/site-config";
import { treatmentDrafts } from "@/content/treatment-drafts";
import { faqJsonLd } from "@/content/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { ClinicalAccordion } from "@/components/sections/ClinicalAccordion";

// ─── TreatmentDraftContent ─────────────────────────────────────────────────
// Renders the doctor-approved patient-education guides
// (content/treatment-drafts/) on the treatment pages. Live by default;
// NEXT_PUBLIC_SHOW_TREATMENT_DRAFTS=false at build time hides them.

// The draft cost copy references the insurance page by path; render it as a
// real link rather than literal text.
function InsuranceLink({ text }: { text: string }) {
  const parts = text.split("/insurance-cashless/");
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts.map((p, i) => (
        <React.Fragment key={i}>
          {p}
          {i < parts.length - 1 && (
            <Link href="/insurance-cashless/" className="text-primary-fixed underline underline-offset-2">
              our insurance and cashless page
            </Link>
          )}
        </React.Fragment>
      ))}
    </>
  );
}

function DraftSection({
  title,
  paragraphs,
  isCost,
}: {
  title: string;
  paragraphs: string[];
  isCost?: boolean;
}) {
  return (
    <div className="border-b border-secondary/10 py-6 lg:py-7">
      <h3 className="font-display-hero text-on-surface tracking-tight text-[22px] sm:text-[26px] leading-[1.15]">
        {title}
      </h3>
      <div className="mt-4 max-w-3xl space-y-3">
        {paragraphs.map((p, i) => (
          <p key={i} className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {isCost ? <InsuranceLink text={p} /> : p}
          </p>
        ))}
      </div>
    </div>
  );
}

export function TreatmentDraftContent({ slug }: { slug: string }) {
  const draft = treatmentDrafts[slug];
  if (!SHOW_TREATMENT_DRAFTS || !draft) return null;

  return (
    <section
      aria-label="Patient guide"
      className="max-w-[1280px] mx-auto px-6 lg:px-12 border-t border-secondary/10 mt-14 lg:mt-20 pt-10 lg:pt-14"
    >
      <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
        Patient guide
      </p>
      <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[28px] sm:text-[36px] leading-[1.1]">
        Understanding this treatment.
      </h2>

      <div className="mt-8 border-t border-secondary/10">
        <DraftSection title="What it is" paragraphs={draft.whatIsIt} />
        <DraftSection title="Symptoms" paragraphs={draft.symptoms} />
        <DraftSection title="Who needs it" paragraphs={draft.whoNeedsIt} />
        <DraftSection title="How it is diagnosed" paragraphs={draft.howDiagnosed} />
        <DraftSection title="Treatment options" paragraphs={draft.treatmentOptions} />
        <DraftSection title="What to expect" paragraphs={draft.whatToExpect} />
        <DraftSection title="Recovery" paragraphs={draft.recovery} />
        <DraftSection title="Risks" paragraphs={draft.risks} />
        <DraftSection
          title="Cost and insurance"
          paragraphs={draft.costAndInsurance}
          isCost
        />
        <DraftSection title="When to get urgent help" paragraphs={[draft.urgentHelp]} />

        <div className="py-6 lg:py-7">
          <h3 className="font-display-hero text-on-surface tracking-tight text-[22px] sm:text-[26px] leading-[1.15]">
            Frequently asked questions
          </h3>
          <div className="mt-4 max-w-3xl border-t border-secondary/10">
            {draft.faqs.map((f) => (
              <ClinicalAccordion key={f.question} title={f.question} body={f.answer} />
            ))}
          </div>
        </div>
      </div>

      <JsonLd data={faqJsonLd(draft.faqs)} />
    </section>
  );
}
