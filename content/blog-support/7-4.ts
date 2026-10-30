import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 7.4 - Corneal Ulcer & Keratitis cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "7.4",
  slug: "how-long-corneal-ulcer-takes-to-heal",
  title: "How Long Does a Corneal Ulcer Take to Heal?",
  seoTitle: "Corneal Ulcer Healing Time | Mungale Eye Hospital",
  metaDescription: "Healing time for a corneal ulcer depends on the cause, size and how early treatment starts. Learn what to expect and what can slow recovery.",
  topics: ["cornea"],
  cluster: "corneal-ulcer",
  pillarSlug: "corneal-ulcer-keratitis-symptoms-treatment",
  order: 4,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-15",
  cover: {
    src: "/images/blog/how-long-corneal-ulcer-takes-to-heal-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist examining a patient's eye at a slit lamp in a clean eye clinic.",
  },
  readMinutes: 3,
  keepReading: [
    { label: "Corneal Ulcer Symptoms: When a Red Eye Is an Emergency", target: "link:7.1" },
    { label: "Bacterial vs Fungal vs Viral Keratitis Explained", target: "link:7.2" },
    { label: "Can Contact Lenses Cause a Corneal Ulcer?", target: "link:7.3" },
    { label: "What Happens If a Corneal Ulcer Is Left Untreated?", target: "link:7.5" },
    { label: "Corneal Ulcer & Keratitis: Symptoms & Treatment", target: "/blog/corneal-ulcer-keratitis-symptoms-treatment/" },
  ],
};
