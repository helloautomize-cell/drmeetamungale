import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctors, type Doctor } from "@/content/doctors";
import { ArtImage } from "@/components/ui/ArtImage";
import { Reveal } from "@/components/ui/motion";
import { REAL, type ImgSet } from "@/lib/images";

// ─── Doctors — two equal editorial cards (human-touch pass) ─────────────
// Replaces the click-to-switch scene on the homepage (that component
// lives on as DoctorsExperience.tsx for the About page). Both doctors get
// identical weight: 4:5 portrait, name, credential pills, 2-line bio,
// "Meet Dr. …" and "Book with this doctor". No numerals. Server Component.
// Copy: names, credentials and descriptions VERBATIM from content/doctors.ts.
//
// PORTRAITS — one line per doctor. Dr. Meeta's is the interim desk photo;
// swap `REAL.meeta` for the proper portrait when it arrives
// (TODO: photo wanted from hospital).
const PORTRAIT: Record<string, { img: ImgSet; pos: string; alt: string }> = {
  "dr-sachin-mungale": {
    img: REAL.sachin,
    pos: "object-[50%_30%]",
    alt: "Dr. Sachin Mungale at the slit lamp",
  },
  "dr-meeta-mungale": {
    img: REAL.meeta,
    pos: "object-[50%_20%]",
    alt: "Dr. Meeta Mungale writing at her desk",
  },
};

function DoctorCard({ doctor, delay }: { doctor: Doctor; delay: number }) {
  const firstName = doctor.name.replace("Dr. ", "").split(" ")[0];
  const credentials = doctor.title.split(",").map((c) => c.trim());
  const portrait = PORTRAIT[doctor.slug]!;
  return (
    <Reveal delay={delay} className="min-w-0">
      <article className="flex h-full flex-col">
        <div className="group overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
          <ArtImage
            d={portrait.img.d}
            alt={portrait.alt}
            sizes="(min-width: 1024px) 520px, (min-width: 640px) 45vw, 90vw"
            className="aspect-[4/5] w-full"
            imgClassName={
              "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none " +
              portrait.pos
            }
          />
        </div>
        <h3 className="mt-6 font-display-hero text-on-surface tracking-tight leading-tight text-[28px] lg:text-[34px]">
          {doctor.name}
        </h3>
        <ul aria-label="Qualifications" className="mt-3 flex flex-wrap gap-2">
          {credentials.map((c) => (
            <li
              key={c}
              className="rounded-full ring-1 ring-line bg-paper px-3 py-1 text-[12.5px] font-semibold text-ink-soft"
            >
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[15.5px] lg:text-[16.5px] leading-relaxed text-on-surface-variant line-clamp-2 max-w-[46ch]">
          {doctor.description}
        </p>
        <div className="mt-auto pt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
          <Link
            href="/about-us/"
            className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
          >
            <span className="cta-quiet-text">Meet Dr. {firstName}</span>
            <ArrowRight
              aria-hidden="true"
              className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          {/* TODO: pre-select doctor on the booking form once the contact
              form supports a ?doctor= param — passed harmlessly today. */}
          <Link
            href={"/contact-us/?doctor=" + doctor.slug}
            className="cta-quiet group inline-flex items-center gap-2 text-[14px] font-medium text-on-surface-variant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
          >
            <span className="cta-quiet-text">Book with this doctor</span>
            <ArrowRight
              aria-hidden="true"
              className="w-3.5 h-3.5 text-primary transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export function DoctorsStory() {
  return (
    <section id="doctors" className="bg-background scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            The people behind Mungale
          </p>
          <h2 className="mt-4 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[36px] sm:text-[44px] lg:text-[54px]">
            Meet the doctors who care for your vision.
          </h2>
          <p className="mt-4 text-[17px] lg:text-[18px] leading-relaxed text-on-surface-variant">
            Two senior ophthalmologists, one doctor-led practice.
          </p>
        </Reveal>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14 max-w-[1100px]">
          {doctors.map((d, i) => (
            <DoctorCard key={d.slug} doctor={d} delay={i * 0.08} />
          ))}
        </div>

        {/* Closing line — sits directly under the cards; the old ~300px
            dead band came from the switcher's empty grid rows (bug 6). */}
        <Reveal className="mt-12 lg:mt-14 max-w-2xl">
          <div className="border-t border-secondary/10 pt-5 flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <p className="font-display-hero text-on-surface tracking-tight leading-snug text-[19px] lg:text-[20px]">
              Together, they lead Mungale Eye Hospital.
            </p>
            <Link
              href="/about-us/"
              className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
            >
              <span className="cta-quiet-text">About Mungale</span>
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
