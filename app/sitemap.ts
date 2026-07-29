import type { MetadataRoute } from "next";

/* Next.js dynamic sitemap generator for Search Engine indexing */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luisrivas.site";
  const locales = ["es", "en"];
  const routes = ["", "/projects", "/work-experience"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      const url = `${baseUrl}/${locale}${route}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
