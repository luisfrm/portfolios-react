"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { Layout, MainContent, Footer } from "@/components/layout";
import Navigation from "@/components/navigation/navigation";
import { MouseMoveEffect } from "@/components/mouse-move/mouse-move-effect";
import { UpWidget } from "@/components/common/up-widget";
import { AnimatedSection } from "@/components/common/animated-section";
import { Button } from "@/components/ui/button";
import { ProjectItem } from "@/components/projects/project-item";
import { cn } from "@/lib/utils";
import { LAYOUT, TYPOGRAPHY, COLORS } from "@/lib/constants";
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
  }>;

  const mergedProjects = projects.map((p) => ({
    ...p,
    ...i18nList.find((item) => item.key === p.key),
  }));

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
                  {t("projects.backToHome")}
                </Button>
              </Link>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest font-semibold">
                    [02] · Studio Showcase
                  </span>
                </div>
                <h1
                  className={cn(
                    TYPOGRAPHY.SECTION_TITLE,
                    "text-left sm:text-left text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
                  )}
                >
                  {t("projects.pageTitle")}
                </h1>
                <p className={cn(COLORS.TEXT_MUTED, "text-base sm:text-lg max-w-2xl leading-relaxed")}>
                  {t("projects.pageSubtitle")}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Studio Showcase Project Layout */}
          {mergedProjects.length > 0 && (
            <div className="space-y-10 sm:space-y-12">
              {/* Featured Hero Project (Full Width) */}
              <ProjectItem
                project={mergedProjects[0]}
                index={0}
                isFeatured={true}
              />

              {/* Secondary Projects Grid (2 Columns) */}
              {mergedProjects.length > 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                  {mergedProjects.slice(1).map((project, index) => (
                    <ProjectItem
                      key={project.key}
                      project={project}
                      index={index + 1}
                      isFeatured={false}
                    />
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
