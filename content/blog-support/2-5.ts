import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 2.5 - Glaucoma cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "2.5",
  slug: "can-glaucoma-be-cured",
  title: "Can Glaucoma Be Cured? What Treatment Can and Cannot Restore",
  seoTitle: "Can Glaucoma Be Cured? | Mungale Eye Hospital",
  metaDescription: "Can glaucoma be cured? Not yet, but it can be controlled. Learn what treatment protects, what it cannot restore, and how to keep your remaining vision stable.",
  topics: ["glaucoma"],
  cluster: "glaucoma",
  pillarSlug: "glaucoma-symptoms-causes-treatment",
  order: 5,
  treatmentPage: "glaucoma-treatments",
  reviewedBy: "sachin",
  reviewConfirmed: true,
  date: "2026-10-04",
  cover: {
    src: "/images/blog/can-glaucoma-be-cured-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: ophthalmologist, seen from behind and not identifiable, explains an optic nerve scan on a monitor to an older patient seated comfortably beside.",
  },
  readMinutes: 7,
  keepReading: [
    { label: "Glaucoma: Symptoms, Causes, Eye Pressure Tests & Treatment", target: "/blog/glaucoma-symptoms-causes-treatment/" },
    { label: "Glaucoma Eye Tests Explained: Tonometry, OCT, Visual Field", target: "link:2.2" },
    { label: "Glaucoma Treatment Options: Drops, Laser or Surgery?", target: "link:2.3" },
    { label: "Glaucoma care at Mungale Eye Hospital", target: "/treatments/glaucoma-treatments/" },
  ],
};
