# 33 — Automated Tour Image Extraction & Migration
## Jordan Story Tours — Galleries, Slideshows, Hero Images & Media Automation

**Purpose:** Require the AI migration agent to automatically extract, download, classify, optimize, and map all existing public tour images from the current Jordan Story Tours website.

**Primary rule:** Tour images must NOT be manually re-added one by one.

The migration agent must treat media extraction as part of each tour extraction workflow.

---

# 1. Required Outcome

For every existing tour page, the AI agent must automatically identify and extract:

- hero image
- slideshow/gallery images
- itinerary images
- thumbnails
- destination images used inside the tour page
- Open Graph/social image where relevant
- image captions
- existing alt text
- image source URLs
- original file names
- image order in the gallery
- image dimensions where available
- image associations with tour/destination

The output must be import-ready for the new Jordan Story Tours media system.

---

# 2. No Manual Gallery Recreation

The migration workflow must NOT require the administrator to:

1. open the old tour
2. download images manually
3. upload images manually
4. reorder the slideshow manually
5. reconnect every image to the tour manually

The AI/crawler should automate these steps wherever technically possible.

---

# 3. Per-Tour Media Extraction

For every tour URL:

```text
Tour Page
↓
Detect Hero Image
↓
Detect Slider / Gallery
↓
Extract All Image URLs
↓
Resolve Original/Largest Available Source
↓
Download
↓
Record Order
↓
Record Metadata
↓
Optimize
↓
Import to New Media Library
↓
Associate with Tour
```

---

# 4. Gallery Detection

The crawler must inspect common gallery patterns including:

- `<img>`
- `<picture>`
- `src`
- `srcset`
- `data-src`
- `data-lazy-src`
- `data-original`
- CSS background images
- slider/carousel markup
- JavaScript gallery configuration
- JSON embedded in page source
- WordPress media URLs
- thumbnail links pointing to larger images

Do not assume the visible thumbnail URL is the highest-quality original.

---

# 5. Slideshow Extraction

For tour-page slideshows, capture:

- slide number/order
- thumbnail URL
- full-size URL
- caption
- alt text
- title
- linked media URL
- active/hidden state where relevant

The original slideshow order should be preserved in the raw migration data.

---

# 6. Hero Image Detection

Determine the likely hero image using:

- page structure
- largest above-the-fold image
- gallery featured image
- Open Graph image
- WordPress featured image
- CSS hero/background source

Store confidence.

Example:

```json
{
  "role": "HERO",
  "confidence": 0.96
}
```

If uncertain, flag for review rather than silently choosing a random image.

---

# 7. Image Source Resolution

When multiple sizes exist:

Example:

```text
image-300x200.jpg
image-768x512.jpg
image-1200x800.jpg
image.jpg
```

Prefer the highest-quality legitimate source that belongs to the same media item.

Avoid unnecessarily downloading tiny thumbnails when larger source exists.

---

# 8. WordPress Image Handling

If the old website uses WordPress-style media:

- inspect `srcset`
- inspect attachment links
- detect size suffixes
- attempt to identify original upload
- preserve original URL
- preserve selected migrated URL

Do not blindly remove size suffixes without verifying the resulting URL exists.

---

# 9. CSS Background Images

Some hero/slideshow media may be loaded through CSS.

The extraction agent must inspect:

- inline styles
- computed/source CSS rules where accessible
- `background-image`
- responsive background definitions
- lazy-load attributes

These images must not be missed merely because no `<img>` tag exists.

---

# 10. JavaScript-Loaded Galleries

If gallery images are injected after page load:

Use browser rendering/headless extraction where necessary.

Inspect:

- DOM after page initialization
- slider data structures
- inline JSON
- script configuration
- network-loaded image URLs where technically available

Do not rely only on raw HTML when the slideshow is dynamic.

---

# 11. Duplicate Detection

The same image may appear:

- as hero
- in slideshow
- as thumbnail
- in destination card
- across multiple tours

Use duplicate detection based on:

- source URL
- normalized file name
- content hash after download

Do not store identical binary files repeatedly without need.

---

# 12. Cross-Tour Reuse

If the same image is used in multiple tours:

Store one media asset where appropriate and multiple associations.

Example:

```text
media_petra_treasury_001
→ Tour A
→ Tour B
→ Petra destination
```

This reduces storage and keeps media metadata consistent.

---

# 13. Download Workflow

For each approved public image:

1. validate URL
2. fetch image
3. verify MIME/type
4. calculate hash
5. detect duplicate
6. preserve original
7. create optimized versions
8. store media record
9. associate with tour
10. record migration evidence

---

# 14. Local Migration Storage

Suggested staging layout:

```text
migration/media/
├── originals/
│   ├── tours/
│   ├── destinations/
│   └── shared/
├── optimized/
├── manifests/
└── failed/
```

---

# 15. Tour Folder Structure

Example:

```text
migration/media/originals/tours/
└── tour_petra_wadi_rum_amman/
    ├── hero/
    ├── gallery/
    └── itinerary/
```

Physical duplication is optional if using a hash-based asset store.

The manifest is the authoritative relationship.

---

# 16. Media Manifest

Every extracted asset requires a record.

Example:

```json
{
  "id": "media_01HXYZ",
  "source_url": "https://jordanstorytours.com/wp-content/uploads/...",
  "source_page": "https://jordanstorytours.com/tour/...",
  "original_filename": "petra.jpg",
  "sha256": "...",
  "mime_type": "image/jpeg",
  "width": 1920,
  "height": 1080,
  "role": "GALLERY",
  "gallery_order": 3,
  "existing_alt": "Petra Jordan",
  "existing_caption": null,
  "tour_ids": [
    "tour_example"
  ],
  "destination_ids": [
    "dest_petra"
  ],
  "rights_status": "LEGACY_SITE_ASSET",
  "migration_status": "EXTRACTED"
}
```

---

# 17. Rights Status

Because the images already appear on the existing Jordan Story Tours website, migration can identify them as:

`LEGACY_SITE_ASSET`

But this does NOT automatically prove unrestricted ownership.

Recommended rights states:

- LEGACY_SITE_ASSET
- VERIFIED_OWNED
- VERIFIED_LICENSED
- NEEDS_RIGHTS_REVIEW
- REPLACE
- RESTRICTED

The AI must preserve images while also keeping rights traceability.

---

# 18. Do Not Discard Images During Rights Review

If ownership is uncertain:

- extract it
- preserve it in the migration archive
- mark it NEEDS_RIGHTS_REVIEW
- do not lose the source

Publishing rules can decide later whether it remains live.

---

# 19. Image Optimization

Create optimized web versions.

Recommended:

- AVIF where supported/useful
- WebP
- fallback JPEG/PNG only where necessary

Generate sizes such as:

- 480px
- 768px
- 1200px
- 1600px
- original/master where appropriate

Do not upscale low-resolution originals.

---

# 20. Compression

Optimize while maintaining tourism-quality photography.

Avoid destructive compression that makes Petra/Wadi Rum imagery visibly poor.

---

# 21. Metadata Extraction

Preserve if available:

- width
- height
- MIME
- source file
- EXIF orientation
- caption
- alt
- WordPress attachment title

Strip sensitive/unnecessary EXIF metadata from public optimized copies where appropriate.

---

# 22. Alt Text

Existing alt text must be preserved as source evidence.

Then generate/review:

- `alt_en`
- `alt_de`

Do not overwrite the raw existing alt.

Example:

```json
{
  "existing_alt": "wadi rum",
  "alt_en": "Red sandstone desert landscape in Wadi Rum, Jordan",
  "alt_de": "Rote Sandsteinlandschaft im Wadi Rum in Jordanien"
}
```

Final alt should describe the visible image naturally.

---

# 23. German Image Metadata

German pages require German:

- alt text
- caption where used
- media title where surfaced

The binary image can be shared between EN and DE.

Do not duplicate the physical image just because the language differs.

---

# 24. Gallery Order

Preserve existing gallery order during raw migration.

Store:

`sort_order`

Admin may reorder later.

---

# 25. Hero Assignment

If a gallery has a featured/first slide that clearly serves as hero:

set:

`role = HERO`

The same media can optionally also appear in the gallery depending on design rules.

---

# 26. Tour Associations

Every migrated image should be associated with:

- one or more tours
- destination(s) where confidently identifiable
- Story Collection only where appropriate

Do not automatically classify destinations solely from filename.

Use page context and verified metadata.

---

# 27. Destination Recognition

The AI may suggest:

- Petra
- Wadi Rum
- Dead Sea
- Amman
- Jerash
- Aqaba
- Madaba
- etc.

based on:

- tour context
- caption
- alt
- filename
- visible-image analysis

But low-confidence destination classification must be flagged.

---

# 28. Image Classification Confidence

Store:

- HIGH
- MEDIUM
- LOW

or numeric confidence.

Example:

```json
{
  "destination_id": "dest_petra",
  "confidence": 0.98
}
```

---

# 29. Visual Image Understanding

The extraction agent may use image understanding to identify:

- Treasury
- Siq
- Wadi Rum
- Dead Sea
- Jerash ruins
- desert camp
- vehicle
- hotel/camp interior

This helps classification and alt generation.

It must not invent specific hotel/camp identity solely from appearance.

---

# 30. Image Quality Score

Optional automated score:

- dimensions
- sharpness
- compression
- aspect ratio
- duplicate
- watermark presence

Use this to flag weak assets.

Do not automatically discard important source imagery.

---

# 31. Watermarks

Detect likely:

- third-party watermark
- stock watermark
- old-site branding

Flag:

`NEEDS_REVIEW`

Do not use clearly unauthorized stock-watermarked imagery on the new site.

---

# 32. Broken Image URLs

If source image fails:

record:

- source URL
- HTTP status
- page
- gallery position
- retry status

Do not silently omit.

---

# 33. Hotlink Prevention

The new site must not permanently load old media via the old WordPress URL.

Images should be migrated to the new storage/CDN/shared-hosting media location.

The old URL is retained only as migration evidence.

---

# 34. New Media Storage

Production location may be:

- shared-hosting media folder
- CDN-backed storage
- object storage

Database stores storage path/URL.

---

# 35. MySQL Media Records

Use the media schema defined earlier.

Store:

- media ID
- path
- dimensions
- rights
- source
- hash
- metadata

Do not store image binary in MySQL.

---

# 36. Media Relationship Table

Use `media_links`.

Example:

```text
media_id
entity_type = TOUR
entity_id
role = GALLERY
sort_order
```

---

# 37. Tour Extraction Integration

Every raw tour `.md` file should include:

## Media

```text
Hero:
- media_id
- source URL

Gallery:
1. media_id
2. media_id
3. media_id
...
```

The raw tour extraction is incomplete until its gallery extraction has run.

---

# 38. Extraction Completion Rule

A tour must NOT be marked `RAW_EXTRACTION_COMPLETE` unless:

- textual content extracted
- itinerary extracted
- price extracted
- inclusions/exclusions extracted
- booking fields extracted
- hero extracted
- slideshow/gallery extracted
- media manifest written

---

# 39. Browser Rendering Requirement

If the slideshow requires JavaScript, the agent must use a browser-rendered crawl.

Do not mark gallery as empty merely because server HTML lacks the images.

---

# 40. Pagination / Lazy Gallery

If gallery loads more images after:

- clicking next
- opening lightbox
- scrolling
- lazy loading

the crawler should inspect all slides/items.

Do not extract only the initially visible slide.

---

# 41. Lightbox

If clicking a thumbnail opens a higher-resolution image:

capture the high-resolution/lightbox URL.

Store thumbnail separately only if operationally useful.

---

# 42. Responsive Source Selection

If `srcset` contains multiple sizes:

store:

- original candidates
- chosen master source

Do not download all size variants unnecessarily.

The new system generates its own optimized sizes.

---

# 43. File Naming

New optimized file names should be clean and stable.

Example:

```text
petra-treasury-jordan-01.webp
wadi-rum-desert-jordan-02.webp
```

But media ID remains authoritative.

Avoid renaming files solely for keyword stuffing.

---

# 44. SEO Image Rules

For public images:

- descriptive alt
- appropriate filename
- dimensions
- responsive delivery
- optimized format
- surrounding context

Do not keyword-stuff image metadata.

---

# 45. Image Sitemap

If the implementation later uses image sitemap support, it should be generated automatically from published media associations.

Do not manage manually.

---

# 46. Static Next.js Integration

The approved public media manifest becomes part of static build input.

Next.js uses it to render:

- hero images
- gallery/slideshow
- destination cards
- Story cards
- guide images

Core media relationships are available at build time.

---

# 47. Admin Media Library

After import, admin should see all migrated images automatically.

Filters:

- Tour
- Destination
- Story
- Source
- Rights status
- Role
- Duplicate
- Needs review

---

# 48. Admin Tour Gallery

When opening a tour in admin:

the gallery should already be populated from migration.

Admin may:

- reorder
- remove
- replace
- change hero
- edit EN/DE alt
- add captions

No manual reconstruction required.

---

# 49. Batch Import

Media importer should support:

```text
Tour Dataset
+
Media Manifest
+
Downloaded Assets
↓
Batch Import
```

Do not require one API request per image if a safer batch import is possible.

---

# 50. Failed Media Import

If one image fails:

- continue safe independent records
- mark failure
- keep source evidence
- report affected tour

Do not abort the entire migration because of one corrupt image unless critical.

---

# 51. Duplicate Binary Storage

If content hash already exists:

reuse existing media record/file where appropriate.

Add new association rather than re-upload duplicate.

---

# 52. Image Versioning

When an admin replaces an image:

preserve previous revision/source metadata where useful.

Public site uses current approved version after rebuild.

---

# 53. Slideshow Component

The new public tour slideshow must:

- use extracted gallery order
- responsive images
- swipe on mobile
- keyboard access
- arrows
- optional thumbnails
- lazy-load non-first images
- avoid layout shift
- support EN/DE captions

Do not use a heavy carousel library unless justified.

---

# 54. First Gallery Image

Preload only when it is the LCP/hero asset.

Do not preload the entire gallery.

---

# 55. Performance

Gallery images below the initial viewport:

- lazy load
- responsive sizes
- modern format

The image extraction automation must not create a performance problem by publishing original full-size images everywhere.

---

# 56. 3D References

Tour-gallery images may also be classified as potential reference material for:

- Siq modeling
- Treasury angle
- Wadi Rum visual direction

But do not automatically convert them into 3D assets.

---

# 57. Crawl Ethics / Scope

Only extract media from pages/assets belonging to the current Jordan Story Tours site or clearly approved linked sources.

Do not crawl unrelated third-party sites for replacement images during migration unless separately instructed.

---

# 58. Media Extraction Report

Per tour output:

```text
Tour:
Source URL:

Hero found: YES/NO
Gallery found: YES/NO
Images discovered:
Images downloaded:
Duplicates:
Broken:
Rights review:
Low quality:
Needs manual review:
```

---

# 59. Global Media Report

Summarize:

- total discovered
- total downloaded
- unique assets
- duplicates
- broken sources
- rights review
- low resolution
- tours with missing galleries

---

# 60. Media QA

Before final migration:

- [ ] every tour checked
- [ ] slideshow images extracted
- [ ] hero extracted
- [ ] original source URLs saved
- [ ] order preserved
- [ ] high-res source selected
- [ ] duplicate hash calculated
- [ ] optimized variants created
- [ ] tour associations created
- [ ] EN alt generated/reviewed
- [ ] DE alt generated/reviewed
- [ ] rights status assigned
- [ ] broken images reported
- [ ] no permanent hotlinks
- [ ] admin gallery populated automatically

---

# 61. AI Agent Mandatory Instruction

**DO NOT ask the user to manually upload or reconstruct existing tour galleries if the images are publicly accessible on the current Jordan Story Tours website.**

The agent must first attempt automated extraction.

Only request manual intervention when:

- source asset is inaccessible
- source is broken
- login/private access is required
- rights are unclear and publishing decision is needed
- original quality is unusable

---

# 62. Final Principle

The existing website already contains valuable visual content.

The migration should preserve that investment automatically.

For every tour:

**extract the program,**
**extract the price,**
**extract the booking fields,**
**extract the slideshow,**
**preserve the original media,**
**optimize it,**
**and connect it automatically to the new tour.**

The administrator should open the migrated tour and find its gallery already there.
