import React,{Component, useEffect} from 'react'

// function Form() {
//     // lifecycle methods
//       useEffect(()=>{
//         console.log('mounted')
//         return ()=>{
//           console.log('un mount')
//         }
//       },[])
      
//   return (
//     <p>child component</p>
//     // <div>
//     //     <input type={type} name={name} onChange={(e)=>handleUser(e)} />
//     // </div>
//   )
// }

class Form extends Component{
    componentDidMount(){
        console.log('mounted')
    }
    componentDidUpdate(){
        console.log('updated')
    }
    componentWillUnmount(){
        console.log('unmounted')
    }
        render(){
            return <h1>child</h1>
        }
}

export default Form