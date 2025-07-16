import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RoleChoose from './pages/RoleChoose'
import Layout from './layouts/Layout'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        element: <Home />,
        path: '/'
      },
      {
        element: <RoleChoose />,
        path: '/role-choose'
      },
      {
        element: <Signin />,
        path: '/signin/:role'
      },
      {
        element: <Signup />,
        path: '/signup/:role'
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
