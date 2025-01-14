import { useState } from 'react'

import './App.css'
import useUserApi from './hooks/useUserApi';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);


  const {data:userData, loading, error} = useUserApi(count);

  return (
    <div className='w-full h-screen text-white bg-slate-400 text-center items-center py-12'>
      <h1 className='text-3xl m-3 font-bold'>{count}</h1>

      {loading ? (
        <div className="w-1/2 bg-yellow-600 text-center m-auto my-5 p-5">
          <h2>Loading...</h2>
        </div>
      ) : error ? (
        <div className="w-1/2 bg-red-600 text-center m-auto my-5 p-5">
          <h2>Error: {error}</h2>
        </div>
      ) : (
        <div className="w-1/2 bg-blue-600 text-center m-auto my-5 p-5">
          <h1 className="text-white text-3xl font-bold">
            Username: {userData.name || "N/A"}
          </h1>
          <p className="text-black">Email: {userData.email || "N/A"}</p>
        </div>
      )}

      <button className='border-2 p-2 m-2'
        onClick={()=> setCount((prev)=>prev+1)} >+</button> {"   "}

      <button className='border-2 p-2 m-2'
        onClick={()=> setCount((prev)=>prev-1)} >-</button>
    </div>
  )
}

export default App
