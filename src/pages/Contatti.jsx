import { useState } from 'react'
import { useSeason } from '../context/SeasonContext'
import panorama from '../assets/foto/foto-9.webp'

export default function Contatti() {
  const { isWinter } = useSeason()
  const [formData, setFormData] = useState({ nome: '', email: '', messaggio: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Richiesta dal sito web')
    const body = encodeURIComponent(`Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.messaggio}`)
    window.location.href = `mailto:info@baitapassofeudo.com?subject=${subject}&body=${body}`
  }

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <img
          src={panorama}
          alt="Contatti Baita Passo Feudo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 w-full pb-12 px-4">
          <div className="container-custom">
            <p className="text-white/80 text-sm uppercase tracking-[0.2em] mb-2 font-body">Siamo qui per voi</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">Contatti</h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* INFORMAZIONI */}
            <div>
              <h2 className={`text-3xl font-heading mb-8 ${isWinter ? 'text-winter-800' : 'text-summer-800'}`}>
                Vieni a trovarci
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isWinter ? 'bg-winter-100 text-winter-600' : 'bg-summer-100 text-summer-600'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-wood-900 mb-1">Indirizzo</h3>
                    <p className="text-wood-600">Località Passo Feudo<br />38037 Predazzo (TN)<br />2.200 m s.l.m.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isWinter ? 'bg-winter-100 text-winter-600' : 'bg-summer-100 text-summer-600'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-wood-900 mb-1">Telefono</h3>
                    <a href="tel:+393479919582" className={`${isWinter ? 'text-winter-600 hover:text-winter-800' : 'text-summer-600 hover:text-summer-800'} transition-colors text-lg font-bold`}>
                      +39 347 991 9582
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isWinter ? 'bg-winter-100 text-winter-600' : 'bg-summer-100 text-summer-600'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-wood-900 mb-1">Email</h3>
                    <a href="mailto:info@baitapassofeudo.com" className={`${isWinter ? 'text-winter-600 hover:text-winter-800' : 'text-summer-600 hover:text-summer-800'} transition-colors`}>
                      info@baitapassofeudo.com
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isWinter ? 'bg-winter-100 text-winter-600' : 'bg-summer-100 text-summer-600'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-wood-900 mb-2">Social</h3>
                    <div className="flex gap-3">
                      <a
                        href="https://www.facebook.com/BaitaPassoFeudo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          isWinter ? 'bg-winter-100 text-winter-600 hover:bg-winter-600 hover:text-white' : 'bg-summer-100 text-summer-600 hover:bg-summer-600 hover:text-white'
                        }`}
                        aria-label="Facebook"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/baitapassofeudoofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          isWinter ? 'bg-winter-100 text-winter-600 hover:bg-winter-600 hover:text-white' : 'bg-summer-100 text-summer-600 hover:bg-summer-600 hover:text-white'
                        }`}
                        aria-label="Instagram"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div>
              <div className={`rounded-2xl p-8 ${isWinter ? 'bg-winter-50' : 'bg-summer-50'}`}>
                <h3 className="text-2xl font-heading font-bold mb-6 text-wood-900">
                  Scrivici un messaggio
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-wood-700 mb-1">Nome</label>
                    <input
                      type="text"
                      value={formData.nome}
                      onChange={e => setFormData({...formData, nome: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-wood-200 focus:outline-none focus:ring-2 focus:ring-wood-400 bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-wood-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-wood-200 focus:outline-none focus:ring-2 focus:ring-wood-400 bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-wood-700 mb-1">Messaggio</label>
                    <textarea
                      rows={5}
                      value={formData.messaggio}
                      onChange={e => setFormData({...formData, messaggio: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-wood-200 focus:outline-none focus:ring-2 focus:ring-wood-400 bg-white resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className={`w-full ${isWinter ? 'btn-winter' : 'btn-summer'}`}
                  >
                    Invia Messaggio
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAPPA */}
      <section className="section-padding bg-alpine-cream">
        <div className="container-custom">
          <h2 className="text-3xl font-heading mb-8 text-center text-wood-900">
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
        </div>
      </section>
    </div>
  )
}
