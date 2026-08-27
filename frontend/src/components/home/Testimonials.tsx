'use client';

import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { REVIEWS_DATA } from '@/data/reviews';

export const Testimonials: React.FC = () => {
  const { locale, getLocalized } = useLanguage();

  return (
    <section className="py-24 bg-[#1A1615] text-[#F7F4EE] relative overflow-hidden">
      {/* Decorative Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#A85F43]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold block">
              {locale === 'de' ? 'REISEERFAHRUNGEN & BEWERTUNGEN' : 'REAL TRAVELER EXPERIENCES'}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F7F4EE]">
              {locale === 'de' ? 'Was Unsere Gäste Sagen' : 'Loved By Travelers Worldwide'}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              {locale === 'de'
                ? 'Erfahren Sie, warum Reisende aus Deutschland, Großbritannien und aller Welt Jordan Story Tours vertrauen.'
                : 'Discover why travelers from Germany, the UK, USA, and across the globe rate us 5 stars.'}
            </p>
          </div>

          {/* Rating Summary Badge */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold font-serif text-[#C69C6D]">5.0</span>
              <div className="flex items-center gap-1 text-[#C69C6D]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C69C6D]" />
                ))}
              </div>
            </div>
            <div className="border-l border-white/10 pl-4 space-y-0.5 text-xs text-gray-300">
              <span className="font-semibold block">{locale === 'de' ? '100% Verifizierte Bewertungen' : '100% Verified Reviews'}</span>
              <span className="text-gray-400 font-mono text-[10px]">Ministry License #7042</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 backdrop-blur-sm hover:border-[#C69C6D]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C69C6D] text-[#C69C6D]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#A85F43]/40" />
                </div>

                {/* Tour Name Badge */}
                <span className="inline-block text-[11px] font-mono text-[#C69C6D] bg-[#C69C6D]/10 px-3 py-1 rounded-full border border-[#C69C6D]/20">
                  {getLocalized(review.tourName)}
                </span>

                {/* Comment Content */}
                <p className="text-gray-300 text-sm sm:text-base font-light italic leading-relaxed">
                  "{getLocalized(review.comment)}"
                </p>
              </div>

              {/* Reviewer Profile Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#A85F43] flex items-center justify-center font-bold text-white text-sm font-serif">
                    {review.author.slice(0, 2)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-[#F7F4EE]">{review.author}</span>
                      <span className="text-sm">{review.flag}</span>
                    </div>
                    <span className="text-xs text-gray-400 font-mono block">{review.country} • {review.date}</span>
                  </div>
                </div>

                {review.verifiedBooker && (
                  <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{locale === 'de' ? 'Verifiziert' : 'Verified'}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
