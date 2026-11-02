import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 4.5 - Corneal Transplant cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "4.5",
  slug: "can-corneal-transplant-restore-vision",
  title: "Can a Corneal Transplant Restore Vision Completely?",
  seoTitle: "Corneal Transplant Results | Mungale Eye Hospital",
  metaDescription: "A corneal transplant can greatly improve vision, but results vary. Learn what affects visual outcome, why glasses may still be needed and how to set realistic.",
  topics: ["cornea","surgery"],
  cluster: "corneal-transplant",
  pillarSlug: "corneal-transplant-surgery",
  order: 5,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-09",
  cover: {
    src: "/images/blog/can-corneal-transplant-restore-vision-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: patient reading a vision chart during a follow-up visit after corneal surgery.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Corneal Transplant Surgery: When It Is Needed, Types, Recovery & Risks", target: "/blog/corneal-transplant-surgery/" },
    { label: "DMEK vs DSEK vs DALK vs PK: What Is the Difference?", target: "link:4.2" },
    { label: "Corneal Transplant Recovery: The First 6 Months", target: "link:4.3" },
    { label: "Corneal Graft Rejection: Warning Signs and What to Do", target: "link:4.4" },
    { label: "Scleral Lenses for Keratoconus: Who Can Benefit?", target: "link:3.3" },
  ],
};
