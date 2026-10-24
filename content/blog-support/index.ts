import type { BlogBlock, BlogBody } from "@/content/blog-bodies";
import type { BlogLink } from "@/content/blog-links";
import type { BlogPostMeta, BlogTopic } from "@/content/blog";
import type { ReviewerKey } from "@/content/doctors";

// ─── Blog support articles ─────────────────────────────────────────────
// Doctor-written support articles, one file per article in this folder,
// registered in SUPPORT_ARTICLES below. Each file exports a
// SupportArticleSource: plain metadata + body blocks whose text may carry
// markdown links. This module compiles each source into a BlogPostMeta +
// BlogBody + BlogLink[] triple at module load.
//
// Sibling links use the special href "link:N" (N = queue number, e.g.
// link:1.3). At compile time N resolves to /blog/<slug>/ ONLY when that
// article is registered below; otherwise the anchor degrades to plain
// text, so links activate automatically when a sibling ships later.
// Ordinary internal hrefs pass through unchanged.

export type ClusterId =
  | "cataract"
  | "glaucoma"
  | "keratoconus"
  | "corneal-transplant"
  | "dry-eye"
  | "pterygium"
  | "corneal-ulcer"
  | "diabetic-retinopathy"
  | "lasik"
  | "eye-checkup";

export interface KeepReadingSource {
  label: string;
  /** "link:N" (queue number) or a normal internal path. */
  target: string;
}

export interface SupportArticleSource {
  number: string; // "1.1"
  slug: string;
  title: string; // H1
  seoTitle: string; // full <title>, ≤60 chars incl. " | Mungale Eye Hospital"
  metaDescription: string; // 120-160 chars
  topics: BlogTopic[];
  cluster: ClusterId;
  pillarSlug: string;
  order: number;
  treatmentPage: string; // treatment slug
  reviewedBy: ReviewerKey | ReviewerKey[]; // applied only once confirmed
  reviewConfirmed: boolean;
  date: string; // YYYY-MM-DD, India
  cover: { src: string; width: number; height: number; alt: string };
  blocks: BlogBlock[];
  keepReading?: KeepReadingSource[];
}

// Articles are imported and registered here as each one is delivered.
import { article as a1_1 } from "./1-1";
import { article as a1_2 } from "./1-2";
import { article as a1_3 } from "./1-3";
import { article as a1_4 } from "./1-4";
import { article as a1_5 } from "./1-5";
import { article as a2_1 } from "./2-1";
import { article as a2_2 } from "./2-2";
import { article as a2_3 } from "./2-3";
import { article as a2_4 } from "./2-4";
import { article as a2_5 } from "./2-5";
import { article as a3_1 } from "./3-1";
import { article as a3_2 } from "./3-2";
import { article as a3_3 } from "./3-3";
import { article as a3_4 } from "./3-4";
import { article as a3_5 } from "./3-5";
import { article as a4_1 } from "./4-1";
import { article as a4_2 } from "./4-2";
import { article as a4_3 } from "./4-3";
import { article as a4_4 } from "./4-4";
import { article as a4_5 } from "./4-5";
import { article as a5_1 } from "./5-1";
import { article as a5_2 } from "./5-2";
import { article as a5_3 } from "./5-3";
import { article as a5_4 } from "./5-4";
import { article as a5_5 } from "./5-5";
import { article as a6_1 } from "./6-1";
import { article as a6_2 } from "./6-2";
import { article as a6_3 } from "./6-3";
import { article as a6_4 } from "./6-4";
import { article as a6_5 } from "./6-5";
import { article as a7_1 } from "./7-1";
import { article as a7_2 } from "./7-2";
import { article as a7_3 } from "./7-3";
import { article as a7_4 } from "./7-4";
import { article as a7_5 } from "./7-5";
import { article as a8_1 } from "./8-1";
import { article as a8_2 } from "./8-2";
import { article as a8_3 } from "./8-3";
import { article as a8_4 } from "./8-4";
import { article as a8_5 } from "./8-5";
import { article as a9_1 } from "./9-1";
import { article as a9_2 } from "./9-2";
import { article as a9_3 } from "./9-3";
import { article as a9_4 } from "./9-4";
import { article as a9_5 } from "./9-5";
import { article as a10_1 } from "./10-1";
import { article as a10_2 } from "./10-2";
import { article as a10_3 } from "./10-3";
import { article as a10_4 } from "./10-4";
import { article as a10_5 } from "./10-5";

const SOURCES: SupportArticleSource[] = [a1_1, a1_2, a1_3, a1_4, a1_5, a2_1, a2_2, a2_3, a2_4, a2_5, a3_1, a3_2, a3_3, a3_4, a3_5, a4_1, a4_2, a4_3, a4_4, a4_5, a5_1, a5_2, a5_3, a5_4, a5_5, a6_1, a6_2, a6_3, a6_4, a6_5, a7_1, a7_2, a7_3, a7_4, a7_5, a8_1, a8_2, a8_3, a8_4, a8_5, a9_1, a9_2, a9_3, a9_4, a9_5, a10_1, a10_2, a10_3, a10_4, a10_5];

// ─── Compile: strip markdown links, emit BlogLink overlays ─────────────
// Mirrors renderRich() semantics in app/blog/[slug]/page.tsx: a BlogLink
// is {block, nth, text, href} matched by nth occurrence inside the block's
// cleaned text. Headings never carry links (spec).
const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function slugForNumber(n: string): string | undefined {
  return SOURCES.find((a) => a.number === n)?.slug;
}

function cleanInline(raw: string): { text: string; links: { text: string; href: string }[] } {
  const links: { text: string; href: string }[] = [];
  const cleaned = raw.replace(LINK_RE, (m, label: string, target: string) => {
    if (target.startsWith("link:")) {
      const slug = slugForNumber(target.slice(5));
      if (slug) links.push({ text: label, href: `/blog/${slug}/` });
      // Unpublished sibling: render the anchor as plain text.
      return label;
    }
    links.push({ text: label, href: target });
    return label;
  });
  // Renderer has no inline bold/italic: strip markers to plain text.
  return { text: cleaned.replace(/\*\*([^*]+)\*\*/g, "$1"), links };
}

function linksWithNth(
  cleaned: string,
  found: { text: string; href: string }[]
): { text: string; href: string; nth: number }[] {
  const seen = new Map<string, number>();
  return found.map((l) => {
    const nth = seen.get(l.text) ?? 0;
    seen.set(l.text, nth + 1);
    return { ...l, nth };
  }).filter((l) => {
    // Verify the label actually occurs nth+1 times in the cleaned text —
    // a bad overlay silently renders wrong, so fail loudly at build time.
    let from = -1;
    for (let i = 0; i <= l.nth; i++) {
      from = cleaned.indexOf(l.text, from + 1);
      if (from < 0) throw new Error(`blog-support: link label not found nth=${l.nth}: "${l.text}"`);
    }
    return true;
  });
}

function compileBlocks(blocks: BlogBlock[]): { blocks: BlogBlock[]; links: BlogLink[] } {
  const links: BlogLink[] = [];
  const out = blocks.map((b, bi) => {
    if (b.type === "faq") {
      const items = (b.items ?? []).map((it, qi) => {
        const q = cleanInline(it.q);
        for (const l of linksWithNth(q.text, q.links)) {
          links.push({ block: bi, item: qi, sub: -1, text: l.text, href: l.href, nth: l.nth, external: false });
        }
        return {
          q: q.text,
          a: (it.a ?? []).map((ab, si) => {
            const c = cleanInline(ab.text);
            for (const l of linksWithNth(c.text, c.links)) {
              links.push({ block: bi, item: qi, sub: si, text: l.text, href: l.href, nth: l.nth, external: false });
            }
            return { ...ab, text: c.text };
          }),
        };
      });
      const head = cleanInline(b.text ?? "");
      for (const l of linksWithNth(head.text, head.links)) {
        links.push({ block: bi, text: l.text, href: l.href, nth: l.nth, external: false });
      }
      return { ...b, text: head.text, items };
    }
    if (b.type === "callout") {
      // Nested paras may carry links — the renderer addresses them with
      // sub = inner block index (item stays undefined, like FAQ answers).
      const inner = (b.blocks ?? []).map((ib, si) => {
        const c = cleanInline(ib.text);
        for (const l of linksWithNth(c.text, c.links)) {
          links.push({ block: bi, sub: si, text: l.text, href: l.href, nth: l.nth, external: false });
        }
        return { ...ib, text: c.text };
      });
      return { ...b, blocks: inner };
    }
    if (b.type === "numlist" || b.type === "table") {
      // Cells/rows render as plain text (no link overlay) — strip any
      // markup so no raw []() or ** leaks into the page.
      const rows = (b.rows ?? []).map((row) => row.map((cell) => cleanInline(cell).text));
      const head = (b.head ?? []).map((h) => cleanInline(h).text);
      return { ...b, rows, head };
    }
    const c = cleanInline(b.text);
    if (b.type !== "heading") {
      for (const l of linksWithNth(c.text, c.links)) {
        links.push({ block: bi, text: l.text, href: l.href, nth: l.nth, external: false });
      }
    }
    return { ...b, text: c.text };
  });
  return { blocks: out, links };
}

function wordCount(blocks: BlogBlock[]): number {
  let n = 0;
  const tally = (s: string) => {
    n += s.trim().split(/\s+/).filter(Boolean).length;
  };
  for (const b of blocks) {
    tally(b.text);
    for (const row of b.rows ?? []) row.forEach(tally);
    for (const it of b.items ?? []) {
      tally(it.q);
      for (const ab of it.a ?? []) tally(ab.text);
    }
    for (const ib of b.blocks ?? []) tally(ib.text);
  }
  return n;
}

export interface SupportArticle {
  meta: BlogPostMeta;
  body: BlogBody;
  links: BlogLink[];
  keepReading: { label: string; href: string }[];
  source: SupportArticleSource;
}

export const supportArticles: SupportArticle[] = SOURCES.map((src) => {
  const { blocks, links } = compileBlocks(src.blocks);
  const keepReading = (src.keepReading ?? [])
    .map((k) => {
      if (k.target.startsWith("link:")) {
        const slug = slugForNumber(k.target.slice(5));
        return slug ? { label: k.label, href: `/blog/${slug}/` } : null;
      }
      return { label: k.label, href: k.target };
    })
    .filter((k): k is { label: string; href: string } => k !== null)
    .slice(0, 5);
  const meta: BlogPostMeta = {
    slug: src.slug,
    title: src.title,
    url: `/blog/${src.slug}/`,
    coverImage: src.cover.src,
    coverWidth: src.cover.width,
    coverHeight: src.cover.height,
    coverAlt: src.cover.alt,
    date: src.date,
    excerpt: src.metaDescription,
    readMinutes: Math.max(1, Math.ceil(wordCount(blocks) / 200)),
    topics: src.topics,
    // Reviewer fields populate ONLY once reviewConfirmed — until then the
    // byline reads "Published by Mungale Eye Hospital" and the schema
    // carries no reviewedBy (see page.tsx / seo.ts gates).
    reviewedBy: src.reviewConfirmed ? src.reviewedBy : undefined,
    reviewedOn: src.reviewConfirmed ? src.date : undefined,
    role: "support",
    cluster: src.cluster,
    pillarSlug: src.pillarSlug,
    supportNumber: src.number,
    seoTitle: src.seoTitle,
    metaDescription: src.metaDescription,
    reviewConfirmed: src.reviewConfirmed,
    treatmentPage: src.treatmentPage,
  };
  return {
    meta,
    body: { slug: src.slug, title: src.title, url: meta.url, blocks },
    links,
    keepReading,
    source: src,
  };
});

const bySlug = new Map(supportArticles.map((a) => [a.meta.slug, a]));

export function getSupportArticle(slug: string): SupportArticle | undefined {
  return bySlug.get(slug);
}

export const supportBodies: Record<string, BlogBody> = Object.fromEntries(
  supportArticles.map((a) => [a.meta.slug, a.body])
);

export const supportLinks: Record<string, BlogLink[]> = Object.fromEntries(
  supportArticles.map((a) => [a.meta.slug, a.links])
);

export const supportMetas: BlogPostMeta[] = supportArticles.map((a) => a.meta);

/** Published support articles of one cluster, in queue order. */
export function supportsForCluster(cluster: ClusterId): SupportArticle[] {
  return supportArticles
    .filter((a) => a.source.cluster === cluster)
    .sort((a, b) => a.source.order - b.source.order);
}

/** Other published siblings of a support article, in queue order. */
export function siblingsOf(slug: string): SupportArticle[] {
  const a = bySlug.get(slug);
  if (!a) return [];
  return supportsForCluster(a.source.cluster).filter((s) => s.meta.slug !== slug);
}

// ─── 3.10: treatment page "Related articles" picks ─────────────────────
// Cluster → the published support slugs that belong on each treatment
// page, per the queue spec. Existing picks stay as fallback/fill in the
// call sites; the final list is capped at 3 there.
export function supportSlugsForTreatment(treatmentSlug: string): string[] {
  const slugs = supportArticles
    .filter((a) => a.source.treatmentPage === treatmentSlug)
    .sort(
      (a, b) =>
        parseFloat(a.source.number) - parseFloat(b.source.number)
    )
    .map((a) => a.meta.slug);
  switch (treatmentSlug) {
    case "cataract-surgery":
      return ["cataract-surgery-guide", ...slugs];
    case "glaucoma-treatments":
      return [...slugs, "glaucoma-symptoms-causes-treatment"];
    default:
      return slugs;
  }
}
