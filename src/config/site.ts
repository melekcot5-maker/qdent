/**
 * Klinik bilgileri — sitenin her yerinde (başlık, alt bilgi, iletişim, SEO şeması)
 * buradan okunur. Telefon, adres, saat değişince yalnızca bu dosya güncellenir.
 *
 * Kaynak: Google İşletme kaydı (Ölüdeniz Dental) ve qclinicturkey.com — 2026-10-23.
 */
import type { ImageMetadata } from 'astro';
import dilaraPhoto from '@/assets/images/team/dilara-nur-kilinc.jpg';
import mervePhoto from '@/assets/images/team/merve-eylum-cakin.jpg';
import melekPhoto from '@/assets/images/team/melek-cot.jpg';

export interface Phone {
  /** Ekranda görünen biçim */
  display: string;
  /** tel: bağlantısı için uluslararası biçim */
  e164: string;
}

export interface OpeningHours {
  /** ISO hafta günü: 1 = Pazartesi … 7 = Pazar */
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /** null → kapalı */
  open: string | null;
  close: string | null;
}

export interface TeamMember {
  /** Sözlükteki `about.team.bios` anahtarı */
  id: string;
  name: string;
  /** Sözlükteki `about.team.roles` anahtarı */
  role: 'dentist' | 'manager' | 'assistant';
  /** Portre (hekimlerde 4:5, ekipte kare); yoksa baş harfler / ikonlu yer tutucu gösterilir */
  photo?: ImageMetadata;
}

export const site = {
  name: 'Q Dent',
  legalName: 'Q Dent Quality Dental Center',
  url: 'https://www.qclinicturkey.com',
  email: 'info@qclinicturkey.com',

  phone: { display: '+90 552 332 07 19', e164: '+905523320719' } satisfies Phone,
  landline: { display: '+90 252 616 65 61', e164: '+902526166561' } satisfies Phone,
  /** wa.me için başında + olmadan */
  whatsapp: '905523320719',

  address: {
    street: 'Atatürk Cd. No:135/1',
    locality: 'Ölüdeniz',
    city: 'Fethiye',
    region: 'Muğla',
    postalCode: '48000',
    countryCode: 'TR',
  },
  geo: { lat: 36.5708201, lng: 29.1418913 },

  google: {
    placeId: 'ChIJ2xF1y3dHwBQRNVqScHuB1iM',
    cid: '2582393803513158197',
    rating: 4.9,
    reviewCount: 49,
  },

  hours: [
    { day: 1, open: '09:00', close: '18:00' },
    { day: 2, open: '09:30', close: '18:00' },
    { day: 3, open: '09:30', close: '18:00' },
    { day: 4, open: '09:30', close: '18:00' },
    { day: 5, open: '09:30', close: '18:00' },
    { day: 6, open: '10:00', close: '18:00' },
    { day: 7, open: null, close: null },
  ] satisfies OpeningHours[],

  timeZone: 'Europe/Istanbul',
  experienceYears: 10,

  /** Hakkımızda sayfasında bu sırayla gösterilir: önce hekimler, sonra klinik ekibi. */
  team: [
    { id: 'dilara', name: 'Dt. Dilara Nur Kılınç', role: 'dentist', photo: dilaraPhoto },
    { id: 'elif', name: 'Dt. Elif Demirtaş', role: 'dentist' },
    { id: 'recep', name: 'Recep Aykut', role: 'manager' },
    { id: 'merve', name: 'Merve Eylüm Çakın', role: 'assistant', photo: mervePhoto },
    { id: 'melek', name: 'Melek Çot', role: 'assistant', photo: melekPhoto },
  ] satisfies TeamMember[],

  social: {
    instagram: 'https://www.instagram.com/qclinicturkey/',
    facebook: 'https://www.facebook.com/qclinicturkey/',
  },
} as const;

/* ---------- Türetilmiş bağlantılar ---------- */

export const links = {
  tel: `tel:${site.phone.e164}`,
  landline: `tel:${site.landline.e164}`,
  mailto: `mailto:${site.email}`,
  whatsapp: (message: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`,
  mapEmbed: (lang: string) => `https://maps.google.com/maps?cid=${site.google.cid}&output=embed&hl=${lang}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${site.legalName}, ${site.address.street}, ${site.address.locality}`,
  )}&destination_place_id=${site.google.placeId}`,
  reviews: `https://search.google.com/local/reviews?placeid=${site.google.placeId}`,
  writeReview: `https://search.google.com/local/writereview?placeid=${site.google.placeId}`,
};

export const fullAddress = `${site.address.street}, ${site.address.locality}, ${site.address.postalCode} ${site.address.city}/${site.address.region}`;
