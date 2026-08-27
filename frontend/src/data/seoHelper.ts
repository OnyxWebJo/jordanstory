import { Metadata } from 'next';
import { Locale } from '@/context/LanguageContext';

const SITE_URL = 'https://jordanstorytours.com';

interface SeoParams {
  title: string;
  description: string;
  path: string; // e.g. '', '/tours', '/destinations/petra'
  locale: Locale;
}

export function buildLocaleMetadata({ title, description, path, locale }: SeoParams): Metadata {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}/${locale}${cleanPath === '/' ? '' : cleanPath}`;

  return {
    title: `${title} | Jordan Story Tours`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${SITE_URL}/en${cleanPath === '/' ? '' : cleanPath}`,
        'de': `${SITE_URL}/de${cleanPath === '/' ? '' : cleanPath}`,
        'fr': `${SITE_URL}/fr${cleanPath === '/' ? '' : cleanPath}`,
        'it': `${SITE_URL}/it${cleanPath === '/' ? '' : cleanPath}`,
        'x-default': `${SITE_URL}/en${cleanPath === '/' ? '' : cleanPath}`,
      },
    },
    openGraph: {
      title: `${title} | Jordan Story Tours`,
      description,
      url: canonicalUrl,
      siteName: 'Jordan Story Tours',
      locale: locale === 'de' ? 'de_DE' : locale === 'fr' ? 'fr_FR' : locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Jordan Story Tours`,
      description,
    },
  };
}

export const LOCALES: Locale[] = ['en', 'de', 'fr', 'it'];

export function generateStaticLocaleParams() {
  return LOCALES.map((lang) => ({ lang }));
}
