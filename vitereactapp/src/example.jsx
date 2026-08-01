import { useEffect, useState } from "react";


function Example() {
    const [count , setCount] = useState(0)
    
    useEffect(() => {
        setCount(10)
    }, [])
    return (
        <>
            <h1>{ count}</h1>
        </>
    )
}

export default Example