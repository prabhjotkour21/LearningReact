import React ,{useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const { user, isLoggedIn, logout } = useContext(UserContext)
    if (!user) {
        return <div>Please Login</div>
    }
    return (
        <>
            <div>WelCome { user.username}</div>
            {/* if (!user) return <div>Please Login</div>
            return <div> Welcome {user.username}{console.log("isLoggedIn", isLoggedIn)}</div> */}
            <button onClick={logout}>Logout</button>
  
        </>
       )
          
}

export default Profile