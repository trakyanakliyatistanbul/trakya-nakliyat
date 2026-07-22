'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SITE_CONFIG } from '@/lib/constants'
import Logo from '@/components/ui/Logo'

const navLinks = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Taşıma Hikayeleri', href: '#hikayeler' },
  { label: 'SSS', href: '#sss' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'İletişim', href: '#iletisim' },
]

const drawerSections = [
  {
    id: 'hizmetler',
    label: 'Hizmetler',
    items: [
      { label: 'Evden Eve Nakliyat', href: '/hizmetler/evden-eve-nakliyat' },
      { label: 'Asansörlü Nakliyat', href: '/hizmetler/asansorlu-nakliyat' },
      { label: 'Şehirlerarası Nakliyat', href: '/hizmetler/sehirlerarasi-nakliyat' },
      { label: 'Ofis Taşımacılığı', href: '/hizmetler/ofis-tasmaciligi' },
      { label: 'Parça Eşya Taşıması', href: '/hizmetler/parca-esya-tasmasi' },
      { label: 'Eşya Depolama', href: '/hizmetler/esya-depolama' },
      { label: 'Profesyonel Paketleme', href: '/hizmetler/profesyonel-paketleme' },
    ],
  },
  {
    id: 'kurumsal',
    label: 'Kurumsal',
    items: [
      { label: 'Hakkımızda', href: '/#hakkimizda' },
      { label: 'Müşteri Yorumları', href: '/#yorumlar' },
      { label: 'Sık Sorulan Sorular', href: '/#sss' },
    ],
  },
  {
    id: 'medya',
    label: 'Medya',
    items: [
      { label: 'Taşınma Hikâyeleri', href: '/#hikayeler' },
    ],
  },
]

// Scroll-collapsed header sizing — all reduce ~12-15% from the spacious initial state,
// landing close to the header's pre-redesign size once scrolled.
const HEADER_HEIGHT = { base: 88, scrolled: 76 }
const NAV_FONT_SIZE = { base: 14.5, scrolled: 13 }
const NAV_LINK_PADDING = { base: '7px 14px', scrolled: '5px 11px' }
const NAV_GAP = { base: 4, scrolled: 2 }
const ICON_SIZE = { base: 26, scrolled: 22 }
const TRANSITION = 'transition-all duration-[280ms] ease-out'

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [openSections, setOpenSections] = useState<string[]>(['hizmetler'])
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isDrawerOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsDrawerOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isDrawerOpen])

  const toggleSection = (sectionId: string) => {
    setOpenSections((current) =>
      current.includes(sectionId)
        ? current.filter((id) => id !== sectionId)
        : [...current, sectionId],
    )
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-[rgba(184, 140, 59,0.18)] bg-white ${TRANSITION} ${
          isScrolled ? 'shadow-[0_4px_24px_rgba(15,23,42,0.06)] backdrop-blur-sm' : 'shadow-none'
        }`}
      >
        <nav
          className={`mx-auto flex max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-10 ${TRANSITION}`}
          style={{ height: isScrolled ? HEADER_HEIGHT.scrolled : HEADER_HEIGHT.base }}
        >
          <Logo onLight scrolled={isScrolled} />

          <ul
            className="hidden list-none items-center md:flex"
            style={{ gap: isScrolled ? NAV_GAP.scrolled : NAV_GAP.base }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-md text-[#1F2937] no-underline hover:text-[var(--gold)] ${TRANSITION}`}
                  style={{
                    fontSize: isScrolled ? NAV_FONT_SIZE.scrolled : NAV_FONT_SIZE.base,
                    padding: isScrolled ? NAV_LINK_PADDING.scrolled : NAV_LINK_PADDING.base,
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div
              className={`flex items-center md:hidden ${TRANSITION}`}
              style={{ gap: isScrolled ? 10 : 12 }}
            >
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`flex items-center justify-center hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88C3B]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${TRANSITION}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{ width: isScrolled ? ICON_SIZE.scrolled : ICON_SIZE.base, height: isScrolled ? ICON_SIZE.scrolled : ICON_SIZE.base }}
                >
                  <defs>
                    <linearGradient id="ig-gradient-m" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f58529" />
                      <stop offset="50%" stopColor="#dd2a7b" />
                      <stop offset="100%" stopColor="#8134af" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#ig-gradient-m)"
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-2.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"
                  />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={`flex items-center justify-center text-[#FF0000] hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88C3B]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${TRANSITION}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                  style={{ width: isScrolled ? ICON_SIZE.scrolled : ICON_SIZE.base, height: isScrolled ? ICON_SIZE.scrolled : ICON_SIZE.base }}
                >
                  <path d="M21.8 7.2a2.8 2.8 0 0 0-2-2A35.7 35.7 0 0 0 12 4.7a35.7 35.7 0 0 0-7.8.5 2.8 2.8 0 0 0-2 2 31.6 31.6 0 0 0-.5 4.8 31.6 31.6 0 0 0 .5 4.8 2.8 2.8 0 0 0 2 2 35.7 35.7 0 0 0 7.8.5 35.7 35.7 0 0 0 7.8-.5 2.8 2.8 0 0 0 2-2 31.6 31.6 0 0 0 .5-4.8 31.6 31.6 0 0 0-.5-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </a>
              <button
                type="button"
                aria-label="Menüyü aç"
                onClick={() => setIsDrawerOpen(true)}
                className={`flex flex-col items-center justify-center gap-1 text-[#1F2937] hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88C3B]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${TRANSITION}`}
              >
                <svg
                  viewBox="0 0 24 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                  style={{
                    width: isScrolled ? ICON_SIZE.scrolled : ICON_SIZE.base,
                    height: (isScrolled ? ICON_SIZE.scrolled : ICON_SIZE.base) * (10 / 24),
                  }}
                >
                  <path d="M5 2h14" />
                  <path d="M5 8h14" />
                </svg>
                <span className="w-full text-center text-[9px] font-medium leading-none tracking-wide text-[#1F2937]">Menü</span>
              </button>
            </div>

            <div
              className={`hidden items-center md:flex ${TRANSITION}`}
              style={{ gap: isScrolled ? 10 : 12 }}
            >
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`flex items-center justify-center hover:scale-110 ${TRANSITION}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{ width: isScrolled ? ICON_SIZE.scrolled : ICON_SIZE.base, height: isScrolled ? ICON_SIZE.scrolled : ICON_SIZE.base }}
                >
                  <defs>
                    <linearGradient id="ig-gradient-d" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f58529" />
                      <stop offset="50%" stopColor="#dd2a7b" />
                      <stop offset="100%" stopColor="#8134af" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#ig-gradient-d)"
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-2.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"
                  />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={`flex items-center justify-center text-[#FF0000] hover:scale-110 ${TRANSITION}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                  style={{ width: isScrolled ? ICON_SIZE.scrolled : ICON_SIZE.base, height: isScrolled ? ICON_SIZE.scrolled : ICON_SIZE.base }}
                >
                  <path d="M21.8 7.2a2.8 2.8 0 0 0-2-2A35.7 35.7 0 0 0 12 4.7a35.7 35.7 0 0 0-7.8.5 2.8 2.8 0 0 0-2 2 31.6 31.6 0 0 0-.5 4.8 31.6 31.6 0 0 0 .5 4.8 2.8 2.8 0 0 0 2 2 35.7 35.7 0 0 0 7.8.5 35.7 35.7 0 0 0 7.8-.5 2.8 2.8 0 0 0 2-2 31.6 31.6 0 0 0 .5-4.8 31.6 31.6 0 0 0-.5-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Fixed header no longer occupies flow space — this spacer keeps page content clear of it,
          and shrinks in lockstep with the header so no gap opens up once scrolled. */}
      <div
        aria-hidden="true"
        className={TRANSITION}
        style={{ height: isScrolled ? HEADER_HEIGHT.scrolled : HEADER_HEIGHT.base }}
      />

      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${isDrawerOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setIsDrawerOpen(false)}
      >
        <div className="absolute inset-0 bg-[rgba(3,7,18,0.62)] backdrop-blur-[2px]" />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[88vw] max-w-[360px] flex-col border-l border-[rgba(184, 140, 59,0.2)] bg-[#0D1B2A] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.36)] transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-[rgba(184, 140, 59,0.16)] pb-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[rgba(255,255,255,0.46)]">Menü</p>
              <p className="mt-1 text-[16px] font-semibold text-white">RÜÇHANOĞLU NAKLİYAT</p>
            </div>
            <button
              type="button"
              aria-label="Menüyü kapat"
              onClick={() => setIsDrawerOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(184, 140, 59,0.22)] bg-[rgba(184, 140, 59,0.08)] text-[var(--gold)]"
            >
              <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M6 6l12 12" />
                <path d="M18 6 6 18" />
              </svg>
            </button>
          </div>

          <div className="mt-5 flex-1 space-y-2 overflow-y-auto pb-5">
            <Link
              href="/"
              onClick={() => setIsDrawerOpen(false)}
              className="flex items-center justify-between rounded-[14px] border border-[rgba(184, 140, 59,0.14)] bg-[rgba(184, 140, 59,0.06)] px-4 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[rgba(184, 140, 59,0.12)]"
            >
              <span>Ana Sayfa</span>
              <span className="text-[var(--gold)]">→</span>
            </Link>

            {drawerSections.map((section) => (
              <div key={section.id} className="rounded-[14px] border border-[rgba(184, 140, 59,0.14)] bg-[rgba(255,255,255,0.03)] px-3 py-2">
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  className="flex w-full items-center justify-between rounded-[10px] px-2 py-2 text-left text-[14px] font-semibold text-white"
                >
                  <span>{section.label}</span>
                  <span className="text-[var(--gold)]">{openSections.includes(section.id) ? '−' : '+'}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.includes(section.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-1 px-2 pb-2 pt-1">
                    {section.items.map((item) => (
                      <Link
                        key={typeof item === 'string' ? item : item.href}
                        href={typeof item === 'string' ? '/' : item.href}
                        onClick={() => setIsDrawerOpen(false)}
                        className="block rounded-[10px] px-3 py-2 text-[13px] text-[rgba(255,255,255,0.76)] transition-colors hover:bg-[rgba(184, 140, 59,0.08)] hover:text-[var(--gold)]"
                      >
                        {typeof item === 'string' ? item : item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsDrawerOpen(false)}
              className="mt-2 flex items-center justify-center rounded-[14px] border border-[rgba(74,222,128,0.28)] bg-[rgba(74,222,128,0.08)] px-4 py-3 text-[14px] font-semibold text-[#9ef8b3] transition-colors hover:bg-[rgba(74,222,128,0.14)]"
            >
              WhatsApp&apos;tan Teklif Al
            </a>
          </div>
        </aside>
      </div>
    </>
  )
}

