# 21 — Development Phases & Task Checklist
## Jordan Story Tours — AI Coding Agent Execution Plan

**Purpose:** Convert the complete Jordan Story Tours specification into an ordered implementation plan that an AI coding agent can execute phase by phase without losing requirements, damaging existing SEO, or prioritizing visual effects before the business platform is ready.

**Governing rule:** Read `20-AI-Agent-Master-Instructions.md` and all referenced project files before beginning implementation.

---

# 1. Execution Rules

The coding agent must:

- work in phases
- finish phase acceptance criteria before advancing
- maintain a task log
- document blockers
- batch business-verification questions
- never invent missing tour facts
- never overwrite verified source data
- keep English and German in scope from the architecture stage
- test mobile throughout development
- protect existing URLs/search equity
- commit meaningful milestones where version control is available

Do not attempt the entire platform in one uncontrolled implementation pass.

---

# 2. Project Status Convention

Use:

- `[ ]` Not Started
- `[~]` In Progress
- `[x]` Complete
- `[!]` Blocked / Needs Business Verification
- `[-]` Not Applicable

For factual conflicts, use `[!]` rather than guessing.

---

# 3. Phase 0 — Existing Website Audit

## Objective

Understand exactly what exists before redesigning it.

## Tasks

- [ ] Crawl all public URLs on the existing Jordan Story Tours website
- [ ] Record HTTP status for every URL
- [ ] Identify canonical URLs
- [ ] Extract titles
- [ ] Extract meta descriptions
- [ ] Extract H1/H2 structure
- [ ] Extract canonical tags
- [ ] Extract existing schema
- [ ] Extract internal links
- [ ] Extract image URLs and alt text
- [ ] Identify language versions
- [ ] Identify pagination/archive pages
- [ ] Identify parameter URLs
- [ ] Identify booking/contact forms
- [ ] Identify old redirects
- [ ] Identify broken pages
- [ ] Identify duplicate content
- [ ] Identify thin pages
- [ ] Identify pages with valuable unique content

## Deliverables

- [ ] URL inventory
- [ ] page-type classification
- [ ] legacy URL map
- [ ] source-content archive
- [ ] SEO baseline

## Exit Criteria

Do not proceed with destructive migration decisions until the important existing content and URLs are inventoried.

---

# 4. Phase 1 — Tour & Business Data Extraction

## Objective

Extract the actual business product before rewriting the website.

## Tasks

For every tour:

- [ ] source URL
- [ ] source title
- [ ] duration
- [ ] route
- [ ] start point
- [ ] end point
- [ ] itinerary
- [ ] destinations
- [ ] accommodation
- [ ] meals
- [ ] guide information
- [ ] transportation
- [ ] inclusions
- [ ] exclusions
- [ ] optional extras
- [ ] traveler rules
- [ ] price
- [ ] price basis
- [ ] availability
- [ ] booking fields
- [ ] media
- [ ] FAQ
- [ ] reviews/testimonials
- [ ] source metadata

Also extract:

- [ ] transportation services
- [ ] transfer pricing
- [ ] destination pages
- [ ] travel guides/blog content
- [ ] company information
- [ ] contact information
- [ ] legal/booking conditions
- [ ] booking dropdown values

## Exit Criteria

All meaningful existing products and booking inputs are represented in structured extraction data.

---

# 5. Phase 2 — Data Normalization & Verification

## Objective

Turn extracted website content into reliable business data.

## Tasks

- [ ] normalize destination names
- [ ] normalize tour duration
- [ ] normalize route representation
- [ ] normalize meal terminology
- [ ] normalize accommodation types
- [ ] normalize guide types
- [ ] normalize pricing basis
- [ ] normalize traveler ranges
- [ ] normalize currency
- [ ] normalize booking dropdowns
- [ ] detect duplicate tours
- [ ] detect conflicting prices
- [ ] detect itinerary/day-count conflicts
- [ ] detect inclusion conflicts
- [ ] detect guide conflicts
- [ ] detect outdated contact information
- [ ] create business verification queue

## Business Verification Format

For every conflict record:

```text
Entity:
Field:
Source A:
Source B:
Recommended action:
Business confirmation required: YES
```

## Exit Criteria

No known conflict is silently resolved by AI invention.

---

# 6. Phase 3 — URL Migration Map

## Objective

Protect existing search equity.

## Tasks

For every legacy URL assign:

- [ ] KEEP
- [ ] REDIRECT
- [ ] MERGE
- [ ] REMOVE
- [ ] REVIEW

For redirects:

- [ ] define exact destination
- [ ] ensure intent match
- [ ] avoid chains
- [ ] avoid homepage dumping
- [ ] preserve important query intent

## Additional Tasks

- [ ] identify high-value legacy URLs
- [ ] identify pages with backlinks if data is available
- [ ] identify organic landing pages if analytics/Search Console data is available
- [ ] define new EN URL
- [ ] define new DE equivalent
- [ ] define hreflang pairing

## Exit Criteria

Every important old URL has a planned production outcome.

---

# 7. Phase 4 — Repository & Engineering Foundation

## Objective

Create a clean technical foundation for **Next.js static frontend + PHP/MySQL shared-hosting backend**.

## Tasks

- [ ] initialize repository
- [ ] configure TypeScript strict mode
- [ ] configure linting
- [ ] configure formatting
- [ ] configure environment variables
- [ ] configure development environment
- [ ] configure staging
- [ ] configure production strategy
- [ ] create project README
- [ ] create deployment documentation
- [ ] create environment variable example file without secrets

## Exit Criteria

Project builds cleanly and environments are clearly separated.

---

# 8. Phase 5 — Next.js Application Foundation

## Tasks

- [ ] configure Next.js for static-export-compatible production architecture
- [ ] App Router structure
- [ ] server/client component boundaries
- [ ] error boundaries
- [ ] not-found handling
- [ ] loading states
- [ ] metadata foundation
- [ ] image configuration
- [ ] font strategy
- [ ] route conventions
- [ ] caching conventions

## Exit Criteria

A minimal production-quality shell runs without unnecessary dependencies.

---

# 9. Phase 6 — Design System

## Tasks

Define:

- [ ] typography
- [ ] colors
- [ ] spacing
- [ ] layout widths
- [ ] radius
- [ ] shadows
- [ ] buttons
- [ ] form fields
- [ ] cards
- [ ] badges
- [ ] navigation
- [ ] mobile patterns
- [ ] motion tokens
- [ ] Story visual language

## Components

- [ ] Button
- [ ] Link
- [ ] Container
- [ ] Section
- [ ] Heading
- [ ] TourCard
- [ ] StoryCard
- [ ] DestinationCard
- [ ] CTA
- [ ] Breadcrumb
- [ ] FormField
- [ ] Alert
- [ ] Modal/Drawer where needed

## Exit Criteria

Public pages can be built consistently without ad-hoc styling.

---

# 10. Phase 7 — Database Foundation

## Objective

Implement the normalized MySQL data model.

## Tasks

- [ ] MySQL connection
- [ ] PHP/MySQL data layer setup
- [ ] migrations
- [ ] locale table
- [ ] users
- [ ] roles
- [ ] permissions
- [ ] tours
- [ ] tour translations
- [ ] itinerary days
- [ ] destinations
- [ ] destination translations
- [ ] tour-destination relationships
- [ ] Story Collections
- [ ] Story translations
- [ ] tour-Story relationships
- [ ] pricing
- [ ] price rules
- [ ] extras
- [ ] media
- [ ] reviews
- [ ] booking entities
- [ ] booking snapshots
- [ ] customers
- [ ] quotes
- [ ] payments
- [ ] redirects
- [ ] SEO fields
- [ ] settings
- [ ] audit logs

## Exit Criteria

Schema represents the business without depending on unstructured page HTML.

---

# 11. Phase 8 — Seed & Reference Data

## Tasks

Seed:

- [ ] English locale
- [ ] German locale
- [ ] roles
- [ ] permissions
- [ ] approved Story Collections
- [ ] verified destination identities
- [ ] booking status definitions
- [ ] default settings

Do not seed fake:

- [ ] reviews
- [ ] customer records
- [ ] bookings
- [ ] payments

into production.

---

# 12. Phase 9 — Authentication & Authorization

## Tasks

- [ ] admin login
- [ ] secure password hashing
- [ ] secure sessions
- [ ] logout
- [ ] password reset
- [ ] session expiry
- [ ] role checks
- [ ] permission checks
- [ ] disabled user handling
- [ ] MFA support for privileged users if included
- [ ] login rate limiting
- [ ] audit login/security events

## Tests

- [ ] valid login
- [ ] invalid login
- [ ] disabled user
- [ ] expired session
- [ ] direct unauthorized API access
- [ ] role downgrade

## Exit Criteria

Authorization is enforced server-side.

---

# 13. Phase 10 — Admin Shell

## Tasks

Build:

- [ ] admin navigation
- [ ] dashboard layout
- [ ] responsive admin
- [ ] permission-aware menu
- [ ] search/filter patterns
- [ ] tables
- [ ] pagination
- [ ] confirmation dialogs
- [ ] audit UI patterns

Avoid decorative public-site animation inside admin.

---

# 14. Phase 11 — Tour Management

## Tasks

Admin can:

- [ ] create tour
- [ ] edit tour
- [ ] archive tour
- [ ] publish/unpublish
- [ ] assign slug
- [ ] set duration
- [ ] set route
- [ ] set destinations
- [ ] manage itinerary
- [ ] manage meals
- [ ] manage accommodation
- [ ] manage inclusions
- [ ] manage exclusions
- [ ] manage extras
- [ ] manage media
- [ ] assign Stories
- [ ] manage SEO
- [ ] preview

## Exit Criteria

A complete tour can be managed without code changes.

---

# 15. Phase 12 — Pricing Engine

## Tasks

- [ ] base price model
- [ ] traveler ranges
- [ ] seasonal rules
- [ ] extras
- [ ] supplements
- [ ] currency
- [ ] active dates
- [ ] rule priority/conflict detection
- [ ] server-side calculator
- [ ] booking snapshot generation
- [ ] audit history

## Automated Tests

Test:

- [ ] one traveler
- [ ] group range
- [ ] boundary traveler counts
- [ ] seasonal boundary
- [ ] extras
- [ ] invalid values
- [ ] manipulated client price
- [ ] historical booking preservation

## Exit Criteria

Frontend price manipulation cannot alter authoritative total.

---

# 16. Phase 13 — Destination Management

## Tasks

- [ ] destination CRUD
- [ ] EN content
- [ ] DE content
- [ ] SEO
- [ ] media
- [ ] map/geographic data where approved
- [ ] related tours
- [ ] related Stories
- [ ] related guides

Canonical destination entities must be reused throughout the site.

---

# 17. Phase 14 — Story Collection Management

## Tasks

- [ ] Story CRUD
- [ ] primary identity
- [ ] EN translation
- [ ] DE translation
- [ ] hero/media
- [ ] Story narrative
- [ ] SEO
- [ ] related tours
- [ ] related destinations
- [ ] ordering

## Exit Criteria

Story Collections function as a discovery/product layer without replacing SEO categories.

---

# 18. Phase 15 — Translation Workflow

## Tasks

- [ ] locale-aware database fields
- [ ] translation status
- [ ] EN source relationship
- [ ] German draft
- [ ] German review
- [ ] published status
- [ ] outdated flag when source facts change
- [ ] German Editor permissions

Statuses:

- NOT_STARTED
- DRAFT
- NEEDS_REVIEW
- APPROVED
- PUBLISHED
- OUTDATED

## Exit Criteria

German content cannot accidentally remain silently outdated after protected facts change.

---

# 19. Phase 16 — Public Site Shell

## Tasks

- [ ] header
- [ ] footer
- [ ] desktop navigation
- [ ] mobile navigation
- [ ] language switch
- [ ] booking CTA
- [ ] breadcrumbs
- [ ] business contact data from settings
- [ ] Story identity

Test EN and DE immediately.

---

# 20. Phase 17 — Tour Listing

## Tasks

- [ ] tour archive
- [ ] category filtering
- [ ] Story filtering where useful
- [ ] destination filtering
- [ ] duration filtering
- [ ] cards
- [ ] pagination/load strategy
- [ ] SEO crawlability
- [ ] EN
- [ ] DE

Do not make critical tour discovery dependent on client-only JavaScript.

---

# 21. Phase 18 — Tour Detail Page

## Tasks

- [ ] hero
- [ ] title
- [ ] duration
- [ ] route
- [ ] pricing
- [ ] booking CTA
- [ ] Story identity
- [ ] itinerary
- [ ] inclusions
- [ ] exclusions
- [ ] accommodation
- [ ] guide
- [ ] transport
- [ ] extras
- [ ] gallery
- [ ] destinations
- [ ] related tours
- [ ] FAQ
- [ ] breadcrumbs
- [ ] schema
- [ ] metadata
- [ ] EN
- [ ] DE

## Exit Criteria

The page answers practical purchase questions before decorative storytelling overwhelms the content.

---

# 22. Phase 19 — Destination Pages

## Tasks

- [ ] destination hero
- [ ] clear introduction
- [ ] practical information
- [ ] related tours
- [ ] Story associations
- [ ] guides
- [ ] internal links
- [ ] metadata
- [ ] schema where appropriate
- [ ] EN
- [ ] DE

---

# 23. Phase 20 — Story Pages

## Tasks

- [ ] Story identity
- [ ] narrative
- [ ] related destinations
- [ ] related tours
- [ ] visual storytelling
- [ ] CTA
- [ ] internal links
- [ ] SEO
- [ ] EN
- [ ] DE

Keep the page understandable for users arriving directly from Google.

---

# 24. Phase 21 — Guide / Editorial Pages

## Tasks

- [ ] guide template
- [ ] article structure
- [ ] author/editor metadata where appropriate
- [ ] related destination
- [ ] related tours
- [ ] answer blocks
- [ ] FAQ when genuinely useful
- [ ] schema
- [ ] EN/DE according to content plan

Focus on actual traveler questions.

---

# 25. Phase 22 — Homepage Semantic Version

Before 3D, build the complete functional homepage.

## Tasks

- [ ] semantic hero
- [ ] Story proposition
- [ ] featured Stories
- [ ] featured tours
- [ ] destinations
- [ ] trust
- [ ] reviews where verified
- [ ] guides/inspiration
- [ ] booking CTA
- [ ] EN
- [ ] DE
- [ ] metadata
- [ ] schema
- [ ] responsive design

## Exit Criteria

The homepage works and converts even if 3D is completely disabled.

---

# 26. Phase 23 — Booking Data Model & API

## Tasks

- [ ] booking schema
- [ ] booking reference
- [ ] customer relationship
- [ ] tour snapshot
- [ ] pricing snapshot
- [ ] traveler data
- [ ] options/extras
- [ ] attribution
- [ ] locale
- [ ] validation
- [ ] status history
- [ ] internal notes
- [ ] customer-visible notes/messages if used

---

# 27. Phase 24 — Multi-Step Booking UI

## Tasks

- [ ] Step 1 — Tour / Date
- [ ] Step 2 — Travelers / Options
- [ ] Step 3 — Contact
- [ ] Step 4 — Review
- [ ] Step 5 — Confirmation

If project booking specification defines different steps, follow that file.

Also:

- [ ] progress indicator
- [ ] back navigation
- [ ] preserved values
- [ ] validation
- [ ] mobile UX
- [ ] EN
- [ ] DE
- [ ] accessibility

---

# 28. Phase 25 — Booking Notifications

## Tasks

- [ ] customer EN email
- [ ] customer DE email
- [ ] admin notification
- [ ] email retry/logging
- [ ] sender authentication
- [ ] booking reference
- [ ] safe content

Booking persistence must not depend on successful email delivery.

---

# 29. Phase 26 — Booking Admin

## Tasks

- [ ] booking list
- [ ] filters
- [ ] search
- [ ] booking detail
- [ ] assignment
- [ ] status
- [ ] payment status
- [ ] customer data
- [ ] internal notes
- [ ] history
- [ ] quote action
- [ ] export permissions
- [ ] upcoming travel view

---

# 30. Phase 27 — Quote Workflow

## Tasks

- [ ] create quote
- [ ] version quote
- [ ] price lines
- [ ] expiry
- [ ] customer-facing presentation
- [ ] send
- [ ] accept
- [ ] supersede
- [ ] audit

Never overwrite a previously sent quote without version history.

---

# 31. Phase 28 — Payment Integration

Only if included in launch scope.

## Tasks

- [ ] provider sandbox
- [ ] payment session
- [ ] deposit/full payment rules
- [ ] return routes
- [ ] server verification
- [ ] webhook
- [ ] signature verification
- [ ] idempotency
- [ ] payment record
- [ ] refund workflow
- [ ] reconciliation

No card data stored locally.

---

# 32. Phase 29 — Transportation / Transfer Booking

## Tasks

- [ ] route data
- [ ] pricing
- [ ] origin
- [ ] destination
- [ ] passengers
- [ ] vehicle
- [ ] one-way/return
- [ ] date/time
- [ ] flight information if required
- [ ] EN
- [ ] DE
- [ ] admin record

---

# 33. Phase 30 — Custom Tour Request

## Tasks

- [ ] destinations
- [ ] travel dates
- [ ] duration
- [ ] travelers
- [ ] interests
- [ ] accommodation preference where required
- [ ] contact
- [ ] special request
- [ ] EN
- [ ] DE
- [ ] admin workflow

Do not over-collect personal data.

---

# 34. Phase 31 — Technical SEO Foundation

## Tasks

- [ ] metadata generation
- [ ] canonical
- [ ] robots
- [ ] sitemap
- [ ] hreflang
- [ ] breadcrumbs
- [ ] clean URLs
- [ ] noindex controls
- [ ] 404
- [ ] redirects
- [ ] structured data
- [ ] social metadata

---

# 35. Phase 32 — Redirect Engine

## Tasks

- [ ] import migration redirect map
- [ ] exact legacy path matching
- [ ] permanent status
- [ ] loop prevention
- [ ] chain prevention
- [ ] redirect admin
- [ ] audit
- [ ] slug-history support

Test all high-value legacy URLs.

---

# 36. Phase 33 — AEO Content Components

## Tasks

Create reusable patterns for:

- [ ] concise answer
- [ ] key facts
- [ ] itinerary summary
- [ ] practical traveler question
- [ ] FAQ
- [ ] destination facts
- [ ] comparison content where useful

Answers should be visible content, not schema-only content.

---

# 37. Phase 34 — GEO / Entity Architecture

## Tasks

- [ ] organization entity consistency
- [ ] destination entity relationships
- [ ] tour relationships
- [ ] Story relationships
- [ ] author/editor information where relevant
- [ ] structured facts
- [ ] consistent business contact details
- [ ] authoritative guide architecture

Avoid unsupported claims about “AI rankings.”

---

# 38. Phase 35 — Content Rewrite

Only after facts are verified.

For each page:

- [ ] identify search intent
- [ ] preserve protected facts
- [ ] improve structure
- [ ] improve usefulness
- [ ] apply Jordan Story voice
- [ ] add internal links
- [ ] create answer blocks
- [ ] write metadata
- [ ] remove filler
- [ ] editorial review

---

# 39. Phase 36 — German Localization

For each priority page:

- [ ] German keyword/search-intent research
- [ ] localized title
- [ ] localized H1
- [ ] natural body copy
- [ ] tour facts synced
- [ ] German CTA
- [ ] German FAQ
- [ ] German metadata
- [ ] internal links
- [ ] editorial review
- [ ] publish approval

Do not merely machine-translate the English SEO page.

---

# 40. Phase 37 — Immersive Technical POC

## Scope

Build only:

**Siq entry → forward scroll → Treasury reveal**

## Tasks

- [ ] scene setup
- [ ] camera path
- [ ] scroll mapping
- [ ] first Siq segment
- [ ] Treasury
- [ ] lighting
- [ ] texture compression
- [ ] loading strategy
- [ ] desktop benchmark
- [ ] mobile benchmark
- [ ] fallback
- [ ] reduced motion

## Exit Criteria

POC must prove acceptable:

- load
- FPS
- memory
- scroll feel
- mobile stability
- visual quality

If it fails, simplify before expanding.

---

# 41. Phase 38 — Siq Production Experience

After POC approval:

- [ ] entry
- [ ] middle section
- [ ] final turn
- [ ] anticipation
- [ ] Treasury reveal
- [ ] narrative overlays
- [ ] CTA integration
- [ ] progressive asset loading
- [ ] performance tiers

---

# 42. Phase 39 — Wadi Rum Experience

## Tasks

- [ ] transition concept
- [ ] terrain
- [ ] rock formations
- [ ] environment
- [ ] lighting
- [ ] atmosphere
- [ ] Story content
- [ ] CTA
- [ ] reduced tier
- [ ] fallback

Wadi Rum should not be heavier than Petra.

---

# 43. Phase 40 — Immersive Homepage Integration

## Tasks

- [ ] semantic hero remains available
- [ ] capability detection
- [ ] full 3D
- [ ] reduced 3D
- [ ] fallback
- [ ] reduced motion
- [ ] loading
- [ ] error handling
- [ ] renderer lifecycle
- [ ] pause when hidden
- [ ] dispose resources
- [ ] mobile touch behavior

---

# 44. Phase 41 — Performance Optimization

## Tasks

- [ ] bundle analysis
- [ ] 3D code isolation
- [ ] image optimization
- [ ] font optimization
- [ ] GLB compression
- [ ] texture compression
- [ ] LOD
- [ ] render pixel ratio
- [ ] caching
- [ ] CDN
- [ ] database query review
- [ ] lazy loading
- [ ] third-party script audit

Measure:

- [ ] LCP
- [ ] INP
- [ ] CLS
- [ ] FPS
- [ ] transfer size
- [ ] memory

---

# 45. Phase 42 — Accessibility

## Tasks

- [ ] semantic landmarks
- [ ] headings
- [ ] keyboard navigation
- [ ] focus
- [ ] form labels
- [ ] validation errors
- [ ] contrast
- [ ] alt text
- [ ] reduced motion
- [ ] screen-reader booking test
- [ ] non-3D content equivalence

---

# 46. Phase 43 — Security Hardening

## Tasks

- [ ] HTTPS
- [ ] secure sessions
- [ ] authorization review
- [ ] CSRF controls
- [ ] XSS controls
- [ ] SQL injection controls
- [ ] rate limits
- [ ] upload validation
- [ ] CSP
- [ ] security headers
- [ ] secrets review
- [ ] database access review
- [ ] audit logs
- [ ] payment verification
- [ ] dependency scan

---

# 47. Phase 44 — Privacy & Consent

## Tasks

- [ ] data minimization review
- [ ] privacy EN
- [ ] privacy DE
- [ ] booking terms EN
- [ ] booking terms DE
- [ ] cookie/consent configuration
- [ ] marketing consent separation
- [ ] analytics PII audit
- [ ] retention configuration
- [ ] third-party inventory

---

# 48. Phase 45 — Analytics

## Tasks

Implement:

- [ ] page/tour views
- [ ] Story views
- [ ] destination views
- [ ] booking start
- [ ] booking steps
- [ ] booking submit
- [ ] confirmed booking
- [ ] payment
- [ ] WhatsApp click
- [ ] phone click
- [ ] acquisition
- [ ] locale
- [ ] immersive milestones
- [ ] performance tier

No PII in analytics.

---

# 49. Phase 46 — Admin Reports

## Tasks

- [ ] executive overview
- [ ] booking status
- [ ] upcoming tours
- [ ] tour performance
- [ ] Story performance
- [ ] destination performance
- [ ] EN vs DE
- [ ] source/campaign
- [ ] revenue
- [ ] deposits/outstanding
- [ ] cancellations
- [ ] lost reasons
- [ ] SEO/search view where integrated

---

# 50. Phase 47 — Migration Import

## Tasks

- [ ] freeze old-site relevant changes
- [ ] final source extraction
- [ ] resolve last conflicts
- [ ] import destinations
- [ ] import Stories
- [ ] import tours
- [ ] import itinerary
- [ ] import prices
- [ ] import media
- [ ] import reviews only if verified
- [ ] import EN content
- [ ] import approved DE
- [ ] import redirects
- [ ] validate relationships

---

# 51. Phase 48 — Full Content QA

Verify every important tour:

- [ ] facts
- [ ] route
- [ ] itinerary
- [ ] price
- [ ] inclusions
- [ ] exclusions
- [ ] media
- [ ] Story
- [ ] destinations
- [ ] booking
- [ ] EN
- [ ] DE
- [ ] SEO

---

# 52. Phase 49 — Full Technical SEO QA

Crawl staging.

Verify:

- [ ] 200 pages
- [ ] redirects
- [ ] 404
- [ ] title
- [ ] description
- [ ] H1
- [ ] canonical
- [ ] hreflang
- [ ] schema
- [ ] sitemap
- [ ] robots
- [ ] internal links
- [ ] no orphan priority pages
- [ ] no staging URLs

---

# 53. Phase 50 — Booking QA

Test:

- [ ] EN booking
- [ ] DE booking
- [ ] all dropdowns
- [ ] all conditional fields
- [ ] traveler boundaries
- [ ] dates
- [ ] extras
- [ ] price tampering
- [ ] duplicate submission
- [ ] database error
- [ ] email failure
- [ ] admin record
- [ ] notification
- [ ] attribution

---

# 54. Phase 51 — Admin QA

Test:

- [ ] authentication
- [ ] roles
- [ ] permissions
- [ ] tour management
- [ ] German workflow
- [ ] pricing
- [ ] booking
- [ ] quotes
- [ ] payments
- [ ] reports
- [ ] redirects
- [ ] users
- [ ] audit history

---

# 55. Phase 52 — Immersive QA

Test:

- [ ] desktop full 3D
- [ ] mobile full/reduced tier
- [ ] cinematic fallback
- [ ] reduced motion
- [ ] slow network
- [ ] WebGL failure
- [ ] scroll
- [ ] Treasury reveal
- [ ] Wadi Rum
- [ ] navigation
- [ ] booking CTA
- [ ] analytics
- [ ] resource disposal

---

# 56. Phase 53 — Cross-Browser & Device QA

Desktop:

- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

Mobile:

- [ ] iPhone Safari
- [ ] Android Chrome
- [ ] mid-range Android
- [ ] tablet

Test portrait/landscape where relevant.

---

# 57. Phase 54 — Backup & Recovery

Before launch:

- [ ] old website backup
- [ ] old database backup
- [ ] new database backup
- [ ] media backup
- [ ] environment/config backup
- [ ] restore test
- [ ] rollback documentation

---

# 58. Phase 55 — Production Preparation

Verify:

- [ ] domain
- [ ] canonical host
- [ ] SSL
- [ ] production database
- [ ] storage
- [ ] CDN
- [ ] email
- [ ] payment live credentials if applicable
- [ ] analytics
- [ ] Search Console
- [ ] sitemap
- [ ] robots
- [ ] redirects
- [ ] error monitoring
- [ ] RUM/Core Web Vitals monitoring

---

# 59. Phase 56 — Launch

Sequence:

1. [ ] content/pricing freeze
2. [ ] final backups
3. [ ] final migration delta
4. [ ] deploy application
5. [ ] apply migrations
6. [ ] verify environment
7. [ ] activate redirects
8. [ ] verify robots
9. [ ] verify sitemap
10. [ ] test homepage
11. [ ] test EN tour
12. [ ] test DE tour
13. [ ] submit test booking
14. [ ] verify admin
15. [ ] verify email/payment
16. [ ] verify immersive
17. [ ] verify analytics
18. [ ] submit sitemap

---

# 60. Phase 57 — First 24 Hours

Monitor:

- [ ] uptime
- [ ] 5xx errors
- [ ] 404s
- [ ] redirect failures
- [ ] bookings
- [ ] emails
- [ ] payments
- [ ] admin errors
- [ ] immersive failures
- [ ] fallback rate
- [ ] analytics
- [ ] crawl/indexing signals

Fix P0/P1 immediately.

---

# 61. Phase 58 — First 7 Days

Review:

- [ ] indexing
- [ ] Search Console
- [ ] old URL redirects
- [ ] organic landing pages
- [ ] EN/DE traffic
- [ ] booking funnel
- [ ] conversion
- [ ] immersive performance
- [ ] Core Web Vitals
- [ ] customer feedback
- [ ] staff/admin feedback

---

# 62. Phase 59 — First 30 Days

Create baseline report:

- [ ] organic clicks
- [ ] impressions
- [ ] bookings
- [ ] confirmed bookings
- [ ] revenue/booking value
- [ ] top tours
- [ ] top destinations
- [ ] top Stories
- [ ] English vs German
- [ ] source markets
- [ ] booking abandonment
- [ ] immersive engagement
- [ ] CWV
- [ ] SEO issues
- [ ] content opportunities

---

# 63. Phase 60 — Continuous Improvement

Monthly:

- [ ] SEO review
- [ ] German SEO review
- [ ] content refresh
- [ ] booking funnel review
- [ ] lost-lead review
- [ ] Story performance
- [ ] immersive performance
- [ ] dependency/security updates
- [ ] backup checks
- [ ] performance regressions

---

# 64. Future Third-Language Gate

Do not add a third language only because infrastructure supports it.

Before deciding, review:

- [ ] Jordan visitor/source-market data
- [ ] website source countries
- [ ] Search Console demand
- [ ] booking inquiries
- [ ] confirmed bookings
- [ ] revenue potential
- [ ] search competition
- [ ] content/localization cost
- [ ] operational support capability

Then choose the language with the strongest business case.

---

# 65. Agent Progress Report Format

At the end of every major phase, report:

```text
PHASE:
STATUS:

COMPLETED:
- ...

TESTED:
- ...

BLOCKED:
- ...

BUSINESS VERIFICATION REQUIRED:
- ...

FILES / DATABASE CHANGES:
- ...

NEXT PHASE:
- ...
```

Do not simply say “done.”

---

# 66. Agent Blocker Rule

If a technical issue blocks progress:

1. identify exact blocker
2. attempt safe solution
3. document impact
4. propose alternatives

If a business fact blocks progress:

1. do not invent
2. mark `[!]`
3. add to verification queue
4. continue unrelated work

---

# 67. Change-Control Rule

If the agent believes a specification should change:

do not silently change it.

Document:

```text
CURRENT SPEC:
PROPOSED CHANGE:
REASON:
BENEFIT:
RISK:
FILES AFFECTED:
APPROVAL REQUIRED:
```

Wait for approval when the change affects business/product requirements.

---

# 68. No Premature Completion

The project is not complete because:

- homepage looks good
- tour template works
- admin opens
- 3D works on one desktop
- Lighthouse shows a good score

Completion requires the acceptance gates in files `19` and `20`.

---

# 69. Final Execution Principle

The implementation order protects the project from a common failure:

**building the impressive part before building the correct part.**

For Jordan Story Tours, the correct order is:

**Preserve → Verify → Structure → Build → Localize → Optimize → Immerse → Measure → Test → Launch.**

The immersive experience is the signature.

The tour data is the truth.

The booking system is the business.

SEO/AEO/GEO create discovery.

German creates a new market entry point.

The admin makes the platform maintainable.

And **Jordan Story** ties all of it together.
