# 01 --- Existing Website Data Audit

## Jordan Story Tours

**Project:** Jordan Story Tours Website Redesign\
**Website:** jordanstorytours.com\
**Document purpose:** Source-of-truth audit and migration specification\
**Status:** Phase 1 --- Existing Website Extraction\
**Important rule:** Existing operational facts must be preserved before
any SEO/AEO/GEO rewriting.

------------------------------------------------------------------------

# 1. Purpose

This document records the existing Jordan Story Tours website before
redesign and migration.

The redesign must not accidentally change:

-   Tour routes
-   Tour durations
-   Prices
-   Included services
-   Excluded services
-   Accommodation level
-   Entrance fees
-   Transportation promises
-   Guide/driver promises
-   Border/visa information
-   Booking requirements
-   Cancellation/terms information
-   Existing URLs with search-engine value

The extraction layer and optimization layer must remain separate.

**Source Data → Audit → Approved Business Facts → SEO/AEO/GEO Rewrite →
New Website Database**

------------------------------------------------------------------------

# 2. Brand Principle to Preserve

The strongest brand concept for the redesign is **STORY**.

Jordan Story Tours should not feel like a generic catalogue of tours.

Core product-language concepts:

-   Your Story Begins Here
-   Begin Your Story
-   Choose Your Jordan Story
-   The Ancient Story
-   The Desert Story
-   The Sacred Story
-   The Red Sea Story
-   The Complete Jordan Story
-   Every Journey Has a Story
-   Write Your Jordan Story

This concept should later influence the homepage, scroll-world
experience, tour collections, itineraries, booking journey, calls to
action, animation language, destination pages and content strategy.

Do not force the word "Story" unnaturally into SEO copy. Search intent
and readability remain more important than slogan repetition.

------------------------------------------------------------------------

# 3. Existing Website Snapshot

The existing website presents Jordan Story Tours as an inbound Jordan
travel company offering:

-   Day tours
-   Transportation
-   Customized tours
-   Budget tours
-   Classical tours
-   Luxury tours
-   Islamic and historical tours
-   Jordan + Holy Land tours

Existing company claims/content to verify before migration:

-   Member of Jordan Inbound Tour Operator Association (JITOA)
-   Member of Jordan Society of Travel and Tourist Agents (JSTA)
-   Registered under / associated with Jordan Tourism Board (JTB)
-   24/7 support
-   Best-price messaging
-   20+ sites to visit

Existing contact information found:

-   Phone: +962 6 552 2667
-   Email: info@jordanstorytours.com

**Audit note:** The phone number is displayed twice in several existing
page templates. Fix this in the redesign.

------------------------------------------------------------------------

# 4. Existing Tour Inventory

The current tour catalogue exposes at least the following 26 products.

## Day Tours / Transportation

1.  Amman -- Desert Castle -- Amman --- From \$135 --- 1 Day
2.  Amman -- Aqaba -- Amman --- From \$300 --- 1 Day
3.  Wadi Rum and Petra Tour from Amman --- From \$275 --- 1 Day
4.  Trip to Petra Jordan 1 Day --- From \$225 --- 1 Day
5.  Dead Sea & Wadi Mujib --- From \$150 --- 1 Day
6.  Baptism Site & Dead Sea --- From \$115 --- 1 Day
7.  Madaba, Mount Nebo & Dead Sea --- From \$135 --- 1 Day
8.  Madaba & Mount Nebo --- From \$75 --- 1 Day
9.  Jerash, Ajlun & Um Qais --- From \$140 --- 1 Day
10. Jerash & Ajlun --- Price not confirmed in current inventory --- 1
    Day
11. Jordan Tours from Amman --- From \$100 --- 1 Day

## Islamic & Historical

12. Islamic & Historical Tour --- 5 Days / 4 Nights
13. Islamic Tour --- 6 Days / 5 Nights
14. Islamic Jordan & Jerusalem Tour --- From \$1,500 --- 8 Days / 7
    Nights

## Budget Tours

15. Budget Tour 1 --- 3 Days / 2 Nights
16. Budget Tour 2 --- 3 Days / 2 Nights
17. Budget Tour 3 --- 4 Days / 3 Nights
18. Budget Tour 4 --- 4 Days / 3 Nights

## Luxury Tours

19. Jordan Luxury Tour 1 --- 6 Days / 5 Nights
20. Jordan Luxury Tour 2 --- 7 Days / 6 Nights
21. Jordan Luxury Tour 3 --- 6 Days / 5 Nights

## Classical Tours

22. Jordan Story Classic Tour 1 --- 5 Days / 4 Nights
23. Jordan Story Classic Tour 2 --- displayed as 7 Days / 5 Nights;
    VERIFY because this duration/night count may be inconsistent

## Jordan + Holy Land

24. Jordan & Holy Land Tour 1 --- displayed as 7 Days / 6 Nights;
    itinerary currently ends at Day 6; VERIFY
25. Jordan & Holy Land Tour 2 --- 7 Days / 6 Nights
26. Jordan & Holy Land Tour 3 --- From \$1,000 --- 7 Days / 6 Nights

------------------------------------------------------------------------

# 5. Existing Category Summaries

## Budget Tours

Existing catalogue summaries indicate:

-   Budget Tour 1: Petra, Dead Sea, Amman, Jerash
-   Budget Tour 2: Amman, Jerash, Madaba, Mount Nebo, Dead Sea, Petra
-   Budget Tour 3: Amman, Madaba, Mount Nebo, Petra, Wadi Rum
-   Budget Tour 4: Petra, Wadi Rum, Aqaba, Dead Sea, Baptism Site, Mount
    Nebo, Madaba

## Luxury Tours

Existing catalogue summaries indicate:

-   Luxury Tour 1: Petra, Al-Karak Castle, Amman, Madaba, Mount Nebo,
    Jerash, Ajloun
-   Luxury Tour 2: Amman, Umm Qais, Jerash, Ajloun, Al-Karak Castle,
    Madaba, Mount Nebo, Petra, Wadi Rum, Baptism Site
-   Luxury Tour 3: Amman, Baptism Site, Jerash, Aqaba, Madaba, Dead Sea,
    Mount Nebo, Petra, Wadi Rum, Shobak Castle

------------------------------------------------------------------------

# 6. Booking / Enquiry Form --- Confirmed Existing Fields

The existing tour enquiry interface currently exposes these fields:

1.  **Full Name**\* --- text
2.  **Nationality**\* --- currently presented as an input on indexed
    pages
3.  **Email Address**\* --- email
4.  **Phone No.**\* --- phone
5.  **Travel Date**\* --- date
6.  **No. of Persons**\* --- traveler count
7.  **Your Enquiry**\* --- free-text message
8.  **Terms of Service and Privacy Statement agreement**\* --- required
    consent

Some pages expose both labels:

-   Booking Form
-   Enquiry Form

This should be standardized in the redesign.

## Booking Data We Must Preserve

Every migrated/new booking record should be capable of storing:

-   Booking ID/reference
-   Tour ID
-   Tour title snapshot
-   Tour price snapshot
-   Customer full name
-   Nationality
-   Email
-   Phone
-   WhatsApp number if different
-   Travel date
-   Number of travelers
-   Customer enquiry/special requests
-   Consent timestamp
-   Language
-   Booking status
-   Payment status
-   Source / attribution
-   UTM parameters
-   Internal admin notes
-   Created date
-   Updated date

------------------------------------------------------------------------

# 7. Proposed New Multi-Step Booking Flow

This is a redesign recommendation, not existing source data.

## Step 1 --- Choose Your Story

-   Selected tour
-   Travel date
-   Number of adults
-   Number of children
-   Optional infants
-   Private / group option if applicable

## Step 2 --- Your Journey

-   Pickup city/location
-   Hotel/accommodation
-   Return/drop-off location
-   Flight information when applicable
-   Optional extras
-   Special requirements

Fields should appear conditionally. Do not ask irrelevant questions.

## Step 3 --- Traveler Details

-   Full name
-   Nationality
-   Country of residence
-   Email
-   Phone
-   WhatsApp
-   Preferred contact method

## Step 4 --- Review Your Story

Display:

-   Tour
-   Route
-   Date
-   Travelers
-   Included services
-   Extras
-   Price/quote status
-   Terms

CTA:

**Start My Jordan Story**

or, where payment is required:

**Confirm My Jordan Story**

------------------------------------------------------------------------

# 8. Existing Tour Data --- Confirmed Samples

## Wadi Rum and Petra Tour from Amman

**Existing URL:** `/tour/wadi-rum-and-petra-tour-from-amman/`\
**Price:** From \$275\
**Duration:** 1 Day\
**Start:** Amman\
**Route:** Amman → Petra → Wadi Rum → Amman\
**Existing review count observed:** 1

### Existing operational inclusions

-   English-speaking driver
-   Transportation to Petra and Wadi Rum
-   Entrance fees
-   2-hour jeep/safari tour

### Existing exclusions

-   Sites not mentioned in itinerary
-   Personal expenses

### Migration recommendation

**KEEP URL if possible. IMPROVE CONTENT.**

This page already targets a commercially valuable search phrase.
Preserve URL equity and strengthen search intent, AEO questions,
itinerary clarity, structured data, conversion UX and internal links.

------------------------------------------------------------------------

## Trip to Petra Jordan 1 Day

**Existing URL:** `/tour/trip-to-petra-jordan/`\
**Price:** From \$225\
**Duration:** 1 Day\
**Route:** Amman → Petra → Amman

### Existing inclusions

-   English-speaking driver
-   Transportation to Petra
-   Entrance fees

### Existing exclusions

-   Sites not mentioned in itinerary
-   Personal expenses

### Migration recommendation

**KEEP/OPTIMIZE.**

The page already contains expanded Petra content and the useful "story
etched in stone" branding direction. Rewrite carefully around actual
Petra-tour search intent rather than keyword repetition.

------------------------------------------------------------------------

## Amman -- Aqaba -- Amman

**Existing URL:** `/tour/amman-aqaba-amman/`\
**Price:** From \$300\
**Duration:** 1 Day\
**Route:** Amman → Aqaba → Amman

### Existing inclusions

-   English-speaking driver
-   Transportation to Aqaba

### Existing exclusions

-   Sites not mentioned in itinerary
-   Personal expenses

### Audit issues

-   Existing copy contains substantial grammar and wording problems.
-   Destination copy should be rewritten for clarity and search intent.
-   Clarify whether activities such as diving/snorkeling are included,
    optional, or merely suggested.

------------------------------------------------------------------------

## Jerash, Ajlun & Um Qais

**Existing URL:** `/tour/jerash-ajlun-um-qais/`\
**Price:** From \$140\
**Duration:** 1 Day\
**Route:** Amman → Jerash → Ajloun → Umm Qais → Amman

### Existing inclusions

-   English-speaking driver
-   Transportation to all mentioned sites
-   Entrance fees to mentioned sites

### Existing exclusions

-   Sites not mentioned in itinerary
-   Personal expenses

### Audit issues

Standardize spelling:

-   Ajlun / Ajloun
-   Um Qais / Umm Qais

Use one canonical spelling strategy throughout URLs, visible content and
database destination entities.

------------------------------------------------------------------------

## Budget Tour 1

**Existing URL:** `/tour/budget-tour-1/`\
**Duration:** 3 Days / 2 Nights\
**Max people:** Existing page says Unlimited

### Existing route/program

-   Day 1: Queen Alia Airport → Petra visit
-   Day 2: Petra → Dead Sea → Amman
-   Day 3: Amman City Tour → Jerash → Queen Alia Airport

### Existing inclusions

-   Airport pickup/drop-off
-   Visa to Jordan
-   English-speaking driver
-   Transportation to itinerary sites
-   3-star accommodation
-   Daily breakfast
-   One dinner in Petra
-   Site guide for groups above five persons

### Existing exclusions

-   Entrance fees
-   Flights
-   Sites outside itinerary
-   Taxes/personal expenses

### Audit issues

"Max People: Unlimited" should be reviewed operationally.

"Budget Tour 1" is weak for SEO and conversion. Preserve the legacy URL
with redirect if renamed, but create a descriptive customer-facing name.

------------------------------------------------------------------------

## Jordan Luxury Tour 1

**Existing URL:** `/tour/jordan-luxury-tour-1/`\
**Duration:** 6 Days / 5 Nights

### Destinations currently described

-   Amman
-   Ajloun
-   Jerash
-   Madaba
-   Mount Nebo
-   Dead Sea
-   Petra
-   Al-Karak

### Existing inclusions

-   Airport pickup/drop-off
-   Visa to Jordan
-   English-speaking driver
-   Transportation
-   Daily breakfast
-   5-star accommodation
-   Two dinners
-   Dead Sea entrance
-   Site entrance fees
-   One Dead Sea lunch
-   Tour guide

### Audit issue

The word **Luxury** should be supported by clearly defined service
standards in the new site: hotel class, private vehicle, guide level,
dining, room type and optional upgrades.

------------------------------------------------------------------------

## Jordan & Holy Land Tour 1

**Existing URL:** `/tour/jordan-holy-land-tour-1/`\
**Displayed duration:** 7 Days / 6 Nights\
**Max people:** 50

### Existing itinerary observed

-   Day 1: Airport → Amman City Tour
-   Day 2: Amman → Madaba → Mount Nebo → Dead Sea → Amman
-   Day 3: Amman → Bethlehem → Jerusalem → Amman
-   Day 4: Amman → Petra
-   Day 5: Petra → Wadi Rum
-   Day 6: Wadi Rum → Queen Alia Airport

### Critical audit issue

The product is labeled **7 Days / 6 Nights**, but the visible itinerary
contains only six days.

**DO NOT INVENT DAY 7.**

Admin/client must confirm the correct duration/program before publishing
the redesigned page.

------------------------------------------------------------------------

## Jordan & Holy Land Tour 2

**Existing URL:** `/tour/jordan-holy-land-tour-2/`\
**Duration:** 7 Days / 6 Nights\
**Max people:** 50

### Existing itinerary

-   Day 1: Airport → Amman
-   Day 2: Amman → Madaba → Mount Nebo → Petra
-   Day 3: Petra → Amman
-   Day 4: Amman → Bethlehem → Jerusalem
-   Day 5: Jerusalem → Baptism Site → Dead Sea → Amman
-   Day 6: Amman → Jerash → Amman
-   Day 7: Amman → Queen Alia Airport

### Audit requirement

Border, visa, tax, bus, crossing and Holy Land operational information
must be verified immediately before launch because these facts can
change and should not be treated as evergreen marketing copy.

------------------------------------------------------------------------

## Islamic Jordan & Jerusalem Tour

**Existing URL:** `/tour/islamic-tour-jordan-jerusalem-3/`\
**Price:** From \$1,500\
**Duration:** 8 Days / 7 Nights

### Critical audit issue

Indexed content currently exposes Day 1, Day 2, Day 7 and Day 8 while
intermediate itinerary content is incomplete or not visible in the
extracted version.

**Do not reconstruct missing days with AI.**

Retrieve from source/admin and verify before rewriting.

------------------------------------------------------------------------

# 9. Content Quality Issues Already Identified

The existing site contains valuable business information but requires a
professional editorial pass.

Common issues:

-   Grammar
-   Sentence structure
-   Spelling
-   Inconsistent capitalization
-   Very long paragraphs
-   Inconsistent destination spelling
-   Repetitive descriptions
-   Weak generic tour names
-   Inconsistent duration data
-   Potential itinerary/day mismatches
-   Unclear inclusions vs optional experiences
-   Repeated contact information
-   Some pages with thin content
-   Some pages with keyword-oriented copy that can be made more natural
-   Mixed terminology: Booking Form / Enquiry Form
-   Old-style tour catalogue UX

The new content must be written for humans first while remaining highly
machine-readable.

------------------------------------------------------------------------

# 10. SEO/AEO/GEO Rewrite Rule

Every tour should eventually have two content layers.

## Layer A --- Protected Business Facts

Editable by authorized admin only:

-   Price
-   Duration
-   Route
-   Departure
-   Return
-   Accommodation
-   Meals
-   Transportation
-   Guide
-   Entrance fees
-   Included activities
-   Exclusions
-   Capacity
-   Operational notes
-   Booking rules

## Layer B --- Marketing / Search Content

Can be optimized without altering Layer A:

-   SEO title
-   Meta description
-   H1
-   Opening summary
-   Why choose this tour
-   Destination context
-   Experience descriptions
-   AEO question/answer blocks
-   FAQs
-   Related tours
-   Related destinations
-   Internal links
-   Image alt descriptions
-   Structured data inputs
-   Story Collection
-   Search-intent copy

AI must never infer or invent Layer A facts from Layer B copy.

------------------------------------------------------------------------

# 11. New Tour Content Template

Every optimized tour Markdown specification should eventually follow
this structure:

## Identity

-   Tour ID
-   Legacy URL
-   New URL
-   Status
-   Category
-   Story Collection
-   Destinations

## Protected Facts

-   Duration
-   Nights
-   Starting price
-   Currency
-   Price model
-   Capacity
-   Pickup
-   Drop-off
-   Route

## Hero

-   SEO-aware H1
-   Story subtitle
-   Short summary
-   Primary CTA
-   Secondary CTA

## Quick Facts

-   Duration
-   Route
-   Tour type
-   Languages
-   Transportation
-   Accommodation where applicable

## Your Story --- Itinerary

-   Chapter / Day
-   Location
-   Experience
-   Operational details

## Included

## Not Included

## Optional Extras

## Who This Story Is For

## Important Information

## FAQ / AEO Answers

## Related Jordan Stories

## SEO

-   Primary keyword
-   Secondary keywords
-   Search intent
-   SEO title
-   Meta description
-   Canonical
-   Internal links

## GEO / Entity Data

-   Destination entities
-   Geographic relationships
-   Departure entity
-   Attraction entities
-   Organization/service relationship

## Structured Data

-   TouristTrip / Trip where appropriate
-   BreadcrumbList
-   FAQPage only when eligible and useful
-   Organization references
-   Review/AggregateRating only when supported by genuine data

------------------------------------------------------------------------

# 12. Destination Entity Layer

Create independent destination records rather than repeating destination
descriptions inside every tour.

Initial entities:

-   Jordan
-   Amman
-   Petra
-   Wadi Rum
-   Dead Sea
-   Aqaba
-   Jerash
-   Ajloun
-   Umm Qais
-   Madaba
-   Mount Nebo
-   Baptism Site
-   Al-Karak / Karak Castle
-   Shobak Castle
-   Desert Castles
-   Queen Alia International Airport

This supports:

-   Destination landing pages
-   Tour filtering
-   Internal linking
-   Schema/entity consistency
-   AEO
-   GEO
-   Interactive Jordan map
-   Story Collections
-   Admin reporting

------------------------------------------------------------------------

# 13. Admin Dashboard Requirements Discovered from the Audit

The new CMS/admin must allow:

## Tour Management

-   Create/edit/archive tours
-   Edit prices
-   Sale/promo prices
-   Availability
-   Duration
-   Capacity
-   Categories
-   Story Collections
-   Destinations
-   Routes
-   Itinerary days
-   Inclusions
-   Exclusions
-   Optional extras
-   Gallery
-   Featured status
-   Related tours
-   FAQs
-   Booking rules
-   English content
-   German content
-   SEO fields

## Booking Management

Statuses:

-   New
-   Contacted
-   Quoted
-   Confirmed
-   Paid
-   Completed
-   Cancelled

Admin actions:

-   Search/filter bookings
-   Add internal notes
-   Update status
-   Update payment status
-   Export
-   View booking history
-   Contact traveler
-   Identify booking source

## Reports

-   Bookings by date
-   Revenue
-   Top tours
-   Top Story Collections
-   Top destinations
-   Top nationalities
-   Top countries of residence
-   Top languages
-   Conversion rate
-   Booking source
-   Organic vs Ads vs Social vs AI/referral
-   Cancellation rate
-   Average booking value

------------------------------------------------------------------------

# 14. Multilingual Architecture

Recommended launch direction:

-   English --- primary
-   German --- recommended second language

Potential later languages:

-   Italian
-   French
-   Russian

Do not use a client-side translation widget as the SEO solution.

Each language requires:

-   Dedicated URLs
-   Localized titles
-   Localized metadata
-   Localized body content
-   Localized FAQ answers
-   Localized structured data where applicable
-   Correct hreflang
-   Canonicals
-   Language-aware XML sitemaps
-   Translation status in admin

Example:

`/en/petra-tours/`

`/de/petra-touren/`

When English source content changes, the German record should become:

**Translation needs review**

It must not be silently overwritten.

------------------------------------------------------------------------

# 15. Migration Status Vocabulary

Every existing URL/content item should receive one of these decisions:

-   **KEEP** --- retain URL/content purpose
-   **IMPROVE** --- preserve URL, rewrite/upgrade content
-   **MERGE** --- consolidate overlapping content
-   **REDIRECT** --- replace URL and 301 to new destination
-   **REMOVE** --- remove only after SEO/business review
-   **VERIFY** --- business facts require client/admin confirmation

No indexed URL should disappear casually during redesign.

------------------------------------------------------------------------

# 16. High-Priority Verification Queue

Before final content rewriting, verify:

1.  Complete itinerary for every multi-day tour.
2.  Jordan Story Classic Tour 2 duration: currently displayed as 7 Days
    / 5 Nights.
3.  Jordan & Holy Land Tour 1: displayed 7 days but visible program
    contains 6 days.
4.  Missing intermediate itinerary content for Islamic Jordan &
    Jerusalem Tour.
5.  Current prices for every package.
6.  Whether "From" pricing is per person, per vehicle, per group, or
    conditional.
7.  Child pricing.
8.  Single supplement.
9.  Group pricing tiers.
10. Hotel names/classes used for packages.
11. Meal plans.
12. Guide rules.
13. Entrance-fee rules.
14. Jordan Pass handling.
15. Visa handling.
16. Border-crossing terms for Holy Land products.
17. Cancellation/refund rules.
18. Payment methods/deposit requirements.
19. Pickup/drop-off boundaries.
20. Tour availability/seasonality.
21. Wadi Mujib seasonal restrictions.
22. Optional extras and their prices.
23. Correct official company memberships/registrations.
24. Authentic customer reviews and source.
25. Image ownership/licensing.

------------------------------------------------------------------------

# 17. Data Extraction Completion Rule

A tour is not ready for SEO rewriting until all available existing
source data has been extracted into its record and factual conflicts
have been marked.

Required extraction checklist:

-   [ ] Existing URL
-   [ ] Existing title
-   [ ] Category
-   [ ] Price
-   [ ] Duration
-   [ ] Capacity
-   [ ] Destinations
-   [ ] Route
-   [ ] Full description
-   [ ] Complete itinerary
-   [ ] Inclusions
-   [ ] Exclusions
-   [ ] Optional extras
-   [ ] Images/gallery references
-   [ ] Reviews
-   [ ] Booking fields
-   [ ] Existing metadata
-   [ ] Existing headings
-   [ ] Existing internal links
-   [ ] Existing structured data
-   [ ] Business-fact conflicts flagged
-   [ ] Migration decision

------------------------------------------------------------------------

# 18. Core Project Rule

> **Extract first. Verify second. Optimize third. Design fourth. Develop
> fifth.**

The redesign must never sacrifice accurate tour information for
animation, SEO copy or AI-generated content.

The immersive experience exists to make the traveler feel inside Jordan.

The content exists to answer the traveler's questions.

The booking system exists to convert interest into a real journey.

And the brand connects all three:

# Your Story Begins Here.
