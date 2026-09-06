'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { TOURS_DATA, Tour, PriceMode, BookingMode } from '@/data/tours';
import { DESTINATIONS_DATA, DestinationData } from '@/data/destinations';
import { getAssetUrl } from '@/utils/assets';

export interface Destination {
  id: string;
  slug: { en: string; de: string; fr: string; it: string };
  title?: { en: string; de?: string; fr?: string; it?: string };
  name?: { en: string; de?: string; fr?: string; it?: string };
  subtitle?: { en?: string; de?: string; fr?: string; it?: string };
  tagline?: { en?: string; de?: string; fr?: string; it?: string };
  description: { en: string; de?: string; fr?: string; it?: string };
  highlights: { en: string[]; de?: string[]; fr?: string[]; it?: string[] };
  heroImage?: string;
  image?: string;
  region?: string;
}

import {
  LayoutDashboard,
  Compass,
  MapPin,
  Calendar,
  DollarSign,
  Plus,
  CheckCircle,
  Clock,
  Search,
  LogOut,
  MessageSquare,
  Printer,
  Eye,
  X,
  Send,
  Image as ImageIcon,
  Shield,
  FileText,
  Settings,
  Users,
  AlertTriangle,
  History,
  Archive,
  RefreshCw,
  Edit3,
  Globe,
  Trash2,
  Lock,
  ArrowRight,
  Sparkles,
  Layers,
  PhoneCall,
  Check,
  CheckSquare,
  Download,
  ExternalLink,
  Copy,
  ChevronDown
} from 'lucide-react';

import { ReviewsStoreService, ReviewRequest, UserSubmittedReview, WHATSAPP_TEMPLATES, ReviewLocale } from '@/data/reviewsStore';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type AdminRole = 'SUPER_ADMIN' | 'ADMIN' | 'CONTENT_EDITOR' | 'BOOKING_MANAGER' | 'REVIEW_MODERATOR';

export interface BookingRecord {
  id: string;
  ref: string;
  customer: string;
  email: string;
  phone: string;
  tour: string;
  tourSlug: string;
  locale: 'en' | 'de' | 'fr' | 'it';
  date: string;
  adults: number;
  children: number;
  status: 'NEW' | 'CONFIRMED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'REFUNDED';
  priceSnapshot: number;
  currency: string;
  priceUnit: string;
  specialRequests?: string;
  assignedAdmin?: string;
  internalNotes?: string;
  createdAt: string;
}

export interface QuotationRecord {
  id: string;
  ref: string;
  customer: string;
  email: string;
  phone: string;
  tour: string;
  tourSlug: string;
  locale: 'en' | 'de' | 'fr' | 'it';
  arrivalDate: string;
  departureDate?: string;
  adults: number;
  children: number;
  rooms?: number;
  hotelPreference?: string;
  status: 'NEW' | 'IN_REVIEW' | 'QUOTED' | 'CUSTOMER_REPLIED' | 'ACCEPTED' | 'DECLINED' | 'EXPIRED' | 'CONVERTED_TO_BOOKING';
  quotedPrice?: number;
  quotedCurrency: string;
  quoteValidUntil?: string;
  specialRequests?: string;
  assignedAdmin?: string;
  internalNotes?: string;
  createdAt: string;
}

export interface AuditLogItem {
  id: string;
  adminName: string;
  adminRole: AdminRole;
  entityType: string;
  entityId: string;
  action: string;
  details: string;
  timestamp: string;
}

export interface PublishJob {
  id: string;
  ref: string;
  requestedBy: string;
  status: 'QUEUED' | 'BUILDING' | 'DEPLOYING' | 'SUCCESS' | 'FAILED';
  pagesCount: number;
  timestamp: string;
}

export interface SiteSettingsState {
  businessName: string;
  registrationNumber: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  bookingEmail: string;
  defaultCurrency: string;
  supportedLanguages: string[];
  enableDirectBooking: boolean;
  requireReviewModeration: boolean;
}

export interface TourCategoryItem {
  id: string;
  name: string;
  description: string;
  slug: string;
  toursCount: number;
}

export interface MediaAssetItem {
  id: string;
  title: string;
  url: string;
  category: string;
  altEn: string;
  altDe: string;
  uploadedAt: string;
}

export default function AdminDashboardPage() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'tours' | 'categories' | 'destinations' | 'bookings' | 'quotations' | 'reviews' | 'reports' | 'media' | 'publish' | 'settings' | 'users' | 'audit'
  >('dashboard');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Toast Notification State
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priceModeFilter, setPriceModeFilter] = useState('all');

  // Current Logged-in Admin
  const [currentAdmin, setCurrentAdmin] = useState<{ name: string; email: string; role: AdminRole }>({
    name: 'Jordan Story Owner',
    email: 'admin@jordanstorytours.com',
    role: 'SUPER_ADMIN'
  });

  // Data Stores
  const [toursList, setToursList] = useState<Tour[]>(TOURS_DATA);
  const [destinationsList, setDestinationsList] = useState<Destination[]>(DESTINATIONS_DATA);
  
  const [categoriesList, setCategoriesList] = useState<TourCategoryItem[]>([
    { id: 'cat-1', name: 'Classical Tours', slug: 'classical', description: 'Iconic historical routes through Petra, Jerash, and Amman.', toursCount: 6 },
    { id: 'cat-2', name: 'Luxury & Wellness', slug: 'luxury', description: '5-star boutique hotels, Dead Sea spa, and VIP Bedouin desert glamping.', toursCount: 4 },
    { id: 'cat-3', name: 'Budget & Cultural', slug: 'budget', description: 'Affordable authentic private exploration across Jordan.', toursCount: 5 },
    { id: 'cat-4', name: 'Biblical & Holy Land', slug: 'biblical', description: 'Sacred pilgrimage routes: Mount Nebo, Bethany Beyond the Jordan, and Madaba.', toursCount: 3 },
    { id: 'cat-5', name: 'Day Safaris & Excursions', slug: 'day-safaris', description: 'Single-day excursions from Amman and Aqaba.', toursCount: 5 }
  ]);

  const [bookingsList, setBookingsList] = useState<BookingRecord[]>([
    {
      id: 'BK-89021',
      ref: 'JST-20260901-4912',
      customer: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+44 7911 123456',
      tour: 'Petra, Dead Sea & Jerash Discovery',
      tourSlug: 'petra-dead-sea-jerash',
      locale: 'en',
      date: '2026-09-15',
      adults: 2,
      children: 0,
      status: 'NEW',
      priceSnapshot: 798,
      currency: 'USD',
      priceUnit: 'PER_PERSON',
      specialRequests: 'Vegetarian meals preferred.',
      assignedAdmin: 'Jordan Story Owner',
      internalNotes: 'VIP client from London.',
      createdAt: '2026-09-01 14:20'
    },
    {
      id: 'BK-89022',
      ref: 'JST-20260830-3321',
      customer: 'Anna Schmidt',
      email: 'anna.schmidt@example.de',
      phone: '+49 170 1234567',
      tour: 'Jordan Story Classic (5 Days)',
      tourSlug: 'jordan-story-classic-5-days',
      locale: 'de',
      date: '2026-10-01',
      adults: 2,
      children: 1,
      status: 'CONFIRMED',
      priceSnapshot: 1398,
      currency: 'USD',
      priceUnit: 'PER_PERSON',
      specialRequests: 'German speaking guide if available.',
      assignedAdmin: 'Jordan Story Owner',
      internalNotes: 'Deposit received via wire transfer.',
      createdAt: '2026-08-30 09:12'
    },
    {
      id: 'BK-89023',
      ref: 'JST-20260828-1109',
      customer: 'Michael Brown',
      email: 'michael.brown@example.com',
      phone: '+1 202 555 0143',
      tour: 'Wadi Rum & Petra Express Day Safari',
      tourSlug: 'wadi-rum-petra-express',
      locale: 'en',
      date: '2026-08-25',
      adults: 4,
      children: 0,
      status: 'COMPLETED',
      priceSnapshot: 935,
      currency: 'USD',
      priceUnit: 'PER_PERSON',
      assignedAdmin: 'Jordan Story Owner',
      createdAt: '2026-08-28 16:45'
    }
  ]);

  const [quotationsList, setQuotationsList] = useState<QuotationRecord[]>([
    {
      id: 'QUO-20260902-8812',
      ref: 'QUO-20260902-8812',
      customer: 'Dr. Jean-Pierre Laurent',
      email: 'jp.laurent@paris.fr',
      phone: '+33 6 12 34 56 78',
      tour: 'Jordan Luxury Tour 1 — 5-Star Serenity',
      tourSlug: 'jordan-luxury-5-star',
      locale: 'fr',
      arrivalDate: '2026-11-10',
      departureDate: '2026-11-18',
      adults: 2,
      children: 0,
      rooms: 1,
      hotelPreference: '5-Star Luxury / St. Regis & Kempinski',
      status: 'NEW',
      quotedCurrency: 'USD',
      specialRequests: 'Private helicopter transfer to Wadi Rum request.',
      createdAt: '2026-09-02 11:30'
    },
    {
      id: 'QUO-20260831-7721',
      ref: 'QUO-20260831-7721',
      customer: 'Matteo Rossi',
      email: 'm.rossi@milano.it',
      phone: '+39 333 9876543',
      tour: 'Biblical Jordan & Holy Land Trails',
      tourSlug: 'biblical-jordan-holy-land',
      locale: 'it',
      arrivalDate: '2026-10-14',
      departureDate: '2026-10-21',
      adults: 6,
      children: 0,
      rooms: 3,
      hotelPreference: '4-Star Boutique',
      status: 'QUOTED',
      quotedPrice: 3450,
      quotedCurrency: 'USD',
      quoteValidUntil: '2026-09-14',
      specialRequests: 'Catholic Mass in Mount Nebo and Bethany baptism arrangements.',
      createdAt: '2026-08-31 18:00'
    }
  ]);

  const [mediaList, setMediaList] = useState<MediaAssetItem[]>([
    { id: 'med-1', title: 'Petra Treasury Morning Glow', url: '/images/scroll-world-video/frame-08.jpg', category: 'Petra', altEn: 'Petra Treasury facade in sunlight', altDe: 'Das Schatzhaus von Petra im Sonnenlicht', uploadedAt: '2026-09-01' },
    { id: 'med-2', title: 'Wadi Rum Martian Desert', url: '/images/scroll-world-video/frame-10.jpg', category: 'Wadi Rum', altEn: 'Red sand dunes of Wadi Rum desert', altDe: 'Rote Sanddünen im Wadi Rum', uploadedAt: '2026-09-01' },
    { id: 'med-3', title: 'Siq Canyon Narrow Walk', url: '/images/scroll-world-video/frame-03.jpg', category: 'Petra', altEn: 'The Siq canyon entrance to Petra', altDe: 'Der Siq Schluchtweg nach Petra', uploadedAt: '2026-09-01' }
  ]);

  const [auditLogs, setAuditLogs] = useState<AuditLogItem[]>([
    {
      id: 'AUD-901',
      adminName: 'Jordan Story Owner',
      adminRole: 'SUPER_ADMIN',
      entityType: 'PUBLISHING',
      entityId: 'STATIC-SNAPSHOT',
      action: 'TRIGGER_STATIC_REBUILD',
      details: 'Rebuilt edge static export across EN, DE, FR, IT (642 routes).',
      timestamp: '2026-09-02 14:15:00'
    },
    {
      id: 'AUD-902',
      adminName: 'Jordan Story Owner',
      adminRole: 'SUPER_ADMIN',
      entityType: 'TOUR',
      entityId: 'petra-dead-sea-jerash',
      action: 'UPDATE_PRICING_MODE',
      details: 'Changed pricing mode from FIXED to FROM ($399 USD).',
      timestamp: '2026-09-01 09:30:12'
    }
  ]);

  const [publishJobs, setPublishJobs] = useState<PublishJob[]>([
    {
      id: 'JOB-20260902',
      ref: 'DEP-20260902-1415',
      requestedBy: 'Jordan Story Owner',
      status: 'SUCCESS',
      pagesCount: 642,
      timestamp: '2026-09-02 14:15 UTC'
    }
  ]);

  const [siteSettings, setSiteSettings] = useState<SiteSettingsState>({
    businessName: 'Jordan Story Tours & Travel Agency',
    registrationNumber: 'JO-MOTA-2026-9941',
    address: 'King Hussein Street, Amman 11118, Hashemite Kingdom of Jordan',
    phone: '+962 7 9000 1234',
    whatsapp: '+962 7 9000 1234',
    email: 'info@jordanstorytours.com',
    bookingEmail: 'bookings@jordanstorytours.com',
    defaultCurrency: 'USD',
    supportedLanguages: ['en', 'de', 'fr', 'it'],
    enableDirectBooking: true,
    requireReviewModeration: true
  });

  // Modals State
  const [selectedTourForEdit, setSelectedTourForEdit] = useState<Tour | null>(null);
  const [isCreatingTour, setIsCreatingTour] = useState(false);
  const [selectedDestinationForEdit, setSelectedDestinationForEdit] = useState<Destination | null>(null);
  const [isCreatingDestination, setIsCreatingDestination] = useState(false);
  const [selectedBookingForVoucher, setSelectedBookingForVoucher] = useState<BookingRecord | null>(null);
  const [selectedBookingForEdit, setSelectedBookingForEdit] = useState<BookingRecord | null>(null);
  const [selectedQuoteForEdit, setSelectedQuoteForEdit] = useState<QuotationRecord | null>(null);
  const [selectedQuoteForInvoice, setSelectedQuoteForInvoice] = useState<QuotationRecord | null>(null);
  const [isCreatingReviewToken, setIsCreatingReviewToken] = useState(false);
  const [isCreatingMedia, setIsCreatingMedia] = useState(false);
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);

  const [securityModalAction, setSecurityModalAction] = useState<{
    title: string;
    description: string;
    confirmText: string;
    onConfirm: () => void;
  } | null>(null);

  // Reviews Data
  const [reviewRequests, setReviewRequests] = useState<ReviewRequest[]>([]);
  const [submittedReviews, setSubmittedReviews] = useState<UserSubmittedReview[]>([]);
  const [publishInProgress, setPublishInProgress] = useState(false);

  // Initialize and persist state with localStorage
  useEffect(() => {
    try {
      const savedTours = localStorage.getItem('jordan_admin_tours');
      if (savedTours) setToursList(JSON.parse(savedTours));

      const savedDests = localStorage.getItem('jordan_admin_dests');
      if (savedDests) setDestinationsList(JSON.parse(savedDests));

      const savedCats = localStorage.getItem('jordan_admin_cats');
      if (savedCats) setCategoriesList(JSON.parse(savedCats));

      const savedBookings = localStorage.getItem('jordan_admin_bookings');
      if (savedBookings) setBookingsList(JSON.parse(savedBookings));

      const savedQuotes = localStorage.getItem('jordan_admin_quotes');
      if (savedQuotes) setQuotationsList(JSON.parse(savedQuotes));

      const savedSettings = localStorage.getItem('jordan_admin_settings');
      if (savedSettings) setSiteSettings(JSON.parse(savedSettings));

      const savedLogs = localStorage.getItem('jordan_admin_logs');
      if (savedLogs) setAuditLogs(JSON.parse(savedLogs));
    } catch {
      // Fallback
    }
  }, []);

  // Save changes automatically
  useEffect(() => {
    try { localStorage.setItem('jordan_admin_tours', JSON.stringify(toursList)); } catch {}
  }, [toursList]);

  useEffect(() => {
    try { localStorage.setItem('jordan_admin_dests', JSON.stringify(destinationsList)); } catch {}
  }, [destinationsList]);

  useEffect(() => {
    try { localStorage.setItem('jordan_admin_cats', JSON.stringify(categoriesList)); } catch {}
  }, [categoriesList]);

  useEffect(() => {
    try { localStorage.setItem('jordan_admin_bookings', JSON.stringify(bookingsList)); } catch {}
  }, [bookingsList]);

  useEffect(() => {
    try { localStorage.setItem('jordan_admin_quotes', JSON.stringify(quotationsList)); } catch {}
  }, [quotationsList]);

  useEffect(() => {
    try { localStorage.setItem('jordan_admin_settings', JSON.stringify(siteSettings)); } catch {}
  }, [siteSettings]);

  useEffect(() => {
    try { localStorage.setItem('jordan_admin_logs', JSON.stringify(auditLogs)); } catch {}
  }, [auditLogs]);

  useEffect(() => {
    setReviewRequests(ReviewsStoreService.getRequests());
    setSubmittedReviews(ReviewsStoreService.getReviews());
  }, [activeTab]);

  // Logging Helper
  const addAuditLog = (entityType: string, entityId: string, action: string, details: string) => {
    const newLog: AuditLogItem = {
      id: 'AUD-' + Math.floor(1000 + Math.random() * 9000),
      adminName: currentAdmin.name,
      adminRole: currentAdmin.role,
      entityType,
      entityId,
      action,
      details,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  // Operational KPI Metrics
  const metrics = useMemo(() => {
    const publishedTours = toursList.filter(t => !t.isDraft).length;
    const draftTours = toursList.filter(t => t.isDraft).length;
    const quotationTours = toursList.filter(t => t.bookingMode === 'QUOTATION').length;
    const newBookings = bookingsList.filter(b => b.status === 'NEW').length;
    const confirmedBookings = bookingsList.filter(b => b.status === 'CONFIRMED' || b.status === 'COMPLETED').length;
    const newQuotations = quotationsList.filter(q => q.status === 'NEW').length;
    const pendingReviews = submittedReviews.filter(r => r.moderationStatus === 'PENDING_MODERATION').length;
    const aggregateRating = ReviewsStoreService.getCalculatedAggregateRating();

    const totalRevenue = bookingsList
      .filter(b => b.status === 'CONFIRMED' || b.status === 'COMPLETED')
      .reduce((sum, b) => sum + (b.priceSnapshot || 0), 0);

    return {
      publishedTours,
      draftTours,
      quotationTours,
      newBookings,
      confirmedBookings,
      newQuotations,
      pendingReviews,
      totalRevenue,
      aggregateRating
    };
  }, [toursList, bookingsList, quotationsList, submittedReviews]);

  // Tour Handlers
  const handleToggleTourPublish = (tour: Tour) => {
    const newDraftState = !tour.isDraft;
    const action = newDraftState ? 'UNPUBLISHED' : 'PUBLISHED';
    setToursList(prev => prev.map(t => (t.id === tour.id ? { ...t, isDraft: newDraftState } : t)));
    addAuditLog('TOUR', tour.slug.en, newDraftState ? 'UNPUBLISH_TOUR' : 'PUBLISH_TOUR', `Status changed to ${action}.`);
    showToast(`Tour "${tour.title.en}" marked as ${action}!`);
  };

  const handleDeleteTour = (tour: Tour) => {
    setSecurityModalAction({
      title: `Delete Tour: "${tour.title.en}"`,
      description: 'Are you sure you want to permanently delete this tour package? This will remove all associated itinerary records.',
      confirmText: 'Delete Tour',
      onConfirm: () => {
        setToursList(prev => prev.filter(t => t.id !== tour.id));
        addAuditLog('TOUR', tour.slug.en, 'DELETE_TOUR', `Permanently deleted tour package.`);
        setSecurityModalAction(null);
        showToast(`Tour "${tour.title.en}" has been deleted.`, 'info');
      }
    });
  };

  const handleDuplicateTour = (tour: Tour) => {
    const dup: Tour = {
      ...tour,
      id: `${tour.id}-copy-${Date.now()}`,
      slug: {
        en: `${tour.slug.en}-copy`,
        de: tour.slug.de ? `${tour.slug.de}-kopie` : undefined,
        fr: tour.slug.fr ? `${tour.slug.fr}-copie` : undefined,
        it: tour.slug.it ? `${tour.slug.it}-copia` : undefined
      },
      title: {
        en: `${tour.title.en} (Copy)`,
        de: tour.title.de ? `${tour.title.de} (Kopie)` : undefined,
        fr: tour.title.fr ? `${tour.title.fr} (Copie)` : undefined,
        it: tour.title.it ? `${tour.title.it} (Copia)` : undefined
      },
      isDraft: true
    };
    setToursList(prev => [dup, ...prev]);
    addAuditLog('TOUR', dup.slug.en, 'DUPLICATE_TOUR', `Duplicated tour "${tour.title.en}" as draft.`);
    showToast(`Duplicated "${tour.title.en}" as draft!`);
  };

  const handleSaveTour = (updatedTour: Tour) => {
    if (isCreatingTour) {
      setToursList(prev => [updatedTour, ...prev]);
      addAuditLog('TOUR', updatedTour.slug.en, 'CREATE_TOUR', `Created new tour package.`);
      setIsCreatingTour(false);
      showToast(`Created new tour "${updatedTour.title.en}"!`);
    } else {
      setToursList(prev => prev.map(t => (t.id === updatedTour.id ? updatedTour : t)));
      addAuditLog('TOUR', updatedTour.slug.en, 'UPDATE_TOUR', `Updated tour details, pricing, and itinerary.`);
      setSelectedTourForEdit(null);
      showToast(`Saved changes to "${updatedTour.title.en}"!`);
    }
  };

  // Destination Handlers
  const handleSaveDestination = (dest: Destination) => {
    const destName = dest.title?.en || dest.name?.en || dest.id;
    if (isCreatingDestination) {
      setDestinationsList(prev => [dest, ...prev]);
      addAuditLog('DESTINATION', dest.slug?.en || dest.id, 'CREATE_DESTINATION', `Created new destination "${destName}".`);
      setIsCreatingDestination(false);
      showToast(`Added destination "${destName}"!`);
    } else {
      setDestinationsList(prev => prev.map(d => (d.id === dest.id ? dest : d)));
      addAuditLog('DESTINATION', dest.slug?.en || dest.id, 'UPDATE_DESTINATION', `Updated destination details.`);
      setSelectedDestinationForEdit(null);
      showToast(`Saved destination "${destName}"!`);
    }
  };

  const handleDeleteDestination = (dest: Destination) => {
    const destName = dest.title?.en || dest.name?.en || dest.id;
    setSecurityModalAction({
      title: `Delete Destination: "${destName}"`,
      description: 'Are you sure you want to delete this destination? This cannot be undone.',
      confirmText: 'Delete Destination',
      onConfirm: () => {
        setDestinationsList(prev => prev.filter(d => d.id !== dest.id));
        addAuditLog('DESTINATION', dest.slug?.en || dest.id, 'DELETE_DESTINATION', `Deleted destination.`);
        setSecurityModalAction(null);
        showToast(`Destination "${destName}" deleted.`, 'info');
      }
    });
  };

  // Booking Handlers
  const handleUpdateBookingStatus = (bookingId: string, newStatus: BookingRecord['status']) => {
    setBookingsList(prev => prev.map(b => (b.id === bookingId ? { ...b, status: newStatus } : b)));
    addAuditLog('BOOKING', bookingId, 'UPDATE_STATUS', `Updated booking status to ${newStatus}.`);
    showToast(`Booking ${bookingId} marked as ${newStatus}!`);
  };

  const handleSaveBooking = (updated: BookingRecord) => {
    setBookingsList(prev => prev.map(b => (b.id === updated.id ? updated : b)));
    addAuditLog('BOOKING', updated.ref, 'UPDATE_BOOKING_DETAILS', `Updated passenger and note details.`);
    setSelectedBookingForEdit(null);
    showToast(`Booking ${updated.ref} updated successfully!`);
  };

  // Quotation Handlers
  const handleConvertQuoteToBooking = (quote: QuotationRecord) => {
    const newBooking: BookingRecord = {
      id: 'BK-' + Math.floor(10000 + Math.random() * 90000),
      ref: 'JST-CONV-' + Date.now().toString().slice(-6),
      customer: quote.customer,
      email: quote.email,
      phone: quote.phone,
      tour: quote.tour,
      tourSlug: quote.tourSlug,
      locale: quote.locale,
      date: quote.arrivalDate,
      adults: quote.adults,
      children: quote.children,
      status: 'CONFIRMED',
      priceSnapshot: quote.quotedPrice || 0,
      currency: quote.quotedCurrency,
      priceUnit: 'CUSTOM_QUOTE',
      specialRequests: quote.specialRequests,
      assignedAdmin: currentAdmin.name,
      internalNotes: `Converted from Quotation Request (${quote.ref})`,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    setBookingsList(prev => [newBooking, ...prev]);
    setQuotationsList(prev => prev.map(q => (q.id === quote.id ? { ...q, status: 'CONVERTED_TO_BOOKING' } : q)));
    addAuditLog('QUOTATION', quote.ref, 'CONVERT_TO_BOOKING', `Converted to Confirmed Booking (${newBooking.ref}) at $${newBooking.priceSnapshot} USD.`);
    showToast(`Quotation ${quote.ref} converted to Confirmed Booking (${newBooking.ref})!`);
  };

  const handleSaveQuotation = (updated: QuotationRecord) => {
    setQuotationsList(prev => prev.map(q => (q.id === updated.id ? updated : q)));
    addAuditLog('QUOTATION', updated.ref, 'UPDATE_QUOTATION', `Updated quote price to $${updated.quotedPrice || 0} USD, status ${updated.status}.`);
    setSelectedQuoteForEdit(null);
    showToast(`Quotation ${updated.ref} saved!`);
  };

  // Review Handlers
  const handleModerateReview = (reviewId: string, approve: boolean) => {
    const status = approve ? 'APPROVED' : 'REJECTED';
    ReviewsStoreService.moderateReview(reviewId, status as any);
    setSubmittedReviews(ReviewsStoreService.getReviews());
    addAuditLog('REVIEW', reviewId, approve ? 'APPROVE_REVIEW' : 'REJECT_REVIEW', `Review moderated as ${status} by ${currentAdmin.name}.`);
    showToast(`Review has been ${status.toLowerCase()}!`);
  };

  const handleCreateReviewToken = (customerName: string, email: string, phone: string, tourName: string, lang: ReviewLocale) => {
    const token = 'jst_rev_' + Math.random().toString(36).substring(2, 11);
    const newReq: ReviewRequest = {
      id: 'req_' + Date.now(),
      bookingId: 'BK-DIR-' + Math.floor(1000 + Math.random() * 9000),
      customerName,
      customerPhone: phone,
      customerEmail: email,
      tourId: 'tour-custom',
      tourName,
      token,
      locale: lang,
      status: 'SENT',
      sentAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 90 * 86400000).toISOString(),
      sentCount: 1,
      createdAt: new Date().toISOString()
    };
    ReviewsStoreService.addRequest(newReq);
    setReviewRequests(ReviewsStoreService.getRequests());
    addAuditLog('REVIEW', token, 'DISPATCH_REVIEW_TOKEN', `Created review token for ${customerName}.`);
    setIsCreatingReviewToken(false);
    showToast(`Review link token created: ${token}!`);
  };

  // WhatsApp Message Generator
  const handleOpenWhatsApp = (phone: string, text: string) => {
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    showToast('Opening WhatsApp with pre-filled message...');
  };

  // CSV Export Report Generator
  const handleExportCSV = () => {
    const headers = ['Type', 'Reference', 'Customer', 'Email', 'Phone', 'Tour', 'Date', 'Passengers', 'Status', 'Amount_USD'];
    const rows: string[][] = [
      ...bookingsList.map(b => ['BOOKING', b.ref, b.customer, b.email, b.phone, b.tour, b.date, String(b.adults + b.children), b.status, String(b.priceSnapshot)]),
      ...quotationsList.map(q => ['QUOTATION', q.ref, q.customer, q.email, q.phone, q.tour, q.arrivalDate, String(q.adults + q.children), q.status, String(q.quotedPrice || 0)])
    ];

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.map(i => `"${(i || '').replace(/"/g, '""')}"`).join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `jordan_story_report_${new Date().toISOString().substring(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Operations CSV Report exported successfully!');
  };

  // Static Publishing Handler
  const handleTriggerStaticPublish = () => {
    setPublishInProgress(true);
    addAuditLog('PUBLISHING', 'STATIC_SNAPSHOT', 'TRIGGER_BUILD', 'Triggered static export deployment pipeline.');

    setTimeout(() => {
      const newJob: PublishJob = {
        id: 'JOB-' + Date.now(),
        ref: 'DEP-' + new Date().toISOString().replace(/[-:T.]/g, '').substring(0, 14),
        requestedBy: currentAdmin.name,
        status: 'SUCCESS',
        pagesCount: 642,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16) + ' UTC'
      };
      setPublishJobs(prev => [newJob, ...prev]);
      setPublishInProgress(false);
      showToast('Static edge snapshot published across 642 pages!');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#12161C] text-[#F5EFE6] flex flex-col md:flex-row font-sans selection:bg-[#A85F43] selection:text-white">
      {/* Real-Time Toast Notification Banner */}
      {toast && (
        <div className="fixed top-6 right-6 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#1B1514] border border-[#C69C6D] text-[#F5EFE6] shadow-2xl backdrop-blur-xl animate-bounce">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-medium font-mono">{toast.message}</span>
        </div>
      )}

      {/* Mobile Header Bar */}
      <div className="md:hidden bg-[#1B1514] border-b border-white/10 p-4 flex items-center justify-between sticky top-0 z-30 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#8E442B] to-[#C69C6D] flex items-center justify-center text-white shadow-md">
            <Compass className="w-5 h-5 shrink-0" />
          </div>
          <div>
            <span className="font-serif font-bold text-base text-white block leading-tight">Jordan Story</span>
            <span className="text-[10px] text-[#C69C6D] uppercase font-mono font-bold">{activeTab.toUpperCase()}</span>
          </div>
        </div>

        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-1.5 cursor-pointer border border-white/10"
        >
          <Layers className="w-3.5 h-3.5 text-[#C69C6D] shrink-0" />
          <span>{mobileNavOpen ? 'Close Menu' : 'Modules'}</span>
        </button>
      </div>

      {/* Admin Sidebar (Sticky Desktop, Collapsible Mobile) */}
      <aside className={`w-full md:w-72 bg-[#1B1514] border-r border-[#A85F43]/30 p-6 flex-col justify-between shrink-0 shadow-2xl z-20 md:sticky md:top-0 md:h-screen md:overflow-y-auto ${mobileNavOpen ? 'flex' : 'hidden md:flex'}`}>
        <div className="space-y-6">
          {/* Brand Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8E442B] to-[#C69C6D] flex items-center justify-center shadow-lg text-white shrink-0">
              <Compass className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg block leading-tight text-white">Jordan Story</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span className="text-[10px] text-[#C69C6D] tracking-widest uppercase font-mono font-bold">Admin Console</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (13 Modules) */}
          <nav className="space-y-1 text-xs font-medium">
            {[
              { id: 'dashboard', label: 'Overview & KPIs', icon: LayoutDashboard, badge: null },
              { id: 'tours', label: 'Tours & Pricing', icon: Compass, badge: toursList.length },
              { id: 'categories', label: 'Tour Categories', icon: Layers, badge: categoriesList.length },
              { id: 'destinations', label: 'Destinations', icon: MapPin, badge: destinationsList.length },
              { id: 'bookings', label: 'Bookings & Vouchers', icon: Calendar, badge: metrics.newBookings ? `${metrics.newBookings} new` : null },
              { id: 'quotations', label: 'Custom Quotations', icon: DollarSign, badge: metrics.newQuotations ? `${metrics.newQuotations} new` : null },
              { id: 'reviews', label: 'Reviews Moderation', icon: MessageSquare, badge: metrics.pendingReviews ? `${metrics.pendingReviews} pending` : null },
              { id: 'reports', label: 'Reports & Invoicing', icon: FileText, badge: null },
              { id: 'media', label: 'Media Library', icon: ImageIcon, badge: mediaList.length },
              { id: 'publish', label: 'Static Publishing', icon: RefreshCw, badge: null },
              { id: 'settings', label: 'Site Settings', icon: Settings, badge: null },
              { id: 'users', label: 'Users & Roles', icon: Users, badge: null },
              { id: 'audit', label: 'Audit Log', icon: History, badge: null }
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as any);
                    setMobileNavOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#A85F43] text-white shadow-lg font-semibold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#C69C6D]'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold shrink-0 ml-2 ${
                        isActive
                          ? 'bg-black/30 text-white'
                          : typeof item.badge === 'string' && item.badge.includes('new')
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-white/10 text-gray-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Session Footer */}
        <div className="pt-6 border-t border-white/10 space-y-3 text-xs">
          <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#A85F43]/30 border border-[#A85F43] flex items-center justify-center font-bold text-[#C69C6D]">
              JS
            </div>
            <div className="overflow-hidden">
              <span className="font-semibold text-white block truncate">{currentAdmin.name}</span>
              <span className="text-[10px] text-[#C69C6D] font-mono block">{currentAdmin.role}</span>
            </div>
          </div>

          <a href="/" className="flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-[#C69C6D] py-2 transition-colors">
            <LogOut className="w-3.5 h-3.5" />
            <span>Return to Public Website</span>
          </a>
        </div>
      </aside>

      {/* Main Admin Viewport */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto max-h-screen">
        
        {/* ==================================================================== */}
        {/* TAB 1: DASHBOARD OVERVIEW */}
        {/* ==================================================================== */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-serif text-3xl font-bold text-white">Operations & Executive Dashboard</h1>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Real-time control over tour packages, direct bookings, customized quotes, review tokens, and static publishing.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#C69C6D] text-xs font-mono transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Report (CSV)</span>
                </button>

                <button
                  onClick={handleTriggerStaticPublish}
                  disabled={publishInProgress}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${publishInProgress ? 'animate-spin' : ''}`} />
                  <span>{publishInProgress ? 'Publishing...' : 'Publish Live Snapshot'}</span>
                </button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-6 rounded-2xl bg-[#1B1514] border border-white/10 shadow-xl space-y-2">
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>ACTIVE INVENTORY</span>
                  <Compass className="w-4 h-4 text-[#A85F43]" />
                </div>
                <div className="text-3xl font-serif font-bold text-white">{metrics.publishedTours} Active</div>
                <span className="text-[11px] text-gray-400 font-mono block">{metrics.draftTours} Draft • {metrics.quotationTours} Custom Quote Only</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#1B1514] border border-white/10 shadow-xl space-y-2">
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>BOOKING VOLUME</span>
                  <Calendar className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-serif font-bold text-emerald-400">${metrics.totalRevenue.toLocaleString()} USD</div>
                <span className="text-[11px] text-gray-400 font-mono block">{metrics.newBookings} Pending • {metrics.confirmedBookings} Confirmed</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#1B1514] border border-white/10 shadow-xl space-y-2">
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>CUSTOM QUOTATIONS</span>
                  <DollarSign className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-3xl font-serif font-bold text-amber-400">{metrics.newQuotations} Needs Quote</div>
                <span className="text-[11px] text-gray-400 font-mono block">{quotationsList.length} Total Quote Inquiries</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#1B1514] border border-white/10 shadow-xl space-y-2">
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>REVIEWS & RATING</span>
                  <Shield className="w-4 h-4 text-[#C69C6D]" />
                </div>
                <div className="text-3xl font-serif font-bold text-[#C69C6D]">{metrics.aggregateRating.average} ★</div>
                <span className="text-[11px] text-gray-400 font-mono block">
                  {metrics.aggregateRating.count} Verified ({metrics.pendingReviews} in moderation)
                </span>
              </div>
            </div>

            {/* Quick Actions & Recent Stream */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Action Required */}
              <div className="p-6 rounded-3xl bg-[#1B1514] border border-white/10 space-y-4 shadow-xl">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>Action Required / Operations Pipeline</span>
                </h3>

                <div className="space-y-3 text-xs">
                  {bookingsList.filter(b => b.status === 'NEW').map(b => (
                    <div key={b.id} className="p-4 rounded-xl bg-[#12161C] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-white block">{b.customer} — {b.tour}</span>
                        <span className="text-[11px] text-gray-400 font-mono">Travel: {b.date} ({b.adults} Adults) • {b.ref}</span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedBookingForEdit(b);
                          setActiveTab('bookings');
                        }}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] cursor-pointer"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  ))}

                  {quotationsList.filter(q => q.status === 'NEW').map(q => (
                    <div key={q.id} className="p-4 rounded-xl bg-[#12161C] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-white block">{q.customer} — Quote Request</span>
                        <span className="text-[11px] text-[#C69C6D] font-mono">{q.tour} • {q.locale.toUpperCase()}</span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedQuoteForEdit(q);
                          setActiveTab('quotations');
                        }}
                        className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-[11px] cursor-pointer"
                      >
                        Prepare Quote
                      </button>
                    </div>
                  ))}

                  {submittedReviews.filter(r => r.moderationStatus === 'PENDING_MODERATION').map(r => (
                    <div key={r.id} className="p-4 rounded-xl bg-[#12161C] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-white block">{r.displayName} ({r.rating}★ Review)</span>
                        <span className="text-[11px] text-gray-400 font-mono">{r.tourName}</span>
                      </div>
                      <button
                        onClick={() => setActiveTab('reviews')}
                        className="px-3 py-1.5 rounded-lg bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-[11px] cursor-pointer"
                      >
                        Moderate
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audit Stream */}
              <div className="p-6 rounded-3xl bg-[#1B1514] border border-white/10 space-y-4 shadow-xl">
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <History className="w-4 h-4 text-[#C69C6D]" />
                    <span>Recent Activity Stream</span>
                  </h3>
                  <button onClick={() => setActiveTab('audit')} className="text-xs text-[#C69C6D] hover:underline font-mono">
                    View All
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  {auditLogs.slice(0, 4).map(log => (
                    <div key={log.id} className="p-3.5 rounded-xl bg-[#12161C] border border-white/5 space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                        <span className="text-[#C69C6D] font-bold">{log.action}</span>
                        <span>{log.timestamp}</span>
                      </div>
                      <p className="text-gray-300 text-xs">{log.details}</p>
                      <span className="text-[10px] text-gray-500 font-mono block">By {log.adminName} ({log.adminRole})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 2: TOURS & PRICING MANAGEMENT */}
        {/* ==================================================================== */}
        {activeTab === 'tours' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Tour Inventory & Commercial Pricing</h2>
                <p className="text-xs text-gray-400 mt-1">
                  Manage commercial pricing, durations, categories, multilingual itineraries, and publication status.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsCreatingTour(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white text-xs font-bold shadow-lg cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Tour Package</span>
                </button>

                <select
                  value={priceModeFilter}
                  onChange={(e) => setPriceModeFilter(e.target.value)}
                  className="bg-[#1B1514] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                >
                  <option value="all">All Price Modes</option>
                  <option value="FROM">FROM (Starting Price)</option>
                  <option value="FIXED">FIXED</option>
                  <option value="QUOTATION">QUOTATION Only</option>
                </select>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tour title..."
                    className="bg-[#1B1514] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Tours Table */}
            <div className="bg-[#1B1514] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#12161C] text-[#C69C6D] uppercase tracking-wider font-mono font-semibold border-b border-white/10">
                    <tr>
                      <th className="p-4 whitespace-nowrap">Tour / Package</th>
                      <th className="p-4 whitespace-nowrap">Category</th>
                      <th className="p-4 whitespace-nowrap">Duration</th>
                      <th className="p-4 whitespace-nowrap">Price ($ USD / person)</th>
                      <th className="p-4 whitespace-nowrap">Sales Mode</th>
                      <th className="p-4 whitespace-nowrap">Status</th>
                      <th className="p-4 text-right whitespace-nowrap">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {toursList
                      .filter(t => {
                        const matchesSearch = t.title.en.toLowerCase().includes(searchQuery.toLowerCase()) || t.slug.en.includes(searchQuery.toLowerCase());
                        const matchesPriceMode = priceModeFilter === 'all' || t.priceMode === priceModeFilter || (priceModeFilter === 'FROM' && !t.priceMode);
                        return matchesSearch && matchesPriceMode;
                      })
                      .map(tour => (
                        <tr key={tour.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-4">
                            <div className="font-bold text-white text-sm">{tour.title.en}</div>
                            <div className="text-[11px] text-[#C69C6D] font-mono">/tours/{tour.slug.en}</div>
                          </td>
                          <td className="p-4 font-mono text-gray-400 whitespace-nowrap">{tour.category}</td>
                          <td className="p-4 font-mono whitespace-nowrap">{tour.duration || `${tour.durationDays} Days`}</td>
                          <td className="p-4 whitespace-nowrap">
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#A85F43]/20 text-[#C69C6D] border border-[#A85F43]/30">
                              {tour.priceMode === 'QUOTATION' ? 'QUOTATION' : `$${tour.startingPriceUSD} USD / person (${tour.priceMode || 'FROM'})`}
                            </span>
                          </td>
                          <td className="p-4 font-mono text-[11px] whitespace-nowrap">
                            {tour.bookingMode === 'QUOTATION' ? (
                              <span className="text-amber-400">Custom Quote</span>
                            ) : (
                              <span className="text-emerald-400">Direct Booking</span>
                            )}
                          </td>
                          <td className="p-4 whitespace-nowrap">
                            <button
                              onClick={() => handleToggleTourPublish(tour)}
                              className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                                !tour.isDraft
                                   ? 'bg-emerald-900/40 text-emerald-400 border border-emerald-700/50 hover:bg-emerald-800/40'
                                   : 'bg-amber-900/40 text-amber-400 border border-amber-700/50 hover:bg-amber-800/40'
                              }`}
                            >
                              {!tour.isDraft ? '✓ PUBLISHED' : '○ DRAFT'}
                            </button>
                          </td>
                          <td className="p-4 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-1.5 shrink-0">
                              <button
                                onClick={() => setSelectedTourForEdit(tour)}
                                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all cursor-pointer inline-flex items-center gap-1.5 shrink-0"
                              >
                                <Edit3 className="w-3.5 h-3.5 shrink-0" />
                                <span>Edit</span>
                              </button>

                              <button
                                onClick={() => handleDuplicateTour(tour)}
                                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 border border-white/10 transition-all cursor-pointer inline-flex items-center justify-center shrink-0"
                                title="Duplicate Tour"
                              >
                                <Copy className="w-3.5 h-3.5 shrink-0" />
                              </button>

                              <button
                                onClick={() => handleDeleteTour(tour)}
                                className="p-1.5 rounded-lg bg-rose-900/20 hover:bg-rose-900/40 text-rose-400 border border-rose-700/30 transition-all cursor-pointer inline-flex items-center justify-center shrink-0"
                                title="Delete Tour"
                              >
                                <Trash2 className="w-3.5 h-3.5 shrink-0" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 3: TOUR CATEGORIES */}
        {/* ==================================================================== */}
        {activeTab === 'categories' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Tour Collections & Categories</h2>
                <p className="text-xs text-gray-400 mt-1">Organize packages into curated travel themes and regional itineraries.</p>
              </div>

              <button
                onClick={() => setIsCreatingCategory(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white text-xs font-bold shadow-lg cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Category</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoriesList.map(cat => (
                <div key={cat.id} className="p-6 rounded-3xl bg-[#1B1514] border border-white/10 space-y-4 shadow-xl flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-[#C69C6D] uppercase font-bold">/{cat.slug}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono">{cat.toursCount} Tours</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white">{cat.name}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{cat.description}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex justify-end gap-2 text-xs">
                    <button
                      onClick={() => {
                        const newName = prompt('Enter new category name:', cat.name);
                        if (newName && newName !== cat.name) {
                          setCategoriesList(prev => prev.map(c => (c.id === cat.id ? { ...c, name: newName } : c)));
                          addAuditLog('CATEGORY', cat.slug, 'UPDATE_CATEGORY', `Renamed category to "${newName}".`);
                          showToast(`Category updated to "${newName}"!`);
                        }
                      }}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete category "${cat.name}"?`)) {
                          setCategoriesList(prev => prev.filter(c => c.id !== cat.id));
                          addAuditLog('CATEGORY', cat.slug, 'DELETE_CATEGORY', `Deleted category.`);
                          showToast(`Category "${cat.name}" deleted.`, 'info');
                        }
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-rose-900/20 text-rose-400 border border-rose-700/30 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 4: DESTINATIONS MANAGEMENT */}
        {/* ==================================================================== */}
        {activeTab === 'destinations' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Jordan Destinations & Landmarks</h2>
                <p className="text-xs text-gray-400 mt-1">Manage destination showcases, highlights, and regional guides.</p>
              </div>

              <button
                onClick={() => setIsCreatingDestination(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white text-xs font-bold shadow-lg cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Destination</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinationsList.map(dest => (
                <div key={dest.id} className="rounded-3xl bg-[#1B1514] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between">
                  <div className="h-44 bg-cover bg-center relative" style={{ backgroundImage: `url('${getAssetUrl(dest.heroImage || dest.image || '/images/hero-fallback.jpg')}')` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1514] via-transparent to-black/40" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#C69C6D] uppercase font-bold border border-white/10">
                        {dest.region || 'Jordan'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white">{dest.title?.en || dest.name?.en || dest.id}</h3>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{dest.description?.en || dest.subtitle?.en || dest.tagline?.en}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {((dest.highlights && dest.highlights.en) || []).slice(0, 3).map((h: string, i: number) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-gray-300">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                      <span className="text-[11px] text-gray-500 font-mono">/destinations/{dest.slug?.en || dest.id}</span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => setSelectedDestinationForEdit(dest)}
                          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono cursor-pointer inline-flex items-center gap-1.5 shrink-0"
                        >
                          <Edit3 className="w-3.5 h-3.5 shrink-0" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteDestination(dest)}
                          className="p-1.5 rounded-lg bg-rose-900/20 hover:bg-rose-900/40 text-rose-400 border border-rose-700/30 cursor-pointer inline-flex items-center justify-center shrink-0"
                          title="Delete Destination"
                        >
                          <Trash2 className="w-3.5 h-3.5 shrink-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 5: DIRECT BOOKINGS & INVOICES */}
        {/* ==================================================================== */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Direct Traveler Bookings</h2>
                <p className="text-xs text-gray-400 mt-1">Manage guest reservations, generate official PDF vouchers, and send WhatsApp confirmations.</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#C69C6D] text-xs font-mono cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Bookings CSV</span>
                </button>
              </div>
            </div>

            <div className="bg-[#1B1514] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#12161C] text-[#C69C6D] uppercase tracking-wider font-mono font-semibold border-b border-white/10">
                    <tr>
                      <th className="p-4 whitespace-nowrap">Reference</th>
                      <th className="p-4 whitespace-nowrap">Lead Traveler</th>
                      <th className="p-4 whitespace-nowrap">Tour Package</th>
                      <th className="p-4 whitespace-nowrap">Travel Date</th>
                      <th className="p-4 whitespace-nowrap">Guests</th>
                      <th className="p-4 whitespace-nowrap">Price Snapshot (/ person)</th>
                      <th className="p-4 whitespace-nowrap">Status</th>
                      <th className="p-4 text-right whitespace-nowrap">Actions & Voucher</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {bookingsList.map(booking => (
                      <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-mono text-[#C69C6D] font-bold whitespace-nowrap">{booking.ref}</td>
                        <td className="p-4">
                          <div className="font-bold text-white">{booking.customer}</div>
                          <div className="text-[11px] text-gray-400">{booking.email}</div>
                          <div className="text-[11px] text-gray-400 font-mono">{booking.phone}</div>
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-white block">{booking.tour}</span>
                          <span className="text-[10px] text-gray-400 font-mono uppercase">Lang: {booking.locale}</span>
                        </td>
                        <td className="p-4 font-mono whitespace-nowrap">{booking.date}</td>
                        <td className="p-4 font-mono whitespace-nowrap">{booking.adults} Adults {booking.children > 0 && `/ ${booking.children} Kids`}</td>
                        <td className="p-4 font-mono font-bold text-emerald-400 whitespace-nowrap">
                          ${booking.priceSnapshot} {booking.currency} <span className="text-[10px] text-gray-400 font-normal">/ person</span>
                        </td>
                        <td className="p-4 whitespace-nowrap">
                          <select
                            value={booking.status}
                            onChange={(e) => handleUpdateBookingStatus(booking.id, e.target.value as any)}
                            className="bg-[#12161C] border border-white/10 rounded-lg px-2.5 py-1 text-xs font-mono font-bold text-white focus:outline-none"
                          >
                            <option value="NEW">NEW</option>
                            <option value="CONFIRMED">CONFIRMED</option>
                            <option value="IN_PROGRESS">IN PROGRESS</option>
                            <option value="COMPLETED">COMPLETED</option>
                            <option value="CANCELLED">CANCELLED</option>
                            <option value="REFUNDED">REFUNDED</option>
                          </select>
                        </td>
                        <td className="p-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5 shrink-0">
                            <button
                              onClick={() => setSelectedBookingForVoucher(booking)}
                              className="px-3 py-1.5 rounded-lg bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs shadow-md cursor-pointer inline-flex items-center gap-1.5 shrink-0"
                            >
                              <Printer className="w-3.5 h-3.5 shrink-0" />
                              <span>Voucher</span>
                            </button>

                            <button
                              onClick={() => {
                                const msg = `Hello ${booking.customer}, greetings from Jordan Story Tours! We are pleased to confirm your private tour: ${booking.tour} starting on ${booking.date} (Booking Ref: ${booking.ref}). Rate: $${booking.priceSnapshot} USD per person. Our chauffeur will meet you at the airport/hotel.`;
                                handleOpenWhatsApp(booking.phone, msg);
                              }}
                              className="px-2.5 py-1.5 rounded-lg bg-emerald-700/30 hover:bg-emerald-700/50 text-emerald-400 border border-emerald-600/40 text-xs font-mono cursor-pointer inline-flex items-center gap-1.5 shrink-0"
                            >
                              <PhoneCall className="w-3.5 h-3.5 shrink-0" />
                              <span>WhatsApp</span>
                            </button>

                            <button
                              onClick={() => setSelectedBookingForEdit(booking)}
                              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer inline-flex items-center justify-center shrink-0"
                              title="Edit Booking"
                            >
                              <Edit3 className="w-3.5 h-3.5 shrink-0" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 6: CUSTOM QUOTATIONS */}
        {/* ==================================================================== */}
        {activeTab === 'quotations' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Customized Quotation Inquiries</h2>
                <p className="text-xs text-gray-400 mt-1">Review bespoke itinerary requests, calculate customized pricing, and convert quotes to confirmed bookings.</p>
              </div>

              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#C69C6D] text-xs font-mono cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Quotes CSV</span>
              </button>
            </div>

            <div className="bg-[#1B1514] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#12161C] text-[#C69C6D] uppercase tracking-wider font-mono font-semibold border-b border-white/10">
                    <tr>
                      <th className="p-4 whitespace-nowrap">Reference</th>
                      <th className="p-4 whitespace-nowrap">Traveler</th>
                      <th className="p-4 whitespace-nowrap">Requested Itinerary</th>
                      <th className="p-4 whitespace-nowrap">Dates</th>
                      <th className="p-4 whitespace-nowrap">Guests & Hotels</th>
                      <th className="p-4 whitespace-nowrap">Quoted Rate (/ person)</th>
                      <th className="p-4 whitespace-nowrap">Status</th>
                      <th className="p-4 text-right whitespace-nowrap">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {quotationsList.map(quote => (
                      <tr key={quote.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-mono text-[#C69C6D] font-bold whitespace-nowrap">{quote.ref}</td>
                        <td className="p-4">
                          <div className="font-bold text-white">{quote.customer}</div>
                          <div className="text-[11px] text-gray-400">{quote.email}</div>
                          <div className="text-[11px] text-gray-400 font-mono">{quote.phone}</div>
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-white block">{quote.tour}</span>
                          <span className="text-[10px] text-[#C69C6D] font-mono">Special: {quote.specialRequests || 'Standard VIP'}</span>
                        </td>
                        <td className="p-4 font-mono whitespace-nowrap">{quote.arrivalDate}</td>
                        <td className="p-4 whitespace-nowrap">
                          <span className="block font-mono">{quote.adults} Adults {quote.children > 0 && `/ ${quote.children} Kids`}</span>
                          <span className="text-[10px] text-gray-400 font-mono">{quote.hotelPreference || '4-Star Boutique'}</span>
                        </td>
                        <td className="p-4 font-mono font-bold text-amber-400 whitespace-nowrap">
                          {quote.quotedPrice ? `$${quote.quotedPrice} ${quote.quotedCurrency} / person` : 'Pending Quote'}
                        </td>
                        <td className="p-4 whitespace-nowrap">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                            quote.status === 'NEW' ? 'bg-amber-900/40 text-amber-400 border border-amber-700/50' :
                            quote.status === 'QUOTED' ? 'bg-blue-900/40 text-blue-400 border border-blue-700/50' :
                            quote.status === 'CONVERTED_TO_BOOKING' ? 'bg-emerald-900/40 text-emerald-400 border border-emerald-700/50' :
                            'bg-gray-800 text-gray-300'
                          }`}>
                            {quote.status}
                          </span>
                        </td>
                        <td className="p-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5 shrink-0">
                            <button
                              onClick={() => setSelectedQuoteForEdit(quote)}
                              className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md cursor-pointer inline-flex items-center gap-1.5 shrink-0"
                            >
                              <DollarSign className="w-3.5 h-3.5 shrink-0" />
                              <span>Quote</span>
                            </button>

                            {quote.status !== 'CONVERTED_TO_BOOKING' && (
                              <button
                                onClick={() => handleConvertQuoteToBooking(quote)}
                                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md cursor-pointer inline-flex items-center gap-1.5 shrink-0"
                              >
                                <Check className="w-3.5 h-3.5 shrink-0" />
                                <span>Convert</span>
                              </button>
                            )}

                            <button
                              onClick={() => setSelectedQuoteForInvoice(quote)}
                              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer inline-flex items-center justify-center shrink-0"
                              title="Print Quote Proposal"
                            >
                              <Printer className="w-3.5 h-3.5 shrink-0" />
                            </button>

                            <button
                              onClick={() => {
                                const msg = `Dear ${quote.customer}, thank you for contacting Jordan Story Tours! We have prepared your custom itinerary quote for: ${quote.tour} at $${quote.quotedPrice || 'On Request'} USD per person. You can review details here: https://jordanstorytours.com/booking.`;
                                handleOpenWhatsApp(quote.phone, msg);
                              }}
                              className="p-1.5 rounded-lg bg-emerald-700/30 hover:bg-emerald-700/50 text-emerald-400 border border-emerald-600/40 cursor-pointer inline-flex items-center justify-center shrink-0"
                              title="Send WhatsApp Quote"
                            >
                              <PhoneCall className="w-3.5 h-3.5 shrink-0" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 7: POST-TOUR REVIEWS MODERATION */}
        {/* ==================================================================== */}
        {activeTab === 'reviews' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Verified Post-Tour Review Moderation</h2>
                <p className="text-xs text-gray-400 mt-1">Generate secure review submission tokens, send WhatsApp invitations, and moderate traveler ratings.</p>
              </div>

              <button
                onClick={() => setIsCreatingReviewToken(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white text-xs font-bold shadow-lg cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Create Review Request Token</span>
              </button>
            </div>

            {/* Pending Moderation Queue */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Submitted Reviews Moderation Queue ({submittedReviews.filter(r => r.moderationStatus === 'PENDING_MODERATION').length})</span>
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {submittedReviews.map(review => (
                  <div key={review.id} className="p-6 rounded-3xl bg-[#1B1514] border border-white/10 space-y-4 shadow-xl">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-serif font-bold text-lg text-white block">{review.displayName} ({review.displayCountry || 'Traveler'})</span>
                        <span className="text-xs text-[#C69C6D] font-mono">{review.tourName}</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                      </div>
                    </div>

                    <p className="text-xs text-gray-300 italic leading-relaxed">"{review.reviewBody}"</p>

                    <div className="flex justify-between items-center pt-4 border-t border-white/10 text-xs">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                        review.moderationStatus === 'APPROVED' ? 'bg-emerald-900/40 text-emerald-400 border border-emerald-700/50' :
                        review.moderationStatus === 'REJECTED' ? 'bg-rose-900/40 text-rose-400 border border-rose-700/50' :
                        'bg-amber-900/40 text-amber-400 border border-amber-700/50'
                      }`}>
                        {review.moderationStatus}
                      </span>

                      <div className="flex items-center gap-2">
                        {review.moderationStatus !== 'APPROVED' && (
                          <button
                            onClick={() => handleModerateReview(review.id, true)}
                            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer inline-flex items-center gap-1"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Approve & Publish</span>
                          </button>
                        )}
                        {review.moderationStatus !== 'REJECTED' && (
                          <button
                            onClick={() => handleModerateReview(review.id, false)}
                            className="px-3 py-1.5 rounded-lg bg-rose-900/30 hover:bg-rose-900/50 text-rose-400 border border-rose-700/40 text-xs cursor-pointer"
                          >
                            Reject
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Review Request Tokens */}
            <div className="p-6 rounded-3xl bg-[#1B1514] border border-white/10 space-y-4 shadow-xl">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-[#C69C6D]" />
                <span>Dispatched Review Tokens & WhatsApp Messenger</span>
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#12161C] text-[#C69C6D] uppercase tracking-wider font-mono font-semibold border-b border-white/10">
                    <tr>
                      <th className="p-4">Customer</th>
                      <th className="p-4">Tour</th>
                      <th className="p-4">Language</th>
                      <th className="p-4">Token Key</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Direct Messenger</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {reviewRequests.map(req => (
                      <tr key={req.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-bold text-white">{req.customerName}</td>
                        <td className="p-4 font-mono text-gray-300">{req.tourName}</td>
                        <td className="p-4 font-mono uppercase text-gray-400">{req.locale}</td>
                        <td className="p-4 font-mono text-[#C69C6D]">/review/{req.token}</td>
                        <td className="p-4 font-mono text-emerald-400">{req.status}</td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => {
                              const url = `${window.location.origin}/review/${req.token}`;
                              navigator.clipboard.writeText(url);
                              showToast(`Copied review URL to clipboard: ${url}`);
                            }}
                            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs cursor-pointer inline-flex items-center gap-1"
                          >
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy URL</span>
                          </button>

                          <button
                            onClick={() => {
                              const templateFn = WHATSAPP_TEMPLATES[req.locale] || WHATSAPP_TEMPLATES.en;
                              const url = `${window.location.origin}/review/${req.token}`;
                              const msg = typeof templateFn === 'function' ? templateFn(req.customerName, req.tourName, url) : `Hi ${req.customerName}, please review your tour: ${url}`;
                              handleOpenWhatsApp(req.customerPhone || '', msg);
                            }}
                            className="px-3 py-1.5 rounded-lg bg-emerald-700/30 hover:bg-emerald-700/50 text-emerald-400 border border-emerald-600/40 text-xs font-mono cursor-pointer inline-flex items-center gap-1"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                            <span>Send WhatsApp</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 8: REPORTS & INVOICING */}
        {/* ==================================================================== */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Operations Reporting & Financials</h2>
                <p className="text-xs text-gray-400 mt-1">Export transaction registries, view revenue distribution by language, and print summaries.</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white text-xs font-bold shadow-lg cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Complete CSV Report</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Executive Summary</span>
                </button>
              </div>
            </div>

            {/* Language Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { lang: 'English (EN)', count: bookingsList.filter(b => b.locale === 'en').length, volume: bookingsList.filter(b => b.locale === 'en').reduce((s, b) => s + b.priceSnapshot, 0) },
                { lang: 'German (DE)', count: bookingsList.filter(b => b.locale === 'de').length, volume: bookingsList.filter(b => b.locale === 'de').reduce((s, b) => s + b.priceSnapshot, 0) },
                { lang: 'French (FR)', count: bookingsList.filter(b => b.locale === 'fr').length, volume: bookingsList.filter(b => b.locale === 'fr').reduce((s, b) => s + b.priceSnapshot, 0) },
                { lang: 'Italian (IT)', count: bookingsList.filter(b => b.locale === 'it').length, volume: bookingsList.filter(b => b.locale === 'it').reduce((s, b) => s + b.priceSnapshot, 0) }
              ].map(stat => (
                <div key={stat.lang} className="p-6 rounded-2xl bg-[#1B1514] border border-white/10 space-y-2 shadow-xl">
                  <span className="text-xs text-gray-400 font-mono uppercase">{stat.lang}</span>
                  <div className="text-2xl font-serif font-bold text-[#C69C6D]">${stat.volume.toLocaleString()} USD</div>
                  <span className="text-[11px] text-gray-400 font-mono block">{stat.count} Bookings</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 9: MEDIA LIBRARY */}
        {/* ==================================================================== */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Media Assets & Multilingual Alt Tagging</h2>
                <p className="text-xs text-gray-400 mt-1">Manage high-resolution tour imagery, video frames, and SEO localized alt descriptions.</p>
              </div>

              <button
                onClick={() => setIsCreatingMedia(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white text-xs font-bold shadow-lg cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Upload Media Asset</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaList.map(asset => (
                <div key={asset.id} className="rounded-3xl bg-[#1B1514] border border-white/10 overflow-hidden shadow-xl space-y-3">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${asset.url}')` }} />
                  <div className="p-5 space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white text-sm">{asset.title}</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-[#C69C6D]">{asset.category}</span>
                    </div>
                    <p className="text-gray-400 font-mono text-[11px]">Alt (EN): {asset.altEn}</p>
                    <p className="text-gray-400 font-mono text-[11px]">Alt (DE): {asset.altDe}</p>

                    <div className="pt-3 border-t border-white/10 flex justify-end">
                      <button
                        onClick={() => {
                          setMediaList(prev => prev.filter(m => m.id !== asset.id));
                          showToast(`Media "${asset.title}" removed.`, 'info');
                        }}
                        className="text-rose-400 hover:text-rose-300 font-mono text-xs cursor-pointer inline-flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 10: STATIC PUBLISHING */}
        {/* ==================================================================== */}
        {activeTab === 'publish' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Edge Static Publishing & Cache Control</h2>
                <p className="text-xs text-gray-400 mt-1">Rebuild and synchronize static localized HTML snapshots across all 640+ tour routes.</p>
              </div>

              <button
                onClick={handleTriggerStaticPublish}
                disabled={publishInProgress}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white text-xs font-bold uppercase tracking-wider shadow-xl cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${publishInProgress ? 'animate-spin' : ''}`} />
                <span>{publishInProgress ? 'Deploying Snapshot...' : 'Trigger Edge Rebuild'}</span>
              </button>
            </div>

            <div className="p-6 rounded-3xl bg-[#1B1514] border border-white/10 space-y-4">
              <h3 className="font-serif text-lg font-bold text-white">Deployment Pipeline History</h3>
              <div className="space-y-2 text-xs font-mono">
                {publishJobs.map(job => (
                  <div key={job.id} className="p-3.5 rounded-xl bg-[#12161C] flex items-center justify-between border border-white/5">
                    <div>
                      <span className="font-bold text-white block">{job.ref}</span>
                      <span className="text-gray-400 text-[11px]">{job.timestamp} • By {job.requestedBy}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-900/40 text-emerald-400 border border-emerald-700/50">
                      {job.status} ({job.pagesCount} Pages)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 11: SITE SETTINGS */}
        {/* ==================================================================== */}
        {activeTab === 'settings' && (
          <div className="max-w-3xl space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white">Enterprise Business & Portal Settings</h2>
              <p className="text-xs text-gray-400 mt-1">Configure legal identity, Ministry license details, contact channels, and currency preferences.</p>
            </div>

            <div className="p-8 rounded-3xl bg-[#1B1514] border border-white/10 space-y-6 shadow-2xl text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-400 font-mono block mb-1">BUSINESS NAME</label>
                  <input
                    type="text"
                    value={siteSettings.businessName}
                    onChange={(e) => setSiteSettings({ ...siteSettings, businessName: e.target.value })}
                    className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-400 font-mono block mb-1">REGISTRATION / LICENSE</label>
                  <input
                    type="text"
                    value={siteSettings.registrationNumber}
                    onChange={(e) => setSiteSettings({ ...siteSettings, registrationNumber: e.target.value })}
                    className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-400 font-mono block mb-1">WHATSAPP OPERATIONS HOTLINE</label>
                  <input
                    type="text"
                    value={siteSettings.whatsapp}
                    onChange={(e) => setSiteSettings({ ...siteSettings, whatsapp: e.target.value })}
                    className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-400 font-mono block mb-1">PRIMARY SUPPORT EMAIL</label>
                  <input
                    type="text"
                    value={siteSettings.email}
                    onChange={(e) => setSiteSettings({ ...siteSettings, email: e.target.value })}
                    className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-400 font-mono block mb-1">DEFAULT CURRENCY</label>
                  <select
                    value={siteSettings.defaultCurrency}
                    onChange={(e) => setSiteSettings({ ...siteSettings, defaultCurrency: e.target.value })}
                    className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="JOD">JOD (Jordanian Dinar)</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 font-mono block mb-1">HEADQUARTERS ADDRESS</label>
                  <input
                    type="text"
                    value={siteSettings.address}
                    onChange={(e) => setSiteSettings({ ...siteSettings, address: e.target.value })}
                    className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => {
                    addAuditLog('SETTINGS', 'BUSINESS', 'UPDATE_SETTINGS', 'Updated company registration and contact configuration.');
                    showToast('Business & Legal settings saved successfully!');
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
                >
                  Save Business Settings
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 12: USERS & ROLES */}
        {/* ==================================================================== */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white">Administrator Accounts & RBAC Roles</h2>
              <p className="text-xs text-gray-400 mt-1">Manage personnel permissions, assign operational roles, and enforce security policies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Jordan Story Owner', email: 'admin@jordanstorytours.com', role: 'SUPER_ADMIN' as AdminRole, desc: 'Full administrative access across all modules, settings, and database configurations.' },
                { name: 'Booking Manager', email: 'bookings@jordanstorytours.com', role: 'BOOKING_MANAGER' as AdminRole, desc: 'Operational processing of direct reservations, customized quotations, and customer communication.' },
                { name: 'Content Editor', email: 'editor@jordanstorytours.com', role: 'CONTENT_EDITOR' as AdminRole, desc: 'Authoring tours, destination guides, and multilingual translation synchronization.' }
              ].map(user => (
                <div key={user.email} className="p-6 rounded-3xl bg-[#1B1514] border border-white/10 space-y-3 shadow-xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-white block text-sm">{user.name}</span>
                      <span className="text-gray-400 font-mono text-xs">{user.email}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#A85F43]/20 text-[#C69C6D] border border-[#A85F43]/40 font-mono text-[10px] font-bold">
                      {user.role}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">{user.desc}</p>
                  
                  <div className="pt-3 border-t border-white/10 flex justify-end">
                    <button
                      onClick={() => {
                        setCurrentAdmin({ name: user.name, email: user.email, role: user.role });
                        showToast(`Switched active session to ${user.name} (${user.role})`);
                      }}
                      className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs cursor-pointer"
                    >
                      Simulate Session
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* TAB 13: AUDIT LOG */}
        {/* ==================================================================== */}
        {activeTab === 'audit' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Security & Operations Audit History</h2>
                <p className="text-xs text-gray-400 mt-1">Immutable chronological ledger of all administrative changes, price edits, and publishing events.</p>
              </div>

              <button
                onClick={() => {
                  const csv = 'Timestamp,Admin,Role,Entity,Action,Details\n' + auditLogs.map(l => `"${l.timestamp}","${l.adminName}","${l.adminRole}","${l.entityType}","${l.action}","${l.details.replace(/"/g, '""')}"`).join('\n');
                  const encodedUri = encodeURI('data:text/csv;charset=utf-8,' + csv);
                  const link = document.createElement('a');
                  link.setAttribute('href', encodedUri);
                  link.setAttribute('download', 'audit_logs.csv');
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  showToast('Audit log CSV exported.');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Audit CSV</span>
              </button>
            </div>

            <div className="bg-[#1B1514] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#12161C] text-[#C69C6D] uppercase tracking-wider font-mono font-semibold border-b border-white/10">
                    <tr>
                      <th className="p-4">Timestamp</th>
                      <th className="p-4">Administrator</th>
                      <th className="p-4">Entity</th>
                      <th className="p-4">Action</th>
                      <th className="p-4">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {auditLogs.map(log => (
                      <tr key={log.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-mono text-gray-400">{log.timestamp}</td>
                        <td className="p-4">
                          <span className="font-bold text-white block">{log.adminName}</span>
                          <span className="text-[10px] text-[#C69C6D] font-mono">{log.adminRole}</span>
                        </td>
                        <td className="p-4 font-mono text-gray-300">{log.entityType} ({log.entityId})</td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white/10 text-white">
                            {log.action}
                          </span>
                        </td>
                        <td className="p-4 text-gray-200">{log.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ==================================================================== */}
      {/* MODAL: TOUR CREATE & EDIT */}
      {/* ==================================================================== */}
      {(selectedTourForEdit || isCreatingTour) && (
        <TourEditModal
          tour={selectedTourForEdit}
          isCreating={isCreatingTour}
          onClose={() => {
            setSelectedTourForEdit(null);
            setIsCreatingTour(false);
          }}
          onSave={handleSaveTour}
        />
      )}

      {/* ==================================================================== */}
      {/* MODAL: DESTINATION CREATE & EDIT */}
      {/* ==================================================================== */}
      {(selectedDestinationForEdit || isCreatingDestination) && (
        <DestinationEditModal
          dest={selectedDestinationForEdit}
          isCreating={isCreatingDestination}
          onClose={() => {
            setSelectedDestinationForEdit(null);
            setIsCreatingDestination(false);
          }}
          onSave={handleSaveDestination}
        />
      )}

      {/* ==================================================================== */}
      {/* MODAL: BOOKING EDIT */}
      {/* ==================================================================== */}
      {selectedBookingForEdit && (
        <BookingEditModal
          booking={selectedBookingForEdit}
          onClose={() => setSelectedBookingForEdit(null)}
          onSave={handleSaveBooking}
        />
      )}

      {/* ==================================================================== */}
      {/* MODAL: QUOTATION EDIT & CALCULATOR */}
      {/* ==================================================================== */}
      {selectedQuoteForEdit && (
        <QuotationEditModal
          quote={selectedQuoteForEdit}
          onClose={() => setSelectedQuoteForEdit(null)}
          onSave={handleSaveQuotation}
          onConvert={handleConvertQuoteToBooking}
        />
      )}

      {/* ==================================================================== */}
      {/* MODAL: CREATE REVIEW TOKEN */}
      {/* ==================================================================== */}
      {isCreatingReviewToken && (
        <CreateReviewTokenModal
          onClose={() => setIsCreatingReviewToken(false)}
          onGenerate={handleCreateReviewToken}
        />
      )}

      {/* ==================================================================== */}
      {/* MODAL: UPLOAD MEDIA */}
      {/* ==================================================================== */}
      {isCreatingMedia && (
        <CreateMediaModal
          onClose={() => setIsCreatingMedia(false)}
          onUpload={(asset) => {
            setMediaList(prev => [asset, ...prev]);
            addAuditLog('MEDIA', asset.id, 'UPLOAD_MEDIA', `Uploaded media asset "${asset.title}".`);
            setIsCreatingMedia(false);
            showToast(`Media "${asset.title}" uploaded!`);
          }}
        />
      )}

      {/* ==================================================================== */}
      {/* MODAL: CREATE CATEGORY */}
      {/* ==================================================================== */}
      {isCreatingCategory && (
        <CreateCategoryModal
          onClose={() => setIsCreatingCategory(false)}
          onSave={(cat) => {
            setCategoriesList(prev => [cat, ...prev]);
            addAuditLog('CATEGORY', cat.slug, 'CREATE_CATEGORY', `Created category "${cat.name}".`);
            setIsCreatingCategory(false);
            showToast(`Category "${cat.name}" created!`);
          }}
        />
      )}

      {/* ==================================================================== */}
      {/* MODAL: OFFICIAL PDF TRAVEL VOUCHER & INVOICE */}
      {/* ==================================================================== */}
      {selectedBookingForVoucher && (
        <VoucherInvoiceModal
          booking={selectedBookingForVoucher}
          settings={siteSettings}
          onClose={() => setSelectedBookingForVoucher(null)}
        />
      )}

      {/* ==================================================================== */}
      {/* MODAL: FORMAL QUOTATION PROPOSAL INVOICE */}
      {/* ==================================================================== */}
      {selectedQuoteForInvoice && (
        <QuoteProposalModal
          quote={selectedQuoteForInvoice}
          settings={siteSettings}
          onClose={() => setSelectedQuoteForInvoice(null)}
        />
      )}

      {/* ==================================================================== */}
      {/* SECURITY CONFIRMATION DIALOG */}
      {/* ==================================================================== */}
      {securityModalAction && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1B1514] border border-amber-500/40 rounded-3xl max-w-lg w-full p-8 space-y-6 text-[#F5EFE6] shadow-2xl">
            <div className="flex items-center gap-3 text-amber-400">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="font-serif text-xl font-bold text-white">{securityModalAction.title}</h3>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">{securityModalAction.description}</p>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/10 text-xs">
              <button
                onClick={() => setSecurityModalAction(null)}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 font-medium cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={securityModalAction.onConfirm}
                className="px-6 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold uppercase tracking-wider shadow-lg cursor-pointer"
              >
                {securityModalAction.confirmText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MODAL COMPONENTS
// ============================================================================

// 1. Tour Edit & Create Modal
function TourEditModal({ tour, isCreating, onClose, onSave }: { tour: Tour | null; isCreating: boolean; onClose: () => void; onSave: (t: Tour) => void }) {
  const [form, setForm] = useState<Tour>(
    tour || {
      id: 'tour-' + Date.now(),
      slug: { en: 'new-jordan-tour' },
      title: { en: 'New Jordan Discovery Tour', de: 'Neue Jordanien Rundreise', fr: 'Nouveau Circuit en Jordanie', it: 'Nuovo Tour in Giordania' },
      subtitle: { en: 'Private bespoke tour with chauffeur', de: 'Private Rundreise mit Chauffeur', fr: 'Voyage privé avec chauffeur', it: 'Tour privato con autista' },
      category: 'Classical',
      storyCollection: 'Classic Heritage',
      durationDays: 5,
      durationNights: 4,
      priceMode: 'FROM' as PriceMode,
      bookingMode: 'DIRECT_BOOKING' as BookingMode,
      startingPriceUSD: 799,
      highlights: { en: ['Petra Wonder', 'Wadi Rum Camp', 'Dead Sea Float'] },
      route: ['Amman', 'Jerash', 'Petra', 'Wadi Rum', 'Dead Sea'],
      inclusions: { en: ['Private AC vehicle', 'English speaking chauffeur', 'Hotel accommodations', 'Breakfast & dinner'] },
      exclusions: { en: ['International flights', 'Personal expenses', 'Tips'] },
      itinerary: [
        { day: 1, title: { en: 'Arrival in Amman' }, description: { en: 'Welcome to Jordan, meet & greet at airport.' } },
        { day: 2, title: { en: 'Jerash & Dead Sea' }, description: { en: 'Explore Roman ruins and float on the Dead Sea.' } }
      ],
      heroImage: '/images/scroll-world-video/frame-08.jpg',
      gallery: [],
      isDraft: false
    }
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1B1514] border border-white/20 rounded-3xl max-w-2xl w-full p-8 space-y-6 text-[#F5EFE6] shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-2xl font-bold text-white">{isCreating ? 'Create New Tour Package' : `Edit Tour: ${form.title.en}`}</h3>

        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 font-mono block mb-1">TITLE (ENGLISH)</label>
              <input
                type="text"
                value={form.title.en}
                onChange={(e) => setForm({ ...form, title: { ...form.title, en: e.target.value } })}
                className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 font-mono block mb-1">URL SLUG</label>
              <input
                type="text"
                value={form.slug.en}
                onChange={(e) => setForm({ ...form, slug: { ...form.slug, en: e.target.value } })}
                className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 font-mono block mb-1">BASE PRICE PER PERSON ($ USD)</label>
              <input
                type="number"
                value={form.startingPriceUSD || 0}
                onChange={(e) => setForm({ ...form, startingPriceUSD: Number(e.target.value) })}
                className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 font-mono block mb-1">PRICING MODE</label>
              <select
                value={form.priceMode}
                onChange={(e) => setForm({ ...form, priceMode: e.target.value as PriceMode })}
                className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
              >
                <option value="FROM">FROM (Starting From Price)</option>
                <option value="FIXED">FIXED (Exact Fixed Price)</option>
                <option value="QUOTATION">QUOTATION (Quote on Request)</option>
              </select>
            </div>

            <div>
              <label className="text-gray-400 font-mono block mb-1">SALES / BOOKING MODE</label>
              <select
                value={form.bookingMode}
                onChange={(e) => setForm({ ...form, bookingMode: e.target.value as BookingMode })}
                className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
              >
                <option value="DIRECT_BOOKING">Direct Instant Booking</option>
                <option value="QUOTATION">Customized Itinerary Quote</option>
              </select>
            </div>

            <div>
              <label className="text-gray-400 font-mono block mb-1">DURATION (DAYS)</label>
              <input
                type="number"
                value={form.durationDays || 1}
                onChange={(e) => setForm({ ...form, durationDays: Number(e.target.value) })}
                className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">TITLE (GERMAN · DE)</label>
            <input
              type="text"
              value={form.title.de || ''}
              onChange={(e) => setForm({ ...form, title: { ...form.title, de: e.target.value } })}
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">SUBTITLE / OVERVIEW</label>
            <textarea
              rows={2}
              value={form.subtitle.en}
              onChange={(e) => setForm({ ...form, subtitle: { ...form.subtitle, en: e.target.value } })}
              className="w-full bg-[#12161C] border border-white/10 rounded-xl p-3 text-white focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="isDraftCheck"
              checked={form.isDraft || false}
              onChange={(e) => setForm({ ...form, isDraft: e.target.checked })}
              className="w-4 h-4 text-[#A85F43] rounded"
            />
            <label htmlFor="isDraftCheck" className="text-gray-300 font-mono">Keep as DRAFT (Hide from live public catalog)</label>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
          <button onClick={onClose} className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-medium cursor-pointer">
            Cancel
          </button>
          <button
            onClick={() => onSave(form)}
            className="px-6 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          >
            Save Tour Package
          </button>
        </div>
      </div>
    </div>
  );
}

// 2. Destination Edit Modal
function DestinationEditModal({ dest, isCreating, onClose, onSave }: { dest: Destination | null; isCreating: boolean; onClose: () => void; onSave: (d: Destination) => void }) {
  const [form, setForm] = useState<Destination>(
    dest || {
      id: 'dest-' + Date.now(),
      slug: { en: 'new-destination', de: 'new-destination', fr: 'new-destination', it: 'new-destination' },
      title: { en: 'New Landmark', de: 'Neues Reiseziel', fr: 'Nouvelle Destination', it: 'Nuova Destinazione' },
      subtitle: { en: 'Historic ancient wonder', de: 'Historisches Weltwunder', fr: 'Merveille historique', it: 'Meraviglia storica' },
      region: 'Central',
      highlights: { en: ['Ancient ruins', 'Panoramic viewpoints', 'Local culture'], de: [], fr: [], it: [] },
      heroImage: '/images/scroll-world-video/frame-01.jpg',
      description: { en: 'Experience the magic of Jordan with private tours.' }
    }
  );

  const destTitle = form.title?.en || form.name?.en || 'New Landmark';

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1B1514] border border-white/20 rounded-3xl max-w-lg w-full p-8 space-y-6 text-[#F5EFE6] shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-2xl font-bold text-white">{isCreating ? 'Add Destination' : `Edit: ${destTitle}`}</h3>

        <div className="space-y-4 text-xs">
          <div>
            <label className="text-gray-400 font-mono block mb-1">DESTINATION NAME (EN)</label>
            <input
              type="text"
              value={form.title?.en || form.name?.en || ''}
              onChange={(e) => setForm({ 
                ...form, 
                title: { 
                  en: e.target.value,
                  de: form.title?.de || form.name?.de || '',
                  fr: form.title?.fr || form.name?.fr || '',
                  it: form.title?.it || form.name?.it || ''
                } 
              })}
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">REGION</label>
            <select
              value={form.region}
              onChange={(e) => setForm({ ...form, region: e.target.value as any })}
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            >
              <option value="North">North (Jerash, Ajloun, Umm Qais)</option>
              <option value="Central">Central (Amman, Madaba, Dead Sea)</option>
              <option value="South">South (Petra, Dana, Shobak)</option>
              <option value="Desert">Desert (Wadi Rum, Eastern Castles)</option>
            </select>
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">HERO IMAGE URL</label>
            <input
              type="text"
              value={form.heroImage}
              onChange={(e) => setForm({ ...form, heroImage: e.target.value })}
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">DESCRIPTION</label>
            <textarea
              rows={3}
              value={form.description?.en || ''}
              onChange={(e) => setForm({ ...form, description: { ...form.description, en: e.target.value } })}
              className="w-full bg-[#12161C] border border-white/10 rounded-xl p-3 text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
          <button onClick={onClose} className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-medium cursor-pointer">
            Cancel
          </button>
          <button
            onClick={() => onSave(form)}
            className="px-6 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          >
            Save Destination
          </button>
        </div>
      </div>
    </div>
  );
}

// 3. Booking Edit Modal
function BookingEditModal({ booking, onClose, onSave }: { booking: BookingRecord; onClose: () => void; onSave: (b: BookingRecord) => void }) {
  const [form, setForm] = useState<BookingRecord>({ ...booking });

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1B1514] border border-white/20 rounded-3xl max-w-lg w-full p-8 space-y-6 text-[#F5EFE6] shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-2xl font-bold text-white">Edit Booking: {form.ref}</h3>

        <div className="space-y-4 text-xs">
          <div>
            <label className="text-gray-400 font-mono block mb-1">TRAVELER NAME</label>
            <input
              type="text"
              value={form.customer}
              onChange={(e) => setForm({ ...form, customer: e.target.value })}
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 font-mono block mb-1">EMAIL</label>
              <input
                type="text"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 font-mono block mb-1">PHONE</label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 font-mono block mb-1">DATE</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400 font-mono block mb-1">PRICE SNAPSHOT PER PERSON ($ USD)</label>
              <input
                type="number"
                value={form.priceSnapshot}
                onChange={(e) => setForm({ ...form, priceSnapshot: Number(e.target.value) })}
                className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">SPECIAL REQUESTS</label>
            <input
              type="text"
              value={form.specialRequests || ''}
              onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">INTERNAL OPERATIONS NOTES</label>
            <textarea
              rows={2}
              value={form.internalNotes || ''}
              onChange={(e) => setForm({ ...form, internalNotes: e.target.value })}
              className="w-full bg-[#12161C] border border-white/10 rounded-xl p-3 text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
          <button onClick={onClose} className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-medium cursor-pointer">
            Cancel
          </button>
          <button
            onClick={() => onSave(form)}
            className="px-6 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          >
            Save Booking
          </button>
        </div>
      </div>
    </div>
  );
}

// 4. Quotation Edit Modal
function QuotationEditModal({ quote, onClose, onSave, onConvert }: { quote: QuotationRecord; onClose: () => void; onSave: (q: QuotationRecord) => void; onConvert: (q: QuotationRecord) => void }) {
  const [form, setForm] = useState<QuotationRecord>({ ...quote });

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1B1514] border border-white/20 rounded-3xl max-w-lg w-full p-8 space-y-6 text-[#F5EFE6] shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-2xl font-bold text-white">Prepare Custom Quote: {form.ref}</h3>

        <div className="space-y-4 text-xs">
          <div>
            <span className="text-gray-400 font-mono block">TRAVELER & TOUR</span>
            <span className="font-bold text-white text-sm block">{form.customer} ({form.email})</span>
            <span className="text-[#C69C6D] font-mono block">{form.tour} • {form.adults} Adults</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 font-mono block mb-1">QUOTED PRICE PER PERSON ($ USD)</label>
              <input
                type="number"
                value={form.quotedPrice || 0}
                onChange={(e) => setForm({ ...form, quotedPrice: Number(e.target.value) })}
                className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-400 font-mono block mb-1">STATUS</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value as any })}
                className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
              >
                <option value="NEW">NEW</option>
                <option value="IN_REVIEW">IN REVIEW</option>
                <option value="QUOTED">QUOTED</option>
                <option value="CUSTOMER_REPLIED">CUSTOMER REPLIED</option>
                <option value="ACCEPTED">ACCEPTED</option>
                <option value="DECLINED">DECLINED</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">INTERNAL PRICING BREAKDOWN / NOTES</label>
            <textarea
              rows={3}
              value={form.internalNotes || ''}
              onChange={(e) => setForm({ ...form, internalNotes: e.target.value })}
              placeholder="e.g. Includes Kempinski Dead Sea upgrade, chauffeur gratuity, private Bedouin guide."
              className="w-full bg-[#12161C] border border-white/10 rounded-xl p-3 text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <button
            onClick={() => onConvert(form)}
            className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer inline-flex items-center gap-1"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Convert to Confirmed Booking</span>
          </button>

          <div className="flex gap-2">
            <button onClick={onClose} className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-medium cursor-pointer">
              Cancel
            </button>
            <button
              onClick={() => onSave(form)}
              className="px-5 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
            >
              Save Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. Create Review Token Modal
function CreateReviewTokenModal({ onClose, onGenerate }: { onClose: () => void; onGenerate: (name: string, email: string, phone: string, tour: string, lang: ReviewLocale) => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [tour, setTour] = useState('Petra, Dead Sea & Jerash Discovery');
  const [lang, setLang] = useState<ReviewLocale>('en');

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1B1514] border border-white/20 rounded-3xl max-w-md w-full p-8 space-y-6 text-[#F5EFE6] shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-2xl font-bold text-white">Create Review Request Token</h3>

        <div className="space-y-4 text-xs">
          <div>
            <label className="text-gray-400 font-mono block mb-1">TRAVELER FULL NAME</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Klaus Weber"
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">PHONE (FOR WHATSAPP)</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +49 170 1234567"
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">EMAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. klaus@weber.de"
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">LANGUAGE</label>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as ReviewLocale)}
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            >
              <option value="en">English (EN)</option>
              <option value="de">German (DE)</option>
              <option value="fr">French (FR)</option>
              <option value="it">Italian (IT)</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
          <button onClick={onClose} className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-medium cursor-pointer">
            Cancel
          </button>
          <button
            onClick={() => {
              if (!name) return alert('Please enter customer name.');
              onGenerate(name, email, phone, tour, lang);
            }}
            className="px-6 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          >
            Generate Token
          </button>
        </div>
      </div>
    </div>
  );
}

// 6. Create Media Modal
function CreateMediaModal({ onClose, onUpload }: { onClose: () => void; onUpload: (a: MediaAssetItem) => void }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('/images/scroll-world-video/frame-08.jpg');
  const [category, setCategory] = useState('Petra');
  const [altEn, setAltEn] = useState('');
  const [altDe, setAltDe] = useState('');

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1B1514] border border-white/20 rounded-3xl max-w-md w-full p-8 space-y-6 text-[#F5EFE6] shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-2xl font-bold text-white">Upload Media Asset</h3>

        <div className="space-y-4 text-xs">
          <div>
            <label className="text-gray-400 font-mono block mb-1">ASSET TITLE</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Petra Treasury Sunlight"
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">IMAGE PATH / URL</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">ALT TEXT (ENGLISH)</label>
            <input
              type="text"
              value={altEn}
              onChange={(e) => setAltEn(e.target.value)}
              placeholder="e.g. Ancient Petra Treasury carving"
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">ALT TEXT (GERMAN)</label>
            <input
              type="text"
              value={altDe}
              onChange={(e) => setAltDe(e.target.value)}
              placeholder="e.g. Das Schatzhaus von Petra"
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
          <button onClick={onClose} className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-medium cursor-pointer">
            Cancel
          </button>
          <button
            onClick={() => {
              if (!title) return alert('Please enter title');
              onUpload({
                id: 'med-' + Date.now(),
                title,
                url,
                category,
                altEn: altEn || title,
                altDe: altDe || title,
                uploadedAt: new Date().toISOString().substring(0, 10)
              });
            }}
            className="px-6 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          >
            Save Media
          </button>
        </div>
      </div>
    </div>
  );
}

// 7. Create Category Modal
function CreateCategoryModal({ onClose, onSave }: { onClose: () => void; onSave: (c: TourCategoryItem) => void }) {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1B1514] border border-white/20 rounded-3xl max-w-md w-full p-8 space-y-6 text-[#F5EFE6] shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-2xl font-bold text-white">Create Tour Category</h3>

        <div className="space-y-4 text-xs">
          <div>
            <label className="text-gray-400 font-mono block mb-1">CATEGORY NAME</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
              }}
              placeholder="e.g. Luxury Desert Glamping"
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">SLUG</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full bg-[#12161C] border border-white/10 rounded-xl px-3.5 py-2 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-400 font-mono block mb-1">DESCRIPTION</label>
            <textarea
              rows={2}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full bg-[#12161C] border border-white/10 rounded-xl p-3 text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
          <button onClick={onClose} className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-medium cursor-pointer">
            Cancel
          </button>
          <button
            onClick={() => {
              if (!name) return alert('Please enter name');
              onSave({
                id: 'cat-' + Date.now(),
                name,
                slug,
                description: desc,
                toursCount: 0
              });
            }}
            className="px-6 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          >
            Create Category
          </button>
        </div>
      </div>
    </div>
  );
}

// 8. Official Voucher & Invoice Modal (Printable)
function VoucherInvoiceModal({ booking, settings, onClose }: { booking: BookingRecord; settings: SiteSettingsState; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1A1615] border border-white/20 rounded-3xl max-w-2xl w-full p-8 space-y-6 text-[#F7F4EE] shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 cursor-pointer print:hidden">
          <X className="w-5 h-5" />
        </button>

        {/* Branded Voucher Header */}
        <div className="border-b border-white/10 pb-6 flex justify-between items-start">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#C69C6D] font-mono font-bold block">{settings.businessName}</span>
            <span className="text-[10px] text-gray-400 font-mono block">Ministry of Tourism License: {settings.registrationNumber}</span>
            <h3 className="font-serif text-2xl font-bold text-white mt-2">Official Travel Confirmation & Voucher</h3>
          </div>
          <div className="text-right font-mono">
            <span className="text-xs text-gray-400 block">VOUCHER NUMBER</span>
            <span className="text-lg font-bold text-[#C69C6D] block">{booking.ref}</span>
            <span className="text-[10px] text-emerald-400 font-bold block mt-1">STATUS: {booking.status}</span>
          </div>
        </div>

        {/* Guest & Journey Breakdown */}
        <div className="grid grid-cols-2 gap-6 text-xs bg-white/5 p-5 rounded-2xl border border-white/10">
          <div>
            <span className="text-gray-400 font-mono block">LEAD PASSENGER</span>
            <span className="font-bold text-white text-sm block mt-0.5">{booking.customer}</span>
            <span className="text-gray-300 block mt-1">{booking.email}</span>
            <span className="text-gray-300 block">{booking.phone}</span>
          </div>
          <div>
            <span className="text-gray-400 font-mono block">ITINERARY PACKAGE</span>
            <span className="font-bold text-white text-sm block mt-0.5">{booking.tour}</span>
            <span className="text-[#C69C6D] font-mono block mt-1">Start Date: {booking.date}</span>
            <span className="text-gray-300 block">{booking.adults} Adults {booking.children > 0 && `/ ${booking.children} Kids`}</span>
          </div>
        </div>

        {/* Pricing Breakdown */}
        <div className="p-5 rounded-2xl bg-[#A85F43]/20 border border-[#A85F43]/40 flex justify-between items-center">
          <div>
            <span className="text-xs text-gray-300 font-mono block">RATE PER PERSON: ${booking.priceSnapshot} {booking.currency}</span>
            <span className="font-serif text-2xl font-extrabold text-[#C69C6D]">
              Total: ${booking.priceSnapshot * (booking.adults || 1)} {booking.currency}
            </span>
            <span className="text-[10px] text-gray-400 font-mono block">({booking.adults} Adults × ${booking.priceSnapshot} USD)</span>
          </div>
          <div className="text-right text-[11px] text-gray-300 max-w-xs">
            <span>Includes private AC vehicle transfers, licensed chauffeur, hotel accommodations & tourism taxes.</span>
          </div>
        </div>

        {/* Terms & Emergency Contacts */}
        <div className="text-[11px] text-gray-400 space-y-1 font-mono pt-2">
          <p>• 24/7 Operations Hotline: {settings.whatsapp} ({settings.phone})</p>
          <p>• Headquarters: {settings.address}</p>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-white/10 print:hidden">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Official PDF Voucher</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// 9. Formal Quote Proposal Modal (Printable)
function QuoteProposalModal({ quote, settings, onClose }: { quote: QuotationRecord; settings: SiteSettingsState; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1A1615] border border-white/20 rounded-3xl max-w-2xl w-full p-8 space-y-6 text-[#F7F4EE] shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 cursor-pointer print:hidden">
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-white/10 pb-6 flex justify-between items-start">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#C69C6D] font-mono font-bold block">{settings.businessName}</span>
            <span className="text-[10px] text-gray-400 font-mono block">Ministry of Tourism License: {settings.registrationNumber}</span>
            <h3 className="font-serif text-2xl font-bold text-white mt-2">Custom Journey Quotation & Itinerary Proposal</h3>
          </div>
          <div className="text-right font-mono">
            <span className="text-xs text-gray-400 block">QUOTE REF</span>
            <span className="text-lg font-bold text-amber-400 block">{quote.ref}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 text-xs bg-white/5 p-5 rounded-2xl border border-white/10">
          <div>
            <span className="text-gray-400 font-mono block">VALUED GUEST</span>
            <span className="font-bold text-white text-sm block mt-0.5">{quote.customer}</span>
            <span className="text-gray-300 block mt-1">{quote.email}</span>
            <span className="text-gray-300 block">{quote.phone}</span>
          </div>
          <div>
            <span className="text-gray-400 font-mono block">REQUESTED EXPEDITION</span>
            <span className="font-bold text-white text-sm block mt-0.5">{quote.tour}</span>
            <span className="text-[#C69C6D] font-mono block mt-1">Arrival Date: {quote.arrivalDate}</span>
            <span className="text-gray-300 block">{quote.adults} Adults • {quote.hotelPreference || '4-Star Boutique'}</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-amber-900/20 border border-amber-500/40 flex justify-between items-center">
          <div>
            <span className="text-xs text-gray-300 font-mono block">ESTIMATED ALL-INCLUSIVE PROPOSAL</span>
            <span className="font-serif text-2xl font-extrabold text-amber-400">${quote.quotedPrice || 'On Request'} {quote.quotedCurrency}</span>
          </div>
          <div className="text-right text-[11px] text-gray-300">
            <span>Special Requests: {quote.specialRequests || 'Standard VIP Jordan Experience'}</span>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-white/10 print:hidden">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Proposal PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
