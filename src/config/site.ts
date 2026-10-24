/**
 * Klinik bilgileri — sitenin her yerinde (başlık, alt bilgi, iletişim, SEO şeması)
 * buradan okunur. Telefon, adres, saat değişince yalnızca bu dosya güncellenir.
 *
 * Kaynak: Google İşletme kaydı (Ölüdeniz Dental) ve qclinicturkey.com — 2026-10-23.
 */

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

export interface Doctor {
  /** Sözlükteki `about.team.bios` anahtarı */
  id: 'dilara' | 'tunay';
  name: string;
  title: 'dentist';
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

  doctors: [
    { id: 'dilara', name: 'Dt. Dilara Nur Kılınç', title: 'dentist' },
    { id: 'tunay', name: 'Dt. Tunay Emre Çaycı', title: 'dentist' },
  ] satisfies Doctor[],

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
