import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import { IconBox, IconLayers, IconTag, IconUsers } from '@/components/services/icons'
import type { ServicePageContent } from '@/components/services/types'

export const metadata: Metadata = {
  title: 'Eşya Depolama İstanbul | Rüçhanoğlu Nakliyat - Güvenli Depolama',
  description:
    'Rüçhanoğlu Nakliyat ile eşya depolama hizmeti. Güvenli, temiz ve uygun fiyatlı depolama alanları. Hemen teklif alın.',
}

const content: ServicePageContent = {
  hero: {
    badgeLabel: 'Eşya Depolama',
    title: 'Güvenli Eşya Depolama Hizmeti',
    description:
      'Eşyalarınızı temiz, güvenli ve düzenli depolama alanlarımızda istediğiniz süre boyunca güvenle muhafaza ediyoruz. İhtiyacınız olduğunda hızlıca taşıyabileceğiniz güvenilir bir çözüm.',
    primaryCtaLabel: 'Depolama Alanı Talep Et',
  },
  whatSection: {
    title: 'Eşya Depolama Nedir?',
    description:
      'Eşya depolama, ev taşınması, iş değişikliği veya geçici ihtiyaçlarda eşyalarınızı güvenilir ortamlarda muhafaza etme hizmetidir. Rüçhanoğlu Nakliyat olarak modern, güvenli ve temiz depolama alanları sunuyoruz.',
    features: [
      {
        icon: IconBox,
        title: 'Güvenli Alan',
        desc: '24/7 güvenlik kameraları ve ekibi ile eşyalarınız tamamen güvende.',
      },
      {
        icon: IconLayers,
        title: 'Esnek Süre',
        desc: 'Ay, hafta veya gün ile uygun şekilde depolama süresi belirleyebilirsiniz.',
      },
      {
        icon: IconUsers,
        title: 'Profesyonel İşçilik',
        desc: 'Eşyalarınız profesyonel şekilde depolanır ve kataloglanır.',
      },
      {
        icon: IconTag,
        title: 'Uygun Fiyat',
        desc: 'Depolama alanı ve süresi ölçüsünde adil fiyatlandırma.',
      },
    ],
  },
  detailSection: {
    variant: 'stackedCards',
    title: 'Depolama Alanlarımız',
    description:
      'Modern, temiz ve iyi havalandırılan depolama alanlarımız eşyalarınızın en iyi şekilde muhafaza edilmesini sağlar.',
    items: [
      {
        title: 'İç Alanlar',
        desc: 'Kapalı ve kontrollü ortamda eşyalarınızın korunması sağlanır.',
      },
      {
        title: 'Güvenlik Sistemi',
        desc: '24/7 kamera sistemi ve güvenlik görevlileri ile tam koruma.',
      },
      {
        title: 'Sigorta Seçeneği',
        desc: 'Eşyalarınız sigorta seçeneği ile tamamen korunabilir.',
      },
    ],
  },
  closingCta: {
    title: 'Eşyalarınızı güvenli bir yerde depolayın',
    buttonLabel: 'Teklif Al',
  },
}

export default function EsyaDepolarPage() {
  return <ServicePageTemplate content={content} />
}
