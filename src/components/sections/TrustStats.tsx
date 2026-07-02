import { trustData } from '@/data/trustData'

export default function TrustStats() {
  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="mb-9">
          <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[var(--gold)] mb-2">
            Neden biz
          </div>
          <h2 className="text-[28px] font-bold text-[#0B1220] mb-2.5 tracking-tight">
            Rakamlarla Güven
          </h2>
          <p className="text-[14.5px] text-[#6b7280] leading-[1.7] max-w-[680px]">
            Trakya Nakliyat İstanbul olarak Beylikdüzü başta olmak üzere İstanbul genelinde
            güvenilir, profesyonel ve müşteri odaklı nakliyat hizmeti sunuyoruz; asansörlü nakliyat
            sistemimiz, modern paketleme anlayışımız ve deneyimli ekibimizle eşyalarınızı güvenle
            yeni adresinize ulaştırıyoruz.
          </p>
        </div>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustData.map((item) => (
            <div
              key={item.id}
              className="group bg-[#F8F9FA] border border-[#E5E7EB] rounded-[14px] p-4 text-center flex flex-col items-center justify-center gap-1.5 transition-all duration-200 hover:border-[#d1d5db] hover:-translate-y-0.5 cursor-default"
              style={{ minHeight: '84px', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
            >
              <div className="w-[34px] h-[34px] bg-white border-[1.5px] border-[var(--gold)] rounded-[9px] flex items-center justify-center">
                <span className="text-[16px] text-[var(--gold)]">{getTrustEmoji(item.icon)}</span>
              </div>
              <div className="text-[21px] font-bold text-[#0B1220] leading-[1.15]">{item.value}</div>
              <div className="text-[11.5px] text-[#6b7280]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getTrustEmoji(icon: string): string {
  const map: Record<string, string> = {
    'users': '👥',
    'star': '⭐',
    'shield-check': '🚐',
    'clock': '🕐',
    'headset': '📦',
    'circle-check': '🏗',
  }
  return map[icon] ?? '✓'
}

