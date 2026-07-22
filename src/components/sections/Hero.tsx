import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section id="hero" className="bg-[#0D1B2A] pt-12 pb-14 relative lg:pt-16 lg:pb-20">
      {/* Decorative background accents — unchanged from before */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(184, 140, 59,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(184, 140, 59,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          className="absolute"
          style={{
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184, 140, 59,0.08) 0%, transparent 70%)',
            top: -180,
            right: -60,
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Mobile-first single centered column: H1 -> subtext -> truck image -> CTAs (StatsBar follows next) */}
        <div className="mx-auto max-w-2xl text-center">
          <h1
            className="font-extrabold tracking-tight text-white"
            style={{ fontSize: 'clamp(18px, 5vw, 44px)', lineHeight: 1.3 }}
          >
            İstanbul’dan Tüm Türkiye’ye
            <br />
            Kurumsal ve Profesyonel Nakliye Hizmeti
          </h1>

          <p className="mx-auto mt-5 max-w-md text-[14px] leading-[1.75] text-[rgba(255,255,255,0.85)]">
            <strong className="font-bold text-white">RÜÇHANOĞLU NAKLİYAT</strong> olarak 20+ yıllık deneyimimiz,
            uzman ekibimiz ve sigortalı taşıma hizmetimizle eşyalarınızı güvenle yeni adresinize ulaştırıyoruz.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <Image
            src="/hero-truck.jpg"
            alt="Rüçhanoğlu Nakliyat kurumsal nakliye aracı"
            width={1536}
            height={864}
            priority
            sizes="(min-width: 1024px) 768px, 100vw"
            className="h-auto w-full rounded-[24px] border border-[rgba(255,255,255,0.14)] shadow-[0_35px_70px_-20px_rgba(0,0,0,0.55)]"
          />
        </div>

        <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3">
          <Button href={SITE_CONFIG.phoneHref} variant="primary" glow className="w-full" icon={<span>📞</span>}>
            Hemen Ara
          </Button>
          <Button href={SITE_CONFIG.whatsapp} variant="secondary" className="w-full" icon={<span>💬</span>}>
            WhatsApp&apos;tan Teklif Al
          </Button>
        </div>
      </Container>
    </section>
  )
}
