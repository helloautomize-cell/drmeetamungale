import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

// ─── robots.txt ──────────────────────────────────────────────────────────
// Every crawler gets full access to content; only the booking API and the
// dev palette are disallowed. Named rules keep the current official
// search/AI user-agent names explicit (wildcard still covers the rest).
const DISALLOWED = ["/api/", "/dev/"];

const AI_AND_SEARCH_BOTS = [
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url.replace(/\/$/, "");
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOWED },
      ...AI_AND_SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOWED,
      })),
    ],
    sitemap: base + "/sitemap.xml",
  };
}
