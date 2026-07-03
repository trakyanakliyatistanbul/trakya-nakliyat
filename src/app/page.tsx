import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import Services from '@/components/sections/Services'
import TrustStats from '@/components/sections/TrustStats'
import Reviews from '@/components/sections/Reviews'
import MovingStories from '@/components/sections/MovingStories'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <TrustStats />
        <Reviews />
        <MovingStories />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
