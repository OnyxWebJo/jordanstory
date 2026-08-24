# 20 — AI Agent Master Instructions
## Jordan Story Tours — Master Implementation Contract

**Purpose:** This file is the governing implementation brief for the coding AI/agent building the redesigned Jordan Story Tours platform.

The agent must read the complete project specification set before making architectural or product decisions.

This file does not replace the detailed files. It defines how they must be interpreted together.

---

# 1. Project Mission

Redesign Jordan Story Tours as a premium, immersive, multilingual travel platform that:

- preserves and improves the company's existing tour inventory
- turns **Jordan Story** into part of the product experience
- ranks strongly in Google
- is structured for AEO and GEO/AI discovery
- launches in English and German
- provides a fast multi-step booking experience
- provides an operational admin dashboard
- allows controlled tour/pricing/content management
- measures conversion from discovery to confirmed booking
- creates an immersive homepage journey through Jordan
- remains fast, accessible and usable when 3D is unavailable

The website is both:

**a travel storytelling experience**
and
**a business booking platform.**

Neither side may break the other.

---

# 2. Read the Specification Set First

Before implementation, read all project MD files in numerical order.

Do not start coding after reading only this file.

The specification set contains separate decisions for:

- brand/product strategy
- information architecture
- content
- SEO/AEO/GEO
- booking
- admin
- German
- immersive experience
- architecture
- database
- migration
- performance
- security/privacy
- analytics
- QA/launch

If two instructions appear inconsistent, identify the conflict before silently choosing one.

---

# 3. Source-of-Truth Hierarchy

Use this hierarchy:

1. **Verified business facts**
2. **Approved project specifications**
3. **Current database values**
4. **Approved migrated source data**
5. **Editorial/SEO copy**
6. **AI-generated suggestion**

AI-generated text never overrides verified business facts.

---

# 4. Never Invent Business Facts

Do not invent:

- tour price
- duration
- itinerary stop
- hotel
- camp
- meal
- guide inclusion
- entrance fee
- vehicle
- transfer
- pickup
- visa information
- border rule
- cancellation condition
- availability
- review
- award
- company history

If unknown:

- preserve source value if verified
- flag for verification
- use neutral wording
- leave unpublished if necessary

Do not guess.

---

# 5. Migration Comes Before Rewrite

For the existing website:

**Extract → Normalize → Verify → Rewrite → Localize → Import → Publish**

Do not crawl a page and immediately replace it with AI-written content.

Preserve raw source evidence.

---

# 6. Preserve Existing Search Equity

Before changing a public URL:

check:

- existing traffic
- search value where data exists
- backlinks where data exists
- intent
- duplicate/cannibalization risk
- migration map

If URL changes:

- create correct one-hop redirect
- update internal links
- canonical
- sitemap
- hreflang
- slug history

Never redirect large groups of unrelated pages to the homepage.

---

# 7. Brand Principle

**Jordan Story** is not merely a company name.

It is part of the product architecture.

The visitor should feel they are choosing and entering a Jordan Story.

Use Story intentionally through:

- homepage narrative
- Story Collections
- tour presentation
- destination discovery
- itinerary chapter language
- CTAs
- immersive journey
- editorial content

Do not mechanically insert the word “Story” into every paragraph.

---

# 8. Story Collections

Maintain the approved Story Collection model separately from operational tour categories.

Possible approved Story identities include concepts such as:

- Ancient Story
- Desert Story
- Sacred Story
- Red Sea Story
- Adventure Story
- Essential Story
- Complete Story
- Luxury Story

Use final approved names from the relevant content/brand specification.

A tour may belong to multiple Stories but should normally have one primary Story.

---

# 9. Story vs SEO Taxonomy

Do not replace clear search-oriented categories with poetic Story labels.

Users and Google still need clear concepts such as:

- Jordan tours
- day tours
- multi-day tours
- Petra tours
- Wadi Rum tours
- private tours
- transportation

Story is the experiential layer.

Search taxonomy is the discovery layer.

They coexist.

---

# 10. Homepage Experience

The signature homepage sequence is:

**The Siq → deeper into the Siq → Treasury reveal → cinematic transition → Wadi Rum → wider Jordan Story**

The user should feel that scrolling moves them physically deeper into Jordan.

The experience should not feel like scrolling through ordinary hero slides.

---

# 11. The Siq

The opening should establish:

- narrow sandstone passage
- depth
- light/shadow
- forward motion
- anticipation

As scroll progresses:

- camera advances
- canyon changes
- light develops
- Treasury becomes gradually anticipated

Do not reveal the Treasury immediately.

---

# 12. Treasury Reveal

The Treasury reveal is the signature moment.

It should feel:

- earned
- cinematic
- elegant
- spatial

Avoid:

- excessive UI
- giant text covering the monument
- aggressive particle effects
- gaming-style controls

The user is traveling through the scene, not playing a game.

---

# 13. Wadi Rum Transition

The transition from Petra should feel cinematic rather than like loading another unrelated section.

Possible implementation techniques may include:

- controlled camera transition
- color/lighting transformation
- sand/dust transition
- cross-scene composition
- cinematic dissolve

Choose based on performance and visual quality.

---

# 14. Later Destinations

The homepage may introduce additional Jordan experiences after Wadi Rum, but do not turn every destination into a full 3D scene.

Reserve expensive immersion for the highest-impact moments.

---

# 15. Native Scroll

Use normal vertical page scrolling as the underlying control.

Do not create:

- forced mouse-wheel hijacking
- inaccessible custom scroll
- navigation traps
- long scroll locks

The 3D camera may map to scroll progress while the browser remains understandable.

---

# 16. Progressive Enhancement

The website must work without full 3D.

Tiers:

- Full 3D
- Reduced 3D
- Cinematic fallback
- Reduced-motion experience

All tiers must preserve:

- Story
- navigation
- content
- tours
- booking

---

# 17. Performance Overrides Visual Ambition

If a visual effect causes unacceptable:

- LCP
- INP
- FPS
- memory
- battery/thermal
- mobile usability

simplify the effect.

Do not defend a heavy implementation merely because it looks impressive on a developer workstation.

---

# 18. Siq Proof of Concept First

Before producing the full immersive environment, implement:

**Siq entry → scroll movement → Treasury reveal**

Benchmark it.

Only after it proves technically viable should the complete environment be expanded.

---

# 19. Public Page Architecture

Public pages should be server-rendered/static where appropriate.

Prioritize:

- semantic HTML
- fast initial content
- crawlability
- minimal hydration
- accessible navigation

Do not make the entire website a client-only application.

---

# 20. 3D Isolation

Three.js / React Three Fiber / related immersive code belongs only where needed.

Do not ship the 3D runtime to:

- tour pages
- guides
- destinations unless specifically required
- booking
- admin

Use dynamic loading.

---

# 21. Tour Pages

Tour pages are conversion pages.

Priority order:

1. clear tour identity
2. route/duration
3. price/pricing status
4. trust
5. itinerary
6. inclusions/exclusions
7. practical information
8. Story layer
9. FAQ
10. booking CTA

Do not make a user pass through animation to find basic facts.

---

# 22. Tour Facts vs Narrative

Store facts structurally.

Narrative copy can interpret them, but not change them.

Example:

Database:
`duration_days = 7`

EN:
“Seven days through Jordan…”

DE:
localized wording

Both derive from the same fact.

---

# 23. Itinerary Structure

Itineraries are structured by day/stop.

Do not store the entire itinerary only as one HTML blob.

Support:

- day number
- title
- description
- destinations
- meals
- accommodation
- route
- optional activities

---

# 24. Pricing

Pricing must be database-driven.

Admin can change:

- price
- traveler ranges
- seasonal rules
- extras
- transport pricing
- accommodation supplements where implemented

The frontend never becomes the pricing source of truth.

---

# 25. Historical Booking Integrity

When a tour or price changes, existing bookings must not silently change.

Store booking snapshots.

Preserve:

- selected tour
- price lines
- extras
- itinerary/quote snapshots where appropriate

---

# 26. Booking UX

Use a multi-step booking flow.

It should be:

- short
- mobile-first
- contextual
- easy to understand
- EN/DE
- server validated

Do not request unnecessary information.

---

# 27. Booking Context

When booking begins from a tour, preserve the selected tour.

When booking begins from a Story/destination, preserve useful attribution.

Do not make the traveler reselect information unnecessarily.

---

# 28. Booking Status

Use structured status workflow.

Do not reduce all bookings to only “new/finished.”

Support operational stages defined in the database specification.

---

# 29. Quote Workflow

Support versioned quotes.

Editing a sent quote should create a new version rather than destroying historical evidence.

---

# 30. Payments

If payment is enabled:

- use reputable provider
- verify server-side
- validate webhook signatures
- make callbacks idempotent

Never store card details.

Never trust browser “success” alone.

---

# 31. Admin Dashboard

The admin is an operational system, not merely a CMS.

It must manage:

- tours
- translations
- pricing
- itinerary
- Story mapping
- destinations
- media
- bookings
- customers
- quotes
- payments where applicable
- reviews
- SEO
- redirects
- users/roles
- reports
- settings

---

# 32. Admin UX

Prioritize:

- clarity
- search
- filters
- bulk-safe workflows
- auditability

Avoid decorative animations in admin.

---

# 33. Roles

Implement server-side role/permission checks.

Expected role concepts:

- Super Admin
- Booking Manager
- Booking Agent
- Content Manager
- German Editor
- SEO Manager
- Finance

Use the detailed permission matrix from the relevant specifications.

---

# 34. German Is a First-Class Language

German is not an afterthought.

At launch, approved priority content should include complete German:

- navigation
- homepage
- Story Collections
- tours
- destinations
- guides where approved
- booking
- emails
- validation/errors
- legal/privacy
- metadata
- structured content

Do not launch priority German pages half-translated.

---

# 35. German Localization

Do not mechanically translate English SEO copy.

German pages require:

- German search intent
- natural tourism language
- German keyword research
- appropriate CTA language
- editorial review

Shared business facts remain identical.

---

# 36. Locale Architecture

Use stable locale routing.

Expected model:

- English default or approved `/en/` strategy
- German `/de/`

Follow the URL architecture file.

Do not create mixed-language URLs/pages.

---

# 37. Hreflang

EN and DE equivalents must have correct reciprocal hreflang.

When no equivalent exists, do not point to an unrelated page merely to complete hreflang.

---

# 38. SEO

Every important indexable page needs:

- clear intent
- unique title
- useful meta description
- meaningful H1
- logical headings
- internal links
- canonical
- schema where appropriate
- optimized media
- crawlable semantic content

Animation never replaces crawlable content.

---

# 39. AEO

Design pages to answer real traveler questions clearly.

Use:

- concise answer blocks
- structured facts
- FAQ where useful
- clear entities
- practical information
- descriptive headings

Do not create fake FAQ questions merely for schema.

---

# 40. GEO / AI Discovery

Make content easy for answer engines to understand through:

- entity clarity
- consistent business facts
- structured tour data
- destination relationships
- organization identity
- authoritative guides
- semantic HTML
- useful citations/source discipline where relevant

Do not use meaningless “GEO keyword stuffing.”

---

# 41. Structured Data

Generate schema from verified database values.

Never manually duplicate price/review facts in JSON-LD if the database already holds them.

Visible page and schema must agree.

---

# 42. Reviews

Only publish genuine reviews.

Do not fabricate:

- reviewer
- rating
- review
- aggregate rating

AI may format or translate only under an approved workflow that preserves the original meaning/source.

---

# 43. Destination Entities

Use reusable canonical destination records.

Tours, guides and Stories link to the same destination entities.

Do not create inconsistent duplicates such as multiple separate Petra records for different pages.

---

# 44. Content Architecture

Content should support the traveler journey:

**Inspiration → Understanding → Comparison → Trust → Booking**

Avoid producing pages solely to increase URL count.

---

# 45. Content Quality

Avoid:

- repetitive AI introductions
- “Nestled in the heart of…”
- empty adjectives
- keyword stuffing
- generic tourism filler
- unsupported “best” claims

Prefer:

- specificity
- route clarity
- useful advice
- Story personality
- real Jordan knowledge
- decision-support information

---

# 46. Media

Use optimized responsive assets.

Maintain:

- media rights status
- source
- EN alt
- DE alt
- entity associations

Do not hotlink legacy WordPress assets as the permanent solution.

---

# 47. 3D Assets

Production 3D assets should be optimized before deployment.

Use as appropriate:

- GLB/glTF
- Meshopt/Draco
- KTX2/Basis
- LOD
- instancing
- texture compression
- baked lighting

Do not ship raw scan assets.

---

# 48. Accessibility

Accessibility is mandatory.

The site must support:

- keyboard
- semantic structure
- visible focus
- labels
- meaningful errors
- contrast
- reduced motion
- alt text

The immersive canvas cannot be the only method for navigation/content comprehension.

---

# 49. Reduced Motion

When the user prefers reduced motion:

- avoid forced camera journey
- skip heavy 3D where possible
- provide static/cinematic Story presentation

Do not merely slow down animations.

---

# 50. Security

Follow the dedicated security specification.

Mandatory concepts:

- server validation
- server authorization
- safe sessions
- rate limiting
- sanitized rich text
- secure uploads
- protected secrets
- audit logs
- HTTPS
- CSP/security headers
- database restrictions

---

# 51. Privacy

Collect the minimum traveler data required.

Do not place personal data in:

- analytics
- URLs
- client logs
- public pages

Do not send customer data to AI tools casually.

---

# 52. Analytics

Implement analytics according to the measurement specification.

Track business milestones, not every UI interaction.

Important chain:

**Search → Story → Tour → Booking → Confirmed Booking → Revenue**

---

# 53. Immersive Analytics

Track only meaningful milestones:

- eligible
- loaded
- fallback
- skipped
- Siq
- Treasury
- Wadi Rum
- Story CTA

Do not create scroll-event spam.

---

# 54. Analytics Privacy

Never send:

- name
- email
- phone
- WhatsApp
- booking note
- payment data

to analytics platforms.

---

# 55. Reporting

Admin reports should answer:

- What happened?
- What needs attention?
- Which tours sell?
- Which Stories assist bookings?
- How does German perform?
- Where do bookings come from?
- Where does the booking funnel lose people?

---

# 56. Third Language

Do not implement a third public language until approved.

Architecture must make future languages easy to add.

Do not hard-code business logic for only `en` and `de`.

Locale tables should support future locale codes.

---

# 57. Future Language Decision

When a future language is evaluated, use:

- source-market data
- Search Console
- booking data
- revenue
- organic opportunity
- operational language support

Do not assume Russian or another language automatically.

---

# 58. Technology Direction

Use the approved architecture specification.

Core direction:

- Next.js
- React
- TypeScript
- **Next.js static export for production**
- **PHP backend/API for runtime business operations**
- **MySQL database on shared hosting**
- Three.js / React Three Fiber for immersive sections
- GSAP ScrollTrigger or approved scroll orchestration

Do not replace the stack without a documented reason.

---

# 59. TypeScript

Use strict TypeScript.

Avoid excessive `any`.

Define types for:

- tours
- translations
- booking
- pricing
- API responses
- admin permissions
- analytics events

---

# 60. Database

Follow the normalized PostgreSQL model.

Do not collapse the entire CMS into JSON blobs.

Use relational MySQL tables for:

- tours
- destinations
- itinerary
- pricing
- bookings
- translations
- Stories
- payments

Use MySQL JSON mainly for snapshots/flexible metadata.

---

# 61. Database Migrations

All schema changes use version-controlled migrations.

Do not make undocumented manual production schema changes.

---

# 62. Seed Data

Seed only legitimate configuration:

- roles
- permissions
- locales
- Story Collections
- verified destination basics
- settings defaults

Do not seed fake reviews/bookings into production.

---

# 63. API Design

Use PHP backend endpoints with:

- validation
- authorization
- typed contracts
- safe errors

The static Next.js frontend must never connect directly to MySQL. Do not expose unrestricted database operations to the browser.

---

# 64. Error Handling

Public errors should be useful and safe.

Never expose:

- stack traces
- SQL
- secrets
- server paths

Log technical details securely.

---

# 65. Booking Reliability

If email fails after booking is saved:

- booking remains saved
- retry/log notification
- do not show false booking failure

Database persistence is more important than notification success.

---

# 66. Idempotency

Use idempotency where duplicate actions are dangerous:

- booking submission
- payment creation
- payment webhook
- refund

---

# 67. Caching

Cache stable public content.

Invalidate intelligently when admin publishes.

Do not allow stale pricing after a price update.

---

# 68. Images

Use modern optimized formats.

Specify dimensions.

Use responsive `sizes/srcset`.

Do not lazy-load the visible LCP image.

---

# 69. Fonts

Keep font count/weights controlled.

German characters must render correctly.

Avoid font choices that harm performance/readability.

---

# 70. Third-Party Scripts

Every third-party script must have a reason.

Avoid heavy:

- chat widgets
- trackers
- sliders
- marketing libraries

Prefer lightweight implementations.

---

# 71. WhatsApp

A lightweight WhatsApp contact/booking continuation may be provided.

Do not expose private customer information in URLs.

Use official/business contact configuration from admin settings.

---

# 72. Maps

Do not load a heavy map SDK when a lightweight route illustration is sufficient.

Lazy-load interactive maps when needed.

---

# 73. Admin Settings

Centralize business information:

- phone
- WhatsApp
- email
- address
- social links
- enabled locales
- default currency

Do not duplicate these values across components.

---

# 74. SEO Settings

Allow controlled editing of:

- title
- description
- canonical override where justified
- index/noindex
- social metadata
- redirect

Do not let ordinary editors accidentally break site-wide SEO configuration.

---

# 75. Content Revision

Preserve revision history for important content.

Provide rollback where practical.

---

# 76. Auditability

For important changes, answer:

- who changed it?
- when?
- what was before?
- what is now?

Especially pricing, booking status and permissions.

---

# 77. Testing During Development

Do not postpone QA until the end.

For each feature:

1. implement
2. unit/integration test where appropriate
3. responsive test
4. EN/DE test
5. security check
6. performance check
7. accessibility check

---

# 78. Automated Tests

Prioritize automated tests for:

- pricing engine
- booking validation
- permissions
- redirect logic
- locale mapping
- payment webhook
- critical API actions

Visual animation polish may remain manual/E2E.

---

# 79. E2E Tests

Automate core journeys where practical:

- EN tour → booking
- DE tour → booking
- admin login → price edit
- booking status update
- quote flow
- payment sandbox flow if enabled

---

# 80. 3D Testing

3D must be tested on real hardware.

Do not accept desktop emulator/mobile DevTools alone as proof of mobile performance.

---

# 81. Performance Testing

Use:

- lab tests
- real-device tests
- real-user monitoring after launch

Core Web Vitals targets come from the performance specification.

---

# 82. SEO Testing

Before launch crawl staging/production candidate.

Verify:

- status
- canonical
- hreflang
- title
- H1
- robots
- sitemap
- schema
- internal links
- redirects

---

# 83. Content Approval

The AI agent may draft content.

It must not assume draft = approved.

Protected facts and major migrated tour content require verification/approval workflow.

---

# 84. German Approval

German priority pages require review status before publication.

Do not bypass this because the translation “looks correct.”

---

# 85. Launch Freeze

Before migration/cutover:

- freeze relevant old-site content/pricing
- take backup
- capture final changes
- perform final import
- run QA

Avoid migrating against a moving source.

---

# 86. Backups

Before production launch:

- old website backup
- old database backup
- new database backup
- media backup
- configuration backup

Restore procedure must be known.

---

# 87. Rollback

Maintain a documented rollback strategy.

Do not make a destructive cutover that cannot be reversed during a critical launch failure.

---

# 88. Post-Launch Monitoring

Immediately monitor:

- server errors
- bookings
- email
- payment
- 404
- redirects
- indexing
- analytics
- 3D errors
- Core Web Vitals

---

# 89. Search Migration Monitoring

Expect some volatility.

Investigate before reacting.

Check:

- redirect
- canonical
- intent
- indexing
- internal links
- hreflang
- server status

Do not make random SEO changes during normal migration fluctuation.

---

# 90. Code Quality

Code should be:

- readable
- modular
- typed
- documented where non-obvious
- maintainable

Avoid clever abstractions that make simple business logic difficult to understand.

---

# 91. Component Reuse

Reuse genuine patterns:

- tour card
- Story card
- destination card
- CTA
- booking field
- SEO metadata generation

Do not create a mega-component with dozens of conditional modes.

---

# 92. Design System

Use shared tokens for:

- typography
- spacing
- radius
- shadows
- layout
- motion
- breakpoints

Immersive scenes may have custom art direction but still integrate with the brand UI.

---

# 93. Motion System

Animation should communicate:

- progression
- reveal
- spatial movement
- Story transition

Avoid animation simply because a library is available.

---

# 94. Mobile-First

Every feature must be designed for mobile, not merely shrunk from desktop.

Especially:

- booking
- tour facts
- itinerary
- language switch
- immersive experience
- CTAs

---

# 95. No Technology Showcase Syndrome

The user should remember:

- Petra
- Jordan
- the Story
- the tour

not:

- WebGL
- shader effects
- scrolling tricks

Technology serves Jordan Story Tours.

---

# 96. Implementation Phases

Recommended development order:

## Phase 0 — Audit & Migration Preparation
- crawl existing site
- inventory
- raw extraction
- conflict list
- URL map

## Phase 1 — Foundation
- repository
- Next.js/TypeScript
- database
- auth
- localization
- design system

## Phase 2 — Core Data/Admin
- tours
- destinations
- Stories
- translations
- pricing
- media

## Phase 3 — Public SEO Pages
- homepage semantic shell
- tours
- destinations
- Stories
- guides
- EN/DE

## Phase 4 — Booking
- multi-step form
- validation
- admin records
- notifications
- quote workflow

## Phase 5 — SEO/AEO/GEO
- metadata
- schema
- sitemap
- hreflang
- redirects
- internal links

## Phase 6 — Immersive POC
- Siq
- camera
- Treasury reveal
- performance testing

## Phase 7 — Immersive Expansion
- Wadi Rum
- transitions
- fallbacks
- responsive tiers

## Phase 8 — Analytics/Reports
- events
- attribution
- dashboards

## Phase 9 — Security/Performance Hardening
- security QA
- optimization
- accessibility

## Phase 10 — Migration & Launch
- verified import
- German review
- redirect deployment
- final QA
- cutover

---

# 97. Do Not Build Full 3D First

The immersive homepage is visually exciting, but it must not block development of:

- data
- tours
- booking
- SEO
- admin

Build the business platform and the 3D POC in controlled phases.

---

# 98. Definition of Done — Feature

A feature is not done until:

- functional
- responsive
- typed
- authorized
- validated
- EN/DE where relevant
- accessible
- error states handled
- analytics considered
- tested

---

# 99. Definition of Done — Tour

A tour is not done until:

- facts verified
- structured data complete
- EN approved
- DE reviewed
- price configured
- itinerary structured
- Story assigned
- destinations linked
- media optimized
- SEO complete
- booking tested

---

# 100. Definition of Done — Homepage

Homepage is not done until:

- semantic content loads immediately
- Story branding works
- full 3D works on capable device
- reduced 3D works
- fallback works
- reduced motion works
- mobile works
- navigation works
- CTA works
- SEO content crawlable
- CWV acceptable
- immersive analytics works

---

# 101. Definition of Done — Booking

Booking is not done until:

- EN
- DE
- all fields
- dropdowns
- validation
- server pricing
- persistence
- reference
- admin
- notifications
- attribution
- duplicate protection
- error handling

all pass QA.

---

# 102. Definition of Done — Admin

Admin is not done until:

- roles enforced
- tours editable
- pricing editable
- translations manageable
- bookings operational
- reports useful
- audit history works
- dangerous actions protected

---

# 103. Definition of Done — SEO Migration

SEO migration is not done until:

- legacy inventory complete
- redirect map complete
- canonical checked
- hreflang checked
- sitemap checked
- robots checked
- schema checked
- internal links clean
- high-value URLs tested

---

# 104. Agent Decision Rules

The AI agent **may** decide:

- component decomposition
- naming of internal functions
- test implementation details
- minor UI spacing
- safe optimization techniques
- internal code organization

The AI agent **must not independently decide**:

- new tour prices
- business policies
- deleting tours
- merging conflicting tours
- legal promises
- new factual inclusions
- payment/refund rules
- replacing approved languages
- removing critical project requirements

---

# 105. When Information Is Missing

Do not stop the entire project for every small unknown.

Use one of:

- TODO with clear reason
- verification queue
- safe placeholder in admin only
- feature flag
- neutral public omission

But never invent the missing fact.

---

# 106. Questions for Business Owner

Batch factual questions.

Prefer:

```text
TOUR: [name]

1. Confirm duration:
   Source A says 6 days.
   Itinerary contains 7 days.

2. Confirm guide:
   Inclusion says driver only.
   Day 2 says local guide included.

3. Confirm price:
   Tour page: X
   Category page: Y
```

This is better than interrupting development with one question at a time.

---

# 107. Documentation

Maintain:

- setup instructions
- environment variables list
- migration instructions
- backup/restore
- deployment
- admin usage notes
- known limitations

Do not expose secret values in documentation.

---

# 108. Final Agent Acceptance Checklist

Before declaring the project complete, verify:

- [ ] all project specification files read
- [ ] current website fully inventoried
- [ ] raw data preserved
- [ ] tour conflicts resolved/flagged
- [ ] English complete
- [ ] German complete
- [ ] Story architecture implemented
- [ ] tour categories retained for SEO/discovery
- [ ] database implemented
- [ ] admin implemented
- [ ] pricing implemented
- [ ] booking implemented
- [ ] quotes/payments implemented if in scope
- [ ] SEO implemented
- [ ] AEO structure implemented
- [ ] GEO/entity structure implemented
- [ ] redirects implemented
- [ ] schema validated
- [ ] hreflang validated
- [ ] sitemap/robots validated
- [ ] Siq POC passed
- [ ] Treasury reveal passed
- [ ] Wadi Rum experience passed
- [ ] mobile tier passed
- [ ] fallback passed
- [ ] reduced motion passed
- [ ] Core Web Vitals tested
- [ ] accessibility tested
- [ ] security tested
- [ ] analytics tested
- [ ] reports tested
- [ ] backups verified
- [ ] launch checklist passed
- [ ] production monitoring active

---

# 109. Final Product Principle

Jordan Story Tours should not feel like a template travel website with animation added on top.

The architecture, content, Story system, booking flow and immersive world should feel like one product.

The visitor arrives looking for Jordan.

They enter the Siq.

They discover Petra.

They cross into Wadi Rum.

They explore the Stories of Jordan.

They understand the tour.

They trust the company.

And when they are ready:

**they book their own Jordan Story.**

That is the product.
