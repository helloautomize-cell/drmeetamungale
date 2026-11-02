import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 1.3 - Cataract cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "1.3",
  slug: "cataract-lens-types-monofocal-toric-multifocal-edof",
  title: "Cataract Lens Types: Which IOL Is Right for You?",
  seoTitle: "Cataract Lens Types | Mungale Eye Hospital",
  metaDescription: "Compare monofocal, toric, multifocal and EDOF cataract lenses, who each may suit, and the questions to ask your ophthalmologist before choosing an IOL.",
  topics: ["cataract"],
  cluster: "cataract",
  pillarSlug: "cataract-surgery-guide",
  order: 3,
  treatmentPage: "cataract-surgery",
  reviewedBy: ["sachin","meeta"],
  reviewConfirmed: true,
  date: "2026-10-01",
  cover: {
    src: "/images/blog/cataract-lens-types-monofocal-toric-multifocal-edof-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: ophthalmologist, seen from behind and unidentifiable, explains an eye model to an elderly patient seated at a slit-lamp examination station..",
  },
  readMinutes: 6,
  keepReading: [
    { label: "Cataract Surgery: Symptoms, When Surgery Is Needed, Lens Options, Procedure & Recovery", target: "/blog/cataract-surgery-guide/" },
    { label: "Phaco vs MSICS Cataract Surgery: What Is the Difference?", target: "link:1.5" },
    { label: "Cataract Surgery Cost in Vadodara: What Sets the Price?", target: "link:1.2" },
    { label: "Cataract Surgery Recovery: Week by Week Guide", target: "link:1.4" },
    { label: "Cataract care at Mungale Eye Hospital", target: "/treatments/cataract-surgery/" },
  ],
};
