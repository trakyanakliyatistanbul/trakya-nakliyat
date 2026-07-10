// app/hizmetler/evden-eve-nakliyat/page.tsx
//
// Tasarım notu: Projende hazır bir tasarım token seti (renkler / fontlar) paylaşmadığın için
// aşağıda nakliyat sektörüne uygun, güven odaklı bir palet kullandım:
//   - Koyu lacivert (#0B1522 / #10203A / #1E3A5F): güvenilirlik, kurumsallık
//   - Sıcak amber (#E2793D / #C7642E): CTA'lar ve vurgular için enerji
//   - Kırık beyaz (#FAFAF8) + gri tonlar: içerik alanları
// Mevcut sitende farklı bir palet/font kullanıyorsan, aşağıdaki arbitrary Tailwind
// değerlerini (örn. bg-[#10203A]) kendi tailwind.config token'larınla değiştirmen yeterli.
// İkon olarak dışa bağımlılık yaratmamak için inline SVG kullandım; projende lucide-react
// veya benzeri bir ikon kütüphanesi varsa bunları onunla değiştirebilirsin.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evden Eve Nakliyat İstanbul | Rüçhanoğlu Nakliyat - Profesyonel Ev Taşıma",
  description:
    "Rüçhanoğlu Nakliyat ile İstanbul içi ve şehirlerarası evden eve nakliyat. Profesyonel ambalajlama, mobilya kurulum ve beyaz eşya bağlantısı dahil. Hemen teklif alın.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Evden Eve Nakliyat",
  provider: {
    "@type": "MovingCompany",
    name: "Rüçhanoğlu Nakliyat",
    areaServed: "İstanbul",
  },
  areaServed: {
    "@type": "City",
    name: "İstanbul",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ev taşıma için kaç gün önceden randevu almalıyım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yoğun dönemlerde (ay sonu, yaz ayları) en az 5-7 gün önceden planlama yapmanızı öneririz. Hafta içi ve ay ortası taşımalarda 1-2 gün önceden randevu genellikle yeterlidir.",
      },
    },
    {
      "@type": "Question",
      name: "Eşyalarımı kendim paketlersem fiyat düşer mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, ambalajlama hizmetini almadığınızda işçilik maliyeti düşer. Ancak kırılacak eşyalarda profesyonel paketleme önerilir; bu, taşınma sırasında oluşabilecek hasar riskini azaltır.",
      },
    },
    {
      "@type": "Question",
      name: "Asansörsüz bir binadayım, ek ücret öder miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "4. kat ve üzeri asansörsüz binalarda genellikle asansörlü nakliyat önerilir ve bu ayrı bir kalemdir. Keşif sırasında bina durumunu değerlendirip size net bir rakam veririz.",
      },
    },
    {
      "@type": "Question",
      name: "Taşınma sırasında evde bulunmam şart mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zorunlu değildir, ancak ilk keşifte ve eşyaların yeni evde teslim alınmasında bir yetkilinin bulunması sürecin sorunsuz ilerlemesi için önerilir.",
      },
    },
  ],
};

/* ---------- Inline icon set (bağımlılıksız) ---------- */

function IconClipboard({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" />
      <rect x="5" y="5" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconWrench({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.7 6.3a3.5 3.5 0 0 0-4.9 4l-6.2 6.2a1.5 1.5 0 0 0 2.1 2.1l6.2-6.2a3.5 3.5 0 0 0 4-4.9l-2.1 2.1-1.4-1.4 2.3-2.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconUsers({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 19c.7-3 2.9-5 5.5-5s4.8 2 5.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="17" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.2 19c.4-2.2 1.9-3.9 3.8-4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconTag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M11.5 4.5 19 12l-7.5 7.5a2 2 0 0 1-2.8 0l-4.7-4.7a2 2 0 0 1 0-2.8L11.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="9" r="1.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconBox({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3.5 8 12 4l8.5 4-8.5 4-8.5-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3.5 8v8.2L12 20l8.5-3.8V8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 12v8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconLayers({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3.5 20.5 8 12 12.5 3.5 8 12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m4.5 12 7.5 4 7.5-4M4.5 16l7.5 4 7.5-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function IconTruck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="7" width="11" height="9" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13.5 10h4l3 3v3h-7v-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.7" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="18" r="1.7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconHome({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 11.5 12 4l8 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 20.5v-5h4v5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconMapPin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconChevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m7 9 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Reusable CTA button ---------- */

function CtaButton({
  href = "/iletisim",
  variant = "primary",
  children,
}: {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[#E2793D] text-white hover:bg-[#C7642E] focus-visible:outline-[#E2793D] shadow-sm shadow-[#E2793D]/30 hover:shadow-md hover:shadow-[#E2793D]/40"
      : "bg-white text-[#10203A] border border-[#10203A]/15 hover:border-[#10203A]/30 hover:bg-[#10203A]/[0.03] focus-visible:outline-[#10203A]";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

/* ---------- Page ---------- */

export default function EvdenEveNakliyatPage() {
  const priceFactors = [
    {
      icon: IconBox,
      title: "Eşya hacmi",
      desc: "1+1 bir daire ile 4+1 bir villa arasında araç ve ekip ihtiyacı farklıdır.",
    },
    {
      icon: IconLayers,
      title: "Kat ve asansör durumu",
      desc: "Asansörsüz binalarda 4. kat ve üzeri taşımalarda genellikle asansörlü nakliyat önerilir.",
    },
    {
      icon: IconMapPin,
      title: "Mesafe",
      desc: "İstanbul içi taşımalarla şehirlerarası taşımalar arasında süre ve maliyet farkı oluşur.",
    },
    {
      icon: IconTag,
      title: "Ambalaj ihtiyacı",
      desc: "Kendi kutularınızla taşınmak daha ucuzdur; profesyonel ambalajlama kırılma riskini azaltır.",
    },
  ];

  const steps = [
    { title: "Ücretsiz Keşif", desc: "Ekibimiz evinizi görür, eşya hacmini ve özel ihtiyaçları belirler.", icon: IconClipboard },
    { title: "Ambalajlama", desc: "Eşyalar oda oda, kırılacaklar katmanlı ve etiketli paketlenir.", icon: IconBox },
    { title: "Söküm ve Yükleme", desc: "Mobilyalar sökülür, araca yükleme ihtiyaç sırasına göre planlanır.", icon: IconWrench },
    { title: "Taşıma", desc: "Eşyalarınız güvenli ve planlı bir şekilde yeni adresinize ulaştırılır.", icon: IconTruck },
    { title: "Yerleşim", desc: "Eşyalar odalara yerleştirilir, mobilyalar kurulur, beyaz eşya bağlanır.", icon: IconHome },
  ];

  const features = [
    {
      icon: IconClipboard,
      title: "Keşifsiz teklif vermiyoruz",
      desc: "Telefonda verilen \u201cortalama\u201d rakamlar taşınma günü sürpriz ek ücretlere dönüşür; biz her taşımadan önce yerinde veya görüntülü keşif yapıyoruz.",
    },
    {
      icon: IconWrench,
      title: "Teknik problemlere çözüm üretiyoruz",
      desc: "Dar merdiven, asansöre sığmayan eşya, park ve giriş kısıtları gibi pratik sorunlarda yerinde çözüm buluyoruz.",
    },
    {
      icon: IconUsers,
      title: "Eğitimli, sabit ekip",
      desc: "Eşyalarınızı taşıyan ekip, günlük tutulan gündelikçiler değil, düzenli çalışan ve süreci bilen bir kadro.",
    },
    {
      icon: IconTag,
      title: "Şeffaf fiyatlandırma",
      desc: "Keşif sonrası verdiğimiz teklif, taşınma günü değişmez.",
    },
  ];

  const regions = [
    "Beylikdüzü",
    "Büyükçekmece",
    "Avcılar",
    "Esenyurt",
    "Bakırköy",
    "Küçükçekmece",
    "Başakşehir",
    "Beşiktaş",
    "Şişli",
    "Kadıköy",
    "Üsküdar",
    "Ataşehir",
    "ve İstanbul'un tüm ilçeleri",
  ];

  const faqs = [
    {
      q: "Ev taşıma için kaç gün önceden randevu almalıyım?",
      a: "Yoğun dönemlerde (ay sonu, yaz ayları) en az 5-7 gün önceden planlama yapmanızı öneririz. Hafta içi ve ay ortası taşımalarda 1-2 gün önceden randevu genellikle yeterlidir.",
    },
    {
      q: "Eşyalarımı kendim paketlersem fiyat düşer mi?",
      a: "Evet, ambalajlama hizmetini almadığınızda işçilik maliyeti düşer. Ancak kırılacak eşyalarda (cam, seramik, elektronik) profesyonel paketleme önerilir; bu, taşınma sırasında oluşabilecek hasar riskini azaltır.",
    },
    {
      q: "Asansörsüz bir binadayım, ek ücret öder miyim?",
      a: "4. kat ve üzeri asansörsüz binalarda genellikle asansörlü nakliyat önerilir ve bu ayrı bir kalemdir. Keşif sırasında bina durumunu değerlendirip size net bir rakam veririz.",
    },
    {
      q: "Taşınma sırasında evde bulunmam şart mı?",
      a: "Zorunlu değildir, ancak ilk keşifte ve eşyaların yeni evde teslim alınmasında bir yetkilinin bulunması sürecin sorunsuz ilerlemesi için önerilir.",
    },
  ];

  return (
    <main className="bg-[#FAFAF8] text-[#10203A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-[#0B1522]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #FAFAF8 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/80">
            <IconTruck className="h-3.5 w-3.5" />
            Rüçhanoğlu Nakliyat &mdash; İstanbul içi &amp; şehirlerarası
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            İstanbul Evden Eve Nakliyat Hizmeti
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            İstanbul içinde ev taşımak, doğru firma seçildiğinde birkaç saatte tamamlanan sıradan
            bir işe dönüşür. Rüçhanoğlu Nakliyat olarak başta İstanbul içi olmak üzere
            şehirlerarası taşımaları da kapsayan, net ve öngörülebilir bir süreç sunuyoruz:
            ücretsiz keşif, ambalajlama ve taşıma planı.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="/iletisim" variant="primary">
              Ücretsiz Keşif Talep Et
              <IconChevron className="h-4 w-4 -rotate-90" />
            </CtaButton>
            <CtaButton href="tel:+901234567890" variant="secondary">
              Hemen Ara
            </CtaButton>
          </div>
          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-2xl font-bold text-white sm:text-3xl">39</dt>
              <dd className="mt-1 text-sm text-white/60">İstanbul ilçesi</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-white sm:text-3xl">5</dt>
              <dd className="mt-1 text-sm text-white/60">Adımlı süreç</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-white sm:text-3xl">4-6s</dt>
              <dd className="mt-1 text-sm text-white/60">Ortalama 3+1 taşıma</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ---------- NEDEN RÜÇHANOĞLU NAKLİYAT ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Neden Rüçhanoğlu Nakliyat?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#475569]">
            Nakliyat sektöründe onlarca firma arasından seçim yaparken sorulması gereken doğru
            soru &ldquo;en ucuz kim&rdquo; değil, &ldquo;eşyalarım kimin elinde güvende&rdquo;
            olmalı.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-[#10203A]/8 bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-[#10203A]/5"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#10203A]/[0.06] text-[#10203A] transition-colors group-hover:bg-[#E2793D]/10 group-hover:text-[#E2793D]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <CtaButton href="/iletisim" variant="primary">
            Bugün Teklif Al
          </CtaButton>
        </div>
      </section>

      {/* ---------- FİYAT FAKTÖRLERİ ---------- */}
      <section className="border-y border-[#10203A]/8 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Fiyat neye göre değişir?</h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              Kesin fiyatı evinizi görmeden tahmin etmiyoruz; rakam yerinde veya görüntülü keşif
              sonrası netleşir.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {priceFactors.map((p) => (
              <div key={p.title} className="rounded-2xl bg-[#FAFAF8] p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#E2793D]/10 text-[#E2793D]">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-[#10203A]/8 bg-[#FAFAF8] p-6">
            <p className="text-sm leading-relaxed text-[#475569]">
              <span className="font-semibold text-[#10203A]">Ek hizmetler: </span>
              Perde sökme-takma gibi özel talepler ayrı ücretlendirilebilir; mobilya sökme-kurma ve
              beyaz eşya bağlantısı ise hizmetimize dahildir.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 5 ADIMLI SÜREÇ ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Taşınma günü: 5 adımda nasıl işliyor?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#475569]">
            Ortalama bir 3+1 dairenin taşınması, asansör kullanılabiliyorsa 4-6 saat sürer.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute right-[-1rem] top-6 hidden h-px w-8 bg-[#10203A]/15 lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10203A] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <s.icon className="h-5 w-5 text-[#E2793D]" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <CtaButton href="/iletisim" variant="primary">
            Taşınma Tarihini Şimdi Planla
          </CtaButton>
        </div>
      </section>

      {/* ---------- HİZMET BÖLGELERİ ---------- */}
      <section className="border-y border-[#10203A]/8 bg-[#10203A] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Hangi yerlerde hizmet veriyoruz?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Başta Beylikdüzü, Büyükçekmece, Avcılar ve Esenyurt olmak üzere İstanbul&rsquo;un
              tüm ilçelerinde evden eve nakliyat hizmeti veriyoruz; ihtiyaç halinde şehirlerarası
              taşımalarınızı da üstleniyoruz.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {regions.map((r) => (
              <span
                key={r}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85"
              >
                <IconMapPin className="h-3.5 w-3.5 text-[#E2793D]" />
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SSS ---------- */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sık Sorulan Sorular</h2>
        <div className="mt-10 divide-y divide-[#10203A]/8 border-y border-[#10203A]/8">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold marker:content-none">
                {f.q}
                <IconChevron className="h-5 w-5 shrink-0 text-[#475569] transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------- KAPANIŞ CTA ---------- */}
      <section className="bg-[#E2793D]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <h2 className="max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Taşınmanız için net bir teklife hazır mısınız?
          </h2>
          <a
            href="/iletisim"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#10203A] transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Rüçhanoğlu Nakliyat&rsquo;tan Hemen Teklif Al
          </a>
        </div>
      </section>
    </main>
  );
}
