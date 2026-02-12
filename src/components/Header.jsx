import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSeason } from '../context/SeasonContext'
import logo from '../assets/dettagli/logo.svg'

const winterNav = [
  { label: 'Home', path: '/' },
  { label: 'La Baita', path: '/la-baita' },
  { label: 'Il Ristorante', path: '/ristorante' },
  { label: 'Menu', path: '/menu' },
  { label: 'Attività', path: '/attivita' },
  { label: 'Raggiungerci', path: '/raggiungerci' },
  { label: 'Contatti', path: '/contatti' },
]

const summerNav = [
  { label: 'Home', path: '/' },
  { label: 'La Baita', path: '/la-baita' },
  { label: 'Il Ristorante', path: '/ristorante' },
  { label: 'Menu', path: '/menu' },
  { label: 'Attività', path: '/attivita' },
  { label: 'Raggiungerci', path: '/raggiungerci' },
  { label: 'Contatti', path: '/contatti' },
]

export default function Header() {
  const { toggleSeason, isWinter } = useSeason()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false) // eslint-disable-line react-hooks/set-state-in-effect
  }, [location.pathname])

  const navItems = isWinter ? winterNav : summerNav

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Baita Passo Feudo"
            className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                location.pathname === item.path
                  ? scrolled
                    ? isWinter ? 'text-winter-700 bg-winter-50' : 'text-summer-700 bg-summer-50'
                    : 'text-white bg-white/20'
                  : scrolled
                    ? 'text-wood-700 hover:text-wood-900 hover:bg-wood-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Season Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          {/* Season Toggle */}
          <button
            onClick={toggleSeason}
            className={`relative flex items-center rounded-full p-1 transition-all duration-500 ${
              scrolled
                ? isWinter ? 'bg-winter-100' : 'bg-summer-100'
                : 'bg-white/20 backdrop-blur-sm'
            }`}
            aria-label="Cambia stagione"
          >
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                isWinter
                  ? scrolled ? 'bg-winter-600 text-white' : 'bg-white text-winter-700'
                  : scrolled ? 'text-wood-500' : 'text-white/70'
              }`}
            >
              Inverno
            </span>
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                !isWinter
                  ? scrolled ? 'bg-summer-600 text-white' : 'bg-white text-summer-700'
                  : scrolled ? 'text-wood-500' : 'text-white/70'
              }`}
            >
              Estate
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-wood-700 hover:bg-wood-50' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-md shadow-lg mt-2 mx-4 rounded-2xl p-4 flex flex-col gap-1">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                location.pathname === item.path
                  ? isWinter ? 'text-winter-700 bg-winter-50' : 'text-summer-700 bg-summer-50'
                  : 'text-wood-700 hover:bg-wood-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+393479919582"
            className={`mt-2 px-4 py-3 rounded-xl text-sm font-bold text-center text-white ${
              isWinter ? 'bg-winter-600' : 'bg-summer-600'
            }`}
          >
            Chiamaci
          </a>
        </nav>
      </div>
    </header>
  )
}
