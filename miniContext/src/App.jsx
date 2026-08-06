import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import Status from "./components/Status"

function App() {

  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React Context API Learning</h1> 
      <Login />
      <Profile />
      <Status/>
    </UserContextProvider>
  )
}

export default App
