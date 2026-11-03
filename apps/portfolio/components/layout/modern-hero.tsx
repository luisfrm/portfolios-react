"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SPACING } from "@/lib/constants";
import { Button } from "@portfolio/ui/components/button";
import { DownloadIcon, MailIcon } from "@portfolio/shared/components/icons";
import { useTranslations } from "next-intl";
import { useScrollTo, useHeroActions } from "@/hooks";

interface ModernHeroProps {
  children?: ReactNode;
  className?: string;
}

/**
 * Hero as a left-aligned masthead on the page grid. The old blurred colour
 * blobs are gone; the background is a faint drafted grid, which says
 * "engineering" instead of "decorative gradient".
 */
export function ModernHero({ children, className }: ModernHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden border-b border-border",
        className
      )}
      id="hero"
    >
      <div className="hero-grid-paper pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
        <div className={SPACING.HERO_SPACING}>{children}</div>
      </div>
    </section>
  );
}

export function HeroContent() {
  const { scrollToElement } = useScrollTo();
  const t = useTranslations();
  const { handleDownloadCV } = useHeroActions();

  const handleContactClick = () => {
    scrollToElement("contact-form");
  };

  return (
    <>
      <h1 className="max-w-4xl font-heading text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        {t("personal.name")}
      </h1>
      <h2 className="font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
        {t("personal.role")}
      </h2>
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {t("personal.about")}
      </p>
      <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center">
        <Button
          id="download-cv-button"
          onClick={handleDownloadCV}
          variant="theme-primary"
          size="hero"
        >
          <DownloadIcon className="mr-2" />
          {t("personal.downloadText")}
        </Button>
        <Button
          id="get-in-touch-button"
          onClick={handleContactClick}
          variant="theme-secondary"
          size="hero"
        >
          <MailIcon className="mr-2" />
          {t("personal.getInTouchText")}
        </Button>
      </div>
    </>
  );
}
