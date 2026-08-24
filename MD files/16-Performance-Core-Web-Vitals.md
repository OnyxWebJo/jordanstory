# 16 — Performance & Core Web Vitals
## Jordan Story Tours — 3D Immersion Without Sacrificing Speed

**Purpose:** Define strict performance rules for the immersive homepage, public content pages, booking flow, German/English experiences, media, fonts, JavaScript and third-party integrations.

**Core principle:** The immersive experience is valuable only if it does not make the site feel slow, unstable or inaccessible.

---

# 1. Performance Goals

The website should feel:

- immediate
- responsive
- stable
- smooth
- lightweight outside the immersive homepage
- usable on mid-range mobile devices
- resilient on slow networks

The 3D homepage is a progressive enhancement, not a prerequisite for using the website.

---

# 2. Core Web Vitals

Primary metrics:

## LCP — Largest Contentful Paint
Target:
**≤ 2.5 seconds** for the majority of real-user visits where practical.

## INP — Interaction to Next Paint
Target:
**≤ 200 ms** for most real users.

## CLS — Cumulative Layout Shift
Target:
**≤ 0.1**

Track real-user field data, not only lab scores.

---

# 3. Performance by Page Type

## Homepage
Most complex because of the immersive experience.

Goal:
- fast semantic first paint
- quick navigation/CTA
- progressive 3D enhancement

## Tour Pages
Must be significantly lighter.

Goal:
- immediate product information
- fast booking CTA
- optimized media

## Destination / Guide Pages
Mostly content-focused.

Goal:
- near-static speed
- minimal JS

## Booking
Highly responsive.

Goal:
- minimal scripts
- instant form interaction

## Admin
Performance matters, but public Core Web Vitals are not the priority.

---

# 4. Homepage Critical Path

Initial critical path should contain only:

1. HTML shell
2. navigation
3. hero text
4. fallback/poster image
5. critical CSS
6. essential font resources
7. minimal client bootstrap

The initial page should not wait for:

- Three.js
- full GLB model
- Wadi Rum assets
- Dead Sea assets
- large video
- analytics bundles

---

# 5. 3D Progressive Loading

Recommended sequence:

```text
Initial HTML
↓
Hero poster / semantic content visible
↓
Capability check
↓
Load minimal 3D runtime
↓
Load first Siq segment
↓
Start interactive experience
↓
Stream remaining Siq assets
↓
Preload Treasury
↓
Preload Wadi Rum near transition
↓
Load later scenes on demand
```

Do not download the entire immersive journey before the first interaction.

---

# 6. Performance Tiers

## Tier A — Full 3D
For devices that pass capability/performance checks.

Features:
- full Siq geometry
- full camera journey
- richer lighting
- particles
- smooth transition to Wadi Rum

## Tier B — Reduced 3D
For typical mobile/tablet devices.

Reduce:
- polygon counts
- texture resolution
- particles
- shadow quality
- post-processing
- render scale

## Tier C — Cinematic Fallback
For:
- low-power device
- reduced motion
- failed WebGL
- poor benchmark
- constrained network

Use:
- optimized images
- short cinematic sequences
- normal scroll

Same Story, less GPU cost.

---

# 7. Capability Detection

Use a lightweight startup check.

Signals may include:

- WebGL support
- max texture size
- devicePixelRatio
- viewport
- reduced-motion preference
- device memory where available
- hardware concurrency
- initial frame-time benchmark

Do not rely only on user-agent strings.

---

# 8. Frame-Time Benchmark

After renderer initialization, run a very short internal benchmark.

If frame time exceeds acceptable thresholds:

- reduce render scale
- disable expensive effects
- lower particle count
- switch to fallback if needed

Do not let the user experience prolonged stutter.

---

# 9. Target Frame Rate

Desktop high-capability:
aim for **~60 FPS**.

Mobile:
stable **30–60 FPS** is preferable to unstable high-detail rendering.

Consistency matters more than maximum visual detail.

---

# 10. Render Resolution

Do not render WebGL at full devicePixelRatio on high-density devices by default.

Cap pixel ratio.

Example strategy conceptually:

```text
desktop: min(devicePixelRatio, 1.5–2)
mobile: 1–1.5 depending capability
```

Final values must be benchmarked.

---

# 11. 3D Model Budget

Set hard budgets before asset production.

Recommended starting targets for the Siq/Treasury experience:

- visible triangles: keep aggressively optimized
- draw calls: minimize
- texture memory: controlled by tier
- GLB transfer: segmented rather than one giant file

Exact limits should be established during the Siq proof of concept.

Do not approve assets based only on visual quality.

---

# 12. Segmented Siq Assets

Split scene into sections:

- Entry
- Mid Siq
- Final turn
- Treasury reveal

Benefits:

- stream progressively
- reduce initial transfer
- unload or reduce inactive segments
- easier LOD control

---

# 13. Geometry Optimization

Use:

- decimation
- retopology
- mesh merging where beneficial
- Meshopt/Draco compression
- instancing
- LOD
- occlusion/frustum culling
- removal of hidden geometry

Avoid shipping scan-level complexity directly.

---

# 14. Texture Budget

Use:

- KTX2/Basis compressed GPU textures
- lower-resolution mobile textures
- mipmaps
- efficient PBR channels
- texture atlases where practical

Avoid:
- many separate 4K textures
- 8K textures on phones
- unused alpha channels
- uncompressed PNGs for large surfaces

---

# 15. Material Budget

Keep materials simple.

Prefer:
- baked detail
- limited PBR material variety
- reused shaders/materials
- environment lighting

Avoid:
- many custom shader variants
- expensive transparency
- real-time refraction unless necessary

---

# 16. Lighting

Prefer:

- baked lighting
- lightmaps
- environment maps
- one/few controlled dynamic lights

Avoid expensive fully dynamic lighting.

Treasury reveal can use carefully choreographed lighting without real-time GI.

---

# 17. Shadows

Shadows are expensive.

Tier A:
- limited high-value shadows

Tier B:
- lower resolution / fewer shadow casters

Tier C:
- baked/no dynamic shadows

Do not allow every rock/particle to cast shadows.

---

# 18. Particles

Dust/sand should be subtle.

Use:
- low count
- instanced points/sprites
- GPU-efficient update

Disable/reduce on mobile.

Particles are atmosphere, not the experience itself.

---

# 19. Post-Processing

Use only if it produces visible value.

Potential:
- light color grading
- subtle bloom
- depth effects

Avoid:
- heavy SSAO
- multiple full-screen passes
- expensive motion blur
- cinematic effects that harm clarity

Tier B/C may disable all post-processing.

---

# 20. Wadi Rum Budget

Wadi Rum should be lighter than Petra.

Use:
- simple terrain
- a few major formations
- sky/environment
- haze
- limited props

The scene should communicate scale without huge geometry.

---

# 21. Dead Sea Budget

Dead Sea should be very lightweight.

Use:
- sky
- simple distant terrain
- optimized water
- static or gently moving environment

No need for complex simulation.

---

# 22. Normal Website JS Budget

Tour/destination/guide pages should not import:

- Three.js
- React Three Fiber
- GSAP ScrollTrigger unless used
- immersive shaders

Only load what the page needs.

---

# 23. Code Splitting

Split by feature:

- immersive
- booking
- admin
- map
- rich editor

Avoid one giant application bundle.

---

# 24. Dynamic Imports

Use dynamic import for:

- 3D
- heavy map components
- rich text editor
- report charts
- optional video player

Critical content must not depend on these imports.

---

# 25. Third-Party Scripts

Keep minimal.

Potential scripts:
- analytics
- consent
- payment
- chat/WhatsApp widget if used

Every third-party script must justify its performance cost.

Do not load marketing scripts before consent where not appropriate.

---

# 26. Analytics Loading

Load analytics after critical rendering.

Use lightweight event tracking.

Do not block rendering.

Avoid duplicate analytics installations.

---

# 27. Fonts

Use a small font family set.

Recommendations:
- one display family
- one body/UI family

Optimize:
- WOFF2
- subset if practical
- preload only critical weights
- `font-display: swap`
- avoid many weights

English + German use same Latin font support.

---

# 28. Font CLS

Reserve appropriate font metrics/fallbacks to reduce layout shifts.

Do not let late font loading drastically reflow hero headings.

---

# 29. Images

Use:
- AVIF/WebP
- responsive sizes
- width/height attributes
- correct `sizes`
- optimized compression
- lazy load below fold

Hero/LCP image should not be lazy loaded if it is the visible fallback.

---

# 30. Image CDN

Use CDN/object storage transformation where possible.

Generate:

- thumbnails
- card
- mobile hero
- desktop hero
- full gallery

Do not ship original 5000px images into cards.

---

# 31. Video

If video is used:

- preload metadata/poster, not full file
- compress aggressively
- use adaptive delivery if necessary
- no autoplay audio
- lazy load below fold

Avoid background video if 3D already creates the experience.

---

# 32. LCP Strategy — Homepage

Before 3D loads, the LCP candidate should ideally be:

- optimized Petra fallback/poster image
or
- hero text if visually dominant

The 3D canvas should not delay LCP.

---

# 33. LCP Strategy — Tour Pages

Likely LCP:
- tour hero image
- H1

Optimize:
- preload correct hero size
- no oversized image
- server-render title
- avoid blocking JS

---

# 34. CLS Strategy

Reserve dimensions for:

- hero
- images
- cards
- maps
- booking summary
- fonts

Do not inject:
- cookie bars
- translation banners
- booking widgets

in ways that push content unexpectedly.

---

# 35. INP Strategy

Avoid main-thread blocking.

Common risks:

- parsing large 3D scenes
- heavy hydration
- giant JSON payloads
- analytics
- form validation loops
- complex maps

Load heavy work outside critical interaction windows.

---

# 36. 3D Parsing

Consider:

- compressed binary assets
- segmented models
- off-main-thread decoding where library support permits
- preprocessed assets

Do not parse a giant monolithic model immediately after page load.

---

# 37. Hydration

Minimize client components.

Public content should be server-rendered.

Client-side only:
- menu behavior
- language UX
- booking
- filters
- immersive experience
- interactive map

Avoid hydrating static paragraphs/cards unnecessarily.

---

# 38. Database Performance

Public pages should not execute many small queries.

Use:
- efficient joins
- prefetch
- caching
- selective fields

Avoid N+1 queries.

---

# 39. Public Caching

Cache stable content.

Examples:
- destinations
- Stories
- guides
- tour editorial content

Invalidate when admin publishes changes.

---

# 40. Price Freshness

Prices should update promptly.

Use explicit revalidation/invalidation when:
- base price changes
- price rule changes
- promo starts/ends

Do not cache stale prices for long periods.

---

# 41. Booking Performance

Booking should be light.

No 3D bundle.

No unnecessary rich editor.

Use:
- client validation for UX
- server validation
- optimistic step navigation
- clear loading state

---

# 42. Booking Submission

Submission should:

1. validate
2. calculate
3. save
4. return confirmation

Email sending should not unnecessarily delay the user response if it can safely be queued/retried.

---

# 43. Admin Performance

Use server-side pagination and filtering.

Do not load:
- thousands of bookings
- all customers
- all media

in one response.

---

# 44. Reports

Load report data on demand.

Cache expensive aggregate queries where useful.

Do not calculate every report on every dashboard load.

---

# 45. Database Indexing

Index fields used for:

- booking status
- dates
- tour IDs
- customer email/phone
- slugs
- redirects
- translations
- report filters

Review real query plans after launch.

---

# 46. CDN

Serve from CDN:

- images
- videos
- GLB
- KTX2
- fonts
- JS/CSS

Use long immutable caching for fingerprinted static assets.

---

# 47. Browser Caching

Fingerprinted assets:
long cache lifetime.

HTML:
shorter/cache-controlled.

Dynamic booking/admin:
appropriate no-cache/private rules.

---

# 48. Compression

Enable:

- Brotli where supported
- gzip fallback

Compress:
- JS
- CSS
- JSON
- SVG
- glTF where not already compressed

Do not double-compress incompatible binary assets.

---

# 49. Network-Aware Loading

Where practical, adapt to:

- slow connection
- data saver
- low memory

A slow connection should receive fallback earlier rather than trying to download full immersive assets.

---

# 50. Mobile Priority

Mobile users must be treated as primary customers.

Test on:
- mid-range Android
- recent iPhone
- older but supported devices

Do not test only flagship hardware.

---

# 51. Mobile Homepage

On mobile:

- shorter Siq path
- lower texture tier
- fewer particles
- simpler Wadi Rum
- no heavy post-processing
- reduced pixel ratio

The Treasury reveal remains the key moment.

---

# 52. Touch Scrolling

The 3D experience must not cause:

- scroll locking
- accidental bounce traps
- delayed touch
- horizontal drift
- stuck pinning

Use native vertical scrolling as the base interaction.

---

# 53. Reduced Motion Performance

If reduced motion:

skip 3D loading entirely where possible.

Serve:
- lightweight poster
- normal Story sections

This saves bandwidth and respects preference.

---

# 54. Battery / Thermal Consideration

Long WebGL scenes can heat phones.

Keep the immersive section short.

After leaving the scene:
- reduce render loop
- pause or dispose the renderer
- free unused assets

Do not continue rendering hidden 3D at 60 FPS below fold.

---

# 55. Renderer Lifecycle

When immersive scene leaves viewport:

- pause animation loop
- reduce updates
- dispose scene when safe
- release GPU resources if not needed

If user scrolls back, reinitialize efficiently.

---

# 56. Tab Visibility

When tab becomes hidden:

- pause renderer
- pause timers
- pause video

Resume gracefully.

---

# 57. Memory Management

Dispose:

- textures
- geometry
- materials
- render targets

when scenes are permanently left/unmounted.

Memory leaks are especially damaging on mobile Safari.

---

# 58. Error Fallback

If 3D fails:

1. catch error
2. log technical event
3. remove/disable canvas
4. show cinematic fallback
5. continue normal site

Never display a broken black canvas.

---

# 59. Slow Asset Fallback

If immersive assets do not become ready quickly enough:

continue with fallback rather than forcing the visitor to wait.

The user can still explore tours immediately.

---

# 60. Loading Indicator

If needed, use a subtle progress indicator inside the fallback scene.

Do not create a full-screen loading gate.

---

# 61. Core Web Vitals Monitoring

Measure field data by:

- page
- device
- language
- country
- experience tier

Compare:
- full 3D
- fallback
- mobile
- desktop

---

# 62. Real User Monitoring

Capture:

- LCP
- INP
- CLS
- TTFB
- immersive tier
- 3D load success/failure

Do not include sensitive user data.

---

# 63. Performance Alerts

Set alert thresholds for:

- LCP regression
- INP regression
- large JS growth
- asset transfer growth
- 3D failure increase

Performance should be treated as a product KPI.

---

# 64. Lighthouse Budget

Use Lighthouse as a lab guardrail, not the only metric.

Set CI budgets for:
- JS size
- image transfer
- LCP
- CLS
- blocking time

Do not chase a score at the expense of actual UX.

---

# 65. Bundle Analysis

Run bundle analysis before launch and major releases.

Review:
- duplicate packages
- unused libraries
- admin code in public bundle
- 3D code on non-homepage routes

---

# 66. Performance Regression Gate

Do not approve a major feature if it:

- significantly increases initial JS
- harms LCP/INP
- causes mobile stutter
- introduces layout shift

without a clear business reason and optimization plan.

---

# 67. English vs German Performance

German content may be longer but should not materially change technical performance.

Ensure:
- same optimized assets
- same JS architecture
- no duplicate language bundle loading

Only load the active language content.

---

# 68. Translation Data Loading

Do not send entire EN + DE content payload to every page.

Load only current locale plus minimal language-switch metadata.

---

# 69. Sitemap/SEO Performance

Sitemap generation should run server-side/build-time.

Do not generate huge XML dynamically on every request if unnecessary.

---

# 70. Search Performance

Internal search should:
- debounce
- limit result count
- use indexed database search
- avoid full-table scans

---

# 71. Accessibility Performance

Accessibility and performance reinforce each other.

Examples:
- reduced motion
- semantic HTML
- lighter DOM
- fewer unnecessary effects

Do not treat accessibility as an extra runtime layer.

---

# 72. DOM Size

Keep DOM reasonable.

Avoid:
- rendering hundreds of hidden tour cards
- duplicating EN + DE DOM simultaneously
- giant FAQ lists on every page

Paginate/load intentionally.

---

# 73. Map Performance

Use lightweight custom map where possible.

Do not load a full external map SDK simply for a static route.

Lazy load heavy maps only when user needs them.

---

# 74. Third-Party Chat

If WhatsApp/chat launcher is included:

prefer lightweight custom link/button rather than a heavy third-party widget.

---

# 75. Cookie/Consent Tool

Choose a lightweight solution.

Do not allow consent scripts to become one of the heaviest page resources.

---

# 76. Performance Ownership

Assign responsibilities:

## 3D Developer
- FPS
- GPU memory
- asset size

## Frontend
- JS
- hydration
- layout

## Backend
- TTFB
- DB queries
- caching

## Content
- image/video optimization

## SEO
- CWV monitoring

Performance is shared ownership.

---

# 77. Siq Prototype Performance Gate

Before full scene production, prototype:

**Siq entry → camera movement → Treasury reveal**

Test:

- desktop load
- mobile load
- FPS
- memory
- asset transfer
- visual realism
- scroll response

If the prototype cannot meet acceptable UX, simplify before producing the complete environment.

---

# 78. Suggested Proof-of-Concept Targets

The POC should aim for:

- fallback visible immediately
- interactive start without long wait
- smooth scroll
- stable mobile rendering
- controlled asset transfer
- no major CWV regression

Final numeric asset budgets should be set from this POC, not guessed in advance.

---

# 79. Tour Page Performance Budget

Tour pages should be intentionally much lighter than homepage.

No 3D.

Prefer:
- optimized hero image
- small route/map enhancement
- lightweight itinerary animation
- booking CTA

This is where most organic visitors may land.

---

# 80. Destination Page Performance

Destination pages may use:
- hero image
- limited parallax
- interactive map lazy loaded

Keep text/content immediately visible.

---

# 81. Guide Page Performance

Near-static.

Avoid unnecessary sliders, carousels and animation.

Editorial content should be extremely fast.

---

# 82. German Landing Page Performance

Priority German SEO pages should match English speed.

Do not load:
- translation tooling
- unused EN copy
- additional scripts

German should not be technically secondary.

---

# 83. Performance QA Checklist

- [ ] homepage semantic shell visible immediately
- [ ] 3D lazy/dynamic loaded
- [ ] fallback works
- [ ] reduced motion skips heavy scene
- [ ] mobile optimized tier works
- [ ] Three.js absent from tour-page bundle
- [ ] images responsive
- [ ] dimensions specified
- [ ] fonts optimized
- [ ] no large CLS
- [ ] booking interaction responsive
- [ ] no unnecessary third-party scripts
- [ ] DB queries reviewed
- [ ] caching configured
- [ ] CDN configured
- [ ] WebGL resources disposed
- [ ] slow-network fallback tested
- [ ] EN tested
- [ ] DE tested
- [ ] field CWV monitoring configured

---

# 84. Launch Performance Checklist

Test:

### Desktop
- Chrome
- Safari
- Firefox
- Edge

### Mobile
- iPhone Safari
- Android Chrome
- mid-range Android
- reduced-motion mode
- slow network

Check:
- initial render
- Siq load
- Treasury reveal
- Wadi Rum transition
- navigation
- booking
- language switch
- back/forward navigation

---

# 85. Post-Launch Optimization

Use real data to decide:

- which assets are too heavy
- which devices fall back
- where users leave immersive section
- whether full 3D improves engagement/conversion
- whether mobile needs shorter journey

Do not preserve expensive effects merely because they looked impressive in development.

---

# 86. Final Performance Principle

The visitor should think:

**“This is incredible.”**

Not:

**“This website is loading.”**

The best technical implementation is the one that makes the technology disappear.

The Siq experience creates wonder.

The performance system protects the business.

**Immersion without friction.**
