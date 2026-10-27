/**
 * Tedavi listesi — sıralama, ikon ve önce/sonra vakası burada; metinler her dilin sözlüğünde
 * (src/i18n/locales/*.ts → treatments.items[slug]).
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
import gumBefore from '@/assets/images/results/gum-before.jpg';
import gumAfter from '@/assets/images/results/gum-after.jpg';

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

export interface BeforeAfterCase {
  before: ImageMetadata;
  after: ImageMetadata;
  /**
   * clinic → kliniğe ait, hasta onaylı gerçek sonuç (yüz görünmeyecek şekilde kırpıldı).
   * sample → temsili örnek; atıf satırı gösterilmediği için yalnızca CC0 / kamu malı görseller kullanılır.
   */
  kind: 'clinic' | 'sample';
}

export interface TreatmentMeta {
  slug: TreatmentSlug;
  icon: IconName;
  /** Detay sayfasının başında ve galeride gösterilir; yoksa ikisinde de "yakında" çerçevesi çıkar */
  result?: BeforeAfterCase;
}

export const treatments: TreatmentMeta[] = [
  // Tam ağız implant vakası
  { slug: 'dental-implants', icon: 'implant', result: { before: implantBefore, after: implantAfter, kind: 'clinic' } },
  { slug: 'smile-design', icon: 'smile' },
  { slug: 'porcelain-veneers', icon: 'veneer', result: { before: porcelainBefore, after: porcelainAfter, kind: 'clinic' } },
  { slug: 'zirconia-crowns', icon: 'crown', result: { before: zirconiaBefore, after: zirconiaAfter, kind: 'clinic' } },
  { slug: 'teeth-whitening', icon: 'sparkle' },
  { slug: 'clear-aligners', icon: 'aligner' },
  { slug: 'root-canal-treatment', icon: 'root' },
  // Kaynak: commons.wikimedia.org/wiki/File:Gingivitis-before-and-after-3.jpg (Onetimeuseaccount, CC0)
  { slug: 'gum-treatment', icon: 'gum', result: { before: gumBefore, after: gumAfter, kind: 'sample' } },
];

export function getTreatment(slug: string): TreatmentMeta | undefined {
  return treatments.find((t) => t.slug === slug);
}
