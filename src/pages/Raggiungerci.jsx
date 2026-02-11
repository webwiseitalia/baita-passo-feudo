import { useSeason } from '../context/SeasonContext'
import heroImg from '../assets/foto/foto-3.webp'
import seggiovia from '../assets/foto/foto-11.webp'

export default function Raggiungerci() {
  const { isWinter } = useSeason()

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Come raggiungerci"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 w-full pb-12 px-4">
          <div className="container-custom">
            <p className="text-white/80 text-sm uppercase tracking-[0.2em] mb-2 font-body">Da Predazzo · Val di Fiemme</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">Come Raggiungerci</h1>
          </div>
        </div>
      </section>

      {/* CON IMPIANTI */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className={`text-sm uppercase tracking-[0.2em] mb-3 font-bold ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                Con gli impianti
              </p>
              <h2 className="text-3xl md:text-4xl font-heading mb-6 text-wood-900">
                Telecabina + Seggiovia
              </h2>
              <div className="space-y-6 text-wood-600">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${isWinter ? 'bg-winter-600' : 'bg-summer-600'}`}>1</div>
                  <div>
                    <h4 className="font-bold text-wood-900 mb-1">Partenza da Predazzo</h4>
                    <p>A 5 minuti dal centro di Predazzo, Val di Fiemme</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${isWinter ? 'bg-winter-600' : 'bg-summer-600'}`}>2</div>
                  <div>
                    <h4 className="font-bold text-wood-900 mb-1">Telecabina Predazzo-Gardonè</h4>
                    <p>Cabina da 12 persone, comoda e panoramica</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${isWinter ? 'bg-winter-600' : 'bg-summer-600'}`}>3</div>
                  <div>
                    <h4 className="font-bold text-wood-900 mb-1">Seggiovia Gardonè-Passo Feudo</h4>
                    <p>4 posti con cupola protettiva</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${isWinter ? 'bg-winter-600' : 'bg-summer-600'}`}>4</div>
                  <div>
                    <h4 className="font-bold text-wood-900 mb-1">Arrivo a 2.200m</h4>
                    <p>Tempo totale: circa 30 minuti. La baita è a pochi passi dalla stazione a monte!</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={seggiovia}
                alt="Impianti di risalita"
                className="rounded-2xl shadow-2xl w-full h-[350px] object-cover mb-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PREZZI IMPIANTI */}
      <section className={`section-padding ${isWinter ? 'bg-winter-50' : 'bg-summer-50'}`}>
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading mb-8 text-center text-wood-900">
            Prezzi impianti (2 tronchi)
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className={`${isWinter ? 'bg-winter-600' : 'bg-summer-600'} text-white`}>
                  <th className="px-6 py-4 text-left font-bold text-sm uppercase tracking-wider">Tipologia</th>
                  <th className="px-6 py-4 text-center font-bold text-sm uppercase tracking-wider">A/R</th>
                  <th className="px-6 py-4 text-center font-bold text-sm uppercase tracking-wider">Solo Andata</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-wood-100">
                  <td className="px-6 py-4 font-bold text-wood-900">Adulti</td>
                  <td className="px-6 py-4 text-center text-wood-700 font-bold text-lg">€19,50</td>
                  <td className="px-6 py-4 text-center text-wood-700">€15,50</td>
                </tr>
                <tr className="border-b border-wood-100 bg-wood-50/50">
                  <td className="px-6 py-4 font-bold text-wood-900">Junior</td>
                  <td className="px-6 py-4 text-center text-wood-700 font-bold text-lg">€13,50</td>
                  <td className="px-6 py-4 text-center text-wood-700">€11,00</td>
                </tr>
                <tr className="border-b border-wood-100">
                  <td className="px-6 py-4 font-bold text-wood-900">Gruppi (15+)</td>
                  <td className="px-6 py-4 text-center text-wood-700 font-bold text-lg">€18,00</td>
                  <td className="px-6 py-4 text-center text-wood-700">€14,00</td>
                </tr>
              </tbody>
            </table>
            <div className="px-6 py-4 bg-wood-50 text-sm text-wood-600 space-y-1">
              <p>🎿 <strong>Bambini sotto 8 anni:</strong> GRATIS</p>
              <p>👤 <strong>Junior:</strong> nati dopo 16.05.2004</p>
              <p>👥 <strong>Gruppi:</strong> almeno 15 persone (16° gratis)</p>
            </div>
          </div>
        </div>
      </section>

      {/* A PIEDI */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <p className={`text-sm uppercase tracking-[0.2em] mb-3 font-bold ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
              A piedi
            </p>
            <h2 className="text-3xl md:text-4xl font-heading mb-4 text-wood-900">
              Sentiero E504
            </h2>
            <p className="text-wood-600 text-lg">
              Per chi ama camminare, il sentiero E504 collega Predazzo al Passo Feudo
            </p>
          </div>

          <div className="bg-wood-50 rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-wood-900">Itinerario</h3>
                <ul className="space-y-3 text-wood-600">
                  <li className="flex items-start gap-2">
                    <span className="text-wood-400 mt-1">▸</span>
                    Partenza: Frazione Al Fol, nord di Predazzo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-wood-400 mt-1">▸</span>
                    Strada forestale lungo il Rio Gardonè
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-wood-400 mt-1">▸</span>
                    Passaggio per conca prativa Gardonè (Baita Gardonè ristoro)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-wood-400 mt-1">▸</span>
                    Arrivo Passo Feudo (2.190m)
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-wood-900">Dettagli</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-wood-900">2-3h</p>
                    <p className="text-wood-500 text-sm">Durata</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-wood-900">2.190m</p>
                    <p className="text-wood-500 text-sm">Altitudine arrivo</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-wood-900">Media</p>
                    <p className="text-wood-500 text-sm">Difficoltà</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-wood-900">E504</p>
                    <p className="text-wood-500 text-sm">Sentiero</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAPPA */}
      <section className="section-padding bg-alpine-cream">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading mb-8 text-center text-wood-900">
            Dove siamo
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5514.123456789!2d11.47!3d46.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBaita+Passo+Feudo!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Baita Passo Feudo"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/search/Baita+Passo+Feudo+Predazzo"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isWinter ? 'text-winter-600 hover:text-winter-800' : 'text-summer-600 hover:text-summer-800'} font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2 transition-colors`}
            >
              Apri in Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
