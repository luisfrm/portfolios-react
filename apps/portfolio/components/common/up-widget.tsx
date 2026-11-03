"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useScrollTo } from "@/hooks";

export function UpWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToElement } = useScrollTo();
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    scrollToElement("#");
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-opacity duration-200",
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label={t("common.scrollToTop")}
        className="flex h-10 w-10 items-center justify-center border border-border bg-background text-foreground transition-colors hover:border-foreground"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  );
}
