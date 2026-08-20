import type { MetadataRoute } from "next";

/* Next.js dynamic sitemap generator for Search Engine indexing */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luisrivas.site";
  const locales = ["en", "es"];
  const routes = ["", "/projects", "/work-experience"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const entries: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${route}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            es: `${baseUrl}/es${route}`,
          },
        },
      });
    }

    sitemapEntries.push(...entries);
  }

  return sitemapEntries;
}
