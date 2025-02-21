import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo, removeTodo, updateTodo, toggleTodo} from '../Store/todoSllice'
function TodoReact() {
    const todos = useSelector((state) => state.todo.todos)
 
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    const [editId, setEditId] = useState(-1)
    const [editText, setEditText] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addTodo(text))
        setText('')
    }

    const handleEdit = (tid)=>{
        if (editId === tid){
            dispatch(updateTodo({id:tid, text:editText}))
            setEditId(null)
            setEditText('')
        }
        const todo = todos.find((t)=> t.id === tid)
        setEditText(todo.text)
        setEditId(tid)
    }

  return (
    <>
        <form onSubmit={handleSubmit} >
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button>add</button>
        </form>
        {
            todos && todos.map((todo)=>(
                <li key={todo.id}>
                    <input type="checkbox" onChange={()=> dispatch(toggleTodo(todo.id))} />
                    {editId === todo.id ? <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)} />:
                    <input type="text" value={todo.text} readOnly={true} />}
                    {editId === todo.id ? <button onClick={()=>handleEdit(todo.id)}>save</button>:
                    <button onClick={()=>handleEdit(todo.id)}>edit</button>}
                    <button onClick={()=> dispatch(removeTodo(todo.id))}>delete</button>
                </li>
            ))
        }
    </>
  )
}

export default TodoReact