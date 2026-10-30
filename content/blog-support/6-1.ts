import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 6.1 - Pterygium cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "6.1",
  slug: "what-causes-pterygium-sun-dust-wind",
  title: "What Causes Pterygium? Sun, Dust and Wind Explained",
  seoTitle: "What Causes Pterygium? | Mungale Eye Hospital",
  metaDescription: "Pterygium is a fleshy growth on the white of the eye linked to UV light, dust and wind. Learn why it forms, who is at higher risk in Gujarat and how to protect.",
  topics: ["cornea"],
  cluster: "pterygium",
  pillarSlug: "pterygium-causes-symptoms-stages-treatment-surgery",
  order: 1,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-11",
  cover: {
    src: "/images/blog/what-causes-pterygium-sun-dust-wind-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: Indian man in his forties wearing wraparound sunglasses and a cap while riding a two-wheeler on a sunny, dusty road in Vadodara.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Pterygium: Surgery or Eye Drops?", target: "link:6.2" },
    { label: "Pterygium vs Pinguecula: What Is the Difference?", target: "link:6.5" },
    { label: "Can Pterygium Come Back After Surgery?", target: "link:6.4" },
    { label: "Can Dry Eyes Cause Blurry Vision? When to Worry", target: "link:5.1" },
    { label: "Pterygium: Causes, Symptoms, Stages, Treatment & Surgery", target: "/blog/pterygium-causes-symptoms-stages-treatment-surgery/" },
  ],
};
