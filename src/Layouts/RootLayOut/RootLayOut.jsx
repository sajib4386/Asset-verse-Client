import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Outlet } from 'react-router'

const RootLayOut = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </div>
  )
}

export default RootLayOut