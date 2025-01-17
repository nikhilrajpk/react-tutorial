import React from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const submitHandle = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <input 
        type="text"
        value={username}
        placeholder='Username'
        onChange={(e)=>setUsername(e.target.value)}
        />
        {"  "}
        <input 
        type="password"
        value={password}
        placeholder='Password'
        onChange={(e)=>setPassword(e.target.value)}
        />
        {"  "}
        <button onClick={submitHandle}>Submit</button>
    </div>
  )
}

export default Login