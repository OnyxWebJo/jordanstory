# 00D — Mandatory Tour Image & Gallery Migration
## Jordan Story Tours — AI Agent Implementation Requirements

**Priority:** CRITICAL  
**Status:** MUST IMPLEMENT BEFORE TOUR PAGES ARE CONSIDERED COMPLETE

This file exists because the current implementation omitted the legacy tour images and galleries.

That is NOT acceptable.

The existing Jordan Story Tours website already contains valuable tour imagery. The AI agent must migrate those images automatically and attach them to the correct tours.

The owner must NOT be asked to manually download and re-upload every slideshow.

---

# 1. Core Rule

A migrated tour is NOT complete until all of these are implemented:

- hero image
- slideshow/gallery images
- original image source URLs
- downloaded local/production copies
- gallery order
- tour association
- image optimization
- EN alt text
- DE alt text where meaningful
- admin gallery management
- public gallery rendering

If the text is migrated but the gallery is missing, the tour is incomplete.

---

# 2. Existing Source

Use the current public Jordan Story Tours website as the primary migration source.

For every tour page:

1. open the live tour URL
2. render the page fully
3. wait for sliders/lazy-loaded images
4. inspect the final DOM
5. inspect slideshow/lightbox data
6. identify all images associated with that tour
7. find the highest-resolution legitimate source
8. download the image
9. hash/deduplicate
10. import into the new media library
11. attach to the correct tour
12. preserve the original gallery order

Do NOT stop at visible thumbnails.

---

# 3. Rendered Browser Requirement

Many sliders load media dynamically.

The agent must inspect:

- `<img src>`
- `<img srcset>`
- `<picture>`
- `data-src`
- `data-lazy-src`
- `data-original`
- CSS `background-image`
- JavaScript slider configuration
- inline JSON
- lightbox URLs
- gallery links
- WordPress media URLs
- responsive image candidates

If raw HTML does not contain the final gallery, use a rendered/headless browser.

Do NOT conclude that a tour has no gallery merely because the server HTML is sparse.

---

# 4. Tour Media Extraction Flow

```text
tour URL
↓
render page
↓
identify hero
↓
identify slideshow/gallery
↓
collect image candidates
↓
resolve highest-quality source
↓
download originals
↓
hash/deduplicate
↓
optimize
↓
create media records
↓
attach to tour
↓
preserve sort order
↓
publish gallery
```

---

# 5. Highest Resolution Rule

If the source page exposes:

```text
image-300x200.jpg
image-768x512.jpg
image-1200x800.jpg
image.jpg
```

prefer the best valid source image.

Do NOT migrate only thumbnails.

Do NOT upscale a thumbnail and treat it as the original.

If only a small source exists:
- preserve it
- flag it as low-resolution
- do not fake detail

---

# 6. Duplicate Handling

The same photo may appear as hero, gallery image, destination image, or on several tours.

Use:
- normalized source URL
- SHA-256 hash
- optional perceptual similarity

Store one binary asset where appropriate and create multiple relationships.

Do not duplicate storage unnecessarily.

---

# 7. Gallery Ordering

Preserve legacy slideshow order.

Store:

```text
sort_order
```

Admin can change it later.

---

# 8. Hero Image

Determine hero image from:
- featured image
- first gallery item
- OG image
- largest above-the-fold image
- legacy slider featured item

If uncertain:

```text
hero_status = NEEDS_REVIEW
```

Do not choose randomly.

---

# 9. Media Data Model

Suggested:

```text
media
-----
id
source_url
original_filename
storage_path
mime_type
width
height
sha256
rights_status
created_at
updated_at
```

Relations:

```text
media_relations
---------------
media_id
entity_type
entity_id
role
sort_order
legacy_label
```

Translations:

```text
media_translations
------------------
media_id
locale
alt_text
caption
title
```

Do not store binaries in MySQL.

---

# 10. Recommended Roles

```text
HERO
GALLERY
ITINERARY
DESTINATION
CARD
SOCIAL
```

---

# 11. Image Optimization

Create responsive derivatives:
- AVIF
- WebP
- JPEG fallback where needed

Suggested widths:

```text
480
768
1024
1440
1920
```

Never generate sizes larger than the source.

---

# 12. Public Tour Gallery

Every active tour page should automatically render its migrated gallery.

Desktop:
- cinematic hero
- swipe/click gallery
- optional thumbnails
- lightbox
- keyboard navigation

Mobile:
- swipe gallery
- image count
- lightweight loading

Avoid heavy carousel libraries unless necessary.

---

# 13. Performance

Hero/LCP image:
- explicit width/height
- responsive `srcset`
- preload only if truly LCP
- no lazy-load if immediately visible

Remaining gallery images:
- lazy-load
- responsive sizes
- async decode where appropriate

---

# 14. Admin Dashboard Gallery

When admin opens a migrated tour, its gallery must already be populated.

Admin must be able to:
- reorder
- choose hero
- upload replacement
- remove
- edit EN alt
- edit DE alt
- edit captions
- see source URL
- see dimensions
- see migration status
- see duplicate status

The admin must NOT reconstruct old galleries manually.

---

# 15. English / German Media Rule

The image binary is shared.

Do NOT duplicate files by language.

Store localized text separately:

```text
alt_en
alt_de
caption_en
caption_de
```

Example:

EN:
`Petra Treasury seen through the Siq in Jordan`

DE:
`Blick durch den Siq auf das Schatzhaus von Petra in Jordanien`

No keyword stuffing.

---

# 16. Rights Status

Suggested:

```text
LEGACY_SITE_ASSET
VERIFIED_OWNED
VERIFIED_LICENSED
NEEDS_RIGHTS_REVIEW
REPLACE
```

Preserve source evidence even when rights review is pending.

---

# 17. Failure Handling

If an image fails, record:
- tour
- source URL
- gallery order
- status
- retry count
- failure reason

Do not silently omit it.

---

# 18. Low Resolution Handling

If a source is small:
- preserve original
- mark `LOW_RESOLUTION`
- do not upscale as final production image
- optionally request replacement later

Do not substitute an unrelated image.

---

# 19. Watermarks

If stock/third-party watermark is visible:

```text
NEEDS_REVIEW
```

Do not auto-publish clearly unauthorized/watermarked assets.

---

# 20. Tour Completion States

Use:

```text
TEXT_EXTRACTED
MEDIA_EXTRACTED
MEDIA_DOWNLOADED
MEDIA_IMPORTED
GALLERY_ATTACHED
MEDIA_QA_COMPLETE
TOUR_MIGRATION_COMPLETE
```

A tour cannot become `TOUR_MIGRATION_COMPLETE` until gallery and media QA are complete.

---

# 21. Required Tour Media Manifest

Create:

```text
/tour-media-manifests/<tour-slug>.json
```

Example:

```json
{
  "tour": "budget-tour-1",
  "source_url": "https://jordanstorytours.com/tour/budget-tour-1/",
  "hero_media_id": "media_001",
  "gallery": [
    {
      "media_id": "media_001",
      "sort_order": 1,
      "legacy_label": "Amman-1"
    }
  ]
}
```

---

# 22. Required Global Media Report

Create:

`docs/MEDIA-MIGRATION-REPORT.md`

Include:

```text
Total tour pages
Tours with gallery
Tours with hero
Images discovered
Images downloaded
Unique binaries
Duplicates
Low-resolution
Broken URLs
Rights-review
Tours with missing media
Tours fully complete
```

---

# 23. Known Gallery Evidence

Earlier migration work already identified galleries for:
- Budget tours
- Luxury tours
- Holy Land tours
- Petra day tour
- Jerash/Ajloun tours
- Madaba/Mount Nebo tours
- Aqaba
- destination pages

Use raw extraction records AND live pages together.

Do not ignore those findings.

---

# 24. Final Tour Page Composition

Each public tour page combines:

```text
TOUR FACTS
from verified extraction / DB

TOUR COPY
from EN/DE production content

TOUR MEDIA
from automated gallery migration
```

All three are required.

---

# 25. Next.js Integration

For static public pages:

```text
MySQL / approved content
+
media relations
↓
static build/export
↓
tour page HTML
```

Static build should know:
- hero image
- gallery images
- dimensions
- alt text
- optimized URLs

Do not fetch the entire gallery client-side unless necessary.

---

# 26. No Legacy Hotlinking

The new site must not permanently depend on old WordPress image URLs.

Download/store media in the new project or approved storage.

Keep old source URL only for evidence.

---

# 27. Mandatory AI Agent Command

**DO NOT ask the owner to manually upload existing tour images if those images are publicly accessible on the current Jordan Story Tours website.**

Manual intervention is acceptable only when:
- source inaccessible
- source broken
- authentication required
- quality unusable
- rights decision required

---

# 28. Acceptance Test

Reject a tour page if:
- hero missing
- legacy gallery missing
- wrong order
- only thumbnail quality used
- old site still hotlinked
- EN/DE alt handling missing
- mobile gallery broken
- images create major CLS
- admin cannot reorder
- admin cannot choose hero

---

# 29. Final Implementation Order

```text
1. identify all tour URLs
2. crawl rendered pages
3. extract media
4. resolve full-size sources
5. download originals
6. hash/deduplicate
7. optimize
8. import media
9. attach to tours
10. preserve order
11. add EN/DE alt text
12. render galleries publicly
13. enable admin gallery management
14. generate migration report
15. QA every tour
```

Do this BEFORE claiming tour migration is complete.

---

# FINAL RULE

Text migration without image migration is incomplete.

For each tour, the admin should eventually see:
- tour program
- pricing
- English content
- German content
- existing slideshow already attached

That is the required result.
