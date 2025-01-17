import React, { useEffect, useState } from 'react'
import Counter from './components/Counter'
import { useUserApi } from './hooks/useUserApi'
import Form from './components/Form'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import about from './components/about'
function App() {
  const [count, setCount] = useState(0)
  const handleCount = (isIncrement) =>{
    setCount((prev)=> isIncrement ? prev + 1 : prev - 1)
  }
  const {data:userData, loading, error} = useUserApi(count)

  const [tasks, setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem('todo')
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  useEffect(()=>{
    localStorage.setItem('todo', JSON.stringify(tasks))
  },[tasks])

  const [task, setTask] = useState("")
  const addTask = ()=>{
    if(task.trim()==="") return;
    const timestamp = new Date().toLocaleString()
    setTasks([...tasks, {text : task, completed:false, time:timestamp}])
    setTask("")
  }
  const toggleTask = (index) =>{
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks)
  }
  const deleteTask = (index) =>{
    const newTasks = tasks.filter((_,i) => i !== index)
    setTasks(newTasks)
  }

  //form
  const [user, setUser] = useState(
    {
      username : "",
      email : "",
      password : ""
    }
  )
  const [showpass, setShowpass] = useState(false)
  const handleUser = (e) =>{
    const {name, value} = e.target
    setUser({
      ...user,
      [name] : value
    })
  }

  const [show, setShow] = useState(true)

  
  return (
    <>
      <button onClick={()=>setShow(!show)}>toggle</button>
      {show && <Form/>}
      {/* <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.password}</p>
      < Form type={'text'} name={'username'} handleUser={handleUser} />
      < Form type={'email'} name={'email'} handleUser={handleUser} />
      < Form type={showpass ? 'text':'password'} name={'password'} handleUser={handleUser} />
      <button onClick={()=> setShowpass((prev)=>!prev)} >
        {showpass ? "Hide" : "show"}
      </button> */}
      <h1>count : {count}</h1>
      < Counter handleCount={handleCount} />
      {
        loading ? (
          <div style={{backgroundColor:'yellow'}}>
            <p>Loading....</p>
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
      <div>
        <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        {
          tasks.map((task, index) => (
            <li key={index}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(index)} />
            <p
              style={task.completed ? {textDecorationLine:'line-through'} : {textDecorationLine:'underline'}}
            >{task.text}</p>
            <p style={{color:'blue'}}>{task.time}</p>
            <button onClick={()=>deleteTask(index)}>delete</button>
            </li>
          ))
        }
      </div>
    </>
  )
}

export default App