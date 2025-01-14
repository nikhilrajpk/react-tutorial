import React from 'react'

function User({username, email}) {
  return (
    <>
        <div className='w-1/2 bg-blue-600 text-center m-auto my-5'>
            <h1 className='text-white text-3xl font-bold'>{username}</h1>
            <p className='text-black'>{email}</p>
        </div>
    </>
  )
}

export default User