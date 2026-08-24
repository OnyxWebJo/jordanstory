# 25 — Admin Publishing Workflow
## Jordan Story Tours — Draft, Review, Approval & Publication

**Purpose:** Define how administrators safely edit and publish tours, prices, German translations, SEO and business-critical content.

---

# 1. Separation of Actions

Admin actions are distinct:

- Save Draft
- Submit for Review
- Approve
- Publish
- Archive

Never treat every save as a live-site update.

---

# 2. Core Content States

- DRAFT
- IN_REVIEW
- APPROVED
- PUBLISHED
- ARCHIVED

Additional:
- NEEDS_BUSINESS_CONFIRMATION
- OUTDATED

---

# 3. German Translation States

- NOT_STARTED
- DRAFT
- NEEDS_REVIEW
- APPROVED
- PUBLISHED
- OUTDATED

---

# 4. Tour Editing

A content editor may modify:

- title
- summary
- itinerary copy
- destination associations
- Story associations
- images
- FAQ
- SEO fields if permitted

Protected facts remain permission-controlled.

---

# 5. Protected Business Fields

Require appropriate permission:

- price
- price basis
- availability
- traveler limits
- accommodation
- guide rule
- inclusions/exclusions
- transport
- payment requirement
- cancellation settings

---

# 6. Publishing Roles

Suggested:

**Content Manager**
drafts EN content

**German Editor**
reviews DE

**SEO Manager**
reviews SEO/redirects

**Booking Manager**
reviews operational facts

**Super Admin / Publisher**
final publication

---

# 7. Business Verification Queue

For uncertain facts:

- field
- current source
- conflict
- severity
- proposed clarification
- assigned reviewer
- status

Publication can be blocked for critical unresolved facts.

---

# 8. Publish Preview

Before publishing show:

- page preview EN
- page preview DE
- price
- itinerary
- CTA
- metadata
- canonical
- hreflang
- Story association
- booking availability

---

# 9. Price Change Workflow

1. edit rule
2. validate
3. show previous vs new
4. enter reason
5. approve
6. booking API uses new rule
7. static rebuild requested

Price changes are audited.

---

# 10. Dangerous Price Change Confirmation

For large/structural changes require explicit confirmation.

Show:

- old price
- new price
- percentage change
- affected traveler tiers
- affected tours
- effective date

---

# 11. Emergency Tour Disable

Authorized user can mark:

- TEMPORARILY_UNAVAILABLE
or
- REQUEST_ONLY

The booking API should honor this immediately.

Then urgent static rebuild follows.

---

# 12. SEO Publishing

SEO changes may include:

- title
- description
- index/noindex
- canonical override
- redirect
- social metadata

High-risk changes should warn when:

- canonical changes
- slug changes
- index becomes false
- redirect target changes

---

# 13. Slug Change

On published page:

1. enter new slug
2. show old URL
3. require redirect target
4. update hreflang mapping
5. queue rebuild

Do not allow silent URL deletion.

---

# 14. German Review Screen

Show side-by-side:

- EN source
- DE draft
- protected shared facts
- last source update
- last DE review
- status

---

# 15. German Fact Drift

If shared fact changes:

- update structured shared fact
- mark related DE narrative copy NEEDS_REVIEW if necessary
- do not manually duplicate the fact in DE data

---

# 16. Media Publish Workflow

Media requires:

- rights status
- alt EN
- alt DE where needed
- focal point
- destination/tour association

Unknown-rights media should be blocked.

---

# 17. Review Publication

Only approved genuine reviews may publish.

No AI-generated review creation.

---

# 18. Guide Publishing

Guides require:

- source/fact check where relevant
- EN review
- DE review if German page
- SEO review
- related tour links
- next review date for time-sensitive topics

---

# 19. Scheduled Publication

Optional later.

Support:

- publish_at
- unpublish_at

Do not require this for launch.

---

# 20. Revision History

Every major content record should preserve:

- author
- timestamp
- changed fields
- previous content
- current content

---

# 21. Revert

Allow reverting content to a previous draft/revision.

Reverting does not automatically deploy until publication occurs.

---

# 22. Build Status UI

Admin displays:

- current live build
- pending changes
- last successful build
- last failed build
- publish queue
- affected pages

---

# 23. Pending Changes Indicator

Show when MySQL differs from live static build.

Example:

**Live:** v42  
**Draft:** 3 changes pending publication

---

# 24. Publication Failure

Admin should see:

- build failed
- deployment failed
- validation failed
- affected record
- error summary

Production remains on previous build.

---

# 25. Publication Audit

Record:

- who approved
- who published
- build ID
- snapshot ID
- date
- affected routes

---

# 26. Bulk Publish

Allow only when safe.

Examples:

- approved German translations
- guide updates

Avoid bulk publishing unverified prices.

---

# 27. Archive Workflow

Archiving a public page requires:

- SEO decision
- redirect decision
- removal from sitemap
- route handling

Do not hard-delete.

---

# 28. Final Principle

Admin workflow protects three things:

**the business facts,**
**the German/English quality,**
and
**the live website.**

Editing is flexible.

Publishing is controlled.
