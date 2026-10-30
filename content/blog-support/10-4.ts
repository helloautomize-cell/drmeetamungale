import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 10.4 - Eye Check-Up & Vision Across Life cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "10.4",
  slug: "blurry-vision-after-40-causes",
  title: "Blurry Vision After 40: Cataract, Presbyopia or Something Else?",
  seoTitle: "Blurry Vision After 40 | Mungale Eye Hospital",
  metaDescription: "Blurry vision after 40 can be presbyopia, early cataract, dry eye or something more serious. Learn how to tell the causes apart and when to see an eye doctor.",
  topics: ["eye-health"],
  cluster: "eye-checkup",
  pillarSlug: "eye-checkup-after-forty-tests-frequency-warning-signs",
  order: 4,
  treatmentPage: "",
  reviewedBy: ["sachin","meeta"],
  reviewConfirmed: true,
  date: "2026-10-21",
  cover: {
    src: "/images/blog/blurry-vision-after-40-causes-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: middle-aged Indian woman holding a book at arm's length, squinting slightly in a bright living room.",
  },
  readMinutes: 2,
  keepReading: [
    { label: "Eye Tests After 40: OCT, Eye Pressure and Retina Checks", target: "link:10.3" },
    { label: "How Often Should Adults Get an Eye Check-Up?", target: "link:10.1" },
    { label: "Can Dry Eyes Cause Blurry Vision? When to Worry", target: "link:5.1" },
    { label: "What Happens During a Complete Eye Examination?", target: "link:10.2" },
    { label: "Eye Check-Up After 40: Tests, Frequency & Warning Signs", target: "/blog/eye-checkup-after-forty-tests-frequency-warning-signs/" },
  ],
};
