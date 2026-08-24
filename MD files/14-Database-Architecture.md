# 14 — Database Architecture
## Jordan Story Tours — MySQL Data Model

**Purpose:** Define a normalized database model for tours, bilingual content, Story Collections, destinations, pricing, itinerary days, booking, customers, quotes, payments, media, reviews, SEO, redirects, users, permissions and audit history.

**Database:** MySQL  
**Runtime data layer:** PHP + MySQL using prepared statements/PDO or a mature PHP framework/database layer

---

# 1. Data Modeling Principles

1. Shared business facts should not be duplicated between English and German.
2. Localized text belongs in translation tables/structures.
3. Prices are structured data, not paragraphs.
4. Itineraries are structured by day/stop.
5. Bookings preserve snapshots of what the customer requested.
6. Historical price/quote/status changes are never silently overwritten.
7. SEO data remains language-specific where needed.
8. Story Collections remain separate from operational categories.
9. Destination entities are reusable across tours, guides and Stories.
10. Soft delete/archive is preferred for records with business or SEO history.

---

# 2. Core Entity Groups

## Identity / Access
- users
- roles
- permissions
- user_roles
- role_permissions
- sessions / auth provider tables

## Tours
- tours
- tour_translations
- tour_categories
- tour_category_links
- tour_destinations
- tour_story_links
- tour_itinerary_days
- tour_itinerary_translations
- tour_inclusions
- tour_exclusions
- tour_extras
- tour_availability
- tour_price_rules
- tour_price_history
- tour_accommodations
- tour_transport_rules
- tour_guide_rules
- tour_faqs

## Content
- destinations
- destination_translations
- stories
- story_translations
- guides
- guide_translations
- guide_destination_links
- guide_tour_links
- content_revisions

## Booking
- bookings
- booking_travelers
- booking_options
- booking_price_lines
- booking_status_history
- booking_notes
- booking_messages
- booking_attribution
- quotes
- quote_versions
- quote_price_lines
- payments
- refunds
- customers

## Media
- media
- media_translations
- media_links

## Reviews
- reviews

## SEO / Routing
- seo_meta
- redirects
- slug_history

## Settings / Operations
- settings
- transport_routes
- vehicle_types
- audit_logs

---

# 3. tours

Core non-localized tour record.

Suggested fields:

- `id` UUID
- `internal_code` string unique
- `status` enum
- `duration_days` integer nullable
- `duration_nights` integer nullable
- `start_location_id` FK destination/place nullable
- `end_location_id` FK nullable
- `tour_type` enum/string
- `min_travelers` integer nullable
- `max_travelers` integer nullable
- `is_private` boolean nullable
- `is_featured` boolean default false
- `primary_story_id` FK nullable
- `availability_mode` enum
- `base_currency` char(3)
- `published_at` timestamp nullable
- `created_at`
- `updated_at`
- `archived_at` nullable

Do not store English title directly here if translations are required.

---

# 4. tour_translations

One row per tour + locale.

Fields:

- `id`
- `tour_id`
- `locale` (`en`, `de`)
- `title`
- `story_subtitle`
- `short_summary`
- `introduction`
- `practical_intro` nullable
- `slug`
- `translation_status`
- `reviewed_by_user_id` nullable
- `reviewed_at` nullable
- `source_updated_at` nullable
- `created_at`
- `updated_at`

Unique:
`tour_id + locale`

Unique public slug by locale as required.

---

# 5. Translation Status

Enum:

- `NOT_STARTED`
- `DRAFT`
- `NEEDS_REVIEW`
- `PUBLISHED`
- `OUTDATED`

When protected English source text/facts materially change, German translation may be flagged automatically.

---

# 6. tour_categories

Operational/product categories.

Examples:
- Day Tours
- Multi-Day Tours
- Budget Tours
- Luxury Tours
- Islamic & Historical
- Holy Land
- Transportation if modeled separately

Fields:
- id
- internal_key
- sort_order
- active

Category translations may use separate table if category labels need localization.

---

# 7. tour_category_links

Many-to-many:

- tour_id
- category_id

Allow one primary category through flag or tour field if needed.

---

# 8. destinations

Canonical place entities.

Fields:

- `id`
- `internal_key`
- `latitude`
- `longitude`
- `country_code`
- `parent_destination_id` nullable
- `destination_type`
- `active`
- `created_at`
- `updated_at`

Examples:
- Jordan
- Amman
- Petra
- Wadi Rum
- Dead Sea
- Aqaba
- Jerash
- Madaba
- Mount Nebo
- Baptism Site
- Ajloun
- Umm Qais
- Wadi Mujib
- Karak
- Shobak
- Desert Castles
- Queen Alia International Airport

Coordinates must be verified.

---

# 9. destination_translations

Fields:

- id
- destination_id
- locale
- name
- slug
- short_description
- body
- practical_information nullable
- translation_status
- reviewed_at
- created_at
- updated_at

Unique destination + locale.

---

# 10. tour_destinations

Many-to-many link:

- tour_id
- destination_id
- sequence nullable
- visit_type nullable
- overnight boolean
- featured boolean

This allows:
- route maps
- destination filtering
- GEO/entity relationships
- related content

---

# 11. stories

Jordan Story brand collections.

Fields:

- id
- internal_key
- active
- sort_order
- hero_media_id nullable
- created_at
- updated_at

Examples:
- ancient
- desert
- sacred
- red-sea
- adventure
- essential
- complete
- luxury

---

# 12. story_translations

Fields:

- id
- story_id
- locale
- name
- slug
- tagline
- description
- translation_status
- seo_title nullable
- meta_description nullable
- created_at
- updated_at

---

# 13. tour_story_links

Fields:

- tour_id
- story_id
- is_primary
- sort_order nullable

A tour may belong to multiple Stories.

Only one should normally be primary.

---

# 14. tour_itinerary_days

Structured itinerary facts.

Fields:

- id
- tour_id
- day_number nullable
- sequence
- start_location_id nullable
- end_location_id nullable
- estimated_drive_minutes nullable
- accommodation_id nullable
- breakfast_included boolean nullable
- lunch_included boolean nullable
- dinner_included boolean nullable
- guide_rule_id nullable
- active
- created_at
- updated_at

For one-day tours, `day_number` may be null and sequence represents stops.

---

# 15. tour_itinerary_translations

Fields:

- id
- itinerary_day_id
- locale
- title
- story_subtitle nullable
- description
- notes nullable
- translation_status

---

# 16. itinerary_destination_links

If one day visits multiple places:

- itinerary_day_id
- destination_id
- sequence

This avoids forcing one destination into a day.

---

# 17. tour_inclusions

Prefer structured reusable items.

Fields:

- id
- tour_id
- inclusion_key nullable
- sort_order
- active
- pricing_relevant boolean default false

Localized labels live in translations table.

---

# 18. tour_inclusion_translations

- inclusion_id
- locale
- label
- detail nullable

Same pattern for exclusions.

---

# 19. tour_exclusions

Fields:

- id
- tour_id
- exclusion_key nullable
- sort_order
- active

---

# 20. tour_exclusion_translations

- exclusion_id
- locale
- label
- detail nullable

---

# 21. tour_extras

Optional services/activities.

Fields:

- id
- tour_id nullable
- internal_key
- price_model
- currency
- amount nullable
- active
- start_date nullable
- end_date nullable
- min_travelers nullable
- max_travelers nullable

Translations:
- title
- description

---

# 22. tour_price_rules

Flexible but controlled pricing.

Fields:

- id
- tour_id
- active
- currency
- pricing_basis enum
- min_travelers nullable
- max_travelers nullable
- adult_amount nullable
- child_amount nullable
- infant_amount nullable
- group_amount nullable
- vehicle_amount nullable
- season_start nullable
- season_end nullable
- valid_from nullable
- valid_to nullable
- accommodation_class nullable
- room_type nullable
- priority
- created_at
- updated_at

Pricing engine selects applicable rules server-side.

---

# 23. Pricing Basis Enum

Possible:

- PER_PERSON
- PER_GROUP
- PER_VEHICLE
- FLAT
- CUSTOM_QUOTE

Only expose models actually used.

---

# 24. tour_price_history

Fields:

- id
- tour_id
- price_rule_id nullable
- old_data JSON
- new_data JSON
- changed_by_user_id
- reason nullable
- effective_at nullable
- created_at

Audit, not live pricing source.

---

# 25. tour_availability

Fields:

- id
- tour_id
- availability_type
- weekday nullable
- start_date nullable
- end_date nullable
- specific_date nullable
- is_available
- reason nullable
- created_at
- updated_at

Support:
- normal operating rules
- blackout dates
- seasonal ranges
- request-only status

---

# 26. accommodations

Reusable accommodation records.

Fields:

- id
- name
- destination_id
- category
- accommodation_type
- guaranteed_default boolean
- active

Do not assume hotel category equals actual quality claim without business verification.

---

# 27. accommodation_translations

- accommodation_id
- locale
- description
- notes

---

# 28. tour_accommodations

Fields:

- tour_id
- itinerary_day_id nullable
- accommodation_id
- nights
- room_basis nullable
- meal_plan nullable
- is_example boolean
- supplement_rule_id nullable

---

# 29. vehicle_types

Fields:

- id
- internal_key
- max_passengers
- luggage_capacity nullable
- active
- image_media_id nullable

Translations:
- display name
- description

Examples may include car, van, bus, premium sedan if actually used.

---

# 30. tour_transport_rules

Fields:

- id
- tour_id
- vehicle_type_id nullable
- private_shared enum nullable
- driver_included boolean
- air_conditioning boolean nullable
- notes_key/localized notes
- active

---

# 31. guide_languages

Fields:

- id
- code
- active

Examples must come from actual operations.

Website language does not equal guide availability.

---

# 32. tour_guide_rules

Fields:

- id
- tour_id
- guide_type
- included
- minimum_group_size nullable
- optional_price nullable
- currency nullable
- active

Guide type examples:
- DRIVER_ONLY
- LOCAL_GUIDE
- ESCORT_GUIDE
- OPTIONAL_GUIDE

---

# 33. tour_guide_language_links

- guide_rule_id
- guide_language_id

---

# 34. tour_faqs

Fields:

- id
- tour_id
- sort_order
- active
- source_fact_key nullable

Translations:
- question
- answer
- locale

FAQ answers should remain synchronized with protected facts where appropriate.

---

# 35. guides

Travel-guide article identity.

Fields:

- id
- status
- primary_destination_id nullable
- author_user_id nullable
- reviewer_user_id nullable
- published_at
- reviewed_at nullable
- next_review_at nullable
- created_at
- updated_at
- archived_at

---

# 36. guide_translations

Fields:

- guide_id
- locale
- title
- slug
- summary
- body
- translation_status
- seo_title
- meta_description

---

# 37. guide_destination_links

- guide_id
- destination_id

---

# 38. guide_tour_links

- guide_id
- tour_id
- relation_type
- sort_order

---

# 39. customers

Fields:

- id
- first_name
- last_name
- email_normalized nullable
- phone_normalized nullable
- whatsapp_normalized nullable
- country_code nullable
- nationality_code nullable
- preferred_locale nullable
- marketing_consent nullable
- created_at
- updated_at
- archived_at nullable

Avoid unnecessary sensitive fields.

---

# 40. bookings

Core booking/request record.

Fields:

- `id`
- `reference` unique
- `customer_id` nullable
- `tour_id` nullable
- `booking_type`
- `status`
- `payment_status`
- `locale`
- `travel_date`
- `alternative_date` nullable
- `adult_count`
- `child_count`
- `infant_count`
- `currency` nullable
- `quoted_total` nullable
- `final_total` nullable
- `price_status`
- `assigned_user_id` nullable
- `source_page_url` nullable
- `created_at`
- `updated_at`
- `cancelled_at` nullable

For custom tours, tour_id may be null.

---

# 41. Booking Type

Possible:

- TOUR_REQUEST
- CUSTOM_TOUR
- TRANSPORTATION
- ADMIN_CREATED

---

# 42. Booking Status

Possible:

- NEW_REQUEST
- REVIEWING
- AWAITING_CUSTOMER
- AVAILABILITY_CONFIRMED
- QUOTE_SENT
- AWAITING_PAYMENT
- DEPOSIT_PAID
- CONFIRMED
- IN_PROGRESS
- COMPLETED
- CANCELLED
- DECLINED
- EXPIRED

---

# 43. Payment Status

Possible:

- NOT_REQUIRED
- NOT_STARTED
- AWAITING_DEPOSIT
- PARTIALLY_PAID
- PAID
- REFUNDED
- PARTIALLY_REFUNDED
- FAILED

---

# 44. booking_travelers

Use only if detailed traveler records are actually required.

Fields:

- id
- booking_id
- traveler_type
- first_name nullable
- last_name nullable
- age nullable
- nationality_code nullable
- notes nullable

Do not collect passports or highly sensitive identity data unless operationally necessary and securely designed.

---

# 45. booking_options

Generic selected structured options.

Fields:

- id
- booking_id
- option_key
- option_value_string nullable
- option_value_number nullable
- option_value_json nullable
- tour_extra_id nullable
- localized_label_snapshot nullable

Examples:
- pickup_location
- hotel
- room_type
- guide_language
- special extra

---

# 46. Booking Snapshots

Bookings should preserve customer-facing facts at submission.

Examples:

- tour title snapshot
- selected price-rule snapshot
- inclusion summary snapshot
- selected extra title/price
- route snapshot

Reason:
the tour may later be edited.

Historical booking must not silently change.

---

# 47. booking_price_lines

Fields:

- id
- booking_id
- line_type
- description_snapshot
- quantity
- unit_amount
- total_amount
- currency
- source_rule_id nullable
- sort_order

Line types:
- BASE
- CHILD
- EXTRA
- ACCOMMODATION
- SUPPLEMENT
- DISCOUNT
- TAX
- MANUAL_ADJUSTMENT

---

# 48. booking_status_history

Fields:

- id
- booking_id
- old_status nullable
- new_status
- changed_by_user_id nullable
- customer_visible_note nullable
- internal_note nullable
- created_at

Never overwrite status history.

---

# 49. booking_notes

Fields:

- id
- booking_id
- user_id
- note
- visibility enum INTERNAL/CUSTOMER
- created_at
- updated_at

Internal notes must never leak into public output.

---

# 50. booking_messages

Store communication records where appropriate:

- id
- booking_id
- direction
- channel
- subject nullable
- body_snapshot
- locale
- delivery_status
- provider_message_id nullable
- sent_at nullable
- created_at

Channels:
- EMAIL
- WHATSAPP if integrated
- SYSTEM

---

# 51. booking_attribution

Fields:

- booking_id
- landing_page
- referrer
- source
- medium
- campaign
- content
- term
- identifiable_ai_referral nullable
- first_touch_json nullable
- last_touch_json nullable

Do not over-collect user-level tracking data.

---

# 52. quotes

Fields:

- id
- booking_id
- current_version_id nullable
- status
- accepted_at nullable
- declined_at nullable
- created_at
- updated_at

---

# 53. quote_versions

Fields:

- id
- quote_id
- version_number
- locale
- currency
- total
- deposit_required
- deposit_amount nullable
- valid_until nullable
- itinerary_snapshot JSON
- inclusions_snapshot JSON
- exclusions_snapshot JSON
- terms_snapshot nullable
- created_by_user_id
- created_at
- sent_at nullable

Unique quote + version number.

---

# 54. quote_price_lines

Same concept as booking price lines.

Fields:

- quote_version_id
- description
- quantity
- unit_amount
- total
- type
- sort_order

---

# 55. payments

Fields:

- id
- booking_id
- provider
- provider_transaction_id nullable
- amount
- currency
- status
- payment_type
- paid_at nullable
- raw_safe_metadata JSON nullable
- created_at
- updated_at

Never store raw card numbers/CVV.

---

# 56. refunds

Fields:

- id
- payment_id
- booking_id
- amount
- currency
- provider_refund_id nullable
- reason
- status
- created_by_user_id nullable
- created_at

---

# 57. custom_tour_requests

Could be represented through bookings + booking_options.

Prefer not to create a separate parallel business workflow unless custom tour data becomes complex.

If needed later:
- destinations
- interests
- budget
- travel style
- duration

can be structured in dedicated tables.

---

# 58. transport_routes

Fields:

- id
- origin_destination_id nullable
- destination_destination_id nullable
- origin_label_key nullable
- destination_label_key nullable
- vehicle_type_id
- passenger_capacity
- one_way_price
- return_price nullable
- currency
- valid_from nullable
- valid_to nullable
- active
- notes
- created_at
- updated_at

Use admin-managed pricing.

---

# 59. media

Fields:

- id
- storage_key
- public_url
- media_type
- mime_type
- width nullable
- height nullable
- duration_seconds nullable
- photographer nullable
- source nullable
- rights_status
- focal_x nullable
- focal_y nullable
- created_by_user_id
- created_at
- archived_at nullable

---

# 60. media_translations

Fields:

- media_id
- locale
- alt_text
- caption nullable
- title nullable

---

# 61. media_links

Generic association:

- media_id
- entity_type
- entity_id
- role
- sort_order

Roles:
- HERO
- GALLERY
- ITINERARY
- CARD
- FALLBACK
- OG_IMAGE

Can alternatively be implemented with explicit relation tables if preferred.

---

# 62. reviews

Fields:

- id
- tour_id nullable
- customer_id nullable
- reviewer_display_name
- reviewer_country nullable
- rating nullable
- title nullable
- review_text
- locale
- source
- external_source_id nullable
- review_date nullable
- verification_status
- moderation_status
- created_at
- published_at nullable

Never create fake review rows.

---

# 63. seo_meta

Generic localized SEO record.

Fields:

- id
- entity_type
- entity_id
- locale
- seo_title
- meta_description
- primary_query nullable
- secondary_queries JSON nullable
- search_intent nullable
- robots_index boolean
- canonical_override nullable
- social_title nullable
- social_description nullable
- social_media_id nullable
- breadcrumb_label nullable
- updated_at

Unique entity + locale.

---

# 64. redirects

Fields:

- id
- source_path unique
- destination_url/path
- redirect_type
- reason
- active
- created_by_user_id
- created_at
- updated_at

Redirect type:
- 301
- 302/307 if genuinely temporary

Validate loops.

---

# 65. slug_history

Useful for automatic redirect suggestions.

Fields:

- id
- entity_type
- entity_id
- locale
- old_slug
- new_slug
- changed_at

Changing a published slug should prompt redirect creation.

---

# 66. users

Fields:

- id
- name
- email
- password_hash/auth_provider_fields
- active
- last_login_at nullable
- created_at
- updated_at

Actual auth tables depend on chosen library.

---

# 67. roles

Examples:

- SUPER_ADMIN
- BOOKING_MANAGER
- BOOKING_AGENT
- CONTENT_MANAGER
- GERMAN_EDITOR
- SEO_MANAGER
- FINANCE

---

# 68. permissions

Granular keys:

- TOUR_READ
- TOUR_EDIT
- TOUR_PUBLISH
- PRICE_EDIT
- BOOKING_READ
- BOOKING_EDIT
- CUSTOMER_READ
- PAYMENT_EDIT
- TRANSLATION_EDIT_DE
- SEO_EDIT
- USER_MANAGE
- REPORT_VIEW

---

# 69. user_roles / role_permissions

Many-to-many join tables.

Authorization is enforced server-side.

---

# 70. settings

Key-value/configuration table for safe non-secret settings.

Examples:

- company_name
- phone
- email
- whatsapp
- office address
- enabled locales
- default currency
- support hours
- social URLs

Do not store application secrets in ordinary database settings if environment/secrets storage is more appropriate.

---

# 71. audit_logs

Fields:

- id
- user_id nullable
- action
- entity_type
- entity_id nullable
- old_data JSON nullable
- new_data JSON nullable
- ip_hash/technical metadata only if appropriate
- created_at

Actions:
- price change
- publish
- booking edit
- payment status
- role change
- export
- archive

---

# 72. content_revisions

For editorial history:

- id
- entity_type
- entity_id
- locale
- revision_number
- snapshot JSON
- created_by_user_id
- created_at

Use for important editable content.

---

# 73. Verification Fields

For sensitive/high-change facts, optional verification model:

`fact_verifications`

Fields:
- entity_type
- entity_id
- fact_key
- status
- source_reference
- checked_at
- checked_by
- next_review_at
- notes

Useful for:
- border rules
- visas
- seasonal Wadi Mujib
- memberships
- entrance claims

---

# 74. Indexes

Create indexes for frequent access patterns.

Examples:

- tour status
- tour published_at
- tour translation slug + locale
- booking reference
- booking status
- booking travel_date
- booking created_at
- booking customer_id
- booking tour_id
- customer email_normalized
- customer phone_normalized
- destination slug + locale
- guide slug + locale
- redirects source_path

Use composite indexes based on actual query patterns.

---

# 75. Full-Text Search

MySQL full-text search may index:

- tour translated titles
- destination names
- guides
- booking/customer admin search

Use language-aware configuration where useful.

Do not overengineer search at launch.

---

# 76. Foreign Keys

Use foreign keys to protect integrity.

Define deliberate delete behavior.

Examples:

Tour deleted/archive:
- normally archive, do not cascade historical bookings

Customer archive:
- bookings remain

Destination used by tour:
- prevent accidental hard delete

---

# 77. Soft Delete

Recommended for:

- tours
- destinations
- guides
- media
- customers where allowed

Use `archived_at`.

Do not soft-delete everything automatically; transactional history tables remain immutable/history-based.

---

# 78. Time Zones

Store timestamps in UTC.

Display in appropriate business/user timezone.

Travel dates that are calendar dates should use date fields, not timestamps.

---

# 79. Currency Precision

Use decimal/numeric, never floating point for money.

Example:
`DECIMAL(12,2)` depending business requirements.

Store currency ISO code alongside monetary values.

---

# 80. IDs

Use UUID/ULID string/binary identifiers where appropriate.

Public booking reference is separate from database primary key.

Do not expose sequential internal IDs unnecessarily.

---

# 81. Booking Reference

Generated server-side.

Example concept:
`JST-2026-ABCDE`

Reference must be unique and user-friendly.

Do not encode sensitive information.

---

# 82. Localized Enums

Database stores stable enum/internal key.

UI translates it.

Example:

Database:
`CONFIRMED`

English:
`Confirmed`

German:
localized equivalent

Do not store separate localized enum values in core logic.

---

# 83. JSON Usage

Use JSON carefully for:

- snapshots
- attribution metadata
- audit changes
- flexible low-query metadata

Do not put all tours/bookings into giant JSON documents.

Core searchable relational data remains normalized.

---

# 84. Schema Migration

Use version-controlled migrations.

Never modify production database manually without recording migration where avoidable.

Migration pipeline:

- develop
- test
- backup
- deploy
- verify

---

# 85. Seed Data

Seed:

- roles
- permissions
- languages
- Story Collections
- core destinations
- required status enums/settings

Do not seed fake production reviews/customers/bookings.

---

# 86. Existing Website Migration Tables

Temporary/import staging tables may be useful.

Example:

`legacy_tour_import`

Fields:
- source_url
- raw_title
- raw_price
- raw_duration
- raw_itinerary
- raw_inclusions
- raw_exclusions
- raw_booking_fields
- extraction_status
- verification_status
- mapped_tour_id

This preserves traceability.

---

# 87. Legacy Source Evidence

Each migrated tour should retain:

- legacy URL
- source snapshot reference
- extraction date
- verification notes
- migration status

Could live in a dedicated `legacy_sources` table.

---

# 88. Data Migration Rule

Never overwrite raw extracted data during cleanup.

Use layers:

**Raw Source**
→ **Normalized**
→ **Verified**
→ **Published**

This prevents losing the original business information.

---

# 89. German Migration Rule

German is created only after verified shared facts exist.

Do not translate contradictory source data.

If a tour says 6 days in one place and 7 in another:
- mark conflict
- resolve business fact
- then create German content

---

# 90. Reporting Views

Create SQL/materialized views later as needed.

Examples:

- booking funnel
- revenue by tour
- revenue by Story
- EN vs DE conversion
- top destinations
- outstanding payments
- translation health

Do not prematurely duplicate reporting data.

---

# 91. Data Warehouse

Not required at launch.

MySQL can support initial reporting.

Add a warehouse only when data volume/analytics complexity justifies it.

---

# 92. Backups

Database backups should include:

- automated snapshots
- retention
- point-in-time recovery if provider supports it
- tested restore procedure

Booking/customer data requires reliable backup.

---

# 93. Privacy / Data Minimization

Do not collect/store:

- passport data
- health details
- payment-card data
- unnecessary identity documents

unless a genuine operational requirement and secure handling design exists.

Collect only what Jordan Story Tours needs.

---

# 94. Sensitive Data

If sensitive travel documents are later needed:

- separate secure storage
- strict permissions
- encryption
- retention/deletion policy
- audit access

Do not place documents in public media storage.

---

# 95. Data Retention

Define retention by category:

- bookings
- customers
- financial records
- messages
- analytics attribution
- logs

Deletion/anonymization policy should consider legal/business requirements.

---

# 96. Database Acceptance Checklist

- [ ] tour facts separated from translations
- [ ] EN + DE supported
- [ ] Story Collections modeled independently
- [ ] destination entities reusable
- [ ] itinerary structured
- [ ] pricing server-readable
- [ ] price history preserved
- [ ] availability modeled
- [ ] booking snapshots preserved
- [ ] status history preserved
- [ ] quote versions preserved
- [ ] payment/refund records structured
- [ ] media rights stored
- [ ] reviews genuine/moderated
- [ ] SEO localized
- [ ] redirects managed
- [ ] roles/permissions normalized
- [ ] audit logs implemented
- [ ] legacy extraction traceable
- [ ] indexes reviewed
- [ ] backup/restore defined
- [ ] sensitive-data minimization reviewed

---

# 97. Final Database Principle

The database is the factual backbone of Jordan Story Tours.

The English site and German site may tell the Story differently.

The 3D homepage may present Jordan cinematically.

The admin may change prices and content.

But they must all depend on the same verified underlying truth:

**one tour, one route, one current price model, one booking history — expressed beautifully in multiple languages.**
