import { useState } from "react";



function Agechecker() {
    const [age,setage]=useState(99)
    const incressAge = () => {
        if (age<100) {
                setage(age+1)
        }
  
    }
    return (
        <>
            <h2>Age : {age}</h2>
            <h3>Status : { age<=15 ?"Minor" :age<60 ? "Adult" : age>=60 ?"Senior Citizen" :""}</h3>
            <button onClick={incressAge}>Incress Age</button>

        </>
    )
}


export default Agechecker