/**
 * Dil ayarları. Yeni bir dil eklemek için:
 *   1) buraya kaydı ekleyin,
 *   2) src/i18n/locales/ altına aynı anahtarlarla bir sözlük dosyası açın,
 *   3) src/i18n/dictionaries.ts içine bağlayın.
 */
export const locales = ['tr', 'en', 'de', 'fr', 'ru'] as const;

export type Locale = (typeof locales)[number];

/** Tarayıcı dili eşleşmezse açılacak dil (yurt dışı hasta ağırlıklı olduğu için İngilizce). */
export const defaultLocale: Locale = 'en';

export interface LocaleMeta {
  /** Dil seçicide görünen ad, kendi dilinde */
  nativeName: string;
  /** Kısa etiket (TR, EN …) */
  short: string;
  /** <html lang> ve hreflang değeri */
  htmlLang: string;
  /** Open Graph yerel kodu */
  ogLocale: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  tr: { nativeName: 'Türkçe', short: 'TR', htmlLang: 'tr-TR', ogLocale: 'tr_TR' },
  en: { nativeName: 'English', short: 'EN', htmlLang: 'en-GB', ogLocale: 'en_GB' },
  de: { nativeName: 'Deutsch', short: 'DE', htmlLang: 'de-DE', ogLocale: 'de_DE' },
  fr: { nativeName: 'Français', short: 'FR', htmlLang: 'fr-FR', ogLocale: 'fr_FR' },
  ru: { nativeName: 'Русский', short: 'RU', htmlLang: 'ru-RU', ogLocale: 'ru_RU' },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}
