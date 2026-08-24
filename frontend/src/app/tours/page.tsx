'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TOURS_DATA } from '@/data/tours';
import Link from 'next/link';
import { Clock, Star, MapPin, Check, Search, Compass, ShieldCheck, Filter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCurrency } from '@/context/CurrencyContext';

export default function ToursPage() {
  const { locale } = useLanguage();
  const { formatPrice } = useCurrency();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { label: locale === 'de' ? 'Alle 24 Touren' : 'All 24 Programs', value: 'All' },
    { label: locale === 'de' ? 'Klassisch' : 'Classical', value: 'Classical' },
    { label: locale === 'de' ? 'Luxus' : 'Luxury', value: 'Luxury' },
    { label: locale === 'de' ? 'Biblisch / Heiliges Land' : 'Biblical & Pilgrimage', value: 'Biblical' },
    { label: locale === 'de' ? 'Islamische Geschichte' : 'Islamic Heritage', value: 'Islamic' },
    { label: locale === 'de' ? 'Tagesausflüge' : 'Day Excursions', value: 'Day Tour' },
    { label: locale === 'de' ? 'Komfort' : 'Budget', value: 'Budget' },
  ];

  const filteredTours = TOURS_DATA.filter((tour) => {
    const matchesCategory = selectedCategory === 'All' || tour.category === selectedCategory;
    const matchesSearch =
      tour.title[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.subtitle[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.route.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EFE7]">
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* Editorial Banner Header */}
        <section className="bg-[#151B23] text-[#F4EFE7] py-20 border-b border-[#A85F43]/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#D8B98F] font-mono font-semibold block">
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

        {/* Catalog Search & Category Filter Section */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-300 pb-6">
            {/* Category Segmented Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat.value
                      ? 'bg-[#1A1615] text-[#F7F4EE] shadow-md scale-105'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-[#A85F43] hover:text-[#A85F43]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={locale === 'de' ? 'Suche nach Ziel oder Tour...' : 'Search by destination or tour...'}
                className="w-full bg-white border border-gray-300 rounded-full pl-10 pr-4 py-2.5 text-xs text-[#1A1615] focus:outline-none focus:border-[#A85F43] shadow-sm"
              />
            </div>
          </div>

          {/* Tour Programs Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 flex flex-col hover:-translate-y-1"
              >
                {/* Cover Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.heroImage}
                    alt={tour.title[locale]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#1A1615]/70 backdrop-blur-md border border-white/20 text-[#D8B98F]">
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

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-[#1A1615] group-hover:text-[#A85F43] transition-colors leading-snug">
                      {tour.title[locale]}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm font-light line-clamp-2 leading-relaxed">
                      {tour.subtitle[locale]}
                    </p>

                    {/* Route Pins */}
                    <div className="flex items-center gap-1 text-[11px] text-[#A85F43] font-semibold pt-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{tour.route.join(' → ')}</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
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
                      {locale === 'de' ? 'Details Ansehen' : 'View Program'}
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
