import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import { IconHome, IconLayers, IconTag, IconUsers } from '@/components/services/icons'
import type { ServicePageContent } from '@/components/services/types'

export const metadata: Metadata = {
  title: 'Ofis Taşımacılığı İstanbul | Rüçhanoğlu Nakliyat - İş Yeri Taşıma',
  description:
    "Rüçhanoğlu Nakliyat ile İstanbul'da profesyonel ofis taşımacılığı. Hafta sonu taşıma, iş akışı kesintisiz. Hemen teklif alın.",
}

const content: ServicePageContent = {
  hero: {
    badgeLabel: 'Ofis Taşımacılığı',
    title: 'Profesyonel Ofis Taşımacılığı',
    description:
      'İstanbul genelinde iş yerinizi hafta sonu taşıyoruz; ekipmanlarınız özenle paketlenir, Pazartesi çalışmaya hazır olursunuz. İş akışınızı minimum düzeyde kesintiye uğratarak taşıma işini yönetiyoruz.',
    primaryCtaLabel: 'Ofis Taşıma Talep Et',
  },
  whatSection: {
    title: 'Ofis Taşımacılığı Nedir?',
    description:
      'Ofis taşımacılığı, bir işletmenin/şirketin ekipmanlarının, mobilyalarının ve diğer malzemeleriyle birlikte yeni bir yere taşınması işidir. Bu işlem iş akışını minimum kesintiye uğratarak gerçekleştirilmelidir.',
    features: [
      {
        icon: IconLayers,
        title: 'Esnek Planlama',
        desc: 'Ofis saatleri dışında hafta sonu taşıma ile iş akışı kesintiye uğramaz.',
      },
      {
        icon: IconUsers,
        title: 'Uzman Ekip',
        desc: 'Ofis taşımacılığında deneyimli profesyonel ekibimiz.',
      },
      {
        icon: IconHome,
        title: 'Ekipman Kurulumu',
        desc: 'Taşınan ekipmanlar yeni yerde kurulur ve kullanıma hazır hale getirilir.',
      },
      {
        icon: IconTag,
        title: 'Şeffaf Fiyatlandırma',
        desc: 'Keşif sonrası verilen fiyat taşıma günü değişmez.',
      },
    ],
  },
  detailSection: {
    variant: 'stackedCards',
    title: 'Ofis Taşımacılığı Süreci',
    description:
      'Ofis taşımacılığında detaylı planlama ve koordinasyon hayati önem taşır. Biz her adımda sizin yanınızda olur, iş akışınızı minimum kesintiye uğratırız.',
    items: [
      {
        title: '1. Detaylı Keşif ve Planlama',
        desc: 'Ofis ortamını inceleyerek eşya envanteri oluşturur ve taşıma planını hazırlarız.',
      },
      {
        title: '2. Paketleme ve Hazırlık',
        desc: 'Ofis eşyaları özel olarak paketlenterek hasardan korunur.',
      },
      {
        title: '3. Taşıma ve Kurulum',
        desc: 'Eşyalar yeni yere taşınır, mobilyalar kurulur ve ekipmanlar kullanıma hazır hale getirilir.',
      },
    ],
  },
  closingCta: {
    title: 'Ofis taşınmanız için hemen teklif alın',
    buttonLabel: 'Teklif Al',
  },
}

export default function OfisTasmaciligiPage() {
  return <ServicePageTemplate content={content} />
}
