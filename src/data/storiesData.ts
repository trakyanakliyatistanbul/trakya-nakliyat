import type { MovingStory } from '@/types'

export const storiesData: MovingStory[] = [
  {
    id: 's1',
    badge: 'Şehir içi',
    badgeColor: 'gold',
    title: 'Beylikdüzü → Bahçeşehir',
    description: '3+1 daire, asansörlü sistem, tek günde tamamlandı.',
    date: 'Mart 2025',
    duration: '6 saat',
    photoCount: '12 fotoğraf',
    hasVideo: true,
  },
  {
    id: 's2',
    badge: 'Şehirlerarası',
    badgeColor: 'gold',
    title: 'İstanbul → Ankara',
    description: 'Tam ev eşyası, özel ambalaj, 24 saatte teslim.',
    date: 'Nisan 2025',
    duration: '1 gün',
    photoCount: '9 fotoğraf',
    hasVideo: true,
  },
  {
    id: 's3',
    badge: 'Ofis',
    badgeColor: 'gold',
    title: 'Esenyurt Ofis Taşıması',
    description: '20 kişilik ofis, hafta sonu operasyonu, Pazartesi hazır.',
    date: 'Mayıs 2025',
    duration: '2 gün',
    photoCount: '8 fotoğraf',
    hasVideo: false,
  },
]
