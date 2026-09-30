import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old WordPress URLs end with "/" — preserve them as canonical.
  trailingSlash: true,
  async headers() {
    return [
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
