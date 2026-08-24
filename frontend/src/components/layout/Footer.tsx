'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, ShieldCheck, Phone, Mail, MapPin, Award, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
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
                JORDAN STORY
              </span>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              Official Jordan Ministry of Tourism licensed tour operator specializing in custom luxury private tours, desert safaris, and cultural itineraries across Jordan.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#C69C6D]">
              <ShieldCheck className="w-4 h-4 text-[#A85F43]" />
              <span>Ministry License Reg #2026</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#F7F4EE] tracking-wide uppercase font-mono text-xs text-[#C69C6D]">
              Popular Tours
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              <li><Link href="/tours/jordan-story-classic-tour-1" className="hover:text-white transition-colors">Jordan Classic 5-Day</Link></li>
              <li><Link href="/tours/jordan-luxury-tour-1" className="hover:text-white transition-colors">Luxury Martian Domes 7-Day</Link></li>
              <li><Link href="/tours/budget-tour-1-petra-dead-sea-jerash" className="hover:text-white transition-colors">Petra & Dead Sea 3-Day</Link></li>
              <li><Link href="/tours?category=Day%20Tour" className="hover:text-white transition-colors">Wadi Rum 4x4 Jeep Safari</Link></li>
              <li><Link href="/booking" className="hover:text-white transition-colors">Custom Private Trip Quote</Link></li>
            </ul>
          </div>

          {/* Column 3: Destinations */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#F7F4EE] tracking-wide uppercase font-mono text-xs text-[#C69C6D]">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              <li><Link href="/destinations/petra" className="hover:text-white transition-colors">Petra (Rose City)</Link></li>
              <li><Link href="/destinations/wadi-rum" className="hover:text-white transition-colors">Wadi Rum Desert</Link></li>
              <li><Link href="/destinations/dead-sea" className="hover:text-white transition-colors">Dead Sea (-430m)</Link></li>
              <li><Link href="/destinations/jerash" className="hover:text-white transition-colors">Jerash Roman Ruins</Link></li>
              <li><Link href="/destinations" className="hover:text-white transition-colors">All 9 Destination Guides</Link></li>
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
                <span>Amman, Hashemite Kingdom of Jordan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A85F43]" />
                <span>+962 7 9000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#A85F43]" />
                <span>info@jordanstorytours.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-light gap-4">
          <div>
            © {new Date().getFullYear()} Jordan Story Tours & Travel Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/admin" className="hover:text-gray-300 transition-colors">Operations Admin Portal</Link>
            <span className="text-gray-700">•</span>
            <span className="text-gray-400">English | Deutsch</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
