import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 5.2 - Dry Eye cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "5.2",
  slug: "screen-time-dry-eyes-20-20-20-rule",
  title: "Screen Time and Dry Eyes: The 20-20-20 Rule Explained",
  seoTitle: "Screen Time and Dry Eyes | Mungale Eye Hospital",
  metaDescription: "Long screen hours reduce blinking and dry the eyes. Learn how screens affect your tear film, how the 20-20-20 rule helps and simple desk habits for eye comfort.",
  topics: ["cornea"],
  cluster: "dry-eye",
  pillarSlug: "dry-eye-disease-causes-symptoms-treatment",
  order: 2,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-10",
  cover: {
    src: "/images/blog/screen-time-dry-eyes-20-20-20-rule-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: young Indian professional in a bright Vadodara office looking away from a computer screen toward a window, a desk plant and water bottle nearby.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Dry Eye Disease: Causes, Symptoms, Diagnosis & Treatment", target: "/blog/dry-eye-disease-causes-symptoms-treatment/" },
    { label: "Can Dry Eyes Cause Blurry Vision? When to Worry", target: "link:5.1" },
    { label: "Dry Eye Tests: Tear Film, Meibomian Glands and More", target: "link:5.4" },
    { label: "Can Dry Eye Be Cured Permanently?", target: "link:5.3" },
    { label: "Dry Eye care at Mungale Eye Hospital", target: "/treatments/corneal-treatments/" },
  ],
};
