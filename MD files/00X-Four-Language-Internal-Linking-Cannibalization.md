# 00X — Four-Language Internal Linking & Cannibalization
## EN / DE / FR / IT

**Priority:** HIGH  
**Run after:** multilingual content completion

## Goal
Turn the content library into a coherent search/traveler architecture and prevent pages from competing for the same intent.

## Graph
Build meaningful:
`Homepage ↔ Categories ↔ Tours ↔ Destinations ↔ Guides ↔ Custom Tour`

Tour → Destination links only when the verified itinerary visits that destination.

## Locale Rule
Links should remain inside the current locale whenever an equivalent exists:
`/en/ → /en/`, `/de/ → /de/`, `/fr/ → /fr/`, `/it/ → /it/`.

## Page Intent Ownership
For every locale define:
- homepage = broad brand/private Jordan intent
- tours directory = browse/package intent
- category = category intent
- individual tour = exact product/route/duration intent
- destination = broad destination/entity intent
- guide = deep informational question
- custom tour = tailor-made/private planning intent

## Cannibalization Audit
Create:
`docs/CANNIBALIZATION-AUDIT-EN.md`
`docs/CANNIBALIZATION-AUDIT-DE.md`
`docs/CANNIBALIZATION-AUDIT-FR.md`
`docs/CANNIBALIZATION-AUDIT-IT.md`

Fields:
`query cluster | competing URLs | intended owner | conflict type | recommended change | internal-link change | status`

## Orphan Audit
Create `docs/ORPHAN-PAGE-AUDIT.md`. Every important indexable page must be reachable through crawlable internal links.

## Anchor Text
Use descriptive, natural anchors. Avoid repeating exact-match keyword anchors everywhere.

## Related Content
Generate related tours/destinations/guides from real relationships, not random SEO blocks.

## Breadcrumbs
Consistent visible hierarchy and crawlable links.

## Output
Create `docs/MULTILINGUAL-INTERNAL-LINK-MAP.md`.

# FINAL COMMAND
Every important intent needs one clear primary owner and every valuable page needs meaningful internal paths without cross-language leakage.
