import { storiesData } from '@/data/storiesData'

export default function MovingStories() {
  return (
    <section id="hikayeler" className="bg-[#0B1220] py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="mb-9">
          <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#D4AF37] mb-2">
            Gerçek taşıma hikayeleri
          </div>
          <h2 className="text-[28px] font-bold text-white mb-2.5 tracking-tight">
            Yaptığımız Taşımalar
          </h2>
          <p className="text-[14.5px] text-[rgba(255,255,255,0.52)] leading-[1.7] max-w-[540px]">
            Her taşıma bir hikaye. Trakya Nakliyat İstanbul olarak fotoğraf ve videolarla
            belgelediğimiz gerçek süreçler.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {storiesData.map((story) => (
            <div
              key={story.id}
              className="group rounded-[14px] overflow-hidden border border-[rgba(201,162,39,0.2)] bg-[rgba(255,255,255,0.02)] transition-all duration-300 hover:border-[rgba(212,175,55,0.55)] hover:-translate-y-1 cursor-pointer"
              style={{ boxShadow: 'none' }}
            >
              {/* Thumbnail */}
              <div className="h-[110px] bg-[#141d33] flex flex-col items-center justify-center relative">
                <span className="absolute top-2 left-2 bg-[#C9A227] text-[#0B1220] text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                  {story.badge}
                </span>
                <div
                  className="w-[38px] h-[38px] rounded-full border-2 border-[rgba(201,162,39,0.5)] flex items-center justify-center mb-1.5 transition-all duration-200 group-hover:bg-[rgba(201,162,39,0.15)] group-hover:border-[#D4AF37] group-hover:scale-110"
                >
                  <span className="text-[#D4AF37] text-[15px] ml-0.5">▶</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[rgba(255,255,255,0.5)]">
                  📷 {story.photoCount}{story.hasVideo ? ' + video' : ''}
                </div>
              </div>

              {/* Body */}
              <div
                className="p-3.5"
                style={{ borderTop: '1px solid rgba(201,162,39,0.15)' }}
              >
                <h3 className="text-[13px] font-bold text-white mb-1">{story.title}</h3>
                <p className="text-[11.5px] text-[rgba(255,255,255,0.52)] leading-[1.5]">
                  {story.description}
                </p>
                <div className="flex gap-2.5 mt-2">
                  <span className="flex items-center gap-1 text-[10px] text-[rgba(255,255,255,0.38)]">
                    <span className="text-[#D4AF37]">📅</span> {story.date}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-[rgba(255,255,255,0.38)]">
                    <span className="text-[#D4AF37]">⏱</span> {story.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
