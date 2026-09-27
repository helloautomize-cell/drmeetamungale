import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, CountUp } from "@/components/ui/motion";
import {
  BadgeCheckIcon,
  BuildingIcon,
  ClockIcon,
  ReferralIcon,
  SurgeryIcon,
  CareBellIcon,
  MicroscopeIcon,
} from "@/components/icons/duotone";

// ─── About Us narrative sections ────────────────────────────────────────
// All copy VERBATIM from archive/content/pages/about-us.md. Presentation
// only: split hero with real photography, milestone timeline (2007 founded /
// 2011 Kothi relocation / today referral center — all stated in the copy),
// stats band with homepage-consistent figures, matched Mission/Expertise
// cards, facility photo strip (visually verified real clinic photos), and a
// referral-center callout (sentence duplicated from the on-page Mission
// paragraph as an editorial pull-quote — words unchanged).

// ── Split hero ─────────────────────────────────────────────────────────
export function AboutHero({
  breadcrumb,
}: {
  breadcrumb: { label: string; href: string }[];
}) {
  return (
    <section className="relative w-full bg-background pt-10 pb-space-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-6">
              {breadcrumb.map((c, i) => (
                <span key={c.href} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-outline-variant" />}
                  <Link
                    href={c.href}
                    className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {c.label}
                  </Link>
                </span>
              ))}
            </nav>
            <span className="font-label-sm text-label-sm text-primary-fixed uppercase font-bold tracking-wider">
              Our Story
            </span>
            <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
              About Our Eye Hospital in Vadodara
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
              Our Story as a Leading Eye Care Clinic
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact-us/"
                className="px-6 py-3 bg-primary hover:bg-primary-fixed text-on-primary font-label-md text-label-md rounded-full shadow-brand-md hover:shadow-brand-glow hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
              >
                <span>Book an Appointment</span>
                <ChevronRight className="w-[18px] h-[18px]" />
              </Link>
              <Link
                href="/treatments/"
                className="px-6 py-3 bg-card-white ring-1 ring-border-light text-on-surface font-label-md text-label-md rounded-full hover:ring-primary/40 hover:shadow-brand-sm transition-all inline-flex items-center gap-2"
              >
                <span>Explore Treatments</span>
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.12}>
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-primary/15 via-transparent to-secondary/10 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl overflow-hidden shadow-brand-lg ring-1 ring-secondary/10">
                <Image
                  src="/images/IMG_21191-jpg.webp"
                  alt="Dr. Meeta Mungale consulting at Mungale Eye Hospital"
                  width={512}
                  height={640}
                  className="w-full h-96 lg:h-[26rem] object-cover"
                  priority
                />
                <div
                  className="absolute inset-0 bg-primary-container/15 mix-blend-multiply pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                  <BadgeCheckIcon className="w-6 h-6 shrink-0" />
                  <p className="font-label-md text-label-md font-bold">
                    Led by two accomplished ophthalmologists
                  </p>
                </div>
              </div>
              <div className="absolute -top-5 right-4 sm:right-8 bg-secondary pl-3 pr-4 py-2.5 rounded-xl shadow-brand-md flex items-center gap-2">
                <BuildingIcon className="w-6 h-6 text-white" />
                <div>
                  <p className="font-label-sm text-label-sm font-bold text-white">Since 2007</p>
                  <p className="font-body-sm text-body-sm text-white/70">Kothi, Vadodara</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Story + milestone timeline ─────────────────────────────────────────
const milestones = [
  {
    year: "2007",
    title: "Founded",
    text: "Established on 24th June, 2007 in Vadodara — a private joint venture led by Dr. Meeta Mungale and Dr. Sachin Mungale.",
  },
  {
    year: "2011",
    title: "Moved to Kothi",
    text: "Relocated to a new, state-of-the-art facility in Kothi, the heart of Baroda city.",
  },
  {
    year: "Today",
    title: "Referral Center",
    text: "Serving referral patients from Gujarat, Madhya Pradesh and Rajasthan — a referral center for complex cornea and glaucoma cases.",
  },
];

export function StoryTimeline() {
  return (
    <section className="py-space-2xl bg-card-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-5">
          <div>
            <span className="font-label-sm text-label-sm text-primary-fixed uppercase font-bold tracking-wider">
              Our Story
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
              Our Story
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed">
              Mungale Eye Hospital (MEH) was established on 24th June, 2007 in
              Vadodara, Gujarat, India. It is a private joint venture led by two
              accomplished ophthalmologists, Dr. Meeta Mungale and Dr. Sachin
              Mungale. MEH was relocated in 2011 to a new, state-of-the-art
              facility in Kothi, the heart of Baroda city, marking a significant
              milestone. The decision to move to this central location was
              motivated by the hospital’s growing reputation and the referral
              patients it serves from Gujarat and neighboring states like Madhya
              Pradesh and Rajasthan.
            </p>
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <ol className="relative space-y-0 before:absolute before:left-[27px] before:top-3 before:bottom-3 before:w-px before:bg-gradient-to-b before:from-primary before:via-primary/40 before:to-transparent">
            {milestones.map((m, i) => (
              <li key={m.year} className="relative pl-20 pb-8 last:pb-0">
                {/* Badge lives OUTSIDE Reveal: Reveal's transform would
                    otherwise become its positioning context and slide it
                    over the text. */}
                <span
                  className="absolute left-0 top-0 w-14 h-14 rounded-2xl bg-primary text-white font-headline-sm text-headline-sm font-bold flex items-center justify-center shadow-brand-sm ring-4 ring-card-white"
                  aria-hidden="true"
                >
                  {m.year === "Today" ? <CareBellIcon className="w-7 h-7" /> : m.year.slice(2)}
                </span>
                <Reveal delay={0.08 * i}>
                  <p className="font-label-sm text-label-sm text-primary-fixed font-bold uppercase tracking-wider">
                    {m.year} · {m.title}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                    {m.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ── Stats band (homepage-consistent figures) ───────────────────────────
// 20+ VERIFIED (est. 2007). 40,000+ / 15,000+ are the WEBSITE'S claimed
// numbers, kept identical to the homepage per the consistency mandate —
// NOT independently verified (docs/CONTENT_GAPS.md #1). The prompt's
// "14 Years / 25,000+" are stale figures from the old site and are NOT used.
const stats = [
  { icon: ClockIcon, value: 20, suffix: "+", label: "Years of Service" },
  { icon: ReferralIcon, value: 40000, suffix: "+", label: "Patients Treated" },
  { icon: SurgeryIcon, value: 15000, suffix: "+", label: "Eye Surgeries" },
];

export function AboutStats() {
  return (
    <section className="py-space-xl bg-surface-warm border-y border-border-light/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.07 * i}>
              <div className="flex items-center gap-5 sm:justify-center sm:text-left">
                <span className="w-14 h-14 rounded-2xl bg-card-white ring-1 ring-primary/20 shadow-brand-sm flex items-center justify-center text-primary shrink-0">
                  <s.icon className="w-8 h-8" />
                </span>
                <div className="flex flex-col">
                  <dt className="order-2 font-label-md text-label-md text-on-surface-variant font-semibold mt-1.5">
                    {s.label}
                  </dt>
                  <dd className="order-1 font-display-hero text-display-hero text-primary leading-none">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </dd>
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="sm:hidden h-px bg-border-light mt-8" aria-hidden="true" />
              )}
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

// ── Mission / Expertise matched pair ───────────────────────────────────
export function MissionExpertise() {
  return (
    <section className="py-space-2xl bg-surface-canvas">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionHeader
            title="Our Mission & Expertise"
          />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <Reveal className="h-full">
            <div className="h-full rounded-3xl overflow-hidden shadow-sm ring-1 ring-border-light/50 hover:shadow-brand-md hover:-translate-y-1 transition-all duration-200 bg-card-white flex flex-col">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/images/IMG_2223-jpg.webp"
                  alt="Dr. Meeta Mungale at work at Mungale Eye Hospital"
                  width={800}
                  height={420}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-primary-container/15 mix-blend-multiply pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-card-white via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
              <div className="p-8 pt-4 flex-1">
                <span className="w-14 h-14 rounded-2xl bg-surface-tint flex items-center justify-center text-primary mb-5 -mt-12 relative ring-4 ring-card-white shadow-brand-sm">
                  <CareBellIcon className="w-8 h-8" />
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Our Mission
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                  Mungale Eye Hospital is committed to providing the highest standard
                  of eye care, ensuring that every patient, regardless of their
                  background, receives world-class treatment. Our goal is to enhance
                  the quality of life for all our patients through advanced
                  diagnostics, expert medical intervention, and cutting-edge surgical
                  procedures. MEH is a referral center for complex cases of cornea and
                  glaucoma, providing quality eye care at affordable prices.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-3xl overflow-hidden shadow-sm ring-1 ring-border-light/50 hover:shadow-brand-md hover:-translate-y-1 transition-all duration-200 bg-card-white flex flex-col">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/images/IMG_2239-jpg.webp"
                  alt="Advanced eye-scan diagnostics at Mungale Eye Hospital"
                  width={800}
                  height={420}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-primary-container/15 mix-blend-multiply pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-card-white via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
              <div className="p-8 pt-4 flex-1">
                <span className="w-14 h-14 rounded-2xl bg-surface-tint flex items-center justify-center text-primary mb-5 -mt-12 relative ring-4 ring-card-white shadow-brand-sm">
                  <MicroscopeIcon className="w-8 h-8" />
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Our Expertise
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                  The hospital is equipped with a full range of state-of-the-art
                  diagnostic, curative, and surgical equipment designed to treat a wide
                  variety of eye diseases. We specialize in various ophthalmological
                  fields, offering treatments in subspecialties such as cornea, retina,
                  glaucoma, cataract. This approach of offering specialized eye care is
                  a relatively new concept in India, and we pride ourselves on leading
                  the way.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Facility strip (visually verified real clinic photos) ──────────────
const facilityPhotos = [
  {
    src: "/images/11-jpg.webp",
    alt: "Eye examination underway at Mungale Eye Hospital",
  },
  {
    src: "/images/30-jpg.webp",
    alt: "Computerised eye testing at Mungale Eye Hospital",
  },
  {
    src: "/images/IMG_0887-jpg.webp",
    alt: "YAG laser procedure at Mungale Eye Hospital",
  },
];

export function FacilityStrip() {
  return (
    <section className="py-space-2xl bg-card-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionHeader
            eyebrow="Our Facility"
            title="Inside The Hospital"
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {facilityPhotos.map((p, i) => (
            <Reveal key={p.src} delay={0.07 * i} className="h-full">
              <div className="relative rounded-3xl overflow-hidden shadow-brand-sm ring-1 ring-secondary/10 h-72 sm:h-80 group">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={512}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-primary-container/15 mix-blend-multiply pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-secondary/45 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
