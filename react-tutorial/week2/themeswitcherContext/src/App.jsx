import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider, useTheme } from './Contexts/ThemeContext'
import ToggleBtn from './Components/ToggleBtn'
import ThemeBox from './Components/ThemeBox'

function App() {
  
  const [theme, setTheme] = useState('light')

  const toggleTheme = ()=>{
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider value={{theme, toggleTheme}}>
      < ToggleBtn />
      < ThemeBox />
    </ThemeProvider>
  )
}

export default App
