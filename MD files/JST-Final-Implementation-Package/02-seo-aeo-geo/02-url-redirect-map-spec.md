# URL Migration & Redirect Specification

Before launch crawl/export every legacy URL and assign:
- KEEP: same canonical URL
- MOVE: one-to-one 301 to best equivalent
- MERGE: 301 only when content intent genuinely merges
- RETIRE: 410 only when no equivalent/value remains

Never mass-redirect old tours/articles to the homepage.

Columns for implementation CSV:
`old_url,new_url,status_code,language,page_type,reason,verified`

Preserve high-value existing article slugs where practical.
Generate sitemap only from canonical indexable URLs.
