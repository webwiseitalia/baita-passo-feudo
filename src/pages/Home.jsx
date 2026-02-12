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
import foto4 from '../assets/foto/foto-4.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto11 from '../assets/foto/foto-11.webp'
import foto12 from '../assets/foto/foto-12.webp'
import foto14 from '../assets/foto/foto-14.webp'
import foto16 from '../assets/foto/foto-16.webp'
import foto18 from '../assets/foto/foto-18.webp'

export default function Home() {
  const { isWinter } = useSeason()
  const heroRef = useHeroParallax()
  const contentRef = useReveal()
  const splitRef = useSplitText('.split-headline', { types: 'chars', stagger: { each: 0.015 }, rotate: 3, duration: 0.5 })
  const counterRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from('.hero-altitude', { y: 15, opacity: 0, duration: 0.4, ease: 'power3.out' })
        .from('.hero-title-line', { y: 100, opacity: 0, duration: 0.8, stagger: 0.06, ease: 'power4.out' }, '-=0.2')
        .from('.hero-sub', { y: 30, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.4')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.4, stagger: 0.04, ease: 'power3.out' }, '-=0.3')
        .from('.hero-scroll-hint', { opacity: 0, y: 10, duration: 0.5 }, '-=0.2')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!counterRef.current) return
    const ctx = gsap.context(() => {
      const counter = { val: 0 }
      gsap.to(counter, {
        val: 2200,
        duration: 1.4,
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
      {/* ═══════ HERO ═══════ */}
      <section ref={heroRef} className="relative h-screen min-h-[750px] flex items-end overflow-hidden">
        <img
          src={isWinter ? heroWinter : heroSummer}
          alt={isWinter ? 'Panorama invernale Dolomiti' : 'Panorama estivo Dolomiti'}
          className="hero-bg absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full pb-12 md:pb-20 px-6 lg:px-16 2xl:px-24">
          <div className="max-w-[1600px] mx-auto">
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

        <div className="hero-scroll-hint absolute bottom-12 right-8 hidden md:flex flex-col items-center gap-4">
          <span className="label-upper text-white/30 text-vertical">2.200 m s.l.m.</span>
          <div className="w-px h-16 bg-white/20" />
        </div>
      </section>

      {/* ═══════ DOUBLE MARQUEE ═══════ */}
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

      {/* ═══════ BENVENUTI — Image + text overlap, compact ═══════ */}
      <section className="relative pt-14 md:pt-20 pb-0 bg-alpine-cream overflow-visible">
        <div className="px-6 lg:px-0">
          {/* Giant decorative text */}
          <div className="absolute -left-[5vw] top-6 text-[18vw] font-heading text-wood-100/40 leading-none select-none pointer-events-none parallax-x hidden lg:block" data-direction="left">
            Benvenuti
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto">
            <div className="lg:ml-[8%]">
              <p className={`rv-up label-upper mb-4 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                Benvenuti
              </p>
              <h2 className="rv-up display-large text-alpine-dark max-w-md" ref={splitRef}>
                <span className="split-headline">In alta quota</span>
              </h2>
            </div>
          </div>

          {/* Image + Text overlap */}
          <div className="relative mt-8 md:mt-10 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 lg:col-start-1 lg:-ml-[4vw] rv-clip-up relative">
                <div className="overflow-hidden aspect-[4/3] lg:aspect-[16/11]">
                  <img src={foto3} alt="Esterno Baita" className="w-full h-full object-cover parallax-img scale-110" />
                </div>
              </div>

              <div className="lg:col-span-5 lg:col-start-7 relative z-20 lg:-ml-20 lg:-mt-20 bg-alpine-cream p-6 md:p-10 self-end">
                <div className="accent-line-vertical -left-8 top-10 hidden lg:block" />
                <p className="rv-up text-base lg:text-lg text-wood-600 leading-relaxed">
                  {isWinter
                    ? 'Tra il blu del cielo e il bianco candido delle piste, la Baita Passo Feudo vi accoglie a 2.200 metri nel cuore dello Ski Center Latemar. Un rifugio dove il panorama mozzafiato sulle Dolomiti UNESCO si unisce al calore dell\'ospitalità trentina.'
                    : 'Immersa nel verde vivace dei pascoli alpini, la Baita Passo Feudo vi accoglie a 2.200 metri nel cuore delle Dolomiti. Un rifugio dove il panorama mozzafiato sulle Pale di San Martino si unisce al calore dell\'ospitalità trentina.'}
                </p>
                <p className="rv-up text-editorial text-wood-700 mt-6 border-l-2 border-alpine-gold/30 pl-6">
                  "L'esperienza Baita Passo Feudo vi resterà nel cuore"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating small image */}
        <div className="hidden lg:block absolute -bottom-20 right-[8%] z-30 rv-scale">
          <div className="w-44 h-56 overflow-hidden shadow-2xl" style={{ transform: 'rotate(3deg)' }}>
            <img src={foto4} alt="Dettaglio baita" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ═══════ LA BAITA — Image right, text overlaps ═══════ */}
      <section className="relative pt-12 lg:pt-0 pb-0 bg-white overflow-hidden">
        <div className="relative min-h-[75vh]">
          <div className="hidden lg:block absolute top-0 right-0 w-[62%] h-full rv-clip-right">
            <img
              src={baitaInterior}
              alt="Interno Baita Passo Feudo"
              className="w-full h-full object-cover parallax-img scale-110"
            />
          </div>

          <div className="lg:hidden px-6 mb-6 rv-clip-up">
            <div className="overflow-hidden aspect-[4/3]">
              <img src={baitaInterior} alt="Interno Baita Passo Feudo" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 2xl:px-24 flex items-center min-h-[75vh]">
            <div className="lg:max-w-[42%] py-12 lg:py-20">
              <div className="hidden lg:block w-20 h-px bg-alpine-gold/50 mb-8 rv-left" />

              <p className={`rv-up label-upper mb-4 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                La nostra Baita
              </p>
              <h2 className="rv-up display-medium text-alpine-dark mb-6">
                Panorama<br />e gusto a<br />
                <span className="text-outline text-wood-300">2.200 metri</span>
              </h2>
              <p className="rv-up text-wood-600 leading-relaxed mb-4 max-w-sm">
                Un punto di ritrovo che oltre a rifocillarvi nel fisico vi nutrirà anche nello spirito.
              </p>
              <p className="rv-up text-wood-500 leading-relaxed mb-8 max-w-xs text-sm">
                Coccolati dall'abbraccio della natura, tra ambienti rivestiti in legno e l'ospitalità che vi farà sentire in famiglia.
              </p>
              <Link to="/la-baita" className={`rv-up label-upper inline-flex items-center gap-4 ${isWinter ? 'text-winter-600 hover:text-winter-800' : 'text-summer-600 hover:text-summer-800'} transition-colors group`}>
                Scopri di più
                <span className="w-8 h-px bg-current inline-block transition-all group-hover:w-14" />
              </Link>

              <div className="hidden lg:block mt-10 rv-up">
                <div className="w-44 h-28 overflow-hidden" style={{ transform: 'rotate(-2deg)' }}>
                  <img src={foto8} alt="Dettaglio interno" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ALTITUDE COUNTER ═══════ */}
      <section className="relative py-14 md:py-20 bg-alpine-dark overflow-hidden skew-both">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-y-8">
            <div className="md:col-span-2 md:col-start-1 rv-up">
              <p ref={counterRef} className="font-heading text-5xl md:text-8xl text-white mb-2">0</p>
              <p className="label-upper text-wood-500">Metri s.l.m.</p>
            </div>
            <div className="md:col-span-2 md:col-start-5 md:mt-12 rv-up">
              <p className="font-heading text-5xl md:text-7xl text-white mb-2">365</p>
              <p className="label-upper text-wood-500">Giorni di panorama</p>
            </div>
            <div className="md:col-span-2 md:col-start-8 md:-mt-2 rv-up">
              <p className="font-heading text-5xl md:text-6xl text-white mb-2">30</p>
              <p className="label-upper text-wood-500">Minuti da Predazzo</p>
            </div>
            <div className="md:col-span-2 md:col-start-11 md:mt-16 rv-up">
              <p className="font-heading text-5xl md:text-9xl text-white mb-2 italic">∞</p>
              <p className="label-upper text-wood-500">Emozioni</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="diagonal-rule" />
        </div>
      </section>

      {/* ═══════ GUSTO — Full-width dense editorial layout ═══════ */}
      <section className="relative bg-alpine-cream overflow-hidden">
        {/* Top row: Title overlapping a wide image */}
        <div className="relative">
          {/* Wide background image — full width */}
          <div className="w-full h-[50vh] md:h-[65vh] rv-clip-up overflow-hidden">
            <img src={piatto1} alt="Piatti del ristorante" className="w-full h-full object-cover parallax-img scale-110" />
          </div>
          {/* Title block overlapping the image from bottom-left */}
          <div className="absolute bottom-0 left-0 z-10 bg-alpine-cream p-6 md:p-10 lg:p-14 max-w-lg lg:max-w-xl rv-up">
            <p className={`label-upper mb-3 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
              02 — Il Ristorante
            </p>
            <h2 className="display-large text-alpine-dark">
              Gusto in<br />alta quota
            </h2>
          </div>
        </div>

        {/* Content row: text + 3 images, tight grid */}
        <div className="px-6 lg:px-16 2xl:px-24 py-10 md:py-14">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 items-start">
              {/* Text + CTA — left column */}
              <div className="md:col-span-3 md:col-start-1">
                <p className="rv-up text-wood-600 leading-relaxed mb-6">
                  Sapori tipici trentini protagonisti di un menù creativo. Ingredienti d'origine trentina, biologici e a km 0.
                </p>
                <p className="rv-up text-editorial text-wood-700 border-l-2 border-alpine-gold/30 pl-5 mb-8">
                  "La cucina di montagna come non l'avete mai provata"
                </p>
                <Link to="/menu" className={`rv-up ${isWinter ? 'btn-winter' : 'btn-summer'}`}>
                  Vedi il Menu
                </Link>
              </div>

              {/* Image 1 — tall portrait */}
              <div className="md:col-span-3 md:col-start-4 rv-clip-up">
                <div className="img-hover-shift overflow-hidden aspect-[3/4]">
                  <img src={piatto2} alt="Dolci della casa" className="w-full h-full object-cover" />
                </div>
                <div className="mt-3 rv-up">
                  <h3 className="font-heading text-lg text-alpine-dark">Dolci</h3>
                  <p className="text-wood-400 text-xs mt-0.5">Strudel, Kaiserschmarrn</p>
                </div>
              </div>

              {/* Image 2 — landscape, pushed down slightly */}
              <div className="md:col-span-4 md:col-start-7 md:mt-10 rv-clip-up">
                <div className="img-hover-zoom overflow-hidden aspect-[4/3]">
                  <img src={terrazza} alt="Terrazza panoramica" className="w-full h-full object-cover" />
                </div>
                <div className="mt-3 rv-up">
                  <h3 className="font-heading text-lg text-alpine-dark">Terrazza</h3>
                  <p className="text-wood-400 text-xs mt-0.5">Pranzo con vista Dolomiti</p>
                </div>
              </div>

              {/* Image 3 — square, fills right edge */}
              <div className="md:col-span-2 md:col-start-11 rv-clip-up">
                <div className="img-hover-zoom overflow-hidden aspect-[3/5]">
                  <img src={foto11} alt="Dettaglio piatto" className="w-full h-full object-cover" />
                </div>
                <div className="mt-3 rv-up">
                  <h3 className="font-heading text-lg text-alpine-dark">Pizzeria</h3>
                  <p className="text-wood-400 text-xs mt-0.5">Forno a 2.200m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TERRAZZA — Full-bleed ═══════ */}
      <section className="relative overflow-hidden">
        <div className="rv-clip-center relative min-h-[70vh] lg:min-h-[80vh]">
          <img
            src={foto3}
            alt="Baita vista esterna"
            className="absolute inset-0 w-full h-full object-cover parallax-img scale-110"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex items-end h-full min-h-[70vh] lg:min-h-[80vh] px-6 lg:px-16 2xl:px-24 pb-12 lg:pb-0">
            <div className="max-w-[1600px] mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8">
                <div className="lg:col-span-7 lg:col-start-1 lg:pb-16">
                  <p className="rv-up label-upper text-white/40 mb-4">La Terrazza Solarium</p>
                  <h2 className="rv-up display-large text-white">
                    Un balcone<br />sulle Dolomiti
                  </h2>
                </div>

                <div className="lg:col-span-3 lg:col-start-10 lg:pb-24">
                  <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10">
                    <p className="rv-up text-white/70 leading-relaxed text-sm mb-5">
                      La nostra ampia terrazza è il luogo perfetto per godersi il panorama mozzafiato, un caffè al sole o un pranzo con vista.
                    </p>
                    <Link to="/la-baita" className="rv-up btn-outline text-xs">
                      Scopri la Baita
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ATTIVITÀ — Text strip + massive image ═══════ */}
      <section className="relative py-0 bg-alpine-cream overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[80vh]">
          <div className="lg:col-span-4 bg-alpine-dark px-8 lg:px-12 py-14 lg:py-20 flex flex-col justify-between relative order-2 lg:order-1">
            <span className={`hidden lg:block text-vertical label-upper absolute right-6 top-8 ${isWinter ? 'text-winter-800' : 'text-summer-800'}`}>
              {isWinter ? 'Inverno 23/24' : 'Estate 2024'}
            </span>

            <div>
              <p className={`rv-up label-upper mb-3 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>
                03 — {isWinter ? 'Attività Invernali' : 'Attività Estive'}
              </p>
              <h2 className="rv-up display-medium text-white mb-8">
                {isWinter
                  ? 'Un punto\nnevralgico\nper lo sci'
                  : 'Il cuore delle\nescursioni\ndolomitiche'}
              </h2>

              <div className="space-y-5">
                {(isWinter ? [
                  { num: '01', title: 'Sci alpino', desc: 'Ski Center Latemar, il più vasto comprensorio della Val di Fiemme-Obereggen' },
                  { num: '02', title: 'Sci alpinismo', desc: 'Percorsi verso il Rifugio Torre di Pisa, soddisfazioni impagabili' },
                  { num: '03', title: 'Ciaspole', desc: 'Trekking invernale adatto a tutta la famiglia' },
                ] : [
                  { num: '01', title: 'Escursioni', desc: 'Pascoli, prati fioriti e percorsi verso il Rifugio Torre di Pisa a 2.671m' },
                  { num: '02', title: 'Mountain Bike', desc: 'Sentieri del Latemar con trasporto bici incluso' },
                  { num: '03', title: 'Panorami', desc: 'Vista unica su Pale di San Martino e Catena del Lagorai' },
                ]).map((item, i) => (
                  <div key={i} className="rv-up flex items-start gap-4 border-l border-white/10 pl-4">
                    <span className={`label-upper text-lg font-heading font-light ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>{item.num}</span>
                    <div>
                      <h4 className="font-accent font-semibold text-white/90 mb-1 text-sm tracking-wide">{item.title}</h4>
                      <p className="text-wood-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/attivita" className={`rv-up label-upper inline-flex items-center gap-4 mt-8 ${isWinter ? 'text-winter-400 hover:text-winter-300' : 'text-summer-400 hover:text-summer-300'} transition-colors group`}>
              Tutte le attività
              <span className="w-8 h-px bg-current inline-block transition-all group-hover:w-14" />
            </Link>
          </div>

          <div className="lg:col-span-8 lg:col-start-5 order-1 lg:order-2 rv-clip-left relative">
            <div className="overflow-hidden h-[50vh] lg:h-full lg:min-h-[80vh]">
              <img
                src={isWinter ? attivita : panorama}
                alt={isWinter ? 'Attività invernali' : 'Escursioni estive'}
                className="w-full h-full object-cover parallax-img scale-110"
              />
            </div>
            <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 bg-white/10 backdrop-blur-md px-5 py-3 border border-white/20 rv-up">
              <span className="label-upper text-white/80">
                {isWinter ? 'Ski Center Latemar' : 'Dolomiti UNESCO'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PERCHÉ SCEGLIERCI — Dense, with images filling gaps ═══════ */}
      <section className="relative py-16 md:py-24 px-6 lg:px-16 2xl:px-24 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto relative">
          <div className="absolute -top-6 right-0 lg:-right-[5%] text-[14vw] font-heading text-outline text-wood-200/30 leading-none select-none pointer-events-none hidden lg:block">
            04
          </div>

          <div className="relative z-10">
            {/* Title row with image alongside */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 lg:mb-16">
              <div className="lg:col-span-5 lg:col-start-1 rv-up">
                <p className={`label-upper mb-3 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                  04 — Perché noi
                </p>
                <h2 className="display-large text-alpine-dark">
                  Perché<br />sceglierci
                </h2>
              </div>
              {/* Image next to the title to fill the right space */}
              <div className="hidden lg:block lg:col-span-4 lg:col-start-8 rv-clip-up">
                <div className="overflow-hidden aspect-[16/9]">
                  <img src={foto11} alt="Panorama dalla baita" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Items grid with images integrated */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-x-6 md:gap-y-8">
              {/* Item 1 */}
              <div className="md:col-span-3 md:col-start-1 rv-up">
                <span className={`label-upper block mb-3 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>01</span>
                <h3 className="font-heading text-2xl text-alpine-dark mb-2">Lassù tra le montagne</h3>
                <p className="text-wood-500 text-sm leading-relaxed">A 2.200m, con una vista impareggiabile sulle Dolomiti UNESCO.</p>
              </div>

              {/* Image fragment */}
              <div className="hidden md:block md:col-span-2 md:col-start-5 rv-clip-up">
                <div className="overflow-hidden aspect-[3/4]">
                  <img src={foto12} alt="" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Item 2 */}
              <div className="md:col-span-3 md:col-start-7 md:mt-8 rv-up">
                <span className={`label-upper block mb-3 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>02</span>
                <h3 className="font-heading text-2xl text-alpine-dark mb-2">Ambiente familiare</h3>
                <p className="text-wood-500 text-sm leading-relaxed">Ospitalità autentica che vi farà sentire in famiglia.</p>
              </div>

              {/* Image fragment — small, rotated */}
              <div className="hidden md:block md:col-span-2 md:col-start-11 md:mt-4 rv-scale">
                <div className="overflow-hidden aspect-square" style={{ transform: 'rotate(3deg)' }}>
                  <img src={foto6} alt="" className="w-full h-full object-cover" style={{ transform: 'rotate(-3deg) scale(1.15)' }} />
                </div>
              </div>

              {/* Item 3 with image beside */}
              <div className="md:col-span-2 md:col-start-1 hidden md:block rv-clip-up">
                <div className="overflow-hidden aspect-[3/4]">
                  <img src={foto14} alt="" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="md:col-span-3 md:col-start-3 rv-up">
                <span className={`label-upper block mb-3 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>03</span>
                <h3 className="font-heading text-2xl text-alpine-dark mb-2">Tradizione gastronomica</h3>
                <p className="text-wood-500 text-sm leading-relaxed max-w-xs">Cucina trentina creativa con ingredienti locali e biologici.</p>
              </div>

              {/* Item 4 */}
              <div className="md:col-span-3 md:col-start-7 md:-mt-4 rv-up relative">
                <div className="accent-line-horizontal -top-4 left-0 hidden md:block" />
                <span className={`label-upper block mb-3 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>04</span>
                <h3 className="font-heading text-2xl text-alpine-dark mb-2">Terrazza solarium</h3>
                <p className="text-wood-500 text-sm leading-relaxed">Una terrazza panoramica unica sulla Val di Fiemme.</p>
              </div>

              {/* Final image, right corner */}
              <div className="hidden md:block md:col-span-2 md:col-start-11 md:-mt-6 rv-clip-up">
                <div className="overflow-hidden aspect-[4/5]">
                  <img src={foto16} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ IMAGE BREAK — Taller, denser ═══════ */}
      <section className="relative overflow-visible bg-alpine-cream">
        <div className="grid grid-cols-12 gap-0 relative">
          <div className="col-span-4 overflow-hidden h-[45vh] md:h-[70vh] rv-clip-up -ml-1">
            <img src={foto6} alt="Dettaglio interni" className="w-full h-full object-cover parallax-img scale-110" />
          </div>
          <div className="col-span-3 overflow-hidden h-[35vh] md:h-[55vh] rv-clip-up self-end">
            <img src={foto7} alt="Atmosfera della baita" className="w-full h-full object-cover parallax-img scale-110" />
          </div>
          <div className="col-span-2 overflow-hidden h-[40vh] md:h-[65vh] rv-clip-up self-start" style={{ marginTop: '-3vh' }}>
            <img src={foto17} alt="Dettaglio arredamento" className="w-full h-full object-cover parallax-img scale-110" />
          </div>
          <div className="col-span-3 overflow-hidden h-[30vh] md:h-[50vh] rv-clip-up self-center -mr-1">
            <img src={foto18} alt="Vista panoramica" className="w-full h-full object-cover parallax-img scale-110" />
          </div>

          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 rv-up">
            <div className="bg-alpine-dark/90 backdrop-blur-sm px-6 py-3">
              <span className="label-upper text-alpine-gold tracking-[0.5em]">Dal 1996</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ VIENI A TROVARCI — Mappa + Info ═══════ */}
      <section className="relative bg-alpine-dark overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[75vh]">
          {/* Text + Info — left column */}
          <div className="lg:col-span-4 px-6 lg:px-12 2xl:px-16 py-14 lg:py-20 flex flex-col justify-center relative order-2 lg:order-1">
            <p className={`rv-up label-upper mb-3 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>
              05 — Raggiungici
            </p>
            <h2 className="rv-up display-large text-white mb-6">
              Vieni a<br />trovarci
            </h2>
            <p className="rv-up text-wood-400 leading-relaxed mb-8 max-w-sm">
              A soli 30 minuti con telecabina e seggiovia da Predazzo, vi aspettiamo per una giornata indimenticabile a 2.200 metri.
            </p>

            {/* Quick info */}
            <div className="space-y-4 mb-10">
              <div className="rv-up flex items-start gap-3 border-l border-white/10 pl-4">
                <div>
                  <h4 className="font-accent font-semibold text-white/90 text-sm tracking-wide">Località</h4>
                  <p className="text-wood-500 text-sm">Passo Feudo, Ski Center Latemar</p>
                </div>
              </div>
              <div className="rv-up flex items-start gap-3 border-l border-white/10 pl-4">
                <div>
                  <h4 className="font-accent font-semibold text-white/90 text-sm tracking-wide">Da Predazzo</h4>
                  <p className="text-wood-500 text-sm">Telecabina + Seggiovia · ~30 min</p>
                </div>
              </div>
              <div className="rv-up flex items-start gap-3 border-l border-white/10 pl-4">
                <div>
                  <h4 className="font-accent font-semibold text-white/90 text-sm tracking-wide">Altitudine</h4>
                  <p className="text-wood-500 text-sm">2.200 m s.l.m. · 46°N</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contatti" className={`rv-up ${isWinter ? 'btn-winter' : 'btn-summer'}`}>
                Contattaci
              </Link>
              <Link to="/raggiungerci" className="rv-up btn-outline">
                Come Raggiungerci
              </Link>
            </div>
          </div>

          {/* Interactive Map — right, wide */}
          <div className="lg:col-span-8 lg:col-start-5 order-1 lg:order-2 rv-clip-left relative">
            <div className="h-[50vh] lg:h-full lg:min-h-[75vh]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.5!2d11.47!3d46.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBaita+Passo+Feudo!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Baita Passo Feudo"
                className="w-full h-full"
              />
            </div>
            {/* Overlay label on map */}
            <div className="absolute top-6 left-6 lg:top-12 lg:left-12 bg-alpine-dark/90 backdrop-blur-sm px-5 py-3 border border-white/10 rv-up z-10">
              <span className="label-upper text-alpine-gold tracking-widest">Baita Passo Feudo</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
