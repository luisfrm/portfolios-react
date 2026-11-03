"use client";

import { useTranslations } from "next-intl";
import { LAYOUT } from "@/lib/constants";
import { SectionHead } from "@/components/layout/section-head";

/* Hallmark · pre-emit critique: P5 H5 E5 S4 R5 V5 */

export function Education() {
  const t = useTranslations();
  const items = t.raw("education.items") as string[];

  return (
    <section id="education" className={LAYOUT.CONTAINER_MAX_WIDTH}>
      <SectionHead index="03" title={t("education.title")} />

      <div className="grid gap-8 sm:grid-cols-12 sm:gap-10">
        {/* Left rail: period and institution, set as metadata */}
        <div className="sm:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {t("education.period")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            {t("education.institution")}
          </p>
        </div>

        {/* Main column: the degree is the statement, no card around it */}
        <div className="sm:col-span-9">
          <h3 className="max-w-2xl font-heading text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
            {t("education.degree")}
          </h3>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t("education.description")}
          </p>

          {items && items.length > 0 && (
            <dl className="mt-8 border-t border-border">
              {items.map((item: string, idx: number) => (
                <div
                  key={idx}
                  className="grid gap-1 border-b border-border py-4 sm:grid-cols-12 sm:gap-8"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary sm:col-span-3">
                    {String(idx + 1).padStart(2, "0")}
                  </dt>
                  <dd className="text-sm leading-relaxed text-foreground sm:col-span-9">
                    {item}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}

export default Education;
