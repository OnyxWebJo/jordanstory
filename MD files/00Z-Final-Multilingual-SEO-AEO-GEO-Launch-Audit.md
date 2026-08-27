# 00Z — Final Multilingual SEO/AEO/GEO Launch Audit
## Jordan Story Tours — FINAL RELEASE GATE

**Priority:** ABSOLUTE RELEASE BLOCKER  
**Run last**

## Goal
Verify the actual deployed website. Do not declare completion based on source files or generated reports alone.

## Languages
`EN | DE | FR | IT`

## Crawl
Crawl every intended public canonical URL and record:
`URL | locale | status | indexable | canonical | hreflang | title | meta | H1 | schema | internal links | images | page type | QA status`

## Content Parity
Tours:
- exact verified duration/route/itinerary
- meals
- accommodation
- Included/Excluded
- fees
- transfers
- driver/guide
- activities
- gallery
- unique tour FAQs

Destinations:
- substantial content
- unique destination FAQs
- correct related tours
- useful internal links
- no thin translated variants

## Multilingual Quality
No placeholders or language contamination. Equivalent pages should provide comparable usefulness, not necessarily literal paragraph symmetry.

## Search Architecture
Confirm one clear owner for important query clusters. Resolve cannibalization and orphan pages.

## AEO
Check that question-based content:
- answers directly
- is factual
- is page-specific
- is visible/indexable
- avoids repeated generic templates
- links to useful next steps

## GEO
Check consistent entity identity and relationships:
`Jordan Story Tours → Tour → Destination → Jordan/related entities`

No contradictory facts across languages.

## Technical
Pass:
- canonical
- hreflang
- sitemap
- robots
- redirects
- 404s
- structured data
- static rendered content
- mobile
- performance
- accessibility

## Trust
Zero:
- fabricated reviews
- fake aggregate ratings
- placeholder licenses/registration
- unsupported awards
- invented hotel/service guarantees
- conflicting contact data

## Conversion
Booking and localized review flows must pass end-to-end.

## Final Report
Create `docs/00Z-FINAL-LAUNCH-AUDIT.md`:
`check | locale | URL | severity | status | evidence | fix | retest`

Statuses:
`PASS | FAIL | BLOCKED | NOT_APPLICABLE`

Severity:
`P0 | P1 | P2`

## Release Gate
Launch only when:
- P0 = 0 open
- tour factual parity = PASS
- multilingual content = PASS
- unique tour FAQ QA = PASS
- destination content/FAQ QA = PASS
- booking = PASS
- reviews = PASS
- canonical/hreflang/sitemap = PASS
- critical broken links = 0
- trust placeholders/fakes = 0
- security/admin privacy = PASS

# FINAL COMMAND
After this file, STOP generating planning files. Fix the deployed site until the final report passes. The next work is live-site monitoring, Search Console observation and evidence-based iteration.
