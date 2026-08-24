# 06 — Design System & Animation Language
## Jordan Story Tours — English + German

**Purpose:** Define the visual identity and interaction system for the redesigned website after the immersive 3D introduction.

**Core principle:** The website should feel like a premium Jordan travel journal, not a generic tour-booking template.

---

# 1. Design Personality

Jordan Story Tours should feel cinematic, warm, earthy, premium, editorial, authentic, adventurous, calm, highly readable and modern without feeling “techy”.

Avoid generic blue travel-agency templates, excessive gold styling, glassmorphism everywhere, neon effects, crowded booking widgets and fake luxury styling disconnected from Jordan.

---

# 2. Visual Inspiration

Take cues from Petra sandstone, Wadi Rum earth and sunset, Dead Sea mineral tones, Jordanian desert night, route maps, local stone architecture, Bedouin textiles and Jordanian hospitality.

Use these as inspiration, not literal decoration everywhere.

---

# 3. Primary Color System

- Petra Sandstone: `#A85F43`
- Deep Desert: `#302A27`
- Warm Limestone: `#F4EFE7`
- Desert Sand: `#D8B98F`
- Wadi Rum Clay: `#8B4B34`
- Dead Sea Mist: `#DDE2DF`
- Night Sky: `#151B23`
- White: `#FFFFFF`

Use sandstone and clay as accents, limestone as the main light surface, Deep Desert as primary text/dark surface, and Night Sky for Wadi Rum/night sections.

---

# 4. Story Collection Accent Logic

- Ancient Story → sandstone / limestone
- Desert Story → clay / deep sand
- Sacred Story → warm limestone / muted olive-gold
- Red Sea Story → muted deep-water blue-green
- Adventure Story → earth / mineral green
- Essential Story → neutral sandstone
- Complete Story → Deep Desert
- Luxury Story → Night Sky + limestone

Story colors are secondary cues only.

---

# 5. Typography Strategy

Use a refined serif or high-character display face for Story headlines, cinematic sections and destination titles.

Use a highly readable modern sans-serif for navigation, tour details, booking, forms and practical information.

Typography must fully support English and German.

---

# 6. Typography Hierarchy

- Hero H1 → cinematic, one or two lines
- Page H1 → SEO-first page title
- Story subtitle → emotional brand layer
- H2 → editorial section heading
- H3 → cards / itinerary sections
- Body → comfortable reading width
- Eyebrow → small uppercase location/category label

Example:

# Petra & Wadi Rum Tour from Amman
**Two Icons. One Story.**

---

# 7. German Typography Rules

German often needs more space than English.

Components must allow longer headings, flexible button widths, natural wrapping, umlauts and ß, and should never shrink text just to force German into the English layout.

German is a first-class layout.

---

# 8. Layout

Desktop:
- generous editorial spacing
- max content width around 1200–1400px
- narrower text columns than media

Tablet:
- reduced margins
- preserved hierarchy

Mobile:
- single-column first
- prominent CTA
- no dependency on sidebars

---

# 9. Header

Desktop header is transparent over the immersive 3D scene.

After leaving the 3D hero it becomes a warm solid/light surface with logo, navigation, language switcher and Check Availability CTA.

Mobile:
- logo
- language selector
- menu
- compact booking CTA where practical

---

# 10. Navigation

English:
- Jordan Tours
- Destinations
- Jordan Stories
- Travel Guide
- About
- Contact

German:
- Jordanien-Reisen / final keyword-led wording
- Reiseziele
- Jordan Stories / final localized wording
- Reiseführer
- Über uns
- Kontakt

Use `EN | DE`; flags are not the only language indicator.

---

# 11. Buttons

Primary examples:
- Check Availability
- Explore Tours
- Start My Jordan Story

Secondary:
- View Itinerary
- Explore Petra

Motion should be subtle: slight arrow shift or translation only. No bounce or glow.

Touch targets should be at least about 44px high.

---

# 12. Story CTA Rule

Expressive:
- Choose Your Story →
- Begin the Desert Story →

Transactional:
- Confirm Booking
- Pay Deposit
- Check Availability

Clarity always wins in payment/legal flows.

---

# 13. Tour Cards

Show:
- image
- SEO-focused title
- Story subtitle
- duration
- route
- starting price + basis
- genuine rating if available
- one meaningful badge maximum
- CTA

Example:

**Petra & Wadi Rum Tour from Amman**  
*Two Icons. One Story.*

1 Day  
Amman → Petra → Wadi Rum  
From $275

**Explore Tour**

---

# 14. Tour Card Motion

Desktop:
- image shifts/zooms very slightly
- CTA arrow moves subtly
- optional route line animates

No heavy tilt or rotation.

Mobile must never depend on hover.

---

# 15. Destination Cards

Large editorial photography.

Example:

**PETRA**  
*A Story Carved in Stone*

Use only subtle image depth.

---

# 16. Story Collection Cards

Example:

**The Desert Story**  
Petra · Wadi Rum · Desert Camps

**Follow the desert beyond the horizon.**

Story cards may use light motion/media but must remain performant.

---

# 17. Itinerary Design

Treat itinerary days as Story chapters while keeping practical clarity.

Example:

### DAY 3
# A Story Carved in Stone
**Petra**

Then show:
- description
- driving
- meals
- accommodation
- included activities
- optional items

---

# 18. Itinerary Motion

As the visitor scrolls:
- route line draws gradually
- active day marker changes
- destination imagery enters gently

Use lightweight GSAP or IntersectionObserver.

The itinerary remains usable with reduced motion.

---

# 19. Route Visualization

Use accurate Jordan geography.

Display start, stops, end, overnights and optional activities where relevant.

No fake decorative route maps.

---

# 20. Booking Form Design

Multi-step structure:

**1 Tour → 2 Journey → 3 Traveler → 4 Review**

Rules:
- one clear question group per step
- labels above inputs
- large touch-friendly controls
- persistent tour summary on desktop
- compact summary on mobile
- all validation in English + German

---

# 21. Form States

Support normal, focus, filled, error, disabled and success states.

Do not rely on red alone for errors.

---

# 22. Price Display

Always show pricing basis.

**From $275**  
`per person / per vehicle / per group`

German:
**Ab 275 $** plus naturally localized pricing basis.

Do not show “From” unless a valid minimum exists.

---

# 23. Badges

Possible:
- Popular
- Private
- New
- Limited Availability
- Seasonal
- Best for First-Time Visitors

Avoid fake urgency and permanent “HOT” styling.

---

# 24. Reviews

Section name:

**Traveler Stories**

German:
**Reisegeschichten unserer Gäste**

Show only genuine reviews and ratings.

---

# 25. FAQ

Use an accessible accordion with clear questions, concise answers and minimal animation.

English and German answers are maintained independently.

---

# 26. Travel Guide Design

Travel guides should feel like an editorial magazine.

Use:
- strong hero media
- answer-first summary
- table of contents
- readable long-form text
- destination cards
- related tours
- practical information blocks
- review/update information where useful

Avoid generic blog clutter.

---

# 27. Practical Information Blocks

Possible:
- Best Time
- Driving Time
- What to Bring
- Accessibility
- Children
- Entrance Information
- Seasonal Notes

Use structured cards without turning every sentence into an icon tile.

---

# 28. Iconography

Use simple line icons for duration, travelers, pickup, route, meals, hotel, guide, vehicle, entrance, language, walking, swimming and camping.

Avoid cartoon tourism icons.

---

# 29. Image Treatment

Photography leads the design.

Rules:
- authentic imagery preferred
- cinematic crops
- respect focal point
- full-bleed where useful
- avoid arbitrary overlays
- do not darken every image
- do not place text where contrast is unreliable

---

# 30. Motion Language

Animations should represent travel/discovery:

- route → line draw
- journey → forward motion
- discovery → masked reveal
- desert → sand drift
- water → ripple
- night → stars appearing
- chapter → sequential reveal

Avoid spin, bounce, wobble, elastic menus and random floating shapes.

---

# 31. Motion Timing

- micro-interactions: ~150–300ms
- card/image transitions: ~300–600ms
- editorial reveal: ~400–800ms
- scroll-driven animation: tied to scroll

Never make users wait for animation completion.

---

# 32. Page Entry

Use sparingly:
- title fades/slides slightly
- media reveals
- route draws

No long page loaders.

---

# 33. Scroll Reveal

Progressive enhancement only.

Possible:
- slight fade
- 16–32px movement
- mask reveal

Do not animate every paragraph.

---

# 34. Parallax

Allowed selectively on destination heroes, selected Story sections and layered media.

Reduce or disable on mobile.

---

# 35. Map Styling

Map identity:
- warm neutral land
- minimal borders
- clear destination markers
- highlighted Story routes
- no unnecessary road-map clutter

Desktop: hover/focus preview  
Mobile: tap → bottom sheet/card

Normal HTML links must always exist.

---

# 36. Mobile Sticky CTA

Tour pages may use:

**Check Availability**

German:
**Verfügbarkeit prüfen**

Optional:
**From $275**

It must not obscure content or privacy controls.

---

# 37. Mobile Tour Page Order

1. Hero
2. Title
3. Story subtitle
4. Price / duration
5. CTA
6. Quick facts
7. Itinerary
8. Inclusions / exclusions
9. Practical information
10. FAQs
11. Related tours

---

# 38. Desktop Tour Page

Main content + optional sticky booking summary.

Summary:
- price
- duration
- date/travelers shortcut
- CTA
- approved contact options

Avoid a booking widget that overwhelms the page.

---

# 39. Language Switching

Open equivalent language pages whenever available.

English Petra tour → German Petra tour.

Never send every language switch to the homepage.

---

# 40. German Layout QA

Check:
- button wrapping
- headings
- breadcrumbs
- filters
- tour metadata
- form labels/errors
- date/number formatting
- navigation width
- long compound words

Never reduce German font size merely to force a fit.

---

# 41. Accessibility

Mandatory:
- contrast
- keyboard operation
- visible focus
- semantic forms
- adequate target size
- reduced motion
- meaningful alt text
- logical headings
- skip navigation
- no hover-only essential information

---

# 42. Design Tokens

Use reusable tokens rather than hard-coded repeated values.

Examples:
- `color.brand.petra`
- `color.surface.limestone`
- `color.text.primary`
- `color.story.desert`
- `radius.card`
- `radius.button`
- `space.section`
- `font.display`
- `font.body`
- `motion.fast`
- `motion.normal`
- `motion.editorial`

---

# 43. Component Library

Build reusable components:

- Header
- Mobile Navigation
- Language Switcher
- Primary Button
- Secondary Button
- Story CTA
- Tour Card
- Destination Card
- Story Card
- Review Card
- Guide Card
- FAQ
- Itinerary Timeline
- Route Map
- Price Block
- Tour Facts
- Inclusion List
- Booking Stepper
- Form Field
- Select
- Date Picker wrapper
- Modal / Bottom Sheet
- Alert / Error
- Breadcrumb
- Pagination
- Footer

Every public component supports EN + DE.

---

# 44. Loading States

Use subtle skeletons only where needed.

Booking example:

EN: **Sending your request…**  
DE: **Ihre Anfrage wird gesendet…**

Avoid spinner-heavy design.

---

# 45. Empty States

Examples:
- no reviews → hide empty review carousel
- no related tours → show custom-tour CTA
- no German translation → follow the language policy rather than showing blank content

---

# 46. Error States

EN:
**We couldn't send your request. Please try again or contact us directly.**

German:
professionally localized equivalent.

Preserve entered form data where possible.

---

# 47. Performance Design Rule

Every visual choice must consider media weight, JS cost, layout shift, mobile GPU and font loading.

A beautiful component that damages booking performance is a failed component.

---

# 48. Animation Performance

Prefer:
- transforms
- opacity
- WebGL only where justified

Avoid:
- layout-heavy animation
- huge blurred surfaces
- many simultaneous shadows
- SVG animation everywhere

---

# 49. Story Branding Rule

Use “Story” most strongly in:
- homepage
- Story Collections
- destination storytelling
- itinerary chapters
- custom-tour flow
- Traveler Stories
- final CTA

Do not repeat it in every button and sentence.

---

# 50. Design QA Checklist

- [ ] Brand system followed
- [ ] Story language used appropriately
- [ ] English reviewed
- [ ] German reviewed
- [ ] Mobile reviewed
- [ ] Tablet reviewed
- [ ] Desktop reviewed
- [ ] Keyboard reviewed
- [ ] Reduced motion reviewed
- [ ] Image optimization reviewed
- [ ] CTA clarity reviewed
- [ ] Pricing basis visible
- [ ] No factual information hidden only in imagery
- [ ] Core Web Vitals impact reviewed

---

# 51. Final Visual Principle

The immersive hero says:

**Feel Jordan.**

The design system says:

**Trust Jordan Story Tours.**

The tour pages say:

**Understand your journey.**

The booking experience says:

**Start it easily.**

Everything should feel like one continuous Story.
