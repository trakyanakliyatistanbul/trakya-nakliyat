import { ImageResponse } from 'next/og'

// Placeholder Apple touch icon matching the Logo component's temporary "R" monogram —
// swap this file's contents for a real logo asset (or a static apple-icon.png) once supplied.
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#B88C3B',
          borderRadius: 38,
        }}
      >
        <span
          style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: 104,
            fontWeight: 900,
            color: '#0D1B2A',
          }}
        >
          R
        </span>
      </div>
    ),
    { ...size },
  )
}
