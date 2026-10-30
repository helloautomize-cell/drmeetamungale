import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 5.5 - Dry Eye cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "5.5",
  slug: "punctal-plugs-dry-eye",
  title: "Punctal Plugs for Dry Eye: Who Needs Them?",
  seoTitle: "Punctal Plugs for Dry Eye | Mungale Eye Hospital",
  metaDescription: "Punctal plugs keep natural tears on the eye longer by blocking tear drainage. Learn how they work, who may benefit, what the procedure is like and possible side",
  topics: ["cornea"],
  cluster: "dry-eye",
  pillarSlug: "dry-eye-disease-causes-symptoms-treatment",
  order: 5,
  treatmentPage: "corneal-treatments",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-11",
  cover: {
    src: "/images/blog/punctal-plugs-dry-eye-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist in a Vadodara eye clinic gently examining the lower eyelid of a relaxed senior Indian patient seated at a slit lamp.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Dry Eye Disease: Causes, Symptoms, Diagnosis & Treatment", target: "/blog/dry-eye-disease-causes-symptoms-treatment/" },
    { label: "Dry Eye Tests: Tear Film, Meibomian Glands and More", target: "link:5.4" },
    { label: "Can Dry Eye Be Cured Permanently?", target: "link:5.3" },
    { label: "Can Dry Eyes Cause Blurry Vision? When to Worry", target: "link:5.1" },
    { label: "Screen Time and Dry Eyes: The 20-20-20 Rule Explained", target: "link:5.2" },
  ],
};
