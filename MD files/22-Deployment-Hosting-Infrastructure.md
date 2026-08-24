# 22 — Deployment, Hosting & Infrastructure
## Jordan Story Tours — Production Architecture & Operations

**Purpose:** Define a reliable production environment for the multilingual Jordan Story Tours website using **Next.js static export on shared hosting**, a **PHP runtime backend/API**, **MySQL**, media/CDN delivery, and immersive 3D assets.

**Principle:** Infrastructure must protect speed, bookings, SEO continuity and business data without becoming unnecessarily complicated.

---

# 1. Infrastructure Goals

The production environment must provide:

- fast global public delivery
- static Next.js production delivery
- PHP runtime support for booking/admin/business logic
- MySQL persistence
- safe admin access
- CDN delivery for images and 3D assets
- automated deployment
- staging separation
- backups
- monitoring
- SSL
- predictable rollback
- scalable storage

The architecture should remain manageable for a small development/business team.

---

# 2. Logical Architecture

```text
Traveler
   ↓
DNS / CDN / Edge
   ↓
Next.js Static Export
   ├── EN
   ├── DE
   ├── Tours
   ├── Stories
   ├── Destinations
   ├── Guides
   └── Booking UI
   ↓
PHP Backend/API
   ├── Auth
   ├── Booking Logic
   ├── Pricing Engine
   ├── Admin
   ├── Quotes
   ├── Payments
   └── APIs
   ↓
MySQL

Static / Media Layer
   ├── Images
   ├── GLB
   ├── KTX2
   ├── Video
   └── Documents

External Services
   ├── Transactional Email
   ├── Payment Provider
   ├── Analytics
   └── Error Monitoring
```

---

# 3. Hosting Strategy

Production hosting is **shared hosting / cPanel**.

The frontend is built with Next.js but exported as static HTML/CSS/JS before deployment.

Production shared hosting must support:

- static files
- PHP 8.x
- MySQL
- `.htaccess` / rewrite rules
- HTTPS
- cron jobs if required
- sufficient bandwidth/storage

**Node.js is not required as the production runtime.**

Node.js is used only in development/CI/build environments to generate the static Next.js export.

---

# 4. Infrastructure Selection Rule

Do not choose hosting based only on the cheapest monthly price.

Evaluate:

- Next.js compatibility
- server region
- global CDN
- database latency
- backups
- deployment workflow
- logs
- scaling
- storage bandwidth
- support
- operational complexity

---

# 5. Application Region

Choose an application/database region with good connectivity for:

- Jordan Story Tours operations
- European travelers
- German-speaking target market

The shared-hosting PHP runtime and MySQL database should be on the same hosting environment or geographically close.

Do not place the database on another continent without a clear reason.

---

# 6. CDN

Use CDN delivery for public static assets.

CDN candidates should handle:

- images
- JavaScript/CSS
- fonts
- GLB
- KTX2
- video/posters

The immersive homepage especially depends on efficient edge delivery.

---

# 7. 3D Asset Hosting

Do not bundle all large 3D assets directly into the initial application deployment if that harms deployment/runtime efficiency.

Store optimized production assets in:

- object storage
- CDN-backed storage

Examples of asset groups:

```text
/3d/petra/siq-entry/
/3d/petra/siq-middle/
/3d/petra/treasury/
/3d/wadi-rum/
/textures/
/environment/
```

Use versioned/fingerprinted files.

---

# 8. Media Storage

Store tour/destination/Story media in object storage rather than the application filesystem.

Benefits:

- persistent across deployments
- CDN
- scalable
- easier backup
- image processing

The web-root/static deployment should be treated as replaceable. Uploaded media should remain in persistent storage.

---

# 9. Public vs Private Storage

Separate access policy.

## Public
- tour images
- destination images
- Story media
- 3D assets
- approved public documents

## Private
If introduced:
- customer documents
- internal exports
- sensitive operational files

Private files must not be accessible through predictable public URLs.

---

# 10. Database

Use MySQL as the authoritative operational database.

Store:

- tours
- translations
- destinations
- Stories
- pricing
- bookings
- customers
- quotes
- payment records
- redirects
- users
- audit logs
- settings

Do not use browser/local storage as business persistence.

---

# 11. Managed Database Preference

A managed/shared-hosting MySQL service is preferred when budget permits because it can simplify:

- backups
- updates
- monitoring
- failover
- encryption
- access control

Self-host MySQL only if the team is prepared to maintain it properly.

---

# 12. Database Connection Security

Requirements:

- TLS where supported/required
- strong credentials
- restricted network access
- application-specific user
- least privilege
- no public anonymous access

Do not use the database superuser as the normal application connection.

---

# 13. Connection Pooling

Use persistent/shared-hosting-safe MySQL connection patterns.

PHP endpoints should use PDO/prepared statements or a mature framework/database layer.

Monitor slow queries and connection/resource limits where the hosting provider exposes them.

---

# 14. Database Migrations

Deploy migrations through a controlled process.

Production sequence should account for:

1. backup
2. migration compatibility
3. application deployment
4. verification

Prefer backward-compatible migrations when zero/low downtime is needed.

---

# 15. Destructive Migrations

Do not immediately drop old columns/tables during a release that migrates live data.

Safer pattern:

1. add new structure
2. deploy compatible code
3. migrate data
4. verify
5. remove deprecated structure in later release

---

# 16. Environment Separation

Maintain:

## Development
Developer environment.

## Staging
Production-like QA environment.

## Production
Live customer environment.

Use separate:

- databases
- secrets
- storage namespaces/buckets where practical
- payment credentials
- email behavior

---

# 17. Staging Domain

Use a dedicated staging hostname.

Example concept:

`staging.[domain]`

Staging must:

- not be indexed
- not appear in public sitemap
- not send accidental real customer communications
- not use live payment behavior unintentionally

Protect staging access where appropriate.

---

# 18. Environment Variables

Maintain documented variables for categories such as:

```text
DATABASE_URL
AUTH_SECRET
APP_URL
STORAGE_*
EMAIL_*
PAYMENT_*
ANALYTICS_*
ERROR_MONITORING_*
```

Exact names depend on implementation.

Never store real values in the repository.

---

# 19. Secrets

Secrets belong in:

- deployment platform secret storage
- protected environment configuration

Never in:

- Git
- frontend JavaScript
- Markdown project files
- screenshots
- analytics

---

# 20. Secret Rotation

Maintain ability to rotate:

- DB password
- auth secret
- email key
- payment key
- storage key

Document which systems require restart/redeployment after rotation.

---

# 21. DNS

Production domain:

`jordanstorytours.com`

Choose one canonical host:

- apex
or
- `www`

Redirect the other permanently.

Ensure canonical tags use the same preferred host.

---

# 22. DNS Documentation

Before launch record:

- current DNS provider
- A/AAAA/CNAME
- MX
- TXT
- SPF
- DKIM
- DMARC
- verification records

Do not accidentally damage business email during website DNS changes.

---

# 23. SSL

Production and staging must use HTTPS.

Requirements:

- valid certificate
- automatic renewal
- HTTP → HTTPS redirect
- no mixed content

---

# 24. HSTS

Enable HSTS after confirming HTTPS is correctly configured.

Do not prematurely use aggressive preload settings without understanding the operational consequences.

---

# 25. Deployment Pipeline

Recommended:

```text
Code Change
↓
Automated Checks
↓
Next.js Static Build / Export
↓
PHP Backend Tests
↓
Staging Upload
↓
QA
↓
Production Approval
↓
Upload Static Export + PHP Backend
↓
Smoke Tests
↓
Monitoring
```

Do not manually replace random production files.

A controlled cPanel/Git/CI deployment or versioned upload process should deploy:
- the complete static Next.js output
- the PHP backend
- required rewrite/config files

---

# 26. Git Branching

Keep workflow simple.

Example:

- `main` → production-ready
- feature branches → development
- pull/merge review where available

Staging may deploy from approved branch/preview deployment.

Do not create complicated enterprise branching without need.

---

# 27. CI Checks

Before deployment run:

- type check
- lint
- automated tests
- production build
- migration validation
- critical security checks where configured

Optional:

- bundle-size budget
- Lighthouse regression checks

---

# 28. Build Failure

A failed production build must not replace the currently working production release.

Deployment should be atomic where hosting supports it.

---

# 29. Zero/Low Downtime

Aim for deployment without meaningful customer interruption.

Important because a traveler may be:

- reading a tour
- filling booking
- making payment

Avoid restarting infrastructure in ways that unnecessarily interrupt active users.

---

# 30. Booking During Deployment

Booking submissions must use durable database transactions.

Do not keep critical booking state only in application memory.

Deployments/restarts must not erase submitted bookings.

---

# 31. Session Deployment Safety

Where possible, auth/session design should survive ordinary application deployments.

Do not rotate auth/session secrets on every release.

---

# 32. Background Work

If background jobs are introduced for:

- email
- report generation
- media processing
- payment retries

use durable queue/job handling.

Do not rely on a request process continuing after the platform has terminated it.

For first release, keep architecture simple unless queueing is actually required.

---

# 33. Email Infrastructure

Use a transactional email service rather than unreliable local server mail.

Configure:

- verified sending domain
- SPF
- DKIM
- DMARC
- bounce handling where supported

Separate transactional mail from marketing mail.

---

# 34. Email Environments

Development/staging:

- safe test recipients
or
- provider sandbox

Production:

- real customer delivery

Prevent staging from emailing real customers.

---

# 35. Payment Environment

Maintain separate:

- sandbox/test keys
- production/live keys

The application must clearly know which environment it is running in.

Never use live payments during ordinary staging QA.

---

# 36. Payment Webhook Endpoint

Production webhook:

- HTTPS
- signature validation
- idempotent
- logged
- monitored

Staging webhook should use sandbox provider configuration.

---

# 37. Analytics Environment

Production analytics must not be polluted by staging/development.

Options:

- disable production analytics outside production
- use separate test property
- flag/filter internal/test traffic

---

# 38. Search Console

Production only.

Staging must never be submitted.

After launch:

- submit sitemap
- inspect key URLs
- monitor indexing
- monitor migration

---

# 39. Robots Environment Rule

Staging:
prevent indexing.

Production:
allow approved public pages.

Make environment-specific robots behavior explicit so staging rules cannot accidentally reach production.

---

# 40. Sitemap Environment Rule

Generate sitemap using production canonical hostname.

Do not expose:

- staging URLs
- admin
- previews
- private booking pages
- payment callbacks

---

# 41. Logging

Capture server logs for:

- application errors
- booking failures
- payment webhook failures
- auth/security issues
- email failures
- 3D asset delivery errors where visible server-side

Logs must not contain unnecessary PII or secrets.

---

# 42. Error Monitoring

Use application error monitoring where possible.

Tag useful context:

- environment
- release
- route
- locale

Avoid attaching raw booking form contents.

---

# 43. Release Identification

Every deployment should have a release identifier:

- Git commit
- build ID
or
- deployment ID

This makes it possible to correlate new errors with a release.

---

# 44. Uptime Monitoring

Monitor important endpoints:

- homepage
- representative tour
- booking endpoint/health path
- admin login availability where appropriate

A homepage 200 alone does not prove the booking system is healthy.

---

# 45. Health Checks

Create safe health endpoints where infrastructure requires them.

Health checks should not expose:

- secrets
- detailed DB credentials
- internal topology

---

# 46. Database Monitoring

Monitor:

- availability
- storage
- connection count
- query latency
- slow queries
- backup status

---

# 47. Storage Monitoring

Monitor:

- capacity
- bandwidth
- failed uploads
- public/private permissions

3D assets may create significant transfer volume.

---

# 48. CDN Cache Strategy

Fingerprinted static assets:

- long immutable cache

HTML:
- controlled revalidation

Tour content:
- cache/revalidate

Prices:
- invalidate promptly when changed

Booking/admin:
- private/no-cache as appropriate

---

# 49. Cache Purge / Revalidation

Admin publishing should trigger targeted revalidation.

Examples:

Tour update:
- tour page
- relevant listing
- relevant Story
- destination relationships
- sitemap if slug/index status changes

Do not purge the entire site for every minor change unless necessary.

---

# 50. Price Cache Invalidation

When price changes:

- invalidate tour price output
- invalidate affected listing/cards
- preserve old booking snapshots

Price freshness has higher priority than long cache duration.

---

# 51. 3D Cache Versioning

3D files should be immutable/versioned.

When updating a model:

use a new fingerprint/version rather than relying on clients to purge old cached binaries.

---

# 52. Image Processing

If image transformation service is used, define approved sizes:

- thumbnail
- tour card
- Story card
- mobile hero
- desktop hero
- gallery

Avoid arbitrary unlimited transformation sizes if they increase cost/abuse risk.

---

# 53. Backup Strategy

Back up:

- MySQL
- media metadata
- critical private storage
- deployment/config documentation

Public immutable media may be recoverable from source storage, but storage protection/versioning is still recommended.

---

# 54. Database Backup Frequency

Choose frequency based on booking volume.

Recommended baseline:

- automated daily backups
- more frequent point-in-time recovery if provider/budget supports it

A busy booking platform may justify stronger recovery objectives.

---

# 55. Backup Retention

Maintain multiple recovery points.

Example conceptual policy:

- recent daily backups
- weekly longer retention
- monthly archival where needed

Final policy should reflect provider capability, legal needs and budget.

---

# 56. Restore Tests

Regularly test restoring to a non-production environment.

Verify:

- schema
- tours
- prices
- bookings
- users
- relationships

A backup that has never been restored is unproven.

---

# 57. Recovery Objectives

Define:

**RPO — Recovery Point Objective**
How much recent data loss can the business tolerate?

**RTO — Recovery Time Objective**
How long can the booking platform be unavailable?

Set realistic targets based on booking volume and infrastructure budget.

---

# 58. Old Website Backup

Before redesign cutover preserve:

- files
- database
- uploads
- configuration
- URL inventory

Keep it for migration/rollback reference.

---

# 59. Launch Rollback

Prepare the ability to revert:

- application release
- configuration
- DNS where relevant
- database migration where safely possible

Do not automatically roll back a database after new bookings have been written without assessing data loss.

---

# 60. Database Rollback Principle

Application rollback and database rollback are different.

If new production bookings exist after migration:

never restore an old database snapshot casually.

Prefer forward fixes or compatibility migrations.

---

# 61. Maintenance Mode

Avoid maintenance mode for normal deployments.

If emergency maintenance is unavoidable:

- preserve booking data
- show clear message
- provide phone/WhatsApp contact
- return appropriate HTTP behavior

Do not leave search engines seeing a permanent-looking error page.

---

# 62. 503 During Planned Outage

For a genuine short planned outage, use an appropriate temporary service response such as HTTP 503 rather than returning a fake 200 error page.

Use carefully and remove promptly.

---

# 63. Admin Protection

Admin routes:

- authenticated
- noindex
- permission controlled
- rate limited where appropriate

Optional infrastructure-level restrictions may add defense, but cannot replace application authentication.

---

# 64. Infrastructure Access

Use named accounts where possible.

Restrict access to:

- hosting
- database
- DNS
- storage
- payment
- email

Remove unused access.

Enable MFA on critical provider accounts where available.

---

# 65. DNS Account Security

DNS/domain registrar access is critical.

Use:

- MFA
- strong unique password
- limited account sharing
- recovery information kept current

A domain takeover can defeat all application security.

---

# 66. Production Database Access

Developers should not use production DB for normal development.

If manual production access is necessary:

- restrict it
- audit it
- avoid destructive queries
- take backup before risky maintenance

---

# 67. Database Admin Tools

Do not expose a public database-admin interface without strong protection.

Prefer provider console/private access.

---

# 68. Media Upload Limits

Infrastructure should enforce:

- max file size
- approved MIME
- request limits
- processing time limits

Avoid allowing massive uploads to exhaust server resources.

---

# 69. DDoS / Abuse

Use CDN/provider protections where available.

Application-level rate limits protect:

- booking
- login
- contact
- search
- expensive endpoints

Do not build a complex custom DDoS platform.

---

# 70. WAF

A managed WAF can be useful if provided affordably by the CDN/host.

Use sensible rules.

Do not deploy aggressive rules that block legitimate international travelers.

---

# 71. Geographic Access

Do not geo-block countries merely because most customers come from Europe.

Jordan Story Tours is an international travel business.

---

# 72. Dependency Updates

Maintain a regular process for:

- Node.js runtime
- Next.js
- React
- ORM
- auth
- payment SDK
- Three.js
- build tools

Test upgrades on staging first.

---

# 73. Runtime Version

Pin supported runtime versions.

Do not allow production to unexpectedly upgrade to an incompatible major Node.js version.

---

# 74. Package Lock

Commit and use the project package lockfile.

Production builds should be reproducible.

---

# 75. Infrastructure Documentation

Maintain:

- architecture
- providers
- regions
- DNS
- deployment process
- environment variables
- backup process
- restore process
- rollback process
- account ownership
- monitoring

Do not document secret values.

---

# 76. Cost Monitoring

Track monthly costs for:

- application hosting
- database
- storage
- CDN bandwidth
- image processing
- email
- monitoring
- payment fees

3D bandwidth deserves special attention.

---

# 77. 3D Bandwidth Cost

Measure:

- average immersive asset transfer
- full vs reduced tier
- cache hit rate
- geographic bandwidth

Optimize before simply increasing infrastructure spend.

---

# 78. Scaling Strategy

Do not over-engineer for millions of users on day one.

Scale when evidence requires it.

Likely early bottlenecks:

- media/3D bandwidth
- image transformation
- database connection configuration
- inefficient queries
- heavy server rendering

CDN should absorb most static traffic.

---

# 79. Horizontal Scaling

If application traffic grows, If the project later outgrows shared hosting, the static frontend remains portable and the PHP/MySQL backend can be moved to stronger hosting without redesigning the public experience.

Therefore do not store:

- booking state
- sessions requiring local process memory
- uploaded media

only on one server's local filesystem/memory.

---

# 80. Database Scaling

Optimize in order:

1. indexes
2. query design
3. caching
4. connection pooling
5. database resources
6. replicas/advanced architecture if genuinely needed

Do not introduce distributed database complexity prematurely.

---

# 81. Static Generation / Revalidation

Where appropriate use static generation/revalidation for:

- tours
- Stories
- destinations
- guides

But admin publishing must update content predictably.

---

# 82. Dynamic Routes

Keep dynamic server execution for:

- booking
- pricing calculations
- authentication
- admin
- payment
- customer-specific operations

Do not cache private responses publicly.

---

# 83. Deployment Smoke Test

After every production deployment test:

- homepage
- EN tour
- DE tour
- booking start
- admin login page
- one key redirect
- sitemap
- robots

For releases affecting booking, perform a controlled booking test.

---

# 84. Deployment Abort Conditions

Stop/rollback release if:

- application fails health check
- migrations fail
- booking fails
- auth breaks
- key public routes 500
- critical redirects disappear
- production robots blocks the site

---

# 85. SEO Deployment Safety

Deployment must never accidentally:

- change canonical hostname
- enable staging noindex on production
- remove sitemap
- remove redirects
- change locale routing
- expose preview URLs

Include these in smoke tests.

---

# 86. German Deployment Safety

Test at least:

- DE homepage
- DE tour
- language switch
- DE booking
- hreflang

after relevant deployments.

---

# 87. Immersive Deployment Safety

For 3D releases verify:

- assets exist on CDN
- correct CORS
- correct MIME
- fallback
- reduced motion
- mobile tier

A missing GLB must not break the homepage.

---

# 88. CORS

Restrict cross-origin policies to required origins.

3D/media CDN must allow the production site to fetch necessary assets.

Do not use permissive credentials-enabled CORS without need.

---

# 89. Asset MIME Types

Ensure correct serving types for:

- `.glb`
- `.gltf`
- `.ktx2`
- `.wasm` if used
- fonts
- modern images

Incorrect MIME can break browser loading.

---

# 90. Compression

Enable Brotli/gzip for suitable text assets.

Do not inefficiently recompress already compressed media.

---

# 91. Monitoring Dashboard

Operational view should include:

- uptime
- error rate
- response latency
- booking failures
- payment failures
- database health
- deployment/release
- 3D errors
- Core Web Vitals

---

# 92. Alerts

High-priority alerts:

- site unavailable
- booking endpoint failure
- database unavailable
- payment webhook failures
- abnormal server error rate

Lower-priority:

- performance regression
- storage growth
- unusual 3D failure rate

---

# 93. Alert Fatigue

Do not alert on every minor log warning.

Alerts should correspond to something requiring action.

---

# 94. Incident Log

For major incidents record:

- start
- detection
- impact
- root cause
- mitigation
- recovery
- follow-up

This improves future reliability.

---

# 95. Provider Independence

Avoid unnecessary lock-in where reasonable.

Keep:

- MySQL portable
- media source copies
- standard formats
- documented environment

However, do not avoid useful managed services merely for theoretical portability.

---

# 96. Production Ownership

Document who controls:

- domain
- DNS
- hosting
- database
- storage
- email provider
- payment provider
- analytics
- Search Console

Business-critical accounts should not depend on one developer's private account without an agreed ownership arrangement.

---

# 97. Launch Infrastructure Checklist

- [ ] production hosting ready
- [ ] database ready
- [ ] DB backups enabled
- [ ] restore tested
- [ ] storage ready
- [ ] CDN ready
- [ ] 3D assets deployed
- [ ] SSL ready
- [ ] canonical domain ready
- [ ] DNS documented
- [ ] email DNS preserved
- [ ] transactional email ready
- [ ] payment production environment ready if applicable
- [ ] environment secrets configured
- [ ] staging isolated
- [ ] production robots correct
- [ ] production sitemap correct
- [ ] logging active
- [ ] error monitoring active
- [ ] uptime monitoring active
- [ ] deployment pipeline tested
- [ ] rollback plan documented
- [ ] old site backup complete

---

# 98. Recommended Operational Philosophy

Keep the architecture sophisticated where the product needs it:

- multilingual content
- structured tours
- booking
- pricing
- SEO
- immersive 3D

Keep infrastructure simple where complexity adds little value.

Do not introduce:

- Kubernetes
- microservices
- multiple databases
- complex message infrastructure

without a real scaling or reliability requirement.

---

# 99. Infrastructure Decision Rule

For every infrastructure component ask:

1. Does it improve reliability?
2. Does it improve performance?
3. Does it protect data?
4. Does it simplify operations?
5. Is the cost justified?

If the answer is no across these questions, it probably does not belong in the first release.

---

# 100. Final Infrastructure Principle

The traveler should never know how the platform is hosted.

They should simply experience:

**a fast entrance into the Siq,**
**a smooth reveal of Petra,**
**an effortless journey through Jordan,**
**and a booking that works every time.**

Behind that experience, the infrastructure must quietly provide:

**Speed → Reliability → Security → Recoverability → Search continuity.**

The infrastructure carries the Story without becoming the Story.
