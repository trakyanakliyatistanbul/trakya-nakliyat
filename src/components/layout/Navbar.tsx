'use client'

import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

const navLinks = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Taşıma Hikayeleri', href: '#hikayeler' },
  { label: 'SSS', href: '#sss' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B1220] border-b border-[rgba(201,162,39,0.18)]">
      <nav className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 h-[76px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-[42px] h-[42px] bg-[#C9A227] rounded-[9px] flex items-center justify-center flex-shrink-0">
            <span className="text-[15px] font-black text-[#0B1220] tracking-tight">TN</span>
          </div>
          <div className="w-px h-9 bg-[rgba(201,162,39,0.3)] rounded-sm" />
          <div className="flex flex-col justify-center">
            <span className="text-[17px] font-extrabold text-white tracking-tight leading-tight">
              TRAKYA <span className="text-[#D4AF37]">NAKLİYAT</span>
            </span>
            <span className="text-[9px] text-[rgba(255,255,255,0.42)] uppercase tracking-[1.2px] mt-0.5">
              İstanbul · Evden Eve Nakliyat
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-0.5 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[rgba(255,255,255,0.60)] no-underline text-[13.5px] px-3 py-1.5 rounded-md hover:text-[#D4AF37] transition-colors duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="flex items-center gap-2">
          {/* Instagram */}
          <a
            href="https://instagram.com/trakyanakliyatistanbul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden sm:flex items-center gap-1.5 text-[#e1306c] border border-[rgba(225,48,108,0.35)] px-3.5 py-2 rounded-[7px] text-[13px] no-underline hover:bg-[rgba(225,48,108,0.08)] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
          {/* WhatsApp */}
          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-[#4ade80] border border-[rgba(74,222,128,0.35)] px-3.5 py-2 rounded-[7px] text-[13px] no-underline hover:bg-[rgba(74,222,128,0.08)] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.103 1.514 5.829L0 24l6.335-1.479A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.369l-.36-.213-3.721.869.94-3.63-.234-.373A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href={SITE_CONFIG.phoneHref}
            className="flex items-center gap-1.5 bg-[#C9A227] text-[#0B1220] border-none px-4 py-2 rounded-[7px] text-[13px] font-bold no-underline hover:bg-[#D4AF37] transition-colors"
          >
            Teklif Al
          </a>
        </div>
      </nav>
    </header>
  )
}
