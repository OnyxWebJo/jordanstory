# 04 — SEO, AEO & GEO Strategy
## Jordan Story Tours — English + German

**Launch languages:** English + German  
**Scope:** Every public content system, tour, destination, Story Collection, booking interface and SEO entity must support both languages from launch.

---

# 1. Objective

Build Jordan Story Tours as a technically strong, people-first Jordan travel authority that can perform across:

- classic Google Search
- Google AI experiences
- conversational / answer-oriented discovery
- generative search systems
- image and video discovery
- English-language travel searches
- German-language Jordan travel searches

SEO, AEO and GEO are not three disconnected tricks. They share one foundation:

**accurate original content + clear entities + excellent page experience + crawlable technical architecture + genuine expertise.**

---

# 2. 2026 Google Reality

Google's current guidance says the same core SEO principles apply to its generative AI experiences: useful original content, crawlability, good page experience, visible content that matches structured data, and strong multimedia remain important.

Therefore:

- Do not create “AI-only” hidden content.
- Do not mass-generate thin pages.
- Do not expect `llms.txt` to improve Google rankings; Google clarified in 2026 that it is not needed for Google Search.
- FAQ content remains valuable for users/AEO, but Google removed the FAQ rich-result feature in 2026. Do not promise FAQ rich-result stars/expansions.
- Structured data must match visible page content.

---

# 3. English + German Is a Core System

German is not a later translation add-on.

Every relevant content type must support:

- English title
- German title
- English slug
- German slug
- English body
- German body
- English SEO title
- German SEO title
- English meta description
- German meta description
- localized FAQs
- localized image alt text where appropriate
- localized structured-data strings
- hreflang relationship
- translation status
- last source update
- last translation update

The admin dashboard must visibly show translation health.

Example:

**Petra & Wadi Rum Tour**
- English: Published ✓
- German: Published ✓
- English updated: 21 Aug 2026
- German updated: 18 Aug 2026
- German status: **Needs Review**

---

# 4. German Must Be Localized, Not Mechanically Translated

Do not assume English search terms translate word-for-word.

Example English intent:
**Petra tour from Amman**

Possible German research concepts:
- Petra Tour ab Amman
- Petra Tagesausflug ab Amman
- Petra Ausflug von Amman
- Petra und Wadi Rum Tour
- Jordanien Rundreise
- Jordanien Privatreise

Final German keyword choices require actual keyword/SERP research before publication.

German content should sound native, not like translated English marketing copy.

---

# 5. Language URL Strategy

Keep existing English URLs at root to avoid unnecessary migration.

Examples:

English:
- `/destinations/petra/`
- `/petra-tours-from-amman/`
- `/tour/wadi-rum-and-petra-tour-from-amman/`

German:
- `/de/reiseziele/petra/`
- `/de/petra-touren-ab-amman/`
- localized German tour slug after keyword research

Each German page is a real URL with real German navigation and content.

Do not:
- use `?lang=de` as the primary architecture
- replace text only with JavaScript
- use cookies as the only language mechanism
- force IP-based redirects

Provide a visible language switcher.

---

# 6. Hreflang Rules

For genuine translation pairs:

- English page references German equivalent
- German page references English equivalent
- each page also references itself
- optional `x-default` where appropriate

Do not point every German page to the English homepage.

If a German translation does not exist, do not fabricate an hreflang equivalent.

---

# 7. Search Intent Model

Map each page to one dominant intent.

## Transactional
- Petra tour from Amman
- Petra and Wadi Rum tour from Amman
- private Jordan tour
- Jordan 7 day tour
- airport transfer Amman to Petra

## Commercial Investigation
- best Jordan tours
- Jordan private tour vs group tour
- Jordan itinerary 5 days
- luxury Jordan tour

## Informational
- how many days in Jordan
- best time to visit Petra
- what to wear in Petra
- how far is Petra from Amman

## Navigational / Brand
- Jordan Story Tours
- Jordan Story Tours reviews
- Jordan Story Tours contact

Do not make multiple pages compete for the same dominant intent.

---

# 8. Keyword Mapping

Maintain an admin/content-planning table:

- page ID
- language
- primary query
- secondary queries
- search intent
- destination
- Story Collection
- current URL
- target URL
- ranking baseline
- priority
- cannibalization notes

English and German mappings are independent.

---

# 9. Tour Page SEO Template

Every indexable tour page should contain:

1. explicit search-focused H1
2. Story subtitle
3. concise answer-first summary
4. price basis
5. duration
6. route
7. key inclusions
8. clear CTA
9. day-by-day / stop-by-stop itinerary
10. inclusions
11. exclusions
12. optional extras
13. practical information
14. destination context
15. authentic media
16. traveler reviews when genuine
17. useful FAQs
18. related tours
19. related destinations
20. custom-tour CTA
21. visible business/contact trust information

---

# 10. Answer-First AEO Pattern

Important questions should begin with a direct answer.

Example structure:

### Can you visit Petra and Wadi Rum in one day from Amman?

**Yes, Jordan Story Tours offers a full-day route from Amman combining Petra and Wadi Rum.** The current tour includes [only verified facts here]. Because this is a long day, the page should then explain departure timing, driving and time at each destination.

Rules:
- answer in the first 1–2 sentences
- use actual tour facts
- avoid filler
- provide nuance below
- keep English and German answers independently natural

German equivalent should answer the same traveler need in native German.

---

# 11. Destination Page Template

Each destination becomes a canonical entity page.

Sections:

- What is [Destination]?
- Why visit?
- Where is it?
- How far from Amman?
- How much time should you allow?
- Best time to visit
- What to expect
- Practical considerations
- Tours visiting this destination
- Related destinations
- Travel guides
- FAQs
- authentic imagery/video

Do not copy the same destination paragraph into every tour.

---

# 12. GEO / Entity Strategy

Create consistent machine-readable relationships.

Example:

**Jordan Story Tours**
→ travel company / tour operator identity

**Petra & Wadi Rum Tour from Amman**
→ offered by Jordan Story Tours
→ departs from Amman
→ visits Petra
→ visits Wadi Rum
→ duration 1 day
→ starting price based on current admin data
→ includes only verified services

Canonical destination/entity naming must be consistent across:
- database
- visible copy
- breadcrumbs
- internal links
- structured data
- English
- German

---

# 13. Structured Data Strategy

Use schema that accurately represents visible content and current Google-supported features.

Potential types depending on page:
- `Organization`
- appropriate local/travel-business type where valid
- `BreadcrumbList`
- `WebSite`
- `WebPage`
- `Article` / `BlogPosting`
- `ImageObject`
- `VideoObject`
- `Review` / `AggregateRating` only with genuine qualifying review data
- trip/tour vocabulary where semantically appropriate

Do not add unsupported markup merely because a schema.org type exists.

Do not mark up content hidden from users.

## FAQ Important 2026 Note
Maintain excellent FAQ/answer sections for users, AEO and semantic clarity, but **do not design the strategy around Google FAQ rich results**; Google removed that search feature in 2026.

---

# 14. E-E-A-T / Trust

Strengthen real-world credibility through:

- detailed About / Our Story page
- verified company registration/business identity
- verified JITOA/JSTA/JTB relationships only if current
- real office/contact details
- named/local expertise where appropriate
- authentic guide/driver/team content
- original Jordan photography
- transparent booking policies
- cancellation/refund information
- privacy/terms
- genuine traveler reviews
- content review/update dates for practical guides
- clear responsibility for cross-border information

Do not manufacture author bios solely for SEO.

---

# 15. Original Information Advantage

To avoid commodity travel content, add information Jordan Story Tours genuinely knows:

- realistic departure times
- actual driving expectations
- how long its tours spend at attractions
- what is included in its Wadi Rum experience
- pickup logistics
- guide arrangements
- hotel/camp standards
- seasonal operating notes
- common traveler mistakes
- suitability for families/older travelers where verified
- route alternatives
- local operational tips

This is stronger than generic AI-generated “10 things to do in Jordan” content.

---

# 16. German Trust Content

German visitors must not land on a partially translated site.

Translate/localize:
- About
- Contact
- tours
- destinations
- Story Collections
- booking steps
- validation/error messages
- confirmation messages
- Terms/Privacy where legally appropriate
- FAQs
- cancellation/booking information
- transport information
- custom-tour form
- email templates sent to German-language customers

Admin system labels can remain English initially if desired, but all customer-facing output must support German.

---

# 17. Image SEO

For every major image store:

- media ID
- original filename
- optimized variants
- destination/tour association
- photographer/source
- rights/permission
- English alt
- German alt
- caption where useful
- width/height
- focal point

Rules:
- prefer authentic Jordan Story media
- use AVIF/WebP where practical
- responsive `srcset`
- specify dimensions
- lazy-load below fold
- do not lazy-load critical LCP hero incorrectly
- avoid keyword-stuffed alt text

---

# 18. Video / Immersive SEO

The scroll-world must have crawlable HTML content outside animation/canvas.

For important original videos:
- descriptive title
- poster image
- transcript or meaningful surrounding text where useful
- accessible controls when user-facing
- VideoObject only when valid
- optimized delivery

The Petra → Wadi Rum → Dead Sea animation must not be the only place where destination meaning exists.

---

# 19. Internal Linking Rules

Use contextual anchors naturally.

Examples:
- Petra guide → Petra destination
- Petra destination → Petra tours
- Petra tour → Wadi Rum destination when visited
- 7-day itinerary guide → matching multi-day tours
- The Sacred Story → relevant religious tours
- German pages link primarily within German architecture

Avoid generic repeated “click here.”

---

# 20. Content Freshness

Admin fields:
- created
- updated
- reviewed
- next review
- source/verification note
- operational fact owner

High-change content should have shorter review cycles:
- prices
- border information
- visa notes
- seasonal Wadi Mujib access
- hotel/camp details
- transport rates

Evergreen history does not need artificial date changes.

---

# 21. Booking Data + SEO Intelligence

Capture attribution where lawful/available:

- landing page
- language
- referrer
- source
- medium
- campaign
- UTM
- tour
- Story Collection
- destination
- nationality
- country of residence

Reports should later reveal:
- German vs English conversion
- top tours by language
- top landing pages
- organic conversion
- Google Ads conversion
- AI/referral traffic where identifiable
- Story Collection conversion

This data should influence future content priorities.

---

# 22. German Performance Reporting

Separate dashboard reporting for German:

- German organic sessions
- German landing pages
- German bookings
- German conversion rate
- German top queries (via Search Console integration/reporting workflow)
- pages needing translation
- stale translations
- German revenue
- German Story Collection performance

Do not mix English and German performance into one number only.

---

# 23. AI Content Rules

AI may help:
- structure extracted source material
- propose headings
- generate first-draft meta descriptions
- identify question opportunities
- suggest internal links
- prepare translation drafts

AI may not independently invent:
- prices
- durations
- itinerary stops
- entrance inclusions
- hotel standards
- guide services
- visas
- border rules
- reviews
- historical/religious claims
- availability

All German AI-assisted translations require quality review before publication.

Google's current guidance warns against scaled AI-generated content that adds little value. Therefore no programmatic creation of hundreds of thin destination/keyword pages.

---

# 24. Technical SEO

Mandatory:
- server-rendered/indexable primary content
- correct HTTP status codes
- canonical tags
- hreflang
- robots.txt
- XML sitemaps
- clean redirects
- mobile-first parity
- accessible navigation
- no content dependency on hover
- descriptive title elements
- unique meta descriptions where useful
- Open Graph/social metadata
- image dimensions
- Core Web Vitals monitoring
- HTTPS
- no accidental staging indexation

---

# 25. Core Web Vitals + Animation

SEO performance is non-negotiable despite immersive design.

Rules:
- critical content renders before heavy animation dependencies
- code-split animation libraries
- defer non-critical scripts
- preload only truly critical media
- optimize LCP
- avoid CLS
- keep interactions responsive
- use reduced-motion fallback
- lighter mobile choreography
- do not make users wait through an intro

The user can always scroll or navigate immediately.

---

# 26. German Technical Requirements

Every German page:
- returns 200 when published
- has German visible content
- has German title/meta
- links to German navigation
- has correct canonical to itself
- has English/German hreflang pair where equivalent exists
- is included in relevant sitemap
- uses consistent German internal links
- does not automatically redirect based on IP

Google recommends separate locale URLs and warns that locale-adaptive delivery can make variants harder to crawl reliably.

---

# 27. Sitemap Strategy

Generate sitemap index with logical groups:
- tours
- destinations
- Stories
- guides/pages
- German pages
- media extensions where useful

Hreflang may also be represented in sitemaps if implementation chooses, but HTML annotations must remain consistent.

Only canonical indexable pages appear.

---

# 28. Search Console / Measurement

After launch:
- verify domain property
- submit sitemaps
- monitor indexing
- monitor Core Web Vitals
- monitor English queries
- monitor German queries
- inspect migrated URLs
- monitor 404s/redirects
- compare pre/post migration traffic
- track tour conversions by landing page and language

Google AI Mode traffic is included in Search Console performance totals; do not expect a simple separate “GEO ranking” metric to explain everything.

---

# 29. KPI Framework

## SEO
- non-brand organic clicks
- indexed quality pages
- top 3 / top 10 target queries
- destination-hub traffic
- tour-page organic traffic
- German organic growth

## AEO
- impressions/clicks for question-led queries
- long-tail query growth
- engagement with answer sections
- assisted conversions from guide content

## GEO / AI Discovery
- identifiable AI/referral traffic
- brand mentions/citations observed through periodic research
- growth in detailed conversational search queries
- conversions from AI/referral sources when attribution exists

Avoid fake “GEO scores.”

---

# 30. Priority English Content Clusters

1. Petra tours from Amman
2. Petra + Wadi Rum
3. Jordan tours from Amman
4. Jordan 3/5/7-day itineraries
5. Wadi Rum tours
6. Dead Sea tours
7. private Jordan tours
8. luxury Jordan tours
9. Islamic Jordan tours
10. Jordan Holy Land tours

Final priorities require keyword/SERP research.

---

# 31. Priority German Research Clusters

Research and validate:
- Jordanien Rundreise
- Jordanien Privatreise
- Petra Tour ab Amman
- Petra Tagesausflug
- Petra und Wadi Rum Tour
- Wadi Rum Tour
- Totes Meer Ausflug
- Jordanien 7 Tage Rundreise
- Jordanien Luxusreise
- Jordanien Individualreise
- Jordanien Reise mit Fahrer
- Jordanien Sehenswürdigkeiten
- beste Reisezeit Jordanien

These are research seeds, **not final keyword-volume claims**.

---

# 32. English/German Content Parity

Tier 1 launch pages should exist in both languages.

At minimum:
- homepage
- About
- Contact
- Jordan Tours hub
- Petra
- Wadi Rum
- Dead Sea
- Amman
- Jerash
- Aqaba
- priority day tours
- priority multi-day tours
- custom tour
- transportation
- Story Collections
- booking flow
- FAQ
- essential policies

Lower-priority guide articles can be translated in controlled phases, but the German site must never feel abandoned or structurally incomplete.

---

# 33. Story + German

“Story” is the brand asset and can remain recognizably connected to **Jordan Story Tours**, while surrounding German copy should be localized naturally.

Do not mechanically translate every English slogan.

The German copywriter/translator should preserve:
- emotion
- clarity
- premium travel tone
- search intent

while deciding whether “Story,” “Geschichte,” “Reisegeschichte,” “Jordanien-Erlebnis” or another formulation reads most naturally in each context.

---

# 34. Publishing Gate

A page cannot be published merely because AI generated it.

Required:
- protected facts verified
- intent assigned
- unique value present
- English editorial review
- German editorial review when applicable
- internal links added
- metadata reviewed
- media rights confirmed
- structured data matches visible content
- mobile check
- performance check
- canonical/hreflang check

---

# 35. North-Star Rule

We are not trying to “write for Google” and then translate it.

We are building two excellent user experiences:

**Jordan Story Tours — English**  
and  
**Jordan Story Tours — Deutsch**

Both share the same verified tour database, brand, Story system and business logic.

Each language receives its own search strategy, natural copy and discovery path.

**One brand. Two languages. Many Jordan Stories.**
