import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
  const handleCount = (isIncrement) =>{
    setCount((prev)=> isIncrement ? prev+1 : prev-1)
  }
  return (
    <>
      <h1>Counter : {count}</h1>
      < Counter label={'+'} handleCount={handleCount} isIncrement={true} />
      < Counter label={'-'} handleCount={handleCount} isIncrement={false} />
      <input type="number" value={count} onChange={(e)=>setCount(Number(e.target.value))} />
    </>
  )
}

export default App
