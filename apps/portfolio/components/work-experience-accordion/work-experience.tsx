"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { LAYOUT } from "@/lib/constants";
import { SectionHead } from "@/components/layout/section-head";
import { workExperiences } from "@/lib/data/workExperience";

/* Hallmark · pre-emit critique: P5 H5 E5 S4 R5 V5 */

const META = "font-mono text-[11px] uppercase tracking-[0.16em]";

function ExperienceRow({
  data,
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
  isLast?: boolean;
}) {
  const previewItems = data.items ? data.items.slice(0, 3) : [];

  return (
    <article
      className={cn(
        "grid gap-6 py-8 lg:grid-cols-12 lg:gap-10 lg:py-10",
        !isLast && "border-b border-border"
      )}
    >
      {/* Left rail: period, role, company */}
      <div className="lg:col-span-4">
        <div className="flex items-center gap-3">
          <time className={cn(META, "font-semibold text-primary")}>
            {data.period}
          </time>
        </div>
        <h3 className="mt-3 font-heading text-xl font-bold tracking-tight text-foreground">
          {data.position}
        </h3>
        <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="h-3.5 w-3.5" />
          <span>{data.company}</span>
        </p>
      </div>

      {/* Body: description, bullets, stack */}
      <div className="lg:col-span-8">
        {data.description && (
          <p className="text-base leading-relaxed text-muted-foreground">
            {data.description}
          </p>
        )}

        {previewItems.length > 0 && (
          <ul className="mt-4 space-y-2">
            {previewItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-base leading-relaxed text-foreground"
              >
                <span className="mt-0.5 select-none font-mono text-muted-foreground">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <p className={cn(META, "mt-5 text-muted-foreground")}>
          {data.skills.join(" / ")}
        </p>
      </div>
    </article>
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
    <section id="experience" className={LAYOUT.CONTAINER_MAX_WIDTH}>
      <SectionHead
        title={t("workExperiences.title")}
        aside={
          <Link
            href={`/${locale}/work-experience`}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-foreground transition-colors hover:text-primary"
          >
            {t("workExperiences.viewMore")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        }
      />

      <div className="border-t border-border">
        {experiences.map((exp, index) => (
          <ExperienceRow
            key={exp.key}
            data={exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
