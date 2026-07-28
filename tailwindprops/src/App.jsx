import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from "./components/card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className='bg-green-400 inline-block text-black p-4 mb-6 center' >Hello Jot</h1>
      <Card username="Jot kour"/>
      <Card username="Vijay Singh"/>
       <Card />

    </>
  )
}

export default App
