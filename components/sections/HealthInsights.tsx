import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/motion";
import { blogPosts } from "@/content/blog";

// ─── 4.10 Health Insights ──────────────────────────────────────────────
// Real posts only (content/blog/index.ts — exact REST titles/slugs/URLs).
// A card renders ONLY when a title-matched cover file was verified on disk;
// posts without verified covers are omitted rather than given placeholder
// or mismatched images. No dates shown (REST exposes none —
// docs/CONTENT_GAPS.md #11). Full bodies live in archive/content/posts/.
// Visual: typographic treatment — stock covers shrink to small graded thumbs
// beside serif titles (photography supports the words instead of leading),
// shared warm grade + 16/10 crops unify the mismatched stock sources.
export function HealthInsights() {
  const withCovers = blogPosts.filter((p) => p.coverImage);

  return (
    <section className="py-space-2xl bg-card-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionHeader
            eyebrow="Health Insights"
            title="Written for You"
            subtitle="Make informed decisions about your eye health concerns."
          />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {withCovers.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={0.05 * i} className="h-full">
              <article className="h-full flex gap-5 bg-surface-canvas rounded-2xl p-4 ring-1 ring-border-light/50 hover:ring-primary/25 hover:shadow-brand-md hover:-translate-y-0.5 transition-all duration-200 group">
                <Link
                  href={p.url}
                  className="relative block w-32 sm:w-40 shrink-0 aspect-[16/10] self-start rounded-xl overflow-hidden"
                  aria-label={p.title}
                >
                  <Image
                    src={p.coverImage!}
                    alt=""
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span
                    className="absolute inset-0 bg-primary-container/20 mix-blend-multiply pointer-events-none"
                    aria-hidden="true"
                  />
                </Link>
                <div className="flex flex-col justify-center min-w-0 py-1">
                  <p className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold">
                    Article
                  </p>
                  <h3 className="font-title-md text-title-md text-on-surface font-bold leading-snug mt-1">
                    <Link href={p.url} className="group-hover:text-primary transition-colors">
                      {p.title}
                    </Link>
                  </h3>
                  <Link
                    href={p.url}
                    className="mt-2 font-label-sm text-label-sm text-primary-fixed font-bold inline-flex items-center gap-1 hover:gap-2 transition-all link-focus"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-card-white ring-1 ring-border-light hover:ring-primary/40 hover:shadow-brand-sm hover:-translate-y-px text-primary font-label-md text-label-md transition-all"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-[18px] h-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
