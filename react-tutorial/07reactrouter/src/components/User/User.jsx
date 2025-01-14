import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='w-full h-screen bg-gray-700 text-white text-center items-center'>User:{userid}</div>
  )
}

export default User