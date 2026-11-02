import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 4.1 - Corneal Transplant cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "4.1",
  slug: "when-is-corneal-transplant-needed",
  title: "When Does a Patient Need a Corneal Transplant?",
  seoTitle: "When Is a Corneal Transplant Needed? | Mungale Eye Hospital",
  metaDescription: "A corneal transplant replaces damaged corneal tissue with healthy donor tissue. Learn the conditions that may need one, when it is considered and what.",
  topics: ["cornea","surgery"],
  cluster: "corneal-transplant",
  pillarSlug: "corneal-transplant-surgery",
  order: 1,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-07",
  cover: {
    src: "/images/blog/when-is-corneal-transplant-needed-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: corneal surgeon examining a patient's eye with a slit lamp.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Corneal Transplant Surgery: When It Is Needed, Types, Recovery & Risks", target: "/blog/corneal-transplant-surgery/" },
    { label: "DMEK vs DSEK vs DALK vs PK: What Is the Difference?", target: "link:4.2" },
    { label: "Corneal Transplant Recovery: The First 6 Months", target: "link:4.3" },
    { label: "Corneal Graft Rejection: Warning Signs and What to Do", target: "link:4.4" },
    { label: "Can Keratoconus Be Cured or Only Controlled?", target: "link:3.4" },
  ],
};
