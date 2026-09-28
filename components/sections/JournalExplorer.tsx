"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, type BlogPostMeta, type BlogTopic } from "@/content/blog";
import { Reveal } from "@/components/ui/motion";

// ─── JournalExplorer ───────────────────────────────────────────────────────
// Editorial journal over all 26 live posts (newest first): search + topic
// tabs + live count; featured cover story (first of results); rhythm grid
// (every 7th story spans two columns); concern browser (intent presets);
// load-more in sixes with scroll preserved. Titles/URLs/covers verbatim
// source; excerpts source-derived; read time from live word counts.
type TopicFilter = BlogTopic | "all";

const TOPIC_TABS: { id: TopicFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cataract", label: "Cataract" },
  { id: "glaucoma", label: "Glaucoma" },
  { id: "cornea", label: "Cornea" },
  { id: "surgery", label: "Surgery" },
  { id: "eye-health", label: "Eye health" },
];

const TOPIC_LABEL: Record<BlogTopic, string> = {
  cataract: "Cataract",
  glaucoma: "Glaucoma",
  cornea: "Cornea",
  surgery: "Surgery",
  "eye-health": "Eye health",
};

const CONCERNS: { topic: string; line: string; filter?: TopicFilter; query?: string }[] = [
  { topic: "Cataract", line: "Clouded lenses, surgery options and recovery.", filter: "cataract" },
  { topic: "Glaucoma", line: "Pressure, diagnosis and treatment paths.", filter: "glaucoma" },
  { topic: "Cornea", line: "Transplants, ulcers and corneal care.", filter: "cornea" },
  { topic: "Eye examinations", line: "Check-ups, what to expect, when to go.", query: "examination" },
  { topic: "Vision correction", line: "LASIK and sharper sight.", query: "lasik" },
  { topic: "Eye health", line: "Everyday habits for lasting vision.", filter: "eye-health" },
];

const PAGE_SIZE = 7;

function Meta({ post }: { post: BlogPostMeta }) {
  return (
    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-on-surface-variant">
      <span className="text-primary-fixed">{TOPIC_LABEL[post.topics[0] ?? "eye-health"]}</span>
      <span aria-hidden="true" className="mx-2 text-secondary/30">·</span>
      <span>{post.readMinutes} min read</span>
    </p>
  );
}

function FeaturedStory({ post }: { post: BlogPostMeta }) {
  return (
    <Reveal>
      <Link href={post.url} className="group grid lg:grid-cols-12 gap-8 items-center">
        <span className="block lg:col-span-7 overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
          <Image
            src={post.coverImage}
            alt=""
            width={post.coverWidth}
            height={post.coverHeight}
            priority
            sizes="(min-width: 1024px) 55vw, 90vw"
            className="w-full h-auto transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.02]"
          />
        </span>
        <span className="block lg:col-span-5">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            Featured article
          </span>
          <span className="mt-3 block font-display-hero text-on-surface tracking-tight leading-[1.08] text-[30px] sm:text-[38px]">
            {post.title}
          </span>
          <span className="mt-4 block font-body-md text-body-md text-on-surface-variant leading-relaxed line-clamp-3">
            {post.excerpt}
          </span>
          <span className="mt-4 block">
            <Meta post={post} />
          </span>
          <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface">
            <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
              Read article
            </span>
            <span aria-hidden="true" className="text-primary-fixed group-hover:translate-x-1 transition-transform motion-reduce:transition-none">&rarr;</span>
          </span>
        </span>
      </Link>
    </Reveal>
  );
}

function StoryCard({ post, large }: { post: BlogPostMeta; large?: boolean }) {
  return (
    <Link
      href={post.url}
      className={
        "group flex flex-col " + (large ? "sm:col-span-2" : "")
      }
    >
      <span className="block overflow-hidden rounded-[16px] ring-1 ring-secondary/10">
        <Image
          src={post.coverImage}
          alt=""
          width={post.coverWidth}
          height={post.coverHeight}
          loading="lazy"
          sizes={large ? "(min-width: 1024px) 55vw, 90vw" : "(min-width: 1024px) 26vw, (min-width: 640px) 44vw, 90vw"}
          className="w-full h-auto transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.02]"
        />
      </span>
      <span className="mt-4 block">
        <Meta post={post} />
      </span>
      <span className={"mt-2 block font-title-md font-semibold text-on-surface leading-snug " + (large ? "text-[20px] lg:text-[24px]" : "text-[18px]")}>
        {post.title}
      </span>
      <span className="mt-2 hidden font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-2 sm:block">
        {post.excerpt}
      </span>
      <span className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold text-on-surface">
        <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
          Read article
        </span>
        <span aria-hidden="true" className="text-primary-fixed group-hover:translate-x-1 transition-transform motion-reduce:transition-none">&rarr;</span>
      </span>
    </Link>
  );
}

export function JournalExplorer() {
  const [topic, setTopic] = React.useState<TopicFilter>("all");
  const [query, setQuery] = React.useState("");
  const [count, setCount] = React.useState(PAGE_SIZE);

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    const t: BlogTopic | null = topic === "all" ? null : topic;
    return blogPosts.filter((p) => {
      if (t && !p.topics.includes(t)) return false;
      if (
        q &&
        !(p.title + " " + p.excerpt + " " + p.topics.join(" ")).toLowerCase().includes(q)
      )
        return false;
      return true;
    });
  }, [topic, query]);

  React.useEffect(() => {
    setCount(PAGE_SIZE);
  }, [topic, query]);

  const [featured, ...rest] = results;
  const shown = rest.slice(0, count);

  const apply = (t: TopicFilter, q: string, scroll = false) => {
    setTopic(t);
    setQuery(q);
    if (scroll) {
      requestAnimationFrame(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        document
          .getElementById("journal-results")
          ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      });
    }
  };

  return (
    <div>
      {/* ── Search + topics + count ── */}
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_1fr] lg:items-end">
          <div>
            <label
              htmlFor="journal-search"
              className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant"
            >
              Search articles
            </label>
            <input
              id="journal-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search eye health, treatments, symptoms…"
              autoComplete="off"
              className="mt-2 w-full bg-surface-canvas text-on-surface font-body-md text-body-md rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-outline-variant"
            />
          </div>
          <div
            role="group"
            aria-label="Filter articles by topic"
            className="flex gap-x-6 gap-y-2 overflow-x-auto whitespace-nowrap pb-1"
          >
            {TOPIC_TABS.map((t) => {
              const n =
                t.id === "all"
                  ? blogPosts.length
                  : blogPosts.filter((p) => p.topics.includes(t.id as BlogTopic)).length;
              const selected = topic === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => apply(t.id, "")}
                  className={
                    "shrink-0 min-h-[44px] text-[13px] font-bold uppercase tracking-[0.12em] border-b-2 pb-1 transition-colors motion-reduce:transition-none " +
                    (selected
                      ? "border-primary text-primary-fixed"
                      : "border-transparent text-on-surface-variant hover:text-on-surface")
                  }
                >
                  {t.label} <span className="font-normal">({n})</span>
                </button>
              );
            })}
          </div>
        </div>
        <p aria-live="polite" className="mt-4 text-[14px] text-on-surface-variant">
          {results.length} article{results.length === 1 ? "" : "s"}
          {query.trim() && ' matching "' + query.trim() + '"'}
        </p>
      </Reveal>

      {results.length === 0 ? (
        <div className="mt-8 border-t border-secondary/10 pt-8 max-w-2xl" id="journal-results">
          <p className="font-display-hero text-[24px] tracking-tight text-on-surface">
            No results found.
          </p>
          <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
            Try another search or contact the Mungale team.{" "}
            <Link
              href="/contact-us/"
              className="font-bold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed"
            >
              Contact us
            </Link>
          </p>
        </div>
      ) : (
        <>
          {featured && (
            <div className="mt-8 scroll-mt-28" id="journal-results">
              <FeaturedStory post={featured} />
            </div>
          )}

          {shown.length > 0 && (
            <div className="mt-12">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                Latest from Mungale
              </p>
              <div className="mt-6 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map((p, i) => (
                  <StoryCard key={p.slug} post={p} large={i % 7 === 6} />
                ))}
              </div>
              {rest.length > count && (
                <button
                  type="button"
                  onClick={() => setCount((c) => c + PAGE_SIZE)}
                  className="group mt-10 inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
                >
                  <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                    Load more
                  </span>
                  <span aria-hidden="true" className="text-primary-fixed">&darr;</span>
                </button>
              )}
            </div>
          )}

          {/* ── Browse by concern ── */}
          <section aria-label="Browse by concern" className="border-t border-secondary/10 mt-14 lg:mt-20 pt-10 lg:pt-14">
            <Reveal>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                Browse by concern
              </p>
              <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[28px] sm:text-[36px] leading-[1.1]">
                What are you looking to understand?
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-x-12 border-t border-secondary/10">
                {CONCERNS.map((c) => (
                  <button
                    key={c.topic}
                    type="button"
                    onClick={() => apply(c.filter ?? "all", c.query ?? "", true)}
                    className="group flex items-center gap-4 border-b border-secondary/10 py-5 text-left min-h-[44px]"
                  >
                    <span className="flex-1">
                      <span className="block font-display-hero text-[20px] lg:text-[22px] tracking-tight text-on-surface group-hover:text-primary-fixed transition-colors motion-reduce:transition-none">
                        {c.topic}
                      </span>
                      <span className="mt-1 block text-[14px] text-on-surface-variant">{c.line}</span>
                    </span>
                    <span aria-hidden="true" className="text-primary-fixed text-[18px] group-hover:translate-x-1 transition-transform motion-reduce:transition-none">&rarr;</span>
                  </button>
                ))}
              </div>
            </Reveal>
          </section>
        </>
      )}
    </div>
  );
}
