import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { DummyContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, canonical } from "@/content/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact us via phone, email, or fill out the form below, and we will respond promptly to your queries.",
  alternates: { canonical: canonical("/contact-us/") },
};

// ─── 6.9 /contact-us/ — DUMMY FORM (owner instruction) ───────────────────
// Location/contact/hours/emergency blocks VERBATIM from
// archive/content/pages/contact-us.md (page ID 4344). Note: the live page
// lists +91 8140050055 / 0265-2430101; canonical numbers follow the owner
// decision in content/site.ts.
export default function ContactUsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact-us/" },
        ])}
      />
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact-us/" },
        ]}
        eyebrow="Contact"
        title="Contact Us"
        subtitle="For assistance with your vision health, feel free to reach out or book an appointment with us today."
      />
      <section className="py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DummyContactForm />
          <div className="bg-card-white rounded-2xl p-6 sm:p-8 shadow-md space-y-5">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Our location</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">{siteConfig.address}</p>
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Contact</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Phone: {siteConfig.phone}
                <br />
                Phone: {siteConfig.landline}
                <br />
                Email: {siteConfig.email}
              </p>
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Opening Hours</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                {siteConfig.hours.weekdays}: {siteConfig.hours.time}
                <br />
                Sunday: {siteConfig.hours.sunday}
              </p>
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Emergency Contact</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                {siteConfig.emergencyPhone}
                <br />
                {siteConfig.emergencyPhone2}
              </p>
            </div>
          </div>
        </div>
      </section>
      <LocationBlock />
    </>
  );
}
