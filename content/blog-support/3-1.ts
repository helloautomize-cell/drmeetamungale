import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 3.1 - Keratoconus cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "3.1",
  slug: "early-signs-keratoconus-corneal-topography",
  title: "Early Signs of Keratoconus and When to Get Topography",
  seoTitle: "Early Signs of Keratoconus | Mungale Eye Hospital",
  metaDescription: "Keratoconus often starts with blurry vision and frequent glasses changes. Learn the early signs, who is at risk and when corneal topography is needed to detect.",
  topics: ["cornea"],
  cluster: "keratoconus",
  pillarSlug: "keratoconus-symptoms-causes-diagnosis-treatment",
  order: 1,
  treatmentPage: "cornea-evaluation",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-05",
  cover: {
    src: "/images/blog/early-signs-keratoconus-corneal-topography-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: young adult resting their chin on a corneal topography machine while an optometrist operates it.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Keratoconus: Symptoms, Causes, Diagnosis & Treatment", target: "/blog/keratoconus-symptoms-causes-diagnosis-treatment/" },
    { label: "C3R or CXL for Keratoconus: Who Needs Cross-Linking?", target: "link:3.2" },
    { label: "Scleral Lenses for Keratoconus: Who Can Benefit?", target: "link:3.3" },
    { label: "Can Keratoconus Be Cured or Only Controlled?", target: "link:3.4" },
    { label: "Keratoconus care at Mungale Eye Hospital", target: "/treatments/cornea-evaluation/" },
  ],
};
