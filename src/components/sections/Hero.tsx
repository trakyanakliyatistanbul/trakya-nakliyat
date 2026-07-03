import { SITE_CONFIG } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#0B1220] pt-12 lg:pt-16 pb-10 relative overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(176,141,87,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(176,141,87,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glow effects */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176,141,87,0.08) 0%, transparent 70%)',
          top: -180, right: -60,
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid gap-8">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(176,141,87,0.25)] bg-[rgba(176,141,87,0.08)] px-4 py-2 text-[13px] text-[var(--gold)] font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--gold)]" />
              Beylikdüzü ve İstanbul genelinde güvenli nakliyat
            </div>

            <h1 className="text-[36px] lg:text-[42px] font-bold leading-[1.08] text-white tracking-tight">
              Beylikdüzü Evden Eve Nakliyat Hizmetinde{' '}
              <em className="not-italic text-[var(--gold)]">Güvenin Adresi</em>
            </h1>

            <p className="text-[15px] text-[rgba(255,255,255,0.75)] leading-[1.8] max-w-[600px]">
              <strong className="text-white font-semibold">Trakya Nakliyat İstanbul</strong> olarak
              İstanbul genelinde profesyonel evden eve nakliyat, asansörlü taşıma ve sigortalı hizmet sunuyoruz.
              Deneyimli ekiplerimizle eşyalarınızı güvenle yeni adresinize ulaştırıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={SITE_CONFIG.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-[#0B1220] border border-transparent px-6 py-3.5 rounded-[12px] text-[14.5px] font-semibold no-underline hover:bg-[#a57b4d] transition-all duration-200"
                style={{ boxShadow: '0 18px 50px rgba(176,141,87,0.14)' }}
              >
                <span>📞</span> Hemen Ara
              </a>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0B1220] border border-[rgba(176,141,87,0.18)] px-6 py-3.5 rounded-[12px] text-[14.5px] font-semibold no-underline hover:bg-[rgba(176,141,87,0.12)] transition-all duration-200"
              >
                <span>💬</span> WhatsApp&apos;tan Teklif Al
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-white/5 shadow-[0_32px_80px_rgba(0,0,0,0.22)]">
            <div className="aspect-[16/9] min-h-[220px] bg-[radial-gradient(circle_at_top,_rgba(176,141,87,0.16),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                aria-label="Video oynat"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(176,141,87,0.18)] text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] ring-1 ring-[rgba(176,141,87,0.35)] transition-transform duration-200 hover:scale-105 hover:bg-[var(--gold)]"
              >
                <span className="text-[22px]">▶</span>
              </button>
            </div>
            <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
              <div className="mx-auto max-w-[640px] rounded-[18px] border border-[rgba(255,255,255,0.12)] bg-[#0B1220]/70 px-4 py-3 text-center text-[14px] text-[rgba(255,255,255,0.82)] shadow-sm">
                Yakında gelecek tanıtım video veya premium görsel alanı.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

