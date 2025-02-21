import { useState } from 'react'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import { fetchUser } from './store/userSlice'
import { useGetUserQuery } from './store/apiSlice'

function App() {
  const {user, loading, error} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [userId, setUserId] = useState(-1)

  const {data : users, load, err} = useGetUserQuery(1)

  return (
    <>
    <input type="number" value={userId} onChange={(e)=>setUserId(Number(e.target.value))} />
    <button onClick={()=> dispatch(fetchUser(userId))}>Fetch user</button>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    {user && <p>{user.name}</p>}
    
    {load && <p>Loading...</p>}
    {err && <p>Error: {error}</p>}
    {users && <p>{users.name}</p>}

    </>
  )
}

export default App
