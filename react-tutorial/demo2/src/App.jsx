import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import { useUserApi } from './hooks/useUserApi'
import Todo from './components/Todo'
function App() {
  const [count, setCount] = useState(0)
  const handleCount = (isIncrement)=>{
    setCount((prev)=> isIncrement ? prev + 1 : prev - 1)
  }
  //
  const {data:userData, loading, error} = useUserApi(count)
  return (
    <>
      <h1>Count : {count}</h1>
      < Counter handleCounter={handleCount} />
      {
        loading ? (
          <div style={{backgroundColor:'yellow'}}>
            <p>Loading...</p>
          </div>
        ) : error ? (
          <div style={{backgroundColor:'red'}}>
            <p>{error}</p>
          </div>
        ) : (
          <div style={{backgroundColor:'blue'}}>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
          </div>
        )
      }
      <Todo />
    </>
  )
}

export default App
