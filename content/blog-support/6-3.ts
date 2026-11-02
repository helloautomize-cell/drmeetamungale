import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 6.3 - Pterygium cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "6.3",
  slug: "pterygium-surgery-recovery-time",
  title: "Pterygium Surgery Recovery: What to Expect",
  seoTitle: "Pterygium Surgery Recovery | Mungale Eye Hospital",
  metaDescription: "Most people feel comfortable within a week of pterygium surgery, while redness fades over a few weeks. Learn the recovery timeline, aftercare tips and warning.",
  topics: ["cornea"],
  cluster: "pterygium",
  pillarSlug: "pterygium-causes-symptoms-stages-treatment-surgery",
  order: 3,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-12",
  cover: {
    src: "/images/blog/pterygium-surgery-recovery-time-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: smiling Indian woman wearing protective dark glasses resting on a sofa at home in Vadodara a day after eye surgery, with a small bottle of eye.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Pterygium: Causes, Symptoms, Stages, Treatment & Surgery", target: "/blog/pterygium-causes-symptoms-stages-treatment-surgery/" },
    { label: "Pterygium: Surgery or Eye Drops?", target: "link:6.2" },
    { label: "Can Pterygium Come Back After Surgery?", target: "link:6.4" },
    { label: "What Causes Pterygium? Sun, Dust and Wind Explained", target: "link:6.1" },
    { label: "Pterygium vs Pinguecula: What Is the Difference?", target: "link:6.5" },
  ],
};
