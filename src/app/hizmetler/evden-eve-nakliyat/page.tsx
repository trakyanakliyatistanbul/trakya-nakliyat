import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import {
  IconBox,
  IconClipboard,
  IconHome,
  IconLayers,
  IconMapPin,
  IconTag,
  IconTruck,
  IconUsers,
  IconWrench,
} from '@/components/services/icons'
import type { ServicePageContent } from '@/components/services/types'

export const metadata: Metadata = {
  title: 'Evden Eve Nakliyat İstanbul | Rüçhanoğlu Nakliyat - Profesyonel Ev Taşıma',
  description:
    'Rüçhanoğlu Nakliyat ile İstanbul içi ve şehirlerarası evden eve nakliyat. Profesyonel ambalajlama, mobilya kurulum ve beyaz eşya bağlantısı dahil. Hemen teklif alın.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Evden Eve Nakliyat',
  provider: {
    '@type': 'MovingCompany',
    name: 'Rüçhanoğlu Nakliyat',
    areaServed: 'İstanbul',
  },
  areaServed: {
    '@type': 'City',
    name: 'İstanbul',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ev taşıma için kaç gün önceden randevu almalıyım?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yoğun dönemlerde (ay sonu, yaz ayları) en az 5-7 gün önceden planlama yapmanızı öneririz. Hafta içi ve ay ortası taşımalarda 1-2 gün önceden randevu genellikle yeterlidir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Eşyalarımı kendim paketlersem fiyat düşer mi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet, ambalajlama hizmetini almadığınızda işçilik maliyeti düşer. Ancak kırılacak eşyalarda profesyonel paketleme önerilir; bu, taşınma sırasında oluşabilecek hasar riskini azaltır.',
      },
    },
    {
      '@type': 'Question',
      name: 'Asansörsüz bir binadayım, ek ücret öder miyim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '4. kat ve üzeri asansörsüz binalarda genellikle asansörlü nakliyat önerilir ve bu ayrı bir kalemdir. Keşif sırasında bina durumunu değerlendirip size net bir rakam veririz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Taşınma sırasında evde bulunmam şart mı?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zorunlu değildir, ancak ilk keşifte ve eşyaların yeni evde teslim alınmasında bir yetkilinin bulunması sürecin sorunsuz ilerlemesi için önerilir.',
      },
    },
  ],
}

const content: ServicePageContent = {
  jsonLdList: [jsonLd, faqJsonLd],
  hero: {
    badgeLabel: 'İstanbul içi & şehirlerarası',
    title: 'İstanbul Evden Eve Nakliyat Hizmeti',
    description:
      "İstanbul içinde ev taşımak, doğru firma seçildiğinde birkaç saatte tamamlanan sıradan bir işe dönüşür. Rüçhanoğlu Nakliyat olarak başta İstanbul içi olmak üzere şehirlerarası taşımaları da kapsayan, net ve öngörülebilir bir süreç sunuyoruz: ücretsiz keşif, ambalajlama ve taşıma planı.",
    primaryCtaLabel: 'Ücretsiz Keşif Talep Et',
    stats: [
      { value: '39', label: 'İstanbul ilçesi' },
      { value: '5', label: 'Adımlı süreç' },
      { value: '4-6s', label: 'Ortalama 3+1 taşıma' },
    ],
  },
  whatSection: {
    title: 'Neden Rüçhanoğlu Nakliyat?',
    description:
      'Nakliyat sektöründe onlarca firma arasından seçim yaparken sorulması gereken doğru soru “en ucuz kim” değil, “eşyalarım kimin elinde güvende” olmalı.',
    features: [
      {
        icon: IconClipboard,
        title: 'Keşifsiz teklif vermiyoruz',
        desc: 'Telefonda verilen “ortalama” rakamlar taşınma günü sürpriz ek ücretlere dönüşür; biz her taşımadan önce yerinde veya görüntülü keşif yapıyoruz.',
      },
      {
        icon: IconWrench,
        title: 'Teknik problemlere çözüm üretiyoruz',
        desc: 'Dar merdiven, asansöre sığmayan eşya, park ve giriş kısıtları gibi pratik sorunlarda yerinde çözüm buluyoruz.',
      },
      {
        icon: IconUsers,
        title: 'Eğitimli, sabit ekip',
        desc: 'Eşyalarınızı taşıyan ekip, günlük tutulan gündelikçiler değil, düzenli çalışan ve süreci bilen bir kadro.',
      },
      {
        icon: IconTag,
        title: 'Şeffaf fiyatlandırma',
        desc: 'Keşif sonrası verdiğimiz teklif, taşınma günü değişmez.',
      },
    ],
    ctaLabel: 'Bugün Teklif Al',
  },
  detailSection: {
    variant: 'iconGrid',
    title: 'Fiyat neye göre değişir?',
    description:
      'Kesin fiyatı evinizi görmeden tahmin etmiyoruz; rakam yerinde veya görüntülü keşif sonrası netleşir.',
    items: [
      {
        icon: IconBox,
        title: 'Eşya hacmi',
        desc: '1+1 bir daire ile 4+1 bir villa arasında araç ve ekip ihtiyacı farklıdır.',
      },
      {
        icon: IconLayers,
        title: 'Kat ve asansör durumu',
        desc: 'Asansörsüz binalarda 4. kat ve üzeri taşımalarda genellikle asansörlü nakliyat önerilir.',
      },
      {
        icon: IconMapPin,
        title: 'Mesafe',
        desc: 'İstanbul içi taşımalarla şehirlerarası taşımalar arasında süre ve maliyet farkı oluşur.',
      },
      {
        icon: IconTag,
        title: 'Ambalaj ihtiyacı',
        desc: 'Kendi kutularınızla taşınmak daha ucuzdur; profesyonel ambalajlama kırılma riskini azaltır.',
      },
    ],
    note: {
      label: 'Ek hizmetler:',
      text: 'Perde sökme-takma gibi özel talepler ayrı ücretlendirilebilir; mobilya sökme-kurma ve beyaz eşya bağlantısı ise hizmetimize dahildir.',
    },
  },
  process: {
    title: 'Taşınma günü: 5 adımda nasıl işliyor?',
    description: 'Ortalama bir 3+1 dairenin taşınması, asansör kullanılabiliyorsa 4-6 saat sürer.',
    steps: [
      {
        title: 'Ücretsiz Keşif',
        desc: 'Ekibimiz evinizi görür, eşya hacmini ve özel ihtiyaçları belirler.',
        icon: IconClipboard,
      },
      {
        title: 'Ambalajlama',
        desc: 'Eşyalar oda oda, kırılacaklar katmanlı ve etiketli paketlenir.',
        icon: IconBox,
      },
      {
        title: 'Söküm ve Yükleme',
        desc: 'Mobilyalar sökülür, araca yükleme ihtiyaç sırasına göre planlanır.',
        icon: IconWrench,
      },
      {
        title: 'Taşıma',
        desc: 'Eşyalarınız güvenli ve planlı bir şekilde yeni adresinize ulaştırılır.',
        icon: IconTruck,
      },
      {
        title: 'Yerleşim',
        desc: 'Eşyalar odalara yerleştirilir, mobilyalar kurulur, beyaz eşya bağlanır.',
        icon: IconHome,
      },
    ],
    ctaLabel: 'Taşınma Tarihini Şimdi Planla',
  },
  regions: {
    title: 'Hangi yerlerde hizmet veriyoruz?',
    description:
      'Başta Beylikdüzü, Büyükçekmece, Avcılar ve Esenyurt olmak üzere İstanbul’un tüm ilçelerinde evden eve nakliyat hizmeti veriyoruz; ihtiyaç halinde şehirlerarası taşımalarınızı da üstleniyoruz.',
    items: [
      'Beylikdüzü',
      'Büyükçekmece',
      'Avcılar',
      'Esenyurt',
      'Bakırköy',
      'Küçükçekmece',
      'Başakşehir',
      'Beşiktaş',
      'Şişli',
      'Kadıköy',
      'Üsküdar',
      'Ataşehir',
      "ve İstanbul'un tüm ilçeleri",
    ],
  },
  faq: {
    title: 'Sık Sorulan Sorular',
    items: [
      {
        q: 'Ev taşıma için kaç gün önceden randevu almalıyım?',
        a: 'Yoğun dönemlerde (ay sonu, yaz ayları) en az 5-7 gün önceden planlama yapmanızı öneririz. Hafta içi ve ay ortası taşımalarda 1-2 gün önceden randevu genellikle yeterlidir.',
      },
      {
        q: 'Eşyalarımı kendim paketlersem fiyat düşer mi?',
        a: 'Evet, ambalajlama hizmetini almadığınızda işçilik maliyeti düşer. Ancak kırılacak eşyalarda (cam, seramik, elektronik) profesyonel paketleme önerilir; bu, taşınma sırasında oluşabilecek hasar riskini azaltır.',
      },
      {
        q: 'Asansörsüz bir binadayım, ek ücret öder miyim?',
        a: '4. kat ve üzeri asansörsüz binalarda genellikle asansörlü nakliyat önerilir ve bu ayrı bir kalemdir. Keşif sırasında bina durumunu değerlendirip size net bir rakam veririz.',
      },
      {
        q: 'Taşınma sırasında evde bulunmam şart mı?',
        a: 'Zorunlu değildir, ancak ilk keşifte ve eşyaların yeni evde teslim alınmasında bir yetkilinin bulunması sürecin sorunsuz ilerlemesi için önerilir.',
      },
    ],
  },
  closingCta: {
    title: 'Taşınmanız için net bir teklife hazır mısınız?',
    buttonLabel: 'Rüçhanoğlu Nakliyat’tan Hemen Teklif Al',
  },
}

export default function EvdenEveNakliyatPage() {
  return <ServicePageTemplate content={content} />
}
