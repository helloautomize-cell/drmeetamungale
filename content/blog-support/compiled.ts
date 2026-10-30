import type { BlogBlock, BlogBody } from "@/content/blog-bodies";
import type { BlogLink } from "@/content/blog-links";
import type { BlogPostMeta } from "@/content/blog";
import {
  supportMetaSources,
  slugForNumber,
  type SupportArticleMetaSource,
  type SupportArticleSource,
} from "@/content/blog-support";

// ─── Blog support articles — COMPILED bodies (server-only) ──────────────
// Imports every bodies/N-X.ts module and runs the registry compiler:
// markdown links → cleaned text + BlogLink overlays, "link:N" → sibling
// slug, keepReading resolution, and a build-time check that each meta's
// baked readMinutes matches the real word count. Importing this module
// pulls all 50 article bodies — never import it from client code.

import { blocks as b1_1 } from "./bodies/1-1";
import { blocks as b1_2 } from "./bodies/1-2";
import { blocks as b1_3 } from "./bodies/1-3";
import { blocks as b1_4 } from "./bodies/1-4";
import { blocks as b1_5 } from "./bodies/1-5";
import { blocks as b2_1 } from "./bodies/2-1";
import { blocks as b2_2 } from "./bodies/2-2";
import { blocks as b2_3 } from "./bodies/2-3";
import { blocks as b2_4 } from "./bodies/2-4";
import { blocks as b2_5 } from "./bodies/2-5";
import { blocks as b3_1 } from "./bodies/3-1";
import { blocks as b3_2 } from "./bodies/3-2";
import { blocks as b3_3 } from "./bodies/3-3";
import { blocks as b3_4 } from "./bodies/3-4";
import { blocks as b3_5 } from "./bodies/3-5";
import { blocks as b4_1 } from "./bodies/4-1";
import { blocks as b4_2 } from "./bodies/4-2";
import { blocks as b4_3 } from "./bodies/4-3";
import { blocks as b4_4 } from "./bodies/4-4";
import { blocks as b4_5 } from "./bodies/4-5";
import { blocks as b5_1 } from "./bodies/5-1";
import { blocks as b5_2 } from "./bodies/5-2";
import { blocks as b5_3 } from "./bodies/5-3";
import { blocks as b5_4 } from "./bodies/5-4";
import { blocks as b5_5 } from "./bodies/5-5";
import { blocks as b6_1 } from "./bodies/6-1";
import { blocks as b6_2 } from "./bodies/6-2";
import { blocks as b6_3 } from "./bodies/6-3";
import { blocks as b6_4 } from "./bodies/6-4";
import { blocks as b6_5 } from "./bodies/6-5";
import { blocks as b7_1 } from "./bodies/7-1";
import { blocks as b7_2 } from "./bodies/7-2";
import { blocks as b7_3 } from "./bodies/7-3";
import { blocks as b7_4 } from "./bodies/7-4";
import { blocks as b7_5 } from "./bodies/7-5";
import { blocks as b8_1 } from "./bodies/8-1";
import { blocks as b8_2 } from "./bodies/8-2";
import { blocks as b8_3 } from "./bodies/8-3";
import { blocks as b8_4 } from "./bodies/8-4";
import { blocks as b8_5 } from "./bodies/8-5";
import { blocks as b9_1 } from "./bodies/9-1";
import { blocks as b9_2 } from "./bodies/9-2";
import { blocks as b9_3 } from "./bodies/9-3";
import { blocks as b9_4 } from "./bodies/9-4";
import { blocks as b9_5 } from "./bodies/9-5";
import { blocks as b10_1 } from "./bodies/10-1";
import { blocks as b10_2 } from "./bodies/10-2";
import { blocks as b10_3 } from "./bodies/10-3";
import { blocks as b10_4 } from "./bodies/10-4";
import { blocks as b10_5 } from "./bodies/10-5";

const BODY_BLOCKS: Record<string, BlogBlock[]> = {
  "1.1": b1_1,
  "1.2": b1_2,
  "1.3": b1_3,
  "1.4": b1_4,
  "1.5": b1_5,
  "2.1": b2_1,
  "2.2": b2_2,
  "2.3": b2_3,
  "2.4": b2_4,
  "2.5": b2_5,
  "3.1": b3_1,
  "3.2": b3_2,
  "3.3": b3_3,
  "3.4": b3_4,
  "3.5": b3_5,
  "4.1": b4_1,
  "4.2": b4_2,
  "4.3": b4_3,
  "4.4": b4_4,
  "4.5": b4_5,
  "5.1": b5_1,
  "5.2": b5_2,
  "5.3": b5_3,
  "5.4": b5_4,
  "5.5": b5_5,
  "6.1": b6_1,
  "6.2": b6_2,
  "6.3": b6_3,
  "6.4": b6_4,
  "6.5": b6_5,
  "7.1": b7_1,
  "7.2": b7_2,
  "7.3": b7_3,
  "7.4": b7_4,
  "7.5": b7_5,
  "8.1": b8_1,
  "8.2": b8_2,
  "8.3": b8_3,
  "8.4": b8_4,
  "8.5": b8_5,
  "9.1": b9_1,
  "9.2": b9_2,
  "9.3": b9_3,
  "9.4": b9_4,
  "9.5": b9_5,
  "10.1": b10_1,
  "10.2": b10_2,
  "10.3": b10_3,
  "10.4": b10_4,
  "10.5": b10_5,
};

function sourceFor(meta: SupportArticleMetaSource): SupportArticleSource {
  const blocks = BODY_BLOCKS[meta.number];
  if (!blocks) {
    throw new Error(`blog-support: missing bodies/${meta.number.replace(".", "-")}.ts`);
  }
  return { ...meta, blocks };
}

// ─── Compile: strip markdown links, emit BlogLink overlays ─────────────
// Mirrors renderRich() semantics in app/blog/[slug]/page.tsx: a BlogLink
// is {block, nth, text, href} matched by nth occurrence inside the block's
// cleaned text. Headings never carry links (spec).
const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;

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

export const supportArticles: SupportArticle[] = supportMetaSources.map((metaSrc) => {
  const src = sourceFor(metaSrc);
  const { blocks, links } = compileBlocks(src.blocks);
  // The meta file's readMinutes is baked at authoring time; verify it
  // against the real word count here so a stale literal fails the build
  // instead of shipping a wrong "N min read".
  const actual = Math.max(1, Math.ceil(wordCount(blocks) / 200));
  if (actual !== metaSrc.readMinutes) {
    throw new Error(
      `blog-support ${src.number}: readMinutes=${metaSrc.readMinutes} but body is ${actual} min — update the meta file`
    );
  }
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
    readMinutes: metaSrc.readMinutes,
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
