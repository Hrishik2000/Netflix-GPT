import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login_Signup from './Login_Signup'
import Browse from './Browse'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';


const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login_Signup/>
    },
    {
        path: '/browse',
        element: <Browse/>
    }
])

const Body = () => {
const dispatch = useDispatch ();

  

onAuthStateChanged(auth, (user) => {
  if (user) {
    //if user sign In or Sign Up
    const{uid, displayName, email,photoURL} = user;
    dispatch(addUser({uid:uid, displayName:displayName, email:email ,photoURL:photoURL}))
    
    
  } else {
    // User is signed out
    dispatch(removeUser())
  }
});


  return (
    <div>
      <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body
