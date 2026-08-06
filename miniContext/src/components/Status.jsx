import React, { useContext } from "react"
import UserContext from "../context/UserContext"


function Status() {
    const { isLoggedIn } = useContext(UserContext)
    return (
        <>
            <h2>Login Status : { isLoggedIn? "Logged In" :"Logged Out"}</h2>
        </>
    )
}

export default Status