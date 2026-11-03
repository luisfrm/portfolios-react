import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadProps {
  title: string;
  /** Right-hand slot for a link or a count. */
  aside?: ReactNode;
  className?: string;
}

/**
 * Left-aligned section head: the title carries itself, nothing labels it.
 * The optional action sits on the far right of the same baseline.
 */
export function SectionHead({ title, aside, className }: SectionHeadProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 border-t border-border pt-5 pb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:pb-12",
        className
      )}
    >
      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {aside && <div className="sm:text-right">{aside}</div>}
    </div>
  );
}
