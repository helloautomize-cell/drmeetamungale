import Image from "next/image";
import type { ComponentType } from "react";
import { BookingCard } from "@/components/sections/BookingCard";
import { CountUp, Reveal } from "@/components/ui/motion";
import {
  ClockIcon,
  ReferralIcon,
  SurgeryIcon,
  CareBellIcon,
} from "@/components/icons/duotone";

// ─── Hero (Batch A photographic depth) ────────────────────────────────
// Copy: VERBATIM from archive/content/pages/home.md + about-us.md (see notes
// below). Visual changes only: real-hospital photographic backdrop
// (slit-lamp exam underway at MEH — /images/IMG_21301-jpg.webp) under warm
// legibility scrims + soft red glow with a slow idle drift; booking card
// renders as glass over the photo (see BookingCard).
// - H1: homepage H1 verbatim. NOTE: "Best Eye Hospital" is the site's own
//   published wording — flagged for owner decision per medical-hygiene rule
//   (docs/CONTENT_GAPS.md). Do not soften or strengthen it without approval.
// - Stat chips: "20+" VERIFIED (est. 2007). "40,000+" / "15,000+" are the
//   WEBSITE'S claimed numbers — kept per owner instruction, NOT independently
//   verified (see docs/CONTENT_GAPS.md #1). Confirm exact counts later.
// - "24/7 Service Facilities": VERIFIED highlight claim from the live site.
// - Credential bar: "two accomplished ophthalmologists" verbatim (about-us).
const stats: {
  icon: ComponentType<{ className?: string }>;
  value: number | null;
  suffix: string;
  label: string;
  text?: string;
  verified: boolean;
}[] = [
  { icon: ClockIcon, value: 20, suffix: "+", label: "Years of Service", verified: true },
  { icon: ReferralIcon, value: 40000, suffix: "+", label: "Patients Treated", verified: false },
  { icon: SurgeryIcon, value: 15000, suffix: "+", label: "Eye Surgeries", verified: false },
  { icon: CareBellIcon, value: null, suffix: "", label: "Service Facilities", text: "24/7", verified: true },
];

export function Hero() {
  return (
    <section className="relative w-full bg-background pb-space-2xl overflow-hidden">
      {/* Photographic backdrop — real slit-lamp examination underway at MEH.
          Confined to the right of the layout (behind the glass booking
          card): the headline column sits on clean background, the photo is
          a sense-of-place accent, never a full-bleed takeover. Warm grade +
          scrims keep everything legible; soft red glow drifts slowly (idle
          motion, transform-only, reduced-motion disables it). */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[46%] overflow-hidden">
          <Image
            src="/images/IMG_21301-jpg.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-center"
          />
          {/* Warm clinical grade */}
          <div className="absolute inset-0 bg-primary-container/25 mix-blend-multiply" />
          {/* Fade the photo's left edge into the page background (desktop) */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/35 to-transparent hidden lg:block" />
          {/* Mobile: heavy scrim so text stays readable over the photo */}
          <div className="absolute inset-0 bg-background/80 lg:hidden" />
          {/* Blend top into header, bottom into next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
        </div>
        {/* Idle glow */}
        <div className="absolute top-16 right-[-6rem] w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-3xl animate-hero-drift" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: headline + metrics */}
          <div className="lg:col-span-7 space-y-7">
            <Reveal>
              <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight">
                Welcome to Mungale Eye Hospital —{" "}
                <span className="text-primary underline decoration-primary-container/40 underline-offset-8">
                  Best Eye Hospital in Kothi, Vadodara
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Mungale Eye Hospital (MEH), recognized as one of the best eye
                hospitals in Vadodara, Gujarat, was established on 24th June,
                2007. Presently, MEH is well-equipped with entire range of state
                of art diagnostic, curative and latest technology surgical
                equipment required to treat eye patients
              </p>
            </Reveal>

            {/* Stat tiles with icon chips + count-up */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.1 + i * 0.06}>
                  {/* NOTE (owner to confirm) on unverified website-claimed numbers — docs/CONTENT_GAPS.md #1 */}
                  <div className="p-4 bg-card-white rounded-2xl shadow-sm hover:shadow-brand-md hover:-translate-y-1 transition-all duration-200 flex flex-col gap-2 h-full">
                    <span className="w-9 h-9 rounded-xl bg-surface-tint flex items-center justify-center text-primary">
                      {s.icon && <s.icon className="w-5 h-5" />}
                    </span>
                    <span className="font-headline-md text-headline-md text-primary font-bold leading-none">
                      {s.value !== null ? (
                        <CountUp to={s.value} suffix={s.suffix} />
                      ) : (
                        s.text
                      )}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {s.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Doctor credential bar */}
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  <Image
                    className="w-10 h-10 rounded-full object-cover shadow-brand-sm ring-2 ring-card-white"
                    src="/images/doctors/DrMeeta-2.webp"
                    alt="Dr. Meeta Mungale, MS Ophthalmology, DNB"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="w-10 h-10 rounded-full object-cover shadow-brand-sm ring-2 ring-card-white"
                    src="/images/doctors/Dr-Sachin.jpg"
                    alt="Dr. Sachin Mungale, MS Ophthalmology"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-semibold">
                    Led by Dr. Sachin &amp; Dr. Meeta Mungale
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Two accomplished ophthalmologists — MS Ophthalmology, DNB.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: booking card (task 4.2) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <BookingCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
