"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, Building2 } from "lucide-react";
import { Layout, MainContent, Footer } from "@/components/layout";
import Navigation from "@/components/navigation/navigation";
import { MouseMoveEffect } from "@/components/mouse-move/mouse-move-effect";
import { UpWidget } from "@/components/common/up-widget";
import { AnimatedSection } from "@/components/common/animated-section";
import Skills from "@/components/skills/skills";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LAYOUT, TYPOGRAPHY, COLORS } from "@/lib/constants";
import {
  workExperienceOrder,
  workExperienceSkills,
  type WorkExperienceKey,
} from "@/lib/data/workExperience";

/* Hallmark · pre-emit critique: P5 H5 E5 S4 R5 V5 */

const SKILL_BADGE_STYLE =
  "bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-200 text-xs font-mono";

export default function WorkExperiencePage() {
  const t = useTranslations();
  const locale = useLocale();

  const experiences = workExperienceOrder.map((key: WorkExperienceKey) => {
    const data = t.raw(`workExperiences.list.${key}`) as {
      company: string;
      position: string;
      period: string;
      description: string;
      items: string[];
    };
    return {
      key,
      ...data,
      skills: [...workExperienceSkills[key]],
    };
  });

  return (
    <Layout>
      <MouseMoveEffect />
      <UpWidget />
      <Navigation />
      {/* Added pt-24 sm:pt-28 lg:pt-32 to clear fixed top navigation bar */}
      <MainContent className="pt-24 sm:pt-28 lg:pt-32">
        <div className={cn(LAYOUT.CONTAINER_MAX_WIDTH, "mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 pb-12")}>
          
          {/* Header section with back navigation */}
          <AnimatedSection animation="fade-down" delay={0}>
            <div className="space-y-6 border-b border-border/40 pb-8">
              <Link href={`/${locale}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-slate-600 dark:text-slate-400 hover:text-foreground font-mono text-xs uppercase tracking-wider"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  {t("workExperiences.backToHome")}
                </Button>
              </Link>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest font-semibold">
                    [01] · Timeline
                  </span>
                </div>
                <h1
                  className={cn(
                    TYPOGRAPHY.SECTION_TITLE,
                    "text-left sm:text-left text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
                  )}
                >
                  {t("workExperiences.pageTitle")}
                </h1>
                <p className={cn(COLORS.TEXT_MUTED, "text-base sm:text-lg max-w-2xl leading-relaxed")}>
                  {t("workExperiences.pageSubtitle")}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Editorial Ledger / Asymmetric Split Timeline */}
          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => (
              <AnimatedSection
                key={exp.key}
                animation="fade-up"
                delay={index * 80}
              >
                <article className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 border-b border-slate-200 dark:border-slate-800 pb-12 sm:pb-16">
                  
                  {/* Left Rail Column: Index, Dates, Company metadata */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-slate-400 dark:text-slate-500 font-bold">
                        0{index + 1}
                      </span>
                      <span className="h-px w-6 bg-border/60" />
                      <time className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400">
                        {exp.period}
                      </time>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.position}
                    </h2>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium pt-1">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Main Content Column: Narrative, Bullets & Skills */}
                  <div className="lg:col-span-8 space-y-6">
                    {exp.description && (
                      <p className="text-slate-700 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
                        {exp.description}
                      </p>
                    )}

                    {exp.items && exp.items.length > 0 && (
                      <ul className="space-y-3.5 pt-2">
                        {exp.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                            <span className="font-mono text-slate-400 select-none mt-0.5">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Skill Badges Block */}
                    <div className="pt-4 space-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, i) => (
                          <Badge
                            key={`skill-page-${i}`}
                            variant="outline"
                            className={SKILL_BADGE_STYLE}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                </article>
              </AnimatedSection>
            ))}
          </div>

          <div className="w-full border-t border-slate-200 dark:border-slate-800 my-12 sm:my-16" />
          <Skills />

        </div>
      </MainContent>
      <Footer />
    </Layout>
  );
}
