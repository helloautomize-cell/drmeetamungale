"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Star, Clock, Eye } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { BrandArc } from "@/components/ui/BrandArc";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { siteConfig } from "@/content/site";
import { reviews } from "@/content/reviews";

// ─── Hero (Phase 2 — flagship spec §4.2, "From blur to clarity") ──────
// 100svh editorial split. Load ≈1.6s (content interactive immediately):
// eyebrow → masked headline lines → BrandArc draws under "seen" → media
// does the focus pull (aperture clip-path opens + blur/scale settle —
// blur desktop-only) → lede, specialty line, doctor chip, CTAs, rating.
// Pinned scroll scene (desktop ≥1024px, ~100vh scrub): media expands
// from its column to near full-bleed (radius→0, ink scrim in), copy lifts
// away, and the three published stats rise onto the image in porcelain
// with scrub-driven count-up — replacing the old overlapping stat card.
// Mobile/reduced-motion: static stacked layout + plain stat strip below.
// All copy, numbers, photos, links VERBATIM from existing content —
// nothing invented. No clinic video exists → still image (spec TODO).

const GOOGLE_URL =
  "https://www.google.com/search?q=Mungale+Eye+Hospital+Vadodara+reviews";

const STATS = [
  { count: 20, suffix: "+", label: "Years of specialist eye care" },
  { count: 40000, suffix: "+", label: "Patients treated" },
  { count: 15000, suffix: "+", label: "Eye surgeries" },
];

const SPECIALTIES = ["Cornea", "Glaucoma", "Cataract", "Optical & Contact Lenses"];

export function Hero() {
  const heroRef = React.useRef<HTMLElement>(null);
  const mediaRef = React.useRef<HTMLDivElement>(null);
  const cardARef = React.useRef<HTMLDivElement>(null);
  const cardBRef = React.useRef<HTMLDivElement>(null);
  const [reduced] = React.useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [desktopScene, setDesktopScene] = React.useState(false);

  const googleAvg =
    reviews.reduce((s, r) => s + r.rating, 0) / Math.max(reviews.length, 1);

  // ── Load sequence + pinned scroll scene ─────────────────────────────
  useGSAP(
    () => {
      const root = heroRef.current;
      if (!root) return;

      if (reduced) {
        // Static: everything simply visible.
        gsap.set("[data-hero]", { clearProps: "all" });
        setDesktopScene(false);
        return;
      }

      // Initial hidden states live here (never in CSS) so SSR/no-JS
      // output is fully visible.
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      gsap.set("[data-hero='eyebrow'],[data-hero='lede'],[data-hero='spec'],[data-hero='chip'],[data-hero='ctas'],[data-hero='rating'],[data-hero='trust']", {
        autoAlpha: 0,
        y: 18,
      });
      gsap.set("[data-hero-line]", { yPercent: 115 });
      gsap.set("[data-hero-media]", { clipPath: "circle(16% at 62% 45%)" });
      gsap.set("[data-hero-img]", {
        scale: 1.15,
        filter: isDesktop ? "blur(14px)" : "blur(0px)",
      });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to("[data-hero='eyebrow']", { autoAlpha: 1, y: 0, duration: 0.55 }, 0.05)
        .to("[data-hero-line]", { yPercent: 0, duration: 0.9, stagger: 0.09 }, 0.15)
        .to(
          "[data-hero-media]",
          { clipPath: "circle(140% at 62% 45%)", duration: 1.1, ease: "power2.inOut" },
          0.25
        )
        .to("[data-hero-img]", { scale: 1, filter: "blur(0px)", duration: 1.2 }, 0.25)
        .to("[data-hero='lede']", { autoAlpha: 1, y: 0, duration: 0.6 }, 0.7)
        .to("[data-hero='spec']", { autoAlpha: 1, y: 0, duration: 0.6 }, 0.8)
        .to("[data-hero='chip']", { autoAlpha: 1, y: 0, duration: 0.55 }, 0.9)
        .to("[data-hero='ctas']", { autoAlpha: 1, y: 0, duration: 0.55 }, 1.0)
        .to("[data-hero='rating'],[data-hero='trust']", { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 }, 1.1);

      // Pinned expansion scene — desktop only, honours no-preference.
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        setDesktopScene(true);
        const stats = gsap.utils.toArray<HTMLElement>("[data-hero-stat]");
        const statObjs = stats.map((el) => ({
          el,
          obj: { v: 0 },
          target: Number(el.dataset["count"] || 0),
          suffix: el.dataset["suffix"] || "",
        }));

        const scene = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
          defaults: { ease: "none" },
        });
        scene
          // media column grows toward full-bleed, corners square off
          .to(
            mediaRef.current,
            { scale: 2.15, xPercent: -48, transformOrigin: "78% 50%", duration: 1 },
            0
          )
          .to("[data-hero-media-inner]", { borderRadius: "0px", duration: 1 }, 0)
          .to("[data-hero-left]", { y: -110, autoAlpha: 0, duration: 0.55, ease: "power2.in" }, 0)
          .to("[data-hero-scrim]", { autoAlpha: 0.62, duration: 0.7 }, 0.1)
          .to("[data-hero-cards]", { autoAlpha: 0, duration: 0.25 }, 0.05)
          .fromTo(
            "[data-hero-stats]",
            { autoAlpha: 0, y: 56 },
            { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" },
            0.55
          );
        // Scrub-linked counters
        statObjs.forEach(({ el, obj, target, suffix }) => {
          scene.to(
            obj,
            {
              v: target,
              duration: 0.4,
              ease: "power1.out",
              onUpdate: () => {
                el.textContent =
                  Math.round(obj.v).toLocaleString("en-IN") + suffix;
              },
            },
            0.6
          );
        });
        return () => setDesktopScene(false);
      });

      return () => mm.revert();
    },
    { scope: heroRef, dependencies: [reduced] }
  );

  // Floating glass cards — mouse parallax, max ~10px, desktop only.
  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduced || e.pointerType !== "mouse") return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width; // -0.5..0.5
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    const cards = [
      { el: cardARef.current, f: 16 },
      { el: cardBRef.current, f: 10 },
    ];
    cards.forEach(({ el, f }) => {
      if (!el) return;
      el.style.transform = `translate(${(-dx * f).toFixed(1)}px, ${(-dy * f).toFixed(1)}px)`;
    });
  };

  return (
    <>
      <section
        ref={heroRef}
        onPointerMove={onPointerMove}
        className="relative w-full bg-background overflow-x-clip lg:h-[100svh] lg:min-h-[720px]"
      >
        <div className="max-w-site mx-auto px-6 lg:px-gutter pt-4 lg:pt-0 lg:h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 lg:h-full lg:items-center">
            {/* LEFT — quiet editorial column */}
            <div data-hero-left className="lg:col-span-6 lg:pt-3 relative z-10">
              <p
                data-hero="eyebrow"
                className="text-[11.5px] lg:text-[12.5px] font-semibold uppercase tracking-[0.16em] text-ink/70"
              >
                Mungale Eye Hospital · Kothi, Vadodara · Since 2007
              </p>

              {/* Masked line reveals — each line in an overflow-hidden
                  wrapper, inner slides 115% → 0. "seen" is the italic
                  serif accent in display-size brand red. */}
              <h1 className="mt-5 font-display-hero text-ink tracking-[-0.02em] text-[52px] sm:text-[66px] lg:text-[76px] xl:text-[86px] leading-[0.98]">
                <span className="block overflow-hidden pb-1">
                  <span data-hero-line className="block">
                    You are{" "}
                    <span className="relative inline-block">
                      <em className="italic text-brand-red">seen</em>
                      <BrandArc
                        immediate
                        delay={700}
                        duration={900}
                        className="absolute left-[18%] w-[64%] -bottom-[10px] h-[8px]"
                      />
                    </span>
                  </span>
                </span>
                <span className="block overflow-hidden pb-2">
                  <span data-hero-line className="block">
                    here.
                  </span>
                </span>
              </h1>

              <p
                data-hero="lede"
                className="mt-6 text-[18px] lg:text-[19px] leading-[1.6] text-ink-soft max-w-xl"
              >
                Specialist eye care built around careful diagnosis, honest
                conversations and knowing what comes next.
              </p>

              {/* Specialty line — tiny red dot separators */}
              <p
                data-hero="spec"
                className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/55"
              >
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

              {/* Doctor credibility — quiet two-line block, never a card */}
              <div data-hero="chip" className="mt-7 flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  <Image
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-background"
                    src="/images/doctors/DrMeeta-2.webp"
                    alt="Dr. Meeta Mungale, MS Ophthalmology, DNB"
                    width={36}
                    height={36}
                  />
                  <Image
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-background"
                    src="/images/doctors/Dr-Sachin.jpg"
                    alt="Dr. Sachin Mungale, MS Ophthalmology"
                    width={36}
                    height={36}
                  />
                </div>
                <div>
                  <p className="text-[14.5px] leading-snug text-ink-soft">
                    Led by{" "}
                    <span className="text-ink font-semibold">
                      Dr. Sachin &amp; Dr. Meeta Mungale
                    </span>
                  </p>
                  <p className="mt-0.5 text-[13px] leading-snug text-ink-soft">
                    Specialist ophthalmologists · MS Ophthalmology · DNB
                  </p>
                </div>
              </div>

              {/* CTA row: magnetic primary + quiet secondary + call link */}
              <div
                data-hero="ctas"
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
              >
                <MagneticButton>
                  <Button
                    asChild
                    variant="primary"
                    className="h-12 px-7 rounded-full shadow-[0_1px_3px_rgba(14,17,22,0.18)]"
                  >
                    <Link href="/contact-us/">Book a consultation</Link>
                  </Button>
                </MagneticButton>
                <Link
                  href="/about-us/"
                  className="cta-quiet group inline-flex items-center gap-1.5 h-12 px-1 text-[15px] font-semibold text-ink"
                >
                  <span className="cta-quiet-text">Meet the doctors</span>
                  <ArrowRight className="w-4 h-4 text-brand-red-strong transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <a
                  href={"tel:" + siteConfig.phone.replace(/[\s-]/g, "")}
                  className="inline-flex items-center gap-1.5 h-12 text-[14px] font-medium text-ink-soft hover:text-brand-red-strong transition-colors duration-200"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </div>

              {/* Google rating chip — computed from the six verbatim 5★
                  reviews in content/reviews.ts; links to Google search. */}
              <a
                data-hero="rating"
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-paper ring-1 ring-line pl-2 pr-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-200 w-fit"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-star-gold/15">
                  <Star
                    className="w-3.5 h-3.5 text-star-gold fill-star-gold"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-[13px] text-ink-soft">
                  <span className="font-bold text-ink tabular-nums">
                    {googleAvg.toFixed(1)}
                  </span>{" "}
                  on Google · {reviews.length} reviews
                </span>
              </a>

              <p
                data-hero="trust"
                className="mt-5 text-[13px] text-ink-soft"
              >
                Since 2007 · Kothi, Vadodara
              </p>
            </div>

            {/* RIGHT — real photograph; on desktop this column scales to
                near full-bleed in the pinned scene. */}
            <div className="lg:col-span-6 relative z-0">
              <div
                ref={mediaRef}
                data-hero-media
                className="relative h-[360px] sm:h-[440px] lg:h-[480px] xl:h-[500px] will-change-transform"
              >
                <div
                  data-hero-media-inner
                  className="absolute inset-0 overflow-hidden rounded-media ring-1 ring-line"
                >
                  <Image
                    data-hero-img
                    src="/images/IMG_21301-jpg.webp"
                    alt="A doctor performing a slit-lamp eye examination on a patient at Mungale Eye Hospital, assisted by a staff member."
                    priority
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-[65%_28%] contrast-[1.03]"
                  />
                  {/* Ink scrim — fades in only during the pinned scene */}
                  <div
                    data-hero-scrim
                    className="absolute inset-0 bg-ink-navy opacity-0"
                    aria-hidden="true"
                  />
                  {/* Floating glass cards — desktop, mouse parallax */}
                  <div
                    data-hero-cards
                    className="hidden lg:block absolute inset-0 pointer-events-none"
                    aria-hidden="true"
                  >
                    <div
                      ref={cardARef}
                      className="absolute top-6 left-6 flex items-center gap-2.5 rounded-full bg-paper/80 backdrop-blur-md ring-1 ring-white/40 px-4 py-2.5 shadow-sm"
                    >
                      <Clock className="w-4 h-4 text-brand-red-strong" />
                      <span className="text-[12.5px] font-semibold text-ink">
                        Mon–Sat · 9 AM – 8 PM
                      </span>
                    </div>
                    <div
                      ref={cardBRef}
                      className="absolute bottom-6 right-6 flex items-center gap-2.5 rounded-full bg-paper/80 backdrop-blur-md ring-1 ring-white/40 px-4 py-2.5 shadow-sm"
                    >
                      <Eye className="w-4 h-4 text-brand-red-strong" />
                      <span className="text-[12.5px] font-semibold text-ink">
                        Referral centre for cornea &amp; glaucoma cases
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats overlay — rises onto the expanded image during the pinned
            scene. Porcelain numerals, never red. Hidden until the scene
            brings them in; aria-hidden so SRs use the strip below. */}
        <div
          data-hero-stats
          className="pointer-events-none absolute inset-0 hidden lg:flex items-end pb-16 opacity-0"
          aria-hidden="true"
        >
          <div className="max-w-site mx-auto px-12 w-full">
            <div className="grid grid-cols-3 gap-8 max-w-3xl">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display-hero text-porcelain leading-none tracking-tight text-[52px] lg:text-[64px] tabular-nums">
                    <span
                      data-hero-stat
                      data-count={s.count}
                      data-suffix={s.suffix}
                    >
                      0{s.suffix}
                    </span>
                  </p>
                  <p className="mt-2 text-[13.5px] text-porcelain/70">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stat strip — mobile & reduced-motion fallback (the pinned scene
          carries stats on desktop). Plain card, no overlap. */}
      <div
        className={
          "max-w-site mx-auto px-6 mt-10 " + (desktopScene ? "lg:hidden" : "")
        }
      >
        <div className="grid grid-cols-3 divide-x divide-line rounded-[18px] bg-paper ring-1 ring-line">
          {STATS.map((s) => (
            <div key={s.label} className="px-3 sm:px-6 py-5 sm:py-6 text-center">
              <p className="font-display-hero text-ink leading-none tracking-tight text-[26px] sm:text-[36px] lg:text-[42px] tabular-nums">
                {s.count.toLocaleString("en-IN") + s.suffix}
              </p>
              <p className="mt-1.5 text-[11px] sm:text-[13px] leading-snug text-ink-soft">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
