"use client";

import React from "react";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";
import { siteConfig } from "@/content/site";

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  const closeRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
        aria-modal="true"
        role="dialog"
      >
        <div className="absolute inset-0 bg-on-surface/30 backdrop-blur-sm" onClick={onClose} />
        <nav
          className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-card-white rounded-l-3xl shadow-2xl p-6 overflow-y-auto"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Menu</h2>
            <button ref={closeRef} onClick={onClose} className="p-2 hover:bg-surface-tint rounded-full" aria-label="Close menu">
              <X className="w-5 h-5 text-on-surface" />
            </button>
          </div>
          <ul className="space-y-1">
            {/* Same single-CTA rule as desktop: the booking link lives only
                in the gradient button below, not as a duplicate list row. */}
            {siteConfig.navTree
              .filter((item) => item.href !== "/contact-us/")
              .map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 rounded-xl font-label-md text-label-md text-on-surface hover:bg-surface-tint hover:text-primary transition-colors font-semibold"
                  onClick={onClose}
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    {item.subItems?.length > 0 && <ChevronRight className="w-4 h-4 text-on-surface-variant" />}
                  </span>
                </Link>
                {item.subItems?.length > 0 && (
                  <ul className="pl-4 space-y-0.5">
                    {item.subItems.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="block px-4 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-tint transition-colors"
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
          <Link
            href="/contact-us/"
            className="block mt-6 px-5 py-3 bg-gradient-to-r from-primary to-primary-fixed text-on-primary font-label-md text-label-md rounded-full shadow-brand-md text-center hover:shadow-brand-glow transition-all"
            onClick={onClose}
          >
            Book an Appointment
          </Link>
          <div className="mt-6 pt-6 border-t border-border-subtle text-center space-y-1">
            <p className="font-label-sm text-label-sm text-on-surface-variant">{siteConfig.address}</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">{siteConfig.phone}</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">{siteConfig.hours.time} · {siteConfig.hours.sunday}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
