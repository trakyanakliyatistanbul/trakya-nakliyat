import { SITE_CONFIG } from '@/lib/constants'

const ctaBadges = [
  { icon: '✓', label: 'Ücretsiz Ekspertiz' },
  { icon: '🏗', label: 'Asansörlü Nakliyat' },
  { icon: '📦', label: 'Profesyonel Paketleme' },
  { icon: '🕐', label: '7/24 Destek' },
]

const trustItems = [
  { icon: '🏆', value: '23+ Yıl', label: 'Sektör Deneyimi' },
  { icon: '⭐', value: '4.9 / 5', label: 'Google Puanı' },
  { icon: '📍', value: 'İstanbul Geneli', label: 'Hizmet Ağı' },
  { icon: '🕐', value: '7/24', label: 'Destek Hattı' },
]

export default function CTASection() {
  return (
    <section
      id="iletisim"
      className="relative py-20 px-10 overflow-hidden"
      style={{ background: '#0F172A' }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,162,39,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,162,39,0.09) 0%, transparent 70%)',
          top: -180, right: -60,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 280, height: 280, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%)',
          bottom: -100, left: -50,
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-11 items-center">

          {/* Sol */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[rgba(201,162,39,0.12)] border border-[rgba(201,162,39,0.25)] text-[#D4AF37] px-3.5 py-[5px] rounded-full text-[11px] font-bold uppercase tracking-[1px] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-[pulseDot_2s_infinite]" />
              Trakya Nakliyat İstanbul
            </div>

            <h2 className="text-[36px] lg:text-[40px] font-bold text-white leading-[1.15] tracking-tight mb-4">
              Taşınmanızı{' '}
              <em className="not-italic text-[#D4AF37]">Güvenle</em> Planlayın
            </h2>

            <p className="text-[15px] text-[rgba(255,255,255,0.55)] leading-[1.8] max-w-[490px] mb-7">
              Beylikdüzü ve İstanbul genelinde{' '}
              <strong className="text-[rgba(255,255,255,0.88)] font-semibold">profesyonel evden eve nakliyat</strong>,{' '}
              <strong className="text-[rgba(255,255,255,0.88)] font-semibold">asansörlü nakliyat</strong> ve
              şehirlerarası taşımacılık hizmeti sunuyoruz. Ücretsiz ekspertiz ile net fiyat alın, güvenle taşının.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {ctaBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-1.5 text-[11.5px] text-[rgba(255,255,255,0.7)] border border-[rgba(201,162,39,0.25)] bg-[rgba(255,255,255,0.04)] px-3 py-1.5 rounded-[8px] font-medium hover:border-[#D4AF37] hover:text-white hover:bg-[rgba(201,162,39,0.12)] transition-all duration-200"
                >
                  <span className="text-[#D4AF37]">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-4">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex flex-col items-center justify-center bg-[#C9A227] text-[#0B1220] no-underline px-6 py-3.5 rounded-[11px] font-bold min-w-[185px] hover:bg-[#D4AF37] hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-200"
                style={{ boxShadow: '0 4px 14px rgba(201,162,39,0.3)' }}
              >
                <span className="flex items-center gap-1.5 text-[14.5px]">📞 Ücretsiz Ekspertiz İçin Ara</span>
                <span className="text-[11.5px] opacity-80 mt-0.5 font-semibold">{SITE_CONFIG.phone}</span>
              </a>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-white text-[#0B1220] border-[1.5px] border-[#C9A227] no-underline px-6 py-3.5 rounded-[11px] font-bold min-w-[185px] hover:bg-[#C9A227] hover:border-[#C9A227] hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-200"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.16)' }}
              >
                <span className="flex items-center gap-1.5 text-[14.5px]">💬 WhatsApp&apos;tan Teklif Al</span>
                <span className="text-[11.5px] text-[#6b7280] mt-0.5">Hızlı Yanıt</span>
              </a>
            </div>

            <p className="text-[12px] text-[rgba(255,255,255,0.52)] leading-[1.6]">
              🛡 Ücretsiz ekspertiz hizmetimiz sayesinde taşınma öncesinde net fiyat bilgisi
              alabilirsiniz. Gizli ücret uygulanmaz.
            </p>
          </div>

          {/* Sağ — Güven kartı */}
          <div>
            <div
              className="relative overflow-hidden rounded-[18px] p-8"
              style={{
                background: '#1a2744',
                border: '1px solid rgba(201,162,39,0.25)',
                boxShadow: '0 8px 28px rgba(0,0,0,0.28)',
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: 'linear-gradient(90deg, #A8841E, #D4AF37, #A8841E)' }}
              />

              {/* Card header */}
              <div
                className="flex items-center gap-2.5 pb-4 mb-5"
                style={{ borderBottom: '1px solid rgba(201,162,39,0.25)' }}
              >
                <div className="w-[35px] h-[35px] bg-[#C9A227] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <span className="text-[12px] font-black text-[#0B1220]">TN</span>
                </div>
                <div>
                  <div className="text-[13.5px] font-bold text-white">Trakya Nakliyat</div>
                  <div className="text-[9.5px] text-[rgba(201,162,39,0.6)] uppercase tracking-[1px]">İstanbul</div>
                </div>
              </div>

              {/* 2×2 grid */}
              <div className="grid grid-cols-2 gap-3">
                {trustItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-2 p-4 rounded-[12px] border border-[rgba(201,162,39,0.14)] bg-[rgba(255,255,255,0.03)] transition-all duration-200 hover:bg-[rgba(201,162,39,0.06)] hover:border-[rgba(201,162,39,0.55)] hover:-translate-y-0.5"
                  >
                    <div className="w-[34px] h-[34px] bg-[rgba(201,162,39,0.12)] border border-[rgba(201,162,39,0.25)] rounded-[8px] flex items-center justify-center">
                      <span className="text-[16px]">{item.icon}</span>
                    </div>
                    <div className="text-[19px] font-bold text-white leading-[1.1]">{item.value}</div>
                    <div className="text-[11px] text-[rgba(255,255,255,0.52)] leading-[1.3]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
