import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old WordPress URLs end with "/" — preserve them as canonical.
  trailingSlash: true,
  async headers() {
    return [
      {
        // Security headers on every route. CSP covers only what the site
        // actually loads: self-hosted assets and fonts, and the Google
        // Maps iframe (click-to-load facade). No third-party scripts.
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
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "font-src 'self'",
              "connect-src 'self'",
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
