import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 10.3 - Eye Check-Up & Vision Across Life cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "10.3",
  slug: "eye-tests-after-40-oct-eye-pressure-retina",
  title: "Eye Tests After 40: OCT, Eye Pressure and Retina Checks",
  seoTitle: "Eye Tests After 40 | Mungale Eye Hospital",
  metaDescription: "Eye changes become more common after 40. Learn which tests matter, including eye pressure, OCT and retina examination, and why they are done.",
  topics: ["eye-health"],
  cluster: "eye-checkup",
  pillarSlug: "eye-checkup-after-forty-tests-frequency-warning-signs",
  order: 3,
  treatmentPage: "",
  reviewedBy: ["sachin","meeta"],
  reviewConfirmed: true,
  date: "2026-10-21",
  cover: {
    src: "/images/blog/eye-tests-after-40-oct-eye-pressure-retina-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: middle-aged Indian man placing his chin on an OCT scanner while a technician operates it.",
  },
  readMinutes: 2,
  keepReading: [
    { label: "Blurry Vision After 40: Cataract, Presbyopia or Something Else?", target: "link:10.4" },
    { label: "How Often Should Adults Get an Eye Check-Up?", target: "link:10.1" },
    { label: "What Happens During a Complete Eye Examination?", target: "link:10.2" },
    { label: "10 Warning Signs to See an Eye Doctor", target: "link:10.5" },
    { label: "Eye Check-Up After 40: Tests, Frequency & Warning Signs", target: "/blog/eye-checkup-after-forty-tests-frequency-warning-signs/" },
  ],
};
