import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 7.5 - Corneal Ulcer & Keratitis cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "7.5",
  slug: "corneal-ulcer-left-untreated",
  title: "What Happens If a Corneal Ulcer Is Left Untreated?",
  seoTitle: "Untreated Corneal Ulcer Risks | Mungale Eye Hospital",
  metaDescription: "An untreated corneal ulcer can spread, scar the cornea and threaten vision. Learn the possible complications and why quick treatment matters.",
  topics: ["cornea"],
  cluster: "corneal-ulcer",
  pillarSlug: "corneal-ulcer-keratitis-symptoms-treatment",
  order: 5,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-15",
  cover: {
    src: "/images/blog/corneal-ulcer-left-untreated-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: Indian adult holding a hand near a red, watering eye while sitting in a clinic waiting area.",
  },
  readMinutes: 3,
  keepReading: [
    { label: "Corneal Ulcer Symptoms: When a Red Eye Is an Emergency", target: "link:7.1" },
    { label: "How Long Does a Corneal Ulcer Take to Heal?", target: "link:7.4" },
    { label: "Can Contact Lenses Cause a Corneal Ulcer?", target: "link:7.3" },
    { label: "Bacterial vs Fungal vs Viral Keratitis Explained", target: "link:7.2" },
    { label: "Corneal Ulcer & Keratitis: Symptoms & Treatment", target: "/blog/corneal-ulcer-keratitis-symptoms-treatment/" },
  ],
};
