import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 6.2 - Pterygium cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "6.2",
  slug: "pterygium-surgery-or-eye-drops",
  title: "Pterygium: Surgery or Eye Drops?",
  seoTitle: "Pterygium: Surgery or Eye Drops? | Mungale Eye Hospital",
  metaDescription: "Eye drops can calm pterygium redness, but only surgery removes the growth. Learn when drops are enough, when surgery is advised and how modern surgery lowers.",
  topics: ["cornea"],
  cluster: "pterygium",
  pillarSlug: "pterygium-causes-symptoms-stages-treatment-surgery",
  order: 2,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-12",
  cover: {
    src: "/images/blog/pterygium-surgery-or-eye-drops-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist in Vadodara holding a small eye drop bottle while explaining options to a middle-aged Indian patient in a bright consultation room.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Pterygium: Causes, Symptoms, Stages, Treatment & Surgery", target: "/blog/pterygium-causes-symptoms-stages-treatment-surgery/" },
    { label: "What Causes Pterygium? Sun, Dust and Wind Explained", target: "link:6.1" },
    { label: "Can Pterygium Come Back After Surgery?", target: "link:6.4" },
    { label: "Pterygium vs Pinguecula: What Is the Difference?", target: "link:6.5" },
    { label: "Pterygium care at Mungale Eye Hospital", target: "/treatments/corneal-treatments/" },
  ],
};
