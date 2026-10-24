import type { Metadata } from "next";
import Link from "next/link";
import { canonical } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { siteConfig } from "@/content/site";
import { telHref } from "@/lib/contact-links";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Medical disclaimer — the articles on the Mungale Eye Hospital website are general patient education, not personal medical advice. Read how to use them safely.",
  alternates: { canonical: "/medical-disclaimer/" },
  openGraph: {
    title: "Medical Disclaimer | Mungale Eye Hospital",
    description:
      "Medical disclaimer — the articles on the Mungale Eye Hospital website are general patient education, not personal medical advice. Read how to use them safely.",
    url: canonical("/medical-disclaimer/"),
  },
};

// ─── /medical-disclaimer/ ────────────────────────────────────────────────
// Standard YMYL safety copy for a medical website. Flagged for owner review.
const sections: { heading: string; body: string[] }[] = [
  {
    heading: "General information only",
    body: [
      "The articles, guides and answers on this website are written for general patient education. They describe eye conditions, tests and treatments in broad terms and cannot take your personal medical history into account.",
      "Nothing on this site is a diagnosis, a prescription or personal medical advice. Reading this website does not create a doctor–patient relationship.",
    ],
  },
  {
    heading: "Always see a doctor for your own eyes",
    body: [
      "Eye conditions that look similar can need very different treatment. Only an in-person examination can say what applies to you.",
      "Never delay, start, stop or change treatment because of something you read here. If an article raises a question about your eyes, bring that question to your appointment.",
    ],
  },
  {
    heading: "Emergencies",
    body: [
      "Sudden vision loss, a curtain or shadow across your vision, many new floaters or flashes, severe eye pain, or a chemical or physical eye injury needs urgent care.",
      `In an emergency call ${siteConfig.emergencyPhone} or ${siteConfig.emergencyPhone2}. Outside our working hours, go to the nearest hospital emergency department — do not wait for a website reply.`,
    ],
  },
  {
    heading: "Accuracy",
    body: [
      "Our doctors review the medical content on this site, and review dates are shown on each page. Medicine changes over time, so a reviewed article may still not reflect the newest guidance for your situation.",
      "Costs, insurance rules and treatment availability mentioned in articles are indicative and can change; the hospital confirms them at your consultation.",
    ],
  },
];

export default function MedicalDisclaimerPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Medical Disclaimer", href: "/medical-disclaimer/" },
        ]}
        eyebrow="Legal"
        title="Medical Disclaimer"
        subtitle="Please read this before relying on any medical information on this website."
      />
      <ContentSection>
        <div className="max-w-3xl space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
                {s.heading}
              </h2>
              <div className="space-y-3">
                {s.body.map((p, i) => (
                  <p
                    key={i}
                    className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
              Questions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              For anything on this website that concerns you, call{" "}
              <a
                href={telHref(siteConfig.phone)}
                className="font-semibold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed"
              >
                {siteConfig.phone}
              </a>{" "}
              or use the{" "}
              <Link
                href="/contact-us/"
                className="font-semibold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed"
              >
                Contact Us
              </Link>{" "}
              page.
            </p>
          </section>
        </div>
      </ContentSection>
    </>
  );
}
