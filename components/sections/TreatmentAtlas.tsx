"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  atlasCategories,
  atlasTreatments,
  type AtlasCategory,
  type AtlasImage,
  type AtlasTreatment,
} from "@/content/treatments-atlas";
import { Reveal } from "@/components/ui/motion";
import { ClinicalAccordion } from "@/components/sections/ClinicalAccordion";
import { ClinicalLightbox } from "@/components/sections/ClinicalLightbox";

// ─── TreatmentAtlas (/treatments/) ─────────────────────────────────────────
// Care navigator (category filter) + six editorial treatment chapters with
// progressive disclosure, clinical galleries + lightbox, and a sticky
// scrollspy index (desktop) / compact selector (mobile). Zero-dependency
// motion: .reveal + CSS transitions, reduced-motion safe.

type CategoryFilter = AtlasCategory | "All";

function CategoryNavigator({
  active,
  onSelect,
}: {
  active: CategoryFilter;
  onSelect: (c: CategoryFilter) => void;
}) {
  return (
    <div>
      <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
        Explore by area of care
      </p>
      <div
        role="group"
        aria-label="Filter treatments by area of care"
        className="mt-6 border-t border-secondary/10"
      >
        {atlasCategories.map((cat, i) => {
          const count = atlasTreatments.filter((t) => t.category === cat.id).length;
          const selected = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(selected ? "All" : cat.id)}
              className="group flex w-full items-baseline gap-5 border-b border-secondary/10 py-5 text-left"
            >
              <span
                aria-hidden="true"
                className={
                  "font-display-hero text-[15px] w-7 shrink-0 transition-colors " +
                  (selected ? "text-primary-fixed" : "text-on-surface-variant")
                }
              >
                0{i + 1}
              </span>
              <span className="flex-1">
                <span
                  className={
                    "block font-display-hero tracking-tight text-[26px] sm:text-[32px] leading-tight transition-colors " +
                    (selected ? "text-on-surface" : "text-on-surface/70 group-hover:text-on-surface")
                  }
                >
                  {cat.id}
                </span>
                <span className="mt-1 block text-[14px] text-on-surface-variant">
                  {cat.blurb} · {count} area{count === 1 ? "" : "s"}
                </span>
              </span>
              <span
                aria-hidden="true"
                className={
                  "mb-2 h-[3px] w-10 shrink-0 self-center rounded-full transition-colors " +
                  (selected ? "bg-primary" : "bg-secondary/15 group-hover:bg-secondary/30")
                }
              />
            </button>
          );
        })}
      </div>
      {active !== "All" && (
        <button
          type="button"
          onClick={() => onSelect("All")}
          className="group mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-on-surface"
        >
          <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
            Show all six areas
          </span>
          <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
        </button>
      )}
    </div>
  );
}

function DetailItem({ title, body }: { title: string; body: string }) {
  return <ClinicalAccordion title={title} body={body} />;
}

function ClinicalGallery({
  hero,
  gallery,
  onOpen,
}: {
  hero: AtlasImage;
  gallery: AtlasImage[];
  onOpen: (images: AtlasImage[], index: number) => void;
}) {
  const full = React.useMemo(
    () => [hero, ...gallery.filter((g) => g.src !== hero.src)],
    [hero, gallery]
  );
  const lead = full[0];
  const thumbs = full.slice(1, 3);
  if (!lead) return null;
  return (
    <div>
      <button
        type="button"
        onClick={() => onOpen(full, 0)}
        aria-label={"Open image in viewer: " + lead.caption}
        className="block w-full overflow-hidden rounded-[20px] ring-1 ring-secondary/10"
      >
        <Image
          src={lead.src}
          alt={lead.alt}
          width={800}
          height={600}
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </button>
      <p className="mt-3 text-[13px] text-on-surface-variant">{lead.caption}</p>
      {thumbs.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {thumbs.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => onOpen(full, i + 1)}
              aria-label={"Open image in viewer: " + img.caption}
              className="block overflow-hidden rounded-[16px] ring-1 ring-secondary/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                sizes="(min-width: 1024px) 20vw, 44vw"
                className="w-full aspect-square object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      )}
      {full.length > 1 && (
        <button
          type="button"
          onClick={() => onOpen(full, 0)}
          className="group mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-on-surface"
        >
          <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
            View all {full.length} images
          </span>
          <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
        </button>
      )}
    </div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onNav,
}: {
  images: AtlasImage[];
  index: number;
  onClose: () => void;
  onNav: (dir: 1 | -1) => void;
}) {
  return (
    <ClinicalLightbox images={images} index={index} onClose={onClose} onNav={onNav} />
  );
}

function Chapter({
  treatment,
  index,
  flip,
  onOpenGallery,
}: {
  treatment: AtlasTreatment;
  index: number;
  flip: boolean;
  onOpenGallery: (images: AtlasImage[], start: number) => void;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const detailRef = React.useRef<HTMLDivElement>(null);
  return (
    <article
      id={"atlas-" + treatment.slug}
      data-atlas-chapter={treatment.slug}
      className="scroll-mt-32 border-t border-secondary/10 py-14 lg:py-20"
    >
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span aria-hidden="true" className="font-display-hero text-[15px] text-primary-fixed">
            {treatment.id}
          </span>
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
            {treatment.category}
          </p>
        </div>
        <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.05]">
          {treatment.title}
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <ClinicalGallery
            hero={treatment.heroImage}
            gallery={treatment.gallery}
            onOpen={(imgs, i) => onOpenGallery(imgs, i)}
          />
        </Reveal>
        <Reveal delay={0.08} className={flip ? "lg:order-1" : ""}>
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            {treatment.summary}
          </p>
          <ol className="mt-6 border-t border-secondary/10">
            {treatment.topics.map((topic, i) => (
              <li
                key={topic}
                className="flex items-baseline gap-4 border-b border-secondary/10 py-3"
              >
                <span aria-hidden="true" className="font-display-hero text-[13px] text-on-surface-variant w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-body-md text-body-md text-on-surface">{topic}</span>
              </li>
            ))}
          </ol>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={"details-" + treatment.slug}
            onClick={() => setExpanded((v) => !v)}
            className="mt-6 inline-flex items-center gap-2 bg-secondary text-on-secondary font-semibold text-[15px] px-6 py-3 rounded-full hover:bg-on-surface transition-colors"
          >
            {expanded ? "Hide detailed care" : "View detailed care"}
            <span aria-hidden="true" className={"transition-transform duration-300 " + (expanded ? "rotate-180" : "")}>
              ↓
            </span>
          </button>
        </Reveal>
      </div>
      <div
        ref={detailRef}
        id={"details-" + treatment.slug}
        style={{ maxHeight: expanded ? (detailRef.current?.scrollHeight ?? 2000) + "px" : "0px" }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 pt-10">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              In detail — {treatment.title.toLowerCase()}
            </p>
            <div className="mt-2 border-t border-secondary/10">
              {treatment.details.map((d) => (
                <DetailItem key={d.title} title={d.title} body={d.body} />
              ))}
            </div>
          </div>
          <div className="lg:pt-8">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              This is the complete care information published by Mungale Eye
              Hospital for {treatment.title.toLowerCase()}. Anything you need
              beyond it is best discussed in person.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                href={"/treatments/" + treatment.slug + "/"}
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface"
              >
                <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                  {treatment.fullLabel}
                </span>
                <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
              </Link>
              <Link
                href="/contact-us/"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface"
              >
                <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                  Book a consultation
                </span>
                <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <span className="sr-only">End of chapter {index + 1}</span>
    </article>
  );
}

export function TreatmentAtlas() {
  const [filter, setFilter] = React.useState<CategoryFilter>("All");
  const [activeSlug, setActiveSlug] = React.useState<string>(atlasTreatments[0]?.slug ?? "");
  const [lightbox, setLightbox] = React.useState<{ images: AtlasImage[]; index: number } | null>(null);

  const visible = React.useMemo(
    () => (filter === "All" ? atlasTreatments : atlasTreatments.filter((t) => t.category === filter)),
    [filter]
  );

  // Scrollspy: mark the chapter nearest the viewport centre as active.
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-atlas-chapter]"));
    if (!("IntersectionObserver" in window) || els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActiveSlug(e.target.getAttribute("data-atlas-chapter") ?? "");
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);

  const openGallery = React.useCallback((images: AtlasImage[], start: number) => {
    setLightbox({ images, index: start });
  }, []);
  const navLightbox = React.useCallback(
    (dir: 1 | -1) => {
      setLightbox((lb) => {
        if (!lb) return lb;
        const n = lb.images.length;
        return { images: lb.images, index: (lb.index + dir + n) % n };
      });
    },
    []
  );

  const activeIndex = Math.max(
    0,
    visible.findIndex((t) => t.slug === activeSlug)
  );
  const activeTreatment = visible[activeIndex] ?? visible[0];

  return (
    <div className="bg-background">
      {/* ── Care navigator ── */}
      <section aria-label="Care navigator" className="border-y border-secondary/10 bg-surface-canvas/60">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-16">
          <Reveal>
            <CategoryNavigator active={filter} onSelect={setFilter} />
          </Reveal>
        </div>
      </section>

      {/* ── Mobile sticky chapter selector ── */}
      <div className="lg:hidden sticky top-[92px] z-30 bg-background/90 backdrop-blur-md border-b border-secondary/10">
        <div className="px-6 py-3 flex items-center gap-3 overflow-x-auto">
          {visible.map((t) => (
            <a
              key={t.slug}
              href={"#atlas-" + t.slug}
              aria-label={"Go to " + t.title}
              aria-current={t.slug === activeSlug ? "true" : undefined}
              className={
                "shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center font-display-hero text-[14px] ring-1 transition-colors " +
                (t.slug === activeSlug
                  ? "bg-primary text-on-primary ring-primary"
                  : "text-on-surface-variant ring-secondary/20")
              }
            >
              {t.id}
            </a>
          ))}
          <span className="ml-1 truncate text-[13px] font-semibold text-on-surface">
            {activeTreatment?.title} · {String(activeIndex + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ── Atlas body: sticky index + chapters ── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14">
          <aside className="hidden lg:block" aria-label="Treatment index">
            <nav className="sticky top-32 py-20">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                Treatment atlas
              </p>
              <ol className="mt-5 space-y-1">
                {visible.map((t) => {
                  const isActive = t.slug === activeSlug;
                  return (
                    <li key={t.slug}>
                      <a
                        href={"#atlas-" + t.slug}
                        aria-current={isActive ? "true" : undefined}
                        className="group flex items-baseline gap-3 py-2"
                      >
                        <span
                          aria-hidden="true"
                          className={
                            "h-[2px] w-6 shrink-0 self-center rounded-full transition-colors " +
                            (isActive ? "bg-primary" : "bg-secondary/15 group-hover:bg-secondary/30")
                          }
                        />
                        <span>
                          <span
                            className={
                              "block font-display-hero text-[13px] transition-colors " +
                              (isActive ? "text-primary-fixed" : "text-on-surface-variant")
                            }
                          >
                            {t.id}
                          </span>
                          <span
                            className={
                              "block text-[14px] font-semibold leading-snug transition-colors " +
                              (isActive ? "text-on-surface" : "text-on-surface-variant group-hover:text-on-surface")
                            }
                          >
                            {t.title}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ol>
              <p aria-live="polite" className="mt-6 font-display-hero text-[15px] text-on-surface-variant">
                {String(activeIndex + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
              </p>
            </nav>
          </aside>

          <div>
            <div className="pt-4 lg:pt-10">
              <Reveal>
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                  Treatment atlas
                </p>
                <p className="mt-3 max-w-[62ch] font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Six areas of care, each with its own chapter. Scan the
                  summaries — open the details only where you want them.
                </p>
              </Reveal>
            </div>
            {visible.map((t, i) => (
              <Chapter
                key={t.slug}
                treatment={t}
                index={i}
                flip={i % 2 === 1}
                onOpenGallery={openGallery}
              />
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNav={navLightbox}
        />
      )}
    </div>
  );
}
