import { Routes, Route, useLocation } from 'react-router-dom'
import { SeasonProvider } from './context/SeasonContext'
import { useLenis } from './hooks/useLenis'
import { useScrollProgress } from './hooks/useGsap'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'

import Home from './pages/Home'
import LaBaita from './pages/LaBaita'
import Ristorante from './pages/Ristorante'
import Menu from './pages/Menu'
import Bibite from './pages/Bibite'
import Caffetteria from './pages/Caffetteria'
import Attivita from './pages/Attivita'
import Raggiungerci from './pages/Raggiungerci'
import Contatti from './pages/Contatti'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'

const POLICY_PATHS = ['/privacy-policy', '/cookie-policy']

function AppContent() {
  useLenis()
  useScrollProgress()
  const location = useLocation()
  const isPolicyPage = POLICY_PATHS.includes(location.pathname)

  return (
    <>
      <ScrollToTop />
      <div className="scroll-progress" />
      <div className="grain">
        {!isPolicyPage && <Header />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/la-baita" element={<LaBaita />} />
            <Route path="/ristorante" element={<Ristorante />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/bibite" element={<Bibite />} />
            <Route path="/menu/caffetteria" element={<Caffetteria />} />
            <Route path="/attivita" element={<Attivita />} />
            <Route path="/raggiungerci" element={<Raggiungerci />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        {!isPolicyPage && <Footer />}
      </div>
      <CookieBanner />
    </>
  )
}

export default function App() {
  return (
    <SeasonProvider>
      <AppContent />
    </SeasonProvider>
  )
}
