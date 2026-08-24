'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Compass, ArrowRight, Navigation, Clock, ShieldCheck, Car } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface RouteLeg {
  from: string;
  to: string;
  distKm: number;
  driveTimeEn: string;
  driveTimeDe: string;
}

interface TourRoutePreset {
  id: string;
  title: { en: string; de: string };
  duration: string;
  totalKm: number;
  totalHours: string;
  pathPoints: string; // SVG polyline points
  legs: RouteLeg[];
}

const ROUTE_PRESETS: TourRoutePreset[] = [
  {
    id: 'classic-5',
    title: { en: 'Classic 5-Day Wonders Route', de: 'Klassische 5-Tage Weltwunder-Route' },
    duration: '5 Days / 4 Nights',
    totalKm: 635,
    totalHours: '7 hrs 55 mins',
    pathPoints: '55,25 52,15 50,35 42,48 38,72 32,88',
    legs: [
      { from: 'Amman', to: 'Jerash', distKm: 48, driveTimeEn: '45 mins', driveTimeDe: '45 Min.' },
      { from: 'Jerash', to: 'Madaba', distKm: 75, driveTimeEn: '1 hr 10 mins', driveTimeDe: '1 Std. 10 Min.' },
      { from: 'Madaba', to: 'Dead Sea', distKm: 32, driveTimeEn: '35 mins', driveTimeDe: '35 Min.' },
      { from: 'Dead Sea', to: 'Petra', distKm: 200, driveTimeEn: '2 hrs 30 mins', driveTimeDe: '2 Std. 30 Min.' },
      { from: 'Petra', to: 'Wadi Rum', distKm: 112, driveTimeEn: '1 hr 25 mins', driveTimeDe: '1 Std. 25 Min.' },
    ]
  },
  {
    id: 'grand-7',
    title: { en: 'Grand 7-Day Kingdom Expedition', de: 'Große 7-Tage-Königreich-Expedition' },
    duration: '7 Days / 6 Nights',
    totalKm: 780,
    totalHours: '9 hrs 40 mins',
    pathPoints: '55,25 52,15 50,35 47,40 38,72 32,88 25,95 42,48',
    legs: [
      { from: 'Amman', to: 'Jerash', distKm: 48, driveTimeEn: '45 mins', driveTimeDe: '45 Min.' },
      { from: 'Jerash', to: 'Madaba', distKm: 75, driveTimeEn: '1 hr 10 mins', driveTimeDe: '1 Std. 10 Min.' },
      { from: 'Madaba', to: 'Mount Nebo', distKm: 10, driveTimeEn: '15 mins', driveTimeDe: '15 Min.' },
      { from: 'Mount Nebo', to: 'Petra', distKm: 215, driveTimeEn: '2 hrs 45 mins', driveTimeDe: '2 Std. 45 Min.' },
      { from: 'Petra', to: 'Wadi Rum', distKm: 112, driveTimeEn: '1 hr 25 mins', driveTimeDe: '1 Std. 25 Min.' },
      { from: 'Wadi Rum', to: 'Aqaba', distKm: 60, driveTimeEn: '50 mins', driveTimeDe: '50 Min.' },
      { from: 'Aqaba', to: 'Dead Sea', distKm: 250, driveTimeEn: '2 hrs 50 mins', driveTimeDe: '2 Std. 50 Min.' },
    ]
  },
  {
    id: 'express-day',
    title: { en: 'Express Petra & Wadi Rum Day Route', de: 'Express Petra & Wadi Rum Tages-Route' },
    duration: '1 Day',
    totalKm: 620,
    totalHours: '7 hrs 15 mins',
    pathPoints: '55,25 38,72 32,88 55,25',
    legs: [
      { from: 'Amman', to: 'Petra', distKm: 230, driveTimeEn: '2 hrs 45 mins', driveTimeDe: '2 Std. 45 Min.' },
      { from: 'Petra', to: 'Wadi Rum', distKm: 112, driveTimeEn: '1 hr 25 mins', driveTimeDe: '1 Std. 25 Min.' },
      { from: 'Wadi Rum', to: 'Amman', distKm: 278, driveTimeEn: '3 hrs 05 mins', driveTimeDe: '3 Std. 05 Min.' },
    ]
  }
];

const MAP_NODES = [
  { id: 'amman', name: 'Amman', x: 55, y: 25, tours: '6 Tours', desc: 'Roman Citadel & Rainbow St.', link: '/destinations/amman' },
  { id: 'jerash', name: 'Jerash', x: 52, y: 15, tours: '4 Tours', desc: 'Greco-Roman Oval Plaza', link: '/destinations/jerash' },
  { id: 'madaba', name: 'Madaba', x: 50, y: 35, tours: '5 Tours', desc: '6th Century Mosaic Map', link: '/destinations/madaba' },
  { id: 'mount-nebo', name: 'Mount Nebo', x: 47, y: 40, tours: '4 Tours', desc: "Moses' Sanctuary View", link: '/destinations/mount-nebo' },
  { id: 'dead-sea', name: 'Dead Sea', x: 42, y: 48, tours: '8 Tours', desc: 'Lowest Point on Earth (-430m)', link: '/destinations/dead-sea' },
  { id: 'petra', name: 'Petra', x: 38, y: 72, tours: '10 Tours', desc: 'Nabataean Rose City & Siq', link: '/destinations/petra' },
  { id: 'wadi-rum', name: 'Wadi Rum', x: 32, y: 88, tours: '7 Tours', desc: 'Martian Red Desert Dunes', link: '/destinations/wadi-rum' },
  { id: 'aqaba', name: 'Aqaba', x: 25, y: 95, tours: '3 Tours', desc: 'Red Sea Coral Snorkeling', link: '/destinations/aqaba' },
];

export const InteractiveMap: React.FC = () => {
  const { locale } = useLanguage();
  const [selectedRoute, setSelectedRoute] = useState<TourRoutePreset>(ROUTE_PRESETS[0]);
  const [activeNode, setActiveNode] = useState(MAP_NODES[5]); // Default Petra

  return (
    <section id="map" className="py-24 bg-[#1A1615] text-[#F7F4EE] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A85F43]/30 border border-[#A85F43]/50 text-[#C69C6D] text-xs font-mono font-semibold uppercase tracking-widest">
            <Compass className="w-4 h-4 text-[#A85F43]" />
            <span>{locale === 'de' ? 'INTERAKTIVE REISEROUTEN-KARTE' : 'INTERACTIVE ROUTE CALCULATOR'}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {locale === 'de' ? 'Erkunden Sie Jordaniens Strecken' : 'Explore Jordan Travel Routes'}
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-light">
            {locale === 'de'
              ? 'Wählen Sie eine Reiseroute, um interaktive Entfernungen, Fahrzeiten und Wegpunkte zu berechnen.'
              : 'Select a tour itinerary preset to view animated highway paths, driving distances, and leg-by-leg travel times.'}
          </p>
        </div>

        {/* Route Selector Preset Tabs */}
        <div className="flex items-center justify-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {ROUTE_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setSelectedRoute(preset)}
              className={`px-5 py-3 rounded-full text-xs font-semibold transition-all whitespace-nowrap border cursor-pointer ${
                selectedRoute.id === preset.id
                  ? 'bg-[#A85F43] text-white border-[#A85F43] shadow-xl scale-105'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:border-[#A85F43]/50 hover:text-white'
              }`}
            >
              {preset.title[locale]}
            </button>
          ))}
        </div>

        {/* Map & Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Animated SVG Map Container */}
          <div className="lg:col-span-7 relative bg-[#241F1D] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md min-h-[460px] flex flex-col justify-between">
            
            {/* Top Status Bar */}
            <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2 text-[#C69C6D]">
                <Navigation className="w-4 h-4" />
                <span>{selectedRoute.title[locale]}</span>
              </div>

              <div className="flex items-center gap-4 text-gray-400">
                <span>Total: <strong className="text-white font-serif">{selectedRoute.totalKm} km</strong></span>
                <span>Time: <strong className="text-[#C69C6D]">{selectedRoute.totalHours}</strong></span>
              </div>
            </div>

            {/* SVG Canvas */}
            <div className="relative flex-1 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full max-h-[380px] filter drop-shadow-2xl overflow-visible">
                
                {/* Background Guide Line */}
                <polyline
                  points="55,25 52,15 50,35 47,40 42,48 38,72 32,88 25,95"
                  fill="none"
                  stroke="#3A322F"
                  strokeWidth="1.2"
                  strokeDasharray="2,2"
                />

                {/* Animated Laser Route Path */}
                <polyline
                  points={selectedRoute.pathPoints}
                  fill="none"
                  stroke="#A85F43"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-pulse duration-1000 filter drop-shadow-[0_0_8px_rgba(168,95,67,0.8)]"
                />

                {/* Map Pins */}
                {MAP_NODES.map((node) => {
                  const isSelected = activeNode.id === node.id;
                  const isRouteWaypoint = selectedRoute.pathPoints.includes(`${node.x},${node.y}`);

                  return (
                    <g
                      key={node.id}
                      onClick={() => setActiveNode(node)}
                      className="cursor-pointer group"
                    >
                      {/* Pulse effect for active waypoint */}
                      {isSelected && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="6"
                          className="fill-[#C69C6D]/40 stroke-[#C69C6D] stroke-1 animate-ping"
                        />
                      )}

                      {/* Main Node Dot */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isSelected ? "4" : "2.5"}
                        className={`transition-all duration-300 ${
                          isSelected
                            ? 'fill-[#A85F43] stroke-white stroke-2'
                            : isRouteWaypoint
                            ? 'fill-[#C69C6D] stroke-white/80 stroke-1'
                            : 'fill-[#3A322F] stroke-white/30 stroke-1'
                        }`}
                      />

                      {/* Node Label */}
                      <text
                        x={node.x + 4}
                        y={node.y + 1.5}
                        fontSize="3.2"
                        fill={isSelected ? "#C69C6D" : isRouteWaypoint ? "#FFFFFF" : "#888888"}
                        fontWeight={isSelected || isRouteWaypoint ? "bold" : "normal"}
                        className="select-none transition-colors drop-shadow"
                      >
                        {node.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom Driver Note */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1.5 text-[#C69C6D]">
                <ShieldCheck className="w-4 h-4" />
                {locale === 'de' ? 'Inklusive privater Fahrer & Klimafahrzeug' : 'Includes Private AC Vehicle & Chauffeur'}
              </span>
              <span>Jordan Highway Safety Approved</span>
            </div>
          </div>

          {/* Leg-by-Leg Distance & Time Inspector Panel */}
          <div className="lg:col-span-5 bg-[#241F1D] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-[#A85F43]" />
                  <h3 className="font-serif text-xl font-bold text-white">
                    {locale === 'de' ? 'Strecken-Details' : 'Leg Distance Breakdown'}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono text-[#C69C6D]">
                  {selectedRoute.duration}
                </span>
              </div>

              {/* Leg Table List */}
              <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-2 scrollbar-thin">
                {selectedRoute.legs.map((leg, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all text-xs font-mono"
                  >
                    <div className="flex items-center gap-2 text-white">
                      <span className="w-5 h-5 rounded-full bg-[#A85F43]/30 text-[#C69C6D] flex items-center justify-center text-[10px] font-bold">
                        {idx + 1}
                      </span>
                      <span>{leg.from} → {leg.to}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-400">
                      <span className="text-white font-semibold">{leg.distKm} km</span>
                      <span className="text-[#C69C6D] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {locale === 'de' ? leg.driveTimeDe : leg.driveTimeEn}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Landmark Quick Inspector */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400 font-mono">SELECTED LANDMARK</span>
                <span className="text-[#C69C6D] font-mono font-bold">{activeNode.tours}</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">{activeNode.name}</h4>
                  <p className="text-xs text-gray-400 font-light">{activeNode.desc}</p>
                </div>

                <Link
                  href={activeNode.link}
                  className="px-4 py-2 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white text-xs font-semibold transition-all shrink-0"
                >
                  {locale === 'de' ? 'Guide Ansehen' : 'View Guide'}
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
