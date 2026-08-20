"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ExpandableTextProps {
  text: string;
  lines?: 2 | 3 | 4;
  className?: string;
  toggleLabel?: string;
}

// Approximate line-height in px (leading-relaxed = 1.625 × base 18px ≈ 29px)
const LINE_HEIGHT_PX = 29;

export function ExpandableText({
  text,
  lines = 3,
  className,
  toggleLabel = "Ver más",
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const pRef = useRef<HTMLParagraphElement>(null);

  // Heights for smooth animation
  const [collapsedHeight, setCollapsedHeight] = useState<number | null>(null);
  const [expandedHeight, setExpandedHeight] = useState<number | null>(null);

  const measure = useCallback(() => {
    const el = pRef.current;
    if (!el) return;

    const naturalHeight = el.scrollHeight;
    const maxAllowedHeight = lines * LINE_HEIGHT_PX;

    setExpandedHeight(naturalHeight);
    setCollapsedHeight(maxAllowedHeight);
    setIsClamped(naturalHeight > maxAllowedHeight + 1);
  }, [lines]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure, text]);

  // Compute maxHeight — always a number so CSS transition can animate both ways
  const maxHeight = expanded && expandedHeight
    ? expandedHeight
    : collapsedHeight ?? undefined;

  return (
    <div className={cn("relative", className)}>
      {/* Visible text — no line-clamp, truncation handled by wrapper max-height */}
      <div
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight }}
      >
        <p
          ref={pRef}
          className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed whitespace-pre-line"
        >
          {text}
        </p>
      </div>

      {/* Toggle link */}
      {isClamped && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          {expanded ? "Ver menos" : toggleLabel}
        </button>
      )}
    </div>
  );
}

export default ExpandableText;
