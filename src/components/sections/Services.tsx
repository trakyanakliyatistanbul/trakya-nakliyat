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
            RÜÇHANOĞLU NAKLİYAT ile her ihtiyaca uygun çözüm
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
                <span className="text-[var(--gold)] transition-colors duration-300">
                  {getServiceIcon(service.icon)}
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

function getServiceIcon(icon: string) {
  const icons: Record<string, React.ReactNode> = {
    'home-move': (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11L12 2l9 9" />
        <path d="M9 22V12h6v10" />
        <path d="M21 22H3" />
      </svg>
    ),
    'elevator': (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2h8v20H8z" />
        <path d="M12 6v4" />
        <path d="M12 14v4" />
        <path d="M6 10h12" />
      </svg>
    ),
    'truck': (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 3h15v13H1z" />
        <path d="M16 8h4l3 3v5H16z" />
        <circle cx="6.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    'briefcase': (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    'archive': (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h18" />
        <path d="M5 7v11h14V7" />
        <path d="M10 11h4" />
      </svg>
    ),
    'package': (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" />
        <path d="M12 3v18" />
        <path d="M3.27 6.96l8.73 5.01 8.73-5.01" />
      </svg>
    ),
  }
  return icons[icon] ?? (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v16H4z" />
    </svg>
  )
}

