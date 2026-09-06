'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCurrency, Currency } from '@/context/CurrencyContext';

interface HeaderProps {
  currentLocale?: 'en' | 'de' | 'fr' | 'it';
}

export const Header: React.FC<HeaderProps> = ({ currentLocale }) => {
  const { locale, setLocale } = useLanguage();
  const { currency, setCurrency } = useCurrency();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getSwitchedPath = (targetLang: string) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && ['en', 'de', 'fr', 'it'].includes(segments[0])) {
      segments[0] = targetLang;
      return '/' + segments.join('/');
    }
    return `/${targetLang}`;
  };

  // Initialize from prop once if provided, otherwise respect global LanguageContext
  useEffect(() => {
    if (currentLocale && (currentLocale === 'en' || currentLocale === 'de' || currentLocale === 'fr' || currentLocale === 'it')) {
      // Only initial sync if explicitly passed from URL/props
      const stored = localStorage.getItem('jordan_story_locale');
      if (!stored) {
        setLocale(currentLocale);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8">
      <div 
        className={`max-w-7xl mx-auto rounded-full transition-all duration-500 px-6 py-3 flex items-center justify-between border ${
          isScrolled 
            ? 'bg-[#1A1615]/90 backdrop-blur-2xl border-white/10 shadow-2xl text-[#F7F4EE]'
            : 'bg-[#1A1615]/60 backdrop-blur-md border-white/10 text-[#F7F4EE]'
        }`}
      >
        {/* Brand Logo & Ministry Badge */}
        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#A85F43] flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-5 h-5 text-[#F7F4EE]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base sm:text-lg tracking-tight leading-none text-[#F7F4EE]">
              JORDAN STORY
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#C69C6D] uppercase">
              TOURS & TRAVEL
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium tracking-wide">
          <Link 
            href={`/${locale}/tours`} 
            className="text-[#F7F4EE]/90 hover:text-[#C69C6D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C69C6D] hover:after:w-full after:transition-all"
          >
            {locale === 'de' ? 'Rundreisen' : locale === 'fr' ? 'Circuits' : locale === 'it' ? 'I Nostri Tour' : 'Tour Packages'}
          </Link>

          <Link 
            href={`/${locale}/destinations`} 
            className="text-[#F7F4EE]/90 hover:text-[#C69C6D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C69C6D] hover:after:w-full after:transition-all"
          >
            {locale === 'de' ? 'Reiseziele' : locale === 'fr' ? 'Destinations' : locale === 'it' ? 'Destinazioni' : 'Destinations'}
          </Link>

          <Link 
            href={`/${locale}#map`} 
            className="text-[#F7F4EE]/90 hover:text-[#C69C6D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C69C6D] hover:after:w-full after:transition-all"
          >
            {locale === 'de' ? 'Interaktive Karte' : locale === 'fr' ? 'Carte Interactive' : locale === 'it' ? 'Mappa Interattiva' : 'Interactive Map'}
          </Link>
        </nav>

        {/* Right Action Group: Currency Switcher, Language Switcher & Book Now */}
        <div className="hidden md:flex items-center gap-3">
          {/* Currency Switcher Pill */}
          <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1.5 rounded-full border border-white/10 text-xs font-mono">
            {(['USD', 'EUR', 'JOD'] as Currency[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                  currency === c 
                    ? 'bg-[#C69C6D] text-black font-bold shadow-md' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {c === 'USD' ? '$' : c === 'EUR' ? '€' : 'JOD'}
              </button>
            ))}
          </div>

          {/* Language Switcher Pill (4 Locales) */}
          <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono">
            <Globe className="w-3.5 h-3.5 text-[#C69C6D] mr-1" />
            {(['en', 'de', 'fr', 'it'] as const).map((lang, idx) => (
              <React.Fragment key={lang}>
                {idx > 0 && <span className="text-white/20">•</span>}
                <Link
                  href={getSwitchedPath(lang)}
                  onClick={() => setLocale(lang)}
                  className={`px-1.5 py-0.5 rounded uppercase transition-all cursor-pointer ${
                    locale === lang 
                      ? 'bg-[#A85F43] text-white font-bold shadow-md' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {lang}
                </Link>
              </React.Fragment>
            ))}
          </div>

          {/* Book Now Button */}
          <Link
            href={`/${locale}/booking`}
            className="px-5 py-2 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-semibold text-xs transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            {locale === 'de' ? 'Privattour Buchen' : locale === 'fr' ? 'Réserver un Voyage Privé' : locale === 'it' ? 'Prenota Tour Privato' : 'Book Private Tour'}
          </Link>
        </div>

        {/* Mobile Language Switcher & Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const next: Record<string, 'en' | 'de' | 'fr' | 'it'> = { en: 'de', de: 'fr', fr: 'it', it: 'en' };
              const target = next[locale] || 'en';
              setLocale(target);
              window.location.href = getSwitchedPath(target);
            }}
            className="px-2.5 py-1 rounded-full bg-[#A85F43] border border-white/20 text-xs font-mono text-white font-bold uppercase shadow-md cursor-pointer"
          >
            {locale.toUpperCase()} 🌐
          </button>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(prev => !prev);
            }}
            className="p-2.5 rounded-full bg-white/15 border border-white/25 text-white flex items-center justify-center min-w-[44px] min-h-[44px] active:scale-90 transition-all cursor-pointer z-[60] relative pointer-events-auto"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#C69C6D]" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer Backdrop & Container */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="md:hidden mt-3 mx-2 p-6 rounded-3xl bg-[#1A1615]/98 backdrop-blur-2xl border border-white/15 shadow-2xl text-[#F7F4EE] space-y-4 relative z-[60] animate-fade-in pointer-events-auto">
            <Link 
              href={`/${locale}/tours`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-base font-medium border-b border-white/10 text-[#F7F4EE] hover:text-[#C69C6D]"
            >
              {locale === 'de' ? 'Rundreisen & Pakete' : locale === 'fr' ? 'Nos Circuits' : locale === 'it' ? 'I Nostri Tour' : 'Tour Packages'}
            </Link>

            <Link 
              href={`/${locale}/destinations`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-base font-medium border-b border-white/10 text-[#F7F4EE] hover:text-[#C69C6D]"
            >
              {locale === 'de' ? 'Reiseziele in Jordanien' : locale === 'fr' ? 'Destinations' : locale === 'it' ? 'Destinazioni' : 'Destinations'}
            </Link>

            <Link 
              href={`/${locale}/booking`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-base font-medium border-b border-white/10 text-[#C69C6D] hover:text-white"
            >
              {locale === 'de' ? 'Individuelle Reise Buchen' : locale === 'fr' ? 'Réserver Sur Mesure' : locale === 'it' ? 'Prenota Su Misura' : 'Book Custom Private Tour'}
            </Link>

            {/* Mobile Currency Switcher */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-white/60 font-mono">Currency:</span>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono">
                {(['USD', 'EUR', 'JOD'] as Currency[]).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCurrency(c)}
                    className={`px-2 py-0.5 rounded cursor-pointer ${
                      currency === c ? 'bg-[#C69C6D] text-black font-bold' : 'text-white/60'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Language Selection List */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-white/60 font-mono">Language:</span>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono">
                {(['en', 'de', 'fr', 'it'] as const).map((lang) => (
                  <Link
                    key={lang}
                    href={getSwitchedPath(lang)}
                    onClick={() => {
                      setLocale(lang);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-2 py-0.5 rounded uppercase cursor-pointer ${
                      locale === lang ? 'bg-[#A85F43] text-white font-bold' : 'text-white/60'
                    }`}
                  >
                    {lang}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
