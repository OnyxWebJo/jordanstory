'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Link from 'next/link';
import { FastForward, ChevronRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface SceneCopy {
  eyebrow?: Record<string, string>;
  headline?: Record<string, string>;
  supportingLine?: Record<string, string>;
  description?: Record<string, string>;
  prompt?: Record<string, string>;
  ctaText?: Record<string, string>;
  ctaLink?: string;
}

interface InternalScene {
  id: string;
  progressStart: number;
  progressEnd: number;
  imageSrc: string;
  copy?: SceneCopy | null;
  fogColor: number;
  lightColor: number;
}

const EXTRACTED_FRAMES: InternalScene[] = [
  {
    id: "frame_01",
    progressStart: 0,
    progressEnd: 0.08,
    imageSrc: "/images/scroll-world-video/frame-01.jpg",
    copy: {
      eyebrow: { en: "YOUR JORDAN STORY", de: "DEINE JORDANISCHE GESCHICHTE", fr: "VOTRE HISTOIRE EN JORDANIE", it: "LA TUA STORIA IN GIORDANIA" },
      headline: { en: "Every Journey Begins With a Story", de: "Jede Reise beginnt mit einer Geschichte", fr: "Chaque Voyage Commence Par Une Histoire", it: "Ogni Viaggio Inizia Con Una Storia" },
      description: { en: "And yours begins here, in Jordan.", de: "Und Ihre beginnt hier, in Jordanien.", fr: "Et la vôtre commence ici, en Jordanie.", it: "E la tua inizia qui, in Giordania." },
      prompt: { en: "Scroll to begin ↓", de: "Scrollen zum Starten ↓", fr: "Faites défiler pour commencer ↓", it: "Scorri per iniziare ↓" }
    },
    fogColor: 0x1a1615,
    lightColor: 0xa85f43
  },
  {
    id: "frame_02",
    progressStart: 0.08,
    progressEnd: 0.16,
    imageSrc: "/images/scroll-world-video/frame-02.jpg",
    copy: {
      eyebrow: { en: "CHAPTER 01", de: "KAPITEL 01", fr: "CHAPITRE 01", it: "CAPITOLO 01" },
      headline: { en: "Walk Through Time", de: "Ein Spaziergang durch die Zeit", fr: "Marchez À Travers Le Temps", it: "Cammina Nel Tempo" },
      description: {
        en: "Follow the ancient path through the Siq, where towering sandstone walls slowly reveal one of the world's greatest wonders.",
        de: "Folgen Sie dem antiken Pfad durch den Siq, wo riesige Felswände ein Weltwunder enthüllen.",
        fr: "Suivez le sentier antique du Siq, où d'imposantes falaises de grès révèlent une merveille du monde.",
        it: "Segui l'antico sentiero del Siq, dove le pareti d'arenaria rivelano una delle meraviglie del mondo."
      }
    },
    fogColor: 0x181413,
    lightColor: 0xa85f43
  },
  {
    id: "frame_03",
    progressStart: 0.16,
    progressEnd: 0.25,
    imageSrc: "/images/scroll-world-video/frame-03.jpg",
    copy: {
      eyebrow: { en: "CHAPTER 01 · PETRA", de: "KAPITEL 01 · PETRA", fr: "CHAPITRE 01 · PÉTRA", it: "CAPITOLO 01 · PETRA" },
      headline: { en: "Deeper Into the Story", de: "Tiefer in die Geschichte", fr: "Au Cœur De L'Histoire", it: "Nel Cuore Della Storia" },
      description: {
        en: "With every step, the canyon narrows, the light changes, and Petra draws closer.",
        de: "Mit jedem Schritt verengt sich die Schlucht, das Licht wechselt und Petra rückt näher.",
        fr: "À chaque pas, le canyon se rétrécit, la lumière change et Pétra se rapproche.",
        it: "A ogni passo, il canyon si restringe, la luce cambia e Petra si avvicina."
      }
    },
    fogColor: 0x181413,
    lightColor: 0x9e543b
  },
  {
    id: "frame_04",
    progressStart: 0.25,
    progressEnd: 0.35,
    imageSrc: "/images/scroll-world-video/frame-04.jpg",
    copy: {
      eyebrow: { en: "CHAPTER 01 · PETRA", de: "KAPITEL 01 · PETRA", fr: "CHAPITRE 01 · PÉTRA", it: "CAPITOLO 01 · PETRA" },
      headline: { en: "Deeper Into the Story", de: "Tiefer in die Geschichte", fr: "Au Cœur De L'Histoire", it: "Nel Cuore Della Storia" }
    },
    fogColor: 0x151110,
    lightColor: 0x9e543b
  },
  {
    id: "frame_05",
    progressStart: 0.35,
    progressEnd: 0.45,
    imageSrc: "/images/scroll-world-video/frame-05.jpg",
    copy: null,
    fogColor: 0x151110,
    lightColor: 0xc69c6d
  },
  {
    id: "frame_06",
    progressStart: 0.45,
    progressEnd: 0.55,
    imageSrc: "/images/scroll-world-video/frame-06.jpg",
    copy: {
      eyebrow: { en: "CHAPTER 01 · PETRA", de: "KAPITEL 01 · PETRA", fr: "CHAPITRE 01 · PÉTRA", it: "CAPITOLO 01 · PETRA" },
      headline: { en: "Some Stories Are Worth the Journey", de: "Manche Geschichten sind die Reise wert", fr: "Certaines Histoires Méritent Le Voyage", it: "Alcune Storie Meritano Il Viaggio" }
    },
    fogColor: 0x1a1615,
    lightColor: 0xc69c6d
  },
  {
    id: "frame_07",
    progressStart: 0.55,
    progressEnd: 0.65,
    imageSrc: "/images/scroll-world-video/frame-07.jpg",
    copy: null,
    fogColor: 0x1a1615,
    lightColor: 0xd8b98f
  },
  {
    id: "frame_08",
    progressStart: 0.65,
    progressEnd: 0.78,
    imageSrc: "/images/scroll-world-video/frame-08.jpg",
    copy: {
      eyebrow: { en: "CHAPTER 01 · PETRA", de: "KAPITEL 01 · PETRA", fr: "CHAPITRE 01 · PÉTRA", it: "CAPITOLO 01 · PETRA" },
      headline: { en: "Petra", de: "Petra", fr: "Pétra", it: "Petra" },
      supportingLine: { en: "The Rose City, revealed.", de: "Die rosa-rote Felsenstadt.", fr: "La Cité Rose, révélée.", it: "La Città Rosa, rivelata." },
      description: {
        en: "Walk through the Siq and stand before the Treasury — a moment thousands of years in the making.",
        de: "Treten Sie aus dem Siq vor das Schatzhaus – ein magischer Moment der Geschichte.",
        fr: "Franchissez le Siq et contemplez le Trésor — un moment gravé dans l'histoire.",
        it: "Attraversa il Siq e ti trovi di fronte al Tesoro — un momento scolpito nei millenni."
      },
      ctaText: { en: "Explore Petra →", de: "Petra Entdecken →", fr: "Explorer Pétra →", it: "Esplora Petra →" },
      ctaLink: "/destinations/petra"
    },
    fogColor: 0x1a1615,
    lightColor: 0xd8b98f
  },
  {
    id: "frame_09",
    progressStart: 0.78,
    progressEnd: 0.85,
    imageSrc: "/images/scroll-world-video/frame-09.jpg",
    copy: {
      headline: { en: "But the Story Doesn't End Here.", de: "Doch die Geschichte endet hier nicht.", fr: "Mais L'Histoire Ne S'Arrête Pas Là.", it: "Ma La Storia Non Finisce Qui." }
    },
    fogColor: 0x1a1615,
    lightColor: 0xd8b98f
  },
  {
    id: "frame_10",
    progressStart: 0.85,
    progressEnd: 0.92,
    imageSrc: "/images/scroll-world-video/frame-10.jpg",
    copy: {
      eyebrow: { en: "CHAPTER 02", de: "KAPITEL 02", fr: "CHAPITRE 02", it: "CAPITOLO 02" },
      headline: { en: "Where the Horizon Has No End", de: "Wo der Horizont kein Ende kennt", fr: "Là Où L'Horizon Est Sans Fin", it: "Dove L'Orizzonte Non Ha Fine" },
      description: {
        en: "Leave Petra behind and enter the vast silence of Wadi Rum — a landscape shaped by stone, sand and time.",
        de: "Betreten Sie die Stille der Wüste Wadi Rum – geprägt von Fels, Sand und Zeit.",
        fr: "Quittez Pétra et entrez dans le silence du désert de Wadi Rum, façonné par le grès et le sable.",
        it: "Lasciati Petra alle spalle ed entra nel silenzio del Wadi Rum, tra sabbia e rocce millenarie."
      }
    },
    fogColor: 0x181413,
    lightColor: 0xc69c6d
  },
  {
    id: "frame_11",
    progressStart: 0.92,
    progressEnd: 0.97,
    imageSrc: "/images/scroll-world-video/frame-11.jpg",
    copy: {
      eyebrow: { en: "CHAPTER 02 · WADI RUM", de: "KAPITEL 02 · WADI RUM", fr: "CHAPITRE 02 · WADI RUM", it: "CAPITOLO 02 · WADI RUM" },
      headline: { en: "Wadi Rum", de: "Wadi Rum", fr: "Wadi Rum", it: "Wadi Rum" },
      supportingLine: { en: "The desert is calling.", de: "Die Wüste ruft.", fr: "Le désert vous appelle.", it: "Il deserto chiama." },
      description: { en: "Continue your Jordan Story.", de: "Setzen Sie Ihre Jordanien-Geschichte fort.", fr: "Poursuivez votre histoire en Jordanie.", it: "Continua la tua storia in Giordania." },
      ctaText: { en: "Explore Wadi Rum →", de: "Wadi Rum Entdecken →", fr: "Explorer Wadi Rum →", it: "Esplora Wadi Rum →" },
      ctaLink: "/destinations/wadi-rum"
    },
    fogColor: 0x0f1318,
    lightColor: 0xc69c6d
  },
  {
    id: "frame_12",
    progressStart: 0.97,
    progressEnd: 1.0,
    imageSrc: "/images/scroll-world-video/frame-12.jpg",
    copy: {
      eyebrow: { en: "YOUR STORY. YOUR WAY.", de: "DEINE GESCHICHTE. DEIN WEG.", fr: "VOTRE HISTOIRE. VOTRE CHOIX.", it: "LA TUA STORIA. A MODO TUO." },
      headline: { en: "How Will Your Jordan Story Unfold?", de: "Wie wird sich Ihre Jordanien-Geschichte entfalten?", fr: "Comment S'Écrira Votre Histoire En Jordanie ?", it: "Come Si Svolgerà La Tua Storia In Giordania?" },
      description: {
        en: "From ancient cities and desert nights to sacred places and hidden landscapes, choose a journey — or let us create one around you.",
        de: "Von antiken Städten und Wüstennächten bis zu heiligen Orten – wählen Sie Ihre Reise.",
        fr: "Des cités antiques aux nuits du désert, choisissez votre itinéraire privé.",
        it: "Dalle città antiche alle notti nel deserto, scegli il tuo itinerario privato."
      },
      ctaText: { en: "Explore Our Tours", de: "Unsere Rundreisen", fr: "Nos Circuits Privés", it: "I Nostri Tour Privati" },
      ctaLink: "/tours"
    },
    fogColor: 0x0f1318,
    lightColor: 0xc69c6d
  }
];

export const ScrollWorldExperience: React.FC = () => {
  const { locale } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeFrameIndex, setActiveFrameIndex] = useState(0);

  const text = (obj?: Record<string, string>) => {
    if (!obj) return '';
    return obj[locale] || obj.en || '';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.clientHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const progress = Math.min(Math.max(-rect.top / totalHeight, 0), 1);
      
      const frameIdx = EXTRACTED_FRAMES.findIndex(
        f => progress >= f.progressStart && progress <= f.progressEnd
      );
      if (frameIdx !== -1) {
        setActiveFrameIndex(frameIdx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeScene = EXTRACTED_FRAMES[activeFrameIndex];

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#1A1615]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Frame Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-60"
          style={{ backgroundImage: `url('${activeScene.imageSrc}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1615] via-[#1A1615]/40 to-transparent" />

        {/* Narrative Copy Overlay */}
        {activeScene.copy && (
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 animate-fade-in">
            {activeScene.copy.eyebrow && (
              <span className="text-xs uppercase tracking-widest text-[#D8B98F] font-mono font-semibold block">
                {text(activeScene.copy.eyebrow)}
              </span>
            )}

            {activeScene.copy.headline && (
              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#F7F4EE] leading-tight">
                {text(activeScene.copy.headline)}
              </h2>
            )}

            {activeScene.copy.supportingLine && (
              <p className="text-lg text-[#C69C6D] font-serif italic">
                {text(activeScene.copy.supportingLine)}
              </p>
            )}

            {activeScene.copy.description && (
              <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
                {text(activeScene.copy.description)}
              </p>
            )}

            {activeScene.copy.ctaText && activeScene.copy.ctaLink && (
              <div className="pt-4">
                <Link
                  href={`/${locale}${activeScene.copy.ctaLink}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A85F43] hover:bg-[#8B4B34] text-white text-xs font-semibold shadow-lg transition-transform hover:scale-105"
                >
                  <span>{text(activeScene.copy.ctaText)}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {activeScene.copy.prompt && (
              <div className="pt-8">
                <span className="text-xs font-mono text-[#D8B98F]/70 animate-pulse">
                  {text(activeScene.copy.prompt)}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
