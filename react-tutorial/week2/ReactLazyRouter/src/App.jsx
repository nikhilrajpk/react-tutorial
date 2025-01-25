import React ,{ Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const Home = React.lazy(()=> {
  console.log('loading Home')
  return import('./components/Home')
})
const About = React.lazy(()=>{
  console.log('loading About')
  return import('./components/About')
})
const Contact = React.lazy(()=>{
  console.log('loading Contact')
  return import('./components/Contact')
})

function App() {

  return (
    <div>
      <Router>
      < Suspense fallback={<div>Loading...</div>} >
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/about' element={< About />} />
          <Route path='/contact' element={< Contact />} />
        </Routes>
      </Suspense>
      </Router>
    </div>
  )
}

export default App
