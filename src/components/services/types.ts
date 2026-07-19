import type { ComponentType } from 'react'

export type ServiceIcon = ComponentType<{ className?: string }>

export interface ServicePageContent {
  /** Objects to serialize as <script type="application/ld+json"> tags, in order. */
  jsonLdList?: object[]

  hero: {
    /** Text shown after "Rüçhanoğlu Nakliyat — " in the hero badge pill. */
    badgeLabel: string
    title: string
    description: string
    primaryCtaLabel: string
    /** Optional 3-stat row under the hero CTAs (only evden-eve-nakliyat uses this). */
    stats?: { value: string; label: string }[]
  }

  whatSection: {
    title: string
    description: string
    features: { icon: ServiceIcon; title: string; desc: string }[]
    /** Optional CTA button under the feature grid (only evden-eve-nakliyat uses this). */
    ctaLabel?: string
  }

  detailSection: {
    title: string
    description: string
  } & (
    | {
        variant: 'iconGrid'
        items: { icon: ServiceIcon; title: string; desc: string }[]
        note?: { label: string; text: string }
      }
    | { variant: 'stackedCards'; items: { title: string; desc: string }[] }
    | { variant: 'tagGrid'; items: string[] }
  )

  /** Optional numbered process section (only evden-eve-nakliyat uses this). */
  process?: {
    title: string
    description: string
    steps: { icon: ServiceIcon; title: string; desc: string }[]
    ctaLabel: string
  }

  /** Optional dark-background service-area pill list (only evden-eve-nakliyat uses this). */
  regions?: {
    title: string
    description: string
    items: string[]
  }

  /** Optional FAQ accordion (only evden-eve-nakliyat uses this). */
  faq?: {
    title: string
    items: { q: string; a: string }[]
  }

  closingCta: {
    title: string
    buttonLabel: string
  }
}
