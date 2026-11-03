import type { Locale } from "@/lib/i18n/config";

// Shared social card. The image is a static 1200x630 PNG in `public/`, so every
// route points at it and only the alt text changes with the locale.
const ALT: Record<Locale, string> = {
  en: "Luis Rivas — Senior Full Stack Developer and AI Engineer",
  es: "Luis Rivas — Desarrollador Full Stack Senior e Ingeniero de IA",
};

export function ogImage(locale: Locale) {
  return {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: ALT[locale] ?? ALT.en,
  };
}
