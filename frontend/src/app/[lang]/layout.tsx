import React from 'react';
import { Locale } from '@/context/LanguageContext';
import { generateStaticLocaleParams } from '@/data/seoHelper';

export function generateStaticParams() {
  return generateStaticLocaleParams();
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;
  const validLocale = (['en', 'de', 'fr', 'it'].includes(lang) ? lang : 'en') as Locale;

  return (
    <div data-locale={validLocale} className="contents">
      {children}
    </div>
  );
}
