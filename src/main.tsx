import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PenguinsPage from './pages/PenguinsPage/PenguinsPage.tsx'
import DealsPage from './pages/DealsPage/DealsPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PenguinsPage />,
    errorElement: <PenguinsPage />
  },
  {
    path: '/penguins',
    element: <PenguinsPage />,
  },
  {
    path: '/deals',
    element: <DealsPage />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
