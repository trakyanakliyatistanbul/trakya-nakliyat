import Image from 'next/image'
import Link from 'next/link'

// Source assets are 1366x456 (≈3:1) horizontal lockups from the corporate identity package.
const LOGO_ASPECT_RATIO = 1366 / 456

interface LogoProps {
  variant?: 'full' | 'compact'
  /** Set when the logo sits on a white/light background (e.g. the header) instead of navy. */
  onLight?: boolean
  /** Set on scroll to smoothly shrink the logo back down (header-only; ignored for compact). */
  scrolled?: boolean
  className?: string
}

const SIZES = {
  full: { base: 48, scrolled: 42 },
  compact: { base: 32, scrolled: 32 },
}

export default function Logo({ variant = 'full', onLight = false, scrolled = false, className = '' }: LogoProps) {
  const isCompact = variant === 'compact'
  const { base, scrolled: scrolledHeight } = isCompact ? SIZES.compact : SIZES.full
  const height = scrolled ? scrolledHeight : base
  const width = Math.round(base * LOGO_ASPECT_RATIO)

  return (
    <Link href="/" className={`flex items-center no-underline ${className}`}>
      <Image
        src={onLight ? '/logo-dark.png' : '/logo-light.png'}
        alt="Rüçhanoğlu Nakliyat"
        width={width}
        height={base}
        priority={!isCompact}
        className="transition-all duration-[280ms] ease-out"
        style={{ height, width: 'auto' }}
      />
    </Link>
  )
}
