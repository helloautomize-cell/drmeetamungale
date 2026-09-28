"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, CalendarDays, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";

// ─── Header (floating bar — architectural/editorial refinement) ───
// Floating glass bar (cream, blur, 1px hairline border): deliberately
// architectural — 26px radius (not full pill), quiet shadows, generous
// internal padding. Logo left, nav centered, CTA right with a compact
// arrow-chip. CTA is a 14px-radius action, not an oversized pill.
// Mobile: same bar with logo + booking icon + burger; the full-screen
// editorial drawer is unchanged.
// - Official logo asset untouched (restrained height inside the pill).
// - Nav: 15px medium ink, no pill backgrounds, thin 200ms red hover
//   underline + persistent active line (reuses .nav-item).
// - CTA: exact brand red #ED2225, 48px, white text, white circle with
//   ArrowUpRight — the pill shape here is intentional (matches ref).
// - Single booking action: navTree's "Book an Appointment" link stays
//   filtered out (route /contact-us/ unchanged).
// NOTE: the pill is position:fixed, so a flow spacer below preserves the
// page layout (hero untouched). The pill wrapper uses margin-centering,
// NOT translate-centering, so the full-screen drawer's fixed positioning
// stays viewport-relative.
function MicroChevron({ open }: { open: boolean }) {
  return (
    <svg
      className={
        "w-[9px] h-[6px] transition-transform duration-200 " +
        (open ? "rotate-180" : "")
      }
      viewBox="0 0 9 6"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1.2 4.5 4.6 8 1.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  // Auto-hide on scroll down (past 160px), return on scroll up or near
  // top. rAF-throttled; reduced-motion gets an instant toggle.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y > 160 && y > lastY + 4) setHidden(true);
      else if (y < lastY - 4 || y <= 160) setHidden(false);
      lastY = y;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The bar must be visible whenever the mobile menu is open.
  useEffect(() => {
    if (mobileOpen) setHidden(false);
  }, [mobileOpen]);

  // "Book a consultation" appears once — as the CTA pill, not a nav row.
  const navItems = siteConfig.navTree.filter((item) => item.href !== "/contact-us/");

  const isActive = (item: (typeof navItems)[number]) => {
    const selfActive =
      item.href !== "#" &&
      (pathname === item.href ||
        (item.href !== "/" && pathname.startsWith(item.href)));
    const subActive = item.subItems?.some((s) => pathname.startsWith(s.href));
    return selfActive || subActive;
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <div
          className={
            "mx-auto mt-3 lg:mt-5 w-[calc(100%-1.5rem)] lg:w-[calc(100%-3rem)] max-w-6xl transition-[transform,box-shadow] duration-300 motion-reduce:transition-none " +
            (hidden ? "-translate-y-[130%] pointer-events-none " : "")
          }
        >
          <div
            className={
              "relative flex items-center justify-between h-[76px] rounded-[20px] bg-background/70 backdrop-blur-xl border transition-shadow duration-200 " +
              (scrolled
                ? "border-secondary/15 shadow-[0_6px_20px_rgba(17,17,18,0.07)]"
                : "border-secondary/10 shadow-[0_1px_8px_rgba(17,17,18,0.04)]")
            }
          >
            {/* Logo — official asset, restrained inside the pill */}
            <Link
              href="/"
              className="flex items-center shrink-0 pl-6 lg:pl-8"
              aria-label={siteConfig.name + " — home"}
            >
              <img
                src="/images/hero/httpsmungaleeyehospital-logo.svg"
                alt={siteConfig.name + " logo"}
                className="h-[44px] lg:h-[46px] w-auto object-contain"
                width={196}
                height={82}
              />
            </Link>

            {/* Desktop nav — absolutely centered, flat editorial links */}
            <nav
              className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.subItems?.length > 0 && setOpenSub(item.label)
                  }
                  onMouseLeave={() => setOpenSub(null)}
                  onFocus={() =>
                    item.subItems?.length > 0 && setOpenSub(item.label)
                  }
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setOpenSub(null);
                  }}
                >
                  <Link
                    href={item.href}
                    data-active={isActive(item) || undefined}
                    aria-expanded={
                      item.subItems?.length > 0 ? openSub === item.label : undefined
                    }
                    className={
                      "nav-item font-label-md text-[15px] font-medium px-3 py-2 inline-flex items-center gap-1.5 transition-colors duration-200 " +
                      (isActive(item)
                        ? "text-on-surface"
                        : "text-on-surface/85 hover:text-on-surface")
                    }
                    aria-current={isActive(item) ? "page" : undefined}
                  >
                    {item.label}
                    {item.subItems?.length > 0 && (
                      <span className="text-on-surface/45" aria-hidden="true">
                        <MicroChevron open={openSub === item.label} />
                      </span>
                    )}
                  </Link>
                  {item.subItems?.length > 0 && (
                    <div
                      className={
                        "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-background rounded-2xl border border-border-subtle shadow-brand-md overflow-hidden transition-all duration-200 " +
                        (openSub === item.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-1 pointer-events-none")
                      }
                    >
                      <div className="py-2">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2.5 text-[14px] text-on-surface/80 hover:text-primary transition-colors duration-200"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-2 pr-3">
              <Link
                href="/contact-us/"
                className="hidden lg:inline-flex h-11 pl-5 pr-1.5 items-center gap-2.5 bg-primary text-white text-[14px] font-semibold rounded-[14px] shadow-[0_1px_2px_rgba(17,17,18,0.15)] hover:bg-primary-fixed transition-colors duration-200"
              >
                Book a Consultation
                <span className="w-7 h-7 rounded-full bg-white text-primary flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              {/* Mobile: booking icon + menu */}
              <Link
                href="/contact-us/"
                aria-label="Book an Appointment"
                className="lg:hidden w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_1px_3px_rgba(17,17,18,0.18)]"
              >
                <CalendarDays className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        <MobileNavDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      </header>
      {/* Flow spacer — the pill is fixed, so this preserves page layout
          (hero and everything below shift nothing). */}
      <div className="h-[100px] lg:h-[112px]" aria-hidden="true" />
    </>
  );
}
