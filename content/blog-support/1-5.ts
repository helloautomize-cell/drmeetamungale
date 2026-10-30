import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 1.5 - Cataract cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "1.5",
  slug: "phaco-vs-msics-cataract-surgery-difference",
  title: "Phaco vs MSICS Cataract Surgery: What Is the Difference?",
  seoTitle: "Phaco vs MSICS Cataract Surgery | Mungale Eye Hospital",
  metaDescription: "Phaco vs MSICS cataract surgery explained in plain language: how the two techniques differ, when each is used, and what to ask your eye surgeon.",
  topics: ["cataract"],
  cluster: "cataract",
  pillarSlug: "cataract-surgery-guide",
  order: 5,
  treatmentPage: "cataract-surgery",
  reviewedBy: ["sachin","meeta"],
  reviewConfirmed: true,
  date: "2026-10-02",
  cover: {
    src: "/images/blog/phaco-vs-msics-cataract-surgery-difference-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist seated beside a slit-lamp microscope, pointing to a simple anatomical eye model while an older patient and an adult family member.",
  },
  readMinutes: 6,
  keepReading: [
    { label: "Cataract Surgery: Symptoms, When Surgery Is Needed, Lens Options, Procedure & Recovery", target: "/blog/cataract-surgery-guide/" },
    { label: "Cataract Lens Types: Which IOL Is Right for You?", target: "link:1.3" },
    { label: "Cataract Surgery Cost in Vadodara: What Sets the Price?", target: "link:1.2" },
    { label: "Pterygium Surgery Recovery: What to Expect", target: "link:6.3" },
    { label: "Cataract care at Mungale Eye Hospital", target: "/treatments/cataract-surgery/" },
  ],
};
