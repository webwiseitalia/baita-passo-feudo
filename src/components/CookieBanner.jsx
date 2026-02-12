import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const COOKIE_KEY = 'baita-passo-feudo-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  const isPolicyPage = location.pathname === '/privacy-policy' || location.pathname === '/cookie-policy'

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Blur overlay — only on non-policy pages */}
      {!isPolicyPage && (
        <div className="fixed inset-0 z-[998] backdrop-blur-sm bg-black/20 pointer-events-none" />
      )}

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] p-4 md:p-6">
        <div className="max-w-[700px] mx-auto bg-alpine-dark border border-wood-800/50 shadow-2xl p-6 md:p-8">
          <div className="mb-5">
            <p className="font-heading text-lg text-white mb-2">Informativa Cookie</p>
            <p className="text-wood-400 text-sm leading-relaxed">
              Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non utilizziamo cookie di profilazione o tracciamento. Per maggiori informazioni, consulta la nostra{' '}
              <Link to="/cookie-policy" className="text-alpine-gold hover:underline">Cookie Policy</Link>
              {' '}e la{' '}
              <Link to="/privacy-policy" className="text-alpine-gold hover:underline">Privacy Policy</Link>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 py-3 px-6 bg-alpine-gold text-alpine-dark font-accent font-semibold text-sm tracking-wide hover:bg-alpine-gold/90 transition-colors"
            >
              Accetta
            </button>
            <button
              onClick={handleReject}
              className="flex-1 py-3 px-6 bg-alpine-gold text-alpine-dark font-accent font-semibold text-sm tracking-wide hover:bg-alpine-gold/90 transition-colors"
            >
              Rifiuta
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
