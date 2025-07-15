import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RoleChoose from './pages/RoleChoose'
import Layout from './layouts/Layout'

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
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
