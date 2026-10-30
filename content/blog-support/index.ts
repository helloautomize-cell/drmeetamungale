import type { BlogPostMeta, BlogTopic } from "@/content/blog";
import type { BlogBlock } from "@/content/blog-bodies";
import type { ReviewerKey } from "@/content/doctors";

// ─── Blog support articles — META-ONLY registry ─────────────────────────
// Doctor-written support articles, one file per article in this folder,
// registered in SUPPORT_ARTICLES below. Each file exports a
// SupportArticleMetaSource: metadata only — the `blocks` body lives in
// bodies/N-X.ts so post lists and related-article picks (which reach
// client bundles) never ship article text as JavaScript.
//
// Anything that needs compiled bodies or link overlays imports from
// ./compiled — that module is server-only.
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

/** What each N-X.ts file exports — every source field except `blocks`,
    plus the read time baked at authoring time (verified against the real
    word count at build in ./compiled). */
export type SupportArticleMetaSource = Omit<SupportArticleSource, "blocks"> & {
  readMinutes: number;
};

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

export const supportMetaSources: SupportArticleMetaSource[] = [a1_1, a1_2, a1_3, a1_4, a1_5, a2_1, a2_2, a2_3, a2_4, a2_5, a3_1, a3_2, a3_3, a3_4, a3_5, a4_1, a4_2, a4_3, a4_4, a4_5, a5_1, a5_2, a5_3, a5_4, a5_5, a6_1, a6_2, a6_3, a6_4, a6_5, a7_1, a7_2, a7_3, a7_4, a7_5, a8_1, a8_2, a8_3, a8_4, a8_5, a9_1, a9_2, a9_3, a9_4, a9_5, a10_1, a10_2, a10_3, a10_4, a10_5];

function buildMeta(src: SupportArticleMetaSource): BlogPostMeta {
  return {
    slug: src.slug,
    title: src.title,
    url: `/blog/${src.slug}/`,
    coverImage: src.cover.src,
    coverWidth: src.cover.width,
    coverHeight: src.cover.height,
    coverAlt: src.cover.alt,
    date: src.date,
    excerpt: src.metaDescription,
    readMinutes: src.readMinutes,
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
}

export const supportMetas: BlogPostMeta[] = supportMetaSources.map(buildMeta);

const metaBySlug = new Map(supportMetas.map((m) => [m.slug, m]));
const metaByNumber = new Map(supportMetaSources.map((s) => [s.number, s]));

export function getSupportMeta(slug: string): BlogPostMeta | undefined {
  return metaBySlug.get(slug);
}

export function slugForNumber(n: string): string | undefined {
  return metaByNumber.get(n)?.slug;
}

/** Published support metas of one cluster, in queue order. */
export function supportsForCluster(cluster: ClusterId): BlogPostMeta[] {
  return supportMetaSources
    .filter((s) => s.cluster === cluster)
    .sort((a, b) => a.order - b.order)
    .map(buildMeta);
}

/** Other published siblings of a support article, in queue order. */
export function siblingsOf(slug: string): BlogPostMeta[] {
  const src = supportMetaSources.find((s) => s.slug === slug);
  if (!src) return [];
  return supportsForCluster(src.cluster).filter((m) => m.slug !== slug);
}

// ─── 3.10: treatment page "Related articles" picks ─────────────────────
// Cluster → the published support slugs that belong on each treatment
// page, per the queue spec. Existing picks stay as fallback/fill in the
// call sites; the final list is capped at 3 there.
export function supportSlugsForTreatment(treatmentSlug: string): string[] {
  const slugs = supportMetaSources
    .filter((s) => s.treatmentPage === treatmentSlug)
    .sort((a, b) => parseFloat(a.number) - parseFloat(b.number))
    .map((s) => s.slug);
  switch (treatmentSlug) {
    case "cataract-surgery":
      return ["cataract-surgery-guide", ...slugs];
    case "glaucoma-treatments":
      return [...slugs, "glaucoma-symptoms-causes-treatment"];
    default:
      return slugs;
  }
}
