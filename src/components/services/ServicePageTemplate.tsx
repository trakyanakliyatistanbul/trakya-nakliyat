import ServiceCtaButton from './ServiceCtaButton'
import { IconChevron, IconMapPin, IconTruck } from './icons'
import type { ServicePageContent } from './types'

export default function ServicePageTemplate({ content }: { content: ServicePageContent }) {
  const { jsonLdList, hero, whatSection, detailSection, process, regions, faq, closingCta } = content

  return (
    <main className="bg-[#FFFFFF] text-[#0D1B2A]">
      {jsonLdList?.map((entry, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-[#0D1B2A]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/80">
            <IconTruck className="h-3.5 w-3.5" />
            Rüçhanoğlu Nakliyat — {hero.badgeLabel}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{hero.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ServiceCtaButton href="/iletisim" variant="primary" onDark>
              {hero.primaryCtaLabel}
              <IconChevron className="h-4 w-4 -rotate-90" />
            </ServiceCtaButton>
            <ServiceCtaButton href="tel:+901234567890" variant="secondary">
              Hemen Ara
            </ServiceCtaButton>
          </div>
          {hero.stats && (
            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-white/60">{stat.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {/* ---------- NE / NEDEN ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{whatSection.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-[#475569]">{whatSection.description}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {whatSection.features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-[#0D1B2A]/8 bg-white p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-[#0D1B2A]/5"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D1B2A]/[0.06] text-[#0D1B2A] transition-colors group-hover:bg-[#B88C3B]/10 group-hover:text-[#B88C3B]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">{f.desc}</p>
            </div>
          ))}
        </div>
        {whatSection.ctaLabel && (
          <div className="mt-10">
            <ServiceCtaButton href="/iletisim" variant="primary">
              {whatSection.ctaLabel}
            </ServiceCtaButton>
          </div>
        )}
      </section>

      {/* ---------- DETAY (fiyat / bilgi / etiket grubu) ---------- */}
      <section className="border-y border-[#0D1B2A]/8 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{detailSection.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">{detailSection.description}</p>
          </div>

          {detailSection.variant === 'iconGrid' && (
            <>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {detailSection.items.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-[#FFFFFF] p-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#B88C3B]/10 text-[#B88C3B]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">{item.desc}</p>
                  </div>
                ))}
              </div>
              {detailSection.note && (
                <div className="mt-8 rounded-2xl border border-[#0D1B2A]/8 bg-[#FFFFFF] p-6">
                  <p className="text-sm leading-relaxed text-[#475569]">
                    <span className="font-semibold text-[#0D1B2A]">{detailSection.note.label} </span>
                    {detailSection.note.text}
                  </p>
                </div>
              )}
            </>
          )}

          {detailSection.variant === 'stackedCards' && (
            <div className="mt-12 space-y-4">
              {detailSection.items.map((item) => (
                <div key={item.title} className="rounded-2xl bg-[#FFFFFF] p-6 border border-[#0D1B2A]/8">
                  <h3 className="font-semibold text-[#0D1B2A]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#475569]">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {detailSection.variant === 'tagGrid' && (
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {detailSection.items.map((item) => (
                <div key={item} className="rounded-lg bg-[#FFFFFF] px-4 py-3 text-center border border-[#0D1B2A]/8">
                  <p className="font-semibold text-[#0D1B2A]">{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- SÜREÇ (opsiyonel) ---------- */}
      {process && (
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{process.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">{process.description}</p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.steps.map((s, i) => (
              <div key={s.title} className="relative">
                {i < process.steps.length - 1 && (
                  <div
                    className="absolute right-[-1rem] top-6 hidden h-px w-8 bg-[#0D1B2A]/15 lg:block"
                    aria-hidden="true"
                  />
                )}
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0D1B2A] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <s.icon className="h-5 w-5 text-[#B88C3B]" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <ServiceCtaButton href="/iletisim" variant="primary">
              {process.ctaLabel}
            </ServiceCtaButton>
          </div>
        </section>
      )}

      {/* ---------- HİZMET BÖLGELERİ (opsiyonel) ---------- */}
      {regions && (
        <section className="border-y border-[#0D1B2A]/8 bg-[#0D1B2A] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{regions.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">{regions.description}</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {regions.items.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85"
                >
                  <IconMapPin className="h-3.5 w-3.5 text-[#B88C3B]" />
                  {r}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- SSS (opsiyonel) ---------- */}
      {faq && (
        <section className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{faq.title}</h2>
          <div className="mt-10 divide-y divide-[#0D1B2A]/8 border-y border-[#0D1B2A]/8">
            {faq.items.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold marker:content-none">
                  {f.q}
                  <IconChevron className="h-5 w-5 shrink-0 text-[#475569] transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* ---------- KAPANIŞ CTA ---------- */}
      <section className="bg-[#0D1B2A]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <h2 className="max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {closingCta.title}
          </h2>
          <ServiceCtaButton href="/iletisim" variant="primary" onDark className="shrink-0">
            {closingCta.buttonLabel}
          </ServiceCtaButton>
        </div>
      </section>
    </main>
  )
}
