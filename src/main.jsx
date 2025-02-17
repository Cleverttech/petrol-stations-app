import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GasStations from './GasStations.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GasStations />
  </StrictMode>,
)
