import { useEffect, useRef } from 'react'
import { useSeason } from '../context/SeasonContext'
import { useReveal, useHeroParallax, useSplitText, gsap, ScrollTrigger } from '../hooks/useGsap'

import baitaEsterno from '../assets/foto/foto-3.webp'
import baitaInterno1 from '../assets/foto/foto-5.webp'
import baitaInterno2 from '../assets/foto/foto-6.webp'
import baitaInterno3 from '../assets/foto/foto-7.webp'
import terrazza from '../assets/foto/foto-14.webp'
import panoramaInverno from '../assets/foto/foto-12.webp'
import panoramaEstate from '../assets/foto/foto-11.webp'
import dettaglio1 from '../assets/foto/foto-17.webp'
import dettaglio2 from '../assets/foto/foto-18.webp'

export default function LaBaita() {
  const { isWinter } = useSeason()
  const heroRef = useHeroParallax()
  const contentRef = useReveal()
  const splitRef = useSplitText('.split-baita-headline', { types: 'chars', stagger: { each: 0.0125 }, rotate: 4, duration: 0.45 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from('.hero-label-baita', { y: 20, opacity: 0, duration: 0.4, ease: 'power3.out' })
        .from('.hero-title-baita', { y: 120, opacity: 0, duration: 0.7, ease: 'power4.out' }, '-=0.3')
        .from('.hero-sub-baita', { x: -40, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.6')
        .from('.hero-line-baita', { scaleX: 0, duration: 0.6, ease: 'power2.inOut' }, '-=0.8')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const galleryImages = [
    { src: baitaEsterno, alt: 'Esterno della baita' },
    { src: baitaInterno1, alt: 'Sala ristorante in legno' },
    { src: baitaInterno2, alt: 'Dettaglio interni' },
    { src: terrazza, alt: 'Terrazza panoramica' },
    { src: isWinter ? panoramaInverno : panoramaEstate, alt: 'Panorama dalla baita' },
    { src: baitaInterno3, alt: 'Atmosfera accogliente' },
    { src: dettaglio1, alt: 'Dettaglio arredamento' },
    { src: dettaglio2, alt: 'Vista dalla baita' },
  ]

  return (
    <div ref={contentRef}>
      {/* ═══════════════════════════════════════
          HERO — 70vh+ cinematic, bottom-left text, diagonal energy
          ═══════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[75vh] min-h-[550px] flex items-end overflow-hidden">
        <img
          src={isWinter ? panoramaInverno : panoramaEstate}
          alt="Panorama dalla Baita Passo Feudo"
          title="Panorama mozzafiato delle Dolomiti dalla Baita Passo Feudo"
          loading="eager"
          width={1920}
          height={1080}
          className="hero-bg absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="hero-overlay-left absolute inset-0" />

        {/* Vertical altitude marker — right edge */}
        <div className="absolute top-1/3 right-6 lg:right-10 hidden md:flex flex-col items-center gap-3">
          <div className="hero-line-baita w-px h-20 bg-white/20 origin-top" />
          <span className="label-upper text-white/25 text-vertical text-xs">2.200 m s.l.m.</span>
        </div>

        <div className="relative z-10 w-full pb-14 md:pb-20 px-6 lg:px-16 2xl:px-24">
          <div className="max-w-6xl">
            <p className="hero-label-baita label-upper text-white/40 mb-5 tracking-[0.3em]">
              Rifugio alpino · 2.200m
            </p>
            <h1 className="hero-title-baita display-huge text-white leading-[0.9]">
              La Baita
            </h1>
            <div className="hero-sub-baita flex items-center gap-6 mt-8">
              <span className="w-12 h-px bg-white/30" />
              <p className="text-white/50 text-lg font-body font-light">
                {isWinter ? 'Dove la neve incontra il calore' : 'Dove la montagna incontra il cuore'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INTRO — Broken grid: narrow text col-1-4, image col-5-12 bleeding right,
          quote floating below with offset. Totally asymmetric.
          ═══════════════════════════════════════ */}
      <section className="relative py-28 md:py-44 px-6 lg:px-16 2xl:px-24 bg-alpine-cream overflow-hidden">
        {/* Decorative oversized number */}
        <div className="absolute -top-8 left-6 lg:left-12 text-[14rem] md:text-[22rem] font-heading text-wood-100 leading-none select-none pointer-events-none opacity-50 parallax-x" data-direction="right">
          01
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0" ref={splitRef}>
            {/* Text — narrow left column, pushed down */}
            <div className="lg:col-span-4 lg:col-start-1 lg:pt-16">
              <p className={`rv-up label-upper mb-5 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                La nostra storia
              </p>
              <h2 className="rv-up display-medium text-alpine-dark mb-8">
                <span className="split-baita-headline">Panorama e gusto alla Baita Passo Feudo</span>
              </h2>
              <div className="space-y-5 text-wood-600 leading-relaxed">
                <p className="rv-up">
                  L'accoglienza e la professionalità del nostro staff vi faranno vivere un'esperienza unica a 2.200 metri di altitudine. La vista sul panorama delle Pale di San Martino e della Catena del Lagorai vi lascerà senza fiato.
                </p>
                <p className="rv-up-soft">
                  {isWinter
                    ? 'Tra il blu del cielo e il bianco candido delle piste, la Baita Passo Feudo è un punto di ritrovo che oltre a rifocillarvi nel fisico vi nutrirà anche nello spirito.'
                    : 'Immersi nel verde vivace della natura e nei colori dei fiori di montagna, la Baita Passo Feudo è un punto di ritrovo che oltre a rifocillarvi nel fisico vi nutrirà anche nello spirito.'}
                </p>
              </div>
            </div>

            {/* Image — wide right, bleeding to edge, tall */}
            <div className="lg:col-span-7 lg:col-start-6 lg:-mr-12 rv-clip-right">
              <div className="img-hover-shift overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[70vh]">
                <img
                  src={baitaEsterno}
                  alt="Baita Passo Feudo"
                  title="Vista esterna della Baita Passo Feudo immersa nel paesaggio alpino"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover parallax-img scale-110"
                />
              </div>
            </div>
          </div>

          {/* Floating quote — offset from grid, pushed left and down */}
          <div className="grid grid-cols-1 lg:grid-cols-12 mt-10 lg:-mt-20 relative z-20">
            <div className="lg:col-span-5 lg:col-start-3 bg-white p-8 md:p-12 rv-up-soft">
              <p className="text-editorial text-wood-800 text-lg">
                "L'esperienza Baita Passo Feudo vi resterà nel cuore a lungo"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          COME FUORI COSÌ DENTRO — Image left col-1-8, text panel floating
          right and overlapping from top. Vertical text accent. Different
          structure from intro (image is wider, text overlaps from RIGHT side
          and is positioned higher, not lower).
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-0 px-6 lg:px-16 2xl:px-24 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-start min-h-[80vh]">
            {/* Vertical label — thin col */}
            <div className="hidden lg:flex lg:col-span-1 lg:col-start-1 items-start justify-center pt-32">
              <span className={`rv-rotate text-vertical label-upper ${isWinter ? 'text-winter-300' : 'text-summer-300'}`}>
                Interni
              </span>
            </div>

            {/* Image — spanning wide */}
            <div className="lg:col-span-7 lg:col-start-2 lg:mt-24 rv-clip-left order-2 lg:order-1">
              <div className="img-hover-zoom overflow-hidden aspect-[16/10]">
                <img
                  src={baitaInterno1}
                  alt="Interni in legno della Baita"
                  title="Sala ristorante con rivestimenti in legno naturale"
                  loading="lazy"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover parallax-img scale-110"
                />
              </div>
            </div>

            {/* Text panel — overlapping image from the right, pushed UP */}
            <div className="lg:col-span-5 lg:col-start-8 lg:-ml-24 relative z-10 order-1 lg:order-2 lg:mt-12 lg:mb-32">
              <div className="bg-alpine-cream p-8 md:p-14 rv-right">
                <h2 className="display-medium text-alpine-dark mb-7 leading-[1.05]">
                  Come fuori<br />così dentro
                </h2>
                <div className="space-y-5 text-wood-600 leading-relaxed">
                  <p>
                    Coccolati dall'abbraccio della natura e dall'atmosfera tipica delle baite di montagna. I nostri ambienti, interamente rivestiti in legno, vi avvolgeranno in un calore autentico.
                  </p>
                  <p>
                    L'ospitalità del nostro staff rispecchia la tradizione e la cultura dell'accoglienza trentina. Vi faremo sentire in famiglia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary detail images — small pair, offset */}
          <div className="grid grid-cols-12 gap-3 mt-6 lg:-mt-20 pb-16 md:pb-28">
            <div className="col-span-5 md:col-span-3 md:col-start-3 rv-clip-up">
              <div className="overflow-hidden aspect-[3/4]">
                <img src={baitaInterno2} alt="Dettaglio interni" title="Dettaglio degli interni rustici in legno della baita" loading="lazy" width={600} height={800} className="w-full h-full object-cover parallax-img scale-110" />
              </div>
            </div>
            <div className="col-span-7 md:col-span-4 md:col-start-6 md:mt-12 rv-clip-up">
              <div className="overflow-hidden aspect-[16/10]">
                <img src={baitaInterno3} alt="Atmosfera accogliente" title="Atmosfera calda e accogliente degli interni della baita" loading="lazy" width={800} height={500} className="w-full h-full object-cover parallax-img scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TERRAZZA SOLARIUM — Full-bleed cinematic image with floating
          text panels at different vertical positions. NOT a text-above-image
          layout — text lives INSIDE the image space.
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div className="rv-clip-center absolute inset-0">
          <img
            src={terrazza}
            alt="Terrazza panoramica della Baita"
            title="Terrazza solarium con vista sulle Dolomiti e le Pale di San Martino"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-full object-cover parallax-img scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 w-full px-6 lg:px-16 2xl:px-24">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Title — left, pushed down */}
              <div className="lg:col-span-5 lg:col-start-1 lg:pt-16">
                <p className="rv-up label-upper text-white/35 mb-6 tracking-[0.25em]">Un balcone sulle Dolomiti</p>
                <h2 className="rv-up display-large text-white leading-[0.95]">
                  La terrazza<br />solarium
                </h2>
              </div>

              {/* Description — right, offset up from title */}
              <div className="lg:col-span-4 lg:col-start-8 lg:-mt-8">
                <p className="rv-up-soft text-white/60 text-lg leading-relaxed mb-6">
                  La nostra ampia terrazza solarium è il luogo perfetto per godersi il panorama mozzafiato sulle Dolomiti.
                </p>
                <p className="rv-up-soft text-white/45 leading-relaxed">
                  {isWinter
                    ? 'In inverno, il sole scalda le giornate di sci mentre lo sguardo si perde tra le vette innevate.'
                    : 'In estate, un pranzo all\'aperto con vista sui pascoli alpini e le Pale di San Martino.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating altitude — bottom right */}
        <div className="absolute bottom-6 right-8 hidden md:block rv-up-soft">
          <span className="label-upper text-white/20 text-sm tracking-[0.4em]">2.200 m</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY — Irregular masonry with varied spans, staggered
          vertical offsets. NO regular pattern. Some images tall, some
          wide, some square. Varied aspect ratios.
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 lg:px-16 2xl:px-24 bg-alpine-cream overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          {/* Header — title left, decorative line right */}
          <div className="grid grid-cols-12 gap-4 mb-14 lg:mb-20 items-end">
            <div className="col-span-8 md:col-span-4">
              <p className={`rv-up label-upper mb-3 ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>Esplora</p>
              <h2 className="rv-up display-medium text-alpine-dark">Galleria</h2>
            </div>
            <div className="hidden md:block col-span-6 col-start-6 rv-left">
              <div className={`h-px ${isWinter ? 'bg-winter-200' : 'bg-summer-200'} mb-3`} />
            </div>
          </div>

          {/* Row 1 — large left (7 cols), tall right (5 cols, offset down) */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <div className="col-span-12 md:col-span-7 rv-clip-up">
              <div className="img-hover-shift overflow-hidden aspect-[16/10] cursor-explore group">
                <img src={galleryImages[0].src} alt={galleryImages[0].alt} title="Esterno della Baita Passo Feudo nel paesaggio montano" loading="lazy" width={800} height={500} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
            <div className="col-span-6 md:col-span-5 md:mt-12 rv-clip-right">
              <div className="img-hover-zoom overflow-hidden aspect-[3/4] cursor-explore group">
                <img src={galleryImages[1].src} alt={galleryImages[1].alt} title="Sala ristorante in legno con arredi tradizionali" loading="lazy" width={600} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>

            {/* Row 2 — three unequal: narrow tall (3 cols), wide short (5 cols, pushed down), medium (4 cols, pulled up) */}
            <div className="col-span-6 md:col-span-3 md:-mt-8 rv-scale">
              <div className="overflow-hidden aspect-[3/5] cursor-explore group">
                <img src={galleryImages[2].src} alt={galleryImages[2].alt} title="Dettaglio degli interni e dell'arredamento della baita" loading="lazy" width={600} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
            <div className="col-span-6 md:col-span-5 md:mt-16 rv-clip-up">
              <div className="img-hover-shift overflow-hidden aspect-[16/9] cursor-explore group">
                <img src={galleryImages[3].src} alt={galleryImages[3].alt} title="Terrazza panoramica con vista sulle montagne" loading="lazy" width={800} height={500} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:-mt-4 rv-clip-left">
              <div className="overflow-hidden aspect-square cursor-explore group">
                <img src={galleryImages[4].src} alt={galleryImages[4].alt} title="Panorama delle Dolomiti dalla baita" loading="lazy" width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>

            {/* Row 3 — wide left (5 cols), gap, narrow right (3 cols, offset up), medium right-edge (4 cols, offset down) */}
            <div className="col-span-12 md:col-span-5 md:col-start-1 md:mt-6 rv-clip-up">
              <div className="img-hover-zoom overflow-hidden aspect-[16/9] cursor-explore group">
                <img src={galleryImages[5].src} alt={galleryImages[5].alt} title="Atmosfera accogliente degli ambienti interni" loading="lazy" width={800} height={500} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
            <div className="col-span-5 md:col-span-3 md:col-start-6 md:-mt-10 rv-scale">
              <div className="overflow-hidden aspect-[3/4] cursor-explore group">
                <img src={galleryImages[6].src} alt={galleryImages[6].alt} title="Dettaglio arredamento e decorazioni in legno" loading="lazy" width={600} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
            <div className="col-span-7 md:col-span-4 md:col-start-9 md:mt-14 rv-clip-right">
              <div className="img-hover-shift overflow-hidden aspect-[4/3] cursor-explore group">
                <img src={galleryImages[7].src} alt={galleryImages[7].alt} title="Vista panoramica dalla baita sulle vette dolomitiche" loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
