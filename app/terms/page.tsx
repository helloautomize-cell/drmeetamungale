import type { Metadata } from "next";
import Link from "next/link";
import { canonical } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the Mungale Eye Hospital website — how the site, its appointment form and its content may be used.",
  alternates: { canonical: "/terms/" },
  openGraph: {
    title: "Terms of Use | Mungale Eye Hospital",
    description:
      "Terms of use for the Mungale Eye Hospital website — how the site, its appointment form and its content may be used.",
    url: canonical("/terms/"),
  },
};

// ─── /terms/ ─────────────────────────────────────────────────────────────
// Plain-language terms matching what the site actually does. Flagged for
// owner review.
const sections: { heading: string; body: string[] }[] = [
  {
    heading: "Using this website",
    body: [
      `This website is published by ${siteConfig.name}, Vadodara, to provide information about the hospital and general eye-health education.`,
      "The content is for general information only; our Medical Disclaimer explains how to use it safely.",
    ],
  },
  {
    heading: "Appointment requests",
    body: [
      "The appointment form sends a request to the hospital. It is not a confirmed booking — your appointment is confirmed only when our team contacts you and fixes a time.",
      "Please do not use the website form for emergencies. For urgent eye problems, call the emergency numbers shown on the Contact Us page.",
    ],
  },
  {
    heading: "Content and images",
    body: [
      "Text, images and patient reviews on this site belong to the hospital or are shown with the reviewer's attribution. Please do not copy or republish them without written permission.",
      "Before-and-after and clinical photographs are shared for education and do not guarantee any individual result.",
    ],
  },
  {
    heading: "External links",
    body: [
      "Some articles link to external organisations such as the American Academy of Ophthalmology or the National Eye Institute for further reading. Those sites have their own content and terms, which we do not control.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about these terms: call ${siteConfig.phone} or email ${siteConfig.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Terms of Use", href: "/terms/" },
        ]}
        eyebrow="Legal"
        title="Terms of Use"
        subtitle="The terms on which this website is provided."
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
                  <p key={i} className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {p}
                  </p>
                ))}
                {s.heading === "Using this website" && (
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    <Link
                      href="/medical-disclaimer/"
                      className="font-semibold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed"
                    >
                      Read the Medical Disclaimer
                    </Link>
                  </p>
                )}
              </div>
            </section>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
