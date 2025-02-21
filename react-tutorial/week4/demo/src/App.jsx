import {  useState } from 'react'
import './App.css'
// import { TodoProvider } from './Contexts/TodoContext'
import Child from './Components/Child'
import TodoReact from './Components/TodoReact'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './Store/counterSlice'

function App() {
  // const [todos, setTodos] = useState([])
  // const addTodo = (text)=>{
  //   setTodos((prev)=> [...prev, {id:Date.now(), text : text, completed : false}])
  // }
  // const removeTodo = (id)=>{
  //   setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  // }
  // const updateTodo = (id, text)=>{
  //   setTodos((prev)=> prev.map((todo)=> id === todo.id ? {...todo, text : text }: todo))
  // }
  // const toggleTodo = (id)=>{
  //   setTodos((prev)=> prev.map((todo)=> todo.id === id ? {...todo, completed : !todo.completed }: todo))
  // }
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.count)

  return (
    // <TodoProvider value={{todos, addTodo, removeTodo, updateTodo, toggleTodo}}>
      // < Child />
    // </TodoProvider>
    <>
      <h1>count: {count}</h1>
      <button onClick={()=> dispatch(increment())}>increment</button>
      <button onClick={()=> dispatch(decrement())}>decrement</button>
      <button onClick={()=> dispatch(reset())}>reset</button>
      <TodoReact />
    </>
  )
}

export default App
