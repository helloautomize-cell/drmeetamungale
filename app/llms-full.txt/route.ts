import { readFileSync } from "node:fs";
import { join } from "node:path";
import { siteConfig } from "@/content/site";
import { getTreatmentDetailSlugs, getTreatmentDetail } from "@/content/treatment-details";
import { blogPosts } from "@/content/blog";
import { getBlogBody } from "@/content/blog-bodies";
import { doctors, getDoctorByKey, type ReviewerKey } from "@/content/doctors";
import { GENERAL_REVIEWED_PAGES } from "@/content/reviewed-pages";

// ─── /llms-full.txt ─────────────────────────────────────────────────────
// llms.txt + full doctor profiles + per-page medical reviewers +
// plain-text summaries of every treatment page and every patient guide,
// generated from the same content sources the site renders. Served as
// text/plain, statically.

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

function reviewerNames(value: ReviewerKey | ReviewerKey[] | undefined): string {
  if (!value) return "";
  const keys = Array.isArray(value) ? value : [value];
  return keys.map((k) => getDoctorByKey(k).name).join(" and ");
}

export function GET() {
  const llms = readFileSync(join(process.cwd(), "public/llms.txt"), "utf8").trimEnd();
  const out: string[] = [llms, "", "## Doctors — full profiles", ""];

  for (const d of doctors) {
    out.push(`### ${d.name}`, `URL: ${BASE}/doctors/${d.slug}/`);
    out.push(`${d.title}. ${d.credentialLine}. ${d.registration}. ${d.experience}.`);
    out.push(d.role);
    out.push(d.bio);
    if (d.education.length) {
      out.push("Education & fellowships:");
      for (const e of d.education) {
        out.push(`- ${e.degree} — ${e.institution}${e.years ? `, ${e.years}` : ""}${e.note ? `. ${e.note}` : ""}`);
      }
    }
    if (d.procedures.length) {
      out.push("Procedures & clinical work:");
      for (const p of [...(d.clinicalWork ?? []), ...d.procedures]) out.push(`- ${p}`);
    }
    if (d.diagnostics) out.push(`Diagnostics: ${d.diagnostics.join(", ")}`);
    if (d.currentInterests) out.push(`Current interests: ${d.currentInterests}`);
    if (d.publications.length) {
      out.push("Publications & research:");
      for (const p of d.publications) out.push(`- ${p}`);
    }
    if (d.memberships) out.push(`Memberships (life member): ${d.memberships.join("; ")}`);
    if (d.teaching) {
      out.push("Teaching & CMEs:");
      for (const t of [...d.teaching, ...(d.cmes ?? [])]) out.push(`- ${t}`);
    }
    if (d.community) out.push(`Community: ${d.community}`);
    out.push("");
  }

  out.push("## General pages", "");
  for (const p of GENERAL_REVIEWED_PAGES) {
    out.push(`### ${p.title}`, `URL: ${BASE}${p.href}`);
    out.push(`Medically reviewed by ${reviewerNames(["sachin", "meeta"])}`, "");
  }

  out.push("## Treatment pages", "");
  for (const slug of getTreatmentDetailSlugs()) {
    const d = getTreatmentDetail(slug);
    if (!d) continue;
    out.push(`### ${d.title}`, `URL: ${BASE}/treatments/${d.slug}/`, d.intro);
    const r = reviewerNames(d.reviewedBy);
    if (r) out.push(`Medically reviewed by ${r}`);
    out.push("");
  }

  out.push("## Patient guides", "");
  for (const p of blogPosts) {
    const lead = getBlogBody(p.slug)?.blocks.find((b) => b.type === "para")?.text;
    out.push(`### ${p.title}`, `URL: ${BASE}${p.url}`);
    if (lead) out.push(decodeEntities(lead));
    const r = reviewerNames(p.reviewedBy);
    if (r) out.push(`Medically reviewed by ${r}`);
    out.push("");
  }

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
