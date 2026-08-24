# Batch 06 — Rendered Retry & Source-Recovery Dataset

## Purpose
Close the raw-source gaps before SEO/AEO/GEO rewriting.

## Confirmed Live Destination URLs Requiring Rendered/DOM Retry
- Petra — https://jordanstorytours.com/petra-the-rose-city/
- Wadi Rum — https://jordanstorytours.com/wadi-rum/
- Dead Sea — https://jordanstorytours.com/dead-sea/
- Madaba — https://jordanstorytours.com/madaba/
- Umm Qais — https://jordanstorytours.com/umm-qais/
- Baptism Site — https://jordanstorytours.com/baptism-site-of-jesus-christ/
- Desert Castle — https://jordanstorytours.com/desert-castle/

These destination URLs are known from the site's live architecture, but search retrieval did not expose sufficiently reliable destination-page bodies in this pass.

## Mandatory Agent Behavior
1. Open with a rendered browser.
2. Wait for JavaScript/lazy media.
3. Capture final DOM.
4. Enumerate `<img>`, `<picture>`, `srcset`, lazy-load attributes, lightboxes and CSS backgrounds.
5. Capture title/H1/body/FAQ/schema/meta/canonical.
6. Download the largest legitimate gallery source for every media item.
7. Preserve gallery order.
8. Hash/deduplicate.
9. Write one raw destination record + media manifest.
10. Never substitute facts from memory merely because retrieval failed.

## Cross-page Recovery
Tour pages may be used to recover media associations and destination references, but not to silently replace the destination page's own raw record.

### Petra evidence
The current Petra day-tour page exposes gallery labels including:
- Petra The Rose City 4
- Petra The Rose City 5
- Petra Jordan tours
- repeated Petra The Rose City 5

The duplicate must be deduplicated by binary hash/source identity while preserving the fact that it appeared twice in the legacy gallery.

### Wadi Rum evidence
Budget Tour 3 exposes:
- Wadi Rum
- Wadi Rum desert in Jordan

Holy Land Tour 1 also exposes Wadi Rum-related media labels.

## Important Rule
A destination is only `RAW_EXTRACTION_COMPLETE` when its own source page and its media gallery have been attempted with rendered extraction.
