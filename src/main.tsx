import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RoleChoose from './pages/RoleChoose'
import Layout from './layouts/MainLayout'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import PanelsLayout from './layouts/PanelsLayout'
import StoreOrders from './components/Panels/StoreOrders'
import ManagePackages from './components/Panels/ManagePackages'

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
  },
  {
    element: <PanelsLayout />,
    path: '/panels',
    children: [
      {
        element: <StoreOrders />,
        path: '/panels/admin/Store Orders'
      },
      {
        element: <ManagePackages />,
        path: '/panels/admin/Manage Packages'
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
