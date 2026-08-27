import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollWorldExperience } from '@/components/immersive/ScrollWorldExperience';
import { InteractiveMap } from '@/components/immersive/InteractiveMap';
import { StoryCollections } from '@/components/home/StoryCollections';
import { FeaturedTours } from '@/components/home/FeaturedTours';
import { Testimonials } from '@/components/home/Testimonials';
import Link from 'next/link';
import { ShieldCheck, Compass, Award, Star, HelpCircle } from 'lucide-react';
import { buildLocaleMetadata, generateStaticLocaleParams } from '@/data/seoHelper';
import { Locale } from '@/context/LanguageContext';

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
    en: 'Jordan Story Tours — Official Private Jordan Tour Operator',
    de: 'Jordan Story Tours — Offizieller Veranstalter für Private Jordanien Reisen',
    fr: 'Jordan Story Tours — Circuit Privé en Jordanie & Voyages Sur Mesure',
    it: 'Jordan Story Tours — Tour Privati in Giordania su Misura',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Experience Jordan through cinematic private tours to Petra, Wadi Rum Martian desert camps, the Dead Sea, Jerash, and holy sites. Licensed Ministry of Tourism operator.',
    de: 'Erleben Sie Jordanien auf maßgeschneiderten privaten Rundreisen nach Petra, Wadi Rum, zum Toten Meer und Jerash. Offiziell lizensierter Reiseveranstalter.',
    fr: 'Découvrez la Jordanie avec des circuits privés sur mesure: Pétra, le désert de Wadi Rum, la Mer Morte et Jerash. Opérateur certifié.',
    it: 'Scopri la Giordania con tour privati su misura a Petra, deserto di Wadi Rum, Mar Morto e Jerash. Tour operator ufficiale con licenza.',
  };

  return buildLocaleMetadata({
    title: titles[validLocale],
    description: descriptions[validLocale],
    path: '',
    locale: validLocale,
  });
}

export default async function LocalizedHomePage({ params }: Props) {
  const { lang } = await params;
  const locale = (['en', 'de', 'fr', 'it'].includes(lang) ? lang : 'en') as Locale;

  // Organization & Website JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    'name': 'Jordan Story Tours',
    'url': `https://jordanstorytours.com/${locale}`,
    'telephone': '+962-790000000',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Amman',
      'addressCountry': 'JO',
    },
    'priceRange': '$$$',
    'description': 'Official licensed private tour operator in Jordan offering luxury and classical private tours to Petra, Wadi Rum, Dead Sea, and Jerash.',
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* 12-Scene 3D Scroll World Experience */}
        <ScrollWorldExperience />

        {/* Value Proposition & Trust Badges */}
        <section className="bg-[#1A1615] border-y border-[#A85F43]/30 py-8 text-[#D8B98F] relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs sm:text-sm">
            <div className="flex flex-col items-center gap-1.5">
              <ShieldCheck className="w-6 h-6 text-[#A85F43]" />
              <span className="font-semibold text-[#F7F4EE]">
                {locale === 'de' ? 'Lizensierter Reiseveranstalter' : locale === 'fr' ? 'Agence Officielle Certifiée' : locale === 'it' ? 'Tour Operator Con Licenza' : 'Licensed Ministry Operator'}
              </span>
              <span className="text-[#D8B98F]/70 text-xs">Official Reg #2026</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Compass className="w-6 h-6 text-[#A85F43]" />
              <span className="font-semibold text-[#F7F4EE]">
                {locale === 'de' ? '100% Private Rundreisen' : locale === 'fr' ? 'Circuits 100% Privés' : locale === 'it' ? 'Tour Privati 100% Personalizzati' : '100% Tailored Private Tours'}
              </span>
              <span className="text-[#D8B98F]/70 text-xs">
                {locale === 'de' ? 'Eigener Chauffeur & Guide' : locale === 'fr' ? 'Chauffeur & Guide Dédiés' : locale === 'it' ? 'Autista Privato & Guida' : 'Dedicated Driver & Guide'}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Award className="w-6 h-6 text-[#A85F43]" />
              <span className="font-semibold text-[#F7F4EE]">
                {locale === 'de' ? 'Transparente Preise' : locale === 'fr' ? 'Prix Transparents' : locale === 'it' ? 'Prezzi Trasparenti' : 'Transparent Pricing'}
              </span>
              <span className="text-[#D8B98F]/70 text-xs">
                {locale === 'de' ? 'Keine versteckten Gebühren' : locale === 'fr' ? 'Sans Frais Cachés' : locale === 'it' ? 'Nessun Costo Nascosto' : 'No Hidden Fees'}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Star className="w-6 h-6 text-[#A85F43] fill-[#A85F43]" />
              <span className="font-semibold text-[#F7F4EE]">
                {locale === 'de' ? '5-Sterne Gästebewertungen' : locale === 'fr' ? 'Évaluations 5 Étoiles' : locale === 'it' ? 'Recensioni 5 Stelle' : '5-Star Traveler Reviews'}
              </span>
              <span className="text-[#D8B98F]/70 text-xs">Trusted Global Visitors</span>
            </div>
          </div>
        </section>

        {/* Story Collections Narrative Grid */}
        <StoryCollections />

        {/* Featured Tours System */}
        <FeaturedTours />

        {/* Interactive Jordan Topological Map */}
        <InteractiveMap />

        {/* Verified Customer Testimonials & Reviews */}
        <Testimonials />

        {/* AEO / Answer Engine Direct-Answer Section */}
        <section className="py-20 bg-[#F7F4EE] border-t border-gray-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#A85F43] font-mono block">
                {locale === 'de' ? 'WICHTIGE REISEINFORMATIONEN' : locale === 'fr' ? 'INFOS PRATIQUES DE VOYAGE' : locale === 'it' ? 'INFORMAZIONI DI VIAGGIO' : 'TRAVEL PLANNING ESSENTIALS'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1615]">
                {locale === 'de' ? 'Häufig gestellte Fragen zu Jordanien-Reisen' : locale === 'fr' ? 'Questions Fréquentes Sur La Jordanie' : locale === 'it' ? 'Domande Frequenti sui Tour in Giordania' : 'Frequently Asked Questions About Jordan Travel'}
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 space-y-3">
                <h3 className="font-serif text-xl font-bold text-[#1A1615] flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#A85F43]" />
                  {locale === 'de' ? 'Kann man Petra und Wadi Rum in einer Reise kombinieren?' : locale === 'fr' ? 'Peut-on visiter Pétra et le Wadi Rum en un seul voyage?' : locale === 'it' ? 'È possibile visitare Petra e Wadi Rum in un unico viaggio?' : 'Can I visit Petra and Wadi Rum in one trip?'}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed pl-8">
                  {locale === 'de'
                    ? 'Ja! Petra und Wadi Rum liegen im Süden Jordaniens nur ca. 1,5 Stunden voneinander entfernt. Unsere 3- und 5-tägigen Rundreisen beinhalten das Schatzhaus in Petra, Jeep-Safaris in Wadi Rum und Entspannung am Toten Meer.'
                    : locale === 'fr'
                    ? 'Oui! Pétra et Wadi Rum se trouvent dans le sud de la Jordanie, à seulement 1h30 de route. Nos circuits de 3 et 5 jours combinent Pétra, safaris en Jeep et Mer Morte.'
                    : locale === 'it'
                    ? 'Sì! Petra e Wadi Rum si trovano nel sud della Giordania, a solo 1,5 ore di distanza. I nostri tour da 3 e 5 giorni combinano Petra, safari in jeep e Mar Morto.'
                    : 'Yes! Petra and Wadi Rum are commonly combined because both are located in southern Jordan, just 1.5 hours apart. Our 3-day and 5-day classic private tours comfortably include Petra\'s Treasury, Bedouin jeep safaris in Wadi Rum, and relaxation at the Dead Sea.'}
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 space-y-3">
                <h3 className="font-serif text-xl font-bold text-[#1A1615] flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#A85F43]" />
                  {locale === 'de' ? 'Warum eine private Rundreise mit eigenem Fahrer wählen?' : locale === 'fr' ? 'Pourquoi choisir un circuit privé avec chauffeur?' : locale === 'it' ? 'Perché scegliere un tour privato con autista?' : 'Why choose a private tour with a dedicated driver in Jordan?'}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed pl-8">
                  {locale === 'de'
                    ? 'Private Rundreisen bieten maximale Flexibilität, klimatisierten Komfort, individuelle Fotostopps und stressfreies Reisen ohne große Reisegruppen.'
                    : locale === 'fr'
                    ? 'Les circuits privés offrent une flexibilité totale, un véhicule climatisé avec chauffeur privé et la liberté d\'adapter le rythme du voyage.'
                    : locale === 'it'
                    ? 'I tour privati offrono massima flessibilità, trasferimenti in veicoli climatizzati con autista privato ed esperienze su misura senza lo stress dei grandi gruppi.'
                    : 'Private tours offer complete flexibility with your schedule, door-to-door climate-controlled transfer, local insights, and custom photo stops without the stress of navigating desert highways or fitting into large group bus schedules.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Tour Request Banner */}
        <section className="py-24 bg-[#A85F43] text-[#F7F4EE] relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              {locale === 'de' ? 'Wünschen Sie einen individuellen Reiseplan?' : locale === 'fr' ? 'Besoin d\'un Itinéraire Sur Mesure?' : locale === 'it' ? 'Desideri un Itinerario Su Misura?' : 'Can\'t Find Your Exact Itinerary?'}
            </h2>
            <p className="text-base sm:text-lg text-[#F7F4EE]/90 max-w-2xl mx-auto font-light">
              {locale === 'de'
                ? 'Wir erstellen maßgeschneiderte Rundreisen passend zu Ihren Flugzeiten, Hotelkategorien und Reisedauer.'
                : locale === 'fr'
                ? 'Nous concevons votre voyage en Jordanie selon vos horaires de vol, choix d\'hôtels et durée.'
                : locale === 'it'
                ? 'Creiamo itinerari privati personalizzati in base ai tuoi orari di volo, hotel e giorni di viaggio.'
                : 'We design custom private Jordan itineraries tailored to your flight times, hotel preferences, and exact duration.'}
            </p>
            <div className="pt-4">
              <Link
                href={`/${locale}/booking`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A1615] hover:bg-[#302A27] text-[#D8B98F] font-semibold text-base shadow-xl transition-all hover:scale-105"
              >
                <span>
                  {locale === 'de' ? 'Unverbindliches Angebot Anfordern' : locale === 'fr' ? 'Demander un Devis Gratuit' : locale === 'it' ? 'Richiedi Preventivo Gratuito' : 'Request Custom Trip Quote'}
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
