import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

const reducer = (state, action)=>{
  switch(action.type){
    case 'increment' :
      return {count : state.count + 1};
    case 'decrement' :
      return {count : state.count - 1};
    case 'reset' :
      return {count : 0};
    default : 
      throw new Error('unknown type of action : ', action.type)
  }
}

function App() {
  
  const initialState = {count : 0}
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter : {state.count}</h1>
      <button onClick={()=> dispatch({type : 'increment'})}>Increment</button> {" "}
      <button onClick={()=> dispatch({type : 'decrement'})}>Decrement</button> {" "}
      <button onClick={()=> dispatch({type : 'reset'})}>Reset</button>
    </div>
  )
}

export default App
