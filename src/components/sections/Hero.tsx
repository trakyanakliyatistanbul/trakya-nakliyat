import { SITE_CONFIG } from '@/lib/constants'

const trustBadges = [
  { icon: '✓', label: 'Ücretsiz Ekspertiz' },
  { icon: '🛡', label: 'Sigortalı Taşıma' },
  { icon: '🏗', label: 'Asansörlü Nakliyat' },
  { icon: '👥', label: 'Deneyimli Ekip' },
]

const proofAvatars = ['AK', 'EY', 'MA', 'FD']

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#0B1220] pt-12 lg:pt-16 pb-0 relative overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(176,141,87,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(176,141,87,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glow effects */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176,141,87,0.09) 0%, transparent 70%)',
          top: -180, right: -60,
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">

          {/* Sol: Metin */}
          <div className="pb-7 lg:pb-14 pt-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[rgba(176,141,87,0.4)] text-[var(--gold)] px-3.5 py-[5px] rounded-full text-[12px] mb-6 bg-[rgba(176,141,87,0.05)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-[pulseDot_2s_infinite] flex-shrink-0" />
              Beylikdüzü ve İstanbul Genelinde Profesyonel Nakliyat Hizmeti
            </div>

            {/* H1 */}
            <h1 className="text-[36px] lg:text-[42px] font-bold leading-[1.18] text-white mb-4 tracking-tight">
              Beylikdüzü Evden Eve Nakliyat Hizmetinde{' '}
              <em className="not-italic text-[var(--gold)]">Güvenin Adresi</em>
            </h1>

            {/* Description */}
            <p className="text-[15px] text-[rgba(255,255,255,0.52)] leading-[1.8] max-w-[500px] mb-7">
              <strong className="text-[rgba(255,255,255,0.82)] font-semibold">
                Trakya Nakliyat İstanbul
              </strong>{' '}
              olarak Beylikdüzü başta olmak üzere İstanbul genelinde{' '}
              <strong className="text-[rgba(255,255,255,0.82)] font-semibold">
                asansörlü evden eve nakliyat
              </strong>{' '}
              hizmeti sunuyoruz. Deneyimli ekibimiz ve özenli paketleme anlayışımızla
              eşyalarınızı{' '}
              <strong className="text-[rgba(255,255,255,0.82)] font-semibold">
                sigortalı taşıma
              </strong>{' '}
              güvencesiyle ulaştırıyoruz.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 lg:mb-5">
              <a
                href={SITE_CONFIG.phoneHref}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#0B1220] border-[1.5px] border-[var(--gold)] px-6 py-3.5 rounded-[10px] text-[14.5px] font-semibold no-underline hover:bg-[var(--gold)] hover:text-[#0B1220] transition-all duration-200 hover:scale-[1.03] hover:-translate-y-px"
                style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.18)' }}
              >
                <span>📞</span> Hemen Ara
              </a>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#0B1220] border-[1.5px] border-[var(--gold)] px-6 py-3.5 rounded-[10px] text-[14.5px] font-semibold no-underline hover:bg-[var(--gold)] hover:text-[#0B1220] transition-all duration-200 hover:scale-[1.03] hover:-translate-y-px"
                style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.18)' }}
              >
                <span>💬</span> WhatsApp&apos;tan Teklif Al
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-6 lg:mb-9">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-1.5 text-[12px] text-[rgba(255,255,255,0.62)] border border-[rgba(176,141,87,0.15)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 rounded-[8px]"
                >
                  <span className="text-[var(--gold)] text-[13px]">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div
              className="flex flex-wrap items-center gap-4 pt-7"
              style={{ borderTop: '1px solid rgba(176,141,87,0.16)' }}
            >
              <div className="flex">
                {proofAvatars.map((av, i) => (
                  <div
                    key={av}
                    className="w-7 h-7 rounded-full border-2 border-[#0B1220] bg-[var(--gold)] flex items-center justify-center text-[9px] font-bold text-[#0B1220]"
                    style={{ marginLeft: i === 0 ? 0 : '-8px' }}
                  >
                    {av}
                  </div>
                ))}
              </div>
              <div className="text-[12.5px] text-[rgba(255,255,255,0.52)]">
                <strong className="text-[rgba(255,255,255,0.85)]">Beylikdüzü ve çevresinde</strong>
                <br />tercih edilen ev taşıma hizmeti
              </div>
              <div className="w-px h-7 bg-[rgba(176,141,87,0.22)]" />
              <div>
                <div className="text-[var(--gold)] text-[12px] tracking-wider">★★★★★</div>
                <div className="text-[11px] text-[rgba(255,255,255,0.52)]">Google Yorumları</div>
              </div>
            </div>
          </div>

          {/* Sağ: Araç görseli placeholder */}
          <div className="relative min-h-[340px] lg:min-h-[380px] flex items-end justify-center">
            <div
              className="absolute pointer-events-none"
              style={{
                width: 360, height: 360, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(176,141,87,0.09) 0%, transparent 70%)',
                bottom: -20, right: -40,
              }}
            />
            {/* Sigortalı filo rozeti */}
            <div
              className="absolute top-[16%] left-[2%] z-20 bg-white rounded-[10px] px-3.5 py-2 flex items-center gap-1.5"
              style={{ boxShadow: '0 6px 18px rgba(0,0,0,0.28)' }}
            >
              <span className="text-[var(--gold)] text-[15px]">🛡</span>
              <span className="text-[11.5px] font-bold text-[#0B1220]">Sigortalı Filo</span>
            </div>
            <div
              className="relative z-10 w-full max-w-[560px] border-2 border-[rgba(176,141,87,0.22)] rounded-[16px] flex flex-col items-center justify-center gap-2 bg-[rgba(255,255,255,0.015)]"
              style={{ aspectRatio: '16/11' }}
            >
              <span className="text-[rgba(176,141,87,0.38)] text-5xl">🚛</span>
              <div className="text-[13px] font-bold text-[rgba(255,255,255,0.5)]">
                Trakya Nakliyat İstanbul
              </div>
              <div className="text-[10.5px] text-[rgba(255,255,255,0.28)] text-center px-6">
                Kurumsal nakliyat araç hizmetlerimizi simgeleyen görsel alanı.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

