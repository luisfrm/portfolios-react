"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LAYOUT, TYPOGRAPHY, COLORS, SPACING } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/animated-section";
import { workExperiences } from "@/lib/data/workExperience";

/* Hallmark · pre-emit critique: P5 H5 E5 S4 R5 V5 */

const SKILL_BADGE_STYLE =
  "bg-slate-100 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-500/60 dark:hover:border-blue-400/60 transition-all duration-200 text-xs font-mono font-medium shadow-2xs";

function ExperienceRow({
  data,
  index,
  isLast,
}: {
  data: {
    company: string;
    position: string;
    period: string;
    description: string;
    items: string[];
    skills: readonly string[];
  };
  index: number;
  isLast?: boolean;
}) {
  const t = useTranslations();

  const previewItems = data.items ? data.items.slice(0, 3) : [];

  return (
    <AnimatedSection
      animation="fade-up"
      delay={index * 100}
      className={cn(
        "group relative pb-8 pt-4 transition-colors",
        !isLast && "border-b border-slate-200 dark:border-slate-800"
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
        
        {/* Left Column: Index & Dates */}
        <div className="lg:col-span-4 space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500 font-bold">
              0{index + 1}
            </span>
            <span className="h-px w-4 bg-border/60" />
            <time className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400">
              {data.period}
            </time>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {data.position}
          </h3>
          <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 font-medium">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span>{data.company}</span>
          </div>
        </div>

        {/* Right Column: Description, Item preview & Skill badges */}
        <div className="lg:col-span-8 space-y-4">
          {data.description && (
            <p className={cn(COLORS.TEXT_SECONDARY, "text-base leading-relaxed")}>
              {data.description}
            </p>
          )}

          {previewItems.length > 0 && (
            <ul className="space-y-2 pt-1">
              {previewItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {/* Upgraded bullet item body text to text-base */}
                  <span className="font-mono text-slate-400 select-none mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* All skill badges rendered without truncation */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {data.skills.map((skill, i) => (
              <Badge
                key={`skill-preview-${i}`}
                variant="outline"
                className={SKILL_BADGE_STYLE}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}

export function WorkExperience() {
  const t = useTranslations();
  const locale = useLocale();

  // Merge static data (skills) with i18n text by key
  const i18nList = t.raw("workExperiences.list") as Array<{
    key: string;
    company: string;
    position: string;
    period: string;
    description: string;
    items: string[];
  }>;

  const experiences = workExperiences.map((we) => ({
    ...we,
    ...i18nList.find((item) => item.key === we.key),
  })) as Array<{
    key: string;
    company: string;
    position: string;
    period: string;
    description: string;
    items: string[];
    skills: readonly string[];
  }>;

  return (
    <section id="experience" className={cn(LAYOUT.CONTAINER_MAX_WIDTH, "mx-auto", SPACING.SECTION)}>
      <AnimatedSection animation="fade-scale" delay={0}>
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className={cn(
              TYPOGRAPHY.SECTION_TITLE,
              "text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
            )}
          >
            {t("workExperiences.title")}
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full" />
        </div>
      </AnimatedSection>

      <div className="space-y-2">
        {experiences.map((exp, index) => (
          <ExperienceRow
            key={exp.key}
            data={exp}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>

      <div className="text-center pt-8">
        <Link href={`/${locale}/work-experience`}>
          <Button
            variant="outline"
            className="gap-2 px-6 py-5 text-sm font-mono uppercase tracking-wider rounded-full border-border hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            {t("workExperiences.viewMore")}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default WorkExperience;
