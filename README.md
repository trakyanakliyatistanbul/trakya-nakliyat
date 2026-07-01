# Trakya Nakliyat İstanbul — Web Sitesi

Next.js 15 + TypeScript + Tailwind CSS

---

## Kurulum

### 1. Bağımlılıkları yükle

```bash
cd trakya-nakliyat
npm install
```

### 2. Geliştirme sunucusunu başlat

```bash
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini aç.

---

## Klasör Yapısı

```
src/
├── app/
│   ├── layout.tsx       # Root layout, metadata, Schema.org
│   ├── page.tsx         # Ana sayfa
│   ├── sitemap.ts       # Otomatik sitemap
│   └── robots.ts        # robots.txt
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── StatsBar.tsx
│       ├── WhatsAppStrip.tsx
│       ├── Services.tsx
│       ├── TrustStats.tsx
│       ├── Reviews.tsx        # Carousel (client)
│       ├── MovingStories.tsx
│       ├── FAQ.tsx            # Accordion (client)
│       └── CTASection.tsx
├── data/
│   ├── servicesData.ts
│   ├── trustData.ts
│   ├── reviewsData.ts
│   ├── storiesData.ts
│   └── faqData.ts
├── lib/
│   └── constants.ts     # Telefon, WhatsApp, e-posta vb.
└── types/
    └── index.ts
```

---

## Yapılacaklar

### Görseller
- [ ] `/public/logo.png` — gerçek logo (logo.png olarak kaydet)
- [ ] `/public/arac.png` — kurumsal araç görseli
- [ ] `/public/og-image.jpg` — Open Graph görseli (1200×630)
- [ ] `/public/favicon.ico` — favicon

### İletişim Bilgileri
Güncelleme için: `src/lib/constants.ts`

### Google Entegrasyonları
- [ ] `src/app/layout.tsx` içindeki `verification.google` alanına Search Console kodu ekle
- [ ] Google Analytics 4: `src/app/layout.tsx` içine `<Script>` ile GA4 kodu ekle
- [ ] Google Maps: `src/components/layout/Footer.tsx` içindeki placeholder'ı gerçek embed ile değiştir
- [ ] Google İşletme Profili: `src/components/sections/Reviews.tsx` içindeki `data-href` alanına gerçek URL ekle

---

## Vercel Deploy

### Yöntem 1 — GitHub üzerinden (önerilen)

```bash
# 1. GitHub'a push et
git init
git add .
git commit -m "initial: Trakya Nakliyat İstanbul"
git remote add origin https://github.com/KULLANICI_ADI/trakya-nakliyat.git
git push -u origin main

# 2. vercel.com adresine git
# 3. "Import Project" → GitHub repo seç
# 4. Tek tıkla deploy
```

### Yöntem 2 — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Domain Bağlama
Vercel dashboard → Project Settings → Domains → `trakyanakliyatistanbul.com` ekle

DNS ayarları (domain sağlayıcısında):
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

---

## İleride Eklenecekler (v1.5+)

- `/hizmetler/[slug]` — hizmet detay sayfaları
- `/[bolge]-nakliyat` — ilçe SEO sayfaları  
- `/blog/[slug]` — blog sistemi (Sanity CMS)
- Google Business Profile API — gerçek yorumlar
- Çoklu dil (TR/EN)
