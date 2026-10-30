import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 10.5 - Eye Check-Up & Vision Across Life cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "10.5",
  slug: "warning-signs-see-eye-doctor",
  title: "10 Warning Signs to See an Eye Doctor",
  seoTitle: "10 Warning Signs to See an Eye Doctor | Mungale Eye Hospital",
  metaDescription: "Some eye symptoms need prompt attention. Here are ten warning signs that mean you should see an eye doctor, and which need emergency care. Needs emergency care.",
  topics: ["eye-health"],
  cluster: "eye-checkup",
  pillarSlug: "eye-checkup-after-forty-tests-frequency-warning-signs",
  order: 5,
  treatmentPage: "",
  reviewedBy: ["sachin","meeta"],
  reviewConfirmed: true,
  date: "2026-10-22",
  cover: {
    src: "/images/blog/warning-signs-see-eye-doctor-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: Indian adult covering one eye with a hand and looking concerned in a bright home setting.",
  },
  readMinutes: 3,
  keepReading: [
    { label: "How Often Should Adults Get an Eye Check-Up?", target: "link:10.1" },
    { label: "Corneal Ulcer Symptoms: When a Red Eye Is an Emergency", target: "link:7.1" },
    { label: "What Happens During a Complete Eye Examination?", target: "link:10.2" },
    { label: "Eye Tests After 40: OCT, Eye Pressure and Retina Checks", target: "link:10.3" },
    { label: "Eye Check-Up After 40: Tests, Frequency & Warning Signs", target: "/blog/eye-checkup-after-forty-tests-frequency-warning-signs/" },
  ],
};
