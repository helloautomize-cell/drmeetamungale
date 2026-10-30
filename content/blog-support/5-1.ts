import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 5.1 - Dry Eye cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "5.1",
  slug: "can-dry-eyes-cause-blurry-vision",
  title: "Can Dry Eyes Cause Blurry Vision? When to Worry",
  seoTitle: "Can Dry Eyes Cause Blurry Vision? | Mungale Eye Hospital",
  metaDescription: "Dry eye can cause blurry vision that clears with blinking. Learn why it happens, how it differs from screen strain and other eye conditions, and when to see an.",
  topics: ["cornea"],
  cluster: "dry-eye",
  pillarSlug: "dry-eye-disease-causes-symptoms-treatment",
  order: 1,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-09",
  cover: {
    src: "/images/blog/can-dry-eyes-cause-blurry-vision-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: office worker blinking and rubbing tired eyes while looking at a computer screen.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Dry Eye Disease: Causes, Symptoms, Diagnosis & Treatment", target: "/blog/dry-eye-disease-causes-symptoms-treatment/" },
    { label: "Screen Time and Dry Eyes: The 20-20-20 Rule Explained", target: "link:5.2" },
    { label: "Can Dry Eye Be Cured Permanently?", target: "link:5.3" },
    { label: "Dry Eye Tests: Tear Film, Meibomian Glands and More", target: "link:5.4" },
    { label: "Dry Eye care at Mungale Eye Hospital", target: "/treatments/corneal-treatments/" },
  ],
};
