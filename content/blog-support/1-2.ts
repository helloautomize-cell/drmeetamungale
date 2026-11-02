import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 1.2 - Cataract cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "1.2",
  slug: "cataract-surgery-cost-vadodara",
  title: "Cataract Surgery Cost in Vadodara: What Sets the Price?",
  seoTitle: "Cataract Surgery Cost | Mungale Eye Hospital",
  metaDescription: "Cataract surgery cost in Vadodara varies from patient to patient. Learn how the lens, tests, technique and aftercare shape the final bill, and what to ask.",
  topics: ["cataract"],
  cluster: "cataract",
  pillarSlug: "cataract-surgery-guide",
  order: 2,
  treatmentPage: "cataract-surgery",
  reviewedBy: ["sachin","meeta"],
  reviewConfirmed: true,
  date: "2026-10-01",
  cover: {
    src: "/images/blog/cataract-surgery-cost-vadodara-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: ophthalmologist in a white coat sits across a desk from an elderly patient and an adult family member, with a printed estimate and a simple eye.",
  },
  readMinutes: 7,
  keepReading: [
    { label: "Cataract Surgery: Symptoms, When Surgery Is Needed, Lens Options, Procedure & Recovery", target: "/blog/cataract-surgery-guide/" },
    { label: "When Does a Cataract Need Surgery? 7 Signs Not to Ignore", target: "link:1.1" },
    { label: "Cataract Lens Types: Which IOL Is Right for You?", target: "link:1.3" },
    { label: "Cataract Surgery Recovery: Week by Week Guide", target: "link:1.4" },
    { label: "Cataract care at Mungale Eye Hospital", target: "/treatments/cataract-surgery/" },
  ],
};
