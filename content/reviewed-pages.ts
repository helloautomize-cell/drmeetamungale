import { getTreatmentDetailSlugs, getTreatmentDetail } from "@/content/treatment-details";
import { blogPosts } from "@/content/blog";
import type { ReviewerKey } from "@/content/doctors";

// ─── Reviewed-page mapping ────────────────────────────────────────────
// Derived from the reviewedBy fields on each content entry plus the
// general pages both doctors review. Used by doctor profile pages
// ("Pages reviewed by Dr. …") and the llms files.
export interface ReviewedPage {
  title: string;
  href: string;
}

// General hospital / medical-information pages — reviewed by both.
export const GENERAL_REVIEWED_PAGES: ReviewedPage[] = [
  { title: "About Us", href: "/about-us/" },
  { title: "Insurance & Cashless", href: "/insurance-cashless/" },
  { title: "FAQs", href: "/faqs/" },
];

function reviewersOf(value: ReviewerKey | ReviewerKey[] | undefined): ReviewerKey[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function pagesReviewedBy(key: ReviewerKey): ReviewedPage[] {
  const pages: ReviewedPage[] = [...GENERAL_REVIEWED_PAGES];
  for (const slug of getTreatmentDetailSlugs()) {
    const d = getTreatmentDetail(slug);
    if (d && reviewersOf(d.reviewedBy).includes(key)) {
      pages.push({ title: d.title, href: "/treatments/" + d.slug + "/" });
    }
  }
  for (const p of blogPosts) {
    if (reviewersOf(p.reviewedBy).includes(key)) {
      pages.push({ title: p.title, href: p.url });
    }
  }
  return pages;
}
