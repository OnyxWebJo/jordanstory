'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Compass, ArrowDown } from 'lucide-react';
import { useLanguage, Locale } from '@/context/LanguageContext';

export const ImmersiveHero: React.FC = () => {
  const { locale } = useLanguage();
  const [webglSupported, setWebglSupported] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setWebglSupported(true);
      }
    } catch (e) {
      setWebglSupported(false);
    }
  }, []);

  const content: Record<Locale, {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollText: string;
  }> = {
    en: {
      eyebrow: 'Enter Your Jordan Story',
      title1: 'Walk Through Petra.',
      title2: 'Sleep Under Desert Stars.',
      subtitle: 'Experience Jordan through curated private tour stories. From the narrow canyon of the Siq to the red dunes of Wadi Rum and the mineral waters of the Dead Sea.',
      ctaPrimary: 'Explore Tour Collections',
      ctaSecondary: 'Custom Trip Quote',
      scrollText: 'Begin The Journey'
    },
    de: {
      eyebrow: 'Erleben Sie Ihre Jordanien-Geschichte',
      title1: 'Wandern Sie durch Petra.',
      title2: 'Schlafen Sie unter dem Wüstensternenhimmel.',
      subtitle: 'Erleben Sie Jordanien durch handverlesene private Rundreisen. Vom schmalen Siq-Canyon bis zu den roten Dünen von Wadi Rum und dem Toten Meer.',
      ctaPrimary: 'Rundreisen Erkunden',
      ctaSecondary: 'Individuelles Angebot',
      scrollText: 'Reise Beginnen'
    },
    fr: {
      eyebrow: 'Entrez Dans Votre Histoire En Jordanie',
      title1: 'Marchez À Travers Pétra.',
      title2: 'Dormez Sous Les Étoiles Du Désert.',
      subtitle: 'Découvrez la Jordanie à travers nos circuits privés sur mesure. Du canyon du Siq aux dunes rouges de Wadi Rum et aux eaux de la Mer Morte.',
      ctaPrimary: 'Explorer Les Circuits',
      ctaSecondary: 'Devis Sur Mesure',
      scrollText: 'Commencer Le Voyage'
    },
    it: {
      eyebrow: 'Entra Nella Tua Storia In Giordania',
      title1: 'Cammina Attraverso Petra.',
      title2: 'Dormi Sotto Le Stelle Del Deserto.',
      subtitle: 'Vivi la Giordania attraverso itinerari privati curati. Dal canyon del Siq alle dune rosse del Wadi Rum e alle acque del Mar Morto.',
      ctaPrimary: 'Esplora I Tour',
      ctaSecondary: 'Preventivo Su Misura',
      scrollText: 'Inizia Il Viaggio'
    }
  };

  const t = content[locale] || content.en;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#151B23] text-[#F4EFE7]">
      {/* Background Image / Photographic Hero Fallback */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-scale duration-1000 transform hover:scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1579606030856-494b28b7fa15?auto=format&fit=crop&w=2000&q=90')`
        }}
      />

      {/* Earthy Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#151B23] via-[#151B23]/50 to-transparent" />

      {/* Layer A — Semantic Website Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 space-y-8">
        
        {/* Story Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A85F43]/30 border border-[#D8B98F]/40 text-[#D8B98F] text-xs uppercase tracking-widest font-semibold backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.eyebrow}</span>
        </div>

        {/* H1 Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F4EFE7] leading-tight max-w-4xl mx-auto">
          {t.title1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B98F] via-[#A85F43] to-[#D8B98F]">
            {t.title2}
          </span>
        </h1>

        {/* Story Subtitle */}
        <p className="text-lg sm:text-xl text-[#DDE2DF] max-w-2xl mx-auto font-light leading-relaxed">
          {t.subtitle}
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href={`/${locale}/tours`}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#A85F43] hover:bg-[#8B4B34] text-[#F4EFE7] font-semibold text-base shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3"
          >
            <Compass className="w-5 h-5" />
            <span>{t.ctaPrimary}</span>
          </Link>
          
          <Link
            href={`/${locale}/booking`}
            className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-[#D8B98F] text-[#D8B98F] hover:bg-[#D8B98F] hover:text-[#151B23] font-semibold text-base transition-all flex items-center justify-center gap-2"
          >
            <span>{t.ctaSecondary}</span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex justify-center">
          <a 
            href="#story-collections"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8B98F]/70 hover:text-[#D8B98F] transition-colors"
          >
            <span>{t.scrollText}</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
