import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { PinIcon, ClockIcon, PhoneIcon, MailIcon } from "@/components/icons/duotone";

// Footer — sitemap + trust close. All links, phones, hours and the medical
// disclaimer are verbatim from content/site.ts and the live site; visual
// hierarchy only: emergency strip, labeled columns, icon-led contact block.
export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Emergency utility strip — deliberately a slim tier below the red
          gradient CTA bands (not a second red band): hairline bar with a
          single red accent icon. Numbers verbatim from content/site.ts. */}
      <div className="bg-white/[0.04] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center">
          <span className="inline-flex items-center gap-2 font-label-sm text-label-sm text-white/70 font-semibold">
            <PhoneIcon className="w-4 h-4 text-primary-fixed" />
            <span>24/7 Emergency:</span>
          </span>
          <span className="font-body-sm text-body-sm text-white/80">
            <a href={"tel:" + siteConfig.emergencyPhone.replace(/\s/g, "")} className="font-bold text-white hover:underline">
              {siteConfig.emergencyPhone}
            </a>
            <span> · </span>
            <a href={"tel:" + siteConfig.emergencyPhone2.replace(/\s/g, "")} className="font-bold text-white hover:underline">
              {siteConfig.emergencyPhone2}
            </a>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label={siteConfig.name + " — home"}>
              <img
                src="/images/hero/httpsmungaleeyehospital-logo.svg"
                alt={siteConfig.name + " logo"}
                className="h-14 w-auto shrink-0 bg-card-white rounded-xl px-3 py-1.5"
                width={168}
                height={70}
              />
              <div>
                <p className="font-headline-md text-headline-md text-white font-bold tracking-tight leading-tight">{siteConfig.name}</p>
                <p className="font-label-sm text-label-sm text-white/60">{siteConfig.tagline}</p>
              </div>
            </Link>
            <p className="font-body-sm text-body-sm text-white/60 leading-relaxed flex items-start gap-2">
              <PinIcon className="w-5 h-5 shrink-0 mt-0.5 text-white/60" />
              <span>{siteConfig.address}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-label-md text-label-md text-white font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about-us/" className="font-body-sm text-body-sm text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/treatments/" className="font-body-sm text-body-sm text-white/70 hover:text-white transition-colors">Treatments</Link></li>
              <li><Link href="/insurance-cashless/" className="font-body-sm text-body-sm text-white/70 hover:text-white transition-colors">Insurance & Cashless</Link></li>
              <li><Link href="/contact-us/" className="font-body-sm text-body-sm text-white/70 hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Treatments Sub-Links */}
          <div className="lg:col-span-3">
            <h4 className="font-label-md text-label-md text-white font-bold uppercase tracking-wider mb-4">Treatments</h4>
            <ul className="space-y-2.5">
              {siteConfig.treatments.map((t) => (
                <li key={t.slug}>
                  <Link href={"/treatments/" + t.slug + "/"} className="font-body-sm text-body-sm text-white/70 hover:text-white transition-colors">
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-label-md text-label-md text-white font-bold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm text-white/70">
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 shrink-0 text-white/50" />
                <a href={"tel:" + siteConfig.phone.replace(/\s/g, "")} className="hover:text-white transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 shrink-0 text-white/50" />
                <a href={"tel:" + siteConfig.landline.replace(/\s/g, "")} className="hover:text-white transition-colors">{siteConfig.landline}</a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 shrink-0 text-white/50" />
                <a href={"mailto:" + siteConfig.email} className="hover:text-white transition-colors break-all">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <ClockIcon className="w-4 h-4 shrink-0 mt-0.5 text-white/50" />
                <span>Mon-Sat {siteConfig.hours.time} · {siteConfig.hours.sunday}</span>
              </li>
            </ul>
            <div className="flex gap-5 mt-5 font-label-sm text-label-sm font-semibold">
              <a href={siteConfig.social.facebook} className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">Facebook</a>
              <a href={siteConfig.social.instagram} className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">Instagram</a>
              <a href={siteConfig.social.youtube} className="text-white/70 hover:text-white transition-colors" aria-label="YouTube">YouTube</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-label-sm text-label-sm text-white/50">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
        <p className="mt-4 text-center font-body-sm text-body-sm text-white/50 max-w-3xl mx-auto">
          The information on this site is for general guidance only and is not a
          substitute for professional medical advice, diagnosis or treatment.
        </p>
      </div>
    </footer>
  );
}
