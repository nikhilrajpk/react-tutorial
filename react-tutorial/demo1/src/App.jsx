import { useState } from 'react'

import './App.css'
import {Counter} from './components/Counter'
import InputBox from './components/InputBox';


function App() {
  
  // counter
  const [count, setCount] = useState(0);
  const handleCount = (isIncrement)=>{
    setCount((prev)=> isIncrement ? prev+1 : prev-1)
  }

  // input box
  const [userData, setUserData] = useState({
    username : "", 
    email : "",
    password : ""
  })
  const handleData = (e) =>{
    const {name, value} = e.target;
    setUserData((data)=>({
      ...data,
      [name] : value
    }))
  }
  const [showPass, setShowPass] = useState(false)

  return (
    <>
      <h1>Count ; {count}</h1>
      < Counter handle={handleCount} />
      {/* input */}
      <p>username:{userData.username}</p>
      <p>email:{userData.email}</p>
      <p>password:{userData.password}</p>

      < InputBox type={'text'} name={'username'} placeholder={'enter you username'} handleData={handleData} /> {"  "}
      < InputBox type={'email'} name={'email'} placeholder={'enter you email'} handleData={handleData} /> {"  "}
      < InputBox type={showPass ? 'text' : 'password'}
         name={'password'} placeholder={'enter you password'} handleData={handleData} />

      <button onClick={()=>setShowPass((prev) => !prev)}>
        {showPass ? "Hide" : "show"}
      </button>
    </>
  )
}

export default App
