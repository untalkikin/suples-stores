import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Nosotros from './components/Nosotros.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<NavBar />,
    children:[
      {
        index: true,
        element: <Home/>,
      },
      {
        path:'/Nosotros',
        element: <Nosotros />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
