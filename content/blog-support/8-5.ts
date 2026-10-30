import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 8.5 - Diabetic Eye Disease cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "8.5",
  slug: "can-diabetic-retinopathy-be-reversed",
  title: "Can Diabetic Retinopathy Be Reversed?",
  seoTitle: "Can Diabetic Retinopathy Be Reversed? | Mungale Eye Hospital",
  metaDescription: "Some diabetic eye changes, like macular swelling, can improve with treatment, but damaged retina cannot fully recover. Learn what can get better and what to.",
  topics: ["eye-health"],
  cluster: "diabetic-retinopathy",
  pillarSlug: "diabetic-retinopathy-symptoms-screening-stages-treatment",
  order: 5,
  treatmentPage: "",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-17",
  cover: {
    src: "/images/blog/can-diabetic-retinopathy-be-reversed-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: smiling senior Indian couple checking a blood glucose meter together at a breakfast table in a bright Vadodara home, with fresh fruit.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Dry Eye Disease: Causes, Symptoms, Diagnosis & Treatment", target: "/blog/dry-eye-disease-causes-symptoms-treatment/" },
    { label: "Diabetic Retinopathy Stages Explained", target: "link:8.3" },
    { label: "Diabetic Retinopathy Treatment: Laser, Injections, Surgery", target: "link:8.4" },
    { label: "Does Diabetes Affect Your Eyes Even If You See Clearly?", target: "link:8.1" },
    { label: "Diabetic Retinopathy: Symptoms, Screening, Stages & Treatment", target: "/blog/diabetic-retinopathy-symptoms-screening-stages-treatment/" },
  ],
};
