import { trustData } from '@/data/trustData'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import IconBadge from '@/components/ui/IconBadge'

export default function TrustStats() {
  return (
    <section className="bg-white py-14">
      <Container>
        <SectionHeading
          eyebrow="Neden biz"
          title="Rakamlarla Güven"
          description="RÜÇHANOĞLU NAKLİYAT olarak Beylikdüzü başta olmak üzere İstanbul genelinde güvenilir, profesyonel ve müşteri odaklı nakliyat hizmeti sunuyoruz; asansörlü nakliyat sistemimiz, modern paketleme anlayışımız ve deneyimli ekibimizle eşyalarınızı güvenle yeni adresinize ulaştırıyoruz."
          descriptionClassName="text-[14.5px] leading-[1.7] max-w-[680px]"
        />

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustData.map((item) => (
            <Card
              key={item.id}
              className="group bg-[#F8F9FA] rounded-[14px] p-4 text-center flex flex-col items-center justify-center gap-1.5 transition-all duration-200 hover:border-[#d1d5db] hover:-translate-y-0.5 cursor-default"
              style={{ minHeight: '84px', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
            >
              <IconBadge className="w-[34px] h-[34px] rounded-[9px]">
                <span className="text-[16px] text-[var(--gold)]">{getTrustEmoji(item.icon)}</span>
              </IconBadge>
              <div className="text-[21px] font-bold text-[#0D1B2A] leading-[1.15]">{item.value}</div>
              <div className="text-[11.5px] text-[#6b7280]">{item.label}</div>
            </Card>
          ))}
        </div>
      </Container>
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

