import { useState, useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { es, en } from '@/translations';
import type { Data } from '@/lib/types';
import { STORAGE_KEYS, URL_PARAMS } from '@/lib/constants';

export type Language = 'en' | 'es';

export interface UseLanguageReturn {
  language: Language;
  data: Data;
  changeLanguage: () => void;
}

export function useLanguage(): UseLanguageReturn {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get(URL_PARAMS.LANGUAGE);
  
  const [language, setLanguage] = useLocalStorage<Language>(
    STORAGE_KEYS.LANGUAGE, 
    langParam === 'es' ? 'es' : 'en'
  );
  
  const [data, setData] = useState<Data>(language === 'en' ? en : es);

  const changeLanguage = useCallback(() => {
    const newLanguage: Language = language === 'en' ? 'es' : 'en';
    const newData = newLanguage === 'en' ? en : es;
    
    setData(newData);
    setLanguage(newLanguage);
  }, [language, setLanguage]);

  return {
    language,
    data,
    changeLanguage
  };
} 