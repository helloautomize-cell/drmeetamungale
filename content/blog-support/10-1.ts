import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 10.1 - Eye Check-Up & Vision Across Life cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "10.1",
  slug: "how-often-adults-eye-checkup",
  title: "How Often Should Adults Get an Eye Check-Up?",
  seoTitle: "How Often to Get an Eye Check-Up | Mungale Eye Hospital",
  metaDescription: "How often you need an eye test depends on age, health and risk factors. Here is a simple guide for adults, plus signs that mean you should not wait.",
  topics: ["eye-health"],
  cluster: "eye-checkup",
  pillarSlug: "eye-checkup-after-forty-tests-frequency-warning-signs",
  order: 1,
  treatmentPage: "",
  reviewedBy: ["sachin","meeta"],
  reviewConfirmed: true,
  date: "2026-10-20",
  cover: {
    src: "/images/blog/how-often-adults-eye-checkup-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: Indian adult reading an eye chart in a bright optical clinic while an eye doctor looks.",
  },
  readMinutes: 3,
  keepReading: [
    { label: "What Happens During a Complete Eye Examination?", target: "link:10.2" },
    { label: "Eye Tests After 40: OCT, Eye Pressure and Retina Checks", target: "link:10.3" },
    { label: "Blurry Vision After 40: Cataract, Presbyopia or Something Else?", target: "link:10.4" },
    { label: "10 Warning Signs to See an Eye Doctor", target: "link:10.5" },
    { label: "Eye Check-Up After 40: Tests, Frequency & Warning Signs", target: "/blog/eye-checkup-after-forty-tests-frequency-warning-signs/" },
  ],
};
