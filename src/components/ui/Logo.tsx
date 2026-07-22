import Image from 'next/image'
import Link from 'next/link'

// Source assets are 1366x456 (≈3:1) horizontal lockups from the corporate identity package.
const LOGO_ASPECT_RATIO = 1366 / 456

interface LogoProps {
  variant?: 'full' | 'compact'
  /** Set when the logo sits on a white/light background (e.g. the header) instead of navy. */
  onLight?: boolean
  className?: string
}

export default function Logo({ variant = 'full', onLight = false, className = '' }: LogoProps) {
  const isCompact = variant === 'compact'
  const height = isCompact ? 32 : 40
  const width = Math.round(height * LOGO_ASPECT_RATIO)

  return (
    <Link href="/" className={`flex items-center no-underline ${className}`}>
      <Image
        src={onLight ? '/logo-dark.png' : '/logo-light.png'}
        alt="Rüçhanoğlu Nakliyat"
        width={width}
        height={height}
        priority={!isCompact}
        style={{ height, width: 'auto' }}
      />
    </Link>
  )
}
