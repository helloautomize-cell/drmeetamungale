import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { getTreatmentDetailSlugs } from "@/content/treatment-details";
import { getPostSlugs, getPostBySlug } from "@/content/blog";
import { doctors } from "@/content/doctors";

// ─── Sitemap — all routes use canonical trailing-slash URLs ─────────────
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
  ];
  const doctorRoutes = doctors.map((d) => "/doctors/" + d.slug + "/");
  const treatmentRoutes = getTreatmentDetailSlugs().map((slug) => "/treatments/" + slug + "/");
  const postRoutes = getPostSlugs().map((slug) => ({
    path: "/blog/" + slug + "/",
    // Blog entries carry the article's own publish date, not the
    // sitemap's build time.
    lastModified: getPostBySlug(slug)?.date,
  }));

  return [
    ...staticRoutes.map((path) => ({ url: base + path, lastModified: new Date() })),
    ...doctorRoutes.map((path) => ({ url: base + path, lastModified: new Date() })),
    ...treatmentRoutes.map((path) => ({ url: base + path, lastModified: new Date() })),
    ...postRoutes.map((r) => ({
      url: base + r.path,
      lastModified: r.lastModified ? new Date(r.lastModified + "T00:00:00Z") : new Date(),
    })),
  ];
}
