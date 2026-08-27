import { Locale } from '@/context/LanguageContext';

export function getLocalizedText<T>(
  obj: { en: T; de?: T; fr?: T; it?: T } | undefined | null,
  locale: Locale
): T {
  if (!obj) return '' as unknown as T;
  return obj[locale] || obj.en;
}
