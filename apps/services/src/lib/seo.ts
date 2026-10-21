import { site } from "@/data/site";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/lib/routes";

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

export function professionalServiceSchema(
  locale: Locale,
  dict: Dictionary,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#service`,
    name: site.name,
    url: site.url,
    email: site.email,
    description: dict.seo.home.description,
    image: site.ogImage,
    areaServed: "Worldwide",
    availableLanguage: ["es", "en"],
    knowsAbout: [
      "Web design",
      "Web development",
      "Astro",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Cloudflare",
    ],
    founder: {
      "@type": "Person",
      name: site.name,
      url: site.portfolio,
      sameAs: [site.github, site.linkedin],
    },
    sameAs: [site.github, site.linkedin, site.portfolio],
    inLanguage: locale,
  };
}

export function websiteSchema(locale: Locale): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: locale,
  };
}
