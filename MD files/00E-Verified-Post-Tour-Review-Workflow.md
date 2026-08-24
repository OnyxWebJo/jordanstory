# 00E — Verified Post-Tour Review Workflow
## Jordan Story Tours — Admin, WhatsApp, Review Form & Public Reviews

**Priority:** HIGH

## 1. Principle

Do not hard-code fake ratings or generic 5.0 values.

Public reviews should come from real completed bookings.

A review request can only be created when:

`booking.status = COMPLETED`

Flow:

`Completed Tour → Admin clicks Send Review Request → system detects client language → localized WhatsApp text + secure review URL → traveler submits review → review linked to booking/tour → admin moderation → approved review appears publicly`

---

## 2. Supported Languages

Review request and review form must support:

- English (`en`)
- German (`de`)
- French (`fr`)
- Italian (`it`)

Use the booking/customer preferred language.

The review form should open directly in that language.

---

## 3. Admin Booking Action

On a completed booking show:

- Customer
- Tour
- Travel date
- Preferred language
- Phone / WhatsApp
- Review status

Statuses:

- NOT_REQUESTED
- SENT
- OPENED
- SUBMITTED
- APPROVED
- REJECTED
- EXPIRED

Actions:

- Generate Review Request
- Open WhatsApp with Message
- Copy Review Link
- Resend
- View Review
- Approve
- Reject
- Hide

---

## 4. Secure Review URL

Generate a long random token.

Do NOT expose raw booking IDs.

Suggested table:

`review_requests`

Fields:

- id
- booking_id
- customer_id
- tour_id
- token_hash
- locale
- status
- sent_at
- opened_at
- submitted_at
- expires_at
- sent_count
- created_by_user_id

Recommended expiry: 30–60 days.

A token is single-purpose and should not expose booking/private information.

---

## 5. WhatsApp Request Templates

### English

Hi {{first_name}},

Thank you for travelling with Jordan Story Tours on {{tour_name}}.

We hope your journey through Jordan became a story worth remembering.

We would really appreciate it if you shared your experience with us. Your feedback helps future travelers choose their Jordan journey and helps us continue improving our tours.

Leave your review here:
{{review_url}}

Thank you for being part of the Jordan Story.

### German

Hallo {{first_name}},

vielen Dank, dass Sie {{tour_name}} mit Jordan Story Tours erlebt haben.

Wir hoffen, dass Ihre Reise durch Jordanien zu einer Geschichte geworden ist, an die Sie sich gerne erinnern.

Wir würden uns sehr freuen, wenn Sie Ihre Erfahrung mit uns teilen. Ihre Bewertung hilft zukünftigen Reisenden bei der Planung ihrer Jordanien-Reise und hilft uns dabei, unsere Touren weiter zu verbessern.

Hier können Sie Ihre Bewertung abgeben:
{{review_url}}

Vielen Dank, dass Sie Teil der Jordan Story waren.

### French

Bonjour {{first_name}},

Merci d'avoir voyagé avec Jordan Story Tours lors de {{tour_name}}.

Nous espérons que votre voyage en Jordanie est devenu une histoire que vous garderez longtemps en mémoire.

Nous serions ravis que vous partagiez votre expérience avec nous. Votre avis aide les futurs voyageurs à préparer leur séjour en Jordanie et nous aide à améliorer continuellement nos circuits.

Laissez votre avis ici :
{{review_url}}

Merci d'avoir fait partie de la Jordan Story.

### Italian

Ciao {{first_name}},

grazie per aver viaggiato con Jordan Story Tours durante {{tour_name}}.

Speriamo che il tuo viaggio in Giordania sia diventato una storia da ricordare.

Ci farebbe molto piacere se condividessi la tua esperienza. La tua recensione aiuta i futuri viaggiatori a scegliere il loro viaggio in Giordania e aiuta noi a migliorare continuamente i nostri tour.

Lascia la tua recensione qui:
{{review_url}}

Grazie per essere stato parte della Jordan Story.

---

## 6. WhatsApp Implementation

Initial/shared-hosting-friendly method:

Admin clicks:

`Send Review Request via WhatsApp`

The system opens a WhatsApp deep link with:

- customer's phone number
- localized prefilled message
- secure review URL

The admin sends manually.

This avoids requiring WhatsApp Business API at launch.

The review system must be independent from the sending mechanism so WhatsApp Business API can be added later.

Also provide:

`Send by Email`

as fallback.

---

## 7. Review Form

The form already knows the booking and tour from the secure token.

The customer should NOT select the tour manually.

Recommended fields:

- Overall Rating* — 1 to 5
- Review Title — optional
- Your Review* — textarea
- Trip Highlight — optional
- Would You Recommend Jordan Story Tours? — optional
- Display Name
- Display Country — optional
- Consent to Publish* — checkbox

Optional category ratings:

- Driver / Guide
- Organization
- Itinerary
- Transport
- Accommodation
- Value

Keep the form simple.

---

## 8. Review Page Copy

Eyebrow:

`YOUR JORDAN STORY`

Headline:

`How Was Your Journey?`

Description:

`Your experience can help another traveler begin theirs.`

Do not clutter the form with marketing content.

---

## 9. Verified Review

A review submitted through a valid completed-booking token can display:

`Verified Traveler`

Only use this badge when the booking relationship is truly verified.

---

## 10. Moderation

Recommended workflow:

`SUBMITTED → PENDING_MODERATION → APPROVED`

Admin may:

- approve
- reject
- hide
- flag
- reply

Do not edit the traveler's meaning.

Do not reject a review only because it is negative.

Valid rejection reasons include:

- spam
- abuse
- private/personal information
- irrelevant content
- duplicate submission

Negative verified reviews are still genuine reviews.

---

## 11. Public Display

Tour pages may show:

`4.8 — Based on 27 verified traveler reviews`

ONLY when calculated from actual approved reviews.

Never hard-code:

- 5.0
- review count
- aggregate rating

Suggested review card:

- rating
- display name
- country if consented
- review date
- tour name
- review text
- Verified Traveler badge
- company response if any

---

## 12. Aggregate Rating

Calculate dynamically from approved published reviews only.

`average = sum(ratings) / approved_review_count`

Exclude:

- test reviews
- rejected reviews
- admin-created testimonials
- fake seed data

---

## 13. SEO / AEO / GEO

If review schema is implemented, it must match real visible review data and current search-engine/schema rules.

Never fabricate:

- aggregateRating
- reviewCount
- ratings

Reviews are useful user-generated trust content, but they are not authoritative sources for tour facts.

---

## 14. Privacy

Never publicly expose:

- phone
- email
- booking reference
- private notes
- full legal name unless consented

Suggested public identity:

`Maria K. — Germany — Verified Traveler`

or the user's approved display name.

---

## 15. Suggested Database Tables

- review_requests
- reviews
- review_responses
- review_status_history

Suggested `reviews` fields:

- id
- review_request_id
- booking_id
- customer_id
- tour_id
- rating
- review_title
- review_body
- recommend
- display_name
- display_country
- locale
- consent_to_publish
- moderation_status
- published_at
- created_at
- updated_at

---

## 16. Request Timing

Recommended:

When the tour is marked COMPLETED, the admin can immediately send the request.

Typical operational timing:

- same evening
- next morning
- shortly after trip completion

Allow one optional reminder after several days.

Avoid repeated WhatsApp spam.

Track:

- sent_count
- last_sent_at

---

## 17. Reports

Admin review dashboard may report:

- total reviews
- average rating
- reviews by tour
- review request response rate
- language
- country
- rating distribution
- pending moderation

---

## 18. Success Page

Headline:

`Thank You for Sharing Your Story`

Description:

`Your feedback has been received and will help us continue improving the journeys we create across Jordan.`

Optional CTA:

`Explore Jordan Story Tours`

---

# FINAL RULE

The trust chain must be:

`real booking → completed tour → secure review request → traveler submission → moderation → publication`

The owner should be able to open a completed booking, click **Send Review Request**, and send a dedicated WhatsApp message in the customer's language with a secure review URL.

Approved reviews then appear automatically on the correct tour page and contribute to the real aggregate rating.
