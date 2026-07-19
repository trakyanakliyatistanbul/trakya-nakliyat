import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import { IconBox, IconMapPin, IconTag, IconUsers } from '@/components/services/icons'
import type { ServicePageContent } from '@/components/services/types'

export const metadata: Metadata = {
  title: 'Profesyonel Paketleme | Rüçhanoğlu Nakliyat - Eşya Koruma',
  description:
    'Rüçhanoğlu Nakliyat ile profesyonel paketleme hizmeti. Kırılgan ve değerli eşyalar için özel malzeme ve uzman teknik. Hemen teklif alın.',
}

const content: ServicePageContent = {
  hero: {
    badgeLabel: 'Profesyonel Paketleme',
    title: 'Profesyonel Paketleme Hizmeti',
    description:
      'Kırılgan ve değerli eşyalarınız için özel malzeme ve uzman teknikle paketleme yaparak nakliyat sürecinizi güvence altına alıyoruz.',
    primaryCtaLabel: 'Paketleme Talep Et',
  },
  whatSection: {
    title: 'Profesyonel Paketleme Nedir?',
    description:
      'Profesyonel paketleme, kırılgan ve değerli eşyaların özel malzeme ve uzman teknikle paketlenerek taşınma sırasında hasardan korunması işidir. Cam, seramik, elektronik gibi kırılgan eşyaların güvenli taşınması için gereklidir.',
    features: [
      {
        icon: IconBox,
        title: 'Özel Malzeme',
        desc: 'Bubble wrap, köpük, kraft kağıt gibi kaliteli paketleme malzemeleri kullanıyoruz.',
      },
      {
        icon: IconUsers,
        title: 'Uzman Ekip',
        desc: 'Paketleme konusunda deneyimli profesyonellerimiz her eşyaya özel dikkat gösterir.',
      },
      {
        icon: IconMapPin,
        title: 'Hasardan Koruma',
        desc: 'Eşyalarınız taşınma sırasında hasar görmesi riskini minimuma indiriyor.',
      },
      {
        icon: IconTag,
        title: 'Güvenli Taşıma',
        desc: 'Profesyonelce paketlenmiş eşyalar daha güvenli bir şekilde taşınır.',
      },
    ],
  },
  detailSection: {
    variant: 'tagGrid',
    title: 'Paketleme Yapılan Eşyalar',
    description:
      'Cam, seramik, elektronik ve diğer kırılgan eşyalar özel paketleme tekniklerimizle güvenle taşınır.',
    items: [
      'Cam Eşyalar',
      'Seramikler',
      'Tabak Set',
      'Elektronik',
      'Resimler',
      'Aynalar',
      'Lambalar',
      'Vazo ve Dekor',
      'Kitaplar',
    ],
  },
  closingCta: {
    title: 'Eşyalarınızı profesyonel olarak paketleyebiliriz',
    buttonLabel: 'Teklif Al',
  },
}

export default function ProfesyonelPaketlemePage() {
  return <ServicePageTemplate content={content} />
}
