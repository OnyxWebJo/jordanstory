'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Tour, getTourPriceDisplay } from '@/data/tours';
import { Clock, Star, ArrowRight, Search, Filter, RefreshCw } from 'lucide-react';
import { Locale } from '@/context/LanguageContext';
import { getLocalizedText } from '@/utils/getLocalizedServer';

interface ToursCatalogFilterProps {
  tours: Tour[];
  locale: Locale;
}

export const ToursCatalogFilter: React.FC<ToursCatalogFilterProps> = ({ tours, locale }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedDuration, setSelectedDuration] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Localized Labels Dictionary
  const labels = {
    allCategories: { en: 'All Tours', de: 'Alle Rundreisen', fr: 'Tous les Circuits', it: 'Tutti i Tour' },
    classical: { en: 'Classical', de: 'Klassisch', fr: 'Classique', it: 'Classico' },
    luxury: { en: 'Luxury', de: 'Luxusreisen', fr: 'Luxe', it: 'Lusso' },
    dayTour: { en: 'Day Tours', de: 'Tagesausflüge', fr: 'Excursions', it: 'Escursioni' },
    budget: { en: 'Budget', de: 'Komfort', fr: 'Économique', it: 'Budget' },
    holyLand: { en: 'Holy Land', de: 'Heiliges Land', fr: 'Terre Sainte', it: 'Terra Santa' },
    islamic: { en: 'Islamic History', de: 'Islamische Geschichte', fr: 'Histoire Islamique', it: 'Storia Islamica' },

    allDurations: { en: 'Any Duration', de: 'Alle Dauern', fr: 'Toutes Durées', it: 'Tutte le Durate' },
    dayTrip: { en: '1 Day', de: '1 Tag', fr: '1 Jour', it: '1 Giorno' },
    shortTrip: { en: '2–4 Days', de: '2–4 Tage', fr: '2–4 Jours', it: '2–4 Giorni' },
    longTrip: { en: '5+ Days', de: '5+ Tage', fr: '5+ Jours', it: '5+ Giorni' },

    searchPlaceholder: { en: 'Search tours, Petra, Dead Sea, Aqaba...', de: 'Reisen suchen, Petra, Totes Meer...', fr: 'Rechercher circuits, Pétra...', it: 'Cerca tour, Petra, Mar Morto...' },
    resultsCount: { en: 'Programs Available', de: 'Angebote Verfügbar', fr: 'Programmes Disponibles', it: 'Programmi Disponibili' },
    resetFilters: { en: 'Reset Filters', de: 'Filter Zurücksetzen', fr: 'Réinitialiser', it: 'Reimposta' },
    noResults: { en: 'No tours match your current filter selection.', de: 'Keine Rundreisen entsprechen Ihren Suchkriterien.', fr: 'Aucun circuit ne correspond à vos critères.', it: 'Nessun tour corrisponde ai criteri selezionati.' }
  };

  const categories = [
    { key: 'ALL', label: labels.allCategories[locale] },
    { key: 'Classical', label: labels.classical[locale] },
    { key: 'Luxury', label: labels.luxury[locale] },
    { key: 'Day Tour', label: labels.dayTour[locale] },
    { key: 'Budget', label: labels.budget[locale] },
    { key: 'Holy Land', label: labels.holyLand[locale] },
    { key: 'Islamic', label: labels.islamic[locale] }
  ];

  const durations = [
    { key: 'ALL', label: labels.allDurations[locale] },
    { key: '1', label: labels.dayTrip[locale] },
    { key: '2-4', label: labels.shortTrip[locale] },
    { key: '5+', label: labels.longTrip[locale] }
  ];

  // Filtering Logic
  const filteredTours = useMemo(() => {
    return tours.filter(tour => {
      // Category Match
      if (selectedCategory !== 'ALL') {
        if (selectedCategory === 'Holy Land') {
          if (!tour.storyCollection?.toLowerCase().includes('biblical') && !tour.title.en.toLowerCase().includes('holy land')) return false;
        } else if (selectedCategory === 'Islamic') {
          if (!tour.storyCollection?.toLowerCase().includes('islamic') && !tour.title.en.toLowerCase().includes('islamic')) return false;
        } else if (tour.category !== selectedCategory) {
          return false;
        }
      }

      // Duration Match
      if (selectedDuration === '1' && tour.durationDays !== 1) return false;
      if (selectedDuration === '2-4' && (tour.durationDays < 2 || tour.durationDays > 4)) return false;
      if (selectedDuration === '5+' && tour.durationDays < 5) return false;

      // Search Query Match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const titleText = getLocalizedText(tour.title, locale).toLowerCase();
        const subtitleText = getLocalizedText(tour.subtitle, locale).toLowerCase();
        const routeText = tour.route.join(' ').toLowerCase();

        if (!titleText.includes(query) && !subtitleText.includes(query) && !routeText.includes(query)) {
          return false;
        }
      }

      return true;
    });
  }, [tours, selectedCategory, selectedDuration, searchQuery, locale]);

  return (
    <div className="space-y-8">
      {/* Control Bar Container */}
      <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-6">
        
        {/* Top Row: Search Input & Reset */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={labels.searchPlaceholder[locale]}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#F7F4EE] border border-gray-200 text-xs sm:text-sm text-[#1A1615] focus:outline-none focus:border-[#A85F43]"
            />
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-between">
            <span className="text-xs font-mono font-semibold text-[#A85F43] bg-[#A85F43]/10 px-3.5 py-1.5 rounded-full">
              {filteredTours.length} {labels.resultsCount[locale]}
            </span>

            {(selectedCategory !== 'ALL' || selectedDuration !== 'ALL' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCategory('ALL');
                  setSelectedDuration('ALL');
                  setSearchQuery('');
                }}
                className="text-xs font-semibold text-gray-500 hover:text-[#A85F43] flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{labels.resetFilters[locale]}</span>
              </button>
            )}
          </div>
        </div>

        {/* Middle Row: Category Filter Tabs */}
        <div className="space-y-2">
          <span className="text-[11px] uppercase tracking-wider font-mono text-gray-500 font-semibold block">
            {locale === 'de' ? 'Kategorie Filter' : locale === 'fr' ? 'Catégories' : locale === 'it' ? 'Categorie' : 'Filter by Category'}
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-[#1A1615] text-white shadow-md scale-105'
                    : 'bg-[#F7F4EE] text-gray-700 hover:bg-[#A85F43]/10 hover:text-[#A85F43]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Row: Duration Filter Pills */}
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <span className="text-[11px] uppercase tracking-wider font-mono text-gray-500 font-semibold block">
            {locale === 'de' ? 'Dauer Filter' : locale === 'fr' ? 'Durée' : locale === 'it' ? 'Durata' : 'Filter by Duration'}
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {durations.map(dur => (
              <button
                key={dur.key}
                onClick={() => setSelectedDuration(dur.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedDuration === dur.key
                    ? 'bg-[#A85F43] text-white font-bold shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-[#A85F43]'
                }`}
              >
                {dur.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Tours Grid Display */}
      {filteredTours.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => {
            const localizedTitle = getLocalizedText(tour.title, locale);
            const localizedSubtitle = getLocalizedText(tour.subtitle, locale);
            const tourSlug = getLocalizedText(tour.slug, locale) || tour.slug.en;

            return (
              <div
                key={tour.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 flex flex-col group hover:-translate-y-1"
              >
                <div className="relative h-60 overflow-hidden bg-gray-900">
                  <img
                    src={tour.heroImage}
                    alt={localizedTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute top-4 left-4 bg-[#151B23]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#D8B98F] border border-[#A85F43]/40">
                    {tour.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#A85F43]" />
                        {tour.durationDays} {locale === 'de' ? (tour.durationDays === 1 ? 'Tag' : 'Tage') : locale === 'fr' ? (tour.durationDays === 1 ? 'Jour' : 'Jours') : locale === 'it' ? (tour.durationDays === 1 ? 'Giorno' : 'Giorni') : (tour.durationDays === 1 ? 'Day' : 'Days')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-[#A85F43] fill-[#A85F43]" />
                        5.0
                      </span>
                    </div>

                    <h2 className="font-serif text-xl font-bold text-[#151B23] group-hover:text-[#A85F43] transition-colors line-clamp-1">
                      {localizedTitle}
                    </h2>
                    <p className="text-xs text-gray-600 line-clamp-2 font-light">
                      {localizedSubtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-600 block uppercase font-mono">{locale === 'de' ? 'Ab Preis' : locale === 'fr' ? 'À partir de' : locale === 'it' ? 'Da' : 'Starting From'}</span>
                      <span className="font-serif font-bold text-lg text-[#151B23]">{getTourPriceDisplay(tour, locale)}</span>
                    </div>

                    <Link
                      href={`/${locale}/tours/${tourSlug}`}
                      className="px-4 py-2 rounded-full bg-[#151B23] hover:bg-[#A85F43] text-white text-xs font-semibold transition-colors inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <span>{locale === 'de' ? 'Details' : locale === 'fr' ? 'Aperçu' : locale === 'it' ? 'Dettagli' : 'View Program'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center space-y-4">
          <Filter className="w-10 h-10 text-gray-400 mx-auto" />
          <p className="text-gray-600 text-sm font-light max-w-md mx-auto">
            {labels.noResults[locale]}
          </p>
          <button
            onClick={() => {
              setSelectedCategory('ALL');
              setSelectedDuration('ALL');
              setSearchQuery('');
            }}
            className="px-6 py-2.5 rounded-full bg-[#A85F43] text-white font-semibold text-xs transition-colors"
          >
            {labels.resetFilters[locale]}
          </button>
        </div>
      )}
    </div>
  );
};
