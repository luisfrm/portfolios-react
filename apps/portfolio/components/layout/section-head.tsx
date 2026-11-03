import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadProps {
  /** Mono index, e.g. "01". Gives the page a reading order. */
  index: string;
  title: string;
  /** Right-hand slot for a link or a count. */
  aside?: ReactNode;
  className?: string;
}

/**
 * Left-aligned section head on the page grid: index in the first column,
 * title in the next, action on the far right. No centered stacks.
 */
export function SectionHead({ index, title, aside, className }: SectionHeadProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-end gap-x-8 gap-y-4 border-t border-border pt-5 pb-8 sm:grid-cols-12 sm:pb-12",
        className
      )}
    >
      <div className="sm:col-span-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {index}
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {aside && (
        <div className="sm:col-span-4 sm:justify-self-end sm:text-right">{aside}</div>
      )}
    </div>
  );
}
