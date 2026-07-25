import { useState } from "react";

function Scoreboard() {
    const [score, setScore] = useState(0)
    
    const incressScore = () => {
        if (score < 100) {
            setScore(score + 1)
        }   
    }
    const decressScore = () => {
        if (score > 0) {
            setScore(score-1)
        }
        
    }
   
    const resetScore = () => {
        if (score === 0) {
            return
        } else {
            setScore(0)
        }
    }
    
    return (
        <>
            <h1>Score : {score}</h1>
            <h2> Status: {score<=30 ?"Low": score <=70 ?"Medium" :score<=100? "High" :""}</h2>
            <button onClick={incressScore} style={{margin:"5px" ,padding :"6px" ,fontSize:"20px"}}> +1</button>

            <button onClick={decressScore} style={{margin:"5px" ,padding :"6px" ,fontSize:"20px"}}>-1</button>
            <button onClick={resetScore} style={{margin:"5px" ,padding :"6px" ,fontSize:"20px"}}> Reset</button>
        </>
        
    )
}

export default Scoreboard