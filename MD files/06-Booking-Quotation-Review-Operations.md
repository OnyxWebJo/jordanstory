# 06 — Booking, Quotation & Review Operations
## Jordan Story Tours

## 1. Direct Booking Flow

```text
DIRECT_BOOKING tour
→ traveller selects date/details
→ booking submitted
→ booking stored
→ admin notified
→ admin confirms
→ status progresses
```

## 2. Booking Fields

Recommended:

```text
tour
locale
travel date
full name
email
phone
WhatsApp
adults
children
special requests
consent
```

Collect only necessary information.

## 3. Booking Price Snapshot

Store at booking creation:

```text
price_snapshot
currency_snapshot
price_unit_snapshot
```

Later tour price changes do not alter historical bookings.

## 4. Quotation Flow

```text
QUOTATION tour
→ Request a Quote
→ traveller submits trip details
→ quotation stored
→ admin reviews
→ owner enters quoted amount
→ quote sent
→ customer accepts
→ quotation converted to booking
```

## 5. Quote Fields

Useful:

```text
tour
locale
name
email
phone
WhatsApp
arrival date
departure date
preferred tour date
adults
children
rooms
hotel preference
special requests
preferred contact method
```

## 6. Quote Conversion

```text
quotation.status = CONVERTED_TO_BOOKING
booking created
accepted quote copied to booking snapshot
quotation reference retained
```

## 7. Booking Statuses

```text
NEW
CONFIRMED
IN_PROGRESS
COMPLETED
CANCELLED
REFUNDED
```

## 8. Quote Statuses

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

## 9. Internal Notes

Internal admin notes must never be visible publicly.

## 10. Customer Communication

Prepare localized communications:

```text
booking confirmation
quotation message
quotation follow-up
review request
```

for EN / DE / FR / IT.

## 11. Review Trigger

Only a completed booking may initiate the normal review-request flow.

```text
booking = COMPLETED
→ admin sends review request
```

## 12. Secure Review URL

Use random secure token.

Store token hash.

Do not expose raw DB identifiers.

## 13. Review Submission

Customer may submit:

```text
rating
review text
name
country optional
```

Tour and booking are pre-associated.

## 14. Moderation

```text
PENDING
→ APPROVED / REJECTED
```

Only approved reviews are public.

## 15. Aggregate Rating

Calculate only from approved genuine reviews.

Never seed fake ratings.

## 16. WhatsApp Review Request

Generate localized WhatsApp text and secure review link according to booking language.

# FINAL COMMAND

Booking, quotation and review workflows must be operationally connected, historically traceable and locale-aware.
