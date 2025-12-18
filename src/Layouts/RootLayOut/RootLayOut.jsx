import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../../Components/Footer/Footer'
import useAuth from '../../Hooks/useAuth'
import Loading from '../../Components/Loading/Loading'

const RootLayOut = () => {
  const { loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default RootLayOut