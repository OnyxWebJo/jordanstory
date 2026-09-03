# 07 — Admin Security, Roles & Backups
## Jordan Story Tours

## 1. Authentication

Use:

```text
strong password hashing
secure session cookies
HttpOnly
Secure
SameSite
session timeout
login rate limiting
logout invalidation
```

## 2. Roles

Recommended:

```text
SUPER_ADMIN
ADMIN
CONTENT_EDITOR
BOOKING_MANAGER
REVIEW_MODERATOR
```

## 3. Permission Examples

### SUPER_ADMIN
Full system access.

### ADMIN
Operational access with restricted high-risk settings if desired.

### CONTENT_EDITOR
Tours, destinations, translations, media; no customer data unless required.

### BOOKING_MANAGER
Bookings, quotations and customer communications.

### REVIEW_MODERATOR
Review moderation.

## 4. Least Privilege

Each user sees only required modules/actions.

## 5. Confirmation for Critical Actions

Require confirmation for:

```text
archive tour
unpublish tour
change price mode
remove public price
change business identity
change admin role
delete media
```

## 6. Application Security

Use:

```text
CSRF protection
prepared SQL statements
strict input validation
XSS-safe output handling
secure rich-text sanitization
rate limits
```

## 7. File Uploads

Validate:

```text
MIME type
extension
file size
dimensions
filename
content safety
```

Avoid executable upload directories.

## 8. Rate Limits

Apply to:

```text
login
booking
quotation
review submission
password reset
```

## 9. Audit Logs

Track high-risk admin operations.

Never log passwords or secrets.

## 10. Backup Policy

Recommended minimum:

```text
daily database backup
weekly retained backup
monthly retained backup
```

Adapt retention to hosting capacity.

## 11. Backup Scope

Include:

```text
MySQL
critical configuration
media metadata
media file backup/copy strategy
```

## 12. Restore Testing

Document and test:

```text
restore steps
credentials needed
validation checklist
recovery owner
```

A backup is not trusted until restore has been tested.

## 13. Secrets

Keep out of public repository/web root:

```text
DB credentials
SMTP credentials
API keys
session secrets
```

## 14. HTTPS

Admin and API must use HTTPS.

## 15. Production Errors

Never expose:

```text
SQL queries
filesystem paths
stack traces
secrets
```

## 16. Security Headers

Use appropriate:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
frame protection
```

## 17. Admin Account Lifecycle

Support:

```text
create
disable
role change
password reset
force logout
```

Keep historical accountability.

# FINAL COMMAND

The admin system handles customer, pricing and publishing data and must be treated as a privileged business application, not a basic CMS.
