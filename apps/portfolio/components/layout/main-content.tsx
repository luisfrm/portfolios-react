import type { ReactNode } from "react";
import { LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MainContentProps {
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

/**
 * Page body: one container, one left edge, shared by the hero and every
 * section so the whole page sits on the same grid.
 */
export function MainContent({ children, footer, className }: MainContentProps) {
  return (
    <main
      className={cn(
        "relative z-10 mx-auto flex w-full max-w-7xl flex-col overflow-x-hidden px-4 sm:px-6 lg:px-8",
        LAYOUT.CONTENT_GAP,
        className
      )}
    >
      {children}
      {footer && <div className={cn("flex flex-col", LAYOUT.CARD_GAP)}>{footer}</div>}
    </main>
  );
}
