import { useParams } from "react-router-dom"
import React from 'react'


function Profile() {
    const { username } = useParams()
    console.log(username);
    
  return (
      <div>{ username}</div>
  )
}

export default Profile


