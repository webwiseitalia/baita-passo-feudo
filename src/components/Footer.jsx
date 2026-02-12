import { Link } from 'react-router-dom'
import logo from '../assets/dettagli/logo.svg'
import fiemmeLogo from '../assets/dettagli/imgi_2_fiemme.webp'
import skiLatemrLogo from '../assets/dettagli/imgi_3_ski-latemar.webp'
import montagnanimataLogo from '../assets/dettagli/imgi_4_montagnanimata.webp'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'La Baita', path: '/la-baita' },
  { label: 'Il Ristorante', path: '/ristorante' },
  { label: 'Menu', path: '/menu' },
  { label: 'Attività', path: '/attivita' },
  { label: 'Come Raggiungerci', path: '/raggiungerci' },
  { label: 'Contatti', path: '/contatti' },
]

export default function Footer() {
  return (
    <footer className="bg-alpine-dark text-wood-300">
      {/* ═══════════════════════════════════════
          BOLD DISPLAY HEADER — Visual anchor
          ═══════════════════════════════════════ */}
      <div className="pt-20 md:pt-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="display-large text-white leading-[0.9]">
                Baita<br />
                <span className="ml-[5vw] md:ml-[8vw] inline-block">Passo Feudo</span>
              </p>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <img src={logo} alt="Baita Passo Feudo" className="h-14 brightness-0 invert opacity-50 mb-4" />
              <p className="text-wood-500 text-sm leading-relaxed max-w-xs">
                Una terrazza panoramica sulla Val di Fiemme, a pochi passi dagli impianti Latemar MontagnAnimata.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          CREATIVE RULE
          ═══════════════════════════════════════ */}
      <div className="px-6 lg:px-12 mt-14 mb-14">
        <div className="max-w-7xl mx-auto">
          <hr className="creative-rule opacity-30" />
        </div>
      </div>

      {/* ═══════════════════════════════════════
          MAIN BODY — Asymmetric 12-col grid
          ═══════════════════════════════════════ */}
      <div className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8">
            {/* Navigation — narrow left column */}
            <div className="md:col-span-3 md:col-start-1">
              <p className="label-upper text-wood-500 mb-6">Esplora</p>
              <ul className="space-y-3">
                {navLinks.map((item, i) => (
                  <li key={item.path} style={{ marginLeft: i % 2 === 1 ? '0.5rem' : '0' }}>
                    <Link
                      to={item.path}
                      className="text-wood-400 hover:text-white transition-colors text-sm font-accent tracking-wide"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact — middle, scattered layout */}
            <div className="md:col-span-4 md:col-start-5">
              <p className="label-upper text-wood-500 mb-6">Contatti</p>
              <div className="space-y-6">
                <div>
                  <p className="label-upper text-wood-600 mb-1">Indirizzo</p>
                  <p className="text-sm text-wood-300 leading-relaxed">
                    Località Passo Feudo<br />
                    38037 Predazzo (TN)
                  </p>
                </div>
                <div className="ml-4">
                  <p className="label-upper text-wood-600 mb-1">Telefono</p>
                  <a
                    href="tel:+393479919582"
                    className="text-sm text-wood-300 hover:text-white transition-colors"
                  >
                    +39 347 991 9582
                  </a>
                </div>
                <div>
                  <p className="label-upper text-wood-600 mb-1">Email</p>
                  <a
                    href="mailto:info@baitapassofeudo.com"
                    className="text-sm text-wood-300 hover:text-white transition-colors"
                  >
                    info@baitapassofeudo.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social + Partners — right, offset */}
            <div className="md:col-span-3 md:col-start-10">
              <p className="label-upper text-wood-500 mb-6">Social</p>
              <div className="space-y-3 mb-12">
                <a
                  href="https://www.facebook.com/BaitaPassoFeudo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-wood-400 hover:text-white transition-colors font-accent tracking-wide block"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/baitapassofeudoofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-wood-400 hover:text-white transition-colors font-accent tracking-wide block ml-2"
                >
                  Instagram
                </a>
              </div>

              <p className="label-upper text-wood-500 mb-4">Partner</p>
              <div className="flex items-center gap-5 flex-wrap">
                <img
                  src={fiemmeLogo}
                  alt="Val di Fiemme"
                  className="h-8 brightness-0 invert opacity-40 hover:opacity-80 transition-opacity"
                />
                <img
                  src={skiLatemrLogo}
                  alt="Ski Center Latemar"
                  className="h-8 brightness-0 invert opacity-40 hover:opacity-80 transition-opacity"
                />
                <img
                  src={montagnanimataLogo}
                  alt="Latemar MontagnAnimata"
                  className="h-8 brightness-0 invert opacity-40 hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          BOTTOM BAR
          ═══════════════════════════════════════ */}
      <div className="border-t border-wood-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-wood-600">
            &copy; 2026 Baita Passo Feudo — Tutti i diritti riservati
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-wood-600 hover:text-white transition-colors font-accent tracking-wide">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-wood-600 hover:text-white transition-colors font-accent tracking-wide">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
