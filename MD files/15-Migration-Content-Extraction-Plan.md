# 15 — Migration & Content Extraction Plan
## Jordan Story Tours — Existing Site → New English/German Platform

**Purpose:** Define the exact migration workflow for extracting the current Jordan Story Tours website, preserving original business data, identifying conflicts, rewriting content for SEO/AEO/GEO, creating German versions, mapping redirects and loading verified records into the new system.

**Primary rule:** Never rewrite first. Extract first.

---

# 1. Migration Objective

The redesign must preserve everything valuable from the current website while removing:

- factual inconsistencies
- duplicate content
- weak generic naming
- outdated SEO structure
- poor formatting
- broken booking logic
- language limitations
- hard-coded pricing where possible

The migration is a controlled transformation, not a copy/paste exercise.

---

# 2. Migration Layers

Use four layers:

## Layer 1 — Raw Source
Exact data extracted from the current website.

## Layer 2 — Normalized Data
Spelling, formatting and structure standardized without changing business meaning.

## Layer 3 — Verified Business Data
Conflicts resolved and operational facts approved.

## Layer 4 — Published Content
SEO/AEO/GEO rewrite, Story layer, English + German presentation.

Never overwrite Layer 1.

---

# 3. Crawl Scope

Crawl every public URL including:

- homepage
- all tour pages
- tour category pages
- destination pages
- about
- contact
- transportation
- custom-tour pages
- travel/blog pages
- privacy
- terms
- booking/enquiry forms
- search/filter pages worth reviewing
- media references
- sitemap URLs
- legacy/duplicate URLs that remain accessible

Also inspect:
- XML sitemap(s)
- robots.txt
- canonical tags
- hreflang if any
- structured data
- status codes
- redirects

---

# 4. URL Inventory

For every discovered URL store:

- source URL
- HTTP status
- indexable?
- canonical
- page type
- language
- title
- meta description
- H1
- last-modified where meaningful
- internal links in
- internal links out
- migration decision
- target URL
- redirect required?
- notes

Migration decisions:
- KEEP
- IMPROVE
- MERGE
- REDIRECT
- REMOVE
- VERIFY

---

# 5. Tour Extraction

For every tour extract:

- source URL
- existing title
- existing slug
- category
- labels/badges
- price
- price wording
- pricing basis if stated
- duration
- nights
- capacity
- start location
- end location
- route
- destinations
- full introduction
- itinerary
- day numbers
- stop names
- driving times
- meals
- accommodation
- guide details
- driver details
- entrance fees
- inclusions
- exclusions
- optional extras
- notes
- gallery
- reviews
- FAQ
- booking fields
- booking defaults
- related tours
- metadata
- schema
- internal links

No field should be silently omitted.

---

# 6. Itinerary Extraction

Preserve itinerary text per day/stop.

Store:

- original heading
- original text
- original sequence
- extracted locations
- extracted meals
- extracted hotel/camp
- extracted activity
- extracted duration/time
- source evidence

Do not merge two itinerary days during extraction.

---

# 7. Booking Form Extraction

For every tour/booking form capture:

- form URL
- field label
- field name/key if available
- type
- required?
- placeholder
- default value
- dropdown/radio values
- validation rule
- conditional behavior
- pricing effect
- hidden fields
- consent text
- submit label
- success message
- error message

This must include all dropdown values.

---

# 8. Booking Dropdown Registry

Build a master registry for:

- nationality
- pickup
- destination
- vehicle
- traveler count
- guide language
- hotel class
- room type
- optional extras
- travel style
- tour category
- transport route
- any other existing select/radio values

Mark each as:

- global
- tour-specific
- obsolete
- duplicated
- needs verification

---

# 9. Transportation Extraction

Capture:

- route origin
- route destination
- vehicle type
- passenger capacity
- one-way price
- return price if present
- currency
- notes
- booking form values
- luggage rules
- waiting rules
- airport/flight fields
- transfer terms

Move current hard-coded prices into structured admin data after verification.

---

# 10. Destination Extraction

For every destination page:

- title
- URL
- H1
- body copy
- historical claims
- practical info
- related tours
- media
- metadata
- internal links
- FAQs
- schema
- spelling variants

Create one canonical destination entity after normalization.

---

# 11. Story-Relevant Existing Content

Search current site for wording around:

- Story
- Journey
- Our Story
- Begin your Story
- Start your Story
- Jordan Story
- experience
- discovery

Preserve useful existing brand language as evidence for the evolved Story system.

---

# 12. Media Extraction

For every referenced image/video store:

- source URL
- page usage
- filename
- dimensions if obtainable
- alt text
- caption
- destination
- tour
- likely hero/gallery role
- source/ownership information if known
- migration status

Do not assume legal rights merely because an image is on the existing site.

---

# 13. Review Extraction

Capture:

- source page
- reviewer name/display name
- rating
- text
- date
- tour
- source platform if known
- language
- current visibility

Do not rewrite review text as if it were original customer wording.

---

# 14. SEO Extraction

For every important page record:

- title tag
- meta description
- H1
- H2 structure
- canonical
- robots
- schema types
- breadcrumbs
- Open Graph
- image alt text
- internal anchors

This supports migration and identifies existing search targets.

---

# 15. Current Ranking Evidence

Where Search Console/analytics data is available, add:

- clicks
- impressions
- queries
- landing-page traffic
- conversions
- countries
- devices

High-value URLs receive stronger preservation priority.

Do not infer ranking strength without data.

---

# 16. Backlink Preservation

If backlink data is available:

- source page
- linking domain
- target URL
- anchor
- quality/relevance notes

URLs with meaningful backlinks should not be changed casually.

---

# 17. Raw Source Storage

Recommended file structure:

```text
migration/
├── urls/
├── tours/
├── destinations/
├── booking/
├── media/
├── seo/
└── source-snapshots/
```

Raw extracts should include source URL and extraction date.

---

# 18. Tour Raw File Template

Example:

```text
# Raw Tour Record

Source URL:
Extraction Date:

## Existing Title

## Existing Price

## Existing Duration

## Existing Route

## Existing Description

## Existing Itinerary
### Day 1
[verbatim/faithful source extract]

## Existing Inclusions

## Existing Exclusions

## Existing Booking Fields

## Existing Media

## Existing SEO

## Conflicts / Notes
```

Raw records must not include optimized rewrite mixed into the source section.

---

# 19. Normalization

Normalization may correct:

- whitespace
- obvious formatting
- destination spelling consistency
- structured date/number formats
- duplicate line breaks
- normalized phone formatting
- category mapping

Normalization must not change operational meaning.

---

# 20. Destination Naming Standard

Create one canonical internal name.

Examples:

- Ajloun
- Umm Qais
- Karak
- Wadi Rum
- Dead Sea

Legacy spellings remain documented for redirects/content migration.

Do not rename historical proper nouns carelessly.

---

# 21. Conflict Detection

Automatically/manual flag examples:

- duration says 6 days, itinerary has 7
- “lunch included” appears in itinerary but not inclusion list
- page title says private but body does not
- guide listed in one section but excluded elsewhere
- different prices on category vs detail page
- overnight location does not match next-day start
- “always available” conflicts with seasonal reality

No AI auto-resolution for operational conflicts.

---

# 22. Conflict Severity

## Critical
Could change what customer buys/pays.

Examples:
- price
- duration
- missing day
- visa
- hotel
- included activity

## Major
Could create expectation issues.

Examples:
- guide type
- meal
- entrance
- pickup

## Minor
Editorial/formatting.

Examples:
- spelling
- capitalization
- grammar

---

# 23. Verification Queue

Create dashboard/import queue:

- record
- fact
- source conflict
- severity
- recommended question
- status
- verified value
- verified by
- date

Business owner/admin resolves factual conflicts.

---

# 24. Protected Business Facts

Protected fields include:

- route
- price
- pricing basis
- duration
- hotel/camp
- meal
- guide
- vehicle
- entrance
- optional activity
- visa
- border
- cancellation
- availability
- pickup/drop-off

AI cannot change these without verified source/admin input.

---

# 25. SEO Rewrite Stage

Only after facts are verified.

Each page gets:

- target intent
- primary query
- secondary queries
- new H1
- Story subtitle
- answer-first summary
- new structure
- practical content
- FAQs
- internal links
- metadata
- schema inputs

Do not keyword-stuff.

---

# 26. Story Rewrite Stage

Add Story layer:

- Story Collection
- Story subtitle
- chapter naming
- narrative transitions
- destination emotion

Story language must sit above accurate operational facts.

---

# 27. German Rewrite Stage

German comes after English facts are approved.

Workflow:

1. shared facts verified
2. English content approved
3. German keyword intent researched
4. German content localized
5. German editor reviews
6. German SEO metadata written
7. hreflang/canonical checked
8. publish

Do not translate unresolved conflicts.

---

# 28. German Tour Migration

Every priority tour receives:

- German title
- German slug
- German Story subtitle
- German summary
- German itinerary
- German inclusions/exclusions
- German FAQ
- German practical info
- German metadata
- German image alt text
- German booking UI

No half-translated launch pages.

---

# 29. German Destination Migration

Priority:

1. Petra
2. Wadi Rum
3. Dead Sea
4. Amman
5. Jerash
6. Aqaba
7. Madaba
8. Mount Nebo

Then expand based on strategy.

---

# 30. URL Decision Process

For each legacy URL ask:

1. Is it indexed?
2. Does it rank?
3. Does it have backlinks?
4. Does it match useful intent?
5. Is the slug misleading?
6. Is there duplicate content?
7. Will a new page replace it?

Then decide:
- KEEP
- 301
- MERGE
- REMOVE

---

# 31. Redirect Map

Store:

| Old URL | New URL | Status | Reason | Verified |
|---|---|---|---|---|

Rules:

- one-hop 301
- no loops
- no chains
- no mass homepage redirects
- preserve query-independent canonical destination

---

# 32. Slug Changes

When changing a published slug:

- update internal links
- create redirect
- update canonical
- update sitemap
- update hreflang
- update German equivalent mapping
- preserve slug history

---

# 33. Content Cannibalization Audit

Before creating new page:

- compare intent
- compare query overlap
- compare tour inventory
- compare content role

Merge or differentiate where necessary.

Do not create multiple near-identical Petra pages.

---

# 34. Duplicate Tour Audit

Flag:

- same route/duration
- same itinerary
- different names
- different prices
- outdated product versions

Business decides whether to:
- merge
- preserve
- reposition

---

# 35. Image Migration

For approved assets:

1. download/source original
2. confirm rights
3. optimize
4. rename where useful
5. upload to new storage
6. create EN alt
7. create DE alt
8. assign focal point
9. associate with destination/tour

Do not hotlink old WordPress media indefinitely.

---

# 36. Media Replacement

For poor-quality or unlicensed media:

- keep reference in audit
- mark REPLACE
- request client asset
- source licensed asset if approved
- produce new photography/3D reference where needed

---

# 37. 3D Reference Extraction

Current website media may help identify:

- Petra angles
- Wadi Rum formations
- brand photography
- preferred destinations

But immersive 3D assets need a separate production-quality sourcing pipeline.

Do not convert arbitrary low-resolution site images directly into final 3D assets.

---

# 38. Structured Data Migration

Extract current schema for comparison.

Then rebuild from new verified database.

Do not copy old JSON-LD blindly.

New schema is generated from:
- organization settings
- tour data
- destination entities
- review records
- guide data

---

# 39. Booking Migration

If historical booking records are available and worth preserving:

Map:

- customer
- tour
- travel date
- travelers
- contact
- status
- notes
- price
- payment

Do not import unreliable records without source traceability.

---

# 40. Existing Form Mapping

Map old field → new field.

Example:

```text
Old: No. of Persons
New: adults + children + infants
Migration: preserve original total where historical; use new structured fields going forward
```

No field disappears without a mapping decision.

---

# 41. Content Rewrite File Structure

Recommended:

```text
content/
├── en/
│   ├── tours/
│   ├── destinations/
│   ├── stories/
│   └── guides/
└── de/
    ├── tours/
    ├── destinations/
    ├── stories/
    └── guides/
```

These MD files are implementation/content specifications before database import.

---

# 42. Optimized Tour MD Template

```text
# Tour Title

## Source Reference

## Protected Facts

## Story Identity

## Search Intent

## Hero

## Quick Answer

## Route

## Itinerary

## Included

## Not Included

## Practical Information

## FAQ

## Related Destinations

## Related Stories

## SEO Metadata

## Schema Inputs

## German Mapping
```

---

# 43. German MD Files

German files must not be auto-generated and published without review.

Include:

- source English file
- German keyword target
- translation status
- German editor/reviewer
- factual parity check

---

# 44. Content Approval States

- Extracted
- Normalized
- Needs Verification
- Verified
- EN Draft
- EN Approved
- DE Draft
- DE Reviewed
- Ready for Import
- Published

---

# 45. Import Process

After approval:

1. create/update destination entities
2. create Stories
3. import tour shared facts
4. import EN translation
5. import DE translation
6. import itinerary
7. import pricing
8. import inclusions/exclusions
9. import media
10. import SEO
11. create redirects
12. validate public rendering

---

# 46. Import Idempotency

Migration scripts should be repeatable where practical.

Use stable source IDs/keys.

Do not create duplicate tours on every import run.

---

# 47. Pre-Launch Crawl

Before DNS/launch:

Crawl staging and compare:

- expected URLs
- status codes
- titles
- H1
- canonical
- hreflang
- redirects
- internal links
- images
- schema
- noindex

Staging itself remains blocked from indexing.

---

# 48. Legacy-to-New Comparison

For every high-value old URL verify:

- destination exists
- content intent preserved
- redirect correct if changed
- important tour facts preserved
- new page stronger than old

---

# 49. Booking QA

Test every important tour:

- Check Availability
- tour preselected
- date
- travelers
- conditional fields
- submission
- admin record
- customer email
- German flow

---

# 50. German QA

Test:

- all `/de/` links
- language switch
- German breadcrumb
- German metadata
- German booking
- German email
- no English system fallback
- hreflang reciprocal

---

# 51. 404 Audit

After migration:

- crawl old URL list
- ensure intentional redirects
- identify unexpected 404s
- fix high-value broken links

Do not panic-redirect every 404 to homepage.

---

# 52. Analytics Baseline

Before launch record:

- current organic traffic
- current top pages
- current conversions
- current query themes
- current country split

After launch compare against baseline.

---

# 53. Search Console Migration Monitoring

After launch:

- submit sitemap
- inspect important URLs
- monitor indexing
- monitor redirects
- monitor 404s
- monitor clicks/impressions
- watch German indexing separately

---

# 54. Rollback Safety

Before launch preserve:

- old site backup
- database backup
- media backup
- redirect map
- DNS/hosting configuration

A redesign must be reversible operationally during launch if critical failure occurs.

---

# 55. Post-Launch Verification

Within the launch period verify:

- bookings working
- email working
- payment if applicable
- admin access
- EN pages
- DE pages
- 3D fallback
- Core Web Vitals
- sitemap
- robots
- canonical
- hreflang
- redirects
- analytics

---

# 56. Content Maintenance After Migration

The extraction project ends, but content governance continues.

Admin must maintain:

- pricing
- availability
- hotel/camp information
- guide availability
- visa/border notes
- transportation pricing
- seasonal content
- German translation freshness

---

# 57. Extraction Automation Rules

An AI/crawler may automate:

- URL discovery
- content extraction
- field detection
- table extraction
- metadata extraction
- duplicate detection
- conflict suggestions

It may not automatically:

- resolve business conflicts
- change price
- merge tours
- delete URLs
- publish rewritten facts
- invent German facts

---

# 58. Evidence Requirement

Every protected fact in the migration layer should be traceable to:

- source URL
- source section
- client/admin verification
- authoritative operational source

If no evidence exists, mark it unknown.

Do not guess.

---

# 59. Recommended Deliverables

Migration package should ultimately include:

- complete URL inventory
- complete tour inventory
- raw tour extracts
- booking-field registry
- transportation matrix
- destination inventory
- media inventory
- conflict report
- redirect map
- optimized EN tour files
- optimized DE tour files
- optimized destination files
- Story mapping
- SEO keyword map
- import-ready data
- pre-launch QA report

---

# 60. Final Migration Principle

We are not replacing the current Jordan Story Tours website and hoping nothing valuable is lost.

We are **capturing its entire business knowledge first**, then rebuilding it into a stronger system.

The process is:

**Extract the old Story.**  
**Verify the truth.**  
**Rewrite it beautifully.**  
**Localize it properly.**  
**Preserve its search value.**  
**Then launch the new Jordan Story.**
