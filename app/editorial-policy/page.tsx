import type { Metadata } from "next";
import Link from "next/link";
import { canonical } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { ContentSection } from "@/components/sections/ContentSection";
import { doctors, MEDICAL_REVIEW_DATE } from "@/content/doctors";

export const metadata: Metadata = {
  title: "Editorial & Medical Review Policy",
  description:
    "How content on the Mungale Eye Hospital website is written, medically reviewed by our doctors, dated and corrected — our editorial and medical review policy.",
  alternates: { canonical: "/editorial-policy/" },
  openGraph: {
    title: "Editorial & Medical Review Policy | Mungale Eye Hospital",
    description:
      "How content on the Mungale Eye Hospital website is written, medically reviewed by our doctors, dated and corrected — our editorial and medical review policy.",
    url: canonical("/editorial-policy/"),
  },
};

// ─── /editorial-policy/ ──────────────────────────────────────────────────
// Describes the review process the site actually runs: doctor-authored or
// hospital-team articles, each reviewed by the named specialist whose
// byline appears on the page. Flagged for owner review.
export default function EditorialPolicyPage() {
  const reviewDate = new Date(MEDICAL_REVIEW_DATE + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Editorial Policy", href: "/editorial-policy/" },
        ]}
        eyebrow="Legal"
        title="Editorial & Medical Review Policy"
        subtitle="How the health information on this website is written, checked and kept up to date."
      />
      <ContentSection>
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
              Who writes our content
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Articles on this website are written by the {` `}
              Mungale Eye Hospital team together with our doctors, drawing on
              the questions our patients actually ask in clinic. Where an
              article describes a treatment we offer, it reflects how that
              treatment is practised at our hospital.
            </p>
          </section>
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
              Who reviews it
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Every medical page on this site is reviewed by the specialist
              responsible for that area before it is published:
            </p>
            <ul className="mt-3 ml-5 list-disc space-y-2 font-body-md text-body-md text-on-surface-variant">
              {doctors.map((d) => (
                <li key={d.key}>
                  <Link
                    href={"/doctors/" + d.slug + "/"}
                    className="font-semibold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed"
                  >
                    {d.name}
                  </Link>
                  , {d.credentialShort} · {d.registration} — reviews{" "}
                  {d.key === "sachin" ? "glaucoma" : "cornea, cataract and general eye-health"}{" "}
                  content
                </li>
              ))}
            </ul>
            <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              The reviewer's name and the review date appear at the top of
              each article. Our most recent site-wide medical review was on{" "}
              {reviewDate}.
            </p>
          </section>
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
              Sources we rely on
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Medical statements in our articles are checked against
              standard references such as the American Academy of
              Ophthalmology, the National Eye Institute, MedlinePlus and
              peer-reviewed journals. Where an article cites a source, it is
              linked so you can read it yourself.
            </p>
          </section>
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
              Corrections
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              If you spot an error on any page, please tell us through the{" "}
              <Link
                href="/contact-us/"
                className="font-semibold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed"
              >
                Contact Us
              </Link>{" "}
              page. Corrections to medical content are reviewed by the
              responsible doctor before they are published, and the page's
              updated date is changed.
            </p>
          </section>
          <section>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
              Independence
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              This website carries no advertising and no sponsored or paid
              content. We do not accept payment to mention products, lenses,
              medicines or other hospitals.
            </p>
          </section>
        </div>
      </ContentSection>
    </>
  );
}
