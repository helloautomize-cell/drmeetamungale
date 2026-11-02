import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 7.3 - Corneal Ulcer & Keratitis cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "7.3",
  slug: "contact-lenses-corneal-ulcer-risk",
  title: "Can Contact Lenses Cause a Corneal Ulcer?",
  seoTitle: "Can Contacts Cause Corneal Ulcers? | Mungale Eye Hospital",
  metaDescription: "Contact lenses are safe when used correctly, but misuse is a leading cause of corneal ulcers. Learn the risky habits, warning signs and safe lens care rules.",
  topics: ["cornea"],
  cluster: "corneal-ulcer",
  pillarSlug: "corneal-ulcer-keratitis-symptoms-treatment",
  order: 3,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-14",
  cover: {
    src: "/images/blog/contact-lenses-corneal-ulcer-risk-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: young Indian woman carefully placing a soft contact lens into a clean lens case beside a bottle of solution at a tidy bathroom counter in Vadodara.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Corneal Ulcer & Keratitis: Symptoms & Treatment", target: "/blog/corneal-ulcer-keratitis-symptoms-treatment/" },
    { label: "Corneal Ulcer Symptoms: When a Red Eye Is an Emergency", target: "link:7.1" },
    { label: "Bacterial vs Fungal vs Viral Keratitis Explained", target: "link:7.2" },
    { label: "Can Dry Eyes Cause Blurry Vision? When to Worry", target: "link:5.1" },
    { label: "Am I a Good Candidate for LASIK?", target: "link:9.2" },
  ],
};
