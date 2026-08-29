import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookingWizard } from '@/components/booking/BookingWizard';
import { Calendar, ShieldCheck, PhoneCall } from 'lucide-react';

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4EFE7]">
      <Header currentLocale="en" />

      <main className="flex-1 pt-36 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#A85F43] font-semibold">
            Instant Quote & Direct Booking
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#302A27]">
            Reserve Your Jordan Story
          </h1>
          <p className="text-gray-600 text-base max-w-xl mx-auto">
            Transparent pricing, no hidden fees, and instant confirmation for private tours in Jordan.
          </p>
        </div>

        <BookingWizard />
      </main>

      <Footer />
    </div>
  );
}
