# 00U — German Full Website Content + SEO/AEO/GEO
## Jordan Story Tours — DE

**Priority:** CRITICAL  
**Depends on:** verified EN tour facts, `00R`, `00S`, `00T`

## Goal
Make `/de/` a complete native German travel website, not a translated shell.

## Scope
Localize and optimize:
- homepage and Scroll World overlays
- navigation/footer
- About/Contact
- Tours directory + categories
- every active tour
- Destinations directory + every approved destination
- Custom Tour
- Booking UI
- Review submission UI/messages
- relevant guides/blog content
- legal/policy pages required publicly
- titles, metas, OG text, breadcrumbs, CTAs, alt text
- destination FAQs from `00S`
- tour-specific FAQs from `00T`

## Product Fact Lock
For every tour, DE must preserve exactly the verified:
`duration | route | itinerary | overnight stops | accommodation | meals | included | excluded | entrance fees | transfers | driver | guide | special activities | price logic`

Never improve a product by inventing a better hotel, guide, meal, Jeep ride, camp, fee inclusion, spa, VIP service or destination.

## Editorial Freedom
German descriptions, storytelling, highlights, introductions and conversion copy may be rewritten natively around the locked facts.

Do not summarize rich EN content. Preserve equivalent information coverage and usefulness.

## Search Research
Research German intent independently before assigning keywords. Do not translate EN keyword targets.

Maintain/update:
- `docs/SEO-KEYWORD-MAP-DE.md`
- `docs/DESTINATION-SEO-MAP-DE.md`
- `docs/AEO-QUESTION-MAP-DE.md`
- `docs/DESTINATION-AEO-MAP-DE.md`
- `docs/TOUR-FAQ-AEO-MAP-DE.md`
- `docs/GEO-ENTITY-MAP-DE.md`
- `docs/DESTINATION-GEO-MAP-DE.md`

## Language
Use native German travel language where appropriate:
`Jordanien Rundreise`, `Privatreise`, `individuelle Reise`, `Reiseverlauf`, `Unterkunft`, `Mahlzeiten`, `Inklusive Leistungen`, `Nicht inklusive`, `Fahrer`, `Reiseleiter`, `Totes Meer`.

Never translate `driver` as `Reiseleiter` unless the verified service is a guide.

## Tour Page Required Structure
Preserve:
`Overview → Highlights → Itinerary by day → Accommodation → Meals → Included → Excluded → Driver/Guide → Entrance Fees → Gallery → unique tour FAQs → related destinations/tours → Booking CTA`

## Destination Pages
Use `00R + 00S`. Destination pages must remain substantial and have destination-specific German FAQs. Do not compress Petra/Wadi Rum/etc. into short translations.

## Internal Links
Stay within `/de/` whenever a German equivalent exists. Link tours only to destinations actually visited.

## QA
No EN/FR/IT leftovers; no machine-translation artifacts; no commercial fact drift; no generic duplicated tour FAQs; no thin destination pages; unique metadata; correct German punctuation/capitalization.

## Output
Create `docs/DE-FULL-CONTENT-QA.md` with:
`URL | page type | facts parity | content depth | FAQ uniqueness | SEO | AEO | GEO | internal links | language QA | status`

# FINAL COMMAND
German must be a complete native search and traveler experience with the same verified products as English and equivalent editorial depth.
