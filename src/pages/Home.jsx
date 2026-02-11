import { Link } from 'react-router-dom'
import { useSeason } from '../context/SeasonContext'

import heroWinter from '../assets/foto/foto-1.webp'
import heroSummer from '../assets/foto/foto-10.webp'
import baitaInterior from '../assets/foto/foto-5.webp'
import piatto1 from '../assets/foto/foto-20.webp'
import piatto2 from '../assets/foto/foto-25.webp'
import terrazza from '../assets/foto/foto-15.webp'
import panorama from '../assets/foto/foto-9.webp'
import attivita from '../assets/foto/foto-2.webp'

export default function Home() {
  const { isWinter } = useSeason()

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={isWinter ? heroWinter : heroSummer}
          alt={isWinter ? 'Panorama invernale Passo Feudo' : 'Panorama estivo Passo Feudo'}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-90 animate-fade-in-up font-body font-light">
            {isWinter ? 'Ski Center Latemar · Val di Fiemme' : 'Dolomiti UNESCO · Val di Fiemme'}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 animate-fade-in-up animate-delay-100 leading-tight">
            Baita Passo Feudo
          </h1>
          <p className="text-lg md:text-2xl font-light mb-10 animate-fade-in-up animate-delay-200 font-body">
            {isWinter
              ? 'A 2.200 metri, nel cuore dello Ski Center Latemar'
              : 'A 2.200 metri, nel cuore delle Dolomiti'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Link
              to="/menu"
              className={isWinter ? 'btn-winter' : 'btn-summer'}
            >
              Scopri il Menu
            </Link>
            <Link to="/raggiungerci" className="btn-outline">
              Come Raggiungerci
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* BENVENUTI */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-5xl font-heading mb-6 ${isWinter ? 'text-winter-800' : 'text-summer-800'}`}>
            Benvenuti in alta quota
          </h2>
          <p className="text-lg text-wood-600 leading-relaxed">
            {isWinter
              ? 'Tra il blu del cielo e il bianco candido delle piste, la Baita Passo Feudo vi accoglie a 2.200 metri nel cuore dello Ski Center Latemar. Un rifugio dove il panorama mozzafiato sulle Dolomiti UNESCO si unisce al calore dell\'ospitalità trentina.'
              : 'Immersa nel verde vivace dei pascoli alpini, la Baita Passo Feudo vi accoglie a 2.200 metri nel cuore delle Dolomiti. Un rifugio dove il panorama mozzafiato sulle Pale di San Martino si unisce al calore dell\'ospitalità trentina.'}
          </p>
        </div>
      </section>

      {/* LA BAITA - Preview */}
      <section className="section-padding bg-alpine-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className={`text-sm uppercase tracking-[0.2em] mb-3 font-bold ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                La nostra Baita
              </p>
              <h2 className="text-3xl md:text-4xl font-heading mb-6 text-wood-900">
                Panorama e gusto alla Baita Passo Feudo
              </h2>
              <p className="text-wood-600 leading-relaxed mb-4">
                Un punto di ritrovo che oltre a rifocillarvi nel fisico vi nutrirà anche nello spirito. Coccolati dall'abbraccio della natura, tra ambienti rivestiti in legno e l'ospitalità che vi farà sentire in famiglia.
              </p>
              <p className="text-wood-600 leading-relaxed mb-8">
                L'esperienza Baita Passo Feudo vi resterà nel cuore a lungo.
              </p>
              <Link to="/la-baita" className={`${isWinter ? 'text-winter-600 hover:text-winter-800' : 'text-summer-600 hover:text-summer-800'} font-bold uppercase text-sm tracking-wider transition-colors inline-flex items-center gap-2`}>
                Scopri di più
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={baitaInterior}
                  alt="Interno Baita Passo Feudo"
                  className="rounded-2xl shadow-2xl w-full h-80 md:h-[450px] object-cover"
                />
                <div className={`absolute -bottom-4 -left-4 px-6 py-3 rounded-xl shadow-lg text-white font-bold text-sm ${isWinter ? 'bg-winter-600' : 'bg-summer-600'}`}>
                  2.200 m s.l.m.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUSTO IN ALTA QUOTA */}
      <section className="section-padding bg-wood-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className={`text-sm uppercase tracking-[0.2em] mb-3 font-bold ${isWinter ? 'text-winter-400' : 'text-summer-400'}`}>
              Il Ristorante
            </p>
            <h2 className="text-3xl md:text-5xl font-heading mb-6">
              Gusto in alta quota
            </h2>
            <p className="text-wood-300 text-lg leading-relaxed">
              Sapori tipici trentini protagonisti di un menù creativo. Ingredienti d'origine trentina, prodotti spesso biologici e a km 0, per piatti unici e originali.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl h-72">
              <img src={piatto1} alt="Ravioli di capriolo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-heading font-bold">Primi Piatti</h3>
                <p className="text-white/70 text-sm mt-1">Tradizione trentina con tocco creativo</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl h-72">
              <img src={piatto2} alt="Dessert della baita" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-heading font-bold">Dolci</h3>
                <p className="text-white/70 text-sm mt-1">Strudel, Kaiserschmarrn e molto altro</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl h-72">
              <img src={terrazza} alt="Terrazza panoramica" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-heading font-bold">Pizzeria</h3>
                <p className="text-white/70 text-sm mt-1">Pizza con forno a 2.200 metri</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className={isWinter ? 'btn-winter' : 'btn-summer'}>
              Vedi il Menu Completo
            </Link>
          </div>
        </div>
      </section>

      {/* ATTIVITÀ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img
                  src={isWinter ? attivita : panorama}
                  alt={isWinter ? 'Attività invernali' : 'Escursioni estive'}
                  className="rounded-2xl shadow-2xl w-full h-80 md:h-[450px] object-cover"
                />
              </div>
            </div>
            <div>
              <p className={`text-sm uppercase tracking-[0.2em] mb-3 font-bold ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                {isWinter ? 'Attività Invernali' : 'Attività Estive'}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading mb-6 text-wood-900">
                {isWinter
                  ? 'Un punto nevralgico per lo sci e non solo'
                  : 'Il cuore delle escursioni dolomitiche'}
              </h2>
              <div className="space-y-4 mb-8">
                {isWinter ? (
                  <>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-winter-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-lg">⛷️</span>
                      </span>
                      <div>
                        <h4 className="font-bold text-wood-900">Sci alpino</h4>
                        <p className="text-wood-600 text-sm">Ski Center Latemar, il più vasto comprensorio della Val di Fiemme-Obereggen</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-winter-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-lg">🏔️</span>
                      </span>
                      <div>
                        <h4 className="font-bold text-wood-900">Sci alpinismo</h4>
                        <p className="text-wood-600 text-sm">Percorsi verso il Rifugio Torre di Pisa, soddisfazioni impagabili</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-winter-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-lg">🥾</span>
                      </span>
                      <div>
                        <h4 className="font-bold text-wood-900">Ciaspole</h4>
                        <p className="text-wood-600 text-sm">Trekking invernale adatto a tutta la famiglia con escursioni guidate</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-summer-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-lg">🥾</span>
                      </span>
                      <div>
                        <h4 className="font-bold text-wood-900">Escursioni</h4>
                        <p className="text-wood-600 text-sm">Pascoli, prati fioriti e percorsi verso il Rifugio Torre di Pisa a 2.671m</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-summer-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-lg">🚵</span>
                      </span>
                      <div>
                        <h4 className="font-bold text-wood-900">Mountain Bike</h4>
                        <p className="text-wood-600 text-sm">Sentieri del Latemar con trasporto bici incluso nel biglietto degli impianti</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-summer-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-lg">📸</span>
                      </span>
                      <div>
                        <h4 className="font-bold text-wood-900">Panorami mozzafiato</h4>
                        <p className="text-wood-600 text-sm">Vista unica su Pale di San Martino e Catena del Lagorai</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <Link to="/attivita" className={`${isWinter ? 'text-winter-600 hover:text-winter-800' : 'text-summer-600 hover:text-summer-800'} font-bold uppercase text-sm tracking-wider transition-colors inline-flex items-center gap-2`}>
                Tutte le attività
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERCI */}
      <section className={`section-padding ${isWinter ? 'bg-winter-50' : 'bg-summer-50'}`}>
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-heading mb-4 text-wood-900">
              Perché sceglierci
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🏔️',
                title: 'Lassù tra le montagne',
                desc: 'A 2.200m, con una vista impareggiabile sulle Dolomiti UNESCO',
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Ambiente familiare',
                desc: 'Ospitalità autentica che vi farà sentire in famiglia',
              },
              {
                icon: '🍽️',
                title: 'Tradizione gastronomica',
                desc: 'Cucina trentina creativa con ingredienti locali e biologici',
              },
              {
                icon: '☀️',
                title: 'Terrazza solarium',
                desc: 'Una terrazza panoramica unica sulla Val di Fiemme',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-heading text-xl font-bold mb-3 text-wood-900">{item.title}</h3>
                <p className="text-wood-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CONTATTI */}
      <section className="relative py-24 overflow-hidden">
        <img
          src={panorama}
          alt="Panorama Dolomiti"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-heading mb-6">
            Vieni a trovarci
          </h2>
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
            A soli 30 minuti con telecabina e seggiovia da Predazzo, vi aspettiamo per una giornata indimenticabile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contatti" className={isWinter ? 'btn-winter' : 'btn-summer'}>
              Contattaci
            </Link>
            <Link to="/raggiungerci" className="btn-outline">
              Come Raggiungerci
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
