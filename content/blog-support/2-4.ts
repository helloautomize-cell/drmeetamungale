import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 2.4 - Glaucoma cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "2.4",
  slug: "acute-glaucoma-attack-symptoms-emergency-care",
  title: "What Is an Acute Glaucoma Attack? Emergency Symptoms",
  seoTitle: "What Is an Acute Glaucoma Attack? | Mungale Eye Hospital",
  metaDescription: "An acute glaucoma attack is a sudden eye emergency. Learn the key symptoms, why it happens and what treatment involves, from the eye specialists at Mungale Eye.",
  topics: ["glaucoma"],
  cluster: "glaucoma",
  pillarSlug: "glaucoma-symptoms-causes-treatment",
  order: 4,
  treatmentPage: "glaucoma-evaluation",
  reviewedBy: "sachin",
  reviewConfirmed: true,
  date: "2026-10-04",
  cover: {
    src: "/images/blog/acute-glaucoma-attack-symptoms-emergency-care-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: slit lamp microscope sits in the foreground, slightly out of focus.  An ophthalmologist in a white coat, seen from behind and not identifiable,.",
  },
  readMinutes: 7,
  keepReading: [
    { label: "Glaucoma: Symptoms, Causes, Eye Pressure Tests & Treatment", target: "/blog/glaucoma-symptoms-causes-treatment/" },
    { label: "Early Glaucoma Symptoms: Can You Have It Without Signs?", target: "link:2.1" },
    { label: "Glaucoma Eye Tests Explained: Tonometry, OCT, Visual Field", target: "link:2.2" },
    { label: "Glaucoma Treatment Options: Drops, Laser or Surgery?", target: "link:2.3" },
    { label: "Can Glaucoma Be Cured? What Treatment Can and Cannot Restore", target: "link:2.5" },
  ],
};
