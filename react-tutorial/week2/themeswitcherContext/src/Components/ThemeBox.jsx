import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'

function ThemeBox() {
    const themeModes = {
        dark : {backgroundColor : '#333', color : '#fff'},
        light : {backgroundColor : '#ffff', color : '#000'},
    }

    const {theme} = useTheme()
  return (
    <div style={{width:'500px', height:'300px', ...themeModes[theme]}}>
        <h1>Current Theme : {theme}</h1>
    </div>
  )
}

export default ThemeBox