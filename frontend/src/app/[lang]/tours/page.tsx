import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TOURS_DATA } from '@/data/tours';
import { ToursCatalogFilter } from '@/components/tours/ToursCatalogFilter';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Star, MapPin, Search } from 'lucide-react';
import { buildLocaleMetadata, generateStaticLocaleParams } from '@/data/seoHelper';
import { Locale } from '@/context/LanguageContext';
import { getLocalizedText } from '@/utils/getLocalizedServer';

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
    en: 'Private Jordan Tour Packages (2026) — Petra, Wadi Rum & Dead Sea',
    de: 'Private Jordanien Rundreisen (2026) — Petra, Wadi Rum & Totes Meer',
    fr: 'Circuits Privés en Jordanie (2026) — Pétra, Wadi Rum & Mer Morte',
    it: 'Tour Privati in Giordania (2026) — Petra, Wadi Rum e Mar Morto',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Browse 24 curated private Jordan tour itineraries. Custom 3-day to 10-day packages with dedicated driver, luxury hotels, and licensed guides.',
    de: 'Entdecken Sie 24 ausgewählte private Jordanien Rundreisen. Individuelle 3- bis 10-Tage Angebote mit eigenem Chauffeur und Top-Hotels.',
    fr: 'Découvrez 24 circuits privés sur mesure en Jordanie. De 3 à 10 jours avec chauffeur privé, hôtels de charme et guides locaux.',
    it: 'Esplora 24 itinerari privati su misura in Giordania. Tour da 3 a 10 giorni con autista privato, hotel selezionati e guide certificate.',
  };

  return buildLocaleMetadata({
    title: titles[validLocale],
    description: descriptions[validLocale],
    path: '/tours',
    locale: validLocale,
  });
}

export default async function LocalizedToursPage({ params }: Props) {
  const { lang } = await params;
  const locale = (['en', 'de', 'fr', 'it'].includes(lang) ? lang : 'en') as Locale;

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EFE7]">
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* Editorial Banner Header */}
        <section className="bg-[#151B23] text-[#F4EFE7] pt-36 pb-20 border-b border-[#A85F43]/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#D8B98F] font-mono font-semibold block">
              {locale === 'de' ? 'EXKLUSIVE JORDANIE-RUNDREISEN' : locale === 'fr' ? 'CIRCUITS PRIVÉS SUR MESURE' : locale === 'it' ? 'ITINERARI PRIVATI IN GIORDANIA' : 'CURATED PRIVATE ITINERARIES'}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight">
              {locale === 'de' ? 'Private Rundreisen & Ausflüge' : locale === 'fr' ? 'Nos Circuits & Excursions' : locale === 'it' ? 'I Nostri Tour Privati' : 'Private Jordan Tours & Excursions'}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              {locale === 'de'
                ? 'Jede Reise beinhaltet einen eigenen klimatisierten Chauffeur-Wagen, Handverlesene Hotels und lizensierte Führer in Petra & Jerash.'
                : locale === 'fr'
                ? 'Chaque itinéraire comprend un véhicule privé avec chauffeur, des hôtels de charme et des guides locaux agréés.'
                : locale === 'it'
                ? 'Ogni itinerario include veicolo climatizzato con autista privato, hotel selezionati e guide locali certificate.'
                : 'Every itinerary features private climate-controlled transfers with dedicated driver, handpicked hotels, and licensed guides.'}
            </p>
          </div>
        </section>

        {/* Tours Catalog Filter & Grid Container */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ToursCatalogFilter tours={TOURS_DATA} locale={locale} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
