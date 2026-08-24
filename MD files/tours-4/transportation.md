# Transportation — Source Record

- Legacy URL: `/tour/transportations/`
- Product type: Private transfers / transportation
- Migration: **REBUILD AS SERVICE + ADMIN-MANAGED PRICE MATRIX**

## Existing Booking Fields
Full Name; Nationality; Email; Phone; Travel Date; **From dropdown**; **To dropdown**; Number of Persons; Enquiry; Terms/Privacy consent.

## Existing Published Transfer Matrix

| From | To | Car 1–3 pax | Van 1–6 pax | Mercedes 1–3 pax | Bus up to 50 pax |
|---|---|---:|---:|---:|---:|
| QAIA Airport Amman | Amman | $50 | $80 | $250 | $600 |
| QAIA Airport Amman | Dead Sea | $100 | $150 | $350 | $800 |
| QAIA Airport Amman | Aqaba | $250 | $400 | $500 | $1,000 |
| QAIA Airport Amman | King Hussein Bridge | $80 | $150 | $350 | $800 |
| QAIA Airport Amman | Petra | $200 | $300 | $400 | $900 |

## Existing Service Description — Facts to Preserve
The site offers cars, minivans, medium/large buses, airport/border pickup and drop-off, and mentions car-rental options.

## Critical Redesign Recommendation
Do not hard-code this table in page content. Store:
- origin
- destination
- vehicle type
- passenger capacity
- one-way price
- currency
- active/inactive
- effective date
- notes

in the admin database.

The booking form should calculate/display an applicable transfer quote from admin-managed records.

## Audit Flags
Verify every 2026 price before migration. Verify whether “Mercedes” is a vehicle class/model promise, whether prices include taxes, waiting time, luggage rules, child seats, night surcharge, border waiting, and whether car rental remains offered.

## Story Brand
Transportation should remain functional rather than overly poetic. Suggested section language: **“Your Story Starts the Moment We Pick You Up.”**
