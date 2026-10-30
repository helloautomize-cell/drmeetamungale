// scripts/check-internal-links.ts — support-article link audit.
// Run: npx tsx scripts/check-internal-links.ts
// Verifies every internal href emitted for a support article resolves to
// a real route or published slug, prints inbound-link counts per support
// post, and warns on orphans (no inbound link from any other page).

import { blogPosts } from "../content/blog";
import { blogLinks } from "../content/blog-links";
import {
  supportArticles,
  supportLinks,
} from "../content/blog-support/compiled";
import { supportSlugsForTreatment } from "../content/blog-support";
import { getTreatmentDetailSlugs } from "../content/treatment-details";
import { doctors } from "../content/doctors";

const staticRoutes = new Set([
  "/", "/about-us/", "/doctors/", "/treatments/", "/insurance-cashless/",
  "/blog/", "/faqs/", "/gallery/", "/contact-us/", "/privacy-policy/",
]);
const valid = new Set<string>([
  ...staticRoutes,
  ...doctors.map((d) => `/doctors/${d.slug}/`),
  ...getTreatmentDetailSlugs().map((s) => `/treatments/${s}/`),
  ...blogPosts.map((p) => p.url),
]);

let failures = 0;
const fail = (m: string) => { failures++; console.log("  FAIL " + m); };

// ─── Outbound links on each support post ───────────────────────────────
// Sources of hrefs: body overlays (supportLinks), keepReading, and the
// pillar chip ("/blog/<pillar>/").
for (const a of supportArticles) {
  const hrefs = [
    ...a.links.map((l) => l.href),
    ...a.keepReading.map((k) => k.href),
    `/blog/${a.source.pillarSlug}/`,
  ];
  for (const h of hrefs) {
    if (!valid.has(h)) fail(`${a.source.number} ${a.meta.slug}: broken href ${h}`);
  }
}

// ─── Treatment-page "Related articles" targets ─────────────────────────
const treatmentPicks: Record<string, string[]> = {
  "cataract-surgery": [...new Set([...supportSlugsForTreatment("cataract-surgery"),
    "risks-benefits-of-cataract-surgery", "benefits-of-cataract-surgery"])].slice(0, 3),
  "glaucoma-evaluation": [...new Set([...supportSlugsForTreatment("glaucoma-evaluation"),
    "how-is-glaucoma-diagnosed-evaluated", "glaucoma-symptoms-causes-treatment",
    "eye-checkup-after-forty-tests-frequency-warning-signs"])].slice(0, 3),
  "glaucoma-treatments": [...new Set([...supportSlugsForTreatment("glaucoma-treatments"),
    "glaucoma-treatment-options", "ahmed-glaucoma-valve-surgery"])].slice(0, 3),
  "corneal-treatments": [...new Set([...supportSlugsForTreatment("corneal-treatments"),
    "corneal-transplant-surgery", "corneal-treatment-recovery-process",
    "best-eye-hospital-for-corneal-transplant"])].slice(0, 3),
  "cornea-evaluation": [...new Set([...supportSlugsForTreatment("cornea-evaluation"),
    "keratoconus-symptoms-causes-diagnosis-treatment",
    "eye-checkup-after-forty-tests-frequency-warning-signs",
    "corneal-ulcer-keratitis-symptoms-treatment"])].slice(0, 3),
};
for (const [t, slugs] of Object.entries(treatmentPicks)) {
  for (const s of slugs) {
    const u = `/blog/${s}/`;
    if (!valid.has(u)) fail(`treatment ${t}: related pick not published ${u}`);
  }
}

// ─── Inbound counts per support post ───────────────────────────────────
// Inbound sources: other posts' body overlays, keepReading lists, cluster
// blocks (pillar "More in this guide" links every cluster sibling; each
// support's "Also in this guide" links the others + the pillar chip links
// the pillar), and treatment Related articles picks.
const inbound = new Map<string, Set<string>>(); // url -> set of linking pages
const addInbound = (target: string, from: string) => {
  if (!inbound.has(target)) inbound.set(target, new Set());
  inbound.get(target)!.add(from);
};

// Body links: existing blogLinks + support overlays, both sides.
for (const a of supportArticles) {
  for (const l of a.links) addInbound(l.href, a.meta.url);
}
for (const [slug, links] of Object.entries(blogLinks)) {
  const from = `/blog/${slug}/`;
  for (const l of links) if (!l.external) addInbound(l.href, from);
}
// Keep reading + cluster blocks.
for (const a of supportArticles) {
  for (const k of a.keepReading) addInbound(k.href, a.meta.url);
  // "Part of our guide" chip -> pillar.
  addInbound(`/blog/${a.source.pillarSlug}/`, a.meta.url);
  // "Also in this guide" -> every other published sibling.
  for (const s of supportArticles) {
    if (s.source.cluster === a.source.cluster && s.meta.slug !== a.meta.slug) {
      addInbound(s.meta.url, a.meta.url);
    }
  }
  // Pillar's "More in this guide" -> this support.
  addInbound(a.meta.url, `/blog/${a.source.pillarSlug}/`);
}
// Treatment picks.
for (const [t, slugs] of Object.entries(treatmentPicks)) {
  for (const s of slugs) addInbound(`/blog/${s}/`, `/treatments/${t}/`);
}

console.log("\nInbound links per support post:");
for (const a of supportArticles) {
  const count = inbound.get(a.meta.url)?.size ?? 0;
  const flag = count === 0 ? "  ORPHAN (warning)" : "";
  console.log(`  ${a.source.number} ${a.meta.slug}: ${count} inbound${flag}`);
}

if (supportArticles.length === 0) console.log("  (no support articles registered yet)");
console.log(failures === 0 ? "\nOK — no broken links" : `\n${failures} broken link(s)`);
process.exit(failures === 0 ? 0 : 1);
