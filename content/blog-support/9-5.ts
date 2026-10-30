import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 9.5 - LASIK & Refractive Surgery cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "9.5",
  slug: "lasik-risks-side-effects-icl-alternative",
  title: "LASIK Risks, Side Effects and ICL as an Alternative",
  seoTitle: "LASIK Risks and ICL Alternative | Mungale Eye Hospital",
  metaDescription: "LASIK is safe for suitable eyes, but it has side effects like dry eye and night glare. Learn the risks, who should avoid LASIK and how ICL helps when laser is.",
  topics: ["surgery"],
  cluster: "lasik",
  pillarSlug: "lasik-eye-surgery-types-cost-benefits-candidacy",
  order: 5,
  treatmentPage: "optical-contact-lenses",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-19",
  cover: {
    src: "/images/blog/lasik-risks-side-effects-icl-alternative-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: ophthalmologist holding a small model of the eye while explaining options to a thoughtful young Indian woman wearing thick glasses in a bright.",
  },
  readMinutes: 5,
  keepReading: [
    { label: "Laser-Assisted In Situ Keratomileusis (LASIK) Eye Surgery Types, Cost, Benefits and Who Qualifies", target: "/blog/lasik-eye-surgery-types-cost-benefits-candidacy/" },
    { label: "Am I a Good Candidate for LASIK?", target: "link:9.2" },
    { label: "LASIK vs Femto-LASIK vs Contoura vs SMILE", target: "link:9.1" },
    { label: "LASIK Recovery Timeline: Day by Day", target: "link:9.4" },
    { label: "Early Signs of Keratoconus and When to Get Topography", target: "link:3.1" },
  ],
};
