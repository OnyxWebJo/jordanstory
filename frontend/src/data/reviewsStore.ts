import { ReviewRequest, ReviewLocale, INITIAL_COMPLETED_BOOKINGS } from './reviewRequestsData';

export type { ReviewRequest, ReviewLocale };

export type ReviewStatus = 'NOT_REQUESTED' | 'SENT' | 'OPENED' | 'SUBMITTED' | 'APPROVED' | 'REJECTED' | 'EXPIRED';

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

// Initial Seed Submitted Reviews
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

  static addRequest(newReq: any): void {
    const requests = this.getRequests();
    const req: ReviewRequest = {
      id: newReq.id || `req-${Date.now()}`,
      bookingId: newReq.bookingId || 'JST-DIRECT',
      customerName: newReq.customerName || 'Valued Guest',
      customerPhone: newReq.customerPhone || '',
      customerEmail: newReq.customerEmail || '',
      tourId: newReq.tourId || 'tour-custom',
      tourName: newReq.tourName || 'Jordan Private Tour',
      token: newReq.token || `token-${Date.now()}`,
      locale: newReq.locale || 'en',
      status: newReq.status || 'SENT',
      sentAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 30 * 86400000).toISOString(),
      sentCount: 1,
      createdAt: newReq.createdAt || new Date().toISOString()
    };
    requests.unshift(req);
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY_REQUESTS, JSON.stringify(requests));
    }
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
