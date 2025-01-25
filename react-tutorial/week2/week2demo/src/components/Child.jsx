import React, { useState } from 'react'
import useTheme from '../Contexts/ThemeContext'
function Child() {
    const {mode, handleMode} = useTheme()
    const dark = {'backgroundColor':'#111', 'color':'#fff', 'width':'500px', 'height':'500px'}
    const light = {'backgroundColor':'#fff', 'color':'#111', 'width':'500px', 'height':'500px'}
  return (
    <div style={mode ? dark : light}>
        <button onClick={handleMode}>{mode ? '🌞' : '🌚'}</button>
    </div>
  )
}

export default Child