import React, { useState } from 'react'
import useTodo from '../Contexts/TodoContext'

function Child() {
    const [text, setText] = useState('')
    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState(null)
    const {todos, addTodo, removeTodo, updateTodo, toggleTodo} = useTodo()

    const editHandle = (tid)=>{
        if (editId=== tid){
            updateTodo(editId, editText)
            setEditId(-1)
            setEditText('')
            return
        }
        const todo = todos.find((t)=> tid === t.id )
        setEditId(tid)
        setEditText(todo.text)

    }

    const handleAdd = (e)=>{
        e.preventDefault()
        addTodo(text)
        setText('')
    }
  return (
    <>
        <form onSubmit={handleAdd} >
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
            <button type='submit'>add</button>
        </form>
        {
            todos && todos.map((todo)=>(
                <li key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={()=> toggleTodo(todo.id)} />
                    {editId===todo.id ? (<input type="text" onChange={(e)=>setEditText(e.target.value)} value={editText} /> ):
                        (<input type="text" onChange={(e)=>setEditText(e.target.value)} value={todo.text} style={todo.completed ? {textDecoration:'line-through'} : {}} /> )
                    }
                    {editId===todo.id ? <button onClick={()=> editHandle(todo.id)}>save</button> : 
                        <button onClick={()=> editHandle(todo.id)}>edit</button>
                    }
                    <button onClick={()=> removeTodo(todo.id)}>delete</button>
                </li>
            ))
        }
    </>
  )
}

export default React.memo(Child)