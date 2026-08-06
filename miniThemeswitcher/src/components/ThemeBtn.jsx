import React from 'react'
import useTheme from "../contexts/ThemeContext"
function ThemeBtn() {
    const { darkTheme, lightTheme } = useTheme()
    const handleDarkMode = () => {
        darkTheme()
    }
    const handleLightMode = () => {
        lightTheme()
    }

    return (
      <>
            <button onClick={handleDarkMode}>Dark Mode</button>
            <button onClick={handleLightMode}>Light Mode</button>
            
      </>
      
  )
}

export default ThemeBtn