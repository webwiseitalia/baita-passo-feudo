import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSeason } from '../context/SeasonContext'
import { useReveal, useSplitText, gsap, ScrollTrigger } from '../hooks/useGsap'

import caff1 from '../assets/caffetteria/caffetteria-1.webp'
import caff2 from '../assets/caffetteria/caffetteria-2.webp'
import caff3 from '../assets/caffetteria/caffetteria-3.webp'
import caff4 from '../assets/caffetteria/caffetteria-4.webp'
import caff5 from '../assets/caffetteria/caffetteria-5.webp'
import caff6 from '../assets/caffetteria/caffetteria-6.webp'

const caffetteriaMenu = [
  {
    title: 'Caffetteria',
    items: [
      { name: 'Caffè espresso', price: '1,50' },
      { name: 'Caffè doppio', price: '2,50' },
      { name: 'Caffè macchiato', price: '1,80' },
      { name: 'Caffè corretto', price: '2,50' },
      { name: 'Cappuccino', price: '2,50' },
      { name: 'Latte macchiato', price: '2,80' },
      { name: 'Caffè latte', price: '2,50' },
      { name: 'Tè / Tisana', price: '2,50' },
    ]
  },
  {
    title: 'Cioccolate & Bevande Calde',
    items: [
      { name: 'Cioccolata calda', price: '3,50' },
      { name: 'Cioccolata con panna', price: '4,00' },
      { name: 'Bombardino', price: '4,50' },
      { name: 'Bombardino con panna', price: '5,00' },
      { name: 'Vin brulé', price: '3,50' },
      { name: 'Jagertee', price: '4,00' },
      { name: 'Punch caldo', price: '4,00' },
    ]
  },
  {
    title: 'Grappe & Digestivi',
    items: [
      { name: 'Grappa bianca', price: '3,00' },
      { name: 'Grappa barricata', price: '4,00' },
      { name: 'Grappa alle erbe', price: '3,50' },
      { name: 'Amaro', price: '3,00' },
      { name: 'Limoncello', price: '3,00' },
      { name: 'Liquori vari', price: '3,50' },
    ]
  },
]

export default function Caffetteria() {
  const { isWinter } = useSeason()
  const contentRef = useReveal()
  const splitRef = useSplitText('.split-caff-title', { types: 'chars', stagger: { each: 0.0125 }, rotate: 4, duration: 0.5 })

  useEffect(() => {
    const heroEl = document.querySelector('.caff-hero')
    if (!heroEl) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from('.hero-label', { y: 20, opacity: 0, duration: 0.4, ease: 'power3.out' })
        .from('.hero-title', { y: 100, opacity: 0, duration: 0.65, ease: 'power4.out' }, '-=0.3')
        .from('.hero-sub', { y: 30, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.5')
        .from('.hero-vertical', { opacity: 0, x: 20, duration: 0.5, ease: 'power3.out' }, '-=0.4')
    }, heroEl)
    return () => ctx.revert()
  }, [])

  const galleryImages = [
    { src: caff1, alt: 'Caffetteria Baita 1', aspect: 'aspect-[4/3]', colSpan: 'col-span-7 md:col-span-5' },
    { src: caff2, alt: 'Caffetteria Baita 2', aspect: 'aspect-[3/4]', colSpan: 'col-span-5 md:col-span-3' },
    { src: caff3, alt: 'Caffetteria Baita 3', aspect: 'aspect-[16/10]', colSpan: 'col-span-12 md:col-span-4 md:-mt-16' },
    { src: caff4, alt: 'Caffetteria Baita 4', aspect: 'aspect-square', colSpan: 'col-span-5 md:col-span-3 md:mt-6' },
    { src: caff5, alt: 'Caffetteria Baita 5', aspect: 'aspect-[16/9]', colSpan: 'col-span-7 md:col-span-5 md:-mt-4' },
    { src: caff6, alt: 'Caffetteria Baita 6', aspect: 'aspect-[4/3]', colSpan: 'col-span-12 md:col-span-4 md:-mt-10' },
  ]

  return (
    <div ref={contentRef}>
      {/* ═══════════════════════════════════════
          HERO — Dark warm solid bg, no photo, asymmetric content
          ═══════════════════════════════════════ */}
      <section className="caff-hero relative pt-36 pb-24 md:pt-44 md:pb-32 px-6 lg:px-16 2xl:px-24 overflow-hidden bg-wood-800">
        {/* Warm ambient glow */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(ellipse at 70% 30%, rgba(255,180,80,0.4) 0%, transparent 55%)' }}
        />

        {/* Oversized decorative character */}
        <div className="absolute -bottom-16 -left-8 text-[16rem] md:text-[24rem] font-heading text-white/[0.025] leading-none select-none pointer-events-none italic">
          C
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 lg:col-start-1">
              <p className="hero-label label-upper text-white/35 mb-8">
                Bevande calde e grappe
              </p>
              <h1 className="hero-title display-huge text-white" ref={splitRef}>
                <span className="split-caff-title">Caffetteria</span>
              </h1>
              <p className="hero-sub text-white/45 text-lg mt-6 max-w-md font-body font-light leading-relaxed">
                Dal caffè espresso al bombardino, dal vin brulé alle grappe trentine
              </p>
            </div>

            {/* Right side — editorial quote floating */}
            <div className="lg:col-span-3 lg:col-start-10 hidden lg:flex items-end pb-4">
              <p className="hero-sub text-editorial text-white/25 text-sm">
                "Il calore di una tazza tra le montagne"
              </p>
            </div>
          </div>
        </div>

        {/* Vertical marker */}
        <div className="hero-vertical absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3">
          <span className="label-upper text-white/15 text-vertical">2.200 m</span>
          <div className="w-px h-10 bg-white/10" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY — Irregular broken grid, overlapping, different aspect ratios
          ═══════════════════════════════════════ */}
      <section className="py-0 bg-alpine-cream overflow-hidden">
        <div className="grid grid-cols-12 gap-2 md:gap-3">
          {galleryImages.map((img, i) => (
            <div key={i} className={`${img.colSpan} rv-clip-up`}>
              <div className={`img-hover-zoom overflow-hidden ${img.aspect} cursor-explore`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover parallax-img scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MENU — Split 2-column, 12-col grid, offset for asymmetry
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 lg:px-16 2xl:px-24 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">

            {/* Left column — Caffetteria menu */}
            <div className="lg:col-span-5 lg:col-start-1">
              <div className="rv-up mb-10">
                <p className={`label-upper mb-3 ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>
                  01
                </p>
                <h2 className="display-medium text-alpine-dark">
                  {caffetteriaMenu[0].title}
                </h2>
                <div
                  className={`rv-clip-left h-px mt-5 ${isWinter ? 'bg-winter-300' : 'bg-summer-300'}`}
                />
              </div>
              <div>
                {caffetteriaMenu[0].items.map((item, i) => (
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

              {/* Decorative element between sections */}
              <div className="rv-up mt-16 mb-4">
                <p className="text-editorial text-wood-400">
                  "Il profumo del caffè a 2.200 metri"
                </p>
              </div>
            </div>

            {/* Right column — Cioccolate & Bevande Calde, offset down significantly */}
            <div className="lg:col-span-5 lg:col-start-8 lg:mt-28">
              <div className="rv-up mb-10">
                <p className={`label-upper mb-3 ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>
                  02
                </p>
                <h2 className="display-medium text-alpine-dark">
                  {caffetteriaMenu[1].title}
                </h2>
                <div
                  className={`rv-clip-right h-px mt-5 ${isWinter ? 'bg-winter-300' : 'bg-summer-300'}`}
                />
              </div>
              <div>
                {caffetteriaMenu[1].items.map((item, i) => (
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

              {/* Vertical text decoration */}
              <div className="hidden lg:block mt-12">
                <span className={`text-vertical label-upper ${isWinter ? 'text-winter-200' : 'text-summer-200'}`}>
                  Bevande Calde
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GRAPPE & DIGESTIVI — Dark cinematic, 12-col broken grid
          ═══════════════════════════════════════ */}
      <section className="py-28 md:py-40 px-6 lg:px-16 2xl:px-24 bg-alpine-dark text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">

            {/* Title — left side, with description */}
            <div className="lg:col-span-4 lg:col-start-1 lg:pt-4">
              <p className={`rv-up label-upper mb-5 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>
                03
              </p>
              <h2 className="rv-up display-large text-white">
                Grappe &<br />Digestivi
              </h2>
              <p className="rv-up text-wood-400 mt-8 leading-relaxed max-w-xs text-sm">
                Distillati e liquori del territorio trentino, per concludere il pasto con il calore della montagna
              </p>
              <div className={`rv-clip-left h-px mt-8 w-1/3 ${isWinter ? 'bg-winter-600' : 'bg-summer-600'}`} />
            </div>

            {/* Items — right side, large typography */}
            <div className="lg:col-span-6 lg:col-start-7 flex items-center">
              <div className="w-full">
                {caffetteriaMenu[2].items.map((item, i) => (
                  <div
                    key={i}
                    className={`rv-up py-6 md:py-7 border-b border-white/10 ${i === 0 ? 'border-t border-white/10' : ''}`}
                  >
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-heading text-xl md:text-3xl text-white leading-tight">
                        {item.name}
                      </h3>
                      <span className="font-accent text-lg md:text-xl tabular-nums text-white/50 whitespace-nowrap">
                        {item.price}
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
          CTA — Warm alpine-cream, asymmetric layout
          ═══════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 lg:px-16 2xl:px-24 bg-alpine-cream overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 lg:col-start-1">
              <p className={`rv-up label-upper mb-4 ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>
                Scopri anche
              </p>
              <h2 className="rv-up display-medium text-alpine-dark mb-4">
                Il ristorante e<br />le nostre bevande
              </h2>
              <p className="rv-up text-wood-500 max-w-lg mb-10 leading-relaxed">
                Il menu completo del ristorante e la nostra selezione di bibite, birre artigianali e vini trentini premiati
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-8 lg:mt-16">
              <div className="rv-up flex flex-col sm:flex-row gap-4">
                <Link to="/menu" className={isWinter ? 'btn-winter' : 'btn-summer'}>
                  Menu del Ristorante
                </Link>
                <Link to="/menu/bibite" className="btn-outline-dark">
                  Bibite e Vini
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
