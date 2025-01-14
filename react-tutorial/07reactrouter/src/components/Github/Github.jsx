
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  // const [data, setData] = useState([])
  // // useEffect(()=>{
  // //   fetch('https://api.github.com/users/nikhilrajpk')
  // //   .then((res) => res.json())
  // //   .then((data) => {
  // //     setData(data)
  // //   })
  // // },[])
  return (
    <div className='flex justify-around w-full h-1/2 bg-blue-500 text-white'>
      <img src={data.avatar_url} />
      <h1>username : {data.login}</h1> 
      <h2>followers : {data.followers}</h2>
    </div>
  )
}

export const githubInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/nikhilrajpk')
  return response.json()
}

export default Github