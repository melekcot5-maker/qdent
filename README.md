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

## Sağlık tanıtım mevzuatı

Metinler ve görseller, Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik'e
(RG 12.11.2025, sayı 33075) göre hazırlandı. Yeni metin eklerken `src/i18n/locales/tr.ts` başındaki kurallara uyun.
Özetle sitede şunlar yer almaz:
- ücret, "ücretsiz", indirim ve kampanya bilgisi,
- Google puanı ya da hasta yorumu,
- üstünlük ya da kesin sonuç ifadesi,
- uzman olmayan hekim için uzmanlık dalı adı.

**Önce/sonra vakası eklemek** — `src/data/treatments.ts` içinde vakaya `consent: true`, `publishedOn`, `dentist`
ve `treatedOn` girin. `consent` ve `publishedOn` olmadan vaka görünmez; hekim veya işlem tarihi eksikse derleme
uyarı yazdırır (yönetmelik ikisini de istiyor). Yayımlamadan önce şunlardan emin olun:
- hastanın Ek-1 onam formu imzalı ve klinikte hasta dosyasında (form siteye yüklenmez; Resmî Gazete: https://www.resmigazete.gov.tr/eskiler/2025/11/20251112-2-1.pdf),
- iki fotoğraf aynı ortam ve ışıkta çekilmiş,
- fotoğraflarda rötuş yok.

**Sağlık turizmi** — Uluslararası sağlık turizmi yetki belgesi olmadan yurt dışına yönelik tanıtım yapılamaz
(konaklama/transfer, "tedavi + tatil", hasta yorumu vb.). Belge alınırsa belge sitede yayımlanmalı ve tüm
mecralarda HealthTürkiye logosu kullanılmalıdır.

## İletişim formu

Form veritabanı kullanmaz; [Web3Forms](https://web3forms.com) iletiyi doğrudan e-postaya gönderir.

1. web3forms.com → `info@qdent.com.tr` ile ücretsiz erişim anahtarı alın.
2. Proje kökünde `.env.example` dosyasını `.env` adıyla kopyalayın, anahtarı `PUBLIC_WEB3FORMS_KEY=` satırına yazın.
3. `npm run build` ile yeniden üretin. Barındırma servisinde (Netlify/Vercel) aynı değişkeni ortam değişkeni olarak tanımlayın.

Anahtar tanımlı değilken form, ziyaretçiye WhatsApp/e-posta ile ulaşmasını söyleyen bir uyarı gösterir.

## Yayınlama

`npm run build` sonrası oluşan `dist/` klasörü herhangi bir statik barındırmaya yüklenebilir
(Netlify, Vercel, Cloudflare Pages ya da klasik hosting). Alan adı `astro.config.mjs` → `site`
alanında tanımlıdır (`https://www.qdent.com.tr`); değişirse orayı ve `public/robots.txt` dosyasını güncelleyin.

## Yayından önce tamamlanacaklar

- [ ] **Fotoğraflar**: Klinik fotoğrafları `src/assets/images/clinic/` altında (kliniğin kendi çekimleri). Kalan geçici görsel: ana sayfanın konum bölümündeki `oludeniz-panorama.jpg` (kaynağı ve lisansı teyit edilmeli).
- [ ] **Hekim fotoğrafları**: Hakkımızda sayfasında baş harfli yer tutucular var.
- [ ] **Önce / sonra vakaları**: İmplant, porselen, zirkonyum ve bonding vakaları yayında (onam formları dosyada); her birine işlemi yapan hekim ve işlem tarihi eklenmeli (`npm run build` eksikleri listeler).
- [ ] **Ruhsattaki ad**: Sitedeki kurum adı (`site.ts` → `legalName`) Bakanlık ruhsatındaki ad ve türle birebir aynı olmalı.
- [ ] **Sağlık turizmi yetki belgesi**: Varsa belge ve HealthTürkiye logosu siteye eklenmeli.
- [ ] **Tedavi metinleri ve süreler**: Genel bilgi olarak yazıldı; hekim tarafından gözden geçirilmeli.
- [ ] **Çeviriler**: DE / FR / RU metinleri ana dili bu olan biri tarafından okunmalı.
- [ ] **Yasal metinler**: KVKK Aydınlatma Metni, Çerez Politikası ve Hasta Hakları (`src/i18n/legal/`) hukuk danışmanına onaylatılmalı; veri sorumlusunun resmî unvanı (şahıs/şirket) `site.ts` → `legalName` ile aynı olmalı. Yeni bir harici hizmet (analitik, video, harita vb.) eklenirse çerez politikası ve `src/scripts/consent.ts` güncellenmeli.
- [ ] **Çalışma saatleri**: Sayfalarda gösterilmiyor; yalnızca Google için yapılandırılmış veride (`site.ts` → `hours`, `Seo.astro`) duruyor. Google kaydındaki saatler kullanıldı (Pzt 09:00, Sal–Cum 09:30, Cmt 10:00 açılış, 18:00 kapanış; Pazar kapalı); doğrusu teyit edilmeli.
- [ ] **Vektör logo**: SVG/AI dosyası gelirse `brand/source/` altına konup doğrudan kullanılmalı.
- [ ] **Web3Forms anahtarı** (yukarıya bakın).
