"use client";

import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { useScrollTo } from "./use-scroll-to";

export function useHeroActions() {
  const t = useTranslations();
  const { scrollToElement } = useScrollTo();

  const handleDownloadCV = useCallback(() => {
    const url = t("cv.url");
    window.open(url, "_blank", "noopener,noreferrer");
  }, [t]);

  const handleContactClick = useCallback(() => {
    scrollToElement("contact-form");
  }, [scrollToElement]);

  return {
    handleDownloadCV,
    handleContactClick,
  };
}
