# 00Y — Images, Schema, Technical SEO, Performance & Conversion QA
## Jordan Story Tours

**Priority:** RELEASE BLOCKER

## 1. Images & Galleries
Audit every tour/destination:
- correct gallery exists
- no missing/broken images
- destination-specific imagery
- descriptive localized alt text where useful
- sensible filenames
- width/height attributes
- responsive image delivery
- modern optimized formats where supported
- lazy-load below-fold images
- do not lazy-load the critical LCP hero blindly
- no baked text in destination/Scroll World media

Create `docs/IMAGE-MEDIA-AUDIT.md`.

## 2. Scroll World
Audit desktop/mobile/tablet/reduced-motion/skip/fallback/loading. Preserve cinematic Petra/Siq journey without blocking meaningful content or causing layout shifts.

## 3. Schema / Entity
Audit only verified visible facts. Model organization, breadcrumbs, tours/destinations and appropriate editorial entities without inventing ratings, prices, coordinates, opening hours or awards.

Create `docs/SCHEMA-ENTITY-AUDIT.md`.

FAQ content is valuable even without FAQ rich results. Do not build the strategy around FAQ rich-result eligibility.

## 4. Technical Multilingual SEO
Verify:
- `/en/ /de/ /fr/ /it/`
- self-consistent canonicals
- reciprocal hreflang for complete equivalents
- x-default strategy
- localized language switcher
- sitemap coverage
- robots/indexability
- no draft/test/admin/review-token URLs in indexable sitemaps
- no accidental cross-language canonicals

## 5. Static Next.js
Critical text, metadata, links and structured data must be present in generated HTML and not depend on user interaction/client-only rendering.

## 6. Performance
Audit Core Web Vitals risks, JS payload, Scroll World media, fonts, third-party scripts, image sizes and layout stability.

## 7. Booking Conversion
Test:
`destination → tour → booking → validation → submission → admin record → localized confirmation`

Correct tour attribution and language must persist.

## 8. Reviews
Test:
`completed tour → admin localized WhatsApp request → secure review URL → localized form → moderation → publication`

No fabricated reviews/aggregate ratings.

## 9. Contact/Business Identity
Use one verified business identity consistently across visible content and structured data.

## 10. Accessibility
Keyboard, focus, labels, contrast, accordions, carousels, reduced motion, semantic headings and error states.

## Outputs
- `docs/IMAGE-MEDIA-AUDIT.md`
- `docs/SCHEMA-ENTITY-AUDIT.md`
- `docs/PERFORMANCE-QA.md`
- `docs/BOOKING-CONVERSION-QA.md`
- `docs/REVIEW-FLOW-QA.md`
- `docs/ACCESSIBILITY-QA.md`
- `docs/TECHNICAL-MULTILINGUAL-QA.md`

# FINAL COMMAND
Fix implementation problems, not just documentation. Re-test every failure after correction.
