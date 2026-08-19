import { useState } from 'react'
import {Routes ,Route,useLocation} from "react-router-dom"
import './App.css'
import { Home, Jobs, About, JobDetails, NotFound, Login,Dashboard } from "./pages/index"
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)
  const location=useLocation()

  return (
    <>
      {location.pathname !== "/login" && <Navbar />}
      
        <Routes>
          < Route path="/" element={<Home/>}/>
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={ <JobDetails/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard/>
           </ProtectedRoute>
         }
        />
        <Route path="*" element={ <NotFound/>} />
          </Routes>
      </>
  )
}

export default App
