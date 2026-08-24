import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollWorldExperience } from '@/components/immersive/ScrollWorldExperience';
import { InteractiveMap } from '@/components/immersive/InteractiveMap';
import { StoryCollections } from '@/components/home/StoryCollections';
import { FeaturedTours } from '@/components/home/FeaturedTours';
import { Testimonials } from '@/components/home/Testimonials';
import Link from 'next/link';
import { ShieldCheck, Compass, Award, Star, HelpCircle, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE]">
      <Header currentLocale="en" />
      
      <main className="flex-1">
        {/* 12-Scene 3D Scroll World Experience (Siq -> Treasury -> Wadi Rum) */}
        <ScrollWorldExperience />

        {/* Value Proposition & Trust Badges */}
        <section className="bg-[#1A1615] border-y border-[#A85F43]/30 py-8 text-[#D8B98F] relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs sm:text-sm">
            <div className="flex flex-col items-center gap-1.5">
              <ShieldCheck className="w-6 h-6 text-[#A85F43]" />
              <span className="font-semibold text-[#F7F4EE]">Licensed Ministry Operator</span>
              <span className="text-[#D8B98F]/70 text-xs">Official Reg #2026</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Compass className="w-6 h-6 text-[#A85F43]" />
              <span className="font-semibold text-[#F7F4EE]">100% Tailored Private Tours</span>
              <span className="text-[#D8B98F]/70 text-xs">Dedicated Driver & Guide</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Award className="w-6 h-6 text-[#A85F43]" />
              <span className="font-semibold text-[#F7F4EE]">Transparent Pricing</span>
              <span className="text-[#D8B98F]/70 text-xs">No Hidden Fees</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Star className="w-6 h-6 text-[#A85F43] fill-[#A85F43]" />
              <span className="font-semibold text-[#F7F4EE]">5-Star Traveler Reviews</span>
              <span className="text-[#D8B98F]/70 text-xs">Trusted Global Visitors</span>
            </div>
          </div>
        </section>

        {/* Story Collections Narrative Grid (`00A.md` Section 25 Bridge) */}
        <StoryCollections />

        {/* Featured Tours System */}
        <FeaturedTours />

        {/* Interactive Jordan Topological Map */}
        <InteractiveMap />

        {/* Verified Customer Testimonials & Reviews */}
        <Testimonials />

        {/* AEO / Answer Engine Direct-Answer Section (`00A.md` Section 46) */}
        <section className="py-20 bg-[#F7F4EE] border-t border-gray-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#A85F43] font-mono block">
                TRAVEL PLANNING ESSENTIALS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1615]">
                Frequently Asked Questions About Jordan Travel
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 space-y-3">
                <h3 className="font-serif text-xl font-bold text-[#1A1615] flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#A85F43]" />
                  Can I visit Petra and Wadi Rum in one trip?
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed pl-8">
                  Yes! Petra and Wadi Rum are commonly combined because both are located in southern Jordan, just 1.5 hours apart. Our 3-day and 5-day classic private tours comfortably include Petra's Treasury, Bedouin jeep safaris in Wadi Rum, and relaxation at the Dead Sea.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 space-y-3">
                <h3 className="font-serif text-xl font-bold text-[#1A1615] flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#A85F43]" />
                  Why choose a private tour with a dedicated driver in Jordan?
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed pl-8">
                  Private tours offer complete flexibility with your schedule, door-to-door climate-controlled transfer, local insights, and custom photo stops without the stress of navigating desert highways or fitting into large group bus schedules.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 space-y-3">
                <h3 className="font-serif text-xl font-bold text-[#1A1615] flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#A85F43]" />
                  What is included in Jordan Story Tours packages?
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed pl-8">
                  All packages include private climate-controlled transportation, professional English-speaking drivers, handpicked 4-star/5-star or luxury Martian dome accommodations, breakfast and dinner, and dedicated local guides in Petra and Jerash.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Tour Request Banner */}
        <section className="py-24 bg-[#A85F43] text-[#F7F4EE] relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Can't Find Your Exact Itinerary?
            </h2>
            <p className="text-base sm:text-lg text-[#F7F4EE]/90 max-w-2xl mx-auto font-light">
              We design custom private Jordan itineraries tailored to your flight times, hotel preferences, and exact duration.
            </p>
            <div className="pt-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A1615] hover:bg-[#302A27] text-[#D8B98F] font-semibold text-base shadow-xl transition-all hover:scale-105"
              >
                <span>Request Custom Trip Quote</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
