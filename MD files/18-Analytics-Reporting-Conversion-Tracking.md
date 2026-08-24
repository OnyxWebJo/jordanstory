# 18 — Analytics, Reporting & Conversion Tracking
## Jordan Story Tours — EN/DE, SEO/AEO/GEO, Booking & Story Experience

**Purpose:** Define the measurement system for traffic, search visibility, immersive Story engagement, bookings, revenue, language performance and admin reporting.

**Core principle:** Measure business outcomes, not vanity metrics.

---

# 1. Measurement Framework

Primary funnel:

**Discovery → Landing Page → Tour/Story Engagement → Booking Start → Booking Submission → Quote/Payment → Confirmed Booking → Revenue**

Every report should help answer a business question.

---

# 2. Primary KPIs

Track:

- booking requests
- confirmed bookings
- booking conversion rate
- gross booking value/revenue where applicable
- average booking value
- deposit collected
- outstanding balance
- cancellation rate
- top tours
- top destinations
- top Story Collections
- acquisition source
- EN vs DE performance

---

# 3. Search KPIs

From Google Search Console and analytics:

- organic clicks
- impressions
- CTR
- query themes
- landing pages
- country
- device
- branded vs non-branded where classified
- organic booking starts
- organic submissions
- organic confirmed bookings
- organic revenue where attributable

Do not judge SEO only by average ranking position.

---

# 4. AEO / GEO Measurement

AEO/GEO visibility is less standardized than classic search.

Track what can actually be observed:

- question-query impressions/clicks
- answer-focused page performance
- AI/referral traffic where identifiable
- brand mentions discovered through approved monitoring
- assisted bookings from AI/referral sources
- landing pages receiving AI referrals

Do not claim exact “AI rankings” when the platform does not provide reliable data.

---

# 5. Languages

Every event includes:

- locale
- page locale
- booking locale

Compare:

**English vs German**

by:
- traffic
- engagement
- booking starts
- booking submissions
- confirmed bookings
- revenue
- conversion rate
- acquisition source

German must have its own business performance view.

---

# 6. Market Reporting

Where privacy-safe and available, report country-level acquisition.

Priority examples:

- Germany
- Austria
- Switzerland
- United Kingdom
- United States
- other meaningful source markets

Do not infer nationality from IP.

Country reporting is acquisition/location analytics, not traveler identity.

---

# 7. Event Naming

Use stable snake_case event names.

Examples:

- `tour_view`
- `destination_view`
- `story_view`
- `booking_start`
- `booking_step_complete`
- `booking_submit`
- `booking_confirmed`
- `quote_sent`
- `quote_accepted`
- `payment_started`
- `payment_completed`
- `custom_tour_start`
- `custom_tour_submit`

Do not rename events casually after launch.

---

# 8. Common Event Parameters

Where relevant:

- tour_id
- tour_slug
- destination_id
- story_id
- locale
- currency
- value
- traveler_count
- duration_days
- booking_type
- source_page_type

Never send PII.

---

# 9. Prohibited Analytics Parameters

Never send:

- customer name
- email
- phone
- WhatsApp number
- free-text special request
- passport information
- payment-card information
- internal notes

---

# 10. Homepage Immersive Events

Track useful milestones:

- `immersive_eligible`
- `immersive_loaded`
- `immersive_fallback`
- `immersive_skipped`
- `siq_entered`
- `treasury_reveal`
- `wadi_rum_reached`
- `story_cta_click`

Do not track every frame or every scroll percentage.

---

# 11. Immersive Experience Tier

Parameter:

`experience_tier`

Values:
- `full_3d`
- `reduced_3d`
- `cinematic_fallback`
- `reduced_motion`

This allows performance and conversion comparison.

---

# 12. Immersive Business Question

The key question is not:

**How many people saw the Treasury?**

It is:

**Does the immersive Story experience increase meaningful engagement and booking behavior without harming speed?**

Compare cohorts carefully.

---

# 13. Immersive Funnel

Example:

```text
homepage_view
↓
siq_entered
↓
treasury_reveal
↓
wadi_rum_reached
↓
story_cta_click
↓
tour_view
↓
booking_start
↓
booking_submit
```

Use this to identify where the Story journey loses users.

---

# 14. Skip Behavior

Track `immersive_skipped`.

A skip is not automatically a failure.

Some high-intent visitors may want tours immediately.

Always provide fast navigation.

---

# 15. Tour Events

Track:

- tour view
- itinerary expand if meaningful
- gallery engagement
- destination link click
- related tour click
- booking CTA click
- booking start

Avoid noisy events that do not inform decisions.

---

# 16. Story Collection Events

Track:

- Story page view
- Story → tour click
- Story → destination click
- Story booking CTA
- Story-assisted booking

This determines whether the **Jordan Story** taxonomy actually helps customers discover products.

---

# 17. Destination Events

Track:

- destination page view
- destination → tour click
- guide click
- booking CTA

Measure which destinations assist bookings.

---

# 18. Guide/Content Events

For travel guides track:

- guide landing
- related-tour click
- booking start
- assisted conversion

Do not optimize guides solely for pageviews.

---

# 19. Booking Funnel

Recommended steps:

1. booking started
2. tour/date
3. travelers/options
4. contact
5. review
6. submitted

Track completion by step without sending field contents.

---

# 20. Booking Step Event

Example:

`booking_step_complete`

Parameters:

- step_number
- step_name
- tour_id
- locale

This identifies form friction.

---

# 21. Booking Abandonment

Measure:

- started
- reached each step
- submitted

Do not automatically store identifiable abandoned-form data without a deliberate privacy-reviewed design.

---

# 22. Booking Conversion Rate

Primary definition:

**Booking submissions / eligible booking sessions or tour sessions**

Also track:

**Confirmed bookings / booking submissions**

These answer different questions.

---

# 23. Request vs Confirmed Booking

Do not treat a submitted request as revenue.

Separate:

- request
- quote
- accepted
- payment
- confirmed
- completed

---

# 24. Revenue Attribution

Revenue should come from authoritative booking/payment data.

Do not rely solely on browser analytics purchase events.

Analytics can mirror confirmed revenue, but database/payment records remain the source of truth.

---

# 25. Booking Value

Track:

- quoted value
- final value
- deposit
- paid amount
- outstanding amount

Use correct currency handling.

---

# 26. Currency Reporting

If multiple currencies are introduced:

- store transaction currency
- store actual amounts
- use a defined reporting currency only with documented conversion methodology

Do not silently sum USD/EUR/JOD together.

---

# 27. Acquisition Attribution

Capture where available:

- source
- medium
- campaign
- content
- term
- referrer
- landing page

Examples:
- Google organic
- Google Ads
- Instagram
- Facebook
- direct
- partner/referral
- AI/referral
- email

---

# 28. First Touch vs Last Touch

Preserve both where practical.

First touch:
How the traveler discovered Jordan Story Tours.

Last touch:
What brought them back before booking.

Do not pretend either model alone represents causality.

---

# 29. Assisted Conversion

Content may assist without being the last page.

Track relationships such as:

- guide → tour → booking
- destination → tour → booking
- Story → tour → booking
- homepage immersive → tour → booking

---

# 30. UTM Standards

Use consistent campaign naming.

Example:

```text
utm_source=instagram
utm_medium=social
utm_campaign=petra_autumn_2026
utm_content=treasury_reel
```

Create a shared naming convention.

Avoid random capitalization/spelling.

---

# 31. Google Ads

If Google Ads is used:

track real conversion stages separately:

- booking request
- confirmed booking
- qualified lead if defined
- payment/confirmed revenue where technically appropriate

Do not optimize campaigns only toward low-quality form starts.

---

# 32. Conversion Values

Possible hierarchy:

Booking Start:
micro-conversion

Booking Submit:
lead conversion

Confirmed Booking:
primary business conversion

Payment/Revenue:
value conversion

Use appropriate values in advertising systems.

---

# 33. Phone / WhatsApp

Track clicks:

- phone_click
- whatsapp_click

Do not assume click = booking.

Where operationally possible, staff may record the final acquisition source/booking outcome in admin.

---

# 34. Email Click

Track `email_contact_click` if useful.

Again, click is intent—not conversion.

---

# 35. Admin Dashboard — Executive Overview

Top cards:

- New Booking Requests
- Confirmed Bookings
- Revenue / Booking Value
- Deposits Collected
- Outstanding Balance
- Conversion Rate
- Average Booking Value
- Cancellations

Filters:
- date
- locale
- tour
- Story
- destination
- acquisition source

---

# 36. Executive Trend Chart

Show bookings/revenue over time.

Options:
- daily
- weekly
- monthly

Allow comparison to previous period.

Do not clutter with too many lines by default.

---

# 37. Booking Status Report

Display counts/value for:

- New
- Reviewing
- Quote Sent
- Awaiting Payment
- Confirmed
- Completed
- Cancelled

Useful for operations.

---

# 38. Tour Performance Report

Per tour:

- page views
- booking starts
- submissions
- confirmed bookings
- conversion rate
- booking value/revenue
- average booking value
- cancellation rate

This connects marketing and operations.

---

# 39. Story Performance Report

Per Story Collection:

- Story page views
- tour clicks
- booking assists
- confirmed bookings
- booking value

This is essential because **Story** is a product-discovery concept, not only branding.

---

# 40. Destination Performance

Per destination:

- destination page traffic
- tours containing destination
- tour clicks
- assisted bookings
- organic search traffic

Useful for editorial and campaign planning.

---

# 41. Language Performance Dashboard

Columns:

| Metric | English | German |
|---|---:|---:|
| Sessions | | |
| Organic Clicks | | |
| Tour Views | | |
| Booking Starts | | |
| Booking Submissions | | |
| Confirmed | | |
| Conversion Rate | | |
| Booking Value | | |

Also segment German by DACH markets where useful.

---

# 42. SEO Dashboard

Show:

- organic clicks
- impressions
- CTR
- organic bookings
- organic booking value
- top landing pages
- top query clusters
- EN/DE split
- indexed page health
- important technical alerts

Search Console is the primary Google search-performance source.

---

# 43. Keyword Cluster Reporting

Group queries into clusters:

- Jordan Tours
- Petra
- Wadi Rum
- Dead Sea
- Private Driver
- Jordan Itinerary
- German Jordanien Rundreise
- German Petra
- etc.

Cluster trends are more useful than obsessing over one keyword.

---

# 44. Content Performance

For guides/destinations:

- organic entrances
- search clicks
- tour clicks
- booking assists
- conversion assists
- last review date

Identify content that attracts traffic but produces no useful journey.

---

# 45. AEO Dashboard

Track answer-oriented content:

- question query impressions
- clicks
- CTR
- landing pages
- FAQ/answer pages
- booking assists

Avoid invented metrics such as an unsupported universal “AEO score.”

---

# 46. GEO / AI Referral Dashboard

Where referrers can be reliably identified:

- source/platform
- sessions
- landing page
- tour views
- booking starts
- submissions
- confirmed bookings

Keep detection logic maintainable because AI referral patterns may change.

---

# 47. Brand Search

Track branded search trends through Search Console where possible:

- Jordan Story Tours
- Jordan Story
- brand spelling variants

Growth may indicate stronger brand awareness.

---

# 48. Performance Analytics

Track Core Web Vitals alongside business data:

- LCP
- INP
- CLS
- experience tier
- page type
- device

Question:

**Does slower 3D performance reduce booking behavior?**

---

# 49. 3D Error Report

Admin/technical monitoring:

- immersive load failures
- fallback rate
- WebGL errors
- device/browser distribution

This belongs in technical reporting, not necessarily the business dashboard.

---

# 50. Booking Operations Dashboard

For staff:

- new requests
- unassigned
- awaiting response
- quote due
- awaiting payment
- travel soon
- overdue balance
- cancellations

Operational urgency matters more than charts.

---

# 51. Upcoming Tours Report

Show confirmed bookings by:

- today
- next 7 days
- next 30 days

Include:
- booking reference
- tour
- date
- traveler count
- assigned staff
- payment status

Respect role permissions.

---

# 52. Payment Report

Finance view:

- booking reference
- total
- deposit
- paid
- outstanding
- currency
- payment status
- due status

No card data.

---

# 53. Revenue by Tour

Report:

- confirmed/completed booking value
- paid revenue
- refunds
- outstanding

Define which revenue basis each chart uses.

---

# 54. Revenue by Story

A tour can belong to multiple Stories.

For financial reporting, attribute to:
- primary Story

For assisted marketing reporting:
- allow multi-touch Story assists

Do not double-count revenue in executive totals.

---

# 55. Revenue by Destination

Because one tour may visit multiple destinations, destination revenue is generally an attributed/assisted metric.

Label it clearly.

Do not sum destination-attributed revenue as if mutually exclusive.

---

# 56. Cancellation Report

Track:

- cancellation count
- cancellation rate
- tour
- source
- reason category where staff records it
- refund value

Use categories, not unnecessarily detailed personal notes.

---

# 57. Lead Quality

Optional staff classification:

- qualified
- unqualified
- duplicate
- spam
- unavailable
- lost on price
- no response
- booked

This helps advertising and sales analysis.

---

# 58. Lost Booking Reasons

Use structured reasons:

- price
- unavailable date
- itinerary mismatch
- no response
- chose competitor
- travel cancelled
- duplicate/spam
- other

Avoid forcing staff to write long notes.

---

# 59. Custom Tour Analytics

Track:

- custom-tour starts
- submissions
- destinations requested
- duration
- confirmed
- average booking value

Use structured fields without exposing personal notes to analytics platforms.

---

# 60. Transportation Analytics

Track:

- route
- booking request
- vehicle
- confirmed
- value

This helps admin understand high-demand transfer routes.

---

# 61. Reports Export

Authorized users may export:

- bookings
- finance
- tour performance
- marketing summaries

Exports must follow security controls and audit logging.

---

# 62. Scheduled Reports — Future

Architecture may later support:

- daily booking summary
- weekly management report
- monthly SEO report
- monthly German-market report

Not required for first launch if dashboard is sufficient.

---

# 63. GA4 Architecture

If GA4 is selected:

Use it for:
- sessions
- acquisition
- events
- funnel behavior
- campaign attribution

Do not use it as the authoritative booking/payment database.

---

# 64. Search Console

Connect both language sections through the appropriate verified property setup.

Monitor:
- indexing
- pages
- queries
- countries
- devices
- sitemaps
- Core Web Vitals

---

# 65. Server-Side Conversion Events

For important events such as confirmed booking/payment, consider server-side event delivery where supported and privacy-appropriate.

This improves reliability when browser tracking is blocked.

Database remains authoritative.

---

# 66. Event Deduplication

If the same conversion is sent client + server:

use stable event/booking identifiers to prevent duplicate counting.

---

# 67. Consent-Aware Analytics

Analytics/advertising event delivery must respect the configured consent model.

The website and booking system work regardless of analytics consent.

---

# 68. Data Retention

Define retention for:

- raw analytics
- attribution
- reports
- technical RUM

Do not retain detailed behavioral data indefinitely without reason.

---

# 69. Bot Filtering

Exclude known/internal traffic where practical.

Do not let:
- crawlers
- staff
- automated QA

inflate business metrics.

---

# 70. Internal Staff Traffic

Provide an internal traffic filter or staff environment approach.

Admin activity must never count as public customer engagement.

---

# 71. Test Bookings

Mark test bookings.

Exclude them from:
- revenue
- conversion
- operational totals

Never delete useful QA evidence just to clean charts.

---

# 72. Time Zone

Admin reports use a defined business timezone.

Store timestamps UTC.

Travel dates remain local calendar dates.

---

# 73. Reporting Currency

Choose one management reporting currency if needed.

Always retain original transaction currency.

Display conversion methodology/date when converting.

---

# 74. Data Freshness

Dashboard labels should indicate when data is:

- real-time/near real-time
- daily synced
- Search Console delayed

Do not present delayed search data as live.

---

# 75. Dashboard Filters

Global filters:

- date range
- locale
- source
- tour
- Story
- destination
- booking status

Finance-only filters visible according to permission.

---

# 76. Dashboard UX

Default view should answer:

1. What happened?
2. What needs attention?
3. What is producing bookings?
4. Where are we losing travelers?

Do not build a wall of 30 KPI cards.

---

# 77. Reports by Role

## Super Admin
All reports.

## Booking Manager
Bookings, funnel, operations.

## Finance
Payments/revenue/refunds.

## SEO Manager
Search/content/conversion.

## German Editor
German content/search performance without unnecessary customer data.

---

# 78. Privacy in Reporting

Prefer:
- aggregated charts
- booking references

over displaying full customer identity.

Only operational screens show customer details where required.

---

# 79. Analytics Data Model

Store authoritative internal reporting fields in PostgreSQL:

- booking attribution
- booking value
- tour
- Story
- locale
- status
- payment

External analytics IDs can be linked where privacy-safe.

---

# 80. Reporting Views

Possible database views:

- `booking_funnel_view`
- `tour_performance_view`
- `story_performance_view`
- `language_performance_view`
- `finance_summary_view`
- `upcoming_tours_view`

Use materialized views only if performance requires them.

---

# 81. Search Console Import

If integrated into admin later, store aggregated search metrics:

- date
- page
- query cluster
- country
- device
- clicks
- impressions
- position

Do not unnecessarily duplicate every external dataset at launch.

---

# 82. AI Referral Detection

Maintain a configurable referral-source mapping rather than hard-coding logic throughout the app.

Example conceptual categories:

- AI assistant/referral
- search
- social
- direct
- partner

Platforms change over time.

---

# 83. Story Attribution

When visitor interacts with a Story before booking, record Story assist.

Possible:
- first Story
- last Story
- primary tour Story

This helps validate the branding/product architecture.

---

# 84. Immersive Attribution

Record a privacy-safe session flag:

- immersive reached Treasury?
- reached Wadi Rum?
- skipped?
- fallback?

Then compare aggregate conversion.

Do not create invasive replay-style tracking by default.

---

# 85. Heatmaps / Session Recording

Not required initially.

If later considered:
- privacy review
- mask form fields
- never record payment/customer-sensitive data
- obtain appropriate consent

Prefer standard analytics first.

---

# 86. A/B Testing

Do not launch complex experimentation infrastructure initially.

Possible future tests:

- Story CTA wording
- tour-card presentation
- booking CTA placement
- homepage immersive length

Never A/B test protected facts/prices deceptively.

---

# 87. Conversion Optimization Cycle

Monthly:

1. identify high-traffic low-conversion pages
2. inspect intent mismatch
3. inspect booking friction
4. inspect performance
5. improve
6. measure again

Do not redesign based on intuition alone after launch.

---

# 88. SEO Optimization Cycle

Monthly:

1. review query/page data
2. identify opportunity
3. improve content/internal links
4. verify technical health
5. monitor conversion

Traffic growth without booking relevance is not enough.

---

# 89. German Growth Cycle

Track German separately.

Questions:

- Which German queries produce traffic?
- Which tours convert?
- Germany vs Austria vs Switzerland?
- Which pages need localization improvement?
- Does German traffic prefer multi-day/private tours?

Use data to decide future German content expansion.

---

# 90. Future Language Decision

Analytics should help decide whether to add Russian or another language.

Evaluate:

- source-market traffic
- booking requests
- conversion
- revenue potential
- organic opportunity
- operational support

Do not decide based only on raw visitor counts.

---

# 91. Executive Monthly Report

Recommended sections:

1. Bookings
2. Revenue
3. Top Tours
4. Top Stories
5. English vs German
6. Organic Search
7. Paid/Social Acquisition
8. Booking Funnel
9. Cancellations/Lost Leads
10. Key Actions for Next Month

Keep it decision-focused.

---

# 92. SEO Monthly Report

Include:

- clicks/impressions
- organic bookings
- top growth pages
- declining pages
- query clusters
- German performance
- technical issues
- content opportunities
- next actions

Avoid dumping hundreds of keyword positions.

---

# 93. Immersive Monthly Report

Include:

- eligibility rate
- full/reduced/fallback split
- load failure
- Treasury reach
- Wadi Rum reach
- Story CTA clicks
- booking-start rate by tier
- CWV by tier

This tells us whether the ambitious homepage is paying for its complexity.

---

# 94. Data Quality Checks

Automatically flag:

- booking without locale
- confirmed booking with invalid total
- paid status without payment record
- unknown source codes
- duplicate conversion event
- impossible traveler counts

Reports are only as good as the data.

---

# 95. Tracking QA Before Launch

Verify:

- page views
- locale
- tour view
- Story view
- destination view
- booking start
- each booking step
- booking submit
- WhatsApp click
- phone click
- immersive milestones
- fallback
- confirmed booking
- payment
- campaign attribution

Confirm no PII appears in analytics payloads.

---

# 96. Search QA

Verify:

- Search Console property
- sitemap submitted
- EN/DE pages measurable
- canonical pages reported
- country/device segmentation available

---

# 97. Dashboard Acceptance Checklist

- [ ] executive KPIs
- [ ] booking operations
- [ ] tour performance
- [ ] Story performance
- [ ] destination performance
- [ ] EN vs DE
- [ ] source/campaign
- [ ] SEO
- [ ] AEO question content
- [ ] AI/referral where identifiable
- [ ] booking funnel
- [ ] revenue/payments
- [ ] cancellations/lost reasons
- [ ] upcoming tours
- [ ] role permissions
- [ ] exports audited
- [ ] test bookings excluded

---

# 98. Final Measurement Principle

The redesigned Jordan Story Tours website should not merely be beautiful and rank well.

We need to know whether the complete experience works:

**Did Google or an answer engine bring the right traveler?**

**Did the Jordan Story experience make them curious?**

**Did the tour content earn their trust?**

**Did the booking experience make it easy to act?**

**Did that request become a confirmed, valuable booking?**

That is the measurement chain:

**Search → Story → Trust → Booking → Revenue.**
