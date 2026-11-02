import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 9.3 - LASIK & Refractive Surgery cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "9.3",
  slug: "lasik-eye-surgery-cost-vadodara",
  title: "LASIK Cost in Vadodara: What Decides the Price?",
  seoTitle: "LASIK Cost in Vadodara: What Decides | Mungale Eye Hospital",
  metaDescription: "LASIK cost in Vadodara depends on the technique, tests, surgeon experience and follow-up care. Learn what is usually included and the questions to ask before.",
  topics: ["surgery"],
  cluster: "lasik",
  pillarSlug: "lasik-eye-surgery-types-cost-benefits-candidacy",
  order: 3,
  treatmentPage: "optical-contact-lenses",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-19",
  cover: {
    src: "/images/blog/lasik-eye-surgery-cost-vadodara-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: hospital counsellor explaining a printed treatment plan to a young Indian couple at a reception desk of a modern eye hospital in Vadodara.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Laser-Assisted In Situ Keratomileusis (LASIK) Eye Surgery Types, Cost, Benefits and Who Qualifies", target: "/blog/lasik-eye-surgery-types-cost-benefits-candidacy/" },
    { label: "LASIK vs Femto-LASIK vs Contoura vs SMILE", target: "link:9.1" },
    { label: "Am I a Good Candidate for LASIK?", target: "link:9.2" },
    { label: "LASIK Recovery Timeline: Day by Day", target: "link:9.4" },
    { label: "LASIK Risks, Side Effects and ICL as an Alternative", target: "link:9.5" },
  ],
};
