import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { MapPin, ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { DESTINATIONS_FULL } from '@/data/destinations';

export default function DestinationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#1A1615]">
      <Header />

      <main className="flex-1">
        {/* Banner Section */}
        <section className="bg-[#1A1615] text-[#F7F4EE] py-24 border-b border-white/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
            <span className="text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold block">
              OFFICIAL DESTINATION GUIDES
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Jordan Destinations & Landmarks
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light">
              Explore the 9 world-class ancient wonders, desert wildernesses, and mineral wellness spas across Jordan.
            </p>
          </div>
        </section>

        {/* Destination Cards Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS_FULL.map((d) => (
            <div 
              key={d.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 flex flex-col hover:-translate-y-1"
            >
              <div className="h-60 relative overflow-hidden">
                <img 
                  src={d.image} 
                  alt={d.name.en} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#1A1615]/70 backdrop-blur-md text-[#D8B98F] shadow-lg">
                    Jordan Landmark
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#A85F43] font-semibold font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{d.name.en.split('—')[0]}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1615] group-hover:text-[#A85F43] transition-colors">
                    {d.name.en}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm font-light line-clamp-2 leading-relaxed">
                    {d.tagline.en}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C69C6D]" />
                    <span>{d.bestTimeToVisit.en.split('(')[0]}</span>
                  </span>

                  <Link
                    href={`/destinations/${d.slug.en}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A85F43] hover:text-[#D97757] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
