import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {

  return (
    <>
      <h1>Redux Todo</h1>
      < AddTodo />
      < Todos />
    </>
  )
}

export default App
