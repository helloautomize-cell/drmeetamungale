import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 8.2 - Diabetic Eye Disease cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "8.2",
  slug: "how-often-diabetics-eye-checkup",
  title: "How Often Should Diabetics Get an Eye Check-Up?",
  seoTitle: "Diabetic Eye Check-Up Frequency | Mungale Eye Hospital",
  metaDescription: "People with diabetes need regular dilated eye exams even when vision seems fine. Learn how often to go, what each check covers and when to be seen sooner.",
  topics: ["eye-health"],
  cluster: "diabetic-retinopathy",
  pillarSlug: "diabetic-retinopathy-symptoms-screening-stages-treatment",
  order: 2,
  treatmentPage: "",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-16",
  cover: {
    src: "/images/blog/how-often-diabetics-eye-checkup-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: calendar with a circled date next to a glucose meter and a pair of glasses on a desk.",
  },
  readMinutes: 2,
  keepReading: [
    { label: "Does Diabetes Affect Your Eyes Even If You See Clearly?", target: "link:8.1" },
    { label: "How Often Should Adults Get an Eye Check-Up?", target: "link:10.1" },
    { label: "What Happens During a Complete Eye Examination?", target: "link:10.2" },
    { label: "Diabetic Retinopathy Stages Explained", target: "link:8.3" },
    { label: "Diabetic Retinopathy: Symptoms, Screening, Stages & Treatment", target: "/blog/diabetic-retinopathy-symptoms-screening-stages-treatment/" },
  ],
};
