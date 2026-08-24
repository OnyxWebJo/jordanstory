# 29 — Project Folder Structure
## Jordan Story Tours — Next.js Static Frontend + PHP/MySQL Backend

**Purpose:** Define a clean repository structure for development, migration, static publishing and shared-hosting deployment.

---

# 1. Recommended Repository

```text
jordan-story-tours/
├── frontend/
├── backend/
├── database/
├── migration/
├── content/
├── assets/
├── scripts/
├── docs/
├── tests/
└── deploy/
```

---

# 2. frontend/

Next.js application.

```text
frontend/
├── app/
├── components/
├── lib/
├── data/
├── public/
├── styles/
├── types/
├── tests/
├── next.config.*
├── package.json
└── tsconfig.json
```

---

# 3. frontend/app/

Conceptual:

```text
app/
├── (en)/
│   ├── page.tsx
│   ├── tours/
│   ├── destinations/
│   ├── stories/
│   └── guides/
├── de/
│   ├── page.tsx
│   ├── touren/
│   ├── reiseziele/
│   ├── stories/
│   └── reisefuehrer/
├── booking/
└── not-found.tsx
```

Actual locale route design follows approved architecture.

---

# 4. frontend/components/

```text
components/
├── ui/
├── layout/
├── tour/
├── destination/
├── story/
├── guide/
├── booking/
├── seo/
├── map/
└── immersive/
```

---

# 5. immersive/

```text
components/immersive/
├── Experience.tsx
├── CameraRig.tsx
├── SceneManager.tsx
├── CapabilityDetector.ts
├── PerformanceTier.ts
├── fallback/
├── petra/
│   ├── SiqScene.tsx
│   ├── TreasuryScene.tsx
│   └── cameraPath.ts
├── wadi-rum/
├── dead-sea/
└── transitions/
```

---

# 6. frontend/lib/

```text
lib/
├── api/
├── i18n/
├── seo/
├── schema/
├── pricing-display/
├── analytics/
├── validation/
└── utils/
```

No direct MySQL code here.

---

# 7. frontend/data/

Generated public build input.

```text
data/
├── tours.json
├── destinations.json
├── stories.json
├── guides.json
├── seo.json
└── manifest.json
```

Generated from approved snapshot.

Do not commit private data.

---

# 8. backend/

PHP runtime.

```text
backend/
├── public/
│   └── api/
├── src/
├── config/
├── routes/
├── templates/
├── storage/
├── tests/
└── composer.json
```

---

# 9. backend/src/

```text
src/
├── Auth/
├── Booking/
├── Pricing/
├── Tour/
├── Customer/
├── Quote/
├── Payment/
├── Publishing/
├── Admin/
├── Reports/
├── Email/
├── Security/
├── Database/
└── Support/
```

---

# 10. backend/routes/

```text
routes/
├── public.php
├── admin.php
├── payment.php
└── webhook.php
```

---

# 11. backend/config/

Configuration code only.

Secrets come from environment variables.

---

# 12. database/

```text
database/
├── migrations/
├── seeds/
├── schema/
├── backups-readme/
└── queries/
```

---

# 13. database/migrations/

Example:

```text
001_initial.sql
002_tours.sql
003_booking.sql
004_publish_workflow.sql
```

---

# 14. migration/

```text
migration/
├── raw/
├── normalized/
├── verified/
├── import/
├── conflicts/
├── redirects/
└── reports/
```

---

# 15. content/

Human-readable editorial files.

```text
content/
├── en/
│   ├── tours/
│   ├── destinations/
│   ├── stories/
│   └── guides/
└── de/
    ├── tours/
    ├── destinations/
    ├── stories/
    └── guides/
```

---

# 16. assets/

Production source assets not necessarily shipped directly.

```text
assets/
├── branding/
├── images/
├── video/
├── 3d/
│   ├── petra/
│   ├── wadi-rum/
│   ├── dead-sea/
│   └── shared/
└── licenses/
```

Do not commit huge source assets to Git if unsuitable; use proper asset storage and manifests.

---

# 17. scripts/

```text
scripts/
├── export-public-data/
├── validate-import/
├── build-static/
├── generate-redirects/
├── deploy/
├── smoke-test/
└── migrate/
```

---

# 18. docs/

Contains specifications 01–30.

```text
docs/
├── 01-...
├── ...
└── 30-Final-Handover-Checklist.md
```

---

# 19. tests/

Cross-system tests:

```text
tests/
├── e2e/
├── seo/
├── migration/
├── booking/
└── smoke/
```

---

# 20. deploy/

```text
deploy/
├── shared-hosting/
├── htaccess/
├── staging/
├── production/
└── rollback/
```

---

# 21. Static Export Output

Do not mix generated output with source.

Example:

```text
frontend/out/
```

Deployment script uploads this to production web root.

---

# 22. Shared Hosting Web Root

Conceptual:

```text
public_html/
├── index.html
├── de/
├── tours/
├── destinations/
├── _next/
├── assets/
├── api/
│   └── index.php / PHP routing
└── .htaccess
```

Exact API routing may use `/api/` subdirectory.

---

# 23. PHP Outside Public Root

Where hosting permits, keep sensitive PHP application code outside `public_html`.

Expose only the public API entrypoint.

If shared hosting prevents this, deny direct access to non-public directories via configuration.

---

# 24. Uploaded Media

Use a persistent directory or external storage.

Do not put uploads inside a release directory that is replaced on every deployment.

---

# 25. Environment Files

Examples:

```text
frontend/.env.example
backend/.env.example
```

Never commit production `.env`.

---

# 26. Naming

Use descriptive names.

Avoid:

- `new2`
- `final-final`
- `testpage`
- `temp2`

Version through Git/build IDs.

---

# 27. Code Ownership

Immersive code should remain isolated so a content developer does not accidentally alter the 3D engine.

Pricing/business logic belongs in backend.

---

# 28. Public/Private Boundary

Never place inside frontend static data:

- bookings
- customers
- users
- payments
- audit logs
- private notes
- secrets

---

# 29. Build Workflow

```text
backend/MySQL
→ export approved public snapshot
→ frontend/data/
→ Next.js build/export
→ frontend/out/
→ deploy
```

---

# 30. Final Principle

The folder structure should make the architecture obvious:

**frontend = experience**

**backend = business actions**

**database = truth**

**migration = history**

**content = editorial work**

**assets = visual world**

**deploy = production safety**
