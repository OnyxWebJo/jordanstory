-- Jordan Story Tours — MySQL Database Schema
-- Compatible with MySQL 8.x / MariaDB (utf8mb4)
-- Compliant with Specifications 03, 04, 05, 06, 07, 08

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS audit_logs;
DROP TABLE IF EXISTS publish_jobs;
DROP TABLE IF EXISTS site_settings;
DROP TABLE IF EXISTS media_translations;
DROP TABLE IF EXISTS media;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS quotation_status_history;
DROP TABLE IF EXISTS quotation_requests;
DROP TABLE IF EXISTS booking_status_history;
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS tour_faq_translations;
DROP TABLE IF EXISTS tour_faqs;
DROP TABLE IF EXISTS tour_media;
DROP TABLE IF EXISTS tour_meals;
DROP TABLE IF EXISTS tour_exclusions;
DROP TABLE IF EXISTS tour_inclusions;
DROP TABLE IF EXISTS tour_destinations;
DROP TABLE IF EXISTS destination_translations;
DROP TABLE IF EXISTS destinations;
DROP TABLE IF EXISTS tour_itinerary_day_translations;
DROP TABLE IF EXISTS tour_itinerary_days;
DROP TABLE IF EXISTS tour_translations;
DROP TABLE IF EXISTS tours;
DROP TABLE IF EXISTS tour_category_translations;
DROP TABLE IF EXISTS tour_categories;
DROP TABLE IF EXISTS admin_roles;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS admins;
DROP TABLE IF EXISTS redirects;

SET FOREIGN_KEY_CHECKS = 1;

-- ============================================================================
-- 1. SECURITY & ROLES (Doc 04 & Doc 07)
-- ============================================================================

CREATE TABLE roles (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE admins (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  status ENUM('ACTIVE', 'SUSPENDED', 'DEACTIVATED') NOT NULL DEFAULT 'ACTIVE',
  last_login_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE admin_roles (
  admin_id BIGINT NOT NULL,
  role_id VARCHAR(50) NOT NULL,
  assigned_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (admin_id, role_id),
  FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 2. TOUR CATEGORIES (Doc 03 & Doc 04)
-- ============================================================================

CREATE TABLE tour_categories (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(100) NOT NULL UNIQUE,
  sort_order INT NOT NULL DEFAULT 0,
  status ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE tour_category_translations (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  category_id BIGINT NOT NULL,
  locale ENUM('en', 'de', 'fr', 'it') NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_cat_trans (category_id, locale),
  FOREIGN KEY (category_id) REFERENCES tour_categories(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 3. TOURS & TRANSLATIONS (Doc 03, Doc 04, Doc 05)
-- ============================================================================

CREATE TABLE tours (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  category_id BIGINT NULL,
  status ENUM('DRAFT', 'PUBLISHED', 'UNPUBLISHED', 'ARCHIVED') NOT NULL DEFAULT 'DRAFT',
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  duration_days INT NOT NULL DEFAULT 1,
  duration_nights INT NOT NULL DEFAULT 0,
  price_mode ENUM('FIXED', 'FROM', 'QUOTATION') NOT NULL DEFAULT 'FROM',
  price_amount DECIMAL(10,2) NULL,
  currency CHAR(3) NOT NULL DEFAULT 'USD',
  price_unit ENUM('PER_PERSON', 'PER_GROUP', 'PER_VEHICLE', 'CUSTOM') NOT NULL DEFAULT 'PER_PERSON',
  booking_mode ENUM('DIRECT_BOOKING', 'QUOTATION') NOT NULL DEFAULT 'DIRECT_BOOKING',
  hero_image VARCHAR(512) NULL,
  sort_order INT NOT NULL DEFAULT 0,
  published_at DATETIME NULL,
  archived_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES tour_categories(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE tour_translations (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  tour_id BIGINT NOT NULL,
  locale ENUM('en', 'de', 'fr', 'it') NOT NULL,
  title VARCHAR(255) NOT NULL,
  short_description TEXT NULL,
  description MEDIUMTEXT NULL,
  highlights_json JSON NULL,
  seo_title VARCHAR(255) NULL,
  seo_description TEXT NULL,
  og_title VARCHAR(255) NULL,
  og_description TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_tour_locale (tour_id, locale),
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 4. ITINERARY DAYS & TRANSLATIONS (Doc 04)
-- ============================================================================

CREATE TABLE tour_itinerary_days (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  tour_id BIGINT NOT NULL,
  day_number INT NOT NULL,
  overnight_destination_id BIGINT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE tour_itinerary_day_translations (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  itinerary_day_id BIGINT NOT NULL,
  locale ENUM('en', 'de', 'fr', 'it') NOT NULL,
  title VARCHAR(255) NOT NULL,
  description MEDIUMTEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_itinerary_locale (itinerary_day_id, locale),
  FOREIGN KEY (itinerary_day_id) REFERENCES tour_itinerary_days(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 5. DESTINATIONS & TRANSLATIONS (Doc 03 & Doc 04)
-- ============================================================================

CREATE TABLE destinations (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  status ENUM('DRAFT', 'PUBLISHED', 'UNPUBLISHED', 'ARCHIVED') NOT NULL DEFAULT 'PUBLISHED',
  latitude DECIMAL(10, 7) NULL,
  longitude DECIMAL(10, 7) NULL,
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  hero_image VARCHAR(512) NULL,
  sort_order INT NOT NULL DEFAULT 0,
  published_at DATETIME NULL,
  archived_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE destination_translations (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  destination_id BIGINT NOT NULL,
  locale ENUM('en', 'de', 'fr', 'it') NOT NULL,
  name VARCHAR(255) NOT NULL,
  short_description TEXT NULL,
  content MEDIUMTEXT NULL,
  practical_planning MEDIUMTEXT NULL,
  seo_title VARCHAR(255) NULL,
  seo_description TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_destination_locale (destination_id, locale),
  FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 6. COMMERCIAL RELATIONSHIPS (Doc 03 & Doc 04)
-- ============================================================================

CREATE TABLE tour_destinations (
  tour_id BIGINT NOT NULL,
  destination_id BIGINT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  overnight BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (tour_id, destination_id),
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE,
  FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE tour_inclusions (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  tour_id BIGINT NOT NULL,
  item_code VARCHAR(100) NULL,
  description_en VARCHAR(255) NOT NULL,
  description_de VARCHAR(255) NULL,
  description_fr VARCHAR(255) NULL,
  description_it VARCHAR(255) NULL,
  sort_order INT NOT NULL DEFAULT 0,
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE tour_exclusions (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  tour_id BIGINT NOT NULL,
  item_code VARCHAR(100) NULL,
  description_en VARCHAR(255) NOT NULL,
  description_de VARCHAR(255) NULL,
  description_fr VARCHAR(255) NULL,
  description_it VARCHAR(255) NULL,
  sort_order INT NOT NULL DEFAULT 0,
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE tour_meals (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  tour_id BIGINT NOT NULL,
  day_number INT NOT NULL,
  breakfast BOOLEAN NOT NULL DEFAULT FALSE,
  lunch BOOLEAN NOT NULL DEFAULT FALSE,
  dinner BOOLEAN NOT NULL DEFAULT FALSE,
  notes VARCHAR(255) NULL,
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 7. FAQS & MEDIA (Doc 04)
-- ============================================================================

CREATE TABLE tour_faqs (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  tour_id BIGINT NOT NULL,
  faq_type VARCHAR(50) NOT NULL DEFAULT 'GENERAL',
  source_field VARCHAR(100) NULL,
  sort_order INT NOT NULL DEFAULT 0,
  status ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE tour_faq_translations (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  faq_id BIGINT NOT NULL,
  locale ENUM('en', 'de', 'fr', 'it') NOT NULL,
  question VARCHAR(500) NOT NULL,
  answer TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_faq_locale (faq_id, locale),
  FOREIGN KEY (faq_id) REFERENCES tour_faqs(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE media (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  path VARCHAR(512) NOT NULL,
  mime_type VARCHAR(100) NOT NULL,
  width INT NULL,
  height INT NULL,
  file_size INT NULL,
  checksum VARCHAR(64) NULL,
  status ENUM('ACTIVE', 'ARCHIVED') NOT NULL DEFAULT 'ACTIVE',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE media_translations (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  media_id BIGINT NOT NULL,
  locale ENUM('en', 'de', 'fr', 'it') NOT NULL,
  alt_text VARCHAR(255) NOT NULL,
  caption VARCHAR(500) NULL,
  UNIQUE KEY uq_media_locale (media_id, locale),
  FOREIGN KEY (media_id) REFERENCES media(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE tour_media (
  tour_id BIGINT NOT NULL,
  media_id BIGINT NOT NULL,
  is_hero BOOLEAN NOT NULL DEFAULT FALSE,
  sort_order INT NOT NULL DEFAULT 0,
  PRIMARY KEY (tour_id, media_id),
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE,
  FOREIGN KEY (media_id) REFERENCES media(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 8. BOOKINGS & PRICE SNAPSHOTS (Doc 03, Doc 04, Doc 06)
-- ============================================================================

CREATE TABLE bookings (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  public_reference VARCHAR(50) NOT NULL UNIQUE,
  tour_id BIGINT NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  whatsapp VARCHAR(50) NULL,
  locale ENUM('en', 'de', 'fr', 'it') NOT NULL DEFAULT 'en',
  travel_date DATE NOT NULL,
  adults INT NOT NULL DEFAULT 1,
  children INT NOT NULL DEFAULT 0,
  special_requests TEXT NULL,
  price_snapshot DECIMAL(10,2) NOT NULL,
  currency_snapshot CHAR(3) NOT NULL DEFAULT 'USD',
  price_unit_snapshot ENUM('PER_PERSON', 'PER_GROUP', 'PER_VEHICLE', 'CUSTOM') NOT NULL DEFAULT 'PER_PERSON',
  status ENUM('NEW', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'REFUNDED') NOT NULL DEFAULT 'NEW',
  assigned_admin_id BIGINT NULL,
  internal_notes TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (tour_id) REFERENCES tours(id),
  FOREIGN KEY (assigned_admin_id) REFERENCES admins(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE booking_status_history (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  booking_id BIGINT NOT NULL,
  old_status VARCHAR(50) NULL,
  new_status VARCHAR(50) NOT NULL,
  changed_by BIGINT NULL,
  notes TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
  FOREIGN KEY (changed_by) REFERENCES admins(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 9. QUOTATIONS & CONVERSIONS (Doc 03, Doc 04, Doc 06)
-- ============================================================================

CREATE TABLE quotation_requests (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  public_reference VARCHAR(50) NOT NULL UNIQUE,
  tour_id BIGINT NOT NULL,
  locale ENUM('en', 'de', 'fr', 'it') NOT NULL DEFAULT 'en',
  customer_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  whatsapp VARCHAR(50) NULL,
  nationality VARCHAR(100) NULL,
  country_of_residence VARCHAR(100) NULL,
  arrival_date DATE NULL,
  departure_date DATE NULL,
  preferred_tour_date DATE NULL,
  adults INT NOT NULL DEFAULT 1,
  children INT NOT NULL DEFAULT 0,
  rooms INT NULL,
  hotel_preference VARCHAR(100) NULL,
  special_requests TEXT NULL,
  preferred_contact_method ENUM('EMAIL', 'WHATSAPP', 'PHONE') NOT NULL DEFAULT 'EMAIL',
  quoted_price DECIMAL(10,2) NULL,
  quoted_currency CHAR(3) NOT NULL DEFAULT 'USD',
  quote_valid_until DATE NULL,
  converted_booking_id BIGINT NULL,
  status ENUM('NEW', 'IN_REVIEW', 'QUOTED', 'CUSTOMER_REPLIED', 'ACCEPTED', 'DECLINED', 'EXPIRED', 'CONVERTED_TO_BOOKING') NOT NULL DEFAULT 'NEW',
  assigned_admin_id BIGINT NULL,
  internal_notes TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (tour_id) REFERENCES tours(id),
  FOREIGN KEY (converted_booking_id) REFERENCES bookings(id) ON DELETE SET NULL,
  FOREIGN KEY (assigned_admin_id) REFERENCES admins(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE quotation_status_history (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  quotation_id BIGINT NOT NULL,
  old_status VARCHAR(50) NULL,
  new_status VARCHAR(50) NOT NULL,
  changed_by BIGINT NULL,
  notes TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (quotation_id) REFERENCES quotation_requests(id) ON DELETE CASCADE,
  FOREIGN KEY (changed_by) REFERENCES admins(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 10. REVIEWS & SECURE TOKENS (Doc 03, Doc 04, Doc 06)
-- ============================================================================

CREATE TABLE reviews (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  booking_id BIGINT NOT NULL,
  tour_id BIGINT NOT NULL,
  locale ENUM('en', 'de', 'fr', 'it') NOT NULL DEFAULT 'en',
  reviewer_name VARCHAR(255) NOT NULL,
  country VARCHAR(100) NULL,
  rating INT NOT NULL,
  review_text TEXT NOT NULL,
  status ENUM('PENDING', 'APPROVED', 'REJECTED', 'HIDDEN') NOT NULL DEFAULT 'PENDING',
  secure_token_hash VARCHAR(64) NOT NULL UNIQUE,
  submitted_at DATETIME NULL,
  moderated_by BIGINT NULL,
  moderated_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE,
  FOREIGN KEY (moderated_by) REFERENCES admins(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- 11. PUBLISHING JOBS, SITE SETTINGS & AUDIT LOGS (Doc 04, Doc 05, Doc 07)
-- ============================================================================

CREATE TABLE site_settings (
  setting_key VARCHAR(100) PRIMARY KEY,
  setting_value TEXT NOT NULL,
  setting_group VARCHAR(50) NOT NULL DEFAULT 'GENERAL',
  description VARCHAR(255) NULL,
  updated_by BIGINT NULL,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (updated_by) REFERENCES admins(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE publish_jobs (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  requested_by BIGINT NULL,
  status ENUM('QUEUED', 'BUILDING', 'DEPLOYING', 'SUCCESS', 'FAILED') NOT NULL DEFAULT 'QUEUED',
  log_output MEDIUMTEXT NULL,
  deployment_reference VARCHAR(100) NULL,
  started_at DATETIME NULL,
  completed_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (requested_by) REFERENCES admins(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE audit_logs (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  admin_id BIGINT NULL,
  entity_type VARCHAR(100) NOT NULL,
  entity_id VARCHAR(100) NOT NULL,
  action VARCHAR(100) NOT NULL,
  old_value_json JSON NULL,
  new_value_json JSON NULL,
  ip_address VARCHAR(45) NULL,
  user_agent VARCHAR(255) NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE redirects (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  source_path VARCHAR(1024) NOT NULL UNIQUE,
  destination_path VARCHAR(2048) NOT NULL,
  status_code SMALLINT NOT NULL DEFAULT 301,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- Jordan Story Tours — Database Seed Data
-- Compliant with Specifications 03, 04, 05, 06, 07, 08

-- 1. Roles
INSERT INTO roles (id, name, description) VALUES
('SUPER_ADMIN', 'Super Administrator', 'Full system access and security administration'),
('ADMIN', 'Administrator', 'Operational management of tours, bookings, and settings'),
('CONTENT_EDITOR', 'Content Editor', 'Tours, destinations, translations, and media management'),
('BOOKING_MANAGER', 'Booking Manager', 'Direct bookings, quotation processing, and traveler communication'),
('REVIEW_MODERATOR', 'Review Moderator', 'Post-tour review verification and moderation')
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- 2. Default Administrator (password: admin123456)
-- Hash generated using password_hash('admin123456', PASSWORD_BCRYPT)
INSERT INTO admins (id, name, email, password_hash, status) VALUES
(1, 'Jordan Story Owner', 'admin@jordanstorytours.com', '$2y$10$eM9gZJtE.1qM8p7L.8FwNuS1oPzW5z3K7mNqJ9xR4bV6cT8yU0aWe', 'ACTIVE')
ON DUPLICATE KEY UPDATE name=VALUES(name);

INSERT INTO admin_roles (admin_id, role_id) VALUES
(1, 'SUPER_ADMIN')
ON DUPLICATE KEY UPDATE role_id=VALUES(role_id);

-- 3. Site Settings (Doc 03 & Doc 07)
INSERT INTO site_settings (setting_key, setting_value, setting_group, description, updated_by) VALUES
('business_name', 'Jordan Story Tours & Travel Agency', 'BUSINESS', 'Official registered trade name', 1),
('business_registration', 'JO-MOTA-2026-9941', 'BUSINESS', 'Ministry of Tourism & Antiquities license registration', 1),
('headquarters_address', 'King Hussein Street, Amman 11118, Hashemite Kingdom of Jordan', 'BUSINESS', 'Physical office headquarters', 1),
('primary_phone', '+962 7 9000 1234', 'CONTACT', 'Primary commercial phone line', 1),
('whatsapp_hotline', '+962 7 9000 1234', 'CONTACT', 'Direct WhatsApp operations hotline', 1),
('contact_email', 'info@jordanstorytours.com', 'CONTACT', 'Public support email', 1),
('booking_email', 'bookings@jordanstorytours.com', 'CONTACT', 'Operations booking inbox', 1),
('default_currency', 'USD', 'COMMERCIAL', 'Default store currency', 1),
('supported_currencies', 'USD,EUR,GBP,JOD', 'COMMERCIAL', 'Currencies supported in quotation/pricing', 1),
('supported_locales', 'en,de,fr,it', 'LOCALIZATION', 'Active website languages', 1),
('require_review_moderation', '1', 'REVIEWS', 'All traveler reviews require admin approval before going public', 1),
('review_token_expiry_days', '90', 'REVIEWS', 'Validity period for post-tour review submission tokens', 1),
('enable_direct_booking', '1', 'BOOKINGS', 'Allow travelers to book directly for priced packages', 1),
('quote_validity_default_days', '14', 'QUOTATIONS', 'Default validity period for customized quotations', 1)
ON DUPLICATE KEY UPDATE setting_value=VALUES(setting_value);

-- 4. Tour Categories
INSERT INTO tour_categories (id, slug, sort_order, status) VALUES
(1, 'classic-tours', 1, 'ACTIVE'),
(2, 'luxury-tours', 2, 'ACTIVE'),
(3, 'cultural-historical', 3, 'ACTIVE'),
(4, 'adventure-eco', 4, 'ACTIVE'),
(5, 'day-safaris', 5, 'ACTIVE')
ON DUPLICATE KEY UPDATE slug=VALUES(slug);

INSERT INTO tour_category_translations (category_id, locale, name, description) VALUES
(1, 'en', 'Classic Tours', 'Curated multi-day journeys showcasing Jordan’s iconic historical wonders.'),
(1, 'de', 'Klassische Rundreisen', 'Kuratierte Rundreisen zu den berühmtesten Sehenswürdigkeiten Jordaniens.'),
(1, 'fr', 'Circuits Classiques', 'Voyages organisés explorant les merveilles historiques emblématiques de la Jordanie.'),
(1, 'it', 'Tour Classici', 'Viaggi completi alla scoperta delle meraviglie storiche e culturali della Giordania.'),
(2, 'en', 'Luxury & Wellness', 'Exquisite 5-star hospitality, Dead Sea wellness, and luxury Bedouin glamping.'),
(2, 'de', 'Luxus & Wellness', '5-Sterne-Hotels, Totes Meer Wellness und exklusives Wüsten-Glamping.'),
(2, 'fr', 'Luxe & Bien-être', 'Hôtellerie 5 étoiles, bien-être en Mer Morte et tentes de luxe à Wadi Rum.'),
(2, 'it', 'Lusso & Benessere', 'Esperienze 5 stelle, spa sul Mar Morto e glamping esclusivo nel Wadi Rum.')
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- 5. Seed Initial Destinations
INSERT INTO destinations (id, slug, status, latitude, longitude, featured, hero_image, sort_order) VALUES
(1, 'petra', 'PUBLISHED', 30.3284540, 35.4443620, 1, '/images/destinations/petra.webp', 1),
(2, 'wadi-rum', 'PUBLISHED', 29.5760000, 35.4200000, 1, '/images/destinations/wadi-rum.webp', 2),
(3, 'dead-sea', 'PUBLISHED', 31.5590000, 35.6190000, 1, '/images/destinations/dead-sea.webp', 3),
(4, 'jerash', 'PUBLISHED', 32.2800000, 35.8900000, 1, '/images/destinations/jerash.webp', 4),
(5, 'amman', 'PUBLISHED', 31.9522000, 35.9284000, 0, '/images/destinations/amman.webp', 5)
ON DUPLICATE KEY UPDATE slug=VALUES(slug);

INSERT INTO destination_translations (destination_id, locale, name, short_description, content, seo_title, seo_description) VALUES
(1, 'en', 'Petra', 'The ancient Rose-Red Nabataean capital carved directly into sandstone cliffs.', 'Full Petra guide and historical exploration.', 'Petra Travel Guide | Jordan Story Tours', 'Explore Petra, Jordan: Treasury, Monastery, Siq, and ancient Nabataean architecture.'),
(1, 'de', 'Petra', 'Die antike Felsenstadt der Nabatäer im rosaroten Sandstein.', 'Ausführlicher Reiseführer für Petra.', 'Petra Reiseführer | Jordan Story Tours', 'Entdecken Sie Petra: Schatzhaus, Kloster, Siq und antike nabatäische Kultur.'),
(1, 'fr', 'Pétra', 'La cité nabatéenne taillée dans le grès rose, merveille du monde.', 'Guide complet de visite pour Pétra.', 'Guide de Pétra | Jordan Story Tours', 'Découvrez Pétra: le Khazneh, le Monastère et les canyons spectaculaires.'),
(1, 'it', 'Petra', 'L antica città scolpita nella roccia rosa dei Nabatei.', 'Guida completa per la visita di Petra.', 'Guida di Petra | Jordan Story Tours', 'Visita Petra: il Tesoro, il Monastero e le meraviglie nabatee in Giordania.')
ON DUPLICATE KEY UPDATE name=VALUES(name);

-- 6. Initial Seed Sample Tour
INSERT INTO tours (id, slug, category_id, status, featured, duration_days, duration_nights, price_mode, price_amount, currency, price_unit, booking_mode, hero_image, sort_order, published_at) VALUES
(1, 'petra-dead-sea-jerash', 1, 'PUBLISHED', 1, 3, 2, 'FROM', 399.00, 'USD', 'PER_PERSON', 'DIRECT_BOOKING', '/images/tours/petra-classic.webp', 1, CURRENT_TIMESTAMP)
ON DUPLICATE KEY UPDATE slug=VALUES(slug);

INSERT INTO tour_translations (tour_id, locale, title, short_description, description, highlights_json, seo_title, seo_description) VALUES
(1, 'en', 'Petra, Dead Sea & Jerash Discovery (3 Days)', 'Experience Jordan’s top highlights with private English-speaking chauffeur.', 'Full 3-day discovery of Roman Jerash, majestic Petra, and the mineral-rich waters of the Dead Sea.', '["Guided Siq & Treasury Walk", "Float on the Dead Sea", "Explore Roman Jerash Decapolis", "Private Chauffeur & AC Vehicle"]', 'Petra, Dead Sea & Jerash (3 Days) | Jordan Story Tours', 'Book our 3-day Jordan Discovery tour: Petra, Dead Sea and Jerash with private transport.'),
(1, 'de', 'Petra, Totes Meer & Jerash Entdeckungsreise (3 Tage)', 'Erleben Sie Jordaniens Höhepunkte mit privatem deutsch/englischsprachigem Fahrer.', 'Drei Tage Rundreise zu Jerash, Petra und dem Toten Meer.', '["Geführte Wanderung durch den Siq zum Schatzhaus", "Baden im Toten Meer", "Römische Ruinen von Jerash", "Privater Chauffeur"]', 'Petra, Totes Meer & Jerash (3 Tage) | Jordan Story Tours', 'Buchen Sie die 3-tägige Jordanien Rundreise: Petra, Totes Meer und Jerash.')
ON DUPLICATE KEY UPDATE title=VALUES(title);
