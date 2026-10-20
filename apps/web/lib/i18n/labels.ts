import type { Locale } from "./routing";

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const locales: readonly Locale[] = ["en", "es"];
