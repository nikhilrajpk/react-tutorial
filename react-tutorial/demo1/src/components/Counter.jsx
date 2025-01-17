import React from 'react'

function Counter({handleCount}) {
  return (
    <>
      <button onClick={()=>handleCount(true)}>+</button>
      <button onClick={()=>handleCount(false)}>-</button>
    </>
  )
}

export default React.memo(Counter)