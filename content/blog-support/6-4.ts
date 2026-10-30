import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 6.4 - Pterygium cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "6.4",
  slug: "pterygium-recurrence-after-surgery",
  title: "Can Pterygium Come Back After Surgery?",
  seoTitle: "Can Pterygium Come Back? | Mungale Eye Hospital",
  metaDescription: "Pterygium can regrow after surgery, but modern grafting and good aftercare lower the risk. Learn why recurrence happens, early signs and how follow-up protects.",
  topics: ["cornea"],
  cluster: "pterygium",
  pillarSlug: "pterygium-causes-symptoms-stages-treatment-surgery",
  order: 4,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-13",
  cover: {
    src: "/images/blog/pterygium-recurrence-after-surgery-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist examining an Indian patient's eye at a slit lamp during a follow-up visit in a bright Vadodara eye hospital.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Pterygium: Causes, Symptoms, Stages, Treatment & Surgery", target: "/blog/pterygium-causes-symptoms-stages-treatment-surgery/" },
    { label: "Pterygium: Surgery or Eye Drops?", target: "link:6.2" },
    { label: "What Causes Pterygium? Sun, Dust and Wind Explained", target: "link:6.1" },
    { label: "Pterygium vs Pinguecula: What Is the Difference?", target: "link:6.5" },
    { label: "Pterygium care at Mungale Eye Hospital", target: "/treatments/corneal-treatments/" },
  ],
};
