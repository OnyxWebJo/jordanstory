import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DESTINATIONS_FULL } from '@/data/destinations';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { buildLocaleMetadata, LOCALES } from '@/data/seoHelper';
import { Locale } from '@/context/LanguageContext';
import { getLocalizedText } from '@/utils/getLocalizedServer';

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  LOCALES.forEach((lang) => {
    DESTINATIONS_FULL.forEach((d) => {
      params.push({ lang, slug: d.slug.en });
    });
  });
  return params;
}

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const validLocale = (['en', 'de', 'fr', 'it'].includes(lang) ? lang : 'en') as Locale;
  const dest = DESTINATIONS_FULL.find((d) => d.slug.en === slug || d.slug.de === slug);

  if (!dest) return {};

  const name = getLocalizedText(dest.name, validLocale);
  const tagline = getLocalizedText(dest.tagline, validLocale);

  return buildLocaleMetadata({
    title: `${name} — Travel Guide`,
    description: tagline,
    path: `/destinations/${slug}`,
    locale: validLocale,
  });
}

export default async function LocalizedDestinationDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const locale = (['en', 'de', 'fr', 'it'].includes(lang) ? lang : 'en') as Locale;
  const dest = DESTINATIONS_FULL.find((d) => d.slug.en === slug || d.slug.de === slug);

  if (!dest) notFound();

  const name = getLocalizedText(dest.name, locale);
  const tagline = getLocalizedText(dest.tagline, locale);
  const description = getLocalizedText(dest.description, locale);

  // TouristAttraction JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    'name': name,
    'description': tagline,
    'image': dest.image,
    'location': {
      '@type': 'Place',
      'name': name,
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'JO',
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative h-[60vh] bg-[#151B23] text-white flex items-end">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={dest.image}
              alt={name}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151B23] via-[#151B23]/40 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D8B98F] font-mono font-semibold block">
              JORDAN DESTINATION GUIDE
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F7F4EE]">
              {name}
            </h1>
            <p className="text-gray-300 text-sm sm:text-lg max-w-3xl font-light">
              {tagline}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-[#151B23]">
              {locale === 'de' ? 'Überblick & Highlight-Informationen' : locale === 'fr' ? 'Aperçu & Informations Clés' : locale === 'it' ? 'Panoramica & Informazioni' : 'Overview & Landmark Highlights'}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed font-light">
              {description}
            </p>
          </div>

          {/* Sidebar CTA */}
          <div className="space-y-6">
            <div className="bg-[#151B23] text-white p-8 rounded-3xl border border-[#A85F43]/40 space-y-6 sticky top-28 shadow-2xl">
              <span className="text-xs uppercase tracking-widest text-[#D8B98F] font-mono block">
                {locale === 'de' ? 'BESUCHEN SIE' : 'EXPLORE WITH PRIVATE TOUR'}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F7F4EE]">
                {name}
              </h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                {locale === 'de'
                  ? 'Erleben Sie diese Sehenswürdigkeit auf unseren maßgeschneiderten privaten Rundreisen.'
                  : 'Include this landmark in your private tailor-made Jordan itinerary with chauffeur.'}
              </p>
              <Link
                href={`/${locale}/booking`}
                className="block text-center w-full py-4 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                {locale === 'de' ? 'Reise Anfragen' : locale === 'fr' ? 'Réserver Un Circuit' : locale === 'it' ? 'Richiedi Preventivo' : 'Request Tour Quote'}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
