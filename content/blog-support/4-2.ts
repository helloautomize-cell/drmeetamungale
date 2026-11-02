import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 4.2 - Corneal Transplant cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "4.2",
  slug: "dmek-vs-dsek-vs-dalk-vs-pk",
  title: "DMEK vs DSEK vs DALK vs PK: What Is the Difference?",
  seoTitle: "DMEK vs DSEK vs DALK vs PK | Mungale Eye Hospital",
  metaDescription: "Corneal transplants now replace only the diseased layer when possible. Compare DMEK, DSEK, DALK and full-thickness PK by layer replaced, recovery, rejection.",
  topics: ["cornea","surgery"],
  cluster: "corneal-transplant",
  pillarSlug: "corneal-transplant-surgery",
  order: 2,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-07",
  cover: {
    src: "/images/blog/dmek-vs-dsek-vs-dalk-vs-pk-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: corneal surgeon at an operating microscope during eye surgery.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Corneal Transplant Surgery: When It Is Needed, Types, Recovery & Risks", target: "/blog/corneal-transplant-surgery/" },
    { label: "When Does a Patient Need a Corneal Transplant?", target: "link:4.1" },
    { label: "Corneal Transplant Recovery: The First 6 Months", target: "link:4.3" },
    { label: "Corneal Graft Rejection: Warning Signs and What to Do", target: "link:4.4" },
    { label: "Can a Corneal Transplant Restore Vision Completely?", target: "link:4.5" },
  ],
};
