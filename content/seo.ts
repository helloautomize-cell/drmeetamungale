import { siteConfig } from "@/content/site";
import { e164 } from "@/lib/contact-links";
import { MEDICAL_REVIEW_DATE } from "@/content/doctors";
import {
  BASE,
  CLINIC_ID,
  CLINIC_ADDRESS,
  CLINIC_GEO,
  CLINIC_OPENING_HOURS,
  CLINIC_HAS_MAP,
  CLINIC_PRICE_RANGE,
  physicianId,
  physicianRefs,
  reviewerPersons,
  reviewersOf,
} from "@/content/doctor-schema";
import { treatments } from "@/content/treatments";
import { faqs } from "@/content/faqs";
import { blogPosts } from "@/content/blog";
import { getTreatmentDetail } from "@/content/treatment-details";

// ─── SEO structured-data builders ───────────────────────────────────────
// Physician entities live in content/doctor-schema.ts (built from
// verified CV data). Everything here traces to a verified source —
// nothing invented.

// Build date — stamped once at SSG build time.
const BUILD_DATE = new Date().toISOString().slice(0, 10);

export function hospitalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "MedicalOrganization"],
    "@id": CLINIC_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: e164(siteConfig.phone),
    email: siteConfig.email,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: e164(siteConfig.phone),
      email: siteConfig.email,
      contactType: "customer service",
    },
    address: CLINIC_ADDRESS,
    geo: CLINIC_GEO,
    openingHoursSpecification: CLINIC_OPENING_HOURS,
    priceRange: CLINIC_PRICE_RANGE,
    hasMap: CLINIC_HAS_MAP,
    medicalSpecialty: "Ophthalmologic",
    image: BASE + "/images/mungale/og-default.jpg",
    logo: BASE + "/images/hero/httpsmungaleeyehospital-logo.svg",
    foundingDate: "2007",
    founder: physicianRefs(["sachin", "meeta"]),
    areaServed: [
      { "@type": "City", name: "Vadodara" },
      { "@type": "State", name: "Gujarat" },
      { "@type": "State", name: "Madhya Pradesh" },
      { "@type": "State", name: "Rajasthan" },
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
      // Public directory listings cited elsewhere on the site.
      "https://www.justdial.com/Vadodara/Dr-Sachin-Mungale-Mungale-Eye-Hospital-Opposite-Government-Press-Kothi/0265PX265-X265-170614070649-D5F7_BZDET",
      "https://www.practo.com/vadodara/doctor/dr-sachin-mungale-ophthalmologist",
      "https://www.practo.com/vadodara/doctor/dr-meeta-mungale-ophthalmologist",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": BASE + "/#website",
    name: siteConfig.name,
    url: BASE + "/",
    inLanguage: "en-IN",
    publisher: { "@id": CLINIC_ID },
  };
}

export function procedureJsonLd(slug: string) {
  const t = treatments.find((x) => x.slug === slug);
  if (!t) return null;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: t.title,
    description: t.description,
    url: BASE + "/treatments/" + t.slug + "/",
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

// MedicalCondition per treatment page — name + description taken only
// from that page's existing copy (treatment-details intro / treatments
// card description).
const TREATMENT_CONDITIONS: Record<string, { name: string; description: string }> = {
  "cataract-surgery": {
    name: "Cataract",
    description:
      "A clouding of the eye's natural lens, removed with phacoemulsification and replaced with a suitable intraocular lens.",
  },
  "cornea-evaluation": {
    name: "Corneal conditions",
    description:
      "Cornea evaluation assesses corneal shape, thickness, and clarity, essential for diagnosing eye conditions.",
  },
  "corneal-treatments": {
    name: "Corneal infections, injuries and conditions",
    description:
      "Corneal treatments address infections, injuries, or conditions through medication, surgeries, or specialized therapies.",
  },
  "glaucoma-evaluation": {
    name: "Glaucoma",
    description:
      "Glaucoma evaluation measures eye pressure, optic nerve health, and visual field to detect vision loss.",
  },
  "glaucoma-treatments": {
    name: "Glaucoma",
    description:
      "Glaucoma treatments include eye drops, oral medications, laser therapy, and surgical options to lower eye pressure.",
  },
  "optical-contact-lenses": {
    name: "Refractive errors (myopia, hyperopia, astigmatism)",
    description:
      "Optical and contact lenses correct vision by refracting light, providing options for myopia, hyperopia, and astigmatism.",
  },
};

export function medicalWebPageJsonLd(slug: string) {
  const d = getTreatmentDetail(slug);
  const c = TREATMENT_CONDITIONS[slug];
  if (!d || !c) return null;
  const url = BASE + "/treatments/" + slug + "/";
  const reviewers = reviewersOf(d.reviewedBy);
  const page: Record<string, unknown> = {
    "@type": "MedicalWebPage",
    "@id": url + "#webpage",
    url,
    name: d.title,
    description: d.intro,
    inLanguage: "en-IN",
    specialty: "Ophthalmology",
    lastReviewed: d.reviewedOn ?? (reviewers.length ? MEDICAL_REVIEW_DATE : BUILD_DATE),
    mainEntityOfPage: url,
    about: {
      "@type": "MedicalCondition",
      name: c.name,
      description: c.description,
    },
  };
  if (reviewers.length > 0) {
    page["reviewedBy"] =
      reviewers.length === 1 ? { "@id": physicianId(reviewers[0]!) } : physicianRefs(reviewers);
  }
  // Person stubs resolve the reviewedBy @ids on this page — the full
  // Physician entities live on /about-us/ and /doctors/*.
  return {
    "@context": "https://schema.org",
    "@graph": [page, ...reviewerPersons(reviewers)],
  };
}

export function blogPostingJsonLd(slug: string) {
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return null;
  const url = BASE + p.url;
  const reviewers = reviewersOf(p.reviewedBy);
  const payload: Record<string, unknown> = {
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-IN",
    datePublished: p.date,
    dateModified: p.updatedAt ?? p.date,
    // Doctor-written articles: author references the reviewing
    // physician(s); publisher references the clinic (full Organization
    // node incl. name + logo lives in the layout script — merged by @id).
    author:
      reviewers.length === 0
        ? { "@id": CLINIC_ID }
        : reviewers.length === 1
          ? { "@id": physicianId(reviewers[0]!) }
          : physicianRefs(reviewers),
    publisher: { "@id": CLINIC_ID },
  };
  if (p.coverImage) {
    // Support articles emit the cover at its true size; existing posts
    // keep the plain-URL form they already ship.
    payload["image"] =
      p.role === "support"
        ? {
            "@type": "ImageObject",
            url: BASE + p.coverImage,
            width: p.coverWidth,
            height: p.coverHeight,
          }
        : BASE + p.coverImage;
  }
  // Cluster wiring: isPartOf points at the pillar guide; about names the
  // cluster's condition (names only — no invented descriptions).
  if (post_supportCluster(p) && p.pillarSlug) {
    payload["isPartOf"] = { "@type": "WebPage", "@id": BASE + "/blog/" + p.pillarSlug + "/" };
    payload["about"] = {
      "@type": "MedicalCondition",
      name: CLUSTER_CONDITION[p.cluster!],
    };
  }
  if (reviewers.length > 0) {
    payload["reviewedBy"] =
      reviewers.length === 1 ? { "@id": physicianId(reviewers[0]!) } : physicianRefs(reviewers);
    payload["lastReviewed"] = p.reviewedOn ?? MEDICAL_REVIEW_DATE;
  }
  // Person stubs resolve the author/reviewedBy @ids into nodes carrying
  // name + url; the full Physician entities live on the doctor pages.
  return {
    "@context": "https://schema.org",
    "@graph": [payload, ...reviewerPersons(reviewers)],
  };
}

const CLUSTER_CONDITION: Record<string, string> = {
  cataract: "Cataract",
  glaucoma: "Glaucoma",
  keratoconus: "Keratoconus",
  "corneal-transplant": "Corneal transplant",
  "dry-eye": "Dry eye disease",
  pterygium: "Pterygium",
  "corneal-ulcer": "Corneal ulcer",
  "diabetic-retinopathy": "Diabetic retinopathy",
  lasik: "LASIK",
  "eye-checkup": "Eye examination",
};

function post_supportCluster(p: (typeof blogPosts)[number]): boolean {
  return p.role === "support" && !!p.cluster && !!CLUSTER_CONDITION[p.cluster];
}

export function breadcrumbJsonLd(crumbs: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: BASE + c.href,
    })),
  };
}

export function canonical(path: string) {
  return BASE + path;
}
