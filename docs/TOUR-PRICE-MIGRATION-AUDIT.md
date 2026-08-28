# Tour Price Migration Audit

**Document Purpose:** Reconcile all legacy tour catalogue prices against the new multlingual platform database. Prevent invented prices, enforce explicit `PRICE_MODE` (`FIXED`, `FROM`, `QUOTATION`), and guarantee strict baseline alignment.

---

## 1. Summary Matrix

| Tour ID | Tour Title | Legacy URL / Product Baseline | Legacy Public Price | New Price Mode | New Booking Mode | New Starting Price | Migration Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `budget-tour-1` | Budget Tour 1 — Petra, Dead Sea & Jerash | Budget Tour 1 | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `budget-tour-2` | Budget Tour 2 — Amman, Jerash, Madaba, Petra & Dead Sea | Budget Tour 2 | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `budget-tour-3` | Budget Tour 3 — 4-Day Complete Northern & Southern Highlights | Budget Tour 3 | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `budget-tour-4` | Budget Tour 4 — Petra, Wadi Rum Desert & Dead Sea | Budget Tour 4 | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `jordan-classic-1` | Jordan Story Classic 1 — Amman, Petra, Madaba, Dead Sea & Jerash | Jordan Story Classic Tour 1 | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `jordan-classic-2` | Jordan Story Classic 2 — 7-Day Grand Expedition | Jordan Story Classic Tour 2 | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `jordan-luxury-1` | Jordan Luxury Tour 1 — Heritage & 5-Star Serenity | Jordan Luxury Tour 1 | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `jordan-luxury-2` | Jordan Luxury Tour 2 — 7-Day Royal Deluxe Journey | Jordan Luxury Tour 2 | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `jordan-luxury-3` | Jordan Luxury Tour 3 — 8-Day Royal Heritage & Red Sea | Jordan Luxury Tour 3 | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `holy-land-1` | Jordan Holy Land Tour 1 — 6-Day Sacred Trail | Jordan & Holy Land Tour 1 | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `holy-land-2` | Jordan & Holy Land Tour 2 — Biblical Pilgrimage | Jordan & Holy Land Tour 2 | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `holy-land-3` | Jordan Holy Land Tour 3 — 8-Day Complete Pilgrimage | Jordan & Holy Land Tour 3 | `From $1,000` | `FROM` | `DIRECT_BOOKING` | `$1,000 USD` | `VERIFIED` |
| `islamic-tour-1` | Islamic Heritage Tour — Companions Tombs & Battlefields | Islamic Tour | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `islamic-historical-tour` | Islamic & Historical Jordan Tour — 6 Days | Islamic & Historical Tour | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `day-tour-baptism-deadsea` | Baptism Site & Dead Sea Day Excursion | Baptism Site & Dead Sea | `From $115` | `FROM` | `DIRECT_BOOKING` | `$115 USD` | `VERIFIED` |
| `day-tour-deadsea-mujib` | Dead Sea & Wadi Mujib Canyon Adventure | Dead Sea & Wadi Mujib | `From $150` | `FROM` | `DIRECT_BOOKING` | `$150 USD` | `VERIFIED` |
| `day-tour-petra-rum-express` | Wadi Rum & Petra Express Day Safari from Amman | Wadi Rum and Petra tour from Amman | `From $275` | `FROM` | `DIRECT_BOOKING` | `$275 USD` | `VERIFIED` |
| `day-tour-jerash-ajloun` | Jerash & Ajloun Castle Day Excursion | Jerash & Ajlun | None | `QUOTATION` | `QUOTATION` | `null` | `VERIFIED` |
| `day-tour-petra-express` | Petra Rose City Express Day Tour from Amman | Trip to Petra Jordan 1 Day | `From $225` | `FROM` | `DIRECT_BOOKING` | `$225 USD` | `VERIFIED` |
| `day-tour-madaba-nebo-deadsea` | Madaba, Mount Nebo & Dead Sea Day Tour | Madaba, Mount Nebo & Dead Sea | `From $135` | `FROM` | `DIRECT_BOOKING` | `$135 USD` | `VERIFIED` |

---

## 2. Verification Protocol & Business Logic

1. **Zero Invented Prices**:
   - Products without a verified legacy public price default to `priceMode = QUOTATION` and `bookingMode = QUOTATION`.
   - Displays localized CTA **"Request a Quote" / "Preis anfragen" / "Demander un devis" / "Richiedi un preventivo"**.
   - Suppresses `$0`, `$399`, or arbitrary fallback price tags.

2. **Verified Legacy Prices**:
   - Explicitly preserved starting prices (`$115`, `$135`, `$150`, `$225`, `$275`, `$1,000`).
   - Mode set to `FROM` and `DIRECT_BOOKING`.

3. **Data Model Architecture**:
   - Every tour defines explicit `priceMode`, `bookingMode`, and nullable `startingPriceUSD`.
   - `getTourPriceDisplay(tour, locale)` renders localized strings dynamically across `EN`, `DE`, `FR`, and `IT`.
