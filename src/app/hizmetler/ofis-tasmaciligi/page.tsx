import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ofis Taşımacılığı İstanbul | Rüçhanoğlu Nakliyat - İş Yeri Taşıma",
  description:
    "Rüçhanoğlu Nakliyat ile İstanbul'da profesyonel ofis taşımacılığı. Hafta sonu taşıma, iş akışı kesintisiz. Hemen teklif alın.",
};

export default function OfisTasmaciligiPage() {
  return (
    <main className="bg-[#FAFAF8] text-[#10203A]">
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
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <rect x="2.5" y="7" width="11" height="9" rx="1" stroke="currentColor" strokeWidth="1.6" />
              <path d="M13.5 10h4l3 3v3h-7v-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <circle cx="7" cy="18" r="1.7" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="17.5" cy="18" r="1.7" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            Rüçhanoğlu Nakliyat — Ofis Taşımacılığı
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Profesyonel Ofis Taşımacılığı
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            İstanbul genelinde iş yerinizi hafta sonu taşıyoruz; ekipmanlarınız özenle paketlenir, Pazartesi çalışmaya hazır olursunuz. İş akışınızı minimum düzeyde kesintiye uğratarak taşıma işini yönetiyoruz.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/iletisim" className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold bg-[#E2793D] text-white hover:bg-[#C7642E] transition-all duration-200">
              Ofis Taşıma Talep Et
              <svg className="h-4 w-4 -rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="m7 9 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="tel:+901234567890" className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold bg-white text-[#10203A] border border-[#10203A]/15 hover:border-[#10203A]/30 hover:bg-[#10203A]/[0.03] transition-all duration-200">
              Hemen Ara
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ofis Taşımacılığı Nedir?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#475569]">
            Ofis taşımacılığı, bir işletmenin/şirketin ekipmanlarının, mobilyalarının ve diğer malzemeleriyle birlikte yeni bir yere taşınması işidir. Bu işlem iş akışını minimum kesintiye uğratarak gerçekleştirilmelidir.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#10203A]/8 bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-[#10203A]/5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#10203A]/[0.06] text-[#10203A] transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 3.5 20.5 8 12 12.5 3.5 8 12 3.5Z" strokeLinejoin="round" />
                <path d="m4.5 12 7.5 4 7.5-4M4.5 16l7.5 4 7.5-4" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Esnek Planlama</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">Ofis saatleri dışında hafta sonu taşıma ile iş akışı kesintiye uğramaz.</p>
          </div>
          <div className="rounded-2xl border border-[#10203A]/8 bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-[#10203A]/5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#10203A]/[0.06] text-[#10203A] transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <circle cx="9" cy="8" r="3" strokeWidth="1.6" />
                <path d="M3.5 19c.7-3 2.9-5 5.5-5s4.8 2 5.5 5" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="17" cy="9" r="2.2" strokeWidth="1.6" />
                <path d="M15.2 19c.4-2.2 1.9-3.9 3.8-4.4" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Uzman Ekip</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">Ofis taşımacılığında deneyimli profesyonel ekibimiz.</p>
          </div>
          <div className="rounded-2xl border border-[#10203A]/8 bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-[#10203A]/5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#10203A]/[0.06] text-[#10203A] transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M4 11.5 12 4l8 7.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 10v9.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10" strokeWidth="1.6" />
                <path d="M10 20.5v-5h4v5" strokeWidth="1.6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Ekipman Kurulumu</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">Taşınan ekipmanlar yeni yerde kurulur ve kullanıma hazır hale getirilir.</p>
          </div>
          <div className="rounded-2xl border border-[#10203A]/8 bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-[#10203A]/5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#10203A]/[0.06] text-[#10203A] transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M11.5 4.5 19 12l-7.5 7.5a2 2 0 0 1-2.8 0l-4.7-4.7a2 2 0 0 1 0-2.8L11.5 4.5Z" strokeLinejoin="round" />
                <circle cx="9" cy="9" r="1.3" strokeWidth="1.6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Şeffaf Fiyatlandırma</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">Keşif sonrası verilen fiyat taşıma günü değişmez.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#10203A]/8 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ofis Taşımacılığı Süreci</h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              Ofis taşımacılığında detaylı planlama ve koordinasyon hayati önem taşır. Biz her adımda sizin yanınızda olur, iş akışınızı minimum kesintiye uğratırız.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            <div className="rounded-2xl bg-[#FAFAF8] p-6 border border-[#10203A]/8">
              <h3 className="font-semibold text-[#10203A]">1. Detaylı Keşif ve Planlama</h3>
              <p className="mt-2 text-sm text-[#475569]">Ofis ortamını inceleyerek eşya envanteri oluşturur ve taşıma planını hazırlarız.</p>
            </div>
            <div className="rounded-2xl bg-[#FAFAF8] p-6 border border-[#10203A]/8">
              <h3 className="font-semibold text-[#10203A]">2. Paketleme ve Hazırlık</h3>
              <p className="mt-2 text-sm text-[#475569]">Ofis eşyaları özel olarak paketlenterek hasardan korunur.</p>
            </div>
            <div className="rounded-2xl bg-[#FAFAF8] p-6 border border-[#10203A]/8">
              <h3 className="font-semibold text-[#10203A]">3. Taşıma ve Kurulum</h3>
              <p className="mt-2 text-sm text-[#475569]">Eşyalar yeni yere taşınır, mobilyalar kurulur ve ekipmanlar kullanıma hazır hale getirilir.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E2793D]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <h2 className="max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ofis taşınmanız için hemen teklif alın
          </h2>
          <a
            href="/iletisim"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#10203A] transition-colors hover:bg-white/90"
          >
            Teklif Al
          </a>
        </div>
      </section>
    </main>
  );
}
