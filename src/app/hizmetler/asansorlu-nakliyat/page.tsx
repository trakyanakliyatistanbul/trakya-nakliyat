import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asansörlü Nakliyat İstanbul | Rüçhanoğlu Nakliyat - Yüksek Katlı Bina Taşıma",
  description:
    "Rüçhanoğlu Nakliyat ile İstanbul'da asansörlü nakliyat hizmeti. Yüksek katlı binalarda hızlı, güvenli ve hasarsız taşıma. Hemen teklif alın.",
};

export default function AsansorluNakliyatPage() {
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
            Rüçhanoğlu Nakliyat — Asansörlü Taşıma
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Asansörlü Nakliyat Hizmeti
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Yüksek katlı binalarda taşıma işleri özel dikkat ve teçhizat gerektirir. Rüçhanoğlu Nakliyat olarak modern asansör sistemimiz sayesinde yüksek katlı binalarda hızlı, güvenli ve hasarsız taşıma hizmeti sunuyoruz.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/iletisim" className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold bg-[#E2793D] text-white hover:bg-[#C7642E] transition-all duration-200">
              Asansörlü Taşıma Talep Et
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
            Asansörlü Nakliyat Nedir?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#475569]">
            Asansörlü nakliyat, özellikle yüksek katlı binaların asansör sistemi kullanılarak gerçekleştirilen taşıma hizmetidir. Modern asansör sistemi sayesinde eşyalarınız daha hızlı, güvenli ve hasarsız bir şekilde taşınır.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#10203A]/8 bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-[#10203A]/5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#10203A]/[0.06] text-[#10203A] transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" strokeLinejoin="round" />
                <circle cx="12" cy="9.5" r="2.3" strokeWidth="1.6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Hızlı Taşıma</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">Asansör sayesinde taşıma süreci kısalır ve daha verimli hale gelir.</p>
          </div>
          <div className="rounded-2xl border border-[#10203A]/8 bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-[#10203A]/5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#10203A]/[0.06] text-[#10203A] transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M3.5 8 12 4l8.5 4-8.5 4-8.5-4Z" strokeLinejoin="round" />
                <path d="M3.5 8v8.2L12 20l8.5-3.8V8" strokeLinejoin="round" />
                <path d="M12 12v8" strokeWidth="1.6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Hasarsız Taşıma</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">Eşyalarınız güvenli bir şekilde taşınır ve hasardan korunur.</p>
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
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">Asansörlü nakliyat konusunda eğitimli profesyonel ekipimiz.</p>
          </div>
          <div className="rounded-2xl border border-[#10203A]/8 bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-[#10203A]/5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#10203A]/[0.06] text-[#10203A] transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M11.5 4.5 19 12l-7.5 7.5a2 2 0 0 1-2.8 0l-4.7-4.7a2 2 0 0 1 0-2.8L11.5 4.5Z" strokeLinejoin="round" />
                <circle cx="9" cy="9" r="1.3" strokeWidth="1.6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Uygun Fiyat</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">Keşif sonrası verilen fiyat taşıma günü değişmez.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#10203A]/8 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Asansörlü Nakliyat Ne Zaman Gerekli?</h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              4. kat ve üzeri asansörsüz binalarda, asansörlü binalarda taşıma işleri ve özel eşya taşımalarında asansörlü nakliyat hizmeti sunuyoruz.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            <div className="rounded-2xl bg-[#FAFAF8] p-6 border border-[#10203A]/8">
              <h3 className="font-semibold text-[#10203A]">Yüksek katlı binaların asansörlü taşınması</h3>
              <p className="mt-2 text-sm text-[#475569]">Modern asansör sistemimiz sayesinde yüksek katlı binalarda hızlı ve güvenli taşıma.</p>
            </div>
            <div className="rounded-2xl bg-[#FAFAF8] p-6 border border-[#10203A]/8">
              <h3 className="font-semibold text-[#10203A]">Asansörsüz binalarda ek destek</h3>
              <p className="mt-2 text-sm text-[#475569]">Asansörsüz binalarda 4. kat ve üzeri taşımalarda genellikle asansörlü nakliyat önerilir.</p>
            </div>
            <div className="rounded-2xl bg-[#FAFAF8] p-6 border border-[#10203A]/8">
              <h3 className="font-semibold text-[#10203A]">Hassas eşya taşıması</h3>
              <p className="mt-2 text-sm text-[#475569]">Piyanolar, yazıcılar ve diğer hassas eşyalar asansörlü nakliyat ile daha güvenli taşınır.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E2793D]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <h2 className="max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Asansörlü taşınma için hemen teklif alın
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
