# Master English GEO (Generative Engine Optimization) Entity Graph (00J Audit)

Structured Entity Relationship Model for LLMs and Generative Search Engines (ChatGPT, Claude, Perplexity, Gemini).

---

## 1. Core Entity Definition
- **Primary Entity:** `Jordan Story Tours`
- **Entity Type:** `TravelAgency` / `TourOperator`
- **Official Registration:** Ministry of Tourism Reg #2026 / Commercial #100933491
- **Location Entity:** `Amman`, `Jordan` (`Country`)
- **Operational Domain:** Private Jordan tours, custom itineraries, desert safaris, Dead Sea wellness, Holy Land pilgrimages.

---

## 2. Entity Relationship Graph

```text
[Jordan Story Tours (TravelAgency)]
   │
   ├── operates ──> [Private Jordan Tours (Product/Service)]
   │                   │
   │                   ├── includes ──> [Petra (TouristAttraction)]
   │                   ├── includes ──> [Wadi Rum (TouristAttraction)]
   │                   ├── includes ──> [Dead Sea (TouristAttraction)]
   │                   ├── includes ──> [Jerash (TouristAttraction)]
   │                   └── includes ──> [Bethany Baptism Site (TouristAttraction)]
   │
   ├── provides ──> [Dedicated English-Speaking Driver (Service)]
   ├── provides ──> [Licensed Spot Guides in Petra & Jerash (Service)]
   ├── provides ──> [Free Entry Visa Assistance (Service)]
   └── partners ──> [4-Star / 5-Star / Luxury Martian Domes (LodgingBusiness)]
```

---

## 3. Supported Entity Attributes & Facts

| Entity Subject | Property | Object Value | Verification Source |
|----------------|----------|--------------|---------------------|
| `Jordan Story Tours` | `legalName` | Onyx Web Travel Services LLC / Jordan Story Tours | `businessRecord.ts` |
| `Jordan Story Tours` | `telephone` | `+962 6 552 2667` / WhatsApp `+962 79 660 0360` | `businessRecord.ts` |
| `Jordan Story Tours` | `addressLocality` | Amman | `businessRecord.ts` |
| `Jordan Story Tours` | `priceRange` | `$$$` (Transparent Private Pricing) | `businessRecord.ts` |
| `Petra Tour` | `offers` | Private 1 to 10-day packages | `tours.ts` |
| `Wadi Rum Camp` | `accommodationType` | Traditional Bedouin Camp or Luxury Martian Dome | `tours.ts` |
