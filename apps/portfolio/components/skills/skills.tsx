"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { LAYOUT } from "@/lib/constants";
import { SectionHead } from "@/components/layout/section-head";
import { SKILLS_CATEGORIES_DATA } from "@/lib/data/skills";

/* Hallmark · pre-emit critique: P5 H5 E5 S4 R5 V5 */

export function Skills() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", ...SKILLS_CATEGORIES_DATA.map((c) => c.category)];

  const rows =
    selectedCategory === "ALL"
      ? SKILLS_CATEGORIES_DATA
      : SKILLS_CATEGORIES_DATA.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className={LAYOUT.CONTAINER_MAX_WIDTH}>
      <SectionHead index="04" title={t("skills.title")} />

      {/* Filters as a text row, not a stack of pills */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pb-8">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={isActive}
              className={cn(
                "py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
                isActive
                  ? "text-foreground underline decoration-primary decoration-2 underline-offset-8"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cat === "ALL" ? "[ ALL ]" : cat}
            </button>
          );
        })}
      </div>

      {/* Spec sheet: one row per category */}
      <div className="border-t border-border">
        {rows.map((catData) => (
          <div
            key={catData.category}
            className="grid gap-2 border-b border-border py-5 sm:grid-cols-12 sm:gap-8 sm:py-6"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:col-span-3">
              {catData.category}
            </h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:col-span-9">
              {catData.skills.map((skill) => (
                <li key={skill.name}>
                  <a
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${skill.name} documentation`}
                    className="text-sm text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {skill.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
