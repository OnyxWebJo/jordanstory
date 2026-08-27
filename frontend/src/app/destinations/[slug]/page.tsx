import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DESTINATIONS_FULL, DestinationData } from '@/data/destinations';
import { TOURS_DATA, Tour } from '@/data/tours';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MapPin, Calendar, Compass, ArrowRight, Check, Sparkles, Clock, Star } from 'lucide-react';

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const paths: { slug: string }[] = [];
  DESTINATIONS_FULL.forEach(dest => {
    paths.push({ slug: dest.slug.en });
    if (dest.slug.de && dest.slug.de !== dest.slug.en) {
      paths.push({ slug: dest.slug.de });
    }
  });
  return paths;
}

export default async function DestinationDetailPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  
  const dest = DESTINATIONS_FULL.find(
    d => d.slug.en === slug || d.slug.de === slug || d.id === slug
  );

  if (!dest) {
    notFound();
  }

  // Find tours visiting this destination by matching route names
  const visitingTours = TOURS_DATA.filter(tour => {
    const routeLower = tour.route.map(r => r.toLowerCase());
    const destNameEnLower = dest.name.en.toLowerCase();
    const destNameDeLower = (dest.name.de || dest.name.en).toLowerCase();
    const destIdLower = dest.id.toLowerCase();

    return routeLower.some(r => 
      destNameEnLower.includes(r) || 
      destNameDeLower.includes(r) || 
      r.includes(destIdLower) ||
      destIdLower.includes(r)
    );
  });

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1A1615] flex flex-col font-sans">
      <Header />

      {/* Hero Banner Section */}
      <div className="relative h-[60vh] min-h-[450px] overflow-hidden bg-black">
        <img
          src={dest.image}
          alt={dest.name.en}
          className="w-full h-full object-cover opacity-70 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1615] via-[#1A1615]/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-[#F7F4EE] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C69C6D] uppercase">
            <MapPin className="w-4 h-4 text-[#A85F43]" />
            <span>DESTINATION GUIDE</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {dest.name.en}
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl font-light">
            {dest.tagline.en}
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-mono text-[#D8B98F]">
            <Calendar className="w-4 h-4 text-[#C69C6D]" />
            <span>Best Season: {dest.bestTimeToVisit.en}</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 flex-1">
        
        {/* Overview & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Description & Overview */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-[#1A1615]">
              About {dest.name.en}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-light">
              {dest.description.en}
            </p>

            {/* Highlights List */}
            <div className="space-y-4 pt-4">
              <h3 className="font-serif text-xl font-bold text-[#1A1615] flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#A85F43]" />
                <span>Key Highlights & Must-See Landmarks</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dest.highlights.en.map((hl, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                    <Check className="w-5 h-5 text-[#A85F43] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-800">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Insider Travel Tips Sidebar Card */}
          <div className="space-y-6">
            <div className="bg-[#1A1615] text-[#F7F4EE] p-8 rounded-3xl space-y-6 shadow-xl border border-white/10">
              <div className="flex items-center gap-2 text-[#C69C6D]">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-serif text-xl font-bold">Local Insider Tips</h3>
              </div>

              <ul className="space-y-4">
                {dest.insiderTips.en.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-[#A85F43] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/booking"
                  className="block w-full py-3.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white text-center font-semibold text-xs transition-all shadow-lg hover:scale-[1.02]"
                >
                  Book Private Tour Visiting {dest.name.en.split(' ')[0]}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* High-Definition Photo Gallery Grid */}
        <div className="space-y-6 border-t border-gray-300 pt-16">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-3xl font-bold text-[#1A1615]">
              Photo Gallery
            </h2>
            <span className="text-xs font-mono text-gray-500">3 HD Views</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dest.gallery.map((imgUrl, i) => (
              <div key={i} className="group relative h-64 rounded-3xl overflow-hidden shadow-md border border-gray-200">
                <img
                  src={imgUrl}
                  alt={`${dest.name.en} gallery photo ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Tours Visiting This Destination */}
        <div className="space-y-8 border-t border-gray-300 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A85F43] font-mono font-semibold block">
                RECOMMENDED ITINERARIES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1615]">
                Private Tours Visiting {dest.name.en.split(' ')[0]}
              </h2>
            </div>

            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#A85F43] hover:text-[#D97757]"
            >
              <span>Explore All Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visitingTours.map((tour) => (
              <div
                key={tour.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.heroImage}
                    alt={tour.title.en}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#1A1615]/70 backdrop-blur-md text-[#D8B98F]">
                      {tour.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-[#C69C6D]" />
                      <span>{tour.durationDays} Days / {tour.durationNights} Nights</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[#C69C6D]">
                      <Star className="w-3.5 h-3.5 fill-[#C69C6D]" />
                      <span>5.0</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1A1615] group-hover:text-[#A85F43] transition-colors">
                      {tour.title.en}
                    </h3>
                    <p className="text-gray-600 text-xs font-light line-clamp-2 mt-1">
                      {tour.subtitle.en}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-gray-400 block">Starting From</span>
                      <span className="text-xl font-bold font-serif text-[#1A1615]">${tour.startingPriceUSD}</span>
                    </div>

                    <Link
                      href={`/tours/${tour.slug.en}`}
                      className="px-4 py-2 rounded-full bg-[#1A1615] hover:bg-[#A85F43] text-white text-xs font-semibold transition-all"
                    >
                      View Itinerary
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
