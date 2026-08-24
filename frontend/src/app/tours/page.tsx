import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FeaturedTours } from '@/components/home/FeaturedTours';
import { Compass, Filter } from 'lucide-react';

export default function ToursPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4EFE7]">
      <Header currentLocale="en" />

      <main className="flex-1">
        {/* Banner */}
        <section className="bg-[#151B23] text-[#F4EFE7] py-20 border-b border-[#A85F43]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D8B98F] font-semibold">
              Jordan Story Collections
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
              All Tour Packages & Experiences
            </h1>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              From short 1-day Jordan highlights to comprehensive multi-day desert and ancient city explorations.
            </p>
          </div>
        </section>

        {/* Tour Catalog Listing */}
        <FeaturedTours />
      </main>

      <Footer />
    </div>
  );
}
