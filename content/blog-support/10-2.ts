import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 10.2 - Eye Check-Up & Vision Across Life cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "10.2",
  slug: "what-happens-complete-eye-examination",
  title: "What Happens During a Complete Eye Examination?",
  seoTitle: "Complete Eye Examination Steps | Mungale Eye Hospital",
  metaDescription: "Not sure what to expect at an eye check-up? Here is a step-by-step guide to the tests in a complete eye examination and what each one looks for.",
  topics: ["eye-health"],
  cluster: "eye-checkup",
  pillarSlug: "eye-checkup-after-forty-tests-frequency-warning-signs",
  order: 2,
  treatmentPage: "",
  reviewedBy: ["sachin","meeta"],
  reviewConfirmed: true,
  date: "2026-10-20",
  cover: {
    src: "/images/blog/what-happens-complete-eye-examination-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: eye doctor using a slit lamp to examine a patient in a modern eye clinic.",
  },
  readMinutes: 3,
  keepReading: [
    { label: "How Often Should Adults Get an Eye Check-Up?", target: "link:10.1" },
    { label: "Eye Tests After 40: OCT, Eye Pressure and Retina Checks", target: "link:10.3" },
    { label: "10 Warning Signs to See an Eye Doctor", target: "link:10.5" },
    { label: "Blurry Vision After 40: Cataract, Presbyopia or Something Else?", target: "link:10.4" },
    { label: "Eye Check-Up After 40: Tests, Frequency & Warning Signs", target: "/blog/eye-checkup-after-forty-tests-frequency-warning-signs/" },
  ],
};
