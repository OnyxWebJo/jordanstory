# Automated Media Migration

## Objective
The developer/AI agent must migrate tour and destination slideshows automatically; the owner should not manually re-add existing galleries.

## Pipeline
1. crawl source page with rendered DOM
2. collect img/src/srcset/data-src/lightbox/background assets
3. choose highest legitimate source
4. download original
5. SHA-256 hash
6. deduplicate binary while preserving page/gallery relations
7. sanitize filename
8. generate responsive AVIF/WebP + fallback
9. store width/height/mime/hash/source URL
10. preserve gallery order
11. assign to tour/destination
12. generate/edit EN/DE alt text based on visible subject/context, not keyword stuffing
13. produce migration report

## Do Not
- upscale thumbnails and call them originals
- hotlink old site
- discard originals
- infer landmark identity when uncertain
- duplicate storage because the same image appears on several tours

## Data Model
media(id, original_path, source_url, sha256, width, height, mime, alt_en, alt_de, caption_en, caption_de)
media_relations(media_id, entity_type, entity_id, sort_order, legacy_label)

## Performance
Hero/immersive media has a separate performance budget. Lazy-load below-fold galleries; never lazy-load the initial LCP asset.
