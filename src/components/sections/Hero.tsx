'use client'

import { useEffect, useRef, useState } from 'react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      video.muted = false
      video.controls = true
      await video.play()
      setIsPlaying(true)
    } catch (error) {
      console.error('Hero video playback failed', error)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => setIsPlaying(false)
    const handlePause = () => {
      if (video.ended) {
        setIsPlaying(false)
      }
    }

    video.addEventListener('ended', handleEnded)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  return (
    <section
      id="hero"
      className="bg-[#0B1220] pt-12 pb-10 relative overflow-hidden lg:pt-16"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(176,141,87,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(176,141,87,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176,141,87,0.08) 0%, transparent 70%)',
          top: -180,
          right: -60,
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid gap-8">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-[36px] lg:text-[42px] font-bold leading-[1.08] text-white tracking-tight">
              Beylikdüzü Evden Eve Nakliyat Hizmetinde{' '}
              <em className="not-italic text-[var(--gold)]">Güvenin Adresi</em>
            </h1>

            <p className="text-[15px] text-[rgba(255,255,255,0.75)] leading-[1.8] max-w-[600px]">
              <strong className="text-white font-semibold">Trakya Nakliyat İstanbul</strong> olarak
              İstanbul genelinde profesyonel evden eve nakliyat, asansörlü taşıma ve sigortalı hizmet sunuyoruz.
              Deneyimli ekiplerimizle eşyalarınızı güvenle yeni adresinize ulaştırıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={SITE_CONFIG.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-[#0B1220] border border-transparent px-6 py-3.5 rounded-[12px] text-[14.5px] font-semibold no-underline hover:bg-[#a57b4d] transition-all duration-200"
                style={{ boxShadow: '0 18px 50px rgba(176,141,87,0.14)' }}
              >
                <span>📞</span> Hemen Ara
              </a>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0B1220] border border-[rgba(176,141,87,0.18)] px-6 py-3.5 rounded-[12px] text-[14.5px] font-semibold no-underline hover:bg-[rgba(176,141,87,0.12)] transition-all duration-200"
              >
                <span>💬</span> WhatsApp&apos;tan Teklif Al
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-[rgba(255,255,255,0.14)] bg-[linear-gradient(135deg,rgba(11,18,32,0.95),rgba(18,28,45,0.92))] shadow-[0_48px_120px_rgba(0,0,0,0.34)]">
            <div className="relative mx-auto flex aspect-[9/16] max-h-[760px] min-h-[320px] w-full max-w-[480px] items-center justify-center overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[#060B14] p-2 sm:min-h-[420px] sm:max-w-[520px] sm:p-3 lg:aspect-[9/16] lg:min-h-[620px] lg:max-w-[560px] lg:p-4">
              <video
                ref={videoRef}
                className="h-full w-full rounded-[22px] object-contain object-center bg-[#060B14]"
                src="/videos/hero-video.mp4"
                muted
                playsInline
                preload="metadata"
                controls={false}
                aria-label="Trakya Nakliyat hizmet tanıtım videosu"
              />

              <div
                className={`absolute inset-0 flex items-center justify-center rounded-[28px] transition-all duration-300 ${
                  isPlaying ? 'pointer-events-none opacity-0' : 'opacity-100'
                }`}
              >
                <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_center,_rgba(176,141,87,0.2),transparent_55%),linear-gradient(180deg,rgba(6,11,20,0.18)_0%,rgba(6,11,20,0.82)_100%)]" />
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Videoyu oynat"
                  className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(176,141,87,0.95)] text-white shadow-[0_24px_60px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:scale-105 hover:bg-[var(--gold)] sm:h-24 sm:w-24"
                >
                  <span className="pl-1 text-[24px] sm:text-[28px]">▶</span>
                </button>
              </div>

              <div className="absolute left-3 top-3 rounded-full border border-[rgba(255,255,255,0.16)] bg-[#0B1220]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[rgba(255,255,255,0.84)] shadow-sm sm:left-4 sm:top-4 sm:px-4 sm:text-[12px]">
                Premium Taşımacılık
              </div>
            </div>

            <div className="px-4 pb-4 pt-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
              <div className="mx-auto max-w-[760px] rounded-[20px] border border-[rgba(255,255,255,0.14)] bg-[#0B1220]/75 px-4 py-3 text-left text-[13px] leading-6 text-[rgba(255,255,255,0.84)] shadow-[0_16px_45px_rgba(0,0,0,0.24)] sm:text-[14px] sm:px-5">
                <p className="font-medium text-white">
                  Profesyonel ekiplerimizle, güvenli, hızlı ve özenli taşımacılık deneyimini ön planda tutuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

