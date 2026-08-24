# 08 — Booking System
## Jordan Story Tours — English + German

**Purpose:** Define a simple multi-step booking/request system connected to tour data, pricing, customer records, admin operations and reporting.

**Important:** Existing Jordan Story Tours booking fields and option values must be extracted from the current website before implementation. This document defines the target architecture; extracted operational values remain the source material and must not be invented.

---

# 1. Booking Philosophy

Booking should feel like the final chapter of the Story experience:

**Discover → Understand → Check Availability → Send Journey Request → Confirmation → Admin Follow-up**

The form must be fast and practical. Do not carry heavy 3D into booking.

---

# 2. Booking Type

The system must explicitly distinguish:

## Request / Check Availability
Use when availability or price still needs human confirmation.

## Confirmed Booking
Use only when inventory, pricing, payment and confirmation logic genuinely support instant confirmation.

At launch, do not imply instant confirmation unless the business workflow supports it.

Primary CTA:

**Check Availability**

German:

**Verfügbarkeit prüfen**

---

# 3. Entry Points

Booking can begin from:

- Tour page
- Homepage featured tour
- Story Collection
- Destination page
- Search results/listing
- Interactive Jordan map
- Custom Tour
- Transportation page
- Contact CTA
- Admin-created booking

Tour context must be preserved automatically.

---

# 4. Multi-Step Flow

Recommended tour flow:

## Step 1 — Your Journey
Tour, date, travelers and relevant trip options.

## Step 2 — Trip Details
Pickup, accommodation/options and tour-specific questions.

## Step 3 — Traveler Details
Lead traveler contact information and country/language.

## Step 4 — Review & Send
Summary, pricing basis, policies, consent and submission.

Do not create unnecessary steps merely for visual effect.

---

# 5. Progress Indicator

English:

**1 Journey → 2 Details → 3 Traveler → 4 Review**

German:

**1 Reise → 2 Details → 3 Reisende → 4 Prüfen**

Final German UX wording should receive native review.

Progress must be accessible and understandable without color alone.

---

# 6. Step 1 — Your Journey

Core fields:

- Tour — preselected when arriving from a tour page
- Preferred travel date
- Alternative date — optional
- Number of adults
- Number of children
- Child ages where pricing/operations require
- Number of infants if required
- Tour type/private/shared if selectable
- Return/one-way where relevant
- pricing option/tier where applicable

Do not ask again for information already known from the source page.

---

# 7. Date Rules

Admin controls:

- bookable weekdays
- minimum advance notice
- seasonal dates
- blackout dates
- unavailable dates
- request-only periods

The date picker must not claim live availability unless backed by actual inventory.

If the selected date requires confirmation, say so clearly.

---

# 8. Traveler Counts

Support configurable limits per tour:

- minimum travelers
- maximum travelers
- adults
- children
- infants

Pricing logic must use the same definitions as admin pricing.

Never infer child age bands; extract/confirm them.

---

# 9. Step 2 — Trip Details

Fields are conditional by tour.

Possible fields:

- Pickup location
- Pickup hotel
- Pickup address/details
- Pickup time where selectable
- Drop-off location
- Hotel/accommodation category
- Room type
- Number of rooms
- Guide option
- Guide language
- Meal preference
- Dietary requirements
- Optional activities
- Airport transfer
- Flight number
- Arrival/departure time
- Border crossing information where relevant
- Special requests

Only show fields that the selected tour needs.

---

# 10. Pickup Location

Preferred UX:

1. select common pickup type/location
2. reveal detail field if necessary

Examples may include:
- Amman hotel
- Queen Alia International Airport
- Dead Sea hotel
- Aqaba hotel
- Custom location

Actual supported values must come from Jordan Story Tours operations.

Do not create unsupported pickup promises.

---

# 11. Flight Fields

Show only for airport-related journeys.

Possible:
- airline
- flight number
- arrival/departure date
- scheduled time
- origin/destination airport

Do not require flight data for ordinary tours.

---

# 12. Accommodation Fields

For tours where customers choose accommodation:

- category
- room occupancy
- single/double/twin/triple
- number of rooms
- upgrade
- special request

Options and supplements come from admin data.

---

# 13. Guide Language

Guide-language dropdown values must be extracted/verified.

Public website language and guide language are separate concepts.

Example:
A customer browsing German may still select an English-speaking guide.

Do not automatically promise German-speaking guides merely because the website has German content.

---

# 14. Optional Extras

Optional extras should be generated from the selected tour.

Each extra:
- title EN
- title DE
- description EN
- description DE
- price
- price basis
- applicable traveler types
- availability
- active/inactive

Selection updates estimated price only when pricing is deterministic.

---

# 15. Step 3 — Traveler Details

Lead traveler:

- First name
- Last name
- Email
- Phone
- WhatsApp number if separate/required
- Country of residence
- Nationality only when operationally necessary
- Preferred communication language
- Optional notes

Avoid collecting unnecessary personal information.

---

# 16. Phone / WhatsApp

Use international dialing format.

Store:
- country code
- normalized phone
- WhatsApp preference/number if provided

Do not assume every phone number is on WhatsApp.

---

# 17. Preferred Language

Options at launch:

- English
- German

This controls:
- confirmation email
- admin language indicator
- follow-up template
- booking summary language

It does not guarantee guide language.

---

# 18. Step 4 — Review

Display:

- tour
- date
- travelers
- route
- selected options
- pickup/drop-off
- accommodation
- estimated/final price status
- customer contact
- special requests
- applicable policy
- consent

Allow **Edit** for each section without clearing the form.

---

# 19. Price Status

Every booking must label the price state.

Possible:

## Confirmed Price
Only when deterministic and final.

## Estimated Price
When some details may change it.

## From Price
Not a quote.

## Price on Request
When admin must calculate.

Never show an estimated value as a guaranteed final total.

---

# 20. Price Calculation

Server-side calculation is authoritative.

Inputs may include:

- tour
- date/season
- adults
- children
- traveler tier
- private/shared
- accommodation
- room configuration
- optional extras
- supplements
- discounts
- admin overrides

Never trust a total submitted by the browser.

---

# 21. Booking Reference

After successful submission create a unique reference.

Example format concept:

`JST-2026-XXXXX`

Exact format is configurable.

Reference appears:
- confirmation screen
- email
- admin dashboard
- internal notes
- later payment records

---

# 22. Booking Statuses

Recommended:

- New Request
- Reviewing
- Awaiting Customer
- Availability Confirmed
- Quote Sent
- Awaiting Payment
- Deposit Paid
- Confirmed
- In Progress
- Completed
- Cancelled
- Declined
- Expired

Admin may refine this workflow.

Avoid vague status names.

---

# 23. Status History

Every change stores:

- old status
- new status
- admin/user
- timestamp
- optional note

Do not overwrite history.

---

# 24. Customer Confirmation Screen

English example:

# Your Jordan Story Is Taking Shape.

**Thank you. We received your request for [Tour].**

Show:
- booking reference
- selected date
- travelers
- tour
- next step
- contact method
- return-to-tour/home CTA

Do not say “Your booking is confirmed” if it is only a request.

German gets a natural localized equivalent.

---

# 25. Customer Email

Immediately send:

- reference
- tour
- date
- travelers
- selected options
- submitted contact data
- price status
- next step
- contact details
- policy link where relevant

Language follows booking language.

---

# 26. Admin Notification

New booking/request should notify configured staff.

Possible channels:
- admin dashboard
- email
- optional WhatsApp integration later

Notification contains:
- reference
- tour
- date
- travelers
- customer
- language
- price/status
- source

Do not expose unnecessary sensitive data in notification previews.

---

# 27. Admin Booking List

Columns/filters:

- Reference
- Created
- Travel Date
- Customer
- Tour
- Travelers
- Language
- Country
- Price
- Status
- Source
- Assigned To

Filters:
- date range
- travel date
- status
- tour
- Story
- destination
- language
- country
- source
- assigned staff

---

# 28. Booking Detail

Admin sees:

- complete journey
- traveler contact
- pricing breakdown
- options
- source/UTM
- communication language
- internal notes
- status history
- emails/notifications log
- payment records if implemented
- changes
- assigned employee

---

# 29. Admin Actions

Possible:

- change status
- assign staff
- add internal note
- edit journey
- adjust price
- send quote
- resend confirmation
- send customer message/email
- mark deposit/payment
- cancel
- duplicate booking
- export/print summary

All meaningful changes should be auditable.

---

# 30. Quote System

For request-based tours, admin can prepare a quote.

Quote includes:

- booking reference
- tour
- dates
- travelers
- itinerary/options
- accommodation
- inclusions
- exclusions
- total
- currency
- validity date
- deposit requirement
- cancellation terms
- notes

Support EN + DE customer-facing output.

---

# 31. Quote Versions

Recommended:

- Quote v1
- Quote v2
- Quote v3

Store history rather than overwriting the prior quote.

This is important for customized trips.

---

# 32. Custom Tour Flow

Custom Tour CTA:

**Build My Jordan Story**

German localized naturally.

Suggested steps:

1. Dates & Duration
2. Travelers
3. Places & Interests
4. Travel Style
5. Accommodation
6. Contact
7. Review

Keep it conditional and concise.

---

# 33. Custom Tour — Dates

Fields:

- arrival date
- departure date
- flexible dates?
- number of days auto-calculated
- arrival airport/location
- departure airport/location

---

# 34. Custom Tour — Places

Selectable verified destinations:

- Amman
- Jerash
- Ajloun
- Umm Qais
- Madaba
- Mount Nebo
- Baptism Site
- Dead Sea
- Wadi Mujib
- Karak
- Shobak
- Petra
- Wadi Rum
- Aqaba
- Desert Castles

Admin controls active destinations.

---

# 35. Custom Tour — Interests

Possible:

- Ancient History
- Desert
- Culture
- Religious / Biblical
- Islamic Heritage
- Adventure
- Food
- Nature
- Relaxation
- Red Sea
- Photography
- Family
- Luxury

These map naturally to Story Collections.

---

# 36. Custom Tour — Travel Style

Possible:

- Essential
- Comfortable
- Premium
- Luxury

Final labels and meaning must be defined by the business.

Do not use vague classes without explaining what they influence.

---

# 37. Custom Tour — Budget

Budget may be:

- optional range
- per person
- total trip
- “Not sure”

Do not force budget disclosure if Jordan Story Tours does not need it.

---

# 38. Story Recommendation

After custom-tour selections, the UI may say:

**Your journey feels like The Ancient Story + The Desert Story.**

This is a recommendation/branding layer.

It must not change factual pricing or availability.

---

# 39. Transportation Booking

If transportation is offered separately, use a dedicated conditional form.

Potential fields:
- pickup
- destination
- date
- time
- passengers
- luggage
- flight
- return transfer
- vehicle requirement
- contact
- notes

Actual locations/options must be extracted from existing services.

---

# 40. Existing Booking Form Extraction

Before coding final dropdowns, crawl/extract every booking entry point from the current site.

For each field store:

- page/tour URL
- field label
- field type
- required?
- option values
- default
- conditional rule
- validation
- price effect
- English wording
- existing translated wording if any
- notes

No current option value should be silently lost.

---

# 41. Booking Field Registry

Create a master field registry.

Example:

```text
field_key: pickup_location
type: select
scope: selected tours
required: true
options_source: admin
translation: EN + DE
affects_price: false
```

This prevents different tours from creating inconsistent copies of the same field.

---

# 42. Conditional Form Engine

Examples:

If:
`pickup_type = airport`

Then show:
- flight number
- arrival time

If:
`accommodation_required = yes`

Then show:
- hotel category
- room configuration

If:
`children > 0`

Then show:
- child ages

Conditions should be data-driven where practical.

---

# 43. Validation

Validate client-side for UX and server-side for security.

Examples:
- valid email
- valid date
- traveler count
- required fields
- phone normalization
- allowed option IDs
- price recalculation

Never trust hidden form values.

---

# 44. Spam / Abuse Protection

Use low-friction protection:

- honeypot
- rate limiting
- server validation
- CSRF protection where applicable
- bot challenge only when needed

Avoid CAPTCHA friction unless abuse requires it.

---

# 45. Privacy

Collect only operationally useful information.

Required:
- privacy notice
- consent where legally necessary
- retention policy
- secure admin access
- no sensitive data in URLs
- no payment-card data stored directly by Jordan Story Tours unless using compliant infrastructure

---

# 46. Payment Architecture

If online payment is added:

- use a reputable payment provider
- tokenize/card data stays with provider
- server verifies payment result
- store transaction reference/status, not raw card data

Possible payment states:

- Not Required
- Awaiting Deposit
- Deposit Paid
- Partially Paid
- Paid
- Refunded
- Failed

Provider selection is a separate business/technical decision.

---

# 47. Deposit

Per tour/admin rule:

- no deposit
- fixed deposit
- percentage deposit
- full payment

Store:
- required amount
- currency
- due date
- paid amount
- remaining amount

---

# 48. Discounts

Admin-controlled only.

Possible:
- promo code
- fixed discount
- percentage
- booking-level manual adjustment

Store:
- reason
- code
- applied by
- value
- timestamp

Do not allow arbitrary client-side discount logic.

---

# 49. Cancellation

Cancellation record:

- requested by
- date
- reason
- policy
- refund status
- refund amount
- admin notes

Preserve original booking record.

---

# 50. Booking Changes

If customer/admin changes:
- date
- travelers
- hotel
- options

Recalculate price and store revision history.

Do not silently alter an accepted quote.

---

# 51. Email Templates

Required EN + DE:

- Request Received
- Availability Confirmed
- Need More Information
- Quote Sent
- Payment Request
- Deposit Received
- Booking Confirmed
- Booking Updated
- Reminder
- Cancellation
- Post-Tour Review Request

Admin can edit approved template content.

---

# 52. German Customer Experience

German must cover:

- all labels
- dropdown values
- validation
- errors
- booking summary
- price labels
- policies
- emails
- quote
- confirmation
- status explanations

Do not send English system messages into a German booking journey.

---

# 53. Admin Translation Management

Each configurable public option supports:

- EN label
- DE label

Examples:
- pickup locations
- accommodation classes
- optional extras
- guide languages
- meal options
- tour types

If German label is missing, flag it before publishing.

---

# 54. Attribution

Capture:

- landing page
- booking source page
- tour
- Story
- destination
- language
- referrer
- UTM source
- UTM medium
- UTM campaign
- UTM content
- UTM term
- identifiable AI/referral source where available

Use first-party-safe analytics practices.

---

# 55. Booking Analytics

Track:

- booking_start
- step_1_complete
- step_2_complete
- step_3_complete
- booking_submit
- form_error
- custom_tour_start
- custom_tour_submit

Analyze drop-off by step, device and language.

---

# 56. Business Reports

Dashboard:

- total requests
- confirmed bookings
- conversion rate
- booking value
- confirmed revenue
- outstanding balances
- cancellations
- top tours
- top destinations
- top Story Collections
- EN vs DE
- source/channel
- country
- average party size
- average booking value
- lead-to-confirmation time

---

# 57. German Market Reporting

Dedicated views:

- German booking starts
- German submissions
- German confirmed bookings
- German conversion
- German revenue
- top German landing pages
- top tours booked in German
- German customer countries
- German campaign performance

---

# 58. Customer Record

A customer profile may consolidate repeat bookings by normalized email/phone.

Store only appropriate information:

- name
- contact
- preferred language
- country
- booking history
- internal notes where legitimate
- consent/preferences

Avoid unnecessary profiling.

---

# 59. Duplicate Detection

Warn admin if a new request appears to match an existing request by:

- email
- phone
- same tour/date
- recent submission

Do not automatically delete duplicates.

---

# 60. Admin Roles

Potential permissions:

## Super Admin
All booking/configuration access.

## Booking Manager
Bookings, quotes, customers, reports.

## Booking Agent
Assigned bookings, quotes and communication.

## Content Manager
Tours/content; no sensitive booking access unless granted.

## Finance
Payments/refunds/revenue.

Use least privilege.

---

# 61. Audit Log

Record important admin actions:

- status change
- price override
- booking edit
- quote issue
- payment status
- cancellation
- export
- permission change

---

# 62. Export

Admin may export filtered bookings to CSV/Excel-compatible format.

Fields should respect role permissions.

Do not export unnecessary private data by default.

---

# 63. Search

Admin booking search:

- reference
- customer name
- email
- phone
- tour
- date

Fast search is important operationally.

---

# 64. Notes

Two note types:

## Internal Note
Staff only.

## Customer-Facing Note
Included in quote/message where explicitly selected.

Never accidentally expose internal notes.

---

# 65. Attachments

Optional admin/customer attachments may support:

- itinerary PDF
- quote
- voucher
- hotel confirmation
- relevant travel document where genuinely required

Use secure private storage.

Do not make customer documents publicly accessible.

---

# 66. Voucher

After confirmation, optional voucher may contain:

- booking reference
- tour
- date
- travelers
- pickup
- contact
- included services
- emergency/support details
- QR/reference if useful

Support EN + DE.

---

# 67. Reminder System

Potential scheduled reminders:

- upcoming payment
- upcoming tour
- missing information
- quote expiry

Do not spam.

Admin should control templates/timing.

---

# 68. Post-Tour

After completion:

- thank-you email
- review request
- optional feedback
- related future Story/tour suggestions

Respect marketing consent requirements.

---

# 69. Booking SEO

Booking steps themselves usually should not be search landing pages.

Use appropriate indexing rules for:
- booking flow
- confirmation
- private quote/payment URLs

Never index customer-specific pages.

---

# 70. Performance

Booking should use minimal JavaScript compared with the homepage 3D.

Requirements:
- quick first interaction
- preserve state between steps
- no full-page reload where unnecessary
- resilient submission
- accessible date/select components
- mobile-first

---

# 71. Save Progress

For long custom-tour forms, optional local/session save may preserve progress.

Do not store sensitive data indefinitely in browser storage.

---

# 72. Failure Handling

If submission fails:

- preserve entered data
- explain clearly
- allow retry
- offer direct contact
- log technical failure without exposing internals

EN + DE.

---

# 73. Database Entities

Conceptual:

- bookings
- booking_travelers
- booking_options
- booking_status_history
- booking_price_lines
- booking_notes
- booking_messages
- quotes
- quote_versions
- payments
- refunds
- customers
- tour_availability
- tour_price_rules
- optional_extras
- form_field_definitions
- form_option_definitions

Exact schema belongs in the technical/database file.

---

# 74. API / Server Rules

Server must:

- verify tour exists
- verify active options
- validate date
- validate traveler limits
- recalculate price
- sanitize inputs
- create reference
- save attribution
- send notifications
- return clear localized result

Do not accept browser-calculated totals as authoritative.

---

# 75. Existing Data Migration

When extracting current bookings/forms:

1. preserve every field
2. preserve dropdown values
3. preserve required/optional status
4. identify fields duplicated across forms
5. identify pricing effects
6. identify obsolete fields
7. identify tour-specific fields
8. map into master field registry
9. obtain client approval before removing anything
10. create German equivalents

---

# 76. Acceptance Checklist

Before launch:

- [ ] existing booking fields extracted
- [ ] dropdown values preserved/approved
- [ ] conditional logic tested
- [ ] price calculations tested server-side
- [ ] tour context preserved
- [ ] mobile flow tested
- [ ] EN tested
- [ ] DE tested
- [ ] validation localized
- [ ] confirmation wording accurate
- [ ] admin receives request
- [ ] customer receives email
- [ ] reference generated
- [ ] status history works
- [ ] attribution captured
- [ ] duplicate warning tested
- [ ] spam protection tested
- [ ] privacy reviewed
- [ ] booking/confirmation pages protected from indexing where appropriate
- [ ] failure recovery tested

---

# 77. Final Booking Principle

The cinematic website creates desire.

The tour page creates understanding.

The booking system removes uncertainty.

The customer should feel:

**“I know what I am requesting, what happens next, and Jordan Story Tours has my journey.”**
