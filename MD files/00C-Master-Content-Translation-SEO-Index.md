# Jordan Story Tours — Master Content, Translation & SEO/AEO/GEO Index

**Priority: CRITICAL**
**Public website:** English + German
**Admin dashboard:** English-only is acceptable.

## 1. Core Rule

The public website must be fully localized in English (`/en/`) and German (`/de/`). This includes tours, destinations, categories, Story Collections, guides, booking UI, validation, confirmations, navigation, policies, metadata, FAQs, meaningful alt text and structured-data text.

The admin interface itself does NOT need German translation. It only needs English controls that allow the administrator to edit both English and German public content.

German must use real crawlable URLs, not `?lang=de` or a client-side-only switch.

---

## 2. Source Priority

When content conflicts, follow:

1. Verified business/commercial data
2. `01-Existing-Website-Data-Audit.md` / extracted legacy facts
3. Approved production content under `01-content/`
4. Approved EN/DE localization
5. `04-SEO-AEO-GEO-Strategy.md`
6. `10-Multilingual-SEO.md`
7. `02-Brand-Story-Strategy.md`
8. Visual/implementation instructions (`00`, `00A`, `00B`)

Never invent prices, durations, availability, inclusions, exclusions, fees, hotels, guide languages, visa/border rules, policies or ratings.

---

## 3. File Map

### `01-Existing-Website-Data-Audit.md`
Source of truth for migration facts: existing tour inventory, programs, durations, categories, URLs, booking requirements, transportation/customized products and operational facts. Extract facts from it; do not blindly publish its wording.

### `01-content/`
Primary publishable content layer. Use the rewritten English/German content here for tours, destinations, categories, FAQs, Story copy and conversion content.

### `01-content/multi-day/`
Paired multi-day tour content. Expected pattern:

```text
<tour>-en.md
<tour>-de.md
```

Before publishing each pair, verify factual parity, itinerary, duration, destinations, inclusions/exclusions, CTA, German quality and independent German search intent.

### `01-content/tour-category-production.md`
Category-level production content for Day Tours, Budget, Classical, Luxury, Biblical/Holy Land, Islamic/Historical and private/customized tour groupings. Category pages require unique EN/DE copy, FAQs, internal links and search intent; never make them thin card lists.

### `02-Brand-Story-Strategy.md`
Controls the “Jordan Story” emotional/product layer and Story Collections. Story Collections complement SEO/operational categories; they do not replace them.

### `04-SEO-AEO-GEO-Strategy.md`
Controls page intent, semantic content, metadata, direct answers, FAQs, internal linking, entities, schema and crawlability. Treat as launch requirements.

### `10-Multilingual-SEO.md`
Controls EN/DE URLs, hreflang, localized titles/descriptions/slugs/body/FAQs/alt text/schema and translation status.

### `20-AI-Agent-Master-Instructions.md`
Master workflow:

```text
EXTRACT → NORMALIZE → VERIFY → REWRITE → LOCALIZE → OPTIMIZE → IMPORT → QA → PUBLISH
```

### `00-AI-Agent-Implementation-Reset-Walkthrough.md`
Implementation/design governance. Not a source of tour facts.

### `00A-Scroll-World...md`
3D/Scroll World behavior. Not a source of tour facts.

### `00B-Scroll-World-Hero-Chapters-Copy.md`
Exact public Scroll World hero narrative. Not a source of tour programs.

---

## 4. Required Working Indexes

Before mass page generation, create:

```text
docs/CONTENT-SOURCE-MAP.md
docs/SEO-KEYWORD-MAP.md
docs/TRANSLATION-STATUS.md
docs/CONTENT-VERIFICATION-QUEUE.md
docs/INTERNAL-LINK-MAP.md
```

`CONTENT-SOURCE-MAP.md` must record for every page:

```text
Page:
Locale:
Source Audit File:
Production Content File:
Commercial Data Source:
Gallery Source:
SEO Source:
Translation Source:
Verification Flags:
Status:
```

---

## 5. Keyword Research — NON-NEGOTIABLE

Do NOT choose keywords by intuition and do NOT translate English keywords into German.

For each important page and locale:

1. define page/product intent;
2. research current search-result language;
3. check official Jordan tourism terminology;
4. study current travel/tour-operator terminology;
5. identify primary, secondary and question query families;
6. inspect traveler questions/search intent;
7. check cannibalization against other JST pages;
8. assign one dominant intent to one canonical page;
9. record evidence and research date;
10. write naturally around the selected intent.

Keyword choices must be supported by research, relevance and page intent—not keyword density.

---

## 6. English Research Seeds

Research these as query families; do NOT blindly assign them:

```text
Jordan tours
private Jordan tours
Jordan private tours
Jordan tour packages
Jordan itinerary
Jordan multi day tours
Petra tours
Petra tour from Amman
Petra and Wadi Rum tour
Wadi Rum tours
Jordan luxury tours
Jordan biblical tours
Jordan day tours
Dead Sea tour from Amman
Jerash tour from Amman
custom Jordan tour
```

The agent must determine which JST page should own each intent.

---

## 7. German Research Seeds

Research German traveler language independently:

```text
Jordanien Rundreise
Jordanien Privatreise
Jordanien Reise
Jordanien Rundreisen
Jordanien individuell
Jordanien private Rundreise
Jordanien Reise mit Fahrer
Jordanien Urlaub
Petra Jordanien
Petra Tour
Petra Ausflug
Petra von Amman
Petra und Wadi Rum Rundreise
Wadi Rum Tour
Jordanien Wüstentour
Totes Meer Jordanien
Jordanien Kulturreise
Jordanien Luxusreise
Jordanien Rundreise 7 Tage
Jordanien Rundreise 8 Tage
Jordanien Reiseveranstalter
Jordanien deutschsprachiger Reiseleiter
```

These are research seeds only. Select terms by SERP evidence, actual product fit, intent, conversion potential and differentiation.

English and German may target different wording for the same product. Never force literal keyword equivalence.

---

## 8. `SEO-KEYWORD-MAP.md`

Required fields:

```text
Locale
Page
Page Type
Primary Query
Secondary Queries
Question Queries
Search Intent
Funnel Stage
Canonical URL
Competing JST Page
SERP Notes
Content Gap
Last Research Date
Status
```

Do not let two JST pages unintentionally compete for the same dominant intent.

---

## 9. Tour Content Workflow

For every tour:

1. Locate legacy/extracted facts.
2. Build structured fact sheet: ID, legacy URL, duration, destinations, itinerary days, price/status, inclusions, exclusions, transport, guide info, booking fields, gallery references, verification flags.
3. Produce/review English content while preserving facts.
4. Research English search intent and map keywords.
5. Localize into native-quality German, checking again against the verified facts.
6. Research German search intent independently.
7. Add useful AEO direct answers.
8. Make GEO/entity relationships explicit.
9. Build contextual internal links.
10. QA facts, language, metadata, schema, hreflang and conversion flow.

---

## 10. German Localization Standard

German must sound written for a German-speaking traveler, not translated sentence-by-sentence.

Verify:

- natural German travel vocabulary;
- correct facts/numbers/destinations;
- no English UI leftovers;
- native CTA wording;
- independent German title/meta optimization;
- `/de/` internal links;
- German FAQs;
- localized structured-data text;
- correct hreflang.

Do not mechanically translate Story slogans or SEO keywords.

---

## 11. Destination Content

Create complete EN/DE entity pages for important destinations such as Petra, Wadi Rum, Amman, Dead Sea, Jerash, Madaba, Mount Nebo, Aqaba, Ajloun, Umm Qais, Kerak and Little Petra where supported by the project inventory.

Each should clearly answer:

- What is it?
- Why visit?
- Where is it?
- How can a traveler visit?
- How much time is useful?
- Which JST tours include it?
- What practical information matters?
- Which related destinations/tours are relevant?

---

## 12. AEO

Important pages should answer real traveler questions directly before expanding.

Example:

**Can you visit Petra and Wadi Rum on the same Jordan tour?**

Start with a concise direct answer, then explain useful itinerary options and link to the appropriate tours.

Do not manufacture hundreds of low-value FAQs.

---

## 13. GEO

Make relationships explicit:

```text
Jordan Story Tours
→ offers Jordan tours/private tours
→ tours visit destinations
→ Petra relates to Petra tours + Petra/Wadi Rum itineraries
→ Wadi Rum relates to desert and multi-day itineraries
→ guides explain destinations and link to relevant products
```

Use consistent business facts, entity names, updated dates, author/reviewer information where appropriate and valid structured data.

---

## 14. Human-First SEO

Never keyword-stuff.

Bad:
`Jordan tours are the best Jordan tours for travelers looking for Jordan tour packages...`

Good:
`Explore Jordan on a private itinerary built around Petra, Wadi Rum, the Dead Sea and the country's historic northern cities.`

Use important terminology naturally in title, H1, opening copy, relevant headings, metadata and contextual internal anchors.

---

## 15. Homepage Search Strategy

The homepage should own broad brand/commercial intent rather than every destination term.

Research English clusters such as:

```text
Jordan tours
private Jordan tours
Jordan tour operator
Jordan private tours
```

Research German clusters such as:

```text
Jordanien Rundreise
Jordanien Privatreise
Jordanien Reiseveranstalter
Jordanien individuell
```

Petra, Wadi Rum, individual tours and specific intents need dedicated pages.

---

## 16. Story vs Search Architecture

Keep both:

```text
EMOTIONAL DISCOVERY
Jordan Story / Story Collections
        ↓
SEARCH ARCHITECTURE
Tours + Categories + Destinations + Guides
        ↓
CONVERSION
Tour Detail + Booking
```

Example:

`Desert Story → Wadi Rum destination → Petra & Wadi Rum tours → Wadi Rum guides`

Story creates desire. Search architecture creates discoverability. Tours create conversion.

---

## 17. German Indexing Gate

A `/de/` URL must not enter the production sitemap/index until:

- body content complete;
- facts match verified source;
- German localization reviewed;
- German keyword research complete;
- title/meta/H1 complete;
- canonical correct;
- reciprocal hreflang correct;
- localized internal links complete;
- schema localized where required;
- CTA and booking path localized;
- FAQs localized;
- no English placeholders remain.

---

## 18. Admin Content Model

Admin labels stay English, but public records need EN/DE fields:

```text
CONTENT
├── English: Title, Slug, Body, FAQ, CTA
└── German:  Title, Slug, Body, FAQ, CTA

SEO
├── English: SEO Title, Meta Description, Primary Query, Schema Text
└── German:  SEO Title, Meta Description, Primary Query, Schema Text
```

Do not waste development effort translating the admin interface.

---

## 19. Search Research Record

For important pages record:

```text
research_date
locale
primary_query_candidate
SERP patterns
official terminology
competitor terminology
question patterns
intent
final keyword decision
reason
```

Keyword decisions are research artifacts and should be reviewable later.

---

## 20. Verification Queue

Put uncertain facts in `CONTENT-VERIFICATION-QUEUE.md`, especially:

- current prices;
- seasonal availability;
- entrance fees;
- hotel selection;
- visa/border information;
- pickup restrictions;
- guide languages;
- booking/cancellation policies.

Never solve missing data by writing something plausible.

---

## 21. Publishing Gate

A page is ready only when all four layers pass:

```text
1. FACTUALLY VERIFIED
2. HUMAN-QUALITY EN/DE CONTENT
3. SEARCH-INTENT OPTIMIZED
4. TECHNICALLY INDEXABLE
```

A German translation without German search research is unfinished.
An SEO page with poor writing is unfinished.
A beautiful page with weak semantic/search architecture is unfinished.
A page with invented commercial facts is rejected.

---

# FINAL COMMAND TO AI AGENT

Treat the `.md` files as one pipeline:

```text
LEGACY / AUDIT DATA
        ↓
STRUCTURED VERIFIED FACTS
        ↓
ENGLISH PRODUCTION CONTENT
        ↓
ENGLISH SEARCH RESEARCH
        ↓
GERMAN LOCALIZATION
        ↓
GERMAN SEARCH RESEARCH
        ↓
AEO + GEO ENRICHMENT
        ↓
INTERNAL LINKS + SCHEMA
        ↓
QA
        ↓
PUBLISH
```

The public website is fully English + German.

The admin interface may remain English-only.

**Do not translate keywords. Research search intent independently in each language.**

Jordan Story Tours should rank because each page is a strong, useful, well-structured answer to a real traveler's intent—not because keywords were mechanically repeated.
