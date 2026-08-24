# 00 — AI Agent Implementation Reset & Walkthrough
## Jordan Story Tours — Visual Quality, Scroll World, SEO/AEO/GEO & MD File Execution Guide

**Purpose:** This file is the new top-level implementation instruction for the coding AI agent.

The first visual build is not acceptable if it feels like a generic travel template, a collection of cards, a normal tourism homepage, or a standard website with animation added afterward.

The redesign must feel like **Jordan Story Tours has become an experience**.

The agent must stop treating the project as a conventional page-building task and instead build a product with three equal priorities:

1. **Immersive Story Experience**
2. **Conversion / Booking**
3. **SEO + AEO + GEO**

None of these may be sacrificed for the others.

---

# 1. READ THIS FILE FIRST

Before modifying the current implementation:

1. Stop adding random sections.
2. Stop polishing the current bad visual direction.
3. Read this file fully.
4. Read all numbered `.md` files in numerical order.
5. Build an implementation map from them.
6. Identify contradictions.
7. Resolve architecture using the latest instructions:
   - Next.js frontend
   - static-export-friendly public pages
   - MySQL
   - shared hosting
   - dynamic backend/API only where needed
   - English + German
8. Rebuild the homepage visual system around the Scroll World.

This file has higher implementation priority than early aesthetic assumptions.

---

# 2. MAIN PRODUCT IDEA

Jordan Story Tours must not look like:

- a ThemeForest template
- a generic travel agency
- a hotel booking website
- a card-heavy marketplace
- a WordPress tourism layout
- a large hero photo followed by repetitive white sections
- a website where Three.js is used only as decoration

The visitor should feel:

> “I have entered Jordan.”

The website should begin as an experience before becoming a catalog.

The experience then transitions naturally into:

- destinations
- tours
- Story Collections
- booking
- travel guides

---

# 3. THE BRAND IS “JORDAN STORY”

The word **Story** is not decorative copy.

It is a product system.

The interface should use the Story concept naturally:

- Enter the Story
- Your Jordan Story
- Choose Your Story
- Continue the Story
- Story Chapters
- Build Your Jordan Story
- From Petra to Wadi Rum
- Where will your story begin?

Do not write “Story” in every paragraph.

The brand should feel intelligent, cinematic and subtle.

---

# 4. THE HOMEPAGE IS NOT A NORMAL HOMEPAGE

The first viewport must not be:

- navigation
- big static hero image
- title
- button
- cards immediately below

Instead:

## Opening Experience

The visitor begins **inside the Siq**.

The screen should feel spatial.

The visitor scrolls.

The camera or visual world moves deeper.

The rocks close around the visitor.

Light changes.

The path reveals depth.

Then:

**The Treasury appears.**

This is the first major emotional payoff.

After Petra, the page transitions cinematically into Wadi Rum.

Only after the experience establishes the brand should the website expand into tour discovery.

---

# 5. SCROLL WORLD — REQUIRED STORYBOARD

## Chapter 0 — Instant Entry

Goal:
No generic loading page.

Display immediately:
- high-quality Siq poster/frame
- minimal navigation
- brand mark
- small invitation:
  **Scroll to enter Jordan**

Do not block the page waiting for WebGL.

---

## Chapter 1 — The Siq Entrance

Visual:
- narrow canyon
- warm sandstone
- layered depth
- subtle light movement
- minimal typography

Copy should be very short.

Example:

**Your Jordan Story begins here.**

No large paragraph.

---

## Chapter 2 — Moving Deeper

As user scrolls:

- visual world advances
- foreground rocks move faster than background
- depth increases
- sunlight changes
- sound is optional and OFF by default
- UI remains minimal

Important:
The user must feel forward movement, not simply background parallax.

---

## Chapter 3 — Anticipation

Before the Treasury:

- canyon narrows
- bright opening begins to appear
- typography can fade away
- visual focus becomes stronger

Do not show the Treasury too early.

The reveal must be earned.

---

## Chapter 4 — Treasury Reveal

The Treasury should appear progressively through the Siq opening.

At the reveal:

**PETRA**

Small supporting text:

**The first chapter is only the beginning.**

Possible CTA:

**Explore Petra**

Do not cover the Treasury with a huge headline.

---

## Chapter 5 — Petra Transition

The user keeps scrolling.

The visual system transitions through:

- sandstone dust
- light
- rock texture
- subtle directional movement

Avoid a hard cut.

The world should feel continuous.

---

## Chapter 6 — Wadi Rum

The canyon opens into a wide environment.

Visual contrast:

Siq:
- narrow
- enclosed
- vertical
- close

Wadi Rum:
- open
- horizontal
- distant
- atmospheric

Copy:

**The horizon opens.**

or

**Continue the Story.**

Then introduce Wadi Rum.

---

## Chapter 7 — Tour Discovery

Only now should the website reveal the product catalog more clearly.

But do not suddenly switch into a generic grid.

Use a more editorial transition:

**Choose how your Jordan Story continues.**

Then:
- Petra & Wadi Rum
- Classical Jordan
- Day Tours
- Luxury
- Sacred Journeys
- Custom Tour

---

# 6. RECOMMENDED TECHNICAL METHOD FOR THE SCROLL WORLD

Do NOT default to a massive fully modeled 3D environment.

Use a hybrid approach.

Recommended:

- Next.js
- React
- Three.js / React Three Fiber only where useful
- GSAP ScrollTrigger or equivalent timeline control
- optimized image sequences
- layered 2.5D environments
- camera movement
- masks
- depth layers
- subtle particles
- WebGL shaders only where they improve the result

Possible technique:

### Siq
Use:
- real photographic source
- multiple depth-separated planes
- selective 3D canyon geometry
- camera translation
- foreground occluders
- light masks
- depth fog

### Treasury
Use:
- optimized high-resolution frontal/angled asset
- selective 3D geometry or depth map
- reveal through canyon geometry
- controlled camera path

### Wadi Rum
Use:
- large cinematic landscape
- depth layers
- light 3D terrain
- atmospheric fog
- distant parallax

This gives a much stronger result than either:
- basic parallax
or
- a huge heavy game-style scene

---

# 7. THE SCROLL WORLD MUST HAVE FALLBACKS

The experience must adapt.

## Full Experience
For capable desktop / strong devices.

## Reduced Experience
For mid-range mobile:
- fewer depth layers
- lower texture sizes
- reduced post-processing

## Cinematic Fallback
For weak devices:
- image sequence
- parallax
- static transitions

## Reduced Motion
For accessibility:
- static hero
- short fades
- no forced camera travel

The website must remain beautiful in every mode.

---

# 8. PERFORMANCE RULE

The Scroll World is allowed to be ambitious.

It is not allowed to destroy:

- LCP
- INP
- CLS
- mobile responsiveness
- booking access
- SEO crawlability

Core rules:

- semantic HTML loads before advanced visual assets
- initial poster loads immediately
- Three.js is code-split
- Wadi Rum assets do not load at initial page load
- later scenes preload only when visitor approaches
- compressed GLB if used
- KTX2/WebP/AVIF
- lazy loading
- low DPR on mobile
- renderer sleeps when offscreen
- dispose unused resources

The user must think:

**“This feels cinematic.”**

Not:

**“This is loading.”**

---

# 9. VISUAL DESIGN DIRECTION

The site should feel:

- premium
- warm
- cinematic
- editorial
- cultural
- sophisticated
- modern

Avoid:

- huge rounded cards everywhere
- gradients with no relation to Jordan
- excessive glassmorphism
- neon effects
- generic SaaS styling
- random icons
- blue travel-template aesthetics
- giant blobs
- repetitive section containers

---

# 10. VISUAL LANGUAGE

Use inspiration from:

- sandstone
- desert shadow
- parchment
- warm ivory
- deep charcoal
- muted bronze
- sunset light

Sections should often use edge-to-edge editorial composition.

Use whitespace intentionally.

Do not put every section inside a rounded container.

---

# 11. TYPOGRAPHY

Typography must feel premium and editorial.

Use:
- strong display heading style
- readable body
- good German character support
- controlled line lengths

Hero typography should never compete with the visual world.

---

# 12. HOMEPAGE STRUCTURE

Recommended:

1. Scroll World
2. Transition statement:
   **Choose Your Jordan Story**
3. Story Collections
4. Featured Tours
5. Essential Destinations
6. Custom Tour Builder CTA
7. Why Jordan Story Tours / Trust
8. Guides / Inspiration
9. Reviews
10. Final booking CTA
11. Footer

The experience should feel continuous.

---

# 13. STORY COLLECTIONS

Do not show Story Collections as boring cards.

Possible presentation:

- horizontal cinematic stories
- chapter navigation
- large imagery with small labels
- editorial layout

Examples:
- Ancient Story
- Desert Story
- Sacred Story
- Luxury Story
- Essential Jordan
- Complete Jordan

Tour categories remain in the data/SEO architecture.

Story Collections are the emotional discovery layer.

---

# 14. TOUR CARDS

Tour cards must communicate:

- title
- duration
- starting price
- destinations
- key image
- Story association
- booking CTA

But cards should look premium.

Avoid:
- too many badges
- busy icons
- overly dense metadata
- marketplace style

---

# 15. TOUR DETAIL PAGE

Tour pages are conversion pages.

They should not copy the immersive homepage layout.

Recommended order:

1. cinematic hero/gallery
2. H1
3. clear fact bar
   - duration
   - destinations
   - price
   - tour type
4. concise answer-first description
5. Story intro
6. itinerary
7. included / excluded
8. gallery
9. practical info
10. FAQ
11. related destinations
12. related tours
13. booking CTA

Mobile booking CTA should remain easily accessible.

---

# 16. SEO MUST NOT BE SACRIFICED FOR CINEMA

Important:

The Scroll World is not the SEO content.

The page must still contain real HTML.

The homepage should include:

- real H1
- crawlable intro
- destination links
- tour links
- meaningful headings
- semantic sections

The visual world is layered around/above this architecture.

Do not put important text only inside:
- canvas
- images
- shaders
- SVG paths
- dynamically drawn WebGL text

---

# 17. SEO IMPLEMENTATION RULES

Every page:

- unique title
- unique meta description
- one primary H1
- correct H2/H3 hierarchy
- self canonical
- hreflang
- breadcrumbs
- internal links
- optimized media
- descriptive URLs
- schema when appropriate

English and German must be separate crawlable URLs.

Do not make German a client-side language toggle on one URL.

---

# 18. AEO — ANSWER ENGINE OPTIMIZATION

Every important page must answer key questions clearly.

Example Petra tour:

**Can you visit Petra from Amman in one day?**

Answer this directly in visible HTML.

Then explain.

Do not write 300 words before answering.

Use:
- concise answer blocks
- FAQs
- practical tables
- itinerary summaries
- included/excluded lists

This helps:
- Google
- AI assistants
- featured snippets
- answer engines

---

# 19. GEO — GENERATIVE ENGINE OPTIMIZATION

The website must make entity relationships extremely clear.

Examples:

**Jordan Story Tours**
is a tour operator / travel company in Jordan.

**Petra**
is a destination in Jordan.

**Petra Day Tour from Amman**
is a tour product offered by Jordan Story Tours.

**Wadi Rum**
is another destination related to Petra through multi-stop tours.

The AI agent should build:

- strong entity relationships
- explicit destination/tour relationships
- author/reviewer metadata on guides
- updated dates
- clear organization information
- structured public business facts
- concise factual content

Avoid vague copy.

---

# 20. INTERNAL LINKING

Do not add random “read more” links.

Use meaningful relationships.

Examples:

Petra Destination
→ Petra Tour from Amman
→ Petra + Wadi Rum
→ Things to Do in Petra

Wadi Rum
→ Petra & Wadi Rum tour
→ Budget multi-day tours
→ Aqaba

Jerash
→ Jerash & Ajloun
→ Jerash + Ajloun + Umm Qais

This builds both UX and topical authority.

---

# 21. SCHEMA

Implement only valid schema matching visible content.

Potential types:

- Organization / TravelAgency
- WebSite
- BreadcrumbList
- TouristDestination
- Article
- FAQPage when valid
- TouristTrip / Product-style structured representation where technically appropriate

Do not invent:
- review ratings
- prices
- availability
- awards

---

# 22. GERMAN

German is a real market version.

Do not:

- translate English word for word
- preserve English sentence structure
- translate “Story” mechanically everywhere

German should feel like native travel content.

Examples:

English:
**Your Jordan Story Begins Here**

German:
**Ihre Jordanien-Reise beginnt hier**

This is better than a literal branding translation in every context.

---

# 23. HOW TO USE ALL `.MD` FILES

The `.md` files are not optional notes.

They are the project specification.

The agent must create a `PROJECT-SPEC-MAP.md` before major implementation.

For every `.md` file record:

```text
File:
Purpose:
Implementation Areas:
Database Impact:
Frontend Impact:
SEO Impact:
Status:
Dependencies:
Conflicts:
```

---

# 24. MD FILE PRIORITY GROUPS

## Group A — Governance / Master Instructions
Examples:
- master AI agent files
- implementation reset files
- architecture decisions
- execution checklists

These define HOW to work.

---

## Group B — Raw Extraction

These contain:
- legacy facts
- itineraries
- price
- galleries
- booking fields
- conflicts

These define WHAT EXISTS.

Never overwrite them.

They are historical evidence.

---

## Group C — Production Content

These contain:
- rewritten English
- rewritten German
- page SEO
- AEO FAQ
- Story narrative

These define WHAT TO PUBLISH.

But protected commercial data always comes from verified structured fields.

---

## Group D — Technical Architecture

These define:
- Next.js
- static export
- MySQL
- backend/API
- publishing
- shared hosting
- folder structure

Follow latest architecture.

If an older file conflicts with a newer architecture decision, use the latest decision and record the conflict.

---

## Group E — Immersive / Performance

These control:
- Siq
- Treasury
- Wadi Rum
- performance tiers
- fallback
- reduced motion

These are critical.

Do not downgrade them to optional animations.

---

## Group F — SEO / AEO / GEO

These define:
- URLs
- metadata
- schema
- content relationships
- answer blocks
- German SEO
- internal linking
- redirects

Treat them as launch requirements.

---

## Group G — Admin / Database / Booking

These define:
- data model
- pricing
- availability
- bookings
- reports
- content management
- publishing

Public pages must read commercial data from the approved source.

---

# 25. DO NOT IMPLEMENT `.MD` FILES BLINDLY

The agent should not copy paragraphs into code without understanding them.

For each file:

1. extract requirements
2. convert them into tasks
3. map affected components
4. map database fields
5. map tests
6. implement
7. mark requirement complete

---

# 26. CREATE A REQUIREMENTS MATRIX

Create:

`docs/IMPLEMENTATION-MATRIX.md`

Example:

```text
Requirement:
Siq Treasury reveal

Source:
12-Immersive...
20-AI-Agent...
00-Implementation-Reset...

Frontend:
ImmersiveExperience.tsx

Assets:
petra/siq/*
petra/treasury/*

Tests:
desktop
mobile
reduced motion
fallback

Status:
IN PROGRESS
```

This prevents requirements from being forgotten.

---

# 27. IMPLEMENTATION WALKTHROUGH

## PHASE 1 — STOP AND AUDIT CURRENT BUILD

Before adding anything:

- screenshot current homepage
- identify generic/template sections
- identify visual inconsistencies
- identify components worth keeping
- identify components to delete
- measure current performance
- inspect route architecture
- inspect mobile

Create:

`CURRENT-BUILD-AUDIT.md`

---

## PHASE 2 — FIX THE DESIGN SYSTEM

Before rebuilding pages:

Define:

- typography
- spacing
- layout widths
- color tokens
- motion rules
- buttons
- navigation
- cards
- form design

Delete inconsistent one-off styles.

---

## PHASE 3 — BUILD THE STATIC HOMEPAGE WITHOUT 3D

First make the homepage excellent without the advanced world.

Implement:

- semantic structure
- Story messaging
- destination hierarchy
- featured tours
- CTAs

If the static design is bad, 3D will not save it.

---

## PHASE 4 — BUILD THE SIQ POC ONLY

Do not build all Jordan scenes.

Build:

**Siq entry → scroll movement → Treasury reveal**

Nothing else.

Test:

- desktop
- mid-range mobile
- Safari iPhone
- reduced motion
- low bandwidth

If this POC is weak, improve it before adding Wadi Rum.

---

## PHASE 5 — APPROVE THE TREASURY REVEAL

The agent should consider:

- camera path
- framing
- perspective
- light
- speed
- reveal timing
- text timing
- visual focus

The Treasury reveal is the signature moment.

Spend design effort here.

---

## PHASE 6 — ADD WADI RUM

Only after Petra feels premium.

Add transition.

Then Wadi Rum.

Do not add more destinations until these two scenes are excellent.

---

## PHASE 7 — CONNECT EXPERIENCE TO PRODUCT

At the end of Wadi Rum:

show:

**Choose Your Jordan Story**

Then tours/Story Collections.

The transition should feel like the visitor moves from inspiration to planning.

---

## PHASE 8 — BUILD TOUR TEMPLATE

Use one excellent tour page.

Suggested test product:

**Petra Day Tour from Amman**

Perfect:
- SEO
- content
- booking
- gallery
- mobile
- schema

Then reuse template across tours.

---

## PHASE 9 — BUILD DESTINATION TEMPLATE

Use Petra first.

Then Wadi Rum.

Then remaining destinations.

---

## PHASE 10 — BUILD EN/DE

Do not finish English and then bolt German on.

Routing, metadata and content models must support both from the beginning.

---

## PHASE 11 — ADMIN

Build:
- tour editing
- pricing
- availability
- galleries
- EN/DE content
- booking records
- transportation
- reports

Then connect publishing workflow.

---

## PHASE 12 — MEDIA MIGRATION

Run automated extraction.

The admin should open a migrated tour and already see its existing gallery.

The owner should not manually upload the old slideshow.

---

## PHASE 13 — SEO/AEO/GEO QA

Crawl the generated site.

Check:

- titles
- H1
- canonical
- hreflang
- indexability
- sitemap
- schema
- internal links
- redirects
- German pages
- page speed

---

# 28. DESIGN REVIEW CHECKPOINTS

The agent must stop and visually review at these points:

### Checkpoint A
Static homepage.

### Checkpoint B
Siq entry.

### Checkpoint C
Treasury reveal.

### Checkpoint D
Wadi Rum transition.

### Checkpoint E
Tour page.

### Checkpoint F
Mobile.

Do not complete 30 pages before confirming the design system is good.

---

# 29. WHAT TO DELETE FROM A BAD FIRST BUILD

If currently present, reconsider/remove:

- generic travel icon sections
- huge repetitive cards
- random gradients
- generic “Why choose us?” icon boxes
- oversized statistic counters without meaning
- repetitive CTA blocks
- floating decorative circles
- unnecessary carousels
- overly rounded UI
- SaaS-style dashboard visuals on public pages

Replace them with:

- editorial storytelling
- large imagery
- intentional composition
- typography
- destination depth
- stronger narrative rhythm

---

# 30. NAVIGATION

Navigation should feel premium and simple.

Possible structure:

- Tours
- Destinations
- Stories
- Travel Guide
- About
- EN / DE
- Book / Build Your Story

Do not overload the navigation.

---

# 31. MOBILE EXPERIENCE

Mobile is not a smaller desktop.

For the Scroll World:

- shorter sequence
- fewer layers
- lower textures
- less camera motion
- touch-native scroll
- no horizontal jank

Booking CTA should remain easy to reach.

---

# 32. ACCESSIBILITY

Mandatory:

- reduced motion
- keyboard navigation
- skip immersive experience
- semantic HTML
- alt text
- visible focus
- proper contrast
- form labels
- error messages

The experience must not trap the visitor.

---

# 33. BOOKING UX

Booking must be fast.

Recommended:

**Step 1 — Tour**
date + people

**Step 2 — Traveler**
name + nationality + email + phone

**Step 3 — Details**
enquiry / relevant trip options

**Step 4 — Review**
summary + terms/privacy

Do not turn the booking form into a giant page.

---

# 34. ADMIN PUBLISHING

Remember static-public architecture.

Admin edits:
→ MySQL
→ approve
→ publish
→ rebuild/export Next.js
→ deploy static content

Do not require hand-editing files.

---

# 35. TESTING THE SCROLL WORLD

Test:

- Chrome desktop
- Safari desktop
- iPhone Safari
- Android Chrome
- mid-range Android
- slow 4G
- reduced motion
- WebGL unavailable

Measure:

- LCP
- FPS
- memory
- scroll responsiveness
- JS transfer
- image transfer

---

# 36. SUCCESS CRITERIA

The homepage succeeds if:

1. within 2–3 seconds the visitor sees Jordan
2. scrolling feels like entering the Siq
3. Treasury reveal creates visual payoff
4. Wadi Rum creates a meaningful contrast
5. tours are easy to discover afterward
6. booking remains simple
7. mobile remains smooth
8. Google can read the content
9. German is fully crawlable
10. the site feels like **Jordan Story Tours**, not a template

---

# 37. FINAL INSTRUCTION TO THE AI AGENT

Do not optimize the current bad design incrementally.

Reassess the experience.

Build the identity first.

The project should be judged by this question:

> If the Jordan Story Tours logo were removed, would this website still feel uniquely connected to Jordan?

If the answer is no, redesign it.

The visitor should remember:

**the Siq,**
**the Treasury,**
**the desert,**
**the Story,**
and finally,
**the tour they want to book.**

Technology is invisible.

Jordan is the experience.
