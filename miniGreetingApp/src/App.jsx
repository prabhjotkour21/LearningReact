import { useState } from 'react'

import './App.css'

function App() {
  const [inputname ,setInputName]=useState('')
   const [name, setName]=useState('')  
  const handleSubmit = () => {
     setName(inputname)
   }
  return (
    <>
      <div className='container'>
        <div className='firstChild'>
          <input
            className='input'
            value={inputname}
            onChange={(e) => setInputName(e.target.value)}
            placeholder='Enter your name'
          />
          <button
            className='btn'
            onClick={handleSubmit}>
             Submit
          </button>
          <h3 className='h3tag'>{name !== "" ? `Hello, ${name} 👋 ` : ''} </h3>
        </div>
      </div>

    </>
  )
}

export default App
