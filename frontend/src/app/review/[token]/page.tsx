'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ReviewsStoreService, ReviewRequest, ReviewLocale } from '@/data/reviewsStore';
import { Star, ShieldCheck, CheckCircle2, ArrowRight, Compass } from 'lucide-react';
import Link from 'next/link';

const DICTIONARY: Record<ReviewLocale, Record<string, string>> = {
  en: {
    eyebrow: 'YOUR JORDAN STORY',
    headline: 'How Was Your Journey?',
    description: 'Your experience can help another traveler begin theirs.',
    verifiedBooking: 'Verified Jordan Story Booking',
    tourLabel: 'Tour Completed',
    travelerLabel: 'Traveler Name',
    ratingLabel: 'Overall Rating',
    titleLabel: 'Review Title (Optional)',
    titlePlaceholder: 'e.g., Unforgettable week in Petra and Wadi Rum!',
    bodyLabel: 'Your Review',
    bodyPlaceholder: 'Share details about your driver, guide, desert camp, or favorite moments...',
    displayNameLabel: 'Display Name',
    countryLabel: 'Country of Residence (Optional)',
    consentLabel: 'I consent to publishing my review on Jordan Story Tours official website.',
    submitBtn: 'Submit Verified Review',
    thankYouHeadline: 'Thank You for Sharing Your Story',
    thankYouDesc: 'Your feedback has been received and will help us continue improving the journeys we create across Jordan.',
    exploreCta: 'Explore Jordan Story Tours',
    invalidToken: 'Invalid or Expired Review Token',
    invalidDesc: 'This review link is no longer valid or has already been submitted. Please contact our support team.',
  },
  de: {
    eyebrow: 'IHRE JORDANIE GESCHICHTE',
    headline: 'Wie war Ihre Reise?',
    description: 'Ihre Erfahrung hilft zukünftigen Reisenden bei der Planung ihrer Jordanien-Reise.',
    verifiedBooking: 'Verifizierte Jordan Story Buchung',
    tourLabel: 'Absolvierte Tour',
    travelerLabel: 'Reisender',
    ratingLabel: 'Gesamtbewertung',
    titleLabel: 'Titel der Bewertung (Optional)',
    titlePlaceholder: 'z.B. Unvergessliche Woche in Petra und Wadi Rum!',
    bodyLabel: 'Ihre Bewertung',
    bodyPlaceholder: 'Teilen Sie Details über Ihren Chauffeur, Reiseleiter, Wüstencamp oder Ihre Lieblingsmomente...',
    displayNameLabel: 'Anzeigename',
    countryLabel: 'Herkunftsland (Optional)',
    consentLabel: 'Ich stimme der Veröffentlichung meiner Bewertung auf der offiziellen Website von Jordan Story Tours zu.',
    submitBtn: 'Verifizierte Bewertung Absenden',
    thankYouHeadline: 'Vielen Dank für das Teilen Ihrer Geschichte',
    thankYouDesc: 'Ihre Rückmeldung ist eingegangen und hilft uns dabei, unsere Touren durch Jordanien weiter zu verbessern.',
    exploreCta: 'Jordanien Rundreisen Entdecken',
    invalidToken: 'Ungültiger oder abgelaufener Bewertungs-Link',
    invalidDesc: 'Dieser Link ist ungültig oder wurde bereits genutzt. Bitte kontaktieren Sie unser Team.',
  },
  fr: {
    eyebrow: 'VOTRE HISTOIRE EN JORDANIE',
    headline: 'Comment s\'est passé votre voyage ?',
    description: 'Votre expérience aide les futurs voyageurs à préparer leur séjour en Jordanie.',
    verifiedBooking: 'Réservation Vérifiée Jordan Story',
    tourLabel: 'Circuit Réalisé',
    travelerLabel: 'Nom du Voyageur',
    ratingLabel: 'Note Globale',
    titleLabel: 'Titre de votre avis (Optionnel)',
    titlePlaceholder: 'ex. Une semaine inoubliable à Pétra et Wadi Rum !',
    bodyLabel: 'Votre Avis',
    bodyPlaceholder: 'Partagez des détails sur votre chauffeur, guide, camp dans le désert ou vos moments préférés...',
    displayNameLabel: 'Nom d\'affichage',
    countryLabel: 'Pays de résidence (Optionnel)',
    consentLabel: 'J\'autorise la publication de mon avis sur le site officiel de Jordan Story Tours.',
    submitBtn: 'Soumettre mon avis vérifié',
    thankYouHeadline: 'Merci d\'avoir partagé votre histoire',
    thankYouDesc: 'Votre avis a bien été reçu et nous aidera à continuer d\'améliorer nos voyages en Jordanie.',
    exploreCta: 'Découvrir nos Circuits en Jordanie',
    invalidToken: 'Lien d\'avis invalide ou expiré',
    invalidDesc: 'Ce lien d\'avis n\'est plus valide ou a déjà été soumis. Veuillez contacter notre équipe.',
  },
  it: {
    eyebrow: 'LA TUA STORIA IN GIORDANIA',
    headline: 'Com\'è stato il tuo viaggio?',
    description: 'La tua esperienza aiuta i futuri viaggiatori a scegliere il loro viaggio in Giordania.',
    verifiedBooking: 'Prenotazione Verificata Jordan Story',
    tourLabel: 'Tour Completato',
    travelerLabel: 'Nome del Viaggiatore',
    ratingLabel: 'Valutazione Generale',
    titleLabel: 'Titolo della Recensione (Opzionale)',
    titlePlaceholder: 'es. Settimana indimenticabile a Petra e Wadi Rum!',
    bodyLabel: 'La Tua Recensione',
    bodyPlaceholder: 'Condividi dettagli sul tuo autista, guida, camp nel deserto o momenti preferiti...',
    displayNameLabel: 'Nome Visualizzato',
    countryLabel: 'Paese di Residenza (Opzionale)',
    consentLabel: 'Acconsento alla pubblicazione della mia recensione sul sito ufficiale di Jordan Story Tours.',
    submitBtn: 'Invia Recensione Verificata',
    thankYouHeadline: 'Grazie per aver condiviso la tua storia',
    thankYouDesc: 'Il tuo feedback è stato ricevuto e ci aiuterà a migliorare continuamente i viaggi in Giordania.',
    exploreCta: 'Esplora i Tour in Giordania',
    invalidToken: 'Link di recensione non valido o scaduto',
    invalidDesc: 'Questo link non è più valido o è già stato inviato. Contatta il nostro supporto.',
  }
};

export default function ReviewPage() {
  const params = useParams();
  const token = (params?.token as string) || '';

  const [request, setRequest] = useState<ReviewRequest | null>(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [displayCountry, setDisplayCountry] = useState('');
  const [consent, setConsent] = useState(true);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    if (token) {
      const found = ReviewsStoreService.getRequestByToken(token);
      if (found) {
        setRequest(found);
        setDisplayName(found.customerName);
      }
    }
    setLoading(false);
  }, [token]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1A1615] text-[#F7F4EE]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C69C6D]" />
      </div>
    );
  }

  const locale: ReviewLocale = request?.locale || 'en';
  const dict = DICTIONARY[locale];

  if (!request || request.status === 'SUBMITTED' || request.status === 'APPROVED') {
    return (
      <div className="min-h-screen flex flex-col bg-[#1A1615] text-[#F7F4EE]">
        <Header currentLocale={locale === 'de' ? 'de' : 'en'} />
        <main className="flex-1 flex items-center justify-center py-24 px-4">
          <div className="max-w-md mx-auto text-center space-y-6 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
            <Compass className="w-12 h-12 text-[#C69C6D] mx-auto opacity-80" />
            <h1 className="font-serif text-2xl font-bold">{dict.invalidToken}</h1>
            <p className="text-gray-400 text-sm">{dict.invalidDesc}</p>
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-semibold text-xs transition-all shadow-lg"
            >
              Return to Homepage
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) return;

    ReviewsStoreService.submitReview(token, {
      rating,
      reviewTitle: title,
      reviewBody: body,
      displayName,
      displayCountry,
      consentToPublish: consent,
    });

    setSubmittedSuccess(true);
  };

  if (submittedSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-[#1A1615] text-[#F7F4EE]">
        <Header currentLocale={locale === 'de' ? 'de' : 'en'} />
        <main className="flex-1 flex items-center justify-center py-24 px-4">
          <div className="max-w-xl mx-auto text-center space-y-8 bg-white/5 border border-[#C69C6D]/30 p-10 rounded-3xl backdrop-blur-md shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold block">
                {dict.eyebrow}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#F7F4EE]">
                {dict.thankYouHeadline}
              </h1>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                {dict.thankYouDesc}
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all hover:scale-105"
              >
                <span>{dict.exploreCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1615] text-[#F7F4EE]">
      <Header currentLocale={locale === 'de' ? 'de' : 'en'} />

      <main className="flex-1 py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-12">
        
        {/* Page Header Copy (00E Section 8 Specification) */}
        <div className="text-center space-y-3 pt-8">
          <span className="text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold block">
            {dict.eyebrow}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F7F4EE]">
            {dict.headline}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base font-light max-w-md mx-auto">
            {dict.description}
          </p>
        </div>

        {/* Verified Tour Card Badge */}
        <div className="bg-white/5 border border-[#C69C6D]/30 p-6 rounded-2xl backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>{dict.verifiedBooking}</span>
            </div>
            <h2 className="font-serif text-lg font-bold text-[#F7F4EE]">{request.tourName}</h2>
            <span className="text-xs text-gray-400 font-mono">Ref: {request.bookingId}</span>
          </div>

          <div className="text-xs font-mono text-[#C69C6D] bg-[#C69C6D]/10 px-3 py-1.5 rounded-full border border-[#C69C6D]/20">
            {request.customerName}
          </div>
        </div>

        {/* Review Submission Form */}
        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-3xl space-y-8 backdrop-blur-md shadow-2xl">
          
          {/* Rating Selection */}
          <div className="space-y-3 text-center">
            <label className="text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold block">
              {dict.ratingLabel} *
            </label>
            <div className="flex items-center justify-center gap-2 pt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 cursor-pointer transition-transform hover:scale-125 focus:outline-none"
                >
                  <Star
                    className={`w-8 h-8 ${
                      (hoverRating || rating) >= star
                        ? 'fill-[#C69C6D] text-[#C69C6D]'
                        : 'text-white/20'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Title Input */}
          <div className="space-y-2">
            <label className="text-xs text-gray-300 font-medium block">
              {dict.titleLabel}
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={dict.titlePlaceholder}
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F7F4EE] placeholder-gray-500 focus:outline-none focus:border-[#C69C6D]"
            />
          </div>

          {/* Body Textarea */}
          <div className="space-y-2">
            <label className="text-xs text-gray-300 font-medium block">
              {dict.bodyLabel} *
            </label>
            <textarea
              required
              rows={5}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder={dict.bodyPlaceholder}
              className="w-full bg-white/5 border border-white/15 rounded-xl p-4 text-sm text-[#F7F4EE] placeholder-gray-500 focus:outline-none focus:border-[#C69C6D] leading-relaxed"
            />
          </div>

          {/* Display Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs text-gray-300 font-medium block">
                {dict.displayNameLabel} *
              </label>
              <input
                type="text"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F7F4EE] focus:outline-none focus:border-[#C69C6D]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-300 font-medium block">
                {dict.countryLabel}
              </label>
              <input
                type="text"
                value={displayCountry}
                onChange={(e) => setDisplayCountry(e.target.value)}
                placeholder="e.g. Germany, UK, France..."
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F7F4EE] placeholder-gray-500 focus:outline-none focus:border-[#C69C6D]"
              />
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 accent-[#A85F43] rounded cursor-pointer"
            />
            <label htmlFor="consent" className="text-xs text-gray-300 font-light cursor-pointer leading-relaxed">
              {dict.consentLabel}
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
          >
            {dict.submitBtn}
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
