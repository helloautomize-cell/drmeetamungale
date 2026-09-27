import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old WordPress URLs end with "/" — preserve them as canonical.
  trailingSlash: true,
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
