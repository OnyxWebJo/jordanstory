# 30 — Final Handover Checklist
## Jordan Story Tours — Project Completion & Ownership Transfer

**Purpose:** Define everything that must be delivered, documented, tested and transferred before the project is considered complete.

---

# 1. Handover Principle

The client should receive a platform they can operate, not merely source code.

Handover includes:

- code
- data
- content
- credentials ownership
- deployment knowledge
- backups
- admin instructions
- SEO migration records
- 3D assets
- documentation

---

# 2. Source Code

Deliver:

- frontend source
- PHP backend source
- database migrations
- scripts
- tests
- deployment scripts/config
- documentation

---

# 3. Repository

Confirm business/client ownership/access to repository.

Document:

- main branch
- deployment branch/workflow
- release tags
- issue tracking if used

---

# 4. Frontend

Verify handover includes:

- Next.js source
- TypeScript
- design system
- EN/DE routes
- Story components
- booking UI
- immersive components
- static export config

---

# 5. Backend

Include:

- PHP API
- authentication
- booking
- pricing
- admin
- quotes
- payment integration if included
- reports
- publishing workflow
- email templates

---

# 6. Database

Deliver:

- current schema
- migrations
- seed definitions
- ER documentation
- backup instructions
- restore instructions

Do not send production passwords in documentation.

---

# 7. Migration Archive

Include:

- legacy URL inventory
- raw extraction
- normalized records
- verification report
- conflict decisions
- redirect map
- import files

This protects future SEO/business understanding.

---

# 8. Content

Deliver approved:

- EN tour content
- DE tour content
- destinations
- Story Collections
- guides
- FAQs
- legal pages
- booking content
- email templates

---

# 9. Media

Deliver/identify:

- images
- videos
- licenses
- source/rights documentation
- optimized assets
- alt EN/DE
- focal points

---

# 10. 3D Assets

Include:

- final GLB
- LODs
- KTX2 textures
- fallback assets
- source project files where contractually included
- camera path config
- asset licenses
- optimization notes

---

# 11. Branding

Include:

- logo usage
- colors
- typography specification
- Story identity
- component design rules

Do not distribute licensed font files unless licensing explicitly permits it.

---

# 12. Admin Access

Create client-owned Super Admin.

Verify:

- login
- password reset
- MFA if enabled
- role management

Remove test/developer users that are no longer needed.

---

# 13. Hosting Ownership

Document:

- hosting provider
- account owner
- renewal
- server/domain relationship
- cPanel access process

Avoid leaving critical hosting solely under an unrelated developer account.

---

# 14. Domain & DNS

Confirm ownership/access for:

- domain registrar
- DNS
- SSL
- renewal

Document current records.

---

# 15. MySQL

Document:

- database name
- user setup
- backup method
- connection configuration location

Credentials transferred securely, not in this document.

---

# 16. Email Provider

Document:

- provider
- account owner
- sender domain
- SPF
- DKIM
- DMARC
- template ownership

---

# 17. Payment Provider

If included:

- production account ownership
- webhook configuration
- keys ownership
- refund process
- settlement/reconciliation basics

Do not share secrets in plain-text handover docs.

---

# 18. Analytics

Transfer access to:

- analytics property
- Google Search Console
- Google Ads conversion config if included
- monitoring tools

---

# 19. Search Console

Verify:

- property ownership
- sitemap
- indexing
- legacy migration monitoring
- German URLs

---

# 20. Redirect Map

Deliver final:

**Old URL → New URL**

Document:

- status
- reason
- date

Keep permanently available for future migration debugging.

---

# 21. SEO Documentation

Include:

- keyword map
- content clusters
- EN/DE strategy
- canonical rules
- hreflang
- schema rules
- sitemap
- robots
- content freshness plan

---

# 22. AEO/GEO Documentation

Include:

- answer-first content patterns
- entity architecture
- Story definition
- destination relationships
- source/freshness rules

---

# 23. Admin Manual

Explain:

- add/edit tour
- change price
- change itinerary
- manage German
- upload media
- manage booking
- create quote
- manage availability
- publish static rebuild
- read reports
- manage users

---

# 24. Publishing Manual

Document:

```text
Save Draft
→ Review
→ Approve
→ Publish
→ Build
→ Deploy
→ Smoke Test
```

Explain failed-build behavior.

---

# 25. Price Update Manual

Explain:

- edit price
- validate
- approve
- publish
- API/current price behavior
- static rebuild

---

# 26. Booking Manual

Explain statuses:

- New Request
- Reviewing
- Quote Sent
- Awaiting Payment
- Confirmed
- Completed
- Cancelled

Final statuses follow implementation.

---

# 27. German Workflow Manual

Explain:

- create DE draft
- review
- approval
- outdated warning
- publish
- language switch/hreflang

---

# 28. Backup Manual

Document:

- database backup
- media backup
- static release backup
- restore test
- retention

---

# 29. Deployment Manual

Document:

- build environment
- Next.js static export
- PHP deployment
- cPanel/shared-hosting deployment
- environment config
- smoke test
- rollback

---

# 30. Rollback Manual

Explain difference:

**static frontend rollback**
vs
**database restore**

Never instruct staff to restore an old database casually after new bookings.

---

# 31. Security Handover

Confirm:

- developer accounts reviewed
- secrets rotated if needed
- MFA enabled where appropriate
- production debug disabled
- staging secured
- permissions reviewed

---

# 32. Privacy Handover

Confirm:

- privacy EN
- privacy DE
- consent setup
- actual vendors reflected
- retention rules documented

---

# 33. QA Report

Deliver final QA results:

- browsers
- devices
- booking
- admin
- EN
- DE
- immersive
- fallback
- security
- performance
- SEO

---

# 34. Performance Report

Record baseline:

- LCP
- INP
- CLS
- immersive transfer
- FPS test devices
- fallback rate target
- tour-page performance

---

# 35. 3D QA Report

Document:

- full tier devices
- reduced tier
- fallback
- reduced motion
- known limitations
- asset sizes

---

# 36. Known Limitations

Be explicit.

Examples:

- no real-time availability
- German guide not guaranteed
- payment not included in phase 1
- manual static publishing if automation deferred

Do not hide unfinished scope.

---

# 37. Deferred Features

Create backlog:

- third language
- automated CI publication
- payment enhancements
- partner portal
- advanced CRM
- AI admin assistance

Separate from launch requirements.

---

# 38. Test Data Cleanup

Remove/anonymize:

- test bookings
- test customers
- fake reviews
- staging data

Keep QA evidence outside production business reports.

---

# 39. Production Smoke Test

At handover verify:

- homepage
- Siq
- Treasury
- Wadi Rum
- fallback
- EN tour
- DE tour
- booking
- admin
- email
- payment if included
- sitemap
- redirect

---

# 40. First 30 Days

Document monitoring responsibilities:

- 404
- indexing
- rankings
- booking errors
- performance
- German indexing
- 3D failures

---

# 41. Support Boundary

Define:

- warranty/bug-fix period
- what is a bug
- what is new scope
- response method
- infrastructure responsibility

This belongs in commercial agreement if applicable.

---

# 42. Credentials Inventory

Provide a secure checklist of systems requiring ownership transfer:

- domain
- DNS
- cPanel
- MySQL
- email provider
- payment provider
- analytics
- Search Console
- CDN/storage
- error monitoring
- repository

Do not list the passwords in this file.

---

# 43. Final Documentation Package

Must contain project files:

`01` through `30`

plus:

- README
- setup
- deployment
- admin guide
- migration report
- QA report
- release manifest

---

# 44. Final Acceptance

Project is accepted only when:

- required scope works
- business facts verified
- EN complete
- DE complete
- SEO migration safe
- booking works
- admin operates
- 3D/fallback works
- performance acceptable
- security checks pass
- ownership transferred
- documentation complete

---

# 45. Final Product Statement

Jordan Story Tours should leave handover with more than a redesigned website.

It should own:

**a structured tour database,**
**a multilingual content system,**
**a booking operation,**
**a measurable Story product architecture,**
**an immersive Jordan experience,**
**and a maintainable platform that can grow.**

The handover is complete when the business can continue the Story without depending on hidden knowledge held only by the developer.
