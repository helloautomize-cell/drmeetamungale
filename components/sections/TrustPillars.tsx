import fs from "fs";
import path from "path";
import Image from "next/image";
import { ArtImage } from "@/components/ui/ArtImage";
import { Reveal } from "@/components/ui/motion";
import { IMG, WHY_EQUIPMENT_SRC } from "@/lib/images";

// ─── Why Mungale (quiet-luxury reset, spec §5.4) — dark ink-navy band.
// A generated lens artwork carries the header band and melts into navy;
// below it the three numbers sit as STATIC text — the only place stats
// appear on the page. No circles, no column photos, no scrubs, no
// count-ups. Every figure here is verified: 19+ is EXPERIENCE_CLAIM,
// 500+ is Dr. Meeta's CV figure already published on her profile, and 2
// is the two fellowship-trained specialists. The quote is a VERBATIM
// Pankaj Makhijani Google review excerpt.

const states = [
  {
    index: "01",
    value: "19+",
    label: "Over 19 years of specialist eye care",
    heading: "Experience that compounds over time.",
    body: "Established in 2007, Mungale Eye Hospital has grown into a referral center for complex cornea and glaucoma cases.",
  },
  {
    index: "02",
    value: "LVPEI",
    label: "Fellowship-trained cornea surgeon",
    heading: "Depth you can count.",
    // NMC-03: surgery counts are prohibited — credentials line instead.
    body: "Dr. Meeta Mungale is a fellowship-trained cornea surgeon: DALK, DSEK, DMEK, PK.",
  },
  {
    index: "03",
    value: "2",
    label: "Fellowship-trained specialist surgeons",
    heading: "Two specialists, one hospital.",
    body: "Both doctors trained at the L V Prasad Eye Institute, Hyderabad — Dr. Sachin in glaucoma, Dr. Meeta in cornea.",
  },
];

export function TrustPillars() {
  return (
    <section className="bg-ink-navy">
      {/* Header band — lens artwork, right-anchored on desktop and low
          on mobile; bottom gradient melts it into the navy field. */}
      <div className="relative h-[440px] md:h-[560px]">
        <ArtImage
          d={IMG.whyLens.d}
          m={IMG.whyLens.m}
          alt=""
          className="absolute inset-0"
          imgClassName="h-full w-full object-cover object-[center_bottom] md:object-[right_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,43,0)_30%,rgba(16,27,43,0.55)_62%,#101b2b_96%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,27,43,0.72)_0%,rgba(16,27,43,0.25)_55%,rgba(16,27,43,0)_80%)]"
        />
        <Reveal className="relative z-10 mx-auto flex h-full max-w-site flex-col justify-end px-6 pb-12 lg:px-gutter lg:pb-16">
          <div className="max-w-[560px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#ff8f8f]">
              Why Mungale
            </p>
            <h2 className="mt-4 font-display-hero text-white tracking-[-0.015em] leading-[1.04] text-[36px] sm:text-[44px] lg:text-[54px]">
              Specialist care, with the time to explain.
            </h2>
            {/* Structural microcopy, not a claim. */}
            <p className="mt-4 text-[16px] text-white/60">
              Three numbers. One story.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Columns — static figures, hairline, serif sub-heading, body,
          then a photo filling the remaining column height so all three
          columns end level (no empty navy block). */}
      <div className="mx-auto max-w-site px-6 pb-20 lg:px-gutter lg:pb-28">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-3 lg:gap-10">
          {states.map((s, i) => (
            <Reveal key={s.index} delay={i * 0.08} className="min-w-0">
              <article className="flex h-full flex-col">
                <p className="text-[12px] font-bold tracking-[0.22em] text-[#ff8f8f]">
                  {s.index}
                </p>
                <p className="mt-2 font-display-hero text-porcelain leading-[0.95] tracking-tight text-[40px] lg:text-[46px] whitespace-nowrap tabular-nums">
                  {s.value}
                </p>
                <p className="mt-2 text-[15px] text-white/65">{s.label}</p>

                <div className="mt-6 flex flex-1 flex-col border-t border-line-dark pt-6">
                  <h3 className="font-display-hero text-white tracking-tight leading-tight text-[22px] lg:text-[25px]">
                    {s.heading}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-white/65">
                    {s.body}
                  </p>
                  <ColumnFigure index={s.index} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SIZES = "(min-width: 1024px) 400px, 90vw";
const IMG_WRAP =
  "relative flex-1 overflow-hidden rounded-[20px] ring-1 ring-white/10";

// Real photographs only — never an upscaled file. The entrance source is
// 1536x1024 (downscaled to 800x533); at ~360px column width it renders
// at about 0.45x (under the 1.3x ceiling), so it can cover the full
// column height safely. The signboard sits in the top ~40% of the
// photo, hence object-[50%_18%].
// TODO(doctor): need a real photo of the laser machine or operation
// theatre and its correct name for the third column — see
// WHY_EQUIPMENT_SRC in lib/images.ts.
function ColumnFigure({ index }: { index: string }) {
  if (index === "01") {
    return (
      <figure className="mt-6 flex flex-1 flex-col">
        <div className={IMG_WRAP + " aspect-[3/2] lg:aspect-auto lg:min-h-[280px]"}>
          <Image
            src="/images/home/why-entrance.webp"
            alt="Entrance of Mungale Eye Hospital, Kothi, Vadodara, with the signboard showing the hospital name and the names of Dr. Meeta Mungale and Dr. Sachin Mungale."
            fill
            sizes={SIZES}
            loading="lazy"
            className="object-cover object-[50%_18%]"
          />
        </div>
        <figcaption className="mt-2.5 text-[12.5px] text-white/50">
          Mungale Eye Hospital, Kothi, Vadodara
        </figcaption>
      </figure>
    );
  }
  if (index === "02") {
    return (
      <figure className="mt-6 flex flex-1 flex-col">
        <div className={IMG_WRAP + " aspect-[4/5] lg:aspect-auto lg:min-h-[280px]"}>
          <Image
            src="/images/home/why-consultation.webp"
            alt="Dr. Sachin Mungale seated beside a slit lamp examination unit."
            fill
            sizes={SIZES}
            loading="lazy"
            className="object-cover object-[50%_35%]"
          />
        </div>
        <figcaption className="mt-2.5 text-[12.5px] text-white/50">
          Dr. Sachin Mungale, glaucoma specialist
        </figcaption>
      </figure>
    );
  }

  const equipmentExists = fs.existsSync(
    path.join(process.cwd(), "public", WHY_EQUIPMENT_SRC)
  );
  return (
    <figure className="mt-6 flex flex-1 flex-col">
      <div className={IMG_WRAP + " aspect-[4/5] lg:aspect-auto lg:min-h-[280px]"}>
        {equipmentExists ? (
          <Image
            src={WHY_EQUIPMENT_SRC}
            alt=""
            fill
            sizes={SIZES}
            loading="lazy"
            className="object-cover"
          />
        ) : (
          <ArtImage
            d={IMG.whyLens.d}
            m={IMG.whyLens.m}
            alt=""
            sizes={SIZES}
            className="absolute inset-0"
            imgClassName="h-full w-full object-cover object-[70%_50%]"
          />
        )}
      </div>
      {equipmentExists && (
        <figcaption className="mt-2.5 text-[12.5px] text-white/50">
          {/* TODO(doctor): caption must describe only what the photo
              visibly shows once the real equipment photo lands. */}
          Equipment at Mungale Eye Hospital
        </figcaption>
      )}
    </figure>
  );
}
