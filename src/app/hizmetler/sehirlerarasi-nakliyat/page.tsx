import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Şehirlerarası Nakliyat | Rüçhanoğlu Nakliyat - Türkiye Geneli Taşıma",
  description:
    "Rüçhanoğlu Nakliyat ile Türkiye genelinde şehirlerarası nakliyat hizmeti. Planlı, güvenli ve sigortalı taşıma. Hemen teklif alın.",
};

export default function SehirlerarasiNakliyatPage() {
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
            Rüçhanoğlu Nakliyat — Şehirlerarası Taşıma
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Şehirlerarası Nakliyat Hizmeti
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Türkiye'nin birçok noktasına planlı, güvenli ve sigortalı şehirlerarası nakliyat hizmeti gerçekleştiriyoruz. Uzun mesafeli taşımalarda deneyimli ekibimiz eşyalarınızın güvenliğini sağlar.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/iletisim" className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold bg-[#E2793D] text-white hover:bg-[#C7642E] transition-all duration-200">
              Şehirlerarası Taşıma Talep Et
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
            Şehirlerarası Nakliyat Hizmeti
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#475569]">
            Şehirlerarası nakliyat, bir şehrden başka şehre eşya taşıma işidir. Rüçhanoğlu Nakliyat olarak bu tür taşımalarda deneyim sahibi, güvenilir ve sigortalı hizmet sunuyoruz.
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
            <h3 className="text-lg font-semibold">Planlı Teslimat</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">Taşıma günü ve teslimat saati önceden belirlemek için detaylı planlama yapıyoruz.</p>
          </div>
          <div className="rounded-2xl border border-[#10203A]/8 bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-[#10203A]/5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#10203A]/[0.06] text-[#10203A] transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M11.5 4.5 19 12l-7.5 7.5a2 2 0 0 1-2.8 0l-4.7-4.7a2 2 0 0 1 0-2.8L11.5 4.5Z" strokeLinejoin="round" />
                <circle cx="9" cy="9" r="1.3" strokeWidth="1.6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Sigortalı Taşıma</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">Eşyalarınız taşınma süresi boyunca tamamen sigortalı olarak taşınır.</p>
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
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">Uzun mesafeli taşımada deneyimli ve profesyonel ekibimiz.</p>
          </div>
          <div className="rounded-2xl border border-[#10203A]/8 bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-[#10203A]/5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#10203A]/[0.06] text-[#10203A] transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1Z" strokeWidth="1.6" />
                <rect x="5" y="5" width="14" height="16" rx="2" strokeWidth="1.6" />
                <path d="M9 12h6M9 16h4" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Profesyonel Paketleme</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">Eşyalarınız profesyonel şekilde paketlenerek taşınır.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#10203A]/8 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hizmet Verdiğimiz Bölgeler</h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              Türkiye'nin büyük şehirlerine şehirlerarası nakliyat hizmeti sunuyoruz. İstanbul, Ankara, İzmir, Bursa, Antalya ve daha birçok şehire taşıma yapıyoruz.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Mersin", "Gaziantep", "Konya", "Kayseri"].map((city) => (
                <div key={city} className="rounded-lg bg-[#FAFAF8] px-4 py-3 text-center border border-[#10203A]/8">
                  <p className="font-semibold text-[#10203A]">{city}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E2793D]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <h2 className="max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Şehirlerarası taşınma için hemen teklif alın
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
