import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Scoreboard from "./Scoreboard.jsx"
import Quizapp from "./Quizapp.jsx"
import Agechecker from "./Agecheacker.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Scoreboard /> */}
    {/* <Quizapp /> */}
    {/* <Agechecker/> */}
  </StrictMode>,
)
