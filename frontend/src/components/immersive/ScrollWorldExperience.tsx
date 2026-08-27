'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Link from 'next/link';
import { FastForward, ChevronRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface SceneCopy {
  eyebrow?: { en: string; de: string };
  headline?: { en: string; de: string };
  supportingLine?: { en: string; de: string };
  description?: { en: string; de: string };
  prompt?: { en: string; de: string };
  ctaText?: { en: string; de: string };
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
    id: 'frame_01',
    progressStart: 0,
    progressEnd: 0.08,
    imageSrc: '/images/scroll-world-video/frame-01.jpg',
    copy: {
      eyebrow: { en: 'YOUR JORDAN STORY', de: 'DEINE JORDANISCHE GESCHICHTE' },
      headline: { en: 'Every Journey Begins With a Story', de: 'Jede Reise beginnt mit einer Geschichte' },
      description: { en: 'And yours begins here, in Jordan.', de: 'Und Ihre beginnt hier, in Jordanien.' },
      prompt: { en: 'Scroll to begin ↓', de: 'Scrollen zum Starten ↓' }
    },
    fogColor: 0x1a1615,
    lightColor: 0xa85f43
  },
  {
    id: 'frame_02',
    progressStart: 0.08,
    progressEnd: 0.16,
    imageSrc: '/images/scroll-world-video/frame-02.jpg',
    copy: {
      eyebrow: { en: 'CHAPTER 01', de: 'KAPITEL 01' },
      headline: { en: 'Walk Through Time', de: 'Ein Spaziergang durch die Zeit' },
      description: {
        en: "Follow the ancient path through the Siq, where towering sandstone walls slowly reveal one of the world's greatest wonders.",
        de: 'Folgen Sie dem antiken Pfad durch den Siq, wo riesige Felswände ein Weltwunder enthüllen.'
      }
    },
    fogColor: 0x181413,
    lightColor: 0xa85f43
  },
  {
    id: 'frame_03',
    progressStart: 0.16,
    progressEnd: 0.25,
    imageSrc: '/images/scroll-world-video/frame-03.jpg',
    copy: {
      eyebrow: { en: 'CHAPTER 01 · PETRA', de: 'KAPITEL 01 · PETRA' },
      headline: { en: 'Deeper Into the Story', de: 'Tiefer in die Geschichte' },
      description: {
        en: 'With every step, the canyon narrows, the light changes, and Petra draws closer.',
        de: 'Mit jedem Schritt verengt sich die Schlucht, das Licht wechselt und Petra rückt näher.'
      }
    },
    fogColor: 0x181413,
    lightColor: 0x9e543b
  },
  {
    id: 'frame_04',
    progressStart: 0.25,
    progressEnd: 0.35,
    imageSrc: '/images/scroll-world-video/frame-04.jpg',
    copy: {
      eyebrow: { en: 'CHAPTER 01 · PETRA', de: 'KAPITEL 01 · PETRA' },
      headline: { en: 'Deeper Into the Story', de: 'Tiefer in die Geschichte' }
    },
    fogColor: 0x151110,
    lightColor: 0x9e543b
  },
  {
    id: 'frame_05',
    progressStart: 0.35,
    progressEnd: 0.45,
    imageSrc: '/images/scroll-world-video/frame-05.jpg',
    copy: null, // No copy over Canyon Bend as per 00B spec Section 6
    fogColor: 0x151110,
    lightColor: 0xc69c6d
  },
  {
    id: 'frame_06',
    progressStart: 0.45,
    progressEnd: 0.55,
    imageSrc: '/images/scroll-world-video/frame-06.jpg',
    copy: {
      eyebrow: { en: 'CHAPTER 01 · PETRA', de: 'KAPITEL 01 · PETRA' },
      headline: { en: 'Some Stories Are Worth the Journey', de: 'Manche Geschichten sind die Reise wert' }
    },
    fogColor: 0x1a1615,
    lightColor: 0xc69c6d
  },
  {
    id: 'frame_07',
    progressStart: 0.55,
    progressEnd: 0.65,
    imageSrc: '/images/scroll-world-video/frame-07.jpg',
    copy: null, // No copy over Partial Reveal as per 00B spec Section 8
    fogColor: 0x1a1615,
    lightColor: 0xd8b98f
  },
  {
    id: 'frame_08',
    progressStart: 0.65,
    progressEnd: 0.78,
    imageSrc: '/images/scroll-world-video/frame-08.jpg',
    copy: {
      eyebrow: { en: 'CHAPTER 01 · PETRA', de: 'KAPITEL 01 · PETRA' },
      headline: { en: 'Petra', de: 'Petra' },
      supportingLine: { en: 'The Rose City, revealed.', de: 'Die rosa-rote Felsenstadt.' },
      description: {
        en: 'Walk through the Siq and stand before the Treasury — a moment thousands of years in the making.',
        de: 'Treten Sie aus dem Siq vor das Schatzhaus – ein magischer Moment der Geschichte.'
      },
      ctaText: { en: 'Explore Petra →', de: 'Petra Entdecken →' },
      ctaLink: '/destinations/petra'
    },
    fogColor: 0x1a1615,
    lightColor: 0xd8b98f
  },
  {
    id: 'frame_09',
    progressStart: 0.78,
    progressEnd: 0.85,
    imageSrc: '/images/scroll-world-video/frame-09.jpg',
    copy: {
      headline: { en: "But the Story Doesn't End Here.", de: 'Doch die Geschichte endet hier nicht.' }
    },
    fogColor: 0x1a1615,
    lightColor: 0xd8b98f
  },
  {
    id: 'frame_10',
    progressStart: 0.85,
    progressEnd: 0.92,
    imageSrc: '/images/scroll-world-video/frame-10.jpg',
    copy: {
      eyebrow: { en: 'CHAPTER 02', de: 'KAPITEL 02' },
      headline: { en: 'Where the Horizon Has No End', de: 'Wo der Horizont kein Ende kennt' },
      description: {
        en: 'Leave Petra behind and enter the vast silence of Wadi Rum — a landscape shaped by stone, sand and time.',
        de: 'Betreten Sie die Stille der Wüste Wadi Rum – geprägt von Fels, Sand und Zeit.'
      }
    },
    fogColor: 0x181413,
    lightColor: 0xc69c6d
  },
  {
    id: 'frame_11',
    progressStart: 0.92,
    progressEnd: 0.97,
    imageSrc: '/images/scroll-world-video/frame-11.jpg',
    copy: {
      eyebrow: { en: 'CHAPTER 02 · WADI RUM', de: 'KAPITEL 02 · WADI RUM' },
      headline: { en: 'Wadi Rum', de: 'Wadi Rum' },
      supportingLine: { en: 'The desert is calling.', de: 'Die Wüste ruft.' },
      description: { en: 'Continue your Jordan Story.', de: 'Setzen Sie Ihre Jordanien-Geschichte fort.' },
      ctaText: { en: 'Explore Wadi Rum →', de: 'Wadi Rum Entdecken →' },
      ctaLink: '/destinations/wadi-rum'
    },
    fogColor: 0x0f1318,
    lightColor: 0xc69c6d
  },
  {
    id: 'frame_12',
    progressStart: 0.97,
    progressEnd: 1.0,
    imageSrc: '/images/scroll-world-video/frame-12.jpg',
    copy: {
      eyebrow: { en: 'YOUR STORY. YOUR WAY.', de: 'DEINE GESCHICHTE. DEIN WEG.' },
      headline: { en: 'How Will Your Jordan Story Unfold?', de: 'Wie wird sich Ihre Jordanien-Geschichte entfalten?' },
      description: {
        en: 'From ancient cities and desert nights to sacred places and hidden landscapes, choose a journey — or let us create one around you.',
        de: 'Von antiken Städten und Wüstennächten bis zu heiligen Orten – wählen Sie Ihre Reise.'
      },
      ctaText: { en: 'Explore Our Tours', de: 'Unsere Rundreisen' },
      ctaLink: '/tours'
    },
    fogColor: 0x0f1318,
    lightColor: 0xc69c6d
  }
];

export const ScrollWorldExperience: React.FC = () => {
  const { locale, getLocalized } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Skip Journey Handler
  const handleSkipJourney = () => {
    if (!containerRef.current) return;
    const bottom = containerRef.current.offsetTop + containerRef.current.clientHeight;
    window.scrollTo({ top: bottom - window.innerHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let frameId: number | null = null;

    try {
      // --- 1. Three.js WebGL Scene Setup ---
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x1a1615, 0.025);

      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 1.65, 12);

      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: false,
        failIfMajorPerformanceCaveat: false
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // --- 2. Lighting System ---
      const ambientLight = new THREE.AmbientLight(0xc69c6d, 0.8);
      scene.add(ambientLight);

      const sunLight = new THREE.DirectionalLight(0xd97757, 2.2);
      sunLight.position.set(6, 14, 10);
      scene.add(sunLight);

      // --- 3. 3D Volumetric Dust Particles ---
      const particleCount = 1000;
      const geom = new THREE.BufferGeometry();
      const pos = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 35;
        pos[i * 3 + 1] = Math.random() * 15;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 35;
      }

      geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        size: 0.12,
        color: 0xd8b98f,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      const particleSystem = new THREE.Points(geom, mat);
      scene.add(particleSystem);

      let targetCamX = 0;
      let targetCamY = 1.65;

      const renderLoop = () => {
        frameId = requestAnimationFrame(renderLoop);
        if (!renderer) return;

        particleSystem.rotation.y += 0.005;

        // Mouse Parallax Interpolation
        targetCamX += (mousePos.x * 0.5 - camera.position.x) * 0.05;
        targetCamY += (1.65 - mousePos.y * 0.25 - camera.position.y) * 0.05;

        camera.position.x = targetCamX;
        camera.position.y = targetCamY;

        renderer.render(scene, camera);
      };
      renderLoop();
    } catch (e) {
      console.warn("WebGL 3D particles fallback activated:", e);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // --- 5. Timeline & Scroll Progress Calculation ---
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.clientHeight - window.innerHeight;
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      setScrollProgress(progress);

      // Determine active frame based on progress
      let foundIndex = 0;
      for (let i = 0; i < EXTRACTED_FRAMES.length; i++) {
        if (progress >= EXTRACTED_FRAMES[i].progressStart && progress <= EXTRACTED_FRAMES[i].progressEnd) {
          foundIndex = i;
          break;
        }
      }
      setActiveFrameIndex(foundIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId !== null) cancelAnimationFrame(frameId);
      if (renderer) renderer.dispose();
    };
  }, [mousePos, activeFrameIndex]);

  const currentFrame = EXTRACTED_FRAMES[activeFrameIndex];
  const copy = currentFrame.copy;

  return (
    <div 
      ref={containerRef} 
      className="relative h-[450vh] sm:h-[650vh] bg-[#1A1615]"
    >
      
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center bg-[#1A1615] overflow-hidden">
        
        {/* Layer 1: High-Definition Extracted Frame Backgrounds */}
        {EXTRACTED_FRAMES.map((frame, index) => (
          <div
            key={frame.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-out pointer-events-none ${
              index === activeFrameIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}${frame.imageSrc}')`,
              filter: 'brightness(0.85) contrast(1.08) saturate(1.05)',
              transform: `scale(${1.02 + scrollProgress * 0.04}) translate(${mousePos.x * 6}px, ${mousePos.y * 6}px)`
            }}
          />
        ))}

        {/* Layer 2: Vignette Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1615] via-transparent to-[#1A1615]/60 z-10 pointer-events-none" />

        {/* Layer 3: 3D WebGL Volumetric Particles Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 z-15 pointer-events-none" />

        {/* Skip Journey Button */}
        <button
          type="button"
          onClick={handleSkipJourney}
          className="absolute top-24 right-6 z-30 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1615]/85 border border-[#C69C6D]/50 text-[#C69C6D] hover:bg-[#A85F43] hover:text-white text-xs font-mono transition-all backdrop-blur-md shadow-2xl cursor-pointer"
        >
          <FastForward className="w-3.5 h-3.5" />
          <span>{locale === 'de' ? 'Überspringen' : 'Skip Journey'}</span>
        </button>

        {/* Layer 4: Official Approved 00B Public Copy Overlay */}
        {copy && (
          <div className="relative z-20 max-w-3xl mx-auto px-6 text-center space-y-4 pointer-events-none animate-fade-in">
            
            {/* Chapter Eyebrow */}
            {copy.eyebrow && (
              <span className="inline-block text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold bg-[#1A1615]/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10 shadow-lg">
                {getLocalized(copy.eyebrow)}
              </span>
            )}

            {/* Display Headline */}
            {copy.headline && (
              <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#F7F4EE] tracking-tight leading-tight drop-shadow-2xl">
                {getLocalized(copy.headline)}
              </h1>
            )}

            {/* Supporting Line */}
            {copy.supportingLine && (
              <p className="text-lg sm:text-2xl text-[#C69C6D] font-serif italic drop-shadow-md">
                {getLocalized(copy.supportingLine)}
              </p>
            )}

            {/* Description Paragraph */}
            {copy.description && (
              <p className="text-xs sm:text-base text-[#F7F4EE]/90 max-w-xl mx-auto font-light leading-relaxed drop-shadow-md">
                {getLocalized(copy.description)}
              </p>
            )}

            {/* CTA Button */}
            {copy.ctaText && (
              <div className="pt-4 flex justify-center pointer-events-auto">
                <Link
                  href={copy.ctaLink || '/tours'}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-semibold text-xs sm:text-sm shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
                >
                  <span>{getLocalized(copy.ctaText)}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            )}

          </div>
        )}

        {/* Scroll Cue & Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
          {scrollProgress < 0.08 && (
            <span className="text-[11px] uppercase tracking-widest text-[#C69C6D] font-mono font-semibold">
              {copy?.prompt ? getLocalized(copy.prompt) : (locale === 'de' ? 'Scrollen zum Starten ↓' : 'Scroll to begin ↓')}
            </span>
          )}
          <ArrowDown className="w-4 h-4 text-[#C69C6D] animate-bounce" />
          
          <div className="w-36 sm:w-44 h-1 bg-gray-900/80 rounded-full overflow-hidden border border-gray-700">
            <div 
              className="h-full bg-gradient-to-r from-[#A85F43] to-[#C69C6D] transition-all duration-100"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

      </div>

    </div>
  );
};
