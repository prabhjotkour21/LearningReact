import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [history,sethistory]=useState([])
  const IncressCount = () => {
    setCount(prev => {
      const x = prev + 1
    
      sethistory(history => [...history, x])
      return x
    })
  }
  const DecressCount = () => {
    if (count > 0) {
      setCount(count-1)
    }
  }
  const ResetCount = () => {
    if (count === 0) {
      return
    } else {
      setCount(0)
    }
  }
  
  return (
    <>
      <h1>Count : {count}</h1>
      <div>{ history.map((i)=>(i))}</div>
      <button onClick={IncressCount} style={{textAlign:"center", color:"black", padding:"10px", marginLeft:"10px", width:"100px" ,backgroundColor:"blue", outline:"none" , borderRadius:"5px", border:"none" , fontSize:"1.5rem"}}>Incress</button>
      <button onClick={DecressCount} style={{ textAlign: "center", color: "black", padding: "10px", marginLeft: "10px", marginTop: "10px", width: "100px", backgroundColor: "yellow", outline: "none", borderRadius: "5px", border: "none", fontSize: "1.5rem" }}>Decress</button>
      <button onClick={ResetCount} style={{textAlign:"center", color:"black", padding:"10px", marginLeft:"10px", marginTop:"10px" ,width:"100px" ,backgroundColor:"red", outline:"none" , borderRadius:"5px", border:"none" , fontSize:"1.5rem"}}>Reset</button>

    </>
  )
}

export default App
