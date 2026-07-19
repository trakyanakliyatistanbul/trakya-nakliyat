import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  theme?: 'light' | 'dark'
  className?: string
  descriptionClassName?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  theme = 'light',
  className = 'mb-9',
  descriptionClassName = 'text-[14.5px] leading-[1.7] max-w-[640px]',
}: SectionHeadingProps) {
  const titleColor = theme === 'dark' ? 'text-white' : 'text-[#0D1B2A]'
  const descColor = theme === 'dark' ? 'text-[rgba(255,255,255,0.52)]' : 'text-[#6b7280]'

  return (
    <div className={className}>
      <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[var(--gold)] mb-2">
        {eyebrow}
      </div>
      <h2 className={`text-[28px] font-bold mb-2.5 tracking-tight ${titleColor}`}>{title}</h2>
      {description && <p className={`${descColor} ${descriptionClassName}`}>{description}</p>}
    </div>
  )
}
