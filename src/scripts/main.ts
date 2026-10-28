/**
 * Sitenin tüm istemci davranışları. Her biri bağımsız küçük bir işlevdir;
 * ilgili öğe sayfada yoksa sessizce atlanır.
 */
import { initConsent } from './consent';

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Kaydırınca başlığın zeminini değiştir. */
function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/** Mobil tam ekran menü. */
function initMobileMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  if (!toggle || !menu) return;

  const setOpen = (open: boolean) => {
    root.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    menu.inert = !open;
  };

  toggle.addEventListener('click', () => setOpen(!root.classList.contains('menu-open')));
  menu.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.classList.contains('menu-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 981px)').addEventListener('change', (e) => e.matches && setOpen(false));
}

/** Dil menüsü: dışarı tıklayınca / Esc ile kapanır; seçilen dil hatırlanır. */
function initLanguage() {
  const menus = document.querySelectorAll<HTMLDetailsElement>('[data-lang-menu]');
  document.addEventListener('click', (e) => {
    menus.forEach((menu) => {
      if (menu.open && !menu.contains(e.target as Node)) menu.open = false;
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') menus.forEach((menu) => (menu.open = false));
  });
  document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]').forEach((link) => {
    link.addEventListener('click', () => {
      try {
        localStorage.setItem('qd-lang', link.dataset.langSwitch ?? '');
      } catch {
        /* depolama kapalıysa tercih hatırlanmaz */
      }
    });
  });
}

/** Görünüme giren öğeleri canlandır. */
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!items.length) return;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  items.forEach((el) => observer.observe(el));
}

/** Hafif paralaks: data-parallax="0.08" → kaydırmanın %8'i kadar kayar. */
function initParallax() {
  if (reduceMotion) return;
  const items = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  if (!items.length) return;
  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    items.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > vh + 200) return;
      const speed = Number(el.dataset.parallax) || 0.08;
      const offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
      // `translate` kullanılır; böylece öğenin kendi transform animasyonlarıyla çakışmaz
      el.style.translate = `0 ${offset.toFixed(1)}px`;
    });
    ticking = false;
  };
  update();
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
}

/** Kartlarda imleci izleyen ışık. */
function initGlow() {
  if (!window.matchMedia('(hover: hover)').matches) return;
  document.querySelectorAll<HTMLElement>('.glow').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });
}

/** Çalışma saatlerinde bugünü işaretle (klinik saat dilimine göre). */
function initOpeningHours() {
  document.querySelectorAll<HTMLElement>('[data-hours]').forEach((list) => {
    const tz = list.dataset.tz || 'Europe/Istanbul';
    const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: tz }).format(new Date());
    const iso = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(weekday) + 1;
    list.querySelector(`[data-day="${iso}"]`)?.classList.add('is-today');
  });
}

initHeader();
initMobileMenu();
initLanguage();
initReveal();
initParallax();
initGlow();
initOpeningHours();
initConsent();
