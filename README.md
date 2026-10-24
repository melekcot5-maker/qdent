# Q Dent — Quality Dental Center

Ölüdeniz'deki Q Dent kliniğinin çok dilli (TR · EN · DE · FR · RU) kurumsal tanıtım sitesi.
[Astro](https://astro.build) ile statik site olarak üretilir; sunucu ya da veritabanı gerektirmez.

## Komutlar

| Komut               | Ne yapar                                                        |
| ------------------- | --------------------------------------------------------------- |
| `npm install`       | Bağımlılıkları kurar (ilk seferde)                              |
| `npm run dev`       | Geliştirme sunucusu → http://localhost:4321                     |
| `npm run check`     | Tip ve dil sözlüğü kontrolü (eksik çeviri varsa hata verir)     |
| `npm run build`     | Yayına hazır siteyi `dist/` klasörüne üretir                    |
| `npm run preview`   | Üretilen siteyi yerelde açar                                    |
| `npm run brand:logo`| Logodan şeffaf logo, favicon ve paylaşım görselini yeniden üretir |

## Klasör yapısı

```
src/
  config/site.ts          ← Klinik bilgileri: telefon, adres, saatler, hekimler, sosyal medya
  i18n/
    config.ts             ← Diller ve varsayılan dil
    types.ts              ← Tüm dillerin uyması gereken sözlük şekli
    locales/tr|en|de|fr|ru.ts ← Sitedeki BÜTÜN metinler (dil başına bir dosya)
  data/treatments.ts      ← Tedavi listesi: sıra, ikon, görsel
  assets/
    brand/                ← Logo dosyaları (scripts/prepare-brand.mjs üretir)
    images/               ← Fotoğraflar (şu an yer tutucu)
  styles/
    tokens.css            ← Renk, yazı tipi, boşluk, köşe, hareket değerleri
    global.css            ← Butonlar, form alanları, yerleşim, animasyonlar
  components/
    layout/               ← Üst menü, alt bilgi, dil seçici, açılış perdesi, SEO
    home/                 ← Ana sayfa bölümleri
    ui/                   ← Ortak parçalar (kart, ikon, sayfa başlığı, çağrı alanı …)
    contact/              ← İletişim formu
  pages/
    index.astro           ← Ziyaretçiyi tarayıcı diline yönlendirir
    [lang]/…              ← Her sayfa 5 dilde otomatik üretilir
  scripts/main.ts         ← Menü, kaydırma efektleri, dil hatırlama
brand/source/             ← Orijinal logo dosyaları
public/                   ← Favicon, robots.txt, paylaşım görseli
```

## Sık yapılan değişiklikler

**Bir metni değiştirmek** — `src/i18n/locales/` altındaki ilgili dil dosyasını açın, metni değiştirin.
Her dil ayrı dosyadadır; bir dilde anahtar eksik kalırsa `npm run check` hangi dosyada olduğunu söyler.

**Telefon, adres, çalışma saati, hekim** — yalnızca `src/config/site.ts`. Üst menü, alt bilgi,
iletişim sayfası, WhatsApp bağlantıları ve Google için yapılandırılmış veri buradan beslenir.

**Fotoğraf değiştirmek** — `src/assets/images/` içindeki dosyayı aynı adla değiştirin.
Astro boyutlandırma ve WebP dönüşümünü kendisi yapar; büyük (2000px+) orijinal koymak yeterlidir.
Tedavi sayfalarının görselleri `src/data/treatments.ts` içinde eşleştirilir.

**Yeni tedavi eklemek** — `src/data/treatments.ts` listesine kayıt ekleyin, sonra beş dil dosyasında
`treatments.items` altına aynı anahtarla metni yazın. Sayfa, menü, alt bilgi ve form listesi kendiliğinden güncellenir.

**Renk / yazı tipi** — `src/styles/tokens.css`. Bileşenler yalnızca bu değişkenleri kullanır.

**Yeni dil** — `src/i18n/config.ts` içine ekleyin, `locales/` altına sözlük açın, `src/i18n/index.ts`
içinde bağlayın, `astro.config.mjs` içindeki site haritası dil listesine ekleyin.

## İletişim formu

Form veritabanı kullanmaz; [Web3Forms](https://web3forms.com) iletiyi doğrudan e-postaya gönderir.

1. web3forms.com → `info@qclinicturkey.com` ile ücretsiz erişim anahtarı alın.
2. Proje kökünde `.env.example` dosyasını `.env` adıyla kopyalayın, anahtarı `PUBLIC_WEB3FORMS_KEY=` satırına yazın.
3. `npm run build` ile yeniden üretin. Barındırma servisinde (Netlify/Vercel) aynı değişkeni ortam değişkeni olarak tanımlayın.

Anahtar tanımlı değilken form, ziyaretçiye WhatsApp/e-posta ile ulaşmasını söyleyen bir uyarı gösterir.

## Yayınlama

`npm run build` sonrası oluşan `dist/` klasörü herhangi bir statik barındırmaya yüklenebilir
(Netlify, Vercel, Cloudflare Pages ya da klasik hosting). Alan adı `astro.config.mjs` → `site`
alanında tanımlıdır (`https://www.qclinicturkey.com`); değişirse orayı ve `public/robots.txt` dosyasını güncelleyin.

## Yayından önce tamamlanacaklar

- [ ] **Fotoğraflar**: `src/assets/images/` altındakiler Unsplash'ten alınmış geçici görsellerdir (aşağıda kaynaklar). Klinik, hekim ve önce/sonra fotoğraflarıyla değiştirilmeli.
- [ ] **Hekim fotoğrafları**: Hakkımızda sayfasında baş harfli yer tutucular var.
- [ ] **Önce / sonra galerisi**: Galeri sayfasında "Yakında" kutuları var; hasta onaylı görseller eklenecek.
- [ ] **Tedavi metinleri ve süreler**: Genel bilgi olarak yazıldı; hekim tarafından gözden geçirilmeli.
- [ ] **Çeviriler**: DE / FR / RU metinleri ana dili bu olan biri tarafından okunmalı.
- [ ] **Gizlilik Politikası**: Taslaktır; KVKK/GDPR için hukuk danışmanına onaylatılmalı.
- [ ] **Çalışma saatleri**: Google kaydındaki saatler kullanıldı (Pzt 09:00, Sal–Cum 09:30, Cmt 10:00 açılış, 18:00 kapanış; Pazar kapalı). Eski sitede "her gün 08:30–21:00" yazıyor — doğrusu teyit edilmeli.
- [ ] **Vektör logo**: SVG/AI dosyası gelirse `brand/source/` altına konup doğrudan kullanılmalı.
- [ ] **Web3Forms anahtarı** (yukarıya bakın).

## Geçici görsel kaynakları (Unsplash Lisansı)

| Dosya                 | Fotoğrafçı                  | Bağlantı |
| --------------------- | --------------------------- | -------- |
| `oludeniz-bay.jpg`    | My Creative Ajans           | https://unsplash.com/photos/ugOeqo4TKZg |
| `oludeniz-coast.jpg`  | My Creative Ajans           | https://unsplash.com/photos/aR69xO6IwbY |
| `clinic-suite.jpg`    | Ozkan Guner                 | https://unsplash.com/photos/aFqSRokmw2E |
| `clinic-room.jpg`     | Ozkan Guner                 | https://unsplash.com/photos/AQG6C_xYEpA |
| `treatment-care.jpg`  | Shedrack Salami             | https://unsplash.com/photos/7lBJaJpS3z4 |
| `smile-portrait.jpg`  | Katsiaryna Endruszkiewicz   | https://unsplash.com/photos/TiGLivtBrF4 |
