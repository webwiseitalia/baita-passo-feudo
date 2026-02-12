import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSeason } from '../context/SeasonContext'
import { useReveal, useSplitText, gsap, ScrollTrigger } from '../hooks/useGsap'

const sections = [
  {
    title: 'Bibite',
    items: [
      { name: 'Lattina 33cl', price: '2,60' },
      { name: 'Bicchiere 50cl', price: '4,50' },
      { name: 'Acqua minerale 50cl', price: '2,00' },
      { name: 'Acqua minerale 100cl', price: '3,50' },
      { name: 'Acqua e sciroppo (lampone / sambuco / menta)', price: '2,50' },
      { name: 'Apfelschorle — succo di mela + acqua frizzante', price: '3,00' },
      { name: 'Skiwasser — lampone, limonata, acqua frizzante', price: '3,00' },
      { name: 'Succhi di frutta', price: '2,60' },
      { name: 'Red Bull', price: '3,50' },
    ]
  },
  {
    title: 'Birra',
    items: [
      { name: 'Veltins chiara spina 30cl', price: '3,00' },
      { name: 'Veltins chiara spina 50cl', price: '5,00' },
      { name: 'Weizen 30cl', price: '3,00' },
      { name: 'Weizen 50cl', price: '5,00' },
      { name: 'Weizen analcolica 50cl', price: '5,00' },
      { name: 'Birra artigianale di Fiemme 33cl', price: '4,80' },
      { name: 'Radler 30cl', price: '3,00' },
      { name: 'Radler 50cl', price: '5,00' },
    ]
  },
  {
    title: 'Aperitivi',
    items: [
      { name: 'Aperol Spritz', price: '4,50' },
      { name: 'Hugo', price: '4,50' },
      { name: 'Gin & Tonic', price: '5,00' },
      { name: 'Mimosa', price: '4,50' },
      { name: 'Analcolici', price: '3,00' },
    ]
  },
  {
    title: 'Vini Sfusi',
    items: [
      { name: 'Vino della casa (25cl)', price: '3,50' },
      { name: 'Lagrein (25cl)', price: '4,50' },
      { name: 'Pinot Nero (25cl)', price: '4,50' },
      { name: 'Teroldego (25cl)', price: '4,50' },
      { name: 'Müller Thurgau (25cl)', price: '4,50' },
      { name: 'Chardonnay (25cl)', price: '4,50' },
      { name: 'Pinot Grigio (25cl)', price: '4,50' },
      { name: 'Gewürztraminer (25cl)', price: '5,00' },
      { name: 'Prosecco (calice)', price: '4,50' },
    ]
  },
]

const viniBottiglie = [
  { name: 'Lagrein Abtei Riserva', price: '35,00', note: 'Gambero Rosso' },
  { name: 'Pinot Nero Burgum Novum', price: '35,00', note: 'Bibenda' },
  { name: 'San Leonardo', price: '59,00', note: 'AIS' },
  { name: 'Ferrari Perlé', price: '45,00', note: 'Gambero Rosso' },
]

export default function Bibite() {
  const { isWinter } = useSeason()
  const contentRef = useReveal()
  const splitRef = useSplitText('.split-bibite-title', { types: 'chars', stagger: { each: 0.015 }, rotate: 3, duration: 0.55 })

  useEffect(() => {
    const heroEl = document.querySelector('.bibite-hero')
    if (!heroEl) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from('.hero-label', { y: 30, opacity: 0, duration: 0.5, ease: 'power3.out' })
        .from('.hero-title-line', { y: 120, opacity: 0, duration: 0.7, stagger: 0.06, ease: 'power4.out' }, '-=0.5')
        .from('.hero-vertical', { opacity: 0, x: 20, duration: 0.5, ease: 'power3.out' }, '-=0.6')
    }, heroEl)
    return () => ctx.revert()
  }, [])

  // Asymmetric split: Bibite+Birra left, Aperitivi+ViniSfusi right
  const leftSections = sections.slice(0, 2)
  const rightSections = sections.slice(2)

  return (
    <div ref={contentRef}>
      {/* ═══════════════════════════════════════
          HERO — Solid seasonal color, no image, asymmetric staggered title
          ═══════════════════════════════════════ */}
      <section
        className={`bibite-hero relative pt-36 pb-24 md:pt-44 md:pb-32 px-6 lg:px-16 2xl:px-24 overflow-hidden ${
          isWinter ? 'bg-winter-800' : 'bg-summer-800'
        }`}
      >
        {/* Subtle radial glow */}
        <div className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: 'radial-gradient(ellipse at 15% 85%, rgba(255,255,255,0.3) 0%, transparent 55%)' }}
        />

        {/* Oversized decorative element */}
        <div className="absolute -top-20 -right-20 text-[18rem] md:text-[28rem] font-heading text-white/[0.03] leading-none select-none pointer-events-none">
          &
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8 lg:col-start-1">
              <p className="hero-label label-upper text-white/35 mb-8">
                La nostra selezione
              </p>
              <h1 ref={splitRef}>
                <span className="hero-title-line display-huge text-white block">
                  <span className="split-bibite-title">Bibite, Birra</span>
                </span>
                <span className="hero-title-line display-huge text-white/80 block ml-[4vw] md:ml-[7vw] mt-1 font-light italic">
                  e Vini
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Vertical badge */}
        <div className="hero-vertical absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3">
          <span className="label-upper text-white/15 text-vertical">Passo Feudo</span>
          <div className="w-px h-10 bg-white/10" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTENT — Broken 12-col 2-column, offset right for asymmetry
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 lg:px-16 2xl:px-24 bg-alpine-cream overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 lg:gap-x-16 gap-y-20">

            {/* LEFT COLUMN — Bibite & Birra */}
            <div className="lg:col-span-5 lg:col-start-1">
              {leftSections.map((section, si) => (
                <div key={si} className={si > 0 ? 'mt-24 md:mt-32' : ''}>
                  <div className="rv-up mb-8">
                    <p className={`label-upper mb-3 ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>
                      {String(si + 1).padStart(2, '0')}
                    </p>
                    <h2 className="display-medium text-alpine-dark">
                      {section.title}
                    </h2>
                    <div
                      className={`rv-clip-left h-px mt-5 ${isWinter ? 'bg-winter-300' : 'bg-summer-300'}`}
                    />
                  </div>
                  <div>
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="rv-up flex items-center justify-between py-3.5 border-b border-wood-200/40"
                      >
                        <span className="text-wood-900 leading-relaxed">{item.name}</span>
                        <span className="font-accent tabular-nums text-wood-500 whitespace-nowrap ml-6">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN — Aperitivi & Vini Sfusi, offset down for asymmetry */}
            <div className="lg:col-span-5 lg:col-start-8 lg:mt-20">
              {/* Vertical text decoration */}
              <div className="hidden lg:block absolute right-6">
                <span className={`text-vertical label-upper ${isWinter ? 'text-winter-200' : 'text-summer-200'}`}>
                  Bevande
                </span>
              </div>

              {rightSections.map((section, si) => (
                <div key={si} className={si > 0 ? 'mt-28 md:mt-36' : ''}>
                  <div className="rv-up mb-8">
                    <p className={`label-upper mb-3 ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>
                      {String(si + 3).padStart(2, '0')}
                    </p>
                    <h2 className="display-medium text-alpine-dark">
                      {section.title}
                    </h2>
                    <div
                      className={`rv-clip-right h-px mt-5 ${isWinter ? 'bg-winter-300' : 'bg-summer-300'}`}
                    />
                  </div>
                  <div>
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="rv-up flex items-center justify-between py-3.5 border-b border-wood-200/40"
                      >
                        <span className="text-wood-900 leading-relaxed">{item.name}</span>
                        <span className="font-accent tabular-nums text-wood-500 whitespace-nowrap ml-6">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          VINI IN BOTTIGLIA — Dark cinematic, 12-col broken grid
          ═══════════════════════════════════════ */}
      <section className="py-28 md:py-40 px-6 lg:px-16 2xl:px-24 bg-alpine-dark text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">

            {/* Title block — left, pushed down */}
            <div className="lg:col-span-4 lg:col-start-1 lg:pt-8">
              <p className={`rv-up label-upper mb-5 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>
                05
              </p>
              <h2 className="rv-up display-large text-white">
                Vini in<br />Bottiglia
              </h2>
              <p className="rv-up text-wood-400 mt-8 leading-relaxed max-w-sm text-sm">
                Selezione di etichette premiate dalle migliori guide italiane. Vini del territorio trentino e non solo.
              </p>
              <div className={`rv-clip-left h-px mt-8 w-1/2 ${isWinter ? 'bg-winter-600' : 'bg-summer-600'}`} />
            </div>

            {/* Wine list — right side, large cinematic typography */}
            <div className="lg:col-span-7 lg:col-start-6 lg:mt-4">
              <div className="space-y-0">
                {viniBottiglie.map((wine, i) => (
                  <div
                    key={i}
                    className={`rv-up py-8 border-b border-white/10 ${i === 0 ? 'border-t border-white/10' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1">
                        <h3 className="font-heading text-2xl md:text-4xl text-white mb-3 leading-tight">
                          {wine.name}
                        </h3>
                        {wine.note && (
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-px ${isWinter ? 'bg-winter-500' : 'bg-summer-500'}`} />
                            <span className={`label-upper ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>
                              {wine.note}
                            </span>
                          </div>
                        )}
                      </div>
                      <span className="font-accent text-xl md:text-2xl tabular-nums text-white/60 whitespace-nowrap mt-2">
                        {wine.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA — Light, asymmetric with editorial quote
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 lg:px-16 2xl:px-24 bg-alpine-cream overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 lg:col-start-1">
              <p className={`rv-up label-upper mb-4 ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>
                Scopri anche
              </p>
              <h2 className="rv-up display-medium text-alpine-dark mb-6">
                Il menu completo<br />e la caffetteria
              </h2>
              <p className="rv-up text-editorial text-wood-600 mt-8">
                "Cucina trentina creativa con ingredienti a km 0"
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-8 lg:mt-12">
              <p className="rv-up text-wood-500 max-w-md mb-10 leading-relaxed">
                Il menu completo del ristorante e la nostra caffetteria con bevande calde, grappe e digestivi
              </p>
              <div className="rv-up flex flex-col sm:flex-row gap-4">
                <Link to="/menu" className={isWinter ? 'btn-winter' : 'btn-summer'}>
                  Menu del Ristorante
                </Link>
                <Link to="/menu/caffetteria" className="btn-outline-dark">
                  Caffetteria
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
