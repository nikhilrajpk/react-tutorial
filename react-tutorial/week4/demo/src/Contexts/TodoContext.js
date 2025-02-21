import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos : [],
    addTodo : ()=>{},
    removeTodo : ()=>{},
    updateTodo : ()=>{},
    toggleTodo : ()=>{}
})

export const TodoProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext)
}