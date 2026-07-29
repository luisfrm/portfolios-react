"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks";
import { type ProjectKey } from "@/lib/data/projects";

import { Badge } from "@/components/ui/badge";

/* Hallmark · pre-emit critique: P5 H5 E5 S4 R5 V5 */

interface Props {
  project: {
    title: string;
    description: string;
    imageUrl?: string;
    images?: string[];
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    key: ProjectKey;
  };
  delayClass?: string;
  index: number;
  isFeatured?: boolean;
}

const TECH_BADGE_STYLE =
  "px-3 py-1 text-xs font-mono rounded-full bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 transition-colors";

export function ProjectItem({ project, delayClass, isFeatured = false }: Props) {
  const { title, description, imageUrl, images: propImages, technologies, githubUrl, liveUrl } =
    project;

  // Determine list of images (either from array prop or single imageUrl fallback)
  const imageList = propImages && propImages.length > 0
    ? propImages
    : imageUrl
    ? [imageUrl]
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "100px",
  });
  const t = useTranslations();

  const handleNext = () => {
    if (imageList.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrev = () => {
    if (imageList.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  if (isFeatured) {
    return (
      <div
        ref={ref}
        className={cn("col-span-full animate-fade-up", delayClass, isInView && "is-visible")}
      >
        <article className="group relative bg-card/90 backdrop-blur-md rounded-2xl overflow-hidden border border-border/60 shadow-lg hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Media Container (7 Cols on Desktop) */}
          <div className="relative h-72 sm:h-96 lg:h-full lg:col-span-7 bg-slate-900/10 dark:bg-slate-900/60 overflow-hidden">
            {imageList.length > 0 ? (
              <div className="relative w-full h-full min-h-[300px]">
                <Image
                  src={imageList[currentIndex]}
                  alt={`Preview of ${title} (Slide ${currentIndex + 1})`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Carousel Controls */}
                {imageList.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      aria-label="Previous slide"
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black/80 transition-colors z-20"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next slide"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black/80 transition-colors z-20"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                      {imageList.map((_, idx) => (
                        <span
                          key={idx}
                          className={cn(
                            "h-1.5 rounded-full transition-all duration-300",
                            idx === currentIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"
                          )}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400">
                <span className="font-mono text-base">{title}</span>
              </div>
            )}
          </div>

          {/* Content Column (5 Cols on Desktop) */}
          <div className="p-6 sm:p-8 lg:p-10 lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 font-mono text-xs uppercase tracking-wider w-fit">
                ★ Featured Project
              </Badge>
              
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {title}
              </h3>
              
              {/* Featured project description upgraded to text-base sm:text-lg */}
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-6">
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech, i) => (
                  <span key={`tech-${i}`} className={TECH_BADGE_STYLE}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions Footer */}
              {(githubUrl || liveUrl) && (
                <div className="pt-4 border-t border-border/40 flex items-center gap-4">
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={`View ${title} source code`}
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{t("projects.viewCode")}</span>
                    </a>
                  )}
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={`View ${title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t("projects.liveDemo")}</span>
                    </a>
                  )}
                </div>
              )}
            </div>

          </div>

        </article>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn("animate-fade-up", delayClass, isInView && "is-visible")}
    >
      <article className="group relative bg-card/90 backdrop-blur-md rounded-2xl overflow-hidden border border-border/50 shadow-md hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full">
        
        {/* Media Container: Single Image or Carousel */}
        <div className="relative h-64 w-full bg-slate-900/10 dark:bg-slate-900/60 overflow-hidden">
          {imageList.length > 0 ? (
            <div className="relative w-full h-full">
              <Image
                src={imageList[currentIndex]}
                alt={`Preview of ${title} (Slide ${currentIndex + 1})`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Carousel Controls (rendered only when > 1 image) */}
              {imageList.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors z-20"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors z-20"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {imageList.map((_, idx) => (
                      <span
                        key={idx}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-300",
                          idx === currentIndex
                            ? "w-4 bg-white"
                            : "w-1.5 bg-white/50"
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400">
              <span className="font-mono text-sm">{title}</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            {/* Enhanced body text size to text-base for optimal Work Sans legibility */}
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {technologies.map((tech, i) => (
              <span key={`tech-${i}`} className={TECH_BADGE_STYLE}>
                {tech}
              </span>
            ))}
          </div>

          {/* Actions Footer Links */}
          {(githubUrl || liveUrl) && (
            <div className="pt-4 border-t border-border/40 flex items-center gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={`View ${title} source code`}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{t("projects.viewCode")}</span>
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={`View ${title} live demo`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t("projects.liveDemo")}</span>
                </a>
              )}
            </div>
          )}
        </div>

      </article>
    </div>
  );
}

export default ProjectItem;
