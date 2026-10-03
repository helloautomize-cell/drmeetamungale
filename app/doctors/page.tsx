import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { doctors } from "@/content/doctors";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, canonical } from "@/content/seo";
import { Reveal } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Dr. Sachin Mungale (glaucoma specialist) and Dr. Meeta Mungale (cornea specialist) — the two senior ophthalmologists who lead Mungale Eye Hospital, Kothi, Vadodara.",
  alternates: { canonical: canonical("/doctors/") },
};

const breadcrumb = [
  { label: "Home", href: "/" },
  { label: "Doctors", href: "/doctors/" },
];

// ─── /doctors/ — index, both doctors at equal weight ─────────────────
export default function DoctorsIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />

      <section className="bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-4 lg:pt-6 pb-16 lg:pb-24">
          <nav aria-label="Breadcrumb">
            <p className="font-body-md text-body-md text-on-surface-variant">
              <Link href="/" className="hover:text-on-surface transition-colors">Home</Link>
              <span aria-hidden="true" className="mx-2 text-secondary/30">/</span>
              <span aria-current="page" className="text-on-surface">Doctors</span>
            </p>
          </nav>
          <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
            The people behind Mungale
          </p>
          <h1 className="mt-3 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.05] text-[38px] sm:text-[48px] lg:text-[56px]">
            Our doctors.
          </h1>
          <p className="mt-4 max-w-[60ch] font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Two senior ophthalmologists, one doctor-led practice. Every page
            on this site has been medically reviewed by them.
          </p>

          <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14 max-w-[1100px]">
            {doctors.map((d, i) => (
              <Reveal key={d.slug} delay={i * 0.08}>
                <article className="flex h-full flex-col">
                  <Link
                    href={"/doctors/" + d.slug + "/"}
                    className="group block overflow-hidden rounded-[20px] ring-1 ring-secondary/10"
                  >
                    <Image
                      src={d.imageUrl}
                      alt={d.alt}
                      width={480}
                      height={600}
                      sizes="(min-width: 1024px) 520px, (min-width: 640px) 45vw, 90vw"
                      className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                    />
                  </Link>
                  <h2 className="mt-6 font-display-hero text-on-surface tracking-tight leading-tight text-[28px] lg:text-[34px]">
                    <Link href={"/doctors/" + d.slug + "/"} className="hover:text-primary-fixed transition-colors">
                      {d.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-[14px] font-semibold text-on-surface">{d.title}</p>
                  <p className="mt-1 text-[13.5px] text-on-surface-variant">{d.credentialLine}</p>
                  <p className="mt-1 text-[13px] text-on-surface-variant">
                    {d.registration} · {d.experience}
                  </p>
                  <div className="mt-auto pt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
                    <Link
                      href={"/doctors/" + d.slug + "/"}
                      className="cta-quiet group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
                    >
                      <span className="cta-quiet-text">View profile</span>
                      <ArrowRight aria-hidden="true" className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href={"/contact-us/?doctor=" + d.slug}
                      className="cta-quiet group inline-flex items-center gap-2 text-[14px] font-medium text-on-surface-variant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded"
                    >
                      <span className="cta-quiet-text">Book with this doctor</span>
                      <ArrowRight aria-hidden="true" className="w-3.5 h-3.5 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
