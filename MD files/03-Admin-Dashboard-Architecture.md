# 03 — Admin Dashboard Architecture
## Jordan Story Tours

**Purpose:** Define the administrative control center for tours, pricing, quotations, bookings, destinations, translations, reviews, media, publishing, and audit history.

## 1. Main Modules

```text
Dashboard
Tours
Tour Categories
Destinations
Bookings
Quotation Requests
Reviews
Media Library
Translations
SEO / Metadata
Publishing
Users / Roles
Audit Log
Settings
```

## 2. Dashboard

Show practical operational metrics:

```text
Published tours
Draft tours
Quotation-mode tours
New bookings
New quotations
Pending reviews
Tours missing translations
Tours missing pricing decisions
Recent admin activity
Recent publish status
```

## 3. Tours

Each tour must support:

```text
Basic information
Category
Status
Featured
Duration
Destinations / route
Day-by-day itinerary
Accommodation
Meals
Included
Excluded
Driver / guide rules
Entrance fees
Special activities
Pricing mode
Price
Booking mode
Gallery
FAQs
SEO
Translations
Publishing state
```

Statuses:

```text
DRAFT
PUBLISHED
UNPUBLISHED
ARCHIVED
```

Do not permanently delete tours by default.

## 4. Tour List

Columns:

```text
Tour
Category
Duration
Price Mode
Price
Booking Mode
Languages
Status
Last Updated
Actions
```

Filters:

```text
Category
Status
Price Mode
Booking Mode
Featured
Missing Translation
Archived
```

## 5. Pricing

```text
Price Mode:
FIXED
FROM
QUOTATION

Price Amount
Currency
Price Unit

Booking Mode:
DIRECT_BOOKING
QUOTATION
```

Behavior:

```text
QUOTATION
→ hide public price
→ hide direct booking
→ show Request a Quote

FIXED/FROM + DIRECT_BOOKING
→ show public price
→ show booking form
```

Changing price or sales mode must be audited.

## 6. Shared Facts vs Localized Content

Shared commercial facts:

```text
duration
nights
route
destinations
accommodation category
meal rules
included / excluded
driver / guide conditions
entrance fee status
price
booking mode
```

Localized fields:

```text
title
description
highlights
itinerary prose
FAQ wording
SEO title
meta description
CTA wording
```

Languages:

```text
EN
DE
FR
IT
```

Localized editors must never create conflicting commercial facts.

## 7. Categories

Manage:

```text
name
slug
translations
description
sort order
status
SEO
```

## 8. Destinations

Admin can create, edit, publish, unpublish, archive and restore destinations.

Fields include:

```text
slug
status
hero
gallery
summary
full content
practical planning
FAQs
SEO
translations
```

Related tours should derive from `tour_destinations` whenever possible.

## 9. Bookings

List:

```text
Booking ID
Customer
Tour
Travel Date
Party Size
Price Snapshot
Currency
Status
Created
Assigned Admin
```

Statuses:

```text
NEW
CONFIRMED
IN_PROGRESS
COMPLETED
CANCELLED
REFUNDED
```

Tour price changes must never rewrite old booking prices.

## 10. Quotations

Statuses:

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

Admin can assign, add notes, enter quote, set validity, send, accept, decline, and convert.

## 11. Reviews

Statuses:

```text
PENDING
APPROVED
REJECTED
HIDDEN
```

Only approved genuine reviews render publicly.

Review request flow:

```text
Completed booking
→ Send Review Request
→ choose language
→ secure URL
→ customer submits
→ moderation
```

## 12. Media

Manage:

```text
images
tour galleries
destination galleries
hero media
localized alt text
usage references
dimensions
file size
status
```

Warn before removing media used on published pages.

## 13. Publishing

Actions:

```text
Save Draft
Publish Changes
Unpublish
Archive
Restore
```

Show pending changes requiring static rebuild.

## 14. Settings

Centralize:

```text
business identity
registration reference
address
phone
WhatsApp
email
default currency
supported languages
booking settings
quotation settings
review settings
email settings
```

## 15. Audit Log

Track:

```text
admin
entity
action
old value
new value
timestamp
```

Critical events include pricing, booking mode, publish state, commercial facts, reviews, business identity and admin permissions.

# FINAL COMMAND

The admin dashboard is the operational source of truth. It must let the owner manage products without code changes while protecting historical records and multilingual fact consistency.
