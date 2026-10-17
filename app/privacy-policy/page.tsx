import type { Metadata } from "next";
import Link from "next/link";
import { canonical } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";

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

// ─── /privacy-policy/ — PLACEHOLDER (owner content pending) ─────────────
// No policy text exists in source. This stub states that plainly instead of
// inventing terms. Logged in docs/CONTENT_GAPS.md. Do not expand without
// owner-provided policy text.
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
        subtitle="Our privacy policy content is pending and will be published here."
      />
      <ContentSection>
        <p>
          Mungale Eye Hospital is preparing its privacy policy. In the
          meantime, for any privacy-related questions, please contact us via
          the <Link href="/contact-us/" className="text-primary font-bold hover:underline">Contact Us</Link> page.
        </p>
      </ContentSection>
    </>
  );
}
