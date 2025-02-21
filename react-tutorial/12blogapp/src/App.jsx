import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import authService from './appwrite/auth'
import Logo from './components/Logo'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import {useDispatch} from 'react-redux'
import {login, logout} from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
      if(userData) dispatch(login({userData}))
      else dispatch(logout())
    })
    .finally(()=> setLoading(false))

  }, [dispatch])

  return !loading ? (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          < Header />
          <main>
            < Outlet />
          </main>
        </div>
        <div className="w-full block">
          <Footer />
        </div>
      </div>
  ) : null
}

export default App
