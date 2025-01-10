import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () =>{
    setCounter((counter) => counter + 1)        // now this is not bundled when call back is used.
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
  }
  const removeValue = () =>{
    setCounter(counter - 1)                    // here batching is done.
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>React tutorial with counter {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button> {"  "}
      <button onClick={removeValue}>Remove value</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
