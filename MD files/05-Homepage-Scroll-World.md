# 05 — Homepage Scroll World
## Jordan Story Tours — Immersive Homepage Experience

**Languages:** English + German  
**Primary goal:** Make the visitor feel that they are entering Jordan before they begin browsing tours.  
**Secondary goal:** Transition smoothly from cinematic storytelling into a fast, conversion-focused travel website.

---

# 1. Core Concept

The homepage hero must not behave like a normal slider.

It should feel like a **scroll-controlled journey through Jordan**.

Primary sequence:

**Petra Siq → Treasury Reveal → Wadi Rum → Dead Sea → Interactive Jordan Map → Choose Your Jordan Story**

The visitor should feel movement, discovery and depth.

The experience should remain understandable without animation.

---

# 2. Narrative Structure

## Prologue
**Your Story Begins Here**

The visitor enters Jordan through Petra's Siq.

## Chapter I
**A Story Carved in Stone**

The Treasury appears.

## Chapter II
**Beyond the Stone, the Desert Begins**

Transition to Wadi Rum.

## Chapter III
**Beneath a Million Stars**

Wadi Rum opens.

## Chapter IV
**Float Between Earth and Sky**

Transition to the Dead Sea.

## Chapter V
**Jordan Revealed**

Interactive map.

## Final Transition
**Which Jordan Story Will Be Yours?**

This connects directly to the Story Collections and tour-selection experience.

---

# 3. Homepage Top Navigation

Navigation must be available immediately.

Desktop:
- Logo
- Jordan Tours
- Destinations
- Jordan Stories
- Travel Guide
- About
- Contact
- Language selector
- Primary CTA: **Check Availability**

German:
- Jordanien Rundreisen
- Reiseziele
- Jordan Stories / localized final label after linguistic review
- Reiseführer
- Über uns
- Kontakt
- Language selector
- CTA: **Verfügbarkeit prüfen**

Do not hide navigation until the scroll sequence finishes.

---

# 4. Scene 1 — Petra Siq

## Visual
Full-screen narrow canyon environment.

Preferred implementation:
- layered high-resolution imagery / short optimized sequences
- depth through multiple planes
- subtle volumetric light
- small dust particles
- controlled camera movement tied to scroll

Avoid a static background with simple zoom only.

The center of the frame should contain a bright opening, suggesting the Treasury is ahead.

## English Copy

Eyebrow:
**WELCOME TO JORDAN**

H1:
# Your Story Begins Here.

Supporting:
**Journey through a land carved by time.**

Scroll cue:
**Scroll to enter Jordan**

## German Working Copy

Eyebrow:
**WILLKOMMEN IN JORDANIEN**

H1:
# Ihre Reisegeschichte beginnt hier.

Supporting:
**Entdecken Sie ein Land, das von Jahrtausenden geprägt wurde.**

Scroll cue:
**Scrollen und Jordanien entdecken**

**Localization note:** Final German marketing copy must be reviewed by a native/professional German editor. Do not mechanically translate every “Story” phrase.

---

# 5. Scene 1 Motion

Scroll 0%–20% of hero timeline:

- canyon foreground moves slightly faster than midground
- center opening gradually increases
- logo/nav remain stable
- initial headline fades/moves subtly
- no aggressive text flying
- camera moves forward

Performance:
- use `transform`/GPU-friendly animation
- avoid continuous expensive filters
- reduce layers on mobile

---

# 6. Scene 2 — Treasury Reveal

Scroll 20%–38%.

The canyon opens and Petra's Treasury becomes visible.

The reveal should feel earned.

## English

Small text:
**PETRA**

H2:
# A Story Carved in Stone.

Supporting:
**For more than two thousand years, travelers have crossed these paths. Now it is your turn.**

CTA:
**Explore Petra**

## German Working Copy

Small text:
**PETRA**

H2:
# Eine Geschichte, in Stein gemeißelt.

Supporting:
**Seit Jahrhunderten führt dieser Weg Reisende nach Petra. Jetzt beginnt Ihre eigene Reise.**

CTA:
**Petra entdecken**

## SEO Requirement

This visual text is not the primary crawlable Petra destination content.

Ensure semantic HTML exists in the DOM and the Petra destination page is linked normally.

---

# 7. Transition — Petra to Wadi Rum

Scroll 38%–48%.

Visual concept:
- Petra sandstone texture begins to dissolve
- canyon width expands
- dust/sand moves across frame
- color and light shift toward open desert
- Treasury slowly recedes
- Wadi Rum rock formations emerge

Do not use a cheap crossfade only.

Possible techniques:
- mask transition
- displacement effect
- depth layers
- WebGL shader only if performance budget allows

Fallback:
simple high-quality crossfade + parallax.

---

# 8. Scene 3 — Wadi Rum

Scroll 48%–66%.

The field becomes wide and open.

Elements:
- large rock formations
- subtle distant jeep
- optional camel silhouette
- sand movement
- moving sunlight
- optional day-to-golden-hour shift

Do not make the scene visually busy.

## English

Small text:
**WADI RUM**

H2:
# Beneath a Million Stars.

Supporting:
**Follow the desert beyond the horizon.**

Story label:
**The Desert Story**

CTA:
**Explore Wadi Rum**

## German Working Copy

Small text:
**WADI RUM**

H2:
# Unter einem Himmel voller Sterne.

Supporting:
**Folgen Sie der Wüste bis zum Horizont.**

Story label:
**Die Wüsten-Story** — final wording requires localization review.

CTA:
**Wadi Rum entdecken**

---

# 9. Wadi Rum Night Moment

Optional micro-scene inside Wadi Rum:

As scroll progresses:
- light lowers
- stars appear gradually
- camp lights or subtle warm light emerges
- no dramatic “space” effect
- preserve realism

This can become one of the most memorable moments.

Do not make the entire scene dependent on heavy 3D rendering.

---

# 10. Transition — Desert to Dead Sea

Scroll 66%–74%.

Visual:
- horizon lowers
- warm desert tones become reflective
- a subtle ripple expands
- sand particles disappear
- scene becomes calmer

Motion should slow noticeably.

This contrast is important.

---

# 11. Scene 4 — Dead Sea

Scroll 74%–84%.

Visual:
- wide reflective water
- mountains/horizon
- minimal movement
- subtle water surface
- softer typography motion

## English

Small text:
**THE DEAD SEA**

H2:
# Float Between Earth and Sky.

Supporting:
**Slow down at the lowest point on Earth.**

CTA:
**Explore the Dead Sea**

## German Working Copy

Small text:
**DAS TOTE MEER**

H2:
# Zwischen Himmel und Erde.

Supporting:
**Erleben Sie einen der außergewöhnlichsten Orte Jordaniens.**

CTA:
**Das Tote Meer entdecken**

## Content Accuracy

Avoid medical/health claims unless properly substantiated and appropriate.

---

# 12. Transition — Jordan Revealed

Scroll 84%–92%.

The Dead Sea scene transforms into a stylized map.

Possible technique:
- water line becomes route line
- horizon reduces into topographic form
- camera pulls upward
- Jordan map appears

This should visually communicate:
**You have been moving through the country.**

---

# 13. Scene 5 — Interactive Jordan Map

Scroll 92%–100% then releases into normal page flow.

Map should show primary destinations:

- Amman
- Jerash
- Madaba
- Mount Nebo
- Dead Sea
- Petra
- Wadi Rum
- Aqaba

Optional secondary locations:
- Ajloun
- Umm Qais
- Baptism Site
- Wadi Mujib
- Karak
- Shobak
- Desert Castles

## Desktop Interaction

Hover / focus:
- destination marker enlarges subtly
- short destination name appears
- associated Story color/texture may appear
- side preview panel with image and short description

Click:
go to destination page.

## Mobile

Tap marker:
opens bottom sheet / card.

No tiny hard-to-hit markers.

---

# 14. Map Copy

## English

H2:
# Jordan Revealed.

Supporting:
**Every road leads to another story.**

Transition CTA:
# Which Jordan Story Will Be Yours?

Button:
**Choose Your Story**

## German Working Copy

H2:
# Jordanien entdecken.

Supporting:
**Hinter jeder Route wartet eine neue Geschichte.**

Transition:
# Welche Jordanien-Reise wird Ihre?

Button:
**Reise auswählen**

Final German phrase should be localized naturally.

---

# 15. Release into Commercial Homepage

After the cinematic section, normal document flow begins.

The user should never feel trapped inside the hero.

Next section:

# Choose Your Jordan Story

Cards / immersive tiles:
- The Ancient Story
- The Desert Story
- The Sacred Story
- The Red Sea Story
- The Adventure Story
- The Essential Jordan Story
- The Complete Jordan Story
- The Luxury Jordan Story

German versions are localized.

---

# 16. Story Collection Card Behavior

Desktop:
- image/video micro-loop
- title
- one-line promise
- destinations
- number of available tours
- hover depth effect

Mobile:
- static image or very light loop
- swipe/scroll
- no hover-dependent content

Example:

**The Desert Story**  
*Petra, Wadi Rum and nights beneath the stars.*

CTA:
**Explore the Story**

German:
localized title + natural German CTA.

---

# 17. Most Popular Tours

After Story Collections.

H2:
# Stories Travelers Love

German:
# Beliebte Jordanien-Reisen

Tour cards show:
- SEO-friendly title
- Story subtitle
- route
- duration
- starting price / pricing basis
- image
- rating only if genuine
- availability/featured badge if admin-enabled

Do not overload cards with text.

---

# 18. Build Your Own Story

Large immersive section.

English:
# Your Jordan. Your Pace. Your Story.

Supporting:
**Tell us how you want to travel, and we will help shape the journey.**

CTA:
**Build My Jordan Story**

German working:
# Jordanien in Ihrem Tempo.

Supporting:
**Sagen Sie uns, wie Sie reisen möchten – wir gestalten daraus Ihre persönliche Route.**

CTA:
**Meine Jordanien-Reise planen**

---

# 19. Why Jordan Story Tours

Use proof rather than generic claims.

Potential proof blocks:
- local Jordan expertise
- private/customizable tours
- clear inclusions
- verified memberships if current
- direct support
- trusted drivers/guides
- authentic reviews
- multilingual assistance

Do not publish membership logos until current authorization is verified.

---

# 20. Traveler Stories

Heading:
# Traveler Stories

German:
# Reisegeschichten unserer Gäste

Use authentic reviews only.

Optional visual treatment:
review attached to destination/tour imagery.

Never fabricate reviews.

---

# 21. Suggested Journeys by Time

Section:

# How Much Time Do You Have?

Options:
- 1 Day
- 3 Days
- 5 Days
- 7 Days
- 10+ Days

German:
# Wie viel Zeit haben Sie?

Each links to an itinerary/selection page.

This section serves UX + SEO + AEO.

---

# 22. Travel Guide

Heading:
# Know Jordan Before You Go

German:
# Jordanien vor der Reise entdecken

Feature useful guides:
- best time to visit Jordan
- how many days in Jordan
- Petra planning
- Wadi Rum overnight
- Dead Sea practical guide

Cards must connect to genuine guide pages.

---

# 23. FAQ Section

Use real traveler questions.

Examples:
- How many days do I need in Jordan?
- Can I visit Petra and Wadi Rum together?
- Do you offer private tours?
- Can you customize an itinerary?
- Do you provide airport transfers?
- Which languages are available?

German versions should answer in natural German.

Do not build the section for FAQ rich results; Google removed that feature in 2026. Build it because it is genuinely useful and AEO-friendly.

---

# 24. Final CTA

Full-width closing scene.

English:
# Ready to Begin Your Story?

Buttons:
**Explore Jordan Tours**
**Build My Jordan Story**

German:
# Bereit für Ihre Jordanien-Reise?

Buttons:
**Jordanien-Reisen entdecken**
**Individuelle Reise planen**

Visual:
subtle Wadi Rum/Petra dusk scene.

Do not repeat heavy WebGL here.

---

# 25. Technical Implementation Direction

Preferred:
- semantic HTML
- CSS
- optimized media
- GSAP + ScrollTrigger for scroll choreography
- optional Three.js/WebGL only for specific transitions requiring depth
- modern responsive image formats
- server-rendered primary content

Do not make Three.js the foundation of the entire homepage.

---

# 26. Scroll Timeline Architecture

Recommended conceptual structure:

```text
<section id="scroll-world">
  <div class="sticky-stage">
    <scene-petra-siq />
    <scene-petra-treasury />
    <transition-desert />
    <scene-wadi-rum />
    <transition-dead-sea />
    <scene-dead-sea />
    <transition-map />
    <scene-jordan-map />
  </div>
</section>

<main>
  <story-collections />
  <popular-tours />
  <custom-story />
  <why-us />
  <traveler-stories />
  <duration-selector />
  <travel-guide />
  <faq />
  <final-cta />
</main>
```

Actual framework implementation may vary.

---

# 27. Scroll Length

Do not make the cinematic sequence excessively long.

Target:
approximately 4–6 viewport heights on desktop as a starting point.

Test usability.

Mobile should likely be shorter.

The visitor should reach actual tours quickly enough to remain conversion-friendly.

---

# 28. Skip / Exit Behavior

Provide natural ways to move past the animation:
- normal fast scrolling
- persistent nav
- primary booking CTA
- optional subtle “Explore Tours” shortcut

Do not force “Watch intro.”

---

# 29. Reduced Motion

If `prefers-reduced-motion: reduce`:

- remove simulated camera travel
- use simple image transitions or a static editorial hero
- keep all copy
- keep navigation
- keep map accessible
- preserve Story narrative

Reduced motion is not a lower-quality experience.

---

# 30. Mobile Experience

Mobile must be designed separately, not merely shrunk.

Recommended:
- 3–4 major scene transitions instead of all desktop layers
- portrait-first crops
- less particle motion
- no expensive shader unless device capability is confirmed
- large text with safe areas
- touch-friendly map
- fast access to tours/booking

Do not load desktop-only media on mobile.

---

# 31. Low-Capability Device Fallback

Detect capability carefully and progressively enhance.

Base experience:
- static Petra hero
- image transition cards for Wadi Rum/Dead Sea
- standard Jordan map
- same content and CTAs

Do not block access because WebGL fails.

---

# 32. Loading Strategy

Priority:
1. logo/navigation
2. first Petra hero visual
3. hero text
4. critical font subset/system fallback
5. first animation code
6. later scenes
7. below-fold content

Use:
- responsive images
- AVIF/WebP
- compressed short video only if needed
- lazy loading below the current visual horizon
- prefetch/preload selectively

Avoid downloading every scene at full quality before first paint.

---

# 33. Core Web Vitals Guardrails

Design target:
- fast LCP
- stable layout
- responsive interaction
- no long main-thread blocks

Rules:
- animation layers use explicit dimensions
- avoid large layout recalculation
- split JS
- remove unused animation plugins
- avoid giant DOM
- minimize third-party scripts
- performance-test actual mobile hardware

---

# 34. Fonts

Typography must support:
- English
- German special characters
- numerals
- responsive display sizes

Do not use decorative fonts that damage readability/performance.

German copy often runs longer than English, so components must expand gracefully.

---

# 35. English/German Component Rule

Never hard-code text inside animation timelines.

All text must come from localization content/data.

Example:

```text
hero.petra.title.en
hero.petra.title.de
hero.wadiRum.subtitle.en
hero.wadiRum.subtitle.de
```

Animation should target component identifiers, not language-specific string lengths.

---

# 36. Admin-Controlled Homepage Content

Admin should manage:
- featured tours
- Story order
- Story active/inactive
- hero/scene media where appropriate
- homepage supporting copy
- traveler reviews
- featured guides
- final CTA
- English/German versions

Do **not** allow admin to alter the scroll engine itself from ordinary CMS fields.

---

# 37. Media Asset Requirements

Request from client:
- Petra Siq vertical and landscape
- Treasury reveal angles
- Wadi Rum wide shots
- Wadi Rum sunset/night
- jeep/camel details
- Dead Sea wide shots
- Amman/Jerash/Aqaba supporting media
- authentic guests/guides
- vehicles
- camps
- hotels
- drone footage where legally obtained
- rights/usage confirmation

For every asset record:
- owner
- usage permission
- location
- language-independent description
- focal point
- alt text EN
- alt text DE

---

# 38. Image Generation Rule

AI-generated visuals may be used only for clearly decorative transitions or concept art if approved.

Do not represent synthetic imagery as genuine tour photography.

Primary destination/tour sales content should favor authentic photography.

---

# 39. Analytics Events

Track:
- hero scroll completion
- skip to tours
- destination map interaction
- Story Collection click
- tour-card click
- build-your-story click
- booking start
- language switch
- guide click

Break down by:
- EN / DE
- device
- source
- landing page

Do not use analytics to create intrusive UX.

---

# 40. Accessibility

Mandatory:
- keyboard navigable menu
- keyboard/focusable map interactions
- descriptive link labels
- sufficient contrast
- meaningful heading hierarchy
- reduced-motion support
- non-visual alternative to visual-only information
- correct language attribute per page (`lang="en"` / `lang="de"`)
- no text embedded only inside images

---

# 41. SEO/AEO/GEO Compatibility

The scroll world is visual storytelling.

The actual searchable information must remain:
- semantic HTML
- crawlable
- indexable
- internally linked
- server-rendered or reliably rendered
- not hidden behind canvas interaction

The homepage must clearly explain:
- who Jordan Story Tours is
- what it offers
- where it operates
- major destinations
- tour types
- custom tours
- transportation
- how to book

---

# 42. No Audio Autoplay

Do not autoplay sound.

Optional ambient audio may exist only:
- muted by default
- activated explicitly by user
- easy to disable

The site must work fully without audio.

---

# 43. Visual Quality Target

Reference feeling:

**cinematic destination documentary × premium travel editorial × interactive storytelling**

Avoid:
- generic travel-template hero
- spinning 3D globe
- excessive glass cards
- random particles everywhere
- animation for animation's sake
- long intro before useful content
- fake loading screens

---

# 44. Success Test

A successful first-time visitor should be able to say:

1. “This feels like Jordan.”
2. “I understand what this company sells.”
3. “I know where I want to go.”
4. “I can find a tour quickly.”
5. “I can book or request a custom trip.”
6. “The German version feels like a real German website, not a translation.”

---

# 45. Final Experience Principle

The scroll world should create emotion.

The page below it should create confidence.

The booking journey should create action.

The brand connects them all:

# Your Story Begins Here.
