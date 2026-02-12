import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSeason } from '../context/SeasonContext'
import { useReveal, useHeroParallax, useSplitText, gsap, ScrollTrigger } from '../hooks/useGsap'

import heroWinter from '../assets/foto/foto-1.webp'
import heroSummer from '../assets/foto/foto-10.webp'
import baitaInterior from '../assets/foto/foto-5.webp'
import piatto1 from '../assets/foto/foto-20.webp'
import piatto2 from '../assets/foto/foto-25.webp'
import terrazza from '../assets/foto/foto-15.webp'
import panorama from '../assets/foto/foto-9.webp'
import attivita from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto17 from '../assets/foto/foto-17.webp'

export default function Home() {
  const { isWinter } = useSeason()
  const heroRef = useHeroParallax()
  const contentRef = useReveal()
  const splitRef = useSplitText('.split-headline', { types: 'chars', stagger: { each: 0.025 }, rotate: 3, duration: 1 })
  const counterRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.from('.hero-altitude', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })
        .from('.hero-title-line', { y: 140, opacity: 0, duration: 1.6, stagger: 0.12, ease: 'power4.out' }, '-=0.4')
        .from('.hero-sub', { y: 50, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=0.8')
        .from('.hero-cta', { y: 30, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' }, '-=0.6')
        .from('.hero-scroll-hint', { opacity: 0, y: 10, duration: 1 }, '-=0.3')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  // Counter animation for altitude
  useEffect(() => {
    if (!counterRef.current) return
    const ctx = gsap.context(() => {
      const counter = { val: 0 }
      gsap.to(counter, {
        val: 2200,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counterRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(counter.val).toLocaleString('it-IT')
          }
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div ref={contentRef}>
      {/* ═══════ HERO — Full-viewport cinematic, content pushed bottom-left ═══════ */}
      <section ref={heroRef} className="relative h-screen min-h-[750px] flex items-end overflow-hidden">
        <img
          src={isWinter ? heroWinter : heroSummer}
          alt={isWinter ? 'Panorama invernale Dolomiti' : 'Panorama estivo Dolomiti'}
          className="hero-bg absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full pb-12 md:pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <p className="hero-altitude label-upper text-white/50 mb-8">
                {isWinter ? 'Ski Center Latemar · Val di Fiemme' : 'Dolomiti UNESCO · Val di Fiemme'}
              </p>
              <h1 className="mb-10">
                <span className="hero-title-line display-massive text-white block">Baita</span>
                <span className="hero-title-line display-massive text-white block ml-[8vw] md:ml-[12vw]">Passo</span>
                <span className="hero-title-line display-huge text-white/80 block ml-[16vw] md:ml-[24vw] font-light italic">Feudo</span>
              </h1>
              <p className="hero-sub text-white/60 text-lg md:text-xl max-w-md font-body font-light leading-relaxed">
                {isWinter
                  ? 'A 2.200 metri, nel cuore dello Ski Center Latemar'
                  : 'A 2.200 metri, nel cuore delle Dolomiti'}
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/menu" className={`hero-cta ${isWinter ? 'btn-winter' : 'btn-summer'}`}>
                  Scopri il Menu
                </Link>
                <Link to="/raggiungerci" className="hero-cta btn-outline">
                  Come Raggiungerci
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical altitude badge */}
        <div className="hero-scroll-hint absolute bottom-12 right-8 hidden md:flex flex-col items-center gap-4">
          <span className="label-upper text-white/30 text-vertical">2.200 m s.l.m.</span>
          <div className="w-px h-16 bg-white/20" />
        </div>
      </section>

      {/* ═══════ DOUBLE MARQUEE — Two rows, opposite directions ═══════ */}
      <div className="py-5 bg-alpine-dark overflow-hidden space-y-2">
        <div className="marquee-track flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex items-center gap-10 pr-10">
              <span className="label-upper text-wood-500">Ristorante</span>
              <span className="text-alpine-gold text-xs">✦</span>
              <span className="label-upper text-wood-500">Pizzeria</span>
              <span className="text-alpine-gold text-xs">✦</span>
              <span className="label-upper text-wood-500">Terrazza Panoramica</span>
              <span className="text-alpine-gold text-xs">✦</span>
              <span className="label-upper text-wood-500">Caffetteria</span>
              <span className="text-alpine-gold text-xs">✦</span>
              <span className="label-upper text-wood-500">2.200m</span>
              <span className="text-alpine-gold text-xs">✦</span>
              <span className="label-upper text-wood-500">Dolomiti UNESCO</span>
              <span className="text-alpine-gold text-xs">✦</span>
            </span>
          ))}
        </div>
        <div className="marquee-track-reverse flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex items-center gap-10 pr-10">
              <span className="label-upper text-wood-600">Val di Fiemme</span>
              <span className="text-wood-700 text-xs">·</span>
              <span className="label-upper text-wood-600">Predazzo</span>
              <span className="text-wood-700 text-xs">·</span>
              <span className="label-upper text-wood-600">Ski Center Latemar</span>
              <span className="text-wood-700 text-xs">·</span>
              <span className="label-upper text-wood-600">Cucina Trentina</span>
              <span className="text-wood-700 text-xs">·</span>
              <span className="label-upper text-wood-600">Km Zero</span>
              <span className="text-wood-700 text-xs">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════ BENVENUTI — Wildly asymmetric, text far apart ═══════ */}
      <section className="relative py-28 md:py-44 px-6 lg:px-12 bg-alpine-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Oversized decorative number */}
          <div className="absolute top-8 right-6 lg:right-12 text-[12rem] md:text-[20rem] font-heading text-wood-100 leading-none select-none pointer-events-none parallax-x" data-direction="right">
            01
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3 lg:col-start-1">
              <p className={`rv-up label-upper mb-6 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                Benvenuti
              </p>
              <h2 className="rv-up display-large text-alpine-dark" ref={splitRef}>
                <span className="split-headline">In alta quota</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-20">
              <p className="rv-up text-lg text-wood-600 leading-relaxed">
                {isWinter
                  ? 'Tra il blu del cielo e il bianco candido delle piste, la Baita Passo Feudo vi accoglie a 2.200 metri nel cuore dello Ski Center Latemar. Un rifugio dove il panorama mozzafiato sulle Dolomiti UNESCO si unisce al calore dell\'ospitalità trentina.'
                  : 'Immersa nel verde vivace dei pascoli alpini, la Baita Passo Feudo vi accoglie a 2.200 metri nel cuore delle Dolomiti. Un rifugio dove il panorama mozzafiato sulle Pale di San Martino si unisce al calore dell\'ospitalità trentina.'}
              </p>
              <p className="rv-up text-editorial text-wood-700 mt-10">
                "L'esperienza Baita Passo Feudo vi resterà nel cuore"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ LA BAITA — Image bleeding right, text overlapping ═══════ */}
      <section className="relative py-16 md:py-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center min-h-[80vh]">
            {/* Text column — narrow left, pushed down */}
            <div className="lg:col-span-4 lg:col-start-1 relative z-10 py-16 lg:py-32">
              <p className={`rv-up label-upper mb-5 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                La nostra Baita
              </p>
              <h2 className="rv-up display-medium text-alpine-dark mb-8">
                Panorama<br />e gusto a<br />2.200 metri
              </h2>
              <p className="rv-up text-wood-600 leading-relaxed mb-6 max-w-sm">
                Un punto di ritrovo che oltre a rifocillarvi nel fisico vi nutrirà anche nello spirito.
              </p>
              <p className="rv-up text-wood-500 leading-relaxed mb-10 max-w-sm text-sm">
                Coccolati dall'abbraccio della natura, tra ambienti rivestiti in legno e l'ospitalità che vi farà sentire in famiglia.
              </p>
              <Link to="/la-baita" className={`rv-up label-upper inline-flex items-center gap-4 ${isWinter ? 'text-winter-600 hover:text-winter-800' : 'text-summer-600 hover:text-summer-800'} transition-colors group`}>
                Scopri di più
                <span className="w-8 h-px bg-current inline-block transition-all group-hover:w-14" />
              </Link>
            </div>
            {/* Image — bleeds right, overlaps text area */}
            <div className="lg:col-span-8 lg:col-start-5 lg:-mr-12 rv-clip-left">
              <div className="overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[85vh]">
                <img
                  src={baitaInterior}
                  alt="Interno Baita Passo Feudo"
                  className="w-full h-full object-cover parallax-img scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ALTITUDE COUNTER — Full-width dark strip ═══════ */}
      <section className="py-20 md:py-28 bg-alpine-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-4">
            <div className="rv-up">
              <p ref={counterRef} className="font-heading text-5xl md:text-7xl text-white mb-2">0</p>
              <p className="label-upper text-wood-500">Metri s.l.m.</p>
            </div>
            <div className="rv-up md:mt-8">
              <p className="font-heading text-5xl md:text-7xl text-white mb-2">365</p>
              <p className="label-upper text-wood-500">Giorni di panorama</p>
            </div>
            <div className="rv-up md:mt-4">
              <p className="font-heading text-5xl md:text-7xl text-white mb-2">30</p>
              <p className="label-upper text-wood-500">Minuti da Predazzo</p>
            </div>
            <div className="rv-up md:mt-12">
              <p className="font-heading text-5xl md:text-7xl text-white mb-2 italic">∞</p>
              <p className="label-upper text-wood-500">Emozioni</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ GUSTO — Diagonal image composition ═══════ */}
      <section className="relative py-24 md:py-40 px-6 lg:px-12 bg-alpine-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header — title left, description far right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 lg:mb-24">
            <div className="lg:col-span-5 lg:col-start-1">
              <p className={`rv-up label-upper mb-4 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                Il Ristorante
              </p>
              <h2 className="rv-up display-large text-alpine-dark">
                Gusto in<br />alta quota
              </h2>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 flex items-end">
              <p className="rv-up text-wood-500 text-sm leading-relaxed">
                Sapori tipici trentini protagonisti di un menù creativo. Ingredienti d'origine trentina, biologici e a km 0.
              </p>
            </div>
          </div>

          {/* Diagonal image composition — NOT a regular grid */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {/* Large left — tall portrait */}
            <div className="col-span-12 md:col-span-5 rv-clip-up">
              <div className="img-hover-shift overflow-hidden aspect-[3/4]">
                <img src={piatto1} alt="Primi piatti trentini" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 rv-up">
                <h3 className="font-heading text-xl text-alpine-dark">Primi Piatti</h3>
                <p className="text-wood-400 text-sm mt-1">Canederli, ravioli, risotti</p>
              </div>
            </div>
            {/* Top right — landscape, pushed down */}
            <div className="col-span-7 md:col-span-4 md:col-start-7 md:mt-24 rv-clip-up">
              <div className="img-hover-zoom overflow-hidden aspect-[16/10]">
                <img src={piatto2} alt="Dolci della casa" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 rv-up">
                <h3 className="font-heading text-xl text-alpine-dark">Dolci</h3>
                <p className="text-wood-400 text-sm mt-1">Strudel, Kaiserschmarrn</p>
              </div>
            </div>
            {/* Small bottom right — square, floating */}
            <div className="col-span-5 md:col-span-3 md:col-start-10 md:-mt-16 rv-clip-up">
              <div className="img-hover-zoom overflow-hidden aspect-square">
                <img src={terrazza} alt="Terrazza e pizza" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 rv-up">
                <h3 className="font-heading text-lg text-alpine-dark">Pizzeria</h3>
                <p className="text-wood-400 text-sm mt-1">Forno a 2.200m</p>
              </div>
            </div>
          </div>

          <div className="mt-14 rv-up">
            <Link to="/menu" className={isWinter ? 'btn-winter' : 'btn-summer'}>
              Vedi il Menu Completo
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ TERRAZZA — Cinematic full-bleed with floating text ═══════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="rv-clip-center absolute inset-0">
          <img
            src={foto3}
            alt="Baita vista esterna"
            className="w-full h-full object-cover parallax-img scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
              <div className="lg:col-span-6 lg:col-start-1">
                <p className="rv-up label-upper text-white/40 mb-6">La Terrazza Solarium</p>
                <h2 className="rv-up display-large text-white mb-6">
                  Un balcone<br />sulle Dolomiti
                </h2>
              </div>
              <div className="lg:col-span-4 lg:col-start-8">
                <p className="rv-up text-white/60 leading-relaxed mb-8">
                  La nostra ampia terrazza è il luogo perfetto per godersi il panorama mozzafiato, un caffè al sole o un pranzo con vista.
                </p>
                <Link to="/la-baita" className="rv-up btn-outline">
                  Scopri la Baita
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ATTIVITÀ — Reversed layout with vertical text ═══════ */}
      <section className="py-28 md:py-44 px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-start">
            {/* Vertical label — hidden on mobile */}
            <div className="hidden lg:flex lg:col-span-1 lg:col-start-1 items-start justify-center pt-8">
              <span className={`rv-up text-vertical label-upper ${isWinter ? 'text-winter-300' : 'text-summer-300'}`}>
                {isWinter ? 'Inverno' : 'Estate'}
              </span>
            </div>

            {/* Image — asymmetric right, tall */}
            <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 rv-right">
              <div className="overflow-hidden aspect-[3/4] lg:aspect-[4/5]">
                <img
                  src={isWinter ? attivita : panorama}
                  alt={isWinter ? 'Attività invernali' : 'Escursioni estive'}
                  className="w-full h-full object-cover parallax-img scale-110"
                />
              </div>
            </div>

            {/* Text — left, narrow, pushed down */}
            <div className="lg:col-span-5 lg:col-start-2 lg:-mr-12 relative z-10 order-2 lg:order-1 lg:mt-32">
              <p className={`rv-up label-upper mb-4 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                {isWinter ? 'Attività Invernali' : 'Attività Estive'}
              </p>
              <h2 className="rv-up display-medium text-alpine-dark mb-10">
                {isWinter
                  ? 'Un punto nevralgico\nper lo sci'
                  : 'Il cuore delle\nescursioni dolomitiche'}
              </h2>

              <div className="space-y-8 mb-12">
                {(isWinter ? [
                  { num: '01', title: 'Sci alpino', desc: 'Ski Center Latemar, il più vasto comprensorio della Val di Fiemme-Obereggen' },
                  { num: '02', title: 'Sci alpinismo', desc: 'Percorsi verso il Rifugio Torre di Pisa, soddisfazioni impagabili' },
                  { num: '03', title: 'Ciaspole', desc: 'Trekking invernale adatto a tutta la famiglia' },
                ] : [
                  { num: '01', title: 'Escursioni', desc: 'Pascoli, prati fioriti e percorsi verso il Rifugio Torre di Pisa a 2.671m' },
                  { num: '02', title: 'Mountain Bike', desc: 'Sentieri del Latemar con trasporto bici incluso' },
                  { num: '03', title: 'Panorami', desc: 'Vista unica su Pale di San Martino e Catena del Lagorai' },
                ]).map((item, i) => (
                  <div key={i} className="rv-up flex items-start gap-5" style={{ marginLeft: `${i * 1.2}rem` }}>
                    <span className={`label-upper text-lg font-heading font-light ${isWinter ? 'text-winter-300' : 'text-summer-300'}`}>{item.num}</span>
                    <div>
                      <h4 className="font-accent font-semibold text-alpine-dark mb-1 text-sm tracking-wide">{item.title}</h4>
                      <p className="text-wood-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/attivita" className={`rv-up label-upper inline-flex items-center gap-4 ${isWinter ? 'text-winter-600 hover:text-winter-800' : 'text-summer-600 hover:text-summer-800'} transition-colors group`}>
                Tutte le attività
                <span className="w-8 h-px bg-current inline-block transition-all group-hover:w-14" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PERCHÉ SCEGLIERCI — Scattered, not aligned ═══════ */}
      <section className="py-28 md:py-40 px-6 lg:px-12 bg-alpine-cream overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Decorative big number */}
          <div className="absolute -top-4 -left-4 text-[15rem] md:text-[22rem] font-heading text-wood-100 leading-none select-none pointer-events-none opacity-60">
            04
          </div>

          <div className="relative z-10">
            <h2 className="rv-up display-large text-alpine-dark mb-24 max-w-lg">
              Perché<br />sceglierci
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-6">
              {/* Item 1 — top left */}
              <div className="md:col-span-4 md:col-start-1 rv-up">
                <span className={`label-upper block mb-4 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>01</span>
                <h3 className="font-heading text-2xl text-alpine-dark mb-3">Lassù tra le montagne</h3>
                <p className="text-wood-500 text-sm leading-relaxed">A 2.200m, con una vista impareggiabile sulle Dolomiti UNESCO.</p>
              </div>
              {/* Item 2 — offset right and down */}
              <div className="md:col-span-3 md:col-start-6 md:mt-20 rv-up">
                <span className={`label-upper block mb-4 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>02</span>
                <h3 className="font-heading text-2xl text-alpine-dark mb-3">Ambiente familiare</h3>
                <p className="text-wood-500 text-sm leading-relaxed">Ospitalità autentica che vi farà sentire in famiglia.</p>
              </div>
              {/* Item 3 — far right, less offset */}
              <div className="md:col-span-3 md:col-start-10 md:mt-8 rv-up">
                <span className={`label-upper block mb-4 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>03</span>
                <h3 className="font-heading text-2xl text-alpine-dark mb-3">Tradizione gastronomica</h3>
                <p className="text-wood-500 text-sm leading-relaxed">Cucina trentina creativa con ingredienti locali e biologici.</p>
              </div>
              {/* Item 4 — back left, big offset */}
              <div className="md:col-span-4 md:col-start-3 md:-mt-6 rv-up">
                <span className={`label-upper block mb-4 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>04</span>
                <h3 className="font-heading text-2xl text-alpine-dark mb-3">Terrazza solarium</h3>
                <p className="text-wood-500 text-sm leading-relaxed">Una terrazza panoramica unica sulla Val di Fiemme.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ IMAGE BREAK — 3 columns, unequal ═══════ */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-5 overflow-hidden h-[35vh] md:h-[55vh] rv-clip-up">
            <img src={foto6} alt="Dettaglio interni" className="w-full h-full object-cover parallax-img scale-110" />
          </div>
          <div className="col-span-4 overflow-hidden h-[35vh] md:h-[55vh] rv-clip-up" style={{ marginTop: '3vh' }}>
            <img src={foto7} alt="Atmosfera della baita" className="w-full h-full object-cover parallax-img scale-110" />
          </div>
          <div className="col-span-3 overflow-hidden h-[35vh] md:h-[55vh] rv-clip-up" style={{ marginTop: '-2vh' }}>
            <img src={foto17} alt="Dettaglio arredamento" className="w-full h-full object-cover parallax-img scale-110" />
          </div>
        </div>
      </section>

      {/* ═══════ CTA — Cinematic final ═══════ */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <img
          src={panorama}
          alt="Panorama Dolomiti"
          className="absolute inset-0 w-full h-full object-cover parallax-img scale-110"
        />
        <div className="hero-overlay-dramatic absolute inset-0" />
        <div className="relative z-10 w-full pb-16 md:pb-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl">
              <h2 className="rv-up display-large text-white mb-6">
                Vieni a<br />trovarci
              </h2>
              <p className="rv-up text-white/50 text-lg max-w-md mb-10 leading-relaxed">
                A soli 30 minuti con telecabina e seggiovia da Predazzo, vi aspettiamo per una giornata indimenticabile
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contatti" className={`rv-up ${isWinter ? 'btn-winter' : 'btn-summer'}`}>
                  Contattaci
                </Link>
                <Link to="/raggiungerci" className="rv-up btn-outline">
                  Come Raggiungerci
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
