import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PetrolStationList from './petrolStationList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PetrolStationList />
  </StrictMode>,
)
