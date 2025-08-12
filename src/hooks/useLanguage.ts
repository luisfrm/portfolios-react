import { useState, useCallback } from 'react';
import { es, en } from '@/translations';
import type { Data } from '@/lib/types';
import { URL_PARAMS } from '@/lib/constants';

export type Language = 'en' | 'es';

export interface UseLanguageReturn {
  language: Language;
  data: Data;
  changeLanguage: () => void;
}

export function useLanguage(): UseLanguageReturn {
  const getLanguageFromUrl = (): Language => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get(URL_PARAMS.LANGUAGE);
    return langParam === 'es' ? 'es' : 'en';
  };

  const [language, setLanguage] = useState<Language>(getLanguageFromUrl());
  const [data, setData] = useState<Data>(getLanguageFromUrl() === 'en' ? en : es);

  const changeLanguage = useCallback(() => {
    const newLanguage: Language = language === 'en' ? 'es' : 'en';
    const newData = newLanguage === 'en' ? en : es;

    // Update in-memory state
    setData(newData);
    setLanguage(newLanguage);

    // Reflect language in URL without caching in localStorage
    const url = new URL(window.location.href);
    if (newLanguage === 'es') {
      url.searchParams.set(URL_PARAMS.LANGUAGE, 'es');
    } else {
      url.searchParams.delete(URL_PARAMS.LANGUAGE);
    }
    window.history.replaceState(null, '', url.toString());
  }, [language]);

  return {
    language,
    data,
    changeLanguage
  };
} 