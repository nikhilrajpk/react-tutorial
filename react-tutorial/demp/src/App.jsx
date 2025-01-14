import { useState,useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountButton from './components/CountButton'
import InputField from './components/InputField'

function App() {
  console.log('home render');
  
  const [count, setCount] = useState(0)
  // function incr(){
  //   setCount(count+1)
  // }
  // function decr(){
  //   setCount(count-1)
  // }

  function handleCount (data) {
    if (data){
      setCount(count+1)
    }else{
      setCount(count-1)
    }
  }

  const [userdata, setUserdata] = useState({
    username : "", 
    email : "",
    password : "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = useCallback( e =>{
    const {name, value} = e.target
    setUserdata({
      ...userdata,
      [name] : value
    })
  },[userdata])


    const [count1, setCount1] = useState(0);

    useEffect(() => {
        console.log("Component Mounted!");

        // Start a timer
        const timer = setInterval(() => {
            setCount1((prevCount) => prevCount + 1);
        }, 1000);

        // Cleanup function (runs on unmount)
        return () => {
            clearInterval(timer);
            console.log("Component Unmounted!");
        };
    }, []); // Empty dependency array ensures it runs only on mount and unmount



  

  return (
    <>
      <h1>Count : {count}</h1>  
      {/* < CountButton incr = {incr} decr = {decr} /> */}
       < CountButton handleCount = {handleCount} />
       <hr />
       <hr />
       <hr />
      <p>{userdata.username}</p>
      <p>{userdata.email}</p>
      <p>{userdata.password}</p>
      < InputField type={'text'} placeholder={'username'} name={'username'} handleChange={handleChange} /> {" "}
      < InputField type={'email'} placeholder={'email'} name={'email'} handleChange={handleChange} /> {" "}
      < InputField type={'password'} placeholder={'password'} name={'password'} handleChange={handleChange} showPassword={showPassword} />
      <button onClick={()=>setShowPassword(!showPassword)}>show</button>
      <br />
      <h1>Timer: {count1}s</h1>
    </>
  )
}

export default App
