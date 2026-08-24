import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TOURS_DATA } from '@/data/tours';
import { TourGallery } from '@/components/tours/TourGallery';
import Link from 'next/link';
import { Clock, MapPin, CheckCircle2, XCircle, Calendar, ShieldCheck, Star, HelpCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

interface TourDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOURS_DATA.map((tour) => ({
    slug: tour.slug.en,
  }));
}

export default async function TourDetailPage({ params }: TourDetailProps) {
  const resolvedParams = await params;
  const tour = TOURS_DATA.find((t) => t.slug.en === resolvedParams.slug) || TOURS_DATA[0];

  if (!tour) {
    notFound();
  }

  // Schema.org JSON-LD Structured Data per 00C & 00D Specifications
  const tourSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title.en,
    description: tour.subtitle.en,
    image: tour.heroImage,
    touristType: [tour.category, tour.storyCollection],
    offers: {
      '@type': 'Offer',
      price: tour.startingPriceUSD,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    itinerary: tour.itinerary.map((day) => ({
      '@type': 'City',
      name: day.title.en,
      description: day.description.en,
    })),
    provider: {
      '@type': 'TravelAgency',
      name: 'Jordan Story Tours',
      url: 'https://jordanstorytours.com',
      telephone: '+962790000000',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is included in the ${tour.title.en}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `This tour package includes private transfers with an English-speaking driver, ${tour.durationNights} nights accommodation, daily breakfast, and visa assistance.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can I customize the itinerary for ${tour.title.en}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All Jordan Story private tours can be customized with extra nights in Petra or Wadi Rum, upgraded hotel tiers, or special requests.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EFE7]">
      {/* Schema.org JSON-LD Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header currentLocale="en" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#151B23] text-[#F4EFE7] py-20 border-b border-[#A85F43]/30 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img src={tour.heroImage} alt={tour.title.en} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#151B23] via-[#151B23]/70 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#D8B98F] font-semibold">
              <span className="bg-[#A85F43] text-white px-3 py-1 rounded-full">{tour.category}</span>
              <span>{tour.storyCollection}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F4EFE7]">
              {tour.title.en}
            </h1>
            
            <p className="text-lg text-gray-300 max-w-3xl font-light">
              {tour.subtitle.en}
            </p>

            {/* Quick Meta */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-[#D8B98F]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A85F43]" />
                <span>{tour.durationDays} Days / {tour.durationNights} Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A85F43]" />
                <span>{tour.route.join(' → ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#A85F43] fill-[#A85F43]" />
                <span>5.0 (Verified Traveler Reviews)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Left Column (Itinerary & Details) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Highlights */}
            <div className="p-8 rounded-3xl bg-white shadow-md border border-gray-100 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#302A27]">Tour Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {tour.highlights.en.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#A85F43] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 00D Specification: Public Interactive Lightbox Gallery */}
            <div className="p-8 rounded-3xl bg-white shadow-md border border-gray-100">
              <TourGallery gallery={tour.gallery} heroImage={tour.heroImage} tourTitle={tour.title.en} />
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-[#302A27]">Day-by-Day Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="p-6 rounded-2xl bg-white shadow-sm border border-gray-200/80 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest font-bold text-[#A85F43] bg-[#A85F43]/10 px-3 py-1 rounded-full">
                        Day {day.day}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">Meals: {day.meals}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#302A27]">{day.title.en}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{day.description.en}</p>

                    {day.accommodation && (
                      <div className="pt-2 text-xs text-[#A85F43] font-semibold">
                        Overnight: {day.accommodation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white shadow-sm border border-green-100 space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#302A27] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>What's Included</span>
                </h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  {tour.inclusions.en.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-sm border border-red-100 space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#302A27] flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span>What's Excluded</span>
                </h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  {tour.exclusions.en.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AEO Direct Answer FAQ Accordion */}
            <div className="p-8 rounded-3xl bg-white shadow-md border border-gray-100 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#302A27] flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#A85F43]" />
                <span>Frequently Asked Questions</span>
              </h2>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#F4EFE7]/50 border border-gray-200/60 space-y-2">
                  <h3 className="font-bold text-sm text-[#302A27]">How do I book this tour?</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Click the "Book This Tour Now" button to select your start date and hotel preferences. You will receive an instant quote and reference code with free cancellation flexibility.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F4EFE7]/50 border border-gray-200/60 space-y-2">
                  <h3 className="font-bold text-sm text-[#302A27]">Is entry visa assistance provided?</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Yes! Jordan Story Tours assists with free visa procurement for eligible nationalities upon airport arrival.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar Booking Widget */}
          <div className="space-y-6">
            <div className="sticky top-28 p-8 rounded-3xl bg-[#151B23] text-[#F4EFE7] border border-[#A85F43]/30 shadow-2xl space-y-6">
              <div>
                <span className="text-xs text-gray-400 block">Starting Price per Person</span>
                <div className="font-serif text-4xl font-bold text-[#D8B98F] mt-1">${tour.startingPriceUSD} USD</div>
                <span className="text-xs text-gray-400 block mt-1">Private AC Vehicle + Hotel + Driver</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-800 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A85F43]" />
                  <span>Free Cancellation Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#A85F43]" />
                  <span>Flexible Date Adjustments</span>
                </div>
              </div>

              <Link
                href={`/booking?tour=${tour.id}`}
                className="w-full block text-center py-4 rounded-full bg-[#A85F43] hover:bg-[#8B4B34] text-white font-bold text-sm shadow-xl transition-all hover:scale-105"
              >
                Book This Tour Now
              </Link>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
