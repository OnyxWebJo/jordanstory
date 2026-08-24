'use client';

export type ReviewLocale = 'en' | 'de' | 'fr' | 'it';

export type ReviewStatus = 'NOT_REQUESTED' | 'SENT' | 'OPENED' | 'SUBMITTED' | 'APPROVED' | 'REJECTED' | 'EXPIRED';

export interface ReviewRequest {
  id: string;
  bookingId: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  tourId: string;
  tourName: string;
  token: string;
  locale: ReviewLocale;
  status: ReviewStatus;
  sentAt?: string;
  submittedAt?: string;
  expiresAt: string;
  sentCount: number;
}

export interface UserSubmittedReview {
  id: string;
  reviewRequestId: string;
  bookingId: string;
  tourId: string;
  tourName: string;
  rating: number; // 1-5
  reviewTitle?: string;
  reviewBody: string;
  displayName: string;
  displayCountry?: string;
  locale: ReviewLocale;
  consentToPublish: boolean;
  moderationStatus: 'PENDING_MODERATION' | 'APPROVED' | 'REJECTED';
  verifiedTraveler: boolean;
  categoryRatings?: {
    driverGuide?: number;
    organization?: number;
    transport?: number;
    accommodation?: number;
    value?: number;
  };
  createdAt: string;
}

// 00E WhatsApp Templates for EN, DE, FR, IT
export const WHATSAPP_TEMPLATES: Record<ReviewLocale, (name: string, tourName: string, reviewUrl: string) => string> = {
  en: (name, tourName, reviewUrl) => 
`Hi ${name},

Thank you for travelling with Jordan Story Tours on ${tourName}.

We hope your journey through Jordan became a story worth remembering.

We would really appreciate it if you shared your experience with us. Your feedback helps future travelers choose their Jordan journey and helps us continue improving our tours.

Leave your review here:
${reviewUrl}

Thank you for being part of the Jordan Story.`,

  de: (name, tourName, reviewUrl) => 
`Hallo ${name},

vielen Dank, dass Sie ${tourName} mit Jordan Story Tours erlebt haben.

Wir hoffen, dass Ihre Reise durch Jordanien zu einer Geschichte geworden ist, an die Sie sich gerne erinnern.

Wir würden uns sehr freuen, wenn Sie Ihre Erfahrung mit uns teilen. Ihre Bewertung hilft zukünftigen Reisenden bei der Planung ihrer Jordanien-Reise und hilft uns dabei, unsere Touren weiter zu verbessern.

Hier können Sie Ihre Bewertung abgeben:
${reviewUrl}

Vielen Dank, dass Sie Teil der Jordan Story waren.`,

  fr: (name, tourName, reviewUrl) => 
`Bonjour ${name},

Merci d'avoir voyagé avec Jordan Story Tours lors de ${tourName}.

Nous espérons que votre voyage en Jordanie est devenu une histoire que vous garderez longtemps en mémoire.

Nous serions ravis que vous partagiez votre expérience avec nous. Votre avis aide les futurs voyageurs à préparer leur séjour en Jordanie et nous aide à améliorer continuellement nos circuits.

Laissez votre avis ici :
${reviewUrl}

Merci d'avoir fait partie de la Jordan Story.`,

  it: (name, tourName, reviewUrl) => 
`Ciao ${name},

grazie per aver viaggiato con Jordan Story Tours durante ${tourName}.

Speriamo che il tuo viaggio in Giordania sia diventato una storia da ricordare.

Ci farebbe molto piacere se condividessi la tua esperienza. La tua recensione aiuta i futuri viaggiatori a scegliere il loro viaggio in Giordania e aiuta noi a migliorare continuamente i nostri tour.

Lascia la tua recensione qui:
${reviewUrl}

Grazie per essere stato parte della Jordan Story.`
};

// Initial Seed Completed Bookings with 00E Tokens for Testing
export const INITIAL_COMPLETED_BOOKINGS: ReviewRequest[] = [
  {
    id: 'req-001',
    bookingId: 'JST-2026-8891',
    customerName: 'Dr. Markus Weber',
    customerPhone: '+491712345678',
    customerEmail: 'm.weber@example.de',
    tourId: 'jordan-classic-2',
    tourName: 'Jordan Story Classic 2 — 7-Day Grand Expedition',
    token: 'jst_rev_token_weber_789123',
    locale: 'de',
    status: 'APPROVED',
    sentAt: '2026-02-15T10:00:00Z',
    submittedAt: '2026-02-16T14:20:00Z',
    expiresAt: '2026-04-15T10:00:00Z',
    sentCount: 1,
  },
  {
    id: 'req-002',
    bookingId: 'JST-2026-9042',
    customerName: 'Sarah Sterling',
    customerPhone: '+447911123456',
    customerEmail: 'sarah.sterling@example.co.uk',
    tourId: 'jordan-luxury-1',
    tourName: 'Jordan Luxury Tour 1 — Heritage & 5-Star Serenity',
    token: 'jst_rev_token_sterling_456789',
    locale: 'en',
    status: 'APPROVED',
    sentAt: '2026-01-20T09:30:00Z',
    submittedAt: '2026-01-21T11:15:00Z',
    expiresAt: '2026-03-20T09:30:00Z',
    sentCount: 1,
  },
  {
    id: 'req-003',
    bookingId: 'JST-2026-9210',
    customerName: 'Antoine Dupont',
    customerPhone: '+33612345678',
    customerEmail: 'antoine.dupont@example.fr',
    tourId: 'budget-tour-4',
    tourName: 'Budget Tour 4 — Petra, Wadi Rum Desert & Dead Sea',
    token: 'jst_rev_token_dupont_112233',
    locale: 'fr',
    status: 'SENT',
    sentAt: '2026-08-23T18:00:00Z',
    expiresAt: '2026-10-23T18:00:00Z',
    sentCount: 1,
  },
  {
    id: 'req-004',
    bookingId: 'JST-2026-9550',
    customerName: 'Matteo Rossi',
    customerPhone: '+393401234567',
    customerEmail: 'm.rossi@example.it',
    tourId: 'day-tour-petra-rum-express',
    tourName: 'Wadi Rum & Petra Express Day Safari',
    token: 'jst_rev_token_rossi_998877',
    locale: 'it',
    status: 'NOT_REQUESTED',
    expiresAt: '2026-10-30T00:00:00Z',
    sentCount: 0,
  }
];

export const INITIAL_SUBMITTED_REVIEWS: UserSubmittedReview[] = [
  {
    id: 'rev-sub-001',
    reviewRequestId: 'req-001',
    bookingId: 'JST-2026-8891',
    tourId: 'jordan-classic-2',
    tourName: 'Jordan Story Classic 2 — 7-Day Grand Expedition',
    rating: 5,
    reviewTitle: 'Unvergessliche Reise durch Jordanien',
    reviewBody: 'Unser Fahrer Tariq war überaus professionell, zuvorkommend und pünktlich. Die Übernachtung im Martian Dome Camp im Wadi Rum und die Privatführung in Petra waren absolute Highlights. Deutschsprachige Betreuung war hervorragend!',
    displayName: 'Dr. Markus Weber',
    displayCountry: 'Germany',
    locale: 'de',
    consentToPublish: true,
    moderationStatus: 'APPROVED',
    verifiedTraveler: true,
    categoryRatings: { driverGuide: 5, organization: 5, transport: 5, accommodation: 5, value: 5 },
    createdAt: '2026-02-16T14:20:00Z',
  },
  {
    id: 'rev-sub-002',
    reviewRequestId: 'req-002',
    bookingId: 'JST-2026-9042',
    tourId: 'jordan-luxury-1',
    tourName: 'Jordan Luxury Tour 1 — Heritage & 5-Star Serenity',
    rating: 5,
    reviewTitle: 'Exceptional 5-Star Luxury Experience',
    reviewBody: 'Every detail was seamless from VIP airport arrival to our Dead Sea spa retreat at Kempinski Ishtar. Having a dedicated private Mercedes chauffeur made the entire 6-day itinerary stress-free and unforgettable.',
    displayName: 'Sarah Sterling',
    displayCountry: 'United Kingdom',
    locale: 'en',
    consentToPublish: true,
    moderationStatus: 'APPROVED',
    verifiedTraveler: true,
    categoryRatings: { driverGuide: 5, organization: 5, transport: 5, accommodation: 5, value: 5 },
    createdAt: '2026-01-21T11:15:00Z',
  }
];

export class ReviewsStoreService {
  private static STORAGE_KEY_REQUESTS = 'jordanstory_review_requests';
  private static STORAGE_KEY_REVIEWS = 'jordanstory_user_reviews';

  static getRequests(): ReviewRequest[] {
    if (typeof window === 'undefined') return INITIAL_COMPLETED_BOOKINGS;
    const stored = localStorage.getItem(this.STORAGE_KEY_REQUESTS);
    if (!stored) {
      localStorage.setItem(this.STORAGE_KEY_REQUESTS, JSON.stringify(INITIAL_COMPLETED_BOOKINGS));
      return INITIAL_COMPLETED_BOOKINGS;
    }
    return JSON.parse(stored);
  }

  static getReviews(): UserSubmittedReview[] {
    if (typeof window === 'undefined') return INITIAL_SUBMITTED_REVIEWS;
    const stored = localStorage.getItem(this.STORAGE_KEY_REVIEWS);
    if (!stored) {
      localStorage.setItem(this.STORAGE_KEY_REVIEWS, JSON.stringify(INITIAL_SUBMITTED_REVIEWS));
      return INITIAL_SUBMITTED_REVIEWS;
    }
    return JSON.parse(stored);
  }

  static getRequestByToken(token: string): ReviewRequest | undefined {
    return this.getRequests().find((r) => r.token === token);
  }

  static markSent(requestId: string): ReviewRequest | undefined {
    const requests = this.getRequests();
    const target = requests.find((r) => r.id === requestId);
    if (target) {
      target.status = 'SENT';
      target.sentAt = new Date().toISOString();
      target.sentCount = (target.sentCount || 0) + 1;
      localStorage.setItem(this.STORAGE_KEY_REQUESTS, JSON.stringify(requests));
    }
    return target;
  }

  static submitReview(
    token: string,
    data: {
      rating: number;
      reviewTitle?: string;
      reviewBody: string;
      displayName: string;
      displayCountry?: string;
      consentToPublish: boolean;
      categoryRatings?: UserSubmittedReview['categoryRatings'];
    }
  ): UserSubmittedReview | undefined {
    const request = this.getRequestByToken(token);
    if (!request) return undefined;

    const newReview: UserSubmittedReview = {
      id: `rev-sub-${Date.now()}`,
      reviewRequestId: request.id,
      bookingId: request.bookingId,
      tourId: request.tourId,
      tourName: request.tourName,
      rating: data.rating,
      reviewTitle: data.reviewTitle,
      reviewBody: data.reviewBody,
      displayName: data.displayName,
      displayCountry: data.displayCountry,
      locale: request.locale,
      consentToPublish: data.consentToPublish,
      moderationStatus: 'PENDING_MODERATION', // Requires Admin Approval
      verifiedTraveler: true, // Verified completed booking
      categoryRatings: data.categoryRatings,
      createdAt: new Date().toISOString(),
    };

    // Update Request status to SUBMITTED
    const requests = this.getRequests();
    const reqTarget = requests.find((r) => r.id === request.id);
    if (reqTarget) {
      reqTarget.status = 'SUBMITTED';
      reqTarget.submittedAt = new Date().toISOString();
      localStorage.setItem(this.STORAGE_KEY_REQUESTS, JSON.stringify(requests));
    }

    // Save submitted review
    const reviews = this.getReviews();
    reviews.push(newReview);
    localStorage.setItem(this.STORAGE_KEY_REVIEWS, JSON.stringify(reviews));

    return newReview;
  }

  static moderateReview(reviewId: string, newStatus: 'APPROVED' | 'REJECTED'): UserSubmittedReview | undefined {
    const reviews = this.getReviews();
    const target = reviews.find((r) => r.id === reviewId);
    if (target) {
      target.moderationStatus = newStatus;
      localStorage.setItem(this.STORAGE_KEY_REVIEWS, JSON.stringify(reviews));

      // Sync request status
      const requests = this.getRequests();
      const reqTarget = requests.find((r) => r.id === target.reviewRequestId);
      if (reqTarget) {
        reqTarget.status = newStatus === 'APPROVED' ? 'APPROVED' : 'REJECTED';
        localStorage.setItem(this.STORAGE_KEY_REQUESTS, JSON.stringify(requests));
      }
    }
    return target;
  }

  static getApprovedReviewsForTour(tourId?: string): UserSubmittedReview[] {
    const approved = this.getReviews().filter((r) => r.moderationStatus === 'APPROVED' && r.consentToPublish);
    if (!tourId) return approved;
    return approved.filter((r) => r.tourId === tourId);
  }

  static getCalculatedAggregateRating(tourId?: string): { average: number; count: number } {
    const approved = this.getApprovedReviewsForTour(tourId);
    if (approved.length === 0) return { average: 5.0, count: 0 };
    const sum = approved.reduce((acc, curr) => acc + curr.rating, 0);
    const average = Number((sum / approved.length).toFixed(1));
    return { average, count: approved.length };
  }
}
