import type { Locale } from '../config';
import type { LegalDictionary } from './types';

import tr from './tr';
import en from './en';
import de from './de';
import fr from './fr';
import ru from './ru';

export type { LegalDictionary, LegalSection } from './types';

const dictionaries: Record<Locale, LegalDictionary> = { tr, en, de, fr, ru };

export function getLegal(locale: Locale): LegalDictionary {
  return dictionaries[locale];
}
