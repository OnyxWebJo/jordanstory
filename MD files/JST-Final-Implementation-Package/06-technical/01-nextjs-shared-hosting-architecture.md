# Technical Architecture — Next.js + Shared Hosting + MySQL

## Public Website
Next.js remains the frontend.
Prefer static generation/export for public EN/DE content where compatible with hosting.

## Dynamic Admin/API
MySQL-backed server-side layer is required for admin, bookings, pricing and content changes.
On conventional shared hosting this may be a small backend/API supported by the host; it is not the visual/public frontend.

## Publishing
Admin update -> database -> content invalidation/build trigger -> regenerate affected static public pages -> deploy atomically.
If automated build hooks are impossible on the chosen host, provide an authenticated “Publish Changes” action.

## Security
- admin authentication
- hashed passwords / secure sessions
- CSRF protection where applicable
- parameterized queries/ORM
- server-side validation
- rate limits
- audit log
- backups
- no secrets in Next.js client bundle

## Performance
Keep immersive homepage isolated from normal content pages.
Tour/destination pages should remain lightweight and crawlable.
