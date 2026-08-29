'use client';

import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface DestinationGalleryProps {
  gallery?: string[];
  image: string;
  name: string;
}

export const DestinationGallery: React.FC<DestinationGalleryProps> = ({ gallery, image, name }) => {
  const { locale } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = gallery && gallery.length > 0 ? Array.from(new Set([image, ...gallery])) : [image];

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
    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-bold text-[#151B23] flex items-center gap-2">
          <ImageIcon className="w-6 h-6 text-[#A85F43]" />
          <span>{locale === 'de' ? 'Bildergalerie & Impressionen' : locale === 'fr' ? 'Galerie Photos & Paysages' : locale === 'it' ? 'Galleria Fotografica' : 'Photo Gallery & Media Impressions'}</span>
        </h2>
        <span className="text-xs text-gray-500 font-mono">
          {images.length} {locale === 'de' ? 'Fotos' : 'High-Res Photos'}
        </span>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((imgUrl, idx) => (
          <div
            key={idx}
            onClick={() => setLightboxIndex(idx)}
            className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={imgUrl}
              alt={`${name} Photo ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="p-2.5 rounded-full bg-white/80 backdrop-blur-md text-[#1A1615] shadow-lg">
                <Maximize2 className="w-4 h-4 text-[#A85F43]" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

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

          <div className="max-w-5xl w-full flex flex-col items-center space-y-4">
            <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/10">
              <img
                src={images[lightboxIndex]}
                alt={`${name} Lightbox View ${lightboxIndex + 1}`}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="text-center space-y-1 text-white">
              <p className="text-sm font-medium">{name}</p>
              <span className="text-[11px] font-mono text-[#D8B98F] block">
                Photo {lightboxIndex + 1} of {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
