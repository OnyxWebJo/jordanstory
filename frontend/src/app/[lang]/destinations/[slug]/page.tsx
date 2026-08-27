import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DESTINATIONS_FULL } from '@/data/destinations';
import { TOURS_DATA } from '@/data/tours';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Clock, Calendar, CheckCircle2, Lightbulb, ArrowRight, Star } from 'lucide-react';
import { buildLocaleMetadata, LOCALES } from '@/data/seoHelper';
import { Locale } from '@/context/LanguageContext';
import { getLocalizedText } from '@/utils/getLocalizedServer';

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  LOCALES.forEach((lang) => {
    DESTINATIONS_FULL.forEach((d) => {
      const slugs = Array.from(new Set(Object.values(d.slug).filter(Boolean)));
      slugs.forEach((slug) => {
        params.push({ lang, slug });
      });
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
  const dest = DESTINATIONS_FULL.find((d) => Object.values(d.slug).includes(slug));

  if (!dest) return {};

  const name = getLocalizedText(dest.name, validLocale);
  const tagline = getLocalizedText(dest.tagline, validLocale);

  return buildLocaleMetadata({
    title: `${name} — Travel Guide (2026)`,
    description: tagline,
    path: `/destinations/${slug}`,
    locale: validLocale,
  });
}

export default async function LocalizedDestinationDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const locale = (['en', 'de', 'fr', 'it'].includes(lang) ? lang : 'en') as Locale;
  const dest = DESTINATIONS_FULL.find((d) => Object.values(d.slug).includes(slug));

  if (!dest) notFound();

  const name = getLocalizedText(dest.name, locale);
  const tagline = getLocalizedText(dest.tagline, locale);
  const description = getLocalizedText(dest.description, locale);
  const highlightsList = getLocalizedText(dest.highlights, locale) || [];
  const insiderTipsList = getLocalizedText(dest.insiderTips, locale) || [];
  const bestTime = getLocalizedText(dest.bestTimeToVisit, locale);

  // Dynamic Matching: Find all active tours visiting this destination
  const matchingTours = TOURS_DATA.filter((tour) => {
    const searchTerm = dest.id.toLowerCase().replace('-', ' ');
    const destNameEn = dest.name.en.toLowerCase();
    return tour.route.some((r) => r.toLowerCase().includes(searchTerm) || destNameEn.includes(r.toLowerCase())) ||
      tour.itinerary.some((day) => day.title.en.toLowerCase().includes(searchTerm) || day.description.en.toLowerCase().includes(searchTerm));
  });

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
        {/* Banner Hero */}
        <section className="relative h-[65vh] bg-[#151B23] text-white flex items-end">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={dest.image}
              alt={name}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151B23] via-[#151B23]/40 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#A85F43] text-white tracking-widest uppercase">
              {locale === 'de' ? 'JORDANien REISEZIELE' : locale === 'fr' ? 'GUIDE DE DESTINATION' : locale === 'it' ? 'GUIDA DESTINAZIONE' : 'OFFICIAL DESTINATION GUIDE'}
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
          
          {/* Main Editorial Content Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview Section */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#151B23]">
                {locale === 'de' ? 'Überblick & Bedeutung' : locale === 'fr' ? 'Aperçu & Importance' : locale === 'it' ? 'Panoramica e Importanza' : 'Overview & Landmark Significance'}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-light">
                {description}
              </p>
            </div>

            {/* Key Experiences & Highlights */}
            {highlightsList.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                <h2 className="font-serif text-2xl font-bold text-[#151B23] flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#A85F43]" />
                  <span>{locale === 'de' ? 'Wichtigste Erlebnisse & Highlights' : locale === 'fr' ? 'Expériences & Points Forts' : locale === 'it' ? 'Esperienze Principali e Highlights' : 'Key Experiences & Highlights'}</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlightsList.map((h: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-[#F7F4EE]/60 border border-gray-200/60">
                      <span className="text-[#A85F43] font-bold mt-0.5">•</span>
                      <span className="text-sm text-gray-800 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Insider Tips & Best Time */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#151B23] flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-[#A85F43]" />
                <span>{locale === 'de' ? 'Praktische Reisetipps' : locale === 'fr' ? 'Conseils Pratiques de Voyage' : locale === 'it' ? 'Consigli Pratici di Viaggio' : 'Practical Travel & Insider Tips'}</span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A85F43] bg-[#A85F43]/10 px-4 py-2 rounded-full w-fit">
                  <Calendar className="w-4 h-4" />
                  <span>{locale === 'de' ? 'Beste Reisezeit' : 'Best Time to Visit'}: {bestTime}</span>
                </div>

                <div className="space-y-3 pt-2">
                  {insiderTipsList.map((tip: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-[#A85F43] font-bold">✓</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Destination AEO FAQ Section */}
            {dest.aeoFaqs && dest.aeoFaqs.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                <h2 className="font-serif text-2xl font-bold text-[#151B23]">
                  {locale === 'de' ? 'Häufig gestellte Fragen' : locale === 'fr' ? 'Foire Aux Questions' : locale === 'it' ? 'Domande Frequenti' : 'Frequently Asked Questions'}
                </h2>
                <div className="space-y-4">
                  {dest.aeoFaqs.map((faq, idx) => {
                    const qText = getLocalizedText(faq.question, locale);
                    const aText = getLocalizedText(faq.answer, locale);
                    return (
                      <div key={idx} className="p-5 rounded-2xl bg-[#F7F4EE]/80 border border-gray-200/80 space-y-2">
                        <h3 className="font-bold text-sm text-[#151B23]">
                          {qText}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-light">
                          {aText}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Dynamic Tours Visiting This Destination */}
            {matchingTours.length > 0 && (
              <div className="space-y-6 pt-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl font-bold text-[#151B23]">
                    {locale === 'de' ? `Rundreisen mit ${name.split('—')[0]}` : locale === 'fr' ? `Circuits visitant ${name.split('—')[0]}` : locale === 'it' ? `Tour che visitano ${name.split('—')[0]}` : `Verified Tours Visiting ${name.split('—')[0]}`}
                  </h2>
                  <span className="text-xs font-mono text-gray-500">{matchingTours.length} Programs</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {matchingTours.slice(0, 4).map((t) => {
                    const tourTitle = getLocalizedText(t.title, locale);
                    const tourSlug = getLocalizedText(t.slug, locale) || t.slug.en;

                    return (
                      <div key={t.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between p-5 space-y-4">
                        <div className="space-y-2">
                          <span className="text-[10px] uppercase font-mono tracking-wider text-[#A85F43] bg-[#A85F43]/10 px-2.5 py-0.5 rounded-full">
                            {t.category}
                          </span>
                          <h3 className="font-serif text-lg font-bold text-[#151B23] line-clamp-1">
                            {tourTitle}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-[#A85F43]" />
                              {t.durationDays} Days
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 text-[#A85F43] fill-[#A85F43]" />
                              5.0
                            </span>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                          <span className="font-serif font-bold text-[#151B23] text-lg">${t.startingPriceUSD} USD</span>
                          <Link
                            href={`/${locale}/tours/${tourSlug}`}
                            className="px-3.5 py-1.5 rounded-full bg-[#151B23] hover:bg-[#A85F43] text-white text-xs font-semibold transition-colors inline-flex items-center gap-1"
                          >
                            <span>Details</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar CTA */}
          <div className="space-y-6">
            <div className="bg-[#151B23] text-white p-8 rounded-3xl border border-[#A85F43]/40 space-y-6 sticky top-28 shadow-2xl">
              <span className="text-xs uppercase tracking-widest text-[#D8B98F] font-mono block">
                {locale === 'de' ? 'INDIVIDUELLE REISE' : 'EXPLORE WITH PRIVATE TOUR'}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F7F4EE]">
                {name}
              </h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                {locale === 'de'
                  ? 'Erleben Sie diese Sehenswürdigkeit auf unseren maßgeschneiderten privaten Rundreisen mit eigenem Fahrer.'
                  : 'Include this landmark in your private tailor-made Jordan itinerary with dedicated vehicle & driver.'}
              </p>
              <Link
                href={`/${locale}/booking`}
                className="block text-center w-full py-4 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105"
              >
                {locale === 'de' ? 'Reise Anfragen & Buchen' : locale === 'fr' ? 'Réserver Un Circuit' : locale === 'it' ? 'Richiedi Preventivo' : 'Request Private Tour Quote'}
              </Link>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
