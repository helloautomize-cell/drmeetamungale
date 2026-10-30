import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 9.1 - LASIK & Refractive Surgery cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "9.1",
  slug: "lasik-vs-femto-lasik-contoura-smile",
  title: "LASIK vs Femto-LASIK vs Contoura vs SMILE",
  seoTitle: "LASIK vs Femto vs Contoura vs SMILE | Mungale Eye Hospital",
  metaDescription: "Confused by laser vision options? Compare standard LASIK, Femto-LASIK, Contoura Vision and SMILE by how they work, recovery, who they suit and key trade-offs.",
  topics: ["surgery"],
  cluster: "lasik",
  pillarSlug: "lasik-eye-surgery-types-cost-benefits-candidacy",
  order: 1,
  treatmentPage: "optical-contact-lenses",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-18",
  cover: {
    src: "/images/blog/lasik-vs-femto-lasik-contoura-smile-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: modern laser vision correction suite in a Vadodara eye hospital, with a refractive laser machine, a surgeon in scrubs and a calm young Indian.",
  },
  readMinutes: 5,
  keepReading: [
    { label: "Laser-Assisted In Situ Keratomileusis (LASIK) Eye Surgery Types, Cost, Benefits and Who Qualifies", target: "/blog/lasik-eye-surgery-types-cost-benefits-candidacy/" },
    { label: "Am I a Good Candidate for LASIK?", target: "link:9.2" },
    { label: "LASIK Cost in Vadodara: What Decides the Price?", target: "link:9.3" },
    { label: "LASIK Recovery Timeline: Day by Day", target: "link:9.4" },
    { label: "LASIK Risks, Side Effects and ICL as an Alternative", target: "link:9.5" },
  ],
};
