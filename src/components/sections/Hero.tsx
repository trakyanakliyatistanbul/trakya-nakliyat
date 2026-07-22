import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section id="hero" className="bg-[#0D1B2A] pt-12 pb-10 relative lg:pt-16">
      {/* Decorative background accents — contained so they don't clip the truck's bottom overlap */}
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
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12">
          <div>
            <h1 className="text-[30px] font-extrabold leading-[1.25] tracking-tight text-white sm:text-[36px] lg:text-[40px]">
              İstanbul’dan Tüm Türkiye’ye
              <br />
              Kurumsal ve Profesyonel
              <br />
              Nakliye Hizmeti
            </h1>

            <div className="mt-8 max-w-lg space-y-5">
              <p className="text-[15px] leading-[1.8] text-[rgba(255,255,255,0.9)]">
                Taşınma sürecinizi stressiz ve güvenli bir deneyime dönüştürüyoruz.
              </p>
              <p className="text-[15px] leading-[1.8] text-[rgba(255,255,255,0.9)]">
                <strong className="font-bold">RÜÇHANOĞLU NAKLİYAT</strong>'ın senelere dayanan tecrübesi, kurumsal
                lojistik altyapısı ve uzman kadrosuyla İstanbul genelinde ve Türkiye'nin dört bir yanında güvenilir,
                profesyonel nakliye hizmeti sunuyoruz.
              </p>
              <p className="text-[15px] leading-[1.8] text-[rgba(255,255,255,0.9)]">
                Endişeye mahal yok.
                <br />
                Eşyalarınız bize emanet!
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button href={SITE_CONFIG.phoneHref} variant="primary" fullWidthMobile glow icon={<span>📞</span>}>
                Hemen Ara
              </Button>
              <Button href={SITE_CONFIG.whatsapp} variant="secondary" fullWidthMobile icon={<span>💬</span>}>
                WhatsApp&apos;tan Teklif Al
              </Button>
            </div>
          </div>

          {/* Truck image — slightly overlaps the section's bottom edge via negative margin */}
          <div className="relative -mb-16 lg:-mb-20">
            <Image
              src="/hero-truck.jpg"
              alt="Rüçhanoğlu Nakliyat kurumsal nakliye aracı"
              width={1536}
              height={864}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-auto w-full rounded-[24px] border border-[rgba(255,255,255,0.14)] shadow-[0_35px_70px_-20px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
