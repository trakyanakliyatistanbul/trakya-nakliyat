'use client'

import { SITE_CONFIG } from '@/lib/constants'

export default function WhatsAppFloat() {
  return (
    <div className="fixed right-[calc(1rem+env(safe-area-inset-right))] bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-50">
      {/* Pulse ring */}
      <div
        className="absolute bottom-0 right-0 w-[44px] h-[44px] rounded-full pointer-events-none"
        style={{
          background: 'rgba(37,211,102,0.3)',
          animation: 'pulse-ring 2.5s ease-out infinite',
        }}
      />
      {/* Button */}
      <a
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişim kur"
        className="relative z-10 w-[44px] h-[44px] rounded-full bg-[#25d366] flex items-center justify-center no-underline hover:scale-110 transition-transform duration-200"
        style={{ boxShadow: '0 4px 16px rgba(37,211,102,0.4)' }}
      >
        <svg className="w-7 h-7" fill="white" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.103 1.514 5.829L0 24l6.335-1.479A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.369l-.36-.213-3.721.869.94-3.63-.234-.373A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
        </svg>
      </a>

      <style jsx global>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.6) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  )
}
