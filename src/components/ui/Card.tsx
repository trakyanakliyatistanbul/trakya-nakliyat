import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  href?: string
  className?: string
  style?: CSSProperties
}

export default function Card({ children, href, className = '', style }: CardProps) {
  const classes = `border border-[#E5E7EB] ${className}`

  if (href) {
    return (
      <Link href={href} className={`${classes} block`} style={style}>
        {children}
      </Link>
    )
  }

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}
