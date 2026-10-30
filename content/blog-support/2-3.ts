import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 2.3 - Glaucoma cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "2.3",
  slug: "glaucoma-treatment-options-drops-laser-surgery",
  title: "Glaucoma Treatment Options: Drops, Laser or Surgery?",
  seoTitle: "Glaucoma Treatment Options | Mungale Eye Hospital",
  metaDescription: "Glaucoma treatment options explained in plain language. See how doctors choose between eye drops, laser and surgery based on your eye pressure and optic nerve.",
  topics: ["glaucoma"],
  cluster: "glaucoma",
  pillarSlug: "glaucoma-symptoms-causes-treatment",
  order: 3,
  treatmentPage: "glaucoma-treatments",
  reviewedBy: "sachin",
  reviewConfirmed: true,
  date: "2026-10-04",
  cover: {
    src: "/images/blog/glaucoma-treatment-options-drops-laser-surgery-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: senior ophthalmologist, seen from behind or in soft focus with no identifiable face, sits across a desk from an older patient, reviewing a tablet.",
  },
  readMinutes: 6,
  keepReading: [
    { label: "Glaucoma: Symptoms, Causes, Eye Pressure Tests & Treatment", target: "/blog/glaucoma-symptoms-causes-treatment/" },
    { label: "Glaucoma Eye Tests Explained: Tonometry, OCT, Visual Field", target: "link:2.2" },
    { label: "Can Glaucoma Be Cured? What Treatment Can and Cannot Restore", target: "link:2.5" },
    { label: "What Is an Acute Glaucoma Attack? Emergency Symptoms", target: "link:2.4" },
    { label: "Glaucoma care at Mungale Eye Hospital", target: "/treatments/glaucoma-treatments/" },
  ],
};
