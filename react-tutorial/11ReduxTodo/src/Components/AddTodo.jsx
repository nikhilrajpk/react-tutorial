import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const handleAddTodo = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={handleAddTodo} className='flex'>
        <input placeholder='add todo...' type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button type='submit'>add todo</button>
    </form>
  )
}

export default AddTodo