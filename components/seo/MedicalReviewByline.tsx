import { medicalReviewers, type ReviewerKey } from "@/content/doctors";

// ─── MedicalReviewByline ────────────────────────────────────────────────
// Renders only when a content entry carries reviewedBy + reviewedOn.
// All content leaves these unset until the named doctor has reviewed it.
export function MedicalReviewByline({
  reviewedBy,
  reviewedOn,
}: {
  reviewedBy?: ReviewerKey;
  reviewedOn?: string;
}) {
  if (!reviewedBy || !reviewedOn) return null;
  const r = medicalReviewers[reviewedBy];
  const date = new Date(reviewedOn + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
      Medically reviewed by {r.name}, {r.credentials} · {date}
    </p>
  );
}
