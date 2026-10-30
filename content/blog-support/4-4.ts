import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 4.4 - Corneal Transplant cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "4.4",
  slug: "corneal-graft-rejection-warning-signs",
  title: "Corneal Graft Rejection: Warning Signs and What to Do",
  seoTitle: "Corneal Graft Rejection: Warning | Mungale Eye Hospital",
  metaDescription: "Corneal graft rejection can often be reversed if treated early. Learn the RSVP warning signs, who is at higher risk, how rejection is treated and how to protect",
  topics: ["cornea","surgery"],
  cluster: "corneal-transplant",
  pillarSlug: "corneal-transplant-surgery",
  order: 4,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-08",
  cover: {
    src: "/images/blog/corneal-graft-rejection-warning-signs-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist examining a red eye with a slit lamp.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Corneal Transplant Surgery: When It Is Needed, Types, Recovery & Risks", target: "/blog/corneal-transplant-surgery/" },
    { label: "Corneal Transplant Recovery: The First 6 Months", target: "link:4.3" },
    { label: "DMEK vs DSEK vs DALK vs PK: What Is the Difference?", target: "link:4.2" },
    { label: "Can a Corneal Transplant Restore Vision Completely?", target: "link:4.5" },
    { label: "Corneal Ulcer Symptoms: When a Red Eye Is an Emergency", target: "link:7.1" },
  ],
};
