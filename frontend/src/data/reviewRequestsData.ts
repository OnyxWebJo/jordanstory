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
  createdAt?: string;
}

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
