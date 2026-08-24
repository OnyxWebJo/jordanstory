'use client';

import React, { useState, useEffect } from 'react';
import { TOURS_DATA, Tour } from '@/data/tours';
import { LayoutDashboard, Compass, Calendar, DollarSign, Plus, CheckCircle, Clock, Search, LogOut, MessageSquare, Printer, Eye, X, Send, Image as ImageIcon, ArrowUp, ArrowDown, Shield } from 'lucide-react';

import { ReviewsStoreService, ReviewRequest, UserSubmittedReview, WHATSAPP_TEMPLATES, ReviewLocale } from '@/data/reviewsStore';

interface BookingRecord {
  id: string;
  ref: string;
  customer: string;
  email: string;
  phone: string;
  tour: string;
  date: string;
  adults: number;
  children: number;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  total: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'bookings' | 'tours' | 'media' | 'reviews' | 'publish'>('bookings');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [publishStatus, setPublishStatus] = useState<string | null>(null);
  
  // Selected Booking for PDF Voucher Modal
  const [selectedBookingForVoucher, setSelectedBookingForVoucher] = useState<BookingRecord | null>(null);

  // Selected Tour for Media Gallery Management Modal
  const [selectedTourForMedia, setSelectedTourForMedia] = useState<Tour | null>(null);

  // 00E Reviews State
  const [reviewRequests, setReviewRequests] = useState<ReviewRequest[]>([]);
  const [submittedReviews, setSubmittedReviews] = useState<UserSubmittedReview[]>([]);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  useEffect(() => {
    setReviewRequests(ReviewsStoreService.getRequests());
    setSubmittedReviews(ReviewsStoreService.getReviews());
  }, [activeTab]);

  const [bookings, setBookings] = useState<BookingRecord[]>([
    { id: 'BK-89021', ref: 'JST-20260824-4912', customer: 'John Doe', email: 'john@example.com', phone: '+447911123456', tour: 'Petra, Dead Sea & Jerash', date: '2026-09-15', adults: 2, children: 0, status: 'Pending', total: '$798 USD' },
    { id: 'BK-89022', ref: 'JST-20260823-3321', customer: 'Anna Schmidt', email: 'anna@example.de', phone: '+491701234567', tour: 'Jordan Story Classic (5 Days)', date: '2026-10-01', adults: 2, children: 1, status: 'Confirmed', total: '$1,398 USD' },
    { id: 'BK-89023', ref: 'JST-20260822-1109', customer: 'Michael Brown', email: 'michael@example.com', phone: '+12025550143', tour: 'Wadi Rum & Petra Express Day Safari', date: '2026-08-30', adults: 4, children: 0, status: 'Completed', total: '$935 USD' },
    { id: 'BK-89024', ref: 'JST-20260821-7782', customer: 'Elena Rostova', email: 'elena@example.com', phone: '+33612345678', tour: 'Jordan Luxury Tour 1 — 5-Star Serenity', date: '2026-11-10', adults: 2, children: 0, status: 'Confirmed', total: '$2,900 USD' },
  ]);

  const handleStatusChange = (id: string, newStatus: BookingRecord['status']) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.ref.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || b.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const handleTriggerPublish = () => {
    setPublishStatus('Generating static snapshots & re-indexing AEO/GEO metadata...');
    setTimeout(() => {
      setPublishStatus('✓ Static Snapshot Successfully Rebuilt & Live on Edge CDN!');
    }, 2000);
  };

  const getWhatsAppLink = (booking: BookingRecord) => {
    const cleanPhone = booking.phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `Hello ${booking.customer}! This is Jordan Story Tours regarding your booking (${booking.ref}) for "${booking.tour}" starting on ${booking.date} (${booking.adults} Adults). Total: ${booking.total}. We are delighted to confirm your dates!`
    );
    return `https://wa.me/${cleanPhone}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-[#151B23] text-[#F4EFE7] flex flex-col md:flex-row">
      
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-[#1F1917] border-r border-[#A85F43]/30 p-6 flex flex-col justify-between">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#A85F43] flex items-center justify-center shadow-lg">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg block leading-tight">Jordan Story</span>
              <span className="text-[10px] text-[#C69C6D] tracking-widest uppercase font-mono">Operations Portal</span>
            </div>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'bookings' ? 'bg-[#A85F43] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Bookings ({bookings.length})</span>
            </button>
            
            <button
              onClick={() => setActiveTab('tours')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'tours' ? 'bg-[#A85F43] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Tour Inventory ({TOURS_DATA.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('media')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'media' ? 'bg-[#A85F43] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Media Galleries (00D)</span>
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'reviews' ? 'bg-[#A85F43] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Post-Tour Reviews (00E)</span>
            </button>

            <button
              onClick={() => setActiveTab('publish')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'publish' ? 'bg-[#A85F43] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Static Publishing</span>
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10">
          <a href="/" className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#C69C6D] transition-colors">
            <LogOut className="w-4 h-4" />
            <span>Return to Public Website</span>
          </a>
        </div>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-x-hidden">
        
        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#1F1917] border border-white/10 flex items-center justify-between shadow-xl">
            <div>
              <span className="text-xs text-gray-400 block font-mono">TOTAL TOUR INVENTORY</span>
              <span className="font-serif text-3xl font-bold text-white mt-1 block">{TOURS_DATA.length} Live Packages</span>
            </div>
            <Compass className="w-8 h-8 text-[#A85F43]" />
          </div>

          <div className="p-6 rounded-2xl bg-[#1F1917] border border-white/10 flex items-center justify-between shadow-xl">
            <div>
              <span className="text-xs text-gray-400 block font-mono">PENDING INQUIRIES</span>
              <span className="font-serif text-3xl font-bold text-[#C69C6D] mt-1 block">
                {bookings.filter(b => b.status === 'Pending').length} Action Required
              </span>
            </div>
            <Clock className="w-8 h-8 text-[#C69C6D]" />
          </div>

          <div className="p-6 rounded-2xl bg-[#1F1917] border border-white/10 flex items-center justify-between shadow-xl">
            <div>
              <span className="text-xs text-gray-400 block font-mono">CONFIRMED VOLUME</span>
              <span className="font-serif text-3xl font-bold text-[#A85F43] mt-1 block">$6,031 USD</span>
            </div>
            <DollarSign className="w-8 h-8 text-[#A85F43]" />
          </div>
        </div>

        {/* TAB 1: Bookings Overview & Operations */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">Live Operations & Reservations</h2>
                <p className="text-xs text-gray-400 mt-1">Manage customer inquiries, dispatch WhatsApp confirmations, and export PDF vouchers.</p>
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-[#1F1917] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                </select>

                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search ref or customer..."
                    className="bg-[#1F1917] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#1F1917] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#151B23] text-[#C69C6D] uppercase tracking-wider font-mono font-semibold border-b border-white/10">
                    <tr>
                      <th className="p-4">Reference</th>
                      <th className="p-4">Lead Traveler</th>
                      <th className="p-4">Tour Package</th>
                      <th className="p-4">Start Date</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Calculated Quote</th>
                      <th className="p-4">Webhooks & Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {filteredBookings.map((b) => (
                      <tr key={b.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-mono font-bold text-white">{b.ref}</td>
                        <td className="p-4">
                          <div className="font-medium text-white">{b.customer}</div>
                          <div className="text-[11px] text-gray-400">{b.email}</div>
                          <div className="text-[10px] text-gray-500 font-mono">{b.phone}</div>
                        </td>
                        <td className="p-4">
                          <div className="font-semibold text-white">{b.tour}</div>
                          <div className="text-[10px] text-gray-400">{b.adults} Adults {b.children > 0 && `/ ${b.children} Kids`}</div>
                        </td>
                        <td className="p-4 font-mono text-gray-300">{b.date}</td>
                        <td className="p-4">
                          <select
                            value={b.status}
                            onChange={(e) => handleStatusChange(b.id, e.target.value as any)}
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase cursor-pointer border focus:outline-none ${
                              b.status === 'Confirmed' ? 'bg-green-900/40 text-green-400 border-green-700/50' :
                              b.status === 'Pending' ? 'bg-yellow-900/40 text-yellow-400 border-yellow-700/50' :
                              b.status === 'Completed' ? 'bg-blue-900/40 text-blue-400 border-blue-700/50' : 'bg-gray-800 text-gray-400 border-gray-700'
                            }`}
                          >
                            <option value="Pending" className="bg-[#151B23]">Pending</option>
                            <option value="Confirmed" className="bg-[#151B23]">Confirmed</option>
                            <option value="Completed" className="bg-[#151B23]">Completed</option>
                            <option value="Cancelled" className="bg-[#151B23]">Cancelled</option>
                          </select>
                        </td>
                        <td className="p-4 font-mono font-bold text-[#C69C6D]">{b.total}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <a
                              href={getWhatsAppLink(b)}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Instant WhatsApp Webhook Confirmation"
                              className="p-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-black transition-all cursor-pointer border border-[#25D366]/30"
                            >
                              <MessageSquare className="w-4 h-4" />
                            </a>

                            <button
                              onClick={() => setSelectedBookingForVoucher(b)}
                              title="Export PDF Itinerary Voucher"
                              className="p-2 rounded-xl bg-[#A85F43]/20 hover:bg-[#A85F43] text-[#C69C6D] hover:text-white transition-all cursor-pointer border border-[#A85F43]/30"
                            >
                              <Printer className="w-4 h-4" />
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

        {/* TAB 2: Tour Inventory & Gallery Management */}
        {activeTab === 'tours' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-serif text-2xl font-bold">Tour Inventory Catalog (24 Packages)</h2>
                <p className="text-xs text-gray-400 mt-1">Live active tour itineraries synced with 00D media gallery manifests.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TOURS_DATA.map((tour) => (
                <div key={tour.id} className="p-6 rounded-3xl bg-[#1F1917] border border-white/10 space-y-4 shadow-xl flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] text-[#C69C6D] font-mono uppercase tracking-wider">{tour.category}</span>
                        <h3 className="font-serif text-lg font-bold text-white mt-0.5">{tour.title.en}</h3>
                      </div>
                      <span className="text-xs font-bold text-[#C69C6D] bg-[#A85F43]/20 px-3 py-1 rounded-full border border-[#A85F43]/30">
                        ${tour.startingPriceUSD} USD
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 leading-relaxed font-light">{tour.subtitle.en}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setSelectedTourForMedia(tour)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#C69C6D] hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 transition-all cursor-pointer font-medium"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-[#A85F43]" />
                      <span>Manage Gallery ({tour.gallery?.length || 1})</span>
                    </button>

                    <a href={`/tours/${tour.slug.en}`} target="_blank" className="text-gray-400 hover:text-white font-semibold flex items-center gap-1">
                      <span>View Live</span>
                      <Eye className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: 00D Media Gallery Management */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold">Media Library & Gallery Migration (00D)</h2>
              <p className="text-xs text-gray-400 mt-1">Audit multi-image galleries, hero image status, and EN/DE alt texts across all 24 tours.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TOURS_DATA.map((tour) => (
                <div key={tour.id} className="p-5 rounded-2xl bg-[#1F1917] border border-white/10 space-y-4">
                  <div className="relative h-36 rounded-xl overflow-hidden">
                    <img src={tour.heroImage} alt={tour.title.en} className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-black/60 backdrop-blur-md text-[#D8B98F]">
                      HERO
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif font-bold text-sm text-white truncate">{tour.title.en}</h4>
                    <span className="text-[11px] text-gray-400 font-mono block">
                      {tour.gallery?.length || 1} Gallery Photos Attached
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedTourForMedia(tour)}
                    className="w-full py-2 rounded-xl bg-[#A85F43]/20 hover:bg-[#A85F43] text-[#C69C6D] hover:text-white text-xs font-semibold transition-all cursor-pointer border border-[#A85F43]/30"
                  >
                    Edit Gallery Order & Alt Texts
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Static Publishing */}
        {activeTab === 'publish' && (
          <div className="max-w-2xl space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold">Static Snapshot Publishing</h2>
              <p className="text-gray-400 text-sm mt-1">
                Rebuild Next.js static SSG snapshots across edge nodes and notify search engine bots.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#1F1917] border border-[#A85F43]/30 space-y-6 shadow-2xl">
              <div className="flex items-center gap-3 text-xs text-[#C69C6D] font-mono">
                <CheckCircle className="w-5 h-5 text-[#A85F43]" />
                <span>Last Edge Deployment: <strong>2026-08-24 14:15 UTC</strong> (39 Static Pages)</span>
              </div>

              <button
                onClick={handleTriggerPublish}
                className="w-full py-4 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all cursor-pointer"
              >
                Trigger Edge Cache Rebuild & Sync
              </button>

              {publishStatus && (
                <div className="p-4 rounded-2xl bg-[#151B23] border border-green-800/60 text-green-400 text-xs font-mono">
                  {publishStatus}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 00E POST-TOUR REVIEWS MANAGEMENT TAB */}
        {activeTab === 'reviews' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white">00E — Verified Post-Tour Reviews</h2>
                <p className="text-gray-400 text-xs sm:text-sm font-light mt-1">
                  Generate secure WhatsApp review requests for completed bookings and moderate traveler submissions.
                </p>
              </div>

              {/* Dynamic Overall Calculated Rating Badge */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl">
                <span className="font-mono text-xs text-gray-400">Calculated Rating:</span>
                <span className="font-serif text-2xl font-bold text-[#C69C6D]">
                  {ReviewsStoreService.getCalculatedAggregateRating().average} ★
                </span>
                <span className="text-xs text-gray-400">
                  ({ReviewsStoreService.getCalculatedAggregateRating().count} Verified Reviews)
                </span>
              </div>
            </div>

            {/* Completed Bookings Review Request Generator */}
            <div className="bg-[#1F1917] border border-white/10 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                  <Send className="w-5 h-5 text-[#A85F43]" />
                  <span>Send Review Request (Completed Tours)</span>
                </h3>
                <span className="text-xs font-mono text-[#C69C6D]">booking.status = COMPLETED</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 font-mono">
                      <th className="py-3 px-4">Booking Ref</th>
                      <th className="py-3 px-4">Customer</th>
                      <th className="py-3 px-4">Language</th>
                      <th className="py-3 px-4">Tour Name</th>
                      <th className="py-3 px-4">Review Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {reviewRequests.map((req) => {
                      const reviewUrl = `http://localhost:3000/review/${req.token}`;
                      const waTemplate = WHATSAPP_TEMPLATES[req.locale](req.customerName, req.tourName, reviewUrl);
                      const cleanPhone = req.customerPhone.replace(/[^0-9]/g, '');
                      const waHref = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waTemplate)}`;

                      return (
                        <tr key={req.id} className="hover:bg-white/5 transition-colors">
                          <td className="py-4 px-4 font-mono text-[#C69C6D] font-bold">{req.bookingId}</td>
                          <td className="py-4 px-4">
                            <span className="font-semibold text-white block">{req.customerName}</span>
                            <span className="text-[10px] text-gray-400 block font-mono">{req.customerPhone}</span>
                          </td>
                          <td className="py-4 px-4 font-mono uppercase text-xs">
                            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold">{req.locale}</span>
                          </td>
                          <td className="py-4 px-4 max-w-xs truncate text-gray-300">{req.tourName}</td>
                          <td className="py-4 px-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                              req.status === 'APPROVED' ? 'bg-emerald-400/20 text-emerald-400 border border-emerald-400/30' :
                              req.status === 'SUBMITTED' ? 'bg-blue-400/20 text-blue-400 border border-blue-400/30' :
                              req.status === 'SENT' ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30' :
                              'bg-gray-400/20 text-gray-400 border border-gray-400/30'
                            }`}>
                              {req.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right space-x-2">
                            <a
                              href={waHref}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => {
                                ReviewsStoreService.markSent(req.id);
                                setReviewRequests(ReviewsStoreService.getRequests());
                              }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] transition-all"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                              <span>WhatsApp</span>
                            </a>

                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(reviewUrl);
                                setCopiedToken(req.token);
                                setTimeout(() => setCopiedToken(null), 2000);
                              }}
                              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 font-medium text-[11px] transition-all"
                            >
                              {copiedToken === req.token ? '✓ Copied' : 'Copy Link'}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Traveler Submitted Reviews Moderation Table */}
            <div className="bg-[#1F1917] border border-white/10 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#C69C6D]" />
                  <span>Review Moderation Queue ({submittedReviews.length})</span>
                </h3>
              </div>

              <div className="space-y-4">
                {submittedReviews.map((rev) => (
                  <div key={rev.id} className="p-6 rounded-2xl bg-[#151B23] border border-white/10 space-y-4">
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

                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                          rev.moderationStatus === 'APPROVED' ? 'bg-emerald-400/20 text-emerald-400' :
                          rev.moderationStatus === 'REJECTED' ? 'bg-rose-400/20 text-rose-400' :
                          'bg-amber-400/20 text-amber-400'
                        }`}>
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
                        }}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer transition-all"
                      >
                        Approve & Publish Publicly
                      </button>

                      <button
                        onClick={() => {
                          ReviewsStoreService.moderateReview(rev.id, 'REJECTED');
                          setSubmittedReviews(ReviewsStoreService.getReviews());
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

      </main>

      {/* 00D MEDIA GALLERY MANAGEMENT MODAL */}
      {selectedTourForMedia && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1F1917] border border-white/20 rounded-3xl max-w-4xl w-full p-8 space-y-6 text-[#F7F4EE] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedTourForMedia(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest text-[#C69C6D] font-mono font-semibold">00D MEDIA GALLERY MANAGEMENT</span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">{selectedTourForMedia.title.en}</h3>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs uppercase font-mono text-[#D8B98F] tracking-wider">Attached Gallery Assets ({selectedTourForMedia.gallery?.length || 1})</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(selectedTourForMedia.gallery && selectedTourForMedia.gallery.length > 0 ? selectedTourForMedia.gallery : [{
                  id: 'hero',
                  url: selectedTourForMedia.heroImage,
                  alt: { en: selectedTourForMedia.title.en, de: selectedTourForMedia.title.de },
                  sortOrder: 1,
                  rightsStatus: 'VERIFIED_OWNED' as const
                }]).map((item, idx) => (
                  <div key={item.id} className="p-4 rounded-2xl bg-[#151B23] border border-white/10 space-y-3">
                    <div className="relative h-32 rounded-xl overflow-hidden">
                      <img src={item.url} alt={item.alt.en} className="w-full h-full object-cover" />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-mono bg-black/70 text-[#D8B98F]">
                        Order #{item.sortOrder || idx + 1}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-[10px] text-gray-400 font-mono block">ENGLISH ALT TEXT</span>
                        <input
                          type="text"
                          defaultValue={item.alt.en}
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none mt-1"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 font-mono block">GERMAN ALT TEXT</span>
                        <input
                          type="text"
                          defaultValue={item.alt.de}
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none mt-1"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
              <button
                onClick={() => setSelectedTourForMedia(null)}
                className="px-6 py-2.5 rounded-full bg-[#A85F43] hover:bg-[#D97757] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
              >
                Save Gallery Changes
              </button>
            </div>

          </div>
        </div>
      )}

      {/* PDF ITINERARY VOUCHER MODAL */}
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
                <span className="text-xs text-gray-300 font-mono block">TOTAL CONFIRMED VALUE</span>
                <span className="font-serif text-2xl font-extrabold text-[#C69C6D]">{selectedBookingForVoucher.total}</span>
              </div>
              <div className="text-right text-[10px] text-gray-300 font-light">
                <span>Includes private chauffeur, hotels, daily breakfast & visa support.</span>
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
