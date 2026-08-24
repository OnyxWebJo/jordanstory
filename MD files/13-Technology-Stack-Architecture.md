# 13 — Technology Stack & Architecture
## Jordan Story Tours — Immersive, SEO-First, English + German

**Purpose:** Define a practical architecture for the redesigned Jordan Story Tours website, immersive scroll experience, bilingual public site, booking system and admin dashboard.

**Architecture principle:** Use advanced technology only where it creates visible value. The homepage may be technically ambitious; tour pages, content, booking and admin should remain simple, fast and maintainable.

---

# 1. Recommended Stack

## Public Website
**Next.js + React + TypeScript — Static Export**

The production server does **not** need to run Node.js.

Next.js is used during development/build time to generate the public site as static HTML/CSS/JS.

Production output is deployed to shared hosting/cPanel.

## Styling
**Tailwind CSS** or a clean component/token layer built around the approved design system.

## Immersive Homepage
**Three.js + React Three Fiber**

## Scroll Choreography
**GSAP + ScrollTrigger**

## Lightweight UI Motion
**Framer Motion / Motion** or CSS transitions where sufficient.

## Database
**MySQL**

## Data Access
The public Next.js build does not connect directly to MySQL in the browser.

Dynamic/admin/business functions use a secure **PHP backend/API + MySQL** on shared hosting.

## Admin Dashboard
The admin dashboard may use the same visual design system, but operational admin/auth/business endpoints run through the **PHP backend + MySQL**.

Do not require a persistent Next.js server runtime in production.

## Media
Object storage/CDN with image optimization.

## Email
Transactional email provider through server-side integration.

This keeps the public frontend modern while remaining compatible with shared hosting.

Production architecture:

**Next.js static frontend → PHP backend/API → MySQL**

---

# 2. Why Next.js

The project needs both:

- highly crawlable content pages
- interactive application features

Next.js supports:

- server rendering
- static generation
- route-level caching
- metadata
- dynamic tours
- localized URLs
- API/server actions
- admin routes
- booking logic
- image optimization
- code splitting

The public site must not become a client-only React SPA.

---

# 3. One Application First

Recommended architecture:

```text
Next.js Static Export
│
├── Public Website
│   ├── English
│   ├── German
│   ├── Tours
│   ├── Destinations
│   ├── Stories
│   └── Travel Guide
│
├── Immersive Experience
│   └── Three.js / R3F
│
├── Booking
│
├── Admin
│
└── Static HTML/CSS/JS

PHP Backend/API
│
├── Booking
├── Pricing
├── Admin
├── Auth
└── Reports

MySQL Database
```

One repository simplifies development, deployment, types, authentication and maintenance.

---

# 4. Do Not Build Microservices

This project does not need microservices initially.

Avoid:

- separate booking service
- separate CMS service
- separate translation service
- separate SEO service
- event buses
- Kubernetes

A well-structured monolith is the correct starting architecture.

---

# 5. Public Rendering Strategy

Use different rendering strategies by page type.

## Mostly Static / Cached
- homepage HTML shell
- destinations
- Story Collections
- guides
- about
- contact

## Cached Dynamic
- tour pages
- pricing-dependent public pages

## Dynamic / Private
- booking
- customer-specific actions
- admin

Do not make every page dynamic merely because a database exists.

---

# 6. Homepage Architecture

The homepage consists of two layers.

## Layer A — Semantic Website

Immediately available HTML:

- header
- H1
- intro
- destination/tour links
- Story content
- fallback hero
- booking CTA

## Layer B — Immersive Enhancement

After capability/performance checks:

- Three.js canvas
- scroll camera
- Siq environment
- Treasury reveal
- cinematic transition
- Wadi Rum
- Story transitions

Layer A must remain functional if Layer B never loads.

---

# 7. Immersive Technology

Recommended:

**Three.js**
+
**React Three Fiber**
+
**Drei**
+
**GSAP ScrollTrigger**

Responsibilities:

Three.js:
- 3D scene
- materials
- lighting
- camera
- shaders

React Three Fiber:
- React integration
- scene components
- lifecycle

Drei:
- useful R3F helpers

GSAP:
- camera timeline
- scene transitions
- synchronized DOM/3D animation

---

# 8. Scroll World Architecture

Conceptual sequence:

```text
Scroll Progress
      ↓
GSAP Timeline
      ↓
Camera Path
      ↓
Siq
      ↓
Treasury Reveal
      ↓
Transition
      ↓
Wadi Rum
      ↓
Next Jordan Story
```

The user's physical scroll controls progress.

Do not make it an autoplay video pretending to be interactive.

---

# 9. Siq Scene

Possible implementation:

- optimized canyon geometry
- baked textures
- controlled lighting
- camera spline/path
- subtle environmental particles
- depth layers
- ambient audio only if explicitly user-controlled

The scene should create depth without requiring photorealistic game-engine complexity.

---

# 10. Treasury Reveal

The Treasury should be the first major payoff.

Use:

- narrowing canyon framing
- controlled camera speed
- increasing light
- partial reveal
- full reveal at the correct scroll point

Avoid excessive text over the reveal.

The architecture should let the visual moment breathe.

---

# 11. Wadi Rum Transition

Do not abruptly swap backgrounds.

Possible transition:

1. Treasury camera moves forward
2. sandstone/particle transition
3. field of view opens
4. environment color/light shifts
5. Wadi Rum landscape emerges
6. Story copy appears

The exact artistic transition belongs to the immersive implementation file.

---

# 12. 3D Asset Strategy

Prefer:

- optimized GLB/GLTF
- compressed geometry
- compressed textures
- baked lighting where possible
- instancing for repeated assets
- low-poly distant geometry
- LOD where useful

Avoid huge raw photogrammetry models on the public web.

---

# 13. Asset Sources

Possible production approaches:

- custom 3D modeling
- licensed 3D assets
- photogrammetry optimized for web
- depth-based layered photography
- custom procedural geometry
- hybrid 2.5D + 3D

Do not assume every scene requires a complete 3D reconstruction.

---

# 14. Hybrid Visual Strategy

For this project, a hybrid approach may produce the best balance.

Example:

### Siq
Real 3D canyon geometry + textures.

### Treasury
Optimized 3D/photogrammetry hero asset or carefully designed depth composition.

### Wadi Rum
3D terrain + panoramic/photographic environment.

This reduces load while retaining spatial immersion.

---

# 15. Capability Detection

Before starting high-end rendering, inspect:

- WebGL support
- device memory where available
- viewport
- reduced-motion preference
- performance capability
- mobile/desktop class

Do not block access while testing capability.

---

# 16. Experience Tiers

## Tier A — Full Immersive
Powerful desktop/device.

- full 3D
- camera journey
- particles
- richer transitions

## Tier B — Optimized Immersive
Typical mobile/tablet.

- reduced geometry
- reduced texture size
- simpler effects
- shorter scene

## Tier C — Cinematic Fallback
Low-power/reduced motion/unsupported WebGL.

- optimized photography/video
- normal scroll
- Story copy
- same destinations and CTAs

All tiers communicate the same Story.

---

# 17. Reduced Motion

Respect:

`prefers-reduced-motion`

Reduced-motion experience:

- no forced camera journey
- static/short transitions
- normal content flow
- full access to navigation and CTAs

This is mandatory.

---

# 18. 3D Bundle Isolation

Do not include Three.js in every page bundle.

Load immersive code only on the homepage/experience route.

Tour pages should never pay the JS cost of the 3D engine.

---

# 19. Dynamic Import

Load immersive components dynamically after the semantic shell.

Concept:

```text
Homepage HTML
→ visible immediately

then

dynamic import
→ immersive engine
```

Do not delay the H1 or primary CTA waiting for WebGL.

---

# 20. Performance Budget

Set budgets before production.

Monitor:

- initial HTML
- CSS
- critical JS
- 3D JS
- geometry
- texture memory
- total transferred media
- LCP
- INP
- CLS
- FPS

Do not wait until launch to optimize.

---

# 21. Texture Optimization

Use appropriate:

- KTX2/Basis where supported
- WebP/AVIF for 2D imagery
- mipmaps
- texture atlases where useful
- sensible resolutions

A canyon wall does not need an 8K texture on a phone.

---

# 22. Geometry Optimization

Use:

- Draco/Meshopt compression
- decimation
- LOD
- instancing
- hidden geometry removal

Measure visual difference before keeping high polygon counts.

---

# 23. Loading UX

Do not use a long cinematic loader.

Preferred:

1. show meaningful homepage immediately
2. fallback visual is already attractive
3. immersive assets load progressively
4. enhancement activates when ready

Never force a visitor to watch “Loading Jordan 0–100%” for a long period.

---

# 24. SEO Safety

Critical public content is server-rendered.

Never place essential SEO content only inside:

- canvas
- WebGL texture
- animation frame
- client-side modal

Search engines and assistive technologies need real HTML.

---

# 25. Internationalization

Routing supports:

English:
`/`

German:
`/de/`

Use server-side locale resolution from URL.

Do not make translations depend on a client-side language widget.

---

# 26. Translation Data

Recommended content structure separates:

## Shared Facts
- price
- duration
- coordinates
- availability
- tour IDs

## Localized Content
- title
- summary
- itinerary text
- FAQ
- metadata
- CTA labels

This avoids duplicating factual data.

---

# 27. CMS Strategy

The custom admin dashboard is the CMS.

Do not add WordPress or a separate headless CMS unless a later requirement justifies it.

Admin manages:

- tours
- Stories
- destinations
- guides
- pricing
- bookings
- translations
- media
- SEO

One source of truth.

---

# 28. Database

Recommended:

**MySQL**

Reasons:

- relational tour data
- pricing rules
- bookings
- customers
- translations
- reporting
- audit logs
- transactional reliability

---

# 29. Core Database Domains

Conceptually:

```text
users
roles
permissions

tours
tour_translations
tour_prices
tour_itinerary
tour_availability
tour_extras

destinations
destination_translations

stories
story_translations

guides
guide_translations

bookings
booking_items
booking_status_history
quotes
payments
customers

media
reviews
redirects
settings
audit_logs
```

Exact schema belongs in the database file.

---

# 30. ORM

Recommended:

**MySQL-compatible data layer**

Benefits:

- typed queries
- migrations
- developer ergonomics
- schema clarity

If the implementation team strongly prefers another mature MySQL data layer, consistency matters more than brand choice.

---

# 31. API Architecture

Prefer PHP endpoints for runtime business operations.

The static Next.js frontend communicates with the backend only for dynamic operations such as booking, availability/pricing requests where needed, customer submissions, and admin actions.

Possible domains:

- tours
- booking
- admin
- media
- reports
- translations

Do not expose a large public API without need.

---

# 32. Server-Side Validation

All writes validate on server.

Use a schema validation library such as Zod.

Validate:

- IDs
- dates
- traveler counts
- prices
- booking options
- admin permissions
- localized content

Client validation is UX only.

---

# 33. Authentication

Admin requires secure authentication.

Recommended options:

- mature authentication library
- secure session cookies
- server-side authorization

Requirements:

- password hashing
- rate limiting
- session expiration
- optional MFA
- role/permission checks

Do not implement homemade cryptography.

---

# 34. Authorization

Use RBAC:

- Super Admin
- Booking Manager
- Booking Agent
- Content Manager
- German Editor
- SEO Manager
- Finance

Permissions enforced server-side.

---

# 35. Booking Architecture

Flow:

```text
Public Form
↓
Server Validation
↓
Load Tour/Price Rules
↓
Calculate Authoritative Price
↓
Create Booking
↓
Create Reference
↓
Notify Customer/Admin
↓
Admin Workflow
```

Never trust a browser-submitted total.

---

# 36. Booking Transactions

Booking creation should be transactional where needed.

Do not create half a booking if:

- pricing fails
- required data fails
- database write partially fails

Notifications may be retried separately.

---

# 37. Email

Use a transactional email provider rather than local PHP-style mail.

Requirements:

- reliable delivery
- EN/DE templates
- delivery logging
- retries
- domain authentication

Provider can be selected during deployment.

---

# 38. Email Queue

For initial scale, a lightweight job/retry approach is sufficient.

Do not introduce Kafka/RabbitMQ merely for booking emails.

If email fails:

- booking remains saved
- failure is logged
- admin can resend

---

# 39. Payments

Payment provider is modular.

Architecture:

```text
Booking
↓
Payment Session
↓
Provider
↓
Server/Webhook Verification
↓
Payment Record
↓
Booking Status
```

Never store raw card data.

---

# 40. Webhooks

If payment is added:

- verify signature
- make handlers idempotent
- store provider event ID
- handle duplicate delivery
- never trust success redirect alone

---

# 41. Media Storage

Do not store large image/video binaries directly in PostgreSQL.

Use object storage/CDN.

Database stores:

- URL/key
- metadata
- rights
- alt/caption translations
- dimensions
- associations

---

# 42. Image Pipeline

On upload:

1. validate
2. store original
3. generate optimized variants if needed
4. capture dimensions
5. create CDN delivery path
6. store focal point
7. require alt metadata for public use

---

# 43. Video

Large public videos should use a video/CDN solution rather than the application server.

For short 3D-related assets, choose format/delivery based on performance tests.

---

# 44. Admin Architecture

Routes conceptually:

```text
/admin
/admin/tours
/admin/bookings
/admin/customers
/admin/destinations
/admin/stories
/admin/guides
/admin/media
/admin/seo
/admin/translations
/admin/reports
/admin/settings
```

All admin routes are protected and non-indexable.

---

# 45. Admin UI Components

Use reusable:

- DataTable
- FilterBar
- FormField
- TranslationEditor
- RichTextEditor
- MediaPicker
- PriceEditor
- ItineraryEditor
- StatusBadge
- AuditTimeline
- ReportCard

Avoid page-specific duplicated admin UI.

---

# 46. Rich Text

Use a structured editor rather than raw HTML.

Store sanitized structured content.

Do not allow arbitrary scripts/styles from CMS editors.

---

# 47. Tour Content Structure

Prefer structured fields over one giant rich-text blob.

Good:

- summary
- itinerary
- inclusions
- exclusions
- practical information
- FAQ

This enables:

- SEO
- AEO
- schema
- translation
- booking
- design consistency

---

# 48. Caching

Cache public content aggressively but safely.

Possible:

- static generation
- revalidation
- CDN caching

When admin publishes a change, invalidate/revalidate affected pages.

Do not serve stale prices indefinitely.

---

# 49. Price Caching

Price-sensitive pages need shorter or explicit invalidation.

When price changes:

- public page
- schema
- booking engine

must use the new source value consistently.

---

# 50. Search

Initial site search can be implemented using MySQL FULLTEXT search or lightweight indexed search.

Do not add Elasticsearch/Algolia unless content volume/search requirements justify it.

---

# 51. Analytics

Use:

- GA4 or approved analytics platform
- Google Search Console
- first-party booking events

Track:

- tour views
- Story interactions
- immersive engagement
- booking starts
- submissions
- confirmed bookings
- language
- source

Respect consent/privacy requirements.

---

# 52. Immersive Analytics

Useful events:

- immersive_loaded
- immersive_fallback
- siq_entered
- treasury_reveal
- wadi_rum_reached
- story_cta_click
- immersive_skip

Do not track every scroll frame.

---

# 53. Consent

Load non-essential analytics/marketing scripts according to applicable consent requirements.

The website must still work if tracking is rejected.

---

# 54. Maps

Use a suitable mapping approach only where needed.

Options include:

- lightweight custom SVG/map for Story discovery
- Mapbox/Google Maps for operational interactive maps
- static route illustrations

Do not load a heavy map SDK on every tour page if a lightweight route visualization is sufficient.

---

# 55. Jordan Story Interactive Map

For the branded discovery map, a custom SVG/WebGL/DOM map may be better than a road-map API.

It needs:

- accurate geography
- destination coordinates
- Story routes
- hover/tap
- real HTML links

This preserves the visual identity.

---

# 56. Maps and SEO

Maps enhance pages.

They do not replace:

- destination names
- route text
- itinerary
- links

All important information remains in HTML.

---

# 57. Error Monitoring

Use production error monitoring.

Track:

- frontend errors
- server errors
- booking failures
- email failures
- payment failures
- immersive WebGL failures

Do not log sensitive customer data unnecessarily.

---

# 58. Logging

Use structured server logs.

Include:

- request/operation ID
- booking reference where appropriate
- error category
- timestamp

Never log:

- passwords
- card data
- sensitive form payloads unnecessarily

---

# 59. Security Headers

Configure appropriate:

- CSP
- HSTS
- X-Content-Type-Options
- Referrer-Policy
- frame protection
- Permissions-Policy

Test CSP carefully with Three.js/CDN/media/payment integrations.

---

# 60. Content Security

Sanitize CMS content.

Validate:

- uploads
- URLs
- rich text
- filenames

Do not trust admin input simply because the user is authenticated.

---

# 61. CSRF / XSS / Injection

Protect all writes.

Use:

- framework protections
- parameterized ORM queries
- output escaping
- sanitization
- CSRF protection where relevant

---

# 62. Rate Limiting

Apply to:

- login
- booking submissions
- contact
- custom-tour requests
- password reset
- payment endpoints

Use sensible limits without blocking normal travelers.

---

# 63. Spam Protection

Start with:

- honeypot
- rate limits
- validation

Add bot challenge only if needed.

Avoid harming conversion unnecessarily.

---

# 64. Backups

Back up:

- PostgreSQL
- media metadata
- application configuration
- critical storage where provider does not already protect it

Define:

- frequency
- retention
- restore procedure

A backup is only useful if restore is tested.

---

# 65. Environments

Use:

- local/development
- staging
- production

Staging:

- protected
- noindex
- separate database
- no real customer email unless intentionally tested

Never test destructive booking/payment flows against production casually.

---

# 66. Deployment

Recommended platform should support:

- Node/Next.js
- PostgreSQL
- CDN
- object storage
- environment variables
- SSL
- backups
- logs

Deployment provider is a separate selection based on budget and team preference.

---

# 67. Shared Hosting Warning

Shared hosting is acceptable because the production frontend is a **Next.js static export**.

Requirements:
- serve static HTML/CSS/JS
- PHP 8.x
- MySQL
- HTTPS
- sufficient storage/bandwidth
- cron jobs if needed
- rewrite rules

Node.js is needed only during build/development, not as the production web runtime.

---

# 68. CDN

Use CDN for:

- images
- 3D models
- textures
- static JS/CSS
- fonts where appropriate

Large immersive assets should not originate from a slow single server on every request.

---

# 69. Database Hosting

Use managed/shared-hosting MySQL where practical.

Benefits:

- backups
- monitoring
- easier upgrades
- connection/security management

Self-host only if operational capability justifies it.

---

# 70. Connection Pooling

Serverless/high-concurrency deployments may require database pooling.

Configure based on the selected hosting architecture.

Do not open uncontrolled DB connections per request.

---

# 71. Environment Variables

Store secrets outside source code:

- database URL
- email credentials
- payment secrets
- storage keys
- auth secrets
- analytics/server credentials

Never commit `.env` production secrets.

---

# 72. CI/CD

Recommended pipeline:

1. lint
2. type check
3. tests
4. build
5. schema checks
6. deploy staging
7. smoke test
8. production deployment

Database migrations require controlled execution.

---

# 73. Testing

## Unit
- pricing
- validation
- translations
- utility logic

## Integration
- booking creation
- admin permissions
- price updates
- email flow

## E2E
- EN booking
- DE booking
- admin booking workflow
- tour editing
- language switch
- critical navigation

---

# 74. Visual Testing

Test:

- desktop
- tablet
- mobile
- Safari
- Chrome
- Firefox
- modern Edge
- iOS Safari
- Android Chrome

3D differences between browsers/devices require special QA.

---

# 75. 3D QA Matrix

Test:

- WebGL available
- WebGL unavailable
- reduced motion
- low-power mobile
- slow network
- orientation change
- tab background/return
- browser resize
- touch scrolling
- desktop wheel/trackpad

No scene should trap the user.

---

# 76. Accessibility Testing

Test:

- keyboard
- screen reader basics
- focus order
- forms
- errors
- reduced motion
- contrast
- zoom
- touch targets

The immersive canvas must not prevent access to the actual page.

---

# 77. SEO Technical Tests

Automate/check:

- status codes
- canonical
- hreflang
- robots
- sitemap
- one primary H1
- metadata
- structured data
- noindex rules
- redirects
- language attributes

---

# 78. Performance Tests

Use:

- Lighthouse
- PageSpeed Insights
- Chrome performance profiling
- real-user monitoring where available

Test both:

- full immersive tier
- fallback tier

---

# 79. Monitoring Core Web Vitals

Measure real users by:

- device
- country
- language
- page type

Homepage performance should not hide poor tour-page performance or vice versa.

---

# 80. Dependency Discipline

Keep dependencies intentional.

Before adding a package ask:

- Does framework/native code already solve it?
- Is it maintained?
- What bundle cost does it add?
- Does it run on every page?

Especially protect public-page JS size.

---

# 81. No Unnecessary APIs

Do not add external APIs merely because they exist.

Examples that may not be necessary:

- weather API
- currency API
- AI API for normal content
- live attraction API
- complex CRM

Add integrations only when they solve a real business requirement.

---

# 82. AI in the Admin

AI can later assist with:

- draft SEO metadata
- translation drafts
- content improvement
- FAQ suggestions
- duplicate detection

AI must not autonomously publish or change protected tour facts.

This can be phase 2 rather than launch dependency.

---

# 83. Future API

If Jordan Story Tours later builds:

- mobile app
- partner portal
- external booking channel

the internal domain layer can be exposed through a versioned API.

Do not design the launch around hypothetical integrations.

---

# 84. Scalability

This architecture can scale vertically and horizontally without premature complexity.

Likely early bottlenecks:

- media/3D assets
- image delivery
- inefficient admin queries
- analytics scripts

Not raw database scale.

Optimize the real bottlenecks.

---

# 85. Repository Structure

Conceptual:

```text
/app
  /(public)
  /de
  /admin
  /api

/components
  /ui
  /tour
  /booking
  /story
  /immersive
  /admin

/lib
  /db
  /auth
  /pricing
  /seo
  /i18n
  /validation

/content-or-data-access

/prisma

/public
```

Final structure follows the selected Next.js version/conventions.

---

# 86. Separation of Concerns

Keep separate:

- visual components
- business rules
- database access
- pricing
- translation
- schema generation
- booking logic

Do not put pricing calculations inside React UI components.

---

# 87. Story Engine Separation

Immersive code should have its own module.

Concept:

```text
immersive/
├── Experience
├── CameraRig
├── SiqScene
├── TreasuryScene
├── WadiRumScene
├── transitions
├── performance
└── fallback
```

This prevents 3D complexity from spreading through the application.

---

# 88. Scene Configuration

Camera paths/timing may be stored as developer-controlled configuration.

Content editors should not directly modify:

- shader code
- camera spline
- geometry
- performance thresholds

Admin may update approved media/fallback content.

---

# 89. Content/Admin Separation

Admin controls:

- words
- images
- tours
- prices
- Story associations

Code controls:

- layout system
- 3D engine
- schema templates
- validation
- security
- pricing algorithm structure

This protects site stability.

---

# 90. Recommended Development Order

## Phase 1 — Foundation
- Next.js
- PostgreSQL
- auth
- EN/DE routing
- design system

## Phase 2 — Content
- tours
- destinations
- Stories
- guides
- SEO architecture

## Phase 3 — Booking
- forms
- pricing
- admin workflow
- emails

## Phase 4 — Admin
- full CRUD
- translations
- reports

## Phase 5 — Immersive
- prototype Siq
- Treasury reveal
- Wadi Rum
- performance tiers

## Phase 6 — Migration
- existing content
- prices
- booking fields
- redirects

## Phase 7 — QA
- SEO
- German
- performance
- accessibility
- booking

Do not make the entire project wait for the 3D scene.

---

# 91. Immersive Prototype Gate

Before full production, build a small proof of concept:

**Siq → Treasury reveal**

Test:

- visual quality
- scroll feel
- desktop FPS
- mobile FPS
- load size
- development effort

Only then commit to final asset complexity.

---

# 92. What We Should Not Do

Do not:

- rebuild as WordPress + dozens of plugins
- use client-only SPA rendering
- put all content inside WebGL
- load Three.js on tour pages
- use massive unoptimized 3D scans
- create microservices
- create separate CMS without need
- add AI APIs as a core dependency
- hard-code prices
- hard-code translations in components
- calculate booking totals only in browser
- use shared hosting that cannot support the architecture reliably

---

# 93. Recommended Architecture Summary

```text
                         ┌────────────────────┐
                         │      CDN/Edge      │
                         └─────────┬──────────┘
                                   │
                    ┌──────────────▼──────────────┐
                    │   Next.js Static Frontend   │
                    │                             │
                    │ Public EN / DE              │
                    │ Tours / Destinations        │
                    │ Jordan Stories              │
                    │ Travel Guides               │
                    │ Public Booking UI           │
                    │ Static EN / DE Pages        │
                    └────────────┬────────────────┘
                                 │
                         ┌───────▼────────┐
                         │ PHP Backend/API │
                         │ Booking/Admin   │
                         │ Pricing/Auth    │
                         └───────┬────────┘
                                 │
                    ┌────────────▼───┐ ┌──────────────┐
                    │     MySQL      │ │ Object Storage│
                    └───────────┘ └──────────────┘

Homepage only:
Next.js HTML
    +
Three.js / React Three Fiber
    +
GSAP ScrollTrigger
    ↓
Siq → Treasury → Wadi Rum
```

---

# 94. Final Technology Principle

The visitor should experience advanced technology without feeling the technology.

The homepage can feel like entering Jordan.

The tour page should feel instant.

The booking form should feel effortless.

The admin should feel simple.

The architecture therefore follows one rule:

**Complexity belongs behind the experience, not in front of the traveler.**
