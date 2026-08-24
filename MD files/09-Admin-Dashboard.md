# 09 — Admin Dashboard
## Jordan Story Tours — English + German

**Purpose:** Define the operational control panel for tours, pricing, bookings, customers, content, translations, Story Collections, destinations, SEO/AEO/GEO, media, reviews, reports, users and settings.

**Core principle:** The admin dashboard must allow Jordan Story Tours staff to manage the business without needing a developer for routine changes.

---

# 1. Dashboard Goals

The admin should be able to:

- create and edit tours
- update prices
- manage itineraries
- manage English and German content
- manage destinations
- manage Story Collections
- manage bookings and quotes
- manage customer records
- manage availability
- manage transport pricing
- manage reviews
- manage images and media
- control SEO fields
- review translation status
- view reports
- manage users and permissions
- update site settings

---

# 2. Main Navigation

Recommended sections:

1. Dashboard
2. Tours
3. Bookings
4. Customers
5. Destinations
6. Jordan Stories
7. Travel Guide
8. Transportation
9. Reviews
10. Media
11. SEO / Search
12. Translations
13. Reports
14. Users & Roles
15. Settings

Navigation labels may remain English internally at launch if the business prefers.

---

# 3. Dashboard Home

Show useful business information immediately.

Suggested cards:

- New Booking Requests
- Confirmed Bookings
- Upcoming Tours
- Revenue This Month
- Outstanding Payments
- Top Tour
- Top Destination
- Top Story Collection
- German Booking Share
- English Booking Share

---

# 4. Dashboard Activity

Recent activity feed:

- new booking
- quote sent
- price changed
- tour updated
- German translation became outdated
- review approved
- payment received
- tour status changed
- content published

Each item should link to the relevant record.

---

# 5. Tasks / Attention Needed

Dedicated panel:

- bookings awaiting reply
- quotes expiring
- unpaid deposits
- tours missing German translation
- tours missing price
- content needing verification
- outdated visa/border information
- expired promo
- missing SEO metadata
- broken image/media references

This makes the dashboard operational, not decorative.

---

# 6. Tours Module

Tour list columns:

- Tour Name
- Story Collection
- Category
- Duration
- Starting Price
- EN Status
- DE Status
- Availability
- Featured
- Bookings
- Updated

Filters:
- status
- category
- Story
- destination
- language status
- availability
- featured
- duration

---

# 7. Tour Editor

Recommended tabs:

1. Overview
2. Pricing
3. Itinerary
4. Inclusions & Exclusions
5. Accommodation
6. Transport & Guide
7. Practical Information
8. Optional Extras
9. Availability
10. Media
11. FAQs
12. SEO
13. German Translation
14. Related Content
15. Booking Rules
16. History

---

# 8. Tour Overview Fields

- internal tour ID
- internal name
- English title
- German title
- English Story subtitle
- German Story subtitle
- English slug
- German slug
- category
- primary Story
- secondary Stories
- duration
- number of nights
- start location
- end location
- destinations
- tour type
- capacity
- short summary EN
- short summary DE
- full introduction EN
- full introduction DE
- active/inactive
- featured
- merchandising badge

---

# 9. Pricing Module

Support:

- base price
- currency
- pricing basis
- traveler tiers
- child price
- infant price
- private/group rules
- seasonal prices
- hotel supplements
- single supplement
- optional extras
- manual override
- promo pricing
- effective dates

Do not overbuild models that the business does not use.

---

# 10. Price History

Store:

- old value
- new value
- admin
- date/time
- effective date
- reason

Never overwrite price history.

---

# 11. Pricing Preview

Admin should be able to test:

- selected date
- adults
- children
- room type
- extras

and see the calculated public quote before publishing.

---

# 12. Itinerary Editor

Day/stop fields:

- order
- day number
- title EN
- title DE
- Story subtitle EN
- Story subtitle DE
- description EN
- description DE
- start location
- end location
- destinations
- driving time
- activities
- meals
- hotel/camp
- guide
- entrance details
- optional extras
- media
- coordinates
- active/inactive

Drag/reorder allowed with accessible alternative controls.

---

# 13. Inclusions / Exclusions

Use structured items rather than one uncontrolled paragraph.

Each item:
- key
- EN label
- DE label
- active
- optional detail
- reusable or tour-specific

This improves consistency across tours.

---

# 14. Accommodation

Manage:

- hotel/camp
- category
- location
- nights
- room type
- meal plan
- guaranteed vs example
- upgrade price
- EN/DE description
- media

Do not display example hotels as guaranteed.

---

# 15. Transport & Guides

Fields:

- private/shared
- vehicle category
- driver role
- guide type
- guide language
- guide included/optional
- luggage notes
- pickup area
- drop-off area

Website language must not automatically imply guide language.

---

# 16. Practical Information

Admin-editable structured facts:

- departure time
- return time
- walking level
- accessibility
- children
- clothing
- footwear
- weather
- seasonal notes
- entrance rules
- visa notes
- border information
- Wadi Mujib access
- Jordan Pass notes

High-change facts should support review dates.

---

# 17. Optional Extras

Fields:

- title EN
- title DE
- description EN
- description DE
- price
- price basis
- applicable tours
- availability
- active/inactive

---

# 18. Tour Availability

Support:

- daily
- weekdays
- date ranges
- seasonal
- blackout dates
- request-only
- temporarily unavailable

Admin calendar view recommended.

---

# 19. Media Tab

Tour media:

- hero
- gallery
- itinerary images
- video
- map media
- Story media

Fields:
- file
- type
- alt EN
- alt DE
- caption EN
- caption DE
- source/rights
- photographer
- focal point
- destination association

---

# 20. FAQ Editor

Per tour:

- question EN
- answer EN
- question DE
- answer DE
- order
- active

FAQ content must come from verified tour facts.

---

# 21. Tour SEO Tab

Per language:

- SEO title
- meta description
- primary query
- secondary queries
- search intent
- breadcrumb label
- social title
- social description
- social image
- index/noindex
- canonical override only when necessary

Structured data should be generated from verified fields.

---

# 22. German Translation Tab

Display:

- English source content
- German content
- source last updated
- translation last updated
- translation status
- reviewer
- notes

Statuses:

- Not Started
- Draft
- Needs Review
- Published
- Outdated

If English protected/content fields change after German approval, mark German **Needs Review**.

---

# 23. Booking Module

List:

- Reference
- Customer
- Tour
- Travel Date
- Travelers
- Language
- Total/Quote
- Payment Status
- Booking Status
- Source
- Assigned Staff
- Created

---

# 24. Booking Filters

- booking status
- payment status
- date range
- travel date
- tour
- Story
- destination
- language
- country
- source
- assigned employee

---

# 25. Booking Detail

Sections:

- journey summary
- travelers
- contact
- pickup/drop-off
- accommodation
- extras
- pricing
- payment
- quote history
- booking status history
- customer messages
- internal notes
- attribution
- activity log

---

# 26. Booking Actions

- assign staff
- change status
- edit journey
- add note
- update price
- create quote
- send quote
- send customer email
- resend confirmation
- mark deposit
- mark payment
- cancel
- duplicate
- print/export

All important actions logged.

---

# 27. Quote Management

Quotes support:

- version
- customer language
- itinerary
- price lines
- total
- currency
- valid until
- deposit
- terms
- EN/DE content
- send status
- accepted/declined

Preserve prior versions.

---

# 28. Customer Module

Customer list:

- Name
- Email
- Phone
- Country
- Preferred Language
- Bookings
- Total Value
- Last Booking

Customer profile:

- contact details
- language
- country
- booking history
- notes
- marketing consent/preferences where applicable

Avoid excessive profiling.

---

# 29. Duplicate Customer Warning

Warn when likely duplicates exist by:

- email
- phone
- similar name + contact

Do not auto-merge.

---

# 30. Destinations Module

Manage canonical destination entities:

- Name EN
- Name DE
- slug EN
- slug DE
- coordinates
- short description EN/DE
- long description EN/DE
- hero media
- practical information
- FAQs
- related tours
- related Stories
- SEO fields
- active/inactive

Initial entities include Petra, Wadi Rum, Dead Sea, Amman, Jerash, Aqaba, Madaba, Mount Nebo, Baptism Site, Ajloun, Umm Qais, Wadi Mujib, Karak, Shobak and Desert Castles.

---

# 31. Story Collections Module

Fields:

- Story ID
- name EN
- name DE
- slug EN
- slug DE
- tagline EN/DE
- description EN/DE
- hero media
- icon/visual motif
- destinations
- tours
- sort order
- active/inactive
- SEO fields

Examples:

- The Ancient Story
- The Desert Story
- The Sacred Story
- The Red Sea Story
- The Adventure Story
- The Essential Jordan Story
- The Complete Jordan Story
- The Luxury Jordan Story

---

# 32. Story Collection Rules

Story Collections are marketing taxonomy.

They do not replace:

- tour categories
- destinations
- search landing pages

A tour may belong to multiple Stories, with one primary Story.

---

# 33. Travel Guide Module

Manage:

- guide title EN/DE
- slug EN/DE
- summary EN/DE
- body EN/DE
- destination
- topic cluster
- author/reviewer
- hero media
- FAQs
- related tours
- related guides
- SEO fields
- reviewed date
- next review

---

# 34. Transportation Module

Admin-managed route matrix:

- origin
- destination
- vehicle type
- passenger capacity
- one-way price
- return price if used
- currency
- active/inactive
- effective date
- notes
- EN label
- DE label

Do not hard-code transport prices into content.

---

# 35. Vehicle Types

Manage:

- type
- display name EN/DE
- capacity
- luggage capacity
- description
- media
- active/inactive

Only promise specific vehicle models when guaranteed.

---

# 36. Reviews Module

Fields:

- reviewer
- rating
- title
- review
- language
- country
- tour
- Story
- source
- date
- verification status
- permission/media
- approved/pending/rejected

Never generate fake reviews.

---

# 37. Media Library

Media search/filter by:

- destination
- tour
- Story
- photographer/source
- image/video
- rights status

Fields:
- filename
- alt EN
- alt DE
- caption EN
- caption DE
- focal point
- width/height
- rights
- source
- upload date

---

# 38. SEO / Search Dashboard

Views:

- pages missing titles
- pages missing meta
- duplicate titles
- noindex pages
- translation SEO gaps
- redirects
- canonical overrides
- sitemap status
- stale content
- priority pages

Do not attempt to build a fake proprietary SEO score.

---

# 39. Redirect Manager

Fields:

- old URL
- new URL
- type
- reason
- created
- active
- hit count if tracked

Prefer 301 for permanent migrations.

Prevent redirect loops/chains.

---

# 40. SEO Keyword Map

Content-planning table:

- page
- language
- primary query
- secondary queries
- intent
- priority
- current ranking notes
- cannibalization notes

English and German mappings remain independent.

---

# 41. Translation Dashboard

Summary:

- total EN pages
- total DE pages
- missing DE
- outdated DE
- draft DE
- published DE
- pages changed since German review

Filters by:

- tours
- destinations
- Stories
- guides
- forms
- system text

---

# 42. Translation Workflow

1. English source approved
2. German draft
3. German review
4. publish
5. English updated
6. system flags German
7. German reviewed again

Never silently copy English into missing German fields on the live site.

---

# 43. Reports Overview

Main report groups:

- Bookings
- Revenue
- Tours
- Destinations
- Stories
- Customers
- Languages
- Acquisition
- Content
- Operations

---

# 44. Booking Reports

- requests
- confirmed bookings
- conversion
- cancellations
- party size
- booking lead time
- booking value
- booking status distribution

---

# 45. Revenue Reports

Where payments are tracked:

- confirmed revenue
- paid
- outstanding
- deposits
- refunds
- revenue by tour
- revenue by Story
- revenue by language
- revenue by source

---

# 46. Tour Reports

- views
- booking starts
- submissions
- confirmations
- conversion
- revenue
- cancellation rate
- top countries
- EN/DE performance

---

# 47. Destination Reports

- page views
- organic entrances
- tour clicks
- booking-assisted conversions
- language split

---

# 48. Story Reports

- Story page views
- tour clicks
- booking starts
- confirmed bookings
- revenue
- language split

This allows Jordan Story branding to be measured as a product-discovery system.

---

# 49. German Reports

Dedicated German view:

- German sessions
- German bookings
- German conversion
- German revenue
- top German tours
- top German destinations
- top German landing pages
- missing/outdated translations
- German acquisition channels

---

# 50. Acquisition Reports

Sources:

- Google Organic
- Google Ads
- Direct
- Instagram
- Facebook
- Referral
- AI/assistant referral where identifiable
- WhatsApp
- Other

Use actual attribution data.

---

# 51. Search Console / Analytics Integration

If integrated, dashboard may display selected summary data.

Do not duplicate full analytics platforms.

Useful:
- top landing pages
- top queries
- clicks
- impressions
- language/country split
- organic conversions

Connector/API integration can be phase-based.

---

# 52. Admin User Roles

Recommended:

## Super Admin
All access.

## Booking Manager
Bookings, quotes, customers, reports.

## Booking Agent
Assigned bookings and customer communication.

## Content Manager
Tours, destinations, Stories, guides, media.

## Translator / German Editor
German content and translation workflow.

## SEO Manager
SEO fields, redirects, content planning.

## Finance
Payments, refunds, revenue reports.

Permissions should be configurable.

---

# 53. Least Privilege

Users only see/actions they need.

Examples:
- translator should not access payment data
- content editor should not refund payments
- booking agent should not manage admin users

---

# 54. User Activity Log

Record:

- login
- content publish
- booking edit
- price change
- payment status change
- role change
- export
- delete/archive
- redirect change

---

# 55. Dashboard Search

Global search should find:

- tours
- bookings
- customers
- destinations
- Story Collections
- guides
- booking references

Use permission-aware results.

---

# 56. Notifications

Admin notifications may include:

- new booking
- overdue booking response
- quote expiring
- payment received
- missing German translation
- content verification due
- tour unavailable
- failed customer email

Allow per-user preferences where useful.

---

# 57. Site Settings

Manage:

- company name
- phone
- email
- WhatsApp
- office details
- social profiles
- logo
- favicon
- default currency
- default language
- enabled languages
- booking email recipients
- support hours
- legal links
- analytics IDs
- Search Console verification
- map settings
- email sender settings

Sensitive secrets should not be exposed in normal UI fields without appropriate controls.

---

# 58. Homepage Settings

Admin controls:

- featured Stories
- featured tours
- featured destinations
- traveler reviews
- guides
- final CTA
- supporting EN/DE copy

Do not allow ordinary CMS users to change the 3D engine/timeline.

---

# 59. Immersive Scene Media Settings

Allow controlled replacement of approved assets:

- Petra poster/fallback
- Wadi Rum fallback
- Dead Sea fallback
- map preview

The underlying 3D camera path, shaders and technical settings remain developer-controlled.

---

# 60. Content Verification Flags

Fields may be flagged:

- Verified
- Needs Business Confirmation
- Needs Legal/Policy Review
- Time-Sensitive
- Outdated

Useful for:
- visa information
- border crossings
- seasonal access
- prices
- hotel/camp details

---

# 61. Publishing Workflow

Possible statuses:

- Draft
- Review
- Approved
- Scheduled
- Published
- Archived

Only authorized roles publish.

---

# 62. Revision History

Content records should preserve revisions.

Show:
- author
- timestamp
- changed fields
- previous version
- restore action where practical

Especially important for tours and policies.

---

# 63. Soft Delete / Archive

Do not hard-delete tours/content with business or SEO history by default.

Use archive.

If public URL is removed, require redirect/SEO action.

---

# 64. Booking Data Retention

Define appropriate retention and deletion rules.

Admin should not retain personal data indefinitely without business/legal purpose.

Retention policy should be configurable/documented.

---

# 65. Exports

Allow CSV/Excel-compatible export for authorized roles:

- bookings
- customers
- payments
- reports

Exports must respect user permissions and filters.

---

# 66. Dashboard Mobile Use

Primary admin workflows should work on tablet/mobile:

- view booking
- change status
- contact customer
- add note
- check upcoming tours

Heavy content editing may be optimized for desktop.

---

# 67. Admin UX

Admin UI should prioritize speed.

Use:
- searchable lists
- filters
- bulk actions only where safe
- clear status badges
- confirmation for destructive actions
- autosave/draft where appropriate
- unsaved-change warnings

Avoid excessive animation inside admin.

---

# 68. Bulk Actions

Potential:

- publish/unpublish
- assign Story
- change category
- assign staff
- export
- mark translation review needed

Do not allow dangerous bulk price changes without strong confirmation.

---

# 69. Data Validation

Examples:

- tour cannot publish without title
- price basis required when price shown
- German page cannot publish with missing required German fields
- itinerary day numbers must be valid
- redirect cannot loop
- booking status transitions may be constrained
- payment cannot exceed valid rules without admin override

---

# 70. Admin Security

Mandatory:

- secure authentication
- strong password policy
- optional/required MFA depending deployment
- session timeout
- CSRF protection
- rate limiting
- permission checks server-side
- audit logs
- secure file handling

Never rely on hidden menu items as permission control.

---

# 71. Backups

Operational data requiring backup:

- tours
- bookings
- customers
- pricing
- content
- translations
- media references
- settings

Backup strategy belongs in deployment/technology specification.

---

# 72. Admin Performance

Lists must paginate/search efficiently.

Do not load:
- all bookings
- all media
- all tours
- full reports

in one request.

Use server-side filters/pagination where appropriate.

---

# 73. Dashboard KPIs

Suggested top row:

**New Requests**  
**Confirmed Bookings**  
**Revenue**  
**Upcoming Tours**  
**Outstanding Payments**

Second row:

**Top Tour**  
**Top Story**  
**Top Destination**  
**German Conversion**  
**Organic Conversion**

Exact metrics depend on available data.

---

# 74. Story Brand in Admin

The admin should understand Story Collections as a real merchandising tool.

Example tour editor:

**Primary Story:** The Desert Story  
**Secondary Story:** The Essential Jordan Story

Reports can then answer:

**Which Jordan Story converts best?**

This connects branding to business intelligence.

---

# 75. Acceptance Checklist

Before launch:

- [ ] tour CRUD works
- [ ] pricing works
- [ ] price history works
- [ ] itinerary editor works
- [ ] EN/DE fields work
- [ ] translation status works
- [ ] destinations work
- [ ] Story Collections work
- [ ] booking list/detail works
- [ ] quote workflow works
- [ ] customer records work
- [ ] reports work
- [ ] media rights fields exist
- [ ] review moderation works
- [ ] transportation pricing works
- [ ] SEO fields work
- [ ] redirects work
- [ ] roles/permissions tested
- [ ] audit log works
- [ ] mobile admin key workflows tested
- [ ] exports respect permissions
- [ ] archive/restore tested
- [ ] security review completed

---

# 76. Final Admin Principle

The public website tells the Story.

The admin dashboard controls the truth behind that Story:

**tour facts, prices, bookings, translations, availability, content, customers and performance.**

The business should be able to evolve without rebuilding the website every time something changes.
