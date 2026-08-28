'use client';

import React from 'react';
import { ShieldCheck, Compass, UserCheck, Clock, MapPin, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CANONICAL_BUSINESS_RECORD, getVerifiedRegistrationDisplay } from '@/data/businessRecord';

export const Testimonials: React.FC = () => {
  const { locale } = useLanguage();

  const trustPillars = [
    {
      icon: ShieldCheck,
      title: {
        en: 'Official Tour Operator',
        de: 'Offizieller Reiseveranstalter',
        fr: 'Voyagiste Officiel Agréé',
        it: 'Tour Operator Ufficiale'
      },
      desc: {
        en: `Legally registered in Amman, Jordan (${getVerifiedRegistrationDisplay(locale)}). Guaranteed authentic service and full compliance.`,
        de: `Legitimiert in Amman, Jordanien (${getVerifiedRegistrationDisplay(locale)}). Garantiert authentischer Service und volle Transparenz.`,
        fr: `Immatriculé à Amman, Jordanie (${getVerifiedRegistrationDisplay(locale)}). Service authentique et conformité garantie.`,
        it: `Registrato a Amman, Giordania (${getVerifiedRegistrationDisplay(locale)}). Servizio autentico e massima trasparenza.`
      }
    },
    {
      icon: UserCheck,
      title: {
        en: 'Private Chauffeur & Guides',
        de: 'Privat-Chauffeur & Reiseleiter',
        fr: 'Chauffeur Privé & Guides Qualified',
        it: 'Autista Privato e Guide Autorizzate'
      },
      desc: {
        en: 'Dedicated professional English-speaking drivers and certified local guides at historic sites for private comfort.',
        de: 'Erfahrene englischsprachige Chauffeure und lizensierte lokale Führer an historischen Stätten.',
        fr: 'Chauffeurs professionnels anglophones dédiés et guides locaux certifiés sur les sites historiques.',
        it: 'Autisti professionisti parlanti inglese e guide locali autorizzate sui siti storici.'
      }
    },
    {
      icon: Compass,
      title: {
        en: '100% Tailored Private Trips',
        de: '100% Maßgeschneiderte Reisen',
        fr: 'Circuits 100% Sur Mesure',
        it: 'Itinerari 100% Su Misura'
      },
      desc: {
        en: 'Flexible day-by-day pace, customized hotel tiers from 3-star boutique to 5-star luxury resorts and desert domes.',
        de: 'Flexibles Reisetempo, individuelle Hotelwahl von 3-Sterne bis 5-Sterne-Luxusresorts und Wüstencamps.',
        fr: 'Rythme sur mesure, choix d\'hôtels du 3 étoiles de charme aux resorts 5 étoiles et dômes du désert.',
        it: 'Ritmo flessibile, scelta di hotel da 3 stelle a resort 5 stelle e campi nel deserto.'
      }
    },
    {
      icon: Clock,
      title: {
        en: '24/7 Local Support',
        de: '24/7 Betreuung Vor Ort',
        fr: 'Assistance Locale 24h/7j',
        it: 'Assistenza Locale 24/7'
      },
      desc: {
        en: 'Direct WhatsApp and phone assistance throughout your entire stay in Jordan from arrival to airport departure.',
        de: 'Direkte Betreuung per WhatsApp und Telefon während Ihrer gesamten Reise von der Ankunft bis zur Abreise.',
        fr: 'Assistance directe par WhatsApp et téléphone tout au long de votre séjour en Jordanie.',
        it: 'Assistenza diretta via WhatsApp e telefono durante tutto il tuo soggiorno in Giordania.'
      }
    }
  ];

  return (
    <section className="py-24 bg-[#1A1615] text-[#F7F4EE] relative overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#A85F43]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold block">
              {locale === 'de' ? 'VERTRAUEN & QUALITÄTSGARANTIE' : locale === 'fr' ? 'CONFIANCE & GARANTIE DE QUALITÉ' : locale === 'it' ? 'FIDUCIA E GARANZIA DI QUALITÀ' : 'TRUST & SERVICE GUARANTEE'}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F7F4EE]">
              {locale === 'de' ? 'Warum Jordan Story Tours' : locale === 'fr' ? 'Pourquoi Jordan Story Tours' : locale === 'it' ? 'Perché Scegliere Jordan Story Tours' : 'Why Travel With Jordan Story'}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              {locale === 'de'
                ? 'Authentischer Service, lizensierter Betrieb und maßgeschneiderte Betreuung für Ihre Jordanien-Expedition.'
                : 'Licensed local operation, dedicated private drivers, and custom itineraries tailored for your dream Jordan journey.'}
            </p>
          </div>

          {/* Business Registration Badge */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
            <div className="w-10 h-10 rounded-full bg-[#A85F43] flex items-center justify-center text-white shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-0.5 text-xs text-gray-300">
              <span className="font-bold block text-white font-serif">{CANONICAL_BUSINESS_RECORD.brandName}</span>
              <span className="text-[#C69C6D] font-mono text-[11px] block">{getVerifiedRegistrationDisplay(locale)}</span>
            </div>
          </div>
        </div>

        {/* Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4 backdrop-blur-sm hover:border-[#C69C6D]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#A85F43]/20 border border-[#A85F43]/40 flex items-center justify-center text-[#C69C6D]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {pillar.title[locale] || pillar.title.en}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                    {pillar.desc[locale] || pillar.desc.en}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
