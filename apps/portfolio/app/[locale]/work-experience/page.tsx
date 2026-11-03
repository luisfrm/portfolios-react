"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, Building2 } from "lucide-react";
import { Layout, MainContent, Footer } from "@/components/layout";
import Navigation from "@/components/navigation/navigation";
import { UpWidget } from "@/components/common/up-widget";
import Skills from "@/components/skills/skills";
import { cn } from "@/lib/utils";
import { workExperiences } from "@/lib/data/workExperience";

/* Hallmark · pre-emit critique: P5 H5 E5 S4 R5 V5 */

const META = "font-mono text-[11px] uppercase tracking-[0.16em]";

export default function WorkExperiencePage() {
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
  }));

  return (
    <Layout>
      <UpWidget />
      <Navigation />
      <MainContent className="pt-24 sm:pt-28 lg:pt-32">
        <div className="mx-auto w-full max-w-7xl space-y-12 pb-12 sm:space-y-16">
          <header className="border-t border-border pt-5 pb-8 sm:pb-12">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className={cn(META, "text-muted-foreground")}>[01] / Timeline</p>
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {t("workExperiences.backToHome")}
              </Link>
            </div>

            <h1 className="mt-6 max-w-3xl font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("workExperiences.pageTitle")}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("workExperiences.pageSubtitle")}
            </p>
          </header>

          <div className="border-t border-border">
            {experiences.map((exp) => (
              <article
                key={exp.key}
                className="grid gap-6 border-b border-border py-8 sm:py-10 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-4">
                  <time className={cn(META, "font-semibold text-primary")}>{exp.period}</time>
                  <h2 className="mt-3 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {exp.position}
                  </h2>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>{exp.company}</span>
                  </p>
                </div>

                <div className="lg:col-span-8">
                  {exp.description && (
                    <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {exp.description}
                    </p>
                  )}

                  {exp.items && exp.items.length > 0 && (
                    <ul className="mt-4 space-y-2.5">
                      {exp.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-base leading-relaxed text-foreground"
                        >
                          <span className="mt-0.5 select-none font-mono text-muted-foreground">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className={cn(META, "mt-5 text-muted-foreground")}>
                    {exp.skills.join(" / ")}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <Skills />
        </div>
      </MainContent>
      <Footer />
    </Layout>
  );
}
