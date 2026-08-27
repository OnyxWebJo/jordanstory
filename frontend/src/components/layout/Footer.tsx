'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { getVerifiedLicenseDisplay, CANONICAL_BUSINESS_RECORD } from '@/data/businessRecord';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { locale, setLocale } = useLanguage();
  const pathname = usePathname();

  const getSwitchedPath = (targetLang: string) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && ['en', 'de', 'fr', 'it'].includes(segments[0])) {
      segments[0] = targetLang;
      return '/' + segments.join('/');
    }
    return `/${targetLang}`;
  };
  return (
    <footer className="bg-[#1A1615] text-[#F7F4EE] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#A85F43] flex items-center justify-center text-white shadow-xl">
                <Compass className="w-5 h-5 text-[#F7F4EE]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F7F4EE]">
                {CANONICAL_BUSINESS_RECORD.brandName.toUpperCase()}
              </span>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              Licensed tour operator specializing in custom private tours, desert safaris, and cultural itineraries across Jordan.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#C69C6D]">
              <ShieldCheck className="w-4 h-4 text-[#A85F43]" />
              <span>{getVerifiedLicenseDisplay('en')}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#F7F4EE] tracking-wide uppercase font-mono text-xs text-[#C69C6D]">
              Popular Tours
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              <li><Link href={`/${locale}/tours/jordan-story-classic-tour-1`} className="hover:text-white transition-colors">Jordan Classic 5-Day</Link></li>
              <li><Link href={`/${locale}/tours/jordan-luxury-tour-1`} className="hover:text-white transition-colors">Luxury Martian Domes 7-Day</Link></li>
              <li><Link href={`/${locale}/tours/budget-tour-1-petra-dead-sea-jerash`} className="hover:text-white transition-colors">Petra & Dead Sea 3-Day</Link></li>
              <li><Link href={`/${locale}/tours`} className="hover:text-white transition-colors">Wadi Rum 4x4 Jeep Safari</Link></li>
              <li><Link href={`/${locale}/booking`} className="hover:text-white transition-colors">Custom Private Trip Quote</Link></li>
            </ul>
          </div>

          {/* Column 3: Destinations */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#F7F4EE] tracking-wide uppercase font-mono text-xs text-[#C69C6D]">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              <li><Link href={`/${locale}/destinations/petra`} className="hover:text-white transition-colors">Petra (Rose City)</Link></li>
              <li><Link href={`/${locale}/destinations/wadi-rum`} className="hover:text-white transition-colors">Wadi Rum Desert</Link></li>
              <li><Link href={`/${locale}/destinations/dead-sea`} className="hover:text-white transition-colors">Dead Sea (-430m)</Link></li>
              <li><Link href={`/${locale}/destinations/jerash`} className="hover:text-white transition-colors">Jerash Roman Ruins</Link></li>
              <li><Link href={`/${locale}/destinations`} className="hover:text-white transition-colors">All Destination Guides</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Operations */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#F7F4EE] tracking-wide uppercase font-mono text-xs text-[#C69C6D]">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A85F43]" />
                <span>{CANONICAL_BUSINESS_RECORD.city}, {CANONICAL_BUSINESS_RECORD.country}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A85F43]" />
                <span>{CANONICAL_BUSINESS_RECORD.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#A85F43]" />
                <span>{CANONICAL_BUSINESS_RECORD.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-light gap-4">
          <div>
            © {new Date().getFullYear()} {CANONICAL_BUSINESS_RECORD.legalName} All rights reserved.
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            {(['en', 'de', 'fr', 'it'] as const).map((lang, idx) => (
              <React.Fragment key={lang}>
                {idx > 0 && <span className="text-gray-700">•</span>}
                <Link
                  href={getSwitchedPath(lang)}
                  onClick={() => setLocale(lang)}
                  className={`uppercase transition-colors cursor-pointer ${
                    locale === lang ? 'text-[#C69C6D] font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {lang}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
