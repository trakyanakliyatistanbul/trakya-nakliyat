import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import { IconClipboard, IconMapPin, IconTag, IconUsers } from '@/components/services/icons'
import type { ServicePageContent } from '@/components/services/types'

export const metadata: Metadata = {
  title: 'Şehirlerarası Nakliyat | Rüçhanoğlu Nakliyat - Türkiye Geneli Taşıma',
  description:
    'Rüçhanoğlu Nakliyat ile Türkiye genelinde şehirlerarası nakliyat hizmeti. Planlı, güvenli ve sigortalı taşıma. Hemen teklif alın.',
}

const content: ServicePageContent = {
  hero: {
    badgeLabel: 'Şehirlerarası Taşıma',
    title: 'Şehirlerarası Nakliyat Hizmeti',
    description:
      "Türkiye'nin birçok noktasına planlı, güvenli ve sigortalı şehirlerarası nakliyat hizmeti gerçekleştiriyoruz. Uzun mesafeli taşımalarda deneyimli ekibimiz eşyalarınızın güvenliğini sağlar.",
    primaryCtaLabel: 'Şehirlerarası Taşıma Talep Et',
  },
  whatSection: {
    title: 'Şehirlerarası Nakliyat Hizmeti',
    description:
      'Şehirlerarası nakliyat, bir şehrden başka şehre eşya taşıma işidir. Rüçhanoğlu Nakliyat olarak bu tür taşımalarda deneyim sahibi, güvenilir ve sigortalı hizmet sunuyoruz.',
    features: [
      {
        icon: IconMapPin,
        title: 'Planlı Teslimat',
        desc: 'Taşıma günü ve teslimat saati önceden belirlemek için detaylı planlama yapıyoruz.',
      },
      {
        icon: IconTag,
        title: 'Sigortalı Taşıma',
        desc: 'Eşyalarınız taşınma süresi boyunca tamamen sigortalı olarak taşınır.',
      },
      {
        icon: IconUsers,
        title: 'Uzman Ekip',
        desc: 'Uzun mesafeli taşımada deneyimli ve profesyonel ekibimiz.',
      },
      {
        icon: IconClipboard,
        title: 'Profesyonel Paketleme',
        desc: 'Eşyalarınız profesyonel şekilde paketlenerek taşınır.',
      },
    ],
  },
  detailSection: {
    variant: 'tagGrid',
    title: 'Hizmet Verdiğimiz Bölgeler',
    description:
      "Türkiye'nin büyük şehirlerine şehirlerarası nakliyat hizmeti sunuyoruz. İstanbul, Ankara, İzmir, Bursa, Antalya ve daha birçok şehire taşıma yapıyoruz.",
    items: ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Mersin', 'Gaziantep', 'Konya', 'Kayseri'],
  },
  closingCta: {
    title: 'Şehirlerarası taşınma için hemen teklif alın',
    buttonLabel: 'Teklif Al',
  },
}

export default function SehirlerarasiNakliyatPage() {
  return <ServicePageTemplate content={content} />
}
