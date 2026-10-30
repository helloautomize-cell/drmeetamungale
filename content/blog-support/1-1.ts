import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 1.1 - Cataract cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "1.1",
  slug: "when-cataract-needs-surgery-signs",
  title: "When Does a Cataract Need Surgery? 7 Signs Not to Ignore",
  seoTitle: "When Does a Cataract Need Surgery? | Mungale Eye Hospital",
  metaDescription: "Wondering when a cataract needs surgery? Learn seven everyday signs that point to an eye check, and how ophthalmologists decide if surgery is the right step.",
  topics: ["cataract"],
  cluster: "cataract",
  pillarSlug: "cataract-surgery-guide",
  order: 1,
  treatmentPage: "cataract-surgery",
  reviewedBy: ["sachin","meeta"],
  reviewConfirmed: true,
  date: "2026-10-01",
  cover: {
    src: "/images/blog/when-cataract-needs-surgery-signs-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: elderly man sits at a slit-lamp examination unit while an ophthalmologist in a white coat, seen from behind and slightly out of focus, adjusts.",
  },
  readMinutes: 6,
  keepReading: [
    { label: "Cataract Surgery: Symptoms, When Surgery Is Needed, Lens Options, Procedure & Recovery", target: "/blog/cataract-surgery-guide/" },
    { label: "Eye Check-Up After 40: Tests, Frequency & Warning Signs", target: "/blog/eye-checkup-after-forty-tests-frequency-warning-signs/" },
    { label: "Cataract Surgery Cost in Vadodara: What Sets the Price?", target: "link:1.2" },
    { label: "Cataract Lens Types: Which IOL Is Right for You?", target: "link:1.3" },
    { label: "Cataract Surgery Recovery: Week by Week Guide", target: "link:1.4" },
  ],
};
