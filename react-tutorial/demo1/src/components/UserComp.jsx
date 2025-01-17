import React from 'react'

function UserComp({username, email}) {
  console.log('rendering usercomp')
  return (
    <div>
        <h1>username : {username}</h1>
        <p>email : {email}</p>
    </div>
  )
}

export default React.memo(UserComp)