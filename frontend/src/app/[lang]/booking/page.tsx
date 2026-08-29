import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookingWizard } from '@/components/booking/BookingWizard';
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
    en: 'Book Private Jordan Tour — Instant Custom Trip Calculator',
    de: 'Private Jordanien Rundreise Buchen — Sofort-Reisekostenrechner',
    fr: 'Réserver Votre Voyage Sur Mesure En Jordanie — Calculateur En Ligne',
    it: 'Prenota Tour Privato In Giordania — Calcolatore Preventivo Immediato',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Calculate live pricing and request your custom private Jordan tour quote. Includes dedicated driver, hotels, and visa assistance.',
    de: 'Berechnen Sie Live-Preise und fordern Sie Ihr maßgeschneidertes Jordanien Angebot an. Inklusive Chauffeur, Hotels und Visum-Hilfe.',
    fr: 'Calculez votre devis en ligne et réservez votre voyage privé en Jordanie.',
    it: 'Calcola il preventivo del tuo tour privato in Giordania con autista e hotel inclusi.',
  };

  return buildLocaleMetadata({
    title: titles[validLocale],
    description: descriptions[validLocale],
    path: '/booking',
    locale: validLocale,
  });
}

export default async function LocalizedBookingPage({ params }: Props) {
  const { lang } = await params;
  const locale = (['en', 'de', 'fr', 'it'].includes(lang) ? lang : 'en') as Locale;

  return (
    <div className="min-h-screen flex flex-col bg-[#151B23]">
      <Header currentLocale={locale} />

      <main className="flex-1 pt-36 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <BookingWizard />
      </main>

      <Footer />
    </div>
  );
}
