import type { MetadataRoute } from "next";

/* Next.js dynamic robots.txt generator for Search Engine indexing */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://luisrivas.site";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
