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
