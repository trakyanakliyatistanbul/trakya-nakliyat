export interface Service {
  id: string
  icon: string
  title: string
  description: string
  perks: string[]
  featured?: boolean
}

export interface TrustStat {
  id: string
  icon: string
  value: string
  label: string
}

export interface Review {
  id: string
  initials: string
  name: string
  rating: number
  date: string
  text: string
  location: string
}

export interface MovingStory {
  id: string
  badge: string
  badgeColor: string
  title: string
  description: string
  date: string
  duration: string
  photoCount: string
  hasVideo?: boolean
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface NavLink {
  label: string
  href: string
}
