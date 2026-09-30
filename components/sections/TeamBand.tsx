import { ArtImage } from "@/components/ui/ArtImage";
import { Reveal } from "@/components/ui/motion";
import { REAL } from "@/lib/images";

// ─── Team — "A small team, big on care." ───────────────────────────────
// The whole Mungale team in the lobby, in a large 28px-radius container
// capped at the photo's native 1920px so it is never upscaled. Heading
// and supporting line are the hospital's own copy (briefed). The facts
// row reuses three statements already published on the site (Since 2007
// · Kothi, Vadodara · referral centre for cornea & glaucoma). Staff only —
// no patient, not consent-gated.

const FACTS = ["Since 2007", "Kothi, Vadodara", "Referral centre for cornea & glaucoma"];

export function TeamBand() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-site px-6 py-[88px] lg:px-gutter lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            Our team
          </p>
          <h2 className="mt-4 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[36px] sm:text-[44px] lg:text-[54px]">
            A small team, big on care.
          </h2>
          <p className="mt-4 text-[17px] lg:text-[18px] leading-relaxed text-on-surface-variant">
            Our strength isn&apos;t just in machines or microscopes, it&apos;s in our people.
          </p>
        </Reveal>

        <Reveal className="mt-10 lg:mt-14">
          <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[28px] ring-1 ring-secondary/10 aspect-[4/3] md:aspect-[16/10]">
            <ArtImage
              d={REAL.team.d}
              m={REAL.team.m}
              alt="The Mungale Eye Hospital team together in the lobby"
              sizes="(min-width: 1600px) 1320px, 100vw"
              className="h-full w-full"
              imgClassName="h-full w-full object-cover object-[50%_45%]"
            />
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-on-surface-variant">
            {FACTS.map((f, i) => (
              <li key={f} className="flex items-center gap-8">
                {i > 0 && (
                  <span aria-hidden="true" className="h-[5px] w-[5px] rounded-full bg-brand-red" />
                )}
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
