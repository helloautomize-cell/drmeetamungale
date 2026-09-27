import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { getPostBySlug, blogPosts } from "@/content/blog";
import { getBlogBody } from "@/content/blog-bodies";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostingJsonLd, breadcrumbJsonLd, canonical } from "@/content/seo";

// ─── 6.6 /blog/[slug]/ ×20 ─────────────────────────────────────────────
// Titles/slugs/URLs exact from REST; bodies VERBATIM from
// archive/raw/posts_full.json (tags stripped, order preserved).
// Cover renders only where a title-matched file was verified on disk.
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPostBySlug((await params).slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.title,
    alternates: { canonical: canonical(post.url) },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const body = getBlogBody(slug);
  if (!post || !body) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.coverImage).slice(0, 3);

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
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {post.coverImage && (
            <div className="rounded-2xl overflow-hidden shadow-md mb-10">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={960}
                height={560}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}
          <div className="space-y-5">
            {body.blocks.map((b, i) => {
              if (b.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="font-headline-sm text-headline-sm text-on-surface font-bold pt-4"
                  >
                    {b.text}
                  </h2>
                );
              }
              if (b.type === "item") {
                return (
                  <li
                    key={i}
                    className="font-body-md text-body-md text-on-surface-variant leading-relaxed ml-5 list-disc"
                  >
                    {b.text}
                  </li>
                );
              }
              return (
                <p
                  key={i}
                  className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                >
                  {b.text}
                </p>
              );
            })}
          </div>

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
        </div>
      </article>

      <CTABand />
    </>
  );
}
