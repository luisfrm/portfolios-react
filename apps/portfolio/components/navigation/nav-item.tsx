"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollTo } from "@/hooks";

interface NavItemProps {
  children: ReactNode;
  url: string;
  className?: string;
  onClick?: () => void;
}

const NAVIGATION_STYLES = {
  base: "cursor-pointer border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
  colors:
    "text-foreground/80 hover:border-foreground/30 hover:text-foreground",
};

export function NavItem({ children, url, className, onClick }: NavItemProps) {
  const { scrollToElement } = useScrollTo();

  const handleClick = () => {
    onClick?.();
    scrollToElement(url);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(NAVIGATION_STYLES.base, NAVIGATION_STYLES.colors, className)}
      aria-label="Navigation Item"
    >
      {children}
    </div>
  );
}
