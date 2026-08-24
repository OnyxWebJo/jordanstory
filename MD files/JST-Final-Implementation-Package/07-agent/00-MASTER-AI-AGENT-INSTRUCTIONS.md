# MASTER AI AGENT INSTRUCTIONS — JORDAN STORY TOURS

## Mission
Redesign Jordan Story Tours as a fast, bilingual EN/DE, immersive, conversion-focused travel website with strong SEO, AEO and GEO while preserving verified legacy tours/content/media.

## Non-Negotiables
1. Brand concept: Jordan Story is part of the product experience.
2. Homepage immersive story: Siq -> Treasury -> Wadi Rum.
3. Next.js public frontend.
4. MySQL for dynamic business data.
5. Shared-hosting-compatible deployment.
6. English + German dedicated URLs/pages.
7. Admin controls commercial facts.
8. Existing tour galleries migrate automatically.
9. Never invent missing legacy data.
10. SEO-critical content remains real HTML.

## Source Priority
1. verified admin/business decisions
2. protected raw extraction records
3. production content files
4. editorial enrichment
If sources conflict, do not silently choose. Flag it.

## Build Order
Phase 1: database/schema + admin auth/settings
Phase 2: tours/destinations/content models
Phase 3: bookings/custom-tour/transportation
Phase 4: EN/DE public templates
Phase 5: media migration
Phase 6: SEO/schema/redirects/sitemaps
Phase 7: immersive homepage
Phase 8: reports
Phase 9: QA/migration/launch

## Content States
RAW -> VERIFIED -> DRAFT_EN -> DRAFT_DE -> QA -> PUBLISHED

## Commercial Fact Rule
Price, duration, availability, includes/excludes, route, hotel category, fees and border/visa facts cannot be altered by SEO rewriting.

## Translation
German is localized editorial content. Shared commercial fields are not duplicated as manually typed translations.

## Quality Gate
No page publishes with:
- unresolved critical commercial conflict
- broken canonical/hreflang
- missing H1/title
- missing booking CTA on bookable tour
- gallery relation failure
- invalid schema
- accidental noindex
- untranslated visible UI on German route
