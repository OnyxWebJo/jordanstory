-- Jordan Story Tours — MySQL Database Schema
-- Compatible with MySQL 8.x / MariaDB (utf8mb4)

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS audit_logs;
DROP TABLE IF EXISTS redirects;
DROP TABLE IF EXISTS seo_meta;
DROP TABLE IF EXISTS payments;
DROP TABLE IF EXISTS booking_status_history;
DROP TABLE IF EXISTS booking_options;
DROP TABLE IF EXISTS booking_price_lines;
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS tour_price_rules;
DROP TABLE IF EXISTS tour_itinerary_translations;
DROP TABLE IF EXISTS tour_itinerary_days;
DROP TABLE IF EXISTS tour_destinations;
DROP TABLE IF EXISTS story_translations;
DROP TABLE IF EXISTS stories;
DROP TABLE IF EXISTS destination_translations;
DROP TABLE IF EXISTS destinations;
DROP TABLE IF EXISTS tour_translations;
DROP TABLE IF EXISTS tours;
DROP TABLE IF EXISTS users;

SET FOREIGN_KEY_CHECKS = 1;

-- Users / Admin
CREATE TABLE users (
  id CHAR(26) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'admin',
  active TINYINT(1) NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tours
CREATE TABLE tours (
  id CHAR(26) PRIMARY KEY,
  internal_code VARCHAR(100) NOT NULL UNIQUE,
  status VARCHAR(40) NOT NULL DEFAULT 'draft',
  duration_days INT NULL,
  duration_nights INT NULL,
  start_location VARCHAR(255) NULL,
  end_location VARCHAR(255) NULL,
  tour_type VARCHAR(40) NULL,
  min_travelers INT DEFAULT 1,
  max_travelers INT DEFAULT 12,
  is_private TINYINT(1) DEFAULT 1,
  is_featured TINYINT(1) NOT NULL DEFAULT 0,
  primary_story_id CHAR(26) NULL,
  base_currency CHAR(3) NOT NULL DEFAULT 'USD',
  published_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tour Translations (EN, DE)
CREATE TABLE tour_translations (
  id CHAR(26) PRIMARY KEY,
  tour_id CHAR(26) NOT NULL,
  locale VARCHAR(10) NOT NULL,
  title VARCHAR(255) NOT NULL,
  story_subtitle VARCHAR(255) NULL,
  short_summary TEXT NULL,
  introduction MEDIUMTEXT NULL,
  slug VARCHAR(255) NOT NULL,
  translation_status VARCHAR(40) NOT NULL DEFAULT 'published',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_tour_locale (tour_id, locale),
  UNIQUE KEY uq_tour_slug_locale (locale, slug),
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Destinations
CREATE TABLE destinations (
  id CHAR(26) PRIMARY KEY,
  internal_key VARCHAR(100) NOT NULL UNIQUE,
  latitude DECIMAL(10,7) NULL,
  longitude DECIMAL(10,7) NULL,
  active TINYINT(1) NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Destination Translations
CREATE TABLE destination_translations (
  id CHAR(26) PRIMARY KEY,
  destination_id CHAR(26) NOT NULL,
  locale VARCHAR(10) NOT NULL,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  short_description TEXT NULL,
  body MEDIUMTEXT NULL,
  practical_information MEDIUMTEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_destination_locale (destination_id, locale),
  UNIQUE KEY uq_destination_slug_locale (locale, slug),
  FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Stories (Story Collections)
CREATE TABLE stories (
  id CHAR(26) PRIMARY KEY,
  internal_key VARCHAR(100) NOT NULL UNIQUE,
  active TINYINT(1) NOT NULL DEFAULT 1,
  sort_order INT NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Story Translations
CREATE TABLE story_translations (
  id CHAR(26) PRIMARY KEY,
  story_id CHAR(26) NOT NULL,
  locale VARCHAR(10) NOT NULL,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  tagline VARCHAR(255) NULL,
  description TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_story_locale (story_id, locale),
  FOREIGN KEY (story_id) REFERENCES stories(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tour Destinations Junction
CREATE TABLE tour_destinations (
  tour_id CHAR(26) NOT NULL,
  destination_id CHAR(26) NOT NULL,
  sequence INT NULL,
  overnight TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (tour_id, destination_id),
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE,
  FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Itinerary Days
CREATE TABLE tour_itinerary_days (
  id CHAR(26) PRIMARY KEY,
  tour_id CHAR(26) NOT NULL,
  day_number INT NOT NULL,
  overnight_destination_id CHAR(26) NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Itinerary Translations
CREATE TABLE tour_itinerary_translations (
  id CHAR(26) PRIMARY KEY,
  itinerary_day_id CHAR(26) NOT NULL,
  locale VARCHAR(10) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description MEDIUMTEXT NULL,
  meals VARCHAR(255) NULL,
  accommodation VARCHAR(255) NULL,
  FOREIGN KEY (itinerary_day_id) REFERENCES tour_itinerary_days(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tour Price Rules
CREATE TABLE tour_price_rules (
  id CHAR(26) PRIMARY KEY,
  tour_id CHAR(26) NOT NULL,
  traveler_count INT NOT NULL,
  accommodation_level VARCHAR(50) NOT NULL DEFAULT 'standard', -- budget, 3-star, 4-star, 5-star, luxury
  price_per_person DECIMAL(12,2) NOT NULL,
  single_supplement DECIMAL(12,2) DEFAULT 0.00,
  currency CHAR(3) NOT NULL DEFAULT 'USD',
  active TINYINT(1) NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Customers
CREATE TABLE customers (
  id CHAR(26) PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NULL,
  country VARCHAR(100) NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Bookings
CREATE TABLE bookings (
  id CHAR(26) PRIMARY KEY,
  reference VARCHAR(30) NOT NULL UNIQUE,
  customer_id CHAR(26) NOT NULL,
  tour_id CHAR(26) NOT NULL,
  status VARCHAR(40) NOT NULL DEFAULT 'pending', -- pending, confirmed, cancelled, completed
  payment_status VARCHAR(40) NOT NULL DEFAULT 'unpaid', -- unpaid, deposit_paid, fully_paid
  locale VARCHAR(10) NOT NULL DEFAULT 'en',
  travel_date DATE NOT NULL,
  alternative_date DATE NULL,
  adult_count INT NOT NULL DEFAULT 1,
  child_count INT NOT NULL DEFAULT 0,
  infant_count INT NOT NULL DEFAULT 0,
  accommodation_level VARCHAR(50) NULL,
  quoted_total DECIMAL(12,2) NOT NULL,
  currency CHAR(3) NOT NULL DEFAULT 'USD',
  special_requests TEXT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (tour_id) REFERENCES tours(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Redirects Map (for preserving SEO search equity)
CREATE TABLE redirects (
  id CHAR(26) PRIMARY KEY,
  source_path VARCHAR(1024) NOT NULL UNIQUE,
  destination_path VARCHAR(2048) NOT NULL,
  status_code SMALLINT NOT NULL DEFAULT 301,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
