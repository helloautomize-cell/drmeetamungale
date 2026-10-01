import { readFileSync } from "node:fs";
import { join } from "node:path";
import { siteConfig } from "@/content/site";
import { getTreatmentDetailSlugs, getTreatmentDetail } from "@/content/treatment-details";
import { blogPosts } from "@/content/blog";
import { getBlogBody } from "@/content/blog-bodies";

// ─── /llms-full.txt ─────────────────────────────────────────────────────
// llms.txt + plain-text summaries of every treatment page and every
// patient guide (title, URL, opening paragraph), generated from the same
// content sources the site renders. Served as text/plain, statically.

export const dynamic = "force-static";

const BASE = siteConfig.url.replace(/\/$/, "");

// WordPress entities appear verbatim in stored post bodies.
function decodeEntities(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ");
}

export function GET() {
  const llms = readFileSync(join(process.cwd(), "public/llms.txt"), "utf8").trimEnd();
  const out: string[] = [llms, "", "## Treatment pages", ""];

  for (const slug of getTreatmentDetailSlugs()) {
    const d = getTreatmentDetail(slug);
    if (!d) continue;
    out.push(`### ${d.title}`, `URL: ${BASE}/treatments/${d.slug}/`, d.intro, "");
  }

  out.push("## Patient guides", "");
  for (const p of blogPosts) {
    const lead = getBlogBody(p.slug)?.blocks.find((b) => b.type === "para")?.text;
    out.push(`### ${p.title}`, `URL: ${BASE}${p.url}`);
    if (lead) out.push(decodeEntities(lead));
    out.push("");
  }

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
