import { createContext, useContext, useState, useEffect } from 'react'

const SeasonContext = createContext()

function getDefaultSeason() {
  const month = new Date().getMonth() + 1
  return (month >= 6 && month <= 9) ? 'estate' : 'inverno'
}

export function SeasonProvider({ children }) {
  const [season, setSeason] = useState(() => {
    const stored = localStorage.getItem('baita-season')
    return stored || getDefaultSeason()
  })

  useEffect(() => {
    localStorage.setItem('baita-season', season)
  }, [season])

  const toggleSeason = () => {
    setSeason(prev => prev === 'inverno' ? 'estate' : 'inverno')
  }

  const isWinter = season === 'inverno'
  const isSummer = season === 'estate'

  return (
    <SeasonContext.Provider value={{ season, setSeason, toggleSeason, isWinter, isSummer }}>
      {children}
    </SeasonContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSeason() {
  const context = useContext(SeasonContext)
  if (!context) throw new Error('useSeason must be used within SeasonProvider')
  return context
}
