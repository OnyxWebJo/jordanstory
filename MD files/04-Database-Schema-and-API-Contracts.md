# 04 — Database Schema & API Contracts
## Jordan Story Tours

**Stack:** MySQL + PHP API + Next.js static export

## 1. Core Tables

```text
admins
roles
admin_roles
tour_categories
tour_category_translations
tours
tour_translations
tour_itinerary_days
tour_itinerary_day_translations
destinations
destination_translations
tour_destinations
tour_inclusions
tour_exclusions
tour_meals
tour_media
tour_faqs
tour_faq_translations
bookings
booking_status_history
quotation_requests
quotation_status_history
reviews
media
media_translations
site_settings
publish_jobs
audit_logs
```

## 2. Tours

```text
id BIGINT PK
slug VARCHAR UNIQUE
category_id FK
status ENUM
featured BOOLEAN
duration_days INT
duration_nights INT
price_mode ENUM(FIXED,FROM,QUOTATION)
price_amount DECIMAL NULL
currency CHAR(3)
price_unit ENUM(PER_PERSON,PER_GROUP,PER_VEHICLE,CUSTOM)
booking_mode ENUM(DIRECT_BOOKING,QUOTATION)
sort_order INT
published_at DATETIME NULL
archived_at DATETIME NULL
created_at DATETIME
updated_at DATETIME
```

## 3. Tour Translations

```text
id
tour_id
locale ENUM(en,de,fr,it)
title
short_description
description
highlights_json
seo_title
seo_description
og_title
og_description
created_at
updated_at

UNIQUE(tour_id, locale)
```

## 4. Itinerary

```text
tour_itinerary_days
-------------------
id
tour_id
day_number
overnight_destination_id NULL
sort_order
```

```text
tour_itinerary_day_translations
-------------------------------
id
itinerary_day_id
locale
title
description
```

## 5. Destinations

```text
destinations
------------
id
slug
status
latitude NULL
longitude NULL
featured
sort_order
published_at
archived_at
created_at
updated_at
```

```text
destination_translations
------------------------
destination_id
locale
name
short_description
content
seo_title
seo_description
```

## 6. Commercial Relationships

Use structured relationships where practical:

```text
tour_destinations
tour_inclusions
tour_exclusions
tour_meals
```

Do not use translated free text as the only source of commercial truth.

## 7. FAQs

```text
tour_faqs
---------
id
tour_id
faq_type
source_field
sort_order
status
```

```text
tour_faq_translations
---------------------
faq_id
locale
question
answer
```

## 8. Bookings

```text
id
public_reference
tour_id
customer_name
email
phone
whatsapp
locale
travel_date
adults
children
special_requests
price_snapshot
currency_snapshot
price_unit_snapshot
status
created_at
updated_at
```

## 9. Quotations

```text
id
public_reference
tour_id
locale
customer_name
email
phone
whatsapp
nationality NULL
country_of_residence NULL
arrival_date NULL
departure_date NULL
preferred_tour_date NULL
adults
children
rooms NULL
hotel_preference NULL
special_requests
preferred_contact_method NULL
quoted_price NULL
quoted_currency NULL
quote_valid_until NULL
status
assigned_admin_id NULL
created_at
updated_at
```

## 10. Reviews

```text
id
booking_id
tour_id
locale
reviewer_name
country NULL
rating INT
review_text
status
secure_token_hash
submitted_at
moderated_by NULL
moderated_at NULL
created_at
updated_at
```

## 11. Media

```text
media
-----
id
path
mime_type
width
height
file_size
checksum
status
created_at
```

```text
media_translations
------------------
media_id
locale
alt_text
caption
```

## 12. Audit Logs

```text
id
admin_id
entity_type
entity_id
action
old_value_json
new_value_json
ip_address NULL
created_at
```

## 13. API Prefixes

```text
/api/admin/*
/api/public/*
```

JSON responses only.

## 14. Public API

```text
GET  /api/public/tours
GET  /api/public/tours/{slug}
GET  /api/public/tours/{slug}/pricing
GET  /api/public/destinations
POST /api/public/bookings
POST /api/public/quotations
POST /api/public/reviews/{token}
```

## 15. Admin API

```text
POST /api/admin/login
POST /api/admin/logout

GET  /api/admin/tours
POST /api/admin/tours
GET  /api/admin/tours/{id}
PUT  /api/admin/tours/{id}
POST /api/admin/tours/{id}/publish
POST /api/admin/tours/{id}/archive
POST /api/admin/tours/{id}/restore

GET /api/admin/bookings
PUT /api/admin/bookings/{id}

GET /api/admin/quotations
PUT /api/admin/quotations/{id}

GET /api/admin/reviews
POST /api/admin/reviews/{id}/approve
POST /api/admin/reviews/{id}/reject
```

## 16. Validation

```text
FIXED/FROM requires price_amount
QUOTATION may have null price
published tour requires valid EN content
duration_days >= 1
duration_nights >= 0
rating = 1..5
```

## 17. Locale Consistency

Localized response = shared facts + selected translation.

Never store different commercial pricing or duration per locale.

## 18. Security

Use:

```text
prepared statements
strict validation
authenticated admin routes
CSRF protection where session-based
rate limiting
secure password hashing
output encoding
```

# FINAL COMMAND

The database must enforce one factual commercial source shared across all languages and preserve historical business records.
