/**
 * Çerez / harici içerik rızası (KVKK Çerez Uygulamaları Rehberi'ne göre: önceden işaretli seçenek yok,
 * "Reddet" "Kabul Et" kadar kolay, tercih her an değiştirilebilir).
 *
 * Tercih yalnızca bu tarayıcıda localStorage "qd-consent" anahtarında tutulur ve 12 ay sonra yeniden
 * sorulur. Rıza verilene kadar `data-embed` kutularındaki iframe'ler (Google Haritalar) hiç yüklenmez.
 */

const KEY = 'qd-consent';
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

interface Consent {
  external: boolean;
  at: string;
}

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as Partial<Consent>;
    if (typeof saved.external !== 'boolean' || !saved.at) return null;
    if (Date.now() - Date.parse(saved.at) > MAX_AGE_MS) return null;
    return { external: saved.external, at: saved.at };
  } catch {
    return null;
  }
}

/** İzne bağlı gömülü içerikleri yükle ya da kaldır. */
function applyEmbeds(allowed: boolean) {
  document.querySelectorAll<HTMLElement>('[data-embed]').forEach((box) => {
    const frame = box.querySelector<HTMLIFrameElement>('iframe[data-embed-src]');
    const placeholder = box.querySelector<HTMLElement>('[data-embed-placeholder]');
    if (!frame) return;
    if (allowed && !frame.getAttribute('src')) frame.setAttribute('src', frame.dataset.embedSrc ?? '');
    if (!allowed) frame.removeAttribute('src');
    frame.hidden = !allowed;
    if (placeholder) placeholder.hidden = allowed;
  });
}

export function initConsent() {
  const banner = document.querySelector<HTMLElement>('[data-consent-banner]');
  const dialog = document.querySelector<HTMLDialogElement>('[data-consent-dialog]');
  const externalToggle = dialog?.querySelector<HTMLInputElement>('[data-consent-external]');

  let current = readConsent();
  applyEmbeds(current?.external ?? false);
  if (banner && !current) banner.hidden = false;

  const save = (external: boolean) => {
    current = { external, at: new Date().toISOString() };
    try {
      localStorage.setItem(KEY, JSON.stringify(current));
    } catch {
      /* depolama kapalıysa tercih yalnızca bu sayfa için geçerli olur */
    }
    applyEmbeds(external);
    if (banner) banner.hidden = true;
    if (dialog?.open) dialog.close();
  };

  const openDialog = () => {
    if (!dialog) return;
    if (externalToggle) externalToggle.checked = current?.external ?? false;
    dialog.showModal();
  };

  document.querySelectorAll<HTMLButtonElement>('[data-consent-choice]').forEach((button) => {
    button.addEventListener('click', () => save(button.dataset.consentChoice === 'accept'));
  });
  document.querySelectorAll<HTMLButtonElement>('[data-consent-open]').forEach((button) => {
    button.addEventListener('click', openDialog);
  });
  dialog?.querySelector('[data-consent-save]')?.addEventListener('click', () => save(externalToggle?.checked ?? false));

  // Harita yer tutucusundaki "İzin ver ve göster" butonu, harici içeriğe açık rıza verir
  document.querySelectorAll<HTMLButtonElement>('[data-embed-allow]').forEach((button) => {
    button.addEventListener('click', () => save(true));
  });
}
