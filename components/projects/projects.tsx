"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LAYOUT, TYPOGRAPHY, SPACING } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/animated-section";
import { ProjectItem } from "./project-item";
import { projects } from "@/lib/data/projects";

/* Hallmark · pre-emit critique: P5 H5 E5 S4 R5 V5 */

const getDelayClass = (index: number) => {
  const delayClasses = ["delay-1", "delay-2", "delay-3", "delay-4"];
  return delayClasses[index % delayClasses.length];
};

export function Projects() {
  const t = useTranslations();
  const locale = useLocale();

  // Merge static data (technologies) with i18n text (title, description, urls) by key
  const i18nList = t.raw("projects.list") as Array<{
    key: string;
    title: string;
    description: string;
    imageUrl?: string;
    images?: string[];
    githubUrl?: string;
    liveUrl?: string;
  }>;

  const mergedProjects = projects.map((p) => ({
    ...p,
    ...i18nList.find((item) => item.key === p.key),
  }));

  if (mergedProjects.length === 0) return null;

  // Limit to top 3 preview projects on home page (1 Featured Hero + 2 Secondary)
  const previewProjects = mergedProjects.slice(0, 3);
  const featuredProject = previewProjects[0];
  const secondaryProjects = previewProjects.slice(1);

  return (
    <section id="projects" className={cn(LAYOUT.CONTAINER_MAX_WIDTH, "mx-auto", SPACING.SECTION)}>
      <AnimatedSection animation="fade-scale" delay={0}>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={cn(TYPOGRAPHY.SECTION_TITLE, "text-3xl sm:text-4xl font-bold tracking-tight text-foreground")}>
            {t("projects.title")}
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full" />
        </div>
      </AnimatedSection>

      <div className="space-y-8 sm:space-y-10">
        {/* Asymmetric Featured Hero Project (Full Width) */}
        {featuredProject && (
          <ProjectItem
            project={featuredProject}
            delayClass={getDelayClass(0)}
            index={0}
            isFeatured={true}
          />
        )}

        {/* Secondary Projects Grid (2 Columns) */}
        {secondaryProjects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {secondaryProjects.map((project, index) => (
              <ProjectItem
                key={project.key}
                project={project}
                delayClass={getDelayClass(index + 1)}
                index={index + 1}
                isFeatured={false}
              />
            ))}
          </div>
        )}
      </div>

      {/* View All Projects Button Section */}
      <div className="pt-10 text-center">
        <Link href={`/${locale}/projects`}>
          <Button
            variant="outline"
            className="gap-2.5 px-8 py-6 text-sm font-mono uppercase tracking-wider rounded-full bg-background/80 backdrop-blur-md border-2 border-blue-500/40 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-xl transition-all duration-300 group"
          >
            {t("projects.viewAll")}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Projects;

