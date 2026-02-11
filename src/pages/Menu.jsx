import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSeason } from '../context/SeasonContext'

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

  const accent = isWinter ? 'winter' : 'summer'
  const displayCategories = activeCategory
    ? { [activeCategory]: menuData[activeCategory] }
    : menuData

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Menu Baita Passo Feudo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 w-full pb-12 px-4">
          <div className="container-custom">
            <p className="text-white/80 text-sm uppercase tracking-[0.2em] mb-2 font-body">Cucina trentina creativa</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">Il Menu</h1>
          </div>
        </div>
      </section>

      {/* FILTER NAV */}
      <section className="sticky top-[60px] z-30 bg-white shadow-sm border-b border-wood-100">
        <div className="container-custom px-4 py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === null
                  ? `bg-${accent}-600 text-white`
                  : 'bg-wood-50 text-wood-600 hover:bg-wood-100'
              }`}
              style={activeCategory === null ? { backgroundColor: isWinter ? '#1a6af5' : '#16a34a', color: 'white' } : {}}
            >
              Tutto
            </button>
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === cat.key
                    ? 'text-white'
                    : 'bg-wood-50 text-wood-600 hover:bg-wood-100'
                }`}
                style={activeCategory === cat.key ? { backgroundColor: isWinter ? '#1a6af5' : '#16a34a', color: 'white' } : {}}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MENU CONTENT */}
      <section className="section-padding bg-alpine-cream">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {Object.entries(displayCategories).map(([key, category]) => (
              <div key={key} id={key}>
                <h2 className={`text-2xl md:text-3xl font-heading font-bold mb-6 pb-3 border-b-2 ${
                  isWinter ? 'border-winter-200 text-winter-800' : 'border-summer-200 text-summer-800'
                }`}>
                  {category.title}
                </h2>
                <div className="space-y-1">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-start justify-between py-3 px-4 rounded-lg ${
                        item.signature ? (isWinter ? 'bg-winter-50 border border-winter-200' : 'bg-summer-50 border border-summer-200') : 'hover:bg-white/60'
                      } transition-colors`}
                    >
                      <div className="flex-1 pr-4">
                        <span className={`text-wood-900 ${item.signature ? 'font-bold' : ''}`}>
                          {item.name}
                        </span>
                        {item.signature && (
                          <span className={`ml-2 text-xs font-bold uppercase px-2 py-0.5 rounded-full ${
                            isWinter ? 'bg-winter-600 text-white' : 'bg-summer-600 text-white'
                          }`}>
                            Specialità
                          </span>
                        )}
                      </div>
                      <span className="font-bold text-wood-700 whitespace-nowrap">€{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* NOTA */}
          <div className="mt-12 p-6 bg-wood-100 rounded-2xl text-center">
            <p className="text-wood-600 text-sm italic">
              Alcuni prodotti usati per la preparazione dei nostri piatti possono essere di origine surgelata.
              Pietanze senza glutine disponibili su richiesta.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ristorante" className={isWinter ? 'btn-winter' : 'btn-summer'}>
              Il Ristorante
            </Link>
            <Link
              to="/menu/bibite"
              className={`btn-primary border-2 ${
                isWinter ? 'border-winter-600 text-winter-600 hover:bg-winter-50' : 'border-summer-600 text-summer-600 hover:bg-summer-50'
              }`}
            >
              Bibite e Vini
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
