import { useState } from 'react'
import './App.css'
import HeroBanner from './Components/HeroBanner'
import { EmailProvider } from './Contexts/EmailContext'
import TrendingNow from './Components/TrendingNow'

function App() {
  
  const [email, setEmail] = useState('')
  const emailHandler = (data) =>{
    setEmail(data)
  }
  return (
    <>
      < EmailProvider value={{email, emailHandler}} />
        <div className='bg-black w-full '>
          < HeroBanner />
          < TrendingNow />
        </div>
      <EmailProvider/>
    </>
  )
}

export default App
