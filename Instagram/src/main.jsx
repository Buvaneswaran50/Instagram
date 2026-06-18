import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ViewStory from './ViewStory'
import './index.css'
import Profile from './Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/story/:id/:tot',
    element: <ViewStory/>
  },
  {
    path: '/Profile',
    element: <Profile/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)