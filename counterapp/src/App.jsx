
import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(0)
  //  counter variable h or setcounter ek function h  es variable ko update krne k liye 
  // let counter = 0
  
  const addvalue = () => {

    // counter=counter+1
    // console.log("value added ", counter)
    if (counter < 20) {
      setCounter(counter+1)
    }
    
  }
  const removevalue = () => {
    if (counter > 0) {
          setCounter(counter-1)

    }
    // console.log("Value removed", counter)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>Value: { counter}</h3>
      <button onClick={addvalue}>Incress Value </button>
      <br/>
      <button onClick={removevalue} >Decress Value </button>
    </>
  )
}



//  abhi issue ye h ki yha pr  console m to counter updat eho ra h but ui pr counter update nhi ho rha h 
//   kyu ki react bolti h ki  ui ka controle mere pass hi rhege jb m bolugi ui tb hi update  hoga
//  meri permission  k bina  tum apni mrzi se ui update nhi  kr skte ho  

// -------------------------------------------------------------------
// React tabhi UI ko dobara render karta hai jab usse pata chale ki component ka 
// state ya props change hua hai.Sirf normal JavaScript variable ko change karne se
//  React ko koi signal nahi milta, isliye UI update nahi hoti.
export default App
