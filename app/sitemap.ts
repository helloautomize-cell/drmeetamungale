import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { getTreatmentDetailSlugs, getTreatmentDetail } from "@/content/treatment-details";
import { blogPosts } from "@/content/blog";
import { doctors, MEDICAL_REVIEW_DATE } from "@/content/doctors";

// ─── Sitemap — all routes use canonical trailing-slash URLs ─────────────
// lastmod reflects real content dates: posts use their publish/updated
// date, doctor and treatment pages use their medical-review date, and
// static pages use the date the whole site was last medically reviewed.
const STATIC_LASTMOD = MEDICAL_REVIEW_DATE;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const staticRoutes = [
    "/",
    "/about-us/",
    "/doctors/",
    "/treatments/",
    "/insurance-cashless/",
    "/blog/",
    "/faqs/",
    "/gallery/",
    "/contact-us/",
    "/privacy-policy/",
    "/medical-disclaimer/",
    "/editorial-policy/",
    "/terms/",
  ];
  const doctorRoutes = doctors.map((d) => ({
    path: "/doctors/" + d.slug + "/",
    lastModified: MEDICAL_REVIEW_DATE,
  }));
  const treatmentRoutes = getTreatmentDetailSlugs().map((slug) => ({
    path: "/treatments/" + slug + "/",
    lastModified: getTreatmentDetail(slug)?.reviewedOn ?? MEDICAL_REVIEW_DATE,
  }));
  const postRoutes = blogPosts.map((p) => ({
    path: p.url,
    lastModified: p.updatedAt ?? p.date,
  }));

  return [
    ...staticRoutes.map((path) => ({
      url: base + path,
      lastModified: STATIC_LASTMOD,
    })),
    ...[...doctorRoutes, ...treatmentRoutes, ...postRoutes].map((r) => ({
      url: base + r.path,
      lastModified: r.lastModified,
    })),
  ];
}
