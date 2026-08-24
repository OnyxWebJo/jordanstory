# 11 — Schema & Structured Data
## Jordan Story Tours — English + German

**Purpose:** Define a conservative, accurate structured-data system that helps search engines and AI systems understand Jordan Story Tours, its tours, destinations, guides, breadcrumbs, reviews, videos and business relationships.

**Core principle:** Structured data describes verified visible content. It must never be used to manufacture facts, ratings, prices, availability or eligibility for rich results.

---

# 1. Structured Data Objectives

Use structured data to clarify:

- who Jordan Story Tours is
- what services/tours it offers
- which destinations a tour visits
- page hierarchy
- article/guide authorship
- genuine reviews
- media
- language equivalents
- business contact information

Schema supports SEO/AEO/GEO, but does not replace good visible content.

---

# 2. Implementation Format

Preferred:

**JSON-LD**

Render server-side or in the initial HTML where practical.

Structured data must match the final page state.

Do not depend on user interaction to create essential schema.

---

# 3. Validation Rule

Before publishing markup:

1. verify the type/property exists in the current Schema.org vocabulary
2. verify it is appropriate for the entity/page
3. check current Google Search documentation if rich-result eligibility is expected
4. confirm every factual value matches visible/current business data
5. validate syntax
6. monitor Search Console after launch

Do not assume a Schema.org type automatically creates a Google rich result.

---

# 4. Entity Graph

Use stable `@id` identifiers so entities connect.

Conceptual graph:

```text
Jordan Story Tours
├── WebSite
├── WebPage
├── Tours / Offers / Services
├── Destinations / Places
├── Travel Guides / Articles
├── Reviews
└── Media
```

A tour page should reference the business and relevant destination entities instead of creating disconnected anonymous objects.

---

# 5. Stable @id Strategy

Examples conceptually:

```text
https://jordanstorytours.com/#organization
https://jordanstorytours.com/#website
https://jordanstorytours.com/destinations/petra/#place
https://jordanstorytours.com/tour/example/#tour
```

Final IDs follow the production canonical URL structure.

Do not change IDs unnecessarily after launch.

---

# 6. Organization / Business Entity

The homepage should define the primary business entity using the most accurate supported type.

Possible fields where verified:

- `@id`
- `name`
- `url`
- `logo`
- `image`
- `description`
- `telephone`
- `email`
- `address`
- `sameAs`

Use a more specific business type only if it accurately represents the company and current vocabulary supports it.

Do not invent founding dates, awards or memberships.

---

# 7. Business Name

Use the actual public business name consistently:

**Jordan Story Tours**

Do not keyword-stuff the schema name such as:

`Jordan Story Tours - Best Petra Tours Jordan Travel Agency Amman`

---

# 8. Logo

Logo structured data should reference the approved production logo asset.

Requirements:
- crawlable
- stable URL
- appropriate image dimensions
- not blocked from indexing

---

# 9. Address

Only include verified business address data.

Use structured postal fields where available:

- streetAddress
- addressLocality
- addressRegion
- postalCode
- addressCountry

Do not guess missing address components.

---

# 10. sameAs

Use only genuine official profiles.

Possible:
- Facebook
- Instagram
- YouTube
- LinkedIn
- other verified official profiles

Do not add directory/listing URLs merely to make the array longer.

---

# 11. WebSite Entity

Homepage may define a WebSite entity.

Potential fields:
- `@id`
- `url`
- `name`
- `publisher`
- `inLanguage`

Do not add unsupported search-action markup unless a real site-search feature exists and current search guidance supports the use.

---

# 12. WebPage Entity

Important pages may define WebPage or an appropriate subtype.

Possible:
- homepage
- tour page
- destination page
- Story Collection
- contact/about
- guide

Fields:
- `@id`
- `url`
- `name`
- `description`
- `isPartOf`
- `about`
- `breadcrumb`
- `inLanguage`
- `primaryImageOfPage`

---

# 13. Tour Entity Strategy

Do not invent a schema type called `Tour` if it is not appropriate/current.

Represent the commercial product using current valid Schema.org types/properties after implementation-time verification.

Depending on current vocabulary and page semantics, the model may involve concepts such as:

- Product
- Service
- Offer
- Trip / TouristTrip where valid and appropriate

The developer must verify current vocabulary before finalizing.

The content model in our database is independent of the external schema type.

---

# 14. Tour Structured Facts

Where supported and semantically correct, expose:

- tour name
- description
- provider
- URL
- image
- destinations
- itinerary relationship
- duration
- offers/pricing
- genuine aggregate rating/reviews
- language where relevant

Only values present/verified in the tour database may be emitted.

---

# 15. Offer / Pricing

When a valid Offer representation is appropriate:

Possible fields:
- price
- priceCurrency
- url
- availability
- validFrom / priceValidUntil only when actually known
- eligible quantity/audience only where supported and accurate

Never emit:
- fake list price
- invented discount
- fake availability
- stale price

If price depends on party size or configuration, do not oversimplify schema in a misleading way.

---

# 16. Starting Prices

If the visible page says:

**From $275 per person**

schema must not imply that $275 is the final price for every configuration.

Use only a representation that accurately communicates the actual offer model.

If that cannot be represented safely, omit the price markup rather than mislead.

---

# 17. Availability

Only use structured availability values that reflect the actual booking model.

If Jordan Story Tours only accepts availability requests, do not mark every tour as instantly `InStock` merely because inquiries are accepted.

Public wording and structured data must agree.

---

# 18. Destinations as Place Entities

Canonical destination pages should define reusable Place entities where appropriate.

Examples:
- Petra
- Wadi Rum
- Dead Sea
- Amman
- Jerash
- Aqaba
- Madaba
- Mount Nebo

Potential fields:
- name
- URL
- description
- geo coordinates
- image
- containedInPlace where appropriate
- sameAs only to authoritative external identifiers when useful

---

# 19. Geographic Accuracy

Coordinates must come from verified geographic data.

Do not generate approximate coordinates with AI.

Do not assign one coordinate to a broad region if the page represents a large geographic area without clarifying the entity.

---

# 20. Petra Entity

The Petra destination page should clearly identify Petra as the real destination/heritage site, not merely as a keyword string.

Tour pages visiting Petra should reference the same canonical Petra entity.

This strengthens entity consistency across the site.

---

# 21. Wadi Rum Entity

Same rule:

one canonical Wadi Rum entity reused across:
- destination page
- tour pages
- Story Collections
- travel guides

Avoid creating multiple conflicting Wadi Rum entities.

---

# 22. Story Collections

Story Collections are Jordan Story Tours' own merchandising/content taxonomy.

Do not present:
- The Desert Story
- The Ancient Story
- The Sacred Story

as official geographic entities.

Schema may represent the collection page as a WebPage/CollectionPage or other appropriate current type.

The real destinations inside it remain Place entities.

---

# 23. Breadcrumb Structured Data

Use BreadcrumbList on hierarchical pages.

Example:

```text
Home
→ Jordan Tours
→ Petra Tours
→ Petra & Wadi Rum Tour from Amman
```

German:

```text
Startseite
→ Jordanien-Reisen
→ Petra-Touren
→ [German tour title]
```

Breadcrumb schema must match visible breadcrumb navigation.

---

# 24. German Breadcrumbs

Use German names and German URLs.

Do not emit English breadcrumb labels on German pages.

---

# 25. Article / Travel Guide Markup

Travel-guide pages may use Article or a more specific appropriate article subtype.

Possible fields:
- headline
- description
- image
- author
- publisher
- datePublished
- dateModified
- mainEntityOfPage
- inLanguage
- about
- mentions

Only publish dates that reflect actual editorial history.

---

# 26. Author

Do not create fake expert authors.

If content is authored/reviewed by Jordan Story Tours editorial staff, represent that accurately.

If a named expert is used:
- person must be real
- role must be accurate
- bio should be visible

---

# 27. dateModified

Update only when meaningful content changes.

Do not automatically change `dateModified` every deployment.

This keeps freshness signals truthful.

---

# 28. FAQ Structured Data

FAQ content should primarily exist for users.

If FAQ structured data is used:
- questions/answers must be visible
- no promotional fake Q&A
- no hidden schema-only FAQs
- current Google eligibility/guidance must be checked before relying on rich-result display

Even if rich results are unavailable, good FAQ content still supports AEO/GEO.

---

# 29. Reviews

Only mark up genuine reviews.

A review must have:
- actual reviewer/source
- genuine rating if provided
- actual review text
- relevant reviewed entity

Do not generate reviews with AI.

Do not convert generic testimonials into ratings unless a rating was actually supplied.

---

# 30. Aggregate Rating

Only emit AggregateRating when:

- ratings are genuine
- sufficient source data exists
- calculation is correct
- reviewed entity is appropriate
- visible page displays the rating information

Do not manually set a desired rating.

---

# 31. External Review Sources

If reviews originate from external platforms:

- preserve source information internally
- follow platform/content usage rules
- do not imply Jordan Story Tours independently verified something it did not

Schema implementation must reflect the actual review model.

---

# 32. VideoObject

Use when a page contains a substantial accessible video and current requirements are met.

Possible:
- name
- description
- thumbnailUrl
- uploadDate
- duration
- contentUrl/embedUrl as appropriate

Do not add VideoObject for decorative background loops that provide no meaningful standalone video content.

---

# 33. ImageObject

Use selectively for key images where it improves the graph.

Do not create hundreds of unnecessary ImageObject nodes for every gallery thumbnail.

Important media may include:
- organization logo
- primary page image
- important editorial images

---

# 34. Homepage 3D Experience

The WebGL/Three.js scroll world is presentation.

Do not attempt to describe every 3D object in schema.

The homepage structured data should describe:
- business
- website
- page
- relevant featured entities/content

not the rendering engine.

---

# 35. Interactive Jordan Map

Map markers should link to canonical destination pages.

Structured data belongs primarily to those canonical destination entities.

Do not create schema objects solely because a marker exists.

---

# 36. Local Business Markup

If Jordan Story Tours qualifies for an appropriate LocalBusiness subtype, use it only with verified:

- address
- phone
- business identity
- opening/contact information where applicable

Do not add fake opening hours.

---

# 37. Contact Information

Where supported and current:
- telephone
- email
- contact role/type

Values must come from site settings.

This avoids inconsistent numbers across schema and pages.

---

# 38. Social Profiles

`sameAs` should be controlled from admin site settings.

When a social profile changes, the schema updates centrally.

---

# 39. English/German Entity Sharing

Real-world entity identity remains the same across languages.

Example:

English Petra page:
`/destinations/petra/`

German Petra page:
`/de/reiseziele/petra/`

Both describe Petra.

Page entities differ by language, while the underlying real-world entity relationship should remain consistent.

---

# 40. inLanguage

Use correct language:

English:
`en`

German:
`de`

Do not emit multiple languages on a page that is primarily one language merely because navigation contains a language switcher.

---

# 41. German Schema Strings

German pages should use German:

- page name
- descriptions
- breadcrumb labels
- tour title
- offer descriptions where applicable

Do not inject English marketing text into German JSON-LD.

---

# 42. Hreflang vs Schema

Hreflang is implemented in page metadata/HTTP architecture.

Do not try to replace hreflang using schema.

Use both systems for their intended purposes.

---

# 43. Canonical vs Entity @id

Canonical URL identifies the preferred page URL.

`@id` identifies an entity/node in the structured-data graph.

Keep them consistent but do not confuse their roles.

---

# 44. Dynamic Schema Generation

Generate schema from admin/database fields.

Example:

```text
Tour database
→ page renderer
→ visible price
→ visible itinerary
→ JSON-LD generator
```

Do not maintain a separate manual JSON field containing duplicate facts unless absolutely necessary.

---

# 45. Schema Source of Truth

Examples:

Organization schema → Site Settings  
Tour schema → Tour database  
Offer → Pricing engine  
Destination → Destination database  
Review → Approved review records  
Article → Guide database  
Breadcrumb → Routing hierarchy

One source of truth reduces contradictions.

---

# 46. Schema and Price Updates

When admin changes a price:

1. public price updates
2. booking calculation updates
3. applicable structured data updates

These must not be separate manual operations.

---

# 47. Schema and Availability Updates

When tour availability changes:

- visible CTA/status changes
- booking rules change
- structured data changes where relevant

No stale availability markup.

---

# 48. Schema and German Updates

When German translation is unpublished/outdated:

- do not emit German page schema on a nonexistent public URL
- hreflang should reflect actual published equivalents
- sitemap should reflect actual published URLs

---

# 49. Schema Validation in CMS

Admin SEO panel may display:

- structured-data type generated
- required source fields missing
- warnings
- validation status

Do not ask content editors to write raw JSON-LD.

---

# 50. Technical Validation

During development use current tools such as:

- Schema.org validator
- Google Rich Results Test where applicable
- Search Console enhancement/index reports

Tool choice may evolve.

---

# 51. Automated Tests

Add tests for:

- valid JSON
- valid URLs
- no empty required values
- price currency with price
- no review aggregate without reviews
- correct language
- canonical consistency
- breadcrumb URLs
- no unpublished entities

---

# 52. Schema Error Logging

Production should log structured-data generation failures internally.

Do not break the public page because an optional schema block failed.

---

# 53. No Fake Rich Results

Never add irrelevant schema simply because a competitor appears to receive a rich result.

Eligibility depends on:
- content type
- Google policies
- page quality
- search systems

Markup must be truthful first.

---

# 54. No Keyword Stuffing

Bad:

```text
name: "Best Jordan Tours Petra Wadi Rum Dead Sea Cheap Jordan Tour"
```

Good:

```text
name: "Petra & Wadi Rum Tour from Amman"
```

---

# 55. No Hidden Content Mismatch

Do not put content in schema that users cannot find on the page.

Examples prohibited:
- hidden fake FAQ
- lower schema price than visible price
- fake 5-star aggregate
- destination not included in itinerary
- invented availability

---

# 56. No Unsupported Awards

Do not add:
- award
- certification
- membership
- “best tour company”

unless real, verifiable and semantically appropriate.

---

# 57. No Fake Person Entities

Do not create fictitious:
- guides
- authors
- founders
- experts

to strengthen E-E-A-T or entity graphs.

Use real business information.

---

# 58. AI/AEO/GEO Relationship

Structured data can improve machine understanding, but GEO also depends on visible content.

For every important fact, prefer:

**Visible clear statement + structured relationship**

rather than schema alone.

Example visible content:

**This private tour starts in Amman and visits Petra and Wadi Rum.**

Then represent relationships in structured data where appropriate.

---

# 59. Destination Entity Consistency

Maintain a central entity registry:

- internal destination ID
- canonical English URL
- canonical German URL
- name EN
- name DE
- coordinates
- official/authoritative identifiers where appropriate
- related tours
- related guides

Use it across the site.

---

# 60. Entity Registry

Potential entities:

- Jordan
- Amman
- Petra
- Wadi Rum
- Dead Sea
- Aqaba
- Jerash
- Madaba
- Mount Nebo
- Baptism Site
- Ajloun
- Umm Qais
- Wadi Mujib
- Karak
- Shobak
- Desert Castles
- Jordan Story Tours

Do not automatically add external identifiers without verification.

---

# 61. Knowledge Graph Consistency

Company facts should be consistent across:

- website
- structured data
- Google Business Profile
- official social profiles
- major business listings

Especially:
- name
- phone
- address
- website

This is an operational consistency requirement.

---

# 62. Booking Pages

Booking/checkout/customer-specific pages generally do not need rich structured data.

Never expose customer data in JSON-LD.

Confirmation pages should normally be non-indexable.

---

# 63. Admin Pages

No public schema needed.

Admin routes must not be indexed.

---

# 64. Search Results / Tour Listing Pages

Listing/category pages may use appropriate collection/list semantics where useful.

Do not create misleading Product/Offer markup for every card unless current guidance and page structure justify it.

Primary entity schema belongs on canonical detail pages.

---

# 65. CollectionPage

Potential uses:
- Jordan Tours hub
- Petra Tours
- Story Collection pages
- destination tour listings

Use only when appropriate.

Collection page structured data does not replace individual tour page markup.

---

# 66. ItemList

May be useful for ordered/list content where semantically appropriate.

If used:
- listed items match visible content
- order matches visible order
- URLs are canonical

Do not use ItemList solely to stuff more tour names into JSON-LD.

---

# 67. Search Landing Pages

Pages like:

**Petra Tours from Amman**

should be treated as real useful landing pages with their own WebPage/Collection semantics.

Do not mark the landing page itself as a single tour.

---

# 68. Transportation Pages

Transportation offerings may use Service/Offer-like semantics where current vocabulary fits.

Verify:
- provider
- route/service area
- price
- vehicle/service type

Do not force transportation into tour markup.

---

# 69. Custom Tour Page

“Build Your Jordan Story” is primarily a service/inquiry experience.

Represent the business/service truthfully.

Do not emit a fixed Offer price if there is no fixed price.

---

# 70. About Page

About page should connect clearly to the Organization entity.

Use visible:
- business story
- team where real
- location
- experience
- contact/trust information

Do not manufacture Person schema for anonymous team members.

---

# 71. Contact Page

Contact page should reuse organization/contact information from central settings.

No inconsistent phone/address values.

---

# 72. Policy Pages

Privacy, Terms and Cancellation pages normally need basic WebPage semantics only.

Do not over-mark them.

---

# 73. Schema Versioning

Structured-data templates are code, not editorial content.

Track schema template changes in source control.

Content editors control source facts; developers control schema logic.

---

# 74. Implementation-Time Review

Because search-engine structured-data policies change, before launch:

- re-check Google Search Central documentation
- re-check Schema.org vocabulary
- update implementation if types/properties changed
- document final decisions

This file defines principles, not permission to use outdated markup.

---

# 75. Monitoring

After launch monitor:

- Search Console structured-data reports
- manual Rich Results tests
- indexing
- schema errors/warnings
- price/content mismatches
- German/English parity

Fix errors at the source-data/template level.

---

# 76. Schema QA Checklist — Tour

- [ ] valid current type selected
- [ ] title matches page
- [ ] provider correct
- [ ] destinations correct
- [ ] duration correct
- [ ] price accurate
- [ ] price basis not misleading
- [ ] currency correct
- [ ] availability accurate
- [ ] reviews genuine
- [ ] images crawlable
- [ ] language correct
- [ ] canonical correct
- [ ] breadcrumb correct
- [ ] no hidden facts

---

# 77. Schema QA Checklist — Destination

- [ ] canonical Place entity
- [ ] correct name
- [ ] correct coordinates
- [ ] correct language page
- [ ] images valid
- [ ] related content references correct
- [ ] no invented identifiers

---

# 78. Schema QA Checklist — German

- [ ] `inLanguage = de`
- [ ] German page title
- [ ] German description
- [ ] German breadcrumbs
- [ ] German URLs
- [ ] shared facts match English
- [ ] no English fallback marketing strings
- [ ] hreflang exists separately
- [ ] German page is actually published

---

# 79. Final Structured Data Principle

The structured-data layer should tell machines the same Story that travelers see.

Not a richer Story.

Not a more impressive Story.

The **same verified Story**, expressed in a machine-readable way.
