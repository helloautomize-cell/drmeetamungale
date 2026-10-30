import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 1.4 - Cataract cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "1.4",
  slug: "cataract-surgery-recovery-week-by-week",
  title: "Cataract Surgery Recovery: Week by Week Guide",
  seoTitle: "Cataract Surgery Recovery | Mungale Eye Hospital",
  metaDescription: "Wondering what to expect after cataract surgery? This week-by-week recovery guide covers normal healing, safe activities, eye drops and when to call your.",
  topics: ["cataract"],
  cluster: "cataract",
  pillarSlug: "cataract-surgery-guide",
  order: 4,
  treatmentPage: "cataract-surgery",
  reviewedBy: ["sachin","meeta"],
  reviewConfirmed: true,
  date: "2026-10-02",
  cover: {
    src: "/images/blog/cataract-surgery-recovery-week-by-week-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: older adult sits across from an ophthalmologist, with a slit-lamp examination microscope in the foreground.",
  },
  readMinutes: 7,
  keepReading: [
    { label: "Cataract Surgery: Symptoms, When Surgery Is Needed, Lens Options, Procedure & Recovery", target: "/blog/cataract-surgery-guide/" },
    { label: "Cataract Lens Types: Which IOL Is Right for You?", target: "link:1.3" },
    { label: "Phaco vs MSICS Cataract Surgery: What Is the Difference?", target: "link:1.5" },
    { label: "When Does a Cataract Need Surgery? 7 Signs Not to Ignore", target: "link:1.1" },
    { label: "Cataract care at Mungale Eye Hospital", target: "/treatments/cataract-surgery/" },
  ],
};
