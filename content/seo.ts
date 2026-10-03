import { siteConfig } from "@/content/site";
import { MEDICAL_REVIEW_DATE } from "@/content/doctors";
import {
  BASE,
  CLINIC_ID,
  physicianId,
  physicianRefs,
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
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, Vinraj Plaza, Kothi Road, opp. Government Press",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390001",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 22.304108, longitude: 73.193533 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
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
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.youtube],
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
    "@context": "https://schema.org",
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
  return page;
}

export function blogPostingJsonLd(slug: string) {
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return null;
  const url = BASE + p.url;
  const reviewers = reviewersOf(p.reviewedBy);
  const payload: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-IN",
    datePublished: p.date,
    dateModified: p.date,
    author:
      reviewers.length > 0
        ? reviewers.length === 1
          ? { "@id": physicianId(reviewers[0]!) }
          : physicianRefs(reviewers)
        : { "@type": "Organization", "@id": CLINIC_ID, name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      "@id": CLINIC_ID,
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: BASE + "/images/hero/httpsmungaleeyehospital-logo.svg",
      },
    },
  };
  if (p.coverImage) payload["image"] = BASE + p.coverImage;
  if (reviewers.length > 0) {
    payload["reviewedBy"] =
      reviewers.length === 1 ? { "@id": physicianId(reviewers[0]!) } : physicianRefs(reviewers);
    payload["lastReviewed"] = p.reviewedOn ?? MEDICAL_REVIEW_DATE;
  }
  return payload;
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
