import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 3.3 - Keratoconus cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "3.3",
  slug: "scleral-lenses-keratoconus",
  title: "Scleral Lenses for Keratoconus: Who Can Benefit?",
  seoTitle: "Scleral Lenses for Keratoconus | Mungale Eye Hospital",
  metaDescription: "Scleral lenses vault over an irregular cornea to give clearer, more comfortable vision in keratoconus. Learn how they work, who benefits, fitting and daily.",
  topics: ["cornea"],
  cluster: "keratoconus",
  pillarSlug: "keratoconus-symptoms-causes-diagnosis-treatment",
  order: 3,
  treatmentPage: "optical-contact-lenses",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-06",
  cover: {
    src: "/images/blog/scleral-lenses-keratoconus-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: large scleral contact lens held on a fingertip with saline before insertion.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Keratoconus: Symptoms, Causes, Diagnosis & Treatment", target: "/blog/keratoconus-symptoms-causes-diagnosis-treatment/" },
    { label: "Early Signs of Keratoconus and When to Get Topography", target: "link:3.1" },
    { label: "C3R or CXL for Keratoconus: Who Needs Cross-Linking?", target: "link:3.2" },
    { label: "Can Keratoconus Be Cured or Only Controlled?", target: "link:3.4" },
    { label: "When Does a Patient Need a Corneal Transplant?", target: "link:4.1" },
  ],
};
