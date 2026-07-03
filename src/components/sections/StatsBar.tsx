const stats = [
  { icon: '📍', title: 'İstanbul Geneli Hizmet', subtitle: 'Tüm şehirde geniş kapsam' },
  { icon: '🎯', title: 'Beylikdüzü Odaklı', subtitle: 'Yerel hizmette uzmanlık' },
  { icon: '🛡', title: '%100 Sigortalı Taşıma', subtitle: 'Eşyalarınız tam güvence' },
  { icon: '🔍', title: 'Ücretsiz Ekspertiz', subtitle: 'Net fiyat ve planlama' },
  { icon: '🏗', title: 'Asansörlü Nakliyat', subtitle: 'Yüksek katlarda hızlı taşıma' },
  { icon: '📦', title: 'Profesyonel Paketleme', subtitle: 'Her parça özenli korunur' },
]

export default function StatsBar() {
  return (
    <section className="bg-[#141d33] py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex h-full flex-col justify-between gap-4 rounded-[24px] border border-[rgba(176,141,87,0.18)] bg-[#0B1220]/50 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-[16px] bg-[rgba(176,141,87,0.12)] text-[24px] text-[var(--gold)]">
                {stat.icon}
              </div>
              <div>
                <div className="text-[16px] font-bold text-white leading-tight">{stat.title}</div>
                <div className="mt-2 text-[13px] text-[rgba(255,255,255,0.72)] leading-[1.6]">{stat.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

