import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 7.2 - Corneal Ulcer & Keratitis cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "7.2",
  slug: "bacterial-fungal-viral-keratitis-difference",
  title: "Bacterial vs Fungal vs Viral Keratitis Explained",
  seoTitle: "Types of Keratitis Explained | Mungale Eye Hospital",
  metaDescription: "Keratitis can be bacterial, fungal or viral, and each needs a different medicine. Learn how they differ in cause, symptoms and treatment, and why lab tests.",
  topics: ["cornea"],
  cluster: "corneal-ulcer",
  pillarSlug: "corneal-ulcer-keratitis-symptoms-treatment",
  order: 2,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-14",
  cover: {
    src: "/images/blog/bacterial-fungal-viral-keratitis-difference-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist and a lab technician reviewing a microscope slide in a clean eye hospital laboratory in Vadodara.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Corneal Ulcer & Keratitis: Symptoms & Treatment", target: "/blog/corneal-ulcer-keratitis-symptoms-treatment/" },
    { label: "Corneal Ulcer Symptoms: When a Red Eye Is an Emergency", target: "link:7.1" },
    { label: "Can Contact Lenses Cause a Corneal Ulcer?", target: "link:7.3" },
    { label: "Corneal Ulcer & Keratitis care at Mungale Eye Hospital", target: "/treatments/corneal-treatments/" },
  ],
};
