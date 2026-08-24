# 23 — Content & Database Import Format
## Jordan Story Tours — Migration Data Contract

**Purpose:** Define the exact structured format used to move verified content and business data from the existing Jordan Story Tours website into the new **MySQL backend + Next.js static frontend**.

**Core principle:** Extraction data, verified business facts, localized content and generated static pages must remain separate layers.

---

# 1. Import Architecture

The migration pipeline is:

**Existing Website**
→ raw extraction
→ normalized records
→ business verification
→ structured import files
→ MySQL
→ approved EN/DE content
→ Next.js static build
→ shared hosting deployment

The public Next.js site must not depend on loading core SEO content from JavaScript at runtime.

---

# 2. Source of Truth

Use this hierarchy:

1. Verified business facts
2. MySQL structured records
3. Approved English content
4. Approved German content
5. Static Next.js output
6. Browser runtime

The static frontend is a rendered representation of approved data, not the database itself.

---

# 3. Import File Families

Recommended migration package:

```text
import/
├── tours/
├── destinations/
├── stories/
├── guides/
├── pricing/
├── booking/
├── transportation/
├── reviews/
├── media/
├── seo/
├── redirects/
└── verification/
```

Each file should use stable IDs/keys.

---

# 4. Preferred Import Formats

Use:

- JSON for structured nested data
- CSV for simple flat tables
- Markdown for editorial content drafts
- media manifest JSON/CSV for assets

Do not use one giant spreadsheet for the entire system.

---

# 5. Stable IDs

Every core record requires a stable internal identifier.

Examples:

```text
tour_petra_wadi_rum_amman
dest_petra
story_desert
guide_best_time_jordan
```

These IDs remain stable even if slugs/titles change.

---

# 6. Tour Import Record

Recommended JSON shape:

```json
{
  "id": "tour_petra_wadi_rum_amman",
  "status": "VERIFIED",
  "source_url": "https://...",
  "legacy_slug": "...",
  "duration_days": 1,
  "duration_nights": 0,
  "start_destination_id": "dest_amman",
  "end_destination_id": "dest_amman",
  "tour_type": "PRIVATE",
  "primary_story_id": "story_desert",
  "destination_ids": [
    "dest_petra",
    "dest_wadi_rum"
  ],
  "pricing": [],
  "itinerary": [],
  "inclusions": [],
  "exclusions": [],
  "extras": [],
  "availability": [],
  "translations": {
    "en": {},
    "de": {}
  },
  "seo": {
    "en": {},
    "de": {}
  }
}
```

Do not import unknown facts as fabricated defaults.

---

# 7. Tour Shared Facts

Shared/non-localized fields:

- tour ID
- duration
- nights
- start/end
- destination links
- category
- Story links
- traveler limits
- private/shared
- currency
- availability
- price rules
- accommodation links
- guide rules

These should not be duplicated independently in EN and DE.

---

# 8. English Translation Block

Example:

```json
{
  "locale": "en",
  "title": "Petra & Wadi Rum Tour from Amman",
  "story_subtitle": "Two Icons. One Story.",
  "short_summary": "...",
  "introduction": "...",
  "slug": "petra-wadi-rum-tour-from-amman",
  "translation_status": "APPROVED"
}
```

---

# 9. German Translation Block

Example:

```json
{
  "locale": "de",
  "title": "...",
  "story_subtitle": "...",
  "short_summary": "...",
  "introduction": "...",
  "slug": "...",
  "translation_status": "APPROVED"
}
```

German content cannot be imported as published if its status is not approved.

---

# 10. Itinerary Record

Each day/stop:

```json
{
  "id": "tour_petra_wadi_rum_amman_day_1",
  "sequence": 1,
  "day_number": 1,
  "start_destination_id": "dest_amman",
  "end_destination_id": "dest_amman",
  "destination_ids": [
    "dest_petra",
    "dest_wadi_rum"
  ],
  "estimated_drive_minutes": null,
  "meals": {
    "breakfast": false,
    "lunch": false,
    "dinner": false
  },
  "translations": {
    "en": {
      "title": "...",
      "description": "..."
    },
    "de": {
      "title": "...",
      "description": "..."
    }
  }
}
```

Unknown drive time remains `null`.

---

# 11. Inclusion Record

```json
{
  "id": "incl_private_transport",
  "key": "private_transport",
  "active": true,
  "translations": {
    "en": {
      "label": "Private transportation"
    },
    "de": {
      "label": "..."
    }
  }
}
```

Reusable inclusion keys improve consistency.

---

# 12. Exclusion Record

Same structure as inclusions.

Do not use one giant text paragraph if the information can be structured.

---

# 13. Pricing Record

Example:

```json
{
  "id": "price_rule_001",
  "tour_id": "tour_petra_wadi_rum_amman",
  "currency": "USD",
  "pricing_basis": "PER_PERSON",
  "min_travelers": 2,
  "max_travelers": 3,
  "adult_amount": 275.00,
  "child_amount": null,
  "valid_from": null,
  "valid_to": null,
  "active": true,
  "source_reference": "legacy page pricing table"
}
```

Never import price without price basis if the source requires one.

---

# 14. Price Verification Status

Each rule should have:

- extracted
- normalized
- verified
- approved
- active

If conflicting:

`verification_status = NEEDS_BUSINESS_CONFIRMATION`

Do not publish it automatically.

---

# 15. Optional Extra Record

```json
{
  "id": "extra_jeep_upgrade",
  "tour_id": "...",
  "price_model": "FLAT",
  "amount": 0,
  "currency": "USD",
  "active": false,
  "translations": {
    "en": {
      "title": "...",
      "description": "..."
    },
    "de": {
      "title": "...",
      "description": "..."
    }
  }
}
```

Unknown price must not be `0`; use `null`.

---

# 16. Availability Record

```json
{
  "tour_id": "...",
  "availability_type": "REQUEST_ONLY",
  "specific_date": null,
  "weekday": null,
  "start_date": null,
  "end_date": null,
  "is_available": true
}
```

Use only verified availability rules.

---

# 17. Destination Import

```json
{
  "id": "dest_petra",
  "type": "ATTRACTION",
  "latitude": null,
  "longitude": null,
  "active": true,
  "translations": {
    "en": {
      "name": "Petra",
      "slug": "petra",
      "short_description": "...",
      "body": "..."
    },
    "de": {
      "name": "Petra",
      "slug": "petra",
      "short_description": "...",
      "body": "..."
    }
  }
}
```

Coordinates are populated only from verified data.

---

# 18. Story Collection Import

```json
{
  "id": "story_desert",
  "sort_order": 2,
  "active": true,
  "translations": {
    "en": {
      "name": "The Desert Story",
      "slug": "desert-story",
      "tagline": "...",
      "description": "..."
    },
    "de": {
      "name": "...",
      "slug": "...",
      "tagline": "...",
      "description": "..."
    }
  }
}
```

Story records are branded taxonomy, not destination entities.

---

# 19. Guide Import

```json
{
  "id": "guide_best_time_jordan",
  "primary_destination_id": null,
  "status": "APPROVED",
  "translations": {
    "en": {
      "title": "Best Time to Visit Jordan",
      "slug": "best-time-to-visit-jordan",
      "summary": "...",
      "body_markdown": "..."
    },
    "de": {
      "title": "...",
      "slug": "...",
      "summary": "...",
      "body_markdown": "..."
    }
  }
}
```

---

# 20. Markdown Content Contract

Markdown may be used for long editorial content.

Allowed:

- headings
- paragraphs
- lists
- tables
- safe internal links
- callout syntax if documented

Do not embed arbitrary scripts or raw unsafe HTML.

---

# 21. SEO Import Record

Per entity + locale:

```json
{
  "entity_type": "tour",
  "entity_id": "tour_petra_wadi_rum_amman",
  "locale": "en",
  "seo_title": "...",
  "meta_description": "...",
  "primary_query": "...",
  "secondary_queries": [],
  "search_intent": "TRANSACTIONAL",
  "robots_index": true,
  "canonical_override": null,
  "breadcrumb_label": "..."
}
```

---

# 22. German SEO Record

German SEO is separate.

Do not derive it automatically by translating the English metadata.

---

# 23. Redirect Import

CSV example:

```csv
source_path,destination_path,status_code,reason,verified
/old-tour/,/tour/new-tour/,301,legacy migration,true
```

Requirements:

- exact path
- valid destination
- one-hop
- no loops

---

# 24. Media Manifest

Example:

```json
{
  "id": "media_petra_hero_001",
  "source_url": "https://old-site/...",
  "storage_key": "tours/petra/hero-001.webp",
  "rights_status": "VERIFIED",
  "width": 1920,
  "height": 1080,
  "focal_x": 0.5,
  "focal_y": 0.45,
  "translations": {
    "en": {
      "alt_text": "..."
    },
    "de": {
      "alt_text": "..."
    }
  }
}
```

---

# 25. Media Rights Status

Use:

- UNKNOWN
- NEEDS_CONFIRMATION
- VERIFIED
- REPLACE
- RESTRICTED

Do not publish `UNKNOWN` third-party media by default.

---

# 26. Review Import

```json
{
  "id": "review_001",
  "tour_id": "...",
  "reviewer_display_name": "...",
  "rating": 5,
  "review_text": "...",
  "locale": "en",
  "source": "legacy_site",
  "verification_status": "VERIFIED",
  "moderation_status": "APPROVED"
}
```

Never create translated review text and present it as the customer's original wording without clear policy.

---

# 27. Booking Field Registry Import

Example:

```json
{
  "key": "pickup_location",
  "type": "SELECT",
  "required": true,
  "scope": "TOUR",
  "options_source": "pickup_locations",
  "affects_price": false,
  "translations": {
    "en": {
      "label": "Pickup Location"
    },
    "de": {
      "label": "..."
    }
  }
}
```

---

# 28. Booking Option Import

Example:

```json
{
  "registry_key": "pickup_location",
  "value": "amman_hotel",
  "sort_order": 1,
  "active": true,
  "translations": {
    "en": {
      "label": "Amman Hotel"
    },
    "de": {
      "label": "..."
    }
  }
}
```

All old dropdown values must be mapped before removal.

---

# 29. Transportation Route Import

```json
{
  "id": "transfer_qaia_amman",
  "origin_key": "qaia",
  "destination_key": "amman",
  "vehicle_type_id": "vehicle_sedan",
  "passenger_capacity": 3,
  "one_way_price": null,
  "return_price": null,
  "currency": "USD",
  "verification_status": "NEEDS_BUSINESS_CONFIRMATION"
}
```

Unknown prices remain null.

---

# 30. Customer/Booking Historical Import

Historical customer/booking migration is optional and should only be done if source data is reliable and business value justifies it.

Never import fake or incomplete bookings to make reports look full.

---

# 31. Verification Metadata

Every critical imported record should support:

- source URL
- source section
- extraction date
- normalized by
- verification status
- verified by
- verified at
- notes

---

# 32. Verification Status Enum

Recommended:

- RAW
- NORMALIZED
- NEEDS_CONFIRMATION
- VERIFIED
- APPROVED
- REJECTED

Do not equate extracted with verified.

---

# 33. Import Validation

Before database import, validate:

- required IDs
- unique IDs
- valid locale
- valid currency code
- valid relationships
- valid enum values
- no impossible traveler ranges
- no duplicate slug in same locale
- no invalid redirect loop
- no missing referenced destination
- no published DE content with unapproved status

---

# 34. Import Error Handling

Invalid rows should not partially corrupt production data.

Output:

```text
record_id
error_code
message
source_file
field
```

Continue safe independent records if appropriate.

---

# 35. Import Dry Run

Before real import:

- parse all files
- validate relationships
- report insert/update counts
- report warnings
- report conflicts

No writes.

---

# 36. Idempotent Import

Running the same import twice should update/reconcile by stable ID rather than create duplicates.

Use:

- stable IDs
- upsert rules
- version timestamps

---

# 37. Import Modes

Recommended:

## CREATE
Only new records.

## UPDATE
Update existing by stable ID.

## UPSERT
Create or update.

## VALIDATE_ONLY
No database writes.

Production migration should use controlled mode.

---

# 38. Protected-Field Update Rule

The importer must not overwrite a verified database value with a lower-confidence source value.

Example:

Existing:
`VERIFIED`

Incoming:
`RAW`

Result:
keep verified value and report conflict.

---

# 39. Translation Update Rule

A German translation can be updated only if:

- incoming translation is approved
or
- admin explicitly imports it as draft/review state

Do not silently publish machine-generated DE.

---

# 40. Static Publishing Architecture

Because production uses **Next.js static export**, public SEO content is generated at build time.

Flow:

```text
MySQL
↓
Approved data/content export
↓
Next.js build
↓
Static HTML/CSS/JS
↓
Shared hosting
```

The browser does not query MySQL for primary SEO content.

---

# 41. Static Content Build Input

Before build, fetch/export approved public records:

- tours
- destinations
- Stories
- guides
- SEO
- media
- locale routes

Generate static routes from this approved dataset.

---

# 42. Runtime PHP API Scope

The PHP backend handles dynamic operations:

- booking submissions
- admin authentication
- admin CRUD
- pricing calculation where runtime confirmation is required
- quote workflow
- payments
- reporting

It is not the primary renderer for public SEO pages.

---

# 43. Admin Publish Workflow

Recommended:

```text
Admin edits MySQL
↓
Record status = Draft / Approved
↓
Admin clicks Publish
↓
Publishing job creates approved content snapshot
↓
Static site rebuild triggered
↓
New static files generated
↓
Deploy to shared hosting
↓
Smoke test
↓
Published version active
```

Do not make "Save" equal "Publish."

---

# 44. Static Build Trigger Options

Possible implementations:

- CI webhook
- Git-based build pipeline
- server-side build service
- secure build endpoint on a separate build machine
- manual admin-triggered deployment for first release

Shared hosting itself does not need Node.js.

---

# 45. Build Server

Node.js is required only on the build environment.

It may be:

- developer machine
- GitHub Actions
- GitLab CI
- another CI/build runner

Build output is then uploaded/deployed to cPanel/shared hosting.

---

# 46. Publishing Without Build Server

If no automated CI is available initially:

1. admin marks content approved
2. developer/export process pulls current approved data
3. run Next.js static build locally
4. deploy generated output
5. verify

This is acceptable for early release but less convenient.

---

# 47. Recommended Automated Publishing

For a maintainable system, use a secure build pipeline so routine tour/content changes do not require manual developer intervention forever.

The admin can request publication; the build environment performs the Next.js export and deploys.

---

# 48. Publish Queue

Store publish requests:

- id
- requested_by
- requested_at
- reason
- affected entities
- status
- build_id
- completed_at
- failure message

Statuses:

- QUEUED
- BUILDING
- DEPLOYING
- SUCCESS
- FAILED

---

# 49. Targeted vs Full Build

Initial implementation may perform a full static build.

If the site becomes large, optimize later.

Do not introduce complex partial-build infrastructure before needed.

---

# 50. Publish Failure

If static rebuild/deploy fails:

- current production site remains unchanged
- admin sees failure
- draft changes remain in MySQL
- no broken partial deployment

Use atomic/versioned deployment where possible.

---

# 51. Price Publishing

Important distinction:

Public displayed prices are static build output.

Runtime booking pricing remains server-authoritative in PHP/MySQL.

Therefore after a price change:

- rebuild static public page promptly
- booking API immediately uses current MySQL rule

If a stale page reaches booking, the server must calculate current authoritative price and clearly show any updated total before final submission.

---

# 52. Price Change Safety

Admin price change flow:

1. save new rule
2. validate
3. mark approved
4. request static rebuild
5. booking API uses new rule
6. public page deploys new displayed price

Do not allow hidden price mismatch for long periods.

---

# 53. Emergency Price Disable

If an urgent incorrect price is published, admin should be able to:

- disable the affected tour/price at API level
- show request-only/price-on-request behavior if designed
- trigger urgent rebuild

Do not continue accepting incorrect price simply because static rebuild is pending.

---

# 54. Sitemap Generation

Next.js build generates production sitemap from approved records.

Only include:

- published
- canonical
- indexable

URLs.

---

# 55. Hreflang Generation

Build pairs from approved locale records.

Do not generate German hreflang to an unpublished German route.

---

# 56. Redirect Deployment

Redirects may be implemented through:

- `.htaccess`
- generated redirect rules
- PHP/router layer where appropriate

Use the approved redirect table as source.

---

# 57. Redirect Export File

Generate from MySQL:

```text
source_path
destination_path
status_code
active
```

Then transform to hosting-compatible redirect configuration.

---

# 58. Content Snapshot

Each successful publish should produce a versioned snapshot of approved public data.

Example:

```text
publish-snapshots/
2026-08-22T120000Z/
  tours.json
  destinations.json
  stories.json
  guides.json
  seo.json
```

This improves reproducibility and rollback.

---

# 59. Build Manifest

Each static build stores:

- build ID
- content snapshot ID
- Git commit
- build time
- locale count
- route count

Useful for diagnosing production differences.

---

# 60. Rollback

Rollback static frontend by redeploying previous successful build.

Do not automatically roll back MySQL business data when rolling back static frontend.

They are separate systems.

---

# 61. Data Export Security

The build data export must contain only public-approved content.

Do not export:

- customer records
- booking notes
- payment data
- admin users
- private reports

into the static build input.

---

# 62. Public Build Dataset

Allowed:

- tour public facts
- approved translations
- destinations
- Stories
- guides
- public pricing
- public availability wording
- media URLs
- SEO data
- public reviews

---

# 63. Admin API Dataset

Private PHP/MySQL runtime data remains separate.

Never expose the full MySQL dataset as a downloadable public JSON file.

---

# 64. Search Index Build

If static site includes search, generate a limited public search index containing:

- titles
- slugs
- summaries
- public categories

Do not include sensitive/admin data.

---

# 65. Content Import QA

After import verify:

- tour count
- destination count
- Story count
- EN count
- DE count
- pricing count
- booking registry count
- redirect count
- media links

Compare against migration inventory.

---

# 66. Static Build QA

Before deployment verify generated files include:

- homepage
- tours
- destinations
- Stories
- guides
- German equivalents
- sitemap
- robots
- 404
- metadata

---

# 67. Broken Relationship QA

Fail build or warn strongly when:

- tour links missing destination
- Story references missing tour
- DE hreflang points to missing file
- published media missing
- redirect target missing

Critical broken relationships should block publication.

---

# 68. Content Revision Compatibility

Admin editing can preserve draft revisions independently of currently published static site.

This means:

**MySQL current draft ≠ live public version**

until publication succeeds.

---

# 69. Published Version Field

Recommended per translatable/public entity:

- draft_updated_at
- approved_at
- published_at
- published_version_id

Useful for showing admin what is live.

---

# 70. Translation Freshness

If English source changes:

- German may become `NEEDS_REVIEW`
- current live German page can remain on previous approved version until a new DE version is approved
- do not auto-unpublish unless the changed fact creates a serious contradiction

For protected facts stored centrally, generated output should remain factually synchronized.

---

# 71. Protected Facts in Static Build

Shared facts such as:

- price
- duration
- destination relationships

come from current approved MySQL records at build time.

Localized copy must not embed conflicting hard-coded values where avoidable.

---

# 72. Content Template Variables

Where editorial content needs protected values, prefer variables/components.

Example conceptual:

```text
{{tour.duration}}
{{tour.starting_price}}
{{tour.start_location}}
```

This reduces translation drift.

Do not overuse templating for natural prose.

---

# 73. Import Audit Log

Record:

- import file
- imported by
- timestamp
- create count
- update count
- skipped count
- errors
- verification warnings

---

# 74. Conflict Report

Output:

```text
entity_id
field
existing_value
incoming_value
existing_status
incoming_status
action
```

Never silently choose a value when confidence conflicts.

---

# 75. Migration Package Version

Version the import package.

Example:

`JST-MIGRATION-2026-08-V1`

This makes it clear which extraction/import batch created production data.

---

# 76. Import Acceptance Checklist

- [ ] stable IDs
- [ ] raw source archived
- [ ] normalization complete
- [ ] protected facts verified
- [ ] conflicts documented
- [ ] destination IDs valid
- [ ] Story IDs valid
- [ ] pricing validated
- [ ] itinerary structured
- [ ] booking fields mapped
- [ ] dropdowns mapped
- [ ] EN approved
- [ ] DE reviewed
- [ ] SEO imported
- [ ] redirects imported
- [ ] media rights checked
- [ ] reviews verified
- [ ] dry run passed
- [ ] idempotency tested
- [ ] audit log generated

---

# 77. Static Publishing Acceptance Checklist

- [ ] public-approved dataset only
- [ ] build snapshot generated
- [ ] Next.js static export succeeds
- [ ] EN routes generated
- [ ] DE routes generated
- [ ] hreflang correct
- [ ] sitemap correct
- [ ] redirects generated
- [ ] broken relationship check passed
- [ ] booking API compatible
- [ ] pricing checked
- [ ] staging deployment checked
- [ ] production deployment atomic
- [ ] smoke test passed
- [ ] build ID recorded

---

# 78. Final Data Contract Principle

The migration system must prevent three common failures:

**losing old business data,**
**inventing new business facts,**
and
**making the public site dependent on runtime JavaScript for SEO content.**

The correct relationship is:

**MySQL holds the truth.**

**The admin manages the truth.**

**The build pipeline publishes the approved truth.**

**Next.js presents it beautifully as fast static pages.**

**PHP handles the live business actions.**

That is the content architecture for Jordan Story Tours.
