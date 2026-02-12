import { Link } from 'react-router-dom'
import { useSeason } from '../context/SeasonContext'

import heroRistorante from '../assets/foto/foto-5.webp'
import cucina from '../assets/foto/foto-4.webp'
import piatto1 from '../assets/foto/foto-20.webp'
import piatto2 from '../assets/foto/foto-25.webp'
import piatto3 from '../assets/foto/foto-22.webp'

export default function Ristorante() {
  const { isWinter } = useSeason()

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src={heroRistorante}
          alt="Ristorante Baita Passo Feudo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 w-full pb-12 px-4">
          <div className="container-custom">
            <p className="text-white/80 text-sm uppercase tracking-[0.2em] mb-2 font-body">Cucina trentina · 2.200m</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">Il Ristorante</h1>
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-sm uppercase tracking-[0.2em] mb-3 font-bold ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                La nostra filosofia
              </p>
              <h2 className="text-3xl md:text-4xl font-heading mb-6 text-wood-900">
                Tradizione trentina con tocco creativo
              </h2>
              <div className="space-y-4 text-wood-600 leading-relaxed">
                <p className="text-lg font-heading italic text-wood-800">
                  "Originalità è il nostro obiettivo"
                </p>
                <p>
                  I sapori tipici trentini sono i protagonisti del nostro menù creativo. Un'interpretazione fantasiosa della cucina locale che dà vita a piatti unici e originali.
                </p>
                <p>
                  Utilizziamo ingredienti d'origine trentina, prodotti spesso biologici e a km 0, per garantire la massima qualità e freschezza in ogni piatto.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['Km 0', 'Biologico', 'Senza Glutine', 'Cucina Tipica', 'Pizzeria'].map(tag => (
                  <span
                    key={tag}
                    className={`px-4 py-2 rounded-full text-sm font-bold ${
                      isWinter ? 'bg-winter-50 text-winter-700' : 'bg-summer-50 text-summer-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <img
                src={cucina}
                alt="Il nostro chef al lavoro"
                className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PIATTI */}
      <section className="section-padding bg-alpine-cream">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading mb-10 text-center text-wood-900">
            I nostri piatti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl h-80">
              <img src={piatto1} alt="Ravioli di capriolo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-heading font-bold text-white">Primi piatti</h3>
                <p className="text-white/70 text-sm mt-1">Canederli, ravioli di capriolo, risotti e molto altro</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl h-80">
              <img src={piatto3} alt="Secondi piatti" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-heading font-bold text-white">Secondi piatti</h3>
                <p className="text-white/70 text-sm mt-1">Selvaggina, polenta, piatti della tradizione</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl h-80">
              <img src={piatto2} alt="Dolci" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-heading font-bold text-white">Dolci & Pizza</h3>
                <p className="text-white/70 text-sm mt-1">Strudel, Kaiserschmarrn, pizza dal forno</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section-padding ${isWinter ? 'bg-winter-600' : 'bg-summer-600'} text-white text-center`}>
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Scopri il menu completo</h2>
          <p className="text-white/80 text-lg mb-8">
            Primi piatti, secondi, pizza, taglieri, insalate, dolci e una selezione di vini trentini.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-primary bg-white text-wood-900 hover:bg-white/90 shadow-lg">
              Menu del Ristorante
            </Link>
            <Link to="/menu#bibite" className="btn-outline">
              Carta dei Vini
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
