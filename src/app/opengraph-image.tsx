import { ImageResponse } from 'next/og'

// Placeholder OG image matching the Logo component's temporary "R" monogram —
// swap this file's contents for a real logo-based design once the brand asset is supplied.
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0D1B2A',
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 120,
              borderRadius: 26,
              background: '#B88C3B',
            }}
          >
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 68,
                fontWeight: 900,
                color: '#0D1B2A',
              }}
            >
              R
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <span
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 64,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: -1,
                }}
              >
                Rüçhanoğlu
              </span>
              <span
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 64,
                  fontWeight: 800,
                  color: '#B88C3B',
                  letterSpacing: -1,
                  marginLeft: 18,
                }}
              >
                Nakliyat
              </span>
            </div>
            <span
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 28,
                fontWeight: 400,
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginTop: 10,
              }}
            >
              İstanbul · Evden Eve Nakliyat
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
