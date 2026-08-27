# 00P — Four-Language Technical SEO, Hreflang & Schema
## Jordan Story Tours — EN / DE / FR / IT

**Priority:** CRITICAL
**Run after:** EN/DE/FR/IT content QA

## Architecture
Use stable locale-specific URLs:
`/en/`, `/de/`, `/fr/`, `/it/`

Do not use IP-based content swapping as the primary indexing strategy.

## Equivalent-page map
Create `docs/HREFLANG-MAP.md` mapping every equivalent EN/DE/FR/IT URL.

Only include complete, indexable equivalents.

## Hreflang
For complete clusters output reciprocal:
- en
- de
- fr
- it
- x-default

Every page in a cluster references every available equivalent.

Never point to drafts, 404s, redirects or non-canonical URLs.

## Canonical
Each valid localized page generally self-canonicalizes. Do not canonicalize DE/FR/IT to EN merely because the facts are equivalent.

## Language switching
Language selector should take visitors to the equivalent page when available, not always the homepage.

## Sitemaps
Generate language-aware XML sitemaps or a clean sitemap architecture containing all canonical indexable locale URLs. Exclude drafts/admin/review-token URLs.

## Robots/indexing
Verify:
- public locale pages indexable
- admin noindex/not in sitemap
- private review links noindex
- development/test routes excluded
- no accidental sitewide noindex

## Structured data
Use visible verified data only. Keep Organization business identity consistent. Use BreadcrumbList and appropriate page/entity markup. Review/aggregate data only when genuine and eligible.

Verified business record:
- Jordan Story Tours
- Registration: 100933491
- Atia Complex 149, Office #402, Ar-Razi St., Amman, Jordan
- info@jordanstorytours.com
- +962 6 552 2667
- WhatsApp +962 79 660 0360

## Cross-language schema
Commercial facts must be identical across locale equivalents. Localize human-readable strings such as names/descriptions when appropriate.

## Metadata
Audit unique localized:
- title
- meta description
- OG title/description
- social locale
- canonical
- hreflang
- breadcrumb labels

## Internal links
Links should normally stay within the current locale. Do not send French visitors into English pages when an equivalent French page exists.

## 404/redirects
Provide localized 404s. Maintain redirects for changed URLs. No redirect chains.

## Static Next.js
Ensure important content, metadata, links and schema exist in generated HTML and do not depend on client-only rendering.

## Outputs
- docs/HREFLANG-MAP.md
- docs/CANONICAL-AUDIT.md
- docs/SITEMAP-AUDIT.md
- docs/SCHEMA-AUDIT.md
- docs/MULTILINGUAL-INTERNAL-LINK-AUDIT.md
- docs/TECHNICAL-SEO-QA.md

# FINAL COMMAND
Make all four language versions independently crawlable, indexable and connected as equivalents without confusing language, canonical or entity signals.
