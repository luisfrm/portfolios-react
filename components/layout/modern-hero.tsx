"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HERO_STYLES, TYPOGRAPHY, SPACING } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/animated-section";
import { Button } from "@/components/ui/button";
import { DownloadIcon, MailIcon } from "@/components/icons";
import { useTranslations } from "next-intl";
import { useScrollTo, useHeroActions } from "@/hooks";

interface ModernHeroProps {
  children?: ReactNode;
  className?: string;
}

function DecorativeElements() {
  return (
    <div className={HERO_STYLES.decorativeElements}>
      <AnimatedSection animation="fade-scale" delay={1000} threshold={0}>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-600/10 dark:bg-blue-600/20 rounded-full opacity-60 animate-pulse" />
      </AnimatedSection>
      <AnimatedSection animation="fade-scale" delay={1200} threshold={0}>
        <div className="absolute top-40 right-20 w-32 h-32 bg-slate-600/10 dark:bg-slate-600/20 rounded-full opacity-40 animate-bounce" />
      </AnimatedSection>
      <AnimatedSection animation="fade-scale" delay={1400} threshold={0}>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-gray-600/10 dark:bg-gray-600/20 rounded-full opacity-50 animate-pulse" />
      </AnimatedSection>
      <AnimatedSection animation="fade-scale" delay={1600} threshold={0}>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-slate-700/10 dark:bg-slate-700/20 rounded-full opacity-30 animate-bounce" />
      </AnimatedSection>
      <AnimatedSection animation="fade-scale" delay={800} threshold={0}>
        <div className="absolute top-2/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-600/10 to-slate-600/10 dark:from-blue-600/20 dark:to-slate-600/20 rounded-full opacity-20 blur-xl animate-pulse" />
      </AnimatedSection>
      <AnimatedSection animation="fade-scale" delay={1000} threshold={0}>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-r from-slate-600/10 to-gray-700/10 dark:from-slate-600/20 dark:to-gray-700/20 rounded-full opacity-15 blur-2xl animate-pulse" />
      </AnimatedSection>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <AnimatedSection animation="fade-up" delay={2000} threshold={0}>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-gray-400 dark:text-gray-500">
          <div className="text-sm mb-2">Scroll</div>
          <div className="w-px h-8 bg-current" />
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-current mt-1" />
        </div>
      </div>
    </AnimatedSection>
  );
}

export function ModernHero({ children, className }: ModernHeroProps) {
  return (
    <section
      className={cn(
        "h-[800px] lg:min-h-screen relative overflow-hidden flex items-center justify-center w-full",
        className
      )}
      id="hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-background" />
      <DecorativeElements />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className={SPACING.HERO_SPACING}>{children}</div>
      </div>
      <ScrollIndicator />
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
      <AnimatedSection animation="fade-scale" delay={200} threshold={0}>
        <h1 className={cn(TYPOGRAPHY.HERO_NAME, HERO_STYLES.nameGradient)}>
          {t("personal.name")}
        </h1>
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={400} threshold={0}>
        <h2 className={cn(TYPOGRAPHY.HERO_ROLE, HERO_STYLES.roleHighlight)}>
          {t("personal.role")}
        </h2>
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={600} threshold={0}>
        <p
          className={cn(
            TYPOGRAPHY.HERO_ABOUT,
            "text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          )}
        >
          {t("personal.about")}
        </p>
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={800} threshold={0}>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
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
      </AnimatedSection>
    </>
  );
}
