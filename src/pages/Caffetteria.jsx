import { Link } from 'react-router-dom'
import { useSeason } from '../context/SeasonContext'

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

  const galleryImages = [caff1, caff2, caff3, caff4, caff5, caff6]

  return (
    <div>
      {/* HERO */}
      <section className={`pt-32 pb-16 px-4 ${isWinter ? 'bg-wood-800' : 'bg-wood-700'} text-white`}>
        <div className="container-custom">
          <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-2 font-body">Bevande calde e grappe</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Caffetteria</h1>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-0">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {galleryImages.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img
                src={img}
                alt={`Caffetteria ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* MENU CONTENT */}
      <section className="section-padding bg-alpine-cream">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {caffetteriaMenu.map((section, si) => (
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
          </div>

          {/* CTA */}
          <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className={isWinter ? 'btn-winter' : 'btn-summer'}>
              Menu del Ristorante
            </Link>
            <Link to="/menu/bibite" className={`btn-primary border-2 ${
              isWinter ? 'border-winter-600 text-winter-600 hover:bg-winter-50' : 'border-summer-600 text-summer-600 hover:bg-summer-50'
            }`}>
              Bibite e Vini
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
