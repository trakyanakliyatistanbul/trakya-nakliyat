const stats = [
  { icon: '2500+', title: 'Mutlu Müşteri', subtitle: 'Güvenli ve sorunsuz taşımalar' },
  { icon: '📅', title: '20+ Yıl Deneyim', subtitle: 'Yılların verdiği uzmanlık' },
  { icon: '%100', title: 'Sigortalı Taşıma', subtitle: 'Eşyalarınız tam güvence altında' },
  { icon: '7/24', title: 'Destek', subtitle: 'Her zaman hızlı iletişim' },
]

export default function StatsBar() {
  return (
    <section className="bg-[#141d33] py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex h-full flex-col justify-between gap-3 rounded-[24px] border border-[rgba(176,141,87,0.18)] bg-[#0B1220]/50 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="text-[24px] font-semibold text-[var(--gold)]">{stat.icon}</div>
              <div>
                <div className="text-[15px] font-bold text-white leading-tight">{stat.title}</div>
                <div className="mt-2 text-[13px] text-[rgba(255,255,255,0.72)] leading-[1.6]">{stat.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

