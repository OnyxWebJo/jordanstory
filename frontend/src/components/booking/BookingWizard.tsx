'use client';

import React, { useState } from 'react';
import { TOURS_DATA } from '@/data/tours';
import { Calendar, Users, Hotel, CheckCircle2, Send, ShieldCheck, ArrowLeft, ArrowRight, Loader2, MessageSquare, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const BookingWizard: React.FC = () => {
  const { locale, getLocalized } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedTourId, setSelectedTourId] = useState(TOURS_DATA[0].id);
  const [travelDate, setTravelDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [accommodation, setAccommodation] = useState<'budget' | '3-star' | '4-star' | '5-star' | 'martian-camp'>('4-star');
  
  // Lead traveler details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Form state
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const selectedTour = TOURS_DATA.find((t) => t.id === selectedTourId) || TOURS_DATA[0];

  // Dynamic pricing algorithm
  const basePricePerPerson = selectedTour.startingPriceUSD;
  const accommodationMultiplier = 
    accommodation === 'budget' ? 0.85 :
    accommodation === '3-star' ? 1.0 :
    accommodation === '4-star' ? 1.25 :
    accommodation === '5-star' ? 1.75 : 2.10;

  // Group size discount
  const groupMultiplier = adults >= 5 ? 0.75 : adults >= 3 ? 0.85 : 1.0;
  const adultTotal = adults * basePricePerPerson * accommodationMultiplier * groupMultiplier;
  const childTotal = children * basePricePerPerson * 0.5 * accommodationMultiplier;
  const calculatedTotalPrice = Math.round(adultTotal + childTotal);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Generate unique booking reference
    const refCode = `JST-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;

    setTimeout(() => {
      setSubmittedRef(refCode);
      setSubmitting(false);
      setStep(4); // Success screen
    }, 1200);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Jordan Story Tours! I submitted a booking request (${submittedRef}) for ${getLocalized(selectedTour.title)} on ${travelDate} for ${adults} Adults. Please send my quote.`
  );

  return (
    <div className="max-w-4xl mx-auto bg-[#1A1615] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl text-[#F7F4EE]">
      
      {/* Step Indicator Header */}
      <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10 text-xs sm:text-sm font-medium">
        <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#C69C6D]' : 'text-gray-500'}`}>
          <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${step >= 1 ? 'bg-[#A85F43] text-white' : 'bg-white/10 text-gray-400'}`}>1</span>
          <span className="hidden sm:inline">{locale === 'de' ? 'Tour & Datum' : 'Tour & Dates'}</span>
        </div>
        <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#C69C6D]' : 'text-gray-500'}`}>
          <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${step >= 2 ? 'bg-[#A85F43] text-white' : 'bg-white/10 text-gray-400'}`}>2</span>
          <span className="hidden sm:inline">{locale === 'de' ? 'Unterkunft' : 'Accommodation'}</span>
        </div>
        <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#C69C6D]' : 'text-gray-500'}`}>
          <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${step >= 3 ? 'bg-[#A85F43] text-white' : 'bg-white/10 text-gray-400'}`}>3</span>
          <span className="hidden sm:inline">{locale === 'de' ? 'Kontakt & Anfrage' : 'Contact & Quote'}</span>
        </div>
      </div>

      {/* STEP 1: Select Tour, Dates & Travelers */}
      {step === 1 && (
        <div className="space-y-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold block">SCHRITT 1 VON 3</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              {locale === 'de' ? 'Wählen Sie Ihre Rundreise' : 'Select Your Tour Package'}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light mt-1">
              {locale === 'de' ? 'Wählen Sie Ihre gewünschte Reiseroute und das Startdatum.' : 'Choose your desired Jordan itinerary and preferred travel start date.'}
            </p>
          </div>

          <div className="space-y-4">
            <label className="block text-xs uppercase tracking-wider text-[#C69C6D] font-mono font-semibold">
              {locale === 'de' ? 'Verfügbare Rundreisen' : 'Available Tour Packages'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
              {TOURS_DATA.map((tour) => (
                <button
                  type="button"
                  key={tour.id}
                  onClick={() => setSelectedTourId(tour.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedTourId === tour.id
                      ? 'border-[#A85F43] bg-[#A85F43]/20 text-white shadow-lg ring-1 ring-[#A85F43]'
                      : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/30'
                  }`}
                >
                  <span className="text-[10px] text-[#C69C6D] font-mono uppercase block">{tour.category}</span>
                  <span className="font-serif font-bold text-sm block mt-1 leading-snug">{getLocalized(tour.title)}</span>
                  <span className="text-xs text-gray-400 block mt-2 font-mono">
                    {tour.durationDays} {locale === 'de' ? 'Tage' : 'Days'} / ${tour.startingPriceUSD} USD
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C69C6D] font-mono font-semibold mb-2">
                {locale === 'de' ? 'Reisedatum' : 'Start Travel Date'}
              </label>
              <input
                type="date"
                required
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A85F43]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C69C6D] font-mono font-semibold mb-2">
                {locale === 'de' ? 'Erwachsene (12+ Jahre)' : 'Adults (12+ yrs)'}
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={adults}
                onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A85F43]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C69C6D] font-mono font-semibold mb-2">
                {locale === 'de' ? 'Kinder (Unter 12 Jahre)' : 'Children (Under 12)'}
              </label>
              <input
                type="number"
                min="0"
                max="10"
                value={children}
                onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A85F43]"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              disabled={!travelDate}
              onClick={() => setStep(2)}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] disabled:opacity-40 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg"
            >
              <span>{locale === 'de' ? 'Weiter: Unterkunft' : 'Next: Accommodation'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Hotel & Camp Tier Selection */}
      {step === 2 && (
        <div className="space-y-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold block">SCHRITT 2 VON 3</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              {locale === 'de' ? 'Wählen Sie die Hotel-Kategorie' : 'Choose Accommodation Standard'}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light mt-1">
              {locale === 'de' ? 'Wählen Sie Ihre bevorzugte Hotelklasse in Jordanien.' : 'Select hotel standards throughout Jordan.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { id: 'budget', name: locale === 'de' ? 'Komfort (3-Sterne)' : 'Standard (3-Star)', desc: locale === 'de' ? 'Saubere Boutique-Hotels mit Frühstück.' : 'Clean, comfortable family-run hotels with breakfast.' },
              { id: '4-star', name: locale === 'de' ? 'Deluxe (4-Sterne)' : 'Deluxe (4-Star)', desc: locale === 'de' ? 'Erstklassige Hotels mit Pool & bester Lage in Petra.' : 'Recommended balance of luxury pools & prime Petra locations.' },
              { id: '5-star', name: locale === 'de' ? 'Luxus (5-Sterne)' : 'Luxury (5-Star)', desc: locale === 'de' ? 'Mövenpick Petra & Kempinski Totes Meer Resorts.' : '5-Star luxury (Mövenpick Petra & Kempinski Dead Sea).' },
              { id: 'martian-camp', name: locale === 'de' ? 'Wadi Rum Martian Camp' : 'Wadi Rum Martian Dome', desc: locale === 'de' ? 'Luxus-Glasdomes mitten im Wüstensand.' : 'Luxury panoramic glass dome camp in Wadi Rum dunes.' },
            ].map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setAccommodation(item.id as any)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  accommodation === item.id
                    ? 'border-[#A85F43] bg-[#A85F43]/20 text-white shadow-lg ring-1 ring-[#A85F43]'
                    : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2 text-[#C69C6D]">
                  <Hotel className="w-4 h-4" />
                  <span className="font-serif font-bold text-base">{item.name}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">{item.desc}</p>
              </button>
            ))}
          </div>

          {/* Real-time Dynamic Price Calculator Widget */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-gray-400 font-mono block">
                {locale === 'de' ? `Berechnetes Angebot (${adults} Erw. / ${children} Kinder)` : `Live Calculated Quote (${adults} Adults / ${children} Kids)`}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-extrabold text-[#C69C6D]">${calculatedTotalPrice} USD</span>
                {adults >= 3 && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#A85F43]/30 text-[#C69C6D] border border-[#A85F43]/40">
                    {adults >= 5 ? '25% Group Discount' : '15% Small Group Discount'}
                  </span>
                )}
              </div>
            </div>

            <div className="text-xs text-gray-400 font-light max-w-[220px]">
              {locale === 'de' ? 'Inklusive Chauffeur, Hotels, Frühstück & Visum-Hilfe.' : 'Includes private chauffeur, hotels, daily breakfast & visa support.'}
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-gray-300 text-xs font-semibold hover:bg-white/10 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{locale === 'de' ? 'Zurück' : 'Back'}</span>
            </button>
            
            <button
              type="button"
              onClick={() => setStep(3)}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg"
            >
              <span>{locale === 'de' ? 'Weiter: Kontaktdaten' : 'Next: Contact Info'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Contact Info & Submission */}
      {step === 3 && (
        <form onSubmit={handleSubmitBooking} className="space-y-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold block">SCHRITT 3 VON 3</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              {locale === 'de' ? 'Kontaktdaten & Buchungsanfrage' : 'Contact & Reservation Details'}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light mt-1">
              {locale === 'de' ? `Wir prüfen die Hotelverfügbarkeit für den ${travelDate}.` : `We will confirm hotel availability for ${travelDate} and email your quote.`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C69C6D] font-mono font-semibold mb-2">Vorname / First Name</label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="e.g. John"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#A85F43]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C69C6D] font-mono font-semibold mb-2">Nachname / Last Name</label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="e.g. Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#A85F43]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C69C6D] font-mono font-semibold mb-2">E-Mail / Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#A85F43]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#C69C6D] font-mono font-semibold mb-2">Telefon (WhatsApp) / Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+44 7911 123456"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#A85F43]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#C69C6D] font-mono font-semibold mb-2">
              {locale === 'de' ? 'Besondere Wünsche (Optional)' : 'Special Requests (Optional)'}
            </label>
            <textarea
              rows={3}
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder={locale === 'de' ? 'z.B. Vegetarisches Essen, Barrierefreiheit, Verlängerungstag...' : 'e.g., Dietary requirements, room preferences, extra night in Petra...'}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#A85F43]"
            />
          </div>

          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-gray-300 text-xs font-semibold hover:bg-white/10 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{locale === 'de' ? 'Zurück' : 'Back'}</span>
            </button>
            
            <button
              type="submit"
              disabled={submitting || !firstName || !lastName || !email}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl disabled:opacity-40 cursor-pointer"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Senden...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{locale === 'de' ? `Buchung Senden ($${calculatedTotalPrice} USD)` : `Submit Inquiry ($${calculatedTotalPrice} USD)`}</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* STEP 4: Success Confirmation */}
      {step === 4 && (
        <div className="text-center py-12 space-y-6 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-[#A85F43] text-white flex items-center justify-center mx-auto shadow-2xl">
            <Check className="w-8 h-8" />
          </div>

          <h3 className="font-serif text-3xl font-bold text-white">
            {locale === 'de' ? 'Buchungsanfrage Erfolgreich Empfangen!' : 'Booking Inquiry Received!'}
          </h3>
          
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-xs text-gray-400 font-mono block">RESERVIERUNGS-REFERENZ</span>
            <span className="font-mono text-xl font-bold text-[#C69C6D] block tracking-wider">{submittedRef}</span>
          </div>

          <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed font-light">
            Vielen Dank, {firstName}! Wir prüfen die Hotelverfügbarkeit für <strong>{getLocalized(selectedTour.title)}</strong> am {travelDate}.
          </p>

          {/* Instant WhatsApp Confirmation Option */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/962790000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Instant WhatsApp Confirmation</span>
            </a>

            <button
              onClick={() => { setStep(1); setSubmittedRef(null); }}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono tracking-wider cursor-pointer"
            >
              Neues Angebot Berechnen
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
