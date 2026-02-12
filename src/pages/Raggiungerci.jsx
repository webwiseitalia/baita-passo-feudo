import { useEffect } from 'react'
import { useSeason } from '../context/SeasonContext'
import { useReveal, useHeroParallax, useSplitText, gsap, ScrollTrigger } from '../hooks/useGsap'

import heroImg from '../assets/foto/foto-3.webp'
import seggiovia from '../assets/foto/foto-11.webp'

export default function Raggiungerci() {
  const { isWinter } = useSeason()
  const heroRef = useHeroParallax()
  const contentRef = useReveal()
  const splitRef = useSplitText('.split-raggiungerci', { types: 'chars', stagger: { each: 0.01 }, rotate: 4, duration: 0.45 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.from('.hero-label-ragg', { y: 25, opacity: 0, duration: 0.45, ease: 'power3.out' })
        .from('.hero-title-ragg', { y: 120, opacity: 0, duration: 0.7, stagger: 0.06, ease: 'power4.out' }, '-=0.4')
        .from('.hero-sub-ragg', { x: -30, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.6')
        .from('.hero-line-ragg', { scaleX: 0, duration: 0.6, ease: 'power2.inOut' }, '-=0.8')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01',
      title: 'Partenza da Predazzo',
      desc: 'A 5 minuti dal centro di Predazzo, Val di Fiemme',
    },
    {
      num: '02',
      title: 'Telecabina Predazzo-Gardonè',
      desc: 'Cabina da 12 persone, comoda e panoramica',
    },
    {
      num: '03',
      title: 'Seggiovia Gardonè-Passo Feudo',
      desc: '4 posti con cupola protettiva',
    },
    {
      num: '04',
      title: 'Arrivo a 2.200m',
      desc: 'Tempo totale: circa 30 minuti. La baita è a pochi passi dalla stazione a monte!',
    },
  ]

  const prices = [
    { type: 'Adulti', ar: '€19,50', solo: '€15,50' },
    { type: 'Junior', ar: '€13,50', solo: '€11,00' },
    { type: 'Gruppi (15+)', ar: '€18,00', solo: '€14,00' },
  ]

  const trailSteps = [
    'Partenza: Frazione Al Fol, nord di Predazzo',
    'Strada forestale lungo il Rio Gardonè',
    'Passaggio per conca prativa Gardonè (Baita Gardonè ristoro)',
    'Arrivo Passo Feudo (2.190m)',
  ]

  const trailDetails = [
    { value: '2-3h', label: 'Durata' },
    { value: '2.190m', label: 'Altitudine arrivo' },
    { value: 'Media', label: 'Difficoltà' },
    { value: 'E504', label: 'Sentiero' },
  ]

  return (
    <div ref={contentRef}>
      {/* ═══════════════════════════════════════
          HERO — 70vh cinematic, line-broken title
          ═══════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Come raggiungerci — Baita Passo Feudo"
          title="Panorama del percorso verso Baita Passo Feudo"
          loading="eager"
          width={1920}
          height={1080}
          className="hero-bg absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="hero-overlay-left absolute inset-0" />

        {/* Vertical altitude marker */}
        <div className="absolute top-1/3 right-6 lg:right-10 hidden md:flex flex-col items-center gap-3">
          <div className="hero-line-ragg w-px h-20 bg-white/20 origin-top" />
          <span className="label-upper text-white/25 text-vertical text-xs">2.200 m s.l.m.</span>
        </div>

        <div className="relative z-10 w-full pb-16 md:pb-24 px-6 lg:px-16 2xl:px-24">
          <div className="max-w-6xl" ref={splitRef}>
            <p className="hero-label-ragg label-upper text-white/50 mb-4 tracking-[0.25em]">
              Da Predazzo · Val di Fiemme
            </p>
            <h1>
              <span className="hero-title-ragg display-huge text-white block">
                <span className="split-raggiungerci">Come</span>
              </span>
              <span className="hero-title-ragg display-huge text-white block ml-[4vw] md:ml-[8vw]">
                Raggiungerci
              </span>
            </h1>
            <div className="hero-sub-ragg flex items-center gap-5 mt-8">
              <span className="w-10 h-px bg-white/30" />
              <p className="text-white/50 text-lg font-body font-light">
                Telecabina, seggiovia o a piedi lungo il sentiero E504
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STEPS — Staggered diagonal cascade + tall image
          ═══════════════════════════════════════ */}
      <section className="relative py-28 md:py-40 px-6 lg:px-16 2xl:px-24 bg-white overflow-hidden">
        {/* Decorative oversized number */}
        <div className="absolute -top-8 right-6 lg:right-12 text-[12rem] md:text-[20rem] font-heading text-wood-50 leading-none select-none pointer-events-none parallax-x" data-direction="right">
          30
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
            {/* Text column — left side */}
            <div className="lg:col-span-5 lg:col-start-1">
              <p className={`rv-up label-upper mb-4 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                Con gli impianti
              </p>
              <h2 className="rv-up display-large text-alpine-dark mb-6">
                Telecabina<br />+ Seggiovia
              </h2>
              <p className="rv-up text-wood-500 leading-relaxed mb-14 max-w-sm">
                In soli 30 minuti sarete nel cuore delle Dolomiti, a 2.200 metri di altitudine.
              </p>

              {/* Staggered steps — diagonal cascade */}
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className="rv-up flex items-start gap-6 py-6 border-t border-wood-100"
                    style={{ marginLeft: `${i * 1.5}rem` }}
                  >
                    <span className={`label-upper text-2xl font-heading font-light ${isWinter ? 'text-winter-300' : 'text-summer-300'}`}>
                      {step.num}
                    </span>
                    <div>
                      <h4 className="font-accent font-semibold text-alpine-dark mb-1 text-sm tracking-wide">
                        {step.title}
                      </h4>
                      <p className="text-wood-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image — right side, tall, broken grid overlap */}
            <div className="lg:col-span-6 lg:col-start-7 lg:mt-24 rv-clip-right">
              <div className="img-hover-shift overflow-hidden aspect-[3/4]">
                <img
                  src={seggiovia}
                  alt="Seggiovia verso Passo Feudo"
                  title="Seggiovia Gardone - Passo Feudo tra le Dolomiti"
                  loading="lazy"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover parallax-img scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PREZZI IMPIANTI — Raw minimal table, no rounded corners
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 lg:px-16 2xl:px-24 bg-alpine-cream overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Title — left aligned, pushed in */}
            <div className="lg:col-span-4 lg:col-start-2">
              <p className={`rv-up label-upper mb-4 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                Tariffe
              </p>
              <h2 className="rv-up display-medium text-alpine-dark">
                Prezzi impianti<br />(2 tronchi)
              </h2>
            </div>

            {/* Table — right, raw/minimal */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="rv-up">
                {/* Header */}
                <div className="flex items-center border-b-2 border-alpine-dark pb-4 mb-0">
                  <span className="flex-1 label-upper text-wood-400">Tipologia</span>
                  <span className="w-28 text-right label-upper text-wood-400">A/R</span>
                  <span className="w-28 text-right label-upper text-wood-400">Solo Andata</span>
                </div>

                {/* Rows */}
                {prices.map((row, i) => (
                  <div
                    key={i}
                    className="rv-up flex items-baseline border-b border-wood-100 py-5"
                  >
                    <span className="flex-1 font-accent font-semibold text-alpine-dark text-sm tracking-wide">
                      {row.type}
                    </span>
                    <span className="w-28 text-right font-heading text-2xl text-alpine-dark">
                      {row.ar}
                    </span>
                    <span className="w-28 text-right font-heading text-lg text-wood-400">
                      {row.solo}
                    </span>
                  </div>
                ))}

                {/* Notes — scattered, not boxed */}
                <div className="mt-10 space-y-3 text-sm text-wood-500">
                  <p className="rv-up">
                    <span className="font-accent font-semibold text-wood-700 mr-2">Bambini sotto 8 anni:</span>
                    GRATIS
                  </p>
                  <p className="rv-up" style={{ marginLeft: '1.5rem' }}>
                    <span className="font-accent font-semibold text-wood-700 mr-2">Junior:</span>
                    nati dopo 16.05.2004
                  </p>
                  <p className="rv-up">
                    <span className="font-accent font-semibold text-wood-700 mr-2">Gruppi:</span>
                    almeno 15 persone (16° gratis)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          A PIEDI — Dark section, trail E504
          ═══════════════════════════════════════ */}
      <section className="py-28 md:py-40 px-6 lg:px-16 2xl:px-24 bg-alpine-dark text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          {/* Section header — wide asymmetric */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-5 lg:col-start-1">
              <p className={`rv-up label-upper mb-4 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>
                A piedi
              </p>
              <h2 className="rv-up display-large text-white">
                Sentiero<br />E504
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-8 flex items-end">
              <p className="rv-up-soft text-wood-400 leading-relaxed">
                Per chi ama camminare, il sentiero E504 collega Predazzo al Passo Feudo attraverso boschi e pascoli alpini.
              </p>
            </div>
          </div>

          <hr className="creative-rule mb-20 rv-up opacity-30" />

          {/* Content — asymmetric two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Itinerary — left, narrow */}
            <div className="lg:col-span-5 lg:col-start-1">
              <h3 className="rv-up font-accent font-semibold text-xs uppercase tracking-[0.25em] text-wood-400 mb-8">
                Itinerario
              </h3>
              <div className="space-y-6">
                {trailSteps.map((step, i) => (
                  <div key={i} className="rv-up flex items-start gap-4" style={{ marginLeft: `${i * 0.8}rem` }}>
                    <span className={`font-heading text-3xl font-light ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-wood-300 text-sm leading-relaxed pt-2 border-t border-wood-700 flex-1">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Details — right, scattered grid with staggered offsets */}
            <div className="lg:col-span-5 lg:col-start-8">
              <h3 className="rv-up font-accent font-semibold text-xs uppercase tracking-[0.25em] text-wood-400 mb-8">
                Dettagli percorso
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {trailDetails.map((detail, i) => (
                  <div
                    key={i}
                    className={`rv-up ${i === 1 ? 'mt-8' : ''} ${i === 3 ? 'mt-6' : ''}`}
                  >
                    <p className="font-heading text-4xl md:text-5xl text-white mb-2">
                      {detail.value}
                    </p>
                    <p className="label-upper text-wood-500">{detail.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MAPPA — Overlapping layout with text + iframe
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 lg:px-16 2xl:px-24 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
            {/* Text — narrow left, sticky */}
            <div className="lg:col-span-4 lg:col-start-1 lg:sticky lg:top-32">
              <p className={`rv-up label-upper mb-4 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                La mappa
              </p>
              <h2 className="rv-up display-medium text-alpine-dark mb-6">
                Dove<br />siamo
              </h2>
              <p className="rv-up text-wood-500 leading-relaxed mb-8 max-w-xs">
                Località Passo Feudo, nel cuore dello Ski Center Latemar, raggiungibile da Predazzo.
              </p>
              <a
                href="https://www.google.com/maps/search/Baita+Passo+Feudo+Predazzo"
                target="_blank"
                rel="noopener noreferrer"
                className={`rv-up ${isWinter ? 'btn-winter' : 'btn-summer'}`}
              >
                Apri in Google Maps
              </a>
            </div>

            {/* Map — wide right, full height, overlapping into text col */}
            <div className="lg:col-span-8 lg:col-start-5 lg:-ml-8 rv-scale">
              <div className="overflow-hidden h-[400px] md:h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5514.123456789!2d11.47!3d46.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBaita+Passo+Feudo!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Baita Passo Feudo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
