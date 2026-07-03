'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SITE_CONFIG } from '@/lib/constants'

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
      'Evden Eve Nakliyat',
      'Asansörlü Nakliyat',
      'Şehirlerarası Nakliyat',
      'Ofis Taşıma',
      'Parça Eşya Taşıma',
      'Eşya Depolama',
    ],
  },
  {
    id: 'kurumsal',
    label: 'Kurumsal',
    items: ['Hakkımızda', 'Müşteri Yorumları', 'Sık Sorulan Sorular'],
  },
  {
    id: 'medya',
    label: 'Medya',
    items: ['Fotoğraf Galerisi', 'Video Galerisi', 'Taşınma Hikâyeleri', 'Blog'],
  },
]

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [openSections, setOpenSections] = useState<string[]>(['hizmetler'])

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
      <header className="sticky top-0 z-50 border-b border-[rgba(176,141,87,0.18)] bg-[#0B1220]/95 backdrop-blur-sm">
        <nav className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[9px] bg-[var(--gold)]">
              <span className="text-[15px] font-black tracking-tight text-[#0B1220]">TN</span>
            </div>
            <div className="h-9 w-px rounded-sm bg-[rgba(176,141,87,0.3)]" />
            <div className="flex flex-col justify-center">
              <span className="text-[17px] font-extrabold leading-tight tracking-tight text-white">
                TRAKYA <span className="text-[var(--gold)]">NAKLİYAT</span>
              </span>
              <span className="mt-0.5 text-[9px] uppercase tracking-[1.2px] text-[rgba(255,255,255,0.42)]">
                İstanbul · Evden Eve Nakliyat
              </span>
            </div>
          </Link>

          <ul className="hidden items-center gap-0.5 list-none md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-1.5 text-[13.5px] text-[rgba(255,255,255,0.60)] no-underline transition-colors duration-150 hover:text-[var(--gold)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 md:hidden">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center text-[#C8A66A] transition-opacity duration-150 hover:opacity-80"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-2.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex items-center justify-center text-[#C8A66A] transition-opacity duration-150 hover:opacity-80"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M21.8 7.2a2.8 2.8 0 0 0-2-2A35.7 35.7 0 0 0 12 4.7a35.7 35.7 0 0 0-7.8.5 2.8 2.8 0 0 0-2 2 31.6 31.6 0 0 0-.5 4.8 31.6 31.6 0 0 0 .5 4.8 2.8 2.8 0 0 0 2 2 35.7 35.7 0 0 0 7.8.5 35.7 35.7 0 0 0 7.8-.5 2.8 2.8 0 0 0 2-2 31.6 31.6 0 0 0 .5-4.8 31.6 31.6 0 0 0-.5-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </a>
              <button
                type="button"
                aria-label="Menüyü aç"
                onClick={() => setIsDrawerOpen(true)}
                className="flex items-center justify-center text-[#C8A66A] transition-opacity duration-150 hover:opacity-80"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </svg>
              </button>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 rounded-[7px] border border-[rgba(74,222,128,0.35)] px-3.5 py-2 text-[13px] text-[#4ade80] no-underline transition-colors hover:bg-[rgba(74,222,128,0.08)] sm:flex"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.103 1.514 5.829L0 24l6.335-1.479A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.369l-.36-.213-3.721.869.94-3.63-.234-.373A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-1.5 rounded-[7px] border-none bg-[var(--gold)] px-4 py-2 text-[13px] font-bold text-[#0B1220] no-underline transition-colors hover:bg-[var(--gold)]"
              >
                Teklif Al
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${isDrawerOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setIsDrawerOpen(false)}
      >
        <div className="absolute inset-0 bg-[rgba(3,7,18,0.62)] backdrop-blur-[2px]" />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[88vw] max-w-[360px] flex-col border-l border-[rgba(176,141,87,0.2)] bg-[#0B1220] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.36)] transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-[rgba(176,141,87,0.16)] pb-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[rgba(255,255,255,0.46)]">Menü</p>
              <p className="mt-1 text-[16px] font-semibold text-white">Trakya Nakliyat</p>
            </div>
            <button
              type="button"
              aria-label="Menüyü kapat"
              onClick={() => setIsDrawerOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(176,141,87,0.22)] bg-[rgba(176,141,87,0.08)] text-[var(--gold)]"
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
              className="flex items-center justify-between rounded-[14px] border border-[rgba(176,141,87,0.14)] bg-[rgba(176,141,87,0.06)] px-4 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[rgba(176,141,87,0.12)]"
            >
              <span>Ana Sayfa</span>
              <span className="text-[var(--gold)]">→</span>
            </Link>

            {drawerSections.map((section) => (
              <div key={section.id} className="rounded-[14px] border border-[rgba(176,141,87,0.14)] bg-[rgba(255,255,255,0.03)] px-3 py-2">
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  className="flex w-full items-center justify-between rounded-[10px] px-2 py-2 text-left text-[14px] font-semibold text-white"
                >
                  <span>{section.label}</span>
                  <span className="text-[var(--gold)]">{openSections.includes(section.id) ? '−' : '+'}</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections.includes(section.id) ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-1 px-2 pb-2 pt-1">
                    {section.items.map((item) => (
                      <Link
                        key={item}
                        href="/"
                        onClick={() => setIsDrawerOpen(false)}
                        className="block rounded-[10px] px-3 py-2 text-[13px] text-[rgba(255,255,255,0.76)] transition-colors hover:bg-[rgba(176,141,87,0.08)] hover:text-[var(--gold)]"
                      >
                        {item}
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

