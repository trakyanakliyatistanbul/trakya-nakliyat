import type { ReactNode } from 'react'

interface IconBadgeProps {
  children: ReactNode
  invertOnHover?: boolean
  className?: string
}

export default function IconBadge({ children, invertOnHover = false, className = '' }: IconBadgeProps) {
  return (
    <div
      className={`flex items-center justify-center bg-white border-[1.5px] border-[var(--gold)] transition-all duration-300 ${
        invertOnHover ? 'group-hover:bg-[#0D1B2A] group-hover:border-[#0D1B2A]' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
