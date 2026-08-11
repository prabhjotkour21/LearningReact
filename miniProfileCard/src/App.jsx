import { useState } from 'react'


import './App.css'

function App() {
  const [followed ,setFollowed]=useState(false)
  const handleSubmit = () => {
     setFollowed(!followed)
  }

  return (
    <>
      <div class='container'>
      <div class='profile'>
        <h1 class='headingh1'>My Profile</h1>
        <h3 class= 'headingh3'>Prabhjot kour</h3>
        <p class='ptag'> Frontend Learner</p>
        <button class='btn' onClick={handleSubmit}>{ followed===true ?"Following":"Follow"}</button>
        </div>
        </div>
    </>
  )
}

export default App
