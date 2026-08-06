import { useState } from 'react'

import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'


function App() {
  const [theme, setTheme] = useState("light")
  const lightTheme=()=>{
     setTheme("light")
  }
  const darkTheme=()=>{
    setTheme("dark")
  }

  return (
    <ThemeProvider value={{theme , darkTheme,lightTheme}}>
      
      <h1>Helle vite</h1>
      <Card />
      <ThemeBtn/>
    </ThemeProvider>
  )
}

export default App
