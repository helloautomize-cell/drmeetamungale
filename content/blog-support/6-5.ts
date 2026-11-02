import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 6.5 - Pterygium cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "6.5",
  slug: "pterygium-vs-pinguecula-difference",
  title: "Pterygium vs Pinguecula: What Is the Difference?",
  seoTitle: "Pterygium vs Pinguecula: What | Mungale Eye Hospital",
  metaDescription: "Pterygium and pinguecula both appear on the white of the eye, but only pterygium grows onto the cornea. Learn how they differ in look, symptoms, risk and.",
  topics: ["cornea"],
  cluster: "pterygium",
  pillarSlug: "pterygium-causes-symptoms-stages-treatment-surgery",
  order: 5,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-13",
  cover: {
    src: "/images/blog/pterygium-vs-pinguecula-difference-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: healthy adult eye with a gentle focus on the white of the eye near the inner corner, in soft clinical lighting at a Vadodara eye clinic.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Pterygium: Causes, Symptoms, Stages, Treatment & Surgery", target: "/blog/pterygium-causes-symptoms-stages-treatment-surgery/" },
    { label: "What Causes Pterygium? Sun, Dust and Wind Explained", target: "link:6.1" },
    { label: "Pterygium: Surgery or Eye Drops?", target: "link:6.2" },
    { label: "Can Pterygium Come Back After Surgery?", target: "link:6.4" },
    { label: "Pterygium care at Mungale Eye Hospital", target: "/treatments/corneal-treatments/" },
  ],
};
