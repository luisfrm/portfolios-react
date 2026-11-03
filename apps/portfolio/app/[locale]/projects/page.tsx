"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { Layout, MainContent, Footer } from "@/components/layout";
import Navigation from "@/components/navigation/navigation";
import { UpWidget } from "@/components/common/up-widget";
import { ProjectItem, ProjectRow } from "@/components/projects/project-item";
import { projects } from "@/lib/data/projects";

/* Hallmark · pre-emit critique: P5 H5 E5 S4 R5 V5 */

export default function ProjectsPage() {
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

  return (
    <Layout>
      <UpWidget />
      <Navigation />
      <MainContent className="pt-24 sm:pt-28 lg:pt-32">
        <div className="mx-auto w-full max-w-7xl space-y-12 pb-12 sm:space-y-16">
          <header className="border-t border-border pt-5 pb-8 sm:pb-12">
            <div className="flex flex-wrap items-center justify-end gap-3">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {t("projects.backToHome")}
              </Link>
            </div>

            <h1 className="mt-6 max-w-3xl font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("projects.pageTitle")}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("projects.pageSubtitle")}
            </p>
          </header>

          {mergedProjects.length > 0 && (
            <div className="space-y-10 sm:space-y-12">
              <ProjectItem project={mergedProjects[0]} />

              {mergedProjects.length > 1 && (
                <div className="border-t border-border">
                  {mergedProjects.slice(1).map((project) => (
                    <ProjectRow key={project.key} project={project} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </MainContent>
      <Footer />
    </Layout>
  );
}
