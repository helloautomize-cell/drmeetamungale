import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import { ArtImage } from "@/components/ui/ArtImage";
import { BrandArc } from "@/components/ui/BrandArc";
import { IMG } from "@/lib/images";
import { siteConfig } from "@/content/site";
import { reviews } from "@/content/reviews";

// ─── Hero (quiet-luxury reset, spec §5.2) — static, dark, full-bleed.
// The generated iris artwork fills the section; a left gradient keeps
// porcelain type readable. Load motion is deliberately minimal: text
// block fades up once (700ms); image fades from 0.001 with a slow
// 1.03→1 settle (1600ms). No pin, no scroll scene, no floating chips.
// Copy unchanged; stats no longer appear here (they live once, in the
// Why Mungale band).

const SPECIALTIES = ["Cornea", "Glaucoma", "Cataract", "Optical & Contact Lenses"];
const GOOGLE_URL =
  "https://www.google.com/search?q=Mungale+Eye+Hospital+Vadodara+reviews";

export function Hero() {
  const googleAvg =
    reviews.reduce((s, r) => s + r.rating, 0) / Math.max(reviews.length, 1);

  return (
    <section className="relative bg-ink overflow-hidden -mt-[100px] lg:-mt-[136px]">
      {/* Preload the LCP artwork — React hoists these links into <head>. */}
      <link
        rel="preload" as="image" type="image/avif"
        href="/images/mungale/hero-iris-mobile.avif"
        media="(max-width: 767px)"
        fetchPriority="high"
      />
      <link
        rel="preload" as="image" type="image/avif"
        href="/images/mungale/hero-iris-desktop.avif"
        media="(min-width: 768px)"
        fetchPriority="high"
      />
      {/* Full-bleed generated iris artwork — pre-optimised multi-format,
          priority for LCP. Desktop: iris right, dark field left for the
          text; mobile: iris low, dark field on top. */}
      {/* bottom-[4%] keeps the image from being exactly viewport-sized, so
          Chrome counts it as an LCP candidate instead of a background.
          The shave lands in the dark vignette — invisible. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 bottom-[4%] animate-hero-img"
      >
        <ArtImage
          d={IMG.heroIris.d}
          m={IMG.heroIris.m}
          alt=""
          priority
          className="h-full w-full"
          imgClassName="h-full w-full object-cover object-[center_bottom] md:object-[right_center]"
        />
      </div>

      {/* Legibility gradient — heavy ink on the text side, clearing to
          the artwork. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,17,22,0.9)_0%,rgba(14,17,22,0.4)_55%,rgba(14,17,22,0)_80%)] md:bg-[linear-gradient(90deg,rgba(14,17,22,0.92)_0%,rgba(14,17,22,0.55)_42%,rgba(14,17,22,0)_68%)]"
      />

      {/* Text — top-anchored on mobile (iris sits below), vertically
          centred on desktop, clearing the fixed nav. */}
      <div
        className="animate-hero-copy relative z-10 mx-auto max-w-site px-6 lg:px-gutter min-h-[100svh] lg:min-h-[760px] lg:max-h-[1040px] flex flex-col justify-start pt-[132px] md:justify-center md:pt-[140px] md:pb-16"
      >
        <div className="max-w-[620px]">
          <p className="text-[11.5px] lg:text-[12.5px] font-semibold uppercase tracking-[0.16em] text-porcelain/70">
            Mungale Eye Hospital · Kothi, Vadodara · Since 2007
          </p>

          <h1 className="mt-5 font-display-hero text-porcelain tracking-[-0.02em] text-[46px] sm:text-[60px] lg:text-[76px] xl:text-[84px] leading-[0.98]">
            You are{" "}
            <span className="relative inline-block">
              <em className="italic text-brand-red">seen</em>
              <BrandArc className="absolute left-[16%] w-[68%] -bottom-[10px] h-[9px]" />
            </span>{" "}
            here.
          </h1>

          <p className="mt-6 text-[18px] lg:text-[19px] leading-[1.6] text-porcelain/80">
            Specialist eye care built around careful diagnosis, honest
            conversations and knowing what comes next.
          </p>

          {/* Specialty line — tiny red dot separators */}
          <p className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.14em] text-porcelain/60">
            {SPECIALTIES.map((s, i) => (
              <React.Fragment key={s}>
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="w-[5px] h-[5px] rounded-full bg-brand-red"
                  />
                )}
                {s}
              </React.Fragment>
            ))}
          </p>

          {/* Doctor credibility — quiet two-line block on dark */}
          <div className="mt-7 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              <Image
                className="w-9 h-9 rounded-full object-cover ring-2 ring-ink"
                src="/images/doctors/DrMeeta-2.webp"
                alt="Dr. Meeta Mungale, MS Ophthalmology, DNB"
                width={36}
                height={36}
              />
              <Image
                className="w-9 h-9 rounded-full object-cover ring-2 ring-ink"
                src="/images/doctors/Dr-Sachin.jpg"
                alt="Dr. Sachin Mungale, MS Ophthalmology"
                width={36}
                height={36}
              />
            </div>
            <div>
              <p className="text-[14.5px] leading-snug text-porcelain/80">
                Led by{" "}
                <span className="text-porcelain font-semibold">
                  Dr. Sachin &amp; Dr. Meeta Mungale
                </span>
              </p>
              <p className="mt-0.5 text-[13px] leading-snug text-porcelain/60">
                Specialist ophthalmologists · MS Ophthalmology · DNB
              </p>
            </div>
          </div>

          {/* CTAs — red pill + porcelain text link + quiet call link */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/contact-us/"
              className="inline-flex h-12 px-7 items-center gap-2 rounded-full bg-primary text-white text-[15px] font-semibold shadow-[0_1px_3px_rgba(14,17,22,0.28)] hover:bg-primary-fixed transition-colors duration-200"
            >
              Book a consultation
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/about-us/"
              className="cta-quiet group inline-flex items-center gap-1.5 h-12 px-1 text-[15px] font-semibold text-porcelain"
            >
              <span className="cta-quiet-text">Meet the doctors</span>
              <ArrowRight className="w-4 h-4 text-brand-red transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a
              href={"tel:" + siteConfig.phone.replace(/[\s-]/g, "")}
              className="inline-flex items-center gap-1.5 h-12 text-[14px] font-medium text-porcelain/70 hover:text-porcelain transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>

          {/* Google rating chip — dark-styled translucent glass */}
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] ring-1 ring-white/[0.14] pl-2 pr-4 py-2 hover:bg-white/[0.12] transition-colors duration-200 w-fit"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-star-gold/15">
              <Star
                className="w-3.5 h-3.5 text-star-gold fill-star-gold"
                aria-hidden="true"
              />
            </span>
            <span className="text-[13px] text-porcelain/70">
              <span className="font-bold text-porcelain tabular-nums">
                {googleAvg.toFixed(1)}
              </span>{" "}
              on Google · {reviews.length} reviews
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
