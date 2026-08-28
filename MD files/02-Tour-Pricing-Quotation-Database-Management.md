# 02 — Tour Pricing, Quotation Mode & Database-Driven Tour Management
## Jordan Story Tours

**Priority:** CRITICAL  
**Purpose:** Preserve legacy pricing behavior, prevent invented prices, and make tours manageable from the admin backend.

---

# 1. Core Decision

Tours must be database-driven.

The owner must be able to:

- add a new tour
- edit a tour
- publish/unpublish a tour
- archive a tour
- restore an archived tour
- edit the price
- remove the price
- switch a tour between direct booking and quotation/enquiry mode
- edit itinerary, inclusions, exclusions, images, FAQs and translations
- keep historical bookings/quotations linked to the original tour record

Do NOT hardcode the tour catalogue in frontend source files.

---

# 2. Legacy Pricing Must Be Preserved First

Before launch, compare every price on the new website against the old website.

Never invent a price because a new design needs one.

The old site currently shows priced and unpriced products.

## Verified legacy priced examples

```text
Amman – Desert Castle – Amman        From $135
Amman – Aqaba – Amman                From $300
Wadi Rum and Petra tour from Amman   From $275
Trip to Petra Jordan 1 Day           From $225
Dead Sea & Wadi Mujib                From $150
Baptism Site & Dead Sea              From $115
Madaba, Mount Nebo & Dead Sea        From $135
Madaba & Mount Nebo                  From $75
Jerash, Ajlun & Um Qais              From $140
Jordan Tours from Amman              From $100
Islamic Jordan & Jerusalem Tour      From $1,500
Jordan & Holy Land Tour 3            From $1,000
```

These values must be reconciled with each individual legacy tour page before final migration.

## Legacy products currently shown without public price

The old catalogue currently exposes no public `From $...` value for products including:

```text
Jerash & Ajlun
Islamic & Historical Tour
Islamic Tour
Budget Tour 1
Budget Tour 2
Budget Tour 3
Budget Tour 4
Jordan Luxury Tour 1
Jordan Luxury Tour 2
Jordan Luxury Tour 3
Jordan Story Classic Tour 1
Jordan Story Classic Tour 2
Jordan & Holy Land Tour 1
Jordan & Holy Land Tour 2
```

These must NOT receive invented fixed prices in the new website.

Their initial migration mode should be:

```text
PRICE_MODE = QUOTATION
```

unless the owner explicitly provides a current price.

---

# 3. Pricing Model

Do not use only a nullable `price` field.

Use explicit fields.

Recommended:

```text
price_mode:
    FIXED
    FROM
    QUOTATION

price_amount:
    decimal nullable

currency:
    USD by default

price_unit:
    PER_PERSON
    PER_GROUP
    PER_VEHICLE
    CUSTOM

booking_mode:
    DIRECT_BOOKING
    QUOTATION

price_status:
    ACTIVE
    HIDDEN
```

---

# 4. Recommended Automatic Behavior

Default behavior:

```text
IF price_mode == FIXED or FROM
AND price_amount exists
AND booking_mode == DIRECT_BOOKING

THEN
    show price
    show booking form
```

```text
IF price_mode == QUOTATION
OR price_amount is null
OR booking_mode == QUOTATION

THEN
    hide public price
    hide direct booking form
    show quotation request form
```

This matches the owner's desired workflow.

---

# 5. Admin UX

On the tour editor show a clear section:

```text
PRICING & SALES MODE

Pricing:
( ) Fixed Price
( ) From Price
( ) Request Quotation

Price:
[________]

Currency:
[USD]

Price basis:
[Per Person ▼]

Customer action:
[Book Now / Request a Quote]
```

If admin chooses `Request Quotation`:

- price input becomes optional/disabled
- public price disappears
- booking CTA becomes `Request a Quote`
- quotation form appears automatically

If admin enters/re-enables a price:

- owner can choose whether to return to direct booking
- do not silently change historical quotations

---

# 6. Important Improvement Over Null-Price Logic

A missing price should DEFAULT to quotation mode, but do not make `NULL price` the only control.

Why:

A tour may have an internal/admin price but still require quotation publicly.

Therefore keep:

```text
price_mode
booking_mode
```

as explicit fields.

---

# 7. Quotation Form

For quotation-only tours, use a dedicated traveller form.

Recommended fields:

```text
tour_id
tour_name
language
full_name
email
phone
WhatsApp
nationality
country_of_residence
arrival_date
departure_date
preferred_tour_date
adults
children
children_ages
rooms
hotel_preference
special_requests
preferred_contact_method
consent
```

Only show fields useful to the business.

Do not ask for unnecessary personal information.

---

# 8. Quotation Backend Workflow

Status:

```text
NEW
IN_REVIEW
QUOTED
CUSTOMER_REPLIED
ACCEPTED
DECLINED
EXPIRED
CONVERTED_TO_BOOKING
```

Admin quotation record:

```text
quotation_id
tour_id
customer details
travel details
request message
requested_at
assigned_admin
internal_notes
quoted_price
quoted_currency
quote_valid_until
status
created_at
updated_at
```

---

# 9. Owner Sends Price Later

Admin opens quotation and enters:

```text
Quoted price
Currency
Price basis
Validity date
Message
```

The system should preserve:

```text
original traveller request
owner quotation
date/time
status history
```

Optional later enhancement:
email/WhatsApp quotation delivery.

---

# 10. Converting a Quotation to Booking

When traveller accepts:

```text
quotation
→ CONVERTED_TO_BOOKING
→ booking record created
```

Store the accepted quoted price on the booking itself.

Do NOT later recalculate that booking from the tour's current public price.

---

# 11. Price Snapshots

Critical rule:

Bookings and quotations must store price snapshots.

Example:

```text
tour current price = $300

customer booked yesterday at = $275

admin changes tour to = $325
```

The old booking remains:

```text
$275
```

Never rewrite past bookings when a tour price changes.

---

# 12. Tour Database Architecture

Recommended `tours` table:

```text
id
slug
category_id
status
featured
price_mode
price_amount
currency
price_unit
booking_mode
duration_days
duration_nights
sort_order
created_at
updated_at
published_at
archived_at
```

Do not put all multilingual text directly into this table.

---

# 13. Tour Translation Table

Recommended:

```text
tour_translations
-----------------
id
tour_id
locale
title
short_description
description
highlights
included_title
excluded_title
seo_title
seo_description
og_title
og_description
```

Locales:

```text
en
de
fr
it
```

Commercial facts remain shared.

Translations contain only locale-specific wording.

---

# 14. Structured Itinerary

Recommended separate tables:

```text
tour_itinerary_days
tour_itinerary_day_translations
```

Example:

```text
tour_itinerary_days:
id
tour_id
day_number
overnight_destination_id
```

Translation:

```text
locale
title
description
```

This helps prevent different routes across languages.

---

# 15. Includes / Excludes / Meals / Destinations

Prefer relationships instead of duplicating free text when practical.

Example:

```text
tour_destinations
tour_inclusions
tour_exclusions
tour_meals
tour_media
tour_faqs
tour_faq_translations
```

The goal is one factual source shared by all languages.

---

# 16. Tour Lifecycle

Never permanently delete a tour by default.

Statuses:

```text
DRAFT
PUBLISHED
UNPUBLISHED
ARCHIVED
```

Recommended behavior:

### DRAFT
Admin is editing it.

### PUBLISHED
Visible publicly.

### UNPUBLISHED
Hidden publicly but retained.

### ARCHIVED
Retired historical product.

This protects bookings, reviews and quotations.

---

# 17. Restore Tour

Archived tours must be restorable.

Admin:

```text
Tours
→ Archived
→ Restore
```

Restoring should NOT automatically publish it.

Recommended:

```text
ARCHIVED
→ restore
→ DRAFT
```

Owner reviews facts/price before publishing again.

---

# 18. Adding a New Tour

Admin should be able to create:

```text
Basic information
Category
Duration
Destinations
Itinerary
Accommodation
Meals
Included
Excluded
Driver/guide
Pricing mode
Price
Booking/quotation mode
Gallery
FAQs
SEO
Translations
```

The system generates/validates the slug.

---

# 19. Static Next.js Important Constraint

The current frontend uses Next.js static export.

That means a brand-new database tour cannot automatically gain a new static page URL without a build/deploy step.

Recommended architecture:

```text
MySQL + PHP Admin/API
        ↓
Published tour data
        ↓
Next.js build
        ↓
Static EN/DE/FR/IT pages
        ↓
Deployment
```

Therefore admin needs a clear publishing workflow:

```text
SAVE
PUBLISH CHANGES
```

`PUBLISH CHANGES` should trigger the site's rebuild/deployment process.

Do not rely only on client-side API fetching for important tour SEO pages.

---

# 20. Faster Price Changes

Price is more dynamic than full SEO content.

Two acceptable approaches:

## Option A — Rebuild on every price change
Best consistency.

```text
admin changes price
→ publish
→ build
→ deploy
```

## Option B — Hybrid
Static page contains tour content, while the pricing/booking widget reads current price/mode from the PHP API.

This allows:

```text
price removal
→ quotation mode immediately
```

without rebuilding the whole site.

Recommended for this project:

**Hybrid pricing widget + static SEO tour content.**

But:
- never display stale static price elsewhere
- tour cards/homepage must use the same current pricing source or be rebuilt
- structured data must not advertise a stale price

---

# 21. Price Display Rules

`FIXED $300`

Display:

```text
$300
```

or appropriate localized label.

`FROM $300`

Display:

```text
From $300
Ab $300
À partir de 300 $
Da $300
```

`QUOTATION`

Display localized:

```text
Request a Quote
Preis anfragen
Demander un devis
Richiedi un preventivo
```

Do NOT display:

```text
$0
0 Price
Price unavailable
```

---

# 22. Booking vs Quotation CTA

Priced/direct:

```text
Book This Tour
```

Quotation:

```text
Request a Quote
```

Do not send quotation tours into a normal price-based booking form.

---

# 23. Catalogue Cards

Cards must also respect pricing mode.

Example:

```text
Budget Tour 1
3 Days / 2 Nights
Request a Quote
```

NOT:

```text
Budget Tour 1
$399
```

unless owner explicitly adds $399.

---

# 24. Homepage / Search / Related Tours

Every component must read the same pricing state.

No hardcoded prices in:

```text
homepage
tour cards
recommended tours
search
destination-related tours
route calculator
schema
booking page
FAQ
```

---

# 25. Migration Audit

Create:

```text
docs/TOUR-PRICE-MIGRATION-AUDIT.md
```

Fields:

```text
legacy_tour
legacy_url
legacy_public_price
legacy_price_type
new_tour
new_url
new_public_price
new_price_type
match
action
owner_verification
```

Status:

```text
MATCH
NEW_PRICE_INVENTED
PRICE_MISMATCH
LEGACY_QUOTATION_NEW_PRICED
LEGACY_PRICED_NEW_QUOTATION
NEEDS_OWNER_CONFIRMATION
```

---

# 26. Known Legacy Starting Matrix

Use the old public catalogue as migration baseline.

```text
PRICED / FROM
-------------------------------
Amman – Desert Castle – Amman      135
Amman – Aqaba – Amman              300
Wadi Rum and Petra from Amman      275
Petra 1 Day                         225
Dead Sea & Wadi Mujib              150
Baptism Site & Dead Sea            115
Madaba/Mt Nebo/Dead Sea            135
Madaba & Mt Nebo                    75
Jerash/Ajlun/Um Qais               140
Jordan Tours from Amman            100
Islamic Jordan & Jerusalem         1500
Jordan & Holy Land Tour 3          1000
```

```text
NO PUBLIC PRICE / QUOTATION BASELINE
------------------------------------
Jerash & Ajlun
Islamic & Historical Tour
Islamic Tour
Budget Tour 1
Budget Tour 2
Budget Tour 3
Budget Tour 4
Luxury Tour 1
Luxury Tour 2
Luxury Tour 3
Classic Tour 1
Classic Tour 2
Jordan & Holy Land Tour 1
Jordan & Holy Land Tour 2
```

Recheck individual legacy pages before marking migration `VERIFIED`.

---

# 27. Admin Safety

Before changing a published tour from quotation → priced:

show:

```text
You are about to publish a public price.
```

Before priced → quotation:

show:

```text
The public price and direct booking form will be removed.
Travellers will see the quotation form instead.
```

This prevents accidental pricing changes.

---

# 28. Audit Log

Record important admin changes:

```text
tour created
tour published
tour archived
price changed
price removed
booking mode changed
quotation mode changed
commercial inclusions changed
```

Store:

```text
admin
old value
new value
timestamp
```

---

# 29. SEO Rules

Quotation-only tours remain fully indexable.

They should still have:

```text
full tour content
itinerary
included/excluded
FAQ
destinations
gallery
metadata
internal links
```

A missing public price does NOT mean a thin page.

Do not add fake Offer pricing to structured data.

If a tour has no public price, schema must not invent one.

---

# 30. Final Acceptance Rules

```text
[ ] every legacy public price reconciled
[ ] no invented prices
[ ] legacy no-price tours default to quotation
[ ] admin can add/edit/remove price
[ ] removing public price switches CTA/form
[ ] quotation requests stored in database
[ ] admin can quote later
[ ] accepted quote can convert to booking
[ ] bookings keep historical price snapshot
[ ] tours stored in database
[ ] translations separated from shared commercial facts
[ ] admin can add new tours
[ ] admin can unpublish/archive/restore tours
[ ] deletion does not destroy booking history
[ ] static export publishing workflow accounted for
[ ] all four locales respect same pricing mode
```

---

# FINAL COMMAND TO AI AGENT

The legacy website is the migration baseline for public pricing.

Do not invent prices.

A tour with no verified public price must operate in quotation mode until the owner adds one.

Tour content and commercial facts must be stored centrally in the database.

The owner must be able to change pricing mode without code changes.

**Priced tour → booking flow.  
Quotation tour → enquiry/quotation flow.  
Database → single source of truth.**
