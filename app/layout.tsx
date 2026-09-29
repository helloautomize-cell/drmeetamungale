import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { hospitalJsonLd } from "@/content/seo";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

// Full variable Fraunces — weight range + opsz (optical sizing), SOFT and
// WONK axes loaded for the editorial display face (§2.2).
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name + " — " + siteConfig.tagline,
    template: "%s | " + siteConfig.name,
  },
  description: siteConfig.tagline,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/mungale/og-default.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name + " — eye hospital in Kothi, Vadodara",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/mungale/og-default.jpg"],
  },
  icons: {
    icon: "/images/hero/httpsmungaleeyehospital-logo.svg",
    shortcut: "/images/hero/httpsmungaleeyehospital-logo.svg",
    apple: "/images/hero/cropped-logo-2.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={plusJakarta.variable + " " + fraunces.variable} suppressHydrationWarning>
      <head />
      <body className="font-sans bg-background text-on-surface min-h-screen flex flex-col overflow-x-clip">
        <JsonLd data={hospitalJsonLd()} />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[80] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-on-primary font-label-md text-label-md"
        >
          Skip to content
        </a>
        <Header />
        <main className="flex-1" id="content">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
