import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trakyanakliyatistanbul.com'),
  title: {
    default: 'Trakya Nakliyat İstanbul | Beylikdüzü Evden Eve Nakliyat',
    template: '%s | Trakya Nakliyat İstanbul',
  },
  description:
    'Beylikdüzü başta olmak üzere İstanbul genelinde asansörlü evden eve nakliyat, şehirlerarası taşımacılık ve eşya depolama hizmetleri. Ücretsiz ekspertiz için arayın: 0544 999 34 66',
  keywords: [
    'Beylikdüzü evden eve nakliyat',
    'İstanbul nakliyat',
    'asansörlü nakliyat',
    'şehirlerarası nakliyat',
    'Trakya Nakliyat İstanbul',
    'Beylikdüzü nakliyat',
    'eşya depolama',
    'profesyonel paketleme',
  ],
  authors: [{ name: 'Trakya Nakliyat İstanbul' }],
  creator: 'Trakya Nakliyat İstanbul',
  publisher: 'Trakya Nakliyat İstanbul',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.trakyanakliyatistanbul.com',
    siteName: 'Trakya Nakliyat İstanbul',
    title: 'Trakya Nakliyat İstanbul | Beylikdüzü Evden Eve Nakliyat',
    description:
      'Beylikdüzü ve İstanbul genelinde profesyonel evden eve nakliyat hizmeti. Asansörlü sistem, sigortalı taşıma, ücretsiz ekspertiz.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trakya Nakliyat İstanbul',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trakya Nakliyat İstanbul | Beylikdüzü Evden Eve Nakliyat',
    description:
      'Beylikdüzü ve İstanbul genelinde profesyonel evden eve nakliyat. 0544 999 34 66',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'GOOGLE_SEARCH_CONSOLE_ID',  // Search Console doğrulama kodu buraya
  },
  alternates: {
    canonical: 'https://www.trakyanakliyatistanbul.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        {/* Schema.org - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MovingCompany',
              name: 'Trakya Nakliyat İstanbul',
              url: 'https://www.trakyanakliyatistanbul.com',
              telephone: '+905449993466',
              email: 'trakyanakliyatistanbul@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Beylikdüzü',
                addressRegion: 'İstanbul',
                addressCountry: 'TR',
              },
              openingHours: 'Mo-Su 07:00-22:00',
              priceRange: '₺₺',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                bestRating: '5',
                ratingCount: '150',
              },
              sameAs: [
                'https://instagram.com/trakyanakliyatistanbul',
                'https://www.trakyanakliyatistanbul.com',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
