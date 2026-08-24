# 19 — QA, Testing & Launch Checklist
## Jordan Story Tours — EN/DE Website, Immersive Experience, Booking & Admin

**Purpose:** Define the final quality-assurance process before the redesigned Jordan Story Tours website is allowed to replace the existing production website.

**Core principle:** A beautiful launch with broken bookings, lost rankings, incorrect prices or a failing 3D experience is not a successful launch.

---

# 1. Release Gates

Production launch requires approval across:

1. Content
2. English
3. German
4. Tour facts
5. Pricing
6. Booking
7. Admin
8. SEO
9. AEO/GEO
10. Redirects
11. Performance
12. 3D experience
13. Accessibility
14. Security/privacy
15. Analytics
16. Infrastructure/backups

Critical failures block launch.

---

# 2. Severity Levels

## P0 — Launch Blocker
Examples:
- booking cannot submit
- incorrect price charged
- payment incorrectly marked successful
- admin authentication bypass
- customer data exposed
- important production pages inaccessible
- catastrophic redirect/indexing issue

## P1 — Critical
Examples:
- major tour has wrong itinerary
- German booking broken
- mobile immersive experience unusable
- important legacy URL returns wrong 404
- schema contains materially false facts

## P2 — Major
Examples:
- layout problem
- missing translation
- non-critical broken internal link
- wrong image/alt
- report issue

## P3 — Minor
Examples:
- small spacing issue
- editorial typo
- subtle animation polish

P0/P1 issues must be resolved before launch.

---

# 3. Test Environments

Use:

- local/development
- staging
- production

Staging should closely resemble production configuration.

Staging must be protected from search indexing.

---

# 4. Staging Index Protection

Verify:

- authentication or access restriction where appropriate
- `noindex`
- robots controls
- staging URLs absent from sitemap
- canonical does not accidentally establish staging as public source

Before production launch, production indexing rules must be rechecked separately.

---

# 5. Content Inventory QA

Compare the approved migration inventory with staging.

Verify every required:

- tour
- destination
- Story Collection
- travel guide
- static page
- transportation page
- booking route
- legal page

No page is considered migrated merely because a similar page exists.

---

# 6. Raw Source Preservation

Confirm the migration archive contains:

- source URL
- raw tour content
- extracted booking fields
- pricing evidence
- media references
- metadata
- extraction date

Do not delete the raw migration layer after launch.

---

# 7. Tour Fact QA

For every tour verify:

- title
- duration
- nights
- route
- destinations
- starting point
- ending point
- itinerary day count
- meals
- hotel/camp
- guide
- transportation
- inclusions
- exclusions
- extras
- availability
- price
- pricing basis

Compare against verified business data, not memory.

---

# 8. Itinerary QA

For every tour:

- day numbers sequential
- no missing days
- route makes sense
- overnight destination aligns with next day
- destination names canonical
- meal information consistent
- guide information consistent
- optional activities identified correctly

Flag contradictions.

---

# 9. Pricing QA

Test all applicable:

- traveler ranges
- adult/child rules
- group rules
- seasonal rules
- accommodation supplements
- extras
- transport prices
- currency

Verify UI and server calculation match.

---

# 10. Price Tampering Test

Modify client-side submitted price values.

Expected:

**Server ignores/rejects manipulated price and recalculates from authoritative rules.**

---

# 11. Price History QA

Change a test price in admin.

Verify:

- new public price
- previous price preserved in history
- audit user recorded
- existing booking snapshot unchanged

---

# 12. English Content QA

Review:

- grammar
- spelling
- readability
- Story voice
- headings
- CTAs
- tour facts
- FAQ
- metadata
- internal links

Avoid generic AI-sounding repetition.

---

# 13. German Content QA

German review must include:

- natural German
- correct tourism vocabulary
- search intent
- title/H1
- itinerary
- inclusions/exclusions
- booking UI
- FAQs
- metadata
- CTA wording
- emails
- validation/errors

German should not feel machine-translated.

---

# 14. Translation Parity QA

Compare EN ↔ DE protected facts:

- duration
- price
- route
- inclusions
- exclusions
- guide
- accommodation
- availability
- booking terms

Localized prose can differ; facts cannot.

---

# 15. Translation Status QA

No priority German page launches with:

- NOT_STARTED
- DRAFT
- NEEDS_REVIEW
- OUTDATED

unless explicitly approved as unpublished/noindex.

---

# 16. Language Switch QA

Test every major page.

EN → DE:
- equivalent page if available

DE → EN:
- equivalent page

Do not always redirect to language homepage.

---

# 17. Hreflang QA

Verify:

- reciprocal EN/DE hreflang
- correct URL
- correct locale
- self-reference where strategy requires
- x-default if implemented
- no broken hreflang destinations

---

# 18. Canonical QA

Each indexable page should normally canonicalize correctly to itself or approved canonical.

Verify no:

- staging canonical
- EN canonical pointing to DE
- tour canonical pointing to homepage
- HTTP canonical
- duplicate conflicting canonical

---

# 19. URL QA

Check:

- clean slugs
- lowercase policy
- trailing slash consistency
- no accidental query duplicates
- no encoded garbage
- German URL consistency

---

# 20. Redirect QA

Test every legacy URL in migration map.

Verify:

- correct destination
- correct status
- one hop
- no loop
- no chain
- no unrelated homepage redirect

---

# 21. High-Value Legacy URLs

Give special QA priority to URLs with:

- organic traffic
- rankings
- backlinks
- bookings
- historical importance

A redesign must preserve their search equity.

---

# 22. 404 QA

Crawl old URL inventory against production/staging mapping.

Unexpected 404:
investigate.

Intentional removed URL:
confirm 404/410 strategy.

Do not redirect all missing pages to homepage.

---

# 23. Sitemap QA

Verify sitemap includes only:

- canonical
- indexable
- production
- valid 200 URLs

Separate sitemap sections if useful:
- tours
- destinations
- guides
- EN
- DE

---

# 24. Robots.txt QA

Verify production:

- public pages crawlable
- admin blocked where appropriate
- internal/private paths excluded
- sitemap declared

Do not accidentally deploy staging `Disallow: /`.

---

# 25. Title Tag QA

Every important page:

- unique
- relevant
- natural
- language-correct
- not stuffed
- aligned with search intent

---

# 26. Meta Description QA

Every priority page:

- unique where practical
- useful
- language-correct
- matches actual page
- encourages qualified clicks

Do not promise unavailable inclusions/prices.

---

# 27. Heading QA

Verify:

- one clear primary H1
- logical H2/H3 structure
- no headings used only for styling
- Story headings do not obscure search meaning

---

# 28. Structured Data QA

Validate generated structured data.

Potential types where appropriate:

- Organization
- WebSite
- BreadcrumbList
- TouristAttraction
- Trip/TouristTrip or relevant supported travel markup
- FAQPage only where eligible and appropriate
- Article
- Review/AggregateRating only with genuine supporting data

Do not add schema solely because a type exists.

---

# 29. Schema Fact QA

Structured data must match visible verified content.

Especially:

- name
- price
- currency
- duration
- review rating
- organization
- destination

No fake reviews or hidden schema-only claims.

---

# 30. Breadcrumb QA

Verify:

- visible breadcrumb
- schema breadcrumb
- Story/destination/tour hierarchy
- language-correct labels
- valid links

---

# 31. Internal Link QA

Crawl for:

- broken links
- redirects used internally
- wrong language links
- orphan pages
- duplicate anchors

Update internal links to final canonical URLs rather than relying on redirects.

---

# 32. Story Architecture QA

Verify every intended Story Collection:

- has correct name
- localized EN/DE
- maps to correct tours
- maps to correct destinations
- has unique Story identity
- does not replace useful SEO taxonomy

---

# 33. Jordan Story Brand QA

Check product experience for consistent use of:

- Jordan Story
- Story Collections
- chapter/journey language
- Story CTAs
- immersive narrative

Avoid forcing “Story” into every sentence.

It should feel intentional, not repetitive.

---

# 34. Homepage Narrative QA

Verify scroll journey:

**Siq → deeper Siq → Treasury reveal → transition → Wadi Rum → later Story sections**

The sequence should be understandable without explanatory instructions.

---

# 35. 3D Desktop QA

Test:

- loading
- camera
- scroll mapping
- geometry
- textures
- lighting
- Treasury reveal
- transition
- Wadi Rum
- CTA
- pause/resume
- resize
- back navigation

---

# 36. 3D Mobile QA

Test on real phones.

Check:

- stable FPS
- touch scrolling
- thermal load
- memory
- texture quality
- readable overlay text
- no accidental scroll lock
- correct reduced asset tier

---

# 37. Full 3D Tier QA

Verify capable devices receive:

- intended geometry
- intended textures
- intended transitions
- acceptable FPS

Do not force full tier merely because WebGL exists.

---

# 38. Reduced 3D Tier QA

Verify:

- lower texture/render cost
- fewer effects
- Story remains coherent
- Treasury reveal remains impactful

---

# 39. Cinematic Fallback QA

Force fallback.

Verify:

- no broken canvas
- Story sequence works
- navigation works
- CTA works
- SEO content unchanged
- booking reachable
- no excessive downloads from full 3D

---

# 40. Reduced Motion QA

Enable OS/browser reduced motion.

Verify:

- heavy immersive scene skipped/reduced
- no forced camera motion
- content remains complete
- navigation/booking fully available

---

# 41. WebGL Failure QA

Simulate renderer/asset failure.

Expected:

- error captured
- fallback displayed
- user can continue
- no blank/black hero

---

# 42. Slow Network QA

Test throttled connection.

Verify:

- semantic hero appears
- fallback visible
- no full-screen loading gate
- user can access tours before all immersive assets load

---

# 43. Homepage LCP QA

Ensure 3D initialization does not delay the initial meaningful hero.

Measure on:

- desktop
- mobile
- slow connection

---

# 44. Core Web Vitals QA

Monitor:

- LCP
- INP
- CLS

Test representative:

- homepage
- tour
- destination
- guide
- booking

Field monitoring starts immediately after launch.

---

# 45. Bundle QA

Verify:

- Three.js absent from ordinary tour pages
- admin libraries absent from public bundle
- no duplicate huge dependencies
- code splitting works
- German does not load entire English content bundle

---

# 46. Image QA

For all priority images:

- correct asset
- no broken image
- correct aspect ratio
- width/height reserved
- responsive source
- compression
- EN alt
- DE alt

Decorative images may appropriately use empty alt.

---

# 47. Media Rights QA

Verify media status before publication.

Do not publish unknown/unapproved third-party photography simply because it existed on the old site.

---

# 48. Font QA

Verify:

- fonts load
- fallback acceptable
- German characters
- no major layout shift
- only necessary weights loaded

---

# 49. Navigation QA

Desktop/mobile:

- logo
- tours
- destinations
- Stories
- guides
- about
- contact
- booking
- language switch

No dead-end navigation.

---

# 50. Mobile Menu QA

Test:

- open/close
- keyboard
- focus
- scroll
- nested items
- language switch
- booking CTA

---

# 51. Booking Entry QA

Test booking from:

- homepage
- tour page
- Story
- destination
- mobile menu
- direct booking URL

Correct tour/context should be preserved.

---

# 52. Booking Fields QA

Verify every approved field:

- label
- type
- required
- validation
- dropdown values
- conditional behavior
- EN
- DE

Compare against booking-field registry.

---

# 53. Booking Dropdown QA

Test all key dropdowns.

Ensure:

- no obsolete values
- no duplicate values
- language labels correct
- internal values stable
- price-affecting values calculated server-side

---

# 54. Booking Date QA

Test:

- past date
- today if allowed/disallowed
- valid future date
- blackout date
- unavailable date
- seasonal tour
- timezone boundary

---

# 55. Traveler QA

Test:

- minimum
- maximum
- adult
- child
- infant
- group threshold
- invalid zero/negative
- extreme manipulated value

---

# 56. Conditional Booking QA

Examples:

- selected tour changes extras
- transport selection shows route
- accommodation shows room fields
- custom tour shows preferences

Hidden conditional fields should not submit stale invalid values.

---

# 57. Booking Submission QA

Verify:

- validation
- server calculation
- database save
- booking reference
- success screen
- admin record
- customer notification
- admin notification
- attribution
- locale

---

# 58. Duplicate Submission QA

Double-click/retry.

Expected:
no unintended duplicate booking/payment.

Use idempotency where necessary.

---

# 59. Booking Error QA

Simulate:

- DB error
- email error
- pricing error
- timeout

Customer receives useful safe feedback.

Do not lose a successfully saved booking merely because email fails.

---

# 60. Custom Tour QA

Test:

- EN
- DE
- destination selection
- duration
- traveler count
- preferences
- contact
- submission
- admin workflow

---

# 61. Transportation QA

Test:

- origin
- destination
- vehicle
- passengers
- one-way/return
- price
- airport/flight fields if used
- booking record

---

# 62. Quote QA

Test:

- create
- version
- edit
- send
- accept
- expire
- supersede

Old versions remain preserved.

---

# 63. Payment QA

If payment is enabled:

- successful
- failed
- cancelled
- delayed
- duplicate webhook
- forged webhook
- deposit
- full payment
- refund

Database/provider status must reconcile.

---

# 64. Customer Email QA

Verify EN/DE:

- subject
- branding
- booking reference
- tour
- date
- travelers
- next steps
- links
- contact information

Do not include internal notes.

---

# 65. Admin Notification QA

Verify staff receives enough operational information without exposing unnecessary data in insecure channels.

---

# 66. Admin Login QA

Test:

- valid
- invalid
- rate limiting
- disabled account
- reset
- logout
- session expiry
- MFA if enabled

---

# 67. Role QA

Test each role against authorization matrix.

Direct API access must match UI restrictions.

---

# 68. Tour Admin QA

Test:

- create
- edit
- archive
- publish
- translation
- itinerary
- inclusion/exclusion
- Story
- destination
- media
- SEO

---

# 69. Pricing Admin QA

Test:

- price rule creation
- range overlap
- season
- currency
- activation
- audit history
- public update

Warn/block ambiguous conflicting rules.

---

# 70. Booking Admin QA

Test:

- list
- search
- filter
- assign
- status
- notes
- quote
- payment status
- customer contact
- history

---

# 71. Internal Note QA

Ensure internal notes never appear in:

- customer email
- public page
- quote unless deliberately copied
- analytics

---

# 72. German Editor QA

Verify German Editor can:

- edit DE
- review DE

but cannot:
- change pricing
- manage users
- access unnecessary finance/customer data

---

# 73. SEO Manager QA

Verify permissions for:

- metadata
- redirects
- SEO content
- reports

without unrelated sensitive operations.

---

# 74. Reports QA

Validate dashboard calculations against database samples.

Test:

- booking count
- confirmed count
- revenue
- deposits
- outstanding
- cancellation
- EN/DE
- tour
- Story
- destination

---

# 75. Revenue Double-Counting QA

Ensure Story/destination assisted attribution does not inflate executive revenue totals.

---

# 76. Analytics Event QA

Inspect events for:

- correct name
- correct locale
- correct tour/Story
- correct funnel step
- no duplicate
- no PII

---

# 77. Immersive Analytics QA

Verify:

- eligible
- loaded
- fallback
- skipped
- Siq entered
- Treasury reveal
- Wadi Rum reached
- CTA

No excessive scroll-event spam.

---

# 78. Search Analytics QA

Verify Search Console/SEO measurement setup.

Do not expect Search Console data to be instant.

---

# 79. Consent QA

Test:

- accept
- reject
- customize if implemented
- change later
- EN
- DE

Non-essential scripts should behave according to approved consent configuration.

---

# 80. Privacy QA

Verify:

- EN privacy
- DE privacy
- actual vendors/services match text
- no placeholder company details
- correct contact route

---

# 81. Booking Terms QA

Verify terms links appear before submission and versions are current.

Marketing consent remains separate.

---

# 82. Security Header QA

Check production:

- HTTPS
- HSTS
- CSP
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- frame restrictions

---

# 83. Input Security QA

Test malicious strings against:

- booking
- contact
- search
- admin rich text
- SEO fields
- redirects

No script execution or SQL errors.

---

# 84. Upload Security QA

Test:

- valid image
- oversized image
- renamed executable
- invalid MIME
- SVG policy
- corrupted file

Reject unsafe uploads.

---

# 85. Rate Limit QA

Test:

- booking spam
- contact spam
- login attempts
- reset attempts

Ensure protection without blocking normal customers unnecessarily.

---

# 86. Accessibility QA

Check:

- semantic landmarks
- heading order
- keyboard
- focus
- labels
- errors
- contrast
- alt text
- reduced motion
- screen-reader booking flow

The 3D canvas cannot be the only way to understand/navigate the homepage.

---

# 87. Keyboard QA

Complete major tasks without mouse:

- navigation
- language switch
- tour
- booking
- consent
- form submission

---

# 88. Focus QA

Focus must remain visible.

Modal/menu close should return focus logically.

No keyboard traps.

---

# 89. Form Accessibility QA

Every input:

- label
- error association
- required state
- logical tab order
- readable validation

Do not rely only on color.

---

# 90. Browser Matrix

Desktop:

- Chrome
- Safari
- Firefox
- Edge

Mobile:

- Safari iOS
- Chrome Android

Focus on supported current/recent versions based on project policy.

---

# 91. Device Matrix

At minimum test:

- modern desktop
- laptop
- recent iPhone
- older supported iPhone
- flagship Android
- mid-range Android
- tablet

Real-device 3D testing is mandatory.

---

# 92. Responsive QA

Check common widths:

- small phone
- large phone
- tablet
- laptop
- desktop
- large desktop

Do not optimize only fixed breakpoints.

---

# 93. Orientation QA

Mobile/tablet:

- portrait
- landscape

Ensure immersive experience and booking remain usable.

---

# 94. Slow/Offline Failure QA

Test partial connectivity.

Booking should never falsely show success before server confirmation.

---

# 95. Email Deliverability QA

Verify:

- SPF
- DKIM
- DMARC
- sender
- reply-to
- EN/DE templates
- spam placement checks

---

# 96. Backup QA

Before launch:

- database backup
- old website backup
- media backup
- configuration backup

Confirm restore procedure.

---

# 97. Rollback Plan

Document:

- trigger for rollback
- responsible person
- DNS/app rollback
- database considerations
- old-site restore
- communication

Do not invent rollback during an outage.

---

# 98. Production Environment QA

Verify:

- correct domain
- HTTPS
- environment variables
- database
- storage
- CDN
- email
- payment production credentials
- analytics
- no staging credentials

---

# 99. Domain QA

Test:

- `https://jordanstorytours.com`
- preferred `www`/non-www behavior
- HTTP redirect
- canonical host
- certificate
- subdomains if used

Use one canonical hostname.

---

# 100. DNS Change Planning

Before cutover:

- record current DNS
- reduce TTL ahead of launch if appropriate
- verify new server
- prepare rollback

Avoid unnecessary DNS changes.

---

# 101. Pre-Launch Crawl

Crawl final production candidate.

Export:

- URLs
- status
- title
- description
- H1
- canonical
- robots
- hreflang
- schema
- broken links

Compare with migration map.

---

# 102. Launch-Day Checklist

Immediately before launch:

- freeze content/pricing changes
- final DB backup
- final old-site backup
- verify redirect map
- verify production env
- verify payment/email
- verify robots
- verify sitemap
- verify analytics

Then deploy/cut over.

---

# 103. Immediate Post-Launch QA

Within minutes:

Test:

- homepage
- EN tour
- DE tour
- booking
- admin
- email
- payment if applicable
- immersive
- fallback
- redirects
- sitemap
- robots

---

# 104. Search Post-Launch

After launch:

- submit sitemap
- inspect key pages
- verify Google can fetch
- monitor indexing
- monitor legacy redirects
- watch 404s

Do not request indexing for every URL blindly.

---

# 105. First 24 Hours

Monitor:

- server errors
- bookings
- email
- payments
- WebGL failures
- Core Web Vitals/RUM
- 404s
- redirects
- analytics
- uptime

---

# 106. First 7 Days

Review:

- organic landing pages
- indexing
- crawl issues
- booking funnel
- German traffic
- immersive fallback rate
- performance
- customer/staff feedback

---

# 107. First 30 Days

Compare against baseline:

- organic clicks
- impressions
- booking requests
- confirmed bookings
- conversion
- top tours
- EN vs DE
- Story performance
- CWV

Avoid judging SEO from only a few days of volatility.

---

# 108. Search Ranking Protection

If a valuable old page drops unexpectedly:

check:

- redirect
- canonical
- content intent
- indexing
- internal links
- hreflang
- server status

Do not immediately rewrite everything.

---

# 109. German Indexing Monitoring

Track `/de/` separately.

Verify:

- discovered
- crawled
- indexed
- correct hreflang
- German query impressions

German growth may take time.

---

# 110. Story Experience Review

After real usage data:

evaluate:

- Siq entry rate
- Treasury reach
- Wadi Rum reach
- skip rate
- CTA rate
- booking starts
- performance by tier

Simplify if cinematic complexity harms business outcomes.

---

# 111. Bug Reporting Format

Every bug should include:

- title
- severity
- environment
- URL
- language
- device/browser
- steps
- expected
- actual
- screenshot/video if useful
- booking/tour reference if safe

Do not include passwords or card data.

---

# 112. Release Sign-Off

Recommended approvals:

## Business
Tour facts/prices/terms

## Content/SEO
EN content, SEO, redirects

## German Reviewer
DE content/localization

## Development
Functionality/security/performance

## Operations
Booking/admin workflow

Launch only after owners of critical areas approve.

---

# 113. Final Master Checklist

- [ ] all legacy URLs inventoried
- [ ] all high-value URLs preserved/redirected
- [ ] all tours migrated
- [ ] all tour facts verified
- [ ] all prices verified
- [ ] all booking fields migrated
- [ ] all dropdown values verified
- [ ] EN approved
- [ ] DE approved
- [ ] hreflang correct
- [ ] canonical correct
- [ ] sitemap correct
- [ ] robots correct
- [ ] schema validated
- [ ] internal links clean
- [ ] Story Collections correct
- [ ] Jordan Story branding consistent
- [ ] Siq experience works
- [ ] Treasury reveal works
- [ ] Wadi Rum transition works
- [ ] mobile tier works
- [ ] cinematic fallback works
- [ ] reduced motion works
- [ ] Core Web Vitals acceptable
- [ ] booking works EN
- [ ] booking works DE
- [ ] server pricing verified
- [ ] admin roles verified
- [ ] quotes/payments verified
- [ ] analytics verified
- [ ] no analytics PII
- [ ] privacy/consent verified
- [ ] security tests complete
- [ ] backups complete
- [ ] rollback plan ready
- [ ] production crawl passed
- [ ] launch sign-off received

---

# 114. Final Launch Principle

The new Jordan Story Tours website is not ready merely when it **looks finished**.

It is ready when:

**the Story is beautiful,**  
**the facts are correct,**  
**the German experience is complete,**  
**Google can migrate safely,**  
**the immersive journey performs smoothly,**  
**the booking system works reliably,**  
**the admin can operate the business,**  
**and every important conversion can be measured.**

Only then do we invite the traveler to:

# Step into the Story.
