"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/content/site";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    // NOTE: backdrop-blur lives on the inner bar, NOT on <header> — a
    // backdrop-filter ancestor would trap the fixed MobileNavDrawer relative
    // to the header instead of the viewport.
    <header className="sticky top-0 z-50">
      <div className="bg-card-white/80 backdrop-blur-md shadow-sm border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo (mark only — no wordmark text in navbar) */}
        <Link href="/" className="flex items-center group" aria-label={siteConfig.name + " — home"}>
          <img
            src="/images/hero/httpsmungaleeyehospital-logo.svg"
            alt={siteConfig.name + " logo"}
            className="h-12 lg:h-16 w-auto shrink-0"
            width={196}
            height={82}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {/* "Book an Appointment" nav link intentionally excluded here — the
              single gradient CTA button below is the one booking action
              (route /contact-us/ unchanged; footer + mobile CTA keep it). */}
          {siteConfig.navTree
            .filter((item) => item.href !== "/contact-us/")
            .map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.subItems?.length > 0 && setOpenSub(item.label)}
              onMouseLeave={() => setOpenSub(null)}
              onFocus={() => item.subItems?.length > 0 && setOpenSub(item.label)}
              onBlur={() => setOpenSub(null)}
            >
              <Link
                href={item.href}
                className="font-label-md text-label-md text-on-surface px-4 py-2 rounded-full hover:bg-surface-tint hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                {item.label}
                {item.subItems?.length > 0 && (
                  <ChevronDown className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
                )}
              </Link>
              {item.subItems?.length > 0 && (
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-card-white rounded-2xl shadow-xl shadow-primary/5 border border-border-subtle overflow-hidden transition-all duration-200 ${
                    openSub === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="py-2">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2.5 font-label-sm text-label-sm text-on-surface hover:bg-surface-tint hover:text-primary transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact-us/"
            className="ml-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-fixed text-on-primary font-label-md text-label-md rounded-full shadow-brand-md hover:shadow-brand-glow hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            Book an Appointment
          </Link>
        </nav>

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-on-surface hover:text-primary transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      </div>
      <MobileNavDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
