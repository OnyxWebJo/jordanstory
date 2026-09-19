import { Metadata } from 'next';
import { Locale } from '@/context/LanguageContext';
import { CANONICAL_BUSINESS_RECORD } from './businessRecord';
import { Tour } from './tours';
import { DestinationData } from './destinations';

const SITE_URL = 'https://jordanstorytours.com';

export const LOCALES: Locale[] = ['en', 'de', 'fr', 'it'];

interface SeoParams {
  title: string;
  description: string;
  path: string; // e.g. '', 'tours', 'destinations/petra'
  locale: Locale;
  image?: string;
  type?: 'website' | 'article';
}

export function buildLocaleMetadata({
  title,
  description,
  path,
  locale,
  image = '/images/scroll-world-video/frame-08.jpg',
  type = 'website'
}: SeoParams): Metadata {
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  const normalizedPath = cleanPath ? (cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`) : '/';
  const canonicalUrl = `${SITE_URL}/${locale}${normalizedPath === '/' ? '/' : normalizedPath}`;
  const absoluteImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  return {
    title: `${title} | Jordan Story Travel & Tourism`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${SITE_URL}/en${normalizedPath === '/' ? '/' : normalizedPath}`,
        'de': `${SITE_URL}/de${normalizedPath === '/' ? '/' : normalizedPath}`,
        'fr': `${SITE_URL}/fr${normalizedPath === '/' ? '/' : normalizedPath}`,
        'it': `${SITE_URL}/it${normalizedPath === '/' ? '/' : normalizedPath}`,
        'x-default': `${SITE_URL}/en${normalizedPath === '/' ? '/' : normalizedPath}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: `${title} | Jordan Story Travel & Tourism`,
      description,
      url: canonicalUrl,
      siteName: 'Jordan Story Travel & Tourism',
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} — Jordan Story Travel & Tourism`,
        },
      ],
      locale: locale === 'de' ? 'de_DE' : locale === 'fr' ? 'fr_FR' : locale === 'it' ? 'it_IT' : 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Jordan Story Travel & Tourism`,
      description,
      images: [absoluteImageUrl],
    },
  };
}

export function generateStaticLocaleParams() {
  return LOCALES.map((lang) => ({ lang }));
}

// ---------------------------------------------------------------------------
// Rich JSON-LD Schemas for High-Ranking SEO, AEO & GEO
// ---------------------------------------------------------------------------

/**
 * Generates Root Organization & TravelAgency Schema with Verified Ministry Credential
 */
export function buildTravelAgencySchema(locale: Locale = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${SITE_URL}/#organization`,
    name: CANONICAL_BUSINESS_RECORD.brandName,
    legalName: CANONICAL_BUSINESS_RECORD.legalName,
    url: `${SITE_URL}/${locale}/`,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/scroll-world-video/frame-08.jpg`,
    description: locale === 'de'
      ? 'Offiziell lizensierter Reiseveranstalter in Jordanien für maßgeschneiderte Privatreisen nach Petra, Wadi Rum, zum Toten Meer und Jerash.'
      : locale === 'fr'
      ? 'Tour opérateur agréé en Jordanie proposant des circuits privés sur mesure à Pétra, Wadi Rum, Mer Morte et Jerash.'
      : locale === 'it'
      ? 'Tour operator ufficiale in Giordania con licenza per tour privati su misura a Petra, Wadi Rum, Mar Morto e Jerash.'
      : 'Official licensed private tour operator in Jordan offering luxury and classical private tours to Petra, Wadi Rum, Dead Sea, and Jerash.',
    telephone: CANONICAL_BUSINESS_RECORD.phone,
    email: CANONICAL_BUSINESS_RECORD.email,
    priceRange: '$$$',
    currenciesAccepted: 'USD, EUR, JOD',
    paymentAccepted: 'Credit Card, Wire Transfer, Cash',
    taxID: CANONICAL_BUSINESS_RECORD.registrationNumber,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Atia Complex 149, Office #402, Ar-Razi St.',
      addressLocality: 'Amman',
      addressRegion: 'Amman Governorate',
      postalCode: '11183',
      addressCountry: 'JO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.9539,
      longitude: 35.9106,
    },
    areaServed: [
      { '@type': 'Country', name: 'Jordan' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Italy' },
      { '@type': 'Country', name: 'Switzerland' },
      { '@type': 'Country', name: 'Austria' },
    ],
    knowsLanguage: ['en', 'de', 'fr', 'it', 'ar'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.98',
      reviewCount: '142',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      CANONICAL_BUSINESS_RECORD.socialProfiles.whatsapp,
      CANONICAL_BUSINESS_RECORD.socialProfiles.instagram,
      CANONICAL_BUSINESS_RECORD.socialProfiles.facebook,
    ].filter(Boolean),
  };
}

/**
 * Generates TouristTrip & Product Schema for Itinerary Pages
 */
export function buildTouristTripSchema(tour: Tour, locale: Locale) {
  const title = tour.title[locale] || tour.title.en;
  const subtitle = tour.subtitle[locale] || tour.subtitle.en;
  const slug = tour.slug[locale] || tour.slug.en;
  const url = `${SITE_URL}/${locale}/tours/${slug}/`;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${url}#trip`,
    name: title,
    description: subtitle,
    touristType: ['Private Travelers', 'Couples', 'Families', 'Luxury Travelers'],
    provider: {
      '@type': 'TravelAgency',
      name: CANONICAL_BUSINESS_RECORD.brandName,
      url: `${SITE_URL}/${locale}/`,
      telephone: CANONICAL_BUSINESS_RECORD.phone,
    },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: tour.itinerary.length,
      itemListElement: tour.itinerary.map((day, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'TouristAttraction',
          name: `Day ${day.day}: ${day.title[locale] || day.title.en}`,
          description: day.description[locale] || day.description.en,
        },
      })),
    },
  };

  if (tour.startingPriceUSD && tour.priceMode !== 'QUOTATION') {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: tour.startingPriceUSD,
      availability: 'https://schema.org/InStock',
      url,
      validFrom: '2026-01-01',
    };
  }

  return schema;
}

/**
 * Generates TouristDestination & TouristAttraction Schema for Destination Hub Pages
 */
export function buildTouristDestinationSchema(dest: DestinationData, locale: Locale) {
  const name = dest.name[locale] || dest.name.en;
  const tagline = dest.tagline[locale] || dest.tagline.en;
  const description = dest.description[locale] || dest.description.en;
  const slug = dest.slug[locale] || dest.slug.en;
  const url = `${SITE_URL}/${locale}/destinations/${slug}/`;

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    '@id': `${url}#destination`,
    name,
    description: `${tagline}. ${description}`,
    url,
    image: dest.image.startsWith('http') ? dest.image : `${SITE_URL}${dest.image}`,
    touristType: ['Historical & Cultural Tourism', 'Adventure', 'Nature & Wellness'],
    containedInPlace: {
      '@type': 'Country',
      name: 'Jordan',
    },
    includesAttraction: dest.highlights[locale]?.map((h) => ({
      '@type': 'TouristAttraction',
      name: h,
    })) || [],
  };
}

/**
 * Generates BreadcrumbList Schema for Precise Google SERP Navigation Hierarchies
 */
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Generates FAQPage Schema for Direct Answer Engine Snippets
 */
export function buildFaqPageSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
