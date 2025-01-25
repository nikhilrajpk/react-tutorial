import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const [updateText, setUpdateText] = useState('')
    const [editableId, setEditableId] = useState(null)

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()

    const handleUpdateTodo = (id) =>{
        if(editableId){
            dispatch(updateTodo({id, text : updateText}))
            setUpdateText('')
            setEditableId(null)
        }else{
            setEditableId(id)
            const currentTodo = todos.find((todo)=> todo.id === id)
            setUpdateText(currentTodo.text)
        }
    }
  return (
    <div>
        <ul>
            {
                todos && todos.map((todo)=>(
                    <li key={todo.id} className='flex'>
                        <input type="checkbox" checked={todo.completed} onChange={()=>dispatch(toggleTodo(todo.id))} />

                        <input type="text" value={editableId === todo.id ? updateText : todo.text} onChange={(e)=>setUpdateText(e.target.value)} readOnly={editableId !== todo.id} />

                        <button onClick={()=> handleUpdateTodo(todo.id)}>
                            {editableId === todo.id ? '📁' : '🖊️'}
                        </button>

                        <button onClick={()=>dispatch(removeTodo(todo.id))}>🚮</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Todos