import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'

function ToggleBtn() {
    const {theme,toggleTheme} = useTheme()
  return (
    <div>
        <button onClick={toggleTheme}>{theme === 'light' ? "🌚" : "🌞" }</button>
    </div>
  )
}

export default ToggleBtn