# Immersive Scroll World — Siq → Treasury → Wadi Rum

## Experience Goal
The visitor should feel they are moving deeper through the Siq until the Treasury reveal, then transition cinematically into Wadi Rum.

## Recommended Hybrid
Use a hybrid of:
- optimized photographic/video/image-sequence assets
- layered 2.5D depth/parallax
- selective WebGL/Three.js geometry only where it materially adds depth
- GSAP ScrollTrigger-style scroll choreography or equivalent
- masks/fog/light/rock foreground layers for transitions

Do not build the whole site as a heavy 3D world.

## Chapters
0. loading/poster fallback
1. enter Siq
2. narrow passage/depth progression
3. light increases
4. Treasury partial reveal
5. full Treasury reveal + Petra CTA
6. cinematic rock/dust/light transition
7. Wadi Rum wide landscape
8. tour-choice interface

## Accessibility / SEO
The visual experience sits above real semantic HTML content.
`prefers-reduced-motion` receives a beautiful static/low-motion version.
Keyboard users can skip the experience.
Never hide H1, intro, tour links or critical copy inside canvas only.

## Mobile
Use lighter image sequences/fewer layers and avoid excessive GPU memory.
Serve responsive assets.
Provide immediate poster while advanced assets load.

## Performance Budgets
- protect LCP
- defer WebGL code until needed
- lazy-load later chapter assets
- pause rendering when tab/section inactive
- no autoplay audio
- test low/mid-range mobile devices

## Brand
Treat chapters as the visitor entering “Your Jordan Story,” not as a technology demo.
