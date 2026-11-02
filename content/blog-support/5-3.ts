import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 5.3 - Dry Eye cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "5.3",
  slug: "can-dry-eye-be-cured-permanently",
  title: "Can Dry Eye Be Cured Permanently?",
  seoTitle: "Can Dry Eye Be Cured Permanently? | Mungale Eye Hospital",
  metaDescription: "Some dry eye clears once the trigger is fixed, while chronic dry eye needs ongoing care. Learn which type you may have and what long-term treatment involves.",
  topics: ["cornea"],
  cluster: "dry-eye",
  pillarSlug: "dry-eye-disease-causes-symptoms-treatment",
  order: 3,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-10",
  cover: {
    src: "/images/blog/can-dry-eye-be-cured-permanently-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: middle-aged Indian woman applying eye drops at a sunny window at home in Vadodara, with a small bottle and warm compress on a side table.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Can Dry Eyes Cause Blurry Vision? When to Worry", target: "link:5.1" },
    { label: "Dry Eye Tests: Tear Film, Meibomian Glands and More", target: "link:5.4" },
    { label: "Punctal Plugs for Dry Eye: Who Needs Them?", target: "link:5.5" },
    { label: "Screen Time and Dry Eyes: The 20-20-20 Rule Explained", target: "link:5.2" },
    { label: "Dry Eye Disease: Causes, Symptoms, Diagnosis & Treatment", target: "/blog/dry-eye-disease-causes-symptoms-treatment/" },
  ],
};
