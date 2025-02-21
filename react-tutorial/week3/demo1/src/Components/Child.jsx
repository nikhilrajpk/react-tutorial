import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, inputValue } from '../Store/counterSlice'

function Child() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.count)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <button onClick={()=> dispatch(reset())}>reset</button>
      <input type="number" onChange={(e)=> dispatch(inputValue(Number(e.target.value)))} value={count} />
    </div>
  )
}

export default Child