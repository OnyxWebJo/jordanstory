# 26 — PHP Booking API Specification
## Jordan Story Tours — Shared Hosting Runtime Backend

**Purpose:** Define the PHP API used by the static Next.js frontend for booking, pricing, custom tours, admin operations and runtime business logic.

---

# 1. Architecture

```text
Next.js Static Frontend
↓ HTTPS JSON
PHP API
↓
MySQL
```

The browser never connects directly to MySQL.

---

# 2. API Prefix

Recommended:

`/api/v1/`

Examples:

- `/api/v1/tours/...`
- `/api/v1/bookings`
- `/api/v1/pricing/quote`
- `/api/v1/custom-tour`
- `/api/v1/admin/...`

---

# 3. API Response Format

Success:

```json
{
  "success": true,
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "..."
  }
}
```

Do not expose stack traces.

---

# 4. Public Endpoints

Potential:

- `POST /pricing/quote`
- `POST /bookings`
- `POST /custom-tour`
- `POST /transport-request`
- `POST /contact`
- `GET /public/tour-state/{id}` when runtime status is needed

---

# 5. Booking Create

`POST /bookings`

Input:

- tour_id
- travel_date
- alternative_date
- adults
- children
- child ages when required
- selected options
- pickup/drop-off
- lead traveler
- preferred locale
- consent
- attribution

Do not accept authoritative total from browser.

---

# 6. Booking Create Server Flow

1. rate limit
2. parse JSON/form
3. validate CSRF/origin strategy as applicable
4. validate tour
5. validate availability
6. validate traveler limits
7. validate options
8. calculate price
9. create customer
10. create booking
11. create price lines
12. create snapshot
13. create status history
14. commit transaction
15. trigger email
16. return reference

---

# 7. Database Transaction

Create booking atomically.

If database write fails:

- rollback
- return safe error

Email failure after commit must not delete booking.

---

# 8. Price Quote Endpoint

`POST /pricing/quote`

Input:

- tour_id
- date
- adults
- children
- extras
- accommodation/options

Output:

- currency
- price_status
- subtotal
- extras
- total
- warnings

---

# 9. Price Status

Values:

- CONFIRMED
- ESTIMATED
- FROM
- REQUEST_ONLY

---

# 10. Tour Runtime State

Optional endpoint can return:

- active/inactive
- request-only
- current starting price
- availability notice

This can protect stale static pages.

Do not turn the entire tour page into runtime API-rendered content.

---

# 11. Custom Tour Endpoint

`POST /custom-tour`

Input:

- arrival/departure
- travelers
- destinations
- interests
- style
- accommodation preference
- contact
- notes
- locale

Creates booking type CUSTOM_TOUR.

---

# 12. Transportation Endpoint

`POST /transport-request`

Input:

- origin
- destination
- date
- time
- passengers
- luggage
- vehicle
- flight details
- return option
- contact

Server validates route/vehicle.

---

# 13. Contact Endpoint

Use only if general contact needs server form.

Protect with:

- rate limit
- honeypot
- validation

---

# 14. Authentication

Admin API uses secure session-based authentication.

Do not expose admin tokens in public JavaScript.

---

# 15. Admin Endpoints

Examples:

- `GET /admin/tours`
- `POST /admin/tours`
- `PUT /admin/tours/{id}`
- `POST /admin/tours/{id}/publish`
- `GET /admin/bookings`
- `PUT /admin/bookings/{id}/status`
- `POST /admin/quotes`
- `POST /admin/prices`
- `GET /admin/reports/...`

---

# 16. RBAC

Every admin endpoint checks permission server-side.

Examples:

- TOUR_EDIT
- PRICE_EDIT
- BOOKING_EDIT
- PAYMENT_EDIT
- SEO_EDIT
- TRANSLATION_EDIT_DE
- USER_MANAGE

---

# 17. Input Validation

Use a consistent validation layer.

Validate:

- data type
- length
- allowed enum
- ID
- date
- numeric boundaries
- currency
- locale
- nested arrays
- option membership

---

# 18. Prepared Statements

Use PDO prepared statements or a mature safe database layer.

Never concatenate user input into SQL.

---

# 19. Error Codes

Recommended:

- VALIDATION_ERROR
- AUTH_REQUIRED
- FORBIDDEN
- NOT_FOUND
- TOUR_UNAVAILABLE
- PRICE_CHANGED
- RATE_LIMITED
- DUPLICATE_REQUEST
- INTERNAL_ERROR

---

# 20. Price Changed

If browser/static displayed price differs from current authoritative price:

return:

`PRICE_CHANGED`

with current verified total and require user acknowledgement before final confirmation if relevant.

---

# 21. Idempotency

Booking endpoint should support an idempotency key.

Same key + same payload:
return existing result.

Avoid duplicate records on double-click/retry.

---

# 22. Rate Limits

Apply to:

- booking
- pricing quote
- custom tour
- contact
- login
- reset
- payment session

---

# 23. Spam Protection

Start with:

- honeypot
- timing/rate signals
- input validation

Add CAPTCHA only if necessary.

---

# 24. CORS

If frontend and API share same domain, keep same-origin where possible.

If separate subdomain:

allow only approved origins.

---

# 25. CSRF

For admin/session-authenticated writes, use robust CSRF/origin controls.

Public booking may use same-origin + anti-abuse controls depending final architecture.

---

# 26. Logging

Log:

- request ID
- endpoint
- outcome
- booking reference where appropriate
- error code

Do not log full personal payloads.

---

# 27. Email

PHP backend sends/queues transactional emails through a provider.

Templates:

- EN
- DE

---

# 28. Payment API

If enabled:

- create payment session
- verify callback/webhook
- update payment record
- update booking status

Never trust client callback alone.

---

# 29. Webhook Idempotency

Store provider event ID.

Ignore duplicate processed events safely.

---

# 30. API Versioning

Use `/v1/`.

Breaking contract changes should become future versions.

---

# 31. API Documentation

Document each endpoint:

- method
- URL
- auth
- request
- response
- errors
- permissions

---

# 32. Public API Exposure

Do not expose a broad read API for all database records unless needed.

Static build already contains public content.

Runtime API serves actions and current operational state.

---

# 33. Security Headers

API responses should use appropriate:

- content type
- no-sniff
- CORS
- cache rules

Admin/private responses should not be publicly cached.

---

# 34. Final Principle

PHP exists for live business logic.

Next.js exists for the public experience.

MySQL exists for business truth.

Keep those responsibilities clean.
