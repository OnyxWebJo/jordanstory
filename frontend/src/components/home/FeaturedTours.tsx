'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TOURS_DATA } from '@/data/tours';
import { Clock, Star, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCurrency } from '@/context/CurrencyContext';

// Top 6 Curated Featured Tour IDs for the Homepage
const FEATURED_HOMEPAGE_IDS = [
  'budget-tour-1',
  'jordan-classic-1',
  'jordan-luxury-1',
  'holy-land-2',
  'islamic-tour-1',
  'day-tour-petra-rum-express'
];

export const FeaturedTours: React.FC = () => {
  const { locale } = useLanguage();
  const { formatPrice } = useCurrency();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { label: locale === 'de' ? 'Alle Rundreisen' : 'All Featured', value: 'All' },
    { label: locale === 'de' ? 'Klassisch' : 'Classical', value: 'Classical' },
    { label: locale === 'de' ? 'Luxusreisen' : 'Luxury', value: 'Luxury' },
    { label: locale === 'de' ? 'Tagesausflüge' : 'Day Tours', value: 'Day Tour' },
    { label: locale === 'de' ? 'Komfort' : 'Budget', value: 'Budget' }
  ];

  // Homepage restricts display to 6 curated featured tours
  const baseTours = TOURS_DATA.filter(t => FEATURED_HOMEPAGE_IDS.includes(t.id));
  
  const displayedTours = selectedCategory === 'All'
    ? baseTours
    : TOURS_DATA.filter(t => t.category === selectedCategory).slice(0, 6);

  return (
    <section className="py-24 bg-[#F7F4EE] text-[#1A1615] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-300 pb-8">
          <div className="space-[#1A1615] space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#A85F43] font-mono font-semibold block">
              {locale === 'de' ? 'AUSGEWÄHLTE TOP-ROUTEN' : 'CURATED FEATURED JOURNEYS'}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1A1615]">
              {locale === 'de' ? 'Ausgewählte Jordanien Rundreisen' : 'Featured Jordan Tour Packages'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-light">
              {locale === 'de'
                ? 'Handverlesene Reiserouten mit privatem Chauffeur, Klimafahrzeug und erstklassigen Hotels.'
                : 'Handpicked private itineraries featuring dedicated AC transfers, personal driver, and top hotel stays.'}
            </p>
          </div>

          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#A85F43] hover:text-[#D97757] transition-colors"
          >
            <span>{locale === 'de' ? `Alle 24 Touren im Katalog` : `Explore All 24 Tour Programs`}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Apple-Style Segmented Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-[#1A1615] text-[#F7F4EE] shadow-lg scale-105'
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-[#A85F43] hover:text-[#A85F43]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Apple HIG Tour Grid (Clean 6 Cards Limit) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 flex flex-col hover:-translate-y-1"
            >
              {/* Card Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.heroImage}
                  alt={tour.title[locale]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#1A1615]/70 backdrop-blur-md border border-white/20 text-[#D8B98F] shadow-lg">
                    {tour.category}
                  </span>
                </div>

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
                      <span className="text-2xl font-bold font-serif text-[#1A1615]">{formatPrice(tour.startingPriceUSD)}</span>
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

        {/* View All 24 Programs Link at Bottom */}
        <div className="pt-8 text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A1615] hover:bg-[#A85F43] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105"
          >
            <span>{locale === 'de' ? 'Vollständigen 24-Touren Katalog Ansehen' : 'View Full 24 Jordan Tour Catalog'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
