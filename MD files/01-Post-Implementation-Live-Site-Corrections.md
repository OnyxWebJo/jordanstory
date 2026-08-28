# POST-IMPLEMENTATION LIVE SITE CORRECTION AUDIT
## Jordan Story Tours — Temporary Deployment
### URL: https://onyxwebjo.github.io/jordanstory/

**Status:** NOT READY FOR FINAL LAUNCH  
**Purpose:** Correct real implementation failures found after executing `00T–00Z`.

---

# 1. Release Decision

The instruction files were processed, but the deployed website still contains multiple launch-blocking issues.

Do NOT create more strategy/content planning documents.

The task now is:

```text
FIX LIVE IMPLEMENTATION
→ REBUILD
→ REDEPLOY
→ RE-CRAWL
→ VERIFY
```

---

# 2. P0 — CRITICAL: TOUR PRODUCT FACTS STILL WRONG

## Jordan Story Classic Tour 1

Current new page:
`/en/tours/jordan-story-classic-tour-1`

Current implementation wrongly presents:

- Amman → Jerash → Petra → Wadi Rum → Dead Sea
- Ajloun
- Wadi Rum overnight
- Wadi Rum Jeep Safari
- 4-star hotels
- Martian/luxury desert camp
- Zarb dinner
- 3 nights 4-star hotel + Wadi Rum camp

This is NOT the legacy/verified product.

## Verified original product

Original:
`https://jordanstorytours.com/tour/jordan-story-classic-tour-1/`

Locked facts:

```text
Duration:
5 Days / 4 Nights

Destinations:
Amman
Petra
Madaba
Mount Nebo
Dead Sea
Jerash

Day 1:
Airport pickup
Amman city
Citadel / downtown
Amman overnight

Day 2:
Amman → Petra
Petra visit
Petra overnight

Day 3:
Petra → Madaba → Mount Nebo → Dead Sea
then return toward Amman

Day 4:
Amman → Jerash → Amman

Day 5:
Airport departure

Accommodation:
3-star hotel

Meals:
Daily breakfast
1 dinner at Petra
1 lunch at Dead Sea

Driver:
Fluent English-speaking driver

Guide:
Tour guide at sites for group tour of more than 5 persons

Included:
Airport pickup/drop-off
Jordan visa
transportation to itinerary sites
accommodation
listed meals
driver
conditional guide

Excluded:
Entrance fees
international flights
unmentioned sites
tax/personal expenses
personal expenses
```

## Required repair

REMOVE from Classic Tour 1 unless owner explicitly changes the product:

```text
Wadi Rum
Ajloun
Bedouin camp
Martian camp
4x4 Jeep
Zarb dinner
4-star hotel upgrade
luxury camp
```

Correct EN first.

Then propagate IDENTICAL commercial facts to:

```text
/de/tours/jordan-story-classic-tour-1
/fr/tours/jordan-story-classic-tour-1
/it/tours/jordan-story-classic-tour-1
```

Editorial wording may differ by language.

Commercial facts may NOT.

---

# 3. P0 — CRITICAL: LUXURY TOUR 1 CONTAINS UNSUPPORTED PREMIUM PROMISES

Current:
`/en/tours/jordan-luxury-tour-1`

Verified legacy product supports:

```text
6 Days / 5 Nights
5-star accommodation
airport pickup/drop-off
Jordan visa
English-speaking driver
transportation
daily breakfast
2 dinners
Dead Sea entrance
all site entrance fees
1 Dead Sea lunch
tour guide
```

Current new page additionally promises specific items such as:

```text
St. Regis / Four Seasons Amman
Kempinski Ishtar
Mövenpick Petra
VIP airport pickup
executive luxury vehicle
private licensed guide in Petra & Jerash
gourmet dining
Dead Sea spa treatments
VIP resort pass
```

These may ONLY remain if individually owner-approved and actually sold.

Otherwise rewrite them into the verified generic service level:

```text
5-star hotels
private/appropriate transportation where verified
tour guide
included entrance fees
Dead Sea lunch
2 dinners
airport transfers
```

Do not use named hotels as guaranteed inclusions unless the business commits to them.

---

# 4. P0 — CRITICAL: TRUST / LICENSE INFORMATION IS CONTRADICTORY

The deployed website currently shows conflicting claims:

Homepage:
```text
Official Reg #2026
```

Homepage reviews section:
```text
Ministry License #7042
```

Footer:
```text
Ministry of Tourism License: Verification Pending
```

These cannot coexist.

Verified business registration supplied by owner:

```text
Registration / License Reference:
100933491
```

Use only owner-approved wording for what this number legally represents.

Do not call a company registration number a Ministry of Tourism license unless that is exactly what it is.

Remove:

```text
#2026
#7042
Verification Pending
```

unless one of those is independently verified by the owner.

---

# 5. P0 — CRITICAL: UNVERIFIED REVIEWS / RATINGS

The homepage currently publishes:

```text
5.0
100% Verified Reviews
```

and multiple named review profiles.

Tour catalogue/pages also repeatedly display:

```text
5.0
Verified Reviews
```

No unverified/generated/placeholder reviews or aggregate rating may appear publicly.

Required:

```text
IF review exists in verified review database:
    show it

ELSE:
    hide review
    hide rating
    hide aggregate
```

Do not invent:
- names
- countries
- dates
- tour experiences
- ratings
- "Verified" badges

The approved future review workflow is:

```text
completed booking
→ admin sends language-specific WhatsApp request
→ secure review URL
→ customer submits
→ admin moderation
→ approved publication
→ aggregate recalculated from approved reviews
```

Until genuine review data exists, replace social proof with factual trust information.

---

# 6. P0 — TOUR CATALOGUE REQUIRES FULL FACTUAL RECONCILIATION

Do not fix only Classic Tour 1.

Run every tour against the verified master/original.

Known example:

```text
Classic Tour 2
```

New site currently says:
```text
7 Days / 6 Nights
```

Legacy inventory previously exposed:
```text
7 Days / 5 Nights
```

This must be reconciled from the actual owner-approved itinerary.

Generate a runtime/build validation:

```text
tour.duration == master.duration
tour.nights == master.nights
tour.route == master.route
tour.meals == master.meals
tour.accommodation == master.accommodation
tour.included == master.included
tour.excluded == master.excluded
```

No tour may publish before passing parity.

---

# 7. P1 — ENGLISH BOOKING PAGE STILL CONTAINS GERMAN

Current:
`/en/booking?...`

It displays:

```text
SCHRITT 1 VON 3
```

Required:

```text
STEP 1 OF 3
```

Then audit every booking step for locale contamination.

Also fix grammar:

```text
1 Days
```

must be:

```text
1 Day
```

Use proper locale pluralization.

---

# 8. P1 — MULTILINGUAL IMPLEMENTATION IS INCOMPLETE

The DE / FR / IT pages contain English leftovers.

Observed examples include:

```text
EN 🌐
Classical Complete Story
Tour Image Gallery & Highlights
High-Res Photos
Original legacy media
3 Days
5.0 Verified Reviews
Best Time to Visit
Programs
Details
EXPLORE WITH PRIVATE TOUR
Licensed tour operator...
Ministry of Tourism License...
Popular Tours
Destinations
Contact Us
Free cancellation assistance
Dedicated vehicle & driver
$699 USD / person
```

These appear across German, French and Italian pages.

## Required rule

Every visible UI string must come from locale dictionaries.

No hardcoded English UI inside translated pages.

Audit:

```text
navigation
language switcher
badges
category names
days/nights labels
meal labels
gallery labels
image captions
FAQ headings
buttons
pricing labels
cancellation text
driver text
footer
contact block
destination cards
tour cards
booking form
review form
validation messages
```

---

# 9. P1 — LANGUAGE SWITCHER LABEL IS WRONG

German/French/Italian pages still visibly show:

```text
EN 🌐
```

The language selector must reflect either:

A. current locale:
```text
DE 🌐
FR 🌐
IT 🌐
```

or

B. neutral globe selector:
```text
🌐
```

with accessible current-language label.

Do not display EN as if English is active on non-English pages.

---

# 10. P1 — DESTINATION CONTENT IS STILL TOO THIN

The implemented Petra pages remain only a short overview, a highlight list, practical tips and roughly two FAQs.

This does NOT meet the intended authority-page architecture from `00R`.

Example current Petra structure is approximately:

```text
Overview
4 highlights
3 tips
2 FAQs
Tours visiting Petra
CTA
```

Required content should expand naturally where useful into:

```text
H1 + strong intro
Jordan Story / why Petra matters
Nabataean context
The Siq
The Treasury
Beyond the Treasury
Royal Tombs / Street of Facades
Monastery
what to see
how much time is needed
Petra from Amman
Petra from Aqaba
Petra + Wadi Rum combination
practical planning
best season with qualified wording
physical considerations
nearby places
verified tours visiting Petra
unique destination FAQs
related guides
related destinations
CTA
```

Do NOT force word count.

Do provide real topic depth.

Apply comparable depth to Tier-1 destinations.

---

# 11. P1 — DESTINATION DIRECTORY COUNT IS WRONG

Current English destination directory states:

```text
Explore the 9...
```

but currently displays 7 visible destination cards:

```text
Petra
Wadi Rum
Dead Sea
Jerash
Amman
Madaba
Aqaba
```

Either:

```text
change count to 7
```

or actually publish the intended 9 destinations.

Better:
do not hardcode the number.

Use:

```js
`${destinations.length}`
```

from published destination data.

---

# 12. P1 — DESTINATION MULTILINGUAL CONTENT STILL HAS ENGLISH TEXT

Examples:

French:
```text
Best Time to Visit
16 Programs
3 Days
Details
EXPLORE WITH PRIVATE TOUR
English CTA paragraph
English footer
```

Italian:
same pattern.

German:
English gallery/caption/footer strings remain.

All destination content and UI must be fully localized.

---

# 13. P1 — DESTINATION FACT CLAIMS NEED VOLATILE-DATA CONTROL

Examples currently shown as evergreen:

```text
Petra arrival at 06:00 opening
Jordan Pass saves 50 JOD
Petra/Wadi Rum exact drive time
best months
Dead Sea elevation
```

Some may be broadly accurate, but opening times, fees/pass economics and precise travel-time claims can change.

Rules:

```text
volatile fact
→ store source
→ store verified_at
→ review periodically
```

Do not phrase a variable entrance-fee saving as a permanent guarantee.

---

# 14. P1 — TOUR FAQ IMPLEMENTATION IS STILL TOO SMALL

`00T` required tour-specific FAQ depth.

Observed tours often contain only 2–3 FAQs.

The issue is no longer only duplication — it is insufficient coverage.

For a multi-day tour, useful FAQ coverage may include, when relevant:

```text
duration/nights
actual route
accommodation category
meals
entrance fees
driver
guide
airport pickup/dropoff
visa wording
overnight locations
special activity
customization
who the route suits
route-specific question
```

Do not pad.

But 2 generic questions on a 5–8 day tour is usually insufficient.

---

# 15. P1 — FAQ ANSWERS MUST NOT ADD NEW PRODUCT FACTS

Example:

Budget Tour 1 FAQ currently says:

```text
We strongly recommend purchasing the Jordan Pass...
to cover all site entries and visa fees.
```

This is external/variable travel advice and must be carefully verified.

Keep FAQ answers primarily tied to the tour master record.

External planning advice belongs in destination/planning content and should be source-controlled.

---

# 16. P1 — HOMEPAGE GENERIC COMMERCIAL CLAIMS ARE TOO BROAD

Current homepage/tour catalogue contains broad claims such as:

```text
Every itinerary features ... licensed guides.
100% Tailored Private Tours Dedicated Driver & Guide
top hotel stays
No Hidden Fees
```

But verified products vary.

Example Classic Tour 1 has a guide condition tied to group size.

Therefore global claims must not imply every package includes a dedicated licensed guide.

Safer model:

```text
Private transportation and driver services are included as specified on each itinerary.
Guide services, meals, accommodation, entrance fees and special activities vary by package.
See each tour's Included section for exact details.
```

---

# 17. P1 — HOMEPAGE ROUTE CALCULATOR IS BUILT ON WRONG CLASSIC PRODUCT

The homepage "Classic 5-Day Wonders Route" includes Wadi Rum.

Because Classic Tour 1's current route is factually wrong, the route calculator is also propagating the wrong product.

After master reconciliation:

```text
route calculator presets
featured cards
homepage highlights
tour cards
destination relationships
FAQ links
schema
```

must all be regenerated from the same master tour data.

Never maintain separate hardcoded versions.

---

# 18. P1 — TOUR PRICES NEED OWNER CONFIRMATION

The new website publishes many exact prices:

```text
$399
$449
$520
$560
$699
$899
$1450
$1650
$1990
...
```

Before launch, verify every price is owner-approved and current.

If prices are illustrative/legacy/stale, use:

```text
From $...
```

only where valid, or:

```text
Request Quote
```

Do not fabricate exact package prices for SEO/UI completeness.

---

# 19. P1 — CANCELLATION CLAIMS ARE INCONSISTENT / UNSUPPORTED

Observed:

English:
```text
Free cancellation assistance
```

German:
```text
Kostenlose Stornierung bis 14 Tage
```

These are not the same promise.

A "free cancellation until 14 days" claim is commercial policy.

It must be tied to verified terms.

Create one structured field such as:

```text
cancellation_policy_id
```

and render the correct localized wording.

Never invent policy during translation.

---

# 20. P1 — FOOTER IS STILL BROKEN

Observed:

```text
info@jordanstorytours.com
info@jordanstorytours.com
```

duplicated.

Footer is missing/underusing verified contact information.

Owner-approved business data:

```text
Jordan Story Tours

Address:
Atia Complex 149, Office #402,
Ar-Razi St.,
Amman, Jordan

Phone:
+962 6 552 2667

WhatsApp:
+962 79 660 0360

Email:
info@jordanstorytours.com

Registration reference:
100933491
```

Render appropriate localized labels.

Do not duplicate email.

---

# 21. P1 — TOUR INVENTORY APPEARS INCOMPLETE

The legacy site contains a broader day-tour and Islamic/historical inventory than the current new catalogue.

Legacy examples include:

```text
Amman City Tour
Jerash & Ajlun
Jerash, Ajlun & Umm Qais
Madaba & Mount Nebo
Madaba, Mount Nebo & Dead Sea
Baptism Site & Dead Sea
Dead Sea & Wadi Mujib
Petra
Petra & Wadi Rum
Aqaba
Desert Castles

Islamic Tour
Islamic & Historical Tour
Islamic Jordan & Jerusalem Tour
```

Current catalogue visibly publishes only a subset.

Do NOT assume omitted tours should be deleted.

Create:

```text
ACTIVE
INACTIVE_BY_OWNER
NEEDS_RECONCILIATION
```

for every legacy product.

Only remove a product if the owner intentionally retires it.

---

# 22. P2 — GRAMMAR / FORMAT NORMALIZATION

Fix catalogue strings such as:

```text
1 Days
```

→
```text
1 Day
```

and localized equivalents.

Normalize:

```text
5 Days / 4 Nights
5 Tage / 4 Nächte
5 jours / 4 nuits
5 giorni / 4 notti
```

Do not leave English units in translated pages.

---

# 23. P2 — IMAGE CAPTIONS EXPOSE INTERNAL MIGRATION LANGUAGE

Visible strings such as:

```text
Original legacy media:
High-Res Photos
```

sound like internal migration/admin notes.

Remove them from public UX.

Public captions should describe the destination/image naturally or remain hidden if not useful.

---

# 24. P2 — CONTENT TONE

Remove technical/AI-generated phrasing such as:

```text
Martian
VIP
Royal Deluxe
ultimate
world-class
5-star serenity
complete story
```

when it changes or exaggerates the actual product.

Creative naming is acceptable only if it does not imply a service level the traveler is not guaranteed.

---

# 25. SINGLE SOURCE OF TRUTH REQUIREMENT

This is now mandatory.

Create one master commercial record per tour.

All components must derive from it:

```text
tour page
tour card
homepage featured card
route calculator
destination → related tours
booking selector
FAQ answers
schema
pricing
reviews relationship
localized pages
```

No duplicated hardcoded product facts.

---

# 26. REQUIRED AUTOMATED BUILD VALIDATORS

Before export, fail build/release when:

```text
tour route differs across locale
duration differs across locale
night count differs across locale
meal count differs across locale
included/excluded differs across locale
price differs across locale
guide condition differs across locale
missing locale UI string falls back visibly to English
unverified review is published
review aggregate has zero source reviews
license/registration placeholder exists
"Verification Pending" exists
"#2026" exists
"#7042" exists
"SCHRITT" appears under /en/
"1 Days" appears
"Original legacy media" appears publicly
```

---

# 27. SEARCH FOR FORBIDDEN PLACEHOLDER / CONTAMINATION STRINGS

Globally scan generated HTML for:

```text
Verification Pending
#2026
#7042
100% Verified Reviews
Verified Reviews
Original legacy media
High-Res Photos
SCHRITT
1 Days
Best Time to Visit
EXPLORE WITH PRIVATE TOUR
Free cancellation assistance
Dedicated vehicle & driver
```

Then judge each hit by locale/context.

---

# 28. CORRECTION ORDER

Execute in this order:

```text
1. Freeze deployment/content edits
2. Repair master tour data
3. Repair Classic Tour 1
4. Audit all tour parity
5. Remove/verify reviews and ratings
6. Correct registration/license identity
7. Correct global commercial claims
8. Regenerate all four locales from locked master facts
9. Finish DE/FR/IT UI localization
10. Repair destination depth
11. Expand tour-specific FAQ coverage
12. Fix booking localization
13. Fix footer/contact data
14. Regenerate homepage cards/route calculator
15. Reconcile missing tour inventory
16. run automated validators
17. rebuild static export
18. redeploy
19. crawl every canonical URL
20. perform final live verification
```

---

# 29. PASS / FAIL RELEASE GATE

Do NOT consider site complete until:

```text
[ ] Classic Tour 1 matches verified product
[ ] every tour matches verified master
[ ] EN/DE/FR/IT commercial facts identical
[ ] zero invented premium inclusions
[ ] zero unverified reviews/ratings
[ ] one correct registration/license representation
[ ] zero placeholder license strings
[ ] booking is locale-correct
[ ] footer is correct
[ ] no duplicated contact rows
[ ] no English UI leakage in DE/FR/IT
[ ] destination pages meet authority-depth goal
[ ] destination FAQs are unique
[ ] tour FAQs are useful and tour-specific
[ ] homepage pulls only master facts
[ ] route calculator pulls only master facts
[ ] pricing has owner approval
[ ] cancellation policy has owner approval
[ ] full legacy inventory accounted for
[ ] crawl/404/canonical/hreflang/schema QA passes
```

---

# FINAL COMMAND TO AI AGENT

The planning phase is finished.

Do not create more generic SEO content.

Correct the live website based on the actual verified commercial product.

The most important principle remains:

**Improve how the tour is presented — never silently change what the customer is buying.**

After every correction, regenerate all four locales from the same factual master and verify the deployed HTML.
