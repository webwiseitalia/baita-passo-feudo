import { useSeason } from '../context/SeasonContext'

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

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src={isWinter ? winterHero : summerHero}
          alt={isWinter ? 'Attività invernali' : 'Attività estive'}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 w-full pb-12 px-4">
          <div className="container-custom">
            <p className="text-white/80 text-sm uppercase tracking-[0.2em] mb-2 font-body">
              {isWinter ? 'Inverno · Ski Center Latemar' : 'Estate · Dolomiti UNESCO'}
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
              {isWinter ? 'Attività Invernali' : 'Attività Estive'}
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-lg text-wood-600 leading-relaxed">
            Baita Passo Feudo è vicinissima alla stazione a monte della seggiovia. Un punto nevralgico ideale per innumerevoli attività{isWinter ? ' invernali' : ' estive'}.
          </p>
        </div>
      </section>

      {/* WINTER ACTIVITIES */}
      {isWinter && (
        <>
          {/* SCI */}
          <section className="section-padding bg-alpine-cream">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img src={sci} alt="Sci alpino" className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
                </div>
                <div>
                  <span className="text-winter-600 text-sm uppercase tracking-[0.2em] font-bold">Sci Alpino</span>
                  <h2 className="text-3xl md:text-4xl font-heading mt-2 mb-6 text-wood-900">
                    Ski Center Latemar
                  </h2>
                  <div className="space-y-4 text-wood-600 leading-relaxed">
                    <p>
                      Il più vasto comprensorio della Val di Fiemme-Obereggen, con piste per tutti i livelli che collegano la Val di Fiemme a Obereggen.
                    </p>
                    <p>
                      Le piste sono aperte anche 3 sere a settimana per lo sci notturno, un'esperienza unica sotto le stelle delle Dolomiti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SCI ALPINISMO */}
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <span className="text-winter-600 text-sm uppercase tracking-[0.2em] font-bold">Sci Alpinismo</span>
                  <h2 className="text-3xl md:text-4xl font-heading mt-2 mb-6 text-wood-900">
                    L'unione di due sport esaltanti
                  </h2>
                  <div className="space-y-4 text-wood-600 leading-relaxed">
                    <p>
                      Lo sci alpinismo unisce la fatica della salita con l'ebbrezza della discesa, regalando soddisfazioni impagabili e panorami che solo chi sale con le proprie forze può vedere.
                    </p>
                    <p>
                      Percorsi verso il Rifugio Torre di Pisa, attraverso paesaggi incontaminati e silenzi magici.
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <img src={sciAlpinismo} alt="Sci alpinismo" className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* CIASPOLE */}
          <section className="section-padding bg-alpine-cream">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img src={ciaspole} alt="Ciaspole" className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
                </div>
                <div>
                  <span className="text-winter-600 text-sm uppercase tracking-[0.2em] font-bold">Racchette da neve</span>
                  <h2 className="text-3xl md:text-4xl font-heading mt-2 mb-6 text-wood-900">
                    Ciaspolate tra le Dolomiti
                  </h2>
                  <div className="space-y-4 text-wood-600 leading-relaxed">
                    <p>
                      Un modo fantastico di fare trekking invernale, adatto a tutta la famiglia. Le ciaspole permettono di esplorare sentieri innevati immersi nel silenzio della montagna.
                    </p>
                    <p>
                      Escursioni guidate disponibili per scoprire angoli nascosti del Latemar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* SUMMER ACTIVITIES */}
      {isSummer && (
        <>
          {/* ESCURSIONI */}
          <section className="section-padding bg-alpine-cream">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img src={escursioni} alt="Escursioni estive" className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
                </div>
                <div>
                  <span className="text-summer-600 text-sm uppercase tracking-[0.2em] font-bold">Escursioni</span>
                  <h2 className="text-3xl md:text-4xl font-heading mt-2 mb-6 text-wood-900">
                    Pascoli e prati fioriti
                  </h2>
                  <div className="space-y-4 text-wood-600 leading-relaxed">
                    <p>
                      Pascoli di alta montagna, prati di fiori colorati e percorsi più o meno impegnativi: il Latemar offre escursioni per tutti i livelli, con la possibilità di usare gli impianti di risalita.
                    </p>
                  </div>

                  {/* Itinerari */}
                  <div className="mt-6 space-y-3">
                    <h4 className="font-bold text-wood-900">Itinerari suggeriti:</h4>
                    <div className="space-y-2">
                      {[
                        'Sentiero 516 → Rifugio Torre di Pisa (2.671m)',
                        'Torre di Pisa — sperone di roccia pendente',
                        'Forcella dei Camosci (2.590m)',
                        'Sentiero 18 → Seggiovia Oberholz',
                        'Sentiero 22 → Ritorno Passo Feudo',
                        'Sentiero 23 → Malga Mayrl → Pampeago',
                      ].map((trail, i) => (
                        <div key={i} className="flex items-start gap-2 text-wood-600">
                          <span className="text-summer-500 mt-1">▸</span>
                          <span>{trail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BIKE */}
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <span className="text-summer-600 text-sm uppercase tracking-[0.2em] font-bold">Mountain Bike</span>
                  <h2 className="text-3xl md:text-4xl font-heading mt-2 mb-6 text-wood-900">
                    Bike sul Latemar
                  </h2>
                  <div className="space-y-4 text-wood-600 leading-relaxed">
                    <p>
                      Mountain bike sui sentieri del Latemar, con la possibilità di utilizzare gli impianti di risalita per ottimizzare i tempi. Il trasporto bici è incluso nel biglietto.
                    </p>
                    <p>
                      Panorami bellissimi vi accompagneranno lungo tutto il percorso, tra boschi di conifere e prati alpini.
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <img src={bike} alt="Mountain bike sul Latemar" className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* PANORAMI */}
          <section className="section-padding bg-alpine-cream">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img src={panorama} alt="Panorama Dolomiti" className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
                </div>
                <div>
                  <span className="text-summer-600 text-sm uppercase tracking-[0.2em] font-bold">Dolomiti UNESCO</span>
                  <h2 className="text-3xl md:text-4xl font-heading mt-2 mb-6 text-wood-900">
                    Panorami mozzafiato
                  </h2>
                  <div className="space-y-4 text-wood-600 leading-relaxed">
                    <p>
                      Dalla terrazza della Baita Passo Feudo si gode di una vista impareggiabile sulle Pale di San Martino e la Catena del Lagorai.
                    </p>
                    <p>
                      Un luogo perfetto per rilassarsi, fare fotografie e immergersi nella bellezza delle Dolomiti patrimonio UNESCO.
                    </p>
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
