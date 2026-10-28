import type { Dictionary } from '../types';

/*
 * Metinler, Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik'e
 * (RG 12.11.2025, sayı 33075) göre yazıldı. Yeni metin eklerken:
 * - ücret, indirim, "ücretsiz", kampanya ya da promosyon bilgisi yazmayın;
 * - "en iyi", "premium", "garanti", "ağrısız", "kalıcı çözüm" gibi üstünlük veya kesin sonuç ifadeleri kullanmayın;
 * - hasta yorumu, puanı, teşekkürü ya da memnuniyet ifadesi eklemeyin;
 * - hekimler uzman değilse "uzman", uzmanlık dalı adı (endodonti, periodontoloji, implantoloji…) kullanmayın;
 * - fotoğraf/röntgenle uzaktan değerlendirme vaat etmeyin.
 */
const tr: Dictionary = {
  meta: {
    siteName: 'Q Dent — Quality Dental Center',
    title: 'Q Dent | Ölüdeniz Diş Kliniği',
    description:
      'Ölüdeniz, Fethiye’de implant, gülüş tasarımı, porselen veneer, zirkonyum kaplama, kanal ve diş eti tedavileri. Muayene sonrası kişiye özel tedavi planı.',
  },

  nav: {
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    treatments: 'Tedaviler',
    gallery: 'Galeri',
    contact: 'İletişim',
    cta: 'Randevu Al',
    menu: 'Menü',
    close: 'Kapat',
    language: 'Dil',
    skipToContent: 'İçeriğe geç',
  },

  common: {
    whatsapp: 'WhatsApp',
    whatsappMessage: 'Merhaba, randevu ve tedaviler hakkında bilgi almak istiyorum.',
    call: 'Hemen Ara',
    email: 'E-posta',
    directions: 'Yol Tarifi Al',
    learnMore: 'Detayları incele',
    allTreatments: 'Tüm tedaviler',
    address: 'Adres',
    phone: 'Mobil / WhatsApp',
    landline: 'Sabit Hat',
    hours: 'Çalışma Saatleri',
    closed: 'Kapalı',
    today: 'Bugün',
    followUs: 'Bizi takip edin',
    breadcrumbHome: 'Ana Sayfa',
  },

  home: {
    meta: {
      title: 'Q Dent | Ölüdeniz, Fethiye Diş Kliniği',
      description:
        'Ölüdeniz’de implant, gülüş tasarımı, estetik diş tedavileri, kanal ve diş eti tedavisi. Muayene sonrası kişiye özel, yazılı tedavi planı.',
    },
    hero: {
      eyebrow: 'Ölüdeniz · Fethiye',
      titleTop: 'Profesyonel ve güvenilir',
      titleAccent: 'kalite',
      titleBottom: 'standardında bakım.',
      lead: 'Bilgi ve deneyimi güncel teknolojiyle birleştiriyoruz. Ölüdeniz’deki kliniğimizde her adımı önceden anlatır, acele etmeden ilerleriz.',
      primaryCta: 'WhatsApp’tan Yazın',
      secondaryCta: 'Tedavileri Keşfedin',
      experienceBadge: 'yıllık deneyim',
    },
    marquee: ['Diş İmplantı', 'Gülüş Tasarımı', 'Porselen Veneer', 'Zirkonyum Kaplama', 'Diş Beyazlatma', 'Şeffaf Plak'],
    intro: {
      eyebrow: 'Q Dent’e hoş geldiniz',
      title: 'Her gülüş, özenle tasarlanmış bir imzadır.',
      body: [
        'Q Dent, Ölüdeniz’de modern diş hekimliğini sakin ve samimi bir ortamla buluşturan bir kliniktir. Her tedaviye ayrıntılı bir muayene ve sizi dinleyerek başlar, yapacağımız işlemi yapmadan önce anlatırız.',
        'Diş hekimliğini yalnızca teknik bir iş değil, insan odaklı bir sorumluluk olarak görüyoruz. Tedavi planını yüz hatlarınızı, diş yapınızı ve beklentinizi birlikte değerlendirerek hazırlarız.',
      ],
      cta: 'Kliniğimizi tanıyın',
    },
    stats: {
      experience: 'Yıllık deneyim',
      dentists: 'Diş hekimi',
      languages: 'Dilde iletişim',
      treatments: 'Tedavi alanı',
    },
    treatments: {
      eyebrow: 'Tedavilerimiz',
      title: 'Size özel, uçtan uca diş tedavileri',
      lead: 'Tek bir dişten tüm gülüş tasarımına kadar, her tedavi muayene ve dijital planlamayla başlar.',
    },
    why: {
      eyebrow: 'Neden Q Dent',
      title: 'Kalite, adımızın ilk harfi.',
      items: [
        {
          title: 'Kişiye özel planlama',
          body: 'Muayene sonrasında diş yapınıza ve beklentinize göre hazırlanan, yazılı tedavi planı.',
        },
        {
          title: 'Aynı hekimle süreç',
          body: 'Muayeneden kontrollere kadar her aşamada aynı hekimle ilerlersiniz.',
        },
        {
          title: 'Konfor ve hijyen',
          body: 'Sterilizasyon protokollerine titizlikle uyulan, sakin ve ferah bir klinik ortamı.',
        },
        {
          title: 'Beş dilde iletişim',
          body: 'Türkçe, İngilizce, Almanca, Fransızca ve Rusça iletişim; tedavi sonrası kontrollerin planlanması.',
        },
      ],
    },
    journey: {
      eyebrow: 'Tedavi süreci',
      title: 'İlk mesajdan kontrollere',
      lead: 'Her adımı önceden anlatıyor, süreci sade ve öngörülebilir tutuyoruz.',
      steps: [
        { title: 'İletişim', body: 'WhatsApp, telefon veya form üzerinden bize ulaşın; randevunuzu birlikte planlayalım.' },
        { title: 'Muayene', body: 'Klinikte muayene ve gerekli görüntülemelerin ardından seçenekler ve süreler yazılı olarak netleşir.' },
        { title: 'Tedavi', body: 'Her adım öncesinde bilgilendirilir, onayınız alınarak ilerlenir.' },
        { title: 'Kontrol', body: 'Tedavi sonrası kontrolleriniz hekiminizle birlikte planlanır.' },
      ],
    },
    location: {
      eyebrow: 'Ölüdeniz · Fethiye',
      title: 'Kliniğimizin konumu',
      body: 'Kliniğimiz Ölüdeniz’de, Atatürk Caddesi üzerinde yer alıyor. Haritadan konumumuzu görüntüleyebilir, yol tarifi alabilirsiniz.',
      points: ['Ölüdeniz merkezinde, Atatürk Caddesi üzerinde', 'Dalaman Havalimanı’na yaklaşık 1 saat', 'Pazartesi–Cumartesi açık'],
      cta: 'Konumu görüntüle',
    },
    cta: {
      title: 'Randevu ve sorularınız için bize yazın.',
      body: 'WhatsApp, telefon veya form üzerinden ulaşabilirsiniz; ekibimiz en kısa sürede dönüş yapar.',
      form: 'Formu doldurun',
    },
  },

  about: {
    meta: {
      title: 'Hakkımızda | Q Dent Ölüdeniz',
      description: 'Q Dent Quality Dental Center: Ölüdeniz’de ağız ve diş sağlığı hizmetleri. Ekibimiz, değerlerimiz ve klinik anlayışımız.',
    },
    hero: {
      eyebrow: 'Hakkımızda',
      title: 'Estetiği bilimle, özeni samimiyetle buluşturuyoruz.',
      lead: 'Q Dent, Ölüdeniz’de yerli ve yabancı hastalara şeffaf ve konforlu diş hekimliği hizmeti sunmak için kuruldu.',
    },
    story: {
      eyebrow: 'Hikâyemiz',
      title: 'Bir ilkeyle kurulan klinik',
      body: [
        'Q harfi bizim için bir kısaltmadan fazlası: Quality. Kliniğimizi kurarken tek bir ilkeden yola çıktık: Her hastaya, kendi ailemize göstereceğimiz özeni göstermek.',
        'Bugün Ölüdeniz’de, kanal ve diş eti tedavisinden implanta, gülüş tasarımına kadar geniş bir yelpazede hizmet veriyoruz. Her planı hastamızla birlikte, acele etmeden ve açıkça konuşarak oluşturuyoruz.',
        'Fethiye’de yaşayan hastalarımızın yanı sıra bölgeyi ziyaret eden yabancı hastalara da kendi dillerinde hizmet veriyoruz.',
      ],
    },
    values: {
      eyebrow: 'Değerlerimiz',
      title: 'Bizi biz yapan ilkeler',
      items: [
        { title: 'Şeffaflık', body: 'Tedavi seçenekleri, süre ve ücret bilgisi tedaviye başlamadan önce yazılı olarak paylaşılır.' },
        { title: 'Doğallık', body: 'Yüzünüzle uyumlu, size ait görünen sonuçlar hedefleriz.' },
        { title: 'Uzun vadeli bakış', body: 'Bilimsel olarak kabul görmüş materyal ve yöntemlerle, ağız sağlığınızı uzun vadede gözeterek planlarız.' },
        { title: 'Kalite', body: 'Güncel ekipman ve titizlikle uygulanan sterilizasyon ve klinik protokolleri.' },
        { title: 'Güven', body: 'Her adımı önceden anlatır, onayınızı almadan işleme başlamayız.' },
        { title: 'Tecrübe', body: 'Hekimlerimiz yıllardır Fethiye’de hasta kabul ediyor.' },
      ],
    },
    team: {
      eyebrow: 'Ekibimiz',
      title: 'Sizi karşılayan ekip',
      lead: 'Tedaviniz boyunca sizi tanıyan, sizinle aynı dili konuşan bir ekip.',
      photoSoon: 'Fotoğraf yakında',
      roles: { dentist: 'Diş Hekimi', manager: 'Yönetici', assistant: 'Dental Asistan' },
      soon: 'Biyografi yakında',
      labels: { education: 'Eğitim', journey: 'Yolculuk', credentials: 'Belgeler ve eğitimler' },
      profiles: {
        dilara: {
          intro: 'Diş hekimliğini yalnızca teknik bir iş değil, insan odaklı bir sorumluluk olarak görüyor.',
          education: 'Van Yüzüncü Yıl Üniversitesi · Diş Hekimliği Fakültesi',
          about: [
            'Van Yüzüncü Yıl Üniversitesi Diş Hekimliği Fakültesi’nden mezun olduktan sonra çeşitli kliniklerde çalışarak hasta iletişimi ve tedavi planlaması başta olmak üzere birçok alanda deneyim kazandı.',
            'Ardından kimseyi tanımadığı bir şehir olan Fethiye’ye yerleşerek kendi kliniğini açtı. On yıldır Fethiye’de hasta kabul ediyor.',
            'Hasta iletişimine ve etik değerlere önem veriyor; her tedavi adımını hastasıyla birlikte planlıyor.',
          ],
          journey: [
            { title: 'Eğitim', text: 'Hatay Fen Lisesi, ardından Van Yüzüncü Yıl Üniversitesi Diş Hekimliği Fakültesi' },
            { title: 'Deneyim', text: 'Çeşitli kliniklerde hasta iletişimi ve tedavi planlaması deneyimi' },
            { title: 'Fethiye', text: 'Kendi kliniğini açtı' },
            { title: 'Bugün', text: 'On yıldır Fethiye’de hasta kabul ediyor' },
          ],
          credentials: ['İmplant cerrahisi eğitimi (sertifikalı)', 'Estetik diş hekimliği eğitimi (sertifikalı)'],
        },
        elif: {
          intro: 'Her tedavi adımını büyük bir titizlik ve hassasiyetle yürütmeyi ilke ediniyor.',
          education: 'Zonguldak Bülent Ecevit Üniversitesi · Diş Hekimliği Fakültesi',
          about: [
            'Zonguldak Bülent Ecevit Üniversitesi Diş Hekimliği Fakültesi mezunu. Mesleki gelişimini ulusal ve uluslararası platformlarda sürdürüyor; Almanya’nın Augsburg kentindeki stajında farklı klinik yaklaşımlar ve modern tedavi protokolleri konusunda deneyim kazandı.',
            'Hastalarına bütüncül çözümler sunabilmek için multidisipliner bir yaklaşımla çalışıyor. Gülüş tasarımı, estetik dolgu ve porselen/zirkonyum kaplama gibi estetik tedavilerde diş dokusunu korumayı gözeten güncel teknikler uyguluyor.',
            'Kanal tedavisi konusunda ileri düzey eğitimler alarak bilgisini güncel tutuyor. Q Dent’te diş hekimi olarak hasta kabul ediyor.',
          ],
          journey: [
            { title: 'Eğitim', text: 'Zonguldak Bülent Ecevit Üniversitesi Diş Hekimliği Fakültesi' },
            { title: 'Staj', text: 'Augsburg, Almanya: farklı klinik yaklaşımlar ve modern tedavi protokolleri' },
            { title: 'Gelişim', text: 'Ulusal ve uluslararası platformlarda mesleki eğitimler' },
            { title: 'Bugün', text: 'Q Dent’te diş hekimi' },
          ],
          credentials: [
            'Kanal tedavisi ileri düzey eğitimleri',
            'Ulusal ve uluslararası mesleki gelişim eğitimleri',
            'Augsburg (Almanya) klinik stajı',
          ],
        },
      },
    },
  },

  treatments: {
    meta: {
      title: 'Tedaviler | Q Dent Ölüdeniz',
      description: 'İmplant, gülüş tasarımı, porselen veneer, zirkonyum, diş beyazlatma, şeffaf plak, kanal ve diş eti tedavileri hakkında bilgi.',
    },
    hero: {
      eyebrow: 'Tedaviler',
      title: 'Gülüşünüz için doğru tedavi',
      lead: 'Her tedavi, ayrıntılı bir muayene ve size özel bir planla başlar. Aşağıdan ilgilendiğiniz tedaviyi seçerek ayrıntıları inceleyebilirsiniz.',
    },
    detail: {
      duration: 'Tedavi süresi',
      visits: 'Seans',
      benefitsTitle: 'Tedavinin amacı',
      processTitle: 'Süreç nasıl işler?',
      faqTitle: 'Sık sorulan sorular',
      relatedTitle: 'Diğer tedaviler',
      ctaTitle: 'Bu tedavi size uygun mu?',
      ctaBody: 'Tedavinin size uygun olup olmadığına muayene sonrasında hekiminiz karar verir. Randevu için bize yazın ya da arayın.',
      disclaimer: 'Süreler genel bilgi amaçlıdır; kesin plan muayene sonrası hekiminiz tarafından belirlenir. Tedavi sonuçları kişiden kişiye değişebilir.',
    },
    items: {
      'dental-implants': {
        name: 'Diş İmplantı',
        short: 'Eksik dişlerin yerine çene kemiğine yerleştirilen yapay diş kökü ve üzerine yapılan kron.',
        intro: [
          'İmplant, kaybedilen dişin kökünün yerini alan titanyum bir vidadır. Kemikle kaynaştıktan sonra üzerine yerleştirilen kron ile görünümün ve çiğneme işlevinin yeniden sağlanması amaçlanır.',
          'Tek diş eksikliğinden tam dişsizliğe kadar, kemik yapınız muayene ve röntgenle değerlendirilerek dijital olarak planlanır.',
        ],
        benefits: [
          'Komşu dişlere dokunmadan eksik dişin yerine konması',
          'Çiğneme ve konuşma işlevinin desteklenmesi',
          'Diş eksikliğine bağlı kemik kaybının yavaşlatılmasına yardımcı olması',
          'Düzenli bakım ve kontrollerle uzun süre kullanılabilmesi',
        ],
        facts: { duration: '2 aşama (3–6 ay arayla)', visits: '2–3' },
        faq: [
          {
            q: 'İmplant ağrılı bir işlem mi?',
            a: 'İşlem lokal anestezi altında yapılır; çoğu hasta sonrasındaki hassasiyeti basit ağrı kesicilerle geçirir.',
          },
          {
            q: 'Herkese implant yapılabilir mi?',
            a: 'Kemik yapısı ve genel sağlık durumu muayene ve röntgenle değerlendirilir; gerekirse kemik desteği planlanır.',
          },
        ],
      },
      'smile-design': {
        name: 'Gülüş Tasarımı',
        short: 'Diş rengi, formu ve diş eti çizgisinin yüzünüzle birlikte planlandığı estetik tedavi planı.',
        intro: [
          'Gülüş tasarımı; dişlerin rengini, formunu, boyunu ve diş eti çizgisini yüzünüzle birlikte ele alan kapsamlı bir estetik planlamadır.',
          'Dijital fotoğraf ve ölçülerle hazırlanan tasarımı tedavi başlamadan önce birlikte değerlendiririz.',
        ],
        benefits: [
          'Diş rengi, formu ve diş eti çizgisinin birlikte değerlendirilmesi',
          'Tedavi öncesi dijital önizleme',
          'Gerektiğinde veneer, zirkonyum ve beyazlatmanın birlikte planlanması',
          'Planın uygulamadan önce hastayla birlikte onaylanması',
        ],
        facts: { duration: '5–10 gün', visits: '3–4' },
        faq: [
          {
            q: 'Hollywood Smile ile aynı şey mi?',
            a: 'Hollywood Smile, tüm ön dişleri kapsayan kapsamlı bir uygulamadır; gülüş tasarımı ise her hastaya göre farklı planlanır ve her zaman bu kadar kapsamlı olması gerekmez.',
          },
          { q: 'Sonuç yapay görünür mü?', a: 'Renk ve form yüzünüze göre seçilir; amaç doğal bir görünümdür. Sonuç kişiden kişiye değişebilir.' },
        ],
      },
      'porcelain-veneers': {
        name: 'Porselen Veneer',
        short: 'Dişin ön yüzüne yapıştırılan ince porselen katmanlarla renk ve form düzeltmesi.',
        intro: [
          'Yaprak porselen (laminate veneer), dişin ön yüzüne yapıştırılan çok ince porselen katmanlardır. Renk, şekil ve küçük aralık sorunlarını sınırlı aşındırmayla düzeltmek için kullanılır.',
          'Işığı doğal mineye benzer şekilde geçiren bir yapıya sahiptir.',
        ],
        benefits: [
          'Kaplamaya göre daha az diş aşındırması',
          'Doğal dişe benzer ışık geçirgenliği',
          'Porselen yüzeyin lekelenmeye dirençli olması',
          'Renk, form ve küçük aralık sorunlarında kullanılabilmesi',
        ],
        facts: { duration: '5–7 gün', visits: '2–3' },
        faq: [
          { q: 'Veneer ne kadar dayanır?', a: 'Ömrü ağız bakımına, alışkanlıklara ve düzenli kontrollere göre değişir; iyi bakımla uzun yıllar kullanılabilir.' },
          { q: 'Dişlerim çok aşındırılır mı?', a: 'Veneer, kaplamalara göre daha az aşındırma gerektirir; miktar muayenede netleşir.' },
        ],
      },
      'zirconia-crowns': {
        name: 'Zirkonyum Kaplama',
        short: 'Metal alt yapı içermeyen, dayanıklı seramik kaplamalar.',
        intro: [
          'Zirkonyum, metal alt yapı içermeyen, yüksek dayanımlı bir seramik malzemedir. Diş eti kenarında koyu çizgi oluşturmaz ve doğal dişe yakın bir görünüm sunar.',
          'Hem ön dişlerde estetik amaçlı hem de arka dişlerde çiğneme kuvvetlerine dayanıklı bir seçenek olarak kullanılır.',
        ],
        benefits: [
          'Metal içermemesi',
          'Diş eti kenarında koyu çizgi oluşturmaması',
          'Yüksek kırılma direnci',
          'Doğal dişe yakın renk ve ışık uyumu',
        ],
        facts: { duration: '5–7 gün', visits: '2–3' },
        faq: [
          { q: 'Zirkonyum mu, veneer mi?', a: 'Dişte büyük madde kaybı varsa zirkonyum, yalnızca estetik düzeltme gerekiyorsa veneer öne çıkar; karar muayeneyle verilir.' },
          { q: 'Alerji yapar mı?', a: 'Zirkonyum metal içermediği için alerji riski oldukça düşüktür.' },
        ],
      },
      'teeth-whitening': {
        name: 'Diş Beyazlatma',
        short: 'Hekim kontrolünde, klinikte uygulanan diş beyazlatma.',
        intro: [
          'Klinik tipi beyazlatmada, hekim kontrolünde uygulanan bir jel ve ışık aktivasyonuyla dişlerin renginin açılması amaçlanır. Elde edilen ton kişiden kişiye değişir.',
          'Kahve, çay ve sigara kaynaklı renklenmelerde kullanılan bir yöntemdir. Uygulama öncesinde diş ve diş eti sağlığı kontrol edilir.',
        ],
        benefits: [
          'Genellikle tek seansta uygulanması',
          'Uygulama öncesi diş ve diş eti kontrolü',
          'Hekim kontrolünde uygulama',
          'Gerekirse diğer estetik tedavilerle birlikte planlanabilmesi',
        ],
        facts: { duration: '60–90 dakika', visits: '1' },
        faq: [
          { q: 'Hassasiyet olur mu?', a: 'Geçici ve hafif hassasiyet görülebilir; genellikle 24–48 saat içinde kaybolur.' },
          { q: 'Sonuç ne kadar kalıcı?', a: 'Kalıcılık süresi beslenme ve bakım alışkanlıklarına göre değişir; hekiminiz bakım önerilerinde bulunur.' },
        ],
      },
      'clear-aligners': {
        name: 'Şeffaf Plak',
        short: 'Tel ve braket yerine şeffaf plaklarla diş hizalama.',
        intro: [
          'Şeffaf plak tedavisi, dişleri kişiye özel üretilen ve belirli aralıklarla değiştirilen şeffaf plaklarla kademeli olarak hizalar.',
          'Plaklar çıkarılabilir olduğu için yemek yerken ve diş fırçalarken çıkarılır.',
        ],
        benefits: [
          'Şeffaf yapısı nedeniyle dışarıdan az fark edilmesi',
          'Yemek ve fırçalama için çıkarılabilmesi',
          'Tedavi adımlarının dijital olarak planlanması',
          'Tel ve braket kullanılmaması',
        ],
        facts: { duration: '6–18 ay', visits: 'Düzenli kontroller' },
        faq: [
          { q: 'Günde kaç saat takmam gerekir?', a: 'Tedavinin planlandığı gibi ilerlemesi için genellikle günde 20–22 saat kullanılması önerilir.' },
          { q: 'Kontroller ne sıklıkla yapılır?', a: 'Kontrol aralıkları tedavi planınıza göre hekiminiz tarafından belirlenir.' },
        ],
      },
      'root-canal-treatment': {
        name: 'Kanal Tedavisi',
        short: 'Diş içindeki iltihaplı dokunun temizlenerek dişin korunmasını amaçlayan tedavi.',
        intro: [
          'Kanal tedavisi, dişin içindeki iltihaplı ya da enfekte dokunun temizlenip kanalların doldurulmasıyla dişin korunmasını amaçlar.',
          'Dişin durumuna göre genellikle bir veya birkaç seansta tamamlanır.',
        ],
        benefits: [
          'Doğal dişin korunmasının amaçlanması',
          'İltihap ve enfeksiyon kaynağının temizlenmesi',
          'Seans sayısının dişin durumuna göre planlanması',
          'Gerekirse üzerine kaplama yapılabilmesi',
        ],
        facts: { duration: 'Dişin durumuna göre değişir', visits: '1–2' },
        faq: [
          { q: 'Kanal tedavisi acıtır mı?', a: 'İşlem lokal anestezi altında yapılır. Sonrasında birkaç gün hafif hassasiyet görülebilir.' },
          { q: 'Sonrasında kaplama gerekir mi?', a: 'Dişte madde kaybı fazlaysa dişi korumak için kaplama önerilebilir.' },
        ],
      },
      'gum-treatment': {
        name: 'Diş Eti Tedavisi',
        short: 'Diş eti kanaması, çekilmesi ve iltihabına yönelik tedaviler.',
        intro: [
          'Diş eti kanaması, çekilmesi ya da iltihabı tedavi edilmezse diş kaybına kadar ilerleyebilir. Diş eti tedavileri bu sürecin ilerlemesini durdurmayı amaçlar.',
          'Gerektiğinde diş eti çizgisi estetik olarak düzenlenebilir.',
        ],
        benefits: [
          'Kanama ve iltihabın azaltılması',
          'Diş kaybı riskinin azaltılmasına yardımcı olması',
          'Ağız kokusunun önlenmesine katkı',
          'Diğer tedaviler öncesinde sağlıklı diş eti hedeflenmesi',
        ],
        facts: { duration: 'Diş eti durumuna göre değişir', visits: '1–3' },
        faq: [
          { q: 'Diş eti kanaması normal mi?', a: 'Hayır; düzenli kanama çoğu zaman diş eti hastalığının ilk işaretidir ve muayene gerektirir.' },
          { q: 'Diş eti estetiği nedir?', a: 'Diş eti seviyesinin düzenlenerek daha dengeli bir gülüş çizgisi elde edilmesinin amaçlandığı işlemdir.' },
        ],
      },
    },
  },

  gallery: {
    meta: {
      title: 'Galeri | Q Dent Ölüdeniz',
      description: 'Q Dent kliniğinden kareler: resepsiyon, bekleme salonu, tedavi ve röntgen odaları.',
    },
    hero: {
      eyebrow: 'Galeri',
      title: 'Kliniğimizden kareler',
      lead: 'Resepsiyondan tedavi odalarına kadar kliniğimizi yakından tanıyın.',
    },
    clinicTitle: 'Kliniğimiz',
    resultsTitle: 'Öncesi & Sonrası',
    resultsLead:
      'Kaydırarak karşılaştırın. Görseller kliniğimizde tedavi edilen hastalarımıza aittir; hastalarımızın yazılı onamıyla ve görsel üzerinde düzeltme yapılmadan paylaşılmıştır.',
    resultsNote:
      'Her cerrahi veya girişimsel işlemde sonuçlar kişiden kişiye değişiklik gösterebilir. İşlem öncesinde hekiminizden detaylı görüş almanız önerilir.',
    before: 'Öncesi',
    after: 'Sonrası',
    caseDentist: 'Hekim',
    caseTreated: 'İşlem tarihi',
    casePublished: 'Paylaşım tarihi',
    extraCases: { bonding: 'Bonding' },
    sliderLabel: 'Öncesi ve sonrası karşılaştırması',
    captions: {
      facade: 'Klinik cephesi',
      entrance: 'Giriş',
      reception: 'Resepsiyon',
      lounge: 'Bekleme salonu',
      refreshments: 'İkram köşesi',
      treatmentRoom: 'Tedavi odası',
      digitalScan: 'Dijital ağız içi tarama',
      xray: 'Röntgen odası',
    },
  },

  contact: {
    meta: {
      title: 'İletişim | Q Dent Ölüdeniz',
      description: 'Q Dent ile iletişime geçin: WhatsApp, telefon, e-posta ve Ölüdeniz’deki klinik adresimiz.',
    },
    hero: {
      eyebrow: 'İletişim',
      title: 'Sizi dinlemek için buradayız',
      lead: 'Sorularınızı ve randevu taleplerinizi yazın; ekibimiz en kısa sürede dönüş yapsın.',
    },
    infoTitle: 'İletişim bilgileri',
    mapTitle: 'Bizi ziyaret edin',
    form: {
      title: 'Randevu ve bilgi talebi',
      lead: 'Formu doldurun, size seçtiğiniz dilde dönüş yapalım.',
      name: 'Ad Soyad',
      email: 'E-posta',
      phone: 'Telefon / WhatsApp',
      phoneHint: 'Ülke koduyla birlikte, örn. +90 …',
      country: 'Ülke',
      treatment: 'İlgilendiğiniz tedavi',
      treatmentPlaceholder: 'Seçiniz',
      treatmentOther: 'Emin değilim / Diğer',
      message: 'Mesajınız',
      messagePlaceholder: 'Sorunuzu veya randevu için uygun olduğunuz tarihleri yazabilirsiniz.',
      consent:
        'Mesajımda paylaşabileceğim sağlık bilgileri dahil kişisel verilerimin, talebime dönüş yapılması amacıyla işlenmesine açık rıza veriyorum.',
      consentLink: 'KVKK Aydınlatma Metni',
      submit: 'Talebi Gönder',
      sending: 'Gönderiliyor…',
      successTitle: 'Teşekkür ederiz!',
      successBody: 'Talebiniz bize ulaştı. Ekibimiz en kısa sürede sizinle iletişime geçecek.',
      error: 'Bir sorun oluştu. Lütfen tekrar deneyin ya da bize WhatsApp’tan yazın.',
      notConfigured: 'Form henüz etkinleştirilmedi. Şimdilik bize WhatsApp veya e-posta ile ulaşabilirsiniz.',
      subject: 'Web sitesi — yeni randevu/bilgi talebi',
    },
  },

  consent: {
    banner: {
      title: 'Çerez tercihleri',
      text: 'Sitemizde reklam veya analitik çerezi kullanmıyoruz. İletişim sayfasındaki Google Haritalar yalnızca izin verirseniz yüklenir.',
      accept: 'Kabul Et',
      reject: 'Reddet',
      settings: 'Tercihler',
      policy: 'Çerez Politikası',
    },
    dialog: {
      title: 'Çerez tercihleri',
      intro: 'Hangi içeriklere izin verdiğinizi seçin. Tercihinizi istediğiniz zaman alt bilgideki “Çerez Tercihleri” bağlantısından değiştirebilirsiniz.',
      necessaryTitle: 'Zorunlu',
      necessaryBody: 'Dil ve çerez tercihinizin hatırlanması. Site bunlar olmadan düzgün çalışmaz.',
      alwaysOn: 'Her zaman açık',
      externalTitle: 'Harici içerik: Google Haritalar',
      externalBody: 'İletişim sayfasındaki haritanın gösterilmesi. Google cihazınıza çerez yerleştirebilir ve verilerinizi yurt dışında işleyebilir.',
      save: 'Seçimi kaydet',
      acceptAll: 'Tümünü kabul et',
      rejectAll: 'Tümünü reddet',
      close: 'Kapat',
    },
    embed: {
      title: 'Harita, gizliliğiniz için yüklenmedi',
      body: 'Google Haritalar’ı göstermek için harici içeriğe izin vermeniz gerekir. Google cihazınıza çerez yerleştirebilir.',
      load: 'İzin ver ve haritayı göster',
      open: 'Google Haritalar’da aç',
    },
  },

  notFound: {
    meta: { title: 'Sayfa bulunamadı | Q Dent', description: 'Aradığınız sayfa bulunamadı.' },
    title: 'Bu sayfa bulunamadı',
    body: 'Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.',
    cta: 'Ana sayfaya dön',
  },

  footer: {
    tagline: 'Ölüdeniz’de ağız ve diş sağlığı.',
    explore: 'Keşfedin',
    treatments: 'Tedaviler',
    contact: 'İletişim',
    rights: 'Tüm hakları saklıdır.',
    kvkk: 'KVKK Aydınlatma Metni',
    patientRights: 'Hasta Hakları',
    cookies: 'Çerez Politikası',
    cookiePrefs: 'Çerez Tercihleri',
    updated: 'Son güncelleme',
    editor: 'Site editörü',
  },
};

export default tr;
