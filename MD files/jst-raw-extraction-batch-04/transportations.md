# RAW SERVICE — Transportations

**Source URL:** https://jordanstorytours.com/tour/transportations/
**Extraction Status:** RAW_EXTRACTED
**SEO Rewrite:** NOT STARTED
**German:** NOT STARTED

## Existing Service
Jordan Story Tours currently advertises limousine/land transportation using cars, vans, medium and large buses, airport/border pickup and drop-off, and car-rental options.

## Published Price Matrix — Preserve as Legacy Data, Verify Before Launch

### Car — 1–3 Pax
| From | To | Legacy Price |
|---|---|---:|
| QAIA Airport | Amman | $50 |
| QAIA Airport | Dead Sea | $100 |
| QAIA Airport | Aqaba | $250 |
| QAIA Airport | King Hussein Bridge | $80 |
| QAIA Airport | Petra | $200 |

### Van — 1–6 Pax
| From | To | Legacy Price |
|---|---|---:|
| QAIA Airport | Amman | $80 |
| QAIA Airport | Dead Sea | $150 |
| QAIA Airport | Aqaba | $400 |
| QAIA Airport | King Hussein Bridge | $150 |
| QAIA Airport | Petra | $300 |

## Additional Published Table — Vehicle Headers Ambiguous
The live extraction exposes a second 5-row price table but does not preserve its vehicle-column labels clearly enough to map safely:

| From | To | Legacy Price A | Legacy Price B |
|---|---|---:|---:|
| QAIA Airport | Amman | $250 | $600 |
| QAIA Airport | Dead Sea | $350 | $800 |
| QAIA Airport | Aqaba | $500 | $1000 |
| QAIA Airport | King Hussein Bridge | $350 | $800 |
| QAIA Airport | Petra | $400 | $900 |

**Do not assign vehicle types to these two columns until rendered-DOM/manual business verification resolves the headers.**

## New Admin Requirement
Transportation prices must become editable database records:
- origin
- destination
- vehicle type
- passenger capacity
- one-way/return
- price
- currency
- active
- effective date
- notes

## Conflict / Verification
- All prices are legacy published prices and require business confirmation.
- “QAIA airport Amman” should be normalized to Queen Alia International Airport (QAIA).
- King Hussein Bridge transfer rules can be operationally sensitive and must be verified.
