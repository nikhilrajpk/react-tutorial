import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Todo() {
    const [tasks, setTasks] = useState(()=>{
        const savedTasks = localStorage.getItem('todo');
        return savedTasks ? JSON.parse(savedTasks) : [];
    })
    useEffect(()=>{
        localStorage.setItem('todo', JSON.stringify(tasks))
    },[tasks])
    const [task, setTask] = useState('')
    const addTask = ()=>{
        const timestamp = new Date().toLocaleString()
        setTasks([...tasks, {text:task, completed:false, time:timestamp}])
        setTask('')
    }
    const toggleTask = (index)=>{
        const newTasks = [...tasks]
        newTasks[index].completed = !newTasks[index].completed
        setTasks(newTasks)
    }
    const deleteTask = (index) =>{
        const newTasks = tasks.filter((_,i) => i!==index)
        setTasks(newTasks)
    }
  return (
    <div>
        <div>
            <input type="text" onChange={(e)=>setTask(e.target.value)} />
            <button onClick={addTask}>add</button>
        </div>
        <div>
            <ul>
                {
                    tasks.map((task, index) => (
                        <li key={index}>
                            <input type="checkbox" checked={task.completed} onChange={()=>toggleTask(index)} />
                            <p>{task.text} {task.time}</p>
                            <button onClick={()=>deleteTask(index)}>delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Todo