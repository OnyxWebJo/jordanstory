import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TOURS_DATA } from '@/data/tours';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, MapPin, CheckCircle2, XCircle, ShieldCheck, Star, HelpCircle, Calendar } from 'lucide-react';
import { buildLocaleMetadata, LOCALES } from '@/data/seoHelper';
import { Locale } from '@/context/LanguageContext';
import { getLocalizedText } from '@/utils/getLocalizedServer';
import { TourGallery } from '@/components/tours/TourGallery';

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  LOCALES.forEach((lang) => {
    TOURS_DATA.forEach((tour) => {
      params.push({ lang, slug: tour.slug.en });
    });
  });
  return params;
}

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const validLocale = (['en', 'de', 'fr', 'it'].includes(lang) ? lang : 'en') as Locale;
  const tour = TOURS_DATA.find((t) => t.slug.en === slug || t.slug.de === slug);

  if (!tour) return {};

  const title = getLocalizedText(tour.title, validLocale);
  const subtitle = getLocalizedText(tour.subtitle, validLocale);

  return buildLocaleMetadata({
    title: `${title} (${tour.durationDays} Days)`,
    description: subtitle,
    path: `/tours/${slug}`,
    locale: validLocale,
  });
}

export default async function LocalizedTourDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const locale = (['en', 'de', 'fr', 'it'].includes(lang) ? lang : 'en') as Locale;
  const tour = TOURS_DATA.find((t) => t.slug.en === slug || t.slug.de === slug);

  if (!tour) notFound();

  const title = getLocalizedText(tour.title, locale);
  const subtitle = getLocalizedText(tour.subtitle, locale);
  const highlightsList = getLocalizedText(tour.highlights, locale) || [];
  const inclusionsList = getLocalizedText(tour.inclusions, locale) || [];
  const exclusionsList = getLocalizedText(tour.exclusions, locale) || [];

  // Product & Tour JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': title,
    'description': subtitle,
    'image': tour.heroImage,
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'USD',
      'price': tour.startingPriceUSD,
      'availability': 'https://schema.org/InStock',
      'url': `https://jordanstorytours.com/${locale}/tours/${slug}`,
    },
    'brand': {
      '@type': 'Brand',
      'name': 'Jordan Story Tours',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': `What is included in the ${title}?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `This tour package includes private transfers with an English-speaking driver, ${tour.durationNights} nights accommodation, daily breakfast, and entry visa assistance.`,
        },
      },
      {
        '@type': 'Question',
        'name': `Can I customize the itinerary for ${title}?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes! All Jordan Story private tours can be customized with extra nights in Petra or Wadi Rum, upgraded hotel tiers, or special requests.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#151B23] text-[#F7F4EE] py-20 border-b border-[#A85F43]/30 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img src={tour.heroImage} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#151B23] via-[#151B23]/70 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#D8B98F] font-semibold">
              <span className="bg-[#A85F43] text-white px-3 py-1 rounded-full">{tour.category}</span>
              <span>{tour.storyCollection}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F7F4EE]">
              {title}
            </h1>
            
            <p className="text-lg text-gray-300 max-w-3xl font-light">
              {subtitle}
            </p>

            {/* Quick Meta Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-[#D8B98F]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A85F43]" />
                <span>{tour.durationDays} {locale === 'de' ? 'Tage' : locale === 'fr' ? 'Jours' : locale === 'it' ? 'Giorni' : 'Days'} / {tour.durationNights} {locale === 'de' ? 'Nächte' : locale === 'fr' ? 'Nuits' : locale === 'it' ? 'Notti' : 'Nights'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A85F43]" />
                <span>{tour.route.join(' → ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#A85F43] fill-[#A85F43]" />
                <span>5.0 (Verified Reviews)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Highlights */}
            {highlightsList.length > 0 && (
              <div className="p-8 rounded-3xl bg-white shadow-md border border-gray-100 space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#151B23]">
                  {locale === 'de' ? 'Highlights der Reise' : locale === 'fr' ? 'Points Forts du Circuit' : locale === 'it' ? 'Punti di Forza del Tour' : 'Tour Highlights'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {highlightsList.map((h: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#A85F43] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Component */}
            <div className="p-8 rounded-3xl bg-white shadow-md border border-gray-100">
              <TourGallery gallery={tour.gallery} heroImage={tour.heroImage} tourTitle={title} />
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-[#151B23]">
                {locale === 'de' ? 'Detaillierter Reiseverlauf' : locale === 'fr' ? 'Programme Jour par Jour' : locale === 'it' ? 'Itinerario Giorno per Giorno' : 'Day-by-Day Itinerary'}
              </h2>
              <div className="space-y-6">
                {tour.itinerary.map((day) => {
                  const dayTitle = getLocalizedText(day.title, locale);
                  const dayDesc = getLocalizedText(day.description, locale);

                  return (
                    <div key={day.day} className="p-6 rounded-2xl bg-white shadow-sm border border-gray-200/80 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-widest font-bold text-[#A85F43] bg-[#A85F43]/10 px-3 py-1 rounded-full">
                          {locale === 'de' ? `Tag ${day.day}` : locale === 'fr' ? `Jour ${day.day}` : locale === 'it' ? `Giorno ${day.day}` : `Day ${day.day}`}
                        </span>
                        {day.meals && (
                          <span className="text-xs text-gray-500 font-mono font-medium">
                            {locale === 'de' ? 'Mahlzeiten' : locale === 'fr' ? 'Repas' : locale === 'it' ? 'Pasti' : 'Meals'}: {day.meals}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-xl font-bold text-[#151B23]">{dayTitle}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{dayDesc}</p>

                      {day.accommodation && (
                        <div className="pt-2 text-xs text-[#A85F43] font-semibold flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{locale === 'de' ? 'Übernachtung' : locale === 'fr' ? 'Hébergement' : locale === 'it' ? 'Alloggio' : 'Overnight'}: {day.accommodation}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Included Section */}
              <div className="p-6 rounded-2xl bg-white shadow-sm border border-green-100 space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#151B23] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>{locale === 'de' ? 'Inbegriffen' : locale === 'fr' ? 'Inclus Dans le Prix' : locale === 'it' ? 'Servizi Inclusi' : "What's Included"}</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  {inclusionsList.map((inc: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded Section */}
              <div className="p-6 rounded-2xl bg-white shadow-sm border border-red-100 space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#151B23] flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span>{locale === 'de' ? 'Nicht Inbegriffen' : locale === 'fr' ? 'Non Inclus Dans le Prix' : locale === 'it' ? 'Servizi Esclusi' : "What's Excluded"}</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  {exclusionsList.map((exc: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AEO Direct Answer FAQs */}
            <div className="p-8 rounded-3xl bg-white shadow-md border border-gray-100 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#151B23] flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#A85F43]" />
                <span>{locale === 'de' ? 'Häufig Gestellte Fragen' : locale === 'fr' ? 'Foire Aux Questions' : locale === 'it' ? 'Domande Frequenti' : 'Frequently Asked Questions'}</span>
              </h2>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#F7F4EE]/60 border border-gray-200/60 space-y-2">
                  <h3 className="font-bold text-sm text-[#151B23]">
                    {locale === 'de' ? 'Wie buche ich diese Reise?' : locale === 'fr' ? 'Comment réserver ce circuit ?' : locale === 'it' ? 'Come posso prenotare questo tour?' : 'How do I book this tour?'}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {locale === 'de'
                      ? 'Klicken Sie auf "Jetzt Buchen", um Ihr gewünschtes Reisedatum und Ihre Hotelkategorie zu wählen. Sie erhalten umgehend eine Bestätigung mit flexiblen Stornierungsbedingungen.'
                      : 'Cliquez sur "Réserver Ce Circuit" pour sélectionner vos dates et votre niveau d\'hôtel. Vous recevrez une confirmation avec annulation gratuite.'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F7F4EE]/60 border border-gray-200/60 space-y-2">
                  <h3 className="font-bold text-sm text-[#151B23]">
                    {locale === 'de' ? 'Wird eine kostenlose Visum-Unterstützung angeboten?' : locale === 'fr' ? 'L\'assistance visa est-elle incluse ?' : locale === 'it' ? 'È inclusa l\'assistenza per il visto?' : 'Is entry visa assistance provided?'}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {locale === 'de'
                      ? 'Ja! Jordan Story Tours unterstützt berechtigte Reisende bei der kostenlosen Visumbeschaffung direkt bei der Ankunft am Flughafen Amman.'
                      : 'Oui ! Jordan Story Tours vous assiste pour l\'obtention du visa gratuit à l\'arrivée à l\'aéroport d\'Amman.'}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar Booking Widget */}
          <div className="space-y-6">
            <div className="sticky top-28 p-8 rounded-3xl bg-[#151B23] text-white border border-[#A85F43]/30 shadow-2xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D8B98F] font-mono block">
                  {locale === 'de' ? 'Private Rundreise' : locale === 'fr' ? 'Tarif Circuit Privé' : locale === 'it' ? 'Tariffa Tour Privato' : 'Private Tour Price'}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-4xl font-extrabold text-[#D8B98F]">${tour.startingPriceUSD}</span>
                  <span className="text-xs text-gray-400">USD / {locale === 'de' ? 'Person' : 'person'}</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A85F43]" />
                  <span>{locale === 'de' ? 'Kostenlose Stornierung bis 14 Tage' : 'Free cancellation assistance'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A85F43]" />
                  <span>{locale === 'de' ? 'Eigenes Fahrzeug & Chauffeur' : 'Dedicated vehicle & driver'}</span>
                </div>
              </div>

              <Link
                href={`/${locale}/booking?tour=${tour.id}`}
                className="w-full block text-center py-4 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xl hover:scale-105"
              >
                {locale === 'de' ? 'Jetzt Anfragen & Buchen' : locale === 'fr' ? 'Réserver Ce Circuit' : locale === 'it' ? 'Prenota Questo Tour' : 'Book This Tour'}
              </Link>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
