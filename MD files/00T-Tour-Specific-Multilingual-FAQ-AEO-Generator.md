# 00T — Tour-Specific Multilingual FAQ / AEO Generator
## Jordan Story Tours — EN / DE / FR / IT

**Priority:** CRITICAL  
**Purpose:** Replace duplicated tour-package FAQs with unique, tour-specific, fact-based traveler questions.

---

# 1. Core Rule

Do NOT reuse the same FAQ set across all tours.

The following is forbidden:

```text
Tour A:
- Is transportation included?
- Are meals included?
- Can I customize the tour?
- Are entrance fees included?

Tour B:
- Is transportation included?
- Are meals included?
- Can I customize the tour?
- Are entrance fees included?
```

with nearly identical answers and only the tour name changed.

Shared FAQ themes are allowed only when they are genuinely relevant, but the final FAQ set for each tour must reflect that specific product.

---

# 2. Source of Truth

Tour FAQs must be generated from the verified master tour record created during reconciliation.

Use only verified fields such as:

```text
tour_id
duration
days
nights
route
destinations
itinerary
overnight locations
accommodation
meals
included
excluded
entrance fees
driver
tour guide
local guide
airport transfer
visa wording
special activities
group conditions
price logic
gallery
booking rules
```

Never invent an FAQ answer from general category assumptions.

---

# 3. Tour FAQ Formula

For every tour, construct the FAQ set from:

```text
TOUR FACTS
+
ROUTE-SPECIFIC QUESTIONS
+
DESTINATION-SPECIFIC QUESTIONS
+
BOOKING QUESTIONS
+
TRAVELER DECISION QUESTIONS
+
SEARCH/AEO RESEARCH
```

The result must feel unique to that itinerary.

---

# 4. Recommended FAQ Count

Use quality, not a fixed quota.

Guidance:

```text
Short day tour:
5–8 useful questions

3–5 day tour:
6–10 useful questions

6–10+ day tour:
8–12 useful questions
```

Add more only when the itinerary genuinely creates additional traveler questions.

Do not pad pages.

---

# 5. Mandatory FAQ Categories

Evaluate these categories for each tour.

Not every category must appear on every tour.

## A. Itinerary
Examples:
- How much time is spent in Petra on this tour?
- Does this itinerary include Wadi Rum?
- Where do we stay on Night 2?
- Is Jerash visited before or after the Dead Sea?

## B. Meals
Examples:
- Which meals are included?
- Is dinner included in Petra?
- Does the Wadi Rum camp include dinner?

Only ask if relevant.

## C. Accommodation
Examples:
- What hotel category is included?
- Is the Wadi Rum stay in a camp or hotel?
- Is accommodation included every night?

## D. Entrance Fees
Examples:
- Are Petra entrance fees included?
- Are entrance fees included throughout the tour?
- Which site fees are not included?

## E. Driver / Guide
Examples:
- Is the tour accompanied by a guide?
- Is an English-speaking driver included?
- Is a local guide included in Petra?
- Does guide service depend on group size?

## F. Transport
Examples:
- Is airport pickup included?
- Is the tour private?
- What type of transportation is included?

## G. Route
Examples:
- Can Petra and Wadi Rum be visited on the same tour?
- Does this route include Mount Nebo and Madaba?
- Is the Dead Sea a day visit or overnight stop?

## H. Special Activities
Examples:
- Is a Jeep tour included in Wadi Rum?
- Is a desert camp included?
- Is lunch included at the Dead Sea?
- Is a boat/snorkeling activity included in Aqaba?

Only when verified.

## I. Customization
Examples:
- Can this itinerary be customized?
- Can an extra night be added in Petra?
- Can accommodation be upgraded?

Answers must reflect actual business capability.

## J. Booking / Suitability
Examples:
- Who is this tour best for?
- Is this tour suitable for families?
- How far in advance should I book?
- Can this tour be booked privately?

Do not make unsupported accessibility/family claims.

---

# 6. Route-Specific FAQ Requirement

Every tour must contain at least 2–4 questions that would make little sense on an unrelated itinerary.

Example:

For a Petra + Dead Sea + Jerash tour:

```text
Can Petra, the Dead Sea and Jerash be covered in this itinerary?
How much time is allocated to Petra?
Is the Dead Sea visit on the same day as Madaba/Mount Nebo?
Does the tour overnight in Petra or return to Amman?
```

For a Petra + Wadi Rum tour:

```text
Does the tour include an overnight stay in Wadi Rum?
Is a Jeep tour included?
How is the journey from Petra to Wadi Rum arranged?
What meals are included at the camp?
```

If a question can be copied unchanged to 20 other tours, it is not route-specific enough.

---

# 7. Shared Questions Are Allowed — But Answers Must Be Specific

Example shared question:

**Are meals included?**

Tour A answer:
`This itinerary includes daily breakfast and one dinner in Petra.`

Tour B answer:
`Breakfast is included each morning, together with a Bedouin-style dinner in Wadi Rum.`

Tour C answer:
`Meals are not included unless specifically listed in the itinerary.`

Do not use one generic answer.

---

# 8. Dynamic FAQ Generation Logic

Conceptually:

```text
if itinerary contains Petra:
    consider Petra-time / Petra-guide / Petra-fee questions

if itinerary contains Wadi Rum:
    consider camp / Jeep / overnight / meal questions

if itinerary contains Dead Sea:
    consider day-visit vs overnight / resort / lunch / fee questions

if itinerary contains Jerash:
    consider guide / day-trip / route-sequence questions

if accommodation.category exists:
    add accommodation question

if meals.count > 0:
    add meal-specific question

if guide.condition exists:
    add guide-condition question

if entrance_fee_status != UNKNOWN:
    add fee question

if airport_transfer == true:
    add airport-transfer question
```

The generator must read structured data, not marketing prose.

---

# 9. AEO Answer Format

Every answer should begin with a direct answer.

Example:

Question:
`Are Petra entrance fees included in this tour?`

Good:
`No. Petra entrance fees are not included in this package. They are listed under the tour's “What's Not Included” section.`

Bad:
`Petra is one of Jordan's most amazing attractions and many travelers wonder about entrance fees...`

Answer first.

---

# 10. No Hallucinated Answers

If the master data does not contain enough information:

```text
FAQ_STATUS = NEEDS_VERIFICATION
```

Do not generate an answer anyway.

Examples:
- exact pickup time
- vehicle model
- hotel name
- guide language
- meal menu
- visa eligibility
- entrance-fee price

unless verified.

---

# 11. Language-Specific Research

Each tour FAQ set must support:

```text
EN
DE
FR
IT
```

Do not translate the English question list mechanically.

Research how travelers ask about that tour type in each language.

The factual answer remains shared.

The wording and question intent may differ.

---

# 12. English FAQ Map

Create:

`docs/TOUR-FAQ-AEO-MAP-EN.md`

Fields:

```text
tour_id
tour_url
question
question_type
source_field
answer
search_intent
related_link
status
```

---

# 13. German FAQ Map

Create:

`docs/TOUR-FAQ-AEO-MAP-DE.md`

German questions should use natural travel language such as:

```text
Sind die Eintrittsgebühren in dieser Rundreise enthalten?
Welche Mahlzeiten sind im Reisepreis enthalten?
Ist eine Übernachtung im Wadi Rum vorgesehen?
Ist ein deutschsprachiger Reiseleiter inklusive?
```

Only where factually relevant.

Do not translate `driver` into `Reiseleiter`.

---

# 14. French FAQ Map

Create:

`docs/TOUR-FAQ-AEO-MAP-FR.md`

Natural examples:

```text
Les droits d'entrée à Pétra sont-ils inclus ?
Quels repas sont compris dans ce circuit ?
Le circuit prévoit-il une nuit dans le Wadi Rum ?
Un guide francophone est-il inclus ?
```

Only when supported.

---

# 15. Italian FAQ Map

Create:

`docs/TOUR-FAQ-AEO-MAP-IT.md`

Natural examples:

```text
I biglietti d'ingresso a Petra sono inclusi?
Quali pasti sono inclusi nel tour?
È previsto un pernottamento nel Wadi Rum?
È inclusa una guida in italiano?
```

Again, only when factually correct.

---

# 16. Do Not Force Language Symmetry

Tour A may need:

```text
EN: 8 FAQs
DE: 7 FAQs
FR: 9 FAQs
IT: 8 FAQs
```

That is acceptable.

Different language markets may ask different questions.

The underlying factual answers must remain consistent.

---

# 17. Tour-Specific vs Destination-Specific Questions

Keep architecture clean.

Tour page:
`Are Petra entrance fees included in this package?`

Petra destination page:
`How much time do you need in Petra?`

Tour page:
`Does this tour include an overnight stay in Wadi Rum?`

Wadi Rum destination page:
`Is it worth staying overnight in Wadi Rum?`

Avoid duplicating the same intent across every page.

---

# 18. Tour-Specific vs General Booking FAQ

Global booking page:
`How do I book a Jordan Story Tours trip?`

Tour page:
`Can this specific itinerary be customized?`

Do not copy global policy FAQs into every tour unless the answer materially affects that product.

---

# 19. FAQ Similarity Audit

After generating all FAQs, run a duplication/similarity audit.

Create:

`docs/TOUR-FAQ-DUPLICATION-REPORT.md`

For every pair/group of tours flag:

```text
question similarity
answer similarity
same FAQ count/order
same phrasing
same intent cluster
```

Flag sets that are suspiciously duplicated.

Suggested statuses:

```text
UNIQUE
ACCEPTABLE_SHARED_INTENT
TOO_SIMILAR
DUPLICATED_TEMPLATE
NEEDS_REWRITE
```

---

# 20. Duplication Threshold

The agent should not rely on one exact numerical threshold only.

But as a practical QA heuristic:

If more than roughly 50–60% of a tour's FAQ questions/answers are nearly identical to another unrelated tour, review it.

Related variants of the same product may naturally share more content.

Still, route-specific questions should distinguish them.

---

# 21. Catalogue-Wide FAQ Diversity

Across the full catalogue, the agent should produce a useful spread of questions around:

- Petra
- Wadi Rum
- Dead Sea
- Jerash
- Madaba
- Mount Nebo
- Aqaba
- accommodation
- meals
- entrance fees
- guide/driver
- airport transfers
- route combinations
- duration
- overnight stops
- customization
- private tours
- family/suitability where supported

Do not overuse only:
- Is transportation included?
- Are meals included?
- Can I customize it?

---

# 22. Questions Must Match Verified Product

Example:

If Classic Tour 1 does NOT visit Wadi Rum:

Forbidden FAQ:
`Is a Wadi Rum Jeep tour included?`

Even if the answer says no, adding irrelevant questions can confuse topical relevance.

Prioritize questions that reflect actual itinerary intent.

---

# 23. FAQ UI

Tour FAQs should use accessible accordion or clean question blocks.

Requirements:
- visible/indexable HTML
- keyboard support
- clear expanded state
- fast mobile rendering
- no heavy client-only fetch
- stable question anchors where useful

---

# 24. FAQ Schema

Do not create FAQs primarily for schema.

If FAQ-related structured data is implemented, it must:
- match visible FAQ content;
- follow current search-engine policies;
- not imply rich-result eligibility.

Do not use `QAPage` for publisher-written FAQs.

---

# 25. Internal Linking

Answers may link naturally to:

- destination page
- booking page
- custom tour page
- related tour
- planning guide

Examples:

`Learn more about Petra`
`See tours visiting Wadi Rum`
`Build a custom Jordan itinerary`

Do not turn every answer into a sales pitch.

---

# 26. Commercial CTA Separation

FAQs answer questions.

CTAs convert.

Do not embed:
`BOOK NOW!`
inside every answer.

After the FAQ block, use a clear page-level CTA.

---

# 27. Review-Based Questions

Do not generate FAQs from fabricated reviews.

Once verified review data exists, review language may inspire future editorial questions, but commercial answers must still come from structured tour facts.

---

# 28. FAQ Generation Workflow

For every tour:

```text
1. load verified master tour record
2. identify route/destination signals
3. identify meals/accommodation/inclusion conditions
4. identify guide/driver/fee/transfer conditions
5. research language-specific traveler questions
6. select strongest relevant questions
7. generate direct factual answers
8. add contextual internal links
9. localize natively
10. run duplication audit
11. QA against master record
12. publish
```

---

# 29. Per-Tour QA Checklist

For every tour:

- [ ] FAQ set is specific to this itinerary
- [ ] at least 2–4 route-specific questions
- [ ] answers come from verified facts
- [ ] meals match master data
- [ ] Included/Excluded match master data
- [ ] accommodation matches master data
- [ ] driver/guide wording correct
- [ ] entrance-fee wording correct
- [ ] no invented activity
- [ ] no irrelevant destination question
- [ ] no copied template set
- [ ] EN wording natural
- [ ] DE wording native
- [ ] FR wording native
- [ ] IT wording native
- [ ] links useful
- [ ] UI accessible
- [ ] visible HTML
- [ ] duplication report passed

---

# 30. Completion Status

Each tour receives FAQ status:

```text
FAQ_NOT_STARTED
FAQ_EN_COMPLETE
FAQ_DE_COMPLETE
FAQ_FR_COMPLETE
FAQ_IT_COMPLETE
FAQ_DUPLICATION_REVIEW
FAQ_VERIFIED
```

A tour is not multilingual-content complete until:

```text
FAQ_VERIFIED
```

for every published locale.

---

# 31. Required Outputs

Create/update:

```text
docs/TOUR-FAQ-AEO-MAP-EN.md
docs/TOUR-FAQ-AEO-MAP-DE.md
docs/TOUR-FAQ-AEO-MAP-FR.md
docs/TOUR-FAQ-AEO-MAP-IT.md
docs/TOUR-FAQ-DUPLICATION-REPORT.md
docs/TOUR-FAQ-QA.md
```

---

# FINAL COMMAND TO AI AGENT

Stop using one generic FAQ template for every tour.

Generate each FAQ set from the actual verified tour product.

The FAQ must answer what a traveler considering THAT SPECIFIC ITINERARY would naturally ask.

Use:

`verified route + duration + meals + accommodation + included/excluded + fees + guide/driver + transfers + activities + booking context`

to create unique questions and answers.

Research EN / DE / FR / IT independently.

Shared factual meaning is allowed.

Duplicated FAQ templates are not.

The desired result is:

**ONE VERIFIED TOUR PRODUCT → ONE DISTINCT FAQ/AEO PROFILE → FOUR NATIVE LANGUAGE VERSIONS.**
