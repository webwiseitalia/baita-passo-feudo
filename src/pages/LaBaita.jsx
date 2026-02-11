import { useSeason } from '../context/SeasonContext'

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
    <div>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src={isWinter ? panoramaInverno : panoramaEstate}
          alt="Panorama dalla Baita Passo Feudo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 w-full pb-12 px-4">
          <div className="container-custom">
            <p className="text-white/80 text-sm uppercase tracking-[0.2em] mb-2 font-body">Rifugio alpino · 2.200m</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">La Baita</h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-heading mb-6 ${isWinter ? 'text-winter-800' : 'text-summer-800'}`}>
                Panorama e gusto alla Baita Passo Feudo
              </h2>
              <div className="space-y-4 text-wood-600 leading-relaxed">
                <p>
                  L'accoglienza e la professionalità del nostro staff vi faranno vivere un'esperienza unica a 2.200 metri di altitudine. La vista sul panorama delle Pale di San Martino e della Catena del Lagorai vi lascerà senza fiato.
                </p>
                <p>
                  {isWinter
                    ? 'Tra il blu del cielo e il bianco candido delle piste, la Baita Passo Feudo è un punto di ritrovo che oltre a rifocillarvi nel fisico vi nutrirà anche nello spirito.'
                    : 'Immersi nel verde vivace della natura e nei colori dei fiori di montagna, la Baita Passo Feudo è un punto di ritrovo che oltre a rifocillarvi nel fisico vi nutrirà anche nello spirito.'}
                </p>
                <p className="font-heading italic text-lg text-wood-800">
                  "L'esperienza Baita Passo Feudo vi resterà nel cuore a lungo"
                </p>
              </div>
            </div>
            <div>
              <img
                src={baitaEsterno}
                alt="Baita Passo Feudo"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AMBIENTE FAMILIARE */}
      <section className={`section-padding ${isWinter ? 'bg-winter-50' : 'bg-summer-50'}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={baitaInterno1}
                alt="Interni in legno della baita"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading mb-6 text-wood-900">
                Come fuori così dentro
              </h2>
              <div className="space-y-4 text-wood-600 leading-relaxed">
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
      </section>

      {/* TERRAZZA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto mb-8">
          <h2 className={`text-3xl md:text-4xl font-heading mb-6 ${isWinter ? 'text-winter-800' : 'text-summer-800'}`}>
            La terrazza solarium
          </h2>
          <p className="text-wood-600 leading-relaxed text-lg">
            La nostra ampia terrazza solarium è il luogo perfetto per godersi il panorama mozzafiato sulle Dolomiti. Una vista unica sulle Pale di San Martino e la Catena del Lagorai, mentre gustate i nostri piatti al sole.
          </p>
        </div>
        <div className="container-custom">
          <img
            src={terrazza}
            alt="Terrazza panoramica Baita Passo Feudo"
            className="rounded-2xl shadow-2xl w-full h-[300px] md:h-[500px] object-cover"
          />
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-padding bg-alpine-cream">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading mb-8 text-center text-wood-900">
            Galleria fotografica
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`group overflow-hidden rounded-xl ${
                  i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    i === 0 ? 'h-48 md:h-full' : 'h-48 md:h-56'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
