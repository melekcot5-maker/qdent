import type { Meta, TitledText } from '../types';

/**
 * Yasal sayfaların (KVKK, çerez politikası, hasta hakları) metinleri. Uzun oldukları için
 * ana sözlükten ayrı tutulur; ana sözlük gibi her dilde aynı şekle uymak zorundadır.
 *
 * Metinlerde {name}, {address}, {email}, {phone} yer tutucuları kullanılabilir; sayfa bunları
 * src/config/site.ts değerleriyle doldurur, böylece adres/telefon tek yerden güncellenir.
 */

export interface LegalSection {
  title: string;
  /** Paragraflar */
  body?: string[];
  /** Paragraflardan sonra gelen madde listesi */
  items?: string[];
}

export interface LegalPage {
  meta: Meta;
  eyebrow: string;
  title: string;
  lead: string;
  /** "Son güncelleme" etiketi */
  updated: string;
  sections: LegalSection[];
}

export interface StorageRow {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  category: string;
}

export interface LegalDictionary {
  kvkk: LegalPage & {
    /** Sayfa sonundaki çerez politikası yönlendirmesi */
    cookiesNote: string;
  };

  cookies: LegalPage & {
    table: {
      caption: string;
      columns: StorageRow;
      rows: StorageRow[];
    };
    /** Tercih panelini açan buton */
    manage: string;
  };

  patientRights: {
    meta: Meta;
    hero: { eyebrow: string; title: string; lead: string };
    commitment: { eyebrow: string; title: string; body: string[] };
    /** Numaralı hak kartları; numaralar gruplar boyunca kesintisiz devam eder */
    groups: { eyebrow: string; title: string; lead: string; items: TitledText[] }[];
    responsibilities: { eyebrow: string; title: string; lead: string; items: string[] };
    apply: { eyebrow: string; title: string; body: string; items: TitledText[] };
    /** Sayfanın dayandığı mevzuat */
    source: string;
  };
}
