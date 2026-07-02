import { servicesData } from '@/data/servicesData'

export default function Services() {
  return (
    <section id="hizmetler" className="bg-[#F8F9FA] py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="mb-9">
          <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[var(--gold)] mb-2">
            Hizmetlerimiz
          </div>
          <h2 className="text-[28px] font-bold text-[#0B1220] mb-2.5 tracking-tight">
            Trakya Nakliyat İstanbul ile her ihtiyaca uygun çözüm
          </h2>
          <p className="text-[14.5px] text-[#6b7280] leading-[1.7] max-w-[640px]">
            Beylikdüzü ve İstanbul genelinde evden eve nakliyattan şehirlerarası taşımaya,
            asansörlü sistemden eşya depolamaya kadar profesyonel hizmet sunuyoruz.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-[#E5E7EB] rounded-[16px] p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:border-[#d1d5db] cursor-pointer"
              style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
            >
              {/* Hover top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Featured badge */}
              {service.featured && (
                <span className="absolute top-3 right-3 bg-[#0B1220] text-[var(--gold)] text-[10px] font-bold px-2 py-0.5 rounded-full">
                  En çok tercih
                </span>
              )}

              {/* Icon */}
              <div className="w-11 h-11 rounded-[11px] bg-white border-[1.5px] border-[var(--gold)] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#0B1220] group-hover:border-[#0B1220]">
                <span className="text-[20px] text-[var(--gold)] group-hover:text-[var(--gold)] transition-colors duration-300">
                  {getServiceEmoji(service.icon)}
                </span>
              </div>

              <h3 className="text-[14px] font-bold text-[#0B1220] mb-1.5">{service.title}</h3>
              <p className="text-[12.5px] text-[#6b7280] leading-[1.65] mb-3">{service.description}</p>

              {/* Perks */}
              <div className="border-t border-[#E5E7EB] pt-2.5 flex flex-col gap-1 mb-2.5">
                {service.perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-1.5 text-[11.5px] text-[#4b5563]">
                    <span className="text-[var(--gold)] text-[12px]">✓</span>
                    {perk}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-1 text-[12px] text-[var(--gold)] font-semibold transition-all duration-200 group-hover:gap-1.5">
                Detayları gör <span>›</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getServiceEmoji(icon: string): string {
  const map: Record<string, string> = {
    'home-move': '🏠',
    'elevator': '🏗',
    'truck': '🚛',
    'briefcase': '💼',
    'archive': '📦',
    'package': '🗳',
  }
  return map[icon] ?? '📋'
}

