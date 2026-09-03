# 08 — Final Backend & Admin QA
## Jordan Story Tours

**Run before production launch.**

## 1. Tour CRUD

Test:

```text
create
save draft
edit
publish
unpublish
archive
restore
```

## 2. Pricing

Test all modes:

```text
FIXED
FROM
QUOTATION
```

Verify all four languages follow the same commercial facts.

## 3. Booking / Quote Switching

```text
priced + direct booking
→ booking form

quotation/no public price
→ request quote form
```

No stale CTA or price.

## 4. Historical Price Test

Create booking at Price A.

Change tour to Price B.

Confirm old booking remains Price A.

## 5. Quotation Conversion

Test:

```text
request
review
quote
accept
convert
price snapshot
```

## 6. Translation Integrity

Verify EN / DE / FR / IT cannot diverge on:

```text
price
duration
route
meals
accommodation
included/excluded
driver/guide conditions
booking mode
```

## 7. New Tour Publishing

Create a new tour.

Publish.

Confirm static pages are generated for intended locales.

## 8. Unpublish

Confirm removal from:

```text
catalogue
sitemap
related-tour blocks
internal navigation
```

## 9. Archive / Restore

Confirm archived tour retains:

```text
bookings
quotations
reviews
audit history
```

Restore should normally return to DRAFT.

## 10. Destinations

Test CRUD, translation, publish state and related-tour relationships.

## 11. Booking Operations

Test validation, status history, notes and customer-data access restrictions.

## 12. Quotations

Test all statuses, validity dates and accepted-price handling.

## 13. Reviews

Verify:

```text
secure token
submission
pending moderation
approval
public rendering
aggregate recalculation
```

No unapproved review may appear publicly.

## 14. Media

Test:

```text
upload
assign
reuse
localized alt text
delete warning
broken-reference protection
```

## 15. Publishing

Test:

```text
successful build
failed build
production remains intact
rollback
```

## 16. Security

Test:

```text
invalid login
rate limit
CSRF
unauthorized role access
SQL injection attempts
XSS input
file upload abuse
session expiry
```

## 17. Backups

Verify:

```text
backup produced
backup readable
restore procedure tested
```

## 18. API QA

Verify:

```text
correct status codes
consistent validation errors
no private fields in public responses
admin auth enforced
rate limits
```

## 19. Data Integrity

Check relationships:

```text
tour → category
tour → destinations
tour → itinerary
tour → bookings
tour → quotations
tour → reviews
```

No orphan business records.

## 20. Release Checklist

```text
[ ] Tour CRUD PASS
[ ] Pricing PASS
[ ] Booking mode PASS
[ ] Quotation mode PASS
[ ] Price snapshots PASS
[ ] Translation integrity PASS
[ ] New tour publishing PASS
[ ] Archive/restore PASS
[ ] Bookings PASS
[ ] Quotations PASS
[ ] Reviews PASS
[ ] Media PASS
[ ] Static publishing PASS
[ ] Rollback PASS
[ ] Roles PASS
[ ] Security PASS
[ ] Backups PASS
[ ] Public API privacy PASS
[ ] Audit logs PASS
```

# FINAL COMMAND

Do not launch the backend/admin until all business-critical workflows pass with real test data and at least one tested recovery path.
