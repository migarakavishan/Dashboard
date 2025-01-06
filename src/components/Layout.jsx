import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

function Layout() {
  return (
    <div className='flex'>
        <SideBar />
        <div className='w-full ml-16 md:ml-56'>
            <Header/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout