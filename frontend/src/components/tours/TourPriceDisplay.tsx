'use client';

import React, { useState, useEffect } from 'react';
import { useCurrency } from '@/context/CurrencyContext';

interface TourPriceDisplayProps {
  priceUSD?: number | null;
  priceMode?: 'FIXED' | 'FROM' | 'QUOTATION';
  bookingMode?: 'DIRECT_BOOKING' | 'QUOTATION';
  tourSlug?: string;
  locale?: string;
}

export const TourPriceDisplay: React.FC<TourPriceDisplayProps> = ({
  priceUSD,
  priceMode = 'FROM',
  bookingMode = 'DIRECT_BOOKING',
  tourSlug,
  locale = 'en'
}) => {
  const { formatPrice, currency } = useCurrency();
  const [dynamicPrice, setDynamicPrice] = useState<number | null>(priceUSD ?? null);
  const [dynamicPriceMode, setDynamicPriceMode] = useState<'FIXED' | 'FROM' | 'QUOTATION'>(priceMode);

  useEffect(() => {
    if (tourSlug) {
      // Fetch dynamic live pricing endpoint if available (Doc 05 Section 4)
      fetch(`/api/public/tours/${tourSlug}/pricing`)
        .then(res => res.json())
        .then(res => {
          if (res.success && res.data) {
            setDynamicPrice(res.data.price_amount);
            setDynamicPriceMode(res.data.price_mode);
          }
        })
        .catch(() => {
          // Fallback gracefully to static initial props
        });
    }
  }, [tourSlug]);

  if (dynamicPriceMode === 'QUOTATION' || dynamicPrice === null || dynamicPrice === undefined) {
    const label = locale === 'de' ? 'Preis auf Anfrage' : locale === 'fr' ? 'Prix sur Demande' : locale === 'it' ? 'Prezzo su Richiesta' : 'Price on Request';
    const subLabel = locale === 'de' ? 'Maßgeschneidertes Angebot' : locale === 'fr' ? 'Devis Sur Mesure' : locale === 'it' ? 'Preventivo Personalizzato' : 'Customized Itinerary Quote';
    return (
      <div>
        <span className="text-xs text-[#C69C6D] font-mono block uppercase tracking-wider">{subLabel}</span>
        <div className="font-serif text-3xl font-bold text-[#D8B98F] mt-1">
          {label}
        </div>
        <span className="text-xs text-gray-400 block mt-1">Private Vehicle + Guide + Custom Stays</span>
      </div>
    );
  }

  const prefix = dynamicPriceMode === 'FROM'
    ? (locale === 'de' ? 'Ab ' : locale === 'fr' ? 'À partir de ' : locale === 'it' ? 'Da ' : 'From ')
    : '';

  return (
    <div>
      <span className="text-xs text-gray-400 block">
        {dynamicPriceMode === 'FROM' ? 'Starting Price per Person' : 'Price per Person'}
      </span>
      <div className="font-serif text-4xl font-bold text-[#D8B98F] mt-1">
        {prefix}{formatPrice(dynamicPrice)}
      </div>
      <span className="text-xs text-gray-400 block mt-1">Private AC Vehicle + Hotels + Designated Driver</span>
    </div>
  );
};
