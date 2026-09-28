import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CONTACT_HERO_SRC,
  contactDirectionsUrl,
  telOf,
  contactPhones,
  visitPrepItems,
} from "@/content/contact";
import { ContactBookingForm } from "@/components/sections/ContactBookingForm";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, canonical } from "@/content/seo";
import { Reveal } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a consultation, call the team, or find Mungale Eye Hospital in Kothi, Vadodara — address, hours, map and what happens next.",
  alternates: { canonical: canonical("/contact-us/") },
};

// ─── /contact-us/ — concierge, not a form ─────────────────────────────────
// Intent-first: hero (book/call/find) → action navigator → stepped booking
// form → after-submit → emergency → visit + map → before-visit → contact
// strip → footer. All facts verbatim live source; QR file used as the
// scan-to-navigate utility it is; hero uses the verified team photograph.
export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact-us/" },
        ])}
      />

      {/* ── 01 · Hero ── */}
      <section className="bg-background overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-4 lg:pt-6 pb-12 lg:pb-16">
          <nav aria-label="Breadcrumb">
            <p className="font-body-md text-body-md text-on-surface-variant">
              <Link href="/" className="hover:text-on-surface transition-colors">Home</Link>
              <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
              <span aria-current="page" className="text-on-surface">Contact</span>
            </p>
          </nav>
          <div className="mt-6 lg:mt-8 grid gap-10 lg:gap-14 lg:grid-cols-12 items-center">
            <Reveal className="lg:col-span-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                Get in touch
              </p>
              <h1 className="mt-3 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.04] text-[40px] sm:text-[52px] lg:text-[60px]">
                Let&rsquo;s get you started.
              </h1>
              <p className="mt-5 max-w-[48ch] font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Whether you&rsquo;re ready to book, need directions, or simply
                have a question, we&rsquo;re here to help.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary font-semibold text-[15px] px-6 py-3 rounded-full hover:bg-primary-fixed transition-colors min-h-[44px]"
                >
                  Book a consultation
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href={telOf(contactPhones.main)}
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
                >
                  <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                    Call us
                  </span>
                  <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
                </a>
                <a
                  href={contactDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
                >
                  <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                    Get directions
                  </span>
                  <span aria-hidden="true" className="text-primary-fixed">↗</span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
                <Image
                  src={CONTACT_HERO_SRC}
                  alt="The Mungale Eye Hospital team — doctors and staff at the Kothi, Vadodara hospital"
                  width={900}
                  height={675}
                  priority
                  sizes="(min-width: 1024px) 46vw, 90vw"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[460px] object-cover"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-6">
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                  Mungale Eye Hospital
                </p>
                <p className="text-[13px] text-on-surface-variant text-right">
                  Kothi · Vadodara
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 02 · Action navigator ── */}
      <section aria-label="How can we help" className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pb-14 lg:pb-20">
          <Reveal>
            <h2 className="font-display-hero text-on-surface tracking-tight text-[28px] sm:text-[36px] leading-[1.1]">
              How can we help?
            </h2>
            <div className="mt-6 border-t border-secondary/10">
              {[
                { n: "01", t: "Book a consultation", d: "Request a consultation with the hospital.", cta: "Start booking", href: "#book", external: false },
                { n: "02", t: "Talk to the team", d: "Call the hospital directly.", cta: contactPhones.main, href: telOf(contactPhones.main), external: false },
                { n: "03", t: "Find the hospital", d: "See the address and get directions.", cta: "Get directions", href: "#visit", external: false },
              ].map((a) => (
                <a
                  key={a.n}
                  href={a.href}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 sm:gap-8 border-b border-secondary/10 py-6"
                >
                  <span aria-hidden="true" className="font-display-hero text-[15px] text-primary-fixed w-8">
                    {a.n}
                  </span>
                  <span>
                    <span className="block font-display-hero text-[24px] sm:text-[30px] tracking-tight text-on-surface">
                      {a.t}
                    </span>
                    <span className="mt-1 block text-[14px] text-on-surface-variant">{a.d}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface whitespace-nowrap">
                    <span className="hidden sm:inline border-b-2 border-transparent pb-0.5 group-hover:border-primary transition-colors">
                      {a.cta}
                    </span>
                    <span aria-hidden="true" className="text-primary-fixed group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <span aria-hidden="true" className="col-span-3 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 03 · Booking form ── */}
      <section id="book" aria-label="Book a consultation" className="bg-surface-canvas/60 border-y border-secondary/10 scroll-mt-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                  Book a consultation
                </p>
                <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[32px] sm:text-[44px] leading-[1.06]">
                  Tell us how we can help.
                </h2>
                <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Share a few details and the Mungale team can follow up
                  regarding your consultation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7">
              <ContactBookingForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 04 · After you submit ── */}
      <section aria-label="After you submit" className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              After you submit
            </p>
            <ol className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-0">
              {[
                { n: "01", t: "Request received" },
                { n: "02", t: "Our team reviews your details" },
                { n: "03", t: "We contact you regarding the consultation" },
              ].map((s) => (
                <li key={s.n} className="relative sm:px-8 first:pl-0 last:pr-0">
                  <span aria-hidden="true" className="hidden sm:block absolute top-[22px] left-0 right-0 h-px bg-secondary/15" />
                  <span aria-hidden="true" className="relative inline-flex w-[44px] h-[44px] items-center justify-center rounded-full bg-background ring-1 ring-secondary/20 font-display-hero text-[16px] text-on-surface">
                    {s.n}
                  </span>
                  <p className="mt-4 font-display-hero text-[19px] lg:text-[21px] tracking-tight text-on-surface leading-snug">
                    {s.t}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ── 05 · Emergency ── */}
      <section aria-label="Urgent help" className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pb-14 lg:pb-20">
          <Reveal>
            <div className="border-t border-secondary/10 pt-10 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12">
              <div className="flex-1">
                <p className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                  <span aria-hidden="true" className="w-2 h-2 rounded-full bg-primary" />
                  Need urgent help?
                </p>
                <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[28px] sm:text-[36px] leading-[1.1]">
                  Call the hospital directly.
                </h2>
              </div>
              <div className="flex flex-col gap-2">
                {contactPhones.emergency.map((num) => (
                  <a
                    key={num}
                    href={telOf(num)}
                    className="font-display-hero text-[24px] sm:text-[28px] tracking-tight text-on-surface hover:text-primary-fixed transition-colors"
                  >
                    {num}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 06 · Visit (shared module — same as homepage) ── */}
      <LocationBlock />

      {/* ── 07 · Before you visit ── */}
      <section aria-label="Before you visit" className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                Before you visit
              </p>
              <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[28px] sm:text-[36px] leading-[1.1]">
                Bring what helps your doctor understand your eye-care history.
              </h2>
              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2">
                <Link
                  href="/insurance-cashless/"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
                >
                  <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                    Insurance & Cashless
                  </span>
                  <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
                </Link>
                <Link
                  href="/faqs/"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
                >
                  <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                    FAQs
                  </span>
                  <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="border-t border-secondary/10">
                {visitPrepItems.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-4 border-b border-secondary/10 py-4">
                    <span aria-hidden="true" className="font-bold text-[16px] text-primary-fixed shrink-0">✓</span>
                    <span className="font-body-md text-body-md text-on-surface">{item}</span>
                    <span aria-hidden="true" className="ml-auto font-display-hero text-[13px] text-on-surface-variant shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 08 · Contact strip ── */}
      <section aria-label="Direct contact options" className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <Reveal>
            <dl className="grid sm:grid-cols-3 gap-8 border-t border-secondary/10 pt-8">
              <div>
                <dt className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Phone</dt>
                <dd className="mt-2">
                  <a href={telOf(contactPhones.main)} className="font-display-hero text-[20px] lg:text-[22px] tracking-tight text-on-surface hover:text-primary-fixed transition-colors">
                    {contactPhones.main}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Email</dt>
                <dd className="mt-2">
                  <a href={"mailto:" + contactPhones.email} className="font-display-hero text-[20px] lg:text-[22px] tracking-tight text-on-surface hover:text-primary-fixed transition-colors break-all">
                    {contactPhones.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Location</dt>
                <dd className="mt-2">
                  <a href={contactDirectionsUrl()} target="_blank" rel="noopener noreferrer" className="font-display-hero text-[20px] lg:text-[22px] tracking-tight text-on-surface hover:text-primary-fixed transition-colors">
                    Kothi, Vadodara
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
