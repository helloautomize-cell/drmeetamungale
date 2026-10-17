import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
import { bookingHref } from "@/lib/booking-links";

// ─── Pristine 5.0 (widefield fundus camera) — quiet-luxury USP band ────
// Sits directly after "Why Mungale". Image slot renders only when a file
// exists at /images/home/pristine-fundus-camera.webp — until then the
// section is text-only (no empty box).
// The committed image is a doctor-approved ILLUSTRATIVE placeholder
// (consented until PRISTINE_IMAGE_ILLUSTRATIVE_UNTIL) — it is captioned
// "Illustrative image" and the alt text does not claim it is the
// installed device.
// TODO(doctor): confirm these three features match the unit installed.

export const PRISTINE_BADGE = "First installation in Vadodara";

// TODO(agency): replace with a real photo of the installed device and
// delete the "Illustrative image" caption + this constant.
export const PRISTINE_IMAGE_ILLUSTRATIVE_UNTIL = "2026-10-27";

const PRISTINE_IMG = "/images/home/pristine-fundus-camera.webp";

const BULLETS = [
  "20-megapixel high-resolution imaging",
  "Wide field of view that reaches the peripheral retina",
  "A patient report you can scan and keep",
];

export function PristineDevice() {
  const imgOnDisk = fs.existsSync(
    path.join(process.cwd(), "public", PRISTINE_IMG)
  );

  return (
    <section className="bg-porcelain border-t border-line">
      <div className="mx-auto max-w-site px-6 py-[88px] lg:px-gutter lg:py-24">
        <div
          className={
            imgOnDisk
              ? "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
              : "max-w-2xl"
          }
        >
          <Reveal className="min-w-0">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-red-strong">
              New at Mungale Eye Hospital
            </p>
            <h2 className="mt-4 font-display-hero text-ink tracking-[-0.015em] leading-[1.05] text-[36px] sm:text-[44px] lg:text-[54px]">
              A wider view of the back of your eye.
            </h2>
            <p className="mt-5 text-[16px] lg:text-[17px] leading-relaxed text-ink-soft">
              Mungale Eye Hospital now offers the Pristine 5.0 widefield
              fundus camera by Remidio. In a few seconds it captures a
              high-resolution colour image of the retina, the
              light-sensitive layer at the back of the eye, covering a
              wider area than a standard fundus camera. This helps your
              doctor examine the retina and explain the findings to you on
              screen.
            </p>
            <ul className="mt-6 space-y-2.5">
              {BULLETS.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-brand-red"
                  />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-primary-fixed ring-1 ring-primary/20">
                {PRISTINE_BADGE}
              </span>
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href={bookingHref()}
                className="inline-flex h-12 px-7 items-center gap-2 rounded-full bg-primary text-white text-[15px] font-semibold shadow-[0_1px_3px_rgba(14,17,22,0.28)] hover:bg-primary-fixed transition-colors duration-200"
              >
                Book an eye check-up
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/blog/diabetic-retinopathy-symptoms-screening-stages-treatment/"
                className="cta-quiet group inline-flex items-center gap-1.5 h-12 px-1 text-[15px] font-semibold text-ink"
              >
                <span className="cta-quiet-text">
                  Read about diabetic retinopathy
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="w-4 h-4 text-brand-red-strong transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>

          {imgOnDisk && (
            <Reveal delay={0.08} className="min-w-0">
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] ring-1 ring-secondary/[0.08]">
                  <Image
                    src={PRISTINE_IMG}
                    alt="Illustration of a widefield retinal imaging consultation"
                    fill
                    sizes="(min-width: 1024px) 50vw, 90vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-[12px] text-ink-soft">
                  Illustrative image
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
