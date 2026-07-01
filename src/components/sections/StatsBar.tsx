const stats = [
  { value: 'İstanbul', label: 'Genelinde Hizmet' },
  { value: 'Beylikdüzü', label: 'Odaklı Çalışma' },
  { value: '%100', label: 'Sigortalı Taşıma' },
  { value: 'Ücretsiz', label: 'Ekspertiz' },
  { value: 'Asansörlü', label: 'Nakliyat Sistemi' },
]

export default function StatsBar() {
  return (
    <div
      className="bg-[#141d33]"
      style={{
        borderTop: '1px solid rgba(201,162,39,0.14)',
        borderBottom: '1px solid rgba(201,162,39,0.14)',
      }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="py-5 px-4 text-center"
            style={{
              borderRight: i < stats.length - 1 ? '1px solid rgba(201,162,39,0.1)' : 'none',
            }}
          >
            <div className="text-[16px] font-bold text-white leading-tight">{s.value}</div>
            <div className="text-[10px] text-[rgba(255,255,255,0.52)] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
