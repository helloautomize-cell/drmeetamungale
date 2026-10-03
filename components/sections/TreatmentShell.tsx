import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTreatmentDetail } from "@/content/treatment-details";
import { MedicalReviewByline } from "@/components/seo/MedicalReviewByline";
import { getDoctorByKey, doctorHref, type ReviewerKey } from "@/content/doctors";

// ─── TreatmentShell ────────────────────────────────────────────────────────
// Shared child-page frame: warm paper, 1280px container, quiet breadcrumb
// (Home / Treatments / Current), medical-review byline and the "Your
// specialist" card for the doctor(s) who review this page. Sections
// compose inside.
function SpecialistCard({ reviewerKey }: { reviewerKey: ReviewerKey }) {
  const d = getDoctorByKey(reviewerKey);
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="overflow-hidden rounded-[14px] ring-1 ring-secondary/10 shrink-0">
        <Image
          src={d.imageUrl}
          alt={d.alt}
          width={112}
          height={140}
          className="h-16 w-[52px] object-cover object-top"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-on-surface text-[15.5px] leading-snug">
          <Link
            href={doctorHref(reviewerKey)}
            className="hover:text-primary-fixed transition-colors"
          >
            {d.name}
          </Link>
        </p>
        <p className="mt-0.5 text-[13px] text-on-surface-variant">{d.credentialLine}</p>
      </div>
      <div className="hidden sm:flex items-center gap-6 shrink-0">
        <Link
          href={doctorHref(reviewerKey)}
          className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-on-surface"
        >
          <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
            View profile
          </span>
          <ArrowRight aria-hidden="true" className="w-3.5 h-3.5 text-primary-fixed" />
        </Link>
        <Link
          href={"/contact-us/?doctor=" + d.slug}
          className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-on-surface"
        >
          <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
            Book with this doctor
          </span>
          <ArrowRight aria-hidden="true" className="w-3.5 h-3.5 text-primary-fixed" />
        </Link>
      </div>
    </div>
  );
}

export function TreatmentShell({
  current,
  slug,
  children,
}: {
  current: string;
  slug?: string;
  children: React.ReactNode;
}) {
  const detail = slug ? getTreatmentDetail(slug) : undefined;
  const reviewers = detail?.reviewedBy
    ? Array.isArray(detail.reviewedBy)
      ? detail.reviewedBy
      : [detail.reviewedBy]
    : [];
  return (
    <div className="bg-background">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-2 lg:pt-4">
        <nav aria-label="Breadcrumb">
          <p className="font-body-md text-body-md text-on-surface-variant">
            <Link href="/" className="hover:text-on-surface transition-colors">
              Home
            </Link>
            <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
            <Link href="/treatments/" className="hover:text-on-surface transition-colors">
              Treatments
            </Link>
            <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
            <span aria-current="page" className="text-on-surface">{current}</span>
          </p>
        </nav>
        <MedicalReviewByline reviewedBy={detail?.reviewedBy} reviewedOn={detail?.reviewedOn} />
        {reviewers.length > 0 && (
          <div
            aria-label="Your specialist"
            className="mt-4 max-w-2xl border-y border-secondary/10 divide-y divide-secondary/10"
          >
            {reviewers.map((key) => (
              <SpecialistCard key={key} reviewerKey={key} />
            ))}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
