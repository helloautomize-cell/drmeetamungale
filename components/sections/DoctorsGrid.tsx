import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { doctors } from "@/content/doctors";
import { Reveal } from "@/components/ui/motion";

// ─── 4.7 Doctors grid — editorial "meet the team" feature ───────────────
// Reference shows 4 cards; Mungale has 2 doctors, presented as alternating
// editorial profiles (not a staff grid): matched portrait crops under one
// warm grade, oversized serif names, credential chips, index numerals.
// All copy verbatim from content/doctors.ts (verified source claims only).
export function DoctorsGrid() {
  return (
    <section className="py-space-2xl bg-card-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-label-sm text-label-sm text-primary-fixed uppercase font-bold tracking-wider">
                Qualified Specialists
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                Meet Our Senior Ophthalmologists
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                A private joint venture led by two accomplished ophthalmologists.
              </p>
            </div>
            <Link
              href="/about-us/"
              className="shrink-0 font-label-md text-label-md text-primary-fixed font-bold inline-flex items-center gap-1 hover:gap-2 transition-all link-focus"
            >
              <span>About Our Hospital</span>
              <ChevronRight className="w-[18px] h-[18px]" />
            </Link>
          </div>
        </Reveal>

        <div className="space-y-12 lg:space-y-16">
          {doctors.map((d, i) => (
            <Reveal key={d.slug}>
              <article
                className={
                  "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center " +
                  (i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : "")
                }
              >
                {/* Portrait with brand frame */}
                <div className="lg:col-span-5 relative">
                  <div
                    className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-primary/15 via-transparent to-secondary/10 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative rounded-3xl overflow-hidden shadow-brand-md ring-1 ring-secondary/10">
                    <Image
                      src={d.imageUrl}
                      alt={d.alt}
                      width={512}
                      height={640}
                      className="w-full h-96 lg:h-[28rem] object-cover"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-primary-container/15 mix-blend-multiply pointer-events-none"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card-white/90 backdrop-blur font-label-sm text-label-sm font-bold text-primary"
                    >
                      {d.title}
                    </span>
                  </div>
                </div>
                {/* Editorial text */}
                <div className="lg:col-span-7">
                  <span
                    className="font-display-hero text-display-hero text-primary/15 leading-none select-none"
                    aria-hidden="true"
                  >
                    {i === 0 ? "01" : "02"}
                  </span>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold -mt-4">
                    {d.name}
                  </h3>
                  <p className="font-label-md text-label-md text-primary-fixed font-semibold mt-1">
                    {d.title}
                  </p>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed max-w-xl">
                    {d.description}
                  </p>
                  <Link
                    href="/contact-us/"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-white font-label-md text-label-md hover:bg-primary hover:shadow-brand-md transition-all"
                  >
                    <span>Book a Consultation</span>
                    <ChevronRight className="w-[18px] h-[18px]" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
