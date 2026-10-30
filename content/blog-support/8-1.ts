import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 8.1 - Diabetic Eye Disease cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "8.1",
  slug: "diabetes-eye-damage-without-symptoms",
  title: "Does Diabetes Affect Your Eyes Even If You See Clearly?",
  seoTitle: "Does Diabetes Affect Your Eyes? | Mungale Eye Hospital",
  metaDescription: "Diabetic eye disease can develop without any change in vision. Learn why clear eyesight does not mean healthy retinas and why screening matters.",
  topics: ["eye-health"],
  cluster: "diabetic-retinopathy",
  pillarSlug: "diabetic-retinopathy-symptoms-screening-stages-treatment",
  order: 1,
  treatmentPage: "",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-16",
  cover: {
    src: "/images/blog/diabetes-eye-damage-without-symptoms-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: Indian patient with diabetes looking into a retinal imaging machine while a technician adjusts it.",
  },
  readMinutes: 3,
  keepReading: [
    { label: "How Often Should Diabetics Get an Eye Check-Up?", target: "link:8.2" },
    { label: "How Often Should Adults Get an Eye Check-Up?", target: "link:10.1" },
    { label: "Diabetic Retinopathy Stages Explained", target: "link:8.3" },
    { label: "Diabetic Retinopathy Treatment: Laser, Injections, Surgery", target: "link:8.4" },
    { label: "Diabetic Retinopathy: Symptoms, Screening, Stages & Treatment", target: "/blog/diabetic-retinopathy-symptoms-screening-stages-treatment/" },
  ],
};
