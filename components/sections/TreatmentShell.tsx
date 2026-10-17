import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { getTreatmentDetail } from "@/content/treatment-details";
import { getDoctorByKey, doctorHref, type ReviewerKey } from "@/content/doctors";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/content/site";
import { telHref, waHref } from "@/lib/contact-links";
import { bookingHref } from "@/lib/booking-links";

// ─── TreatmentShell ────────────────────────────────────────────────────────
// Shared child-page frame: warm paper, 1280px container, quiet breadcrumb
// (Home / Treatments / Current). Heading order lives inside each Treatment*
// component — breadcrumb, eyebrow, H1, intro, CTAs, hero image — so the H1
// is the first thing on the first screen. The specialist block, mid-page CTA
// band and contact band below are composed by the page components.

export function SpecialistCard({ reviewerKey }: { reviewerKey: ReviewerKey }) {
  const d = getDoctorByKey(reviewerKey);
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="overflow-hidden rounded-[14px] ring-1 ring-secondary/10 shrink-0">
        <Image
          src={d.imageUrl}
          alt={d.alt}
          width={112}
          height={140}
          className="h-16 w-[52px] object-cover object-top"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-on-surface text-[15.5px] leading-snug">
          <Link
            href={doctorHref(reviewerKey)}
            className="hover:text-primary-fixed transition-colors"
          >
            {d.name}
          </Link>
        </p>
        <p className="mt-0.5 text-[13px] text-on-surface-variant">{d.credentialShort}</p>
        <p className="mt-0.5 text-[12px] text-on-surface-variant">{d.registration}</p>
      </div>
      <div className="hidden sm:flex items-center gap-6 shrink-0">
        <Link
          href={doctorHref(reviewerKey)}
          className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-on-surface"
        >
          <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
            View profile
          </span>
          <ArrowRight aria-hidden="true" className="w-3.5 h-3.5 text-primary-fixed" />
        </Link>
        <Link
          href={bookingHref(d.slug)}
          className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-on-surface"
        >
          <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
            Book with {d.name}
          </span>
          <ArrowRight aria-hidden="true" className="w-3.5 h-3.5 text-primary-fixed" />
        </Link>
      </div>
    </div>
  );
}

/** "Your specialist" — one card per doctor mapped via reviewedBy. Rendered
 *  directly below the hero on every treatment page. */
export function SpecialistBlock({ slug }: { slug: string }) {
  const detail = getTreatmentDetail(slug);
  const reviewers = detail?.reviewedBy
    ? Array.isArray(detail.reviewedBy)
      ? detail.reviewedBy
      : [detail.reviewedBy]
    : [];
  if (reviewers.length === 0) return null;
  return (
    <section
      aria-label="Your specialist"
      className="border-t border-secondary/10"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6 lg:py-8">
        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
          Your specialist{reviewers.length > 1 ? "s" : ""}
        </p>
        <div className="mt-2 max-w-3xl divide-y divide-secondary/10">
          {reviewers.map((key) => (
            <SpecialistCard key={key} reviewerKey={key} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Mid-page red CTA band — same language as the footer CTA. */
export function TreatmentCtaBand() {
  return (
    <section aria-label="Book a consultation" className="mt-14 lg:mt-20">
      <div className="rounded-[20px] bg-primary px-8 py-10 sm:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="font-display-hero text-[24px] sm:text-[28px] tracking-tight text-on-primary leading-tight">
            Start with a conversation.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href={bookingHref()}
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-[15px] px-6 py-3 rounded-full hover:bg-background transition-colors motion-reduce:transition-none min-h-[44px]"
            >
              Book a consultation
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <a
              href={telHref(siteConfig.phone)}
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white min-h-[44px]"
            >
              <Phone aria-hidden="true" className="w-4 h-4" />
              <span className="border-b border-white/50 pb-0.5 group-hover:border-white transition-colors">
                Call {siteConfig.phone}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Final contact band — appointments phone, WhatsApp, address, hours. */
export function TreatmentContactBand() {
  const hours = `${siteConfig.hours.weekdays}, ${siteConfig.hours.time} · ${siteConfig.hours.sunday === "Closed" ? "Sunday closed" : "Sunday " + siteConfig.hours.sunday}`;
  return (
    <section
      aria-label="Book and reach us"
      className="mt-14 lg:mt-20 rounded-[20px] bg-primary px-8 py-10 sm:px-12"
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/70">
            Appointments
          </p>
          <a
            href={telHref(siteConfig.phone)}
            className="mt-3 inline-flex items-center gap-2 font-display-hero text-[26px] sm:text-[32px] tracking-tight text-white leading-none hover:text-white/80 transition-colors"
          >
            {siteConfig.phone}
          </a>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-white/85">
            <a
              href={waHref(siteConfig.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-white/40 pb-0.5 hover:border-white transition-colors"
            >
              WhatsApp {siteConfig.whatsapp}
            </a>
            <span>{siteConfig.address}</span>
            <span>{hours}</span>
          </div>
        </div>
        <Link
          href={bookingHref()}
          className="inline-flex items-center gap-2 self-start lg:self-auto bg-white text-primary font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-background transition-colors motion-reduce:transition-none min-h-[44px]"
        >
          Book a consultation
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

/** "Related articles" — links to existing posts from content/blog/index.ts. */
export function RelatedArticles({ slugs }: { slugs: string[] }) {
  const posts = slugs
    .map((slug) => blogPosts.find((p) => p.url === `/blog/${slug}/`))
    .filter((p): p is (typeof blogPosts)[number] => Boolean(p));
  if (posts.length === 0) return null;
  return (
    <section aria-label="Related articles" className="border-t border-secondary/10 mt-14 lg:mt-20 pt-10 lg:pt-14">
      <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
        Related articles
      </p>
      <div className="mt-4 border-t border-secondary/10">
        {posts.map((p) => (
          <Link
            key={p.url}
            href={p.url}
            className="group flex items-baseline gap-4 border-b border-secondary/10 py-5"
          >
            <span className="flex-1 font-display-hero text-[20px] lg:text-[24px] tracking-tight text-on-surface group-hover:text-primary-fixed transition-colors motion-reduce:transition-none">
              {p.title}
            </span>
            <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function TreatmentShell({
  current,
  children,
}: {
  current: string;
  slug?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-2 lg:pt-4">
        <nav aria-label="Breadcrumb">
          <p className="font-body-md text-body-md text-on-surface-variant">
            <Link href="/" className="hover:text-on-surface transition-colors">
              Home
            </Link>
            <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
            <Link href="/treatments/" className="hover:text-on-surface transition-colors">
              Treatments
            </Link>
            <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
            <span aria-current="page" className="text-on-surface">{current}</span>
          </p>
        </nav>
      </div>
      {children}
    </div>
  );
}
