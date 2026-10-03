import Link from "next/link";
import {
  getDoctorByKey,
  doctorHref,
  MEDICAL_REVIEW_DATE,
  type ReviewerKey,
} from "@/content/doctors";

// ─── MedicalReviewByline ──────────────────────────────────────────────
// Renders when a content entry carries reviewedBy. Names link to the
// doctor's profile page; shows credential line, GMC registration and the
// review date. Supports one or two reviewers.
function toArray(value: ReviewerKey | ReviewerKey[] | undefined): ReviewerKey[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function formatReviewDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function MedicalReviewByline({
  reviewedBy,
  reviewedOn,
}: {
  reviewedBy?: ReviewerKey | ReviewerKey[];
  reviewedOn?: string;
}) {
  const keys = toArray(reviewedBy);
  if (keys.length === 0) return null;
  const date = formatReviewDate(reviewedOn ?? MEDICAL_REVIEW_DATE);
  return (
    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
      Medically reviewed by{" "}
      {keys.map((key, i) => {
        const d = getDoctorByKey(key);
        return (
          <span key={key}>
            {i > 0 && " and "}
            <Link
              href={doctorHref(key)}
              className="font-semibold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed"
            >
              {d.name}
            </Link>
            , {d.credentialLine} · {d.registration}
          </span>
        );
      })}{" "}
      · Reviewed on {date}
    </p>
  );
}
