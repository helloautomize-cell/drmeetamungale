import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 2.1 - Glaucoma cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "2.1",
  slug: "early-glaucoma-symptoms-without-signs",
  title: "Early Glaucoma Symptoms: Can You Have It Without Signs?",
  seoTitle: "Early Glaucoma Symptoms | Mungale Eye Hospital",
  metaDescription: "Early glaucoma rarely causes symptoms. Learn why it slips past unnoticed, the small changes patients recall, and the eye symptoms that need urgent care.",
  topics: ["glaucoma"],
  cluster: "glaucoma",
  pillarSlug: "glaucoma-symptoms-causes-treatment",
  order: 1,
  treatmentPage: "glaucoma-evaluation",
  reviewedBy: "sachin",
  reviewConfirmed: true,
  date: "2026-10-03",
  cover: {
    src: "/images/blog/early-glaucoma-symptoms-without-signs-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: eye clinic in soft morning light.  A patient in their fifties sits at a visual field analyser, shown from behind and slightly to the side so.",
  },
  readMinutes: 6,
  keepReading: [
    { label: "Glaucoma: Symptoms, Causes, Eye Pressure Tests & Treatment", target: "/blog/glaucoma-symptoms-causes-treatment/" },
    { label: "Glaucoma Eye Tests Explained: Tonometry, OCT, Visual Field", target: "link:2.2" },
    { label: "What Is an Acute Glaucoma Attack? Emergency Symptoms", target: "link:2.4" },
    { label: "Can Glaucoma Be Cured? What Treatment Can and Cannot Restore", target: "link:2.5" },
    { label: "Glaucoma Treatment Options: Drops, Laser or Surgery?", target: "link:2.3" },
  ],
};
