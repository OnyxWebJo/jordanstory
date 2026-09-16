# Jordan Story Tours — Live Server Deployment Guide (Root Folder)

This package contains the direct root deployment archive and database for the **Jordan Story Tours** website, PHP backend API, and MySQL database.

---

## 📦 Ready-to-Upload Archive

### ⭐ Recommended: `jordanstory_root_upload.zip` (Flat Web Root Archive)
- **What it is:** A flat archive containing all website files directly at the root level (no extra `public_html/` parent folder).
- **How to use:** Upload directly into your server's root folder (`public_html/` in cPanel) and click **Extract**. All files (`index.html`, `.htaccess`, `api/`, `config/`, `_next/`, `images/`, etc.) will unpack directly into the root.

```
jordanstory_root_upload.zip (Extract directly in public_html)
├── .htaccess                   <-- Apache routing, Clean URLs, API forwarding
├── index.html                  <-- Homepage static export
├── en/, de/, fr/, it/          <-- Multilingual static routes
├── tours/, destinations/       <-- Tour & destination static catalog
├── admin.html / admin/         <-- 15-Module Enterprise Admin Dashboard
├── booking.html / booking/     <-- Direct booking engine & customized checkout
├── review/                     <-- Secure tokenized review portal
├── _next/                      <-- Optimized CSS, JS chunks & assets
├── images/, videos/            <-- Static media assets & scroll-world frames
├── api/                        <-- Production REST API
│   ├── index.php               <-- API Front Controller
│   └── .htaccess               <-- API rewrite routing
└── config/
    └── config.php              <-- Database credentials & app settings
```

---

## 🚀 3-Step Live Deployment Instructions

### Step 1: Upload & Extract into Server Root
1. Log into your **cPanel** and open **File Manager**.
2. Navigate directly into your website's root folder (e.g. `public_html/`).
3. Click **Upload** and select `jordanstory_root_upload.zip`.
4. Right-click `jordanstory_root_upload.zip` and select **Extract** (into the current directory).
5. Ensure hidden files are enabled in cPanel settings and verify `.htaccess` is present.

---

### Step 2: Import the Database in cPanel (phpMyAdmin)
1. In cPanel, open **phpMyAdmin**.
2. Select your database: `jorddhrw_newstory`.
3. Click the **Import** tab at the top.
4. Click **Choose File** and select `database/full_database_import.sql`.
5. Click **Import / Go** at the bottom.
6. ✅ All 26 tables and seed data will be imported instantly!

> **Database Credentials configured in `config/config.php`:**
> - **Database Name:** `jorddhrw_newstory`
> - **Database User:** `jorddhrw_shadi`
> - **Host:** `localhost` / `127.0.0.1`

---

### Step 3: Test & Verify Live System
1. **Visit your website:** `https://jordanstorytours.com`
   - Test multilingual navigation: `/en`, `/de`, `/fr`, `/it`.
   - Test tour catalog: `/en/tours`, `/en/destinations`.
2. **Test the Live API & Database Connection:**
   - Open: `https://jordanstorytours.com/api/public/tours/budget-tour-1-petra-dead-sea-jerash/pricing`
   - You should receive a JSON response with status `200 OK`.
3. **Log into Admin Dashboard:**
   - URL: `https://jordanstorytours.com/admin`
   - **Email:** `admin@jordanstorytours.com`
   - **Password:** `admin123456`
