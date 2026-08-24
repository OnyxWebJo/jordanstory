'use client';

import React from 'react';
import { useCurrency } from '@/context/CurrencyContext';

interface TourPriceDisplayProps {
  priceUSD: number;
}

export const TourPriceDisplay: React.FC<TourPriceDisplayProps> = ({ priceUSD }) => {
  const { formatPrice, currency } = useCurrency();

  return (
    <div>
      <span className="text-xs text-gray-400 block">Starting Price per Person</span>
      <div className="font-serif text-4xl font-bold text-[#D8B98F] mt-1">
        {formatPrice(priceUSD)}
      </div>
      <span className="text-xs text-gray-400 block mt-1">Private AC Vehicle + Hotel + Driver</span>
    </div>
  );
};
