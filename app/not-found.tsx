import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";

// ─── 6.10 not-found (site-styled 404) ───────────────────────────────────
export default function NotFound() {
  return (
    <section className="py-space-2xl bg-surface">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest shadow-sm mb-6">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
            Error 404
          </span>
        </span>
        <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight">
          Page Not Found
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-4 leading-relaxed">
          The page you are looking for may have been moved or no longer exists.
          Let us help you find your way back to clearer vision.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-[18px] h-[18px]" />
            <span>Back to Home</span>
          </Link>
          <a
            href={"tel:" + siteConfig.phone.replace(/\s/g, "")}
            className="px-6 py-3 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-[18px] h-[18px]" />
            <span>Call {siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
