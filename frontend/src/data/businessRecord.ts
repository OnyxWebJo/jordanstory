export interface BusinessRecord {
  brandName: string;
  legalName: string;
  registrationNumber: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
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
  registrationNumber: '100933491',
  phone: '+962 6 552 2667',
  whatsapp: '+962 79 660 0360',
  email: 'info@jordanstorytours.com',
  address: 'Atia Complex 149, Office #402, Ar-Razi St., Amman, Jordan',
  city: 'Amman',
  country: 'Jordan',
  website: 'https://jordanstorytours.com',
  languages: ['en', 'de', 'fr', 'it'],
  serviceArea: 'Jordan & Middle East Expedition Circuits',
  socialProfiles: {
    whatsapp: 'https://wa.me/962796600360',
    instagram: 'https://instagram.com/jordanstorytours',
    facebook: 'https://facebook.com/jordanstorytours',
  },
};

export function getVerifiedRegistrationDisplay(locale: 'en' | 'de' | 'fr' | 'it' = 'en'): string {
  const labels: Record<string, string> = {
    en: 'Official Reg #' + CANONICAL_BUSINESS_RECORD.registrationNumber,
    de: 'Offizielle Reg.-Nr. ' + CANONICAL_BUSINESS_RECORD.registrationNumber,
    fr: 'Immatriculation Officielle N° ' + CANONICAL_BUSINESS_RECORD.registrationNumber,
    it: 'N. Reg. Ufficiale ' + CANONICAL_BUSINESS_RECORD.registrationNumber,
  };
  return labels[locale] || labels.en;
}
