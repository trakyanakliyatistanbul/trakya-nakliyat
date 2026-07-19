import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import { IconBox, IconMapPin, IconTag, IconUsers } from '@/components/services/icons'
import type { ServicePageContent } from '@/components/services/types'

export const metadata: Metadata = {
  title: 'Asansörlü Nakliyat İstanbul | Rüçhanoğlu Nakliyat - Yüksek Katlı Bina Taşıma',
  description:
    "Rüçhanoğlu Nakliyat ile İstanbul'da asansörlü nakliyat hizmeti. Yüksek katlı binalarda hızlı, güvenli ve hasarsız taşıma. Hemen teklif alın.",
}

const content: ServicePageContent = {
  hero: {
    badgeLabel: 'Asansörlü Taşıma',
    title: 'Asansörlü Nakliyat Hizmeti',
    description:
      'Yüksek katlı binalarda taşıma işleri özel dikkat ve teçhizat gerektirir. Rüçhanoğlu Nakliyat olarak modern asansör sistemimiz sayesinde yüksek katlı binalarda hızlı, güvenli ve hasarsız taşıma hizmeti sunuyoruz.',
    primaryCtaLabel: 'Asansörlü Taşıma Talep Et',
  },
  whatSection: {
    title: 'Asansörlü Nakliyat Nedir?',
    description:
      'Asansörlü nakliyat, özellikle yüksek katlı binaların asansör sistemi kullanılarak gerçekleştirilen taşıma hizmetidir. Modern asansör sistemi sayesinde eşyalarınız daha hızlı, güvenli ve hasarsız bir şekilde taşınır.',
    features: [
      {
        icon: IconMapPin,
        title: 'Hızlı Taşıma',
        desc: 'Asansör sayesinde taşıma süreci kısalır ve daha verimli hale gelir.',
      },
      {
        icon: IconBox,
        title: 'Hasarsız Taşıma',
        desc: 'Eşyalarınız güvenli bir şekilde taşınır ve hasardan korunur.',
      },
      {
        icon: IconUsers,
        title: 'Uzman Ekip',
        desc: 'Asansörlü nakliyat konusunda eğitimli profesyonel ekipimiz.',
      },
      {
        icon: IconTag,
        title: 'Uygun Fiyat',
        desc: 'Keşif sonrası verilen fiyat taşıma günü değişmez.',
      },
    ],
  },
  detailSection: {
    variant: 'stackedCards',
    title: 'Asansörlü Nakliyat Ne Zaman Gerekli?',
    description:
      '4. kat ve üzeri asansörsüz binalarda, asansörlü binalarda taşıma işleri ve özel eşya taşımalarında asansörlü nakliyat hizmeti sunuyoruz.',
    items: [
      {
        title: 'Yüksek katlı binaların asansörlü taşınması',
        desc: 'Modern asansör sistemimiz sayesinde yüksek katlı binalarda hızlı ve güvenli taşıma.',
      },
      {
        title: 'Asansörsüz binalarda ek destek',
        desc: 'Asansörsüz binalarda 4. kat ve üzeri taşımalarda genellikle asansörlü nakliyat önerilir.',
      },
      {
        title: 'Hassas eşya taşıması',
        desc: 'Piyanolar, yazıcılar ve diğer hassas eşyalar asansörlü nakliyat ile daha güvenli taşınır.',
      },
    ],
  },
  closingCta: {
    title: 'Asansörlü taşınma için hemen teklif alın',
    buttonLabel: 'Teklif Al',
  },
}

export default function AsansorluNakliyatPage() {
  return <ServicePageTemplate content={content} />
}
