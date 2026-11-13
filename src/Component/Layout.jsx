import React from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
    <NavBar/>  
      <div className='flex'>
        <div>
        <Sidebar />
        </div>
        <div className='w-full'>
        <Outlet/>
        </div>
    </div>
    </div>
  )
}

export default Layout
