import { Routes, Route } from 'react-router-dom'
import { SeasonProvider } from './context/SeasonContext'
import { useLenis } from './hooks/useLenis'
import { useScrollProgress } from './hooks/useGsap'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import LaBaita from './pages/LaBaita'
import Ristorante from './pages/Ristorante'
import Menu from './pages/Menu'
import Bibite from './pages/Bibite'
import Caffetteria from './pages/Caffetteria'
import Attivita from './pages/Attivita'
import Raggiungerci from './pages/Raggiungerci'
import Contatti from './pages/Contatti'

export default function App() {
  useLenis()
  useScrollProgress()

  return (
    <SeasonProvider>
      <ScrollToTop />
      <div className="scroll-progress" />
      <div className="grain">
        <Header />
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
          </Routes>
        </main>
        <Footer />
      </div>
    </SeasonProvider>
  )
}
