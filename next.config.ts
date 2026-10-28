import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old WordPress URLs end with "/" — preserve them as canonical.
  trailingSlash: true,
  async headers() {
    return [
      {
        // Security headers on every route. CSP covers only what the site
        // actually loads: self-hosted assets and fonts, the Google tag
        // (gtag.js + GA4 collection endpoints), and the Google Maps iframe
        // (click-to-load facade).
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            // Verified report-only first: zero real violations across all
            // page types incl. the click-loaded Google Maps iframe.
            // (upgrade-insecure-requests intentionally omitted — it would
            // upgrade http://localhost subresource requests and break local
            // verification; all our resources are same-origin anyway.)
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com",
              "font-src 'self'",
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com",
              "frame-src https://maps.google.com https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
            ].join("; "),
          },
        ],
      },
      {
        // Static media isn't fingerprinted, so cache for 7 days with a
        // week of SWR — photos can be swapped without stale assets living
        // forever, but repeat visits stop re-downloading them.
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=604800",
          },
        ],
      },
      // Preview/staging deployments (Vercel previews, dev servers) must
      // never be indexed — production stays fully indexable.
      ...(process.env["VERCEL_ENV"] && process.env["VERCEL_ENV"] !== "production"
        ? [
            {
              source: "/:path*",
              headers: [
                { key: "X-Robots-Tag", value: "noindex, nofollow" },
              ],
            },
          ]
        : []),
    ];
  },
  async redirects() {
    return [
      // WordPress archive artifacts → closest real routes.
      { source: "/category/:path*", destination: "/blog/", permanent: true },
      { source: "/tag/:path*", destination: "/blog/", permanent: true },
      { source: "/author/:path*", destination: "/blog/", permanent: true },
      { source: "/page/:path*", destination: "/blog/", permanent: true },
    ];
  },
};

export default nextConfig;
