import { useCallback } from 'react';

const NAVBAR_HEIGHT = 120;

export interface UseScrollToReturn {
  scrollToElement: (targetId: string) => void;
}

export function useScrollTo(): UseScrollToReturn {
  const scrollToElement = useCallback((targetId: string): void => {
    if (targetId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);
    if (!element) return;

    const offsetTop = element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }, []);

  return { scrollToElement };
} 