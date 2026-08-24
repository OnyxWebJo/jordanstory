# 07 — Tour Page System
## Jordan Story Tours — English + German

**Purpose:** Define one reusable, conversion-focused, SEO/AEO/GEO-ready system for every Jordan Story Tours tour page.

**Core rule:** Tour pages are not isolated brochures. Each page must combine accurate trip information, the Jordan Story brand, search intent, destination entities, pricing, booking, trust, and related content.

---

# 1. Tour Page Goals

Every tour page must answer, quickly:

1. What is this tour?
2. Where does it start and end?
3. Which places will I visit?
4. How long is it?
5. What does it cost?
6. What is included?
7. What is excluded?
8. Is it private or shared?
9. Can I customize it?
10. How do I book?
11. Why should I trust Jordan Story Tours?

The Story layer adds emotion, but must never hide practical information.

---

# 2. Tour Page Identity

Every tour has two naming layers.

## Search / Product Title
Clear and query-oriented.

Example:

# Petra & Wadi Rum Tour from Amman

## Story Subtitle
Brand/emotional layer.

Example:

**Two Icons. One Story.**

This structure allows SEO clarity without losing the Jordan Story identity.

---

# 3. URL Architecture

English example:

`/tour/petra-wadi-rum-tour-from-amman/`

German example:

`/de/touren/petra-wadi-rum-tour-ab-amman/`

Final German slug must follow actual German keyword research.

Rules:
- short
- descriptive
- stable
- lowercase
- hyphenated
- no IDs in public URLs
- no language query parameters
- redirect old URLs when migrating

---

# 4. Tour Hero

Hero should contain:

- authentic tour/destination media
- breadcrumbs
- H1
- Story subtitle
- duration
- route summary
- private/shared status
- starting price + basis
- genuine rating/review count if available
- Check Availability CTA

Desktop may use a split or full-width editorial layout.

Mobile must expose title, price, duration and CTA quickly.

---

# 5. Example Hero

**PETRA · WADI RUM**

# Petra & Wadi Rum Tour from Amman

**Two Icons. One Story.**

**1 Day**  
Amman → Petra → Wadi Rum → Amman  
**Private Tour**  
**From $___ per person / vehicle / group**

[Check Availability]

All values come from verified tour/admin data.

Never hard-code invented prices.

---

# 6. Answer-First Summary

Immediately after the hero provide a concise answer.

Example structure:

### About This Journey

**This private day tour from Amman combines Petra and Wadi Rum in one itinerary.** Continue with verified departure, transport, attraction and timing information.

The first 1–2 sentences should answer the primary search intent directly.

Then the Story voice can expand the experience.

---

# 7. Quick Facts

Structured quick-facts component:

- Duration
- Starting Point
- Ending Point
- Destinations
- Tour Type
- Transportation
- Guide arrangement
- Meals
- Accommodation
- Languages
- Pickup
- Accessibility/suitability where verified

Only show facts that exist.

Do not display empty placeholders.

---

# 8. Story Opening

After practical orientation, introduce the emotional layer.

Example:

## Two Icons. One Story.

**Walk through a city carved into rose-red stone, then follow the road into the vast desert landscape of Wadi Rum.**

Story copy must remain grounded in the actual itinerary.

German receives native-quality localization rather than literal translation.

---

# 9. Route Map

Every suitable tour should have a route visualization.

Example:

```text
Amman
  ↓
Petra
  ↓
Wadi Rum
  ↓
Amman
```

Interactive map may show:
- route
- stops
- overnight locations
- optional activities
- pickup/drop-off

Map data must use real coordinates.

The route must also be available as text for accessibility and SEO.

---

# 10. Itinerary Structure

Itinerary is the central tour content.

## One-Day Tour

Use sequential stops.

Example:

### Stop 1 — Departure from Amman
Practical + Story description.

### Stop 2 — Petra
Activities, timing, guide arrangement, entrance status and verified details.

### Stop 3 — Wadi Rum
Verified experience details.

### Stop 4 — Return / Drop-off
End location and approximate conditions where appropriate.

## Multi-Day Tour

Use Story chapters.

### DAY 1
# The Journey Begins
**Amman → Petra**

### DAY 2
# A Story Carved in Stone
**Petra**

### DAY 3
# Beneath a Million Stars
**Wadi Rum**

Do not force poetic titles if they reduce clarity.

---

# 11. Itinerary Data Fields

Each itinerary day/stop should support:

- internal ID
- day number / sequence
- EN title
- DE title
- EN Story subtitle
- DE Story subtitle
- EN description
- DE description
- start location
- end location
- destinations
- approximate driving duration if verified
- activities
- meals
- accommodation
- guide information
- entrance information
- optional extras
- notes
- media
- map coordinates
- active/inactive

---

# 12. Itinerary Motion

Desktop:
- Story route line draws as user scrolls
- active day/stop marker changes
- destination media reveals gently

Mobile:
- simpler vertical timeline
- no expensive parallax requirement

Reduced motion:
- static timeline

Animation never changes access to the itinerary text.

---

# 13. Inclusions

Dedicated section:

## What's Included

Use explicit items.

Examples only when verified:
- private transportation
- hotel pickup/drop-off
- English-speaking driver
- local guide
- entrance fees
- accommodation
- meals
- Wadi Rum jeep experience

Never infer inclusion from descriptive copy.

Admin data is the source of truth.

---

# 14. Exclusions

## What's Not Included

Possible verified items:
- flights
- visa
- Jordan Pass
- meals not specified
- personal expenses
- tips
- optional activities

Avoid vague “and anything not mentioned” as the only exclusion explanation.

---

# 15. Optional Extras

Optional activities/services need their own data.

Possible:
- additional guide
- airport transfer
- upgraded accommodation
- extra Wadi Rum activity
- Aqaba extension
- additional night
- meal upgrade

Each optional item may contain:
- price
- pricing basis
- language
- availability rules
- description
- admin active/inactive status

---

# 16. Price System

Tour price is dynamic admin data, not editorial text.

Support pricing models such as:

- per person
- per group
- per vehicle
- tier by travelers
- seasonal
- accommodation category
- optional supplements
- child pricing
- single supplement
- custom quote

Only implement models actually required by extracted/current tours.

---

# 17. Price Tier Example

Conceptual:

| Travelers | Price basis | Amount |
|---|---|---:|
| 1 | total/private vehicle | admin value |
| 2 | per person | admin value |
| 3–4 | per person | admin value |
| 5–7 | per person | admin value |

This is a data model example, not Jordan Story Tours pricing.

---

# 18. Currency

Admin should define:
- base currency
- displayed currencies if supported
- whether conversion is informational
- exchange-rate source if conversion is implemented

Do not silently mix currencies.

English and German pages may show the same base currency unless business requirements specify otherwise.

---

# 19. Price History

Recommended admin audit trail:

- old price
- new price
- changed by
- timestamp
- reason/note
- effective date

Useful for reports and avoiding pricing mistakes.

---

# 20. Availability

Tour may support:

- available daily
- selected weekdays
- seasonal availability
- blackout dates
- request-only
- temporarily unavailable

Admin controls availability.

Public site must not claim real-time availability unless the system genuinely knows it.

Use **Check Availability** when booking still requires confirmation.

---

# 21. Booking CTA

Primary:

**Check Availability**

German:

**Verfügbarkeit prüfen**

Secondary possibilities:
- Ask a Question
- Customize This Tour
- WhatsApp us, if approved

Do not present a request as a confirmed booking until the system actually confirms it.

---

# 22. Sticky Booking Summary — Desktop

Optional right-side panel:

- tour title
- duration
- price
- pricing basis
- travelers
- date
- CTA
- custom-tour link

Panel may become sticky after hero.

Do not cover the itinerary.

---

# 23. Sticky CTA — Mobile

Bottom bar may show:

**From $___**  
**Check Availability**

It must:
- respect safe areas
- not cover cookie/privacy controls
- disappear/adjust when keyboard is open
- remain accessible

---

# 24. Booking Entry

Clicking Check Availability should preserve the tour context automatically.

Pass:
- tour ID
- language
- tour title
- selected price tier if known
- date if selected
- travelers if selected
- source page
- campaign attribution

Do not make the visitor re-select the tour.

---

# 25. Customization

Every relevant tour can offer:

## Make This Story Yours

Possible options:
- add/remove destinations
- extra nights
- hotel preference
- airport pickup
- guide language
- dietary/request notes
- family requirements
- accessibility requirements

CTA:

**Customize This Journey**

German localized naturally.

Customization creates an inquiry/request, not an instant price unless pricing logic supports it.

---

# 26. Accommodation

For multi-day tours, display accommodation accurately.

Support:
- hotel category
- hotel name if guaranteed
- “or similar” only when true
- camp type
- room basis
- meal basis
- upgrade options

Do not advertise a specific hotel if it is merely an example.

---

# 27. Transportation

Tour page should state:

- vehicle type/category where guaranteed
- private/shared
- air conditioning if guaranteed
- pickup area
- drop-off area
- driver language/role
- luggage limits if relevant

Do not call a driver a licensed tour guide unless that is accurate.

---

# 28. Guide Information

Clarify:
- driver only
- local guide at destination
- accompanying guide
- optional guide
- guide language

This is important for traveler expectations and search answers.

---

# 29. Entrance Fees / Jordan Pass

The system needs explicit fields:

- entrance included?
- Jordan Pass recommended/relevant?
- attraction-specific status
- notes

Do not automatically claim the Jordan Pass covers an item without current verification.

High-change information should have review dates.

---

# 30. Meals

Use standardized meal fields:

- Breakfast
- Lunch
- Dinner

Per itinerary day.

If a meal is not included, do not imply it from hotel/camp copy.

---

# 31. Practical Information

Tour-specific blocks may include:

- departure time
- approximate return time
- walking level
- clothing
- weather considerations
- footwear
- luggage
- children
- accessibility
- seasonal restrictions
- Ramadan/holiday operational notes where relevant
- border requirements for cross-border tours

Facts must be maintained.

---

# 32. Suitability

Optional tags:

- Families
- Couples
- Seniors
- Adventure
- First-Time Visitors
- Religious Travel
- Luxury
- Active Travelers

Only use meaningful classifications.

Avoid pretending suitability is universal.

---

# 33. What to Bring

Tour-specific list.

Examples where appropriate:
- walking shoes
- sun protection
- water
- warm layer for desert nights
- swimwear
- passport

Do not copy the same generic list to every tour without review.

---

# 34. Tour Gallery

Use:
- authentic photos
- destination images
- accommodation images if accurate
- vehicle/camp images where useful
- video where available

Admin stores:
- source
- rights
- alt EN
- alt DE
- caption EN
- caption DE
- focal point
- tour/destination associations

---

# 35. Video

Optional original video may appear in tour pages.

Requirements:
- no autoplay sound
- optimized poster
- lazy load
- transcript/context where useful
- accessible controls
- valid VideoObject markup only when appropriate

---

# 36. Reviews

Show genuine reviews relevant to the tour when possible.

Fields:
- rating
- title
- review
- traveler display name
- country if allowed
- travel date
- source
- verified/imported/manual status
- tour
- language
- admin moderation status

Never generate reviews with AI.

---

# 37. Tour FAQ

Each tour should have genuinely relevant questions.

Examples:
- Is this tour private?
- How long do we spend in Petra?
- Are entrance fees included?
- Is a guide included?
- Where will you pick me up?
- Can I customize the route?
- Is this suitable for children?
- What should I wear?

Answers come from tour data.

German questions/answers are localized independently.

---

# 38. Related Destinations

Tour page links to canonical destination pages.

Example:
- Petra
- Wadi Rum

This strengthens UX, internal linking and entity relationships.

---

# 39. Related Stories

Example:

**Part of The Desert Story**

Then link to the Story Collection.

A tour may belong to more than one Story if genuinely appropriate, but one can be primary.

---

# 40. Related Tours

Use meaningful relationships:

- similar duration
- same destinations
- same Story
- upgrade/extension
- shorter alternative
- longer alternative

Avoid random “You may also like” selection.

---

# 41. Travel Guide Links

Contextually link to guides.

Example:
Petra tour → Best Time to Visit Petra  
Wadi Rum overnight → What to Expect in Wadi Rum  
Multi-day Jordan tour → How Many Days Do You Need in Jordan?

Do not stuff internal links.

---

# 42. Trust Section

Possible verified elements:

- years/local experience
- real traveler reviews
- company registration
- memberships
- support channels
- cancellation policy
- secure handling of inquiries/payment
- licensed/qualified partners where applicable

Never display unverifiable badges.

---

# 43. Cancellation / Booking Policy

Tour page should summarize relevant rules and link to full policy.

Admin may associate:
- standard policy
- special tour policy
- seasonal policy

The booking review step must show the applicable policy.

---

# 44. Tour Status

Admin statuses:

- Draft
- Review
- Published
- Hidden
- Seasonal
- Temporarily Unavailable
- Archived

Archived tours should have an SEO migration/redirect decision.

Do not simply delete ranking URLs.

---

# 45. Translation Status

Per tour:

English:
- Draft
- Review
- Published

German:
- Not Started
- Draft
- Needs Review
- Published
- Outdated

If protected source data changes, German may automatically become **Needs Review**.

---

# 46. Protected Facts

These must not be invented or casually rewritten:

- price
- duration
- route
- pickup/drop-off
- inclusions
- exclusions
- entrance fees
- guide arrangement
- accommodation
- meals
- vehicle
- availability
- border/visa requirements
- cancellation terms

Editorial AI can improve presentation around verified facts but cannot change them.

---

# 47. Admin Tour Editor — Core Tabs

Recommended tabs:

1. Overview
2. Pricing
3. Itinerary
4. Inclusions & Exclusions
5. Accommodation
6. Transport & Guides
7. Practical Info
8. Media
9. FAQs
10. SEO
11. German Translation
12. Related Content
13. Availability
14. Booking Rules
15. History

---

# 48. Overview Fields

- Tour ID
- Internal name
- EN title
- DE title
- EN Story subtitle
- DE Story subtitle
- slug EN
- slug DE
- primary Story
- secondary Stories
- duration
- tour type
- start location
- end location
- destinations
- short summary EN
- short summary DE
- full introduction EN
- full introduction DE
- featured
- status

---

# 49. SEO Fields

Per language:

- SEO title
- meta description
- canonical override only if required
- primary query
- secondary queries
- search intent
- index/noindex
- social title
- social description
- social image
- breadcrumb label

Structured data should be generated from verified tour fields where possible rather than manually typed JSON.

---

# 50. Schema / Entity Layer

Tour pages should expose accurate machine-readable relationships.

Potential semantic relationships:

**Jordan Story Tours**
→ offers tour

**Tour**
→ starts in Amman  
→ visits Petra  
→ visits Wadi Rum  
→ has duration  
→ has current pricing information where semantically appropriate  
→ has reviews only when genuine

Use supported/appropriate structured data types based on current search-engine guidance.

Do not invent schema properties.

---

# 51. Breadcrumbs

English example:

Home → Jordan Tours → Petra Tours → Petra & Wadi Rum Tour from Amman

German equivalent should use the German hierarchy.

Breadcrumbs:
- visible
- clickable
- structured
- language-consistent

---

# 52. Canonical / Hreflang

English tour canonical → English URL.

German tour canonical → German URL.

If both are true equivalents:
- `en`
- `de`
- self references
- optional x-default as architecture requires

Do not canonical German pages to English.

---

# 53. Page Title Formula

Do not mechanically use one formula for every page.

Typical:

**[Tour Name] | Jordan Story Tours**

But titles should be individually optimized for:
- intent
- clarity
- click appeal
- reasonable length

Brand can appear at the end where useful.

---

# 54. Meta Description

Write natural, specific descriptions using actual facts.

Mention:
- key destinations
- departure point
- private/custom aspect where true
- meaningful differentiator

Do not keyword-stuff.

English and German are written separately.

---

# 55. Heading Rules

One primary H1.

H2 examples:
- About This Journey
- Your Itinerary
- What's Included
- What's Not Included
- Accommodation
- Practical Information
- Frequently Asked Questions
- Traveler Stories
- Related Jordan Stories

Do not choose headings solely for keywords.

---

# 56. AEO Answer Blocks

Use concise answers for high-intent questions.

Example:

### Can you visit Petra and Wadi Rum in one day from Amman?

**Yes, this itinerary combines Petra and Wadi Rum in a single day from Amman.** Then explain the actual route and realistic implications using verified data.

Answer first. Explain second.

---

# 57. GEO / AI Discovery

Make tour facts explicit and internally consistent.

Avoid requiring systems to infer that:
- the tour starts in Amman
- Petra is visited
- Wadi Rum is visited
- transport is private
- price is per person

State facts clearly in visible text and structured data.

---

# 58. Story Branding + SEO Balance

Bad:

# Discover an Unforgettable Story

Search engines and travelers cannot tell what the product is.

Better:

# Petra & Wadi Rum Tour from Amman
**Two Icons. One Story.**

SEO clarity first. Brand emotion second.

---

# 59. English/German Content Parity

Priority tour pages launch in both languages.

German must include:
- title
- Story subtitle
- summary
- itinerary
- inclusions/exclusions
- practical info
- FAQs
- price labels
- booking interface
- policy summary
- metadata
- alt text
- structured-data text strings where localized

No half-German tour pages.

---

# 60. Booking Conversion Events

Track:
- tour_view
- gallery_interaction
- itinerary_engagement
- price_interaction
- check_availability_click
- customize_click
- booking_start
- booking_step_complete
- booking_submit
- WhatsApp/contact click if enabled
- language_switch

Include tour ID and language.

---

# 61. Admin Reports

Tour-level reports should show:

- page views
- organic entrances
- booking starts
- booking submissions
- confirmed bookings if integrated
- conversion rate
- revenue if tracked
- average travelers
- top countries
- EN vs DE
- top acquisition sources
- cancellations
- popular dates
- popular optional extras

---

# 62. Content Extraction Migration

For every current jordanstorytours.com tour:

1. extract current title
2. extract URL
3. extract description
4. extract itinerary
5. extract price/pricing tiers
6. extract inclusions
7. extract exclusions
8. extract duration
9. extract route
10. extract pickup/drop-off
11. extract guide details
12. extract entrance details
13. extract accommodation
14. extract meals
15. extract images
16. extract FAQs if present
17. extract booking fields/options
18. record uncertainties
19. preserve old URL
20. rewrite only after facts are structured

Never rewrite first and extract later.

---

# 63. Migration Evidence

Store for each extracted fact:

- source URL
- source section
- original text/value
- normalized value
- confidence
- requires client verification?
- verified by
- verification date

This prevents AI from silently changing tour operations.

---

# 64. Duplicate / Similar Tours

During extraction, detect:
- duplicate URLs
- nearly identical itineraries
- same tour with different titles
- outdated versions
- conflicting prices
- conflicting inclusions

Do not automatically merge.

Flag for business review.

---

# 65. Tour Content Rewrite Workflow

After extraction:

**Stage 1 — Facts**
Normalize protected data.

**Stage 2 — Search Intent**
Assign primary/secondary query.

**Stage 3 — Story Identity**
Assign Story Collection and emotional subtitle.

**Stage 4 — Rewrite**
Create useful original English copy.

**Stage 5 — AEO**
Add direct-answer sections and FAQs.

**Stage 6 — Internal Links**
Destinations, Stories, guides, related tours.

**Stage 7 — German**
Localize after English facts/content are approved.

**Stage 8 — QA**
SEO + facts + UX + language + mobile.

---

# 66. AI Rewrite Rules

AI may:
- improve readability
- reorganize content
- remove duplication
- propose Story subtitles
- create answer-first summaries
- suggest FAQ questions
- propose metadata

AI must not invent:
- operational facts
- history presented as fact without verification
- prices
- availability
- reviews
- guide credentials
- hotel standards
- entrance status
- driving times

---

# 67. Tour Page Performance

Do not let tour pages inherit the heavy homepage 3D system.

Tour pages use:
- optimized hero image/video
- lightweight route animation
- subtle scroll reveals
- lazy-loaded galleries
- minimal JS

The 3D homepage is the cinematic entrance; tour pages are optimized for decision-making and booking.

---

# 68. Mobile Performance

Prioritize:
- title
- price
- CTA
- itinerary
- booking

Lazy load:
- lower gallery media
- related tours
- map enhancements

Avoid autoplay video on mobile unless strongly justified.

---

# 69. No-JS / Failure Resilience

Critical content remains available:
- title
- summary
- itinerary
- price
- inclusions
- exclusions
- contact/booking fallback

Enhancements may fail without destroying the page.

---

# 70. Tour Page Acceptance Checklist

A tour cannot publish until:

- [ ] protected facts verified
- [ ] title matches actual product
- [ ] URL approved
- [ ] Story identity assigned
- [ ] price basis explicit
- [ ] duration correct
- [ ] route correct
- [ ] itinerary complete
- [ ] inclusions correct
- [ ] exclusions correct
- [ ] guide arrangement clear
- [ ] entrance status clear
- [ ] accommodation accurate
- [ ] booking works
- [ ] English reviewed
- [ ] German reviewed
- [ ] SEO metadata reviewed
- [ ] internal links added
- [ ] media rights checked
- [ ] mobile checked
- [ ] schema matches visible content
- [ ] canonical/hreflang checked
- [ ] old URL redirect mapped if needed

---

# 71. Final Tour Page Principle

A visitor should arrive from Google asking:

**“Is this the right Jordan tour for me?”**

The page should answer:

**Yes — and here is exactly what your journey looks like.**

Then Jordan Story Tours adds the emotional layer:

**This is not only an itinerary. It is the Jordan Story you are about to live.**
