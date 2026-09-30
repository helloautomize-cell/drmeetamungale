import Image from "next/image";
import Link from "next/link";
import { RevealNow } from "@/components/ui/motion";

// ─── AtlasHero (/treatments/) ──────────────────────────────────────────────
// Editorial split hero: breadcrumb + OUR CARE + serif headline on the left;
// restrained two-image composition (real Mungale photography) on the right.
// No stock, no pills, no gradients.
export function AtlasHero() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-2 lg:pt-4 pb-10 lg:pb-14">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-7">
            <RevealNow>
              <nav aria-label="Breadcrumb">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  <Link href="/" className="hover:text-on-surface transition-colors">
                    Home
                  </Link>
                  <span aria-hidden="true" className="mx-2 text-secondary/30">
                    /
                  </span>
                  <span aria-current="page" className="text-on-surface">
                    Treatments
                  </span>
                </p>
              </nav>
              <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.2em] text-primary-fixed">
                Our care
              </p>
              <h1 className="mt-3 font-display-hero text-on-surface tracking-[-0.015em] leading-[1.04] text-[38px] sm:text-[48px] lg:text-[56px]">
                Specialist eye care,
                <br />
                explained clearly.
              </h1>
              <p className="mt-5 max-w-[52ch] font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Explore diagnosis, treatment, surgery and vision correction
                across Mungale&rsquo;s specialist areas of eye care.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary font-semibold text-[15px] px-6 py-3 rounded-full hover:bg-primary-fixed transition-colors"
                >
                  Book a consultation
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-on-surface"
                >
                  <span className="border-b border-primary-fixed/60 pb-0.5 group-hover:border-primary-fixed transition-colors">
                    Start with what you&rsquo;re experiencing
                  </span>
                  <span aria-hidden="true" className="text-primary-fixed">&rarr;</span>
                </Link>
              </div>
            </RevealNow>
          </div>

          <div className="lg:col-span-5">
            <RevealNow delay={0.12} className="relative">
              <div className="overflow-hidden rounded-[20px] ring-1 ring-secondary/10">
                <Image
                  src="/images/treatments/c3.jpg"
                  alt="LED CSO slit lamp with imaging, showing an eye on the monitor"
                  width={600}
                  height={600}
                  priority
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-4 sm:-left-8 w-[46%] overflow-hidden rounded-[16px] ring-1 ring-secondary/10 shadow-xl">
                <Image
                  src="/images/treatments/gt1.jpg"
                  alt="YAG laser machine used for peripheral iridotomy"
                  width={600}
                  height={600}
                  sizes="(min-width: 1024px) 18vw, 40vw"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <p className="mt-12 text-[13px] text-on-surface-variant sm:pl-[52%]">
                LED slit-lamp imaging &amp; YAG laser — diagnosis to treatment.
              </p>
            </RevealNow>
          </div>
        </div>
      </div>
    </section>
  );
}
