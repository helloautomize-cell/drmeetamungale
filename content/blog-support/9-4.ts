import type { SupportArticleMetaSource } from "@/content/blog-support";

// Article 9.4 - LASIK & Refractive Surgery cluster. Body adapted from the supplied
// source document; [label](link:N.M) sibling links resolve in the registry
// compiler, plain internal/external hrefs pass through.
export const article: SupportArticleMetaSource = {
  number: "9.4",
  slug: "lasik-recovery-timeline-day-by-day",
  title: "LASIK Recovery Timeline: Day by Day",
  seoTitle: "LASIK Recovery Timeline: Day by Day | Mungale Eye Hospital",
  metaDescription: "Most people see well within a day of LASIK, but full healing takes weeks. Learn what is normal at 24 hours, one week and one month, plus key aftercare do's and.",
  topics: ["surgery"],
  cluster: "lasik",
  pillarSlug: "lasik-eye-surgery-types-cost-benefits-candidacy",
  order: 4,
  treatmentPage: "optical-contact-lenses",
  reviewedBy: "meeta",
  reviewConfirmed: true,
  date: "2026-10-19",
  cover: {
    src: "/images/blog/lasik-recovery-timeline-day-by-day-cover.webp",
    width: 1280,
    height: 720,
    alt: "AI-generated illustration: happy young Indian woman without glasses reading a book on a balcony in Vadodara a week after LASIK, wearing sunglasses pushed up on her head.",
  },
  readMinutes: 4,
  keepReading: [
    { label: "Laser-Assisted In Situ Keratomileusis (LASIK) Eye Surgery Types, Cost, Benefits and Who Qualifies", target: "/blog/lasik-eye-surgery-types-cost-benefits-candidacy/" },
    { label: "LASIK vs Femto-LASIK vs Contoura vs SMILE", target: "link:9.1" },
    { label: "LASIK Risks, Side Effects and ICL as an Alternative", target: "link:9.5" },
    { label: "Am I a Good Candidate for LASIK?", target: "link:9.2" },
    { label: "Can Dry Eye Be Cured Permanently?", target: "link:5.3" },
  ],
};
