import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Content from './Content'

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/content',
        element: <Content/>
    }
])

const Body = () => {
  return (
    <div>
      <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body
