"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ExternalLink, ChevronLeft, ChevronRight, Mail, Maximize2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import { cn } from "@/lib/utils";
import { useInView, useScrollTo } from "@/hooks";
import { type Project, type ProjectMedia } from "@/lib/data/projects";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ExpandableText } from "@/components/common/expandable-text";

/* Hallmark · component: project-item · genre: editorial · theme: custom · archetype: Split Ledger / Card */

interface Props {
  project: Project & {
    title?: string;
    description?: string;
    media?: ProjectMedia[];
    githubUrl?: string;
    liveUrl?: string;
  };
  delayClass?: string;
  index: number;
  isFeatured?: boolean;
}

const TECH_BADGE_STYLE =
  "px-3 py-1 text-xs font-mono rounded-full bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 transition-colors";

export function ProjectItem({ project, delayClass, isFeatured = false }: Props) {
  const { title, description, media, technologies, githubUrl, liveUrl } = project;

  // Build the media list — images share the carousel slot
  const mediaList: ProjectMedia[] = media ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [modalApi, setModalApi] = useState<CarouselApi>();

  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "100px",
  });
  const { scrollToElement } = useScrollTo();
  const t = useTranslations();

  // Listen to main card Embla carousel slide changes (when modal is closed)
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      if (!isLightboxOpen) {
        setCurrentIndex(api.selectedScrollSnap());
      }
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, isLightboxOpen]);

  // Listen to Lightbox modal Embla carousel slide changes (when modal is open)
  useEffect(() => {
    if (!modalApi) return;

    const onSelect = () => {
      if (isLightboxOpen) {
        const idx = modalApi.selectedScrollSnap();
        setCurrentIndex(idx);
      }
    };

    modalApi.on("select", onSelect);
    return () => {
      modalApi.off("select", onSelect);
    };
  }, [modalApi, isLightboxOpen]);

  // Sync state between card and modal on open/close without animation loops
  useEffect(() => {
    if (isLightboxOpen) {
      modalApi?.scrollTo(currentIndex, true);
    } else {
      api?.scrollTo(currentIndex, true);
    }
  }, [isLightboxOpen, modalApi, api]);

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (mediaList.length === 0) return;
      const nextIdx = (currentIndex + 1) % mediaList.length;
      setCurrentIndex(nextIdx);
      api?.scrollTo(nextIdx);
    },
    [mediaList.length, currentIndex, api]
  );

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (mediaList.length === 0) return;
      const prevIdx = (currentIndex - 1 + mediaList.length) % mediaList.length;
      setCurrentIndex(prevIdx);
      api?.scrollTo(prevIdx);
    },
    [mediaList.length, currentIndex, api]
  );

  // Keyboard navigation when Lightbox Modal is open
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handleNext, handlePrev]);

  // Determine link presence & space-between layout logic
  const hasGithub = Boolean(githubUrl && githubUrl.trim() !== "");
  const hasLive = Boolean(liveUrl && liveUrl.trim() !== "");
  // If githubUrl is missing/empty, display Contact link as fallback
  const isJustifyBetween = hasLive;

  const renderCodeOrContactLink = () => {
    if (hasGithub) {
      return (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label={`View ${title} source code`}
        >
          <GithubIcon className="w-4 h-4" />
          <span>{t("projects.viewCode")}</span>
        </a>
      );
    }

    return (
      <a
        href="#contact-form"
        onClick={(e) => {
          e.preventDefault();
          scrollToElement("#contact-form");
        }}
        className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
        aria-label={`Contact regarding ${title}`}
      >
        <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <span>{t("projects.contactCode")}</span>
      </a>
    );
  };

  const renderLiveLink = () => {
    if (!hasLive) return null;
    return (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label={`View ${title} live demo`}
      >
        <ExternalLink className="w-4 h-4" />
        <span>{t("projects.liveDemo")}</span>
      </a>
    );
  };

  const renderLightboxModal = () => {
    if (mediaList.length === 0) return null;

    return (
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-[92vw] sm:max-w-5xl max-h-[80vh] sm:max-h-[85vh] bg-black/95 border-slate-800 text-white p-3 sm:p-5 flex flex-col justify-between overflow-hidden rounded-2xl outline-none">
          <DialogTitle className="sr-only">
            {title} - Image {currentIndex + 1} of {mediaList.length}
          </DialogTitle>

          {/* Modal Header: Clear pr-12 padding prevents collision with the absolute close (X) button */}
          <div className="flex items-center justify-between pb-2.5 border-b border-white/10 z-10 pr-10">
            <h4 className="font-semibold text-xs sm:text-sm text-slate-200 truncate pr-2">
              {title}
            </h4>
            <span className="font-mono text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
              {currentIndex + 1} / {mediaList.length}
            </span>
          </div>

          {/* Modal Media Carousel Display Container */}
          <div className="relative flex-1 w-full my-2 overflow-hidden flex items-center justify-center">
            <Carousel
              setApi={setModalApi}
              opts={{ loop: true, startIndex: currentIndex }}
              className="w-full h-full"
            >
              <CarouselContent className="h-full -ml-0 items-center">
                {mediaList.map((item, idx) => (
                  <CarouselItem key={`modal-${idx}`} className="pl-0 h-full flex items-center justify-center">
                    {item.type === "image" ? (
                      <div className="relative w-full h-[45vh] sm:h-[60vh] max-h-[60vh] flex items-center justify-center">
                        <Image
                          src={item.url}
                          alt={`${title} fullscreen view ${idx + 1}`}
                          fill
                          sizes="100vw"
                          className="object-contain"
                          priority={idx === currentIndex}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-[45vh] flex items-center justify-center bg-slate-900 text-slate-300">
                        <span className="font-mono text-base">▶ Video Player</span>
                      </div>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>

              {mediaList.length > 1 && (
                <>
                  <CarouselPrevious className="left-1 sm:left-3 h-9 w-9 bg-black/70 hover:bg-black/90 text-white border-none" />
                  <CarouselNext className="right-1 sm:right-3 h-9 w-9 bg-black/70 hover:bg-black/90 text-white border-none" />
                </>
              )}
            </Carousel>
          </div>

          {/* Modal Dots Navigation Footer */}
          {mediaList.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 pt-2.5 border-t border-white/10 z-10">
              {mediaList.map((_, idx) => (
                <button
                  key={`modal-dot-${idx}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                    modalApi?.scrollTo(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    idx === currentIndex
                      ? "w-5 bg-blue-500"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  )}
                />
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  };

  if (isFeatured) {
    return (
      <div
        ref={ref}
        className={cn("col-span-full animate-fade-up", delayClass, isInView && "is-visible")}
      >
        <article className="group relative bg-card/90 backdrop-blur-md rounded-2xl overflow-hidden border border-border/60 shadow-lg hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300">
          
          {/* Media Container (Full Width — 2:1 aspect ratio images) */}
          <div className="relative w-full aspect-[2/1] bg-slate-900/10 dark:bg-slate-900/60 overflow-hidden">
            {mediaList.length > 0 ? (
              <Carousel
                setApi={setApi}
                opts={{ loop: true }}
                className="w-full h-full"
              >
                <CarouselContent className="h-full min-h-[300px] -ml-0">
                  {mediaList.map((item, idx) => (
                    <CarouselItem key={idx} className="pl-0 h-full">
                      <div
                        onClick={() => setIsLightboxOpen(true)}
                        className="relative w-full h-full min-h-[300px] cursor-zoom-in group/img"
                      >
                        {/* Expand Icon Hint */}
                        <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 text-white backdrop-blur-md opacity-0 group-hover/img:opacity-100 transition-opacity z-10 pointer-events-none">
                          <Maximize2 className="w-4 h-4" />
                        </div>

                        {item.type === "image" ? (
                          <Image
                            src={item.url}
                            alt={`Preview of ${title} (Slide ${idx + 1})`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-300">
                            <span className="font-mono text-sm opacity-60">▶ Video</span>
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {mediaList.length > 1 && (
                  <>
                    <CarouselPrevious />
                    <CarouselNext />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 pointer-events-auto">
                      {mediaList.map((_, idx) => (
                        <span
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            api?.scrollTo(idx);
                          }}
                          className={cn(
                            "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                            idx === currentIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"
                          )}
                        />
                      ))}
                    </div>
                  </>
                )}
              </Carousel>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400">
                <span className="font-mono text-base">{title}</span>
              </div>
            )}
          </div>

          {/* Content Column (Full Width below image) */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 font-mono text-xs uppercase tracking-wider w-fit">
                ★ Featured Project
              </Badge>
              
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {title}
              </h3>
              
              <ExpandableText text={description ?? ""} lines={4} toggleLabel="Ver más" />
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

              {/* Actions Footer Links */}
              <div className={cn("pt-4 border-t border-border/40 flex items-center w-full", isJustifyBetween ? "justify-between" : "justify-start")}>
                {renderCodeOrContactLink()}
                {renderLiveLink()}
              </div>
            </div>

          </div>

        </article>
        {renderLightboxModal()}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn("animate-fade-up", delayClass, isInView && "is-visible")}
    >
      <article className="group relative bg-card/90 backdrop-blur-md rounded-2xl overflow-hidden border border-border/50 shadow-md hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full">
        
        {/* Media Container: Single Item or Carousel */}
        <div className="relative h-64 w-full bg-slate-900/10 dark:bg-slate-900/60 overflow-hidden">
          {mediaList.length > 0 ? (
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              className="w-full h-full"
            >
              <CarouselContent className="h-full -ml-0">
                {mediaList.map((item, idx) => (
                  <CarouselItem key={idx} className="pl-0 h-full">
                    <div
                      onClick={() => setIsLightboxOpen(true)}
                      className="relative w-full h-full cursor-zoom-in group/img"
                    >
                      {/* Expand Icon Hint */}
                      <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 text-white backdrop-blur-md opacity-0 group-hover/img:opacity-100 transition-opacity z-10 pointer-events-none">
                        <Maximize2 className="w-4 h-4" />
                      </div>

                      {item.type === "image" ? (
                        <Image
                          src={item.url}
                          alt={`Preview of ${title} (Slide ${idx + 1})`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-300">
                          <span className="font-mono text-sm opacity-60">▶ Video</span>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {mediaList.length > 1 && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 pointer-events-auto">
                    {mediaList.map((_, idx) => (
                      <span
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          api?.scrollTo(idx);
                        }}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                          idx === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
            </Carousel>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400">
              <span className="font-mono text-sm">{title}</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col space-y-4">
          <div className="space-y-3">
            <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <ExpandableText text={description ?? ""} lines={3} toggleLabel="Ver más" />
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
          <div className={cn("pt-4 border-t border-border/40 flex items-center w-full", isJustifyBetween ? "justify-between" : "justify-start")}>
            {renderCodeOrContactLink()}
            {renderLiveLink()}
          </div>
        </div>

      </article>
      {renderLightboxModal()}
    </div>
  );
}

export default ProjectItem;
