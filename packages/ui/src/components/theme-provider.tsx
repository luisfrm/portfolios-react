"use client";

import { createElement, type ComponentProps, type ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// next-themes does not surface `children` on its props type when resolved from
// this workspace package, so declare it here and pass children explicitly.
type ThemeProviderProps = ComponentProps<typeof NextThemesProvider> & {
  children: ReactNode;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return createElement(NextThemesProvider, props, children);
}
