import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login_Signup from './Login_Signup'
import Content from './Content'

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login_Signup/>
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
