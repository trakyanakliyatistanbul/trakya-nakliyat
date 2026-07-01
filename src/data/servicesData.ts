import type { Service } from '@/types'

export const servicesData: Service[] = [
  {
    id: 'evden-eve',
    icon: 'home-move',
    title: 'Evden Eve Nakliyat',
    description:
      'Eşyalarınızı profesyonel paketleme yöntemleriyle güvenle taşıyor, yeni adresinize zamanında ve özenle ulaştırıyoruz.',
    perks: ['Sigortalı Taşıma', 'Profesyonel Paketleme'],
    featured: true,
  },
  {
    id: 'asansorlu',
    icon: 'elevator',
    title: 'Asansörlü Nakliyat',
    description:
      'Modern asansör sistemimiz sayesinde yüksek katlı binalarda hızlı, güvenli ve hasarsız taşıma hizmeti sunuyoruz.',
    perks: ['Hasarsız Taşıma', 'Uzman Ekip'],
  },
  {
    id: 'sehirlerarasi',
    icon: 'truck',
    title: 'Şehirlerarası Nakliyat',
    description:
      "Türkiye'nin birçok noktasına planlı, güvenli ve sigortalı şehirlerarası nakliyat hizmeti gerçekleştiriyoruz.",
    perks: ['Sigortalı', 'Planlı Teslimat'],
  },
  {
    id: 'ofis',
    icon: 'briefcase',
    title: 'Ofis Taşımacılığı',
    description:
      'İstanbul genelinde iş yerinizi hafta sonu taşıyoruz; ekipmanlarınız özenle paketlenir, Pazartesi çalışmaya hazır olursunuz.',
    perks: ['Esnek Planlama', 'Uzman Ekip'],
  },
  {
    id: 'depolama',
    icon: 'archive',
    title: 'Eşya Depolama',
    description:
      'Eşyalarınızı temiz, güvenli ve düzenli depolama alanlarımızda istediğiniz süre boyunca güvenle muhafaza ediyoruz.',
    perks: ['Güvenli Alan', 'Esnek Süre'],
  },
  {
    id: 'paketleme',
    icon: 'package',
    title: 'Profesyonel Paketleme',
    description:
      'Kırılgan ve değerli eşyalarınız için özel malzeme ve uzman teknikle paketleme yaparak nakliyat sürecinizi güvence altına alıyoruz.',
    perks: ['Özel Malzeme', 'Uzman Ekip'],
  },
]
