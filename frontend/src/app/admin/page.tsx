'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { TOURS_DATA, Tour } from '@/data/tours';
import { DESTINATIONS_DATA } from '@/data/destinations';
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
  CheckSquare
} from 'lucide-react';

import { ReviewsStoreService, ReviewRequest, UserSubmittedReview, WHATSAPP_TEMPLATES, ReviewLocale } from '@/data/reviewsStore';

// ============================================================================
// TYPE DEFINITIONS (Matching Specifications 03, 04, 06, 07)
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

export default function AdminDashboardPage() {
  // Navigation
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'tours' | 'categories' | 'destinations' | 'bookings' | 'quotations' | 'reviews' | 'media' | 'publish' | 'settings' | 'users' | 'audit'
  >('dashboard');

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priceModeFilter, setPriceModeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Current Logged-in Admin (Default SUPER_ADMIN)
  const [currentAdmin, setCurrentAdmin] = useState<{ name: string; email: string; role: AdminRole }>({
    name: 'Jordan Story Owner',
    email: 'admin@jordanstorytours.com',
    role: 'SUPER_ADMIN'
  });

  // Data Stores
  const [toursList, setToursList] = useState<Tour[]>(TOURS_DATA);
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

  const [auditLogs, setAuditLogs] = useState<AuditLogItem[]>([
    {
      id: 'AUD-901',
      adminName: 'Jordan Story Owner',
      adminRole: 'SUPER_ADMIN',
      entityType: 'PUBLISHING',
      entityId: 'STATIC-SNAPSHOT',
      action: 'TRIGGER_STATIC_REBUILD',
      details: 'Rebuilt edge static export across EN, DE, FR, IT (39 routes).',
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
      pagesCount: 39,
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

  // Modals & Active Drawers
  const [selectedTourForEdit, setSelectedTourForEdit] = useState<Tour | null>(null);
  const [selectedTourForMedia, setSelectedTourForMedia] = useState<Tour | null>(null);
  const [selectedBookingForVoucher, setSelectedBookingForVoucher] = useState<BookingRecord | null>(null);
  const [selectedQuoteForEdit, setSelectedQuoteForEdit] = useState<QuotationRecord | null>(null);
  const [securityModalAction, setSecurityModalAction] = useState<{
    title: string;
    description: string;
    confirmText: string;
    onConfirm: () => void;
  } | null>(null);

  // Reviews Data
  const [reviewRequests, setReviewRequests] = useState<ReviewRequest[]>([]);
  const [submittedReviews, setSubmittedReviews] = useState<UserSubmittedReview[]>([]);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [publishInProgress, setPublishInProgress] = useState(false);

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

  // Operational KPI Metrics (Doc 03 Section 2)
  const metrics = useMemo(() => {
    const publishedTours = toursList.filter(t => !t.isDraft).length;
    const draftTours = toursList.filter(t => t.isDraft).length;
    const quotationTours = toursList.filter(t => t.bookingMode === 'QUOTATION').length;
    const newBookings = bookingsList.filter(b => b.status === 'NEW').length;
    const newQuotations = quotationsList.filter(q => q.status === 'NEW').length;
    const pendingReviews = submittedReviews.filter(r => r.moderationStatus === 'PENDING').length;
    const aggregateRating = ReviewsStoreService.getCalculatedAggregateRating();

    return {
      publishedTours,
      draftTours,
      quotationTours,
      newBookings,
      newQuotations,
      pendingReviews,
      totalConfirmedRevenue: bookingsList
        .filter(b => b.status === 'CONFIRMED' || b.status === 'COMPLETED')
        .reduce((sum, b) => sum + b.priceSnapshot, 0),
      aggregateRating
    };
  }, [toursList, bookingsList, quotationsList, submittedReviews]);

  // Tour Status Toggles
  const handleTourPublishToggle = (tour: Tour) => {
    const isPublishing = tour.isDraft;
    const actionLabel = isPublishing ? 'Publish Tour' : 'Unpublish Tour';

    setSecurityModalAction({
      title: `${actionLabel}: "${tour.title.en}"`,
      description: isPublishing
        ? 'Publishing will mark this package active and make it eligible for static export across EN, DE, FR, IT.'
        : 'Unpublishing will withdraw this tour from the public catalog and sitemap.',
      confirmText: actionLabel,
      onConfirm: () => {
        const updated = toursList.map(t => (t.id === tour.id ? { ...t, isDraft: !t.isDraft } : t));
        setToursList(updated);
        addAuditLog('TOUR', tour.slug.en, isPublishing ? 'PUBLISH_TOUR' : 'UNPUBLISH_TOUR', `Status changed to ${isPublishing ? 'PUBLISHED' : 'DRAFT'}.`);
        setSecurityModalAction(null);
      }
    });
  };

  // Static Publishing Handler (Doc 05)
  const handleTriggerStaticPublish = () => {
    setPublishInProgress(true);
    addAuditLog('PUBLISHING', 'STATIC_SNAPSHOT', 'TRIGGER_BUILD', 'Triggered static export deployment pipeline.');

    setTimeout(() => {
      const newJob: PublishJob = {
        id: 'JOB-' + Date.now(),
        ref: 'DEP-' + new Date().toISOString().replace(/[-:T.]/g, '').substring(0, 14),
        requestedBy: currentAdmin.name,
        status: 'SUCCESS',
        pagesCount: 39,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16) + ' UTC'
      };
      setPublishJobs(prev => [newJob, ...prev]);
      setPublishInProgress(false);
    }, 1500);
  };

  // Convert Quotation to Booking (Doc 06 Section 6)
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
  };

  // Review Request Dispatcher
  const handleSendReviewRequest = (booking: BookingRecord) => {
    const token = 'rev_' + Math.random().toString(36).substring(2, 10);
    const newReq: ReviewRequest = {
      id: 'req_' + Date.now(),
      bookingId: booking.ref,
      customerName: booking.customer,
      customerPhone: booking.phone,
      customerEmail: booking.email,
      tourName: booking.tour,
      locale: (booking.locale as ReviewLocale) || 'en',
      token,
      status: 'SENT',
      createdAt: new Date().toISOString()
    };
    ReviewsStoreService.addRequest(newReq);
    setReviewRequests(ReviewsStoreService.getRequests());
    addAuditLog('REVIEW', booking.ref, 'DISPATCH_REVIEW_REQUEST', `Generated review token (${token}) for ${booking.customer}.`);
  };

  return (
    <div className="min-h-screen bg-[#12161C] text-[#F5EFE6] flex flex-col md:flex-row font-sans selection:bg-[#A85F43] selection:text-white">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-72 bg-[#1B1514] border-r border-[#A85F43]/30 p-6 flex flex-col justify-between shrink-0 shadow-2xl z-20">
        <div className="space-y-6">
          {/* Brand Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8E442B] to-[#C69C6D] flex items-center justify-center shadow-lg text-white">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg block leading-tight text-white">Jordan Story</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] text-[#C69C6D] tracking-widest uppercase font-mono font-bold">Admin Console</span>
              </div>
            </div>
          </div>

          {/* Nav Links (12 Modules) */}
          <nav className="space-y-1 text-xs font-medium">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: null },
              { id: 'tours', label: 'Tours & Pricing', icon: Compass, badge: toursList.length },
              { id: 'categories', label: 'Tour Categories', icon: Layers, badge: 5 },
              { id: 'destinations', label: 'Destinations', icon: MapPin, badge: DESTINATIONS_DATA.length },
              { id: 'bookings', label: 'Bookings', icon: Calendar, badge: metrics.newBookings ? `${metrics.newBookings} new` : null },
              { id: 'quotations', label: 'Quotations', icon: DollarSign, badge: metrics.newQuotations ? `${metrics.newQuotations} new` : null },
              { id: 'reviews', label: 'Reviews (00E)', icon: MessageSquare, badge: metrics.pendingReviews ? `${metrics.pendingReviews} pending` : null },
              { id: 'media', label: 'Media Library (00D)', icon: ImageIcon, badge: null },
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
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#A85F43] text-white shadow-lg font-semibold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#C69C6D]'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
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
            <span>Return to Public Site</span>
          </a>
        </div>
      </aside>

      {/* Main Admin Viewport */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto max-h-screen">
        
        {/* ==================================================================== */}
        {/* MODULE 1: DASHBOARD OVERVIEW (Doc 03 Section 2) */}
        {/* ==================================================================== */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-serif text-3xl font-bold text-white">Operations & Executive Dashboard</h1>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Real-time visibility into tour inventory, customer bookings, custom quote requests, and static snapshot deployments.
                </p>
              </div>

              <button
                onClick={handleTriggerStaticPublish}
                disabled={publishInProgress}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${publishInProgress ? 'animate-spin' : ''}`} />
                <span>{publishInProgress ? 'Rebuilding Snapshot...' : 'Publish Live Snapshot'}</span>
              </button>
            </div>

            {/* KPI Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-6 rounded-2xl bg-[#1B1514] border border-white/10 shadow-xl space-y-2">
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>PUBLISHED TOURS</span>
                  <Compass className="w-4 h-4 text-[#A85F43]" />
                </div>
                <div className="text-3xl font-serif font-bold text-white">{metrics.publishedTours} Active</div>
                <span className="text-[11px] text-gray-400 font-mono block">{metrics.draftTours} Draft / {metrics.quotationTours} Quotation Mode</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#1B1514] border border-white/10 shadow-xl space-y-2">
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>NEW BOOKINGS</span>
                  <Calendar className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-serif font-bold text-emerald-400">{metrics.newBookings} Pending</div>
                <span className="text-[11px] text-gray-400 font-mono block">Volume: ${metrics.totalConfirmedRevenue.toLocaleString()} USD</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#1B1514] border border-white/10 shadow-xl space-y-2">
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>QUOTATION INQUIRIES</span>
                  <DollarSign className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-3xl font-serif font-bold text-amber-400">{metrics.newQuotations} Needs Quote</div>
                <span className="text-[11px] text-gray-400 font-mono block">{quotationsList.length} Total Custom Quotes</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#1B1514] border border-white/10 shadow-xl space-y-2">
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>VERIFIED RATING</span>
                  <Shield className="w-4 h-4 text-[#C69C6D]" />
                </div>
                <div className="text-3xl font-serif font-bold text-[#C69C6D]">{metrics.aggregateRating.average} ★</div>
                <span className="text-[11px] text-gray-400 font-mono block">
                  {metrics.aggregateRating.count} Reviews ({metrics.pendingReviews} in queue)
                </span>
              </div>
            </div>

            {/* Operational Alerts & Recent Activity Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Quick Actions & Action Required */}
              <div className="p-6 rounded-3xl bg-[#1B1514] border border-white/10 space-y-4 shadow-xl">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>Action Required / Operations Priority</span>
                </h3>

                <div className="space-y-3 text-xs">
                  {bookingsList.filter(b => b.status === 'NEW').map(b => (
                    <div key={b.id} className="p-4 rounded-xl bg-[#12161C] border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-white block">{b.customer} — {b.tour}</span>
                        <span className="text-[11px] text-gray-400 font-mono">Travel Date: {b.date} ({b.adults} Adults) • {b.ref}</span>
                      </div>
                      <button
                        onClick={() => setActiveTab('bookings')}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] cursor-pointer"
                      >
                        Review
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
                        onClick={() => setActiveTab('quotations')}
                        className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-[11px] cursor-pointer"
                      >
                        Prepare Quote
                      </button>
                    </div>
                  ))}

                  {submittedReviews.filter(r => r.moderationStatus === 'PENDING').map(r => (
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

              {/* Recent Audit History Stream */}
              <div className="p-6 rounded-3xl bg-[#1B1514] border border-white/10 space-y-4 shadow-xl">
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                    <History className="w-4 h-4 text-[#C69C6D]" />
                    <span>Recent Admin Audit Log</span>
                  </h3>
                  <button onClick={() => setActiveTab('audit')} className="text-xs text-[#C69C6D] hover:underline font-mono">
                    View All
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  {auditLogs.slice(0, 5).map(log => (
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
        {/* MODULE 2: TOURS & PRICING MANAGEMENT (Doc 03 & Doc 04) */}
        {/* ==================================================================== */}
        {activeTab === 'tours' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Tour Packages & Commercial Pricing</h2>
                <p className="text-xs text-gray-400 mt-1">
                  Manage commercial facts, localized content across EN/DE/FR/IT, pricing modes (FIXED / FROM / QUOTATION), and publishing states.
                </p>
              </div>

              <div className="flex items-center gap-3">
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
                    placeholder="Search tour title or slug..."
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
                      <th className="p-4">Tour / Route</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Duration</th>
                      <th className="p-4">Pricing Mode</th>
                      <th className="p-4">Sales Mode</th>
                      <th className="p-4">Languages</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
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
                            <div className="font-bold text-white">{tour.title.en}</div>
                            <div className="text-[11px] text-[#C69C6D] font-mono">/tours/{tour.slug.en}</div>
                          </td>
                          <td className="p-4 font-mono text-gray-400">{tour.category}</td>
                          <td className="p-4 font-mono">{tour.duration}</td>
                          <td className="p-4">
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#A85F43]/20 text-[#C69C6D] border border-[#A85F43]/30">
                              {tour.priceMode === 'QUOTATION' ? 'QUOTATION' : `$${tour.startingPriceUSD} USD (${tour.priceMode || 'FROM'})`}
                            </span>
                          </td>
                          <td className="p-4 font-mono text-[11px]">
                            {tour.bookingMode === 'QUOTATION' ? (
                              <span className="text-amber-400">Request a Quote</span>
                            ) : (
                              <span className="text-emerald-400">Direct Booking</span>
                            )}
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-1 font-mono text-[10px]">
                              <span className="px-1.5 py-0.5 rounded bg-emerald-900/40 text-emerald-400">EN</span>
                              <span className="px-1.5 py-0.5 rounded bg-emerald-900/40 text-emerald-400">DE</span>
                              <span className="px-1.5 py-0.5 rounded bg-emerald-900/40 text-emerald-400">FR</span>
                              <span className="px-1.5 py-0.5 rounded bg-emerald-900/40 text-emerald-400">IT</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                                !tour.isDraft
                                  ? 'bg-emerald-900/40 text-emerald-400 border border-emerald-700/50'
                                  : 'bg-amber-900/40 text-amber-400 border border-amber-700/50'
                              }`}
                            >
                              {!tour.isDraft ? 'PUBLISHED' : 'DRAFT'}
                            </span>
                          </td>
                          <td className="p-4 text-right space-x-2">
                            <button
                              onClick={() => setSelectedTourForEdit(tour)}
                              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all cursor-pointer inline-flex items-center gap-1"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                              <span>Edit</span>
                            </button>

                            <button
                              onClick={() => handleTourPublishToggle(tour)}
                              className={`px-2.5 py-1.5 rounded-lg font-medium text-xs transition-all cursor-pointer ${
                                tour.isDraft
                                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                                  : 'bg-amber-600/80 hover:bg-amber-600 text-white'
                              }`}
                            >
                              {tour.isDraft ? 'Publish' : 'Unpublish'}
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
        {/* MODULE 5: BOOKINGS OPERATIONS (Doc 03 & Doc 06) */}
        {/* ==================================================================== */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Direct Bookings & Reservations</h2>
                <p className="text-xs text-gray-400 mt-1">
                  Manage traveler bookings with locked historical price snapshots, status progression, WhatsApp webhook confirmations, and PDF vouchers.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-[#1B1514] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="NEW">NEW</option>
                  <option value="CONFIRMED">CONFIRMED</option>
                  <option value="IN_PROGRESS">IN_PROGRESS</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </div>
            </div>

            <div className="bg-[#1B1514] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#12161C] text-[#C69C6D] uppercase tracking-wider font-mono font-semibold border-b border-white/10">
                    <tr>
                      <th className="p-4">Reference</th>
                      <th className="p-4">Lead Traveler</th>
                      <th className="p-4">Tour Package</th>
                      <th className="p-4">Travel Date</th>
                      <th className="p-4">Price Snapshot</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {bookingsList
                      .filter(b => statusFilter === 'all' || b.status === statusFilter)
                      .map(booking => (
                        <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-4 font-mono font-bold text-white">{booking.ref}</td>
                          <td className="p-4">
                            <div className="font-medium text-white">{booking.customer}</div>
                            <div className="text-[11px] text-gray-400 font-mono">{booking.email} • {booking.phone}</div>
                          </td>
                          <td className="p-4 font-medium text-gray-200">
                            {booking.tour}
                            <span className="text-[10px] text-gray-400 block font-mono">{booking.adults} Adults {booking.children > 0 && `/ ${booking.children} Kids`}</span>
                          </td>
                          <td className="p-4 font-mono text-gray-300">{booking.date}</td>
                          <td className="p-4 font-mono font-bold text-[#C69C6D]">
                            ${booking.priceSnapshot} {booking.currency}
                          </td>
                          <td className="p-4">
                            <select
                              value={booking.status}
                              onChange={(e) => {
                                const newStatus = e.target.value as BookingRecord['status'];
                                setBookingsList(bookingsList.map(b => (b.id === booking.id ? { ...b, status: newStatus } : b)));
                                addAuditLog('BOOKING', booking.ref, 'UPDATE_STATUS', `Status changed from ${booking.status} to ${newStatus}.`);
                              }}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase cursor-pointer border focus:outline-none ${
                                booking.status === 'CONFIRMED'
                                  ? 'bg-emerald-900/40 text-emerald-400 border-emerald-700/50'
                                  : booking.status === 'NEW'
                                  ? 'bg-amber-900/40 text-amber-400 border-amber-700/50'
                                  : booking.status === 'COMPLETED'
                                  ? 'bg-blue-900/40 text-blue-400 border-blue-700/50'
                                  : 'bg-gray-800 text-gray-400 border-gray-700'
                              }`}
                            >
                              <option value="NEW" className="bg-[#12161C]">NEW</option>
                              <option value="CONFIRMED" className="bg-[#12161C]">CONFIRMED</option>
                              <option value="IN_PROGRESS" className="bg-[#12161C]">IN_PROGRESS</option>
                              <option value="COMPLETED" className="bg-[#12161C]">COMPLETED</option>
                              <option value="CANCELLED" className="bg-[#12161C]">CANCELLED</option>
                            </select>
                          </td>
                          <td className="p-4 text-right space-x-2">
                            {booking.status === 'COMPLETED' && (
                              <button
                                onClick={() => handleSendReviewRequest(booking)}
                                title="Send Post-Tour Review Request"
                                className="p-2 rounded-xl bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white transition-all cursor-pointer border border-purple-500/30"
                              >
                                <Send className="w-3.5 h-3.5" />
                              </button>
                            )}

                            <button
                              onClick={() => setSelectedBookingForVoucher(booking)}
                              title="Print Official PDF Voucher"
                              className="p-2 rounded-xl bg-[#A85F43]/20 hover:bg-[#A85F43] text-[#C69C6D] hover:text-white transition-all cursor-pointer border border-[#A85F43]/30"
                            >
                              <Printer className="w-3.5 h-3.5" />
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
        {/* MODULE 6: QUOTATION REQUESTS (Doc 03 & Doc 06) */}
        {/* ==================================================================== */}
        {activeTab === 'quotations' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">Custom Quotation Requests</h2>
                <p className="text-xs text-gray-400 mt-1">
                  Process tailored trip inquiries, enter quoted prices, set validity dates, and convert accepted quotes to confirmed bookings.
                </p>
              </div>
            </div>

            <div className="bg-[#1B1514] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#12161C] text-[#C69C6D] uppercase tracking-wider font-mono font-semibold border-b border-white/10">
                    <tr>
                      <th className="p-4">Quote Ref</th>
                      <th className="p-4">Customer</th>
                      <th className="p-4">Tour & Dates</th>
                      <th className="p-4">Party & Tier</th>
                      <th className="p-4">Quoted Amount</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {quotationsList.map(quote => (
                      <tr key={quote.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-mono font-bold text-white">{quote.ref}</td>
                        <td className="p-4">
                          <div className="font-medium text-white">{quote.customer}</div>
                          <div className="text-[11px] text-gray-400 font-mono">{quote.email} • {quote.phone}</div>
                        </td>
                        <td className="p-4 font-medium text-gray-200">
                          {quote.tour}
                          <span className="text-[10px] text-[#C69C6D] block font-mono">Arrival: {quote.arrivalDate}</span>
                        </td>
                        <td className="p-4">
                          <div>{quote.adults} Adults {quote.children > 0 && `/ ${quote.children} Kids`}</div>
                          <div className="text-[10px] text-gray-400">{quote.hotelPreference || 'Standard'}</div>
                        </td>
                        <td className="p-4 font-mono font-bold text-[#C69C6D]">
                          {quote.quotedPrice ? `$${quote.quotedPrice} ${quote.quotedCurrency}` : <span className="text-gray-500 italic">Pending</span>}
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                              quote.status === 'CONVERTED_TO_BOOKING'
                                ? 'bg-purple-900/40 text-purple-400 border border-purple-700/50'
                                : quote.status === 'QUOTED'
                                ? 'bg-emerald-900/40 text-emerald-400 border border-emerald-700/50'
                                : 'bg-amber-900/40 text-amber-400 border border-amber-700/50'
                            }`}
                          >
                            {quote.status}
                          </span>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => setSelectedQuoteForEdit(quote)}
                            className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all cursor-pointer inline-flex items-center gap-1"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit Quote</span>
                          </button>

                          {quote.status !== 'CONVERTED_TO_BOOKING' && (
                            <button
                              onClick={() => handleConvertQuoteToBooking(quote)}
                              className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-all cursor-pointer inline-flex items-center gap-1"
                            >
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>Convert to Booking</span>
                            </button>
                          )}
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
        {/* MODULE 7: REVIEWS & MODERATION (00E) */}
        {/* ==================================================================== */}
        {activeTab === 'reviews' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">00E — Post-Tour Reviews & Moderation</h2>
                <p className="text-gray-400 text-xs sm:text-sm font-light mt-1">
                  Dispatch localized review invitations for completed bookings and moderate genuine submissions.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl">
                <span className="font-mono text-xs text-gray-400">Aggregate Rating:</span>
                <span className="font-serif text-2xl font-bold text-[#C69C6D]">
                  {metrics.aggregateRating.average} ★
                </span>
                <span className="text-xs text-gray-400">({metrics.aggregateRating.count} Published)</span>
              </div>
            </div>

            {/* Moderation Queue */}
            <div className="bg-[#1B1514] border border-white/10 rounded-2xl p-6 space-y-6">
              <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#C69C6D]" />
                <span>Traveler Review Moderation Queue</span>
              </h3>

              <div className="space-y-4">
                {submittedReviews.map(rev => (
                  <div key={rev.id} className="p-6 rounded-2xl bg-[#12161C] border border-white/10 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-base">{rev.displayName}</span>
                          <span className="text-xs text-gray-400 font-mono">({rev.displayCountry || 'Verified'})</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-400/20 text-emerald-400">Verified Traveler</span>
                        </div>
                        <span className="text-xs text-[#C69C6D] font-mono block mt-0.5">{rev.tourName}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-[#C69C6D]">
                          {[...Array(rev.rating)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>

                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                            rev.moderationStatus === 'APPROVED'
                              ? 'bg-emerald-400/20 text-emerald-400'
                              : rev.moderationStatus === 'REJECTED'
                              ? 'bg-rose-400/20 text-rose-400'
                              : 'bg-amber-400/20 text-amber-400'
                          }`}
                        >
                          {rev.moderationStatus}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm italic">"{rev.reviewBody}"</p>

                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        onClick={() => {
                          ReviewsStoreService.moderateReview(rev.id, 'APPROVED');
                          setSubmittedReviews(ReviewsStoreService.getReviews());
                          addAuditLog('REVIEW', rev.id, 'APPROVE_REVIEW', `Approved review from ${rev.displayName}.`);
                        }}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer transition-all"
                      >
                        Approve & Publish Publicly
                      </button>

                      <button
                        onClick={() => {
                          ReviewsStoreService.moderateReview(rev.id, 'REJECTED');
                          setSubmittedReviews(ReviewsStoreService.getReviews());
                          addAuditLog('REVIEW', rev.id, 'REJECT_REVIEW', `Rejected review from ${rev.displayName}.`);
                        }}
                        className="px-4 py-2 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white font-bold text-xs cursor-pointer transition-all"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* MODULE 9: STATIC SNAPSHOT PUBLISHING (Doc 05) */}
        {/* ==================================================================== */}
        {activeTab === 'publish' && (
          <div className="max-w-3xl space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white">Next.js Static Export & Edge Sync</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Trigger full SSG rebuild for published tours, destinations, schema graphs, and reciprocal hreflang tags across all 4 locales.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#1B1514] border border-[#A85F43]/30 space-y-6 shadow-2xl">
              <div className="flex items-center gap-3 text-xs text-[#C69C6D] font-mono">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Last Edge Deployment: <strong>{publishJobs[0]?.timestamp || 'Recent'}</strong></span>
              </div>

              <button
                onClick={handleTriggerStaticPublish}
                disabled={publishInProgress}
                className="w-full py-4 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all cursor-pointer disabled:opacity-50"
              >
                {publishInProgress ? 'Generating Snapshots & Invalidation...' : 'Trigger Edge Cache Rebuild & Sync'}
              </button>
            </div>

            {/* Build History */}
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
        {/* MODULE 10: SITE SETTINGS (Doc 03 & Doc 07) */}
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
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => {
                    addAuditLog('SETTINGS', 'BUSINESS', 'UPDATE_SETTINGS', 'Updated company registration and contact configuration.');
                    alert('Settings updated and audited successfully.');
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
        {/* MODULE 12: AUDIT LOG (Doc 03 & Doc 07) */}
        {/* ==================================================================== */}
        {activeTab === 'audit' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white">Security & Operations Audit History</h2>
              <p className="text-xs text-gray-400 mt-1">Immutable chronological ledger of all administrative changes, price edits, and publishing events.</p>
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
      {/* SECURITY CONFIRMATION MODAL (Doc 07 Section 5) */}
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

      {/* ==================================================================== */}
      {/* PDF ITINERARY VOUCHER MODAL */}
      {/* ==================================================================== */}
      {selectedBookingForVoucher && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1A1615] border border-white/20 rounded-3xl max-w-2xl w-full p-8 space-y-6 text-[#F7F4EE] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedBookingForVoucher(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-white/10 pb-6 flex justify-between items-start">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold">JORDAN STORY TOURS — OFFICIAL VOUCHER</span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">Travel Confirmation & Itinerary</h3>
              </div>
              <div className="text-right font-mono">
                <span className="text-xs text-gray-400 block">REFERENCE CODE</span>
                <span className="text-lg font-bold text-[#C69C6D] block">{selectedBookingForVoucher.ref}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 text-xs bg-white/5 p-5 rounded-2xl border border-white/10">
              <div>
                <span className="text-gray-400 font-mono block">LEAD TRAVELER</span>
                <span className="font-bold text-white text-sm block mt-0.5">{selectedBookingForVoucher.customer}</span>
                <span className="text-gray-400 block mt-1">{selectedBookingForVoucher.email}</span>
                <span className="text-gray-400 block">{selectedBookingForVoucher.phone}</span>
              </div>
              <div>
                <span className="text-gray-400 font-mono block">TOUR & DETAILS</span>
                <span className="font-bold text-white text-sm block mt-0.5">{selectedBookingForVoucher.tour}</span>
                <span className="text-[#C69C6D] font-mono block mt-1">Start Date: {selectedBookingForVoucher.date}</span>
                <span className="text-gray-400 block">{selectedBookingForVoucher.adults} Adults {selectedBookingForVoucher.children > 0 && `/ ${selectedBookingForVoucher.children} Kids`}</span>
              </div>
            </div>

            <div className="flex justify-between items-center p-5 rounded-2xl bg-[#A85F43]/20 border border-[#A85F43]/40">
              <div>
                <span className="text-xs text-gray-300 font-mono block">LOCKED PRICE SNAPSHOT</span>
                <span className="font-serif text-2xl font-extrabold text-[#C69C6D]">${selectedBookingForVoucher.priceSnapshot} {selectedBookingForVoucher.currency}</span>
              </div>
              <div className="text-right text-[10px] text-gray-300 font-light">
                <span>Includes private AC vehicle, designated chauffeur, hotel accommodations & taxes.</span>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save as PDF Voucher</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
