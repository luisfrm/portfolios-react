"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { SectionHead } from "@/components/layout/section-head";
import { ProjectItem, ProjectRow } from "./project-item";
import { projects } from "@/lib/data/projects";

/* Hallmark · pre-emit critique: P5 H5 E5 S4 R5 V5 */

export function Projects() {
  const t = useTranslations();
  const locale = useLocale();

  // Merge static data (technologies) with i18n text (title, description, urls) by key
  const i18nList = t.raw("projects.list") as Array<{
    key: string;
    title: string;
    description: string;
    media?: { type: "image" | "video"; url: string }[];
    githubUrl?: string;
    liveUrl?: string;
    consoleUrl?: string;
  }>;

  const mergedProjects = projects.map((p) => ({
    ...p,
    ...i18nList.find((item) => item.key === p.key),
  }));

  if (mergedProjects.length === 0) return null;

  // One full-width sheet, then a ledger of rows: two rhythms, not one grid.
  const previewProjects = mergedProjects.slice(0, 5);
  const featuredProject = previewProjects[0];
  const secondaryProjects = previewProjects.slice(1);

  return (
    <section id="projects" className={LAYOUT.CONTAINER_MAX_WIDTH}>
      <SectionHead
        title={t("projects.title")}
        aside={
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-foreground transition-colors hover:text-primary"
          >
            {t("projects.viewAll")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        }
      />

      {featuredProject && <ProjectItem project={featuredProject} />}

      {secondaryProjects.length > 0 && (
        <div className="mt-2 sm:mt-4">
          {secondaryProjects.map((project) => (
            <ProjectRow key={project.key} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
