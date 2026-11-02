import type { Metadata } from "next";
import Link from "next/link";
import { canonical } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { siteConfig } from "@/content/site";
import { telHref } from "@/lib/contact-links";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy — how Mungale Eye Hospital in Vadodara collects, uses and protects your personal and health information. Contact us with questions.",
  alternates: { canonical: "/privacy-policy/" },
  openGraph: {
    title: "Privacy Policy | Mungale Eye Hospital",
    description:
      "Privacy policy — how Mungale Eye Hospital in Vadodara collects, uses and protects your personal and health information. Contact us with questions.",
    url: canonical("/privacy-policy/"),
  },
};

// ─── /privacy-policy/ ────────────────────────────────────────────────────
// Describes only what this site actually does: the appointment form sends
// details to the hospital's Gmail inbox, Google Analytics 4 measures
// anonymous usage (no names, phone numbers or health details), there is no
// advertising or remarketing tooling and no patient database on the site.
// Flagged for owner review before relying on it legally.
const sections: { heading: string; body: string[] }[] = [
  {
    heading: "What we collect",
    body: [
      "When you request an appointment through this website, we ask for your name, mobile number, and — optionally — your email address, age, preferred doctor, preferred date and time, and a short message about your concern. Please keep medical details and reports for your visit — do not send them through the form or by email.",
      "When you call, WhatsApp or email us directly, we receive whatever contact details you choose to share.",
    ],
  },
  {
    heading: "Analytics and cookies",
    body: [
      "This website uses Google Analytics 4 to count visits and to see which buttons are used — for example clicks on the phone, WhatsApp, email, directions and appointment links. It tells us which pages are helpful, nothing more.",
      "Google Analytics sets cookies (such as _ga) and sends anonymous usage data to Google. No names, phone numbers, email addresses or health details are sent to analytics.",
      "You can opt out at any time through your browser's cookie settings, or with Google's Analytics opt-out browser add-on.",
      "The site uses no advertising or remarketing tools.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "The details you submit are used only to arrange your appointment and to contact you about it. If you opt in to updates, we may also send you appointment-related messages.",
      "Appointment requests arrive as an email to the hospital's own mailbox. Your details are not stored in a website database, are not sold, and are not shared with advertisers.",
    ],
  },
  {
    heading: "Who sees your information",
    body: [
      "Only the hospital team involved in scheduling and your care sees your details. The website's booking emails are delivered through Google's Gmail service, which processes the message to deliver it to the hospital.",
      "We do not share your information with any other third party unless required by law.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Appointment request emails are retained in the hospital's mailbox as part of normal clinic records. Medical records created during your visit are kept as required under applicable Indian regulations.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You may ask us to correct or delete the contact details you submitted by calling or emailing the hospital. If you have a concern about how your information was handled, please contact us using the details below.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy/" },
        ]}
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`How ${siteConfig.name} collects, uses and protects your information.`}
      />
      <ContentSection>
        <div className="max-w-3xl space-y-10">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {siteConfig.name}, 2nd Floor, Vinraj Plaza, opp. Government
            Press, Kothi Road, Anandpura, Vadodara, Gujarat 390001, runs
            this website. This policy explains what happens to the personal
            information you share with us here.
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Last updated: November 2026
          </p>
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
              Contact us about privacy
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              For any privacy question or request, call{" "}
              <a
                href={telHref(siteConfig.phone)}
                className="font-semibold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed"
              >
                {siteConfig.phone}
              </a>
              , email{" "}
              <a
                href={"mailto:" + siteConfig.email}
                className="font-semibold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed break-all"
              >
                {siteConfig.email}
              </a>
              , or visit the{" "}
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
