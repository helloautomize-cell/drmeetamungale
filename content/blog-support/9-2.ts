import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 9.2 - LASIK & Refractive Surgery cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "9.2",
  slug: "lasik-candidate-eligibility-criteria",
  title: "Am I a Good Candidate for LASIK?",
  seoTitle: "Am I a Good Candidate for LASIK? | Mungale Eye Hospital",
  metaDescription: "LASIK suits many people, but not everyone. Learn the age, power, corneal and health criteria surgeons check, what rules you out and what alternatives exist.",
  topics: ["surgery"],
  cluster: "lasik",
  pillarSlug: "lasik-eye-surgery-types-cost-benefits-candidacy",
  order: 2,
  treatmentPage: "optical-contact-lenses",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-18",
  cover: {
    src: "/images/blog/lasik-candidate-eligibility-criteria-cover.webp",
    width: 1280,
    height: 720,
    alt: "Illustration: young Indian man resting his chin on a corneal topography machine while a technician runs a scan in a bright Vadodara eye hospital.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "LASIK vs Femto-LASIK vs Contoura vs SMILE", target: "link:9.1" },
    { label: "LASIK Risks, Side Effects and ICL as an Alternative", target: "link:9.5" },
    { label: "LASIK Cost in Vadodara: What Decides the Price?", target: "link:9.3" },
    { label: "Early Signs of Keratoconus and When to Get Topography", target: "link:3.1" },
    { label: "Laser-Assisted In Situ Keratomileusis (LASIK) Eye Surgery Types, Cost, Benefits and Who Qualifies", target: "/blog/lasik-eye-surgery-types-cost-benefits-candidacy/" },
  ],
};
