import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { API_ENDPOINT } from './constants'
import { IExchange } from './constants/types'

const App = () => {
  const [exchanges, setExchanges] = useState<IExchange[]>([])

  const getExchanges = async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}/exchanges?per_page=10&page=1`,
      )
      const result = await response.json()
      setExchanges(result)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getExchanges()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div> InitialPage </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
