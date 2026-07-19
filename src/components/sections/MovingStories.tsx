import { storiesData } from '@/data/storiesData'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

export default function MovingStories() {
  return (
    <section id="hikayeler" className="bg-[#0D1B2A] py-14">
      <Container>
        <SectionHeading
          eyebrow="Gerçek taşıma hikayeleri"
          title="Yaptığımız Taşımalar"
          description="Her taşıma bir hikaye. RÜÇHANOĞLU NAKLİYAT olarak fotoğraf ve videolarla belgelediğimiz gerçek süreçler."
          theme="dark"
          descriptionClassName="text-[14.5px] leading-[1.7] max-w-[540px]"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {storiesData.map((story) => (
            <div
              key={story.id}
              className="group rounded-[14px] overflow-hidden border border-[rgba(184, 140, 59,0.2)] bg-[rgba(255,255,255,0.02)] transition-all duration-300 hover:border-[rgba(184, 140, 59,0.55)] hover:-translate-y-1 cursor-pointer"
              style={{ boxShadow: 'none' }}
            >
              {/* Thumbnail */}
              <div className="h-[110px] bg-[#16263D] flex flex-col items-center justify-center relative">
                <span className="absolute top-2 left-2 bg-[var(--gold)] text-[#0D1B2A] text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                  {story.badge}
                </span>
                <div
                  className="w-[38px] h-[38px] rounded-full border-2 border-[rgba(184, 140, 59,0.5)] flex items-center justify-center mb-1.5 transition-all duration-200 group-hover:bg-[rgba(184, 140, 59,0.15)] group-hover:border-[var(--gold)] group-hover:scale-110"
                >
                  <span className="text-[var(--gold)] text-[15px] ml-0.5">▶</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[rgba(255,255,255,0.5)]">
                  📷 {story.photoCount}{story.hasVideo ? ' + video' : ''}
                </div>
              </div>

              {/* Body */}
              <div
                className="p-3.5"
                style={{ borderTop: '1px solid rgba(184, 140, 59,0.15)' }}
              >
                <h3 className="text-[13px] font-bold text-white mb-1">{story.title}</h3>
                <p className="text-[11.5px] text-[rgba(255,255,255,0.52)] leading-[1.5]">
                  {story.description}
                </p>
                <div className="flex gap-2.5 mt-2">
                  <span className="flex items-center gap-1 text-[10px] text-[rgba(255,255,255,0.38)]">
                    <span className="text-[var(--gold)]">📅</span> {story.date}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-[rgba(255,255,255,0.38)]">
                    <span className="text-[var(--gold)]">⏱</span> {story.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

