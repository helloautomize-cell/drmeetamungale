import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 2.2 - Glaucoma cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "2.2",
  slug: "glaucoma-eye-tests-tonometry-oct-visual-field",
  title: "Glaucoma Eye Tests Explained: Tonometry, OCT, Visual Field",
  seoTitle: "Glaucoma Eye Tests Explained | Mungale Eye Hospital",
  metaDescription: "Wondering why glaucoma needs so many tests? Here is what tonometry, OCT, visual field testing and gonioscopy each show, and how doctors read them together.",
  topics: ["glaucoma"],
  cluster: "glaucoma",
  pillarSlug: "glaucoma-symptoms-causes-treatment",
  order: 2,
  treatmentPage: "glaucoma-evaluation",
  reviewedBy: "sachin",
  reviewConfirmed: true,
  date: "2026-10-03",
  cover: {
    src: "/images/blog/glaucoma-eye-tests-tonometry-oct-visual-field-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmology consultation room with soft daylight from a side window.  An OCT scanner and a slit lamp sit on a clean white desk in the foreground..",
  },
  readMinutes: 6,
  keepReading: [
    { label: "Glaucoma: Symptoms, Causes, Eye Pressure Tests & Treatment", target: "/blog/glaucoma-symptoms-causes-treatment/" },
    { label: "Glaucoma Treatment Options: Drops, Laser or Surgery?", target: "link:2.3" },
    { label: "What Is an Acute Glaucoma Attack? Emergency Symptoms", target: "link:2.4" },
    { label: "Can Glaucoma Be Cured? What Treatment Can and Cannot Restore", target: "link:2.5" },
    { label: "Eye Tests After 40: OCT, Eye Pressure and Retina Checks", target: "link:10.3" },
  ],
};
