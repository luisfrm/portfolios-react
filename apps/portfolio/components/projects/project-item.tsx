"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ExternalLink, Mail } from "lucide-react";
import { GithubIcon } from "@portfolio/shared/components/icons/brand-icons";
import { cn } from "@/lib/utils";
import { useScrollTo } from "@/hooks";
import { type Project, type ProjectMedia } from "@/lib/data/projects";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@portfolio/ui/components/carousel";
import { Dialog, DialogContent, DialogTitle } from "@portfolio/ui/components/dialog";
import { ExpandableText } from "@portfolio/shared/components/expandable-text";

/* Hallmark · component: project-item · genre: editorial · theme: custom · archetype: Featured Sheet / Ledger Row */

type ProjectWithCopy = Project & {
  title?: string;
  description?: string;
  media?: ProjectMedia[];
  githubUrl?: string;
  liveUrl?: string;
  consoleUrl?: string;
};

const META = "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground";

const LINK = cn(
  "inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em]",
  "text-foreground transition-colors hover:text-primary"
);

function ProjectLinks({ project }: { project: ProjectWithCopy }) {
  const { title, githubUrl, liveUrl, consoleUrl } = project;
  const { scrollToElement } = useScrollTo();
  const t = useTranslations();

  const hasGithub = Boolean(githubUrl && githubUrl.trim() !== "");
  const hasLive = Boolean(liveUrl && liveUrl.trim() !== "");
  const hasConsole = Boolean(consoleUrl && consoleUrl.trim() !== "");

  const contactLink = (
    <a
      href="#contact-form"
      onClick={(e) => {
        e.preventDefault();
        scrollToElement("#contact-form");
      }}
      className={LINK}
      aria-label={`Contact regarding ${title}`}
    >
      <Mail className="h-3.5 w-3.5" />
      <span>{t("projects.contactCode")}</span>
    </a>
  );

  const githubLink = (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={LINK}
      aria-label={`View ${title} source code`}
    >
      <GithubIcon className="h-3.5 w-3.5" />
      <span>{t("projects.viewCode")}</span>
    </a>
  );

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {hasGithub ? githubLink : contactLink}
      {hasLive && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK}
          aria-label={`View ${title} live demo`}
        >
          <ExternalLink className="h-3.5 w-3.5" />
          <span>{t("projects.liveDemo")}</span>
        </a>
      )}
      {hasConsole && (
        <a
          href={consoleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK}
          aria-label={`View ${title} SaaS console`}
        >
          <ExternalLink className="h-3.5 w-3.5" />
          <span>{t("projects.consoleDemo")}</span>
        </a>
      )}
    </div>
  );
}

/** Compact list row: the secondary rhythm, deliberately not a card grid. */
export function ProjectRow({ project }: { project: ProjectWithCopy }) {
  const { title, description, media, technologies } = project;
  const cover = media?.find((item) => item.type === "image") ?? media?.[0];

  return (
    <article className="group grid grid-cols-[84px_minmax(0,1fr)] items-start gap-5 border-t border-border py-6 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-8 sm:py-8">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {cover?.type === "image" ? (
          <Image
            src={cover.url}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 640px) 84px, 160px"
            className="object-cover"
            loading="lazy"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {title}
          </span>
        )}
      </div>

      <div className="min-w-0">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
            {title}
          </h3>
          <p className={cn(META, "shrink-0")}>
            {technologies.slice(0, 3).join(" / ")}
          </p>
        </div>
        {description && (
          <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        <div className="mt-4">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

/** Full-width featured sheet with carousel + lightbox. */
export function ProjectItem({ project }: { project: ProjectWithCopy }) {
  const { title, description, media, technologies } = project;
  const mediaList: ProjectMedia[] = media ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [modalApi, setModalApi] = useState<CarouselApi>();
  const t = useTranslations();

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      if (!isLightboxOpen) setCurrentIndex(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, isLightboxOpen]);

  useEffect(() => {
    if (!modalApi) return;
    const onSelect = () => {
      if (isLightboxOpen) setCurrentIndex(modalApi.selectedScrollSnap());
    };
    modalApi.on("select", onSelect);
    return () => {
      modalApi.off("select", onSelect);
    };
  }, [modalApi, isLightboxOpen]);

  useEffect(() => {
    if (isLightboxOpen) {
      modalApi?.scrollTo(currentIndex, true);
    } else {
      api?.scrollTo(currentIndex, true);
    }
    // Intentionally sync only when the lightbox opens/closes; adding
    // currentIndex here creates a scroll/animation loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handleNext, handlePrev]);

  const renderLightboxModal = () => {
    if (mediaList.length === 0) return null;

    return (
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-[92vw] sm:max-w-5xl max-h-[80vh] sm:max-h-[85vh] bg-black/95 border-white/10 text-white p-3 sm:p-5 flex flex-col justify-between overflow-hidden outline-none">
          <DialogTitle className="sr-only">
            {title} - Image {currentIndex + 1} of {mediaList.length}
          </DialogTitle>

          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 pr-10">
            <h4 className="truncate pr-2 text-xs font-semibold text-white/80 sm:text-sm">
              {title}
            </h4>
            <span className="shrink-0 whitespace-nowrap font-mono text-xs text-white/60">
              {currentIndex + 1} / {mediaList.length}
            </span>
          </div>

          <div className="relative my-2 flex w-full flex-1 items-center justify-center overflow-hidden">
            <Carousel
              setApi={setModalApi}
              opts={{ loop: true, startIndex: currentIndex }}
              className="h-full w-full"
            >
              <CarouselContent className="-ml-0 h-full items-center">
                {mediaList.map((item, idx) => (
                  <CarouselItem key={`modal-${idx}`} className="flex h-full items-center justify-center pl-0">
                    {item.type === "image" ? (
                      <div className="relative flex h-[45vh] max-h-[60vh] w-full items-center justify-center sm:h-[60vh]">
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
                      <div className="flex h-[45vh] w-full items-center justify-center bg-neutral-900 text-neutral-300">
                        <span className="font-mono text-sm">Video</span>
                      </div>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>

              {mediaList.length > 1 && (
                <>
                  <CarouselPrevious className="left-1 h-9 w-9 border-none bg-black/70 text-white hover:bg-black/90 sm:left-3" />
                  <CarouselNext className="right-1 h-9 w-9 border-none bg-black/70 text-white hover:bg-black/90 sm:right-3" />
                </>
              )}
            </Carousel>
          </div>

          {mediaList.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 border-t border-white/10 pt-2.5">
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
                    "h-1 transition-all duration-200",
                    idx === currentIndex ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                  )}
                />
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <article className="group border border-border bg-card">
      <div className="relative aspect-[2/1] w-full overflow-hidden bg-muted">
        {mediaList.length > 0 ? (
          <Carousel setApi={setApi} opts={{ loop: true }} className="h-full w-full">
            <CarouselContent className="-ml-0 h-full">
              {mediaList.map((item, idx) => (
                <CarouselItem key={idx} className="h-full pl-0">
                  <div
                    onClick={() => setIsLightboxOpen(true)}
                    className="relative h-full w-full cursor-zoom-in"
                  >
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
                      <div className="flex h-full w-full items-center justify-center bg-neutral-900 text-neutral-300">
                        <span className="font-mono text-sm">Video</span>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {mediaList.length > 1 && (
              <>
                <CarouselPrevious className="left-3 border-none bg-background/90 text-foreground hover:bg-background" />
                <CarouselNext className="right-3 border-none bg-background/90 text-foreground hover:bg-background" />
                <div className="absolute bottom-3 left-4 flex gap-1.5">
                  {mediaList.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        api?.scrollTo(idx);
                      }}
                      className={cn(
                        "h-1 cursor-pointer transition-all duration-200",
                        idx === currentIndex ? "w-5 bg-foreground" : "w-1.5 bg-foreground/40"
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </Carousel>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
            <span className="font-mono text-sm">{title}</span>
          </div>
        )}
      </div>

      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
        <div className="lg:col-span-7">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h3>
          <div className="mt-3 text-base leading-relaxed text-muted-foreground">
            <ExpandableText
              text={description ?? ""}
              lines={4}
              toggleLabel={t("common.readMore")}
              collapseLabel={t("common.readLess")}
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 lg:col-span-5">
          <p className={META}>{technologies.join(" / ")}</p>
          <div className="border-t border-border pt-4">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>

      {renderLightboxModal()}
    </article>
  );
}

export default ProjectItem;
