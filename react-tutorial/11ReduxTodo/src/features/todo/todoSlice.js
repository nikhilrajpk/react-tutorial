import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : []
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state, action) =>{
            const todo = {
                id : nanoid(),
                text : action.payload,
                completed : false
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) =>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        toggleTodo : (state, action) =>{
            state.todos = state.todos.map((todo)=>{
                return todo.id === action.payload ? {...todo, completed : !todo.completed} : todo
            })
        },
        updateTodo : (state, action) =>{
            state.todos = state.todos.map((todo)=>{
                return todo.id === action.payload.id ? {...todo, text : action.payload.text} : todo
            })
        }
    }
})


export const {addTodo, removeTodo, toggleTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer