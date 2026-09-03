# 05 — Publishing Workflow for Next.js Static Export
## Jordan Story Tours

## 1. Constraint

The public site is statically exported.

Changes such as:

```text
new tour
new destination
new locale page
slug changes
major SEO/content updates
```

normally require:

```text
build → export → deploy
```

## 2. Architecture

```text
Admin / MySQL / PHP API
        ↓
Published content snapshot
        ↓
Next.js build
        ↓
Static EN / DE / FR / IT output
        ↓
Production
```

## 3. Change Types

### Structural / SEO content
Requires rebuild:

```text
new tours
new destinations
slug
titles/meta
descriptions
itinerary prose
FAQs
internal links
gallery
hreflang
sitemap
schema
```

### Operational data
May be API-driven:

```text
current price
price mode
booking mode
quotation availability
```

## 4. Recommended Hybrid Pricing

Static page contains durable SEO content.

Dynamic widget calls:

```text
GET /api/public/tours/{slug}/pricing
```

Example:

```json
{
  "price_mode": "QUOTATION",
  "price_amount": null,
  "currency": "USD",
  "booking_mode": "QUOTATION"
}
```

This allows immediate price/quotation switching.

## 5. No Stale Prices

If dynamic pricing is used, do not hardcode stale prices in:

```text
homepage
tour cards
related tours
schema
booking page
```

Either make those pricing fragments dynamic or rebuild on every price change.

## 6. Admin Buttons

```text
SAVE DRAFT
PUBLISH CHANGES
```

`SAVE DRAFT` updates DB only.

`PUBLISH CHANGES` starts the build/deploy pipeline.

## 7. Publish Jobs

```text
QUEUED
BUILDING
DEPLOYING
SUCCESS
FAILED
```

Track:

```text
requested_by
started_at
completed_at
log
deployment reference
```

## 8. Build Input

Only include:

```text
PUBLISHED tours
PUBLISHED destinations
approved reviews
active translations
verified business settings
```

Never build drafts.

## 9. Failure Handling

If build fails:

```text
existing production remains live
draft changes remain unpublished
admin receives error
```

Avoid partial deployment.

## 10. Locale Routes

Generate intended locale pages:

```text
/en/tours/{slug}
/de/tours/{slug}
/fr/tours/{slug}
/it/tours/{slug}
```

## 11. Hreflang and Sitemap

Generate reciprocal hreflang only for valid equivalents.

Regenerate sitemap after successful publish.

## 12. Unpublish / Archive

Unpublish triggers rebuild.

Archived records remain in DB but are excluded from public builds.

## 13. Rollback

Retain previous successful deployment.

Support rollback to last known good version.

## 14. Admin Feedback

Show:

```text
Last successful publish
Pending changes
Current build status
Failure details
```

# FINAL COMMAND

Use static generation for durable SEO content and API-driven data only for genuinely operational fields. Publishing must be safe, atomic and reversible.
