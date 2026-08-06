import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const{user,setUser,setIsLoggedIn} = useContext(UserContext)
    const handleSubmmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
        setIsLoggedIn(true)
    }
    if (user) {
        return null
    }
  return (
      <div>
          
          <h2>Login</h2>
          <input type='text' value={username} onChange={(i) => setUsername(i.target.value)} placeholder='username' />
          {"  "}
          <input type='text' value={password} onChange={(i) => setPassword(i.target.value)} placeholder='password' />
          {"  "}
           <input onClick={handleSubmmit} placeholder='Submit'/>
    </div>
  )
}

export default Login