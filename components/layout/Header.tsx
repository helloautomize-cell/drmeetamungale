"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, X, CalendarDays, ArrowUpRight, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { treatments } from "@/content/treatments";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";

// ─── Header (Phase 2 — flagship spec §4.1) ────────────────────────────
// Ink-navy utility strip (phone · email · hours · emergency + text-size
// toggle) that collapses after 40px of scroll. Below it, a floating
// glass pill: porcelain 72%, blur(16px) saturate(140%), hairline border,
// 80→64px shrink + logo scale on scroll, hides on scroll-down and returns
// on scroll-up. Treatments gets a two-column mega-menu with a feature
// card; Resources keeps the slim dropdown. Right cluster: Call icon +
// magnetic primary CTA. Mobile drawer unchanged.
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

// A / A+ text-size toggle — root font-size 100% ↔ 112.5%, persisted.
function useTextSize() {
  const [large, setLarge] = useState(false);
  useEffect(() => {
    const saved = window.localStorage.getItem("meh-text-scale");
    if (saved === "large") {
      setLarge(true);
      document.documentElement.style.fontSize = "112.5%";
    }
  }, []);
  const toggle = () => {
    setLarge((v) => {
      const next = !v;
      document.documentElement.style.fontSize = next ? "112.5%" : "";
      window.localStorage.setItem("meh-text-scale", next ? "large" : "normal");
      return next;
    });
  };
  return { large, toggle };
}

function TreatmentsMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  const col1 = treatments.slice(0, 3);
  const col2 = treatments.slice(3);
  return (
    <div className="w-[560px] bg-paper rounded-2xl border border-line shadow-brand-lg overflow-hidden">
      <div className="grid grid-cols-[1fr_1fr_200px]">
        {[col1, col2].map((col, ci) => (
          <div key={ci} className={"py-3 " + (ci === 0 ? "border-r border-line" : "")}>
            {col.map((t) => (
              <Link
                key={t.slug}
                href={"/treatments/" + t.slug + "/"}
                onClick={onNavigate}
                className="group block px-5 py-2.5 hover:bg-red-wash/60 transition-colors duration-150"
              >
                <span className="flex items-center justify-between text-[14.5px] font-semibold text-ink group-hover:text-brand-red-strong transition-colors duration-150">
                  {t.title}
                  <ChevronRight className="w-3.5 h-3.5 text-iris-grey group-hover:text-brand-red-strong group-hover:translate-x-0.5 transition-all duration-150" />
                </span>
                <span className="mt-0.5 block text-[12.5px] leading-snug text-ink-soft line-clamp-1">
                  {t.description}
                </span>
              </Link>
            ))}
          </div>
        ))}
        {/* Feature card — routes to consultation, per spec copy */}
        <Link
          href="/contact-us/"
          onClick={onNavigate}
          className="group relative flex flex-col justify-end bg-ink-navy text-left overflow-hidden"
        >
          <Image
            src="/images/treatments/c3.jpg"
            alt="Slit-lamp imaging at Mungale Eye Hospital"
            width={400}
            height={560}
            className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="relative p-4 pt-20 bg-gradient-to-t from-ink-navy via-ink-navy/70 to-transparent">
            <p className="text-[13px] font-semibold text-white leading-snug">
              Not sure where to start?
            </p>
            <p className="mt-1 text-[12.5px] text-white/65 leading-snug">
              Book a consultation
            </p>
            <ArrowUpRight className="mt-2 w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [stripGone, setStripGone] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { large, toggle } = useTextSize();

  // Auto-hide on scroll down (past 160px), return on scroll up or near
  // top. Utility strip collapses after 40px. rAF-throttled.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setScrolled(y > 24);
      setStripGone(y > 40);
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

  // Dropdowns open on CLICK (hover-opened panels collapsed when the
  // cursor crossed the gap between the nav item and the panel). Close on
  // outside pointerdown and Escape.
  const navRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!openSub) return;
    const onDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenSub(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSub(null);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openSub]);

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
        {/* When scrolled, the whole band gets a solid backdrop so page
            content can't peek through the transparent gap above the
            floating pill (the "announcement bar bleed" bug). */}
        <div
          className={
            "transition-[transform,background-color] duration-300 motion-reduce:transition-none " +
            (scrolled ? "bg-paper/95 backdrop-blur-[8px] shadow-[0_1px_0_rgba(14,17,22,0.06)] " : "") +
            (hidden ? "-translate-y-[130%] pointer-events-none " : "")
          }
        >
          {/* Utility strip — ink-navy, collapses after 40px scroll */}
          <div
            className={
              "hidden lg:block bg-ink-navy overflow-hidden transition-[height,opacity] duration-300 motion-reduce:transition-none " +
              (stripGone ? "h-0 opacity-0 invisible" : "h-9 opacity-100")
            }
          >
            <div className="max-w-site mx-auto px-12 h-9 flex items-center justify-between text-[12.5px]">
              <div className="flex items-center gap-5 text-white/75">
                <a
                  href={"tel:" + siteConfig.phone.replace(/[\s-]/g, "")}
                  className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
                <a
                  href={"mailto:" + siteConfig.email}
                  className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-5 text-white/60">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {siteConfig.hours.weekdays} · {siteConfig.hours.time}
                </span>
                <a
                  href={"tel:" + siteConfig.emergencyPhone.replace(/[\s-]/g, "")}
                  className="flex items-center gap-1.5 font-semibold text-[#ff8f8f] hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  Emergency: {siteConfig.emergencyPhone}
                </a>
                <button
                  type="button"
                  onClick={toggle}
                  aria-pressed={large}
                  aria-label="Toggle larger text"
                  title="Text size"
                  className="ml-1 flex items-baseline gap-0.5 px-1.5 py-0.5 rounded text-white/60 hover:text-white transition-colors duration-200"
                >
                  <span className="text-[11px] leading-none">A</span>
                  <span className={"text-[14px] font-bold leading-none " + (large ? "text-[#ff8f8f]" : "")}>
                    A+
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Floating pill — solid porcelain-white (96%) so it reads crisp
              over both dark and light sections; subtle shadow past 24px;
              auto-hides on scroll-down, returns on scroll-up. */}
          <div className="mx-auto mt-3 lg:mt-4 w-[calc(100%-1.5rem)] lg:w-[calc(100%-3rem)] max-w-6xl">
            <div
              className={
                "relative flex items-center justify-between rounded-full bg-white/95 backdrop-blur-[12px] border border-line h-[72px] transition-shadow duration-300 motion-reduce:transition-none " +
                (scrolled ? "shadow-[0_6px_20px_rgba(14,17,22,0.08)]" : "shadow-none")
              }
            >
              {/* Logo — official SVG asset, rendered at 44px so the
                  wordmark stays readable (vector, never upscaled). */}
              <Link
                href="/"
                className="flex items-center shrink-0 pl-6 lg:pl-8"
                aria-label={siteConfig.name + " — home"}
              >
                <img
                  src="/images/hero/httpsmungaleeyehospital-logo.svg"
                  alt={siteConfig.name + " logo"}
                  className="h-[44px] w-auto object-contain"
                  width={196}
                  height={82}
                />
              </Link>

              {/* Desktop nav — absolutely centered, flat editorial links */}
              <nav
                ref={navRef}
                className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
                aria-label="Main navigation"
              >
                {navItems.map((item) => {
                  const mega = item.label === "Treatments";
                  const hasSub = item.subItems?.length > 0;
                  const open = openSub === item.label;
                  const itemCls =
                    "nav-item font-label-md text-[15px] font-medium inline-flex items-center gap-1.5 transition-colors duration-200 " +
                    (isActive(item) ? "text-ink" : "text-ink/85 hover:text-ink");
                  return (
                    <div
                      key={item.label}
                      className={mega ? "static" : "relative"}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) setOpenSub(null);
                      }}
                    >
                      {hasSub && item.href === "#" ? (
                        /* Pure dropdown (Resources) — a button, not a link */
                        <button
                          type="button"
                          onClick={() => setOpenSub(open ? null : item.label)}
                          aria-expanded={open}
                          aria-haspopup="true"
                          className={itemCls + " px-3 py-2"}
                        >
                          {item.label}
                          <span className="text-ink/45" aria-hidden="true">
                            <MicroChevron open={open} />
                          </span>
                        </button>
                      ) : hasSub ? (
                        /* Real link + separate chevron toggle (Treatments) */
                        <span className="inline-flex items-center">
                          <Link
                            href={item.href}
                            data-active={isActive(item) || undefined}
                            aria-current={isActive(item) ? "page" : undefined}
                            className={itemCls + " pl-3 py-2 pr-1"}
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setOpenSub(open ? null : item.label)}
                            aria-expanded={open}
                            aria-haspopup="true"
                            aria-label={"Toggle " + item.label + " menu"}
                            className="text-ink/45 hover:text-ink p-1.5 transition-colors duration-200"
                          >
                            <MicroChevron open={open} />
                          </button>
                        </span>
                      ) : (
                        <Link
                          href={item.href}
                          data-active={isActive(item) || undefined}
                          aria-current={isActive(item) ? "page" : undefined}
                          className={itemCls + " px-3 py-2"}
                        >
                          {item.label}
                        </Link>
                      )}
                      {/* Dropdown — always mounted; CSS fade/slide 150ms.
                          `invisible` keeps closed panels unfocusable. */}
                      {item.subItems?.length > 0 && (
                        <div
                          aria-hidden={openSub !== item.label}
                          className={
                            "absolute top-full left-1/2 mt-3 -translate-x-1/2 transition-[opacity,transform] duration-150 motion-reduce:transition-none " +
                            (openSub === item.label
                              ? "visible opacity-100 translate-y-0"
                              : "invisible -translate-y-1 opacity-0 pointer-events-none")
                          }
                        >
                            {mega ? (
                              <TreatmentsMegaMenu onNavigate={() => setOpenSub(null)} />
                            ) : (
                              <div className="w-64 bg-paper rounded-2xl border border-line shadow-brand-md overflow-hidden">
                                <div className="py-2">
                                  {item.subItems.map((sub) => (
                                    <Link
                                      key={sub.href}
                                      href={sub.href}
                                      onClick={() => setOpenSub(null)}
                                      className="block px-4 py-2.5 text-[14px] text-ink/80 hover:text-brand-red-strong transition-colors duration-200"
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Right cluster — Call icon + magnetic primary CTA */}
              <div className="flex items-center gap-2 pr-3">
                <a
                  href={"tel:" + siteConfig.phone.replace(/[\s-]/g, "")}
                  aria-label={"Call " + siteConfig.name}
                  className="hidden lg:flex w-10 h-10 rounded-full ring-1 ring-ink/15 text-ink items-center justify-center hover:ring-brand-red-strong/50 hover:text-brand-red-strong transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <Link
                  href="/contact-us/"
                  className="hidden lg:inline-flex h-11 pl-5 pr-1.5 items-center gap-2.5 bg-primary text-white text-[14px] font-semibold rounded-full shadow-[0_1px_2px_rgba(14,17,22,0.15)] hover:bg-primary-fixed transition-colors duration-200"
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
                  className="lg:hidden w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_1px_3px_rgba(14,17,22,0.18)]"
                >
                  <CalendarDays className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center text-ink hover:text-brand-red-strong transition-colors"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                >
                  {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <MobileNavDrawer
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          textSizeLarge={large}
          onToggleTextSize={toggle}
        />
      </header>
      {/* Flow spacer — fixed strip (36px desktop) + pill preserve page
          layout (hero and everything below shift nothing). */}
      <div className="h-[100px] lg:h-[136px]" aria-hidden="true" />
    </>
  );
}
