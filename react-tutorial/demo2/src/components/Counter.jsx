import React from 'react'

function Counter({handleCounter}) {
  return (
    <div>
        <button onClick={()=>handleCounter(true)}>+</button> {"  "}
        <button onClick={()=>handleCounter(false)}>-</button>
    </div>
  )
}

export default Counter