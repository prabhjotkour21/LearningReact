import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Scoreboard from "./Scoreboard.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Scoreboard/>
  </StrictMode>,
)
