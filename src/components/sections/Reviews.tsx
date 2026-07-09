'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { reviewsData } from '@/data/reviewsData'

const INTERVAL = 6000

const getVisibleCount = (width: number) => {
  if (width >= 900) return 3
  if (width >= 560) return 2
  return 1
}

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [cnt, setCnt] = useState(3)
  const progressRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const startTimeRef = useRef<number>(0)
  const remainingRef = useRef<number>(INTERVAL)
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const updateCount = () => setCnt(getVisibleCount(window.innerWidth))
    updateCount()
    window.addEventListener('resize', updateCount)
    return () => window.removeEventListener('resize', updateCount)
  }, [])

  const totalPages = Math.max(1, reviewsData.length - cnt + 1)

  useEffect(() => {
    setCurrent((value) => Math.min(value, totalPages - 1))
  }, [totalPages])

  const goTo = useCallback((idx: number) => {
    const pages = totalPages
    setCurrent(((idx % pages) + pages) % pages)
  }, [totalPages])

  /* Progress bar animation */
  function startProgress(duration: number) {
    if (progressRef.current) {
      progressRef.current.style.transition = 'none'
      progressRef.current.style.width = '0%'
    }
    cancelAnimationFrame(animFrameRef.current)
    const start = performance.now()
    function tick(now: number) {
      const pct = Math.min(100, ((now - start) / duration) * 100)
      if (progressRef.current) progressRef.current.style.width = `${pct}%`
      if (pct < 100) animFrameRef.current = requestAnimationFrame(tick)
    }
    animFrameRef.current = requestAnimationFrame(tick)
  }

  const resetAuto = useCallback((duration = INTERVAL) => {
    clearTimeout(timerRef.current!)
    remainingRef.current = duration
    startTimeRef.current = performance.now()
    startProgress(duration)
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % totalPages)
      resetAuto()
    }, duration)
  }, [totalPages])

  useEffect(() => {
    resetAuto()
    return () => {
      clearTimeout(timerRef.current!)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [resetAuto])

  function pauseAuto() {
    if (paused) return
    setPaused(true)
    const elapsed = performance.now() - startTimeRef.current
    remainingRef.current = Math.max(0, remainingRef.current - elapsed)
    clearTimeout(timerRef.current!)
    cancelAnimationFrame(animFrameRef.current)
  }

  function resumeAuto() {
    if (!paused) return
    setPaused(false)
    resetAuto(remainingRef.current)
  }

  function handlePrev() { goTo(current - 1); resetAuto() }
  function handleNext() { goTo(current + 1); resetAuto() }

  const cardWidthPct = 100 / cnt

  return (
    <section className="bg-[#F8F9FA] py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="mb-7">
          <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[var(--gold)] mb-2">
            Müşteri yorumları
          </div>
          <h2 className="text-[28px] font-bold text-[#0B1220] mb-2.5 tracking-tight">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-[14px] text-[#6b7280] leading-[1.7] max-w-[640px]">
            RÜÇHANOĞLU NAKLİYAT olarak en büyük referansımız, memnuniyetini bizimle paylaşan
            müşterilerimizdir. Şimdilik örnek müşteri yorumları gösterilmektedir. İlerleyen aşamada
            bu bölüm Google İşletme Profilimizden alınan gerçek yorumlarla otomatik güncellenecektir.
          </p>
        </div>

        {/* Google skor */}
        <div
          className="flex flex-col sm:flex-row sm:items-center flex-wrap items-start gap-4 mb-7 p-4 bg-white border border-[#E5E7EB] rounded-[14px]"
          style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
        >
          <div className="text-[48px] font-extrabold text-[#0B1220] leading-none">4.9</div>
          <div>
            <div className="text-[var(--gold)] text-[18px] tracking-widest">★★★★★</div>
            <div className="text-[12.5px] text-[#6b7280] mt-1">Google yorumlarına dayanarak</div>
            {/* data-href: gerçek Google İşletme Profili URL'si buraya */}
            <a
              href="#"
              data-href="GOOGLE_BUSINESS_URL"
              className="inline-flex items-center gap-1.5 border border-[var(--gold)] px-3 py-1.5 rounded-[8px] text-[11.5px] font-semibold text-[var(--gold)] no-underline mt-1.5 hover:bg-[rgba(176,141,87,0.08)] transition-colors"
            >
              🌐 Google&apos;da görüntüle
            </a>
          </div>
          <div className="ml-auto min-w-[220px] flex items-center gap-1.5 text-[11.5px] text-[#9ca3af] bg-[#f3f4f6] px-3 py-1.5 rounded-[8px]">
            ℹ Gerçek Google yorumları entegrasyonu yakında aktif olacak
          </div>
        </div>

        {/* Carousel */}
        <div
          onMouseEnter={pauseAuto}
          onMouseLeave={resumeAuto}
        >
          <div className="overflow-hidden rounded-[16px]">
            <div
              className="flex min-w-full transition-transform duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transform: `translateX(-${current * cardWidthPct}%)` }}
            >
              {reviewsData.map((r) => (
                <div
                  key={r.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${cardWidthPct}%` }}
                >
                  <div
                    className="bg-white border border-[#E5E7EB] rounded-[14px] p-5 h-full transition-all duration-200 hover:border-[#d1d5db] hover:-translate-y-0.5"
                    style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-[38px] h-[38px] rounded-full bg-[#0B1220] flex items-center justify-center text-[12px] font-bold text-[var(--gold)] flex-shrink-0">
                        {r.initials}
                      </div>
                      <div>
                        <div className="text-[13.5px] font-bold text-[#0B1220]">{r.name}</div>
                        <div className="text-[var(--gold)] text-[11px] tracking-wide">★★★★★</div>
                        <div className="text-[11px] text-[#9ca3af]">{r.date}</div>
                      </div>
                    </div>
                    <p className="text-[12.5px] text-[#4b5563] leading-[1.65]">{r.text}</p>
                    <div className="flex items-center mt-3">
                      <div className="flex items-center gap-1 text-[11px] text-[var(--gold)]">
                        📍 {r.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              onClick={handlePrev}
              aria-label="Önceki"
              className="w-10 h-10 rounded-full bg-white border-[1.5px] border-[#E5E7EB] flex items-center justify-center text-[#9ca3af] hover:border-[var(--gold)] hover:bg-[#0B1220] hover:text-[var(--gold)] transition-all duration-150"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
            >
              ‹
            </button>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { goTo(i); resetAuto() }}
                  aria-label={`Sayfa ${i + 1}`}
                  className="transition-all duration-300"
                  style={{
                    width: i === current ? '20px' : '6px',
                    height: '6px',
                    borderRadius: i === current ? '3px' : '50%',
                    background: i === current ? 'var(--gold)' : '#d1d5db',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              aria-label="Sonraki"
              className="w-10 h-10 rounded-full bg-white border-[1.5px] border-[#E5E7EB] flex items-center justify-center text-[#9ca3af] hover:border-[var(--gold)] hover:bg-[#0B1220] hover:text-[var(--gold)] transition-all duration-150"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
            >
              ›
            </button>
          </div>

          {/* Progress */}
          <div className="h-[2px] bg-[#E5E7EB] rounded-full mt-4 overflow-hidden">
            <div ref={progressRef} className="h-full bg-[var(--gold)] rounded-full" style={{ width: '0%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

