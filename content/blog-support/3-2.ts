import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 3.2 - Keratoconus cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "3.2",
  slug: "c3r-cxl-keratoconus-corneal-cross-linking",
  title: "C3R or CXL for Keratoconus: Who Needs Cross-Linking?",
  seoTitle: "C3R or CXL for Keratoconus | Mungale Eye Hospital",
  metaDescription: "Corneal cross-linking (C3R or CXL) strengthens the cornea to slow or stop keratoconus. Learn who is a candidate, how it is done, recovery and what it can and.",
  topics: ["cornea"],
  cluster: "keratoconus",
  pillarSlug: "keratoconus-symptoms-causes-diagnosis-treatment",
  order: 2,
  treatmentPage: "cornea-evaluation",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-05",
  cover: {
    src: "/images/blog/c3r-cxl-keratoconus-corneal-cross-linking-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist performing corneal cross-linking with a UV light device over a patient's eye.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Keratoconus: Symptoms, Causes, Diagnosis & Treatment", target: "/blog/keratoconus-symptoms-causes-diagnosis-treatment/" },
    { label: "Early Signs of Keratoconus and When to Get Topography", target: "link:3.1" },
    { label: "Scleral Lenses for Keratoconus: Who Can Benefit?", target: "link:3.3" },
    { label: "Can Keratoconus Be Cured or Only Controlled?", target: "link:3.4" },
    { label: "When Does a Patient Need a Corneal Transplant?", target: "link:4.1" },
  ],
};
