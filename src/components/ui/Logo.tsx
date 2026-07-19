import Link from 'next/link'

interface LogoProps {
  variant?: 'full' | 'compact'
  /** Set when the logo sits on a white/light background (e.g. the header) instead of navy. */
  onLight?: boolean
  className?: string
}

// Placeholder monogram ("R") pending the real Rüçhanoğlu Nakliyat logo asset —
// swap the badge contents for an <Image> once logo.svg/png is supplied.
export default function Logo({ variant = 'full', onLight = false, className = '' }: LogoProps) {
  const isCompact = variant === 'compact'
  const wordmarkColor = onLight ? 'text-[#1F2937]' : 'text-white'
  const subtitleColor = onLight ? 'text-[rgba(31,41,55,0.55)]' : 'text-[rgba(255,255,255,0.42)]'
  const dividerColor = onLight ? 'bg-[rgba(184,140,59,0.45)]' : 'bg-[rgba(184,140,59,0.3)]'

  return (
    <Link href="/" className={`flex items-center gap-2.5 no-underline ${className}`}>
      <div
        className={`flex flex-shrink-0 items-center justify-center bg-[var(--gold)] ${
          isCompact ? 'h-[38px] w-[38px] rounded-[8px]' : 'h-[42px] w-[42px] rounded-[9px]'
        }`}
      >
        <span className={`font-black tracking-tight text-[#0D1B2A] ${isCompact ? 'text-[15px]' : 'text-[17px]'}`}>
          R
        </span>
      </div>

      {!isCompact && <div className={`h-5 w-px rounded-sm lg:h-9 ${dividerColor}`} />}

      <div className="flex flex-col justify-center">
        {isCompact ? (
          <>
            <div className="text-[15px] font-bold leading-tight text-white">RÜÇHANOĞLU NAKLİYAT</div>
            <div className="text-[9px] uppercase tracking-[1px] text-[rgba(184,140,59,0.6)]">İSTANBUL</div>
          </>
        ) : (
          <>
            <span className={`text-[17px] font-extrabold leading-tight tracking-tight ${wordmarkColor}`}>
              Rüçhanoğlu <span className="text-[var(--gold)]">Nakliyat</span>
            </span>
            {/* Hidden below lg: at tablet/mobile widths this line was wrapping and crowding out the nav */}
            <span className={`mt-0.5 hidden text-[9px] uppercase tracking-[1.2px] lg:block ${subtitleColor}`}>
              İstanbul · Evden Eve Nakliyat
            </span>
          </>
        )}
      </div>
    </Link>
  )
}
