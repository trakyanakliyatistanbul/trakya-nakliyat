import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

// Moved from the Hero section (kept verbatim, not deleted) so its SEO value is preserved
// while the Hero itself stays short and mobile-first. This also gives Navbar's existing
// "Hakkımızda" link (#hakkimizda) a real target — it was previously a dead anchor.
export default function About() {
  return (
    <section id="hakkimizda" className="bg-white py-14">
      <Container>
        <SectionHeading eyebrow="Hakkımızda" title="RÜÇHANOĞLU NAKLİYAT" className="mb-7" />
        <div className="max-w-2xl space-y-4">
          <p className="text-[14.5px] leading-[1.8] text-[#6b7280]">
            Taşınma sürecinizi stressiz ve güvenli bir deneyime dönüştürüyoruz.
          </p>
          <p className="text-[14.5px] leading-[1.8] text-[#6b7280]">
            <strong className="font-bold text-[#0D1B2A]">RÜÇHANOĞLU NAKLİYAT</strong>'ın senelere dayanan tecrübesi,
            kurumsal lojistik altyapısı ve uzman kadrosuyla İstanbul genelinde ve Türkiye'nin dört bir yanında
            güvenilir, profesyonel nakliye hizmeti sunuyoruz.
          </p>
          <p className="text-[14.5px] leading-[1.8] text-[#6b7280]">
            Endişeye mahal yok.
            <br />
            Eşyalarınız bize emanet!
          </p>
        </div>
      </Container>
    </section>
  )
}
