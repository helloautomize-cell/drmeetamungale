import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 7.1 - Corneal Ulcer & Keratitis cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "7.1",
  slug: "corneal-ulcer-symptoms-red-eye-emergency",
  title: "Corneal Ulcer Symptoms: When a Red Eye Is an Emergency",
  seoTitle: "Corneal Ulcer Symptoms | Mungale Eye Hospital",
  metaDescription: "A red, painful eye with blurred vision or a white spot may be a corneal ulcer. Learn the warning signs, common causes and why same-day eye care protects your.",
  topics: ["cornea"],
  cluster: "corneal-ulcer",
  pillarSlug: "corneal-ulcer-keratitis-symptoms-treatment",
  order: 1,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-13",
  cover: {
    src: "/images/blog/corneal-ulcer-symptoms-red-eye-emergency-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: worried Indian man holding a tissue near one red, watery eye in an eye hospital waiting area in Vadodara, with a nurse approaching.",
  },
  readMinutes: 5,
  keepReading: [
    { label: "Bacterial vs Fungal vs Viral Keratitis Explained", target: "link:7.2" },
    { label: "Can Contact Lenses Cause a Corneal Ulcer?", target: "link:7.3" },
    { label: "When Does a Patient Need a Corneal Transplant?", target: "link:4.1" },
    { label: "Corneal Ulcer & Keratitis care at Mungale Eye Hospital", target: "/treatments/corneal-treatments/" },
    { label: "Corneal Ulcer & Keratitis: Symptoms & Treatment", target: "/blog/corneal-ulcer-keratitis-symptoms-treatment/" },
  ],
};
