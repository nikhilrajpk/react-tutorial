import React from 'react'

function Counter({label, handleCount, isIncrement}) {
  return (
    <div>
        <button onClick={()=> handleCount(isIncrement)}>{label}</button> {" "}
    </div>
  )
}

export default Counter