# Booking + Custom Tour Forms

## Legacy Booking Fields to Preserve
- Full Name*
- Nationality*
- Email Address*
- Phone*
- Travel Date*
- No. of Persons*
- Your Enquiry*
- Terms/Privacy consent*

Rendered migration must still confirm exact legacy input/select types and option lists.

## Recommended New Multi-Step Booking UX
### Step 1 — Your Trip
tour, travel date, persons
### Step 2 — Traveler
name, nationality, email, phone/WhatsApp
### Step 3 — Details
special request/enquiry; optional pickup/hotel fields only when product needs them
### Step 4 — Review & Consent
summary, privacy/terms, submit

## Custom Tour
Recommended new-design fields must be labeled NEW_DESIGN_FIELD until legacy custom form recovery is complete:
- arrival/departure dates
- adults/children
- destinations of interest
- trip style
- accommodation preference
- airport transfer
- special interests
- notes

## Submission
Save to MySQL first; then send notification email/WhatsApp workflow as configured. Never rely on WhatsApp alone as the database of record.

## Anti-spam
Server validation, rate limiting, honeypot and/or privacy-conscious challenge where necessary.
