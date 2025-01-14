import { useState } from 'react'

import './App.css'
import User from './components/User'

function App() {
  
  const [users] = useState([
    { id: 1, username: 'Leanne Graham', email: 'leangraham@abc.com' },
    { id: 2, username: 'Erwin Howell', email: 'ervinhowell@abc.com' },
    { id: 3, username: 'Clementine Bauch', email: 'clementine@abc.com' },
  ]);

  return (
    <div className="w-full h-screen text-white bg-slate-400 text-center items-center py-12">
      <h1 className="text-4xl font-bold mb-8">User List</h1>

      {
        users.map((user)=>(
          < User key={user.id} username={user.username} email={user.email} />
        ))
      }
    </div>
  )
}

export default App
