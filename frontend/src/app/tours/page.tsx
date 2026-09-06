'use client';

import React, { Suspense } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TOURS_DATA } from '@/data/tours';
import { ToursCatalogFilter } from '@/components/tours/ToursCatalogFilter';
import { useLanguage } from '@/context/LanguageContext';

export default function ToursPage() {
  const { locale } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EFE7]">
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* Editorial Banner Header */}
        <section className="bg-[#1A1615] text-[#F7F4EE] pt-32 sm:pt-36 pb-20 border-b border-white/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold block">
              {locale === 'de' ? 'OFFIZIELLER JORDANIE-REISEKATALOG' : 'OFFICIAL JORDAN TOURIST & GUIDED PROGRAMS'}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto">
              {locale === 'de' ? 'Jordanien Rundreisen & Programme' : 'Jordan Private Tour Programs & Itineraries'}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
              {locale === 'de'
                ? 'Erkunden Sie Jordaniens beste private Touren. Von 1-Tages-Exkursionen bis zu 8-Tage-Luxusreisen durch Petra, Wadi Rum & Totes Meer.'
                : 'Explore Jordan\'s complete private tour directory. From 1-day express excursions to 8-day luxury journeys across Petra, Wadi Rum & Dead Sea.'}
            </p>

            {/* Quick Stats Grid */}
            <div className="pt-6 flex flex-wrap justify-center gap-8 text-xs text-[#D8B98F] font-mono">
              <div><strong className="text-white font-serif text-xl block">24</strong> {locale === 'de' ? 'Verifizierte Routen' : 'Tour Programs'}</div>
              <div><strong className="text-white font-serif text-xl block">100%</strong> {locale === 'de' ? 'Privater Chauffeur' : 'Private Chauffeur'}</div>
              <div><strong className="text-white font-serif text-xl block">5.0 ★</strong> {locale === 'de' ? 'Bewertung' : 'Traveler Rating'}</div>
            </div>
          </div>
        </section>

        {/* Catalog Search & Category Filter Section with Suspense */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="p-12 text-center text-gray-500 font-mono text-sm">Loading tours catalog...</div>}>
            <ToursCatalogFilter tours={TOURS_DATA} locale={locale} />
          </Suspense>
        </section>
      </main>

      <Footer />
    </div>
  );
}

