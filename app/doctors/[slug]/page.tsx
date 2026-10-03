import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { doctors, getDoctorBySlug } from "@/content/doctors";
import { pagesReviewedBy } from "@/content/reviewed-pages";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, canonical } from "@/content/seo";
import { physicianJsonLd, profilePageJsonLd } from "@/content/doctor-schema";
import { siteConfig } from "@/content/site";
import { Reveal } from "@/components/ui/motion";

// ─── /doctors/[slug]/ — verified CV-grounded profiles ────────────────
// All facts render from content/doctors.ts (verbatim CV data). No
// personal details — no DOB, personal contact info, signatures or
// hobbies, per owner instruction.
export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

const OG_DIMS: Record<string, { width: number; height: number }> = {
  "sachin-mungale": { width: 1200, height: 1600 },
  "meeta-mungale": { width: 285, height: 331 },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const d = getDoctorBySlug((await params).slug);
  if (!d) return { title: "Doctors" };
  const url = "/doctors/" + d.slug + "/";
  return {
    title: d.name + " — " + d.title,
    description: d.name + ", " + d.credentialLine + ". " + d.registration + ". " + d.role,
    alternates: { canonical: canonical(url) },
    openGraph: {
      title: d.name + " — " + siteConfig.name,
      description: d.credentialLine + " · " + d.registration,
      url: canonical(url),
      siteName: siteConfig.name,
      type: "profile",
      images: [{ url: d.imageUrl, ...OG_DIMS[d.slug], alt: d.alt }],
    },
  };
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display-hero text-on-surface tracking-tight leading-tight text-[26px] sm:text-[32px]">
      {children}
    </h2>
  );
}

function Section({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <section aria-label={label} className="border-t border-secondary/10 mt-12 lg:mt-16 pt-8 lg:pt-10">
      {children}
    </section>
  );
}

function RuleList({ items }: { items: string[] }) {
  return (
    <ol className="mt-5 border-t border-secondary/10">
      {items.map((item) => (
        <li
          key={item}
          className="border-b border-secondary/10 py-3.5 font-body-md text-body-md text-on-surface leading-relaxed"
        >
          {item}
        </li>
      ))}
    </ol>
  );
}

export default async function DoctorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const d = getDoctorBySlug((await params).slug);
  if (!d) notFound();
  const reviewed = pagesReviewedBy(d.key);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Doctors", href: "/doctors/" },
    { label: d.name, href: "/doctors/" + d.slug + "/" },
  ];

  return (
    <>
      <JsonLd data={physicianJsonLd(d.key)} />
      <JsonLd data={profilePageJsonLd(d.key)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <article className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-4 lg:pt-6 pb-16 lg:pb-24">
          {/* ── Hero: portrait + credentials ── */}
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
            <Reveal className="lg:col-span-4">
              <div className="overflow-hidden rounded-[20px] ring-1 ring-secondary/10 max-w-[420px]">
                <Image
                  src={d.imageUrl}
                  alt={d.alt}
                  width={480}
                  height={600}
                  priority
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </Reveal>
            <Reveal delay={0.06} className="lg:col-span-8">
              <nav aria-label="Breadcrumb">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  <Link href="/" className="hover:text-on-surface transition-colors">Home</Link>
                  <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
                  <Link href="/doctors/" className="hover:text-on-surface transition-colors">Doctors</Link>
                  <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
                  <span aria-current="page" className="text-on-surface">{d.name}</span>
                </p>
              </nav>
              <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                {d.title}
              </p>
              <h1 className="mt-3 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[38px] sm:text-[48px] lg:text-[56px]">
                {d.name}
              </h1>
              <p className="mt-4 font-body-md text-body-md text-on-surface leading-relaxed">
                {d.credentialLine}
              </p>
              <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant">
                {d.registration} · {d.experience}
              </p>
              <p className="mt-5 max-w-[58ch] font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {d.role}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link
                  href={"/contact-us/?doctor=" + d.slug}
                  className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
                >
                  <span className="cta-quiet-text">Book with this doctor</span>
                  <ArrowRight aria-hidden="true" className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/doctors/"
                  className="cta-quiet group inline-flex items-center gap-2 text-[14px] font-medium text-on-surface-variant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
                >
                  <span className="cta-quiet-text">All doctors</span>
                  <ArrowRight aria-hidden="true" className="w-3.5 h-3.5 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* ── Bio ── */}
          <Section label="About">
            <Reveal className="max-w-[68ch]">
              <SectionHeading>About {d.name}.</SectionHeading>
              <p className="mt-5 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {d.bio}
              </p>
            </Reveal>
          </Section>

          {/* ── Education & fellowships — timeline ── */}
          <Section label="Education and fellowships">
            <SectionHeading>Education &amp; fellowships.</SectionHeading>
            <ol className="mt-6 border-l-2 border-secondary/15">
              {d.education.map((e) => (
                <li key={e.degree + e.institution} className="relative pl-6 pb-7 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-primary"
                  />
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                    {e.years}
                  </p>
                  <p className="mt-1 font-semibold text-on-surface text-[16.5px] leading-snug">
                    {e.degree}
                  </p>
                  <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
                    {e.institution}
                  </p>
                  {e.note && (
                    <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">{e.note}</p>
                  )}
                </li>
              ))}
            </ol>
          </Section>

          {/* ── Experience ── */}
          {d.experienceHistory && d.experienceHistory.length > 0 && (
            <Section label="Experience">
              <SectionHeading>Experience.</SectionHeading>
              <ol className="mt-6 border-l-2 border-secondary/15">
                {d.experienceHistory.map((x) => (
                  <li key={x.role} className="relative pl-6 pb-6 last:pb-0">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-primary"
                    />
                    <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                      {x.years}
                    </p>
                    <p className="mt-1 font-body-md text-body-md text-on-surface leading-relaxed">
                      {x.role}
                    </p>
                  </li>
                ))}
              </ol>
            </Section>
          )}

          {/* ── Procedures & clinical work ── */}
          <Section label="Procedures and clinical work">
            <SectionHeading>Procedures &amp; clinical work.</SectionHeading>
            {d.focus.length > 0 && (
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
                Areas of focus: {d.focus.join("; ").toLowerCase().replace(/^./, (c) => c.toUpperCase())}.
              </p>
            )}
            <RuleList items={d.procedures} />
            {d.clinicalWork && d.clinicalWork.length > 0 && (
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
                {d.clinicalWork.join("; ")}.
              </p>
            )}
            {d.diagnostics && (
              <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant">
                Diagnostics: {d.diagnostics.join(", ").toLowerCase()}.
              </p>
            )}
            {d.currentInterests && (
              <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant">
                Current interests: {d.currentInterests}.
              </p>
            )}
          </Section>

          {/* ── Publications / research ── */}
          {d.publications.length > 0 && (
            <Section label="Publications and research">
              <SectionHeading>Publications &amp; research.</SectionHeading>
              <RuleList items={d.publications} />
            </Section>
          )}

          {/* ── Memberships ── */}
          {d.memberships && (
            <Section label="Memberships">
              <SectionHeading>Memberships.</SectionHeading>
              <p className="mt-4 font-body-sm text-body-sm text-on-surface-variant">
                Life member of:
              </p>
              <RuleList items={d.memberships} />
            </Section>
          )}

          {/* ── Teaching & CMEs ── */}
          {(d.teaching || d.cmes) && (
            <Section label="Teaching and CMEs">
              <SectionHeading>Teaching &amp; CMEs.</SectionHeading>
              {d.teaching && <RuleList items={d.teaching} />}
              {d.cmes && (
                <>
                  <p className="mt-6 font-body-sm text-body-sm text-on-surface-variant">
                    CMEs organised:
                  </p>
                  <RuleList items={d.cmes} />
                </>
              )}
            </Section>
          )}

          {/* ── Community ── */}
          {d.community && (
            <Section label="Community">
              <SectionHeading>Beyond the clinic.</SectionHeading>
              <p className="mt-4 max-w-[62ch] font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {d.community}.
              </p>
            </Section>
          )}

          {/* ── Pages reviewed ── */}
          <Section label={"Pages reviewed by " + d.name}>
            <SectionHeading>Pages reviewed by {d.name}.</SectionHeading>
            <p className="mt-4 max-w-[62ch] font-body-sm text-body-sm text-on-surface-variant">
              Every page on this site has been medically reviewed by the
              doctors. {d.name} reviewed these pages:
            </p>
            <ul className="mt-5 columns-1 sm:columns-2 gap-x-12 border-t border-secondary/10">
              {reviewed.map((p) => (
                <li key={p.href} className="border-b border-secondary/10 break-inside-avoid">
                  <Link
                    href={p.href}
                    className="group flex items-center justify-between gap-4 py-3 font-body-md text-body-md text-on-surface hover:text-primary-fixed transition-colors"
                  >
                    {p.title}
                    <ArrowRight
                      aria-hidden="true"
                      className="w-4 h-4 shrink-0 text-primary-fixed/60 group-hover:text-primary-fixed transition-colors"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </article>
    </>
  );
}
