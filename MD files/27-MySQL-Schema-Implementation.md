# 27 — MySQL Schema Implementation
## Jordan Story Tours — Implementation-Ready Database Structure

**Purpose:** Translate the logical data model into practical MySQL implementation guidance for shared hosting.

---

# 1. Database Engine

Use:

**MySQL 8.x** where hosting supports it.

Preferred:

- InnoDB
- utf8mb4
- transactional tables
- foreign keys
- proper indexes

Character set:

`utf8mb4`

Collation:
choose a modern Unicode collation compatible with the hosting MySQL version.

---

# 2. Naming Convention

Tables:
`snake_case`

Columns:
`snake_case`

Primary key:
`id`

Foreign key:
`tour_id`, `booking_id`, etc.

Timestamps:
- `created_at`
- `updated_at`
- `archived_at`

---

# 3. Identifier Strategy

Use:

- CHAR(36) UUID
or
- CHAR(26) ULID

ULID is attractive for sortable IDs.

Do not expose database IDs as customer booking references.

---

# 4. Money

Use:

`DECIMAL(12,2)`

Never FLOAT/DOUBLE for prices.

Always store currency:

`CHAR(3)`

---

# 5. JSON

MySQL JSON may be used for:

- snapshots
- audit changes
- attribution
- flexible metadata

Do not use JSON as a replacement for relational tour/pricing tables.

---

# 6. Core Tables

Recommended:

```text
users
roles
permissions
user_roles
role_permissions

tours
tour_translations
tour_categories
tour_category_links
tour_destinations
stories
story_translations
tour_story_links
destinations
destination_translations

tour_itinerary_days
tour_itinerary_translations
itinerary_destination_links

tour_inclusions
tour_inclusion_translations
tour_exclusions
tour_exclusion_translations
tour_extras
tour_extra_translations

tour_price_rules
tour_price_history
tour_availability

accommodations
accommodation_translations
tour_accommodations

vehicle_types
vehicle_type_translations
tour_transport_rules
guide_languages
tour_guide_rules
tour_guide_language_links

tour_faqs
tour_faq_translations

guides
guide_translations
guide_destination_links
guide_tour_links

customers
bookings
booking_travelers
booking_options
booking_price_lines
booking_status_history
booking_notes
booking_messages
booking_attribution

quotes
quote_versions
quote_price_lines

payments
refunds

media
media_translations
media_links

reviews

seo_meta
redirects
slug_history

transport_routes
settings
audit_logs
content_revisions
fact_verifications
publish_requests
publish_snapshots
```

---

# 7. tours

Suggested:

```sql
CREATE TABLE tours (
  id CHAR(26) PRIMARY KEY,
  internal_code VARCHAR(100) NOT NULL UNIQUE,
  status VARCHAR(40) NOT NULL,
  duration_days INT NULL,
  duration_nights INT NULL,
  start_location_id CHAR(26) NULL,
  end_location_id CHAR(26) NULL,
  tour_type VARCHAR(40) NULL,
  min_travelers INT NULL,
  max_travelers INT NULL,
  is_private TINYINT(1) NULL,
  is_featured TINYINT(1) NOT NULL DEFAULT 0,
  primary_story_id CHAR(26) NULL,
  availability_mode VARCHAR(40) NULL,
  base_currency CHAR(3) NOT NULL DEFAULT 'USD',
  published_at DATETIME NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  archived_at DATETIME NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

Foreign keys may be added after referenced tables are created.

---

# 8. tour_translations

```sql
CREATE TABLE tour_translations (
  id CHAR(26) PRIMARY KEY,
  tour_id CHAR(26) NOT NULL,
  locale VARCHAR(10) NOT NULL,
  title VARCHAR(255) NOT NULL,
  story_subtitle VARCHAR(255) NULL,
  short_summary TEXT NULL,
  introduction MEDIUMTEXT NULL,
  slug VARCHAR(255) NOT NULL,
  translation_status VARCHAR(40) NOT NULL,
  reviewed_by_user_id CHAR(26) NULL,
  reviewed_at DATETIME NULL,
  source_updated_at DATETIME NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  UNIQUE KEY uq_tour_locale (tour_id, locale),
  UNIQUE KEY uq_tour_slug_locale (locale, slug),
  KEY idx_tour_translation_status (translation_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

# 9. destinations

```sql
CREATE TABLE destinations (
  id CHAR(26) PRIMARY KEY,
  internal_key VARCHAR(100) NOT NULL UNIQUE,
  latitude DECIMAL(10,7) NULL,
  longitude DECIMAL(10,7) NULL,
  country_code CHAR(2) NULL,
  parent_destination_id CHAR(26) NULL,
  destination_type VARCHAR(40) NULL,
  active TINYINT(1) NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

# 10. destination_translations

```sql
CREATE TABLE destination_translations (
  id CHAR(26) PRIMARY KEY,
  destination_id CHAR(26) NOT NULL,
  locale VARCHAR(10) NOT NULL,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  short_description TEXT NULL,
  body MEDIUMTEXT NULL,
  practical_information MEDIUMTEXT NULL,
  translation_status VARCHAR(40) NOT NULL,
  reviewed_at DATETIME NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  UNIQUE KEY uq_destination_locale (destination_id, locale),
  UNIQUE KEY uq_destination_slug_locale (locale, slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

# 11. stories

```sql
CREATE TABLE stories (
  id CHAR(26) PRIMARY KEY,
  internal_key VARCHAR(100) NOT NULL UNIQUE,
  active TINYINT(1) NOT NULL DEFAULT 1,
  sort_order INT NOT NULL DEFAULT 0,
  hero_media_id CHAR(26) NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

# 12. story_translations

Fields:

- story_id
- locale
- name
- slug
- tagline
- description
- translation_status
- SEO title/meta if stored here or seo_meta

Use unique `(story_id, locale)`.

---

# 13. tour_destinations

```sql
CREATE TABLE tour_destinations (
  tour_id CHAR(26) NOT NULL,
  destination_id CHAR(26) NOT NULL,
  sequence INT NULL,
  visit_type VARCHAR(40) NULL,
  overnight TINYINT(1) NOT NULL DEFAULT 0,
  featured TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (tour_id, destination_id),
  KEY idx_td_destination (destination_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

# 14. tour_story_links

Fields:

- tour_id
- story_id
- is_primary
- sort_order

Unique tour/story pair.

Application/database rule should normally allow one primary Story per tour.

---

# 15. Itinerary Tables

`tour_itinerary_days` stores structural facts.

`tour_itinerary_translations` stores localized titles/descriptions.

Indexes:

- tour_id
- tour_id + sequence
- locale on translations

---

# 16. Inclusions & Exclusions

Use separate translation tables.

Do not store comma-separated values.

---

# 17. tour_price_rules

Suggested fields:

```text
id
tour_id
active
currency
pricing_basis
min_travelers
max_travelers
adult_amount
child_amount
infant_amount
group_amount
vehicle_amount
season_start
season_end
valid_from
valid_to
accommodation_class
room_type
priority
created_at
updated_at
```

Indexes:

- tour_id
- active
- valid_from/valid_to
- traveler range

---

# 18. Pricing Constraints

Application validation should prevent:

- min > max
- negative amounts
- unsupported currency
- ambiguous equal-priority overlapping active rules

MySQL constraints may be added where hosting/version permits, but server validation remains mandatory.

---

# 19. Price History

Store old/new JSON snapshots.

Use:

- changed_by
- reason
- effective_at
- created_at

History is append-only.

---

# 20. Booking Table

Suggested:

```sql
CREATE TABLE bookings (
  id CHAR(26) PRIMARY KEY,
  reference VARCHAR(30) NOT NULL UNIQUE,
  customer_id CHAR(26) NULL,
  tour_id CHAR(26) NULL,
  booking_type VARCHAR(40) NOT NULL,
  status VARCHAR(40) NOT NULL,
  payment_status VARCHAR(40) NOT NULL,
  locale VARCHAR(10) NOT NULL,
  travel_date DATE NULL,
  alternative_date DATE NULL,
  adult_count INT NOT NULL DEFAULT 0,
  child_count INT NOT NULL DEFAULT 0,
  infant_count INT NOT NULL DEFAULT 0,
  currency CHAR(3) NULL,
  quoted_total DECIMAL(12,2) NULL,
  final_total DECIMAL(12,2) NULL,
  price_status VARCHAR(40) NULL,
  assigned_user_id CHAR(26) NULL,
  source_page_url VARCHAR(2048) NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  cancelled_at DATETIME NULL,
  KEY idx_booking_reference (reference),
  KEY idx_booking_status (status),
  KEY idx_booking_travel_date (travel_date),
  KEY idx_booking_tour (tour_id),
  KEY idx_booking_customer (customer_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

# 21. Customer Table

Normalize email/phone.

Indexes:

- email_normalized
- phone_normalized

Do not make email required if operational flow allows phone-only customers.

---

# 22. Booking Price Lines

Store:

- description snapshot
- quantity
- unit amount
- total amount
- currency
- source rule

Historical records must not recalculate after tour price changes.

---

# 23. Booking Options

Use structured records.

Avoid one giant `booking_json` as the only representation.

JSON may store uncommon flexible details where necessary.

---

# 24. Booking Status History

Append-only.

Index:

- booking_id
- created_at

---

# 25. Quotes

`quotes` identifies the quote thread.

`quote_versions` stores immutable versions.

`quote_price_lines` stores each version's price breakdown.

---

# 26. Payments

Use fields:

- provider
- provider_transaction_id
- amount
- currency
- status
- payment_type
- paid_at
- safe_metadata JSON

Unique provider transaction ID where appropriate.

---

# 27. Refunds

Link to:

- payment
- booking

Store independent refund amount/status.

---

# 28. SEO Meta

Generic entity table is acceptable:

- entity_type
- entity_id
- locale
- title
- description
- canonical override
- index status
- social fields

Unique entity/type/locale.

---

# 29. Redirects

```sql
CREATE TABLE redirects (
  id CHAR(26) PRIMARY KEY,
  source_path VARCHAR(1024) NOT NULL,
  destination_path VARCHAR(2048) NOT NULL,
  status_code SMALLINT NOT NULL DEFAULT 301,
  reason VARCHAR(255) NULL,
  active TINYINT(1) NOT NULL DEFAULT 1,
  created_by_user_id CHAR(26) NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  UNIQUE KEY uq_redirect_source (source_path)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

# 30. Media

Do not store binaries in MySQL.

Store:

- storage key
- URL
- MIME
- dimensions
- rights
- focal point
- source

---

# 31. Reviews

Store only real reviews.

Index:

- tour_id
- moderation_status
- published_at

---

# 32. Fulltext Search

Where needed, MySQL FULLTEXT may cover:

- tour titles/summaries
- guide titles/body
- destination names/body

Start simple.

---

# 33. Foreign Keys

Use foreign keys where hosting supports them reliably.

Recommended behavior:

- RESTRICT destructive deletes
- archive instead of delete
- CASCADE translation/join records only where safe

Historical bookings must survive tour archival.

---

# 34. Soft Delete

Use `archived_at` for:

- tours
- customers when appropriate
- guides
- media
- destinations

Do not soft-delete audit/history tables.

---

# 35. Timestamps

Store UTC DATETIME.

Application converts to business/user timezone.

Travel dates use DATE.

---

# 36. Index Review

Important indexes:

- locale + slug
- booking reference
- booking status/date
- tour status
- tour price rules
- customer email/phone
- redirects source
- publish status

Use `EXPLAIN` on slow admin/report queries.

---

# 37. Migrations

Keep SQL migration files in source control.

Example:

```text
001_initial.sql
002_booking_indexes.sql
003_publish_workflow.sql
```

Do not manually change production schema without migration record.

---

# 38. Shared Hosting Constraints

Check:

- MySQL version
- max connections
- storage
- execution time
- import size
- cron access
- phpMyAdmin limitations

Design queries/pagination accordingly.

---

# 39. SQL Mode

Use sane strict SQL mode if hosting permits.

Avoid relying on silent truncation/coercion.

---

# 40. Backup

Before schema migration:

- database backup
- migration test
- rollback/forward plan

---

# 41. Final Principle

MySQL stores structured business truth.

PHP enforces the rules.

Next.js never needs direct database access in the browser.

The schema must make pricing, booking, German/English content and publishing predictable.
