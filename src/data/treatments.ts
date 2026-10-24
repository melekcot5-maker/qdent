/**
 * Tedavi listesi — sıralama, ikon ve görsel burada; metinler her dilin sözlüğünde
 * (src/i18n/locales/*.ts → treatments.items[slug]).
 *
 * Yeni tedavi eklemek için: buraya bir kayıt ekleyin, ardından tüm sözlüklere aynı
 * anahtarla metnini yazın (eksik dil olursa `npm run check` hata verir).
 */
import type { ImageMetadata } from 'astro';
import type { IconName } from '@/components/ui/icons';

import care from '@/assets/images/treatment-care.jpg';
import smile from '@/assets/images/smile-portrait.jpg';
import suite from '@/assets/images/clinic-suite.jpg';
import room from '@/assets/images/clinic-room.jpg';

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

export interface TreatmentMeta {
  slug: TreatmentSlug;
  icon: IconName;
  /** Yer tutucu görsel — kliniğin kendi fotoğraflarıyla değiştirilecek */
  image: ImageMetadata;
}

export const treatments: TreatmentMeta[] = [
  { slug: 'dental-implants', icon: 'implant', image: care },
  { slug: 'smile-design', icon: 'smile', image: smile },
  { slug: 'porcelain-veneers', icon: 'veneer', image: smile },
  { slug: 'zirconia-crowns', icon: 'crown', image: suite },
  { slug: 'teeth-whitening', icon: 'sparkle', image: smile },
  { slug: 'clear-aligners', icon: 'aligner', image: room },
  { slug: 'root-canal-treatment', icon: 'root', image: care },
  { slug: 'gum-treatment', icon: 'gum', image: suite },
];

export function getTreatment(slug: string): TreatmentMeta | undefined {
  return treatments.find((t) => t.slug === slug);
}
