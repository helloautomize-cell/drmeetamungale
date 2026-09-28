import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
import { blogPosts } from "@/content/blog";

// ─── Health Insights — editorial health journal (owner rebuild) ───────
// Replaces the 2×3 card grid: one large featured article (~58%) + a ruled
// typographic index (~42%). No cards, no pills, no icons, no gradients.
// Data rules (spec-mandated, existing model has NO excerpts/dates/
// categories/featured flag — none invented):
// - Featured = first post with a verified cover (no CMS featured field
//   exists; "START HERE" label omitted — never claim medical priority).
// - Index = next three posts with verified covers.
// - No excerpts shown (none exist in data). No dates/reading time (REST
//   exposes none — CONTENT_GAPS #11). No category filter nav (no
//   tags exist — fake categories forbidden). Kicker stays the neutral
//   "Article" (existing chrome). Thumbnails are the preserved real covers.
// - All links use existing article routes (/blog/[slug]/, /blog/).
// Headline choice: "Understand your eyes." — "Know what comes next"
// would repeat the hero's closing line.

export function HealthInsights() {
  const withCovers = blogPosts.filter((p) => p.coverImage);
  const [featured, ...rest] = withCovers;
  const indexPosts = rest.slice(0, 3);
  if (!featured) return null;

  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            Health insights
          </p>
          <h2 className="mt-4 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[36px] sm:text-[44px] lg:text-[54px]">
            Understand your eyes.
          </h2>
          <p className="mt-4 text-[17px] lg:text-[18px] leading-relaxed text-on-surface-variant max-w-xl">
            Clear, practical guidance to help you understand your eye health
            and what comes next.
          </p>
        </Reveal>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* FEATURED (~58%) — large editorial image + title */}
          <Reveal className="lg:col-span-7">
            <article>
              <Link
                href={featured.url}
                className="cta-quiet group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-[20px]"
                aria-label={"Read article: " + featured.title}
              >
                <span className="block overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
                  <Image
                    src={featured.coverImage!}
                    alt=""
                    width={880}
                    height={560}
                    loading="lazy"
                    sizes="(min-width: 1024px) 55vw, 90vw"
                    className="w-full aspect-[16/10] object-cover transition-transform duration-200 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </span>
                <span className="mt-5 block text-[11px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                  Article
                </span>
                <span className="mt-2 block font-display-hero text-on-surface tracking-tight leading-tight text-[26px] sm:text-[30px] lg:text-[34px]">
                  {featured.title}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface">
                  <span className="cta-quiet-text">Read article</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </span>
              </Link>
            </article>
          </Reveal>

          {/* INDEX (~42%) — ruled typographic rows, not cards */}
          <div className="lg:col-span-5">
            <ul className="border-y border-secondary/10 divide-y divide-secondary/10">
              {indexPosts.map((p, i) => (
                <li key={p.slug}>
                  <Reveal delay={0.06 * i}>
                    <Link
                      href={p.url}
                      className="cta-quiet group flex items-start gap-5 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-lg"
                      aria-label={"Read article: " + p.title}
                    >
                      <span
                        aria-hidden="true"
                        className="font-display-hero leading-none text-on-surface/30 select-none text-[26px] lg:text-[30px] shrink-0 w-9"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                          Article
                        </span>
                        <span className="mt-1.5 block text-[16.5px] lg:text-[17.5px] font-semibold leading-snug text-on-surface">
                          <span className="cta-quiet-text">{p.title}</span>
                        </span>
                      </span>
                      <ArrowRight
                        aria-hidden="true"
                        className="mt-1 w-[18px] h-[18px] shrink-0 text-on-surface/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 motion-reduce:transition-none"
                      />
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal className="mt-12 lg:mt-14">
          <Link
            href="/blog/"
            className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
          >
            <span className="cta-quiet-text">Explore all insights</span>
            <ArrowRight
              aria-hidden="true"
              className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
