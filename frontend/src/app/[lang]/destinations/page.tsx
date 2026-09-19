import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { MapPin, ArrowRight, Calendar } from 'lucide-react';
import { DESTINATIONS_FULL } from '@/data/destinations';
import { buildLocaleMetadata, generateStaticLocaleParams, buildBreadcrumbSchema } from '@/data/seoHelper';
import { Locale } from '@/context/LanguageContext';
import { getLocalizedText } from '@/utils/getLocalizedServer';
import { getAssetUrl } from '@/utils/assets';

export function generateStaticParams() {
  return generateStaticLocaleParams();
}

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const validLocale = (['en', 'de', 'fr', 'it'].includes(lang) ? lang : 'en') as Locale;

  const titles: Record<Locale, string> = {
    en: 'Jordan Destinations & Landmarks Guide (2026) — Petra, Wadi Rum & Dead Sea',
    de: 'Jordanien Reiseziele & Sehenswürdigkeiten (2026) — Petra, Wadi Rum & Totes Meer',
    fr: 'Guide Des Destinations En Jordanie (2026) — Pétra, Wadi Rum & Mer Morte',
    it: 'Guida Destinazioni In Giordania (2026) — Petra, Wadi Rum e Mar Morto',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Explore official guides to Jordan\'s top ancient wonders, desert wildernesses, and mineral wellness spas.',
    de: 'Entdecken Sie offizielle Reiseführer zu Jordaniens antiken Weltwundern, Wüstenlandschaften und Thermalbädern.',
    fr: 'Explorez les guides officiels des merveilles antiques de la Jordanie, déserts et stations thermales.',
    it: 'Scopri le guide ufficiali delle meraviglie antiche della Giordania, deserto del Wadi Rum e Mar Morto.',
  };

  return buildLocaleMetadata({
    title: titles[validLocale],
    description: descriptions[validLocale],
    path: '/destinations/',
    locale: validLocale,
  });
}

export default async function LocalizedDestinationsPage({ params }: Props) {
  const { lang } = await params;
  const locale = (['en', 'de', 'fr', 'it'].includes(lang) ? lang : 'en') as Locale;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: `/${locale}/` },
    { name: locale === 'de' ? 'Reiseziele' : locale === 'fr' ? 'Destinations' : locale === 'it' ? 'Destinazioni' : 'Destinations', url: `/${locale}/destinations/` },
  ]);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': locale === 'de' ? 'Jordanien Reiseziele' : locale === 'fr' ? 'Destinations en Jordanie' : locale === 'it' ? 'Destinazioni in Giordania' : 'Jordan Destinations Hub',
    'numberOfItems': DESTINATIONS_FULL.length,
    'itemListElement': DESTINATIONS_FULL.map((d, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': d.name[locale] || d.name.en,
      'url': `https://jordanstorytours.com/${locale}/destinations/${d.slug[locale] || d.slug.en}/`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#1A1615]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* Banner Section */}
        <section className="bg-[#1A1615] text-[#F7F4EE] pt-32 sm:pt-36 pb-20 border-b border-white/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold block">
              {locale === 'de' ? 'OFFIZIELLE DESTINATIONS-REISEFÜHRER' : locale === 'fr' ? 'GUIDES OFFICIELS DES DESTINATIONS' : locale === 'it' ? 'GUIDE UFFICIALI DESTINAZIONI' : 'OFFICIAL DESTINATION GUIDES'}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              {locale === 'de' ? 'Jordanien Reiseziele & Highlights' : locale === 'fr' ? 'Destinations & Sites En Jordanie' : locale === 'it' ? 'Destinazioni & Luoghi in Giordania' : 'Jordan Destinations & Landmarks'}
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light">
              {locale === 'de'
                ? `Erkunden Sie ${DESTINATIONS_FULL.length} antike Weltwunder, rote Wüstenlandschaften und heilige Stätten.`
                : locale === 'fr'
                ? `Découvrez les ${DESTINATIONS_FULL.length} merveilles antiques, paysages du désert et sites sacrés.`
                : locale === 'it'
                ? `Esplora le ${DESTINATIONS_FULL.length} meraviglie antiche della Giordania, il deserto del Wadi Rum e i luoghi santi.`
                : `Explore all ${DESTINATIONS_FULL.length} world-class ancient wonders, desert wildernesses, and sacred heritage landmarks across Jordan.`}
            </p>
          </div>
        </section>

        {/* Destination Cards Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS_FULL.map((d) => {
            const name = getLocalizedText(d.name, locale);
            const tagline = getLocalizedText(d.tagline, locale);
            const slug = d.slug[locale] || d.slug.en;

            return (
              <div 
                key={d.id} 
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 flex flex-col hover:-translate-y-1"
              >
                <div className="h-60 relative overflow-hidden">
                  <img 
                    src={getAssetUrl(d.image)} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-black/60 text-white backdrop-blur-md border border-white/20">
                    <MapPin className="w-3.5 h-3.5 text-[#A85F43]" />
                    <span>Jordan</span>
                  </span>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h2 className="font-serif text-2xl font-bold text-[#1A1615] group-hover:text-[#A85F43] transition-colors">
                      {name}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed font-light line-clamp-2">
                      {tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-[#A85F43]" />
                      <span>{getLocalizedText(d.bestTimeToVisit, locale)}</span>
                    </div>
                    <Link 
                      href={`/${locale}/destinations/${slug}/`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#A85F43] group-hover:text-[#D97757] transition-colors"
                    >
                      <span>{locale === 'de' ? 'Reiseführer' : locale === 'fr' ? 'Explorer' : locale === 'it' ? 'Esplora' : 'Explore Guide'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
