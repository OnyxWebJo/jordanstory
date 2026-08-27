# 00Q — Final Production Crawl, QA & Launch Gate
## Jordan Story Tours

**Priority:** RELEASE BLOCKER
**Run last**

## Mission
Do not launch because the website “looks finished.” Launch only after factual, multilingual, SEO, AEO, GEO, UX, performance and conversion checks pass.

## 1. Crawl all public URLs
For EN/DE/FR/IT verify:
- 200 status
- intended indexability
- canonical
- hreflang
- title
- description
- H1
- internal links
- schema
- image loading
- no broken assets

## 2. Broken links
Create `docs/FINAL-BROKEN-LINK-REPORT.md`. Fix internal 404s, bad anchors, broken galleries, invalid booking CTAs and language-switcher failures.

## 3. Tour product QA
Sample AND programmatically validate all tours against master records:
- duration
- route
- itinerary
- meals
- accommodation
- included/excluded
- guide/driver
- entrance fees
- transfers
- price logic
- gallery

No language may diverge from the master facts.

## 4. Translation QA
Every locale must have:
- no English placeholders
- complete navigation/footer
- localized booking/review UI
- localized metadata
- correct internal links
- natural language
- no untranslated error/success states

## 5. Scroll World
Test:
- desktop
- mobile
- tablet
- reduced motion
- Skip Journey
- loading/fallback
- text overlays
- chapter captions
- no debug scene labels
- no baked text in media
- performance

## 6. Performance
Audit Core Web Vitals and major payloads:
- LCP
- INP
- CLS
- JS
- hero/video/image weight
- fonts
- third-party scripts

Do not let Scroll World block meaningful content.

## 7. Booking
Test each locale end-to-end:
`tour → booking → correct tour attribution → validation → submission → admin record → localized success/confirmation`

## 8. Reviews
Test:
`completed booking → localized WhatsApp request → secure token → correct-language form → submission → moderation → publication → aggregate update`

No fake reviews/ratings.

## 9. Business data
Confirm everywhere:
Jordan Story Tours
Registration 100933491
Atia Complex 149, Office #402, Ar-Razi St., Amman, Jordan
info@jordanstorytours.com
+962 6 552 2667
WhatsApp +962 79 660 0360

Remove every placeholder.

## 10. Security
- admin protected
- secrets not exposed
- test accounts/data removed
- token pages private/noindex
- forms validated
- reasonable rate limiting
- no debug endpoints

## 11. Accessibility
Keyboard, focus, contrast, form labels, alt text, reduced motion, carousel controls, semantic landmarks.

## 12. Search launch
Verify:
- robots.txt
- XML sitemap(s)
- canonicals
- hreflang
- redirects
- 404
- schema
- Open Graph
- no accidental noindex

## 13. Required final report
Create `docs/FINAL-LAUNCH-QA.md` with:
`check | status | severity | URL | issue | fix | retest`

Statuses:
`PASS | FAIL | BLOCKED | NOT_APPLICABLE`

## 14. Release gate
Launch only when:
- all P0 = PASS
- factual tour parity = PASS
- booking = PASS
- multilingual crawl = PASS
- hreflang/canonical = PASS
- placeholder/fake trust data = zero
- critical broken links = zero
- admin/security = PASS

P1 items require explicit owner acceptance if deferred.

# FINAL COMMAND
The finished product must be a trustworthy four-language Jordan travel platform with one verified product truth, four native search experiences, an immersive Jordan Story identity and a working conversion path.
