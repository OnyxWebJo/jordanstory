# 17 — Security, Privacy & Compliance
## Jordan Story Tours — Public Website, Booking System & Admin Dashboard

**Purpose:** Define the security, privacy and operational controls for the redesigned Jordan Story Tours platform.

**Scope:** English + German public website, tour booking, custom-tour requests, transportation requests, customers, quotes, payments, admin dashboard, media, analytics and integrations.

**Principle:** Collect the minimum data required, protect it throughout its lifecycle, and never sacrifice security for convenience.

> This is a technical/product specification, not jurisdiction-specific legal advice. Final legal texts and compliance obligations should be reviewed for the countries and payment/marketing services actually used.

---

# 1. Security Objectives

The platform must protect:

- customer personal information
- booking records
- pricing
- payment status
- internal notes
- admin accounts
- content
- media
- business reports
- system configuration

Primary risks:

- unauthorized admin access
- account takeover
- spam/bot submissions
- injection
- XSS
- CSRF
- malicious uploads
- data leakage
- broken access control
- payment spoofing
- accidental publication
- excessive data retention

---

# 2. Data Minimization

Collect only what is genuinely required.

Typical booking data may include:

- name
- email
- phone/WhatsApp
- nationality/country where operationally useful
- travel date
- number of travelers
- selected tour
- pickup information
- accommodation information where required
- special request

Do not request passport numbers, identity documents, health information or other sensitive data unless a verified business process truly requires them.

---

# 3. Public Booking Form

The booking form must use:

- HTTPS
- server-side validation
- rate limiting
- spam protection
- sanitized input
- secure database writes
- clear privacy notice
- consent controls where required

Client-side validation is only for user experience.

---

# 4. Form Validation

Validate:

- required fields
- length
- allowed values
- email format
- phone format
- dates
- traveler counts
- IDs
- enum values
- free-text size

Never trust values submitted from hidden fields or dropdowns.

---

# 5. Server-Authoritative Pricing

Never trust:

- price
- discount
- total
- deposit
- extra price

sent by the browser.

Server flow:

1. receive selected options
2. load current tour rules
3. validate travel date
4. calculate price
5. create price snapshot
6. save booking

---

# 6. Admin Authentication

Admin access requires a mature authentication implementation.

Requirements:

- secure password hashing
- secure session cookies
- HttpOnly
- Secure
- SameSite
- session expiration
- login rate limiting
- account disable capability

Do not build custom cryptography.

---

# 7. Multi-Factor Authentication

MFA should be available and strongly recommended for:

- Super Admin
- Finance
- users with payment/refund access
- users with account-management permissions

---

# 8. Role-Based Access Control

Recommended roles:

- Super Admin
- Booking Manager
- Booking Agent
- Content Manager
- German Editor
- SEO Manager
- Finance

Permissions are enforced server-side.

Hiding a button is not authorization.

---

# 9. Least Privilege

Examples:

German Editor:
- edit German content
- cannot change pricing
- cannot manage users

SEO Manager:
- metadata
- redirects
- SEO reporting
- cannot view unnecessary customer details

Finance:
- payment/refund data
- cannot publish tour content unless separately permitted

---

# 10. Sensitive Admin Actions

Require stronger controls for:

- changing prices
- issuing refunds
- changing payment status manually
- deleting/archive actions
- changing roles
- changing business contact details
- exporting customer data

Log these actions.

---

# 11. Audit Logs

Audit:

- login/security events
- tour price changes
- booking status changes
- payment/refund changes
- publishing
- user/role changes
- exports
- redirect changes
- important settings

Store:

- actor
- action
- entity
- timestamp
- relevant old/new values

Do not store passwords or card details.

---

# 12. Password Policy

Use sensible modern requirements.

Prefer:

- adequate minimum length
- breached/common-password checks if supported
- password manager compatibility
- no unnecessary forced periodic resets

Force reset when compromise is suspected.

---

# 13. Account Recovery

Password reset tokens must be:

- random
- single-use
- short-lived
- invalidated after successful reset

Do not reveal whether arbitrary email addresses belong to admin accounts unnecessarily.

---

# 14. Session Management

Support:

- logout
- session expiry
- revoke sessions
- invalidate sessions after critical account changes

Consider displaying active sessions for privileged users.

---

# 15. Brute-Force Protection

Protect:

- admin login
- reset request
- reset confirmation
- MFA verification

Use rate limits and progressive controls.

---

# 16. CSRF

Protect state-changing authenticated actions from CSRF using framework/session protections and appropriate token/origin mechanisms.

Especially:

- pricing
- publishing
- bookings
- refunds
- settings
- users

---

# 17. XSS

Prevent XSS through:

- escaped output
- sanitized rich text
- strict CMS editor rules
- CSP
- safe URL validation

Do not render arbitrary admin-entered HTML unsanitized.

---

# 18. SQL Injection

Use ORM/parameterized queries.

Never concatenate user input into SQL.

Raw SQL must use parameters and code review.

---

# 19. Command / SSRF Protection

If the system later fetches remote media or URLs:

- validate protocols
- restrict destinations where appropriate
- block private/internal network targets
- limit response size/time

Do not allow arbitrary server-side URL fetching.

---

# 20. File Upload Security

Validate:

- MIME type
- extension
- file signature where practical
- size
- image dimensions
- allowed formats

Rename uploaded files using generated storage keys.

Do not execute uploaded files.

---

# 21. Media Storage

Public marketing media and private customer documents must never share the same exposure model.

Public:
- tour images
- destination images
- Story media

Private if ever introduced:
- identity/travel documents

Private documents require authenticated access and separate storage policies.

---

# 22. SVG Uploads

SVG can contain active content.

Either:

- disallow arbitrary SVG upload
or
- sanitize using a trusted pipeline

Do not render untrusted raw SVG directly.

---

# 23. Rich Text Editor

Allowed formatting should be constrained.

Permit:
- headings
- paragraphs
- lists
- safe links
- approved embeds if needed

Strip:
- scripts
- event handlers
- unsafe iframes
- arbitrary style injection

---

# 24. Content Security Policy

Implement a CSP compatible with required services.

Control:

- scripts
- styles
- images
- fonts
- frames
- connections
- media

Avoid broad `*` policies and unnecessary `unsafe-eval`.

Three.js itself does not justify weakening the entire site security policy.

---

# 25. Security Headers

Configure appropriate:

- Strict-Transport-Security
- Content-Security-Policy
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- frame protection via CSP/frame-ancestors

---

# 26. HTTPS

All production traffic must use HTTPS.

Redirect HTTP → HTTPS.

Never submit booking/admin credentials over HTTP.

---

# 27. Cookies

Classify cookies:

- essential
- analytics
- marketing

Essential authentication/booking cookies should not be blocked when necessary for requested functionality.

Non-essential cookies/scripts should follow the applicable consent model.

---

# 28. Consent Management

Because the site targets international travelers including German-speaking visitors, design consent controls conservatively.

The consent UI should:

- distinguish necessary/non-necessary categories
- allow reject where required
- remember choice
- allow later changes
- avoid preselecting optional consent where not permitted

Final legal implementation depends on actual services and target markets.

---

# 29. Analytics

Prefer privacy-conscious analytics configuration.

Do not send unnecessary personal booking fields into analytics.

Never send:

- customer name
- email
- phone
- WhatsApp
- booking notes

as analytics event parameters.

---

# 30. Google Analytics / Advertising

If GA4, Google Ads or remarketing is used:

- configure consent behavior appropriately
- document purposes in privacy information
- avoid leaking PII
- load according to applicable consent requirements

---

# 31. Booking Attribution

UTM/referral data may be stored for legitimate business analytics.

Keep it separate from unnecessary behavioral profiling.

Define retention.

---

# 32. Privacy Notice

Provide an accessible privacy page in:

- English
- German

It should accurately describe actual processing, including as applicable:

- contact/booking data
- purpose
- retention
- payment providers
- analytics
- cookies
- email
- WhatsApp/contact channels
- hosting/storage
- user rights/contact route

Do not copy a generic privacy policy without matching the actual stack.

---

# 33. Cookie Notice

If non-essential cookies are used, provide appropriate cookie information.

Include:

- category
- purpose
- provider
- duration
- control method

Keep this synchronized with actual scripts.

---

# 34. Terms / Booking Conditions

Tour booking conditions should clearly address, as applicable:

- booking request vs confirmed booking
- price validity
- deposit
- remaining payment
- cancellation
- refund
- changes
- traveler responsibility
- pickup
- inclusions/exclusions
- force majeure
- third-party services

Legal review is recommended before publication.

---

# 35. Booking Consent

At submission, show concise text linking to:

- privacy policy
- booking terms

Do not bundle marketing consent into mandatory booking acceptance.

---

# 36. Marketing Consent

Marketing email/WhatsApp consent should be separate where applicable.

Store:

- consent status
- date
- source/form
- wording/version if needed

A booking does not automatically mean permission for unrelated marketing.

---

# 37. Contact via WhatsApp

If WhatsApp is offered, inform users that using the channel involves the relevant third-party service.

Avoid placing confidential booking information into prefilled public URLs.

---

# 38. Email Security

Use authenticated sending domain configuration:

- SPF
- DKIM
- DMARC

Use transactional email provider credentials server-side.

Never expose email API secrets in browser code.

---

# 39. Booking Email Content

Avoid unnecessary sensitive information.

Admin emails may link securely to the dashboard instead of containing all customer data.

Do not put private admin notes in customer emails.

---

# 40. Payment Security

Use a PCI-compliant payment provider.

Jordan Story Tours application should not store:

- card number
- CVV
- magnetic stripe data

Use hosted checkout/tokenized/provider flows.

---

# 41. Payment Verification

Payment success must be verified server-side.

Do not mark a booking paid merely because the browser returned to:

`/payment-success`

Use signed provider callbacks/webhooks/API verification.

---

# 42. Payment Webhooks

Requirements:

- signature validation
- replay protection/idempotency
- event logging
- provider event ID
- safe retries

Do not trust arbitrary webhook payloads.

---

# 43. Refund Security

Refund permission limited to approved roles.

Store:

- amount
- reason
- actor
- provider reference
- date
- status

Large/manual refunds may optionally require additional approval.

---

# 44. Database Security

Production database:

- not publicly exposed unnecessarily
- strong credentials
- encrypted transport
- least-privilege application account
- managed backups
- access restricted by environment/network

Developers should not share production credentials casually.

---

# 45. Encryption at Rest

Use provider/storage encryption at rest for:

- database
- backups
- object storage

For especially sensitive future data, evaluate field-level encryption.

---

# 46. Secrets Management

Secrets include:

- database credentials
- auth secrets
- email keys
- payment keys
- storage keys

Store in:

- hosting secret manager
- protected environment variables

Never commit secrets to Git.

---

# 47. Development / Production Separation

Use separate:

- databases
- credentials
- storage buckets where practical
- payment environments
- email behavior

Staging should not send real customer communications accidentally.

---

# 48. Test Data

Do not copy full production customer data into development.

Use generated/sanitized data.

If production troubleshooting requires data access, minimize and audit it.

---

# 49. Logging

Logs should be useful but privacy-conscious.

Do not log:

- passwords
- reset tokens
- card data
- full session cookies
- unnecessary form contents

Mask sensitive fields.

---

# 50. Error Messages

Public errors should not reveal:

- SQL
- stack traces
- file paths
- secrets
- internal service details

Log technical detail securely server-side.

---

# 51. Rate Limiting

Apply to:

- booking
- custom tour
- contact
- transport request
- login
- reset
- search if abused
- payment/session creation

Use IP/account/session signals appropriately without relying on one mechanism only.

---

# 52. Spam / Bot Protection

Start with low-friction controls:

- honeypot
- timing signals
- rate limiting
- validation

Add CAPTCHA/challenge only when abuse warrants it.

Conversion matters.

---

# 53. Booking Abuse

Protect against:

- thousands of fake bookings
- huge traveler counts
- invalid dates
- price manipulation
- repeated email abuse

Use server-side business limits.

---

# 54. Admin URL

A non-obvious admin URL is not a security control.

Security must depend on authentication/authorization.

The admin route should still be:

- noindex
- excluded from sitemap

---

# 55. Search Engine Privacy

Noindex/private:

- admin
- booking confirmation containing identifiers
- payment callbacks
- private quote pages
- customer-specific pages
- internal previews

Do not expose booking/customer data in indexable URLs.

---

# 56. Public References

Booking references may appear in customer communications but should not alone grant access to sensitive data.

If a public status/quote link is added, use a secure random signed/tokenized link with expiry/revocation controls.

---

# 57. URL Privacy

Never place in query strings:

- email
- phone
- customer name
- passport
- private notes

URLs are widely logged.

---

# 58. Data Retention

Define retention periods for:

- booking records
- customer data
- payment records
- quotes
- emails/messages
- analytics
- security logs
- backups

Retention should reflect business/legal needs rather than “forever by default.”

---

# 59. Data Deletion / Anonymization

Where appropriate, support:

- deletion
- anonymization
- suppression of marketing
- account/customer archival

Financial/legal records may require retention even when marketing/customer profile data is removed.

---

# 60. Data Export

If responding to privacy/access requests becomes necessary, admin tools should enable controlled export of relevant customer data.

Exports must be:

- permission restricted
- logged
- temporary/secure

---

# 61. Customer Search

Admin search results should show only necessary information.

Avoid displaying full personal details in broad dashboards when not needed.

---

# 62. Reports

Business reports should prefer aggregated data.

Examples:

- bookings by country
- bookings by language
- revenue by tour

Do not expose customer names in aggregate reports unless necessary.

---

# 63. Backups

Back up:

- PostgreSQL
- important media/storage metadata
- application configuration

Define:

- frequency
- retention
- encryption
- restore process

---

# 64. Restore Testing

Perform periodic restore tests.

A successful backup job does not prove the backup is usable.

---

# 65. Disaster Recovery

Document:

- responsible person
- database restore steps
- storage recovery
- DNS/hosting recovery
- secret rotation
- payment/email restoration
- customer communication process if necessary

---

# 66. Security Incident Response

If compromise is suspected:

1. contain
2. revoke sessions
3. rotate credentials
4. preserve logs/evidence
5. identify affected systems/data
6. restore safely
7. assess notification/legal obligations
8. document corrective actions

Do not destroy evidence by immediately wiping systems without assessment.

---

# 67. Dependency Security

Monitor application dependencies for:

- known vulnerabilities
- abandoned packages
- malicious updates
- major security patches

Keep Next.js/React/auth/payment dependencies maintained.

---

# 68. Supply-Chain Security

Use:

- lockfiles
- controlled dependency updates
- code review
- CI security checks
- limited package count

Do not install random packages for trivial functionality.

---

# 69. Three.js Security

3D assets are still external input.

Validate trusted asset sources.

Do not dynamically load arbitrary user-provided model URLs.

CSP should restrict model/texture origins.

---

# 70. Third-Party Integrations

Maintain an integration inventory:

- hosting
- database
- storage/CDN
- email
- analytics
- payment
- maps
- WhatsApp/contact
- error monitoring

For each store:

- purpose
- data shared
- credentials owner
- privacy impact
- removal procedure

---

# 71. Vendor Minimization

Do not add third-party services unless they provide clear value.

Every vendor adds:

- privacy exposure
- credentials
- failure dependency
- script cost
- maintenance

---

# 72. German Market Consideration

Because the website will actively target German-speaking travelers, privacy and consent UX should be designed to meet a high standard from launch.

Do not make the German version merely a translated marketing layer while leaving consent/privacy information incomplete.

---

# 73. English / German Legal Parity

Important legal/booking information should exist in both languages.

If legal interpretation differs or only one language is legally controlling, state that only after professional legal advice.

Do not invent a governing-language clause.

---

# 74. Translation Security

Do not send customer personal data to AI translation tools automatically.

Translation workflows should focus on public content/templates unless a reviewed business need exists.

---

# 75. AI Content Tools

If AI is later added to admin:

Do not send:

- booking customer details
- payment data
- internal sensitive notes

to external AI services unless explicitly designed, disclosed and justified.

Prefer public-content assistance.

---

# 76. Admin AI Permissions

AI may suggest:

- title
- metadata
- FAQ
- German draft
- content improvements

AI cannot:

- publish automatically
- change prices
- issue refunds
- change bookings
- change protected facts

without authorized human action.

---

# 77. Booking Notes

Internal notes may contain operational information.

UI must clearly distinguish:

**Internal Note**
vs
**Customer-visible Message**

Prevent accidental leakage.

---

# 78. Export Security

CSV/Excel exports may contain customer data.

Requirements:

- permission check
- audit log
- safe CSV generation to reduce formula injection risk
- limited scope/date filters

---

# 79. CSV Formula Injection

When exporting customer-provided text, neutralize cells beginning with dangerous spreadsheet formula characters where necessary.

Do not allow a customer name/message to become an executable spreadsheet formula.

---

# 80. Content Publishing Workflow

Important content may use:

Draft → Review → Published

German content:
Draft → German Review → Published

Price changes may require separate permission from normal content editing.

---

# 81. Preview Security

Unpublished preview URLs must not be guessable/indexable.

Use authenticated preview or secure short-lived preview tokens.

---

# 82. Redirect Security

Admin redirect manager must prevent:

- redirect loops
- unsafe `javascript:` URLs
- accidental open redirects where possible
- redirects to malicious external domains

External redirects should require explicit permission/review.

---

# 83. SEO Fields

Sanitize SEO/admin inputs.

Metadata cannot be used to inject arbitrary HTML/scripts.

---

# 84. Contact Information

Business phone, email and address are public business data.

Manage them centrally to avoid inconsistent information across:

- header
- footer
- contact
- schema
- booking emails

---

# 85. Privacy by Design — Booking

Ask:

**Does the booking team need this field?**

If no:
remove it.

Do not collect data merely because competitors do.

---

# 86. Privacy by Design — Analytics

Ask:

**Do we need to identify this individual to answer the business question?**

Usually no.

Prefer aggregate events.

---

# 87. Privacy by Design — Media

Before publishing customer photographs/reviews, ensure Jordan Story Tours has appropriate rights/permission for that use.

Do not assume a tour booking automatically grants unrestricted promotional rights.

---

# 88. Review Privacy

Reviews may expose names/countries.

Store and display only approved information.

Do not enrich review profiles with unrelated personal data.

---

# 89. Children / Minors

If child traveler counts/ages are operationally needed, minimize the information collected.

Do not create unnecessary child profiles.

---

# 90. Payment Receipts

Receipts/invoices should show only required customer/payment information.

Do not expose provider secrets or internal transaction metadata.

---

# 91. Security Testing Before Launch

Perform:

- authentication tests
- authorization tests
- IDOR/broken access tests
- form abuse tests
- input/XSS tests
- upload tests
- CSRF tests
- rate-limit tests
- payment webhook tests
- private URL/noindex tests
- dependency scan

---

# 92. Authorization Test Matrix

For every role test:

- allowed read
- denied read
- allowed write
- denied write

Especially:

- prices
- payments
- customers
- bookings
- German publishing
- user management

---

# 93. Booking Security QA

Test:

- modified client price
- negative traveler count
- extreme traveler count
- invalid tour ID
- disabled tour
- unavailable date
- invalid extra
- duplicate submission
- spam flood
- expired price/quote

Server must reject invalid state.

---

# 94. Payment QA

Test:

- cancelled checkout
- failed payment
- successful payment
- duplicate webhook
- forged webhook
- delayed webhook
- refund
- partial refund if supported

Booking/payment status must remain consistent.

---

# 95. Admin Security QA

Test:

- expired session
- disabled user
- wrong role
- direct URL access
- API access without UI permission
- user role downgrade
- logout
- reset flow
- MFA if enabled

---

# 96. Production Access

Restrict production infrastructure access to people who need it.

Use named accounts rather than shared credentials where possible.

Remove access promptly when no longer needed.

---

# 97. Secret Rotation

Rotate credentials:

- after suspected exposure
- when staff/access changes justify it
- according to provider/security practice

Document ownership.

---

# 98. Security Maintenance

Monthly/regular operational review:

- dependency updates
- failed login trends
- suspicious booking activity
- user access
- backups
- error logs
- vendor changes

Security is ongoing, not a launch checklist only.

---

# 99. Security & Privacy Launch Checklist

- [ ] HTTPS enforced
- [ ] secure admin authentication
- [ ] roles/permissions tested
- [ ] MFA available for privileged roles
- [ ] server-side booking validation
- [ ] server-side pricing
- [ ] rate limiting
- [ ] spam protection
- [ ] rich text sanitized
- [ ] uploads validated
- [ ] CSP/security headers configured
- [ ] secrets outside source code
- [ ] production DB restricted
- [ ] payment provider flow verified
- [ ] webhook signatures verified
- [ ] privacy page EN
- [ ] privacy page DE
- [ ] booking terms EN
- [ ] booking terms DE
- [ ] consent behavior reviewed
- [ ] analytics contains no PII
- [ ] admin/private pages noindex
- [ ] backups configured
- [ ] restore tested
- [ ] audit logs enabled
- [ ] security QA completed

---

# 100. Final Principle

Jordan Story Tours should feel personal without being invasive.

The platform needs enough information to create and manage a travel booking — not a complete profile of the traveler.

The security model therefore follows four rules:

**Collect less.**  
**Validate everything.**  
**Give access only where needed.**  
**Preserve trust throughout the Story.**
