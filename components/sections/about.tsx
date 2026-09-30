import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealNow } from "@/components/ui/motion";
import { DoctorsExperience } from "@/components/sections/DoctorsExperience";

// ─── About page — Mungale journey (art-direction redesign) ────────────
// Same design system as the homepage (warm paper, ink, restrained red,
// serif emotion + sans information, rules, real photography). Purpose:
// who Mungale is, where it came from, what it believes, who is behind it.
// Trust numbers live on the homepage story — NO stats strip here.
// Copy provenance:
// - Headlines/eyebrows/support lines: OWNER-PROVIDED (redesign brief).
// - History, mission, expertise, facility: VERBATIM about-us source,
//   condensed only for layout clarity (meaning preserved — see notes).
// - Era photos: NO 2007/2011-era hospital photos exist (the old files are
//   2018 conference/classroom shots — using them as "history" would be
//   false). Timeline is typographic; the single photo beside TODAY is
//   present-day and captioned honestly.

// ── 01 · Hero (80–90vh, 48/52) ────────────────────────────────────────
export function AboutHero({
  breadcrumb,
}: {
  breadcrumb: { label: string; href: string }[];
}) {
  return (
    <section className="relative w-full bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 min-h-[80vh] lg:min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-12">
        <div className="lg:col-span-6">
          <RevealNow>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6">
              {breadcrumb.map((c, i) => (
                <span key={c.href} className="flex items-center gap-2">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-[13px] text-on-surface-variant">
                      /
                    </span>
                  )}
                  {i === breadcrumb.length - 1 ? (
                    <span aria-current="page" className="text-[13px] text-on-surface-variant">
                      {c.label}
                    </span>
                  ) : (
                    <Link
                      href={c.href}
                      className="text-[13px] text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
                    >
                      {c.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              Our story
            </p>
            <h1 className="font-display-hero text-on-surface tracking-[-0.015em] leading-[1.04] text-[40px] sm:text-[52px] lg:text-[62px] mt-4">
              A practice built around people, precision and sight.
            </h1>
            {/* Condensed from the verified milestone copy — meaning kept. */}
            <p className="text-[16.5px] lg:text-[17.5px] text-on-surface-variant mt-5 leading-relaxed max-w-xl">
              Mungale Eye Hospital began in Vadodara in 2007 as a private
              joint venture of two ophthalmologists — and grew into a
              referral center for complex cornea and glaucoma care.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/contact-us/"
                className="inline-flex h-12 px-7 items-center justify-center bg-primary text-white text-[14.5px] font-semibold rounded-[13px] shadow-[0_1px_3px_rgba(17,17,18,0.18)] hover:bg-primary-fixed transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <span>Book a consultation</span>
              </Link>
              <Link
                href="/treatments/"
                className="cta-quiet group inline-flex items-center gap-2 h-12 px-1 text-[15px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
              >
                <span className="cta-quiet-text">Explore treatments</span>
                <ArrowRight
                  aria-hidden="true"
                  className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </Link>
            </div>
          </RevealNow>
        </div>
        <div className="lg:col-span-6">
          <RevealNow delay={0.12}>
            <div className="overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
              <Image
                src="/images/welcome-img-1146-1024x768.jpg"
                alt="The Mungale Eye Hospital team — doctors and staff at the Kothi, Vadodara hospital"
                width={1024}
                height={768}
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <p className="mt-3 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
              Mungale Eye Hospital · Kothi · Vadodara · Since 2007
            </p>
          </RevealNow>
        </div>
      </div>
    </section>
  );
}

// ── 02 · Story eras — huge years, verbatim milestones ─────────────────
const eras = [
  {
    year: "2007",
    title: "Where the story began.",
    text: "Established on 24th June, 2007 in Vadodara — a private joint venture led by Dr. Meeta Mungale and Dr. Sachin Mungale.",
  },
  {
    year: "2011",
    title: "A new home in Kothi.",
    text: "Relocated to a new, state-of-the-art facility in Kothi, the heart of Baroda city.",
  },
  {
    year: "Today",
    title: "A specialist referral centre.",
    text: "Serving referral patients from Gujarat, Madhya Pradesh and Rajasthan — a referral center for complex cornea and glaucoma cases.",
    img: "/images/IMG_2223-jpg.webp",
    imgAlt: "Dr. Meeta Mungale at work at Mungale Eye Hospital",
    imgCaption: "Mungale Eye Hospital today",
  },
];

export function StoryEra() {
  return (
    <section id="story" className="bg-surface scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            Our story
          </p>
          {/* Red arc signature — one of two on this page. */}
          <svg
            width="72"
            height="10"
            viewBox="0 0 72 10"
            fill="none"
            aria-hidden="true"
            className="mt-2 text-primary"
          >
            <path
              d="M1 8 Q36 -1 71 6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <h2 className="mt-4 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[32px] sm:text-[40px] lg:text-[48px]">
            Where Mungale began.
          </h2>
        </Reveal>
        <div className="mt-12 lg:mt-16 space-y-14 lg:space-y-20">
          {eras.map((era) => (
            <div
              key={era.year}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
            >
              <Reveal className="lg:col-span-5">
                <p
                  aria-hidden="true"
                  className="font-display-hero leading-[0.9] tracking-tight text-on-surface text-[88px] sm:text-[120px] lg:text-[150px]"
                >
                  {era.year}
                </p>
                <p className="mt-3 font-display-hero text-on-surface tracking-tight leading-snug text-[22px] lg:text-[26px]">
                  {era.title}
                </p>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-7">
                <div className="border-t border-secondary/10 pt-5">
                  <p className="text-[16px] lg:text-[17.5px] leading-relaxed text-on-surface-variant max-w-xl">
                    {era.text}
                  </p>
                  {era.img && (
                    <figure className="mt-6 max-w-xl">
                      <span className="block overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
                        <Image
                          src={era.img}
                          alt={era.imgAlt ?? ""}
                          width={800}
                          height={500}
                          loading="lazy"
                          sizes="(min-width: 1024px) 40vw, 90vw"
                          className="w-full aspect-[16/10] object-cover"
                        />
                      </span>
                      {era.imgCaption && (
                        <figcaption className="mt-2.5 text-[12.5px] text-on-surface-variant">
                          {era.imgCaption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 03 · Approach — statement + principle rows ────────────────────────
const principles = ["Listen", "Examine", "Explain", "Plan"];

export function OurApproach() {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            Our approach
          </p>
          <h2 className="mt-4 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[32px] sm:text-[40px] lg:text-[48px]">
            Care begins with understanding.
          </h2>
          {/* Condensed from the verified mission copy — meaning kept. */}
          <p className="mt-4 text-[16px] lg:text-[17px] leading-relaxed text-on-surface-variant max-w-xl">
            Mungale Eye Hospital is committed to the highest standard of eye
            care — advanced diagnostics, expert intervention and cutting-edge
            surgery, at affordable prices.
          </p>
        </Reveal>
        <ol className="mt-10 lg:mt-12 max-w-3xl border-t border-secondary/10">
          {principles.map((p, i) => (
              <li key={p} className="reveal flex items-baseline gap-5 py-5 border-b border-secondary/10" style={{ transitionDelay: `${0.05 * i * 1000}ms` }}>
                <span
                  aria-hidden="true"
                  className="text-[12px] font-bold tracking-[0.16em] text-on-surface-variant shrink-0"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display-hero text-on-surface tracking-tight leading-tight text-[26px] lg:text-[32px]">
                  {p}
                </span>
              </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ── 04 · Expertise index — specialties as quiet rows ──────────────────
// Descriptors condensed from verified treatments.ts wording. Retina has no
// dedicated page — it links to the treatments index (commented, honest).
const specialties: { name: string; href: string; blurb: string }[] = [
  {
    name: "Cornea",
    href: "/treatments/corneal-treatments/",
    blurb: "Infections, injuries and conditions of the cornea.",
  },
  {
    name: "Glaucoma",
    href: "/treatments/glaucoma-treatments/",
    blurb: "Care that lowers eye pressure and protects vision.",
  },
  {
    name: "Cataract",
    href: "/treatments/cataract-surgery/",
    blurb: "Clouded-lens removal with lens replacement.",
  },
  {
    name: "Retina",
    href: "/treatments/",
    blurb: "Retinal care within our subspecialty practice.",
  },
];

export function ExpertiseIndex() {
  return (
    <section className="bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            Our expertise
          </p>
          <h2 className="mt-4 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[32px] sm:text-[40px] lg:text-[48px]">
            Specialist care, under one roof.
          </h2>
        </Reveal>
        <ul className="mt-10 lg:mt-12 max-w-3xl border-t border-secondary/10">
          {specialties.map((s) => (
            <li key={s.name} className="border-b border-secondary/10">
              <Reveal>
                <Link
                  href={s.href}
                  className="group flex items-center justify-between gap-5 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-lg"
                >
                  <span>
                    <span className="block text-[13px] font-bold uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-colors duration-200">
                      {s.name}
                    </span>
                    <span className="mt-1 block text-[14.5px] text-on-surface-variant">
                      {s.blurb}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="w-5 h-5 shrink-0 text-on-surface/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 motion-reduce:transition-none"
                  />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── 05 · Facility — asymmetric real photography ───────────────────────
export function FacilityPlace() {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            The place
          </p>
          <h2 className="mt-4 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[32px] sm:text-[40px] lg:text-[48px]">
            Inside Mungale.
          </h2>
        </Reveal>
        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          <Reveal className="lg:col-span-7">
            <figure>
              <span className="block overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
                <Image
                  src="/images/IMG_0887-jpg.webp"
                  alt="YAG laser procedure at Mungale Eye Hospital"
                  width={880}
                  height={620}
                  loading="lazy"
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  className="w-full h-[300px] sm:h-[380px] lg:h-[480px] object-cover transition-transform duration-200 hover:scale-[1.015] motion-reduce:transition-none motion-reduce:hover:scale-100"
                />
              </span>
              <figcaption className="mt-2.5 text-[12.5px] text-on-surface-variant">
                Surgical care
              </figcaption>
            </figure>
          </Reveal>
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-5">
            <Reveal delay={0.08}>
              <figure>
                <span className="block overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
                  <Image
                    src="/images/11-jpg.webp"
                    alt="Eye examination underway at Mungale Eye Hospital"
                    width={640}
                    height={420}
                    loading="lazy"
                    sizes="(min-width: 1024px) 35vw, 45vw"
                    className="w-full h-[180px] sm:h-[220px] lg:h-[230px] object-cover transition-transform duration-200 hover:scale-[1.015] motion-reduce:transition-none motion-reduce:hover:scale-100"
                  />
                </span>
                <figcaption className="mt-2.5 text-[12.5px] text-on-surface-variant">
                  Consultation
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.14}>
              <figure>
                <span className="block overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
                  <Image
                    src="/images/30-jpg.webp"
                    alt="Computerised eye testing at Mungale Eye Hospital"
                    width={640}
                    height={420}
                    loading="lazy"
                    sizes="(min-width: 1024px) 35vw, 45vw"
                    className="w-full h-[180px] sm:h-[220px] lg:h-[230px] object-cover transition-transform duration-200 hover:scale-[1.015] motion-reduce:transition-none motion-reduce:hover:scale-100"
                  />
                </span>
                <figcaption className="mt-2.5 text-[12.5px] text-on-surface-variant">
                  Diagnosis
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 06 · Doctors teaser — SAME system as homepage, compact ────────────
export function DoctorsTeaser() {
  return (
    <section className="bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            The people behind Mungale
          </p>
          <h2 className="mt-4 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[32px] sm:text-[40px] lg:text-[48px]">
            Meet the doctors who care for your vision.
          </h2>
        </Reveal>
        <DoctorsExperience compact />
        <Reveal className="mt-8">
          <Link
            href="/#doctors"
            className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
          >
            <span className="cta-quiet-text">Meet the doctors</span>
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

// ── 07 · Closing story — quiet emotional end ──────────────────────────
export function ClosingStory() {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            Why we&apos;re here
          </p>
          {/* Red arc signature — second of two on this page. */}
          <svg
            width="72"
            height="10"
            viewBox="0 0 72 10"
            fill="none"
            aria-hidden="true"
            className="mt-2 text-primary"
          >
            <path
              d="M1 8 Q36 -1 71 6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <h2 className="mt-4 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.08] text-[30px] sm:text-[36px] lg:text-[42px]">
            The story continues with every patient we meet.
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link
              href="/about-us/#story"
              className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
            >
              <span className="cta-quiet-text">About Mungale</span>
              <ArrowRight
                aria-hidden="true"
                className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
            <Link
              href="/#doctors"
              className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
            >
              <span className="cta-quiet-text">Meet the doctors</span>
              <ArrowRight
                aria-hidden="true"
                className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
            <Link
              href="/#visit"
              className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
            >
              <span className="cta-quiet-text">Start your visit</span>
              <ArrowRight
                aria-hidden="true"
                className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
