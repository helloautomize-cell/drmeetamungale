"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { siteConfig } from "@/content/site";

// Editorial mobile menu (owner spec): full-height warm off-white panel,
// large links, generous whitespace, small red section labels, strong
// red CTA pinned at the bottom — not a tiny generic dropdown.
interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  textSizeLarge: boolean;
  onToggleTextSize: () => void;
}

export function MobileNavDrawer({ isOpen, onClose, textSizeLarge, onToggleTextSize }: MobileNavDrawerProps) {
  const closeRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const items = siteConfig.navTree.filter((i) => i.href !== "/contact-us/");

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden transition-transform duration-300 ease-out ${
        isOpen
          ? "translate-x-0 pointer-events-auto"
          : "translate-x-full pointer-events-none"
      }`}
      aria-modal="true"
      role="dialog"
      aria-label="Menu"
    >
      <div className="absolute inset-0 bg-background flex flex-col">
        {/* Panel header: logo + close */}
        <div className="h-[76px] shrink-0 px-6 flex items-center justify-between border-b border-secondary/10">
          <img
            src="/images/hero/httpsmungaleeyehospital-logo.svg"
            alt={siteConfig.name + " logo"}
            className="h-[44px] w-auto object-contain"
            width={196}
            height={82}
          />
          <button
            ref={closeRef}
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable body — large links, lots of whitespace */}
        <nav
          className="flex-1 overflow-y-auto px-6 pt-8 pb-6"
          aria-label="Mobile navigation"
        >
          <p className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-primary-fixed font-semibold mb-4">
            Menu
          </p>
          <ul className="space-y-1">
            {items.map((item, i) => (
              <li
                key={item.label}
                className="mb-3 transition-all duration-500 motion-reduce:transition-none"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(18px)",
                  transitionDelay: isOpen ? `${120 + i * 55}ms` : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  className="block py-2 font-display-hero text-[27px] leading-tight text-on-surface hover:text-primary transition-colors duration-200"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
                {item.subItems?.length > 0 && (
                  <ul className="mt-1 mb-2 pl-1 space-y-0.5">
                    {item.subItems.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="block py-2 pl-3 text-[15px] text-on-surface-variant hover:text-primary transition-colors duration-200 border-l border-border-subtle"
                          onClick={onClose}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Direct contact block */}
          <div className="mt-8 pt-7 border-t border-secondary/10">
            <p className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-primary-fixed font-semibold mb-3">
              Contact
            </p>
            <p className="text-[15px] text-on-surface-variant leading-relaxed">
              {siteConfig.address}
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="block mt-2 text-[16px] font-medium text-on-surface hover:text-primary transition-colors"
            >
              {siteConfig.phone}
            </a>
            <p className="mt-2 text-[14px] text-on-surface-variant">
              {siteConfig.hours.time} · {siteConfig.hours.sunday}
            </p>
          </div>

          {/* Text size — same control as the desktop utility strip,
              sharing its state and localStorage key */}
          <div className="mt-6 pt-6 border-t border-secondary/10 flex items-center justify-between">
            <p className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-primary-fixed font-semibold">
              Text size
            </p>
            <button
              type="button"
              onClick={onToggleTextSize}
              aria-pressed={textSizeLarge}
              aria-label="Toggle larger text"
              className="flex min-h-[44px] items-baseline gap-1 px-2 rounded text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="text-[13px] leading-none">A</span>
              <span className={"text-[16px] font-bold leading-none " + (textSizeLarge ? "text-primary-fixed" : "")}>
                A+
              </span>
            </button>
          </div>
        </nav>

        {/* Strong CTA pinned at the bottom — single booking action */}
        <div className="shrink-0 px-6 pt-4 pb-7 border-t border-secondary/10 bg-background">
          <Link
            href="/contact-us/"
            className="flex items-center justify-center w-full h-[52px] bg-primary hover:bg-primary-fixed text-white text-[15px] font-semibold rounded-[13px] shadow-[0_1px_3px_rgba(17,17,18,0.18)] transition-colors duration-200"
            onClick={onClose}
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
