import { SITE_CONFIG } from '@/lib/constants'

export default function WhatsAppStrip() {
  return (
    <div className="bg-[#0d3d23] px-10 py-3 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <span className="text-[#4ade80] text-xl">💬</span>
        <p className="text-[13.5px] text-[rgba(255,255,255,0.85)]">
          Hızlı fiyat almak ister misiniz?{' '}
          <strong className="text-white">
            {SITE_CONFIG.phone} numaralı hattımızdan WhatsApp&apos;a yazın.
          </strong>
        </p>
      </div>
      <a
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-white text-[#0d3d23] no-underline px-5 py-2 rounded-[7px] text-[13px] font-semibold hover:bg-[#f0fdf4] transition-colors"
      >
        💬 WhatsApp&apos;ta Yaz
      </a>
    </div>
  )
}
