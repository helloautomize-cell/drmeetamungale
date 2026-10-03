import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { insuranceFaqs } from "@/content/insurance-faqs";
import {
  INSURANCE_DESK_DISPLAY,
  INSURANCE_DESK_TEL,
  insurancePartners,
  cashlessSteps,
  cashlessChecklist,
  cashlessDefinition,
  patientPayItems,
  coverageAreas,
  fallbackBody,
} from "@/content/insurance";
import { InsuranceFaq } from "@/components/sections/InsuranceFaq";
import { MedicalReviewByline } from "@/components/seo/MedicalReviewByline";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, breadcrumbJsonLd, canonical } from "@/content/seo";
import { Reveal, RevealNow } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Insurance & Cashless",
  description:
    "Cashless eye care, explained clearly — current empanelment, how cashless approval works, what to bring, and the insurance help desk at Mungale Eye Hospital, Vadodara.",
  alternates: { canonical: canonical("/insurance-cashless/") },
};

// ─── /insurance-cashless/ — patient-first insurance guidance ───────────────
// Editorial rebuild: hero → "can I use cashless?" decision → partners rail →
// process timeline → documents checklist → cashless-meaning → coverage index
// → FAQ explorer → fallback reassurance → charcoal help desk → footer.
// Insurer artwork unaltered; Mungale system throughout; no zero-payment
// promises; empanelment-change disclaimer prominent.
export default function InsuranceCashlessPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(insuranceFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: "Insurance & Cashless", href: "/insurance-cashless/" },
        ])}
      />

      {/* ── 01 · Hero ── */}
      <section className="bg-background overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-4 lg:pt-6 pb-12 lg:pb-16">
          <nav aria-label="Breadcrumb">
            <p className="font-body-md text-body-md text-on-surface-variant">
              <Link href="/" className="hover:text-on-surface transition-colors">Home</Link>
              <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
              <span aria-current="page" className="text-on-surface">Insurance & Cashless</span>
            </p>
          </nav>
          <div className="mt-6 lg:mt-8 grid gap-10 lg:gap-14 lg:grid-cols-12 items-center">
            <RevealNow className="lg:col-span-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                Insurance & Cashless
              </p>
              <h1 className="mt-3 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.04] text-[40px] sm:text-[52px] lg:text-[60px]">
                Cashless eye care, explained clearly.
              </h1>
              <p className="mt-5 max-w-[48ch] font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Understand cashless treatment, current empanelment and what to
                prepare before your visit.
              </p>
              <MedicalReviewByline reviewedBy={["sachin", "meeta"]} />
              <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
                <a
                  href="#cashless-process"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary font-semibold text-[15px] px-6 py-3 rounded-full hover:bg-primary-fixed transition-colors min-h-[44px]"
                >
                  Check your cashless eligibility
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href={INSURANCE_DESK_TEL}
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
                >
                  <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                    Call the insurance desk
                  </span>
                  <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
                </a>
              </div>
            </RevealNow>
            <RevealNow delay={0.1} className="lg:col-span-6">
              <div className="overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
                <Image
                  src="/images/insurance/eye-care.jpg"
                  alt="Eye examination at a slit lamp"
                  width={900}
                  height={620}
                  priority
                  sizes="(min-width: 1024px) 46vw, 90vw"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-6">
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                  Cashless support
                </p>
                <p className="text-[13px] text-on-surface-variant text-right">
                  Subject to insurer / TPA approval
                </p>
              </div>
            </RevealNow>
          </div>
        </div>
      </section>

      {/* ── 02 · Can I use cashless treatment? ── */}
      <section aria-label="Can I use cashless treatment" className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              Start here
            </p>
            <h2 className="mt-3 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[32px] sm:text-[44px] lg:text-[52px] max-w-[20ch]">
              Can I use cashless treatment?
            </h2>
            <p className="mt-6 max-w-[62ch] font-display-hero text-[21px] lg:text-[24px] leading-[1.4] text-on-surface">
              Mungale Eye Hospital currently supports cashless eye treatment for
              eligible patients through selected insurers — subject to approval,
              policy terms and TPA/insurer processes.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <dl className="mt-10 grid sm:grid-cols-3 gap-8 border-t border-secondary/10 pt-8">
              {[
                { n: "01", t: "Current empanelment", d: "Four insurers empanelled today — always confirm before visiting." },
                { n: "02", t: "Pre-authorization may be required", d: "The hospital coordinates approval with your insurer or TPA." },
                { n: "03", t: "Coverage depends on your policy", d: "Diagnosis, waiting periods, exclusions and limits all matter." },
              ].map((f) => (
                <div key={f.n} className="sm:border-l sm:border-secondary/10 sm:pl-8 first:border-l-0 first:pl-0">
                  <dt>
                    <span aria-hidden="true" className="font-display-hero text-[15px] text-primary-fixed">{f.n}</span>
                    <span className="mt-2 block font-display-hero text-[20px] lg:text-[22px] tracking-tight text-on-surface">
                      {f.t}
                    </span>
                  </dt>
                  <dd className="mt-2 text-[14px] text-on-surface-variant leading-relaxed">{f.d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── 03 · Partners ── */}
      <section aria-label="Currently empanelled insurers" className="bg-surface-canvas/60 border-y border-secondary/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              Partners
            </p>
            <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[32px] sm:text-[44px] leading-[1.06]">
              Who is currently empanelled?
            </h2>
            <p className="mt-4 max-w-[58ch] font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Current empanelment can change. Confirm with the hospital before your visit.
            </p>
          </Reveal>
          <ol className="mt-10 grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {insurancePartners.map((p, i) => (
                <li key={p.name} className="reveal flex items-center gap-6" style={{ transitionDelay: `${Math.min(i * 0.06, 0.18) * 1000}ms` }}>
                  <span aria-hidden="true" className="font-display-hero text-[15px] text-primary-fixed w-7 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block w-40 sm:w-48 shrink-0 overflow-hidden rounded-[12px] ring-1 ring-secondary/10 bg-white">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={400}
                      height={240}
                      sizes="(min-width: 640px) 12rem, 10rem"
                      className="w-full aspect-[5/3] object-contain"
                    />
                  </span>
                  <span>
                    <span className="block font-display-hero text-[20px] lg:text-[22px] tracking-tight text-on-surface">
                      {p.name}
                    </span>
                    <span className="mt-1 block text-[13px] text-on-surface-variant">
                      Current empanelment
                    </span>
                  </span>
                </li>
            ))}
          </ol>
          <Reveal>
            <div className="mt-10 border-t-2 border-secondary/70 pt-6 max-w-3xl">
              <p className="font-display-hero text-[20px] lg:text-[22px] tracking-tight text-on-surface">
                Empanelment changes over time.
              </p>
              <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                This list is updated periodically. Please call{" "}
                <a href={INSURANCE_DESK_TEL} className="font-bold text-on-surface underline decoration-primary-fixed/60 underline-offset-4 hover:decoration-primary-fixed">
                  {INSURANCE_DESK_DISPLAY}
                </a>{" "}
                before your visit to confirm whether your insurer or TPA is
                currently empanelled for cashless eye treatment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 04 · Process timeline ── */}
      <section id="cashless-process" aria-label="How cashless treatment works" className="bg-background scroll-mt-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              The process
            </p>
            <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[32px] sm:text-[44px] leading-[1.06]">
              How cashless treatment works at Mungale.
            </h2>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Here&rsquo;s what happens from booking to approval.
            </p>
          </Reveal>
          <ol className="mt-10 lg:mt-12 grid gap-10 lg:grid-cols-4 lg:gap-0">
            {cashlessSteps.map((s, i) => (
                <li key={s.index} className="reveal group relative lg:px-8 first:pl-0 last:pr-0" style={{ transitionDelay: `${Math.min(i * 0.06, 0.18) * 1000}ms` }}>
                  <span aria-hidden="true" className="hidden lg:block absolute top-[26px] left-0 right-0 h-px bg-secondary/15" />
                  <span aria-hidden="true" className="hidden lg:block absolute top-[26px] left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                  <span
                    aria-hidden="true"
                    className="relative inline-flex w-[52px] h-[52px] items-center justify-center rounded-full bg-background ring-1 ring-secondary/20 font-display-hero text-[19px] text-on-surface transition-colors duration-300 group-hover:ring-primary group-hover:text-primary-fixed"
                  >
                    {s.index}
                  </span>
                  <h3 className="mt-5 font-display-hero text-[21px] lg:text-[23px] tracking-tight text-on-surface transition-colors duration-300 group-hover:text-primary-fixed">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-on-surface-variant leading-relaxed lg:opacity-80 lg:group-hover:opacity-100 transition-opacity duration-300">
                    {s.body}
                  </p>
                </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 05 · Documents checklist ── */}
      <section aria-label="What to bring" className="bg-surface-canvas/60 border-y border-secondary/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                What should I bring?
              </p>
              <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[32px] sm:text-[44px] leading-[1.06]">
                Come prepared.
              </h2>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Bring these documents so the process can move smoothly.
              </p>
              <p className="mt-6 font-body-md text-body-md text-on-surface leading-relaxed">
                Not sure what you need?
              </p>
              <a
                href={INSURANCE_DESK_TEL}
                className="group mt-2 inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
              >
                <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                  Call the insurance desk
                </span>
                <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
              </a>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="border-t border-secondary/10">
                {cashlessChecklist.map((item, i) => (
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

      {/* ── 06 · What cashless actually means ── */}
      <section aria-label="What cashless actually means" className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              Understand cashless
            </p>
            <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[32px] sm:text-[44px] leading-[1.06]">
              What does cashless actually mean?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="border-t-2 border-secondary/70 pt-5">
                <h3 className="font-display-hero text-[22px] tracking-tight text-on-surface">Cashless</h3>
                <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {cashlessDefinition}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="border-t-2 border-primary pt-5">
                <h3 className="font-display-hero text-[22px] tracking-tight text-on-surface">You may still pay</h3>
                <ul className="mt-3 border-t border-secondary/10">
                  {patientPayItems.map((item) => (
                    <li key={item} className="border-b border-secondary/10 py-3 font-body-md text-body-md text-on-surface">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[14px] text-on-surface-variant leading-relaxed">
                  These are explained according to your policy — before the procedure begins.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 07 · Coverage areas ── */}
      <section aria-label="Treatments considered for insurance support" className="bg-surface-canvas/60 border-y border-secondary/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              Coverage areas
            </p>
            <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[28px] sm:text-[36px] leading-[1.1]">
              Treatments that may be considered.
            </h2>
            <p className="mt-4 max-w-[62ch] font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Treatments may be considered for insurance support, depending on
              diagnosis, policy terms and approval.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="mt-8 border-t border-secondary/10">
              {coverageAreas.map((c, i) => (
                <li key={c.label} className="border-b border-secondary/10">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="group flex items-baseline gap-5 py-4"
                    >
                      <span aria-hidden="true" className="font-display-hero text-[14px] text-on-surface-variant w-7 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-display-hero text-[22px] lg:text-[26px] tracking-tight uppercase text-on-surface group-hover:text-primary-fixed transition-colors">
                        {c.label}
                      </span>
                      <span aria-hidden="true" className="text-primary-fixed text-[18px] group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  ) : (
                    <span className="flex items-baseline gap-5 py-4">
                      <span aria-hidden="true" className="font-display-hero text-[14px] text-on-surface-variant w-7 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-display-hero text-[22px] lg:text-[26px] tracking-tight uppercase text-on-surface">
                        {c.label}
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] text-on-surface-variant leading-relaxed">
              Coverage is determined by your insurer/TPA and policy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 08 · FAQ ── */}
      <section aria-label="Insurance questions answered" className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
              Questions, answered
            </p>
            <h2 className="mt-3 font-display-hero text-on-surface tracking-tight text-[32px] sm:text-[44px] leading-[1.06]">
              Insurance FAQ.
            </h2>
          </Reveal>
          <div className="mt-8">
            <InsuranceFaq faqs={insuranceFaqs} />
          </div>
        </div>
      </section>

      {/* ── 09 · If approval isn't granted ── */}
      <section aria-label="If cashless approval is not granted" className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <Reveal>
            <div className="border-t-2 border-secondary/70 pt-6 max-w-3xl">
              <h2 className="font-display-hero text-on-surface tracking-tight text-[26px] sm:text-[32px] leading-[1.12]">
                What if cashless approval isn&rsquo;t granted?
              </h2>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {fallbackBody}
              </p>
              <a
                href={INSURANCE_DESK_TEL}
                className="group mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface min-h-[44px]"
              >
                <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                  Talk to the insurance desk
                </span>
                <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
