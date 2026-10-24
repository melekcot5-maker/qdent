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
    stay: string;
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
    freeConsultation: string;
    address: string;
    phone: string;
    landline: string;
    hours: string;
    closed: string;
    today: string;
    followUs: string;
    /** "{count}" yer tutucusu yorum sayısıyla değiştirilir */
    googleReviews: string;
    breadcrumbHome: string;
    placeholderImage: string;
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
      scroll: string;
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
      rating: string;
      languages: string;
      consultation: string;
      consultationValue: string;
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
    reviews: {
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
      write: string;
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
    team: { eyebrow: string; title: string; lead: string; dentist: string; photoSoon: string; bios: { dilara?: string; tunay?: string } };
  };

  treatments: {
    meta: Meta;
    hero: { eyebrow: string; title: string; lead: string };
    detail: {
      duration: string;
      visits: string;
      stay: string;
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
    before: string;
    after: string;
    soon: string;
    sample: string;
    sliderLabel: string;
    credit: string;
    captions: { suite: string; room: string; bay: string; coast: string };
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
      sending: string;
      successTitle: string;
      successBody: string;
      error: string;
      notConfigured: string;
      subject: string;
    };
  };

  privacy: {
    meta: Meta;
    title: string;
    updated: string;
    draftNotice: string;
    sections: TitledText[];
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
    privacy: string;
  };
}
