
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
  const resetValue = () => {
    if (counter === 0) {
      return
    }else {
      setCounter(0)

    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h3>Value: {counter}</h3>
      {/* <p>{counter% 2==0 ? <h4>Even Number</h4> : <h4>Odd Number</h4>}</p> */}

      <p>{counter % 2 === 0 ? "Even Number" : "Odd Number"}</p>
      <h3>{counter <= 5 ? "Beginner" : counter<=10 ? "Learner" : counter<=15 ?"Intermediate" :  counter<=20 ?"Expert" :""}
      </h3>
      <button onClick={addvalue} disabled={counter===20}>Incress Value </button>
      <br />
      
      <button onClick={removevalue} disabled={counter === 0}>Decress Value </button>
      <button onClick={resetValue}>Reset</button>
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
