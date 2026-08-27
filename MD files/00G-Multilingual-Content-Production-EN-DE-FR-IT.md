# 00G — Multilingual Content Production
## Jordan Story Tours — English, German, French & Italian

**Priority:** CRITICAL
**Public languages:** EN / DE / FR / IT
**Admin language:** English only

## 1. Objective
The public website must be fully localized and search-optimized in English, German, French and Italian.

Do NOT treat DE/FR/IT as simple translations of English. Each language is its own travel-search market.

Pipeline:
`VERIFIED FACTS → EN CONTENT → EN SEARCH RESEARCH → DE LOCALIZATION + DE SEARCH RESEARCH → FR LOCALIZATION + FR SEARCH RESEARCH → IT LOCALIZATION + IT SEARCH RESEARCH → AEO/GEO → QA → PUBLISH`

## 2. Admin
Admin remains English-only, but must provide public content fields for EN/DE/FR/IT:
- title
- slug
- H1
- intro
- body
- itinerary narrative
- FAQs
- CTA
- SEO title
- meta description
- primary search intent
- supporting query cluster
- localized alt text where meaningful
- structured-data strings where applicable

Commercial facts remain shared fields.

## 3. Shared Commercial Facts
Price, currency, duration, nights, availability, itinerary sequence, destinations, inclusions, exclusions, gallery, booking status and transport facts should come from one shared structured source.

Do not maintain four independent copies.

## 4. English
Before using English as the localization source:
1. verify facts
2. humanize AI-sounding copy
3. complete media
4. research English search intent
5. resolve cannibalization
6. freeze approved English content

Research seeds:
`Jordan tours`, `private Jordan tours`, `Jordan tour packages`, `Jordan itinerary`, `Petra tour from Amman`, `Petra and Wadi Rum tour`, `Jordan day tours`, `Jordan luxury tours`, `Jordan biblical tours`, `custom Jordan tour`.

These are research seeds only.

## 5. German
Research independently:
`Jordanien Rundreise`, `Jordanien Privatreise`, `Jordanien individuell`, `Jordanien Reise`, `Jordanien Reiseveranstalter`, `Petra Jordanien`, `Petra Ausflug`, `Petra Tour ab Amman`, `Petra und Wadi Rum Rundreise`, `Wadi Rum Tour`, `Totes Meer Jordanien`, `Jordanien Kulturreise`, `Jordanien Luxusreise`, `Jordanien Rundreise 7 Tage`, `Jordanien Rundreise 8 Tage`, `deutschsprachiger Reiseleiter Jordanien`.

German copy must sound native. Do not literally translate “Story” everywhere.

## 6. French
French travel-result language commonly uses terms such as:
`circuit Jordanie`, `circuit en Jordanie`, `circuit privatif en Jordanie`, `voyage Jordanie`, `voyage privé Jordanie`, `Pétra`, `Wadi Rum`, `mer Morte`, `guide francophone`, `circuit culturel Jordanie`, `itinéraire Jordanie`.

Research seeds:
`circuit Jordanie`, `circuit Jordanie 7 jours`, `circuit Jordanie 8 jours`, `circuit privé Jordanie`, `circuit privatif Jordanie`, `voyage sur mesure Jordanie`, `voyage privé Jordanie`, `Pétra Jordanie`, `excursion Pétra depuis Amman`, `Pétra Wadi Rum`, `circuit Pétra Wadi Rum mer Morte`, `guide francophone Jordanie`, `voyage culturel Jordanie`.

Validate before assigning to pages.

## 7. French Style
Use natural French travel language like `circuit`, `voyage`, `itinéraire`, `séjour`, `circuit privatif`, `voyage sur mesure` where search intent supports it.

Example:
English: `Petra Day Tour from Amman`
Possible French localization: `Excursion à Pétra depuis Amman`
Final wording must be chosen after research.

## 8. Italian
Italian travel-result language commonly uses:
`tour Giordania`, `viaggio in Giordania`, `tour privato Giordania`, `viaggio individuale privato`, `guida in italiano`, `Petra`, `Wadi Rum`, `Mar Morto`, `itinerario Giordania`.

Research seeds:
`tour Giordania`, `tour Giordania 7 giorni`, `tour Giordania 8 giorni`, `viaggio Giordania`, `viaggio in Giordania`, `tour privato Giordania`, `viaggio privato Giordania`, `viaggio su misura Giordania`, `Petra Giordania`, `escursione Petra da Amman`, `Petra e Wadi Rum`, `tour Petra Wadi Rum Mar Morto`, `guida italiana Giordania`, `tour culturale Giordania`.

## 9. Italian Style
Use natural Italian travel language like `tour`, `viaggio`, `viaggio privato`, `viaggio su misura`, `itinerario`, `escursione`, `guida in italiano`.

Example:
English: `Build My Jordan Story`
Possible Italian brand localization: `Crea il tuo viaggio in Giordania`

## 10. Language-Specific Keyword Maps
Create:
- `docs/SEO-KEYWORD-MAP-EN.md`
- `docs/SEO-KEYWORD-MAP-DE.md`
- `docs/SEO-KEYWORD-MAP-FR.md`
- `docs/SEO-KEYWORD-MAP-IT.md`

Fields:
`URL | Page | Page type | Primary query | Secondary queries | Question queries | Intent | SERP notes | Competing JST page | Cannibalization risk | Title | H1 | Research date | Status`

Do not create a universal translated keyword list.

## 11. Same Product, Different Search Language
A 7-day private Jordan itinerary may map to:
EN: `private Jordan tour`
DE: `Jordanien Privatreise`
FR: `circuit privatif Jordanie`
IT: `tour privato Giordania`

Same product, different intent language.

## 12. Pages Requiring All Four Languages
Global:
- Homepage
- About
- Contact
- Tours directory
- Destinations directory
- Custom Tour
- Transportation if public
- Booking
- Review form
- required policies

Categories:
- Day Tours
- Budget
- Classical
- Luxury
- Biblical / Holy Land
- Islamic / Historical
- relevant Story Collections

Tours:
- every active public tour

Destinations:
- every active indexable destination

Guides:
- every guide/article selected for migration and indexation

## 13. Tour Localization
Each active tour needs EN/DE/FR/IT pages.

All four use the same structured commercial facts.

Narrative copy and keyword targeting are localized independently.

Do not alter route, duration, stops, inclusion, exclusion or price through translation.

## 14. Itinerary Localization
Preserve:
- day number
- destination sequence
- overnight location
- included activities
- travel structure

Do not add stops during localization.

## 15. Destination Localization
For each locale, research how travelers describe the destination and what questions they ask.

Use verified current facts only.

## 16. AEO by Language
Do not mechanically translate English FAQs if search behavior differs.

Research native questions, answer directly, then explain.

## 17. GEO by Language
Entity relationships remain constant:
`Jordan Story Tours → Tour → Destination`
but descriptive language and query context differ.

Keep business identity and product relationships consistent.

## 18. Scroll World Localization
Visual sequence is shared.

Hero media must contain NO baked text.

Public overlay copy must have EN/DE/FR/IT versions.

Story structure remains:
`Opening → Chapter 01 Petra → Treasury reveal → transition → Chapter 02 Wadi Rum → Choose Your Jordan Story`

Preserve emotional meaning, not literal sentence structure.

## 19. Navigation
Every locale must have fully localized navigation.

No mixed-language header.

Language selector:
`EN | DE | FR | IT`

When switching languages, send the visitor to the equivalent page when available.

## 20. Booking
Booking UI must be localized in four languages.

Store:
`preferred_language = en | de | fr | it`

Admin remains English.

Confirmation messages use the booking language.

## 21. Reviews
Follow `00E`.

Review invitation and review form support EN/DE/FR/IT.

## 22. Media
Image binary is shared.

Localized media fields may include:
`alt_en`, `alt_de`, `alt_fr`, `alt_it`, `caption_en`, `caption_de`, `caption_fr`, `caption_it`.

## 23. URL Architecture
Use:
`/en/`
`/de/`
`/fr/`
`/it/`

Possible conceptual localized paths:
`/en/tours/...`
`/de/touren/...`
`/fr/circuits/...`
`/it/tour/...`

Exact taxonomy should be deliberate and stable.

## 24. Hreflang
For complete page clusters:
`en | de | fr | it | x-default`

All equivalents reference each other reciprocally.

Do not output hreflang targets for incomplete translations.

## 25. Canonical
Each localized page should generally canonicalize to itself.

Do NOT canonicalize DE/FR/IT pages to English if they are valid translations.

## 26. Sitemap
Only complete indexable translations belong in sitemaps.

Possible:
`sitemap-en.xml`
`sitemap-de.xml`
`sitemap-fr.xml`
`sitemap-it.xml`

## 27. Translation Status
Create `docs/TRANSLATION-STATUS.md`

Track:
`Page | EN | DE | FR | IT | Fact parity | SEO research | Metadata | FAQ | Internal links | Schema | QA | Published`

## 28. No Indexing of Incomplete Translations
A translated page stays draft/non-indexable until:
- complete
- factual parity checked
- native-quality localization complete
- search research done
- metadata complete
- internal links localized
- hreflang ready
- booking/CTA localized
- schema ready
- no English placeholders

## 29. Production Order
Recommended:
1. finish English foundation
2. audit/complete German
3. research French
4. produce French
5. French QA
6. research Italian
7. produce Italian
8. Italian QA
9. final four-language hreflang/schema/sitemaps
10. final crawl

## 30. Quality Standard
No language should look like a secondary translation.

Standard:
`native-quality language + verified facts + market-specific search intent + Jordan Story brand + useful traveler answers + conversion`

# FINAL COMMAND TO AI AGENT

The site is NOT:
`English website + three translations`

It is:
`One Jordan Story Tours product with four localized search experiences`

Research English travelers in English.
Research German-speaking travelers in German.
Research French-speaking travelers in French.
Research Italian-speaking travelers in Italian.

Share facts, tours, pricing, media and product structure.

Localize language, search intent, FAQs, metadata and user experience independently.

Do not translate keywords.
Do not invent commercial facts.
Do not publish incomplete language pages.

Every language must be strong enough to rank and convert on its own.
