'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TOURS_DATA, Tour } from '@/data/tours';
import { Clock, Star, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const FeaturedTours: React.FC = () => {
  const { locale } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { label: locale === 'de' ? 'Alle Rundreisen' : 'All Story Tours', value: 'All' },
    { label: locale === 'de' ? 'Klassisch' : 'Classical Jordan', value: 'Classical' },
    { label: locale === 'de' ? 'Luxusreisen' : 'Luxury Journeys', value: 'Luxury' },
    { label: locale === 'de' ? 'Tagesausflüge' : 'Day Tours', value: 'Day Tour' },
    { label: locale === 'de' ? 'Komfort' : 'Budget Tours', value: 'Budget' }
  ];

  const filteredTours = selectedCategory === 'All'
    ? TOURS_DATA
    : TOURS_DATA.filter(t => t.category === selectedCategory);

  return (
    <section className="py-24 bg-[#F7F4EE] text-[#1A1615] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-300 pb-8">
          <div className="space-[#1A1615] space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#A85F43] font-mono font-semibold block">
              {locale === 'de' ? 'OFFIZIELLE PRIVATE REISEROUTEN' : 'OFFICIAL PRIVATE ITINERARIES'}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1A1615]">
              {locale === 'de' ? 'Ausgewählte Jordanien Rundreisen' : 'Featured Jordan Tour Packages'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light">
              {locale === 'de'
                ? 'Alle Touren beinhalten privaten Klimatransfer mit eigenem deutsch/englischsprachigen Fahrer, 4/5-Sterne-Hotels & individuelle Betreuung.'
                : 'All tours include dedicated climate-controlled private transport, personal English-speaking driver, and luxury handpicked hotel accommodations.'}
            </p>
          </div>

          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#A85F43] hover:text-[#D97757] transition-colors"
          >
            <span>{locale === 'de' ? `Alle ${TOURS_DATA.length} Touren anzeigen` : `View All Tour Catalog (${TOURS_DATA.length})`}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Apple-Style Segmented Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat.value
                  ? 'bg-[#1A1615] text-[#F7F4EE] shadow-lg scale-105'
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-[#A85F43] hover:text-[#A85F43]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Apple HIG Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 flex flex-col hover:-translate-y-1"
            >
              {/* Card Image Header with Frosted Glass Badges */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.heroImage}
                  alt={tour.title[locale]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#1A1615]/70 backdrop-blur-md border border-white/20 text-[#D8B98F] shadow-lg">
                    {tour.category}
                  </span>
                </div>

                {/* Bottom Duration & Star Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-[#C69C6D]" />
                    <span>
                      {tour.durationDays} {locale === 'de' ? 'Tage' : 'Days'} / {tour.durationNights} {locale === 'de' ? 'Nächte' : 'Nights'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[#C69C6D]">
                    <Star className="w-3.5 h-3.5 fill-[#C69C6D]" />
                    <span>5.0</span>
                  </div>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-[#1A1615] group-hover:text-[#A85F43] transition-colors leading-snug">
                    {tour.title[locale]}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm font-light line-clamp-2 leading-relaxed">
                    {tour.subtitle[locale]}
                  </p>

                  {/* Highlights Bullet Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {tour.highlights[locale].slice(0, 3).map((hl, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#F7F4EE] text-gray-700 px-2.5 py-1 rounded-md border border-gray-200"
                      >
                        <Check className="w-3 h-3 text-[#A85F43]" />
                        <span>{hl}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Price & Booking CTA */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">
                      {locale === 'de' ? 'Ab Preis' : 'Starting From'}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold font-serif text-[#1A1615]">${tour.startingPriceUSD}</span>
                      <span className="text-xs text-gray-500 font-light">{locale === 'de' ? '/ Person' : '/ person'}</span>
                    </div>
                  </div>

                  <Link
                    href={`/tours/${tour.slug[locale]}`}
                    className="px-5 py-2.5 rounded-full bg-[#1A1615] hover:bg-[#A85F43] text-white text-xs font-semibold transition-all shadow-md group-hover:shadow-xl"
                  >
                    {locale === 'de' ? 'Details Ansehen' : 'View Details'}
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
