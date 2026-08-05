import React from "react"

// ye line ek context  object create krti  abhi es m koi data nhi h bad m jb UserContext.Provider k through is
// context m value (user setuser) di jati   jis ko baki components access kr skte h 
// React.createContext() ye sirf ek context obj bnata h ye data nhhi krta  data provider k value props through aata 
const UserContext=React.createContext()




export default UserContext


