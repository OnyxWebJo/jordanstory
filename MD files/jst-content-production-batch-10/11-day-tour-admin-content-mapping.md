# Day Tour Publishing / Admin Mapping — Batch 10

## Principle
Tour content and commercial data must be separated.

### Editorial fields
- title_en / title_de
- summary_en / summary_de
- story_intro_en / story_intro_de
- itinerary_en / itinerary_de
- practical_info_en / practical_info_de
- faq_en / faq_de
- seo_title_en / seo_title_de
- meta_description_en / meta_description_de
- slug_en / slug_de

### Shared protected fields
- duration_days
- duration_nights
- route
- starting_price
- old_price
- currency
- price_basis
- availability_status
- includes
- excludes
- gallery/media relations
- booking_enabled

German and English read from the same protected commercial fields.

## Availability statuses
Recommended:
- available
- request_only
- seasonal
- temporarily_unavailable
- sold_out
- hidden

Do not recreate the legacy contradiction where a tour simultaneously advertises a price and says “not available yet” without context.

## Static Next.js Publishing
Public EN/DE pages may be statically generated/exported for shared hosting.
Admin edits update MySQL through the dynamic backend; the deployment/rebuild workflow then regenerates affected static pages.
