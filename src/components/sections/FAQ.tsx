'use client'

import { useState, useRef, useEffect } from 'react'
import { faqData } from '@/data/faqData'
import { SITE_CONFIG } from '@/lib/constants'
import type { FAQItem } from '@/types'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const body = bodyRef.current
    const inner = innerRef.current
    if (!body || !inner) return
    body.style.maxHeight = isOpen ? `${inner.scrollHeight}px` : '0px'
  }, [isOpen])

  return (
    <div
      className={`rounded-[13px] border transition-colors duration-200 ${
        isOpen
          ? 'border-[rgba(184, 140, 59,0.42)] bg-[#F8F9FA]'
          : 'border-[#E5E7EB] bg-[#F8F9FA] hover:border-[#d1d5db]'
      }`}
    >
      <button
        className="w-full flex items-center gap-3 px-5 py-4 text-left cursor-pointer bg-transparent border-none"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <div
          className={`w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200 ${
            isOpen ? 'bg-[var(--gold)]' : 'bg-[#0D1B2A]'
          }`}
        >
          <span className="text-[12px] text-white">✓</span>
        </div>
        <span className="text-[14px] font-bold text-[#0D1B2A] leading-[1.4] flex-1">
          {item.question}
        </span>
        <div
          className={`w-7 h-7 rounded-[7px] border flex items-center justify-center flex-shrink-0 ml-2 transition-all duration-200 ${
            isOpen
              ? 'bg-[#0D1B2A] border-[#0D1B2A]'
              : 'bg-transparent border-[#E5E7EB]'
          }`}
        >
          <span
            className={`text-[14px] transition-all duration-300 ${
              isOpen ? 'text-[var(--gold)] rotate-180' : 'text-[#9ca3af]'
            }`}
            style={{ display: 'inline-block' }}
          >
            ˅
          </span>
        </div>
      </button>

      {/* Body */}
      <div
        ref={bodyRef}
        className="overflow-hidden transition-[max-height] duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ maxHeight: 0 }}
      >
        <div
          className="h-px mx-5 bg-[rgba(184, 140, 59,0.18)]"
        />
        <div ref={innerRef} className="px-5 pb-4 pl-14">
          <p className="text-[13px] text-[#6b7280] leading-[1.7]">{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string>(faqData[0]?.id ?? '')

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? '' : id))
  }

  return (
    <section id="sss" className="bg-white py-14">
      <Container>
        <SectionHeading
          eyebrow="Sık sorulan sorular"
          title="Sık Sorulan Sorular"
          description="Evden eve nakliyat süreciyle ilgili müşterilerimizin en çok merak ettiği soruları sizin için cevapladık. Farklı bir sorunuz olursa bizi telefon veya WhatsApp üzerinden dilediğiniz zaman arayabilirsiniz."
          descriptionClassName="text-[14.5px] leading-[1.7] max-w-[660px]"
        />

        {/* Accordion — 2 column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 max-w-[1100px] mb-7">
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-3 mt-7">
          <Button href={SITE_CONFIG.phoneHref} variant="outline" size="sm" icon={<span>📞</span>}>
            {SITE_CONFIG.phone}&apos;yı Ara
          </Button>
          <Button href={SITE_CONFIG.whatsapp} variant="outline" size="sm" icon={<span>💬</span>}>
            WhatsApp&apos;ta Yaz
          </Button>
        </div>
      </Container>
    </section>
  )
}

