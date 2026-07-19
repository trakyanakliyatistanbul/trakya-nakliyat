import type { ReactNode } from 'react'

interface ServiceCtaButtonProps {
  href?: string
  variant?: 'primary' | 'secondary'
  /** Set on sections with a navy background — swaps the primary fill to the gold accent for contrast. */
  onDark?: boolean
  className?: string
  children: ReactNode
}

export default function ServiceCtaButton({
  href = '/iletisim',
  variant = 'primary',
  onDark = false,
  className = '',
  children,
}: ServiceCtaButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

  const styles =
    variant === 'primary'
      ? onDark
        ? // Navy background: gold is the accent that carries contrast here,
          // matching the brand guide's dark-background icon treatment.
          'bg-[#B88C3B] text-[#0D1B2A] hover:bg-[#AD7A31] focus-visible:outline-[#B88C3B] shadow-sm shadow-[#B88C3B]/30 hover:shadow-md hover:shadow-[#B88C3B]/40'
        : // Light background: solid navy fill, matching the brand guide's
          // own "Learn More" button reference (page 12).
          'bg-[#0D1B2A] text-white hover:bg-[#16263D] focus-visible:outline-[#0D1B2A] shadow-sm shadow-[#0D1B2A]/20 hover:shadow-md hover:shadow-[#0D1B2A]/30'
      : 'bg-white text-[#0D1B2A] border border-[#0D1B2A]/15 hover:border-[#0D1B2A]/30 hover:bg-[#0D1B2A]/[0.03] focus-visible:outline-[#0D1B2A]'

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  )
}
