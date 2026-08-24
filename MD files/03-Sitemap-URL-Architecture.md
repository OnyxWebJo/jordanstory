# 03 — Sitemap & URL Architecture
## Jordan Story Tours

**Purpose:** Define the new crawlable, multilingual, SEO/AEO/GEO-friendly information architecture while protecting valuable existing URLs.

---

# 1. Architecture Principles

1. Preserve existing indexed tour URLs when they already match strong commercial intent.
2. Create destination hubs above individual tours.
3. Separate operational tour categories from Story Collections.
4. Build search-intent landing pages only when each page can provide genuinely distinct value.
5. Keep every important page reachable through HTML links; animation must never be the only navigation.
6. Use clean, stable, lowercase URLs with hyphens.
7. Avoid dates, prices and campaign language in permanent URLs.
8. Use 301 redirects for replaced legacy URLs.
9. Do not mass-create thin location/keyword combinations.
10. English and German receive independent localized URLs and content.

---

# 2. Proposed English Sitemap

## Core
- `/`
- `/about/`
- `/contact/`
- `/custom-jordan-tour/`
- `/transportation/`
- `/travel-guide/`
- `/faq/`
- `/reviews/`
- `/privacy-policy/`
- `/terms-conditions/`

## Tours Hub
- `/jordan-tours/`

### Tour Style / Commercial Categories
- `/jordan-tours/private-tours/`
- `/jordan-tours/day-tours/`
- `/jordan-tours/multi-day-tours/`
- `/jordan-tours/luxury-tours/`
- `/jordan-tours/budget-tours/`
- `/jordan-tours/islamic-tours/`
- `/jordan-tours/holy-land-tours/`

Only create category pages with substantial unique introductory, selection and FAQ content.

## From Amman
- `/jordan-tours-from-amman/`
- `/petra-tours-from-amman/`
- `/wadi-rum-tours-from-amman/`
- `/dead-sea-tours-from-amman/`
- `/jerash-tours-from-amman/`
- `/aqaba-tours-from-amman/`

Do not create every possible “X from Amman” page automatically. Create only where tour inventory and search intent justify it.

---

# 3. Destination Hubs

## Primary
- `/destinations/`
- `/destinations/petra/`
- `/destinations/wadi-rum/`
- `/destinations/dead-sea/`
- `/destinations/amman/`
- `/destinations/jerash/`
- `/destinations/aqaba/`

## Secondary
- `/destinations/madaba/`
- `/destinations/mount-nebo/`
- `/destinations/baptism-site/`
- `/destinations/ajloun/`
- `/destinations/umm-qais/`
- `/destinations/karak/`
- `/destinations/shobak/`
- `/destinations/desert-castles/`
- `/destinations/wadi-mujib/`

Each destination hub should contain:
- concise direct answer/introduction
- why visit
- key experiences
- location / travel relationship
- suggested duration
- practical information
- tours visiting the destination
- related destinations
- FAQs
- travel-guide articles
- verified imagery
- structured entity information

Do not duplicate the same destination essay across tour pages.

---

# 4. Story Collections

Story URLs are brand/product discovery pages, not substitutes for transactional SEO pages.

- `/stories/`
- `/stories/ancient-jordan/`
- `/stories/desert-jordan/`
- `/stories/sacred-jordan/`
- `/stories/red-sea/`
- `/stories/adventure-jordan/`
- `/stories/essential-jordan/`
- `/stories/complete-jordan/`
- `/stories/luxury-jordan/`

Homepage CTA:

**Choose Your Jordan Story**

Story pages connect emotionally related tours and destinations.

---

# 5. Trip-Length Hubs

Potential high-value itinerary discovery pages:

- `/jordan-itineraries/`
- `/jordan-itinerary-1-day/`
- `/jordan-itinerary-3-days/`
- `/jordan-itinerary-4-days/`
- `/jordan-itinerary-5-days/`
- `/jordan-itinerary-7-days/`
- `/jordan-itinerary-10-days/`

These must be editorial itinerary guides, not doorway pages that simply duplicate tour listings.

Each should explain:
- what is realistically possible
- recommended route
- driving considerations
- alternative versions
- suitable tours
- FAQs

---

# 6. Travel Guide / Topical Authority

## Petra Cluster
- `/travel-guide/petra/`
- `/travel-guide/petra/best-time-to-visit/`
- `/travel-guide/petra/how-long-do-you-need/`
- `/travel-guide/petra/what-to-wear/`
- `/travel-guide/petra-from-amman/`
- `/travel-guide/petra-and-wadi-rum/`

## Wadi Rum Cluster
- `/travel-guide/wadi-rum/`
- `/travel-guide/wadi-rum/overnight/`
- `/travel-guide/wadi-rum/jeep-tours/`
- `/travel-guide/wadi-rum/from-amman/`

## Jordan Planning
- `/travel-guide/best-time-to-visit-jordan/`
- `/travel-guide/how-many-days-in-jordan/`
- `/travel-guide/jordan-travel-itinerary/`
- `/travel-guide/getting-around-jordan/`
- `/travel-guide/jordan-with-children/`
- `/travel-guide/what-to-pack-for-jordan/`

Only publish articles that add expert value and can be maintained.

---

# 7. Existing Tour URLs — Preservation Strategy

High-value descriptive URLs should normally remain unchanged and be substantially improved in place.

### KEEP + IMPROVE
- `/tour/wadi-rum-and-petra-tour-from-amman/`
- `/tour/trip-to-petra-jordan/`
- existing descriptive day-tour URLs where technically sound

For the Petra page, the visible H1 can be improved to a more natural transactional phrase while preserving the legacy slug.

Example:

Legacy URL:
`/tour/trip-to-petra-jordan/`

Improved H1:
**Private Petra Tour from Amman — One Day**

Story subtitle:
**Walk Through a Story Carved in Stone**

Canonical remains the preserved URL unless migration analysis gives a strong reason to change it.

---

# 8. Generic Legacy Product URLs

Generic names such as:
- Budget Tour 1
- Budget Tour 2
- Budget Tour 3
- Luxury Tour 1
- Luxury Tour 2

should eventually receive descriptive customer-facing titles.

Do not change the URL until:
1. final product name is approved,
2. keyword target is approved,
3. redirect map is prepared,
4. internal links are updated,
5. canonical and sitemap are updated.

If a new URL is chosen:
**old URL → single 301 → final new URL**

Never redirect chains.

---

# 9. Potential Tour URL Pattern for New/Renamed Products

Prefer descriptive slugs:

`/tour/3-day-jordan-tour-petra-dead-sea-jerash/`

`/tour/4-day-jordan-tour-petra-wadi-rum-dead-sea/`

`/tour/7-day-jordan-tour-petra-wadi-rum-aqaba/`

Story names belong in headings/subtitles, not necessarily URLs.

Avoid:
`/tour/the-amazing-unforgettable-story-1/`

---

# 10. Transportation Architecture

Recommended:
- `/transportation/`
- `/airport-transfers/`
- `/airport-transfer-amman/`
- `/airport-transfer-petra/`
- `/airport-transfer-dead-sea/`
- `/airport-transfer-aqaba/`

Create individual transfer pages only when there is enough useful route-specific information.

Admin-controlled route prices must remain database values, not URL text.

---

# 11. Custom Tour Architecture

Primary:
`/custom-jordan-tour/`

Brand treatment:

# Build Your Own Jordan Story

Form should collect:
- dates
- duration
- travelers
- destinations
- interests
- accommodation level
- travel style
- budget range
- special requests

This page should be an important internal-link destination from tour and destination pages.

---

# 12. Internal Linking Model

## Destination → Tours
Petra hub links to every relevant Petra tour.

## Tour → Destinations
Petra + Wadi Rum tour links to Petra and Wadi Rum hubs.

## Guide → Destination
“How Long Do You Need in Petra?” links to Petra destination hub.

## Guide → Commercial
Relevant guide pages link contextually to suitable tours.

## Story → Tours + Destinations
The Desert Story links to Wadi Rum, Petra/desert combinations and related tours.

## Tour → Related Tour
Use genuine user intent:
- shorter
- longer
- luxury alternative
- related combination

Avoid random “related posts” widgets.

---

# 13. Breadcrumb Model

Example:

Home  
→ Jordan Tours  
→ Day Tours  
→ Petra & Wadi Rum Tour from Amman

Destination:

Home  
→ Destinations  
→ Petra

Story:

Home  
→ Jordan Stories  
→ The Desert Story

Guide:

Home  
→ Travel Guide  
→ Petra  
→ How Long Do You Need in Petra?

Breadcrumbs should be visible and represented with appropriate structured data.

---

# 14. German Architecture

Recommended second language: German.

Use a consistent language-directory strategy.

## English
`/en/...` is ideal for a clean new multilingual architecture, but introducing `/en/` to an existing root-domain English site creates a large migration.

**Recommendation:** Keep existing English at root for launch unless there is a compelling technical reason to migrate every URL.

English:
`/destinations/petra/`
`/petra-tours-from-amman/`

German:
`/de/reiseziele/petra/`
`/de/petra-touren-ab-amman/`

German examples:
- `/de/jordanien-rundreisen/`
- `/de/tagesausfluege/`
- `/de/reiseziele/wadi-rum/`
- `/de/reiseziele/totes-meer/`
- `/de/jordanien-reisefuehrer/`

Use natural German keyword research before final slugs.

---

# 15. Hreflang

Every translated indexable page should identify its genuine equivalents.

Example concept:
- English Petra hub ↔ German Petra hub
- English Petra tour ↔ German localized tour

Do not point every German page to the English homepage.

Use:
- `en`
- `de`
- optional `x-default` where appropriate

A page without a real translation should not claim a fake hreflang equivalent.

---

# 16. Canonical Rules

1. Self-canonicalize primary indexable pages.
2. Do not canonicalize German pages to English.
3. Filter/sort/search pages should not create uncontrolled indexable duplicates.
4. Booking confirmation and account/admin pages must not be index targets.
5. Query parameters used for tracking must not become canonical variants.
6. Paginated archives require deliberate handling.

---

# 17. Filters & Faceted Navigation

Useful user filters:
- destination
- duration
- tour style
- Story Collection
- price range
- departure point

Most filter combinations should **not** generate indexable pages automatically.

Curated search landing pages are created manually when there is:
- clear demand
- unique content
- sufficient inventory
- internal-link support

---

# 18. XML Sitemaps

Recommended sitemap index:

- pages
- tours
- destinations
- stories
- travel guides
- German equivalents
- images where implementation warrants

Only canonical, indexable URLs belong in XML sitemaps.

Admin should automatically remove archived/noindex tours.

---

# 19. Redirect Map

Before launch create a complete table:

| Old URL | New URL | Action | Reason |
|---|---|---|---|
| legacy tour | same URL | KEEP | existing relevance |
| generic renamed tour | descriptive URL | 301 | clearer product/search intent |
| duplicate page | strongest equivalent | 301 | consolidation |
| obsolete page with no equivalent | review | 410 or relevant redirect | avoid misleading redirect |

Never redirect every removed URL to the homepage.

---

# 20. Search / Booking Utility Pages

Recommended noindex:
- internal search results
- booking steps
- booking confirmation
- payment return pages
- admin
- account pages
- preview pages

The booking interface should be crawl-independent: tour content remains accessible without completing a form.

---

# 21. Navigation

## Desktop
- Jordan Tours
- Destinations
- Jordan Stories
- Travel Guide
- About
- Build Your Tour
- Language
- **Book / Check Availability**

## Jordan Tours Mega Menu
By duration, style and popular destination.

## Mobile
Keep navigation compact. The cinematic hero must never delay access to Menu or Booking.

---

# 22. Footer

Useful crawlable footer groups:

**Explore Jordan**
Petra, Wadi Rum, Dead Sea, Amman, Jerash, Aqaba

**Jordan Tours**
Day Tours, Multi-Day Tours, Luxury, Budget, Islamic, Holy Land

**Plan Your Journey**
Custom Tour, Transportation, Travel Guide, FAQ

**Jordan Story**
About, Reviews, Contact, Terms, Privacy

Avoid hundreds of keyword links.

---

# 23. AEO Page Architecture

Every important tour/destination page should include a clearly identifiable answer section.

Example Petra hub:
- What is Petra?
- Where is Petra?
- How far is Petra from Amman?
- How long should you spend in Petra?
- Can Petra and Wadi Rum be visited together?
- What is the best time to visit?

Answers should be concise first, detailed second.

Do not manufacture FAQ questions purely for schema.

---

# 24. GEO Entity Architecture

Canonical entities should exist for:
- Jordan Story Tours
- each tour
- each destination
- departure locations
- attractions
- Story Collections as editorial groupings

Relationships should be explicit in page copy and structured data.

Example:
Jordan Story Tours → offers → Petra & Wadi Rum Tour  
Tour → starts near/from → Amman  
Tour → visits → Petra  
Tour → visits → Wadi Rum  
Tour → duration → 1 day  
Tour → includes → verified services

---

# 25. Current-Site Migration Observations

The current homepage and tour catalogue already expose:
- 20+ site positioning
- Luxury, Islamic & Historical, Classical and Budget categories
- custom-tour and transportation entry points
- individual tour inventory
- About/Story identity
- Privacy and Terms

These should not disappear during redesign.

The current Petra + Wadi Rum page has a strong descriptive slug and clear transactional details, making it a strong **KEEP + IMPROVE** candidate.

The current Petra day-tour URL is also already indexed and contains substantial Petra content. Preserve its authority while improving the H1/content architecture.

---

# 26. Content Cannibalization Rule

Before creating a new page, ask:

**Does an existing page already satisfy this search intent?**

Example:
If `/tour/wadi-rum-and-petra-tour-from-amman/` targets the actual product, a new `/petra-wadi-rum-tour-from-amman/` page should not simply duplicate it.

A hub page such as `/petra-tours-from-amman/` must instead compare multiple Petra options and help the user choose.

---

# 27. Proposed Priority Pages for Launch

## Tier 1
- Homepage
- Jordan Tours
- Petra
- Wadi Rum
- Dead Sea
- Jordan Tours from Amman
- Petra Tours from Amman
- Petra + Wadi Rum existing tour
- Petra day tour
- Custom Jordan Tour
- About
- Contact

## Tier 2
- Jerash
- Madaba
- Mount Nebo
- Aqaba
- Baptism Site
- Wadi Mujib
- 3/5/7-day itinerary hubs
- Luxury Tours
- Islamic Tours
- German equivalents of highest-value pages

## Tier 3
- expanded guide clusters
- secondary destinations
- additional languages
- additional curated intent pages

---

# 28. Final Architecture Rule

The site should have three complementary ways to discover Jordan:

### Search Intent
**Petra Tours from Amman**

### Geography
**Explore Petra**

### Emotion / Brand
**The Ancient Story**

All three paths eventually connect to the same verified tour database.

That is the core architecture:

**Google can understand it.  
AI systems can interpret it.  
Travelers can explore it.  
The admin can manage it.**

# Your Story Begins Here.
