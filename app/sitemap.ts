import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { getTreatmentDetailSlugs } from "@/content/treatment-details";
import { getPostSlugs } from "@/content/blog";

// ─── Sitemap — all routes use canonical trailing-slash URLs ─────────────
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const staticRoutes = [
    "/",
    "/about-us/",
    "/treatments/",
    "/insurance-cashless/",
    "/blog/",
    "/faqs/",
    "/gallery/",
    "/contact-us/",
    "/privacy-policy/",
  ];
  const treatmentRoutes = getTreatmentDetailSlugs().map((slug) => "/treatments/" + slug + "/");
  const postRoutes = getPostSlugs().map((slug) => "/blog/" + slug + "/");

  return [...staticRoutes, ...treatmentRoutes, ...postRoutes].map((path) => ({
    url: base + path,
    lastModified: new Date(),
  }));
}
