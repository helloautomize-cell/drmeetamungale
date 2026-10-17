import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { BlogFaqItem } from "@/components/sections/BlogFaqItem";
import { getPostBySlug, blogPosts, type BlogPostMeta } from "@/content/blog";
import { getBlogBody } from "@/content/blog-bodies";
import { blogLinks, type BlogLink } from "@/content/blog-links";
import {
  getSupportArticle,
  supportLinks,
  supportsForCluster,
  siblingsOf,
} from "@/content/blog-support";
import { JsonLd } from "@/components/seo/JsonLd";
import { MedicalReviewByline, formatReviewDate } from "@/components/seo/MedicalReviewByline";
import { blogPostingJsonLd, breadcrumbJsonLd, canonical, faqJsonLd } from "@/content/seo";
import { siteConfig } from "@/content/site";
import { BlogToc, BlogTocCollapsible, type TocItem } from "@/components/sections/BlogToc";
import { BlogContactCard, BlogDoctorCards } from "@/components/sections/BlogPostRail";
import { TreatmentContactBand, TreatmentCtaBand } from "@/components/sections/TreatmentShell";

// ─── 6.6 /blog/[slug]/ ×26 ─────────────────────────────────────────────
// Titles/slugs/URLs exact from REST; bodies VERBATIM from
// archive/raw/posts_full.json (tags stripped, order preserved).
// Cover renders only where a title-matched file was verified on disk.
// decodeEntities: stored strings carry WordPress entities (&#8217;, &gt;…)
// — decoded once at render so visitors see characters, never code.
// Idempotent: already-clean strings (e.g. table cells) pass through.
function decodeEntities(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, n) => {
      const cp = parseInt(n, 10);
      return Number.isFinite(cp) ? String.fromCodePoint(cp) : _;
    })
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => {
      const cp = parseInt(n, 16);
      return Number.isFinite(cp) ? String.fromCodePoint(cp) : _;
    })
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'");
}

// ─── Fix B: in-article links ─────────────────────────────────────────────
// Stored bodies stay verbatim; link runs from content/blog-links.ts are
// overlaid at render. Destinations were allow-listed at build time
// (existing local routes + external citations); legacy dead URLs never
// became entries, so they render as plain text.
function renderRich(text: string, links: BlogLink[]): React.ReactNode[] {
  if (links.length === 0) return [decodeEntities(text)];
  type Span = { start: number; end: number; link: BlogLink };
  const spans: Span[] = [];
  for (const link of links) {
    let from = -1;
    for (let n = 0; n <= link.nth; n++) {
      from = text.indexOf(link.text, from + 1);
      if (from < 0) break;
    }
    if (from >= 0) spans.push({ start: from, end: from + link.text.length, link });
  }
  spans.sort((a, b) => a.start - b.start);
  const out: React.ReactNode[] = [];
  let pos = 0;
  spans.forEach((s, i) => {
    if (s.start < pos) return; // overlapping run — keep first
    if (s.start > pos) out.push(decodeEntities(text.slice(pos, s.start)));
    const label = decodeEntities(text.slice(s.start, s.end));
    out.push(
      s.link.external ? (
        <a
          key={i}
          href={s.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed"
        >
          {label}
        </a>
      ) : (
        <Link
          key={i}
          href={s.link.href}
          className="font-semibold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed"
        >
          {label}
        </Link>
      )
    );
    pos = s.end;
  });
  if (pos < text.length) out.push(decodeEntities(text.slice(pos)));
  return out;
}
// Slugify a heading for the TOC anchor — decoded text, lowercase, dashes,
// de-duplicated so every h2 id is stable and unique.
function slugifyHeading(text: string, seen: Map<string, number>): string {
  const base =
    decodeEntities(text)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section";
  const n = seen.get(base) ?? 0;
  seen.set(base, n + 1);
  return n === 0 ? base : `${base}-${n + 1}`;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

// Meta descriptions must stay ≤160 chars; excerpts are verbatim source
// text, so longer ones are clamped at a word boundary here (display
// content is unaffected).
function clampDescription(text: string): string {
  if (text.length <= 160) return text;
  const cut = text.slice(0, 154);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,.;:\u2014-]+$/, "") + "\u2026";
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPostBySlug((await params).slug);
  if (!post) return { title: "Blog" };
  // Support articles carry an explicit SEO title (≤60 incl. brand, so it
  // is set absolutely, bypassing the layout template) and a dedicated
  // meta description; OG/Twitter use the cover at its true size. Posts
  // with a coverAlt (support articles + owner-supplied cover swaps) get
  // the same cover-based OG/Twitter.
  const isSupport = post.role === "support";
  const useCoverOg = isSupport || !!post.coverAlt;
  const description = post.metaDescription ?? clampDescription(post.excerpt);
  const title = post.title + " | " + siteConfig.name;
  const ogImages = useCoverOg
    ? [
        {
          url: post.coverImage,
          width: post.coverWidth,
          height: post.coverHeight,
          alt: post.coverAlt ?? post.title,
        },
      ]
    : [
        {
          url: "/images/mungale/og-default.jpg",
          width: 1200,
          height: 630,
          alt: siteConfig.name + " — eye hospital in Kothi, Vadodara",
        },
      ];
  return {
    title: isSupport ? { absolute: post.seoTitle ?? post.title } : post.title,
    description,
    alternates: { canonical: canonical(post.url) },
    ...(isSupport ? { robots: { index: true, follow: true } } : {}),
    openGraph: {
      title,
      description,
      url: canonical(post.url),
      siteName: siteConfig.name,
      type: "article",
      ...(isSupport ? { publishedTime: post.date } : {}),
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [useCoverOg ? post.coverImage : "/images/mungale/og-default.jpg"],
    },
  };
}

// Related Articles ordering (spec 3.4): same cluster first — pillar then
// siblings in queue order — then same topic, then the rest. Three cards.
function relatedFor(post: BlogPostMeta): BlogPostMeta[] {
  const pool = blogPosts.filter((p) => p.slug !== post.slug && p.coverImage);
  const rank = (p: BlogPostMeta): number => {
    if (post.cluster && p.cluster === post.cluster) {
      if (p.role === "pillar") return 0;
      return 1; // siblings (queue order comes from blogPosts order)
    }
    if (p.topics.some((t) => post.topics.includes(t))) return 2;
    return 3;
  };
  return pool
    .map((p, i) => ({ p, i }))
    .sort((a, b) => rank(a.p) - rank(b.p) || a.i - b.i)
    .slice(0, 3)
    .map((x) => x.p);
}

// Cluster nav row used by "More in this guide" / "Also in this guide".
function ClusterLink({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={post.url}
      className="group flex items-center justify-between gap-4 border-b border-secondary/10 py-4"
    >
      <span className="font-title-md text-title-md text-on-surface font-bold group-hover:text-primary transition-colors">
        {post.title}
      </span>
      <ArrowRight className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const body = getBlogBody(slug);
  if (!post || !body) notFound();

  const support = getSupportArticle(slug);
  const pillar = post.role === "support" && post.pillarSlug ? getPostBySlug(post.pillarSlug) : undefined;
  const clusterSupports = post.cluster ? supportsForCluster(post.cluster).map((a) => a.meta) : [];
  const related = relatedFor(post);

  // FAQPage JSON-LD one-to-one with the visible FAQ block (support posts).
  const faqItems = body.blocks
    .filter((b) => b.type === "faq")
    .flatMap((b) =>
      (b.items ?? []).map((it) => ({
        question: decodeEntities(it.q),
        answer: decodeEntities(
          (it.a ?? []).map((ab) => ab.text).join(" ")
        ),
      }))
    );

  // Stable, de-duplicated h2 ids — one pass over the heading blocks so the
  // TOC anchors and the rendered ids always match.
  const seen = new Map<string, number>();
  const headingIds: (string | undefined)[] = body.blocks.map((b) =>
    b.type === "heading" ? slugifyHeading(b.text, seen) : undefined
  );
  const tocItems: TocItem[] = body.blocks
    .map((b, i) =>
      b.type === "heading"
        ? { id: headingIds[i]!, text: decodeEntities(b.text) }
        : null
    )
    .filter((x): x is TocItem => x !== null);

  // No separate updated field exists — both dates are post.date, so the
  // dedupe below always collapses to "Published <date>".
  const published = formatReviewDate(post.date);
  const updated = formatReviewDate(post.date);

  return (
    <>
      <JsonLd data={blogPostingJsonLd(post.slug)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: post.title, href: post.url },
        ])}
      />
      {post.role === "support" && faqItems.length > 0 && (
        <JsonLd data={faqJsonLd(faqItems)} />
      )}
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: post.title, href: post.url },
        ]}
        eyebrow="Blog"
        title={post.title}
      />

      <article className="py-space-xl bg-surface">
        {/* Same container as PageHero (max-w-7xl) — title and columns share
            the left edge. Three rails at >=1200px: TOC / article / cards. */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 min-[1200px]:grid min-[1200px]:grid-cols-[220px_minmax(0,1fr)_320px] min-[1200px]:gap-10">
          {/* LEFT — sticky table of contents (desktop only) */}
          {tocItems.length >= 3 && (
            <aside className="hidden min-[1200px]:block">
              <div className="sticky top-28">
                <BlogToc items={tocItems} />
              </div>
            </aside>
          )}
          {/* Spacer keeps the grid's column count when there is no TOC. */}
          {tocItems.length < 3 && <aside className="hidden min-[1200px]:block" aria-hidden="true" />}

          {/* CENTRE — the article, unchanged */}
          <div className="max-w-3xl min-[1200px]:max-w-[720px]">
            <div className="min-[1200px]:hidden">
              <BlogTocCollapsible items={tocItems} />
            </div>
            <div className="mt-6">
              {/* Unconfirmed support articles carry no reviewer claim:
                  the byline names the hospital until the doctor confirms. */}
              {post.reviewConfirmed === false ? (
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Published by {siteConfig.name}
                </p>
              ) : (
                <MedicalReviewByline reviewedBy={post.reviewedBy} reviewedOn={post.reviewedOn} />
              )}
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-5">
                {published === updated
                  ? `Published ${published}`
                  : `Published ${published} · Updated ${updated}`}
              </p>
            </div>
            {/* Support posts: cluster chip near the top linking to the
                pillar guide the article belongs to. */}
            {pillar && (
              <p className="mb-8 rounded-xl border border-secondary/15 bg-card-white px-5 py-4 font-body-sm text-body-sm text-on-surface-variant">
                Part of our guide:{" "}
                <Link
                  href={pillar.url}
                  className="font-semibold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed"
                >
                  {pillar.title}
                </Link>
              </p>
            )}
            {post.coverImage && (
              <div className="rounded-2xl overflow-hidden shadow-md mt-1 mb-10">
                <Image
                  src={post.coverImage}
                  alt={post.coverAlt ?? post.title}
                  width={post.coverWidth}
                  height={post.coverHeight}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            )}
            <div className="space-y-5">
            {body.blocks.map((b, i) => {
              const bl = [...(blogLinks[slug] ?? []), ...(supportLinks[slug] ?? [])].filter(
                (l) => l.block === i
              );
              if (b.type === "faq") {
                return (
                  <section key={i} className="pt-4">
                    {b.text && (
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold pb-2">
                        {renderRich(
                          b.text,
                          bl.filter((l) => l.item === undefined)
                        )}
                      </h2>
                    )}
                    <div className="border-t border-secondary/10">
                      {(b.items ?? []).map((it, qi) => (
                        <BlogFaqItem
                          key={qi}
                          title={renderRich(
                            it.q,
                            bl.filter((l) => l.item === qi && l.sub === -1)
                          )}
                        >
                          {(it.a ?? []).map((ab, si) => {
                            const alinks = bl.filter(
                              (l) => l.item === qi && l.sub === si
                            );
                            if (ab.type === "item") {
                              return (
                                <li key={si} className="ml-5 list-disc">
                                  {renderRich(ab.text, alinks)}
                                </li>
                              );
                            }
                            return (
                              <p key={si}>{renderRich(ab.text, alinks)}</p>
                            );
                          })}
                        </BlogFaqItem>
                      ))}
                    </div>
                  </section>
                );
              }
              if (b.type === "heading") {
                return (
                  <h2
                    key={i}
                    id={headingIds[i]}
                    className="font-headline-sm text-headline-sm text-on-surface font-bold pt-4 scroll-mt-28"
                  >
                    {renderRich(b.text, bl)}
                  </h2>
                );
              }
              if (b.type === "table") {
                return (
                  <div key={i} className="overflow-x-auto -mx-1 px-1 py-2">
                    <table className="w-full min-w-[560px] border-collapse text-left">
                      {b.head && b.head.length > 0 && (
                        <thead>
                          <tr className="border-b-2 border-secondary/70">
                            {b.head.map((h, hi) => (
                              <th
                                key={hi}
                                scope="col"
                                className="py-3 pr-5 font-title-md text-title-md text-on-surface font-bold leading-snug last:pr-0"
                              >
                                {decodeEntities(h)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                      )}
                      <tbody>
                        {(b.rows ?? []).map((row, ri) => (
                          <tr key={ri} className="border-b border-secondary/10 last:border-b-0">
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className="py-3 pr-5 font-body-md text-body-md text-on-surface-variant leading-relaxed last:pr-0 align-top"
                              >
                                {decodeEntities(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              if (b.type === "item") {
                return (
                  <li
                    key={i}
                    className="font-body-md text-body-md text-on-surface-variant leading-relaxed ml-5 list-disc"
                  >
                    {renderRich(b.text, bl)}
                  </li>
                );
              }
              return (
                <p
                  key={i}
                  className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                >
                  {renderRich(b.text, bl)}
                </p>
              );
            })}
            </div>

            {/* Below 1200px the rail cards follow the article inline. */}
            <div className="min-[1200px]:hidden mt-10 space-y-6">
              <BlogDoctorCards reviewedBy={post.reviewedBy} reviewConfirmed={post.reviewConfirmed} />
              <BlogContactCard />
            </div>
          </div>

          {/* RIGHT — doctor card sticky, contact card follows (so a short
              viewport never clips the contact card). */}
          <aside className="hidden min-[1200px]:block">
            <div className="space-y-6">
              <div className="sticky top-28">
                <BlogDoctorCards reviewedBy={post.reviewedBy} reviewConfirmed={post.reviewConfirmed} />
              </div>
              <BlogContactCard />
            </div>
          </aside>
        </div>

        {/* End of every post: cluster blocks, related, then a booking
            action. */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="min-[1200px]:ml-[260px] min-[1200px]:mr-[360px]">
            {/* Support posts: the article's own "Keep reading" list —
                unpublished siblings were already dropped at compile. */}
            {support && support.keepReading.length > 0 && (
              <nav aria-label="Keep reading" className="mt-14 pt-8 border-t border-border-light">
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-6">
                  Keep reading
                </h2>
                <div>
                  {support.keepReading.map((k) => (
                    <Link
                      key={k.href + k.label}
                      href={k.href}
                      className="group flex items-center justify-between gap-4 border-b border-secondary/10 py-4"
                    >
                      <span className="font-title-md text-title-md text-on-surface font-bold group-hover:text-primary transition-colors">
                        {k.label}
                      </span>
                      <ArrowRight className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </nav>
            )}

            {/* Support posts: other published siblings in this guide. */}
            {post.role === "support" && siblingsOf(post.slug).length > 0 && (
              <nav aria-label="Also in this guide" className="mt-10 pt-8 border-t border-border-light">
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-6">
                  Also in this guide
                </h2>
                <div>
                  {siblingsOf(post.slug).map((s) => (
                    <ClusterLink key={s.meta.slug} post={s.meta} />
                  ))}
                </div>
              </nav>
            )}

            {/* Pillar posts: published support articles of this cluster. */}
            {post.role === "pillar" && clusterSupports.length > 0 && (
              <nav aria-label="More in this guide" className="mt-10 pt-8 border-t border-border-light">
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-6">
                  More in this guide
                </h2>
                <div>
                  {clusterSupports.map((s) => (
                    <ClusterLink key={s.slug} post={s} />
                  ))}
                </div>
              </nav>
            )}

            {related.length > 0 && (
              <div className="mt-14 pt-8 border-t border-border-light">
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-6">
                  Related Articles
                </h2>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={r.url}
                      className="group flex items-center justify-between gap-4 bg-card-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="font-title-md text-title-md text-on-surface font-bold group-hover:text-primary transition-colors">
                        {r.title}
                      </span>
                      <ArrowRight className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <TreatmentCtaBand />
            <TreatmentContactBand />
          </div>
        </div>
        {/* Breathing room so the last band clears the sticky mobile bar. */}
        <div aria-hidden="true" className="h-16 lg:hidden" />
      </article>

    </>
  );
}
