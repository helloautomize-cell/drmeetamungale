import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 8.3 - Diabetic Eye Disease cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "8.3",
  slug: "diabetic-retinopathy-stages",
  title: "Diabetic Retinopathy Stages Explained",
  seoTitle: "Diabetic Retinopathy Stages Explained | Mungale Eye Hospital",
  metaDescription: "Diabetic retinopathy moves from mild to proliferative stages, often without early symptoms. Learn what happens at each stage, how macular edema fits in and when",
  topics: ["eye-health"],
  cluster: "diabetic-retinopathy",
  pillarSlug: "diabetic-retinopathy-symptoms-screening-stages-treatment",
  order: 3,
  treatmentPage: "",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-16",
  cover: {
    src: "/images/blog/diabetic-retinopathy-stages-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist pointing to a retina scan on a large monitor while explaining to a middle-aged Indian man with diabetes in a modern Vadodara eye.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Dry Eye Disease: Causes, Symptoms, Diagnosis & Treatment", target: "/blog/dry-eye-disease-causes-symptoms-treatment/" },
    { label: "Diabetic Retinopathy Treatment: Laser, Injections, Surgery", target: "link:8.4" },
    { label: "Can Diabetic Retinopathy Be Reversed?", target: "link:8.5" },
    { label: "Does Diabetes Affect Your Eyes Even If You See Clearly?", target: "link:8.1" },
    { label: "Diabetic Retinopathy: Symptoms, Screening, Stages & Treatment", target: "/blog/diabetic-retinopathy-symptoms-screening-stages-treatment/" },
  ],
};
