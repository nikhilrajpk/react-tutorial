import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <h1>Not logged in.</h1>

  return (
    <div>
        <h1>Profile</h1>
        <p>Username : {user.username}</p>
        <p>Password : {user.password}</p>
    </div>
  )
}

export default Profile