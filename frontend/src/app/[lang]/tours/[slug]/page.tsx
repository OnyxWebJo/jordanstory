import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TOURS_DATA } from '@/data/tours';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, Check, ShieldCheck } from 'lucide-react';
import { buildLocaleMetadata, LOCALES } from '@/data/seoHelper';
import { Locale } from '@/context/LanguageContext';
import { getLocalizedText } from '@/utils/getLocalizedServer';
import { TourGallery } from '@/components/tours/TourGallery';

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  LOCALES.forEach((lang) => {
    TOURS_DATA.forEach((tour) => {
      params.push({ lang, slug: tour.slug.en });
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
  const tour = TOURS_DATA.find((t) => t.slug.en === slug || t.slug.de === slug);

  if (!tour) return {};

  const title = getLocalizedText(tour.title, validLocale);
  const subtitle = getLocalizedText(tour.subtitle, validLocale);

  return buildLocaleMetadata({
    title: `${title} (${tour.durationDays} Days)`,
    description: subtitle,
    path: `/tours/${slug}`,
    locale: validLocale,
  });
}

export default async function LocalizedTourDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const locale = (['en', 'de', 'fr', 'it'].includes(lang) ? lang : 'en') as Locale;
  const tour = TOURS_DATA.find((t) => t.slug.en === slug || t.slug.de === slug);

  if (!tour) notFound();

  const title = getLocalizedText(tour.title, locale);
  const subtitle = getLocalizedText(tour.subtitle, locale);
  const inclusionsList = getLocalizedText(tour.inclusions, locale) || [];

  // Tour JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': title,
    'description': subtitle,
    'image': tour.heroImage,
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'USD',
      'price': tour.startingPriceUSD,
      'availability': 'https://schema.org/InStock',
      'url': `https://jordanstorytours.com/${locale}/tours/${slug}`,
    },
    'brand': {
      '@type': 'Brand',
      'name': 'Jordan Story Tours',
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
        {/* Hero Section */}
        <section className="relative h-[65vh] bg-[#151B23] text-white flex items-end">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={tour.heroImage}
              alt={title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151B23] via-[#151B23]/40 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-[#A85F43] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {tour.category}
              </span>
              <span className="text-xs text-gray-300 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D8B98F]" />
                {tour.durationDays} {locale === 'de' ? 'Tage' : locale === 'fr' ? 'Jours' : locale === 'it' ? 'Giorni' : 'Days'}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F7F4EE]">
              {title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-3xl font-light">
              {subtitle}
            </p>
          </div>
        </section>

        {/* Content & Booking CTA */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Gallery */}
            <TourGallery gallery={tour.gallery} heroImage={tour.heroImage} tourTitle={title} />

            {/* Inclusions */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#151B23]">
                {locale === 'de' ? 'Inbegriffene Leistungen' : locale === 'fr' ? 'Inclus Dans Le Circuit' : locale === 'it' ? 'Servizi Inclusi' : 'What is Included'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inclusionsList.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#A85F43] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="space-y-6">
            <div className="bg-[#151B23] text-white p-8 rounded-2xl border border-[#A85F43]/40 space-y-6 sticky top-28 shadow-2xl">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D8B98F] font-mono block">
                  {locale === 'de' ? 'Private Rundreise' : locale === 'fr' ? 'Tarif Circuit Privé' : locale === 'it' ? 'Tariffa Tour Privato' : 'Private Tour Price'}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-4xl font-extrabold text-[#D8B98F]">${tour.startingPriceUSD}</span>
                  <span className="text-xs text-gray-400">USD / {locale === 'de' ? 'Person' : 'person'}</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A85F43]" />
                  <span>{locale === 'de' ? 'Kostenlose Stornierung bis 14 Tage' : 'Free cancellation up to 14 days'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A85F43]" />
                  <span>{locale === 'de' ? 'Eigenes Fahrzeug & Chauffeur' : 'Dedicated vehicle & driver'}</span>
                </div>
              </div>

              <Link
                href={`/${locale}/booking?tour=${tour.id}`}
                className="block text-center w-full py-4 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-lg"
              >
                {locale === 'de' ? 'Jetzt Anfragen & Buchen' : locale === 'fr' ? 'Réserver Ce Circuit' : locale === 'it' ? 'Prenota Questo Tour' : 'Book This Tour'}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
