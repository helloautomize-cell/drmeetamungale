import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTABand } from "@/components/sections/CTABand";
import { blogPosts } from "@/content/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, canonical } from "@/content/seo";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles from Mungale Eye Hospital on eye health, treatments and eye care.",
  alternates: { canonical: canonical("/blog/") },
};

// ─── 6.5 /blog/ ─────────────────────────────────────────────────────────
// All 20 live posts (exact REST titles/slugs/URLs). Featured lead article +
// grid of posts with verified covers only (no placeholder/mismatched art).
// No dates (REST exposes none), no excerpts (old cards carry none),
// no ordering claims.
export default function BlogPage() {
  const withCovers = blogPosts.filter((p) => p.coverImage);
  const [featured, ...rest] = withCovers;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
        ])}
      />
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
        ]}
        eyebrow="Resources"
        title="Blog"
        subtitle="Articles from Mungale Eye Hospital on eye health, treatments and eye care."
      />

      {featured && (
        <section className="py-space-xl bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Link
              href={featured.url}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ring-1 ring-border-light/60"
            >
              <div className="relative h-64 lg:h-auto lg:min-h-[320px] overflow-hidden">
                <Image
                  src={featured.coverImage!}
                  alt={featured.title}
                  width={960}
                  height={560}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  priority
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full bg-surface-tint text-primary font-label-sm text-label-sm font-bold mb-4">
                  <BookOpen className="w-4 h-4" />
                  Featured article
                </span>
                <h2 className="font-headline-md text-headline-md lg:font-headline-lg lg:text-headline-lg text-on-surface font-bold leading-tight group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <span className="mt-6 inline-flex items-center gap-2 font-label-md text-label-md text-primary font-bold">
                  Read article
                  <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="py-space-2xl bg-surface-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="All articles"
            title="More From Our Doctors"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
          <p className="text-center font-body-sm text-body-sm text-on-surface-variant mt-10">
            Showing {withCovers.length} illustrated articles of {blogPosts.length} published posts.
            Remaining posts appear on their individual pages as covers are verified.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
