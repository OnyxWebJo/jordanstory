# Master SEO / AEO / GEO Specification

## International Architecture
- English default URLs.
- German under `/de/`.
- Self-referencing canonical on every indexable language URL.
- Reciprocal `hreflang="en"` and `hreflang="de"`; use `x-default` for the primary international entry.
- Never canonical German pages to English.
- Preserve valuable old slugs or 301 them one-to-one.

## Technical SEO
- server/static rendered crawlable HTML
- unique title/H1/meta description
- clean semantic headings
- XML sitemap index split by page type/language where useful
- robots.txt referencing sitemap
- breadcrumb navigation
- 301 redirect map
- 404/410 policy
- noindex admin, search/filter combinations and staging
- optimized image dimensions and responsive `srcset`
- Core Web Vitals budget
- Open Graph/social metadata

## Entity Architecture
Primary entity: Jordan Story Tours.
Destination entities: Petra, Wadi Rum, Dead Sea, Amman, Jerash, Madaba, Mount Nebo, Ajloun, Karak, Aqaba, Dana, Umm Qais, Baptism Site, Desert Castles.
Connect each destination to relevant tours and guides.

## AEO
Every money/destination page should answer the main question in the first 100–150 words.
Use concise factual sections and FAQs that reflect real traveler questions.
Do not add FAQ markup for hidden or fabricated questions.

## GEO / Generative Engine Optimization
- identify company and service clearly
- use consistent business/contact facts
- use destination names and relationships explicitly
- cite/attribute sensitive historical or religious claims in editorial workflows
- add author/reviewer/update metadata to guides
- keep commercial facts structured and current
- avoid vague AI-written filler
- create comparison/use-case content where genuinely useful
- expose important facts in HTML, not only animation/canvas

## Structured Data
Use valid JSON-LD matching visible content:
- Organization / TravelAgency
- WebSite
- BreadcrumbList
- TouristDestination where appropriate
- TouristTrip or appropriate trip representation where supported
- FAQPage only when eligible and visible
- Article for guides/blog
Do not fabricate ratings/reviews.

## Local/Trust
Keep name, office address, phone, WhatsApp and email consistent across the site and external profiles after business verification.

## Content Quality
No keyword stuffing.
No city/destination doorway pages with near-duplicate text.
German is native localization, not machine-like literal translation.
