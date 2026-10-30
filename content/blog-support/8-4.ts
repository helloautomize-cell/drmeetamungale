import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 8.4 - Diabetic Eye Disease cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "8.4",
  slug: "diabetic-retinopathy-treatment-laser-injections-surgery",
  title: "Diabetic Retinopathy Treatment: Laser, Injections, Surgery",
  seoTitle: "Diabetic Retinopathy Treatment | Mungale Eye Hospital",
  metaDescription: "Diabetic retinopathy treatment depends on what the retina scan shows. Learn how laser, anti-VEGF injections and vitrectomy surgery work, and what each one.",
  topics: ["eye-health"],
  cluster: "diabetic-retinopathy",
  pillarSlug: "diabetic-retinopathy-symptoms-screening-stages-treatment",
  order: 4,
  treatmentPage: "",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-17",
  cover: {
    src: "/images/blog/diabetic-retinopathy-treatment-laser-injections-surgery-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: retina specialist preparing laser equipment beside a calm senior Indian patient seated at a treatment machine in a modern Vadodara eye hospital.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Dry Eye Disease: Causes, Symptoms, Diagnosis & Treatment", target: "/blog/dry-eye-disease-causes-symptoms-treatment/" },
    { label: "Diabetic Retinopathy Stages Explained", target: "link:8.3" },
    { label: "Can Diabetic Retinopathy Be Reversed?", target: "link:8.5" },
    { label: "Does Diabetes Affect Your Eyes Even If You See Clearly?", target: "link:8.1" },
    { label: "Diabetic Retinopathy: Symptoms, Screening, Stages & Treatment", target: "/blog/diabetic-retinopathy-symptoms-screening-stages-treatment/" },
  ],
};
