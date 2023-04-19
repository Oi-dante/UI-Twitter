import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sparkle } from 'phosphor-react'

import './global.css'

import { Tweet } from './components/Tweets'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/routes'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
