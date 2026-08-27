'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const STORIES = [
  {
    id: 'ancient',
    number: '01',
    name: { en: 'Ancient Story', de: 'Antike Geschichte' },
    subtitle: { en: 'Petra, Jerash & Royal Tombs', de: 'Petra, Jerash & Königsgräber' },
    description: {
      en: 'Immerse yourself in thousands of years of Nabataean and Roman history carved into pink sandstone.',
      de: 'Tauchen Sie ein in die tausendjährige Geschichte der Nabatäer und Römer.'
    },
    image: 'https://jordanstorytours.com/content/uploads/2020/11/Jordan_Petra.jpg',
  },
  {
    id: 'desert',
    number: '02',
    name: { en: 'Desert Story', de: 'Wüsten-Geschichte' },
    subtitle: { en: 'Wadi Rum & Bedouin Campfire Nights', de: 'Wadi Rum & Beduinen-Lagerfeuernächte' },
    description: {
      en: 'Traverse reddish dunes in 4x4 Jeeps and sleep beneath Martian starlit skies in luxury domes.',
      de: 'Durchqueren Sie rote Dünen in 4x4 Jeeps und schlafen Sie unter dem Wüsten-Sternenhimmel.'
    },
    image: 'https://jordanstorytours.com/content/uploads/2020/12/wadi-rum-capm-jordan-700x500.jpg',
  },
  {
    id: 'sacred',
    number: '03',
    name: { en: 'Sacred Story', de: 'Heilige Geschichte' },
    subtitle: { en: 'Mount Nebo, Madaba & Baptism Site', de: 'Berg Nebo, Madaba & Taufstelle' },
    description: {
      en: 'Walk through Holy Land sanctuaries, Byzantine mosaics, and the sacred River Jordan banks.',
      de: 'Wandeln Sie auf biblischen Pfaden, sehen Sie Mosaike und den heiligen Jordan-Fluss.'
    },
    image: 'https://jordanstorytours.com/content/uploads/2021/01/Baptism-site-e1609688105341-700x500.jpg',
  },
  {
    id: 'luxury',
    number: '04',
    name: { en: 'Luxury Story', de: 'Luxus-Geschichte' },
    subtitle: { en: 'Martian Domes & 5-Star Resorts', de: 'Martian Domes & 5-Sterne Resorts' },
    description: {
      en: 'Chauffeured executive vehicle transfers, private guides, and Dead Sea spa retreats.',
      de: 'Chauffeur-Service im Luxusfahrzeug, private Reiseleiter und Totes Meer Spa-Entspannung.'
    },
    image: 'https://jordanstorytours.com/content/uploads/2021/01/deadsea-1-700x500.jpg',
  }
];

export const StoryCollections: React.FC = () => {
  const { locale, getLocalized } = useLanguage();

  return (
    <section className="py-24 bg-[#F7F4EE] text-[#1A1615]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Approved Editorial Section Header (`00A.md` Section 7) */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#A85F43] font-mono block font-semibold">
            {locale === 'de' ? 'IHRE JORDANIE-REISE' : 'YOUR JORDAN JOURNEY'}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1A1615]">
            {locale === 'de' ? 'Wählen Sie Ihre Geschichte' : 'Choose How Your Story Continues'}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed">
            {locale === 'de'
              ? 'Von einem Tag in Petra bis zur großen Rundreise durch ganz Jordanien – wählen Sie die Route, die Ihre wird.'
              : 'From a single day in Petra to a complete journey across Jordan, choose the route that becomes yours.'}
          </p>
        </div>

        {/* Editorial Horizontal Chapters */}
        <div className="space-y-12">
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="group border-b border-gray-300 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Number & Name */}
              <div className="lg:col-span-4 space-y-2">
                <span className="font-mono text-sm text-[#C69C6D] font-semibold">{story.number}</span>
                <h3 className="font-serif text-3xl font-bold text-[#1A1615] group-hover:text-[#A85F43] transition-colors">
                  {getLocalized(story.name)}
                </h3>
                <span className="text-xs text-[#A85F43] font-semibold block">{getLocalized(story.subtitle)}</span>
                <p className="text-gray-600 text-xs sm:text-sm font-light pt-2 max-w-sm">
                  {getLocalized(story.description)}
                </p>
                <div className="pt-4">
                  <Link
                    href={`/tours?category=${story.name.en.split(' ')[0]}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#A85F43] hover:text-[#D97757]"
                  >
                    <span>{locale === 'de' ? 'Angebote Ansehen' : `Browse ${story.name.en} Packages`}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Large Image Preview */}
              <div className="lg:col-span-8 h-72 sm:h-96 rounded-3xl overflow-hidden relative shadow-lg border border-gray-200">
                <img
                  src={story.image}
                  alt={getLocalized(story.name)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
