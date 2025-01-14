import React from 'react'

export function Counter({handle}) {
  return (
    <>
        <button onClick={()=> handle(true)}>+</button> {"  "}
        <button onClick={()=> handle(false)}>-</button>
    </>
  )
}
