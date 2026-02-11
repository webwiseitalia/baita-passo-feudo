import { Link } from 'react-router-dom'
import { useSeason } from '../context/SeasonContext'

export default function Bibite() {
  const { isWinter } = useSeason()

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

  return (
    <div>
      {/* HERO */}
      <section className={`pt-32 pb-16 px-4 ${isWinter ? 'bg-winter-800' : 'bg-summer-800'} text-white`}>
        <div className="container-custom">
          <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-2 font-body">La nostra selezione</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Bibite, Birra e Vini</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-alpine-cream">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {sections.map((section, si) => (
              <div key={si}>
                <h2 className={`text-2xl md:text-3xl font-heading font-bold mb-6 pb-3 border-b-2 ${
                  isWinter ? 'border-winter-200 text-winter-800' : 'border-summer-200 text-summer-800'
                }`}>
                  {section.title}
                </h2>
                <div className="space-y-1">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/60 transition-colors">
                      <span className="text-wood-900">{item.name}</span>
                      <span className="font-bold text-wood-700 whitespace-nowrap ml-4">€{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* VINI IN BOTTIGLIA */}
            <div>
              <h2 className={`text-2xl md:text-3xl font-heading font-bold mb-6 pb-3 border-b-2 ${
                isWinter ? 'border-winter-200 text-winter-800' : 'border-summer-200 text-summer-800'
              }`}>
                Vini in Bottiglia — Selezione
              </h2>
              <div className="space-y-1">
                {viniBottiglie.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/60 transition-colors">
                    <div>
                      <span className="text-wood-900 font-bold">{item.name}</span>
                      {item.note && (
                        <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                          isWinter ? 'bg-winter-100 text-winter-700' : 'bg-summer-100 text-summer-700'
                        }`}>
                          {item.note}
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-wood-700 whitespace-nowrap ml-4">€{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className={isWinter ? 'btn-winter' : 'btn-summer'}>
              Menu del Ristorante
            </Link>
            <Link to="/menu/caffetteria" className={`btn-primary border-2 ${
              isWinter ? 'border-winter-600 text-winter-600 hover:bg-winter-50' : 'border-summer-600 text-summer-600 hover:bg-summer-50'
            }`}>
              Caffetteria
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
