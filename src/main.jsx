import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Crew from './pages/Crew'
import BebeKit from './pages/BebeKit'
import BebeFamily from './pages/BebeFamily'
import Apply from './pages/Apply'

const router = createBrowserRouter([
 {  path:'/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home />},
      {
        path:'/bebeFamily',
        element: <BebeFamily />
      },
      {
        path:'/crew',
        element: <Crew />
      },
      {
        path:'/crew/apply',
        element: <Apply/>
      },
      {
        path:'/bebekit',
        element: <BebeKit/>
      },
    ]
}
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);