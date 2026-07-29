"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { useTranslations } from "next-intl";
import { ExternalLink, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { LAYOUT, TYPOGRAPHY, SPACING } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/animated-section";
import { SKILLS_CATEGORIES_DATA, type Skill } from "@/lib/data/skills";

/* Hallmark · pre-emit critique: P5 H5 E5 S4 R5 V5 */

export function Skills() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // Refs for height animation — never destroy the wrapper node
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prevHeightRef = useRef<number>(0);
  const [animHeight, setAnimHeight] = useState<string>("auto");

  const categories = ["ALL", ...SKILLS_CATEGORIES_DATA.map((c) => c.category)];

  const filteredData =
    selectedCategory === "ALL"
      ? SKILLS_CATEGORIES_DATA
      : SKILLS_CATEGORIES_DATA.filter((c) => c.category === selectedCategory);

  // Capture current height BEFORE the state change causes a re-render
  const handleCategoryChange = (cat: string) => {
    if (wrapperRef.current) {
      prevHeightRef.current = wrapperRef.current.getBoundingClientRect().height;
    }
    setSelectedCategory(cat);
  };

  // After React renders the new filtered content, run the double-frame animation
  useLayoutEffect(() => {
    const el = wrapperRef.current;
    // Skip on initial mount (prevHeight is 0)
    if (!el || prevHeightRef.current === 0) return;

    const newHeight = el.scrollHeight;

    // Frame 1: lock wrapper at the old height so the browser paints it frozen
    setAnimHeight(`${prevHeightRef.current}px`);

    // Frame 2 (double rAF): allow browser to commit frame 1 paint, then
    // set the new height so the CSS transition can interpolate smoothly
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimHeight(`${newHeight}px`);
      });
    });
  }, [selectedCategory]);

  return (
    <section id="skills" className={cn(LAYOUT.CONTAINER_MAX_WIDTH, "mx-auto", SPACING.SECTION)}>
      <AnimatedSection animation="fade-scale" delay={0}>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={cn(TYPOGRAPHY.SECTION_TITLE, "text-3xl sm:text-4xl font-bold tracking-tight text-foreground")}>
            {t("skills.title")}
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full" />
        </div>
      </AnimatedSection>

      {/* Category Tab Filter Pills */}
      <AnimatedSection animation="fade-up" delay={100}>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                  "px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-full transition-all duration-200 border",
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 dark:bg-blue-500 dark:border-blue-500"
                    : "bg-card text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-blue-500/60 hover:text-foreground"
                )}
              >
                {cat === "ALL" ? "[ ALL ]" : cat}
              </button>
            );
          })}
        </div>
      </AnimatedSection>

      {/*
        Outer wrapper holds the CSS height transition.
        - Same DOM node is always kept (no key destruction).
        - height goes from prevHeight → newHeight via double-rAF.
        - onTransitionEnd resets to "auto" for responsive behaviour.
      */}
      <div
        style={{ height: animHeight }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        onTransitionEnd={() => {
          // Only reset to auto after the height animation, not opacity etc.
          setAnimHeight("auto");
          prevHeightRef.current = 0;
        }}
      >
        {/* Inner grid — stable node, no key, no animate-fade-up class */}
        <div
          ref={wrapperRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredData.map((catData, catIndex) => (
            <div
              key={catData.category}
              className="group h-full bg-card/90 backdrop-blur-md rounded-2xl p-6 border border-slate-300 dark:border-slate-800 shadow-xs hover:border-blue-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
              style={{ transitionDelay: `${catIndex * 30}ms` }}
            >
              {/* Category Title Header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200 dark:border-slate-800">
                <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  {catData.category}
                </h3>
              </div>

              {/* Skill Pills Matrix */}
              <div className="flex flex-wrap gap-2 pt-1 flex-1">
                {catData.skills.map((skill: Skill, skillIndex: number) => (
                  <a
                    key={`${catData.category}-${skillIndex}`}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 font-mono text-xs font-medium text-slate-800 dark:text-slate-200 shadow-2xs hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                    aria-label={`${skill.name} documentation`}
                  >
                    <span>{skill.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/pill:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
