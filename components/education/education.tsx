"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/common/animated-section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  TYPOGRAPHY,
  COLORS,
  SPACING,
  ANIMATION_CLASSES,
} from "@/lib/constants";

const EDUCATION_STYLES = {
  container: cn("max-w-2xl", "mx-auto", SPACING.SECTION),
  card: cn(
    "relative bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-sm border-2 border-border/50",
    "hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-600/10",
    "transition-all duration-300 ease-out",
    COLORS.TEXT_PRIMARY,
    ANIMATION_CLASSES.ANIMATE_SHOW
  ),
  title: cn(
    TYPOGRAPHY.SECTION_TITLE,
    "bg-gradient-to-r from-blue-600 via-slate-700 to-gray-800 bg-clip-text text-transparent",
    "dark:from-blue-400 dark:via-slate-400 dark:to-gray-300"
  ),
  subtitle: cn(
    TYPOGRAPHY.CARD_TITLE,
    "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text"
  ),
  institution: "text-slate-600 dark:text-slate-400 font-medium",
  period: cn(
    TYPOGRAPHY.SMALL_TEXT,
    "text-blue-600 dark:text-blue-400 font-medium"
  ),
  description: cn(
    COLORS.TEXT_SECONDARY,
    TYPOGRAPHY.DESCRIPTION,
    "leading-relaxed text-pretty"
  ),
  list: "list-disc list-outside pl-5 space-y-2",
} as const;

export function Education() {
  const t = useTranslations();

  return (
    <section id="education" className={EDUCATION_STYLES.container}>
      <AnimatedSection animation="fade-scale" delay={0}>
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className={EDUCATION_STYLES.title}>{t("education.title")}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-700 mx-auto mt-2 sm:mt-3 lg:mt-4 rounded-full" />
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={200}>
        <Card className={EDUCATION_STYLES.card}>
          <CardHeader className="pb-4">
            <div>
              <h3 className={EDUCATION_STYLES.subtitle}>
                {t("education.degree")}{" "}
                <span className={EDUCATION_STYLES.institution}>
                  @ {t("education.institution")}
                </span>
              </h3>
              <time className={EDUCATION_STYLES.period}>
                {t("education.period")}
              </time>
            </div>
          </CardHeader>
          <CardContent className={SPACING.CARD_CONTENT}>
            <p className={EDUCATION_STYLES.description}>
              {t("education.description")}
            </p>
            <ul>
              {(t.raw("education.items") as string[]).map(
                (item: string, idx: number) => (
                  <li key={idx} className="leading-relaxed">
                    {idx === 0 ? (
                      <strong>
                        <p className={EDUCATION_STYLES.description}>{item}</p>
                      </strong>
                    ) : (
                      <p className={EDUCATION_STYLES.description}>{item}</p>
                    )}
                  </li>
                )
              )}
            </ul>
          </CardContent>
        </Card>
      </AnimatedSection>
    </section>
  );
}

export default Education;
