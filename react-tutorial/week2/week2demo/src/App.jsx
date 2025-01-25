import React, { useMemo, useReducer, useState } from 'react'
import './App.css'
import {ThemeProvider} from './Contexts/ThemeContext'
import Child from './components/Child'
function App() {
  const [mode, setMode] = useState(false)
  const handleMode = ()=>{
    setMode((prev) => !prev)
  }
  return (
    < ThemeProvider value={{mode, handleMode}} >
      < Child />
    </ThemeProvider>
  )
}

export default App