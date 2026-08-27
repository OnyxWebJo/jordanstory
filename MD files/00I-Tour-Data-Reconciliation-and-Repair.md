# 00I — Tour Data Reconciliation & Repair
## Jordan Story Tours — Execute Original → New Tour Product Reconciliation

**Priority:** CRITICAL
**Run after:** `00H-Original-vs-New-Tour-Content-Parity-Audit.md`
**Run before:** final German content and all French/Italian content production

---

# 1. MISSION

This is an EXECUTION instruction.

Do not merely produce an audit report.

The agent must:

```text
CRAWL ORIGINAL TOURS
→ MATCH TO NEW TOURS
→ EXTRACT LOCKED FACTS
→ COMPARE
→ REPAIR OBVIOUS ERRORS
→ FLAG UNCERTAIN DIFFERENCES
→ STRUCTURE THE DATA
→ VERIFY
→ LOCK THE PRODUCT
```

The objective is to ensure the redesigned website sells the same approved tour products as the original website while allowing stronger descriptions, storytelling, SEO, AEO and GEO.

---

# 2. AUTHORITATIVE SOURCES

For every existing tour use this priority:

1. Verified owner-approved changes
2. Original Jordan Story Tours tour page
3. Existing verified migration records
4. Current redesigned page
5. AI-generated content

The original website is authoritative for legacy itinerary and commercial facts unless an owner-approved change exists.

The new website is NOT authoritative merely because its wording looks newer or more polished.

---

# 3. DO NOT REWRITE THE PRODUCT

The following are LOCKED unless owner-approved:

- duration
- nights
- itinerary
- day order
- destination sequence
- route
- overnight location
- accommodation category
- meals
- included items
- excluded items
- entrance fees
- transportation
- airport transfer
- driver conditions
- guide conditions
- local-guide conditions
- visa-related inclusion wording
- taxes/fees
- pricing rules
- group-size conditions
- included activities
- operational promises

The following MAY be improved:

- introduction
- overview
- storytelling
- destination descriptions
- highlights presentation
- traveler suitability
- SEO copy
- AEO explanatory content
- GEO/entity context
- CTAs
- metadata

---

# 4. INVENTORY BOTH WEBSITES

Create a complete tour inventory for:

```text
ORIGINAL WEBSITE
NEW WEBSITE
```

For each record capture:

```text
legacy_url
legacy_slug
legacy_title

new_url
new_slug
new_title

match_confidence
match_status
```

Match statuses:

```text
MATCHED
POSSIBLE_MATCH
ORIGINAL_ONLY
NEW_ONLY
NEEDS_REVIEW
```

Do not match solely by slug because the redesigned URLs may have changed.

Use title, category, duration, itinerary and destination combination to identify the correct product.

---

# 5. CREATE MASTER TOUR ID

Every matched product receives one stable internal ID.

Example:

```text
tour_id: JST-BUDGET-001
```

Both old and new URLs reference that ID.

Translations also reference the same ID.

Do not create separate tour IDs for EN/DE/FR/IT.

---

# 6. EXTRACT ORIGINAL FACTS

For every original tour extract:

```yaml
tour_id:
legacy_url:
legacy_title:

duration:
days:
nights:

route:
destinations:

itinerary:
  day_1:
    title:
    locations:
    activities:
    overnight:
    meals:
  day_2:
    ...

accommodation:
  category:
  conditions:

meals:
  breakfast_count:
  lunch_count:
  dinner_count:
  per_day:

included:
excluded:

transport:
driver:
guide:
local_guides:

entrance_fees:
airport_transfer:
visa:
taxes_fees:

pricing:
group_conditions:

gallery:
```

Do not summarize away important conditions.

---

# 7. EXTRACT NEW FACTS SEPARATELY

Extract the same schema from the current redesigned page.

Do not overwrite original facts during extraction.

Maintain:

```text
original_facts
new_facts
```

as separate records until comparison is complete.

---

# 8. NORMALIZE BEFORE COMPARISON

Normalize harmless formatting differences.

Examples:

```text
3 star
3-star
Three-star
```

may represent the same category.

Similarly normalize:

- punctuation
- whitespace
- capitalization
- common destination spelling
- phone formatting
- meal label capitalization

Do NOT normalize meaningful differences away.

Example:

```text
3-star != 4-star
driver != licensed guide
breakfast != breakfast + dinner
Petra != Petra + Wadi Rum
```

---

# 9. FIELD-BY-FIELD COMPARISON

For every locked field produce:

```text
field
original_value
new_value
comparison
severity
action
```

Comparison:

```text
MATCH
FORMAT_DIFFERENCE
EDITORIAL_DIFFERENCE
COMMERCIAL_MISMATCH
MISSING_NEW
NEW_UNSUPPORTED
UNCERTAIN
```

Severity:

```text
P0
P1
P2
```

Commercial mismatches are normally P0.

---

# 10. AUTOMATIC REPAIR RULE

Automatically repair only when the difference is clearly an accidental unsupported change.

Examples:

```text
ORIGINAL: 3-star accommodation
NEW: 4-star accommodation
NO OWNER CHANGE
→ RESTORE 3-star
```

```text
ORIGINAL: breakfast + one Petra dinner
NEW: breakfast only
→ RESTORE the Petra dinner
```

```text
ORIGINAL: entrance fees excluded
NEW: entrance fees included
→ RESTORE excluded
```

```text
ORIGINAL: no Wadi Rum
NEW: Wadi Rum Jeep tour
→ REMOVE unsupported Wadi Rum content
```

```text
ORIGINAL: English-speaking driver
NEW: private licensed guide throughout
→ RESTORE original driver/guide condition
```

---

# 11. DO NOT AUTOMATICALLY REVERT EDITORIAL IMPROVEMENTS

Example:

Original:

```text
A short Jordan tour visiting Petra and Dead Sea.
```

New:

```text
Discover two of Jordan's defining landscapes on a compact private journey combining the rock-cut city of Petra with time beside the mineral-rich waters of the Dead Sea.
```

If factually compatible:

```text
KEEP NEW EDITORIAL COPY
```

The goal is commercial parity, NOT old-copy duplication.

---

# 12. UNCERTAIN DIFFERENCES

If a difference could represent an intentional business update, do NOT guess.

Mark:

```text
NEEDS_OWNER_DECISION
```

Examples:

- price changed
- hotel category changed but may be a new package policy
- a new included meal appears
- entrance fees changed
- guide policy changed
- tour route deliberately expanded
- visa policy wording changed

Create an owner decision queue.

---

# 13. OWNER DECISION QUEUE

Create:

`docs/OWNER-TOUR-DECISIONS.md`

Format:

```text
Tour:
Field:

Original:
...

Current New:
...

Why flagged:
...

Recommended action:
KEEP ORIGINAL / KEEP NEW / NEED CONFIRMATION

Owner decision:
PENDING
```

Keep questions concise and grouped.

---

# 14. MEAL RECONCILIATION

Meals require special attention.

Extract meals from:

- itinerary prose
- Included section
- package summary
- hotel/meal-plan text

Build per-day records.

Example:

```yaml
day_1:
  breakfast: false
  lunch: false
  dinner: false

day_2:
  breakfast: true
  lunch: false
  dinner: true
```

Then calculate totals.

If itinerary and Included section contradict each other on the original site:

```text
DO NOT GUESS
→ FLAG SOURCE_CONFLICT
```

---

# 15. INCLUSION RECONCILIATION

Preserve every meaningful inclusion.

Do not shorten a detailed inclusion list into a generic sentence if doing so removes contractual/commercial meaning.

Each inclusion should have:

```text
code
display_text
conditions
source
status
```

Example:

```text
guide_service
condition: groups over 5 persons
```

The condition must not disappear during localization.

---

# 16. EXCLUSION RECONCILIATION

Same rule.

Do not remove:

- flights
- personal expenses
- entrance fees
- taxes
- unmentioned meals
- optional activities

when present in the approved source.

---

# 17. ITINERARY RECONCILIATION

Compare each day independently.

For every day check:

```text
day number
origin
destination
intermediate stops
activities
overnight
meals
```

Generate a route signature.

Example:

```text
AMMAN > MADABA > MT NEBO > PETRA
```

This helps detect AI-added or missing destinations.

---

# 18. ACCOMMODATION RECONCILIATION

Capture:

```text
category
location
number_of_nights
meal_plan
named_property_if_originally_specified
upgrade_options
conditions
```

Do not invent named hotels.

Do not upgrade category for marketing language.

---

# 19. DRIVER / GUIDE RECONCILIATION

Create separate structured fields:

```yaml
transport_service:
  driver:
    included:
    language:
    conditions:

  tour_guide:
    included:
    language:
    conditions:

  local_guides:
    locations:
    conditions:
```

Do not merge these roles.

---

# 20. ENTRANCE FEE RECONCILIATION

For every tour store:

```text
entrance_fee_status
included_sites
excluded_sites
conditions
source_text
```

If unclear:

```text
UNKNOWN
```

and flag it.

Never infer.

---

# 21. VISA RECONCILIATION

Legacy visa inclusion is a special case.

Preserve what the package originally promised while flagging visa/entry claims for current verification.

Do not automatically publish outdated eligibility claims.

Use:

```text
legacy_package_promise
current_verified_public_copy
verification_status
verified_at
```

---

# 22. IMAGE RECONCILIATION

Integrate `00D`.

For each tour:

```text
legacy_hero
legacy_gallery[]
new_hero
new_gallery[]

missing_assets[]
duplicate_assets[]
replacement_assets[]
low_resolution_assets[]
```

Download/migrate valid original imagery rather than permanently hotlinking it.

---

# 23. STRUCTURED MASTER RECORD

After reconciliation create one verified master record per tour.

Suggested:

`data/tours/master/<tour_id>.json`

Concept:

```json
{
  "tour_id": "JST-...",
  "status": "PARITY_VERIFIED",
  "commercial": {},
  "itinerary": [],
  "meals": {},
  "included": [],
  "excluded": [],
  "transport": {},
  "guide": {},
  "entrance_fees": {},
  "visa": {},
  "pricing": {},
  "media": [],
  "translations": {}
}
```

Adapt format to the project's actual data architecture.

---

# 24. ENGLISH REPAIR

Once a tour is reconciled:

1. repair incorrect English commercial facts;
2. preserve/improve strong new description copy;
3. remove editorial claims contradicted by verified facts;
4. regenerate highlights from verified features;
5. regenerate factual FAQs from structured facts;
6. retain Story branding;
7. preserve existing URL when possible;
8. update schema to verified values.

---

# 25. DO NOT CHANGE URLs UNNECESSARILY

If a new URL is already published/indexable and the tour identity is correct, do not change it merely because the original slug differs.

If a URL must change:

```text
old new-site URL
→ permanent redirect
→ canonical target
```

Record redirect mapping.

---

# 26. SEO AFTER REPAIR

Do not throw away useful optimized copy.

After factual repair:

```text
verify title
verify H1
verify meta
verify description
verify FAQ
verify internal links
```

SEO must sit on top of the verified product.

---

# 27. AEO AFTER REPAIR

Regenerate factual answers where necessary.

Questions such as:

- What is included?
- Are meals included?
- Are entrance fees included?
- Is a guide included?
- How many nights?
- Where do we stay?
- Does the tour visit Wadi Rum?

must answer from the master record.

---

# 28. GEO AFTER REPAIR

Generate entity relationships only from verified data.

Example:

```text
Tour → visits Petra
Tour → includes overnight in Petra
Tour → visits Dead Sea
```

Do not allow an editorial paragraph to become the source of entity truth.

---

# 29. MULTILINGUAL LOCK

Only after:

```text
status = PARITY_VERIFIED
```

may the master record be used for final DE/FR/IT production.

All languages inherit the same:

- itinerary
- meals
- included
- excluded
- accommodation
- route
- operational conditions

Only presentation/search language changes.

---

# 30. REQUIRED OUTPUT REPORTS

Generate:

```text
docs/TOUR-INVENTORY-ORIGINAL.md
docs/TOUR-INVENTORY-NEW.md
docs/TOUR-MATCHING-REPORT.md
docs/TOUR-CONTENT-PARITY-AUDIT.md
docs/TOUR-REPAIR-REPORT.md
docs/OWNER-TOUR-DECISIONS.md
docs/MEDIA-MIGRATION-REPORT.md
```

---

# 31. REPAIR REPORT

For each corrected tour record:

```text
Tour
Original URL
New URL

Corrected:
- ...

Preserved new editorial improvements:
- ...

Needs owner decision:
- ...

Media status:
...

Final status:
PARITY_VERIFIED / NEEDS_OWNER_DECISION
```

---

# 32. DO NOT CLAIM COMPLETION TOO EARLY

Do not say:

```text
ALL TOURS VERIFIED
```

unless every active original/new matched tour has actually been inspected.

Report exact counts:

```text
Original tours: X
New tours: Y
Matched: X
Verified: X
Pending: X
Owner decisions: X
```

---

# 33. ERROR HANDLING

If the original page is unavailable:

```text
SOURCE_UNAVAILABLE
```

Do not reconstruct commercial facts from memory.

If parsing fails:

```text
EXTRACTION_REVIEW_REQUIRED
```

If old/new mapping is uncertain:

```text
MATCH_REVIEW_REQUIRED
```

---

# 34. NO DESTRUCTIVE MASS REWRITE

Do not overwrite the entire redesigned tour catalogue in one blind generation.

Process:

```text
extract
compare
repair locked fields
preserve valid editorial content
validate
then save
```

Keep backups/version history.

---

# 35. FINAL VALIDATION PER TOUR

Before `PARITY_VERIFIED`:

- [ ] original matched correctly
- [ ] duration correct
- [ ] itinerary correct
- [ ] route correct
- [ ] overnight correct
- [ ] meals correct
- [ ] accommodation correct
- [ ] included complete
- [ ] excluded complete
- [ ] driver/guide conditions correct
- [ ] entrance fees correct
- [ ] airport transfer correct
- [ ] visa claim reviewed
- [ ] pricing reviewed
- [ ] gallery reconciled
- [ ] description factually compatible
- [ ] highlights compatible
- [ ] FAQs compatible
- [ ] schema compatible

---

# 36. PROJECT-WIDE COMPLETION GATE

Do not begin final French/Italian tour generation until:

```text
100% active tours inventoried
100% old/new mappings resolved
all obvious P0 mismatches repaired
all unresolved commercial changes documented
all publishable tours PARITY_VERIFIED
```

If a few tours genuinely require owner decisions, they may remain blocked individually while verified tours proceed only if the project owner chooses that workflow.

---

# FINAL EXECUTION COMMAND

Do not merely analyze the difference between the old and new websites.

**RECONCILE THEM.**

Use the original site to restore the approved commercial product.

Use the redesigned site to preserve the stronger editorial experience.

The desired result is:

```text
ORIGINAL COMMERCIAL ACCURACY
+
NEW JORDAN STORY PRESENTATION
+
STRUCTURED TOUR DATA
+
SEO / AEO / GEO
+
MULTILINGUAL READINESS
```

Never sacrifice itinerary accuracy, meals, Included/Excluded conditions or operational truth for better-looking marketing copy.
