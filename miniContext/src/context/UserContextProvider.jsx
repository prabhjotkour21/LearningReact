import React from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    console.log(children);
    
    const [user, setUser] =React.useState(null)
    return (
        // or value jo h wo  aa rhi value ko context ko pass kr rha h 
        <UserContext.Provider value={{ user, setUser }}>
            {/* {props.children} */}
            {/* ye screen pr render krta h  */}
            {children}
        </UserContext.Provider>
    )
    
}

export default UserContextProvider