'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Globe, Menu, X, MapPin, Sparkles, PhoneCall, Check } from 'lucide-react';
import { useLanguage, Locale } from '@/context/LanguageContext';
import { useCurrency, Currency } from '@/context/CurrencyContext';

interface HeaderProps {
  currentLocale?: 'en' | 'de' | 'fr' | 'it';
}

const VALID_LOCALES: Locale[] = ['en', 'de', 'fr', 'it'];

export const Header: React.FC<HeaderProps> = ({ currentLocale }) => {
  const { locale: contextLocale, setLocale } = useLanguage();
  const { currency, setCurrency } = useCurrency();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Derive active locale accurately: 1. URL pathname segment, 2. currentLocale prop, 3. Context, 4. fallback
  const pathLocale = pathname ? (pathname.split('/')[1] as Locale) : undefined;
  const activeLocale: Locale = 
    pathLocale && VALID_LOCALES.includes(pathLocale)
      ? pathLocale
      : (currentLocale && VALID_LOCALES.includes(currentLocale) ? currentLocale : (contextLocale || 'en'));

  const getSwitchedPath = (targetLang: string) => {
    if (!pathname) return `/${targetLang}/`;
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && VALID_LOCALES.includes(segments[0] as Locale)) {
      segments[0] = targetLang;
      return '/' + segments.join('/') + '/';
    }
    return `/${targetLang}/`;
  };

  const nextLocaleMap: Record<Locale, Locale> = {
    en: 'de',
    de: 'fr',
    fr: 'it',
    it: 'en'
  };
  const nextLocale = nextLocaleMap[activeLocale] || 'de';

  // Synchronize context if needed
  useEffect(() => {
    if (activeLocale && activeLocale !== contextLocale) {
      setLocale(activeLocale);
    }
  }, [activeLocale]);

  // Auto-close mobile menu on route navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Outside Backdrop to dismiss mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-[99990] transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header 
        style={{ zIndex: 99999 }}
        className="fixed top-0 left-0 right-0 py-3 sm:py-4 px-3 sm:px-8 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex flex-col pointer-events-auto">
          {/* Main Top Navigation Pill Bar */}
          <div 
            className={`w-full rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
              isScrolled || isMobileMenuOpen
                ? 'bg-[#1A1615]/98 backdrop-blur-2xl border-white/20 shadow-2xl text-[#F7F4EE]'
                : 'bg-[#1A1615]/85 backdrop-blur-md border-white/10 text-[#F7F4EE]'
            }`}
          >
            {/* Brand Logo & Ministry Badge */}
            <Link 
              href={`/${activeLocale}/`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer select-none"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#A85F43] flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#F7F4EE]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm sm:text-lg tracking-tight leading-none text-[#F7F4EE]">
                  JORDAN STORY
                </span>
                <span className="text-[8px] sm:text-[9.5px] font-mono tracking-wider sm:tracking-widest text-[#C69C6D] uppercase whitespace-nowrap">
                  TRAVEL & TOURISM
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium tracking-wide">
              <Link 
                href={`/${activeLocale}/tours/`} 
                className="text-[#F7F4EE]/90 hover:text-[#C69C6D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C69C6D] hover:after:w-full after:transition-all cursor-pointer"
              >
                {activeLocale === 'de' ? 'Rundreisen' : activeLocale === 'fr' ? 'Circuits' : activeLocale === 'it' ? 'I Nostri Tour' : 'Tour Packages'}
              </Link>

              <Link 
                href={`/${activeLocale}/destinations/`} 
                className="text-[#F7F4EE]/90 hover:text-[#C69C6D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C69C6D] hover:after:w-full after:transition-all cursor-pointer"
              >
                {activeLocale === 'de' ? 'Reiseziele' : activeLocale === 'fr' ? 'Destinations' : activeLocale === 'it' ? 'Destinazioni' : 'Destinations'}
              </Link>

              <Link 
                href={`/${activeLocale}/#map`} 
                className="text-[#F7F4EE]/90 hover:text-[#C69C6D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C69C6D] hover:after:w-full after:transition-all cursor-pointer"
              >
                {activeLocale === 'de' ? 'Interaktive Karte' : activeLocale === 'fr' ? 'Carte Interactive' : activeLocale === 'it' ? 'Mappa Interattiva' : 'Interactive Map'}
              </Link>
            </nav>

            {/* Right Action Group (Desktop) */}
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
                {VALID_LOCALES.map((lang, idx) => (
                  <React.Fragment key={lang}>
                    {idx > 0 && <span className="text-white/20">•</span>}
                    <Link
                      href={getSwitchedPath(lang)}
                      onClick={() => setLocale(lang)}
                      className={`px-1.5 py-0.5 rounded uppercase transition-all cursor-pointer ${
                        activeLocale === lang 
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
                href={`/${activeLocale}/booking/`}
                className="px-5 py-2 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-semibold text-xs transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                {activeLocale === 'de' ? 'Privattour Buchen' : activeLocale === 'fr' ? 'Réserver un Voyage Privé' : activeLocale === 'it' ? 'Prenota Tour Privato' : 'Book Private Tour'}
              </Link>
            </div>

            {/* Mobile Quick Action Buttons */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Quick Language Cycle Button */}
              <Link
                href={getSwitchedPath(nextLocale)}
                onClick={() => setLocale(nextLocale)}
                className="px-3 py-1.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] border border-white/20 text-xs font-mono text-white font-bold uppercase shadow-md flex items-center justify-center min-h-[40px] cursor-pointer active:scale-95 select-none"
              >
                {activeLocale.toUpperCase()} 🌐
              </Link>

              {/* Hamburger / Close Toggle Button */}
              <button
                type="button"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
                className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 text-white flex items-center justify-center min-w-[44px] min-h-[44px] transition-all cursor-pointer shadow-lg active:scale-90 select-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-[#C69C6D]" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>

          {/* Integrated Mobile Dropdown Drawer Panel */}
          {isMobileMenuOpen && (
            <div 
              className="md:hidden mt-2 p-5 rounded-3xl bg-[#1A1615]/98 backdrop-blur-2xl border border-white/20 shadow-2xl text-[#F7F4EE] space-y-4 max-h-[82vh] overflow-y-auto transition-all duration-300 pointer-events-auto"
            >
              {/* Main Navigation Links */}
              <nav className="space-y-1.5">
                <Link 
                  href={`/${activeLocale}/tours/`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3.5 text-base font-semibold rounded-2xl bg-white/5 hover:bg-white/10 text-[#F7F4EE] hover:text-[#C69C6D] active:text-[#C69C6D] transition-all cursor-pointer border border-white/5"
                >
                  <span>{activeLocale === 'de' ? 'Rundreisen & Pakete' : activeLocale === 'fr' ? 'Nos Circuits & Séjours' : activeLocale === 'it' ? 'I Nostri Tour & Pacchetti' : 'Tour Packages & Itineraries'}</span>
                  <Sparkles className="w-4 h-4 text-[#C69C6D]" />
                </Link>

                <Link 
                  href={`/${activeLocale}/destinations/`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3.5 text-base font-semibold rounded-2xl bg-white/5 hover:bg-white/10 text-[#F7F4EE] hover:text-[#C69C6D] active:text-[#C69C6D] transition-all cursor-pointer border border-white/5"
                >
                  <span>{activeLocale === 'de' ? 'Reiseziele in Jordanien' : activeLocale === 'fr' ? 'Destinations en Jordanie' : activeLocale === 'it' ? 'Destinazioni in Giordania' : 'Jordan Destinations'}</span>
                  <MapPin className="w-4 h-4 text-[#C69C6D]" />
                </Link>

                <Link 
                  href={`/${activeLocale}/#map`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3.5 text-base font-semibold rounded-2xl bg-white/5 hover:bg-white/10 text-[#F7F4EE] hover:text-[#C69C6D] active:text-[#C69C6D] transition-all cursor-pointer border border-white/5"
                >
                  <span>{activeLocale === 'de' ? 'Interaktive Reisekarte' : activeLocale === 'fr' ? 'Carte Interactive' : activeLocale === 'it' ? 'Mappa Interattiva' : 'Interactive Map'}</span>
                  <Compass className="w-4 h-4 text-[#C69C6D]" />
                </Link>

                <Link 
                  href={`/${activeLocale}/booking/`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3.5 text-base font-semibold rounded-2xl bg-[#A85F43]/20 hover:bg-[#A85F43]/30 text-[#C69C6D] hover:text-white active:text-white transition-all cursor-pointer border border-[#A85F43]/30"
                >
                  <span>{activeLocale === 'de' ? 'Individuelle Privatreise Anfragen' : activeLocale === 'fr' ? 'Créer un Voyage Sur Mesure' : activeLocale === 'it' ? 'Crea Tour Su Misura' : 'Custom Private Tour Request'}</span>
                  <PhoneCall className="w-4 h-4 text-[#A85F43]" />
                </Link>
              </nav>

              {/* Mobile Language Selection Grid (4 Locales) */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <span className="text-xs text-white/70 font-mono block">Language / Sprache / Langue:</span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { code: 'en', label: 'English 🇬🇧' },
                    { code: 'de', label: 'Deutsch 🇩🇪' },
                    { code: 'fr', label: 'Français 🇫🇷' },
                    { code: 'it', label: 'Italiano 🇮🇹' }
                  ].map(({ code, label }) => (
                    <Link
                      key={code}
                      href={getSwitchedPath(code)}
                      onClick={() => {
                        setLocale(code as Locale);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`py-2.5 px-3 flex items-center justify-between text-xs font-mono font-bold rounded-xl transition-all cursor-pointer ${
                        activeLocale === code 
                          ? 'bg-[#A85F43] text-white shadow-lg border border-[#C69C6D]/40' 
                          : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/10'
                      }`}
                    >
                      <span>{label}</span>
                      {activeLocale === code && <Check className="w-3.5 h-3.5 text-[#C69C6D]" />}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Currency Switcher */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/70 font-mono">Currency:</span>
                <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-xl border border-white/15">
                  {(['USD', 'EUR', 'JOD'] as Currency[]).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCurrency(c)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                        currency === c ? 'bg-[#C69C6D] text-black shadow-md' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct Book CTA in Drawer */}
              <div className="pt-2">
                <Link
                  href={`/${activeLocale}/booking/`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-2xl bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider text-center block shadow-xl cursor-pointer active:scale-95 transition-all"
                >
                  {activeLocale === 'de' ? 'Jetzt Privatreise Buchen' : activeLocale === 'fr' ? 'Réserver Un Voyage Privé' : activeLocale === 'it' ? 'Prenota Tour Privato' : 'Book Your Private Tour'}
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
