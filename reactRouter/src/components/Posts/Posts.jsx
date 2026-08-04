
import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Posts() {
   
    const info = useLoaderData()
  
 
   
        
  return (
      <div>Posts :{info.map((i)=>i.title)}</div>
  )
}


export default Posts


export const postInfoLoader =  () => {
    return [
        { id: 1, title: "React" },
        { id: 2, title: "JavaScript" },
        {id:3, title :"Nodejs"}
    ]
}