import React from 'react'
import useTheme from "../contexts/ThemeContext"
function Card() {
  const { theme } = useTheme()
  return (
      <>
      <div>{ theme==="dark" ?"Dark Theme" :"Light Theme"}Hello rect</div>
      </>
  )
}

export default Card