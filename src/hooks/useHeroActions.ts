import { useCallback } from 'react';
import { openPdfInNewTab } from '@/lib/utils';
import { useScrollTo } from './useScrollTo';
import type { Language } from './useLanguage';

export interface UseHeroActionsReturn {
  handleDownloadCV: () => void;
  handleContactClick: () => void;
}

export function useHeroActions(language: Language): UseHeroActionsReturn {
  const { scrollToElement } = useScrollTo();

  const handleDownloadCV = useCallback(() => {
    openPdfInNewTab(language);
  }, [language]);

  const handleContactClick = useCallback(() => {
    scrollToElement('#contact');
  }, [scrollToElement]);

  return {
    handleDownloadCV,
    handleContactClick
  };
} 