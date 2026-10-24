/**
 * Marka dosyalarını üretir (tek seferlik; logo değiştiğinde yeniden çalıştırılır).
 *
 *   npm run brand:logo
 *
 * Girdi : brand/source/logo-blue-on-white.png  (beyaz zemin üzerinde mavi logo)
 * Çıktı : src/assets/brand/logo.png            (şeffaf zemin, marka mavisi)
 *         src/assets/brand/logo-white.png      (şeffaf zemin, beyaz — koyu alanlar için)
 *         src/assets/brand/logo-mark.png       (yalnızca "Q" işareti)
 *         public/favicon-32.png, public/apple-touch-icon.png, public/icon-512.png
 *         public/og-default.jpg                (sosyal medya paylaşım görseli)
 *
 * Vektör (SVG/AI) logo gelirse bu adım yerine doğrudan o dosya kullanılmalıdır.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'brand/source/logo-blue-on-white.png');
const brandDir = path.join(root, 'src/assets/brand');
const publicDir = path.join(root, 'public');

const BRAND = { r: 16, g: 116, b: 162 }; // #1074A2 — logodan ölçülen marka mavisi
const WHITE = { r: 255, g: 255, b: 255 };
const IVORY = '#FAF8F4';

await mkdir(brandDir, { recursive: true });

/**
 * Logonun şekil maskesini çıkarır. Kaynak şeffaf zeminliyse alfa kanalı kullanılır;
 * beyaz zeminliyse mürekkep yoğunluğu kırmızı kanaldan okunur.
 */
async function extractAlpha(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const alpha = Buffer.alloc(info.width * info.height);
  for (let i = 0, p = 0; i < data.length; i += 4, p++) {
    const ink = (255 - data[i]) / (255 - BRAND.r);
    const inkAlpha = Math.max(0, Math.min(1, ink));
    alpha[p] = Math.round((data[i + 3] / 255) * inkAlpha * 255);
  }
  return { alpha, width: info.width, height: info.height };
}

function colorize({ alpha, width, height }, color) {
  const out = Buffer.alloc(width * height * 4);
  for (let p = 0; p < alpha.length; p++) {
    out[p * 4] = color.r;
    out[p * 4 + 1] = color.g;
    out[p * 4 + 2] = color.b;
    out[p * 4 + 3] = alpha[p];
  }
  return sharp(out, { raw: { width, height, channels: 4 } });
}

const mask = await extractAlpha(src);

for (const [name, color] of [
  ['logo.png', BRAND],
  ['logo-white.png', WHITE],
]) {
  const buf = await colorize(mask, color).png().toBuffer();
  await sharp(buf).trim({ threshold: 1 }).png({ compressionLevel: 9 }).toFile(path.join(brandDir, name));
}

// "Q" işareti: kaynak görselde Q'nun bulunduğu bölge; "D" harfi ve alt çizginin başı maskelenir.
const Q = { left: 178, top: 100, width: 330, height: 275 };
const qMask = Buffer.from(mask.alpha);
for (let y = 0; y < mask.height; y++) {
  for (let x = 0; x < mask.width; x++) {
    const inD = x > Q.left + 245 && y < Q.top + 110;
    const inLine = x > Q.left + 305 && y < Q.top + 165;
    if (inD || inLine) qMask[y * mask.width + x] = 0;
  }
}
async function cropMark(color) {
  const full = await colorize({ ...mask, alpha: qMask }, color).png().toBuffer();
  const region = await sharp(full).extract(Q).png().toBuffer();
  return sharp(region).trim({ threshold: 1 }).png().toBuffer();
}
const qMark = await cropMark(WHITE);
await sharp(await cropMark(BRAND)).toFile(path.join(brandDir, 'logo-mark.png'));

/** Mavi zemin üzerinde beyaz Q — favicon ve uygulama ikonları. */
async function appIcon(size, file) {
  const inner = Math.round(size * 0.66);
  const mark = await sharp(qMark).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  const radius = Math.round(size * 0.22);
  const bg = Buffer.from(
    `<svg width="${size}" height="${size}"><rect width="100%" height="100%" rx="${radius}" fill="#1677A3"/></svg>`,
  );
  await sharp(bg).composite([{ input: mark, gravity: 'center' }]).png().toFile(path.join(publicDir, file));
}
await appIcon(32, 'favicon-32.png');
await appIcon(180, 'apple-touch-icon.png');
await appIcon(512, 'icon-512.png');

// Paylaşım görseli 1200×630
const ogLogo = await sharp(path.join(brandDir, 'logo.png')).resize({ width: 620 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: IVORY } })
  .composite([{ input: ogLogo, gravity: 'center' }])
  .jpeg({ quality: 88 })
  .toFile(path.join(publicDir, 'og-default.jpg'));

console.log('Marka dosyaları üretildi.');
