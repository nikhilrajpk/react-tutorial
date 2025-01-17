import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './components/about.jsx'
import './index.css'
import App from './App.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/about' element={<About/>} >
        <Route path=':aboutid' element={<About/>} />
      </Route>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
