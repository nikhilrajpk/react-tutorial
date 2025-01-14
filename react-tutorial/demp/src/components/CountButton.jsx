import React from 'react'

// function CountButton({incr, decr}) {
//   return (
//     <>
//     <button
//         onClick={()=> {
//             incr()
//         }}
//     >
//         up</button> {"  "}
    
//     <button
//         onClick={()=> {
//             decr()
//         }}
//     >
//         down</button> 
//     </>
//   )
// }

// export default CountButton




function CountButton({handleCount}) {
    console.log('count render');
    
    return (
            <>
            <button
                onClick={()=> {
                    handleCount(true)
                }}
            >
                up</button> {"  "}
            
            <button
                onClick={()=> {
                    handleCount(false)
                }}
            >
                down</button> 
            </>
          )
        }

export default CountButton