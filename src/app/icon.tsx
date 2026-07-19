import { ImageResponse } from 'next/og'

// Placeholder favicon matching the Logo component's temporary "R" monogram —
// swap this file's contents for a real logo asset (or a static icon.png) once supplied.
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: 7,
        }}
      >
        <span
          style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: 20,
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
