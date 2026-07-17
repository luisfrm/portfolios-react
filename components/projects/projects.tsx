"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { LAYOUT, TYPOGRAPHY, SPACING } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/animated-section";
import { ProjectItem } from "./project-item";
import {
  projectOrder,
  projectTechnologies,
  type ProjectKey,
} from "@/lib/data/projects";

const PROJECTS_STYLES = {
  container: cn(LAYOUT.CONTAINER_MAX_WIDTH, "mx-auto", SPACING.SECTION),
  title: cn(
    TYPOGRAPHY.SECTION_TITLE,
    "bg-gradient-to-r from-blue-600 via-slate-700 to-gray-800 bg-clip-text text-transparent",
    "dark:from-blue-400 dark:via-slate-400 dark:to-gray-300",
    "mb-4"
  ),
  decorativeLine:
    "w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-700 mx-auto mb-8 sm:mb-12 lg:mb-16 rounded-full",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12",
} as const;

const getDelayClass = (index: number) => {
  const delayClasses = ["delay-1", "delay-2", "delay-3", "delay-4"];
  return delayClasses[index % delayClasses.length];
};

export function Projects() {
  const t = useTranslations();

  const projects = projectOrder.map((key: ProjectKey) => {
    const data = t.raw(`projects.list.${key}`) as {
      title: string;
      description: string;
      imageUrl: string;
      githubUrl?: string;
      liveUrl?: string;
    };
    return {
      key,
      ...data,
      technologies: [...projectTechnologies[key]],
    };
  });

  if (projects.length === 0) return null;

  return (
    <section id="projects" className={PROJECTS_STYLES.container}>
      <AnimatedSection animation="fade-scale" delay={0}>
        <div className="text-center">
          <h2 className={PROJECTS_STYLES.title}>{t("projects.title")}</h2>
          <div className={PROJECTS_STYLES.decorativeLine} />
        </div>
      </AnimatedSection>
      <div className={PROJECTS_STYLES.grid}>
        {projects.map((project, index) => (
          <ProjectItem
            key={project.key}
            project={project}
            delayClass={getDelayClass(index)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
