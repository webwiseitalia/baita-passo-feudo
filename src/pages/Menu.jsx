import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSeason } from '../context/SeasonContext'
import { useReveal, useHeroParallax, useSplitText, gsap, ScrollTrigger } from '../hooks/useGsap'

import heroImg from '../assets/foto/foto-19.webp'

const menuData = {
  pane: {
    title: 'Pane',
    items: [
      { name: 'Spaccata', price: '0,80' },
      { name: 'Cestino piccolo', price: '2,00' },
      { name: 'Cestino medio', price: '3,00' },
    ]
  },
  primi: {
    title: 'Primi Piatti',
    items: [
      { name: 'Pasta al pomodoro o ragù', price: '8,00' },
      { name: 'Tagliatelle al ragù di selvaggina', price: '11,00' },
      { name: 'Linguine di farro bio con speck e funghi porcini su crema di mozzarella di bufala', price: '11,00' },
      { name: 'Ravioli di capriolo su burro di mirtilli', price: '11,00' },
      { name: 'Casuncei — tortelli di patate ripieni di Puzzone di Moena', price: '10,00' },
      { name: 'Rotolo di patate con spinaci e funghi porcini', price: '10,00' },
      { name: 'Lasagna con speck, radicchio, gorgonzola e noci', price: '10,00' },
      { name: 'Risotto con pancetta al forno su crema al pino mugo', price: '10,00' },
      { name: 'Canederli in brodo', price: '9,00' },
      { name: 'Canederli con ragù di selvaggina', price: '11,00' },
      { name: 'Vellutata di polenta con palline di formaggio locale', price: '9,00' },
      { name: 'Minestrone di verdura biologico con quinoa', price: '8,00' },
      { name: 'Goulaschsuppe', price: '9,00' },
    ]
  },
  secondi: {
    title: 'Secondi Piatti',
    items: [
      { name: 'Polenta con salsiccia', price: '11,00' },
      { name: 'Polenta con formaggio', price: '11,00' },
      { name: 'Polenta con funghi', price: '12,00' },
      { name: 'Polenta e capriolo', price: '15,00' },
      { name: 'Costine di maiale glassate al succo di mela con patate', price: '15,00' },
      { name: 'Braciole di cervo con polenta e funghi porcini', price: '18,00' },
      { name: 'Petto di pollo al profumo di agrumi con verdure e riso venere', price: '14,00' },
      { name: 'Straccetti di cervo con noci e pancetta su insalatina verde', price: '16,00' },
      { name: 'Filetto di manzo in crosta di pistacchi con crema di patate', price: '20,00' },
      { name: 'Involtini di trota bio ripiena di Fontal con caponata di verdure', price: '16,00' },
      { name: 'Uova, speck e patate', price: '12,00' },
      { name: 'Entrecôte di manzo ai ferri con contorno', price: '18,00' },
      { name: 'Milanese con patate fritte', price: '12,00' },
      { name: 'Würstel con patate fritte o crauti', price: '9,00' },
    ]
  },
  taglieri: {
    title: 'Piatti Freddi & Taglieri',
    items: [
      { name: 'Tagliere speck e cetrioli', price: '11,00' },
      { name: 'Tagliere speck e formaggio', price: '13,00' },
      { name: 'Tagliere trentino — misto salumi locali e selvaggina', price: '13,00' },
      { name: 'Tagliere formaggi — locali e nazionali con salse e mostarde', price: '13,00' },
    ]
  },
  insalate: {
    title: 'Insalate',
    items: [
      { name: 'Insalatona completa', price: '11,00' },
      { name: 'Insalata estiva — misticanza, trota salmonata, pomodorini, avocado', price: '10,00' },
      { name: 'Insalata trentina — cavolo, noci, mele, speck croccante', price: '10,00' },
      { name: 'Insalata della salute — finocchi, arance, cipolla, uvetta, goji, feta, semi', price: '10,00' },
      { name: 'Insalata di patate', price: '8,00' },
      { name: 'Insalata mista', price: '6,00' },
    ]
  },
  panini: {
    title: 'Panini',
    items: [
      { name: 'Paradiso — speck e formaggio', price: '5,00' },
      { name: 'Paradiso Plus — speck, formaggio, porcini', price: '6,00' },
      { name: 'Delicato — prosciutto cotto, mozzarella, pomodori, insalata', price: '5,50' },
      { name: 'Super — prosciutto crudo, mozzarella bufala, rucola', price: '6,50' },
      { name: 'Vegetariano — zucchine, carciofi, mozzarella, pomodori, insalata', price: '5,50' },
      { name: 'Hotdog', price: '6,00' },
      { name: 'Hamburger', price: '6,50' },
      { name: 'Cheeseburger', price: '7,00' },
      { name: 'Rustico — salsiccia', price: '7,00' },
      { name: 'Toast', price: '4,00' },
    ]
  },
  pizza: {
    title: 'Pizza',
    items: [
      { name: 'Margherita', price: '7,50' },
      { name: 'Prosciutto e funghi', price: '9,50' },
      { name: 'Capricciosa', price: '11,00' },
      { name: 'Delicata', price: '10,50' },
      { name: 'Salamino piccante', price: '9,50' },
      { name: 'Feudo — stracchino, speck, patate', price: '11,00', signature: true },
      { name: 'Gustosa', price: '12,00' },
      { name: 'Crudo e rucola', price: '10,50' },
      { name: 'Rustica — salsiccia e Puzzone', price: '11,00' },
      { name: 'Vegetariana', price: '9,50' },
      { name: 'Speck e gorgonzola', price: '10,50' },
      { name: 'Tonno e cipolla', price: '9,50' },
      { name: 'Calzone', price: '9,50' },
      { name: 'Hawaii', price: '9,50' },
    ]
  },
  maxiPizza: {
    title: 'Maxi Pizza',
    items: [
      { name: 'Margherita — 8 fette', price: '18,00' },
      { name: 'Farcita — 8 fette (fino a 4 gusti)', price: '22,00' },
      { name: '1 Fetta', price: '3,00' },
    ]
  },
  menuSpeciali: {
    title: 'Menu Speciali',
    items: [
      { name: 'Menu Pizza Plus — 2 fette + bibita lattina', price: '8,00' },
      { name: 'Menu American Style — hamburger + patatine + bibita', price: '10,00' },
    ]
  },
  dolci: {
    title: 'Dolci',
    items: [
      { name: 'Strudel di mele', price: '4,00 - 5,00' },
      { name: 'Sinfonia di strudel — mele, ricotta, nocciole, sorpresa', price: '8,00' },
      { name: 'Torta di ricotta', price: '4,50' },
      { name: 'Torta grano saraceno con gelato al pistacchio', price: '5,00' },
      { name: 'Torta cioccolato con salsa ai lamponi', price: '4,00' },
      { name: 'Tiramisù', price: '4,00' },
      { name: 'Torta Flocken', price: '4,00' },
      { name: 'Torta Linzer — crostata alle mandorle', price: '4,00' },
      { name: 'Torta frutti di bosco', price: '4,50' },
      { name: 'Strauben — tipico dolce fritto', price: '6,00' },
      { name: 'Mousse di yogurt su macedonia', price: '6,00' },
      { name: 'Kaiserschmarrn — omelette dolce spezzata', price: '10,00' },
    ]
  },
}

const categories = [
  { key: 'primi', label: 'Primi' },
  { key: 'secondi', label: 'Secondi' },
  { key: 'pizza', label: 'Pizza' },
  { key: 'taglieri', label: 'Taglieri' },
  { key: 'insalate', label: 'Insalate' },
  { key: 'panini', label: 'Panini' },
  { key: 'dolci', label: 'Dolci' },
]

export default function Menu() {
  const { isWinter } = useSeason()
  const [activeCategory, setActiveCategory] = useState(null)
  const heroRef = useHeroParallax()
  const contentRef = useReveal([activeCategory])
  const splitRef = useSplitText('.split-menu-title', { types: 'chars', stagger: { each: 0.02 }, rotate: 4, duration: 0.9 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.from('.hero-label', { y: 30, opacity: 0, duration: 1, ease: 'power3.out' })
        .from('.hero-title-line', { y: 120, opacity: 0, duration: 1.4, stagger: 0.1, ease: 'power4.out' }, '-=0.5')
        .from('.hero-sub', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const displayCategories = activeCategory
    ? { [activeCategory]: menuData[activeCategory] }
    : menuData

  // Irregular spacing map — each section gap feels different
  const spacingMap = {
    pane: 'mt-0',
    primi: 'mt-24 md:mt-36',
    secondi: 'mt-16 md:mt-24',
    taglieri: 'mt-28 md:mt-40',
    insalate: 'mt-14 md:mt-20',
    panini: 'mt-20 md:mt-32',
    pizza: 'mt-28 md:mt-44',
    maxiPizza: 'mt-10 md:mt-14',
    menuSpeciali: 'mt-14 md:mt-20',
    dolci: 'mt-24 md:mt-36',
  }

  // Alternate layout styles for visual variety
  const sectionLayouts = {
    pane: 'compact',
    primi: 'wide-left',
    secondi: 'wide-right',
    taglieri: 'compact',
    insalate: 'wide-left',
    panini: 'wide-right',
    pizza: 'featured',
    maxiPizza: 'compact',
    menuSpeciali: 'compact',
    dolci: 'wide-left',
  }

  return (
    <div ref={contentRef}>
      {/* ═══════════════════════════════════════
          HERO — Cinematic, content bottom-left, staggered title
          ═══════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Menu Baita Passo Feudo"
          className="hero-bg absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full pb-14 md:pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <p className="hero-label label-upper text-white/40 mb-6">
                Cucina trentina creativa
              </p>
              <h1 className="mb-6">
                <span className="hero-title-line display-huge text-white block">Il Menu</span>
                <span className="hero-title-line display-medium text-white/60 block ml-[6vw] md:ml-[10vw] font-light italic mt-2">
                  a 2.200 metri
                </span>
              </h1>
              <p className="hero-sub text-white/50 text-lg max-w-md font-body font-light leading-relaxed">
                Ingredienti d'origine trentina, prodotti biologici e a km 0
              </p>
            </div>
          </div>
        </div>

        {/* Vertical altitude marker */}
        <div className="absolute bottom-10 right-8 hidden md:flex flex-col items-center gap-4">
          <span className="label-upper text-white/20 text-vertical">Passo Feudo</span>
          <div className="w-px h-12 bg-white/15" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FILTER NAV — Sticky, raw label-upper style
          ═══════════════════════════════════════ */}
      <section className="sticky top-[60px] z-30 bg-white/95 backdrop-blur-sm border-b border-wood-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex gap-5 md:gap-8 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveCategory(null)}
              className={`label-upper whitespace-nowrap transition-colors pb-1 ${
                activeCategory === null
                  ? `${isWinter ? 'text-winter-600' : 'text-summer-600'} border-b-2 ${isWinter ? 'border-winter-600' : 'border-summer-600'}`
                  : 'text-wood-400 hover:text-wood-700 border-b-2 border-transparent'
              }`}
            >
              Tutto
            </button>
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`label-upper whitespace-nowrap transition-colors pb-1 ${
                  activeCategory === cat.key
                    ? `${isWinter ? 'text-winter-600' : 'text-summer-600'} border-b-2 ${isWinter ? 'border-winter-600' : 'border-summer-600'}`
                    : 'text-wood-400 hover:text-wood-700 border-b-2 border-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MENU CONTENT — Broken grid, irregular spacing, varied section layouts
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-alpine-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {Object.entries(displayCategories).map(([key, category], idx) => {
            const layout = sectionLayouts[key] || 'compact'
            const sectionIdx = Object.keys(menuData).indexOf(key)

            return (
              <div
                key={key}
                id={key}
                className={idx === 0 ? '' : (activeCategory ? 'mt-0' : (spacingMap[key] || 'mt-20'))}
              >
                {/* ── FEATURED LAYOUT: Pizza section ── */}
                {layout === 'featured' && (
                  <div className="grid grid-cols-12 gap-4 lg:gap-8">
                    {/* Section header — spans left, big treatment */}
                    <div className="col-span-12 lg:col-span-4 lg:col-start-1 mb-8 lg:mb-0">
                      <div className="rv-up lg:sticky lg:top-[140px]">
                        <p className={`label-upper mb-3 ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>
                          {String(sectionIdx + 1).padStart(2, '0')}
                        </p>
                        <h2 className="display-large text-alpine-dark" ref={idx === 0 ? splitRef : undefined}>
                          {idx === 0 ? <span className="split-menu-title">{category.title}</span> : category.title}
                        </h2>
                        <div className={`h-px mt-6 w-2/3 ${isWinter ? 'bg-winter-300' : 'bg-summer-300'}`} />
                        <p className="rv-up text-wood-500 mt-6 text-sm leading-relaxed max-w-xs">
                          Impasto lievitato 48 ore, farina selezionata, forno a 2.200m di altitudine
                        </p>
                      </div>
                    </div>

                    {/* Items — right side, two-column on large */}
                    <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
                        {category.items.map((item, i) => (
                          <div
                            key={i}
                            className={`rv-up py-4 border-b ${
                              item.signature
                                ? `border-transparent relative pl-5 my-2 ${isWinter ? 'bg-winter-50/70' : 'bg-summer-50/70'}`
                                : 'border-wood-200/40'
                            }`}
                          >
                            {item.signature && (
                              <div className={`absolute left-0 top-0 bottom-0 w-1 ${isWinter ? 'bg-winter-500' : 'bg-summer-500'}`} />
                            )}
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <span className={`text-wood-900 leading-relaxed ${item.signature ? 'font-heading font-bold text-lg' : ''}`}>
                                  {item.name}
                                </span>
                                {item.signature && (
                                  <span className={`block mt-1 label-upper ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>
                                    Specialita della casa
                                  </span>
                                )}
                              </div>
                              <span className={`font-accent tabular-nums whitespace-nowrap ${
                                item.signature
                                  ? `font-bold text-lg ${isWinter ? 'text-winter-600' : 'text-summer-600'}`
                                  : 'text-wood-500'
                              }`}>
                                {item.price}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── WIDE-LEFT LAYOUT: Header left, items stretch right ── */}
                {layout === 'wide-left' && (
                  <div className="grid grid-cols-12 gap-4 lg:gap-6">
                    <div className="col-span-12 lg:col-span-3 lg:col-start-1 mb-6 lg:mb-0">
                      <div className="rv-up lg:sticky lg:top-[140px]">
                        <p className={`label-upper mb-3 ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>
                          {String(sectionIdx + 1).padStart(2, '0')}
                        </p>
                        <h2 className="display-medium text-alpine-dark" ref={idx === 0 ? splitRef : undefined}>
                          {idx === 0 ? <span className="split-menu-title">{category.title}</span> : category.title}
                        </h2>
                        <div
                          className={`rv-clip-left h-px mt-5 ${isWinter ? 'bg-winter-300' : 'bg-summer-300'}`}
                        />
                      </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                      {category.items.map((item, i) => (
                        <div
                          key={i}
                          className={`rv-up flex items-start justify-between py-3 border-b border-wood-200/40 ${
                            item.signature
                              ? `pl-5 border-l-[3px] ${isWinter ? 'border-l-winter-500' : 'border-l-summer-500'} border-b-transparent`
                              : ''
                          }`}
                        >
                          <div className="flex-1 pr-6">
                            <span className={`text-wood-900 leading-relaxed ${item.signature ? 'font-heading font-bold text-lg' : ''}`}>
                              {item.name}
                            </span>
                            {item.signature && (
                              <span className={`block mt-1 label-upper ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>
                                Specialita della casa
                              </span>
                            )}
                          </div>
                          <span className={`font-accent tabular-nums whitespace-nowrap ${
                            item.signature
                              ? `font-bold ${isWinter ? 'text-winter-600' : 'text-summer-600'}`
                              : 'text-wood-500'
                          }`}>
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── WIDE-RIGHT LAYOUT: Items left, header anchored right ── */}
                {layout === 'wide-right' && (
                  <div className="grid grid-cols-12 gap-4 lg:gap-6">
                    <div className="col-span-12 lg:col-span-8 lg:col-start-1 order-2 lg:order-1">
                      {category.items.map((item, i) => (
                        <div
                          key={i}
                          className={`rv-up flex items-start justify-between py-3 border-b border-wood-200/40 ${
                            item.signature
                              ? `pl-5 border-l-[3px] ${isWinter ? 'border-l-winter-500' : 'border-l-summer-500'} border-b-transparent`
                              : ''
                          }`}
                        >
                          <div className="flex-1 pr-6">
                            <span className={`text-wood-900 leading-relaxed ${item.signature ? 'font-heading font-bold text-lg' : ''}`}>
                              {item.name}
                            </span>
                            {item.signature && (
                              <span className={`block mt-1 label-upper ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>
                                Specialita della casa
                              </span>
                            )}
                          </div>
                          <span className={`font-accent tabular-nums whitespace-nowrap ${
                            item.signature
                              ? `font-bold ${isWinter ? 'text-winter-600' : 'text-summer-600'}`
                              : 'text-wood-500'
                          }`}>
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="col-span-12 lg:col-span-3 lg:col-start-10 order-1 lg:order-2 mb-6 lg:mb-0">
                      <div className="rv-up lg:sticky lg:top-[140px] lg:text-right">
                        <p className={`label-upper mb-3 ${isWinter ? 'text-winter-500' : 'text-summer-500'}`}>
                          {String(sectionIdx + 1).padStart(2, '0')}
                        </p>
                        <h2 className="display-medium text-alpine-dark">
                          {category.title}
                        </h2>
                        <div
                          className={`rv-clip-right h-px mt-5 ml-auto ${isWinter ? 'bg-winter-300' : 'bg-summer-300'}`}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ── COMPACT LAYOUT: Single column, tighter ── */}
                {layout === 'compact' && (
                  <div className="max-w-3xl" style={{ marginLeft: sectionIdx % 2 === 0 ? '0' : 'auto' }}>
                    <div className="rv-up mb-6">
                      <div className="flex items-baseline gap-4">
                        <span className={`label-upper ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>
                          {String(sectionIdx + 1).padStart(2, '0')}
                        </span>
                        <h2 className="display-medium text-alpine-dark">
                          {category.title}
                        </h2>
                      </div>
                      <div
                        className={`rv-clip-left h-px mt-4 ${isWinter ? 'bg-winter-200' : 'bg-summer-200'}`}
                      />
                    </div>
                    <div>
                      {category.items.map((item, i) => (
                        <div
                          key={i}
                          className="rv-up-soft flex items-center justify-between py-2.5 border-b border-wood-200/30"
                        >
                          <span className="text-wood-900 text-sm">{item.name}</span>
                          <span className="font-accent tabular-nums text-wood-400 whitespace-nowrap ml-4 text-sm">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          {/* ═══════════════════════════════════════
              NOTA — Pushed left, raw style
              ═══════════════════════════════════════ */}
          <div className="rv-up mt-28 md:mt-40 max-w-lg">
            <div className={`h-px mb-6 ${isWinter ? 'bg-winter-200' : 'bg-summer-200'}`} />
            <p className="text-wood-400 text-sm leading-relaxed font-body italic">
              Alcuni prodotti usati per la preparazione dei nostri piatti possono essere di origine surgelata.
              Pietanze senza glutine disponibili su richiesta.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA — Dark section, asymmetric grid
          ═══════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-alpine-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-5 lg:col-start-1">
              <p className={`rv-up label-upper mb-4 ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>
                Scopri anche
              </p>
              <h2 className="rv-up display-large text-white">
                Non solo<br />piatti
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-7">
              <p className="rv-up text-wood-400 max-w-md mb-10 leading-relaxed">
                Scoprite il ristorante e la nostra selezione completa di bibite, birre artigianali e vini trentini premiati
              </p>
              <div className="rv-up flex flex-col sm:flex-row gap-4">
                <Link to="/ristorante" className={isWinter ? 'btn-winter' : 'btn-summer'}>
                  Il Ristorante
                </Link>
                <Link to="/menu/bibite" className="btn-outline">
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
