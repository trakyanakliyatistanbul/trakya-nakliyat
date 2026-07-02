import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

const serviceLinks = [
  { label: 'Evden eve nakliyat', href: '/hizmetler/evden-eve-nakliyat' },
  { label: 'Asansörlü taşıma', href: '/hizmetler/asansorlu-nakliyat' },
  { label: 'Şehirlerarası nakliyat', href: '/hizmetler/sehirlerarasi-nakliyat' },
  { label: 'Ofis taşıma', href: '/hizmetler/ofis-tasima' },
  { label: 'Depolama', href: '/hizmetler/esya-depolama' },
  { label: 'Paketleme', href: '/hizmetler/paketleme' },
]

const regionLinks = [
  { label: 'Beylikdüzü nakliyat', href: '/beylikduzu-nakliyat' },
  { label: 'Büyükçekmece nakliyat', href: '/buyukcekme-nakliyat' },
  { label: 'Avcılar nakliyat', href: '/avcilar-nakliyat' },
  { label: 'Esenyurt nakliyat', href: '/esenyurt-nakliyat' },
  { label: 'Bahçeşehir nakliyat', href: '/bahcesehir-nakliyat' },
  { label: 'Küçükçekmece nakliyat', href: '/kucukcekmece-nakliyat' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] border-t border-[rgba(201,162,39,0.15)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-7 pb-10 border-b border-[rgba(201,162,39,0.15)]">

          {/* Marka sütunu */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-[38px] h-[38px] bg-[#C9A227] rounded-[8px] flex items-center justify-center flex-shrink-0">
                <span className="text-[13px] font-black text-[#0B1220]">TN</span>
              </div>
              <div>
                <div className="text-[15px] font-bold text-white">TRAKYA NAKLİYAT</div>
                <div className="text-[9px] text-[rgba(201,162,39,0.6)] uppercase tracking-[1px]">İSTANBUL</div>
              </div>
            </div>
            <p className="text-[12.5px] text-[rgba(255,255,255,0.4)] leading-[1.75] max-w-[220px] mb-4">
              Beylikdüzü ve İstanbul genelinde güvenilir, profesyonel evden eve nakliyat hizmeti.
            </p>
            <div className="flex gap-1.5 flex-wrap mb-3.5">
              {['Sigortalı', 'Lisanslı', '4.9 Google'].map((cert) => (
                <span
                  key={cert}
                  className="border border-[rgba(201,162,39,0.25)] px-2.5 py-[3px] rounded-[5px] text-[10.5px] text-[rgba(255,255,255,0.5)] flex items-center gap-1"
                >
                  <span className="text-[#D4AF37] text-xs">✓</span> {cert}
                </span>
              ))}
            </div>
            {/* Sosyal medya */}
            <div className="flex gap-1.5 mt-3.5">
              {[
                { href: SITE_CONFIG.instagram, label: 'Instagram', icon: 'IG' },
                { href: SITE_CONFIG.whatsapp, label: 'WhatsApp', icon: 'WA' },
                { href: SITE_CONFIG.url, label: 'Web', icon: 'WEB' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-[7px] border border-[rgba(201,162,39,0.25)] flex items-center justify-center text-[#D4AF37] text-[10px] font-bold hover:bg-[rgba(201,162,39,0.1)] hover:border-[rgba(201,162,39,0.5)] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-[10.5px] font-extrabold uppercase tracking-[1.2px] text-[rgba(201,162,39,0.55)] mb-3">
              Hizmetler
            </h3>
            <ul className="list-none flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37] opacity-75 text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmet bölgeleri */}
          <div>
            <h3 className="text-[10.5px] font-extrabold uppercase tracking-[1.2px] text-[rgba(201,162,39,0.55)] mb-3">
              Hizmet Bölgeleri
            </h3>
            <ul className="list-none flex flex-col gap-2">
              {regionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D4AF37] opacity-75 text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-[10.5px] font-extrabold uppercase tracking-[1.2px] text-[rgba(201,162,39,0.55)] mb-3">
              İletişim
            </h3>
            <ul className="list-none flex flex-col gap-2">
              <li>
                <a href={SITE_CONFIG.phoneHref} className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37] opacity-75">📞</span> {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37] opacity-75">💬</span> WhatsApp hattı
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.emailHref} className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 break-all">
                  <span className="text-[#D4AF37] opacity-75">✉</span> {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.url} target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37] opacity-75">🌐</span> trakyanakliyatistanbul.com
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37] opacity-75">📸</span> {SITE_CONFIG.instagramHandle}
                </a>
              </li>
              <li>
                <span className="text-[12.5px] text-[rgba(255,255,255,0.5)] flex items-center gap-1.5">
                  <span className="text-[#D4AF37] opacity-75">🕐</span> {SITE_CONFIG.workingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-3.5 gap-2 text-[11.5px] text-[rgba(255,255,255,0.26)]">
          <span>© 2025 Trakya Nakliyat İstanbul. Tüm hakları saklıdır.</span>
          <div className="flex gap-4">
            <Link href="/kvkk" className="text-[rgba(255,255,255,0.26)] no-underline hover:text-[#D4AF37] transition-colors">KVKK</Link>
            <Link href="/gizlilik" className="text-[rgba(255,255,255,0.26)] no-underline hover:text-[#D4AF37] transition-colors">Gizlilik politikası</Link>
            <Link href="/kullanim-kosullari" className="text-[rgba(255,255,255,0.26)] no-underline hover:text-[#D4AF37] transition-colors">Kullanım koşulları</Link>
          </div>
        </div>
      </div>

      {/* Google Maps placeholder */}
      <div className="w-full h-[240px] bg-[#F8F9FA] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(11,18,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11,18,32,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="flex flex-col items-center justify-center h-full relative z-10">
          <div
            className="w-[46px] h-[46px] bg-[#0B1220] flex items-center justify-center animate-pin-bounce"
            style={{
              borderRadius: '50% 50% 50% 0',
              transform: 'rotate(-45deg)',
              boxShadow: '0 6px 14px rgba(0,0,0,0.18)',
            }}
          >
            <span style={{ transform: 'rotate(45deg)', fontSize: '19px', color: '#D4AF37' }}>📍</span>
          </div>
          <div className="mt-3 bg-white border border-[#E5E7EB] rounded-[10px] px-4 py-2.5 text-center shadow-md">
            <div className="text-[13px] font-bold text-[#0B1220] mb-0.5">Trakya Nakliyat İstanbul</div>
            <div className="text-[11.5px] text-[#6b7280]">Beylikdüzü, İstanbul</div>
            <a
              href="https://maps.google.com/?q=Beylikdüzü,İstanbul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0B1220] text-[#D4AF37] no-underline px-3.5 py-1.5 rounded-[7px] text-[11.5px] font-semibold mt-2"
            >
              Yol Tarifi Al
            </a>
          </div>
        </div>
        <button className="absolute top-3.5 right-3.5 bg-white border border-[#E5E7EB] rounded-[8px] px-3 py-1.5 text-[12px] font-semibold text-[#A8841E] flex items-center gap-1.5 shadow-sm">
          🗺 Google Maps&apos;te Aç
        </button>
      </div>
    </footer>
  )
}
