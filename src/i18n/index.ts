import { locales, type Locale } from './config';
import type { Dictionary } from './types';

import tr from './locales/tr';
import en from './locales/en';
import de from './locales/de';
import fr from './locales/fr';
import ru from './locales/ru';

export { defaultLocale, locales, localeMeta, isLocale, type Locale } from './config';
export type { Dictionary } from './types';

const dictionaries: Record<Locale, Dictionary> = { tr, en, de, fr, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/**
 * Dil önekli, sonu "/" ile biten site içi yol üretir.
 *   localizePath('de', 'treatments/dental-implants') → '/de/treatments/dental-implants/'
 *   localizePath('tr')                               → '/tr/'
 */
export function localizePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

/** Bir sayfanın tüm dillerdeki karşılıkları — hreflang ve dil seçici için. */
export function alternatePaths(path = ''): { locale: Locale; href: string }[] {
  return locales.map((locale) => ({ locale, href: localizePath(locale, path) }));
}

/** "{count}" gibi yer tutucuları doldurur. */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? `{${key}}`));
}

/** Her [lang] sayfası için ortak getStaticPaths. */
export function localeStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
