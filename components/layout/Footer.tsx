import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { PinIcon, ClockIcon, PhoneIcon, MailIcon } from "@/components/icons/duotone";

// Footer — the brand-red finale (design.md): cream text on the deep red
// field (#B9191C: the exact-red #ED2225 fails AA for small text at 4.3:1,
// dark red passes at 6.5:1 — non-negotiable for an eye hospital).
// DRAFT-COPY: finale headline + "Book a consultation" wording are from
// design.md, NOT the hospital — owner sign-off needed (see CONTENT_GAPS).
// All links, phones, hours and the medical disclaimer are verbatim.
export function Footer() {
  return (
    <footer className="bg-primary-fixed text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-6">
        {/* Finale headline */}
        <div className="mb-10 max-w-2xl">
          <p className="font-display-hero text-display-hero text-white leading-tight">
            See life clearly.
          </p>
          <p className="font-body-lg text-body-lg text-white/85 mt-2">
            Start with a conversation.
          </p>
          <Link
            href="/contact-us/"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-label-md text-label-md font-bold rounded-full shadow-brand-md hover:bg-secondary hover:text-white transition-all"
          >
            <span>Book a consultation</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-10 pt-10 border-t border-white/20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 bg-card-white rounded-xl px-3 py-1.5" aria-label={siteConfig.name + " — home"}>
              <img
                src="/images/hero/httpsmungaleeyehospital-logo.svg"
                alt={siteConfig.name + " logo"}
                className="h-12 w-auto shrink-0"
                width={168}
                height={70}
              />
            </Link>
            <p className="font-headline-md text-headline-md text-white font-bold tracking-tight leading-tight">{siteConfig.name}</p>
            <p className="font-label-sm text-label-sm text-white/70">{siteConfig.tagline}</p>
            <p className="font-body-sm text-body-sm text-white/70 leading-relaxed flex items-start gap-2 mt-3">
              <PinIcon className="w-5 h-5 shrink-0 mt-0.5 text-white/70" />
              <span>{siteConfig.address}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-label-md text-label-md text-white font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about-us/" className="font-body-sm text-body-sm text-white/80 hover:text-white transition-colors link-focus">About Us</Link></li>
              <li><Link href="/treatments/" className="font-body-sm text-body-sm text-white/80 hover:text-white transition-colors link-focus">Treatments</Link></li>
              <li><Link href="/insurance-cashless/" className="font-body-sm text-body-sm text-white/80 hover:text-white transition-colors link-focus">Insurance & Cashless</Link></li>
              <li><Link href="/contact-us/" className="font-body-sm text-body-sm text-white/80 hover:text-white transition-colors link-focus">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Treatments Sub-Links */}
          <div className="lg:col-span-3">
            <h4 className="font-label-md text-label-md text-white font-bold uppercase tracking-wider mb-4">Treatments</h4>
            <ul className="space-y-2.5">
              {siteConfig.treatments.map((t) => (
                <li key={t.slug}>
                  <Link href={"/treatments/" + t.slug + "/"} className="font-body-sm text-body-sm text-white/80 hover:text-white transition-colors link-focus">
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-label-md text-label-md text-white font-bold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm text-white/80">
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 shrink-0 text-white/60" />
                <a href={"tel:" + siteConfig.phone.replace(/\s/g, "")} className="hover:text-white transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 shrink-0 text-white/60" />
                <a href={"tel:" + siteConfig.landline.replace(/\s/g, "")} className="hover:text-white transition-colors">{siteConfig.landline}</a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 shrink-0 text-white/60" />
                <span>
                  24/7 Emergency:{" "}
                  <a href={"tel:" + siteConfig.emergencyPhone.replace(/\s/g, "")} className="font-bold text-white hover:underline">
                    {siteConfig.emergencyPhone}
                  </a>
                  {", "}
                  <a href={"tel:" + siteConfig.emergencyPhone2.replace(/\s/g, "")} className="font-bold text-white hover:underline">
                    {siteConfig.emergencyPhone2}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 shrink-0 text-white/60" />
                <a href={"mailto:" + siteConfig.email} className="hover:text-white transition-colors break-all">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <ClockIcon className="w-4 h-4 shrink-0 mt-0.5 text-white/60" />
                <span>Mon-Sat {siteConfig.hours.time} · {siteConfig.hours.sunday}</span>
              </li>
            </ul>
            <div className="flex gap-5 mt-5 font-label-sm text-label-sm font-semibold">
              <a href={siteConfig.social.facebook} className="text-white/80 hover:text-white transition-colors link-focus" aria-label="Facebook">Facebook</a>
              <a href={siteConfig.social.instagram} className="text-white/80 hover:text-white transition-colors link-focus" aria-label="Instagram">Instagram</a>
              <a href={siteConfig.social.youtube} className="text-white/80 hover:text-white transition-colors link-focus" aria-label="YouTube">YouTube</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-3 text-label-sm text-label-sm text-white/70">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
        <p className="mt-4 text-center font-body-sm text-body-sm text-white/70 max-w-3xl mx-auto">
          The information on this site is for general guidance only and is not a
          substitute for professional medical advice, diagnosis or treatment.
        </p>
      </div>
    </footer>
  );
}
