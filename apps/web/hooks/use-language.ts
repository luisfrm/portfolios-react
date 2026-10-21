"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";

export function useLanguage() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  const changeLanguage = () => {
    const newLocale = locale === "en" ? "es" : "en";
    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join("/") || `/${newLocale}`;
    router.replace(newPath);
  };

  return {
    locale,
    changeLanguage,
    languageLabel: t("common.languageSwitchTo"),
  };
}
