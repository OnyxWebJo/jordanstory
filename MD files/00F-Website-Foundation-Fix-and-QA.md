# 00F — Website Foundation Fix & QA
## Jordan Story Tours — Pre-Multilingual Production Gate

**Priority: CRITICAL**
**Target:** Current temporary build
**Final public languages:** English, German, French, Italian
**Admin:** English only

## 1. Mission
Do NOT redesign from scratch. Preserve the Jordan Story concept, Story Collections, tours, destinations, FAQs, booking architecture and useful tour-to-destination relationships. This pass fixes, verifies, completes and polishes the foundation before full FR/IT production.

Order:
`Current Build → Foundation QA → Fact Verification → Media Completion → Review System → EN SEO/AEO/GEO Map → EN Content Freeze → DE QA → FR → IT → Final 4-Language SEO`

## 2. P0 — Trust Data
The Ministry registration number may remain temporarily because the real number is pending from the owner, but store it as `PENDING_VERIFICATION`. Do not treat it as verified schema data until the owner supplies the real number.

Mark placeholder phone/contact/business values as `PLACEHOLDER`. Production must reject unresolved placeholders.

Never invent awards, certifications, traveler counts, years in business, ratings or review counts.

## 3. P0 — Reviews
Remove hard-coded `5.0` ratings as genuine social proof. Implement `00E-Verified-Post-Tour-Review-Workflow.md`.

Until real approved reviews exist, hide aggregate ratings or show a neutral no-reviews state.

Required trust chain:
`completed booking → localized WhatsApp request → secure review form → verified submission → moderation → publication → dynamic aggregate rating`

## 4. P0 — Images
Execute `00D-Mandatory-Tour-Image-Gallery-Migration.md` against EVERY tour.

For every legacy tour compare old hero/gallery count/order/resolution against the new tour. Create `docs/MEDIA-MIGRATION-REPORT.md` with totals, complete galleries, imported assets, duplicates, low-resolution assets, broken sources, replacements, rights-review items and incomplete tours.

Do not use unrelated stock photos merely to fill gallery slots.

## 5. No Legacy Hotlinking
For production:
`legacy URL → download → verify → new storage → optimize → serve locally/new storage`

Keep legacy source URL only for migration traceability.

## 6. P0 — Scroll World
Implement `00A` + `00B`.

Public narrative:
`Opening → Chapter 01 Petra → Siq journey → Treasury glimpse → full Treasury reveal → But the Story Doesn't End Here → Chapter 02 Wadi Rum → open desert → Choose How Your Story Continues`

Technical scene/debug names must never render publicly.

Preserve Skip Journey, reduced-motion support, mobile fallback, progressive loading and semantic content outside WebGL/video.

## 7. P0 — Public Admin Link
Remove `Operations Admin` from tourist navigation/footer. `/admin` may exist but must require authentication, stay out of public navigation/sitemaps and be non-indexable.

## 8. P0 — Commercial Verification
Verify before launch:
- prices
- durations/nights
- itinerary order
- inclusions/exclusions
- hotels
- transport
- guides
- meals
- entrance fees
- pickup/drop-off
- visa statements
- cancellation rules
- seasonal availability

Put uncertainty in `docs/CONTENT-VERIFICATION-QUEUE.md`. Never let SEO rewriting alter commercial facts.

## 9. Visa, Entry and Fees
Treat visa/border/admission information as maintainable facts with `source`, `verified_at`, `review_due_at`, and `status`. Never publish broad promises unless genuinely applicable.

## 10. Package FAQ
Do not claim every package includes the same hotels/guides/meals if they differ.

Prefer:
“Inclusions vary by itinerary. Each tour page lists exactly what is included.”

Then mention only genuinely universal services if verified.

## 11. Content Quality
Reduce repetitive AI-style superlatives such as `ultimate`, `pinnacle`, `VIP`, `unforgettable`, `Martian`, `exclusive` and repeated `luxury`.

Keep premium positioning but add real operator expertise: route logic, pacing, logistics, destination detail, cultural context, traveler suitability and useful practical knowledge.

## 12. Tour Titles
Separate:
- clear public tour name
- SEO title
- supporting subtitle

Do not stuff every feature/keyword into the visible tour name.

## 13. English SEO Research
Do not mix German phrases into English metadata.

Create `docs/SEO-KEYWORD-MAP-EN.md` containing:
`URL | page type | primary query | secondary queries | question queries | intent | funnel | SERP notes | competing JST URL | internal links | title | H1 | research date | status`

Research before assigning keywords. Avoid cannibalization.

Broad homepage intent, destination intent, specific product intent and informational guide intent should normally have separate canonical owners.

## 14. AEO
Use:
`real traveler question → direct 1–2 sentence answer → useful explanation → relevant internal link`

Do not generate FAQs only to insert keywords. Verify every factual answer.

## 15. GEO / Entity Architecture
Strengthen:
`Jordan Story Tours → offers Tour → visits Destination`
`Destination → included in Tour`
`Guide → explains Destination`
`Story Collection → groups Tours/Destinations`

Keep business facts consistent across footer, About, Contact, schema, booking and reviews.

## 16. Destination Pages
Keep dedicated destination pages. Each important destination should have identity, concise answer-first introduction, useful travel information, gallery, related tours/destinations, relevant FAQs, internal links and appropriate structured data.

Do not create thin keyword pages.

## 17. Route Feature
Keep the route feature but brand it around the traveler.

Preferred direction:
**See How Your Jordan Story Connects**

Verify all distances, driving times and sequences. Do not imply real-time routing unless it exists.

## 18. Booking
Audit all CTAs and booking flow. Preserve tour attribution into booking.

Test mobile UX, validation, preselected tour, dates, passengers, contact details, special requests, success state and admin record creation.

Use controlled CTAs such as:
`View Tour`, `Explore Petra`, `Explore Wadi Rum`, `Book This Tour`, `Request This Journey`, `Build My Jordan Story`, `Request Custom Trip`.

No dead buttons.

## 19. Navigation
Traveler-facing navigation should remain concise. Suggested:
`Tours | Destinations | Jordan Stories/Experiences | Plan Your Trip | About | Contact`

No admin/internal tools.

## 20. Design QA
Keep the design premium, editorial, cinematic and calm.

Avoid excessive cards, cramped layouts, giant text everywhere, inconsistent radii/shadows and competing accent styles.

The Scroll World may be dramatic; normal content must be highly readable.

Do not add sections just to make the homepage longer.

## 21. Mobile QA
Test small iPhone widths, common Android widths, tablet portrait and landscape.

Check Scroll World, navigation, galleries, tour cards, forms, accordions, CTAs, route UI, typography and footer. No horizontal overflow or desktop-only interaction.

## 22. Image Art Direction & SEO
Tour pages prioritize actual migrated tour imagery. Story/editorial imagery may be curated when rights are clear.

Meaningful images need responsive formats, correct dimensions and useful localized alt text without keyword stuffing. Decorative imagery may use empty alt.

## 23. Performance
Audit JS, image/hero payload, unused libraries, fonts, third-party scripts, LCP, INP, CLS and layout shift.

Keep static Next.js as an advantage. Do not turn the site into a heavy SPA unnecessarily.

## 24. Technical SEO
Verify:
- unique titles/descriptions
- intended H1
- heading hierarchy
- canonical
- robots
- sitemap
- breadcrumbs
- crawlable links
- status codes
- 404/redirects
- OG/social metadata
- structured data
- no accidental noindex
- no duplicate route variants

## 25. Structured Data
Only use facts visible and verified. Potential types include Organization, WebSite, BreadcrumbList, appropriate destination/place types, and review/aggregate data only when genuine and eligible.

Never fabricate schema-only trust information.

## 26. Canonical Business Record
Create one settings record:
`brand_name, legal_name, license_number, license_status, phone, email, address, city, country, logo, website, social_profiles, languages, service_area`

All public components/schema must pull from this source rather than manually repeating potentially conflicting facts.

## 27. Language Architecture
Final public structure:
`/en/`
`/de/`
`/fr/`
`/it/`

Each locale requires real localized URLs/content/navigation/booking/metadata/FAQs/schema/internal links.

Final hreflang clusters:
`en | de | fr | it | x-default`

Never point hreflang at incomplete placeholder translations.

## 28. Translation Gate
Do NOT mass-translate unfinished English.

First:
`English facts verified → content QA → EN search research → content freeze`

Then localize. German, French and Italian keyword/search-intent research must be independent; do not literally translate English keywords.

## 29. Admin
Admin remains English-only but manages:
`CONTENT: EN | DE | FR | IT`
`SEO: EN | DE | FR | IT`
`MEDIA TEXT: EN | DE | FR | IT`

## 30. Security / Production Hygiene
Before launch protect admin, remove debug/test data, test reviews/bookings and placeholder schema, resolve console errors, protect secrets, validate sensitive forms server-side and apply reasonable rate limiting.

## 31. Accessibility
Verify keyboard navigation, focus, contrast, labels, alt text, reduced motion, Skip Journey, carousel controls and semantic landmarks.

## 32. Required QA Documents
Maintain:
- `docs/FOUNDATION-QA.md`
- `docs/CONTENT-VERIFICATION-QUEUE.md`
- `docs/MEDIA-MIGRATION-REPORT.md`
- `docs/SEO-KEYWORD-MAP-EN.md`
- `docs/INTERNAL-LINK-MAP.md`
- `docs/TRANSLATION-STATUS.md`
- `docs/BROKEN-LINK-REPORT.md`

Severity:
`P0 = production blocker / false information / broken core flow`
`P1 = serious SEO/UX/content/conversion problem`
`P2 = polish`

Fix P0 before P1/P2.

## 33. Current P0 Checklist
- [ ] registration placeholder controlled as unverified
- [ ] placeholder contact data controlled/replaced
- [ ] fake/hard-coded ratings removed
- [ ] verified review workflow implemented
- [ ] all tour galleries audited
- [ ] legacy hotlinking eliminated for production
- [ ] admin removed from public navigation
- [ ] commercial facts verified
- [ ] universal inclusion claims corrected
- [ ] visa/fee claims verified
- [ ] Scroll World completed or safe fallback active
- [ ] booking flow tested

## 34. Current P1 Checklist
- [ ] English content humanized
- [ ] tour naming reviewed
- [ ] EN keyword map researched
- [ ] cannibalization reviewed
- [ ] destination pages strengthened
- [ ] AEO answers reviewed
- [ ] entity relationships strengthened
- [ ] route feature verified/rebranded
- [ ] image SEO complete
- [ ] mobile QA complete
- [ ] performance pass complete
- [ ] technical SEO complete
- [ ] internal links audited

## 35. P2
- animation polish
- micro-interactions
- gallery transitions
- spacing refinement
- subtle Story motifs
- icon consistency
- advanced motion tuning

## 36. Do Not Destroy Good Work
This QA document is NOT permission to replace the whole design, remove Story Collections/destination pages, rename every tour, replace all imagery, rewrite verified facts, abandon static Next.js or abandon Scroll World.

Make controlled improvements.

## 37. Foundation Approval
Approve English foundation only when:
`Facts verified/pending explicitly + Media complete + Design responsive + Story clear + Tours complete/bookable + Review system genuine + SEO mapped + AEO factual + GEO relationships clear + Technical SEO valid + Performance acceptable + Admin hidden`

Only then begin full French/Italian production.

# FINAL COMMAND TO THE AI AGENT

**Finish what already exists before adding more.**

Priority:
**Trust → Completeness → Story → Search → Conversion → Performance**

Preserve the strongest current ideas. Correct placeholders and unsupported claims. Complete every tour's imagery. Implement genuine reviews. Finish the immersive Jordan Story journey. Strengthen English SEO/AEO/GEO through research. Freeze the foundation, then expand carefully into German, French and Italian.

The final website must feel like a real Jordan travel brand with local expertise—not a template, demo, or AI-generated tour catalogue.
