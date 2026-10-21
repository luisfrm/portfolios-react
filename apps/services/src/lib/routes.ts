import {
  getService,
  serviceKeyFromSlug,
  type CaseKey,
  type ServiceKey,
} from "@/data/services";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

const segments = {
  es: {
    home: "",
    services: "servicios",
    work: "trabajos",
    process: "proceso",
    about: "sobre-mi",
    contact: "contacto",
    privacy: "privacidad",
    thanks: "gracias",
    notFound: "404",
  },
  en: {
    home: "",
    services: "services",
    work: "work",
    process: "process",
    about: "about",
    contact: "contact",
    privacy: "privacy",
    thanks: "thanks",
    notFound: "404",
  },
} as const;

export type PageKey = keyof (typeof segments)["es"];

export function pagePath(locale: Locale, key: PageKey): string {
  const segment = segments[locale][key];
  return segment ? `/${locale}/${segment}/` : `/${locale}/`;
}

export function servicePath(locale: Locale, key: ServiceKey): string {
  return `/${locale}/${segments[locale].services}/${getService(key).slugs[locale]}/`;
}

export function casePath(locale: Locale, key: CaseKey): string {
  return `/${locale}/${segments[locale].work}/${key}/`;
}

export function pageAlternates(key: PageKey): Record<Locale, string> {
  return {
    es: pagePath("es", key),
    en: pagePath("en", key),
  };
}

export function serviceAlternates(key: ServiceKey): Record<Locale, string> {
  return {
    es: servicePath("es", key),
    en: servicePath("en", key),
  };
}

export function caseAlternates(key: CaseKey): Record<Locale, string> {
  return {
    es: casePath("es", key),
    en: casePath("en", key),
  };
}

export function serviceKeyForLocale(
  locale: Locale,
  slug: string,
): ServiceKey | undefined {
  return serviceKeyFromSlug(locale, slug);
}
