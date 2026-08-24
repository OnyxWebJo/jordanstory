# 10 — Multilingual SEO
## Jordan Story Tours — English + German

**Purpose:** Define the complete bilingual implementation for English and German across SEO, AEO, GEO, UX, booking, structured data, content operations and reporting.

**Launch languages:** English + German

---

# 1. Core Principle

German is not a translation widget.

The German website must behave like a real German travel website with:

- dedicated URLs
- German navigation
- German search intent
- German titles/meta
- German body content
- German FAQs
- German booking UX
- German transactional emails
- German structured-data strings
- German internal links
- German sitemaps
- correct hreflang
- translation-status control

---

# 2. Language Architecture

## English
Keep existing English URLs at root where practical to reduce migration risk.

Examples:
- `/`
- `/jordan-tours/`
- `/destinations/petra/`
- `/petra-tours-from-amman/`

## German
Use `/de/`.

Examples:
- `/de/`
- `/de/jordanien-rundreisen/`
- `/de/reiseziele/petra/`
- `/de/petra-touren-ab-amman/`

Do not use:
- `?lang=de`
- JS-only language replacement
- IP-only locale switching

---

# 3. Hreflang

For genuine equivalents:

English page:
- `hreflang="en"`
- `hreflang="de"`
- optional `x-default`

German page:
- same reciprocal relationship

Rules:
- each page references itself
- each equivalent references the other
- do not point every German page to the English homepage
- do not create hreflang for a translation that does not exist

---

# 4. Canonicals

English page canonical → itself.

German page canonical → itself.

Never canonicalize German pages to English equivalents.

Canonical and hreflang solve different problems and must not conflict.

---

# 5. Language Switcher

Use visible text:

**EN | DE**

On click:
- open equivalent translated page when available
- preserve tour/destination context
- do not send users to homepage unnecessarily

If equivalent does not exist:
show a clear fallback path.

---

# 6. German Search Intent

Do not translate English keywords word-for-word.

Research real German query behavior for:

- Jordanien Rundreise
- Jordanien Privatreise
- Petra Tour ab Amman
- Petra Tagesausflug
- Petra und Wadi Rum Tour
- Wadi Rum Tour
- Totes Meer Ausflug
- Jordanien Rundreise 7 Tage
- Jordanien Luxusreise
- Jordanien Individualreise
- Jordanien Reise mit Fahrer
- beste Reisezeit Jordanien
- Jordanien Sehenswürdigkeiten

These are research seeds, not final volume claims.

---

# 7. German Content Strategy

German content should be:

- natural
- native-quality
- useful
- specific
- factually aligned with the English source
- independently optimized for German intent

Do not use literal translation for:
- headlines
- CTAs
- Story slogans
- metadata
- FAQs
- guide titles

---

# 8. Story Branding in German

Keep the Jordan Story brand identity recognizable.

Possible approaches:
- retain “Story” in selected brand labels
- localize surrounding copy naturally
- use German alternatives where they read better

Do not force “Geschichte” into every phrase.

Final slogan decisions require native German editorial review.

---

# 9. English/German Content Parity

Tier 1 launch pages must exist in both languages:

- homepage
- tours hub
- priority tour pages
- Petra
- Wadi Rum
- Dead Sea
- Amman
- Jerash
- Aqaba
- Story Collections
- Custom Tour
- Transportation
- About
- Contact
- FAQ
- booking flow
- essential policies

---

# 10. Tour Translation Requirements

Each tour must support:

- title EN/DE
- Story subtitle EN/DE
- summary EN/DE
- itinerary EN/DE
- inclusions EN/DE
- exclusions EN/DE
- practical info EN/DE
- FAQ EN/DE
- metadata EN/DE
- image alt EN/DE
- booking labels EN/DE

Protected facts remain shared structured data.

---

# 11. Destination Translation Requirements

Each destination supports:

- name
- slug
- short summary
- long content
- practical info
- FAQs
- related tours
- related Stories
- metadata
- image alt/captions

German destination content must target German travel questions naturally.

---

# 12. Travel Guide Translation

Do not automatically translate every guide at launch.

Prioritize guides with:
- strong commercial support
- high German relevance
- high destination importance

German guide content requires editorial QA.

---

# 13. Translation Workflow

1. English source approved
2. German draft created
3. German editor reviews
4. publish German
5. English source changes
6. system marks German **Needs Review**
7. German reviewed and republished

Do not silently update German via machine translation.

---

# 14. Translation Statuses

- Not Started
- Draft
- Needs Review
- Published
- Outdated

Dashboard should expose counts and filters.

---

# 15. Protected Facts vs Localized Copy

Shared factual fields:
- price
- duration
- route
- inclusions
- availability
- accommodation
- guide arrangement

Localized presentation:
- title
- summary
- Story subtitle
- descriptions
- FAQs
- metadata
- CTA labels

This reduces factual drift.

---

# 16. German Booking UX

German customer journey must include:

- German labels
- German dropdown values
- German validation
- German review step
- German confirmation
- German quote
- German emails
- German policy summaries
- German payment instructions where applicable

No English fallback strings in a German booking flow.

---

# 17. German Email Templates

Required:

- Anfrage erhalten
- Verfügbarkeit bestätigt
- Weitere Informationen benötigt
- Angebot gesendet
- Zahlungsaufforderung
- Anzahlung erhalten
- Buchung bestätigt
- Buchung aktualisiert
- Erinnerung
- Stornierung
- Bewertungsanfrage

Final wording should be professionally localized.

---

# 18. German Structured Data

Structured data strings visible to users should match German content.

Examples:
- German page name
- German descriptions
- German breadcrumb labels

Shared factual values remain consistent.

---

# 19. Sitemap Strategy

Generate separate logical sitemap groups.

Example:
- English tours
- English destinations
- English guides
- German tours
- German destinations
- German guides

Only canonical indexable pages belong.

---

# 20. German Internal Linking

German pages should primarily link to German pages.

Example:
German Petra tour → German Petra destination → German guide.

Do not constantly send German users into English content unless translation is unavailable and clearly indicated.

---

# 21. German Breadcrumbs

Use localized labels.

Example:

Startseite → Jordanien-Reisen → Petra-Touren → Petra & Wadi Rum

Final naming should follow keyword research and UX clarity.

---

# 22. German Meta Titles

Write independently.

Do not mechanically mirror English title structure.

Optimize for:
- intent
- clarity
- click appeal
- natural German syntax

---

# 23. German Meta Descriptions

Use:
- actual route
- duration
- private/custom nature where true
- meaningful differentiator

Avoid literal English translation.

---

# 24. German AEO

Create concise German answers for real traveler questions.

Example topics:
- Wie viele Tage braucht man für Jordanien?
- Kann man Petra und Wadi Rum an einem Tag besuchen?
- Wie weit ist Petra von Amman entfernt?
- Welche Jordanien-Rundreise eignet sich für 7 Tage?
- Wann ist die beste Reisezeit für Jordanien?

Answers must use verified facts.

---

# 25. German GEO

Make entities and relationships explicit in German content.

Example:
Jordan Story Tours bietet eine private Tour von Amman nach Petra und Wadi Rum.

Do not rely only on schema; visible German text should be clear.

---

# 26. German Image SEO

Each relevant image may have:
- English alt
- German alt
- English caption
- German caption

Alt text should describe the image naturally, not translate keywords mechanically.

---

# 27. German URL Slugs

Use readable native slugs.

Examples:
- `/de/reiseziele/petra/`
- `/de/reiseziele/wadi-rum/`
- `/de/jordanien-rundreisen/`
- `/de/petra-touren-ab-amman/`

Avoid umlauts in slugs if implementation standard prefers transliteration:
- `ue`
- `oe`
- `ae`

Use one convention consistently.

---

# 28. German Navigation

Proposed:

- Jordanien-Reisen
- Reiseziele
- Jordan Stories / final localized label
- Reiseführer
- Über uns
- Kontakt
- Verfügbarkeit prüfen

Finalize after keyword and UX review.

---

# 29. German Footer

Localized groups:

- Jordanien entdecken
- Jordanien-Reisen
- Reise planen
- Jordan Story
- Kontakt
- Rechtliches

Do not translate legal/business terms inaccurately.

---

# 30. German Forms

Every form field needs:

- label DE
- helper DE
- validation DE
- error DE
- success DE

Do not rely on placeholders.

---

# 31. German Date/Number Formatting

Review:

- date format
- decimal separators
- currency display
- traveler counts
- telephone conventions

Use locale-aware formatting where practical.

---

# 32. Language Metadata

Set correct document language:

English:
`<html lang="en">`

German:
`<html lang="de">`

Do not use the wrong language attribute on translated pages.

---

# 33. Translation QA

Before publishing German:

- factual parity checked
- natural German checked
- keyword intent checked
- links checked
- CTA checked
- pricing labels checked
- booking tested
- metadata reviewed
- alt text reviewed
- hreflang checked
- canonical checked
- mobile layout checked

---

# 34. Machine Translation Policy

Machine translation can assist drafting.

It cannot be the final publishing standard for priority pages.

Priority German pages require human editorial review.

---

# 35. German Content Tone

Desired tone:

- clear
- trustworthy
- premium
- informative
- not overly promotional
- not full of English tourism clichés

Avoid overusing:
- einzigartig
- unvergesslich
- atemberaubend

Use specifics instead.

---

# 36. German Story Example

English:

**Petra & Wadi Rum Tour from Amman**  
*Two Icons. One Story.*

German should preserve:
- explicit tour intent
- emotional secondary line

Do not sacrifice search clarity for poetic translation.

---

# 37. German Content Updates

When high-change data changes:
- price
- route
- hotel
- availability
- visa/border note

German page should inherit shared factual data automatically where structured.

Localized explanatory text may be flagged for review.

---

# 38. Multilingual Admin Fields

For each localizable field:

- EN value
- DE value
- status
- reviewer
- updated timestamp

Do not duplicate shared numeric/factual fields unnecessarily.

---

# 39. SEO Monitoring by Language

Track separately:

English:
- impressions
- clicks
- rankings
- bookings
- conversion

German:
- impressions
- clicks
- rankings
- bookings
- conversion

Do not evaluate German only as part of total site traffic.

---

# 40. German Search Console Analysis

Review:

- German queries
- Germany/Austria/Switzerland traffic where relevant
- German landing pages
- CTR
- position
- indexing
- cannibalization
- untranslated pages receiving German impressions

---

# 41. German Market Reporting

Dashboard should show:

- German organic sessions
- German booking starts
- German submissions
- confirmed bookings
- revenue
- top tours
- top destinations
- top Story Collections
- top sources

---

# 42. DACH Consideration

German content may serve:
- Germany
- Austria
- Switzerland

Do not create separate country versions unless business/search demand justifies it.

Use standard German initially.

---

# 43. Geotargeting

Do not force German pages only to Germany.

German-language travelers may come from multiple countries.

Language targeting and market targeting are separate.

---

# 44. No Automatic IP Redirects

Do not redirect users solely based on location.

Offer language choice.

Automatic redirects can hurt usability and crawling.

---

# 45. Language Persistence

Remember user language preference where appropriate, but URLs remain authoritative.

Do not hide URL structure behind cookies.

---

# 46. German Booking Attribution

Store booking language.

Reports should answer:

- Which tours convert best in German?
- Which German landing pages drive bookings?
- Which Story Collections appeal most to German users?

---

# 47. German Tour Launch Priority

Recommended first German tour set:

1. Petra from Amman
2. Petra + Wadi Rum from Amman
3. Jordan 3-day itinerary/tour
4. Jordan 5-day itinerary/tour
5. Jordan 7-day itinerary/tour
6. Wadi Rum tours
7. Dead Sea tours
8. Luxury Jordan tours
9. Custom Jordan Tour
10. Airport/transport services where commercially relevant

---

# 48. German Destination Launch Priority

1. Petra
2. Wadi Rum
3. Dead Sea
4. Amman
5. Jerash
6. Aqaba
7. Madaba
8. Mount Nebo

Then expand.

---

# 49. German Content Cannibalization

Do not create:

- Petra Tour ab Amman
- Petra Ausflug ab Amman
- Petra Tagesausflug ab Amman

as three near-duplicate pages unless distinct search intent/product value exists.

Choose one strong page and support synonyms in copy.

---

# 50. English/German SEO Governance

Every new content idea should answer:

- Is this useful in English?
- Is this useful in German?
- Does German need a different keyword angle?
- Is there enough unique content?
- Does a page already satisfy the intent?

Do not clone page counts between languages mechanically.

---

# 51. German Legal/Policy Content

Terms, privacy and cancellation language must be translated accurately.

Legal translation should receive appropriate professional review where necessary.

Do not rely on casual machine translation for legal obligations.

---

# 52. German Contact UX

German pages should display:

- correct phone
- WhatsApp if enabled
- email
- response expectations
- communication language options

Do not imply 24/7 German-speaking staff unless verified.

---

# 53. Story Collections in German

Each Story Collection needs:

- German name
- German tagline
- German description
- German SEO title
- German meta
- German CTA

The concept may remain brand-led, but text must sound native.

---

# 54. German Custom Tour

The Build Your Own Story flow must be fully German.

Potential label:
**Individuelle Jordanien-Reise planen**

Final wording requires native review.

---

# 55. German Travel Guide Topics

High-value candidates:

- Beste Reisezeit für Jordanien
- Wie viele Tage für Jordanien?
- Petra von Amman
- Petra und Wadi Rum kombinieren
- Wadi Rum Übernachtung
- Totes Meer besuchen
- Jordanien Rundreise 7 Tage

Validate before final editorial calendar.

---

# 56. German FAQ Strategy

Use questions real travelers ask.

Do not create FAQs just for schema.

FAQ content supports:
- user confidence
- long-tail search
- AEO
- GEO clarity

---

# 57. Translation Memory / Terminology

Maintain a project terminology list.

Examples:
- private tour
- day tour
- multi-day tour
- pickup
- drop-off
- entrance fees
- guide
- driver
- deposit
- booking request
- availability
- Story Collection

Use consistent German terminology across pages.

---

# 58. Proper Nouns

Keep authentic names where appropriate:

- Petra
- Wadi Rum
- Aqaba
- Amman
- Jerash

Translate/descriptively localize generic location terms only when natural.

---

# 59. German Content Ownership

Assign a role:

**German Editor / Translator**

Responsibilities:
- final language QA
- terminology consistency
- search-intent review
- translation freshness
- customer-facing templates

---

# 60. Multilingual Release Checklist

Before German launch:

- [ ] `/de/` homepage published
- [ ] navigation translated
- [ ] priority tours translated
- [ ] priority destinations translated
- [ ] Story Collections translated
- [ ] custom tour translated
- [ ] booking flow translated
- [ ] errors/validation translated
- [ ] emails translated
- [ ] essential policies translated
- [ ] German metadata complete
- [ ] hreflang reciprocal
- [ ] German canonicals correct
- [ ] German sitemap submitted
- [ ] German internal links checked
- [ ] mobile German layout checked
- [ ] no English fallback strings on priority flows
- [ ] German analytics/reporting enabled

---

# 61. Final Multilingual Principle

Jordan Story Tours should not feel like:

**English website + German translation**

It should feel like two native experiences connected to the same verified business system:

**Jordan Story Tours — English**

and

**Jordan Story Tours — Deutsch**

One brand. One database. Two search strategies. Two polished customer journeys.
