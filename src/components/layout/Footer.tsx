import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Logo from '@/components/ui/Logo'

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
    <footer className="bg-[#0D1B2A] border-t border-[rgba(184, 140, 59,0.15)]">
      <Container className="pt-12 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-7 pb-10 border-b border-[rgba(184, 140, 59,0.15)]">

          {/* Marka sütunu */}
          <div>
            <Logo variant="compact" className="mb-3" />
            <p className="text-[12.5px] text-[rgba(255,255,255,0.4)] leading-[1.75] max-w-[220px] mb-4">
              Beylikdüzü ve İstanbul genelinde güvenilir, profesyonel evden eve nakliyat hizmeti.
            </p>
            <div className="flex gap-1.5 flex-wrap mb-3.5">
              {['Sigortalı', 'Lisanslı', '4.9 Google'].map((cert) => (
                <span
                  key={cert}
                  className="border border-[rgba(184, 140, 59,0.25)] px-2.5 py-[3px] rounded-[5px] text-[10.5px] text-[rgba(255,255,255,0.5)] flex items-center gap-1"
                >
                  <span className="text-[var(--gold)] text-xs">✓</span> {cert}
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
                  className="w-8 h-8 rounded-[7px] border border-[rgba(184, 140, 59,0.25)] flex items-center justify-center text-[var(--gold)] text-[10px] font-bold hover:bg-[rgba(184, 140, 59,0.1)] hover:border-[rgba(184, 140, 59,0.5)] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-[10.5px] font-extrabold uppercase tracking-[1.2px] text-[rgba(184, 140, 59,0.55)] mb-3">
              Hizmetler
            </h3>
            <ul className="list-none flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[var(--gold)] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[var(--gold)] opacity-75 text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmet bölgeleri */}
          <div>
            <h3 className="text-[10.5px] font-extrabold uppercase tracking-[1.2px] text-[rgba(184, 140, 59,0.55)] mb-3">
              Hizmet Bölgeleri
            </h3>
            <ul className="list-none flex flex-col gap-2">
              {regionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[var(--gold)] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[var(--gold)] opacity-75 text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-[10.5px] font-extrabold uppercase tracking-[1.2px] text-[rgba(184, 140, 59,0.55)] mb-3">
              İletişim
            </h3>
            <ul className="list-none flex flex-col gap-2">
              <li>
                <a href={SITE_CONFIG.phoneHref} className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[var(--gold)] transition-colors flex items-center gap-1.5">
                  <span className="text-[var(--gold)] opacity-75">📞</span> {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[var(--gold)] transition-colors flex items-center gap-1.5">
                  <span className="text-[var(--gold)] opacity-75">💬</span> WhatsApp hattı
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.emailHref} className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[var(--gold)] transition-colors flex items-center gap-1.5 break-all">
                  <span className="text-[var(--gold)] opacity-75">✉</span> {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.url} target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[var(--gold)] transition-colors flex items-center gap-1.5">
                  <span className="text-[var(--gold)] opacity-75">🌐</span> trakyanakliyatistanbul.com
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-[rgba(255,255,255,0.5)] no-underline hover:text-[var(--gold)] transition-colors flex items-center gap-1.5">
                  <span className="text-[var(--gold)] opacity-75">📸</span> {SITE_CONFIG.instagramHandle}
                </a>
              </li>
              <li>
                <span className="text-[12.5px] text-[rgba(255,255,255,0.5)] flex items-center gap-1.5">
                  <span className="text-[var(--gold)] opacity-75">🕐</span> {SITE_CONFIG.workingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-3.5 gap-2 text-[11.5px] text-[rgba(255,255,255,0.26)]">
          <span>© 2025 RÜÇHANOĞLU NAKLİYAT. Tüm hakları saklıdır.</span>
          <div className="flex gap-4">
            <Link href="/kvkk" className="text-[rgba(255,255,255,0.26)] no-underline hover:text-[var(--gold)] transition-colors">KVKK</Link>
            <Link href="/gizlilik" className="text-[rgba(255,255,255,0.26)] no-underline hover:text-[var(--gold)] transition-colors">Gizlilik politikası</Link>
            <Link href="/kullanim-kosullari" className="text-[rgba(255,255,255,0.26)] no-underline hover:text-[var(--gold)] transition-colors">Kullanım koşulları</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

