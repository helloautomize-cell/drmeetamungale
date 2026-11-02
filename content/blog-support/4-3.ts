import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 4.3 - Corneal Transplant cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "4.3",
  slug: "corneal-transplant-recovery-first-6-months",
  title: "Corneal Transplant Recovery: The First 6 Months",
  seoTitle: "Corneal Transplant Recovery | Mungale Eye Hospital",
  metaDescription: "Recovery after corneal transplant takes weeks to months and depends on the type of surgery. Learn the timeline, eye drops, activity limits, follow-up and.",
  topics: ["cornea","surgery"],
  cluster: "corneal-transplant",
  pillarSlug: "corneal-transplant-surgery",
  order: 3,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-08",
  cover: {
    src: "/images/blog/corneal-transplant-recovery-first-6-months-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: patient wearing a protective eye shield resting.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Corneal Transplant Surgery: When It Is Needed, Types, Recovery & Risks", target: "/blog/corneal-transplant-surgery/" },
    { label: "DMEK vs DSEK vs DALK vs PK: What Is the Difference?", target: "link:4.2" },
    { label: "Corneal Graft Rejection: Warning Signs and What to Do", target: "link:4.4" },
    { label: "Can a Corneal Transplant Restore Vision Completely?", target: "link:4.5" },
    { label: "When Does a Patient Need a Corneal Transplant?", target: "link:4.1" },
  ],
};
