"use client";

import { useTranslations } from "next-intl";
import { GraduationCap, Building2, Calendar, Award } from "lucide-react";
import { AnimatedSection } from "@/components/common/animated-section";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LAYOUT, TYPOGRAPHY, SPACING } from "@/lib/constants";

/* Hallmark · pre-emit critique: P5 H5 E5 S4 R5 V5 */

export function Education() {
  const t = useTranslations();
  const items = t.raw("education.items") as string[];

  return (
    <section id="education" className={cn(LAYOUT.CONTAINER_MAX_WIDTH, "mx-auto", SPACING.SECTION)}>
      <AnimatedSection animation="fade-scale" delay={0}>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={cn(TYPOGRAPHY.SECTION_TITLE, "text-3xl sm:text-4xl font-bold tracking-tight text-foreground")}>
            {t("education.title")}
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full" />
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={150}>
        <article className="relative bg-card/80 backdrop-blur-md rounded-2xl border border-border/50 p-6 sm:p-8 lg:p-10 shadow-md hover:border-blue-500/30 transition-all duration-300">
          
          {/* Top Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/40">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-mono text-xs uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 px-3 py-0.5">
                  <Award className="w-3 h-3 mr-1 inline" />
                  Academic Degree
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>{t("education.degree")}</span>
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 font-medium pt-1">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span>{t("education.institution")}</span>
                </div>
              </div>
            </div>

            <Badge variant="secondary" className="w-fit flex items-center gap-1.5 px-3.5 py-1.5 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <Calendar className="w-3.5 h-3.5" />
              {t("education.period")}
            </Badge>
          </div>

          {/* Body Content & Thesis Showcase (Clean Accent Rail without nested card slop) */}
          <div className="pt-6 space-y-6">
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {t("education.description")}
            </p>

            {items && items.length > 0 && (
              <div className="border-l-2 border-blue-600/40 dark:border-blue-400/40 pl-4 sm:pl-5 py-1 space-y-3">
                {items.map((item: string, idx: number) => (
                  <div key={idx}>
                    {idx === 0 ? (
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                        {item}
                      </h4>
                    ) : (
                      <div className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 pt-1">
                        <span className="font-mono text-slate-400 select-none mt-0.5">—</span>
                        <span>{item}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

        </article>
      </AnimatedSection>
    </section>
  );
}

export default Education;


