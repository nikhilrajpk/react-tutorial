import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import {Home, About, User, Github, Contact } from './components/index.js'
import { githubInfoLoader } from './components/Github/Github.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    < Route path='/' element={ < Layout />}>
      < Route path='' element={ < Home />} />
      < Route path='about' element={ < About />} />
      < Route path='user' element={ < User />} >
        < Route path=':userid' element={ <User />} />
      </Route>
      < Route path='contact' element={ < Contact />} />
      < Route
        loader={githubInfoLoader}
        path='github' element={ < Github />} />
      < Route path='*' element={ <div> Not found</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  < RouterProvider router={router} />
)
