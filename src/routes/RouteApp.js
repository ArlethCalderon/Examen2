import React from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from '../Bootstrap/Navbar'
import Login from './pages/Login'


const RouteApp = () => {
  return (
    <div>
    <Navbar/>
    <Navigate path="/login" href="#"  />
    </div>
    
  )
}

export default RouteApp

