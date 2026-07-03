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

          <div className="relative overflow-hidden rounded-[32px] border border-[rgba(255,255,255,0.12)] bg-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.28)]">
            <div className="relative aspect-[16/9] min-h-[260px] overflow-hidden sm:min-h-[360px] lg:min-h-[470px]">
              <video
                className="absolute inset-0 h-full w-full object-cover object-center"
                src="/videos/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Trakya Nakliyat hizmet tanıtım videosu"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(176,141,87,0.26),transparent_38%),linear-gradient(180deg,rgba(11,18,32,0.08)_0%,rgba(11,18,32,0.72)_100%)]" />
              <div className="absolute left-4 top-4 rounded-full border border-[rgba(255,255,255,0.16)] bg-[#0B1220]/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(255,255,255,0.84)] shadow-sm sm:left-6 sm:top-6 sm:px-4 sm:text-[12px]">
                Premium Taşımacılık
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
                <div className="mx-auto max-w-[620px] rounded-[18px] border border-[rgba(255,255,255,0.14)] bg-[#0B1220]/75 px-4 py-3 text-left text-[13px] leading-6 text-[rgba(255,255,255,0.84)] shadow-[0_16px_45px_rgba(0,0,0,0.24)] sm:text-[14px] sm:px-5">
                  <p className="font-medium text-white">Profesyonel ekiplerimizle, güvenli, hızlı ve özenli taşımacılık deneyimini ön planda tutuyoruz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

