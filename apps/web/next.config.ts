import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

const nextConfig: NextConfig = {
  // Workspace packages ship TypeScript source, so Next must compile them.
  transpilePackages: ["@portfolio/ui", "@portfolio/shared"],
  async redirects() {
    return [
      // No public login exists. Send stray /login probes to the home page
      // instead of emitting repeated 404s from bots and extensions.
      {
        source: "/:locale(en|es)/login",
        destination: "/:locale",
        permanent: false,
      },
      {
        source: "/login",
        destination: "/en",
        permanent: false,
      },
    ];
  },
  images: {
    // Disable Vercel image optimization — images are served directly
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dw4ecbwo9/**",
      },
      {
        protocol: "https",
        hostname: "r2-personal.luisrivas.site",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-avatar",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
    ],
  },
};

export default withNextIntl(nextConfig);
