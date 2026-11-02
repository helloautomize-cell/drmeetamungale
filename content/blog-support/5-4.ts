import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 5.4 - Dry Eye cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "5.4",
  slug: "dry-eye-tests-tear-film-meibomian-glands",
  title: "Dry Eye Tests: Tear Film, Meibomian Glands and More",
  seoTitle: "Dry Eye Tests | Mungale Eye Hospital",
  metaDescription: "Dry eye has different types, and tests show which one you have. Learn about tear film, Schirmer, staining and meibomian gland checks, and what each result.",
  topics: ["cornea"],
  cluster: "dry-eye",
  pillarSlug: "dry-eye-disease-causes-symptoms-treatment",
  order: 4,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-10",
  cover: {
    src: "/images/blog/dry-eye-tests-tear-film-meibomian-glands-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: ophthalmologist examining a patient's eye at a slit lamp in a clean, modern eye hospital in Vadodara, with soft blue diagnostic light.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Dry Eye Disease: Causes, Symptoms, Diagnosis & Treatment", target: "/blog/dry-eye-disease-causes-symptoms-treatment/" },
    { label: "Can Dry Eyes Cause Blurry Vision? When to Worry", target: "link:5.1" },
    { label: "Can Dry Eye Be Cured Permanently?", target: "link:5.3" },
    { label: "Punctal Plugs for Dry Eye: Who Needs Them?", target: "link:5.5" },
    { label: "Am I a Good Candidate for LASIK?", target: "link:9.2" },
  ],
};
