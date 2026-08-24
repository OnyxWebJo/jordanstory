# Batch 06 — Booking Form Canonical Raw Schema

The current live tour pages repeatedly expose the following enquiry fields:

1. Full Name*
2. Nationality.*
3. Email Address*
4. Phone No.*
5. Travel Date*
6. No. of Persons*
7. Your Enquiry*
8. Terms of Service and Privacy Statement consent

## Raw JSON Shape

```json
{
  "full_name": {"required": true},
  "nationality": {"required": true},
  "email": {"required": true},
  "phone": {"required": true},
  "travel_date": {"required": true},
  "persons": {"required": true},
  "enquiry": {"required": true},
  "terms_privacy_consent": {"required": true}
}
```

## Important
The search-rendered representation shows Nationality and No. of Persons as input controls but does not reliably expose whether the original browser DOM implements them as free text, number, or select menus.

The rendered migration pass must inspect exact HTML/control types and option values.

## Booking-State Conflict
Some priced day-tour pages simultaneously display:
- a public starting price
- booking/proceed UI
- “The tour is not available yet.”

The new platform must not copy this contradictory state. Availability must become an explicit admin-controlled status.
