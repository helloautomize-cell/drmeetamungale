import { siteConfig } from "@/content/site";
import { doctors } from "@/content/doctors";
import { treatments } from "@/content/treatments";
import { faqs } from "@/content/faqs";
import { blogPosts } from "@/content/blog";

// ─── SEO structured-data builders ───────────────────────────────────────
// Every value traces to verified source (site.ts, archive MDs, or the live
// homepage JSON-LD geo block: 22.304108, 73.193533). Nothing invented:
// BlogPosting omits datePublished (REST exposes no dates).

const BASE = siteConfig.url.replace(/\/$/, "");

export function hospitalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
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
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.youtube],
  };
}

export function physiciansJsonLd() {
  return doctors.map((d) => ({
    "@context": "https://schema.org",
    "@type": "Physician",
    name: d.name,
    medicalSpecialty: "Ophthalmologic",
    description: d.title,
    url: BASE + "/about-us/",
  }));
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

export function blogPostingJsonLd(slug: string) {
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return null;
  const payload: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    url: BASE + p.url,
  };
  if (p.coverImage) payload["image"] = BASE + p.coverImage;
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
