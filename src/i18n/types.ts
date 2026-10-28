import type { TreatmentSlug } from '@/data/treatments';

/**
 * Tüm dillerin uyması gereken sözlük şekli. Bir dilde anahtar eksik ya da fazla
 * olursa `npm run check` / `npm run build` hata verir; böylece diller birbirinden
 * kopamaz.
 */

export interface Meta {
  title: string;
  description: string;
}

export interface TitledText {
  title: string;
  body: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface TreatmentContent {
  name: string;
  /** Kartlarda görünen tek cümlelik özet */
  short: string;
  /** Detay sayfası giriş paragrafları */
  intro: string[];
  benefits: string[];
  facts: {
    duration: string;
    visits: string;
  };
  faq: Faq[];
}

export interface Dictionary {
  meta: Meta & { siteName: string };

  nav: {
    home: string;
    about: string;
    treatments: string;
    gallery: string;
    contact: string;
    cta: string;
    menu: string;
    close: string;
    language: string;
    skipToContent: string;
  };

  common: {
    whatsapp: string;
    whatsappMessage: string;
    call: string;
    email: string;
    directions: string;
    learnMore: string;
    allTreatments: string;
    address: string;
    phone: string;
    landline: string;
    followUs: string;
    breadcrumbHome: string;
  };

  home: {
    meta: Meta;
    hero: {
      eyebrow: string;
      titleTop: string;
      titleAccent: string;
      titleBottom: string;
      lead: string;
      primaryCta: string;
      secondaryCta: string;
      experienceBadge: string;
    };
    marquee: string[];
    intro: {
      eyebrow: string;
      title: string;
      body: string[];
      cta: string;
    };
    stats: {
      experience: string;
      dentists: string;
      languages: string;
      treatments: string;
    };
    treatments: {
      eyebrow: string;
      title: string;
      lead: string;
    };
    why: {
      eyebrow: string;
      title: string;
      items: TitledText[];
    };
    journey: {
      eyebrow: string;
      title: string;
      lead: string;
      steps: TitledText[];
    };
    location: {
      eyebrow: string;
      title: string;
      body: string;
      points: string[];
      cta: string;
    };
    cta: {
      title: string;
      body: string;
      form: string;
    };
  };

  about: {
    meta: Meta;
    hero: { eyebrow: string; title: string; lead: string };
    story: { eyebrow: string; title: string; body: string[] };
    values: { eyebrow: string; title: string; items: TitledText[] };
    team: {
      eyebrow: string;
      title: string;
      lead: string;
      photoSoon: string;
      roles: { dentist: string; manager: string; assistant: string };
      soon: string;
      labels: { education: string; journey: string; credentials: string };
      profiles: {
        [id: string]:
          | {
              /** Kartın başındaki tek cümlelik alıntı */
              intro: string;
              education: string;
              /** Tam biyografi paragrafları */
              about: string[];
              /** Yolculuk çizgisi adımları */
              journey: { title: string; text: string }[];
              /**
               * Sahip olunan belgeler ve alınan eğitimler. Yönetmelik gereği uzmanlık dalı gibi
               * görünmemeli: "… eğitimi" biçiminde yazılır, ayrı etiket/rozet olarak gösterilmez.
               */
              credentials: string[];
            }
          | undefined;
      };
    };
  };

  treatments: {
    meta: Meta;
    hero: { eyebrow: string; title: string; lead: string };
    detail: {
      duration: string;
      visits: string;
      benefitsTitle: string;
      processTitle: string;
      faqTitle: string;
      relatedTitle: string;
      ctaTitle: string;
      ctaBody: string;
      disclaimer: string;
    };
    items: Record<TreatmentSlug, TreatmentContent>;
  };

  gallery: {
    meta: Meta;
    hero: { eyebrow: string; title: string; lead: string };
    clinicTitle: string;
    resultsTitle: string;
    resultsLead: string;
    /** Yönetmeliğin önce/sonra görsellerinde zorunlu tuttuğu uyarı cümlesi */
    resultsNote: string;
    before: string;
    after: string;
    caseDentist: string;
    caseTreated: string;
    casePublished: string;
    /** Ayrı tedavi sayfası olmayan galeri vakalarının adları */
    extraCases: { bonding: string };
    sliderLabel: string;
    /** Klinik fotoğraflarının altyazıları; galeri dışında görsellerin alt metni olarak da kullanılır */
    captions: {
      facade: string;
      entrance: string;
      reception: string;
      lounge: string;
      refreshments: string;
      treatmentRoom: string;
      digitalScan: string;
      xray: string;
    };
  };

  contact: {
    meta: Meta;
    hero: { eyebrow: string; title: string; lead: string };
    infoTitle: string;
    mapTitle: string;
    form: {
      title: string;
      lead: string;
      name: string;
      email: string;
      phone: string;
      phoneHint: string;
      country: string;
      treatment: string;
      treatmentPlaceholder: string;
      treatmentOther: string;
      message: string;
      messagePlaceholder: string;
      consent: string;
      consentLink: string;
      submit: string;
      successTitle: string;
      successBody: string;
    };
  };

  /** Çerez bildirimi, tercih paneli ve izne bağlı harici içerik yer tutucusu */
  consent: {
    banner: { title: string; text: string; accept: string; reject: string; settings: string; policy: string };
    dialog: {
      title: string;
      intro: string;
      necessaryTitle: string;
      necessaryBody: string;
      alwaysOn: string;
      externalTitle: string;
      externalBody: string;
      save: string;
      acceptAll: string;
      rejectAll: string;
      close: string;
    };
    embed: { title: string; body: string; load: string; open: string };
  };

  notFound: {
    meta: Meta;
    title: string;
    body: string;
    cta: string;
  };

  footer: {
    tagline: string;
    explore: string;
    treatments: string;
    contact: string;
    rights: string;
    kvkk: string;
    patientRights: string;
    cookies: string;
    /** Tercih panelini yeniden açan bağlantı */
    cookiePrefs: string;
    /** Yönetmelik: sitede son güncelleme tarihi ve editör iletişim bilgisi bulunmalı */
    updated: string;
    editor: string;
  };
}
