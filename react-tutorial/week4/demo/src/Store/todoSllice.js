import { createSlice, nanoid } from "@reduxjs/toolkit";


export const initialState = {
    todos : []
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState, 
    reducers : {
        addTodo : (state, action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload,
                completed : false
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo : (state, action)=>{
            const todo = state.todos.find((t)=> t.id === action.payload.id)
            if(todo){
                todo.text = action.payload.text
            }
        },
        toggleTodo : (state, action)=>{
            const todo = state.todos.find((t)=> t.id === action.payload.id)
            if(todo){
                todo.completed = !todo.completed
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo, toggleTodo} = todoSlice.actions
export default todoSlice.reducer