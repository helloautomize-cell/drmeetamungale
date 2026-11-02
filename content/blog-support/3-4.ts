import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 3.4 - Keratoconus cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "3.4",
  slug: "can-keratoconus-be-cured-or-controlled",
  title: "Can Keratoconus Be Cured or Only Controlled?",
  seoTitle: "Can Keratoconus Be Cured? | Mungale Eye Hospital",
  metaDescription: "There is no simple cure for keratoconus, but it can be controlled. Learn how cross-linking stops progression, which treatments improve vision and what long-term",
  topics: ["cornea"],
  cluster: "keratoconus",
  pillarSlug: "keratoconus-symptoms-causes-diagnosis-treatment",
  order: 4,
  treatmentPage: "cornea-evaluation",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-06",
  cover: {
    src: "/images/blog/can-keratoconus-be-cured-or-controlled-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: ophthalmologist reviewing corneal topography maps with a young adult patient on a screen.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Keratoconus: Symptoms, Causes, Diagnosis & Treatment", target: "/blog/keratoconus-symptoms-causes-diagnosis-treatment/" },
    { label: "Early Signs of Keratoconus and When to Get Topography", target: "link:3.1" },
    { label: "C3R or CXL for Keratoconus: Who Needs Cross-Linking?", target: "link:3.2" },
    { label: "Scleral Lenses for Keratoconus: Who Can Benefit?", target: "link:3.3" },
    { label: "Am I a Good Candidate for LASIK?", target: "link:9.2" },
  ],
};
