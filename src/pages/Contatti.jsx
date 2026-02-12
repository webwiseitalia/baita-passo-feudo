import { useState, useEffect } from 'react'
import { useSeason } from '../context/SeasonContext'
import { useReveal, useHeroParallax, useSplitText, gsap, ScrollTrigger } from '../hooks/useGsap'

import panorama from '../assets/foto/foto-9.webp'

export default function Contatti() {
  const { isWinter } = useSeason()
  const heroRef = useHeroParallax()
  const contentRef = useReveal()
  const splitRef = useSplitText('.split-contatti', { types: 'chars', stagger: { each: 0.03 }, rotate: 3, duration: 1 })
  const [formData, setFormData] = useState({ nome: '', email: '', messaggio: '' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.from('.hero-label-cont', { y: 25, opacity: 0, duration: 0.9, ease: 'power3.out' })
        .from('.hero-title-cont', { y: 100, opacity: 0, duration: 1.3, ease: 'power4.out' }, '-=0.3')
        .from('.hero-line-cont', { scaleX: 0, duration: 1.2, ease: 'power2.inOut' }, '-=0.7')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Richiesta dal sito web')
    const body = encodeURIComponent(`Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.messaggio}`)
    window.location.href = `mailto:info@baitapassofeudo.com?subject=${subject}&body=${body}`
  }

  return (
    <div ref={contentRef}>
      {/* ═══════════════════════════════════════
          HERO — 60vh cinematic
          ═══════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <img
          src={panorama}
          alt="Panorama Baita Passo Feudo"
          className="hero-bg absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="hero-overlay-dramatic absolute inset-0" />

        {/* Vertical marker */}
        <div className="absolute top-1/4 right-6 lg:right-10 hidden md:flex flex-col items-center gap-3">
          <div className="hero-line-cont w-px h-16 bg-white/20 origin-top" />
          <span className="label-upper text-white/20 text-vertical text-xs">Contatti</span>
        </div>

        <div className="relative z-10 w-full pb-16 md:pb-24 px-6 lg:px-12">
          <div className="max-w-6xl" ref={splitRef}>
            <p className="hero-label-cont label-upper text-white/50 mb-4 tracking-[0.25em]">
              Siamo qui per voi
            </p>
            <h1 className="hero-title-cont display-huge text-white">
              <span className="split-contatti">Contatti</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT INFO + FORM — Asymmetric broken grid
          ═══════════════════════════════════════ */}
      <section className="relative py-28 md:py-40 px-6 lg:px-12 bg-white overflow-hidden">
        {/* Decorative element */}
        <div className="absolute -bottom-12 -left-8 text-[14rem] md:text-[22rem] font-heading text-wood-50 leading-none select-none pointer-events-none opacity-40">
          @
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

            {/* LEFT — Contact info, irregular spacing */}
            <div className="lg:col-span-5 lg:col-start-1">
              <h2 className={`rv-up display-medium mb-14 ${isWinter ? 'text-winter-800' : 'text-summer-800'}`}>
                Vieni a<br />trovarci
              </h2>

              <div className="space-y-0">
                {/* Address — flush left */}
                <div className="rv-up py-6 border-t border-wood-100">
                  <span className={`label-upper block mb-3 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                    Indirizzo
                  </span>
                  <p className="text-wood-800 text-lg leading-relaxed">
                    Località Passo Feudo<br />
                    38037 Predazzo (TN)<br />
                    2.200 m s.l.m.
                  </p>
                </div>

                {/* Phone — indented */}
                <div className="rv-up py-6 border-t border-wood-100 ml-8 lg:ml-16">
                  <span className={`label-upper block mb-3 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                    Telefono
                  </span>
                  <a
                    href="tel:+393479919582"
                    className="text-alpine-dark text-2xl font-heading font-bold hover:opacity-70 transition-opacity"
                  >
                    +39 347 991 9582
                  </a>
                </div>

                {/* Email — flush left */}
                <div className="rv-up py-6 border-t border-wood-100">
                  <span className={`label-upper block mb-3 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                    Email
                  </span>
                  <a
                    href="mailto:info@baitapassofeudo.com"
                    className={`text-lg ${isWinter ? 'text-winter-700 hover:text-winter-900' : 'text-summer-700 hover:text-summer-900'} transition-colors`}
                  >
                    info@baitapassofeudo.com
                  </a>
                </div>

                {/* Social — indented, text links */}
                <div className="rv-up py-6 border-t border-wood-100 ml-8 lg:ml-16">
                  <span className={`label-upper block mb-4 ${isWinter ? 'text-winter-600' : 'text-summer-600'}`}>
                    Social
                  </span>
                  <div className="flex gap-8">
                    <a
                      href="https://www.facebook.com/BaitaPassoFeudo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wood-600 hover:text-alpine-dark transition-colors font-accent tracking-wide text-sm"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/baitapassofeudoofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wood-600 hover:text-alpine-dark transition-colors font-accent tracking-wide text-sm"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Contact form, raw underline-only inputs */}
            <div className="lg:col-span-6 lg:col-start-7 lg:mt-12">
              <div className={`rv-up p-8 md:p-12 ${isWinter ? 'bg-winter-50' : 'bg-summer-50'}`}>
                <h3 className="display-medium text-alpine-dark mb-10">
                  Scrivici
                </h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="rv-up">
                    <label className="label-upper block mb-2 text-wood-700">Nome</label>
                    <input
                      type="text"
                      value={formData.nome}
                      onChange={e => setFormData({...formData, nome: e.target.value})}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-wood-300 focus:border-alpine-dark focus:outline-none text-alpine-dark text-lg transition-colors"
                      required
                    />
                  </div>
                  <div className="rv-up" style={{ marginLeft: '1rem' }}>
                    <label className="label-upper block mb-2 text-wood-700">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-wood-300 focus:border-alpine-dark focus:outline-none text-alpine-dark text-lg transition-colors"
                      required
                    />
                  </div>
                  <div className="rv-up">
                    <label className="label-upper block mb-2 text-wood-700">Messaggio</label>
                    <textarea
                      rows={5}
                      value={formData.messaggio}
                      onChange={e => setFormData({...formData, messaggio: e.target.value})}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-wood-300 focus:border-alpine-dark focus:outline-none text-alpine-dark text-lg resize-none transition-colors"
                      required
                    />
                  </div>
                  <div className="rv-up pt-4">
                    <button
                      type="submit"
                      className={isWinter ? 'btn-winter' : 'btn-summer'}
                    >
                      Invia Messaggio
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MAP — Full-width at bottom with asymmetric header
          ═══════════════════════════════════════ */}
      <section className="bg-alpine-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
            <div className="lg:col-span-4">
              <h2 className="rv-up display-medium text-alpine-dark">
                Dove<br />siamo
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex justify-end">
              <a
                href="https://www.google.com/maps/search/Baita+Passo+Feudo+Predazzo"
                target="_blank"
                rel="noopener noreferrer"
                className={`rv-up label-upper inline-flex items-center gap-3 ${isWinter ? 'text-winter-600 hover:text-winter-800' : 'text-summer-600 hover:text-summer-800'} transition-colors`}
              >
                Apri in Google Maps
                <span className="w-8 h-px bg-current inline-block" />
              </a>
            </div>
          </div>
        </div>

        {/* Full-width map, no rounded corners for raw look */}
        <div className="rv-clip-up w-full h-[50vh] min-h-[400px]">
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
      </section>
    </div>
  )
}
