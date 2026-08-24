'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Locale = 'en' | 'de';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  getLocalized: <T>(obj: { en: T; de: T }) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const saved = localStorage.getItem('jordan_story_locale') as Locale;
    if (saved && (saved === 'en' || saved === 'de')) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('jordan_story_locale', newLocale);
  };

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'de' : 'en');
  };

  const getLocalized = <T,>(obj: { en: T; de: T }): T => {
    if (!obj) return '' as unknown as T;
    return obj[locale] || obj.en;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, getLocalized }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
