import "server-only";
import type { Locale } from "../config";

const dictionaries = {
  en: () => import("./en").then((m) => m.en),
  es: () => import("./es").then((m) => m.es),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
