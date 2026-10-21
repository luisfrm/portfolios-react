import { en } from "./en";
import { es } from "./es";
import type { Locale } from "@/lib/routes";

export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export { es, en };
