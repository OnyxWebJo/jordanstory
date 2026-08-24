# 31 — Live Site Extraction Inventory
## Jordan Story Tours — Phase 1 Working Dataset

**Status:** Active extraction.  
**Source:** https://jordanstorytours.com  
**Rule:** This file records discovered live inventory before SEO rewriting or German localization.

---

# 1. Main Public Architecture Discovered

The live navigation exposes:

- Home
- About Us
- Tours
  - Jordan Budget Tours
  - Biblical Tours
  - Classical Tours
  - Luxury Tours
  - Islamic & Historical Tours
- Day Tour
- Attractions
- Transportations
- Blog
- Contact Us

The site also exposes Custom Tour / recommended-tour entry points.

---

# 2. Multi-Day Tour Inventory

## Budget
- Budget Tour 1 — 3 Days / 2 Nights
- Budget Tour 2 — 3 Days / 2 Nights
- Budget Tour 3 — 4 Days / 3 Nights
- Budget Tour 4 — 4 Days / 3 Nights

## Classical
- Jordan Story Classic Tour 1
- Jordan Story Classic Tour 2

## Luxury
- Jordan Luxury Tour 1
- Jordan Luxury Tour 2
- Jordan Luxury Tour 3

## Islamic & Historical
- Islamic Tour — 6 Days / 5 Nights
- Islamic & Historical Tour — 5 Days / 4 Nights
- Islamic Jordan & Jerusalem Tour — detail extraction pending

## Biblical / Holy Land
- Jordan & Holy Land Tour 1 — detail extraction pending
- Jordan & Holy Land Tour 2 — 7 Days / 6 Nights
- Jordan & Holy Land Tour 3 — 7 Days / 6 Nights; visible starting price $1,000

---

# 3. Day Tour Inventory

Discovered:

- Jordan Tours from Amman — from $100
- Jerash & Ajlun
- Jerash, Ajlun & Um Qais
- Madaba & Mount Nebo — homepage from $75
- Madaba, Mount Nebo & Dead Sea — homepage from $135
- Baptism Site & Dead Sea — from $115
- Dead Sea & Wadi Mujib — from $150
- Trip to Petra Jordan 1 Day — homepage from $225
- Wadi Rum and Petra tour from Amman — from $275
- Amman – Aqaba – Amman — from $300
- Amman – Desert Castle – Amman — homepage from $135

---

# 4. Attractions / Destination Entities Discovered

- Amman City
- Ajloun Castle
- Al-Karak Castle
- Aqaba
- Baptism Site of Jesus Christ
- Citadel / Jebel Al Qala'a
- Dana Village
- Dead Sea
- Desert Castle
- Jerash
- Madaba
- Mount Nebo
- Petra / The Rose City
- Wadi Rum
- Umm Qais
- Jerusalem

These are migration entities, not yet final SEO taxonomy.

---

# 5. Core Booking Fields Observed

Across multiple tour detail pages:

1. Full Name*
2. Nationality*
3. Email Address*
4. Phone No.*
5. Travel Date*
6. No. of Persons*
7. Your Enquiry*
8. Terms of Service + Privacy Statement agreement*

Many day-tour pages also expose:

- Booking Form
- Enquiry Form
- Proceed Booking
- “The tour is not available yet.”

This requires careful redesign because the current site visually offers booking while simultaneously indicating unavailability.

---

# 6. Existing Story Brand Evidence

The live site already uses Story-oriented wording, including:

- “Our Story”
- “About Jordan Story”
- “Your Journey Starts Here”
- “Begin your Story”
- tour copy such as “Start your story in Jordan”

This validates keeping **Jordan Story** as part of the product experience rather than inventing an unrelated new brand concept.

---

# 7. Company Facts Observed — Verification Required

The current site states that Jordan Story Tours is associated with:

- Jordan Inbound Tour Operator Association (JITOA)
- Jordan Society of Travel and Tourist Agents (JSTA)
- Jordan Tourism Board (JTB)

Current public contact details observed:

- Phone: +96265522667
- Email: info@jordanstorytours.com

These must be independently/business verified before the redesigned site treats them as current trust claims.

---

# 8. First Important Data Quality Finding

Budget Tour 1 demonstrates why the migration must preserve structured facts. Its page includes operational claims such as:

- airport pickup/drop-off
- Jordan visa
- English-speaking driver
- 3-star accommodation
- daily breakfast
- Petra dinner
- guide condition based on group size
- entrance fees excluded

These must be extracted as protected fields rather than rewritten into general marketing copy.

---

# 9. Extraction Status

Completed so far:

- primary navigation inventory
- category inventory
- major tour inventory
- partial prices/durations
- destination/attraction inventory
- core booking form field pattern
- company/contact baseline

Still to extract systematically:

- every itinerary day
- all inclusions/exclusions
- all pricing details
- all tour-specific booking values
- exact input/select option values
- transport matrix
- custom-tour form
- blog/guide inventory
- media manifest
- metadata/canonical/schema per URL
- review records
- conflicts

---

# 10. Next Extraction Output

The next dataset should be:

**One raw `.md` record per tour**, preserving:
- source URL
- current title
- duration
- price
- exact itinerary
- inclusions
- exclusions
- booking fields
- media
- SEO
- conflicts

No optimization or German translation should begin until those raw records are captured.
