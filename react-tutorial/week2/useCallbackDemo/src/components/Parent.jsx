import React, { useState } from "react"
import { useCallback } from "react"

const Child = React.memo(({handleCount}) =>{
    console.log('rendering child')
    return <button onClick={handleCount}>click me</button>
})

export const Parent = () =>{
    
    const [count, setCount] = useState(0)
    const handleCount = useCallback(()=>{
        console.log('button clicked')
    },[])

    return (
        <div>
            <p>count:{count}</p>
            <button onClick={()=>setCount(count + 1)}>increment</button>
            < Child handleCount={handleCount} />
        </div>
    )
}