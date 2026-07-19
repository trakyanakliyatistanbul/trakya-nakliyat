import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import { IconClipboard, IconHome, IconTag, IconUsers } from '@/components/services/icons'
import type { ServicePageContent } from '@/components/services/types'

export const metadata: Metadata = {
  title: 'Parça Eşya Taşıması | Rüçhanoğlu Nakliyat - Tek Eşya Taşıma',
  description:
    'Rüçhanoğlu Nakliyat ile parça eşya taşıması. Koltuk, masa, buzdolabı gibi tek ürünler profesyonel olarak taşınır. Hemen teklif alın.',
}

const content: ServicePageContent = {
  hero: {
    badgeLabel: 'Parça Eşya Taşıması',
    title: 'Parça Eşya Taşıması Hizmeti',
    description:
      'Koltuk, masa, buzdolabı, çamaşır makinesi gibi tek ürünlerin veya az sayıda eşyanın taşınması için uygun fiyatlı parça eşya taşımacılığı hizmeti sunuyoruz.',
    primaryCtaLabel: 'Parça Eşya Talep Et',
  },
  whatSection: {
    title: 'Parça Eşya Taşıması Nedir?',
    description:
      'Parça eşya taşıması, tam taşınma değil de tek bir eşya veya az sayıda eşyanın taşınması hizmetidir. Online alışveriş, hediye almış olunması veya ufak ihtiyaçlar için tercih edilen bir hizmettir.',
    features: [
      {
        icon: IconTag,
        title: 'Uygun Fiyat',
        desc: 'Tam taşınma kadar maliyetli olmayan ekonomik bir çözüm.',
      },
      {
        icon: IconHome,
        title: 'Hızlı Taşıma',
        desc: 'Tek eşya veya az sayıda eşya hızlıca taşınabilir.',
      },
      {
        icon: IconUsers,
        title: 'Uzman Ekip',
        desc: 'Profesyonel ekibimiz eşyalarınızı güvenle taşır.',
      },
      {
        icon: IconClipboard,
        title: 'Güvenli Taşıma',
        desc: 'Eşyalarınız güvenli ve hasarsız bir şekilde taşınır.',
      },
    ],
  },
  detailSection: {
    variant: 'tagGrid',
    title: 'Taşıyabileceğimiz Parça Eşyalar',
    description:
      'Koltuk, masa, sandalye, buzdolabı, çamaşır makinesi, ütü masası ve benzeri birçok eşyayı taşıyabiliyoruz.',
    items: [
      'Koltuk',
      'Masa',
      'Sandalye',
      'Buzdolabı',
      'Çamaşır Makinesi',
      'Beyaz Eşya',
      'Yatak',
      'Ütü Masası',
      'Raf ve Dolap',
    ],
  },
  closingCta: {
    title: 'Parça eşyalarınızı taşıyalım',
    buttonLabel: 'Teklif Al',
  },
}

export default function ParcaEsyaPage() {
  return <ServicePageTemplate content={content} />
}
