# 24 — Static Publishing & Rebuild Workflow
## Jordan Story Tours — MySQL → Next.js Static Export → Shared Hosting

**Purpose:** Define how approved content moves safely from the admin/MySQL system into the live static Next.js website.

---

# 1. Publishing Principle

The public website is static.

The business system is dynamic.

Therefore:

**Admin / MySQL**
→ approved snapshot
→ Next.js build
→ static export
→ shared hosting
→ smoke test
→ live

Saving content does not make it public.

Publishing does.

---

# 2. Publish States

Recommended:

- DRAFT
- REVIEW
- APPROVED
- QUEUED
- BUILDING
- DEPLOYING
- PUBLISHED
- FAILED
- ROLLED_BACK

German translation has its own translation state in addition to publish state.

---

# 3. Content That Requires Rebuild

Rebuild public site after approved changes to:

- homepage content
- tour content
- prices shown publicly
- itinerary
- destinations
- Story Collections
- guides
- public reviews
- SEO metadata
- canonical
- hreflang
- redirects
- sitemap
- public contact/settings
- legal pages

---

# 4. Changes That Do Not Require Public Rebuild

Examples:

- internal booking notes
- booking status
- customer record
- payment record
- admin user
- internal report
- private audit log

These remain PHP/MySQL runtime data.

---

# 5. Publish Button

Admin should have:

**Save Draft**
and
**Publish**

Do not combine them.

Publish action must validate the record first.

---

# 6. Publish Validation

Before queueing:

- required fields present
- pricing valid
- destination relations valid
- Story relation valid
- SEO fields valid
- EN publish status valid
- DE publish status valid where required
- media exists
- no broken references
- no unresolved critical verification issues

---

# 7. Publish Request Record

Store:

- publish_request_id
- requested_by
- requested_at
- affected entities
- affected locales
- reason
- status
- content_snapshot_id
- build_id
- deployment_id
- completed_at
- error_message

---

# 8. Public Content Snapshot

Before build, create a frozen export containing only approved public data.

Example:

```text
snapshot/
├── tours.json
├── destinations.json
├── stories.json
├── guides.json
├── media.json
├── seo.json
├── redirects.json
├── settings.json
└── manifest.json
```

This makes each build reproducible.

---

# 9. Snapshot Rules

Snapshot excludes:

- customers
- bookings
- internal notes
- payment records
- private admin users
- audit logs
- secret settings

---

# 10. Build Environment

Node.js runs in:

- CI
- build server
- developer machine initially

Node.js does not need to run on the shared hosting server.

---

# 11. Build Steps

```text
1. Fetch approved snapshot
2. Validate snapshot
3. Generate routes
4. Build Next.js
5. Static export
6. Generate sitemap
7. Generate hreflang
8. Generate redirects
9. Run crawl/smoke tests
10. Package release
11. Upload/deploy
12. Activate release
13. Verify production
```

---

# 12. Atomic Deployment

Do not overwrite production file-by-file while users browse.

Preferred:

```text
/releases/build-001/
/releases/build-002/
/current -> build-002
```

If symbolic linking is unavailable on shared hosting, use versioned directories plus controlled swap/copy.

---

# 13. Failed Build

If build fails:

- production remains unchanged
- publish request becomes FAILED
- admin sees reason
- MySQL draft/approved data remains
- no half-deployed files

---

# 14. Failed Deployment

If upload succeeds partially but validation fails:

- do not activate it
- keep previous release
- mark FAILED
- preserve logs

---

# 15. Rollback

Rollback only the static frontend release.

Do not automatically revert MySQL operational data.

Static rollback:

**current build → previous successful build**

---

# 16. Emergency Content Disable

For urgent issues:

- admin may disable tour/API booking
- public tour may temporarily show request-only status through runtime API where designed
- urgent rebuild triggered immediately

Do not wait for normal editorial cycle if wrong pricing or unavailable product is live.

---

# 17. Price Publishing

When price changes:

1. MySQL authoritative rule updates
2. booking API immediately uses new rule
3. rebuild requested
4. static price display updates
5. smoke test confirms new price

Server price always wins.

---

# 18. Temporary Price Mismatch

If static page displays stale price before rebuild:

booking review must recalculate and clearly show current authoritative price before final submission.

Do not silently change the total.

---

# 19. German Publishing

EN and DE may have separate content approval but related builds.

Rules:

- shared facts synchronize
- DE editorial copy requires approved status
- hreflang only points to public DE page
- DE sitemap updates with build
- missing DE should not block EN unless page is launch-critical

---

# 20. Translation Outdated State

If EN copy changes:

- mark DE NEEDS_REVIEW if relevant
- retain last approved live DE version unless protected facts make it unsafe
- rebuild only after approval if editorial DE text changed

---

# 21. Redirect Generation

Export active redirect map from MySQL.

Generate hosting-compatible rewrite rules.

Validate:

- source path
- target path
- status
- loops
- chains

---

# 22. Sitemap Generation

Generate from current publish snapshot.

Include only:

- published
- indexable
- canonical
- production URLs

---

# 23. Hreflang Generation

Pair only real equivalents.

Never generate hreflang for unpublished routes.

---

# 24. Build Manifest

Each build stores:

- build_id
- Git commit
- snapshot_id
- created_at
- route_count
- EN route count
- DE route count
- sitemap checksum
- redirect checksum

---

# 25. Smoke Tests

After deployment test:

- homepage
- EN tour
- DE tour
- language switch
- booking start
- redirect
- sitemap
- robots
- 404
- critical assets
- Siq fallback

---

# 26. Publish History

Admin should show:

- version
- date
- requested by
- successful/failed
- affected pages
- rollback target

---

# 27. Manual First-Release Mode

Allowed initially:

1. admin approves content
2. export snapshot
3. developer/build machine runs Next.js export
4. upload static build
5. smoke test
6. mark build published

---

# 28. Automated Future Mode

Recommended later:

Admin Publish
→ secure build webhook
→ CI build
→ validation
→ SFTP/SSH/cPanel deploy
→ smoke test
→ status callback

---

# 29. Publish Security

Only authorized roles may publish.

Content Manager:
may draft/edit

German Editor:
may approve German

SEO Manager:
may modify approved SEO fields

Publisher/Super Admin:
may trigger production publication

---

# 30. Final Principle

**MySQL stores the current truth.**

**The publish snapshot freezes the approved truth.**

**Next.js turns that truth into fast static pages.**

**The deployment system makes it live safely.**
