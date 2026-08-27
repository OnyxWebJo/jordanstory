# 00H — Original vs New Tour Content Parity Audit

**Priority: CRITICAL**
**Run before final DE and all FR/IT content production.**

## Golden Rule
The AI may improve how the tour is SOLD. It may NOT silently change what the traveler BUYS.

For existing tours, the original Jordan Story Tours tour page is the operational/commercial baseline unless the owner explicitly approves a change.

## Locked Factual Layer
Must remain faithful to the approved original:
- duration and nights
- route and destination order
- day-by-day itinerary
- overnight locations
- included activities
- accommodation category
- meals and meal counts
- included items
- excluded items
- transport
- driver/guide/local-guide conditions
- entrance fees
- airport transfers
- visa wording/conditions
- taxes/fees
- price/currency and pricing conditions
- operational promises

## Optimized Editorial Layer
May be rewritten for SEO/AEO/GEO, Story branding and conversion:
- introduction
- emotional description
- why choose this tour
- traveler suitability
- destination context
- highlights presentation
- Story narrative
- explanatory FAQs
- CTA
- SEO title/meta description

Editorial copy must never contradict the locked product.

## Source Priority
1. Original tour page
2. Verified owner corrections
3. Existing extraction/audit records
4. New website
5. AI editorial improvements

Owner-approved commercial changes override legacy values and must be logged.

## Full Audit
Audit EVERY active tour, not a sample.

Compare original vs new:
`name | duration | nights | route | each itinerary day | overnight | accommodation | meals | included | excluded | entrance fees | driver | guide | airport transfer | visa | price | gallery`

Create `docs/TOUR-CONTENT-PARITY-AUDIT.md`.

## Itinerary
Preserve day count, order, destinations, stops, overnight city and included activities. Grammar may improve; operational meaning may not.

Do not add Wadi Rum, Jeep safari, desert camp, extra destination or activity unless the approved tour contains it.

## Meals — Structured
Do not leave meals only inside prose.

Example:
```yaml
meals:
  day_1: {breakfast: false, lunch: false, dinner: true}
  day_2: {breakfast: true, lunch: true, dinner: false}
```

Derive verified summaries such as `2 breakfasts + 1 lunch + 1 dinner`. Never infer meals from hotel category.

## Included — Structured
Preserve original wording as evidence and map to shared records, e.g.:
```yaml
included:
  - airport_pickup
  - airport_dropoff
  - private_transport
  - english_speaking_driver
  - accommodation_3_star
  - breakfast
  - petra_dinner
```

## Excluded — Structured
Example:
```yaml
excluded:
  - international_flights
  - entrance_fees
  - personal_expenses
  - unmentioned_meals
```
Never remove an exclusion because it weakens marketing.

## Accommodation
Preserve the approved category exactly. Never upgrade `3-star → 4-star`, `standard camp → luxury camp`, or invent hotel names without approval.

## Driver vs Guide
These are different fields. An English-speaking driver must not become a private licensed guide. Preserve group-size and destination-specific guide conditions.

## Entrance Fees
Store:
`INCLUDED | EXCLUDED | PARTIALLY_INCLUDED | CONDITIONAL | UNKNOWN`
Never infer from tour category.

## Visa
Preserve legacy wording while separately verifying current accuracy:
`visa_original_text | visa_current_verified_text | visa_status | visa_verified_at`
Do not broaden eligibility.

## Price
Price is shared commercial data, not translated prose. Translation must never change numbers or group/season/room/upgrade logic.

## Gallery
Run with `00D`. Compare hero, gallery count, order, missing images, replacements and resolution.

## Description
Descriptions may be substantially improved for readability, emotion, route explanation, local expertise, traveler suitability, search relevance, Story branding and conversion—as long as claims match the locked product.

## Highlights
Only use real itinerary/product features. Never advertise a Jeep safari on a tour without one or 5-star lodging on a 3-star package.

## AEO
Answers about meals, inclusions, fees, guides, duration and transport must read from verified structured data, never assumptions.

## GEO
Only create entity relationships supported by the itinerary, e.g. `Tour → visits Petra`.

## Four Languages, One Fact Layer
EN/DE/FR/IT share the SAME locked commercial data. Narrative, metadata, FAQs, CTAs and search language are localized independently.

Do not maintain four independent commercial truths.

## Parity Status
`NOT_AUDITED | AUDIT_IN_PROGRESS | MISMATCH_FOUND | NEEDS_OWNER_DECISION | FACTS_CORRECTED | PARITY_VERIFIED`

Only `PARITY_VERIFIED` tours proceed to final multilingual production.

## Owner-Approved Changes
Log:
`tour_id | field | old_value | new_value | approved_by | approval_date | reason`

## Required Report
`docs/TOUR-CONTENT-PARITY-AUDIT.md` must summarize total/audited/verified tours and itinerary, meal, inclusion, exclusion, accommodation, guide/driver, entrance-fee, visa and gallery mismatches plus owner decisions required.

Recommended audit trail:
`migration/tours/<slug>/original-facts.json`
`migration/tours/<slug>/new-facts.json`
`migration/tours/<slug>/parity-report.md`

## Recommended Model
```text
TOUR — shared commercial fields
TOUR_ITINERARY — day, sequence, overnight, activities, meals
TOUR_INCLUSIONS — inclusion_code, conditions
TOUR_EXCLUSIONS — exclusion_code, conditions
TOUR_TRANSLATIONS — locale, title, description, editorial highlights, SEO/AEO
MEDIA — shared gallery relationships
```

## Implementation Order
1. inventory original tours
2. inventory new tours
3. match old → new
4. extract locked original facts
5. extract new facts
6. compare
7. flag mismatches
8. restore obvious accidental changes
9. flag uncertain differences for owner
10. verify parity
11. optimize English editorial content
12. freeze English product layer
13. complete DE and begin FR/IT

## Automatic Correction
Clear accidental inventions revert to original:
`Original 3-star → New 4-star → restore 3-star`
`Original has no Wadi Rum → New adds Wadi Rum → remove Wadi Rum`

If unclear, mark `NEEDS_OWNER_DECISION`. Never guess.

## Allowed Differences
Literal parity is not required for introduction wording, marketing headline, paragraph structure, Story copy, CTA, SEO title, meta description, AEO explanatory copy, destination context, layout or presentation. They must remain factually compatible.

## Multilingual Production Gate
Before full FR/IT production:
- [ ] all active tours matched old → new
- [ ] itinerary parity checked
- [ ] meals checked
- [ ] included/excluded checked
- [ ] accommodation checked
- [ ] guide/driver checked
- [ ] entrance fees checked
- [ ] visa wording checked/flagged
- [ ] galleries checked
- [ ] accidental changes corrected
- [ ] unresolved changes flagged
- [ ] English editorial copy reviewed
- [ ] every tour marked `PARITY_VERIFIED`

# FINAL COMMAND
You have permission to improve the TOUR DESCRIPTION.

You do NOT have permission to redesign the TOUR PRODUCT.

Preserve the approved **itinerary, route, duration, meals, accommodation, included/excluded items, transport, guide/driver conditions, entrance fees and operational promises**.

Improve **description, storytelling, readability, SEO, AEO, GEO, highlights presentation and conversion copy**.

The final English, German, French and Italian pages must all describe the SAME real tour product.
