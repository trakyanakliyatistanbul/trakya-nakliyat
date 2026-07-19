import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'md' | 'sm'

interface ButtonProps {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  glow?: boolean
  fullWidthMobile?: boolean
  className?: string
  children: ReactNode
}

const sizeStyles: Record<ButtonSize, string> = {
  md: 'px-6 py-3.5 rounded-[12px] text-[14.5px]',
  sm: 'px-5 py-2.5 rounded-[9px] text-[13.5px]',
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--gold)] text-[#0D1B2A] border border-transparent hover:bg-[var(--gold-deep)]',
  secondary: 'bg-white text-[#0D1B2A] border border-[rgba(184,140,59,0.18)] hover:bg-[rgba(184,140,59,0.12)]',
  outline: 'bg-white text-[#0D1B2A] border-[1.5px] border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[#0D1B2A]',
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  glow = false,
  fullWidthMobile = false,
  className = '',
  children,
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 font-semibold no-underline transition-all duration-200',
    sizeStyles[size],
    variantStyles[variant],
    fullWidthMobile ? 'w-full sm:w-auto' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const style: CSSProperties | undefined = glow
    ? { boxShadow: '0 18px 50px rgba(184,140,59,0.14)' }
    : undefined

  const isTelOrMail = href.startsWith('tel:') || href.startsWith('mailto:')
  const isExternal = /^https?:/.test(href) || href.startsWith('http')

  if (isExternal || isTelOrMail) {
    return (
      <a
        href={href}
        target={isTelOrMail ? undefined : '_blank'}
        rel={isTelOrMail ? undefined : 'noopener noreferrer'}
        className={classes}
        style={style}
      >
        {icon}
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} style={style}>
      {icon}
      {children}
    </Link>
  )
}
