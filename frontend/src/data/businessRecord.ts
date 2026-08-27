export interface BusinessRecord {
  brandName: string;
  legalName: string;
  licenseNumber: 'PENDING_VERIFICATION' | string;
  licenseStatus: 'PENDING_VERIFICATION' | 'VERIFIED' | string;
  phone: 'PLACEHOLDER' | string;
  email: string;
  city: string;
  country: string;
  website: string;
  languages: ('en' | 'de' | 'fr' | 'it')[];
  serviceArea: string;
  socialProfiles: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
}

export const CANONICAL_BUSINESS_RECORD: BusinessRecord = {
  brandName: 'Jordan Story Tours',
  legalName: 'Jordan Story Tours & Travel Ltd.',
  licenseNumber: 'PENDING_VERIFICATION',
  licenseStatus: 'PENDING_VERIFICATION',
  phone: 'PLACEHOLDER',
  email: 'info@jordanstorytours.com',
  city: 'Amman',
  country: 'Jordan',
  website: 'https://jordanstorytours.com',
  languages: ['en', 'de', 'fr', 'it'],
  serviceArea: 'Jordan & Middle East Expedition Circuits',
  socialProfiles: {
    whatsapp: '+962790000000',
    instagram: 'https://instagram.com/jordanstorytours',
    facebook: 'https://facebook.com/jordanstorytours',
  },
};

/**
 * Returns clean display value or fallback notice for unverified trust fields
 */
export function getVerifiedLicenseDisplay(locale: 'en' | 'de' = 'en'): string {
  if (CANONICAL_BUSINESS_RECORD.licenseStatus === 'PENDING_VERIFICATION') {
    return locale === 'de'
      ? 'Registrierung beim Tourismusministerium: In Verifizierung'
      : 'Ministry of Tourism License: Verification Pending';
  }
  return `Ministry License: ${CANONICAL_BUSINESS_RECORD.licenseNumber}`;
}
