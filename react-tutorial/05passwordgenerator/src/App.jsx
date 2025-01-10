import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')


  const generatePassword = useCallback(() =>{
    console.log('pass generation start')
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+"
    console.log(str)
    for (let i = 0; i < length; i++ ){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    console.log('password', pass)
    setPassword(pass);
  },[length, numberAllowed, charAllowed])



  useEffect(() =>{
    console.log('use effect is calling')
    generatePassword()
  },[generatePassword])


  const copyPasswordToClipboard = ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  const passwordRef = useRef(null)


  return (
    <div
      className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-white'
    >
      <h1
        className='text-white text-center my-3'
      >
        Password Generator
      </h1>

      <div
        className='flex shadow rounded-lg overflow-hidden mb-4'
      >
        <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 text-black"
        placeholder="Password"
        readOnly
        ref={passwordRef}
        />

        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
        >
          copy
        </button>
      </div>

      <div
        className='flex gap-x-2 text-sm'
      >
        <div
          className='flex items-center gap-x-1'
        >

          <input 
          type="range" 
          min={6}
          max={20}
          className='cursor-pointer'
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          name="" 
          id="length" />
          <label htmlFor="length">Length : {length}</label>
        </div>

        <div
          className='flex gap-x-2 text-sm'
        >
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}
          
          name=""
          id="number" />

          <label htmlFor="number">Number</label>
        </div>

        <div
          className='flex gap-x-2 text-sm'
        >
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev) => !prev)
          }}

          name=""
          id="char" />

          <label htmlFor="char">Character</label>
        </div>

      </div>

    </div>
  )
}

export default App
