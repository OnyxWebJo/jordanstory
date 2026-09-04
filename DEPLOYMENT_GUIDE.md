# Jordan Story Tours — Live Server Deployment Guide

This package contains everything needed to deploy the **Jordan Story Tours** website, PHP backend API, and MySQL database to your live cPanel / Apache / Nginx server.

---

## 📦 Package Structure

```
jordanstory_live_deployment.zip
├── public_html/                     <-- ALL website files & PHP API
│   ├── .htaccess                   <-- Apache routing, Clean URLs, API forwarding
│   ├── index.html                  <-- Homepage static export
│   ├── en/, de/, fr/, it/          <-- Multilingual static routes
│   ├── tours/, destinations/       <-- Tour & destination static catalog
│   ├── admin.html / admin/         <-- 15-Module Enterprise Admin Dashboard
│   ├── booking.html / booking/     <-- Direct booking engine & customized checkout
│   ├── review/                     <-- Secure tokenized review portal
│   ├── _next/                      <-- Optimized CSS, JS chunks & assets
│   ├── images/, videos/            <-- Static media assets
│   ├── api/                        <-- Production REST API
│   │   ├── index.php               <-- API Front Controller
│   │   └── .htaccess               <-- API rewrite routing
│   └── config/
│       └── config.php              <-- Database credentials & app settings
│
└── database/
    ├── full_database_import.sql     <-- ⭐ 1-CLICK IMPORT: Complete schema + seed data
    ├── schema.sql                  <-- 26 relational database tables DDL
    ├── seed.sql                    <-- Roles, admin, site settings, tour packages
    └── backup.php                  <-- Database backup & verification tool
```

---

## 🚀 3-Step Live Deployment Instructions

### Step 1: Import the Database in cPanel (phpMyAdmin)
1. Log into your **cPanel** and open **phpMyAdmin**.
2. Select your database: `jorddhrw_newstory`.
3. Click the **Import** tab at the top.
4. Click **Choose File** and select `database/full_database_import.sql`.
5. Click **Import / Go** at the bottom.
6. ✅ All 26 tables and initial seed data (Roles, Admin, Site Settings, Categories, Tours) will be imported instantly!

> **Database Credentials configured in `config/config.php`:**
> - **Database Name:** `jorddhrw_newstory`
> - **Database User:** `jorddhrw_shadi`
> - **Host:** `localhost` / `127.0.0.1`

---

### Step 2: Upload `public_html/` to your Live Server
1. In cPanel, open **File Manager**.
2. Navigate to your website's root folder (usually `public_html/`).
3. Upload and extract the contents of the `public_html/` folder so that `index.html`, `.htaccess`, `api/`, `config/`, and `_next/` are directly inside your web root.
4. Make sure hidden files are visible in cPanel File Manager and verify that `.htaccess` is uploaded.

---

### Step 3: Test & Verify Live System
1. **Visit your website:** `https://jordanstorytours.com` (or your domain).
   - Test multilingual navigation: `/en`, `/de`, `/fr`, `/it`.
   - Test tour catalog: `/en/tours`, `/en/destinations`.
2. **Test the Live API & Database Connection:**
   - Open in browser: `https://your-domain.com/api/public/tours/budget-tour-1-petra-dead-sea-jerash/pricing`
   - You should receive a JSON response with status `200 OK` and active pricing data from the live database.
3. **Log into Admin Dashboard:**
   - Go to: `https://your-domain.com/admin`
   - **Email:** `admin@jordanstorytours.com`
   - **Password:** `admin123456`
   - *(You can change this password inside the Admin Settings module after logging in).*

---

## 🔒 Security & Optimization Features Included
- **CORS & Rate Limiting:** 120 requests/minute built into API.
- **Security Headers:** `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.
- **Gzip / Brotli Compression & Asset Caching:** Configured in `.htaccess` for optimal Core Web Vitals (LCP < 1.2s).
- **Price Integrity & Snapshot Protection:** Historical quotations and bookings are immutably locked against accidental tour edits.
