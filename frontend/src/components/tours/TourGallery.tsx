'use client';

import React, { useState, useEffect } from 'react';
import { TourGalleryItem } from '@/data/tours';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface TourGalleryProps {
  gallery: TourGalleryItem[];
  heroImage: string;
  tourTitle: string;
}

export const TourGallery: React.FC<TourGalleryProps> = ({ gallery, heroImage, tourTitle }) => {
  const { locale } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Combine hero with gallery items if needed
  const images = gallery && gallery.length > 0 ? gallery : [
    {
      id: 'hero-fallback',
      url: heroImage,
      alt: { en: `${tourTitle} - Main View`, de: `${tourTitle} - Hauptansicht` },
      sortOrder: 1,
      rightsStatus: 'VERIFIED_OWNED' as const
    }
  ];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === 'Escape') setLightboxIndex(null);
    if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
    if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-bold text-[#302A27] flex items-center gap-2">
          <ImageIcon className="w-6 h-6 text-[#A85F43]" />
          <span>{locale === 'de' ? 'Bildergalerie & Highlights' : 'Tour Image Gallery & Highlights'}</span>
        </h2>
        <span className="text-xs text-gray-500 font-mono">
          {images.length} {locale === 'de' ? 'Fotos' : 'High-Res Photos'}
        </span>
      </div>

      {/* Main Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => setLightboxIndex(idx)}
            className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={img.url}
              alt={img.alt[locale] || tourTitle}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="p-2.5 rounded-full bg-white/80 backdrop-blur-md text-[#1A1615] shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
            {img.caption && (
              <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-white text-[11px] truncate">
                {img.caption[locale]}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8">
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0))}
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-10"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0))}
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-10"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image & Caption Container */}
          <div className="max-w-5xl w-full flex flex-col items-center space-y-4">
            <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/10">
              <img
                src={images[lightboxIndex].url}
                alt={images[lightboxIndex].alt[locale] || tourTitle}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="text-center space-y-1 text-white max-w-xl">
              <p className="text-sm font-medium">{images[lightboxIndex].alt[locale]}</p>
              {images[lightboxIndex].caption && (
                <p className="text-xs text-gray-400 font-light">{images[lightboxIndex].caption[locale]}</p>
              )}
              <span className="text-[11px] font-mono text-[#D8B98F] block pt-1">
                Photo {lightboxIndex + 1} of {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
