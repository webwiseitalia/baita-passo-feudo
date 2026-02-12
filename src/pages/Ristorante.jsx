import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSeason } from '../context/SeasonContext'
import { useReveal, useHeroParallax, useSplitText, gsap, ScrollTrigger } from '../hooks/useGsap'

import heroRistorante from '../assets/foto/foto-5.webp'
import cucina from '../assets/foto/foto-4.webp'
import piatto1 from '../assets/foto/foto-20.webp'
import piatto2 from '../assets/foto/foto-25.webp'
import piatto3 from '../assets/foto/foto-22.webp'

export default function Ristorante() {
  const { isWinter } = useSeason()
  const heroRef = useHeroParallax()
  const contentRef = useReveal()
  const splitRef = useSplitText('.split-ristorante-title', { types: 'chars', stagger: { each: 0.015 }, rotate: 5, duration: 0.5 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.from('.hero-badge-rist', { scale: 0.6, opacity: 0, duration: 0.5, ease: 'elastic.out(1, 0.6)' })
        .from('.hero-label-rist', { y: 25, opacity: 0, duration: 0.45, ease: 'power3.out' }, '-=0.5')
        .from('.hero-title-rist', { y: 100, opacity: 0, duration: 0.7, ease: 'power4.out' }, '-=0.4')
        .from('.hero-sub-rist', { y: 40, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.5')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const tags = ['Km 0', 'Biologico', 'Senza Glutine', 'Cucina Tipica', 'Pizzeria']

  return (
    <div ref={contentRef}>
      {/* ═══════════════════════════════════════
          HERO — Cinematic bottom-left, altitude badge floating
          right side, staggered text entry
          ═══════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[75vh] min-h-[550px] flex items-end overflow-hidden">
        <img
          src={heroRistorante}
          alt="Ristorante Baita Passo Feudo"
          className="hero-bg absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full pb-14 md:pb-24 px-6 lg:px-16 2xl:px-24">
          <div className="max-w-5xl">
            <p className="hero-label-rist label-upper text-white/40 mb-5 tracking-[0.25em]">
              Cucina trentina · 2.200m
            </p>
            <h1 className="hero-title-rist display-huge text-white leading-[0.9]">
              Il Ristorante
            </h1>
            <p className="hero-sub-rist text-white/55 text-lg md:text-xl max-w-md font-body font-light leading-relaxed mt-7">
              Tradizione e creatività in alta quota
            </p>
          </div>
        </div>

        {/* Floating altitude badge — right edge, vertical */}
        <div className="hero-badge-rist absolute bottom-10 right-6 lg:right-10 hidden md:flex flex-col items-center gap-4">
          <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${isWinter ? 'border-winter-400/40' : 'border-summer-400/40'}`}>
            <span className="text-white/60 text-xs font-accent font-bold">m</span>
          </div>
          <span className="label-upper text-white/25 text-vertical text-xs tracking-[0.3em]">
            2.200 m s.l.m.
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FILOSOFIA — Image spanning col 6-12, text panel floating
          from LEFT and overlapping into the image. Quote pulled out
          as separate element below-left. Opposite direction from
          typical right-overlap patterns.
          ═══════════════════════════════════════ */}
      <section className="py-28 md:py-40 px-6 lg:px-16 2xl:px-24 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center" ref={splitRef}>
            {/* Text panel — left, overlapping into image zone */}
            <div className="lg:col-span-5 lg:col-start-1 lg:-mr-16 relative z-10 order-2 lg:order-1">
              <div className="bg-alpine-cream p-8 md:p-14 rv-left">
                <p className={`label-upper mb-5 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                  La nostra filosofia
                </p>
                <h2 className="display-medium text-alpine-dark mb-7 leading-[1.05]">
                  <span className="split-ristorante-title">Tradizione trentina con tocco creativo</span>
                </h2>
                <div className="space-y-5 text-wood-600 leading-relaxed">
                  <p>
                    I sapori tipici trentini sono i protagonisti del nostro menù creativo. Un'interpretazione fantasiosa della cucina locale che dà vita a piatti unici e originali.
                  </p>
                  <p>
                    Utilizziamo ingredienti d'origine trentina, prodotti spesso biologici e a km 0, per garantire la massima qualità e freschezza in ogni piatto.
                  </p>
                </div>
              </div>
            </div>

            {/* Image — right, tall, bleeding edge */}
            <div className="lg:col-span-7 lg:col-start-6 lg:-mr-12 rv-clip-right order-1 lg:order-2">
              <div className="img-hover-shift overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[70vh]">
                <img
                  src={cucina}
                  alt="Il nostro chef al lavoro"
                  className="w-full h-full object-cover parallax-img scale-110"
                />
              </div>
            </div>
          </div>

          {/* Quote — floating below, offset right from text panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 mt-8 lg:-mt-16 relative z-20">
            <div className="lg:col-span-4 lg:col-start-2 rv-up-soft">
              <div className={`border-l-2 pl-6 py-2 ${isWinter ? 'border-winter-300' : 'border-summer-300'}`}>
                <p className="text-editorial text-wood-800 text-lg">
                  "Originalità è il nostro obiettivo"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TAGS — Scattered across 12-col grid with wild vertical
          offsets, irregular column positions. NOT aligned, NOT in a row.
          Each tag drifts independently.
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6 lg:px-16 2xl:px-24 bg-alpine-cream overflow-hidden">
        <div className="max-w-[1600px] mx-auto relative">
          {/* Decorative large text behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[14rem] font-heading text-wood-100 leading-none select-none pointer-events-none whitespace-nowrap opacity-40">
            qualità
          </div>

          <div className="relative z-10 grid grid-cols-12 gap-4 md:gap-6 items-start min-h-[280px] md:min-h-[350px]">
            {tags.map((tag, i) => {
              const positions = [
                'col-span-4 md:col-span-2 md:col-start-1 md:mt-4',
                'col-span-4 md:col-span-3 md:col-start-4 md:mt-24',
                'col-span-4 md:col-span-2 md:col-start-9 md:-mt-2',
                'col-span-6 md:col-span-3 md:col-start-2 md:mt-32',
                'col-span-6 md:col-span-2 md:col-start-10 md:mt-16',
              ]
              const animations = ['rv-up', 'rv-scale', 'rv-rotate', 'rv-up-soft', 'rv-left']
              return (
                <div key={tag} className={`${animations[i]} ${positions[i]}`}>
                  <span className={`inline-block px-6 py-3 text-sm font-accent font-bold tracking-wider border ${
                    isWinter
                      ? 'border-winter-300 text-winter-700 bg-winter-50/60'
                      : 'border-summer-300 text-summer-700 bg-summer-50/60'
                  } ${i === 1 ? 'rotate-2' : ''} ${i === 3 ? '-rotate-1' : ''}`}>
                    {tag}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PIATTI — Dark section. 3 images at IRREGULAR heights
          and column spans. NOT equal columns. Staggered vertically
          with gradient overlays and floating text labels.
          ═══════════════════════════════════════ */}
      <section className="py-28 md:py-40 px-6 lg:px-16 2xl:px-24 bg-alpine-dark text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          {/* Header — title far left, description pushed far right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16 lg:mb-24 items-end">
            <div className="lg:col-span-4 lg:col-start-1">
              <p className={`rv-up label-upper mb-5 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>
                La cucina
              </p>
              <h2 className="rv-up display-large text-white leading-[0.95]">
                I nostri<br />piatti
              </h2>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <p className="rv-up-soft text-wood-400 text-sm leading-relaxed">
                Canederli, ravioli di capriolo, selvaggina, polenta, strudel, Kaiserschmarrn e pizza dal forno a 2.200m.
              </p>
            </div>
          </div>

          {/* 3 images — asymmetric: tall-left (5 col), offset-center (4 col, pushed down), narrow-right (3 col, pulled up) */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {/* Tall left image — 5 cols, portrait */}
            <div className="col-span-12 md:col-span-5 rv-clip-up">
              <div className="relative overflow-hidden aspect-[3/4] cursor-explore group">
                <img
                  src={piatto1}
                  alt="Primi piatti"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <h3 className="font-heading text-2xl mb-2">Primi piatti</h3>
                  <p className="text-white/45 text-sm max-w-[200px]">Canederli, ravioli di capriolo, risotti e molto altro</p>
                </div>
              </div>
            </div>

            {/* Center image — 4 cols, pushed down significantly */}
            <div className="col-span-6 md:col-span-4 md:mt-28 rv-clip-left">
              <div className="relative overflow-hidden aspect-[3/4] cursor-explore group">
                <img
                  src={piatto3}
                  alt="Secondi piatti"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 md:p-7">
                  <h3 className="font-heading text-xl mb-1">Secondi piatti</h3>
                  <p className="text-white/45 text-sm">Selvaggina, polenta, piatti della tradizione</p>
                </div>
              </div>
            </div>

            {/* Right image — 3 cols, pulled up above baseline */}
            <div className="col-span-6 md:col-span-3 md:-mt-12 rv-scale">
              <div className="relative overflow-hidden aspect-[2/3] cursor-explore group">
                <img
                  src={piatto2}
                  alt="Dolci e pizza"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 md:p-7">
                  <h3 className="font-heading text-xl mb-1">Dolci & Pizza</h3>
                  <p className="text-white/45 text-sm">Strudel, Kaiserschmarrn, pizza dal forno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA — Seasonal colored, asymmetric split. Title massive
          on left, description + buttons offset right. Decorative
          line and altitude marker.
          ═══════════════════════════════════════ */}
      <section className={`relative py-28 md:py-40 px-6 lg:px-16 2xl:px-24 ${isWinter ? 'bg-winter-600' : 'bg-summer-600'} text-white overflow-hidden`}>
        {/* Decorative oversized text behind */}
        <div className="absolute -bottom-8 -right-4 text-[10rem] md:text-[18rem] font-heading text-white/5 leading-none select-none pointer-events-none">
          MENU
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
            {/* Title — left, massive */}
            <div className="lg:col-span-5 lg:col-start-1">
              <h2 className="rv-up display-large text-white leading-[0.95]">
                Scopri il<br />menu completo
              </h2>
              <div className="rv-left w-20 h-px bg-white/30 mt-8 hidden lg:block" />
            </div>

            {/* Description + buttons — right, offset down */}
            <div className="lg:col-span-5 lg:col-start-7 lg:pt-8">
              <p className="rv-up text-white/65 text-lg mb-10 leading-relaxed max-w-md">
                Primi piatti, secondi, pizza, taglieri, insalate, dolci e una selezione di vini trentini.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/menu" className="rv-up btn-primary bg-white text-alpine-dark hover:bg-white/90">
                  Menu del Ristorante
                </Link>
                <Link to="/menu#bibite" className="rv-up btn-outline">
                  Carta dei Vini
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
