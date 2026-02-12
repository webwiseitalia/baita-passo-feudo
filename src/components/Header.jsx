import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useSeason } from '../context/SeasonContext'
import logo from '../assets/dettagli/logo.svg'

const navItems = [
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
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-alpine-cream/90 backdrop-blur-md py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <Link to="/" className="shrink-0 relative z-50">
            <img
              src={logo}
              alt="Baita Passo Feudo"
              className={`transition-all duration-500 ${scrolled ? 'h-8' : 'h-11'} ${
                !scrolled && !menuOpen ? 'brightness-0 invert' : ''
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 label-upper transition-all duration-300 relative ${
                  location.pathname === item.path
                    ? scrolled
                      ? 'text-alpine-dark'
                      : 'text-white'
                    : scrolled
                      ? 'text-wood-500 hover:text-alpine-dark'
                      : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.span
                    layoutId="nav-indicator"
                    className={`absolute bottom-0 left-3 right-3 h-px ${scrolled ? 'bg-alpine-dark' : 'bg-white'}`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSeason}
              className={`label-upper transition-all duration-300 px-3 py-2 ${
                scrolled || menuOpen ? 'text-wood-500 hover:text-alpine-dark' : 'text-white/60 hover:text-white'
              }`}
              aria-label="Cambia stagione"
            >
              {isWinter ? '❄ Inverno' : '☀ Estate'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden relative z-50 p-2 transition-colors ${
                scrolled || menuOpen ? 'text-alpine-dark' : 'text-white'
              }`}
              aria-label="Menu"
            >
              <div className="w-7 flex flex-col gap-1.5">
                <span className={`block h-px bg-current transition-all duration-500 origin-center ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
                <span className={`block h-px bg-current transition-all duration-500 ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 3rem) 2rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 3rem) 2rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 3rem) 2rem)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-alpine-cream flex flex-col justify-center px-10"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                >
                  <Link
                    to={item.path}
                    className={`display-medium block py-2 transition-colors duration-300 ${
                      location.pathname === item.path
                        ? 'text-alpine-dark'
                        : 'text-wood-300 hover:text-alpine-dark'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-col gap-3 text-wood-500"
            >
              <a href="tel:+393479919582" className="label-upper hover:text-alpine-dark transition-colors">
                +39 347 991 9582
              </a>
              <a href="mailto:info@baitapassofeudo.com" className="label-upper hover:text-alpine-dark transition-colors">
                info@baitapassofeudo.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
