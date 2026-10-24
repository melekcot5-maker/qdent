/**
 * Basitleştirilmiş bayrak ikonları (SVG, 20×14 görünüm kutusu).
 * Emoji bayraklar Windows'ta güvenilir biçimde görünmediği için vektör olarak çizilir.
 */
import type { Locale } from '@/i18n';

export const flags: Record<Locale, string> = {
  tr: [
    '<rect width="20" height="14" rx="2" fill="#E30A17"/>',
    '<circle cx="8" cy="7" r="3.5" fill="#fff"/>',
    '<circle cx="9.1" cy="7" r="2.8" fill="#E30A17"/>',
    '<path d="M13 5.3l.5 1.3 1.4.1-1.1.9.4 1.4-1.2-.8-1.2.8.4-1.4-1.1-.9 1.4-.1z" fill="#fff"/>',
  ].join(''),
  en: [
    '<rect width="20" height="14" rx="2" fill="#00247D"/>',
    '<path d="M0 0 20 14M20 0 0 14" stroke="#fff" stroke-width="2.6"/>',
    '<path d="M0 0l8.4 6M20 0l-8.4 6M0 14l8.4-6M20 14l-8.4-6" stroke="#CF142B" stroke-width="1.1"/>',
    '<path d="M8.6 0v14M0 6h20" stroke="#fff" stroke-width="4"/>',
    '<path d="M9 0v14M0 6.5h20" stroke="#CF142B" stroke-width="2"/>',
  ].join(''),
  de: [
    '<rect width="20" height="14" rx="2" fill="#FFCE00"/>',
    '<path d="M2 0h16a2 2 0 0 1 2 2v2.67H0V2a2 2 0 0 1 2-2Z" fill="#000"/>',
    '<rect y="4.67" width="20" height="4.67" fill="#D00"/>',
  ].join(''),
  fr: [
    '<rect width="20" height="14" rx="2" fill="#fff"/>',
    '<path d="M2 0h4.7v14H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Z" fill="#0055A4"/>',
    '<path d="M13.3 0H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.7Z" fill="#EF4135"/>',
  ].join(''),
  ru: [
    '<rect width="20" height="14" rx="2" fill="#fff"/>',
    '<rect y="4.67" width="20" height="4.67" fill="#0039A6"/>',
    '<path d="M0 9.33h20V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2Z" fill="#D52B1E"/>',
  ].join(''),
};
