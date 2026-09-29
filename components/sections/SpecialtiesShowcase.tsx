import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArtImage } from "@/components/ui/ArtImage";
import { Reveal } from "@/components/ui/motion";
import { IMG } from "@/lib/images";

// ─── Specialties (quiet-luxury reset, spec §5.5) — static editorial
// grid. The porcelain-arc artwork carries the header band (arc right,
// heading on the empty ivory left; stacked on mobile). Cards: white,
// 20px radius, hairline border, 4:5 generated imagery, small red index
// eyebrow — no pinned scroll, no giant outline numerals, no clinical
// equipment photos. Copy: titles/descriptions verbatim from
// content/treatments.ts; tags derived from the same published copy.
// Links only to existing treatment routes.

const SPECIALTIES = [
  {
    num: "01",
    title: "Cataract Surgery",
    slug: "cataract-surgery",
    description:
      "Removes the clouded lens with advanced phaco technology, replacing it with a suitable intraocular lens.",
    tags: ["Clouded lens", "Phacoemulsification", "Lens implants"],
    img: IMG.cataract.d,
    alt: "Warm portrait-toned artwork representing cataract care",
  },
  {
    num: "02",
    title: "Cornea",
    slug: "corneal-treatments",
    description:
      "Medication, surgery or specialised therapies for infections, injuries and conditions.",
    tags: ["Infections", "Injuries", "Transplants"],
    img: IMG.cornea.d,
    alt: "Warm portrait-toned artwork representing cornea care",
  },
  {
    num: "03",
    title: "Glaucoma",
    slug: "glaucoma-treatments",
    description:
      "Eye drops, medications, laser therapy and surgical options to lower eye pressure.",
    tags: ["Eye pressure", "Visual field", "Laser & surgery"],
    img: IMG.glaucoma.d,
    alt: "Warm portrait-toned artwork representing glaucoma care",
  },
  {
    num: "04",
    title: "Optical & Contact Lenses",
    slug: "optical-contact-lenses",
    description:
      "Glasses and contact lenses correcting myopia, hyperopia and astigmatism.",
    tags: ["Myopia", "Hyperopia", "Astigmatism"],
    img: IMG.optical.d,
    alt: "Warm portrait-toned artwork representing optical and contact lenses",
  },
];

function SpecialtyCard({ s }: { s: (typeof SPECIALTIES)[number] }) {
  return (
    <article className="group flex w-[82vw] shrink-0 snap-center flex-col overflow-hidden rounded-[20px] border border-line bg-paper md:w-auto">
      <div className="aspect-[4/5] overflow-hidden">
        <ArtImage
          d={s.img}
          alt={s.alt}
          className="h-full w-full"
          imgClassName="h-full w-full object-cover object-[50%_68%] transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[12px] font-bold tracking-[0.2em] text-brand-red-strong tabular-nums">
          {s.num}
        </p>
        <h3 className="mt-2 font-display-hero text-ink tracking-tight leading-tight text-[24px]">
          {s.title}
        </h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
          {s.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="What we treat">
          {s.tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-porcelain px-3 py-1 text-[12px] font-medium text-ink-soft ring-1 ring-line"
            >
              {t}
            </li>
          ))}
        </ul>
        <Link
          href={"/treatments/" + s.slug + "/"}
          className="cta-quiet group/link mt-5 inline-flex w-fit items-center gap-2 text-[15px] font-semibold text-ink"
        >
          <span className="cta-quiet-text">Explore</span>
          <ArrowRight
            aria-hidden="true"
            className="w-4 h-4 text-brand-red-strong transition-transform duration-200 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}

export function SpecialtiesShowcase() {
  return (
    <section className="bg-porcelain">
      {/* Header band — the porcelain arc artwork sits right; the heading
          holds the empty ivory left on desktop. Mobile: heading first,
          art below. */}
      <div className="relative">
        <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
          <ArtImage
            d={IMG.arc.d}
            alt=""
            className="h-full w-full"
            imgClassName="h-full w-full object-cover object-[right_center]"
          />
        </div>
        <div className="relative z-10 mx-auto flex h-auto max-w-site flex-col justify-center px-6 pt-[88px] pb-10 lg:h-[clamp(320px,38vw,520px)] lg:px-gutter lg:py-0">
          <Reveal className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-red-strong">
              Our specialties
            </p>
            <h2 className="mt-4 font-display-hero text-ink tracking-[-0.015em] leading-[1.05] text-[36px] sm:text-[44px] lg:text-[54px]">
              Four areas of care. One careful approach.
            </h2>
          </Reveal>
        </div>
        <div className="h-[300px] lg:hidden" aria-hidden="true">
          <ArtImage
            d={IMG.arc.m}
            alt=""
            className="h-full w-full"
            imgClassName="h-full w-full object-cover object-[center_20%]"
          />
        </div>
      </div>

      {/* Cards — 4-col ≥1280px, 2×2 md–xl, snap-scroll row on mobile. */}
      <div className="mx-auto max-w-site px-6 pb-[88px] lg:px-gutter lg:pb-24">
        <Reveal>
          <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 no-scrollbar md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 xl:grid-cols-4">
            {SPECIALTIES.map((s) => (
              <SpecialtyCard key={s.slug} s={s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
