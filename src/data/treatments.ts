/**
 * Tedavi listesi — sıralama, ikon, klinik fotoğrafı ve önce/sonra vakası burada; metinler her dilin
 * sözlüğünde (src/i18n/locales/*.ts → treatments.items[slug]).
 *
 * Yeni tedavi eklemek için: buraya bir kayıt ekleyin, ardından tüm sözlüklere aynı
 * anahtarla metnini yazın (eksik dil olursa `npm run check` hata verir).
 */
import type { ImageMetadata } from 'astro';
import type { IconName } from '@/components/ui/icons';

import implantBefore from '@/assets/images/results/implant-before.jpg';
import implantAfter from '@/assets/images/results/implant-after.jpg';
import porcelainBefore from '@/assets/images/results/porcelain-before.jpg';
import porcelainAfter from '@/assets/images/results/porcelain-after.jpg';
import zirconiaBefore from '@/assets/images/results/zirconia-before.jpg';
import zirconiaAfter from '@/assets/images/results/zirconia-after.jpg';
import bondingBefore from '@/assets/images/results/bonding-before.jpg';
import bondingAfter from '@/assets/images/results/bonding-after.jpg';
import treatmentRoom from '@/assets/images/clinic/treatment-room.jpg';
import treatmentRoom2 from '@/assets/images/clinic/treatment-room-2.jpg';
import treatmentUnit from '@/assets/images/clinic/treatment-unit.jpg';
import digitalScan from '@/assets/images/clinic/digital-scan.jpg';
import xrayRoom from '@/assets/images/clinic/xray-room.jpg';

export const treatmentSlugs = [
  'dental-implants',
  'smile-design',
  'porcelain-veneers',
  'zirconia-crowns',
  'teeth-whitening',
  'clear-aligners',
  'root-canal-treatment',
  'gum-treatment',
] as const;

export type TreatmentSlug = (typeof treatmentSlugs)[number];

/**
 * Kliniğimizde tedavi edilen gerçek bir hastanın önce/sonra görselleri.
 *
 * Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik (RG 12.11.2025, m. 7):
 * - hastanın Ek-1 "Görsel İçerik Kaydetme ve İşleme Onam Formu" imzalı ve klinikte dosyada olmalı (`consent`),
 * - iki fotoğraf aynı ortam ve teknik koşullarda çekilmiş, sonradan rötuş/düzeltme yapılmamış olmalı,
 * - işlemi yapan hekim, işlem tarihi ve sitede ilk paylaşım tarihi görselle birlikte belirtilmeli.
 * Onamı olmayan vaka hiç gösterilmez; hekim veya işlem tarihi eksikse derlemede uyarı yazdırılır.
 */
export interface BeforeAfterCase {
  before: ImageMetadata;
  after: ImageMetadata;
  /** Hastanın imzalı Ek-1 onam formu klinikte dosyada */
  consent?: boolean;
  /** İşlemi yapan hekimin `site.team` kimliği */
  dentist?: string;
  /** İşlemin (son seansın) tarihi, YYYY-MM-DD */
  treatedOn?: string;
  /** Görselin sitede ilk yayımlandığı tarih, YYYY-MM-DD */
  publishedOn?: string;
}

export type PublishableCase = BeforeAfterCase & { consent: true; publishedOn: string };

export function isPublishable(c?: BeforeAfterCase): c is PublishableCase {
  return Boolean(c?.consent && c.publishedOn);
}

export interface TreatmentMeta {
  slug: TreatmentSlug;
  icon: IconName;
  /** Detay sayfasının başında, yayımlanabilir önce/sonra vakası yoksa gösterilen klinik fotoğrafı */
  photo: ImageMetadata;
  result?: BeforeAfterCase;
}

// Onam formları klinikte dosyada (2026-10-28'de teyit edildi). Hekim ve işlem tarihi gelince
// her vakaya `dentist: 'dilara' | 'elif'` ve `treatedOn: 'YYYY-MM-DD'` eklenecek.
const PUBLISHED = '2026-10-28';

export const treatments: TreatmentMeta[] = [
  // Tam ağız implant vakası
  {
    slug: 'dental-implants',
    icon: 'implant',
    photo: xrayRoom,
    result: { before: implantBefore, after: implantAfter, consent: true, publishedOn: PUBLISHED },
  },
  { slug: 'smile-design', icon: 'smile', photo: digitalScan },
  {
    slug: 'porcelain-veneers',
    icon: 'veneer',
    photo: treatmentRoom,
    result: { before: porcelainBefore, after: porcelainAfter, consent: true, publishedOn: PUBLISHED },
  },
  {
    slug: 'zirconia-crowns',
    icon: 'crown',
    photo: treatmentUnit,
    result: { before: zirconiaBefore, after: zirconiaAfter, consent: true, publishedOn: PUBLISHED },
  },
  { slug: 'teeth-whitening', icon: 'sparkle', photo: treatmentRoom2 },
  { slug: 'clear-aligners', icon: 'aligner', photo: digitalScan },
  { slug: 'root-canal-treatment', icon: 'root', photo: xrayRoom },
  { slug: 'gum-treatment', icon: 'gum', photo: treatmentRoom },
];

/** Ayrı tedavi sayfası olmayan galeri vakaları; adları sözlükte `gallery.extraCases` altında */
export const extraCases: { key: 'bonding'; result: BeforeAfterCase }[] = [
  { key: 'bonding', result: { before: bondingBefore, after: bondingAfter, consent: true, publishedOn: PUBLISHED } },
];

// Yayımlanan vakada yönetmeliğin istediği hekim / işlem tarihi eksikse unutulmasın diye derlemede uyar
for (const [name, c] of [
  ...treatments.map((t) => [t.slug, t.result] as const),
  ...extraCases.map((e) => [e.key, e.result] as const),
]) {
  if (!isPublishable(c)) continue;
  const missing = [!c.dentist && 'dentist', !c.treatedOn && 'treatedOn'].filter(Boolean);
  if (missing.length) console.warn(`[önce/sonra] ${name}: eksik bilgi → ${missing.join(', ')} (src/data/treatments.ts)`);
}

export function getTreatment(slug: string): TreatmentMeta | undefined {
  return treatments.find((t) => t.slug === slug);
}
