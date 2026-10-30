import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 3.5 - Keratoconus cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "3.5",
  slug: "keratoconus-treatment-cost-india",
  title: "Keratoconus Treatment Cost in India: What Determines the Cost?",
  seoTitle: "Keratoconus Treatment Cost | Mungale Eye Hospital",
  metaDescription: "The cost of keratoconus treatment depends on the stage, the treatment chosen and the hospital. Learn what drives the price of cross-linking, scleral lenses and.",
  topics: ["cornea"],
  cluster: "keratoconus",
  pillarSlug: "keratoconus-symptoms-causes-diagnosis-treatment",
  order: 5,
  treatmentPage: "cornea-evaluation",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-07",
  cover: {
    src: "/images/blog/keratoconus-treatment-cost-india-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist explaining a corneal scan report to a young Indian patient and a parent in a bright eye clinic.",
  },
  readMinutes: 3,
  keepReading: [
    { label: "Early Signs of Keratoconus and When to Get Topography", target: "link:3.1" },
    { label: "C3R or CXL for Keratoconus: Who Needs Cross-Linking?", target: "link:3.2" },
    { label: "Scleral Lenses for Keratoconus: Who Can Benefit?", target: "link:3.3" },
    { label: "Can Keratoconus Be Cured or Only Controlled?", target: "link:3.4" },
    { label: "Keratoconus: Symptoms, Causes, Diagnosis & Treatment", target: "/blog/keratoconus-symptoms-causes-diagnosis-treatment/" },
  ],
};
