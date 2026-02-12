import { useEffect } from 'react'
import { useSeason } from '../context/SeasonContext'
import { useReveal, useHeroParallax, useSplitText, gsap, ScrollTrigger } from '../hooks/useGsap'

import winterHero from '../assets/foto/foto-1.webp'
import summerHero from '../assets/foto/foto-10.webp'
import sci from '../assets/foto/foto-33.webp'
import sciAlpinismo from '../assets/foto/foto-34.webp'
import ciaspole from '../assets/foto/foto-35.webp'
import escursioni from '../assets/foto/foto-9.webp'
import bike from '../assets/foto/foto-14.webp'
import panorama from '../assets/foto/foto-10.webp'

export default function Attivita() {
  const { isWinter, isSummer } = useSeason()
  const heroRef = useHeroParallax()
  const contentRef = useReveal()
  const splitRef = useSplitText('.split-attivita', { types: 'chars', stagger: { each: 0.01 }, rotate: 3, duration: 0.45 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.from('.hero-label-att', { y: 25, opacity: 0, duration: 0.45, ease: 'power3.out' })
        .from('.hero-title-line-att', { y: 130, opacity: 0, duration: 0.75, stagger: 0.07, ease: 'power4.out' }, '-=0.4')
        .from('.hero-vertical-att', { opacity: 0, y: 15, duration: 0.5, ease: 'power3.out' }, '-=0.6')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={contentRef}>
      {/* ═══════════════════════════════════════
          HERO — 75vh cinematic, staggered 2-line title
          ═══════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[75vh] min-h-[550px] flex items-end overflow-hidden">
        <img
          src={isWinter ? winterHero : summerHero}
          alt={isWinter ? 'Attività invernali al Latemar' : 'Attività estive sulle Dolomiti'}
          title={isWinter ? 'Panoramica delle attività invernali al Latemar' : 'Panoramica delle attività estive sulle Dolomiti'}
          loading="eager"
          width={1920}
          height={1080}
          className="hero-bg absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full pb-16 md:pb-24 px-6 lg:px-16 2xl:px-24">
          <div className="max-w-6xl">
            <p className="hero-label-att label-upper text-white/50 mb-6 tracking-[0.25em]">
              {isWinter ? 'Inverno · Ski Center Latemar' : 'Estate · Dolomiti UNESCO'}
            </p>
            <h1 className="mb-6" ref={splitRef}>
              <span className="hero-title-line-att display-huge text-white block">
                <span className="split-attivita">Attività</span>
              </span>
              <span className="hero-title-line-att display-huge text-white block ml-[5vw] md:ml-[10vw]">
                {isWinter ? 'Invernali' : 'Estive'}
              </span>
            </h1>
          </div>
        </div>

        <div className="hero-vertical-att absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-4">
          <span className="label-upper text-white/25 text-vertical text-xs">2.200 m s.l.m.</span>
          <div className="w-px h-14 bg-white/20" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INTRO — Asymmetric text, pushed right with decorative element
          ═══════════════════════════════════════ */}
      <section className="relative py-24 md:py-36 px-6 lg:px-16 2xl:px-24 bg-white overflow-hidden">
        {/* Decorative oversized glyph */}
        <div className="absolute top-6 right-8 lg:right-16 text-[10rem] md:text-[16rem] font-heading text-wood-50 leading-none select-none pointer-events-none parallax-x" data-direction="right">
          ✦
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-2 lg:col-start-1 hidden lg:flex items-start pt-4">
              <span className={`rv-rotate text-vertical label-upper ${isWinter ? 'text-winter-300' : 'text-summer-300'}`}>
                {isWinter ? 'Inverno' : 'Estate'}
              </span>
            </div>
            <div className="lg:col-span-5 lg:col-start-3 flex items-end">
              <p className="rv-up text-lg md:text-xl text-wood-600 leading-relaxed max-w-lg">
                Baita Passo Feudo è vicinissima alla stazione a monte della seggiovia. Un punto nevralgico ideale per innumerevoli attività{isWinter ? ' invernali' : ' estive'}.
              </p>
            </div>
            <div className="lg:col-span-3 lg:col-start-9 lg:pt-8">
              <p className="rv-up-soft text-editorial text-wood-500">
                {isWinter
                  ? '"Dove la neve incontra l\'avventura"'
                  : '"Dove il verde incontra il cielo"'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WINTER ACTIVITIES — 3 distinct layouts
          ═══════════════════════════════════════ */}
      {isWinter && (
        <>
          {/* ─── SCI ALPINO — Image left (7 cols) overlapped by text-right panel ─── */}
          <section className="py-24 md:py-36 px-6 lg:px-16 2xl:px-24 bg-alpine-cream overflow-hidden">
            <div className="max-w-[1600px] mx-auto relative">
              {/* Decorative number */}
              <div className="absolute -top-4 left-0 text-[12rem] md:text-[18rem] font-heading text-wood-100 leading-none select-none pointer-events-none opacity-50">
                01
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center relative z-10">
                {/* Image — spans 7 columns */}
                <div className="lg:col-span-7 lg:col-start-1 rv-clip-left">
                  <div className="img-hover-shift overflow-hidden aspect-[4/3]">
                    <img
                      src={sci}
                      alt="Sci alpino sulle piste del Latemar"
                      title="Sciatore sulle piste innevate dello Ski Center Latemar"
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover parallax-img scale-110"
                    />
                  </div>
                </div>
                {/* Text — overlaps image from right */}
                <div className="lg:col-span-5 lg:col-start-7 lg:-ml-16 relative z-10 bg-white p-8 md:p-12 lg:my-12 rv-right">
                  <span className="label-upper text-winter-600 block mb-4">Sci Alpino</span>
                  <h2 className="display-medium text-alpine-dark mb-6">
                    Ski Center<br />Latemar
                  </h2>
                  <div className="space-y-4 text-wood-600 leading-relaxed">
                    <p className="rv-up">
                      Il più vasto comprensorio della Val di Fiemme-Obereggen, con piste per tutti i livelli che collegano la Val di Fiemme a Obereggen.
                    </p>
                    <p className="rv-up">
                      Le piste sono aperte anche 3 sere a settimana per lo sci notturno, un'esperienza unica sotto le stelle delle Dolomiti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── SCI ALPINISMO — Text-left panel overlapping into image-right, reversed structure ─── */}
          <section className="py-16 md:py-0 px-6 lg:px-16 2xl:px-24 bg-white overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-start min-h-[80vh]">
                {/* Vertical accent */}
                <div className="hidden lg:flex lg:col-span-1 lg:col-start-1 items-start justify-center pt-40">
                  <span className="rv-rotate text-vertical label-upper text-winter-200">Alpinismo</span>
                </div>

                {/* Text panel — overlaps into image area */}
                <div className="lg:col-span-5 lg:col-start-2 lg:-mr-20 order-2 lg:order-1 relative z-10 lg:mt-20 lg:mb-32">
                  <div className="bg-alpine-cream p-8 md:p-14 rv-left">
                    <span className="label-upper text-winter-600 block mb-4">Sci Alpinismo</span>
                    <h2 className="display-medium text-alpine-dark mb-7 leading-[1.05]">
                      L'unione di due<br />sport esaltanti
                    </h2>
                    <div className="space-y-5 text-wood-600 leading-relaxed">
                      <p>
                        Lo sci alpinismo unisce la fatica della salita con l'ebbrezza della discesa, regalando soddisfazioni impagabili e panorami che solo chi sale con le proprie forze può vedere.
                      </p>
                      <p>
                        Percorsi verso il Rifugio Torre di Pisa, attraverso paesaggi incontaminati e silenzi magici.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image — right side, tall, bleeding */}
                <div className="lg:col-span-7 lg:col-start-6 lg:-mr-12 order-1 lg:order-2 lg:mt-8 rv-clip-right">
                  <div className="img-hover-zoom overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[75vh]">
                    <img
                      src={sciAlpinismo}
                      alt="Sci alpinismo nelle Dolomiti"
                      title="Sci alpinismo tra i paesaggi incontaminati delle Dolomiti"
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover parallax-img scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── CIASPOLE — Dark section, cinematic wide image with floating text card ─── */}
          <section className="relative py-28 md:py-40 px-6 lg:px-16 2xl:px-24 bg-alpine-dark overflow-hidden">
            {/* Decorative number */}
            <div className="absolute top-8 right-8 lg:right-16 text-[10rem] md:text-[16rem] font-heading text-white/[0.03] leading-none select-none pointer-events-none">
              03
            </div>

            <div className="max-w-[1600px] mx-auto relative z-10">
              {/* Wide image — cinematic aspect ratio */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-end">
                <div className="lg:col-span-9 lg:col-start-1 rv-clip-up">
                  <div className="img-hover-shift overflow-hidden aspect-[21/10]">
                    <img
                      src={ciaspole}
                      alt="Ciaspolate tra le Dolomiti"
                      title="Escursione con le ciaspole nei sentieri innevati del Latemar"
                      loading="lazy"
                      width={800}
                      height={500}
                      className="w-full h-full object-cover parallax-img scale-110"
                    />
                  </div>
                </div>

                {/* Floating text card — overlapping image from bottom-right */}
                <div className="lg:col-span-5 lg:col-start-8 lg:-mt-40 relative z-20">
                  <div className="bg-alpine-dark/80 backdrop-blur-sm p-8 md:p-12 border-l-2 border-winter-500/30">
                    <span className="rv-up label-upper text-winter-400 block mb-4">Racchette da neve</span>
                    <h2 className="rv-up display-medium text-white mb-6">
                      Ciaspolate tra<br />le Dolomiti
                    </h2>
                    <div className="space-y-4 text-wood-400 leading-relaxed">
                      <p className="rv-up">
                        Un modo fantastico di fare trekking invernale, adatto a tutta la famiglia. Le ciaspole permettono di esplorare sentieri innevati immersi nel silenzio della montagna.
                      </p>
                      <p className="rv-up-soft">
                        Escursioni guidate disponibili per scoprire angoli nascosti del Latemar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ═══════════════════════════════════════
          SUMMER ACTIVITIES — 3 distinct layouts
          ═══════════════════════════════════════ */}
      {isSummer && (
        <>
          {/* ─── ESCURSIONI — Text-left with trail list, wide image right bleeding ─── */}
          <section className="relative py-28 md:py-44 px-6 lg:px-16 2xl:px-24 bg-alpine-cream overflow-hidden">
            {/* Oversized decorative marker */}
            <div className="absolute -top-4 right-6 lg:right-12 text-[12rem] md:text-[20rem] font-heading text-wood-100 leading-none select-none pointer-events-none opacity-40 parallax-x" data-direction="right">
              01
            </div>

            <div className="max-w-[1600px] mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-start">
                {/* Text — narrow left column */}
                <div className="lg:col-span-5 lg:col-start-1 lg:pr-8 order-2 lg:order-1 lg:pt-8">
                  <span className="rv-up label-upper text-summer-600 block mb-4">Escursioni</span>
                  <h2 className="rv-up display-medium text-alpine-dark mb-6">
                    Pascoli e<br />prati fioriti
                  </h2>
                  <div className="space-y-4 text-wood-600 leading-relaxed">
                    <p className="rv-up">
                      Pascoli di alta montagna, prati di fiori colorati e percorsi più o meno impegnativi: il Latemar offre escursioni per tutti i livelli, con la possibilità di usare gli impianti di risalita.
                    </p>
                  </div>

                  {/* Trail list — staggered with diagonal cascade */}
                  <div className="mt-10">
                    <h4 className="rv-up font-accent font-bold text-alpine-dark mb-5">Itinerari suggeriti:</h4>
                    <div className="space-y-3">
                      {[
                        'Sentiero 516 → Rifugio Torre di Pisa (2.671m)',
                        'Torre di Pisa — sperone di roccia pendente',
                        'Forcella dei Camosci (2.590m)',
                        'Sentiero 18 → Seggiovia Oberholz',
                        'Sentiero 22 → Ritorno Passo Feudo',
                        'Sentiero 23 → Malga Mayrl → Pampeago',
                      ].map((trail, i) => (
                        <div
                          key={i}
                          className="rv-up flex items-start gap-3 text-wood-600"
                          style={{ marginLeft: `${i * 0.6}rem` }}
                        >
                          <span className="text-summer-500 mt-1 shrink-0 text-xs">▸</span>
                          <span className="text-sm">{trail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image — wide right, tall, bleeding off-edge */}
                <div className="lg:col-span-7 lg:col-start-6 lg:-mr-12 order-1 lg:order-2 rv-clip-right">
                  <div className="img-hover-shift overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[85vh]">
                    <img
                      src={escursioni}
                      alt="Escursioni estive nelle Dolomiti"
                      title="Sentieri escursionistici tra pascoli e prati fioriti delle Dolomiti"
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

          {/* ─── MOUNTAIN BIKE — Image left overlapped by text-right, different from winter pattern ─── */}
          <section className="py-24 md:py-36 px-6 lg:px-16 2xl:px-24 bg-white overflow-hidden">
            <div className="max-w-[1600px] mx-auto relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">
                {/* Image — spans 7 columns, cinematic ratio */}
                <div className="lg:col-span-7 lg:col-start-1 rv-clip-up">
                  <div className="img-hover-zoom overflow-hidden aspect-[16/10]">
                    <img
                      src={bike}
                      alt="Mountain bike sui sentieri del Latemar"
                      title="Mountain bike tra boschi di conifere e prati alpini del Latemar"
                      loading="lazy"
                      width={800}
                      height={500}
                      className="w-full h-full object-cover parallax-img scale-110"
                    />
                  </div>
                </div>
                {/* Text — overlaps image from right, offset down */}
                <div className="lg:col-span-5 lg:col-start-7 lg:-ml-20 relative z-10 bg-alpine-cream p-8 md:p-12 lg:my-16 rv-right">
                  <span className="label-upper text-summer-600 block mb-4">Mountain Bike</span>
                  <h2 className="display-medium text-alpine-dark mb-6">
                    Bike sul<br />Latemar
                  </h2>
                  <div className="space-y-4 text-wood-600 leading-relaxed">
                    <p className="rv-up">
                      Mountain bike sui sentieri del Latemar, con la possibilità di utilizzare gli impianti di risalita per ottimizzare i tempi. Il trasporto bici è incluso nel biglietto.
                    </p>
                    <p className="rv-up-soft">
                      Panorami bellissimi vi accompagneranno lungo tutto il percorso, tra boschi di conifere e prati alpini.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── PANORAMI — Dark section, text-left with wide cinematic image ─── */}
          <section className="relative py-28 md:py-40 px-6 lg:px-16 2xl:px-24 bg-alpine-dark overflow-hidden">
            <div className="absolute top-12 left-8 lg:left-16 text-[10rem] md:text-[15rem] font-heading text-white/[0.03] leading-none select-none pointer-events-none">
              03
            </div>

            <div className="max-w-[1600px] mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end">
                {/* Text — left narrow col, pushed down to align with image bottom */}
                <div className="lg:col-span-4 lg:col-start-1 lg:pb-8">
                  <span className="rv-up label-upper text-summer-400 block mb-4">Dolomiti UNESCO</span>
                  <h2 className="rv-up display-medium text-white mb-6">
                    Panorami<br />mozzafiato
                  </h2>
                  <div className="space-y-4 text-wood-400 leading-relaxed">
                    <p className="rv-up">
                      Dalla terrazza della Baita Passo Feudo si gode di una vista impareggiabile sulle Pale di San Martino e la Catena del Lagorai.
                    </p>
                    <p className="rv-up-soft">
                      Un luogo perfetto per rilassarsi, fare fotografie e immergersi nella bellezza delle Dolomiti patrimonio UNESCO.
                    </p>
                  </div>
                </div>

                {/* Image — wide right, overlapping text column slightly */}
                <div className="lg:col-span-8 lg:col-start-5 lg:-ml-8 rv-clip-up">
                  <div className="img-hover-shift overflow-hidden aspect-[16/10]">
                    <img
                      src={panorama}
                      alt="Panorama mozzafiato sulle Dolomiti"
                      title="Vista panoramica sulle Pale di San Martino e la Catena del Lagorai"
                      loading="lazy"
                      width={800}
                      height={500}
                      className="w-full h-full object-cover parallax-img scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
